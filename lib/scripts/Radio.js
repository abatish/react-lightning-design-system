'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function Radio(_ref) {
  var className = _ref.className,
      label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label', 'name', 'value', 'checked', 'defaultChecked']);

  var radioClassNames = (0, _classnames2.default)(className, 'slds-radio');
  return _react2.default.createElement(
    'label',
    { className: radioClassNames },
    _react2.default.createElement('input', (0, _extends3.default)({
      type: 'radio',
      name: name,
      value: value,
      checked: checked,
      defaultChecked: defaultChecked
    }, props)),
    _react2.default.createElement('span', { className: 'slds-radio--faux' }),
    _react2.default.createElement(
      'span',
      { className: 'slds-form-element__label' },
      label
    )
  );
};

Radio.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};

exports.default = Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJwcm9wcyIsInJhZGlvQ2xhc3NOYW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsT0FBMEU7QUFBQSxNQUF2RUMsU0FBdUUsUUFBdkVBLFNBQXVFO0FBQUEsTUFBNURDLEtBQTRELFFBQTVEQSxLQUE0RDtBQUFBLE1BQXJEQyxJQUFxRCxRQUFyREEsSUFBcUQ7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE9BQXdDLFFBQXhDQSxPQUF3QztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFaQyxLQUFZOztBQUN0RixNQUFNQyxrQkFBa0IsMEJBQVdQLFNBQVgsRUFBc0IsWUFBdEIsQ0FBeEI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVlPLGVBQW5CO0FBQ0U7QUFDRSxZQUFLLE9BRFA7QUFFRSxZQUFPTCxJQUZUO0FBR0UsYUFBUUMsS0FIVjtBQUlFLGVBQVVDLE9BSlo7QUFLRSxzQkFBaUJDO0FBTG5CLE9BTU9DLEtBTlAsRUFERjtBQVNFLDRDQUFNLFdBQVUsa0JBQWhCLEdBVEY7QUFVRTtBQUFBO0FBQUEsUUFBTSxXQUFVLDBCQUFoQjtBQUE2Q0w7QUFBN0M7QUFWRixHQURGO0FBY0QsQ0FoQkQ7O0FBa0JBRixNQUFNUyxTQUFOLEdBQWtCO0FBQ2hCUixhQUFXUyxvQkFBVUMsTUFETDtBQUVoQlQsU0FBT1Esb0JBQVVDLE1BRkQ7QUFHaEJSLFFBQU1PLG9CQUFVQyxNQUhBO0FBSWhCUCxTQUFPTSxvQkFBVUUsU0FBVixDQUFvQixDQUN6QkYsb0JBQVVDLE1BRGUsRUFFekJELG9CQUFVRyxNQUZlLENBQXBCLENBSlM7QUFRaEJSLFdBQVNLLG9CQUFVSSxJQVJIO0FBU2hCUixrQkFBZ0JJLG9CQUFVSTtBQVRWLENBQWxCOztrQkFZZWQsSyIsImZpbGUiOiJSYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFJhZGlvID0gKHsgY2xhc3NOYW1lLCBsYWJlbCwgbmFtZSwgdmFsdWUsIGNoZWNrZWQsIGRlZmF1bHRDaGVja2VkLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHJhZGlvQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1yYWRpbycpO1xuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9eyByYWRpb0NsYXNzTmFtZXMgfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgbmFtZT17IG5hbWUgfVxuICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgY2hlY2tlZD17IGNoZWNrZWQgfVxuICAgICAgICBkZWZhdWx0Q2hlY2tlZD17IGRlZmF1bHRDaGVja2VkIH1cbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXJhZGlvLS1mYXV4JyAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICApO1xufTtcblxuUmFkaW8ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvO1xuIl19