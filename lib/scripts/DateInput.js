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
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(this.getInputValueFormat()) : undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFF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RCxpQkFBZSxvQkFBVThELElBZkw7QUFnQnBCcEQsY0FBWSxvQkFBVW9ELElBaEJGO0FBaUJwQm5CLGFBQVcsb0JBQVVvQixLQUFWLENBQWdCTixVQUFoQixDQWpCUztBQWtCcEJsQixXQUFTLG9CQUFVb0IsTUFsQkM7QUFtQnBCbkIsV0FBUyxvQkFBVW1CLE1BbkJDO0FBb0JwQmxCLHFCQUFtQixvQkFBVXFCO0FBcEJULENBQXRCOztBQXVCQS9FLFVBQVVpRixZQUFWLEdBQXlCO0FBQ3ZCckIsYUFBVztBQURZLENBQXpCOztBQUlBNUQsVUFBVWtGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmKHRoaXMuc3RhdGUub3BlbmVkID09PSB0cnVlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuXG4gIH1cblxuICBvbklucHV0Q2xpY2soZSl7XG4gICAgdGhpcy5zaG93RGF0ZXBpY2tlcihmYWxzZSk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJTZWxlY3QoZHZhbHVlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBtb21lbnQoZHZhbHVlKS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJCbHVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkRhdGVwaWNrZXJDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICBpZiAoaW5wdXRFbCkge1xuICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onIDogJ1lZWVktTU0tREQnO1xuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IHx8ICh0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ0wgSEg6bW0nIDogJ0wnKTtcbiAgfVxuXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbihyb290RWwsIHRhcmdldEVsKTtcbiAgfVxuXG4gIHNob3dEYXRlcGlja2VyKGF1dG9Gb2N1cykge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSwgdmFsdWUsIGF1dG9Gb2N1c30pO1xuICB9XG5cbiAgcmVuZGVySW5wdXQoeyBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgcHByb3BzID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlucHV0UmVmPXtub2RlID0+ICh0aGlzLmlucHV0ID0gbm9kZSl9XG4gICAgICAgICAgdmFsdWU9eyBpbnB1dFZhbHVlIH1cbiAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbklucHV0Q2xpY2sgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25EYXRlSWNvbkNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihkYXRlVmFsdWUsIG1pbkRhdGUsIG1heERhdGUsIGV4dGVuc2lvblJlbmRlcmVyLCBhdXRvRm9jdXMpIHtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHt0aGlzLnByb3BzLm1lbnVBbGlnbn1gXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1cz0geyBhdXRvRm9jdXMgfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgLz4gOiA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuc3RhdGUuYXV0b0ZvY3VzID09PSBmYWxzZSA/XG4gICAgICB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA6IHRydWU7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKFxuICAgICAgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICBhdXRvRm9jdXNcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgZGVsZXRlIHByb3BzLmRhdGVGb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmRlZmF1bHRPcGVuZWQ7XG4gICAgZGVsZXRlIHByb3BzLmluY2x1ZGVUaW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgIHN0eWxlPXsgbWVudUFsaWduID09PSAncmlnaHQnID8geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IG51bGwgfSA6IHt9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNRU5VX0FMSUdOID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=