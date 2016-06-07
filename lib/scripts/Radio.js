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
        { className: radioClassNames },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsSzs7Ozs7Ozs7Ozs2QkFFVjtBQUFBLG1CQUNnQyxLQUFLLEtBRHJDO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNzQixLQUR0Qjs7QUFFUCxVQUFNLGtCQUFrQiwwQkFBVyxTQUFYLEVBQXNCLFlBQXRCLENBQXhCO0FBQ0EsYUFDRTtBQUFBO1FBQUEsRUFBTyxXQUFZLGVBQW5CO1FBQ0UsZ0VBQU8sTUFBSyxPQUFaLElBQXlCLEtBQXpCLEVBREY7UUFFRSx3Q0FBTSxXQUFVLGtCQUFoQixHQUZGO1FBR0U7QUFBQTtVQUFBLEVBQU0sV0FBVSwwQkFBaEI7VUFBNkM7QUFBN0M7QUFIRixPQURGO0FBT0Q7OztFQVpnQyxnQkFBTSxTOztrQkFBcEIsSzs7O0FBZ0JyQixNQUFNLFNBQU4sR0FBa0I7QUFDaEIsYUFBVyxpQkFBVSxNQURMO0FBRWhCLFNBQU8saUJBQVUsTUFGRDtBQUdoQixRQUFNLGlCQUFVLE1BSEE7QUFJaEIsU0FBTyxpQkFBVSxHQUpEO0FBS2hCLFdBQVMsaUJBQVUsSUFMSDtBQU1oQixrQkFBZ0IsaUJBQVU7QUFOVixDQUFsQiIsImZpbGUiOiJSYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHJhZGlvQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1yYWRpbycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHJhZGlvQ2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgeyAuLi5wcm9wcyB9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXJhZGlvLS1mYXV4Jz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUmFkaW8ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuIl19