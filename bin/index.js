#! /usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const { CodeGenProcess } = require('./code-gen-process');

let codeGenConfig = fs.readFileSync(path.resolve('.swagger-api.config.json'), { encoding: 'utf8' });
if (!codeGenConfig) {
  console.error('项目根目录下未找到.swagger-api.config.json文件，请前往配置')
  return;
}
codeGenConfig = JSON.parse(codeGenConfig);

const generator = new CodeGenProcess(codeGenConfig);

(async () => {
  const swaggerSchemas = await Promise.all(codeGenConfig.apiJsons.map(env => fetchSourceJSON(env)));
  generator.init(swaggerSchemas);
})()

function fetchSourceJSON(env) {
  return new Promise((resolve, reject) => {
    http.get(env.path, (response) => {
      response.setEncoding('utf8');
      response.on('data', (chunk) => res += chunk);

      let res = '';
      response.on('end', () => {
        const data = JSON.parse(res);
        Object.assign(data.info, { name: env.name, network: env.network });
        resolve(data);
      });

    }).on("error", (error) => {
      console.log("Error: " + error.message);
      reject(error);
    });
  });

}
