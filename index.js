"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConfig = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getConfig = function getConfig() {
  var config = {
    buttonStyle: ['PRIMARY', 'TEXT_ONLY']
  };
  return config;
};

exports.getConfig = getConfig;

var Button = function Button(props) {
  var text = props.children;
  var onClick = props.onClick,
      config = props.config;

  var _useState = (0, _react.useState)('TEXT_ONLY'),
      _useState2 = _slicedToArray(_useState, 2),
      buttonStyle = _useState2[0],
      setButtonStyle = _useState2[1];

  (0, _react.useEffect)(function () {
    if (config) {
      checkButtonStyleConfig(config);
    }
  }, [config]);

  var checkButtonStyleConfig = function checkButtonStyleConfig(config) {
    var buttonStyledHolder = config && config.buttonStyle || null;

    if (buttonStyledHolder) {
      setButtonStyle(buttonStyledHolder);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(Container, {
    onClick: onClick,
    buttonStyle: buttonStyle
  }, /*#__PURE__*/_react["default"].createElement(ButtonContainer, {
    buttonStyle: buttonStyle
  }, text));
};

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    \n"])));

var ButtonContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #d5d6d8;\n    background-color: ", ";\n    width: calc(100% - 4px);\n    margin: auto;\n    height: 54px;\n    border-radius: 27px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ", ";\n    font-weight: bold;\n    cursor: pointer;\n"])), function (props) {
  return props.buttonStyle === 'PRIMARY' ? '#d5d6d8' : 'white';
}, function (props) {
  return props.buttonStyle === 'PRIMARY' ? 'white' : 'black';
});

var _default = Button;
exports["default"] = _default;
