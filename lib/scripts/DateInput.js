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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _AutoAlign = require('./AutoAlign');

var _AutoAlign2 = _interopRequireDefault(_AutoAlign);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Datepicker = require('./Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
var DatepickerDropdown = function (_Component) {
  (0, _inherits3.default)(DatepickerDropdown, _Component);

  function DatepickerDropdown() {
    (0, _classCallCheck3.default)(this, DatepickerDropdown);
    return (0, _possibleConstructorReturn3.default)(this, (DatepickerDropdown.__proto__ || (0, _getPrototypeOf2.default)(DatepickerDropdown)).apply(this, arguments));
  }

  (0, _createClass3.default)(DatepickerDropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          align = _props.align,
          vertAlign = _props.vertAlign,
          dateValue = _props.dateValue,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          extensionRenderer = _props.extensionRenderer,
          elementRef = _props.elementRef,
          onSelect = _props.onSelect,
          onBlur = _props.onBlur,
          onClose = _props.onClose;

      var datepickerClassNames = (0, _classnames2.default)(className, 'slds-dropdown', align ? 'slds-dropdown--' + align : undefined, vertAlign ? 'slds-dropdown--' + vertAlign : undefined);
      var handleDOMRef = function handleDOMRef(node) {
        _this2.node = node;
        if (elementRef) {
          elementRef(node);
        }
      };
      return _react2.default.createElement(_Datepicker2.default, {
        elementRef: handleDOMRef,
        className: datepickerClassNames,
        selectedDate: dateValue,
        autoFocus: true,
        minDate: minDate,
        maxDate: maxDate,
        extensionRenderer: extensionRenderer,
        onSelect: onSelect,
        onBlur: onBlur,
        onClose: onClose
      });
    }
  }]);
  return DatepickerDropdown;
}(_react.Component);

DatepickerDropdown.propTypes = {
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'right']),
  vertAlign: _propTypes2.default.oneOf(['top', 'bottom']),
  dateValue: _propTypes2.default.string,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  elementRef: _propTypes2.default.func,
  extensionRenderer: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};


var DatepickerDropdownPortal = (0, _AutoAlign2.default)({
  triggerSelector: '.slds-dropdown-trigger'
})(DatepickerDropdown);

/**
 *
 */

