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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElement = function (_React$Component) {
  (0, _inherits3.default)(FormElement, _React$Component);

  function FormElement(props) {
    (0, _classCallCheck3.default)(this, FormElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormElement).call(this, props));

    (0, _util.registerStyle)('dropdown', [['.react-slds-dropdown-control-wrapper', '{ height: 0; }'], ['.slds-has-error .react-slds-dropdown-control-wrapper', '{ height: auto; }'], ['.react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: relative; padding-top: 0.1px; margin-top: -0.1px }'], ['.react-slds-dropdown-form-element', '{ position: static; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: -1em; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-lookup__menu', '{ top: -1em; }'], ['.slds-form--horizontal .slds-has-error .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: 0; }'], ['.slds-modal .react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: absolute; }']]);
    return _this;
  }

  (0, _createClass3.default)(FormElement, [{
    key: 'renderFormElement',
    value: function renderFormElement(props) {
      var className = props.className;
      var error = props.error;
      var totalCols = props.totalCols;
      var _props$cols = props.cols;
      var cols = _props$cols === undefined ? 1 : _props$cols;
      var top = props.top;
      var bottom = props.bottom;

      var formElementClassNames = (0, _classnames3.default)('slds-form-element', (0, _defineProperty3.default)({
        'slds-has-error': error
      }, 'slds-size--' + cols + '-of-' + totalCols, typeof totalCols === 'number'), className);

      return _react2.default.createElement(
        'div',
        { className: formElementClassNames },
        top,
        bottom
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var _props = this.props;
      var id = _props.id;
      var label = _props.label;
      var required = _props.required;

      return label ? _react2.default.createElement(
        'label',
        { className: 'slds-form-element__label', htmlFor: id },
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
      var error = props.error;
      var children = props.children;

      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'div',
        { className: 'slds-form-element__control' },
        children,
        errorMessage ? _react2.default.createElement(
          'span',
          { className: 'slds-form-element__help' },
          errorMessage
        ) : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var dropdown = _props2.dropdown;
      var className = _props2.className;
      var totalCols = _props2.totalCols;
      var cols = _props2.cols;
      var error = _props2.error;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['dropdown', 'className', 'totalCols', 'cols', 'error', 'children']);

      var labelElem = this.renderLabel();
      if (dropdown) {
        var _controlElem = this.renderControl({ children: children });
        var innerFormElem = this.renderFormElement((0, _extends3.default)({}, props, { top: labelElem, bottom: _controlElem }));
        var outerControlElem = this.renderControl({ error: error, children: dropdown });
        var outerFormClassName = (0, _classnames3.default)('react-slds-dropdown-form-element', className);
        return this.renderFormElement((0, _extends3.default)({}, props, { error: error, totalCols: totalCols, cols: cols,
          className: outerFormClassName,
          top: innerFormElem,
          bottom: _react2.default.createElement(
            'div',
            { className: 'react-slds-dropdown-control-wrapper' },
            outerControlElem
          )
        }));
      }

      var controlElem = this.renderControl({ children: children, error: error });
      return this.renderFormElement((0, _extends3.default)({}, props, { className: className, error: error, totalCols: totalCols, cols: cols,
        top: labelElem, bottom: controlElem
      }));
    }
  }]);
  return FormElement;
}(_react2.default.Component);

exports.default = FormElement;


FormElement.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  cols: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  dropdown: _react.PropTypes.element,
  children: _react.PropTypes.element
};

