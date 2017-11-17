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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJwcm9wcyIsInJhZGlvQ2xhc3NOYW1lcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsT0FBMEU7QUFBQSxNQUF2RUMsU0FBdUUsUUFBdkVBLFNBQXVFO0FBQUEsTUFBNURDLEtBQTRELFFBQTVEQSxLQUE0RDtBQUFBLE1BQXJEQyxJQUFxRCxRQUFyREEsSUFBcUQ7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeENDLE9BQXdDLFFBQXhDQSxPQUF3QztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFaQyxLQUFZOztBQUN0RixNQUFNQyxrQkFBa0IsMEJBQVdQLFNBQVgsRUFBc0IsWUFBdEIsQ0FBeEI7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFPLFdBQVlPLGVBQW5CO0FBQ0U7QUFDRSxZQUFLLE9BRFA7QUFFRSxZQUFPTCxJQUZUO0FBR0UsYUFBUUMsS0FIVjtBQUlFLGVBQVVDLE9BSlo7QUFLRSxzQkFBaUJDO0FBTG5CLE9BTU9DLEtBTlAsRUFERjtBQVNFLDRDQUFNLFdBQVUsa0JBQWhCLEdBVEY7QUFVRTtBQUFBO0FBQUEsUUFBTSxXQUFVLDBCQUFoQjtBQUE2Q0w7QUFBN0M7QUFWRixHQURGO0FBY0QsQ0FoQkQ7O0FBa0JBRixNQUFNUyxTQUFOLEdBQWtCO0FBQ2hCUixhQUFXLG9CQUFVUyxNQURMO0FBRWhCUixTQUFPLG9CQUFVUSxNQUZEO0FBR2hCUCxRQUFNLG9CQUFVTyxNQUhBO0FBSWhCTixTQUFPLG9CQUFVTyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVRCxNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBSlM7QUFRaEJQLFdBQVMsb0JBQVVRLElBUkg7QUFTaEJQLGtCQUFnQixvQkFBVU87QUFUVixDQUFsQjs7a0JBWWViLEsiLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBSYWRpbyA9ICh7IGNsYXNzTmFtZSwgbGFiZWwsIG5hbWUsIHZhbHVlLCBjaGVja2VkLCBkZWZhdWx0Q2hlY2tlZCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCByYWRpb0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcmFkaW8nKTtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXsgcmFkaW9DbGFzc05hbWVzIH0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgIG5hbWU9eyBuYW1lIH1cbiAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyBkZWZhdWx0Q2hlY2tlZCB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1yYWRpby0tZmF1eCcgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn07XG5cblJhZGlvLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==