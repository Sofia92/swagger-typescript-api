const http = require('http');
const { SchemaRoutes } = require('./schema-routes');
const { swaggerSchemaWalker } = require('./schema-walker');
const _ = require('lodash');

const envs = [
  { name: "platform", path: 'http://bank-web-4560-develop.sy/api/platform/swagger/v1/swagger.json' },
  {
    name: "edc",
    path: 'http://bank-web-4560-develop.sy/api/edc/swagger/v1/swagger.json'
  },
  {
    name: "ir",
    path: 'http://bank-web-4560-develop.sy/api/ir/swagger/ir/swagger.json'
  },
  {
    name: "search",
    path: 'http://bank-web-4560-develop.sy/api/search/swagger/search/swagger.json'
  },
  {
    name: "stat",
    path: 'http://bank-web-4560-develop.sy/api/stat/swagger/stat/swagger.json'
  },
  {
    name: "dsr",
    path: 'http://bank-web-4560-develop.sy/api/dsr/swagger/v1/swagger.json'
  },
  {
    name: "collection",
    path: 'http://bank-web-4560-develop.sy/api/collection/swagger/collection/swagger.json'
  },
  {
    name: "cockpit",
    path: 'http://bank-web-4560-develop.sy/api/cockpit/swagger/cockpit/swagger.json'
  }
];
const routesHandle = new SchemaRoutes();
envs.forEach((env) => {
  fetchSourceJSON(env)
    .then(swagger => {
      swaggerSchemaWalker(swagger.components.schemas, env.name);
      routesHandle.init(swagger.paths, env.name);
    })
    .catch(error => {
      console.log("Error: " + error);
    });
});

function fetchSourceJSON(env) {
  return new Promise((resolve, reject) => {
    http.get(env.path, (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => res += chunk);

      let res = '';
      response.on('end', () => {
        const {
          info: { title, version },
          paths,
          components
        } = JSON.parse(res);
        resolve({
          title,
          version,
          paths,
          components
        });
      });

    }).on("error", (error) => {
      console.log("Error: " + error.message);
      reject(error);
    });
  });

}
