const path = require("path");
const fs = require("fs");
const { keys } = require("lodash");
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })
module.exports = {
  swaggerSchemaWalker
}

function swaggerSchemaWalker(schemas, fileName) {
  let context = ``; const domains = new Set();
  keys(schemas).forEach((schema, i) => {
    const schemaContent = schemas[schema];
    schemaContent.schema_name = schema.includes('[[')
      ? schema.match(/(?<=\[{2})(.+?)(?=\s*,)/)[0]
      : schema;
    schemaContent.schema_name = _nameToEn(schemaContent.schema_name);
    if (!domains.has(schemaContent.schema_name) && schemaContent.type === 'object') {
      context += generateInterface(schemaContent);
    }
    if (schemaContent.type === 'integer'
      && schemaContent.hasOwnProperty('enum')
    ) {
      schemaContent.hasOwnProperty('x-enumNames')
        ? context += generateEnums(schemaContent)
        : context += generateTypes(schemaContent)
    }
    domains.add(schemaContent.schema_name);

    const dir_models = '__generated__/models';
    if (!fs.existsSync(path.resolve(dir_models))) {
      fs.mkdirSync(dir_models, { recursive: true });
    }
    fs.writeFileSync(`${dir_models}/${fileName}.ts`,
      eta.render("./typings", { body: context }), 'utf-8');
  });
}

function generateInterface(schemaContent) {
  const {
    schema_name,
    description,
    properties
  } = schemaContent;
  let properties_Tpl = [];
  Object.keys(properties || {}).forEach((key, i) => {
    if (!properties[key]) return;
    const { type, items, description: property_desc } = properties[key];
    const normalizedType = {
      'array': '[]',
      'integer': 'number',
      'undefined': 'null',
      'object': 'any'
    };
    const str_type = normalizedType[type] || type,
      str_desc = !!property_desc ? '// ' + _trimBlank(property_desc) : '';
    let refer = null;
    if (!!items && !!items['$ref']) {
      refer = items['$ref'].includes('[[') ?
        items['$ref'].match(/(?<=\[{2})(.+?)(?=\s*,)/)[0] :
        items['$ref'].replace('#/components/schemas/', '');
      refer = _nameToEn(refer);
    }

    if (!!items && !!items['type']) {
      refer = normalizedType[items['type']] || items['type'];
    }
    properties_Tpl.push({ key, refer, str_type, str_desc });
  });
  return eta.render("./interface", { description, name: schema_name, properties: properties_Tpl });
}

function generateEnums(schemaContent) {
  let properties_Tpl = [];
  [].concat(schemaContent["x-enumNames"])
    .forEach((key, i) => {
      const desc = [].concat(schemaContent["x-enumDescriptions"])[i];

      properties_Tpl.push({ key, value: schemaContent["enum"][i], str_desc: !!desc ? '//' + _trimBlank(desc) : '' });
    });
  return eta.render("./enum", { name: schemaContent.schema_name, properties: properties_Tpl });
}
function generateTypes(schemaContent) {
  return eta.render("./type", { name: schemaContent.schema_name, properties: schemaContent["enum"] });
}

function _nameToEn(name) {
  return name.replace(/\.|\+|\,|\`|\[|\]/g, '_');
}

function _trimBlank(string) {
  return string.replace(/[\r\n]/g, '')
}