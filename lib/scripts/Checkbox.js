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

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var className = _ref.className;
      var label = _ref.label;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        { className: checkClassNames },
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props)),
        _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label' },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var grouped = _props.grouped;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  grouped: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixROzs7Ozs7Ozs7O3lDQUU0QjtBQUFBLFVBQTlCLFNBQThCLFFBQTlCLFNBQThCO0FBQUEsVUFBbkIsS0FBbUIsUUFBbkIsS0FBbUI7QUFBQSxVQUFULEtBQVM7O0FBQzdDLFVBQU0sa0JBQWtCLDBCQUFXLFNBQVgsRUFBc0IsZUFBdEIsQ0FBeEI7QUFDQSxhQUNFO0FBQUE7UUFBQSxFQUFPLFdBQVksZUFBbkI7UUFDRSxnRUFBTyxNQUFLLFVBQVosSUFBNEIsS0FBNUIsRUFERjtRQUVFLHdDQUFNLFdBQVUscUJBQWhCLEdBRkY7UUFHRTtBQUFBO1VBQUEsRUFBTSxXQUFVLDBCQUFoQjtVQUE2QztBQUE3QztBQUhGLE9BREY7QUFPRDs7OzZCQUVRO0FBQUEsbUJBQ3lELEtBQUssS0FEOUQ7QUFBQSxVQUNDLE9BREQsVUFDQyxPQUREO0FBQUEsVUFDVSxRQURWLFVBQ1UsUUFEVjtBQUFBLFVBQ29CLEtBRHBCLFVBQ29CLEtBRHBCO0FBQUEsVUFDMkIsU0FEM0IsVUFDMkIsU0FEM0I7QUFBQSxVQUNzQyxJQUR0QyxVQUNzQyxJQUR0QztBQUFBLFVBQytDLEtBRC9DOztBQUVQLFVBQU0sZ0JBQWdCLEVBQUUsa0JBQUYsRUFBWSxZQUFaLEVBQW1CLG9CQUFuQixFQUE4QixVQUE5QixFQUF0QjtBQUNBLGFBQ0UsVUFDQSxLQUFLLGNBQUwsQ0FBb0IsS0FBcEIsQ0FEQSxHQUVBO0FBQUE7UUFBa0IsYUFBbEI7UUFDSSxLQUFLLGNBQUwsQ0FBb0IsS0FBcEI7QUFESixPQUhGO0FBT0Q7OztFQXZCbUMsZ0JBQU0sUzs7a0JBQXZCLFE7OztBQTJCckIsU0FBUyxTQUFULEdBQXFCO0FBQ25CLGFBQVcsaUJBQVUsTUFERjtBQUVuQixTQUFPLGlCQUFVLE1BRkU7QUFHbkIsWUFBVSxpQkFBVSxJQUhEO0FBSW5CLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUpZO0FBV25CLGFBQVcsaUJBQVUsTUFYRjtBQVluQixRQUFNLGlCQUFVLE1BWkc7QUFhbkIsUUFBTSxpQkFBVSxNQWJHO0FBY25CLFNBQU8saUJBQVUsR0FkRTtBQWVuQixXQUFTLGlCQUFVLElBZkE7QUFnQm5CLFdBQVMsaUJBQVUsSUFoQkE7QUFpQm5CLGtCQUFnQixpQkFBVTtBQWpCUCxDQUFyQiIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXJDaGVja2JveCh7IGNsYXNzTmFtZSwgbGFiZWwsIC4uLnByb3BzIH0pIHtcclxuICAgIGNvbnN0IGNoZWNrQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1jaGVja2JveCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IGNoZWNrQ2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgeyAuLi5wcm9wcyB9IC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1mYXV4Jz48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGdyb3VwZWQsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBncm91cGVkID9cclxuICAgICAgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgOlxyXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSB9XHJcbiAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuIl19