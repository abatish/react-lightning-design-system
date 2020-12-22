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

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);
    return (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'renderToggle',
    value: function renderToggle(_ref) {
      var className = _ref.className,
          label = _ref.label,
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var toggleClassNames = (0, _classnames2.default)(className, 'slds-checkbox--toggle slds-grid');
      return _react2.default.createElement(
        'label',
        { className: toggleClassNames },
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label slds-m-bottom--none' },
          label
        ),
        _react2.default.createElement('input', (0, _extends3.default)({
          name: 'checkbox',
          type: 'checkbox',
          'aria-describedby': 'toggle-desc'
        }, props)),
        _react2.default.createElement(
          'span',
          {
            className: 'slds-checkbox--faux_container',
            'aria-live': 'assertive'
          },
          _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
          _react2.default.createElement(
            'span',
            { className: 'slds-checkbox--on' },
            'Enabled'
          ),
          _react2.default.createElement(
            'span',
            { className: 'slds-checkbox--off' },
            'Disabled'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          props = (0, _objectWithoutProperties3.default)(_props, ['required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this2.node = node;
          }
        }, formElemProps),
        this.renderToggle(props)
      );
    }
  }]);
  return Toggle;
}(_react.Component);

exports.default = Toggle;


Toggle.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RvZ2dsZS5qcyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJjbGFzc05hbWUiLCJsYWJlbCIsInByb3BzIiwidG9nZ2xlQ2xhc3NOYW1lcyIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsIm5vZGUiLCJyZW5kZXJUb2dnbGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiRm9ybUVsZW1lbnQiLCJudW1iZXIiLCJuYW1lIiwidmFsdWUiLCJvbmVPZlR5cGUiLCJjaGVja2VkIiwiZGVmYXVsdENoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7O3VDQUMwQjtBQUFBLFVBQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxVQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsVUFBVEMsS0FBUzs7QUFDM0MsVUFBTUMsbUJBQW1CLDBCQUFXSCxTQUFYLEVBQXNCLGlDQUF0QixDQUF6QjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQU8sV0FBWUcsZ0JBQW5CO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSw4Q0FBaEI7QUFBaUVGO0FBQWpFLFNBREY7QUFFRTtBQUNFLGdCQUFLLFVBRFA7QUFFRSxnQkFBSyxVQUZQO0FBR0UsOEJBQWlCO0FBSG5CLFdBSU9DLEtBSlAsRUFGRjtBQVFFO0FBQUE7QUFBQTtBQUNFLHVCQUFVLCtCQURaO0FBRUUseUJBQVU7QUFGWjtBQUlFLGtEQUFNLFdBQVUscUJBQWhCLEdBSkY7QUFLRTtBQUFBO0FBQUEsY0FBTSxXQUFVLG1CQUFoQjtBQUFBO0FBQUEsV0FMRjtBQU1FO0FBQUE7QUFBQSxjQUFNLFdBQVUsb0JBQWhCO0FBQUE7QUFBQTtBQU5GO0FBUkYsT0FERjtBQW1CRDs7OzZCQUVRO0FBQUE7O0FBQUEsbUJBQ2dELEtBQUtBLEtBRHJEO0FBQUEsVUFDQ0UsUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDV0MsS0FEWCxVQUNXQSxLQURYO0FBQUEsVUFDa0JDLFNBRGxCLFVBQ2tCQSxTQURsQjtBQUFBLFVBQzZCQyxJQUQ3QixVQUM2QkEsSUFEN0I7QUFBQSxVQUNzQ0wsS0FEdEM7O0FBRVAsVUFBTU0sZ0JBQWdCLEVBQUVKLGtCQUFGLEVBQVlDLFlBQVosRUFBbUJDLG9CQUFuQixFQUE4QkMsVUFBOUIsRUFBdEI7QUFDQSxhQUNFO0FBQUMsNkJBQUQ7QUFBQTtBQUNFLDBCQUFnQjtBQUFBLG1CQUFTLE9BQUtFLElBQUwsR0FBWUEsSUFBckI7QUFBQTtBQURsQixXQUVPRCxhQUZQO0FBSUksYUFBS0UsWUFBTCxDQUFrQlIsS0FBbEI7QUFKSixPQURGO0FBUUQ7OztFQW5DaUNTLGdCOztrQkFBZlosTTs7O0FBdUNyQkEsT0FBT2EsU0FBUCxHQUFtQjtBQUNqQlosYUFBV2Esb0JBQVVDLE1BREo7QUFFakJiLFNBQU9ZLG9CQUFVQyxNQUZBO0FBR2pCVixZQUFVUyxvQkFBVUUsSUFISDtBQUlqQlYsU0FBT1csc0JBQVlKLFNBQVosQ0FBc0JQLEtBSlo7QUFLakJDLGFBQVdPLG9CQUFVSSxNQUxKO0FBTWpCVixRQUFNTSxvQkFBVUksTUFOQztBQU9qQkMsUUFBTUwsb0JBQVVDLE1BUEM7QUFRakJLLFNBQU9OLG9CQUFVTyxTQUFWLENBQW9CLENBQ3pCUCxvQkFBVUMsTUFEZSxFQUV6QkQsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FSVTtBQVlqQkksV0FBU1Isb0JBQVVFLElBWkY7QUFhakJPLGtCQUFnQlQsb0JBQVVFO0FBYlQsQ0FBbkIiLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJUb2dnbGUoeyBjbGFzc05hbWUsIGxhYmVsLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1jaGVja2JveC0tdG9nZ2xlIHNsZHMtZ3JpZCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgdG9nZ2xlQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLW0tYm90dG9tLS1ub25lJz57IGxhYmVsIH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9J2NoZWNrYm94J1xuICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9J3RvZ2dsZS1kZXNjJ1xuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eF9jb250YWluZXInXG4gICAgICAgICAgYXJpYS1saXZlPSdhc3NlcnRpdmUnXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXgnIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1vbic+RW5hYmxlZDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLW9mZic+RGlzYWJsZWQ8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfVxuICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVyVG9nZ2xlKHByb3BzKSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cblxufVxuXG5Ub2dnbGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19