FormElement.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQixXOzs7QUFFbkIsdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYLEtBRFc7O0FBRWpCLDZCQUFjLFVBQWQsRUFBMEIsQ0FDeEIsQ0FDRSxzQ0FERixFQUVFLGdCQUZGLENBRHdCLEVBS3hCLENBQ0Usc0RBREYsRUFFRSxtQkFGRixDQUx3QixFQVN4QixDQUNFLG9FQURGLEVBRUUsZ0VBRkYsQ0FUd0IsRUFheEIsQ0FDRSxtQ0FERixFQUVFLHVCQUZGLENBYndCLEVBaUJ4QixDQUNFLDRFQURGLEVBRUUsZ0JBRkYsQ0FqQndCLEVBcUJ4QixDQUNFLGdGQURGLEVBRUUsZ0JBRkYsQ0FyQndCLEVBeUJ4QixDQUNFLDRGQURGLEVBRUUsYUFGRixDQXpCd0IsRUE2QnhCLENBQ0UsZ0ZBREYsRUFFRSx5QkFGRixDQTdCd0IsQ0FBMUI7QUFGaUI7QUFvQ2xCOzs7O3NDQUVpQixLLEVBQU87QUFBQSxVQUNmLFNBRGUsR0FDd0MsS0FEeEMsQ0FDZixTQURlO0FBQUEsVUFDSixLQURJLEdBQ3dDLEtBRHhDLENBQ0osS0FESTtBQUFBLFVBQ0csU0FESCxHQUN3QyxLQUR4QyxDQUNHLFNBREg7QUFBQSx3QkFDd0MsS0FEeEMsQ0FDYyxJQURkO0FBQUEsVUFDYyxJQURkLCtCQUNxQixDQURyQjtBQUFBLFVBQ3dCLEdBRHhCLEdBQ3dDLEtBRHhDLENBQ3dCLEdBRHhCO0FBQUEsVUFDNkIsTUFEN0IsR0FDd0MsS0FEeEMsQ0FDNkIsTUFEN0I7O0FBRXZCLFVBQU0sd0JBQXdCLDBCQUM1QixtQkFENEI7QUFHMUIsMEJBQWtCO0FBSFEseUJBSVgsSUFKVyxZQUlBLFNBSkEsRUFJYyxPQUFPLFNBQVAsS0FBcUIsUUFKbkMsR0FNNUIsU0FO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Q0FMZTtBQVl0QixRQUFNLGlCQUFVLE1BWk07QUFhdEIsYUFBVyxpQkFBVSxNQWJDO0FBY3RCLFlBQVUsaUJBQVUsT0FkRTtBQWV0QixZQUFVLGlCQUFVO0FBZkUsQ0FBeEI7O0FBa0JBLFlBQVksYUFBWixHQUE0QixJQUE1QiIsImZpbGUiOiJGb3JtRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICByZWdpc3RlclN0eWxlKCdkcm9wZG93bicsIFtcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICAgICd7IGhlaWdodDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtaGFzLWVycm9yIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICAgICd7IGhlaWdodDogYXV0bzsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyID4gLnNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgJ3sgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLXRvcDogMC4xcHg7IG1hcmdpbi10b3A6IC0wLjFweCB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy1kcm9wZG93bi1mb3JtLWVsZW1lbnQnLFxuICAgICAgICAneyBwb3NpdGlvbjogc3RhdGljOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1mb3JtLS1ob3Jpem9udGFsIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlciAuc2xkcy1kcm9wZG93bicsXG4gICAgICAgICd7IHRvcDogLTFlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgLnNsZHMtbG9va3VwX19tZW51JyxcbiAgICAgICAgJ3sgdG9wOiAtMWVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1mb3JtLS1ob3Jpem9udGFsIC5zbGRzLWhhcy1lcnJvciAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgLnNsZHMtZHJvcGRvd24nLFxuICAgICAgICAneyB0b3A6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLW1vZGFsIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlciA+IC5zbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgcmVuZGVyRm9ybUVsZW1lbnQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZXJyb3IsIHRvdGFsQ29scywgY29scyA9IDEsIHRvcCwgYm90dG9tIH0gPSBwcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbWVudENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50JyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXG4gICAgICAgIFtgc2xkcy1zaXplLS0ke2NvbHN9LW9mLSR7dG90YWxDb2xzfWBdOiB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZm9ybUVsZW1lbnRDbGFzc05hbWVzIH0+XG4gICAgICAgIHsgdG9wIH1cbiAgICAgICAgeyBib3R0b20gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxhYmVsKCkge1xuICAgIGNvbnN0IHsgaWQsIGxhYmVsLCByZXF1aXJlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgbGFiZWwgP1xuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJyBodG1sRm9yPXsgaWQgfT5cbiAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgIHtcbiAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvbGFiZWw+IDpcbiAgICAgIHVuZGVmaW5lZFxuICAgICk7XG4gIH1cblxuICByZW5kZXJDb250cm9sKHByb3BzKSB7XG4gICAgY29uc3QgeyBlcnJvciwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBlcnJvciA/XG4gICAgICAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDpcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICAgdW5kZWZpbmVkKSA6XG4gICAgICB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCc+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9zcGFuPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkcm9wZG93biwgY2xhc3NOYW1lLCB0b3RhbENvbHMsIGNvbHMsIGVycm9yLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGFiZWxFbGVtID0gdGhpcy5yZW5kZXJMYWJlbCgpO1xuICAgIGlmIChkcm9wZG93bikge1xuICAgICAgY29uc3QgY29udHJvbEVsZW0gPSB0aGlzLnJlbmRlckNvbnRyb2woeyBjaGlsZHJlbiB9KTtcbiAgICAgIGNvbnN0IGlubmVyRm9ybUVsZW0gPSB0aGlzLnJlbmRlckZvcm1FbGVtZW50KHsgLi4ucHJvcHMsIHRvcDogbGFiZWxFbGVtLCBib3R0b206IGNvbnRyb2xFbGVtIH0pO1xuICAgICAgY29uc3Qgb3V0ZXJDb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGVycm9yLCBjaGlsZHJlbjogZHJvcGRvd24gfSk7XG4gICAgICBjb25zdCBvdXRlckZvcm1DbGFzc05hbWUgPSBjbGFzc25hbWVzKCdyZWFjdC1zbGRzLWRyb3Bkb3duLWZvcm0tZWxlbWVudCcsIGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7XG4gICAgICAgIC4uLnByb3BzLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgICBjbGFzc05hbWU6IG91dGVyRm9ybUNsYXNzTmFtZSxcbiAgICAgICAgdG9wOiBpbm5lckZvcm1FbGVtLFxuICAgICAgICBib3R0b206IDxkaXYgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcic+eyBvdXRlckNvbnRyb2xFbGVtIH08L2Rpdj4sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGNoaWxkcmVuLCBlcnJvciB9KTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7XG4gICAgICAuLi5wcm9wcywgY2xhc3NOYW1lLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgdG9wOiBsYWJlbEVsZW0sIGJvdHRvbTogY29udHJvbEVsZW0sXG4gICAgfSk7XG4gIH1cblxufVxuXG5Gb3JtRWxlbWVudC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG5cbkZvcm1FbGVtZW50LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19