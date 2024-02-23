const { generateApi, generateTemplates } = require('swagger-typescript-api');
const path = require("path");
const fs = require("fs");

/* NOTE: all fields are optional expect one of `input`, `url`, `spec` */
generateApi({
  name: "edc.ts",
  // set to `false` to prevent the tool from writing to disk
  output: path.resolve(process.cwd(), "./__generated__"),
  url: 'http://bank-web-4560-develop.sy/api/edc/swagger/v1/swagger.json',
  // input: path.resolve(process.cwd(), './foo/swagger.json'),
  // spec: {
  //   swagger: "2.0",
  //   info: {
  //     version: "1.0.0",
  //     title: "Swagger Petstore",
  //   },
  //   // ...
  // },
  templates: path.resolve(process.cwd(), './templates'),
  httpClientType: "fetch", // or "fetch"
  defaultResponseAsSuccess: false,
  generateClient: false,
  generateRouteTypes: true,
  generateResponses: false,
  toJS: false,
  extractRequestParams: false,
  extractRequestBody: false,
  extractEnums: true,
  unwrapResponseData: false,
  prettier: { // By default prettier config is load from your project
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all",
    parser: "typescript",
  },
  defaultResponseType: "void",
  singleHttpClient: true,
  cleanOutput: false,
  enumNamesAsValues: true,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  typePrefix: '',
  typeSuffix: '',
  enumKeyPrefix: '',
  enumKeySuffix: '',
  addReadonly: false,
  sortTypes: false,
  sortRouters: false,
  extractingOptions: {
    requestBodySuffix: ["Payload", "Body", "Input"],
    requestParamsSuffix: ["Params"],
    responseBodySuffix: ["Data", "Result", "Output"],
    responseErrorSuffix: ["Error", "Fail", "Fails", "ErrorData", "HttpError", "BadResponse"],
  },
  /** allow to generate extra files based with this extra templates, see more below */
  extraTemplates: [],
  anotherArrayType: false,
  fixInvalidTypeNamePrefix: "Type",
  fixInvalidEnumKeyPrefix: "Value",
  codeGenConstructs: (constructs) => ({
    ...constructs,
    RecordType: (key, value) => `MyRecord<key, value>`
  }),
  primitiveTypeConstructs: (constructs) => ({
    ...constructs,
    string: {
      'date-time': 'Date'
    }
  }),
  hooks: {
    onCreateComponent: (component) => { },
    onCreateRequestParams: (rawType) => { },
    onCreateRoute: (routeData) => { },
    onCreateRouteName: (routeNameInfo, rawRouteInfo) => { },
    onFormatRouteName: (routeInfo, templateRouteName) => { },
    onFormatTypeName: (typeName, rawTypeName, schemaType) => { },
    onInit: (configuration) => { },
    onPreParseSchema: (originalSchema, typeName, schemaType) => { },
    onParseSchema: (originalSchema, parsedSchema) => { },
    onPrepareConfig: (currentConfiguration) => { },
  }
})
  .then(({ files, configuration }) => {
    files.forEach(({ content, name }) => {
      fs.writeFile(path, content);
    });
  })
  .catch(e => console.error(e))
