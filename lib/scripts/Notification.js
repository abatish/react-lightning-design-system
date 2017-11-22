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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  type: _propTypes2.default.oneOf(NOTIFICATION_TYPES).isRequired,
  className: _propTypes2.default.string,
  level: _propTypes2.default.oneOf(NOTIFICATION_LEVELS),
  alt: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  iconSize: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClose: _propTypes2.default.func
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJOT1RJRklDQVRJT05fVFlQRVMiLCJOT1RJRklDQVRJT05fTEVWRUxTIiwiTm90aWZpY2F0aW9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0eXBlIiwibGV2ZWwiLCJhbHQiLCJhbGVydFRleHR1cmUiLCJpY29uIiwiaWNvblNpemUiLCJvbkNsb3NlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0eXBlQ2xhc3NOYW1lIiwiaW5kZXhPZiIsImxldmVsQ2xhc3NOYW1lIiwiYWxlcnRDbGFzc05hbWVzIiwiaWNvbkVsIiwidW5kZWZpbmVkIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwibm9kZSIsImZ1bmMiLCJBbGVydCIsIlRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxxQkFBcUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUEzQjs7QUFFQSxJQUFNQyxzQkFBc0IsQ0FDMUIsTUFEMEIsRUFFMUIsU0FGMEIsRUFHMUIsU0FIMEIsRUFJMUIsT0FKMEIsQ0FBNUI7O0FBUUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRTVCQyxTQUY0QixHQU0xQkQsS0FOMEIsQ0FFNUJDLFNBRjRCO0FBQUEsTUFFakJDLElBRmlCLEdBTTFCRixLQU4wQixDQUVqQkUsSUFGaUI7QUFBQSxNQUVYQyxLQUZXLEdBTTFCSCxLQU4wQixDQUVYRyxLQUZXO0FBQUEsTUFFSkMsR0FGSSxHQU0xQkosS0FOMEIsQ0FFSkksR0FGSTtBQUFBLDRCQU0xQkosS0FOMEIsQ0FHNUJLLFlBSDRCO0FBQUEsTUFHNUJBLFlBSDRCLHVDQUdiLElBSGE7QUFBQSxNQUk1QkMsSUFKNEIsR0FNMUJOLEtBTjBCLENBSTVCTSxJQUo0QjtBQUFBLHdCQU0x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bSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG5cbmNvbnN0IE5PVElGSUNBVElPTl9UWVBFUyA9IFsnYWxlcnQnLCAndG9hc3QnXTtcblxuY29uc3QgTk9USUZJQ0FUSU9OX0xFVkVMUyA9IFtcbiAgJ2luZm8nLFxuICAnc3VjY2VzcycsXG4gICd3YXJuaW5nJyxcbiAgJ2Vycm9yJyxcbl07XG5cblxuY29uc3QgTm90aWZpY2F0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsIHR5cGUsIGxldmVsLCBhbHQsXG4gICAgYWxlcnRUZXh0dXJlID0gdHJ1ZSxcbiAgICBpY29uLCBpY29uU2l6ZSA9ICdzbWFsbCcsXG4gICAgb25DbG9zZSwgY2hpbGRyZW4sIC4uLnBwcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlICYmIE5PVElGSUNBVElPTl9UWVBFUy5pbmRleE9mKHR5cGUpID49IDAgP1xuICAgIGBzbGRzLW5vdGlmeS0tJHt0eXBlfWAgOiBudWxsO1xuICBjb25zdCBsZXZlbENsYXNzTmFtZSA9IHR5cGUgJiYgTk9USUZJQ0FUSU9OX0xFVkVMUy5pbmRleE9mKGxldmVsKSA+PSAwID9cbiAgICBgc2xkcy10aGVtZS0tJHtsZXZlbH1gIDogbnVsbDtcbiAgY29uc3QgYWxlcnRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgJ3NsZHMtbm90aWZ5JyxcbiAgICB0eXBlQ2xhc3NOYW1lLFxuICAgIGxldmVsQ2xhc3NOYW1lLFxuICAgIGFsZXJ0VGV4dHVyZSA/ICdzbGRzLXRoZW1lLS1hbGVydC10ZXh0dXJlJyA6IG51bGxcbiAgKTtcblxuICBjb25zdCBpY29uRWwgPSBpY29uID8gKFxuICAgIDxJY29uXG4gICAgICBjbGFzc05hbWU9e3R5cGUgPT09ICd0b2FzdCcgPyAnc2xkcy1tLXJpZ2h0LS1zbWFsbCcgOiAnc2xkcy1tLXJpZ2h0LS14LXNtYWxsJ31cbiAgICAgIGljb249eyBpY29uIH1cbiAgICAgIHNpemU9eyBpY29uU2l6ZSB9XG4gICAgICBmaWxsQ29sb3I9J25vbmUnXG4gICAgICB0ZXh0Q29sb3I9eyBsZXZlbCA9PT0gJ3dhcm5pbmcnID8gJ2RlZmF1bHQnIDogbnVsbCB9XG4gICAgLz4pIDpcbiAgICB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGFsZXJ0Q2xhc3NOYW1lcyB9IHJvbGU9J2FsZXJ0JyB7IC4uLnBwcm9wcyB9PlxuICAgICAge1xuICAgICAgICBhbHQgP1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBhbHQgfTwvc3Bhbj4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAge1xuICAgICAgICBvbkNsb3NlID9cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbm90aWZ5X19jbG9zZSdcbiAgICAgICAgICAgIHR5cGU9J2ljb24taW52ZXJzZSdcbiAgICAgICAgICAgIGljb249J2Nsb3NlJ1xuICAgICAgICAgICAgaWNvblNpemU9e3R5cGUgPT09ICd0b2FzdCcgPyAnbGFyZ2UnIDogJ3NtYWxsJ31cbiAgICAgICAgICAgIGFsdD0nQ2xvc2UnXG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbG9zZSB9XG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAge3R5cGUgPT09ICd0b2FzdCcgP1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1ub3RpZnlfX2NvbnRlbnQgc2xkcy1ncmlkJz5cbiAgICAgICAgICB7aWNvbkVsfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWNvbCBzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLXRleHQtaGVhZGluZy0tc21hbGwnPnsgY2hpbGRyZW4gfTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAge2ljb25FbH1cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvaDI+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX1RZUEVTKS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxldmVsOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX0xFVkVMUyksXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247XG5cbmNvbnN0IHByb3BUeXBlcyA9IHsgLi4uTm90aWZpY2F0aW9uLnByb3BUeXBlcyB9O1xuZGVsZXRlIHByb3BUeXBlcy50eXBlO1xuXG5leHBvcnQgY29uc3QgQWxlcnQgPSBwcm9wcyA9PiA8Tm90aWZpY2F0aW9uIHsgLi4ucHJvcHMgfSB0eXBlPSdhbGVydCcgLz47XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG5leHBvcnQgY29uc3QgVG9hc3QgPSBwcm9wcyA9PiA8Tm90aWZpY2F0aW9uIHsgLi4ucHJvcHMgfSB0eXBlPSd0b2FzdCcgLz47XG5cblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbiJdfQ==