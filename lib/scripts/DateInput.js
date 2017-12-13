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

var DateInput = function (_Component) {
  (0, _inherits3.default)(DateInput, _Component);

  function DateInput(props) {
    (0, _classCallCheck3.default)(this, DateInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DateInput.__proto__ || (0, _getPrototypeOf2.default)(DateInput)).call(this));

    _this.state = {
      id: 'form-element-' + (0, _util.uuid)(),
      opened: props.defaultOpened || false
    };

    _this.onDateIconClick = _this.onDateIconClick.bind(_this);
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onInputBlur = _this.onInputBlur.bind(_this);
    _this.onInputClick = _this.onInputClick.bind(_this);

    _this.onDatepickerSelect = _this.onDatepickerSelect.bind(_this);
    _this.onDatepickerBlur = _this.onDatepickerBlur.bind(_this);
    _this.onDatepickerClose = _this.onDatepickerClose.bind(_this);

    (0, _util.registerStyle)('dateinput', [['.slds-has-error .slds-datepicker .slds-select', '{ border: 1px solid #d8dde6; box-shadow: none; }']]);
    return _this;
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
      var _this2 = this;

      setTimeout(function () {
        _this2.showDatepicker();
      }, 10);
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      var _this3 = this;

      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        this.setValueFromInput(e.target.value);
        if (this.props.onComplete) {
          setTimeout(function () {
            _this3.props.onComplete();
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
      var _this4 = this;

      if (this.state.inputValue) {
        this.setValueFromInput(e.target.value);
      }

      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
          if (_this4.props.onBlur) {
            _this4.props.onBlur();
          }
          if (_this4.props.onComplete) {
            _this4.props.onComplete();
          }
          if (_this4.state.opened) {
            _this4.setState({ opened: false });
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
      var _this5 = this;

      var value = (0, _moment2.default)(dvalue).format(this.getValueFormat());
      this.setState({ value: value, inputValue: undefined });
      setTimeout(function () {
        _this5.setState({ opened: false });
        var inputEl = _this5.input;
        if (inputEl) {
          inputEl.focus();
          inputEl.select();
        }
        if (_this5.props.onComplete) {
          _this5.props.onComplete();
        }
      }, 200);
    }
  }, {
    key: 'onDatepickerBlur',
    value: function onDatepickerBlur() {
      var _this6 = this;

      this.setState({ opened: false });
      setTimeout(function () {
        if (!_this6.isFocusedInComponent()) {
          if (_this6.props.onBlur) {
            _this6.props.onBlur();
          }
          if (_this6.props.onComplete) {
            _this6.props.onComplete();
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
      return this.props.includeTime ? 'YYYY-MM-DDTHH:mm:ss.SSSZ' : 'YYYY-MM-DD';
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
          value = '';
        }
      }
      this.setState({ value: value, inputValue: undefined });
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = this.node;
      var targetEl = document.activeElement;
      return (0, _util.isElInChildren)(rootEl, targetEl);
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
      var _this7 = this;

      var inputValue = _ref.inputValue,
          props = (0, _objectWithoutProperties3.default)(_ref, ['inputValue']);

      var pprops = props;
      delete pprops.onValueChange;
      return _react2.default.createElement(
        'div',
        { className: 'slds-input-has-icon slds-input-has-icon--right' },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({
          inputRef: function inputRef(node) {
            return _this7.input = node;
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
            style: props.disabled ? undefined : { cursor: 'pointer' },
            onClick: props.disabled ? undefined : this.onDateIconClick
          },
          _react2.default.createElement(_Icon2.default, { icon: 'event', className: 'slds-input__icon' })
        )
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(dateValue, minDate, maxDate, extensionRenderer, autoFocus) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--' + this.props.menuAlign);
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, {
        className: datepickerClassNames,
        selectedDate: dateValue,
        autoFocus: autoFocus,
        minDate: minDate,
        maxDate: maxDate,
        extensionRenderer: extensionRenderer,
        onSelect: this.onDatepickerSelect,
        onBlur: this.onDatepickerBlur,
        onClose: this.onDatepickerClose
      }) : _react2.default.createElement('div', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var id = this.props.id || this.state.id;
      var _props = this.props,
          totalCols = _props.totalCols,
          cols = _props.cols,
          label = _props.label,
          required = _props.required,
          error = _props.error,
          defaultValue = _props.defaultValue,
          value = _props.value,
          menuAlign = _props.menuAlign,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          extensionRenderer = _props.extensionRenderer,
          props = (0, _objectWithoutProperties3.default)(_props, ['totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'menuAlign', 'minDate', 'maxDate', 'extensionRenderer']);

      var dateValue = typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
      var mvalue = (0, _moment2.default)(dateValue, this.getValueFormat());
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(this.getInputValueFormat()) : '';
      var autoFocus = this.state.autoFocus === false ? this.state.autoFocus : true;
      var dropdown = this.renderDropdown(mvalue.isValid() ? mvalue.format('YYYY-MM-DD') : undefined, minDate, maxDate, extensionRenderer, autoFocus);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      delete props.dateFormat;
      delete props.defaultOpened;
      delete props.includeTime;
      delete props.onComplete;
      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this8.node = node;
          }
        }, formElemProps, {
          style: menuAlign === 'right' ? { position: 'absolute', right: null } : {}
        }),
        this.renderInput((0, _extends3.default)({ id: id, inputValue: inputValue }, props))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFF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aUMsTUFWRjtBQVdwQmxDLGVBQWEsb0JBQVVtQyxJQVhIO0FBWXBCaEQsYUFBVyxvQkFBVWtELElBWkQ7QUFhcEI5QyxVQUFRLG9CQUFVOEMsSUFiRTtBQWNwQmhELFlBQVUsb0JBQVVnRCxJQWRBO0FBZXBCOUQsaUJBQWUsb0JBQVU4RCxJQWZMO0FBZ0JwQnBELGNBQVksb0JBQVVvRCxJQWhCRjtBQWlCcEJuQixhQUFXLG9CQUFVb0IsS0FBVixDQUFnQk4sVUFBaEIsQ0FqQlM7QUFrQnBCbEIsV0FBUyxvQkFBVW9CLE1BbEJDO0FBbUJwQm5CLFdBQVMsb0JBQVVtQixNQW5CQztBQW9CcEJsQixxQkFBbUIsb0JBQVVxQjtBQXBCVCxDQUF0Qjs7QUF1QkEvRSxVQUFVaUYsWUFBVixHQUF5QjtBQUN2QnJCLGFBQVc7QUFEWSxDQUF6Qjs7QUFJQTVELFVBQVVrRixhQUFWLEdBQTBCLElBQTFCIiwiZmlsZSI6IkRhdGVJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgb3BlbmVkOiAocHJvcHMuZGVmYXVsdE9wZW5lZCB8fCBmYWxzZSksXG4gICAgfTtcblxuICAgIHRoaXMub25EYXRlSWNvbkNsaWNrID0gdGhpcy5vbkRhdGVJY29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRLZXlEb3duID0gdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEJsdXIgPSB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2xpY2sgPSB0aGlzLm9uSW5wdXRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgPSB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EYXRlcGlja2VyQmx1ciA9IHRoaXMub25EYXRlcGlja2VyQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EYXRlcGlja2VyQ2xvc2UgPSB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICByZWdpc3RlclN0eWxlKCdkYXRlaW5wdXQnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1oYXMtZXJyb3IgLnNsZHMtZGF0ZXBpY2tlciAuc2xkcy1zZWxlY3QnLFxuICAgICAgICAneyBib3JkZXI6IDFweCBzb2xpZCAjZDhkZGU2OyBib3gtc2hhZG93OiBub25lOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIHByZXZTdGF0ZS52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUsIHByZXZTdGF0ZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlSWNvbkNsaWNrKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Qmx1cihlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljaygpIHtcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyKGZhbHNlKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWicgOiAnWVlZWS1NTS1ERCc7XG4gIH1cblxuICBnZXRJbnB1dFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGVGb3JtYXQgfHwgKHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyAnTCBISDptbScgOiAnTCcpO1xuICB9XG5cbiAgc2V0VmFsdWVGcm9tSW5wdXQoaW5wdXRWYWx1ZSkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudChpbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHJvb3RFbCwgdGFyZ2V0RWwpO1xuICB9XG5cbiAgc2hvd0RhdGVwaWNrZXIoYXV0b0ZvY3VzKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlLCB2YWx1ZSwgYXV0b0ZvY3VzIH0pO1xuICB9XG5cbiAgcmVuZGVySW5wdXQoeyBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgcHByb3BzID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlucHV0UmVmPXtub2RlID0+ICh0aGlzLmlucHV0ID0gbm9kZSl9XG4gICAgICAgICAgdmFsdWU9eyBpbnB1dFZhbHVlIH1cbiAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbklucHV0Q2xpY2sgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25EYXRlSWNvbkNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihkYXRlVmFsdWUsIG1pbkRhdGUsIG1heERhdGUsIGV4dGVuc2lvblJlbmRlcmVyLCBhdXRvRm9jdXMpIHtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHt0aGlzLnByb3BzLm1lbnVBbGlnbn1gXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1cz17IGF1dG9Gb2N1cyB9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25EYXRlcGlja2VyQmx1ciB9XG4gICAgICAgICAgb25DbG9zZT17IHRoaXMub25EYXRlcGlja2VyQ2xvc2UgfVxuICAgICAgICAvPiA6IDxkaXYgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIG1lbnVBbGlnbixcbiAgICAgIG1pbkRhdGUsIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZVZhbHVlID1cbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XG4gICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUudmFsdWUgOlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPVxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxuICAgICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/XG4gICAgICAgIG12YWx1ZS5mb3JtYXQodGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpIDpcbiAgICAgICAgICAnJztcbiAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA9PT0gZmFsc2UgP1xuICAgICAgdGhpcy5zdGF0ZS5hdXRvRm9jdXMgOiB0cnVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihcbiAgICAgIG12YWx1ZS5pc1ZhbGlkKCkgPyBtdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiB1bmRlZmluZWQsXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgYXV0b0ZvY3VzXG4gICAgKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xuICAgIGRlbGV0ZSBwcm9wcy5kYXRlRm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5kZWZhdWx0T3BlbmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5pbmNsdWRlVGltZTtcbiAgICBkZWxldGUgcHJvcHMub25Db21wbGV0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfVxuICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICBzdHlsZT17IG1lbnVBbGlnbiA9PT0gJ3JpZ2h0JyA/IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiBudWxsIH0gOiB7fSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTUVOVV9BTElHTiA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5jbHVkZVRpbWU6IFByb3BUeXBlcy5ib29sLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudUFsaWduOiBQcm9wVHlwZXMub25lT2YoTUVOVV9BTElHTiksXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkRhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1lbnVBbGlnbjogJ2xlZnQnLFxufTtcblxuRGF0ZUlucHV0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19