var DateInput = function (_Component2) {
  (0, _inherits3.default)(DateInput, _Component2);

  function DateInput(props) {
    (0, _classCallCheck3.default)(this, DateInput);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (DateInput.__proto__ || (0, _getPrototypeOf2.default)(DateInput)).call(this));

    _this3.state = {
      id: 'form-element-' + (0, _util.uuid)(),
      opened: props.defaultOpened || false
    };

    _this3.onDateIconClick = _this3.onDateIconClick.bind(_this3);
    _this3.onInputKeyDown = _this3.onInputKeyDown.bind(_this3);
    _this3.onInputChange = _this3.onInputChange.bind(_this3);
    _this3.onInputBlur = _this3.onInputBlur.bind(_this3);
    _this3.onInputClick = _this3.onInputClick.bind(_this3);

    _this3.onDatepickerSelect = _this3.onDatepickerSelect.bind(_this3);
    _this3.onDatepickerBlur = _this3.onDatepickerBlur.bind(_this3);
    _this3.onDatepickerClose = _this3.onDatepickerClose.bind(_this3);

    (0, _util.registerStyle)('dateinput', [['.slds-has-error .slds-datepicker .slds-select', '{ border: 1px solid #d8dde6; box-shadow: none; }']]);
    return _this3;
  }

  (0, _createClass3.default)(DateInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onValueChange && prevState.value !== this.state.value) {
        this.props.onValueChange(this.state.value, prevState.value);
      }
    }
  }, {
    key: 'onDateIconClick',
    value: function onDateIconClick() {
      var _this4 = this;

      setTimeout(function () {
        _this4.showDatepicker();
      }, 10);
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      var _this5 = this;

      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        this.setValueFromInput(e.target.value);
        if (this.props.onComplete) {
          setTimeout(function () {
            _this5.props.onComplete();
          }, 10);
        }
      } else if (e.keyCode === 40) {
        // down key
        this.showDatepicker();
        e.preventDefault();
        e.stopPropagation();
      } else if (e.keyCode === 9) {
        this.setState({ opened: false });
      }

      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var inputValue = e.target.value;
      this.setState({ inputValue: inputValue });
      if (this.props.onChange) {
        this.props.onChange(e, inputValue);
      }
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      var _this6 = this;

      this.setValueFromInput(e.target.value);

      setTimeout(function () {
        if (!_this6.isFocusedInComponent()) {
          if (_this6.props.onBlur) {
            _this6.props.onBlur();
          }
          if (_this6.props.onComplete) {
            _this6.props.onComplete();
          }
          if (_this6.state.opened) {
            _this6.setState({ opened: false });
          }
        }
      }, 10);
    }
  }, {
    key: 'onInputClick',
    value: function onInputClick() {
      this.showDatepicker(false);
    }
  }, {
    key: 'onDatepickerSelect',
    value: function onDatepickerSelect(dvalue) {
      var _this7 = this;

      var value = (0, _moment2.default)(dvalue).format(this.getValueFormat());
      this.setState({ value: value, inputValue: undefined });
      setTimeout(function () {
        _this7.setState({ opened: false });
        var inputEl = _this7.input;
        if (inputEl) {
          inputEl.focus();
          inputEl.select();
        }
        if (_this7.props.onComplete) {
          _this7.props.onComplete();
        }
      }, 200);
    }
  }, {
    key: 'onDatepickerBlur',
    value: function onDatepickerBlur() {
      var _this8 = this;

      this.setState({ opened: false });
      setTimeout(function () {
        if (!_this8.isFocusedInComponent()) {
          if (_this8.props.onBlur) {
            _this8.props.onBlur();
          }
          if (_this8.props.onComplete) {
            _this8.props.onComplete();
          }
        }
      }, 10);
    }
  }, {
    key: 'onDatepickerClose',
    value: function onDatepickerClose() {
      this.setState({ opened: false });
      var inputEl = this.input;
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
    }
  }, {
    key: 'getValueFormat',
    value: function getValueFormat() {
      return this.props.includeTime ? (this.props.dateFormat ? this.props.dateFormat : 'YYYY-MM-DD') + 'THH:mm:ss.SSSZ' : this.props.dateFormat ? this.props.dateFormat : 'YYYY-MM-DD';
    }
  }, {
    key: 'getInputValueFormat',
    value: function getInputValueFormat() {
      return this.props.dateFormat || (this.props.includeTime ? 'L HH:mm' : 'L');
    }
  }, {
    key: 'setValueFromInput',
    value: function setValueFromInput(inputValue) {
      var value = this.state.value;
      if (value !== inputValue) {
        if (!inputValue) {
          value = '';
        } else {
          value = (0, _moment2.default)(inputValue, this.getInputValueFormat());
          if (value.isValid()) {
            value = value.format(this.getValueFormat());
          } else {
            value = '';
          }
        }
        this.setState({ value: value, inputValue: undefined });
      }
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var targetEl = document.activeElement;
      return (0, _util.isElInChildren)(this.node, targetEl) || (0, _util.isElInChildren)(this.datepicker, targetEl);
    }
  }, {
    key: 'showDatepicker',
    value: function showDatepicker(autoFocus) {
      var value = this.state.value;
      if (typeof this.state.inputValue !== 'undefined') {
        value = (0, _moment2.default)(this.state.inputValue, this.getInputValueFormat());
        if (value.isValid()) {
          value = value.format(this.getValueFormat());
        } else {
          value = this.state.value;
        }
      }
      this.setState({ opened: true, value: value, autoFocus: autoFocus });
    }
  }, {
    key: 'renderInput',
    value: function renderInput(_ref) {
      var _this9 = this;

      var inputValue = _ref.inputValue,
          props = (0, _objectWithoutProperties3.default)(_ref, ['inputValue']);

      var pprops = props;
      delete pprops.onValueChange;
      return _react2.default.createElement(
        'div',
        { className: 'slds-input-has-icon slds-input-has-icon--right' },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({
          inputRef: function inputRef(node) {
            return _this9.input = node;
          },
          value: inputValue
        }, props, {
          onKeyDown: this.onInputKeyDown,
          onChange: this.onInputChange,
          onBlur: this.onInputBlur,
          onClick: props.disabled ? undefined : this.onInputClick
        })),
        _react2.default.createElement(
          'span',
          {
            tabIndex: -1,
            style: props.disabled ? undefined : { position: 'relative', cursor: 'pointer', outline: 'none' },
            onClick: props.disabled ? undefined : this.onDateIconClick,
            onBlur: this.onInputBlur
          },
          _react2.default.createElement(_Icon2.default, { icon: 'event', className: 'slds-input__icon' })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this10 = this;

      var id = this.props.id || this.state.id;
      var _props2 = this.props,
          className = _props2.className,
          totalCols = _props2.totalCols,
          cols = _props2.cols,
          label = _props2.label,
          required = _props2.required,
          error = _props2.error,
          defaultValue = _props2.defaultValue,
          value = _props2.value,
          menuAlign = _props2.menuAlign,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          extensionRenderer = _props2.extensionRenderer,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'menuAlign', 'minDate', 'maxDate', 'extensionRenderer']);

      var dateValue = typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
      var mvalue = (0, _moment2.default)(dateValue, this.getValueFormat());
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(this.getInputValueFormat()) : '';
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error };
      delete props.dateFormat;
      delete props.defaultOpened;
      delete props.includeTime;
      delete props.onComplete;
      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this10.node = node;
          }
        }, formElemProps, {
          style: menuAlign === 'right' ? { position: 'absolute', right: null } : {}
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(className, 'slds-dropdown-trigger') },
          this.renderInput((0, _extends3.default)({ id: id, inputValue: inputValue }, props)),
          this.state.opened ? _react2.default.createElement(DatepickerDropdownPortal, {
            portalClassName: className,
            elementRef: function elementRef(node) {
              return _this10.datepicker = node;
            },
            dateValue: mvalue.isValid() ? mvalue.format('YYYY-MM-DD') : undefined,
            minDate: minDate,
            maxDate: maxDate,
            align: menuAlign,
            extensionRenderer: extensionRenderer,
            onBlur: this.onDatepickerBlur,
            onSelect: this.onDatepickerSelect,
            onClose: this.onDatepickerClose
          }) : undefined
        )
      );
    }
  }]);
  return DateInput;
}(_react.Component);

