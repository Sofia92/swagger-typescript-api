const _ = require('lodash');

class SchemaRoutes {
  methods = new Set();

  init(paths, envName) {
    _.forEach(paths, (path_detail, path_url) => {
      if (path_url.startsWith(`/api/${envName}`)) {
        _.forEach(path_detail, (content, method) => {
          const { parameters, responses, summary } = content;
          const meta = {
            path: path_url,
            method,
            summary: summary,
            parameters,
            responses: _.get(responses, [200, 'content', 'application/json', 'schema', '$ref'])
          }
          this.methods.add(meta);
        })
      }
    });
    console.log(this.methods);
  }

}
module.exports = {
  SchemaRoutes
}