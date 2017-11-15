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

  function FormElement() {
    (0, _classCallCheck3.default)(this, FormElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FormElement.__proto__ || (0, _getPrototypeOf2.default)(FormElement)).call(this));

    _this.registerDropdownStyle();
    return _this;
  }

  // new function that can be easily overrided


  (0, _createClass3.default)(FormElement, [{
    key: 'registerDropdownStyle',
    value: function registerDropdownStyle() {
      /* eslint-disable max-len */
      (0, _util.registerStyle)('dropdown', [['.react-slds-dropdown-control-wrapper', '{ height: 0; }'], ['.slds-has-error .react-slds-dropdown-control-wrapper', '{ height: auto; }'], ['.react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: relative; padding-top: 0.1px; margin-top: -0.1px; vertical-align: top; }'], ['.react-slds-dropdown-form-element', '{ position: static; }'], ['.slds-form--horizontal .slds-has-error .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: 0; }'], ['.slds-modal .react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: absolute; }'], ['.slds-modal .react-slds-dropdown-control-wrapper > .slds-form-element__control > .slds-lookup__menu', '{ min-width: 20rem; }'], ['.slds-input-has-icon--left-right .slds-input__icon--right', '{ left: auto; }']]);
    }
  }, {
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
          error = props.error;
      var readOnly = this.props.readOnly;

      var formElementControlClassNames = (0, _classnames3.default)('slds-form-element__control', { 'slds-has-divider--bottom': readOnly });
      return _react2.default.createElement(
        'div',
        { key: 'form-element-control', className: formElementControlClassNames },
        children,
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
      if (dropdown) {
        var _controlElem = this.renderControl({ children: children });
        var _formElemChildren = [labelElem, _controlElem];
        var innerFormElem = this.renderFormElement((0, _extends3.default)({}, props, { children: _formElemChildren }));
        var outerControlElem = this.renderControl({ error: error, children: dropdown });
        var outerFormElemChildren = [innerFormElem, _react2.default.createElement(
          'div',
          { key: 'outer-form-element', className: 'react-slds-dropdown-control-wrapper', style: style },
          outerControlElem
        )];
        var outerFormClassName = (0, _classnames3.default)('react-slds-dropdown-form-element', className);
        return this.renderFormElement((0, _extends3.default)({}, props, {
          error: error,
          totalCols: totalCols,
          cols: cols,
          className: outerFormClassName,
          children: outerFormElemChildren
        }));
      }
      var controlElem = this.renderControl({ children: children, error: error });
      var formElemChildren = [labelElem, controlElem];
      return this.renderFormElement((0, _extends3.default)({}, props, {
        className: className,
        error: error,
        totalCols: totalCols,
        cols: cols,
        children: formElemChildren
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
  readOnly: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  dropdown: _react.PropTypes.element,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.arrayOf(_react.PropTypes.element)]),
  formElementRef: _react.PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object
};

FormElement.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbIkZvcm1FbGVtZW50IiwicmVnaXN0ZXJEcm9wZG93blN0eWxlIiwicHJvcHMiLCJjbGFzc05hbWUiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbWVudFJlZiIsImNoaWxkcmVuIiwiZm9ybUVsZW1lbnRDbGFzc05hbWVzIiwiaWQiLCJsYWJlbCIsInJlcXVpcmVkIiwidW5kZWZpbmVkIiwicmVhZE9ubHkiLCJmb3JtRWxlbWVudENvbnRyb2xDbGFzc05hbWVzIiwicmVuZGVyRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZHJvcGRvd24iLCJzdHlsZSIsImxhYmVsRWxlbSIsInJlbmRlckxhYmVsIiwiY29udHJvbEVsZW0iLCJyZW5kZXJDb250cm9sIiwiZm9ybUVsZW1DaGlsZHJlbiIsImlubmVyRm9ybUVsZW0iLCJyZW5kZXJGb3JtRWxlbWVudCIsIm91dGVyQ29udHJvbEVsZW0iLCJvdXRlckZvcm1FbGVtQ2hpbGRyZW4iLCJvdXRlckZvcm1DbGFzc05hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwib25lT2ZUeXBlIiwic2hhcGUiLCJudW1iZXIiLCJlbGVtZW50IiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFc7OztBQUVuQix5QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLHFCQUFMO0FBRlk7QUFHYjs7QUFFRDs7Ozs7NENBQ3dCO0FBQ3RCO0FBQ0EsK0JBQWMsVUFBZCxFQUEwQixDQUN4QixDQUNFLHNDQURGLEVBRUUsZ0JBRkYsQ0FEd0IsRUFLeEIsQ0FDRSxzREFERixFQUVFLG1CQUZGLENBTHdCLEVBU3hCLENBQ0Usb0VBREYsRUFFRSxzRkFGRixDQVR3QixFQWF4QixDQUNFLG1DQURGLEVBRUUsdUJBRkYsQ0Fid0IsRUFpQnhCLENBQ0UsNEZBREYsRUFFRSxhQUZGLENBakJ3QixFQXFCeEIsQ0FDRSxnRkFERixFQUVFLHlCQUZGLENBckJ3QixFQXlCeEIsQ0FDRSxxR0FERixFQUVFLHVCQUZGLENBekJ3QixFQTZCeEIsQ0FDRSwyREFERixFQUVFLGlCQUZGLENBN0J3QixDQUExQjtBQWtDRDs7O3NDQUVpQkMsSyxFQUFPO0FBQUEsVUFDZkMsU0FEZSxHQUNxREQsS0FEckQsQ0FDZkMsU0FEZTtBQUFBLFVBQ0pDLEtBREksR0FDcURGLEtBRHJELENBQ0pFLEtBREk7QUFBQSxVQUNHQyxTQURILEdBQ3FESCxLQURyRCxDQUNHRyxTQURIO0FBQUEsd0JBQ3FESCxLQURyRCxDQUNjSSxJQURkO0FBQUEsVUFDY0EsSUFEZCwrQkFDcUIsQ0FEckI7QUFBQSxVQUN3QkMsY0FEeEIsR0FDcURMLEtBRHJELENBQ3dCSyxjQUR4QjtBQUFBLFVBQ3dDQyxRQUR4QyxHQUNxRE4sS0FEckQsQ0FDd0NNLFFBRHhDOztBQUV2QixVQUFNQyx3QkFBd0IsMEJBQzVCLG1CQUQ0QjtBQUcxQiwwQkFBa0JMO0FBSFEseUJBSVhFLElBSlcsWUFJQUQsU0FKQSxFQUljLE9BQU9BLFNBQVAsS0FBcUIsUUFKbkMsR0FNNUJGLFNBTjRCLENBQTlCO0FBUUEsYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFNSSxjQURSO0FBRUUsZUFBSSxjQUZOO0FBR0UscUJBQVlFO0FBSGQ7QUFLSUQ7QUFMSixPQURGO0FBU0Q7OztrQ0FFYTtBQUFBLG1CQUNvQixLQUFLTixLQUR6QjtBQUFBLFVBQ0pRLEVBREksVUFDSkEsRUFESTtBQUFBLFVBQ0FDLEtBREEsVUFDQUEsS0FEQTtBQUFBLFVBQ09DLFFBRFAsVUFDT0EsUUFEUDs7QUFFWixhQUNFRCxRQUNFO0FBQUE7QUFBQTtBQUNFLGVBQUksb0JBRE47QUFFRSxxQkFBVSwwQkFGWjtBQUdFLG1CQUFVRDtBQUhaO0FBS0lDLGFBTEo7QUFPSUMsbUJBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVSxlQUFoQjtBQUFBO0FBQUEsU0FERixHQUVFQztBQVROLE9BREYsR0FhRUEsU0FkSjtBQWdCRDs7O2tDQUVhWCxLLEVBQU87QUFBQSxVQUNYTSxRQURXLEdBQ1NOLEtBRFQsQ0FDWE0sUUFEVztBQUFBLFVBQ0RKLEtBREMsR0FDU0YsS0FEVCxDQUNERSxLQURDO0FBQUEsVUFFWFUsUUFGVyxHQUVFLEtBQUtaLEtBRlAsQ0FFWFksUUFGVzs7QUFHbkIsVUFBTUMsK0JBQStCLDBCQUNuQyw0QkFEbUMsRUFFbkMsRUFBRSw0QkFBNEJELFFBQTlCLEVBRm1DLENBQXJDO0FBSUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxLQUFJLHNCQUFULEVBQWdDLFdBQVdDLDRCQUEzQztBQUNJUCxnQkFESjtBQUVJLGFBQUtRLFdBQUwsQ0FBaUJaLEtBQWpCO0FBRkosT0FERjtBQU1EOzs7Z0NBRVdBLEssRUFBTztBQUNqQixVQUFNYSxlQUNKYixRQUNHLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQ0MsUUFBT0EsS0FBUCx1REFBT0EsS0FBUCxPQUFpQixRQUFqQixHQUE0QkEsTUFBTWMsT0FBbEMsR0FDRUwsU0FITixHQUlFQSxTQUxKO0FBTUEsYUFBT0ksZUFDTDtBQUFBO0FBQUEsVUFBTSxLQUFJLGlCQUFWLEVBQTRCLFdBQVUseUJBQXRDO0FBQWtFQTtBQUFsRSxPQURLLEdBRUhKLFNBRko7QUFHRDs7OzZCQUVRO0FBQUEsb0JBSUgsS0FBS1gsS0FKRjtBQUFBLFVBRUxpQixRQUZLLFdBRUxBLFFBRks7QUFBQSxVQUVLaEIsU0FGTCxXQUVLQSxTQUZMO0FBQUEsVUFFZ0JFLFNBRmhCLFdBRWdCQSxTQUZoQjtBQUFBLFVBRTJCQyxJQUYzQixXQUUyQkEsSUFGM0I7QUFBQSxVQUVpQ0YsS0FGakMsV0FFaUNBLEtBRmpDO0FBQUEsVUFHTEksUUFISyxXQUdMQSxRQUhLO0FBQUEsVUFHS1ksS0FITCxXQUdLQSxLQUhMO0FBQUEsVUFHZWxCLEtBSGY7O0FBS1AsVUFBTW1CLFlBQVksS0FBS0MsV0FBTCxFQUFsQjtBQUNBLFVBQUlILFFBQUosRUFBYztBQUNaLFlBQU1JLGVBQWMsS0FBS0MsYUFBTCxDQUFtQixFQUFFaEIsa0JBQUYsRUFBbkIsQ0FBcEI7QUFDQSxZQUFNaUIsb0JBQW1CLENBQUNKLFNBQUQsRUFBWUUsWUFBWixDQUF6QjtBQUNBLFlBQU1HLGdCQUFnQixLQUFLQyxpQkFBTCw0QkFBNEJ6QixLQUE1QixJQUFtQ00sVUFBVWlCLGlCQUE3QyxJQUF0QjtBQUNBLFlBQU1HLG1CQUFtQixLQUFLSixhQUFMLENBQW1CLEVBQUVwQixZQUFGLEVBQVNJLFVBQVVXLFFBQW5CLEVBQW5CLENBQXpCO0FBQ0EsWUFBTVUsd0JBQXdCLENBQzVCSCxhQUQ0QixFQUU1QjtBQUFBO0FBQUEsWUFBSyxLQUFJLG9CQUFULEVBQThCLFdBQVUscUNBQXhDLEVBQThFLE9BQU9OLEtBQXJGO0FBQ0lRO0FBREosU0FGNEIsQ0FBOUI7QUFNQSxZQUFNRSxxQkFBcUIsMEJBQVcsa0NBQVgsRUFBK0MzQixTQUEvQyxDQUEzQjtBQUNBLGVBQU8sS0FBS3dCLGlCQUFMLDRCQUNGekIsS0FERTtBQUVMRSxzQkFGSztBQUdMQyw4QkFISztBQUlMQyxvQkFKSztBQUtMSCxxQkFBVzJCLGtCQUxOO0FBTUx0QixvQkFBVXFCO0FBTkwsV0FBUDtBQVFEO0FBQ0QsVUFBTU4sY0FBYyxLQUFLQyxhQUFMLENBQW1CLEVBQUVoQixrQkFBRixFQUFZSixZQUFaLEVBQW5CLENBQXBCO0FBQ0EsVUFBTXFCLG1CQUFtQixDQUFDSixTQUFELEVBQVlFLFdBQVosQ0FBekI7QUFDQSxhQUFPLEtBQUtJLGlCQUFMLDRCQUNGekIsS0FERTtBQUVMQyw0QkFGSztBQUdMQyxvQkFISztBQUlMQyw0QkFKSztBQUtMQyxrQkFMSztBQU1MRSxrQkFBVWlCO0FBTkwsU0FBUDtBQVFEOzs7RUF2SnNDLGdCQUFNTSxTOztrQkFBMUIvQixXOzs7QUEySnJCQSxZQUFZZ0MsU0FBWixHQUF3QjtBQUN0QnRCLE1BQUksaUJBQVV1QixNQURRO0FBRXRCOUIsYUFBVyxpQkFBVThCLE1BRkM7QUFHdEJ0QixTQUFPLGlCQUFVc0IsTUFISztBQUl0QnJCLFlBQVUsaUJBQVVzQixJQUpFO0FBS3RCOUIsU0FBTyxpQkFBVStCLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVVELElBRGUsRUFFekIsaUJBQVVELE1BRmUsRUFHekIsaUJBQVVHLEtBQVYsQ0FBZ0I7QUFDZGxCLGFBQVMsaUJBQVVlO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FMZTtBQVl0Qm5CLFlBQVUsaUJBQVVvQixJQVpFO0FBYXRCNUIsUUFBTSxpQkFBVStCLE1BYk07QUFjdEJoQyxhQUFXLGlCQUFVZ0MsTUFkQztBQWV0QmxCLFlBQVUsaUJBQVVtQixPQWZFO0FBZ0J0QjlCLFlBQVUsaUJBQVUyQixTQUFWLENBQW9CLENBQzVCLGlCQUFVRyxPQURrQixFQUU1QixpQkFBVUMsT0FBVixDQUFrQixpQkFBVUQsT0FBNUIsQ0FGNEIsQ0FBcEIsQ0FoQlk7QUFvQnRCL0Isa0JBQWdCLGlCQUFVaUMsSUFwQko7QUFxQnRCO0FBQ0FwQixTQUFPLGlCQUFVcUI7QUF0QkssQ0FBeEI7O0FBeUJBekMsWUFBWTBDLGFBQVosR0FBNEIsSUFBNUIiLCJmaWxlIjoiRm9ybUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlZ2lzdGVyRHJvcGRvd25TdHlsZSgpO1xuICB9XG5cbiAgLy8gbmV3IGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGVhc2lseSBvdmVycmlkZWRcbiAgcmVnaXN0ZXJEcm9wZG93blN0eWxlKCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZWdpc3RlclN0eWxlKCdkcm9wZG93bicsIFtcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICAgICd7IGhlaWdodDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtaGFzLWVycm9yIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcicsXG4gICAgICAgICd7IGhlaWdodDogYXV0bzsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyID4gLnNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgJ3sgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLXRvcDogMC4xcHg7IG1hcmdpbi10b3A6IC0wLjFweDsgdmVydGljYWwtYWxpZ246IHRvcDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tZm9ybS1lbGVtZW50JyxcbiAgICAgICAgJ3sgcG9zaXRpb246IHN0YXRpYzsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAuc2xkcy1oYXMtZXJyb3IgLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyIC5zbGRzLWRyb3Bkb3duJyxcbiAgICAgICAgJ3sgdG9wOiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1tb2RhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgPiAuc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAneyBwb3NpdGlvbjogYWJzb2x1dGU7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLW1vZGFsIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlciA+IC5zbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCA+IC5zbGRzLWxvb2t1cF9fbWVudScsXG4gICAgICAgICd7IG1pbi13aWR0aDogMjByZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0LXJpZ2h0IC5zbGRzLWlucHV0X19pY29uLS1yaWdodCcsXG4gICAgICAgICd7IGxlZnQ6IGF1dG87IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIHJlbmRlckZvcm1FbGVtZW50KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgPSAxLCBmb3JtRWxlbWVudFJlZiwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtZW50Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgW2BzbGRzLXNpemUtLSR7Y29sc30tb2YtJHt0b3RhbENvbHN9YF06IHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsgZm9ybUVsZW1lbnRSZWYgfVxuICAgICAgICBrZXk9J2Zvcm0tZWxlbWVudCdcbiAgICAgICAgY2xhc3NOYW1lPXsgZm9ybUVsZW1lbnRDbGFzc05hbWVzIH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWwoKSB7XG4gICAgY29uc3QgeyBpZCwgbGFiZWwsIHJlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICBsYWJlbCA/XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGtleT0nZm9ybS1lbGVtZW50LWxhYmVsJ1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJ1xuICAgICAgICAgIGh0bWxGb3I9eyBpZCB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGFiZWw+IDpcbiAgICAgICAgdW5kZWZpbmVkXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBlcnJvciB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyByZWFkT25seSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbWVudENvbnRyb2xDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICB7ICdzbGRzLWhhcy1kaXZpZGVyLS1ib3R0b20nOiByZWFkT25seSB9LFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PSdmb3JtLWVsZW1lbnQtY29udHJvbCcgY2xhc3NOYW1lPXtmb3JtRWxlbWVudENvbnRyb2xDbGFzc05hbWVzfT5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJFcnJvcihlcnJvcikgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckVycm9yKGVycm9yKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgICAgICAgdW5kZWZpbmVkKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZXJyb3JNZXNzYWdlID9cbiAgICAgIDxzcGFuIGtleT0nc2xkcy1mb3JtLWVycm9yJyBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9zcGFuPiA6XG4gICAgICAgIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkcm9wZG93biwgY2xhc3NOYW1lLCB0b3RhbENvbHMsIGNvbHMsIGVycm9yLFxuICAgICAgY2hpbGRyZW4sIHN0eWxlLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxhYmVsRWxlbSA9IHRoaXMucmVuZGVyTGFiZWwoKTtcbiAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xFbGVtID0gdGhpcy5yZW5kZXJDb250cm9sKHsgY2hpbGRyZW4gfSk7XG4gICAgICBjb25zdCBmb3JtRWxlbUNoaWxkcmVuID0gW2xhYmVsRWxlbSwgY29udHJvbEVsZW1dO1xuICAgICAgY29uc3QgaW5uZXJGb3JtRWxlbSA9IHRoaXMucmVuZGVyRm9ybUVsZW1lbnQoeyAuLi5wcm9wcywgY2hpbGRyZW46IGZvcm1FbGVtQ2hpbGRyZW4gfSk7XG4gICAgICBjb25zdCBvdXRlckNvbnRyb2xFbGVtID0gdGhpcy5yZW5kZXJDb250cm9sKHsgZXJyb3IsIGNoaWxkcmVuOiBkcm9wZG93biB9KTtcbiAgICAgIGNvbnN0IG91dGVyRm9ybUVsZW1DaGlsZHJlbiA9IFtcbiAgICAgICAgaW5uZXJGb3JtRWxlbSxcbiAgICAgICAgPGRpdiBrZXk9J291dGVyLWZvcm0tZWxlbWVudCcgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcicgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICB7IG91dGVyQ29udHJvbEVsZW0gfVxuICAgICAgICA8L2Rpdj4sXG4gICAgICBdO1xuICAgICAgY29uc3Qgb3V0ZXJGb3JtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcygncmVhY3Qtc2xkcy1kcm9wZG93bi1mb3JtLWVsZW1lbnQnLCBjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQoe1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIHRvdGFsQ29scyxcbiAgICAgICAgY29scyxcbiAgICAgICAgY2xhc3NOYW1lOiBvdXRlckZvcm1DbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuOiBvdXRlckZvcm1FbGVtQ2hpbGRyZW4sXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbEVsZW0gPSB0aGlzLnJlbmRlckNvbnRyb2woeyBjaGlsZHJlbiwgZXJyb3IgfSk7XG4gICAgY29uc3QgZm9ybUVsZW1DaGlsZHJlbiA9IFtsYWJlbEVsZW0sIGNvbnRyb2xFbGVtXTtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7XG4gICAgICAuLi5wcm9wcyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGVycm9yLFxuICAgICAgdG90YWxDb2xzLFxuICAgICAgY29scyxcbiAgICAgIGNoaWxkcmVuOiBmb3JtRWxlbUNoaWxkcmVuLFxuICAgIH0pO1xuICB9XG5cbn1cblxuRm9ybUVsZW1lbnQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgXSksXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBkcm9wZG93bjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIF0pLFxuICBmb3JtRWxlbWVudFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuRm9ybUVsZW1lbnQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=