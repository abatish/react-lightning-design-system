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
  container: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(SPINNER_TYPES),
  size: _react.PropTypes.oneOf(SPINNER_SIZES)
};

Spinner.defaultProps = {
  container: true,
  size: 'small'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOlsiU3Bpbm5lciIsInByb3BzIiwiY2xhc3NOYW1lIiwic2l6ZSIsInR5cGUiLCJwcHJvcHMiLCJzcGlubmVyQ2xhc3NOYW1lcyIsImNvbnRhaW5lciIsInJlbmRlclNwaW5uZXIiLCJDb21wb25lbnQiLCJTUElOTkVSX1NJWkVTIiwiU1BJTk5FUl9UWVBFUyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJvbmVPZiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsTzs7O0FBRW5CLHFCQUFjO0FBQUE7O0FBQUE7O0FBRVosNkJBQWMsaUJBQWQsRUFBaUMsQ0FDL0IsQ0FDRSxvQ0FERixFQUVFLG1CQUZGLENBRCtCLENBQWpDO0FBRlk7QUFRYjs7OztrQ0FFYUMsSyxFQUFPO0FBQUEsVUFDWEMsU0FEVyxHQUMwQkQsS0FEMUIsQ0FDWEMsU0FEVztBQUFBLFVBQ0FDLElBREEsR0FDMEJGLEtBRDFCLENBQ0FFLElBREE7QUFBQSxVQUNNQyxJQUROLEdBQzBCSCxLQUQxQixDQUNNRyxJQUROO0FBQUEsVUFDZUMsTUFEZiwwQ0FDMEJKLEtBRDFCOztBQUVuQixVQUFNSyxvQkFBb0IsMEJBQVdKLFNBQVgsRUFDeEIsY0FEd0IscUJBRVBDLElBRk8sRUFHeEJDLDBCQUF3QkEsSUFBeEIsR0FBaUMsSUFIVCxDQUExQjs7QUFNQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFZRSxpQkFEZDtBQUVFLHlCQUFZLE9BRmQ7QUFHRSxnQkFBSztBQUhQLFdBSU9ELE1BSlA7QUFNRSwrQ0FBSyxXQUFVLHFCQUFmLEdBTkY7QUFPRSwrQ0FBSyxXQUFVLHFCQUFmO0FBUEYsT0FERjtBQVdEOzs7NkJBRVE7QUFBQSxtQkFDeUIsS0FBS0osS0FEOUI7QUFBQSxVQUNDTSxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNlTixLQURmOzs7QUFHUCxhQUFPTSxZQUNMO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFDRyxhQUFLQyxhQUFMLENBQW1CUCxLQUFuQjtBQURILE9BREssR0FJSCxLQUFLTyxhQUFMLENBQW1CUCxLQUFuQixDQUpKO0FBS0Q7OztFQXpDa0MsZ0JBQU1RLFM7O2tCQUF0QlQsTzs7O0FBNENyQixJQUFNVSxnQkFBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUF0QjtBQUNBLElBQU1DLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxTQUFWLENBQXRCOztBQUVBWCxRQUFRWSxTQUFSLEdBQW9CO0FBQ2xCTCxhQUFXLGlCQUFVTSxJQURIO0FBRWxCWCxhQUFXLGlCQUFVWSxNQUZIO0FBR2xCVixRQUFNLGlCQUFVVyxLQUFWLENBQWdCSixhQUFoQixDQUhZO0FBSWxCUixRQUFNLGlCQUFVWSxLQUFWLENBQWdCTCxhQUFoQjtBQUpZLENBQXBCOztBQU9BVixRQUFRZ0IsWUFBUixHQUF1QjtBQUNyQlQsYUFBVyxJQURVO0FBRXJCSixRQUFNO0FBRmUsQ0FBdkIiLCJmaWxlIjoiU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHJlZ2lzdGVyU3R5bGUoJ3NwaW5uZXItb3ZlcmxheScsIFtcbiAgICAgIFtcbiAgICAgICAgJ2JvZHkgLnNsZHMgLnNsZHMtc3Bpbm5lcl9jb250YWluZXInLFxuICAgICAgICAneyB6LWluZGV4OiA5MDAyIH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIHJlbmRlclNwaW5uZXIocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2l6ZSwgdHlwZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBzcGlubmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtc3Bpbm5lcicsXG4gICAgICBgc2xkcy1zcGlubmVyLS0ke3NpemV9YCxcbiAgICAgIHR5cGUgPyBgc2xkcy1zcGlubmVyLS0ke3R5cGV9YCA6IG51bGxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgc3Bpbm5lckNsYXNzTmFtZXMgfVxuICAgICAgICBhcmlhLWhpZGRlbj0nZmFsc2UnXG4gICAgICAgIHJvbGU9J2FsZXJ0J1xuICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNwaW5uZXJfX2RvdC1hJyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zcGlubmVyX19kb3QtYicgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb250YWluZXIsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNwaW5uZXJfY29udGFpbmVyJz5cbiAgICAgICAge3RoaXMucmVuZGVyU3Bpbm5lcihwcm9wcyl9XG4gICAgICA8L2Rpdj5cbiAgICApIDogdGhpcy5yZW5kZXJTcGlubmVyKHByb3BzKTtcbiAgfVxufVxuXG5jb25zdCBTUElOTkVSX1NJWkVTID0gWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcbmNvbnN0IFNQSU5ORVJfVFlQRVMgPSBbJ2JyYW5kJywgJ2ludmVyc2UnXTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFNQSU5ORVJfVFlQRVMpLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoU1BJTk5FUl9TSVpFUyksXG59O1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGFpbmVyOiB0cnVlLFxuICBzaXplOiAnc21hbGwnLFxufTtcbiJdfQ==