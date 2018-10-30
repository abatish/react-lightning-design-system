'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
var ComponentSettings = function (_React$Component) {
  (0, _inherits3.default)(ComponentSettings, _React$Component);

  function ComponentSettings() {
    (0, _classCallCheck3.default)(this, ComponentSettings);
    return (0, _possibleConstructorReturn3.default)(this, (ComponentSettings.__proto__ || (0, _getPrototypeOf2.default)(ComponentSettings)).apply(this, arguments));
  }

  (0, _createClass3.default)(ComponentSettings, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          assetRoot = _props.assetRoot,
          portalClassName = _props.portalClassName,
          portalStyle = _props.portalStyle;

      return { assetRoot: assetRoot, portalClassName: portalClassName, portalStyle: portalStyle };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ComponentSettings;
}(_react2.default.Component);

ComponentSettings.propTypes = {
  assetRoot: _propTypes2.default.string,
  portalClassName: _propTypes2.default.string,
  portalStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  children: _propTypes2.default.node
};
ComponentSettings.childContextTypes = {
  assetRoot: _propTypes2.default.string,
  portalClassName: _propTypes2.default.string,
  portalStyle: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
};
exports.default = ComponentSettings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbXBvbmVudFNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudFNldHRpbmdzIiwicHJvcHMiLCJhc3NldFJvb3QiLCJwb3J0YWxDbGFzc05hbWUiLCJwb3J0YWxTdHlsZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJub2RlIiwiY2hpbGRDb250ZXh0VHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7OztJQUdxQkEsaUI7Ozs7Ozs7Ozs7c0NBY0Q7QUFBQSxtQkFDb0MsS0FBS0MsS0FEekM7QUFBQSxVQUNSQyxTQURRLFVBQ1JBLFNBRFE7QUFBQSxVQUNHQyxlQURILFVBQ0dBLGVBREg7QUFBQSxVQUNvQkMsV0FEcEIsVUFDb0JBLFdBRHBCOztBQUVoQixhQUFPLEVBQUVGLG9CQUFGLEVBQWFDLGdDQUFiLEVBQThCQyx3QkFBOUIsRUFBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtILEtBQUwsQ0FBV0ksUUFBbEI7QUFDRDs7O0VBckI0Q0MsZ0JBQU1DLFM7O0FBQWhDUCxpQixDQUNaUSxTLEdBQVk7QUFDakJOLGFBQVdPLG9CQUFVQyxNQURKO0FBRWpCUCxtQkFBaUJNLG9CQUFVQyxNQUZWO0FBR2pCTixlQUFhSyxvQkFBVUUsTUFITixFQUdjO0FBQy9CTixZQUFVSSxvQkFBVUc7QUFKSCxDO0FBREFaLGlCLENBUVphLGlCLEdBQW9CO0FBQ3pCWCxhQUFXTyxvQkFBVUMsTUFESTtBQUV6QlAsbUJBQWlCTSxvQkFBVUMsTUFGRjtBQUd6Qk4sZUFBYUssb0JBQVVFLE1BSEUsQ0FHTTtBQUhOLEM7a0JBUlJYLGlCIiwiZmlsZSI6IkNvbXBvbmVudFNldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50U2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFzc2V0Um9vdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwb3J0YWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcG9ydGFsU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIH1cblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgYXNzZXRSb290OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBvcnRhbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwb3J0YWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgYXNzZXRSb290LCBwb3J0YWxDbGFzc05hbWUsIHBvcnRhbFN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7IGFzc2V0Um9vdCwgcG9ydGFsQ2xhc3NOYW1lLCBwb3J0YWxTdHlsZSB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG4iXX0=