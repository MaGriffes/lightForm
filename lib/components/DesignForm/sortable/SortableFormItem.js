"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/lib/form/style/css");

var _form = _interopRequireDefault(require("antd/lib/form"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _reactSortable = require("react-sortable");

var _react = _interopRequireDefault(require("react"));

require("./index.less");

var _excluded = ["title", "isRequired", "regex", "regexError", "labelAlign", "removeComponent", "activeControlsKey", "keys", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SortFormItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SortFormItem, _React$Component);

  var _super = _createSuper(SortFormItem);

  function SortFormItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SortFormItem);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(SortFormItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          isRequired = _this$props.isRequired,
          regex = _this$props.regex,
          regexError = _this$props.regexError,
          labelAlign = _this$props.labelAlign,
          removeComponent = _this$props.removeComponent,
          activeControlsKey = _this$props.activeControlsKey,
          keys = _this$props.keys,
          style = _this$props.style,
          other = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_form["default"].Item, (0, _extends2["default"])({}, other, {
        labelAlign: labelAlign || 'left',
        label: title,
        name: title,
        rules: [{
          required: isRequired,
          message: '该字段为必填项!'
        }, {
          pattern: new RegExp(regex),
          message: regexError
        }],
        className: activeControlsKey === keys ? 'formItemContainerActive' : 'formItemContainer',
        style: _objectSpread(_objectSpread({}, style), {}, {
          padding: '8px 12px'
        })
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "delIcon",
        onClick: removeComponent
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://images.weserv.nl/?url=https://linkhub-dev.oss-cn-hangzhou.aliyuncs.com/paas/static/low_code/remove.png",
        alt: ""
      })), this.props.children);
    }
  }]);
  return SortFormItem;
}(_react["default"].Component);

var SortableFormItem = (0, _reactSortable.sortable)(SortFormItem);
var _default = SortableFormItem;
exports["default"] = _default;