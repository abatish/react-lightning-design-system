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
      return this.props.includeTime ? (this.props.dateFormat ? this.props.dateFormat : 'YYY-MM-DD') + 'THH:mm:ss.SSSZ' : this.props.dateFormat ? this.props.dateFormat : 'YYY-MM-DD';
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
      if (!inputValue) {
        value = '';
      } else {
        value = (0, _moment2.default)(inputValue, this.getInputValueFormat());
        if (value.isValid()) {
          value = value.format(this.getValueFormat());
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
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(this.getInputValueFormat()) : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlcGlja2VyRHJvcGRvd24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImFsaWduIiwidmVydEFsaWduIiwiZGF0ZVZhbHVlIiwibWluRGF0ZSIsIm1heERhdGUiLCJleHRlbnNpb25SZW5kZXJlciIsImVsZW1lbnRSZWYiLCJvblNlbGVjdCIsIm9uQmx1ciIsIm9uQ2xvc2UiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsImhhbmRsZURPTVJlZiIsIm5vZGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImZ1bmMiLCJEYXRlcGlja2VyRHJvcGRvd25Qb3J0YWwiLCJ0cmlnZ2VyU2VsZWN0b3IiLCJEYXRlSW5wdXQiLCJzdGF0ZSIsImlkIiwib3BlbmVkIiwiZGVmYXVsdE9wZW5lZCIsIm9uRGF0ZUljb25DbGljayIsImJpbmQiLCJvbklucHV0S2V5RG93biIsIm9uSW5wdXRDaGFuZ2UiLCJvbklucHV0Qmx1ciIsIm9uSW5wdXRDbGljayIsIm9uRGF0ZXBpY2tlclNlbGVjdCIsIm9uRGF0ZXBpY2tlckJsdXIiLCJvbkRhdGVwaWNrZXJDbG9zZSIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uVmFsdWVDaGFuZ2UiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJzaG93RGF0ZXBpY2tlciIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRWYWx1ZUZyb21JbnB1dCIsInRhcmdldCIsIm9uQ29tcGxldGUiLCJzZXRTdGF0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJvbkNoYW5nZSIsImlzRm9jdXNlZEluQ29tcG9uZW50IiwiZHZhbHVlIiwiZm9ybWF0IiwiZ2V0VmFsdWVGb3JtYXQiLCJpbnB1dEVsIiwiaW5wdXQiLCJmb2N1cyIsInNlbGVjdCIsImluY2x1ZGVUaW1lIiwiZGF0ZUZvcm1hdCIsImdldElucHV0VmFsdWVGb3JtYXQiLCJpc1ZhbGlkIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJkYXRlcGlja2VyIiwiYXV0b0ZvY3VzIiwicHByb3BzIiwiZGlzYWJsZWQiLCJwb3NpdGlvbiIsImN1cnNvciIsIm91dGxpbmUiLCJ0b3RhbENvbHMiLCJjb2xzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwiZGVmYXVsdFZhbHVlIiwibWVudUFsaWduIiwibXZhbHVlIiwiZm9ybUVsZW1Qcm9wcyIsInJpZ2h0IiwicmVuZGVySW5wdXQiLCJNRU5VX0FMSUdOIiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7SUFHTUEsa0I7Ozs7Ozs7Ozs7NkJBZUs7QUFBQTs7QUFBQSxtQkFLSCxLQUFLQyxLQUxGO0FBQUEsVUFFTEMsU0FGSyxVQUVMQSxTQUZLO0FBQUEsVUFFTUMsS0FGTixVQUVNQSxLQUZOO0FBQUEsVUFFYUMsU0FGYixVQUVhQSxTQUZiO0FBQUEsVUFFd0JDLFNBRnhCLFVBRXdCQSxTQUZ4QjtBQUFBLFVBRW1DQyxPQUZuQyxVQUVtQ0EsT0FGbkM7QUFBQSxVQUU0Q0MsT0FGNUMsVUFFNENBLE9BRjVDO0FBQUEsVUFFcURDLGlCQUZyRCxVQUVxREEsaUJBRnJEO0FBQUEsVUFHTEMsVUFISyxVQUdMQSxVQUhLO0FBQUEsVUFJTEMsUUFKSyxVQUlMQSxRQUpLO0FBQUEsVUFJS0MsTUFKTCxVQUlLQSxNQUpMO0FBQUEsVUFJYUMsT0FKYixVQUlhQSxPQUpiOztBQU1QLFVBQU1DLHVCQUF1QiwwQkFDM0JYLFNBRDJCLEVBRTNCLGVBRjJCLEVBRzNCQyw0QkFBMEJBLEtBQTFCLEdBQW9DVyxTQUhULEVB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UyxvQkFBVVksTUFsQkM7QUFtQnBCWCxXQUFTLG9CQUFVVyxNQW5CQztBQW9CcEJWLHFCQUFtQixvQkFBVVk7QUFwQlQsQ0FBdEI7O0FBdUJBRyxVQUFVbUUsWUFBVixHQUF5QjtBQUN2QlIsYUFBVztBQURZLENBQXpCOztBQUlBM0QsVUFBVW9FLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBEYXRlcGlja2VyRHJvcGRvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgICB2ZXJ0QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gICAgZGF0ZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbGVtZW50UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBhbGlnbiwgdmVydEFsaWduLCBkYXRlVmFsdWUsIG1pbkRhdGUsIG1heERhdGUsIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgZWxlbWVudFJlZixcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uQ2xvc2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYWxpZ24gPyBgc2xkcy1kcm9wZG93bi0tJHthbGlnbn1gIDogdW5kZWZpbmVkLFxuICAgICAgdmVydEFsaWduID8gYHNsZHMtZHJvcGRvd24tLSR7dmVydEFsaWdufWAgOiB1bmRlZmluZWQsXG4gICAgKTtcbiAgICBjb25zdCBoYW5kbGVET01SZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgIGlmIChlbGVtZW50UmVmKSB7IGVsZW1lbnRSZWYobm9kZSk7IH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RGF0ZXBpY2tlclxuICAgICAgICBlbGVtZW50UmVmPXsgaGFuZGxlRE9NUmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgbWluRGF0ZT17IG1pbkRhdGUgfVxuICAgICAgICBtYXhEYXRlPXsgbWF4RGF0ZSB9XG4gICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICBvblNlbGVjdD17IG9uU2VsZWN0IH1cbiAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgICAgb25DbG9zZT17IG9uQ2xvc2UgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IERhdGVwaWNrZXJEcm9wZG93blBvcnRhbCA9IGF1dG9BbGlnbih7XG4gIHRyaWdnZXJTZWxlY3RvcjogJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxufSkoRGF0ZXBpY2tlckRyb3Bkb3duKTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljaygpIHtcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyKGZhbHNlKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gYCR7dGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCd9VEhIOm1tOnNzLlNTU1pgIDogKHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA/IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA6ICdZWVktTU0tREQnKTtcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fFxuICAgICAgaXNFbEluQ2hpbGRyZW4odGhpcy5kYXRlcGlja2VyLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcihhdXRvRm9jdXMpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlLCBhdXRvRm9jdXMgfSk7XG4gIH1cblxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaW5wdXRSZWY9e25vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKX1cbiAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMub25JbnB1dEJsdXJ9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbklucHV0Q2xpY2sgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25EYXRlSWNvbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IgfTtcbiAgICBkZWxldGUgcHJvcHMuZGF0ZUZvcm1hdDtcbiAgICBkZWxldGUgcHJvcHMuZGVmYXVsdE9wZW5lZDtcbiAgICBkZWxldGUgcHJvcHMuaW5jbHVkZVRpbWU7XG4gICAgZGVsZXRlIHByb3BzLm9uQ29tcGxldGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBtZW51QWxpZ24gPT09ICdyaWdodCcgPyB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogbnVsbCB9IDoge30gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1kcm9wZG93bi10cmlnZ2VyJykgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoeyBpZCwgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgICAgICAgPERhdGVwaWNrZXJEcm9wZG93blBvcnRhbFxuICAgICAgICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMuZGF0ZXBpY2tlciA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICBkYXRlVmFsdWU9eyBtdmFsdWUuaXNWYWxpZCgpID8gbXZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgICAgICBtaW5EYXRlPXsgbWluRGF0ZSB9XG4gICAgICAgICAgICAgICAgbWF4RGF0ZT17IG1heERhdGUgfVxuICAgICAgICAgICAgICAgIGFsaWduPXsgbWVudUFsaWduIH1cbiAgICAgICAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgfVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1FTlVfQUxJR04gPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1ZGVUaW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVBbGlnbjogUHJvcFR5cGVzLm9uZU9mKE1FTlVfQUxJR04pLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5EYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBtZW51QWxpZ246ICdsZWZ0Jyxcbn07XG5cbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==