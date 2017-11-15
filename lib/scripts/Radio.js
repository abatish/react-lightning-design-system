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
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  name: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};

exports.default = Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvLmpzIl0sIm5hbWVzIjpbIlJhZGlvIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiLCJwcm9wcyIsInJhZGlvQ2xhc3NOYW1lcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsIm51bWJlciIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxTQUFSQSxLQUFRLE9BQTBFO0FBQUEsTUFBdkVDLFNBQXVFLFFBQXZFQSxTQUF1RTtBQUFBLE1BQTVEQyxLQUE0RCxRQUE1REEsS0FBNEQ7QUFBQSxNQUFyREMsSUFBcUQsUUFBckRBLElBQXFEO0FBQUEsTUFBL0NDLEtBQStDLFFBQS9DQSxLQUErQztBQUFBLE1BQXhDQyxPQUF3QyxRQUF4Q0EsT0FBd0M7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBWkMsS0FBWTs7QUFDdEYsTUFBTUMsa0JBQWtCLDBCQUFXUCxTQUFYLEVBQXNCLFlBQXRCLENBQXhCO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBTyxXQUFZTyxlQUFuQjtBQUNFO0FBQ0UsWUFBSyxPQURQO0FBRUUsWUFBT0wsSUFGVDtBQUdFLGFBQVFDLEtBSFY7QUFJRSxlQUFVQyxPQUpaO0FBS0Usc0JBQWlCQztBQUxuQixPQU1PQyxLQU5QLEVBREY7QUFTRSw0Q0FBTSxXQUFVLGtCQUFoQixHQVRGO0FBVUU7QUFBQTtBQUFBLFFBQU0sV0FBVSwwQkFBaEI7QUFBNkNMO0FBQTdDO0FBVkYsR0FERjtBQWNELENBaEJEOztBQWtCQUYsTUFBTVMsU0FBTixHQUFrQjtBQUNoQlIsYUFBVyxpQkFBVVMsTUFETDtBQUVoQlIsU0FBTyxpQkFBVVEsTUFGRDtBQUdoQlAsUUFBTSxpQkFBVU8sTUFIQTtBQUloQk4sU0FBTyxpQkFBVU8sU0FBVixDQUFvQixDQUN6QixpQkFBVUQsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQixDQUpTO0FBUWhCUCxXQUFTLGlCQUFVUSxJQVJIO0FBU2hCUCxrQkFBZ0IsaUJBQVVPO0FBVFYsQ0FBbEI7O2tCQVllYixLIiwiZmlsZSI6IlJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBSYWRpbyA9ICh7IGNsYXNzTmFtZSwgbGFiZWwsIG5hbWUsIHZhbHVlLCBjaGVja2VkLCBkZWZhdWx0Q2hlY2tlZCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCByYWRpb0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcmFkaW8nKTtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXsgcmFkaW9DbGFzc05hbWVzIH0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0ncmFkaW8nXG4gICAgICAgIG5hbWU9eyBuYW1lIH1cbiAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgIGNoZWNrZWQ9eyBjaGVja2VkIH1cbiAgICAgICAgZGVmYXVsdENoZWNrZWQ9eyBkZWZhdWx0Q2hlY2tlZCB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1yYWRpby0tZmF1eCcgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn07XG5cblJhZGlvLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==