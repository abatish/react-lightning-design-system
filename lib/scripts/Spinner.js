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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function (_React$Component) {
  (0, _inherits3.default)(Spinner, _React$Component);

  function Spinner() {
    (0, _classCallCheck3.default)(this, Spinner);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Spinner.__proto__ || (0, _getPrototypeOf2.default)(Spinner)).call(this));

    (0, _util.registerStyle)('spinner-overlay', [['body .slds .slds-spinner_container', '{ z-index: 9002 }']]);
    return _this;
  }

  (0, _createClass3.default)(Spinner, [{
    key: 'renderSpinner',
    value: function renderSpinner(props) {
      var className = props.className,
          size = props.size,
          type = props.type,
          pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'size', 'type']);

      var spinnerClassNames = (0, _classnames2.default)(className, 'slds-spinner', 'slds-spinner--' + size, type ? 'slds-spinner--' + type : null);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: spinnerClassNames,
          'aria-hidden': 'false',
          role: 'alert'
        }, pprops),
        _react2.default.createElement('div', { className: 'slds-spinner__dot-a' }),
        _react2.default.createElement('div', { className: 'slds-spinner__dot-b' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          container = _props.container,
          props = (0, _objectWithoutProperties3.default)(_props, ['container']);


      return container ? _react2.default.createElement(
        'div',
        { className: 'slds-spinner_container' },
        this.renderSpinner(props)
      ) : this.renderSpinner(props);
    }
  }]);
  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;


var SPINNER_SIZES = ['small', 'medium', 'large'];
var SPINNER_TYPES = ['brand', 'inverse'];

Spinner.propTypes = {
  container: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(SPINNER_TYPES),
  size: _propTypes2.default.oneOf(SPINNER_SIZES)
};

Spinner.defaultProps = {
  container: true,
  size: 'small'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOlsiU3Bpbm5lciIsInByb3BzIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJwcHJvcHMiLCJzcGlubmVyQ2xhc3NOYW1lcyIsImNvbnRhaW5lciIsInJlbmRlclNwaW5uZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNQSU5ORVJfU0laRVMiLCJTUElOTkVSX1RZUEVTIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUJBLE87OztBQUVuQixxQkFBYztBQUFBOztBQUFBOztBQUVaLDZCQUFjLGlCQUFkLEVBQWlDLENBQy9CLENBQ0Usb0NBREYsRUFFRSxtQkFGRixDQUQrQixDQUFqQztBQUZZO0FBUWI7Ozs7a0NBRWFDLEssRUFBTztBQUFBLFVBQ1hDLFNBRFcsR0FDMEJELEtBRDFCLENBQ1hDLFNBRFc7QUFBQSxVQUNBQyxJQURBLEdBQzBCRixLQUQxQixDQUNBRSxJQURBO0FBQUEsVUFDTUMsSUFETixHQUMwQkgsS0FEMUIsQ0FDTUcsSUFETjtBQUFBLFVBQ2VDLE1BRGYsMENBQzBCSixLQUQxQjs7QUFFbkIsVUFBTUssb0JBQW9CLDBCQUFXSixTQUFYLEVBQ3hCLGNBRHdCLHFCQUVQQyxJQUZPLEVBR3hCQywwQkFBd0JBLElBQXhCLEdBQWlDLElBSFQsQ0FBMUI7O0FBTUEsYUFDRTtBQUFBO0FBQUE7QUFDRSxxQkFBWUUsaUJBRGQ7QUFFRSx5QkFBWSxPQUZkO0FBR0UsZ0JBQUs7QUFIUCxXQUlPRCxNQUpQO0FBTUUsK0NBQUssV0FBVSxxQkFBZixHQU5GO0FBT0UsK0NBQUssV0FBVSxxQkFBZjtBQVBGLE9BREY7QUFXRDs7OzZCQUVRO0FBQUEsbUJBQ3lCLEtBQUtKLEtBRDlCO0FBQUEsVUFDQ00sU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDZU4sS0FEZjs7O0FBR1AsYUFBT00sWUFDTDtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0csYUFBS0MsYUFBTCxDQUFtQlAsS0FBbkI7QUFESCxPQURLLEdBSUgsS0FBS08sYUFBTCxDQUFtQlAsS0FBbkIsQ0FKSjtBQUtEOzs7RUF6Q2tDUSxnQkFBTUMsUzs7a0JBQXRCVixPOzs7QUE0Q3JCLElBQU1XLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBdEI7O0FBRUFaLFFBQVFhLFNBQVIsR0FBb0I7QUFDbEJOLGFBQVdPLG9CQUFVQyxJQURIO0FBRWxCYixhQUFXWSxvQkFBVUUsTUFGSDtBQUdsQlosUUFBTVUsb0JBQVVHLEtBQVYsQ0FBZ0JMLGFBQWhCLENBSFk7QUFJbEJULFFBQU1XLG9CQUFVRyxLQUFWLENBQWdCTixhQUFoQjtBQUpZLENBQXBCOztBQU9BWCxRQUFRa0IsWUFBUixHQUF1QjtBQUNyQlgsYUFBVyxJQURVO0FBRXJCSixRQUFNO0FBRmUsQ0FBdkIiLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bpbm5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICByZWdpc3RlclN0eWxlKCdzcGlubmVyLW92ZXJsYXknLCBbXG4gICAgICBbXG4gICAgICAgICdib2R5IC5zbGRzIC5zbGRzLXNwaW5uZXJfY29udGFpbmVyJyxcbiAgICAgICAgJ3sgei1pbmRleDogOTAwMiB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXJTcGlubmVyKHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHNpemUsIHR5cGUsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc3Bpbm5lckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLXNwaW5uZXInLFxuICAgICAgYHNsZHMtc3Bpbm5lci0tJHtzaXplfWAsXG4gICAgICB0eXBlID8gYHNsZHMtc3Bpbm5lci0tJHt0eXBlfWAgOiBudWxsXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17IHNwaW5uZXJDbGFzc05hbWVzIH1cbiAgICAgICAgYXJpYS1oaWRkZW49J2ZhbHNlJ1xuICAgICAgICByb2xlPSdhbGVydCdcbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zcGlubmVyX19kb3QtYScgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtc3Bpbm5lcl9fZG90LWInIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29udGFpbmVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiBjb250YWluZXIgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zcGlubmVyX2NvbnRhaW5lcic+XG4gICAgICAgIHt0aGlzLnJlbmRlclNwaW5uZXIocHJvcHMpfVxuICAgICAgPC9kaXY+XG4gICAgKSA6IHRoaXMucmVuZGVyU3Bpbm5lcihwcm9wcyk7XG4gIH1cbn1cblxuY29uc3QgU1BJTk5FUl9TSVpFUyA9IFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG5jb25zdCBTUElOTkVSX1RZUEVTID0gWydicmFuZCcsICdpbnZlcnNlJ107XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBjb250YWluZXI6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihTUElOTkVSX1RZUEVTKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFNQSU5ORVJfU0laRVMpLFxufTtcblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogdHJ1ZSxcbiAgc2l6ZTogJ3NtYWxsJyxcbn07XG4iXX0=