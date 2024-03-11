const _ = require('lodash');
const { NameParser } = require('./util/name-parser');
const fs = require('fs');
const path = require('path');
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })
const { typeToTs } = require("./util/type-ts");
const prettier = require("prettier");
class SchemaRoutes {
  codeGenConfig;
  env_api_Map = new Map();
  refers_Set = new Set();
  namespaceTree;
  schemaComponentsMap;
  nameParser;

  constructor(codeGenConfig) {
    this.codeGenConfig = codeGenConfig;
    this.nameParser = new NameParser();
  }


  setNameSpaceTree(namespaceTree, schemaComponentsMap) {
    this.namespaceTree = namespaceTree;
    this.schemaComponentsMap = schemaComponentsMap;
  }
  async init(paths, env) {
    const envContent = [], { name, network } = env;
    this.refers_Set.clear();
    _.forEach(paths, (path_detail, path_url) => {
      _.forEach(path_detail, (content, method) => {
        const { parameters, responses, summary } = content;
        const path = _.last(path_url.split(`/api/${name}`));

        const meta = {
          name: _.upperFirst(method + _.camelCase(path)),
          path,
          method,
          summary: _.camelCase(summary),
          responses: _.get(responses, [200, 'content', 'application/json', 'schema', '$ref'])
        }
        if (parameters?.length) {
          const required = [], unRequired = [];
          let queries = [];
          parameters.forEach(param => {
            const type = _.get(param, ['schema', 'type']);
            const attr = {
              ..._.pick(param, ['name', 'in', 'required']),
              description: _.camelCase(param.description),
              type: type ? typeToTs[type] : null
            }
            attr.required ? required.push(attr) : unRequired.push(attr);
            if (param.in == 'path') {
              meta.path = meta.path.replace(`{${param.name}}`, '${' + param.name + '}');
            }
            if (param.in == 'query') {
              queries.push(`${param.name}=` + '${' + param.name + '}');
            }
          });
          if (queries.length) {
            meta.path = meta.path + '?' + _.join(queries, '&');
            queries = [];
          }
          meta.parameters = required.concat(unRequired);
        }

        if (meta.responses) {
          let normalizedRef = this.schemaComponentsMap.parseComplexRef(_.last(this.nameParser.parseRef(meta.responses)));
          const typings = this.schemaComponentsMap.get(normalizedRef);
          meta.responses = typings?.name || null;
          this.refers_Set.add(meta.responses)
        }
        envContent.push(meta);
      })

    });
    this.env_api_Map.set(name, envContent);
    const refers = [...this.refers_Set].filter(refer => !!this.namespaceTree[refer]);
    const fileContent = eta.render("./service", {
      name: _.upperFirst(name) + 'APIService',
      functions: envContent,
      refers: refers.join(','),
      providers: network,
      network: _.camelCase(network)
    })

    const file = await prettier.format(fileContent, { semi: false, parser: "typescript" });
    fs.writeFileSync(`./${this.codeGenConfig.outputDir}/${name}-api.service.ts`, file, 'utf-8');

  }

}
module.exports = {
  SchemaRoutes
}