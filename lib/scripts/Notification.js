'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.Alert = undefined;

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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTIFICATION_TYPES = ['alert', 'toast'];

var NOTIFICATION_LEVELS = ['info', 'success', 'warning', 'error'];

var Notification = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    (0, _classCallCheck3.default)(this, Notification);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Notification).apply(this, arguments));
  }

  (0, _createClass3.default)(Notification, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var type = _props.type;
      var level = _props.level;
      var alt = _props.alt;
      var _props$alertTexture = _props.alertTexture;
      var alertTexture = _props$alertTexture === undefined ? true : _props$alertTexture;
      var icon = _props.icon;
      var _props$iconSize = _props.iconSize;
      var iconSize = _props$iconSize === undefined ? 'small' : _props$iconSize;
      var onClose = _props.onClose;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'level', 'alt', 'alertTexture', 'icon', 'iconSize', 'onClose', 'children']);

      var typeClassName = type && NOTIFICATION_TYPES.indexOf(type) >= 0 ? 'slds-notify--' + type : null;
      var levelClassName = type && NOTIFICATION_LEVELS.indexOf(level) >= 0 ? 'slds-theme--' + level : null;
      var alertClassNames = (0, _classnames2.default)(className, 'slds-notify', typeClassName, levelClassName, alertTexture ? 'slds-theme--alert-texture' : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: alertClassNames, role: 'alert' }, props),
        alt ? _react2.default.createElement(
          'span',
          { className: 'slds-assistive-text' },
          alt
        ) : undefined,
        onClose ? _react2.default.createElement(_Button2.default, { className: 'slds-notify__close', type: 'icon-inverse',
          icon: 'close', iconSize: 'small', alt: 'Close',
          onClick: onClose
        }) : undefined,
        icon ? _react2.default.createElement(_Icon2.default, { className: 'slds-m-right--x-small',
          icon: icon, size: iconSize,
          fillColor: 'none', textColor: level === 'warning' ? 'default' : null
        }) : undefined,
        children
      );
    }
  }]);
  return Notification;
}(_react.Component);

exports.default = Notification;


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

var propTypes = (0, _extends3.default)({}, Notification.propTypes);
delete propTypes.type;

var Alert = exports.Alert = function (_Component2) {
  (0, _inherits3.default)(Alert, _Component2);

  function Alert() {
    (0, _classCallCheck3.default)(this, Alert);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Alert).apply(this, arguments));
  }

  (0, _createClass3.default)(Alert, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Notification, (0, _extends3.default)({}, this.props, { type: 'alert' }));
    }
  }]);
  return Alert;
}(_react.Component);

Alert.propTypes = propTypes;

var Toast = exports.Toast = function (_Component3) {
  (0, _inherits3.default)(Toast, _Component3);

  function Toast() {
    (0, _classCallCheck3.default)(this, Toast);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Toast).apply(this, arguments));
  }

  (0, _createClass3.default)(Toast, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Notification, (0, _extends3.default)({}, this.props, { type: 'toast' }));
    }
  }]);
  return Toast;
}(_react.Component);

