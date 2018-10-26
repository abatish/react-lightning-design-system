'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElement = function (_React$Component) {
  (0, _inherits3.default)(FormElement, _React$Component);

  function FormElement() {
    (0, _classCallCheck3.default)(this, FormElement);
    return (0, _possibleConstructorReturn3.default)(this, (FormElement.__proto__ || (0, _getPrototypeOf2.default)(FormElement)).apply(this, arguments));
  }

  (0, _createClass3.default)(FormElement, [{
    key: 'renderFormElement',
    value: function renderFormElement(props) {
      var className = props.className,
          error = props.error,
          totalCols = props.totalCols,
          _props$cols = props.cols,
          cols = _props$cols === undefined ? 1 : _props$cols,
          formElementRef = props.formElementRef,
          children = props.children;

      var formElementClassNames = (0, _classnames3.default)('slds-form-element', (0, _defineProperty3.default)({
        'slds-has-error': error
      }, 'slds-size--' + cols + '-of-' + totalCols, typeof totalCols === 'number'), className);
      return _react2.default.createElement(
        'div',
        {
          ref: formElementRef,
          key: 'form-element',
          className: formElementClassNames
        },
        children
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var _props = this.props,
          id = _props.id,
          label = _props.label,
          required = _props.required;

      return label ? _react2.default.createElement(
        'label',
        {
          key: 'form-element-label',
          className: 'slds-form-element__label',
          htmlFor: id
        },
        label,
        required ? _react2.default.createElement(
          'abbr',
          { className: 'slds-required' },
          '*'
        ) : undefined
      ) : undefined;
    }
  }, {
    key: 'renderControl',
    value: function renderControl(props) {
      var children = props.children,
          dropdown = props.dropdown,
          error = props.error;
      var readOnly = this.props.readOnly;

      var formElementControlClassNames = (0, _classnames3.default)('slds-form-element__control', { 'slds-has-divider--bottom': readOnly });
      return _react2.default.createElement(
        'div',
        { key: 'form-element-control', className: formElementControlClassNames },
        children,
        dropdown,
        this.renderError(error)
      );
    }
  }, {
    key: 'renderError',
    value: function renderError(error) {
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return errorMessage ? _react2.default.createElement(
        'span',
        { key: 'slds-form-error', className: 'slds-form-element__help' },
        errorMessage
      ) : undefined;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dropdown = _props2.dropdown,
          className = _props2.className,
          totalCols = _props2.totalCols,
          cols = _props2.cols,
          error = _props2.error,
          children = _props2.children,
          style = _props2.style,
          props = (0, _objectWithoutProperties3.default)(_props2, ['dropdown', 'className', 'totalCols', 'cols', 'error', 'children', 'style']);

      var labelElem = this.renderLabel();
      var controlElem = this.renderControl({ children: children, dropdown: dropdown, error: error });
      var formElemChildren = [labelElem, controlElem];
      return this.renderFormElement((0, _extends3.default)({}, props, {
        className: className,
        error: error,
        totalCols: totalCols,
        cols: cols,
        style: style,
        children: formElemChildren
      }));
    }
  }]);
  return FormElement;
}(_react2.default.Component);

exports.default = FormElement;


FormElement.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.shape({
    message: _propTypes2.default.string
  })]),
  readOnly: _propTypes2.default.bool,
  cols: _propTypes2.default.number,
  totalCols: _propTypes2.default.number,
  dropdown: _propTypes2.default.element,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)]),
  formElementRef: _propTypes2.default.func,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object
};

