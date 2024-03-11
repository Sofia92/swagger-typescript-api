const _ = require('lodash');
const fs = require("fs");
const path = require("path");
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })
const { SchemaRoutes } = require('./schema-routes');
const { SchemaComponentsMap } = require('./schema-components-map');
const prettier = require("prettier");

class CodeGenProcess {
  codeGenConfig;
  routesWalker;
  schemaComponentsMap;
  namespaceTree = {};

  constructor(codeGenConfig) {
    this.codeGenConfig = codeGenConfig;
    this.routesWalker = new SchemaRoutes(codeGenConfig);
    this.schemaComponentsMap = new SchemaComponentsMap(this);
  }

  async init(swaggerSchemas) {
    if (!fs.existsSync(path.resolve(this.codeGenConfig.outputDir))) {
      fs.mkdirSync(this.codeGenConfig.outputDir, { recursive: true });
    }
    this.schemaComponentsMap.clear();
    swaggerSchemas.forEach(swaggerSchema => this.buildNameSpaceTree(swaggerSchema));
    this.routesWalker.setNameSpaceTree(this.namespaceTree, this.schemaComponentsMap);

    swaggerSchemas.forEach(swaggerSchema => this.routesWalker.init(swaggerSchema.paths, swaggerSchema.info));


    Object.keys(this.namespaceTree).forEach((key) => {
      this.loopToGenerateCodes(this.namespaceTree[key]);
    });
    let namespaceStr = ``;

    Object.keys(this.namespaceTree).forEach((name) => namespaceStr += this.namespaceTree[name].context);

    const fileContent = eta.render("./typings", { body: namespaceStr });
    const file = await prettier.format(fileContent, { semi: false, parser: "typescript" });

    fs.writeFileSync(`./${this.codeGenConfig.outputDir}/typings.ts`, file, 'utf-8');
  }

  loopToGenerateCodes(schemaContent) {
    let context = ``;
    if (!schemaContent) return;
    if (schemaContent.hasOwnProperty('componentName')) {

      if (schemaContent.hasOwnProperty('enum')) {
        schemaContent.hasOwnProperty('x-enumNames')
          ? context += this.generateEnums(schemaContent)
          : context += this.generateTypes(schemaContent)
      } else if (schemaContent.type === 'object') {
        context += this.generateInterface(schemaContent);
      };
      schemaContent.context = context;
    } else {
      _.each(schemaContent, (content) => this.loopToGenerateCodes(content));
    }
  }

  buildNameSpaceTree(swaggerSchema) {
    _.each(swaggerSchema.components, (component, componentName) => {
      if (componentName == this.codeGenConfig.schemasKey) {
        _.each(component, (rawTypeData, typeName) => {
          const usageComponent = this.schemaComponentsMap.createComponent(
            this.schemaComponentsMap.createRef(['components', componentName, typeName]
            ),
            rawTypeData
          );
          if (usageComponent) {
            _.set(this.namespaceTree, usageComponent.name, usageComponent);
          }
        })
      }
    });
  }

  generateInterface(schemaContent) {
    const { name, description, properties } = schemaContent;

    let properties_Tpl = [];
    properties.forEach((property) => {
      const { key, value, ref, description } = property;

      properties_Tpl.push({
        key: _parse(key), value: _parse(value), refer: _parse(ref),
        desc: !!description ? '// ' + _trimBlank(description) : ''
      });
    });
    return eta.render("./interface", { description, name: _parse(name), properties: properties_Tpl });
  }

  generateEnums(schemaContent) {
    let properties_Tpl = [];
    [].concat(schemaContent["x-enumNames"])
      .forEach((key, i) => {
        const desc = [].concat(schemaContent["x-enumDescriptions"])[i];
        properties_Tpl.push({ key, value: schemaContent["enum"][i], str_desc: !!desc ? '//' + _trimBlank(desc) : '' });
      });
    return eta.render("./enum", { name: schemaContent.name, properties: properties_Tpl });
  }
  generateTypes(schemaContent) {
    return eta.render("./type", { name: schemaContent.name, properties: schemaContent["enum"] });
  }

}

module.exports = {
  CodeGenProcess,
};

function _parse(name) {
  return !!name ? name.replace(/\+/g, '_') : name;
}

function _trimBlank(string) {
  return string.replace(/[\r\n]/g, '')
}