Toast.propTypes = propTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNLHFCQUFxQixDQUFDLE9BQUQsRUFBVSxPQUFWLENBQTNCOztBQUVBLElBQU0sc0JBQXNCLENBQzFCLE1BRDBCLEVBRTFCLFNBRjBCLEVBRzFCLFNBSDBCLEVBSTFCLE9BSjBCLENBQTVCOztJQVFxQixZOzs7Ozs7Ozs7OzZCQUNWO0FBQUEsbUJBTUgsS0FBSyxLQU5GO0FBQUEsVUFFTCxTQUZLLFVBRUwsU0FGSztBQUFBLFVBRU0sSUFGTixVQUVNLElBRk47QUFBQSxVQUVZLEtBRlosVUFFWSxLQUZaO0FBQUEsVUFFbUIsR0FGbkIsVUFFbUIsR0FGbkI7QUFBQSx1Q0FHTCxZQUhLO0FBQUEsVUFHTCxZQUhLLHVDQUdVLElBSFY7QUFBQSxVQUlMLElBSkssVUFJTCxJQUpLO0FBQUEsbUNBSUMsUUFKRDtBQUFBLFVBSUMsUUFKRCxtQ0FJWSxPQUpaO0FBQUEsVUFLTCxPQUxLLFVBS0wsT0FMSztBQUFBLFVBS0ksUUFMSixVQUtJLFFBTEo7QUFBQSxVQUtpQixLQUxqQjs7QUFPUCxVQUFNLGdCQUFnQixRQUFRLG1CQUFtQixPQUFuQixDQUEyQixJQUEzQixLQUFvQyxDQUE1QyxxQkFBZ0UsSUFBaEUsR0FBeUUsSUFBL0Y7QUFDQSxVQUFNLGlCQUFpQixRQUFRLG9CQUFvQixPQUFwQixDQUE0QixLQUE1QixLQUFzQyxDQUE5QyxvQkFBaUUsS0FBakUsR0FBMkUsSUFBbEc7QUFDQSxVQUFNLGtCQUFrQiwwQkFDdEIsU0FEc0IsRUFFdEIsYUFGc0IsRUFHdEIsYUFIc0IsRUFJdEIsY0FKc0IsRUFLdEIsZUFBZSwyQkFBZixHQUE2QyxJQUx2QixDQUF4QjtBQU9BLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksZUFBakIsRUFBbUMsTUFBSyxPQUF4QyxJQUFxRCxLQUFyRDtRQUVJLE1BQ0E7QUFBQTtVQUFBLEVBQU0sV0FBVSxxQkFBaEI7VUFBd0M7QUFBeEMsU0FEQSxHQUVBLFNBSko7UUFPSSxVQUNBLGtEQUFRLFdBQVUsb0JBQWxCLEVBQXVDLE1BQUssY0FBNUM7QUFDRSxnQkFBSyxPQURQLEVBQ2UsVUFBUyxPQUR4QixFQUNnQyxLQUFJLE9BRHBDO0FBRUUsbUJBQVU7QUFGWixVQURBLEdBS0EsU0FaSjtRQWVJLE9BQ0EsZ0RBQU0sV0FBVSx1QkFBaEI7QUFDRSxnQkFBTyxJQURULEVBQ2dCLE1BQU8sUUFEdkI7QUFFRSxxQkFBVSxNQUZaLEVBRW1CLFdBQVksVUFBVSxTQUFWLEdBQXNCLFNBQXRCLEdBQWtDO0FBRmpFLFVBREEsR0FLQSxTQXBCSjtRQXNCSTtBQXRCSixPQURGO0FBMEJEOzs7OztrQkEzQ2tCLFk7OztBQThDckIsYUFBYSxTQUFiLEdBQXlCO0FBQ3ZCLFFBQU0saUJBQVUsS0FBVixDQUFnQixrQkFBaEIsRUFBb0MsVUFEbkI7QUFFdkIsYUFBVyxpQkFBVSxNQUZFO0FBR3ZCLFNBQU8saUJBQVUsS0FBVixDQUFnQixtQkFBaEIsQ0FIZ0I7QUFJdkIsT0FBSyxpQkFBVSxNQUpRO0FBS3ZCLFFBQU0saUJBQVUsTUFMTztBQU12QixZQUFVLGlCQUFVLE1BTkc7QUFPdkIsWUFBVSxpQkFBVSxJQVBHO0FBUXZCLFdBQVMsaUJBQVU7QUFSSSxDQUF6Qjs7QUFXQSxJQUFNLHVDQUFpQixhQUFhLFNBQTlCLENBQU47QUFDQSxPQUFPLFVBQVUsSUFBakI7O0lBRWEsSyxXQUFBLEs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUFPLDhCQUFDLFlBQUQsNkJBQW1CLEtBQUssS0FBeEIsSUFBZ0MsTUFBSyxPQUFyQyxJQUFQO0FBQ0Q7Ozs7O0FBR0gsTUFBTSxTQUFOLEdBQWtCLFNBQWxCOztJQUdhLEssV0FBQSxLOzs7Ozs7Ozs7OzZCQUNGO0FBQ1AsYUFBTyw4QkFBQyxZQUFELDZCQUFtQixLQUFLLEtBQXhCLElBQWdDLE1BQUssT0FBckMsSUFBUDtBQUNEOzs7OztBQUdILE1BQU0sU0FBTixHQUFrQixTQUFsQiIsImZpbGUiOiJOb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuXG5jb25zdCBOT1RJRklDQVRJT05fVFlQRVMgPSBbJ2FsZXJ0JywgJ3RvYXN0J107XG5cbmNvbnN0IE5PVElGSUNBVElPTl9MRVZFTFMgPSBbXG4gICdpbmZvJyxcbiAgJ3N1Y2Nlc3MnLFxuICAnd2FybmluZycsXG4gICdlcnJvcicsXG5dO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIHR5cGUsIGxldmVsLCBhbHQsXG4gICAgICBhbGVydFRleHR1cmUgPSB0cnVlLFxuICAgICAgaWNvbiwgaWNvblNpemUgPSAnc21hbGwnLFxuICAgICAgb25DbG9zZSwgY2hpbGRyZW4sIC4uLnByb3BzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlICYmIE5PVElGSUNBVElPTl9UWVBFUy5pbmRleE9mKHR5cGUpID49IDAgPyBgc2xkcy1ub3RpZnktLSR7dHlwZX1gIDogbnVsbDtcbiAgICBjb25zdCBsZXZlbENsYXNzTmFtZSA9IHR5cGUgJiYgTk9USUZJQ0FUSU9OX0xFVkVMUy5pbmRleE9mKGxldmVsKSA+PSAwID8gYHNsZHMtdGhlbWUtLSR7bGV2ZWx9YCA6IG51bGw7XG4gICAgY29uc3QgYWxlcnRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLW5vdGlmeScsXG4gICAgICB0eXBlQ2xhc3NOYW1lLFxuICAgICAgbGV2ZWxDbGFzc05hbWUsXG4gICAgICBhbGVydFRleHR1cmUgPyAnc2xkcy10aGVtZS0tYWxlcnQtdGV4dHVyZScgOiBudWxsXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBhbGVydENsYXNzTmFtZXMgfSByb2xlPSdhbGVydCcgeyAuLi5wcm9wcyB9PlxuICAgICAgICB7XG4gICAgICAgICAgYWx0ID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgYWx0IH08L3NwYW4+IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgb25DbG9zZSA/XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtbm90aWZ5X19jbG9zZScgdHlwZT0naWNvbi1pbnZlcnNlJ1xuICAgICAgICAgICAgaWNvbj0nY2xvc2UnIGljb25TaXplPSdzbWFsbCcgYWx0PSdDbG9zZSdcbiAgICAgICAgICAgIG9uQ2xpY2s9eyBvbkNsb3NlIH1cbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGljb24gP1xuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJ1xuICAgICAgICAgICAgaWNvbj17IGljb24gfSBzaXplPXsgaWNvblNpemUgfVxuICAgICAgICAgICAgZmlsbENvbG9yPSdub25lJyB0ZXh0Q29sb3I9eyBsZXZlbCA9PT0gJ3dhcm5pbmcnID8gJ2RlZmF1bHQnIDogbnVsbCB9XG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX1RZUEVTKS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxldmVsOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX0xFVkVMUyksXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7IC4uLk5vdGlmaWNhdGlvbi5wcm9wVHlwZXMgfTtcbmRlbGV0ZSBwcm9wVHlwZXMudHlwZTtcblxuZXhwb3J0IGNsYXNzIEFsZXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Tm90aWZpY2F0aW9uIHsgLi4udGhpcy5wcm9wcyB9IHR5cGU9J2FsZXJ0JyAvPjtcbiAgfVxufVxuXG5BbGVydC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuZXhwb3J0IGNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Tm90aWZpY2F0aW9uIHsgLi4udGhpcy5wcm9wcyB9IHR5cGU9J3RvYXN0JyAvPjtcbiAgfVxufVxuXG5Ub2FzdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4iXX0=