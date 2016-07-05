'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_React$Component) {
  (0, _inherits3.default)(Radio, _React$Component);

  function Radio() {
    (0, _classCallCheck3.default)(this, Radio);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Radio).apply(this, arguments));
  }

  (0, _createClass3.default)(Radio, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label']);

      var radioClassNames = (0, _classnames2.default)(className, 'slds-radio');
      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({ className: radioClassNames }, props),
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'radio' }, props)),
        _react2.default.createElement('span', { className: 'slds-radio--faux' }),
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label' },
          label
        )
      );
    }
  }]);
  return Radio;
}(_react2.default.Component);

exports.default = Radio;


Radio.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsSzs7Ozs7Ozs7Ozs2QkFFVjtBQUFBLG1CQUNnQyxLQUFLLEtBRHJDO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNzQixLQUR0Qjs7QUFFUCxVQUFNLGtCQUFrQiwwQkFBVyxTQUFYLEVBQXNCLFlBQXRCLENBQXhCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQU8sV0FBWSxlQUFuQixJQUEwQyxLQUExQztRQUNFLGdFQUFPLE1BQUssT0FBWixJQUF5QixLQUF6QixFQURGO1FBRUUsd0NBQU0sV0FBVSxrQkFBaEIsR0FGRjtRQUdFO0FBQUE7VUFBQSxFQUFNLFdBQVUsMEJBQWhCO1VBQTZDO0FBQTdDO0FBSEYsT0FERjtBQU9EOzs7RUFaZ0MsZ0JBQU0sUzs7a0JBQXBCLEs7OztBQWdCckIsTUFBTSxTQUFOLEdBQWtCO0FBQ2hCLGFBQVcsaUJBQVUsTUFETDtBQUVoQixTQUFPLGlCQUFVLE1BRkQ7QUFHaEIsUUFBTSxpQkFBVSxNQUhBO0FBSWhCLFNBQU8saUJBQVUsR0FKRDtBQUtoQixXQUFTLGlCQUFVLElBTEg7QUFNaEIsa0JBQWdCLGlCQUFVO0FBTlYsQ0FBbEIiLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJhZGlvQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1yYWRpbycpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgcmFkaW9DbGFzc05hbWVzIH0gey4uLiBwcm9wc30+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1yYWRpby0tZmF1eCc+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCc+eyBsYWJlbCB9PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG5cbn1cblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=