module.exports = {
  notifier: {
    module: require('yapi-plugin-notifier/client.js'),
    options: { host: 'http://localhost:3000' }
  },
  'interface-oauth2-token': {
    module: require('yapi-plugin-interface-oauth2-token/client.js'),
    options: null
  },
  'add-user': { module: require('yapi-plugin-add-user/client.js'), options: null },
  'pl-auto-test': {
    module: require('yapi-plugin-pl-auto-test/client.js'),
    options: { host: 'http://localhost:3000' }
  },
  'api-watch': { module: require('yapi-plugin-api-watch/client.js'), options: null },
  'import-swagger-customize': {
    module: require('yapi-plugin-import-swagger-customize/client.js'),
    options: null
  },
  'export-schema': { module: require('yapi-plugin-export-schema/client.js'), options: null },
  'import-postman': { module: require('exts/yapi-plugin-import-postman/client.js'), options: null },
  'import-har': { module: require('exts/yapi-plugin-import-har/client.js'), options: null },
  'advanced-mock': { module: require('exts/yapi-plugin-advanced-mock/client.js'), options: null },
  'import-swagger': { module: require('exts/yapi-plugin-import-swagger/client.js'), options: null },
  statistics: { module: require('exts/yapi-plugin-statistics/client.js'), options: null },
  'export-data': { module: require('exts/yapi-plugin-export-data/client.js'), options: null },
  'gen-services': { module: require('exts/yapi-plugin-gen-services/client.js'), options: null },
  'export-swagger2-data': {
    module: require('exts/yapi-plugin-export-swagger2-data/client.js'),
    options: null
  },
  'import-yapi-json': {
    module: require('exts/yapi-plugin-import-yapi-json/client.js'),
    options: null
  },
  wiki: { module: require('exts/yapi-plugin-wiki/client.js'), options: null },
  'swagger-auto-sync': {
    module: require('exts/yapi-plugin-swagger-auto-sync/client.js'),
    options: null
  }
};