exports.default = DateInput;


var MENU_ALIGN = ['left', 'right'];

DateInput.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  defaultOpened: _propTypes2.default.bool,
  dateFormat: _propTypes2.default.string,
  includeTime: _propTypes2.default.bool,
  onKeyDown: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onValueChange: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  menuAlign: _propTypes2.default.oneOf(MENU_ALIGN),
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  extensionRenderer: _propTypes2.default.func
};

DateInput.defaultProps = {
  menuAlign: 'left'
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlcGlja2VyRHJvcGRvd24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImFsaWduIiwidmVydEFsaWduIiwiZGF0ZVZhbHVlIiwibWluRGF0ZSIsIm1heERhdGUiLCJleHRlbnNpb25SZW5kZXJlciIsImVsZW1lbnRSZWYiLCJvblNlbGVjdCIsIm9uQmx1ciIsIm9uQ2xvc2UiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsImhhbmRsZURPTVJlZiIsIm5vZGUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImZ1bmMiLCJEYXRlcGlja2VyRHJvcGRvd25Qb3J0YWwiLCJ0cmlnZ2VyU2VsZWN0b3IiLCJEYXRlSW5wdXQiLCJzdGF0ZSIsImlkIiwib3BlbmVkIiwiZGVmYXVsdE9wZW5lZCIsIm9uRGF0ZUljb25DbGljayIsImJpbmQiLCJvbklucHV0S2V5RG93biIsIm9uSW5wdXRDaGFuZ2UiLCJvbklucHV0Qmx1ciIsIm9uSW5wdXRDbGljayIsIm9uRGF0ZXBpY2tlclNlbGVjdCIsIm9uRGF0ZXBpY2tlckJsdXIiLCJvbkRhdGVwaWNrZXJDbG9zZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJzaG93RGF0ZXBpY2tlciIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRWYWx1ZUZyb21JbnB1dCIsInRhcmdldCIsIm9uQ29tcGxldGUiLCJzZXRTdGF0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJvbkNoYW5nZSIsImlzRm9jdXNlZEluQ29tcG9uZW50IiwiZHZhbHVlIiwiZm9ybWF0IiwiZ2V0VmFsdWVGb3JtYXQiLCJpbnB1dEVsIiwiaW5wdXQiLCJmb2N1cyIsInNlbGVjdCIsImluY2x1ZGVUaW1lIiwiZGF0ZUZvcm1hdCIsImdldElucHV0VmFsdWVGb3JtYXQiLCJpc1ZhbGlkIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJkYXRlcGlja2VyIiwiYXV0b0ZvY3VzIiwicHByb3BzIiwiZGlzYWJsZWQiLCJwb3NpdGlvbiIsImN1cnNvciIsIm91dGxpbmUiLCJ0b3RhbENvbHMiLCJjb2xzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwiZGVmYXVsdFZhbHVlIiwibWVudUFsaWduIiwibXZhbHVlIiwiZm9ybUVsZW1Qcm9wcyIsInJpZ2h0IiwicmVuZGVySW5wdXQiLCJNRU5VX0FMSUdOIiwiYm9vbCIsIkZvcm1FbGVtZW50IiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7OztJQUdNQSxrQjs7Ozs7Ozs7Ozs2QkFlSztBQUFBOztBQUFBLG1CQUtILEtBQUtDLEtBTEY7QUFBQSxVQUVMQyxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUVNQyxLQUZOLFVBRU1BLEtBRk47QUFBQSxVQUVhQyxTQUZiLFVBRWFBLFNBRmI7QUFBQSxVQUV3QkMsU0FGeEIsVUFFd0JBLFNBRnhCO0FBQUEsVUFFbUNDLE9BRm5DLFVBRW1DQSxPQUZuQztBQUFBLFVBRTRDQyxPQUY1QyxVQUU0Q0EsT0FGNUM7QUFBQSxVQUVxREMsaUJBRnJELFVBRXFEQSxpQkFGckQ7QUFBQSxVQUdMQyxVQUhLLFVBR0xBLFVBSEs7QUFBQSxVQUlMQyxRQUpLLFVBSUxBLFFBSks7QUFBQSxVQUlLQyxNQUpMLFVBSUtBLE1BSkw7QUFBQSxVQUlhQyxPQUpiLFVBSWFBLE9BSmI7O0FBTVAsVUFBTUMsdUJBQXVCLDBCQUMzQlgsU0FEMkIsRUFFM0IsZUFG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QUFWLENBQWdCb0UsVUFBaEIsQ0FsQlM7QUFtQnBCbkYsV0FBU2Esb0JBQVVDLE1BbkJDO0FBb0JwQmIsV0FBU1ksb0JBQVVDLE1BcEJDO0FBcUJwQloscUJBQW1CVyxvQkFBVUc7QUFyQlQsQ0FBdEI7O0FBd0JBRyxVQUFVb0UsWUFBVixHQUF5QjtBQUN2QlQsYUFBVztBQURZLENBQXpCOztBQUlBM0QsVUFBVXFFLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBEYXRlcGlja2VyRHJvcGRvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgICB2ZXJ0QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gICAgZGF0ZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbGVtZW50UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBhbGlnbiwgdmVydEFsaWduLCBkYXRlVmFsdWUsIG1pbkRhdGUsIG1heERhdGUsIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgZWxlbWVudFJlZixcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uQ2xvc2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYWxpZ24gPyBgc2xkcy1kcm9wZG93bi0tJHthbGlnbn1gIDogdW5kZWZpbmVkLFxuICAgICAgdmVydEFsaWduID8gYHNsZHMtZHJvcGRvd24tLSR7dmVydEFsaWdufWAgOiB1bmRlZmluZWQsXG4gICAgKTtcbiAgICBjb25zdCBoYW5kbGVET01SZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgIGlmIChlbGVtZW50UmVmKSB7IGVsZW1lbnRSZWYobm9kZSk7IH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RGF0ZXBpY2tlclxuICAgICAgICBlbGVtZW50UmVmPXsgaGFuZGxlRE9NUmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgbWluRGF0ZT17IG1pbkRhdGUgfVxuICAgICAgICBtYXhEYXRlPXsgbWF4RGF0ZSB9XG4gICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICBvblNlbGVjdD17IG9uU2VsZWN0IH1cbiAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgb25DbG9zZT17IG9uQ2xvc2UgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERhdGVwaWNrZXJEcm9wZG93blBvcnRhbCA9IGF1dG9BbGlnbih7XG4gIHRyaWdnZXJTZWxlY3RvcjogJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxufSkoRGF0ZXBpY2tlckRyb3Bkb3duKTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbklucHV0Q2xpY2soKSB7XG4gICAgdGhpcy5zaG93RGF0ZXBpY2tlcihmYWxzZSk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJTZWxlY3QoZHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtb21lbnQoZHZhbHVlKS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJCbHVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/IGAke3RoaXMucHJvcHMuZGF0ZUZvcm1hdCA/IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA6ICdZWVlZLU1NLUREJ31USEg6bW06c3MuU1NTWmAgOiAodGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWVktTU0tREQnKTtcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZih2YWx1ZSAhPT0gaW5wdXRWYWx1ZSl7XG4gICAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fFxuICAgICAgaXNFbEluQ2hpbGRyZW4odGhpcy5kYXRlcGlja2VyLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcihhdXRvRm9jdXMpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlLCBhdXRvRm9jdXMgfSk7XG4gIH1cblxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaW5wdXRSZWY9e25vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKX1cbiAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMub25JbnB1dEJsdXJ9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbklucHV0Q2xpY2sgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25EYXRlSWNvbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgJyc7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciB9O1xuICAgIGRlbGV0ZSBwcm9wcy5kYXRlRm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5kZWZhdWx0T3BlbmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5pbmNsdWRlVGltZTtcbiAgICBkZWxldGUgcHJvcHMub25Db21wbGV0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfVxuICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICBzdHlsZT17IG1lbnVBbGlnbiA9PT0gJ3JpZ2h0JyA/IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiBudWxsIH0gOiB7fSB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWRyb3Bkb3duLXRyaWdnZXInKSB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICAgICAgICA8RGF0ZXBpY2tlckRyb3Bkb3duUG9ydGFsXG4gICAgICAgICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5kYXRlcGlja2VyID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgIGRhdGVWYWx1ZT17IG12YWx1ZS5pc1ZhbGlkKCkgPyBtdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgICAgIG1pbkRhdGU9eyBtaW5EYXRlIH1cbiAgICAgICAgICAgICAgICBtYXhEYXRlPXsgbWF4RGF0ZSB9XG4gICAgICAgICAgICAgICAgYWxpZ249eyBtZW51QWxpZ24gfVxuICAgICAgICAgICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25EYXRlcGlja2VyQmx1ciB9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCB9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMub25EYXRlcGlja2VyQ2xvc2UgfVxuICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTUVOVV9BTElHTiA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=