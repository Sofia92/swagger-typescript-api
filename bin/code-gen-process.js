const _ = require('lodash');
const converter = require('swagger2openapi');
const fs = require("fs");
const path = require("path");
const ts = require('typescript');
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })
const { SchemaWalker } = require('./schema-walker');
const { SchemaRoutes } = require('./schema-routes');
const { SchemaComponentsMap } = require('./schema-components-map');

class CodeGenProcess {
  swagger;
  schemaWalker;
  routesWalker;
  schemaComponentsMap;
  namespaceTree = {};

  constructor() {
    this.schemaWalker = new SchemaWalker(this);
    this.routesWalker = new SchemaRoutes(this);
    this.schemaComponentsMap = new SchemaComponentsMap(this);
  }

  init(swaggerSchemas) {
    const dir = '__generated__';
    if (!fs.existsSync(path.resolve(dir))) {
      fs.mkdirSync(dir, { recursive: true });
    }
    this.schemaComponentsMap.clear();
    swaggerSchemas.forEach(swaggerSchema => this.buildNameSpaceTree(swaggerSchema));
    this.schemaWalker.setNameSpaceTree(this.namespaceTree);
    this.routesWalker.setNameSpaceTree(this.namespaceTree);
    
    swaggerSchemas.forEach(swaggerSchema => this.routesWalker.init(swaggerSchema.paths, swaggerSchema.info.env));


    Object.keys(this.namespaceTree).forEach((key, name) => {
      this.loop(this.namespaceTree[key]);
    });
    let namespaceStr = ``;

    Object.keys(this.namespaceTree).forEach((name) => {
      const c = this.namespaceTree[name].context;
      namespaceStr += c;
    })

    fs.writeFileSync('./__generated__/typings.ts', eta.render("./typings", { body: namespaceStr }), 'utf-8');
  }

  loop(schemaContent) {
    let context = ``;
    if (!schemaContent) return;
    if (schemaContent.hasOwnProperty('componentName')) {
      if (schemaContent.type === 'object') {
        context += this.generateInterface(schemaContent);
      };
      if (schemaContent.type === 'integer' && schemaContent.hasOwnProperty('enum')) {
        schemaContent.hasOwnProperty('x-enumNames')
          ? context += this.generateEnums(schemaContent)
          : context += this.generateTypes(schemaContent)
      }
      schemaContent.context = context;
    } else {
      _.each(schemaContent, (content) => {
        this.loop(content)
      })
    }
  }

  buildNameSpaceTree(swaggerSchema) {
    _.each(swaggerSchema.components, (component, componentName) =>
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
    );
  }

  generateInterface(schemaContent) {
    const { name, description, properties } = schemaContent;

    let properties_Tpl = [];
    properties.forEach((property) => {
      const { key, value, $ref, ref, description } = property;

      let refer = null;
      if (!!$ref) {
        refer = ref;
        // refer = $ref.includes('[[') ?
        //   $ref.match(/(?<=\[{2})(.+?)(?=\s*,)/)[0] :
        //   $ref.replace('#/components/schemas/', '');
        // refer = _nameToEn(refer);
      }

      // if (!!items && !!items['type']) {
      //   refer = normalizedType[items['type']] || items['type'];
      // }
      properties_Tpl.push({
        key: _parse(key), value: _parse(value), refer: _parse(refer),
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
function _nameToEn(name) {
  return name.replace(/\.|\+|\,|\`|\[|\]/g, '_');
}
function _parse(name) {
  return !!name ? name.replace(/\+/g, '_') : name;
}

function _trimBlank(string) {
  return string.replace(/[\r\n]/g, '')
}