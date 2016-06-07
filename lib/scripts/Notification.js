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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL05vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNLHFCQUFxQixDQUFDLE9BQUQsRUFBVSxPQUFWLENBQTNCOztBQUVBLElBQU0sc0JBQXNCLENBQzFCLE1BRDBCLEVBRTFCLFNBRjBCLEVBRzFCLFNBSDBCLEVBSTFCLE9BSjBCLENBQTVCOztJQVFxQixZOzs7Ozs7Ozs7OzZCQUNWO0FBQUEsbUJBTUgsS0FBSyxLQU5GO0FBQUEsVUFFTCxTQUZLLFVBRUwsU0FGSztBQUFBLFVBRU0sSUFGTixVQUVNLElBRk47QUFBQSxVQUVZLEtBRlosVUFFWSxLQUZaO0FBQUEsVUFFbUIsR0FGbkIsVUFFbUIsR0FGbkI7QUFBQSx1Q0FHTCxZQUhLO0FBQUEsVUFHTCxZQUhLLHVDQUdVLElBSFY7QUFBQSxVQUlMLElBSkssVUFJTCxJQUpLO0FBQUEsbUNBSUMsUUFKRDtBQUFBLFVBSUMsUUFKRCxtQ0FJWSxPQUpaO0FBQUEsVUFLTCxPQUxLLFVBS0wsT0FMSztBQUFBLFVBS0ksUUFMSixVQUtJLFFBTEo7QUFBQSxVQUtpQixLQUxqQjs7QUFPUCxVQUFNLGdCQUFnQixRQUFRLG1CQUFtQixPQUFuQixDQUEyQixJQUEzQixLQUFvQyxDQUE1QyxxQkFBZ0UsSUFBaEUsR0FBeUUsSUFBL0Y7QUFDQSxVQUFNLGlCQUFpQixRQUFRLG9CQUFvQixPQUFwQixDQUE0QixLQUE1QixLQUFzQyxDQUE5QyxvQkFBaUUsS0FBakUsR0FBMkUsSUFBbEc7QUFDQSxVQUFNLGtCQUFrQiwwQkFDdEIsU0FEc0IsRUFFdEIsYUFGc0IsRUFHdEIsYUFIc0IsRUFJdEIsY0FKc0IsRUFLdEIsZUFBZSwyQkFBZixHQUE2QyxJQUx2QixDQUF4QjtBQU9BLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksZUFBakIsRUFBbUMsTUFBSyxPQUF4QyxJQUFxRCxLQUFyRDtRQUVJLE1BQ0E7QUFBQTtVQUFBLEVBQU0sV0FBVSxxQkFBaEI7VUFBd0M7QUFBeEMsU0FEQSxHQUVBLFNBSko7UUFPSSxVQUNBLGtEQUFRLFdBQVUsb0JBQWxCLEVBQXVDLE1BQUssY0FBNUM7QUFDRSxnQkFBSyxPQURQLEVBQ2UsVUFBUyxPQUR4QixFQUNnQyxLQUFJLE9BRHBDO0FBRUUsbUJBQVU7QUFGWixVQURBLEdBS0EsU0FaSjtRQWVJLE9BQ0EsZ0RBQU0sV0FBVSx1QkFBaEI7QUFDRSxnQkFBTyxJQURULEVBQ2dCLE1BQU8sUUFEdkI7QUFFRSxxQkFBVSxNQUZaLEVBRW1CLFdBQVksVUFBVSxTQUFWLEdBQXNCLFNBQXRCLEdBQWtDO0FBRmpFLFVBREEsR0FLQSxTQXBCSjtRQXNCSTtBQXRCSixPQURGO0FBMEJEOzs7OztrQkEzQ2tCLFk7OztBQThDckIsYUFBYSxTQUFiLEdBQXlCO0FBQ3ZCLFFBQU0saUJBQVUsS0FBVixDQUFnQixrQkFBaEIsRUFBb0MsVUFEbkI7QUFFdkIsYUFBVyxpQkFBVSxNQUZFO0FBR3ZCLFNBQU8saUJBQVUsS0FBVixDQUFnQixtQkFBaEIsQ0FIZ0I7QUFJdkIsT0FBSyxpQkFBVSxNQUpRO0FBS3ZCLFFBQU0saUJBQVUsTUFMTztBQU12QixZQUFVLGlCQUFVLE1BTkc7QUFPdkIsWUFBVSxpQkFBVSxJQVBHO0FBUXZCLFdBQVMsaUJBQVU7QUFSSSxDQUF6Qjs7QUFXQSxJQUFNLHVDQUFpQixhQUFhLFNBQTlCLENBQU47QUFDQSxPQUFPLFVBQVUsSUFBakI7O0lBRWEsSyxXQUFBLEs7Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUFPLDhCQUFDLFlBQUQsNkJBQW1CLEtBQUssS0FBeEIsSUFBZ0MsTUFBSyxPQUFyQyxJQUFQO0FBQ0Q7Ozs7O0FBR0gsTUFBTSxTQUFOLEdBQWtCLFNBQWxCOztJQUdhLEssV0FBQSxLOzs7Ozs7Ozs7OzZCQUNGO0FBQ1AsYUFBTyw4QkFBQyxZQUFELDZCQUFtQixLQUFLLEtBQXhCLElBQWdDLE1BQUssT0FBckMsSUFBUDtBQUNEOzs7OztBQUdILE1BQU0sU0FBTixHQUFrQixTQUFsQiIsImZpbGUiOiJOb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuXHJcblxyXG5jb25zdCBOT1RJRklDQVRJT05fVFlQRVMgPSBbJ2FsZXJ0JywgJ3RvYXN0J107XHJcblxyXG5jb25zdCBOT1RJRklDQVRJT05fTEVWRUxTID0gW1xyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ3dhcm5pbmcnLFxyXG4gICdlcnJvcicsXHJcbl07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNsYXNzTmFtZSwgdHlwZSwgbGV2ZWwsIGFsdCxcclxuICAgICAgYWxlcnRUZXh0dXJlID0gdHJ1ZSxcclxuICAgICAgaWNvbiwgaWNvblNpemUgPSAnc21hbGwnLFxyXG4gICAgICBvbkNsb3NlLCBjaGlsZHJlbiwgLi4ucHJvcHMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlICYmIE5PVElGSUNBVElPTl9UWVBFUy5pbmRleE9mKHR5cGUpID49IDAgPyBgc2xkcy1ub3RpZnktLSR7dHlwZX1gIDogbnVsbDtcclxuICAgIGNvbnN0IGxldmVsQ2xhc3NOYW1lID0gdHlwZSAmJiBOT1RJRklDQVRJT05fTEVWRUxTLmluZGV4T2YobGV2ZWwpID49IDAgPyBgc2xkcy10aGVtZS0tJHtsZXZlbH1gIDogbnVsbDtcclxuICAgIGNvbnN0IGFsZXJ0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgJ3NsZHMtbm90aWZ5JyxcclxuICAgICAgdHlwZUNsYXNzTmFtZSxcclxuICAgICAgbGV2ZWxDbGFzc05hbWUsXHJcbiAgICAgIGFsZXJ0VGV4dHVyZSA/ICdzbGRzLXRoZW1lLS1hbGVydC10ZXh0dXJlJyA6IG51bGxcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGFsZXJ0Q2xhc3NOYW1lcyB9IHJvbGU9J2FsZXJ0JyB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYWx0ID9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBhbHQgfTwvc3Bhbj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG9uQ2xvc2UgP1xyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtbm90aWZ5X19jbG9zZScgdHlwZT0naWNvbi1pbnZlcnNlJ1xyXG4gICAgICAgICAgICBpY29uPSdjbG9zZScgaWNvblNpemU9J3NtYWxsJyBhbHQ9J0Nsb3NlJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXsgb25DbG9zZSB9XHJcbiAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbiA/XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0teC1zbWFsbCdcclxuICAgICAgICAgICAgaWNvbj17IGljb24gfSBzaXplPXsgaWNvblNpemUgfVxyXG4gICAgICAgICAgICBmaWxsQ29sb3I9J25vbmUnIHRleHRDb2xvcj17IGxldmVsID09PSAnd2FybmluZycgPyAnZGVmYXVsdCcgOiBudWxsIH1cclxuICAgICAgICAgIC8+IDpcclxuICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTm90aWZpY2F0aW9uLnByb3BUeXBlcyA9IHtcclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoTk9USUZJQ0FUSU9OX1RZUEVTKS5pc1JlcXVpcmVkLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsZXZlbDogUHJvcFR5cGVzLm9uZU9mKE5PVElGSUNBVElPTl9MRVZFTFMpLFxyXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25TaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHsgLi4uTm90aWZpY2F0aW9uLnByb3BUeXBlcyB9O1xyXG5kZWxldGUgcHJvcFR5cGVzLnR5cGU7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8Tm90aWZpY2F0aW9uIHsgLi4udGhpcy5wcm9wcyB9IHR5cGU9J2FsZXJ0JyAvPjtcclxuICB9XHJcbn1cclxuXHJcbkFsZXJ0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9hc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8Tm90aWZpY2F0aW9uIHsgLi4udGhpcy5wcm9wcyB9IHR5cGU9J3RvYXN0JyAvPjtcclxuICB9XHJcbn1cclxuXHJcblRvYXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuIl19