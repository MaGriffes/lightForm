"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _reactSortable = require("react-sortable");

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SortItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SortItem, _React$Component);

  var _super = _createSuper(SortItem);

  function SortItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SortItem);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  (0, _createClass2["default"])(SortItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", this.props, this.props.children);
    }
  }]);
  return SortItem;
}(_react["default"].Component);

var SortableItem = (0, _reactSortable.sortable)(SortItem);
var _default = SortableItem;
exports["default"] = _default;