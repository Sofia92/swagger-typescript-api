const typeToTs = {
  'array': '[]',
  'object': 'any',
  'boolean': 'boolean',
  'string': 'string',
  'integer': 'number',
  'datetime': 'string',
  'System.String': 'string',
  'System.Int64': 'number',
  'System.Int32': 'number',
  'System.Object': 'any',
  'System_String': 'string',
  'System_Int64': 'number',
  'System_Int32': 'number',
  'System_Object': 'any',
  'System.String[]': 'string[]',
  'System.Int64[]': 'number[]',
  'System.Int32[]': 'number[]',
  'System.Object[]': 'any[]',
  'System_String[]': 'string[]',
  'System_Int64[]': 'number[]',
  'System_Int32[]': 'number[]',
  'System_Object[]': 'any[]'
}
const network = {
  'api/platform': 'PlatformNetworkService',
  'api/edc': 'EDCNetworkService',
  'api/ir': 'IRNetworkService',
  'api/search': 'SearchNetworkService',
  'api/stat': 'StatNetworkService',
  'api/dsr': 'DiseaseResearchNetworkService',
  'api/collection': 'CollectionNetworkService',
}
module.exports = {
  typeToTs, network
};