FormElement.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbIkZvcm1FbGVtZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbWVudFJlZiIsImNoaWxkcmVuIiwiZm9ybUVsZW1lbnRDbGFzc05hbWVzIiwiaWQiLCJsYWJlbCIsInJlcXVpcmVkIiwidW5kZWZpbmVkIiwiZHJvcGRvd24iLCJyZWFkT25seSIsImZvcm1FbGVtZW50Q29udHJvbENsYXNzTmFtZXMiLCJyZW5kZXJFcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImxhYmVsRWxlbSIsInJlbmRlckxhYmVsIiwiY29udHJvbEVsZW0iLCJyZW5kZXJDb250cm9sIiwiZm9ybUVsZW1DaGlsZHJlbiIsInJlbmRlckZvcm1FbGVtZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm9uZU9mVHlwZSIsInNoYXBlIiwibnVtYmVyIiwiZWxlbWVudCIsImFycmF5T2YiLCJmdW5jIiwib2JqZWN0IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7c0NBRURDLEssRUFBTztBQUFBLFVBQ2ZDLFNBRGUsR0FDcURELEtBRHJELENBQ2ZDLFNBRGU7QUFBQSxVQUNKQyxLQURJLEdBQ3FERixLQURyRCxDQUNKRSxLQURJO0FBQUEsVUFDR0MsU0FESCxHQUNxREgsS0FEckQsQ0FDR0csU0FESDtBQUFBLHdCQUNxREgsS0FEckQsQ0FDY0ksSUFEZDtBQUFBLFVBQ2NBLElBRGQsK0JBQ3FCLENBRHJCO0FBQUEsVUFDd0JDLGNBRHhCLEdBQ3FETCxLQURyRCxDQUN3QkssY0FEeEI7QUFBQSxVQUN3Q0MsUUFEeEMsR0FDcUROLEtBRHJE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VWtCLE1BSEs7QUFJdEJqQixZQUFVLG9CQUFVa0IsSUFKRTtBQUt0QjFCLFNBQU8sb0JBQVUyQixTQUFWLENBQW9CLENBQ3pCLG9CQUFVRCxJQURlLEVBRXpCLG9CQUFVRCxNQUZlLEVBR3pCLG9CQUFVRyxLQUFWLENBQWdCO0FBQ2RiLGFBQVMsb0JBQVVVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FMZTtBQVl0QmQsWUFBVSxvQkFBVWUsSUFaRTtBQWF0QnhCLFFBQU0sb0JBQVUyQixNQWJNO0FBY3RCNUIsYUFBVyxvQkFBVTRCLE1BZEM7QUFldEJuQixZQUFVLG9CQUFVb0IsT0FmRTtBQWdCdEIxQixZQUFVLG9CQUFVdUIsU0FBVixDQUFvQixDQUM1QixvQkFBVUcsT0FEa0IsRUFFNUIsb0JBQVVDLE9BQVYsQ0FBa0Isb0JBQVVELE9BQTVCLENBRjRCLENBQXBCLENBaEJZO0FBb0J0QjNCLGtCQUFnQixvQkFBVTZCLElBcEJKO0FBcUJ0QjtBQUNBaEIsU0FBTyxvQkFBVWlCO0FBdEJLLENBQXhCOztBQXlCQXBDLFlBQVlxQyxhQUFaLEdBQTRCLElBQTVCIiwiZmlsZSI6IkZvcm1FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlckZvcm1FbGVtZW50KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgPSAxLCBmb3JtRWxlbWVudFJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgW2BzbGRzLXNpemUtLSR7Y29sc30tb2YtJHt0b3RhbENvbHN9YF06IHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsgZm9ybUVsZW1lbnRSZWYgfVxuICAgICAgICBrZXk9J2Zvcm0tZWxlbWVudCdcbiAgICAgICAgY2xhc3NOYW1lPXsgZm9ybUVsZW1lbnRDbGFzc05hbWVzIH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWwoKSB7XG4gICAgY29uc3QgeyBpZCwgbGFiZWwsIHJlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICBsYWJlbCA/XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGtleT0nZm9ybS1lbGVtZW50LWxhYmVsJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJ1xuICAgICAgICAgIGh0bWxGb3I9eyBpZCB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGFiZWw+IDpcbiAgICAgICAgdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBkcm9wZG93biwgZXJyb3IgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgcmVhZE9ubHkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1lbnRDb250cm9sQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgeyAnc2xkcy1oYXMtZGl2aWRlci0tYm90dG9tJzogcmVhZE9ubHkgfSxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT0nZm9ybS1lbGVtZW50LWNvbnRyb2wnIGNsYXNzTmFtZT17Zm9ybUVsZW1lbnRDb250cm9sQ2xhc3NOYW1lc30+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICB7IGRyb3Bkb3duIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlckVycm9yKGVycm9yKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IoZXJyb3IpIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgICAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDpcbiAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICAgIHJldHVybiBlcnJvck1lc3NhZ2UgP1xuICAgICAgPHNwYW4ga2V5PSdzbGRzLWZvcm0tZXJyb3InIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L3NwYW4+IDpcbiAgICAgICAgdW5kZWZpbmVkO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRyb3Bkb3duLCBjbGFzc05hbWUsIHRvdGFsQ29scywgY29scywgZXJyb3IsXG4gICAgICBjaGlsZHJlbiwgc3R5bGUsIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWxFbGVtID0gdGhpcy5yZW5kZXJMYWJlbCgpO1xuICAgIGNvbnN0IGNvbnRyb2xFbGVtID0gdGhpcy5yZW5kZXJDb250cm9sKHsgY2hpbGRyZW4sIGRyb3Bkb3duLCBlcnJvciB9KTtcbiAgICBjb25zdCBmb3JtRWxlbUNoaWxkcmVuID0gW2xhYmVsRWxlbSwgY29udHJvbEVsZW1dO1xuICAgIHJldHVybiB0aGlzLnJlbmRlckZvcm1FbGVtZW50KHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZXJyb3IsXG4gICAgICB0b3RhbENvbHMsXG4gICAgICBjb2xzLFxuICAgICAgc3R5bGUsXG4gICAgICBjaGlsZHJlbjogZm9ybUVsZW1DaGlsZHJlbixcbiAgICB9KTtcbiAgfVxuXG59XG5cbkZvcm1FbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgZHJvcGRvd246IFByb3BUeXBlcy5lbGVtZW50LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICBdKSxcbiAgZm9ybUVsZW1lbnRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkZvcm1FbGVtZW50LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19