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

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.node.getElementsByTagName('input')[0];
      if (nextProps.defaultChecked !== input.checked) {
        input.checked = nextProps.defaultChecked;
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      if (!this.props.disabled) {
        if (this.props.checked) {
          this.props.checked = false;
          this.props.value = '';
        } else {
          this.props.checked = true;
          this.props.value = 'True';
        }
      }
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var _this2 = this;

      var className = _ref.className,
          label = _ref.label,
          checkboxRef = _ref.checkboxRef,
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label', 'checkboxRef']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        {
          ref: function ref(node) {
            _this2.node = node;
            if (checkboxRef) checkboxRef(node);
          },
          className: checkClassNames
        },
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
      var _this3 = this;

      var _props = this.props,
          grouped = _props.grouped,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      if (typeof props.onChange === 'undefined') {
        props.onChange = this.onChange;
      }
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this3.node = node;
          }
        }, formElemProps),
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  grouped: _react.PropTypes.bool,
  checkboxRef: _react.PropTypes.func,
  name: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  checked: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwibmV4dFByb3BzIiwiaW5wdXQiLCJub2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWZhdWx0Q2hlY2tlZCIsImNoZWNrZWQiLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsInZhbHVlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGVja2JveFJlZiIsImNoZWNrQ2xhc3NOYW1lcyIsImdyb3VwZWQiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJDaGVja2JveCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwibmFtZSIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCQSxROzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUZZO0FBR2I7Ozs7OENBRXlCQyxTLEVBQVc7QUFDbkMsVUFBTUMsUUFBUSxLQUFLQyxJQUFMLENBQVVDLG9CQUFWLENBQStCLE9BQS9CLEVBQXdDLENBQXhDLENBQWQ7QUFDQSxVQUFJSCxVQUFVSSxjQUFWLEtBQTZCSCxNQUFNSSxPQUF2QyxFQUFnRDtBQUM5Q0osY0FBTUksT0FBTixHQUFnQkwsVUFBVUksY0FBMUI7QUFDRDtBQUNGOzs7NkJBRVFFLEMsRUFBRztBQUNWLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdDLFFBQWhCLEVBQTBCO0FBQ3hCLFlBQUksS0FBS0QsS0FBTCxDQUFXRixPQUFmLEVBQXdCO0FBQ3RCLGVBQUtFLEtBQUwsQ0FBV0YsT0FBWCxHQUFxQixLQUFyQjtBQUNBLGVBQUtFLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixFQUFuQjtBQUNELFNBSEQsTUFHTztBQUNMLGVBQUtGLEtBQUwsQ0FBV0YsT0FBWCxHQUFxQixJQUFyQjtBQUNBLGVBQUtFLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixNQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7O3lDQUUyRDtBQUFBOztBQUFBLFVBQTNDQyxTQUEyQyxRQUEzQ0EsU0FBMkM7QUFBQSxVQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsVUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLFVBQVRMLEtBQVM7O0FBQzFELFVBQU1NLGtCQUFrQiwwQkFBV0gsU0FBWCxFQUFzQixlQUF0QixDQUF4QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsZUFBSyxhQUFDUixJQUFELEVBQVU7QUFDYixtQkFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsZ0JBQUlVLFdBQUosRUFBaUJBLFlBQVlWLElBQVo7QUFDbEIsV0FKSDtBQUtFLHFCQUFZVztBQUxkO0FBT0Usd0VBQU8sTUFBSyxVQUFaLElBQTRCTixLQUE1QixFQVBGO0FBUUUsZ0RBQU0sV0FBVSxxQkFBaEIsR0FSRjtBQVNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsMEJBQWhCO0FBQTZDSTtBQUE3QztBQVRGLE9BREY7QUFhRDs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQ3lELEtBQUtKLEtBRDlEO0FBQUEsVUFDQ08sT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsUUFEVixVQUNVQSxRQURWO0FBQUEsVUFDb0JDLEtBRHBCLFVBQ29CQSxLQURwQjtBQUFBLFVBQzJCQyxTQUQzQixVQUMyQkEsU0FEM0I7QUFBQSxVQUNzQ0MsSUFEdEMsVUFDc0NBLElBRHRDO0FBQUEsVUFDK0NYLEtBRC9DOztBQUVQLFVBQU1ZLGdCQUFnQixFQUFFSixrQkFBRixFQUFZQyxZQUFaLEVBQW1CQyxvQkFBbkIsRUFBOEJDLFVBQTlCLEVBQXRCO0FBQ0EsVUFBSSxPQUFPWCxNQUFNVCxRQUFiLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3pDUyxjQUFNVCxRQUFOLEdBQWlCLEtBQUtBLFFBQXRCO0FBQ0Q7QUFDRCxhQUNFZ0IsVUFDRSxLQUFLTSxjQUFMLENBQW9CYixLQUFwQixDQURGLEdBRUk7QUFBQTtBQUFBO0FBQ0UsMEJBQWdCO0FBQUEsbUJBQVMsT0FBS0wsSUFBTCxHQUFZQSxJQUFyQjtBQUFBO0FBRGxCLFdBRU9pQixhQUZQO0FBSUksYUFBS0MsY0FBTCxDQUFvQmIsS0FBcEI7QUFKSixPQUhOO0FBVUQ7Ozs7O2tCQTFEa0JWLFE7OztBQThEckJBLFNBQVN3QixTQUFULEdBQXFCO0FBQ25CWCxhQUFXLGlCQUFVWSxNQURGO0FBRW5CWCxTQUFPLGlCQUFVVyxNQUZFO0FBR25CUCxZQUFVLGlCQUFVUSxJQUhEO0FBSW5CUCxTQUFPLHNCQUFZSyxTQUFaLENBQXNCTCxLQUpWO0FBS25CQyxhQUFXLGlCQUFVTyxNQUxGO0FBTW5CTixRQUFNLGlCQUFVTSxNQU5HO0FBT25CVixXQUFTLGlCQUFVUyxJQVBBO0FBUW5CWCxlQUFhLGlCQUFVYSxJQVJKO0FBU25CQyxRQUFNLGlCQUFVSixNQVRHO0FBVW5CYixTQUFPLGlCQUFVa0IsU0FBVixDQUFvQixDQUN6QixpQkFBVUwsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQixDQVZZO0FBY25CbkIsV0FBUyxpQkFBVWtCLElBZEE7QUFlbkJmLFlBQVUsaUJBQVVlLElBZkQ7QUFnQm5CbkIsa0JBQWdCLGlCQUFVbUI7QUFoQlAsQ0FBckIiLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLm5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgaWYgKG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gaW5wdXQuY2hlY2tlZCkge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gJ1RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hlY2tib3hSZWYsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBjaGVja0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtY2hlY2tib3gnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgIGlmIChjaGVja2JveFJlZikgY2hlY2tib3hSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17IGNoZWNrQ2xhc3NOYW1lcyB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eCcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwZWQsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMub25DaGFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBncm91cGVkID9cbiAgICAgICAgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgOlxuICAgICAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICAgICAgZm9ybUVsZW1lbnRSZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfVxuICAgICAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIH1cbiAgICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tib3hSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuIl19