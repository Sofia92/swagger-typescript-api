const http = require('http');
const converter = require('swagger2openapi');
const { swaggerSchemaWalker } = require('./schema-walkers');
const { CodeGenProcess } = require('./code-gen-process');
const { SchemaComponentsMap } = require('./schema-components-map');
const _ = require('lodash');
const fs = require("fs");
const path = require("path");
const ts = require('typescript');
const { Eta } = require("eta");
const eta = new Eta({ views: path.join(__dirname, "../templates") })

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
  }
];
const componentsHandle = new SchemaComponentsMap();

const generator = new CodeGenProcess();

(async () => {
  const swaggerSchemas = await Promise.all(envs.map(env => fetchSourceJSON(env)));
  generator.init(swaggerSchemas);
})()

// envs.forEach(async (env) => {
//   try {
//     const swaggerSchema = await fetchSourceJSON(env);
//     generator.init(swaggerSchema);
//   } catch (error) {
//     console.log("Error: " + error);
//   }

//   // swaggerSchemaWalker(swagger.components.schemas, env.name);
//   // routesHandle.init(swagger.paths, env.name);
// });

function fetchSourceJSON(env) {
  return new Promise((resolve, reject) => {
    http.get(env.path, (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => res += chunk);

      let res = '';
      response.on('end', () => {
        const data = JSON.parse(res);
        Object.assign(data.info, { env: env.name });
        resolve(data);
      });

    }).on("error", (error) => {
      console.log("Error: " + error.message);
      reject(error);
    });
  });

}
