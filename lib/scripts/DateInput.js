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

      this.setValueFromInput(e.target.value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFFRSxrREFGRixDQUR5QixDQUEzQjtBQWpCaUI7QUF1QmxCOzs7O3VDQUVrQlEsUyxFQUFXQyxTLEVBQVc7QUFDdkMsVUFBSSxLQUFLZixLQUFMLENBQVdnQixhQUFYLElBQTRCRCxVQUFVRSxLQUFWLEtBQW9CLEtBQUtoQixLQUFMLENBQVdnQixLQUEvRCxFQUFzRTtBQUNwRSxhQUFLakIsS0FBTCxDQUFXZ0IsYUFBWCxDQUF5QixLQUFLZixLQUFMLENBQVdnQixLQUFwQyxFQUEyQ0YsVUFBVUUsS0FBckQ7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQUE7O0FBQ2hCQyxpQkFBVyxZQUFNO0FBQ2YsZUFBS0MsY0FBTDtBQUNELE9BRkQsRUFFRyxFQUZIO0FBR0Q7OzttQ0FFY0MsQyxFQUFHO0FBQUE7O0FBQ2hCLFVBQUlBLEVBQUVDLE9BQUYsS0FBYyxFQUFsQixFQUFzQjtBQUFFO0FBQ3RCRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxhQUFLQyxpQkFBTCxDQUF1QkosRUFBRUssTUFBRixDQUFTUixLQUFoQztBQUNBLFlBQUksS0FBS2pCLEtBQUwsQ0FBVzBCLFVBQWYsRUFBMkI7QUFDekJSLHFCQUFXLFlBQU07QUFDZixtQkFBS2xCLEtBQUwsQ0FBVzBCLFVBQVg7QUFDRCxXQUZELEVBRUcsRUFGSDtBQUdEO0FBQ0YsT0FURCxNQVNPLElBQUlOLEVBQUVDLE9BQUYsS0FBYyxFQUFsQixFQUFzQjtBQUFFO0FBQzdCLGFBQUtGLGNBQUw7QUFDQUMsVUFBRUUsY0FBRjtBQUNBRixVQUFFRyxlQUFGO0FBQ0QsT0FKTSxNQUlBLElBQUlILEVBQUVDLE9BQUYsS0FBYyxDQUFsQixFQUFxQjtBQUMxQixhQUFLTSxRQUFMLENBQWMsRUFBRXhCLFFBQVEsS0FBVixFQUFkO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLSCxLQUFMLENBQVc0QixTQUFmLEVBQTBCO0FBQ3hCLGFBQUs1QixLQUFMLENBQVc0QixTQUFYLENBQXFCUixDQUFyQjtBQUNEO0FBQ0Y7OztrQ0FFYUEsQyxFQUFHO0FBQ2YsVUFBTVMsYUFBYVQsRUFBRUssTUFBRixDQUFTUixLQUE1QjtBQUNBLFdBQUtVLFFBQUwsQ0FBYyxFQUFFRSxzQkFBRixFQUFkO0FBQ0EsVUFBSSxLQUFLN0IsS0FBTCxDQUFXOEIsUUFBZixFQUF5QjtBQUN2QixhQUFLOUIsS0FBTCxDQUFXOEIsUUFBWCxDQUFvQlYsQ0FBcEIsRUFBdUJTLFVBQXZCO0FBQ0Q7QUFDRjs7O2dDQUVXVCxDLEVBQUc7QUFBQTs7QUFDWCxXQUFLSSxpQkFBTCxDQUF1QkosRUFBRUssTUFBRixDQUFTUixLQUFoQzs7QUFFRkMsaUJBQVcsWUFBTTtBQUNmLFlBQUksQ0FBQyxPQUFLYSxvQkFBTCxFQUFMLEVBQWtDO0FBQ2hDLGNBQUksT0FBSy9CLEtBQUwsQ0FBV2dDLE1BQWYsRUFBdUI7QUFDckIsbUJBQUtoQyxLQUFMLENBQVdnQyxNQUFYO0FBQ0Q7QUFDRCxjQUFJLE9BQUtoQyxLQUFMLENBQVcwQixVQUFmLEVBQTJCO0FBQ3pCLG1CQUFLMUIsS0FBTCxDQUFXMEIsVUFBWDtBQUNEO0FBQ0QsY0FBSSxPQUFLekIsS0FBTCxDQUFXRSxNQUFmLEVBQXVCO0FBQ3JCLG1CQUFLd0IsUUFBTCxDQUFjLEVBQUV4QixRQUFRLEtBQVYsRUFBZDtBQUNEO0FBQ0Y7QUFDRixPQVpELEVBWUcsRUFaSDtBQWFEOzs7bUNBRWM7QUFDYixXQUFLZ0IsY0FBTCxDQUFvQixLQUFwQjtBQUNEOzs7dUNBRWtCYyxNLEVBQVE7QUFBQTs7QUFDekIsVUFBTWhCLFFBQVEsc0JBQU9nQixNQUFQLEVBQWVDLE1BQWYsQ0FBc0IsS0FBS0MsY0FBTCxFQUF0QixDQUFkO0FBQ0EsV0FBS1IsUUFBTCxDQUFjLEVBQUVWLFlBQUYsRUFBU1ksWUFBWU8sU0FBckIsRUFBZDtBQUNBbEIsaUJBQVcsWUFBTTtBQUNmLGVBQUtTLFFBQUwsQ0FBYyxFQUFFeEIsUUFBUSxLQUFWLEVBQWQ7QUFDQSxZQUFNa0MsVUFBVSxPQUFLQyxLQUFyQjtBQUNBLFlBQUlELE9BQUosRUFBYTtBQUNYQSxrQkFBUUUsS0FBUjtBQUNBRixrQkFBUUcsTUFBUjtBQUNEO0FBQ0QsWUFBSSxPQUFLeEMsS0FBTCxDQUFXMEIsVUFBZixFQUEyQjtBQUN6QixpQkFBSzFCLEtBQUwsQ0FBVzBCLFVBQVg7QUFDRDtBQUNGLE9BVkQsRUFVRyxHQVZIO0FBV0Q7Ozt1Q0FFa0I7QUFBQTs7QUFDakIsV0FBS0MsUUFBTCxDQUFjLEVBQUV4QixRQUFRLEtBQVYsRUFBZDtBQUNBZSxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUthLG9CQUFMLEVBQUwsRUFBa0M7QUFDaEMsY0FBSSxPQUFLL0IsS0FBTCxDQUFXZ0MsTUFBZixFQUF1QjtBQUNyQixtQkFBS2hDLEtBQUwsQ0FBV2dDLE1BQVg7QUFDRDtBQUNELGNBQUksT0FBS2hDLEtBQUwsQ0FBVzBCLFVBQWYsRUFBMkI7QUFDekIsbUJBQUsxQixLQUFMLENBQVcwQixVQUFYO0FBQ0Q7QUFDRjtBQUNGLE9BVEQsRUFTRyxFQVRIO0FBVUQ7Ozt3Q0FFbUI7QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUV4QixRQUFRLEtBQVYsRUFBZDtBQUNBLFVBQU1rQyxVQUFVLEtBQUtDLEtBQXJCO0FBQ0EsVUFBSUQsT0FBSixFQUFhO0FBQ1hBLGdCQUFRRSxLQUFSO0FBQ0FGLGdCQUFRRyxNQUFSO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS3hDLEtBQUwsQ0FBV3lDLFdBQVgsSUFBNEIsS0FBS3pDLEtBQUwsQ0FBVzBDLFVBQVgsR0FBd0IsS0FBSzFDLEtBQUwsQ0FBVzBDLFVBQW5DLEdBQWdELFdBQTVFLHVCQUEyRyxLQUFLMUMsS0FBTCxDQUFXMEMsVUFBWCxHQUF3QixLQUFLMUMsS0FBTCxDQUFXMEMsVUFBbkMsR0FBZ0QsV0FBbEs7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUsxQyxLQUFMLENBQVcwQyxVQUFYLEtBQTBCLEtBQUsxQyxLQUFMLENBQVd5QyxXQUFYLEdBQXlCLFNBQXpCLEdBQXFDLEdBQS9ELENBQVA7QUFDRDs7O3NDQUVpQlosVSxFQUFZO0FBQzVCLFVBQUlaLFFBQVEsS0FBS2hCLEtBQUwsQ0FBV2dCLEtBQXZCO0FBQ0EsVUFBR0EsVUFBVVksVUFBYixFQUF3QjtBQUN0QixZQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDZlosa0JBQVEsRUFBUjtBQUNELFNBRkQsTUFFTztBQUNMQSxrQkFBUSxzQkFBT1ksVUFBUCxFQUFtQixLQUFLYyxtQkFBTCxFQUFuQixDQUFSO0FBQ0EsY0FBSTFCLE1BQU0yQixPQUFOLEVBQUosRUFBcUI7QUFDbkIzQixvQkFBUUEsTUFBTWlCLE1BQU4sQ0FBYSxLQUFLQyxjQUFMLEVBQWIsQ0FBUjtBQUNELFdBRkQsTUFFTztBQUNMbEIsb0JBQVEsRUFBUjtBQUNEO0FBQ0Y7QUFDRCxhQUFLVSxRQUFMLENBQWMsRUFBRVYsWUFBRixFQUFTWSxZQUFZTyxTQUFyQixFQUFkO0FBQ0Q7QUFDRjs7OzJDQUVzQjtBQUNyQixVQUFNUyxTQUFTLEtBQUtDLElBQXBCO0FBQ0EsVUFBTUMsV0FBV0MsU0FBU0MsYUFBMUI7QUFDQSxhQUFPLDBCQUFlSixNQUFmLEVBQXVCRSxRQUF2QixDQUFQO0FBQ0Q7OzttQ0FFY0csUyxFQUFXO0FBQ3hCLFVBQUlqQyxRQUFRLEtBQUtoQixLQUFMLENBQVdnQixLQUF2QjtBQUNBLFVBQUksT0FBTyxLQUFLaEIsS0FBTCxDQUFXNEIsVUFBbEIsS0FBaUMsV0FBckMsRUFBa0Q7QUFDaERaLGdCQUFRLHNCQUFPLEtBQUtoQixLQUFMLENBQVc0QixVQUFsQixFQUE4QixLQUFLYyxtQkFBTCxFQUE5QixDQUFSO0FBQ0EsWUFBSTFCLE1BQU0yQixPQUFOLEVBQUosRUFBcUI7QUFDbkIzQixrQkFBUUEsTUFBTWlCLE1BQU4sQ0FBYSxLQUFLQyxjQUFMLEVBQWIsQ0FBUjtBQUNELFNBRkQsTUFFTztBQUNMbEIsa0JBQVEsS0FBS2hCLEtBQUwsQ0FBV2dCLEtBQW5CO0FBQ0Q7QUFDRjtBQUNELFdBQUtVLFFBQUwsQ0FBYyxFQUFFeEIsUUFBUSxJQUFWLEVBQWdCYyxZQUFoQixFQUF1QmlDLG9CQUF2QixFQUFkO0FBQ0Q7OztzQ0FFcUM7QUFBQTs7QUFBQSxVQUF4QnJCLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUFBLFVBQVQ3QixLQUFTOztBQUNwQyxVQUFNbUQsU0FBU25ELEtBQWY7QUFDQSxhQUFPbUQsT0FBT25DLGFBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0RBQWY7QUFDRTtBQUNFLG9CQUFVO0FBQUEsbUJBQVMsT0FBS3NCLEtBQUwsR0FBYVEsSUFBdEI7QUFBQSxXQURaO0FBRUUsaUJBQVFqQjtBQUZWLFdBR083QixLQUhQO0FBSUUscUJBQVksS0FBS08sY0FKbkI7QUFLRSxvQkFBVyxLQUFLQyxhQUxsQjtBQU1FLGtCQUFTLEtBQUtDLFdBTmhCO0FBT0UsbUJBQVVULE1BQU1vRCxRQUFOLEdBQWlCaEIsU0FBakIsR0FBNkIsS0FBSzFCO0FBUDlDLFdBREY7QUFVRTtBQUFBO0FBQUE7QUFDRSxzQkFBVyxDQUFDLENBRGQ7QUFFRSxtQkFBUVYsTUFBTW9ELFFBQU4sR0FBaUJoQixTQUFqQixHQUE2QixFQUFFaUIsUUFBUSxTQUFWLEVBRnZDO0FBR0UscUJBQVVyRCxNQUFNb0QsUUFBTixHQUFpQmhCLFNBQWpCLEdBQTZCLEtBQUsvQjtBQUg5QztBQUtFLDBEQUFNLE1BQUssT0FBWCxFQUFtQixXQUFVLGtCQUE3QjtBQUxGO0FBVkYsT0FERjtBQW9CRDs7O21DQUVjaUQsUyxFQUFXQyxPLEVBQVNDLE8sRUFBU0MsaUIsRUFBbUJQLFMsRUFBVztBQUN4RSxVQUFNUSx1QkFBdUIsMEJBQzNCLGVBRDJCLHNCQUVULEtBQUsxRCxLQUFMLENBQVcyRCxTQUZGLENBQTdCO0FBSUEsYUFDRSxLQUFLMUQsS0FBTCxDQUFXRSxNQUFYLEdBQ0U7QUFDRSxtQkFBWXVELG9CQURkO0FBRUUsc0JBQWVKLFNBRmpCO0FBR0UsbUJBQVlKLFNBSGQ7QUFJRSxpQkFBU0ssT0FKWDtBQUtFLGlCQUFTQyxPQUxYO0FBTUUsMkJBQW9CQyxpQkFOdEI7QUFPRSxrQkFBVyxLQUFLOUMsa0JBUGxCO0FBUUUsZ0JBQVMsS0FBS0MsZ0JBUmhCO0FBU0UsaUJBQVUsS0FBS0M7QUFUakIsUUFERixHQVdPLDBDQVpUO0FBY0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1YLEtBQUssS0FBS0YsS0FBTCxDQUFXRSxFQUFYLElBQWlCLEtBQUtELEtBQUwsQ0FBV0MsRUFBdkM7QUFETyxtQkFRSCxLQUFLRixLQVJGO0FBQUEsVUFHTDRELFNBSEssVUFHTEEsU0FISztBQUFBLFVBR01DLElBSE4sVUFHTUEsSUFITjtBQUFBLFVBR1lDLEtBSFosVUFHWUEsS0FIWjtBQUFBLFVBR21CQyxRQUhuQixVQUdtQkEsUUFIbkI7QUFBQSxVQUc2QkMsS0FIN0IsVUFHNkJBLEtBSDdCO0FBQUEsVUFJTEMsWUFKSyxVQUlMQSxZQUpLO0FBQUEsVUFJU2hELEtBSlQsVUFJU0EsS0FKVDtBQUFBLFVBSWdCMEMsU0FKaEIsVUFJZ0JBLFNBSmhCO0FBQUEsVUFLTEosT0FMSyxVQUtMQSxPQUxLO0FBQUEsVUFLSUMsT0FMSixVQUtJQSxPQUxKO0FBQUEsVUFNTEMsaUJBTkssVUFNTEEsaUJBTks7QUFBQSxVQU9GekQsS0FQRTs7QUFTUCxVQUFNc0QsWUFDSixPQUFPckMsS0FBUCxLQUFpQixXQUFqQixHQUErQkEsS0FBL0IsR0FDRSxPQUFPLEtBQUtoQixLQUFMLENBQVdnQixLQUFsQixLQUE0QixXQUE1QixHQUEwQyxLQUFLaEIsS0FBTCxDQUFXZ0IsS0FBckQsR0FDRWdELFlBSE47QUFJQSxVQUFNQyxTQUFTLHNCQUFPWixTQUFQLEVBQWtCLEtBQUtuQixjQUFMLEVBQWxCLENBQWY7QUFDQSxVQUFNTixhQUNKLE9BQU8sS0FBSzVCLEtBQUwsQ0FBVzRCLFVBQWxCLEtBQWlDLFdBQWpDLEdBQ0UsS0FBSzVCLEtBQUwsQ0FBVzRCLFVBRGIsR0FFQSxPQUFPeUIsU0FBUCxLQUFxQixXQUFyQixJQUFvQ1ksT0FBT3RCLE9BQVAsRUFBcEMsR0FDRXNCLE9BQU9oQyxNQUFQLENBQWMsS0FBS1MsbUJBQUwsRUFBZCxDQURGLEdBRUksRUFMTjtBQU1BLFVBQU1PLFlBQVksS0FBS2pELEtBQUwsQ0FBV2lELFNBQVgsS0FBeUIsS0FBekIsR0FDaEIsS0FBS2pELEtBQUwsQ0FBV2lELFNBREssR0FDTyxJQUR6QjtBQUVBLFVBQU1pQixXQUFXLEtBQUtDLGNBQUwsQ0FDZkYsT0FBT3RCLE9BQVAsS0FBbUJzQixPQUFPaEMsTUFBUCxDQUFjLFlBQWQsQ0FBbkIsR0FBaURFLFNBRGxDLEVBRWZtQixPQUZlLEVBR2ZDLE9BSGUsRUFJZkMsaUJBSmUsRUFLZlAsU0FMZSxDQUFqQjtBQU9BLFVBQU1tQixnQkFBZ0IsRUFBRW5FLE1BQUYsRUFBTTBELG9CQUFOLEVBQWlCQyxVQUFqQixFQUF1QkMsWUFBdkIsRUFBOEJDLGtCQUE5QixFQUF3Q0MsWUFBeEMsRUFBK0NHLGtCQUEvQyxFQUF0QjtBQUNBLGFBQU9uRSxNQUFNMEMsVUFBYjtBQUNBLGFBQU8xQyxNQUFNSSxhQUFiO0FBQ0EsYUFBT0osTUFBTXlDLFdBQWI7QUFDQSxhQUFPekMsTUFBTTBCLFVBQWI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLDBCQUFpQjtBQUFBLG1CQUFTLE9BQUtvQixJQUFMLEdBQVlBLElBQXJCO0FBQUE7QUFEbkIsV0FFT3VCLGFBRlA7QUFHRSxpQkFBUVYsY0FBYyxPQUFkLEdBQXdCLEVBQUVXLFVBQVUsVUFBWixFQUF3QkMsT0FBTyxJQUEvQixFQUF4QixHQUFnRTtBQUgxRTtBQUtJLGFBQUtDLFdBQUwsMEJBQW1CdEUsTUFBbkIsRUFBdUIyQixzQkFBdkIsSUFBc0M3QixLQUF0QztBQUxKLE9BREY7QUFTRDs7Ozs7a0JBdlFrQkQsUzs7O0FBMFFyQixJQUFNMEUsYUFBYSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQW5COztBQUVBMUUsVUFBVTJFLFNBQVYsR0FBc0I7QUFDcEJ4RSxNQUFJLG9CQUFVeUUsTUFETTtBQUVwQmIsU0FBTyxvQkFBVWEsTUFGRztBQUdwQlosWUFBVSxvQkFBVWEsSUFIQTtBQUlwQlosU0FBTyxzQkFBWVUsU0FBWixDQUFzQlYsS0FKVDtBQUtwQkosYUFBVyxvQkFBVWlCLE1BTEQ7QUFNcEJoQixRQUFNLG9CQUFVZ0IsTUFOSTtBQU9wQjVELFNBQU8sb0JBQVUwRCxNQVBHO0FBUXBCVixnQkFBYyxvQkFBVVUsTUFSSjtBQVNwQnZFLGlCQUFlLG9CQUFVd0UsSUFUTDtBQVVwQmxDLGNBQVksb0JBQVVpQyxNQVZGO0FBV3BCbEMsZUFBYSxvQkFBVW1DLElBWEg7QUFZcEJoRCxhQUFXLG9CQUFVa0QsSUFaRDtBQWFwQjlDLFVBQVEsb0JBQVU4QyxJQWJFO0FBY3BCaEQsWUFBVSxvQkFBVWdELElBZEE7QUFlcEI5RCxpQkFBZSxvQkFBVThELElBZkw7QUFnQnBCcEQsY0FBWSxvQkFBVW9ELElBaEJGO0FBaUJwQm5CLGFBQVcsb0JBQVVvQixLQUFWLENBQWdCTixVQUFoQixDQWpCUztBQWtCcEJsQixXQUFTLG9CQUFVb0IsTUFsQkM7QUFtQnBCbkIsV0FBUyxvQkFBVW1CLE1BbkJDO0FBb0JwQmxCLHFCQUFtQixvQkFBVXFCO0FBcEJULENBQXRCOztBQXVCQS9FLFVBQVVpRixZQUFWLEdBQXlCO0FBQ3ZCckIsYUFBVztBQURZLENBQXpCOztBQUlBNUQsVUFBVWtGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljaygpIHtcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyKGZhbHNlKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gYCR7dGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCd9VEhIOm1tOnNzLlNTU1pgIDogKHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA/IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA6ICdZWVktTU0tREQnKTtcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZih2YWx1ZSAhPT0gaW5wdXRWYWx1ZSl7XG4gICAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcihhdXRvRm9jdXMpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlLCBhdXRvRm9jdXMgfSk7XG4gIH1cblxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaW5wdXRSZWY9e25vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKX1cbiAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uSW5wdXRDbGljayB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkRhdGVJY29uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSwgbWluRGF0ZSwgbWF4RGF0ZSwgZXh0ZW5zaW9uUmVuZGVyZXIsIGF1dG9Gb2N1cykge1xuICAgIGNvbnN0IGRhdGVwaWNrZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWRyb3Bkb3duJyxcbiAgICAgIGBzbGRzLWRyb3Bkb3duLS0ke3RoaXMucHJvcHMubWVudUFsaWdufWBcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XG4gICAgICAgIDxEYXRlcGlja2VyXG4gICAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICAgIHNlbGVjdGVkRGF0ZT17IGRhdGVWYWx1ZSB9XG4gICAgICAgICAgYXV0b0ZvY3VzPXsgYXV0b0ZvY3VzIH1cbiAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI9eyBleHRlbnNpb25SZW5kZXJlciB9XG4gICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkRhdGVwaWNrZXJCbHVyIH1cbiAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSB9XG4gICAgICAgIC8+IDogPGRpdiAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgZGVmYXVsdFZhbHVlLCB2YWx1ZSwgbWVudUFsaWduLFxuICAgICAgbWluRGF0ZSwgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRlVmFsdWUgPVxuICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDpcbiAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XG4gICAgICAgICAgZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IG12YWx1ZSA9IG1vbWVudChkYXRlVmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA6XG4gICAgICB0eXBlb2YgZGF0ZVZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBtdmFsdWUuaXNWYWxpZCgpID9cbiAgICAgICAgbXZhbHVlLmZvcm1hdCh0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSkgOlxuICAgICAgICAgICcnO1xuICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuc3RhdGUuYXV0b0ZvY3VzID09PSBmYWxzZSA/XG4gICAgICB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA6IHRydWU7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKFxuICAgICAgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICBhdXRvRm9jdXNcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgZGVsZXRlIHByb3BzLmRhdGVGb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmRlZmF1bHRPcGVuZWQ7XG4gICAgZGVsZXRlIHByb3BzLmluY2x1ZGVUaW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgIHN0eWxlPXsgbWVudUFsaWduID09PSAncmlnaHQnID8geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IG51bGwgfSA6IHt9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNRU5VX0FMSUdOID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=