'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.Alert = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION_TYPES = ['alert', 'toast'];

var NOTIFICATION_LEVELS = ['info', 'success', 'warning', 'error'];

var Notification = function Notification(props) {
  var className = props.className,
      type = props.type,
      level = props.level,
      alt = props.alt,
      _props$alertTexture = props.alertTexture,
      alertTexture = _props$alertTexture === undefined ? true : _props$alertTexture,
      icon = props.icon,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === undefined ? 'small' : _props$iconSize,
      onClose = props.onClose,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'level', 'alt', 'alertTexture', 'icon', 'iconSize', 'onClose', 'children']);

  var typeClassName = type && NOTIFICATION_TYPES.indexOf(type) >= 0 ? 'slds-notify--' + type : null;
  var levelClassName = type && NOTIFICATION_LEVELS.indexOf(level) >= 0 ? 'slds-theme--' + level : null;
  var alertClassNames = (0, _classnames2.default)(className, 'slds-notify', typeClassName, levelClassName, alertTexture ? 'slds-theme--alert-texture' : null);

  var iconEl = icon ? _react2.default.createElement(_Icon2.default, {
    className: type === 'toast' ? 'slds-m-right--small' : 'slds-m-right--x-small',
    icon: icon,
    size: iconSize,
    fillColor: 'none',
    textColor: level === 'warning' ? 'default' : null
  }) : undefined;

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: alertClassNames, role: 'alert' }, pprops),
    alt ? _react2.default.createElement(
      'span',
      { className: 'slds-assistive-text' },
      alt
    ) : undefined,
    onClose ? _react2.default.createElement(_Button2.default, {
      className: 'slds-notify__close',
      type: 'icon-inverse',
      icon: 'close',
      iconSize: type === 'toast' ? 'large' : 'small',
      alt: 'Close',
      onClick: onClose
    }) : undefined,
    type === 'toast' ? _react2.default.createElement(
      'div',
      { className: 'slds-notify__content slds-grid' },
      iconEl,
      _react2.default.createElement(
        'div',
        { className: 'slds-col slds-align-middle' },
        _react2.default.createElement(
          'h2',
          { className: 'slds-text-heading--small' },
          children
        )
      )
    ) : _react2.default.createElement(
      'h2',
      null,
      iconEl,
      children
    )
  );
};

Notification.propTypes = {
  type: _react.PropTypes.oneOf(NOTIFICATION_TYPES).isRequired,
  className: _react.PropTypes.string,
  level: _react.PropTypes.oneOf(NOTIFICATION_LEVELS),
  alt: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconSize: _react.PropTypes.string,
  children: _react.PropTypes.node,
  onClose: _react.PropTypes.func
};

exports.default = Notification;


var propTypes = (0, _extends3.default)({}, Notification.propTypes);
delete propTypes.type;

var Alert = exports.Alert = function Alert(props) {
  return _react2.default.createElement(Notification, (0, _extends3.default)({}, props, { type: 'alert' }));
};

Alert.propTypes = propTypes;

var Toast = exports.Toast = function Toast(props) {
  return _react2.default.createElement(Notification, (0, _extends3.default)({}, props, { type: 'toast' }));
};

