"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
var _util = require("util");var _util2 = _interopRequireDefault(_util);
var _logUpdate = require("log-update");var _logUpdate2 = _interopRequireDefault(_logUpdate);
var _indent = require("./indent");var _indent2 = _interopRequireDefault(_indent);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}


var INDENT = "  ";var 




Console = function () {





  function Console(opts) {_classCallCheck(this, Console);

    if (!opts) opts = {};


    Object.defineProperty(this, "level", { value: opts.level || 0, writable: true });
    Object.defineProperty(this, "updatable", { value: false, writable: true });}_createClass(Console, [{ key: "log", value: function log() 





    {
      if (this.updatable) {
        _logUpdate2.default.done();
        this.updatable = false;}for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}


      (0, _logUpdate2.default)((0, _indent2.default)(args.join(" "), this.level, INDENT));
      _logUpdate2.default.done();} }, { key: "dir", value: function dir(





    obj) {
      this.log(_util2.default.inspect(obj));} }, { key: "info", value: function info() 





    {
      this.log.apply(this, arguments);} }, { key: "print", value: function print() 





    {
      _logUpdate2.default.done();for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      (0, _logUpdate2.default)((0, _indent2.default)(args.join(" "), this.level, INDENT));
      this.updatable = true;} }, { key: "update", value: function update() 





    {for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
      (0, _logUpdate2.default)((0, _indent2.default)(args.join(" "), this.level, INDENT));
      this.updatable = true;} }, { key: "confirm", value: function confirm() 





    {
      this.update.apply(this, arguments);
      _logUpdate2.default.done();
      this.updatable = false;} }, { key: "clear", value: function clear() 





    {
      _logUpdate2.default.clear();} }, { key: "error", value: function error() 





    {for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      _logUpdate2.default.stderr((0, _indent2.default)(args.join(" "), this.level, INDENT));
      _logUpdate2.default.stderr.done();} }]);return Console;}();exports.default = Console;