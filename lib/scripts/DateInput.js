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
        }

        if (_this4.state.opened === true) {
          _this4.setState({ opened: false });
        }
      }, 10);
    }
  }, {
    key: 'onInputClick',
    value: function onInputClick(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFF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LGlCQUFlLG9CQUFVOEQsSUFmTDtBQWdCcEJwRCxjQUFZLG9CQUFVb0QsSUFoQkY7QUFpQnBCbkIsYUFBVyxvQkFBVW9CLEtBQVYsQ0FBZ0JOLFVBQWhCLENBakJTO0FBa0JwQmxCLFdBQVMsb0JBQVVvQixNQWxCQztBQW1CcEJuQixXQUFTLG9CQUFVbUIsTUFuQkM7QUFvQnBCbEIscUJBQW1CLG9CQUFVcUI7QUFwQlQsQ0FBdEI7O0FBdUJBL0UsVUFBVWlGLFlBQVYsR0FBeUI7QUFDdkJyQixhQUFXO0FBRFksQ0FBekI7O0FBSUE1RCxVQUFVa0YsYUFBVixHQUEwQixJQUExQiIsImZpbGUiOiJEYXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxuICAgIH07XG5cbiAgICB0aGlzLm9uRGF0ZUljb25DbGljayA9IHRoaXMub25EYXRlSWNvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0S2V5RG93biA9IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRCbHVyID0gdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dENsaWNrID0gdGhpcy5vbklucHV0Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25EYXRlcGlja2VyU2VsZWN0ID0gdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgPSB0aGlzLm9uRGF0ZXBpY2tlckJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlID0gdGhpcy5vbkRhdGVwaWNrZXJDbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgcmVnaXN0ZXJTdHlsZSgnZGF0ZWlucHV0JywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtaGFzLWVycm9yIC5zbGRzLWRhdGVwaWNrZXIgLnNsZHMtc2VsZWN0JyxcbiAgICAgICAgJ3sgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGRlNjsgYm94LXNoYWRvdzogbm9uZTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSAmJiBwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUljb25DbGljaygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYodGhpcy5zdGF0ZS5vcGVuZWQgPT09IHRydWUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIG9uSW5wdXRDbGljayhlKXtcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyKGZhbHNlKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWicgOiAnWVlZWS1NTS1ERCc7XG4gIH1cblxuICBnZXRJbnB1dFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGVGb3JtYXQgfHwgKHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyAnTCBISDptbScgOiAnTCcpO1xuICB9XG5cbiAgc2V0VmFsdWVGcm9tSW5wdXQoaW5wdXRWYWx1ZSkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudChpbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHJvb3RFbCwgdGFyZ2V0RWwpO1xuICB9XG5cbiAgc2hvd0RhdGVwaWNrZXIoYXV0b0ZvY3VzKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlLCB2YWx1ZSwgYXV0b0ZvY3VzfSk7XG4gIH1cblxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaW5wdXRSZWY9e25vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKX1cbiAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uSW5wdXRDbGljayB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkRhdGVJY29uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSwgbWluRGF0ZSwgbWF4RGF0ZSwgZXh0ZW5zaW9uUmVuZGVyZXIsIGF1dG9Gb2N1cykge1xuICAgIGNvbnN0IGRhdGVwaWNrZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWRyb3Bkb3duJyxcbiAgICAgIGBzbGRzLWRyb3Bkb3duLS0ke3RoaXMucHJvcHMubWVudUFsaWdufWBcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XG4gICAgICAgIDxEYXRlcGlja2VyXG4gICAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICAgIHNlbGVjdGVkRGF0ZT17IGRhdGVWYWx1ZSB9XG4gICAgICAgICAgYXV0b0ZvY3VzPSB7IGF1dG9Gb2N1cyB9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25EYXRlcGlja2VyQmx1ciB9XG4gICAgICAgICAgb25DbG9zZT17IHRoaXMub25EYXRlcGlja2VyQ2xvc2UgfVxuICAgICAgICAvPiA6IDxkaXYgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIG1lbnVBbGlnbixcbiAgICAgIG1pbkRhdGUsIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZVZhbHVlID1cbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XG4gICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUudmFsdWUgOlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPVxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxuICAgICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/XG4gICAgICAgIG12YWx1ZS5mb3JtYXQodGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpIDpcbiAgICAgICAgICAnJztcbiAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA9PT0gZmFsc2UgP1xuICAgICAgdGhpcy5zdGF0ZS5hdXRvRm9jdXMgOiB0cnVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihcbiAgICAgIG12YWx1ZS5pc1ZhbGlkKCkgPyBtdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiB1bmRlZmluZWQsXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgYXV0b0ZvY3VzXG4gICAgKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xuICAgIGRlbGV0ZSBwcm9wcy5kYXRlRm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5kZWZhdWx0T3BlbmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5pbmNsdWRlVGltZTtcbiAgICBkZWxldGUgcHJvcHMub25Db21wbGV0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfVxuICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICBzdHlsZT17IG1lbnVBbGlnbiA9PT0gJ3JpZ2h0JyA/IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiBudWxsIH0gOiB7fSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTUVOVV9BTElHTiA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5jbHVkZVRpbWU6IFByb3BUeXBlcy5ib29sLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudUFsaWduOiBQcm9wVHlwZXMub25lT2YoTUVOVV9BTElHTiksXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkRhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG1lbnVBbGlnbjogJ2xlZnQnLFxufTtcblxuRGF0ZUlucHV0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19