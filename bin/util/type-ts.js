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
module.exports = {
  typeToTs
};
