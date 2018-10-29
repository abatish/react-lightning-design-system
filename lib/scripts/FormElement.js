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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbIkZvcm1FbGVtZW50IiwicHJvcHMiLCJjbGFzc05hbWUiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbWVudFJlZiIsImNoaWxkcmVuIiwiZm9ybUVsZW1lbnRDbGFzc05hbWVzIiwiaWQiLCJsYWJlbCIsInJlcXVpcmVkIiwidW5kZWZpbmVkIiwiZHJvcGRvd24iLCJyZWFkT25seSIsImZvcm1FbGVtZW50Q29udHJvbENsYXNzTmFtZXMiLCJyZW5kZXJFcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImxhYmVsRWxlbSIsInJlbmRlckxhYmVsIiwiY29udHJvbEVsZW0iLCJyZW5kZXJDb250cm9sIiwiZm9ybUVsZW1DaGlsZHJlbiIsInJlbmRlckZvcm1FbGVtZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwic2hhcGUiLCJudW1iZXIiLCJlbGVtZW50IiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7OztzQ0FFREMsSyxFQUFPO0FBQUEsVUFDZkMsU0FEZSxHQUNxREQsS0FEckQsQ0FDZkMsU0FEZTtBQUFBLFVBQ0pDLEtBREksR0FDcURGLEtBRHJELENBQ0pFLEtBREk7QUFBQSxVQUNHQyxTQURILEdBQ3FESCxLQURyRCxDQUNHRyxTQURIO0FBQUEsd0JBQ3FESCxLQURyRCxDQUNjSSxJQURkO0FBQUEsVUFDY0EsSUFEZCwrQkFDcUIsQ0FEckI7QUFBQSxVQUN3QkMsY0FEeEIsR0FDcURMLEtBRHJELENBQ3dCSyxjQUR4QjtBQUFBLFVBQ3dD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LE1BRkM7QUFHdEJwQixTQUFPbUIsb0JBQVVDLE1BSEs7QUFJdEJuQixZQUFVa0Isb0JBQVVFLElBSkU7QUFLdEI1QixTQUFPMEIsb0JBQVVHLFNBQVYsQ0FBb0IsQ0FDekJILG9CQUFVRSxJQURlLEVBRXpCRixvQkFBVUMsTUFGZSxFQUd6QkQsb0JBQVVJLEtBQVYsQ0FBZ0I7QUFDZGYsYUFBU1csb0JBQVVDO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FMZTtBQVl0QmhCLFlBQVVlLG9CQUFVRSxJQVpFO0FBYXRCMUIsUUFBTXdCLG9CQUFVSyxNQWJNO0FBY3RCOUIsYUFBV3lCLG9CQUFVSyxNQWRDO0FBZXRCckIsWUFBVWdCLG9CQUFVTSxPQWZFO0FBZ0J0QjVCLFlBQVVzQixvQkFBVUcsU0FBVixDQUFvQixDQUM1Qkgsb0JBQVVNLE9BRGtCLEVBRTVCTixvQkFBVU8sT0FBVixDQUFrQlAsb0JBQVVNLE9BQTVCLENBRjRCLENBQXBCLENBaEJZO0FBb0J0QjdCLGtCQUFnQnVCLG9CQUFVUSxJQXBCSjtBQXFCdEI7QUFDQWxCLFNBQU9VLG9CQUFVUztBQXRCSyxDQUF4Qjs7QUF5QkF0QyxZQUFZdUMsYUFBWixHQUE0QixJQUE1QiIsImZpbGUiOiJGb3JtRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXJGb3JtRWxlbWVudChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzID0gMSwgZm9ybUVsZW1lbnRSZWYsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbWVudENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50JyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXG4gICAgICAgIFtgc2xkcy1zaXplLS0ke2NvbHN9LW9mLSR7dG90YWxDb2xzfWBdOiB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IGZvcm1FbGVtZW50UmVmIH1cbiAgICAgICAga2V5PSdmb3JtLWVsZW1lbnQnXG4gICAgICAgIGNsYXNzTmFtZT17IGZvcm1FbGVtZW50Q2xhc3NOYW1lcyB9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxhYmVsKCkge1xuICAgIGNvbnN0IHsgaWQsIGxhYmVsLCByZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgbGFiZWwgP1xuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBrZXk9J2Zvcm0tZWxlbWVudC1sYWJlbCdcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCdcbiAgICAgICAgICBodG1sRm9yPXsgaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2xhYmVsPiA6XG4gICAgICAgIHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb250cm9sKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgZHJvcGRvd24sIGVycm9yIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHJlYWRPbmx5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50Q29udHJvbENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgIHsgJ3NsZHMtaGFzLWRpdmlkZXItLWJvdHRvbSc6IHJlYWRPbmx5IH0sXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9J2Zvcm0tZWxlbWVudC1jb250cm9sJyBjbGFzc05hbWU9e2Zvcm1FbGVtZW50Q29udHJvbENsYXNzTmFtZXN9PlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgeyBkcm9wZG93biB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJFcnJvcihlcnJvcikgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgICAgICAgdW5kZWZpbmVkKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlID9cbiAgICAgIDxzcGFuIGtleT0nc2xkcy1mb3JtLWVycm9yJyBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9zcGFuPiA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkcm9wZG93biwgY2xhc3NOYW1lLCB0b3RhbENvbHMsIGNvbHMsIGVycm9yLFxuICAgICAgY2hpbGRyZW4sIHN0eWxlLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsRWxlbSA9IHRoaXMucmVuZGVyTGFiZWwoKTtcbiAgICBjb25zdCBjb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGNoaWxkcmVuLCBkcm9wZG93biwgZXJyb3IgfSk7XG4gICAgY29uc3QgZm9ybUVsZW1DaGlsZHJlbiA9IFtsYWJlbEVsZW0sIGNvbnRyb2xFbGVtXTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGVycm9yLFxuICAgICAgdG90YWxDb2xzLFxuICAgICAgY29scyxcbiAgICAgIHN0eWxlLFxuICAgICAgY2hpbGRyZW46IGZvcm1FbGVtQ2hpbGRyZW4sXG4gICAgfSk7XG4gIH1cblxufVxuXG5Gb3JtRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRyb3Bkb3duOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgXSksXG4gIGZvcm1FbGVtZW50UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5Gb3JtRWxlbWVudC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==