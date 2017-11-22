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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOlsiU3Bpbm5lciIsInByb3BzIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJwcHJvcHMiLCJzcGlubmVyQ2xhc3NOYW1lcyIsImNvbnRhaW5lciIsInJlbmRlclNwaW5uZXIiLCJDb21wb25lbnQiLCJTUElOTkVSX1NJWkVTIiwiU1BJTk5FUl9UWVBFUyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBRXFCQSxPOzs7QUFFbkIscUJBQWM7QUFBQTs7QUFBQTs7QUFFWiw2QkFBYyxpQkFBZCxFQUFpQyxDQUMvQixDQUNFLG9DQURGLEVBRUUsbUJBRkYsQ0FEK0IsQ0FBakM7QUFGWTtBQVFiOzs7O2tDQUVhQyxLLEVBQU87QUFBQSxVQUNYQyxTQURXLEdBQzBCRCxLQUQxQixDQUNYQyxTQURXO0FBQUEsVUFDQUMsSUFEQSxHQUMwQkYsS0FEMUIsQ0FDQUUsSUFEQTtBQUFBLFVBQ01DLElBRE4sR0FDMEJILEtBRDFCLENBQ01HLElBRE47QUFBQSxVQUNlQyxNQURmLDBDQUMwQkosS0FEMUI7O0FBRW5CLFVBQU1LLG9CQUFvQiwwQkFBV0osU0FBWCxFQUN4QixjQUR3QixxQkFFUEMsSUFGTyxFQUd4QkMsMEJBQXdCQSxJQUF4QixHQUFpQyxJQUhULENBQTFCOztBQU1BLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVlFLGlCQURkO0FBRUUseUJBQVksT0FGZDtBQUdFLGdCQUFLO0FBSFAsV0FJT0QsTUFKUDtBQU1FLCtDQUFLLFdBQVUscUJBQWYsR0FORjtBQU9FLCtDQUFLLFdBQVUscUJBQWY7QUFQRixPQURGO0FBV0Q7Ozs2QkFFUTtBQUFBLG1CQUN5QixLQUFLSixLQUQ5QjtBQUFBLFVBQ0NNLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ2VOLEtBRGY7OztBQUdQLGFBQU9NLFlBQ0w7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNHLGFBQUtDLGFBQUwsQ0FBbUJQLEtBQW5CO0FBREgsT0FESyxHQUlILEtBQUtPLGFBQUwsQ0FBbUJQLEtBQW5CLENBSko7QUFLRDs7O0VBekNrQyxnQkFBTVEsUzs7a0JBQXRCVCxPOzs7QUE0Q3JCLElBQU1VLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQXRCO0FBQ0EsSUFBTUMsZ0JBQWdCLENBQUMsT0FBRCxFQUFVLFNBQVYsQ0FBdEI7O0FBRUFYLFFBQVFZLFNBQVIsR0FBb0I7QUFDbEJMLGFBQVcsb0JBQVVNLElBREg7QUFFbEJYLGFBQVcsb0JBQVVZLE1BRkg7QUFHbEJWLFFBQU0sb0JBQVVXLEtBQVYsQ0FBZ0JKLGFBQWhCLENBSFk7QUFJbEJSLFFBQU0sb0JBQVVZLEtBQVYsQ0FBZ0JMLGFBQWhCO0FBSlksQ0FBcEI7O0FBT0FWLFFBQVFnQixZQUFSLEdBQXVCO0FBQ3JCVCxhQUFXLElBRFU7QUFFckJKLFFBQU07QUFGZSxDQUF2QiIsImZpbGUiOiJTcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHJlZ2lzdGVyU3R5bGUoJ3NwaW5uZXItb3ZlcmxheScsIFtcbiAgICAgIFtcbiAgICAgICAgJ2JvZHkgLnNsZHMgLnNsZHMtc3Bpbm5lcl9jb250YWluZXInLFxuICAgICAgICAneyB6LWluZGV4OiA5MDAyIH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIHJlbmRlclNwaW5uZXIocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2l6ZSwgdHlwZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBzcGlubmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtc3Bpbm5lcicsXG4gICAgICBgc2xkcy1zcGlubmVyLS0ke3NpemV9YCxcbiAgICAgIHR5cGUgPyBgc2xkcy1zcGlubmVyLS0ke3R5cGV9YCA6IG51bGxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgc3Bpbm5lckNsYXNzTmFtZXMgfVxuICAgICAgICBhcmlhLWhpZGRlbj0nZmFsc2UnXG4gICAgICAgIHJvbGU9J2FsZXJ0J1xuICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNwaW5uZXJfX2RvdC1hJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zcGlubmVyX19kb3QtYicgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNwaW5uZXJfY29udGFpbmVyJz5cbiAgICAgICAge3RoaXMucmVuZGVyU3Bpbm5lcihwcm9wcyl9XG4gICAgICA8L2Rpdj5cbiAgICApIDogdGhpcy5yZW5kZXJTcGlubmVyKHByb3BzKTtcbiAgfVxufVxuXG5jb25zdCBTUElOTkVSX1NJWkVTID0gWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcbmNvbnN0IFNQSU5ORVJfVFlQRVMgPSBbJ2JyYW5kJywgJ2ludmVyc2UnXTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFNQSU5ORVJfVFlQRVMpLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoU1BJTk5FUl9TSVpFUyksXG59O1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyOiB0cnVlLFxuICBzaXplOiAnc21hbGwnLFxufTtcbiJdfQ==