Toast.propTypes = propTypes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJOT1RJRklDQVRJT05fVFlQRVMiLCJOT1RJRklDQVRJT05fTEVWRUxTIiwiTm90aWZpY2F0aW9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlIiwibGV2ZWwiLCJhbHQiLCJhbGVydFRleHR1cmUiLCJpY29uIiwiaWNvblNpemUiLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0eXBlQ2xhc3NOYW1lIiwiaW5kZXhPZiIsImxldmVsQ2xhc3NOYW1lIiwiYWxlcnRDbGFzc05hbWVzIiwiaWNvbkVsIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwibm9kZSIsImZ1bmMiLCJBbGVydCIsIlRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUEscUJBQXFCLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBM0I7O0FBRUEsSUFBTUMsc0JBQXNCLENBQzFCLE1BRDBCLEVBRTFCLFNBRjBCLEVBRzFCLFNBSDBCLEVBSTFCLE9BSjBCLENBQTVCOztBQVFBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUU1QkMsU0FGNEIsR0FNMUJELEtBTjBCLENBRTVCQyxTQUY0QjtBQUFBLE1BRWpCQyxJQUZpQixHQU0xQkYsS0FOMEIsQ0FFakJFLElBRmlCO0FBQUEsTUFFWEMsS0FGVyxHQU0xQkgsS0FOMEIsQ0FFWEcsS0FGVztBQUFBLE1BRUpDLEdBRkksR0FNMUJKLEtBTjBCLENBRUpJLEdBRkk7QUFBQSw0QkFNMUJKLEtBTjBCLENBRzVCSyxZQUg0QjtBQUFBLE1BRzVCQSxZQUg0Qix1Q0FHYixJQUhhO0FBQUEsTUFJNUJDLElBSjRCLEdBTTFCTixLQU4wQixDQUk1Qk0sSUFKNEI7QUFBQSx3QkFNMUJOLEtBTjBC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cyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG5cbmNvbnN0IE5PVElGSUNBVElPTl9UWVBFUyA9IFsnYWxlcnQnLCAndG9hc3QnXTtcblxuY29uc3QgTk9USUZJQ0FUSU9OX0xFVkVMUyA9IFtcbiAgJ2luZm8nLFxuICAnc3VjY2VzcycsXG4gICd3YXJuaW5nJyxcbiAgJ2Vycm9yJyxcbl07XG5cblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsIHR5cGUsIGxldmVsLCBhbHQsXG4gICAgYWxlcnRUZXh0dXJlID0gdHJ1ZSxcbiAgICBpY29uLCBpY29uU2l6ZSA9ICdzbWFsbCcsXG4gICAgb25DbG9zZSwgY2hpbGRyZW4sIC4uLnBwcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlICYmIE5PVElGSUNBVElPTl9UWVBFUy5pbmRleE9mKHR5cGUpID49IDAgP1xuICAgIGBzbGRzLW5vdGlmeS0tJHt0eXBlfWAgOiBudWxsO1xuICBjb25zdCBsZXZlbENsYXNzTmFtZSA9IHR5cGUgJiYgTk9USUZJQ0FUSU9OX0xFVkVMUy5pbmRleE9mKGxldmVsKSA+PSAwID9cbiAgICBgc2xkcy10aGVtZS0tJHtsZXZlbH1gIDogbnVsbDtcbiAgY29uc3QgYWxlcnRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgJ3NsZHMtbm90aWZ5JyxcbiAgICB0eXBlQ2xhc3NOYW1lLFxuICAgIGxldmVsQ2xhc3NOYW1lLFxuICAgIGFsZXJ0VGV4dHVyZSA/ICdzbGRzLXRoZW1lLS1hbGVydC10ZXh0dXJlJyA6IG51bGxcbiAgKTtcblxuICBjb25zdCBpY29uRWwgPSBpY29uID8gKFxuICAgIDxJY29uXG4gICAgICBjbGFzc05hbWU9e3R5cGUgPT09ICd0b2FzdCcgPyAnc2xkcy1tLXJpZ2h0LS1zbWFsbCcgOiAnc2xkcy1tLXJpZ2h0LS14LXNtYWxsJ31cbiAgICAgIGljb249eyBpY29uIH1cbiAgICAgIHNpemU9eyBpY29uU2l6ZSB9XG4gICAgICBmaWxsQ29sb3I9J25vbmUnXG4gICAgICB0ZXh0Q29sb3I9eyBsZXZlbCA9PT0gJ3dhcm5pbmcnID8gJ2RlZmF1bHQnIDogbnVsbCB9XG4gICAgLz4pIDpcbiAgICB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGFsZXJ0Q2xhc3NOYW1lcyB9IHJvbGU9J2FsZXJ0JyB7IC4uLnBwcm9wcyB9PlxuICAgICAge1xuICAgICAgICBhbHQgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBhbHQgfTwvc3Bhbj4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBvbkNsb3NlID9cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbm90aWZ5X19jbG9zZSdcbiAgICAgICAgICAgIHR5cGU9J2ljb24taW52ZXJzZSdcbiAgICAgICAgICAgIGljb249J2Nsb3NlJ1xuICAgICAgICAgICAgaWNvblNpemU9e3R5cGUgPT09ICd0b2FzdCcgPyAnbGFyZ2UnIDogJ3NtYWxsJ31cbiAgICAgICAgICAgIGFsdD0nQ2xvc2UnXG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbG9zZSB9XG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAge3R5cGUgPT09ICd0b2FzdCcgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1ub3RpZnlfX2NvbnRlbnQgc2xkcy1ncmlkJz5cbiAgICAgICAgICB7aWNvbkVsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWNvbCBzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLXRleHQtaGVhZGluZy0tc21hbGwnPnsgY2hpbGRyZW4gfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge2ljb25FbH1cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvaDI+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX1RZUEVTKS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxldmVsOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX0xFVkVMUyksXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG5cbmNvbnN0IHByb3BUeXBlcyA9IHsgLi4uTm90aWZpY2F0aW9uLnByb3BUeXBlcyB9O1xuZGVsZXRlIHByb3BUeXBlcy50eXBlO1xuXG5leHBvcnQgY29uc3QgQWxlcnQgPSBwcm9wcyA9PiA8Tm90aWZpY2F0aW9uIHsgLi4ucHJvcHMgfSB0eXBlPSdhbGVydCcgLz47XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG5leHBvcnQgY29uc3QgVG9hc3QgPSBwcm9wcyA9PiA8Tm90aWZpY2F0aW9uIHsgLi4ucHJvcHMgfSB0eXBlPSd0b2FzdCcgLz47XG5cblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiJdfQ==