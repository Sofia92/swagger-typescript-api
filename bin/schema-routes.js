const _ = require('lodash');
const { NameParser } = require('./util/name-parser');
const fs = require('fs');
const path = require('path');
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })
const { typeToTs, network } = require("./util/type-ts");
class SchemaRoutes {
  env_api_Map = new Map();
  refers_Set = new Set();
  namespaceTree;
  nameParser;

  constructor() {
    this.nameParser = new NameParser();
  }


  setNameSpaceTree(namespaceTree) {
    this.namespaceTree = namespaceTree;
  }
  init(paths, envName) {
    const envContent = [];
    this.refers_Set.clear();
    _.forEach(paths, (path_detail, path_url) => {
      // if (path_url.startsWith(`/api/${envName}`)) {
      _.forEach(path_detail, (content, method) => {
        const { parameters, responses, summary } = content;
        const path = _.last(path_url.split(`/api/${envName}`));

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
              ..._.pick(param, ['name', 'in', 'required', 'description']),
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
          let normalizedRef = this.nameParser.parseComplexRef(_.last(this.nameParser.parseRef(meta.responses)));
          const namesJoin = this.nameParser.replaceChactorRef(normalizedRef.split('.').join('_'));
          meta.responses = typeToTs[this.nameParser.parseComplexRef(namesJoin)] || this.nameParser.parseComplexRef(namesJoin) || null;
          this.refers_Set.add(meta.responses)
        }
        envContent.push(meta);
      })
      // }

      // fs
    });
    this.env_api_Map.set(envName, envContent);
    const providers = network[`api/${envName}`];
    const refers = [...this.refers_Set].filter(refer => !!this.namespaceTree[refer]);
    fs.writeFileSync(`./__generated__/${envName}-api.service.ts`,
      eta.render("./service", {
        name: _.upperFirst(envName) + 'APIService',
        functions: envContent,
        refers: refers.join(','),
        providers,
        network: _.camelCase(providers)
      }), 'utf-8');


  }

}
module.exports = {
  SchemaRoutes
}