
var config = module.exports;

config['browser-all'] = {
  autoRun: false,
  environment: 'browser',
  rootPath: '',
  libs: [
    'js/vendor/require.js'
  ],
  //resources:['js/utils.js'],
  sources: [
    'js/*.js'
  ],
  tests: ['test/*-tests.js'],
  extensions: [require('buster-amd')]
};


//exports["Node tests"] = {
//    environment: "node",
//    sources: ["lib/*.js"],
//    tests: ["test/*.js"],
//    extensions: [require("buster-lint")],
//    "buster-lint": require("./autolint")
//};
//
//exports["Browser tests"] = {
//    environment: "browser",
//    libs: ["node_modules/underscore/underscore.js"],
//    sources: ["lib/*.js"],
//    tests: ["test/*.js", "test/browser/*.js"],
//    extensions: [require("buster-lint")],
//    "buster-lint": require("./autolint")
//};