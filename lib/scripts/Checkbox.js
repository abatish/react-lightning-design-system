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
          this.props.value = 'false';
        } else {
          this.props.checked = true;
          this.props.value = 'true';
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
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  grouped: _propTypes2.default.bool,
  checkboxRef: _propTypes2.default.func,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwibmV4dFByb3BzIiwiaW5wdXQiLCJub2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWZhdWx0Q2hlY2tlZCIsImNoZWNrZWQiLCJlIiwicHJvcHMiLCJkaXNhYmxlZCIsInZhbHVlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGVja2JveFJlZiIsImNoZWNrQ2xhc3NOYW1lcyIsImdyb3VwZWQiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJDaGVja2JveCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwibmFtZSIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUJBLFE7OztBQUNuQixzQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBRlk7QUFHYjs7Ozs4Q0FFeUJDLFMsRUFBVztBQUNuQyxVQUFNQyxRQUFRLEtBQUtDLElBQUwsQ0FBVUMsb0JBQVYsQ0FBK0IsT0FBL0IsRUFBd0MsQ0FBeEMsQ0FBZDtBQUNBLFVBQUlILFVBQVVJLGNBQVYsS0FBNkJILE1BQU1JLE9BQXZDLEVBQWdEO0FBQzlDSixjQUFNSSxPQUFOLEdBQWdCTCxVQUFVSSxjQUExQjtBQUNEO0FBQ0Y7Ozs2QkFFUUUsQyxFQUFHO0FBQ1YsVUFBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsWUFBSSxLQUFLRCxLQUFMLENBQVdGLE9BQWYsRUFBd0I7QUFDdEIsZUFBS0UsS0FBTCxDQUFXRixPQUFYLEdBQXFCLEtBQXJCO0FBQ0EsZUFBS0UsS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE9BQW5CO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZUFBS0YsS0FBTCxDQUFXRixPQUFYLEdBQXFCLElBQXJCO0FBQ0EsZUFBS0UsS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0Q7QUFDRjtBQUNGOzs7eUNBRTJEO0FBQUE7O0FBQUEsVUFBM0NDLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLFVBQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxVQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsVUFBVEwsS0FBUzs7QUFDMUQsVUFBTU0sa0JBQWtCLDBCQUFXSCxTQUFYLEVBQXNCLGVBQXRCLENBQXhCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFLLGFBQUNSLElBQUQsRUFBVTtBQUNiLG1CQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxnQkFBSVUsV0FBSixFQUFpQkEsWUFBWVYsSUFBWjtBQUNsQixXQUpIO0FBS0UscUJBQVlXO0FBTGQ7QUFPRSx3RUFBTyxNQUFLLFVBQVosSUFBNEJOLEtBQTVCLEVBUEY7QUFRRSxnREFBTSxXQUFVLHFCQUFoQixHQVJGO0FBU0U7QUFBQTtBQUFBLFlBQU0sV0FBVSwwQkFBaEI7QUFBNkNJO0FBQTdDO0FBVEYsT0FERjtBQWFEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDeUQsS0FBS0osS0FEOUQ7QUFBQSxVQUNDTyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxRQURWLFVBQ1VBLFFBRFY7QUFBQSxVQUNvQkMsS0FEcEIsVUFDb0JBLEtBRHBCO0FBQUEsVUFDMkJDLFNBRDNCLFVBQzJCQSxTQUQzQjtBQUFBLFVBQ3NDQyxJQUR0QyxVQUNzQ0EsSUFEdEM7QUFBQSxVQUMrQ1gsS0FEL0M7O0FBRVAsVUFBTVksZ0JBQWdCLEVBQUVKLGtCQUFGLEVBQVlDLFlBQVosRUFBbUJDLG9CQUFuQixFQUE4QkMsVUFBOUIsRUFBdEI7QUFDQSxVQUFJLE9BQU9YLE1BQU1ULFFBQWIsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekNTLGNBQU1ULFFBQU4sR0FBaUIsS0FBS0EsUUFBdEI7QUFDRDtBQUNELGFBQ0VnQixVQUNFLEtBQUtNLGNBQUwsQ0FBb0JiLEtBQXBCLENBREYsR0FFSTtBQUFBO0FBQUE7QUFDRSwwQkFBZ0I7QUFBQSxtQkFBUyxPQUFLTCxJQUFMLEdBQVlBLElBQXJCO0FBQUE7QUFEbEIsV0FFT2lCLGFBRlA7QUFJSSxhQUFLQyxjQUFMLENBQW9CYixLQUFwQjtBQUpKLE9BSE47QUFVRDs7Ozs7a0JBMURrQlYsUTs7O0FBOERyQkEsU0FBU3dCLFNBQVQsR0FBcUI7QUFDbkJYLGFBQVcsb0JBQVVZLE1BREY7QUFFbkJYLFNBQU8sb0JBQVVXLE1BRkU7QUFHbkJQLFlBQVUsb0JBQVVRLElBSEQ7QUFJbkJQLFNBQU8sc0JBQVlLLFNBQVosQ0FBc0JMLEtBSlY7QUFLbkJDLGFBQVcsb0JBQVVPLE1BTEY7QUFNbkJOLFFBQU0sb0JBQVVNLE1BTkc7QUFPbkJWLFdBQVMsb0JBQVVTLElBUEE7QUFRbkJYLGVBQWEsb0JBQVVhLElBUko7QUFTbkJDLFFBQU0sb0JBQVVKLE1BVEc7QUFVbkJiLFNBQU8sb0JBQVVrQixTQUFWLENBQW9CLENBQ3pCLG9CQUFVTCxNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBVlk7QUFjbkJuQixXQUFTLG9CQUFVa0IsSUFkQTtBQWVuQmYsWUFBVSxvQkFBVWUsSUFmRDtBQWdCbkJuQixrQkFBZ0Isb0JBQVVtQjtBQWhCUCxDQUFyQiIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5ub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpWzBdO1xuICAgIGlmIChuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQgIT09IGlucHV0LmNoZWNrZWQpIHtcbiAgICAgIGlucHV0LmNoZWNrZWQgPSBuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9ICdmYWxzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hlY2tib3hSZWYsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBjaGVja0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtY2hlY2tib3gnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgIGlmIChjaGVja2JveFJlZikgY2hlY2tib3hSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17IGNoZWNrQ2xhc3NOYW1lcyB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eCcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwZWQsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMub25DaGFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBncm91cGVkID9cbiAgICAgICAgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgOlxuICAgICAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICAgICAgZm9ybUVsZW1lbnRSZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfVxuICAgICAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIH1cbiAgICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tib3hSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuIl19