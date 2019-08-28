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
    value: function renderDropdown(dateValue, minDate, maxDate, extensionRenderer, autoFocus, dateToday) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--' + this.props.menuAlign);
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, {
        className: datepickerClassNames,
        selectedDate: dateValue,
        autoFocus: autoFocus,
        minDate: minDate,
        maxDate: maxDate,
        dateToday: dateToday,
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
          dateToday = _props.dateToday,
          extensionRenderer = _props.extensionRenderer,
          props = (0, _objectWithoutProperties3.default)(_props, ['totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'menuAlign', 'minDate', 'maxDate', 'dateToday', 'extensionRenderer']);

      var dateValue = typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
      var mvalue = (0, _moment2.default)(dateValue, this.getValueFormat());
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(this.getInputValueFormat()) : '';
      var autoFocus = this.state.autoFocus === false ? this.state.autoFocus : true;
      var dropdown = this.renderDropdown(mvalue.isValid() ? mvalue.format('YYYY-MM-DD') : undefined, minDate, maxDate, extensionRenderer, autoFocus, dateToday);
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
  dateToday: _propTypes2.default.string,
  extensionRenderer: _propTypes2.default.func
};

DateInput.defaultProps = {
  menuAlign: 'left'
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlVG9kYXkiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIkNvbXBvbmVudCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiRm9ybUVsZW1lbnQiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBRXFCQSxTOzs7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLDRCQUFvQixpQkFEVDtBQUVYQyxjQUFTSCxNQUFNSSxhQUFOLElBQXVCO0FBRnJCLEtBQWI7O0FBS0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQixPQUFuQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7O0FBRUEsVUFBS0ssa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JMLElBQXhCLE9BQTFCO0FBQ0EsVUFBS00sZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JOLElBQXRCLE9BQXhCO0FBQ0EsVUFBS08saUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJQLElBQXZC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VTZFLFNBQVYsR0FBc0I7QUFDcEIxRSxNQUFJMkUsb0JBQVVDLE1BRE07QUFFcEJmLFNBQU9jLG9CQUFVQyxNQUZHO0FBR3BCZCxZQUFVYSxvQkFBVUUsSUFIQTtBQUlwQmQsU0FBT2Usc0JBQVlKLFNBQVosQ0FBc0JYLEtBSlQ7QUFLcEJKLGFBQVdnQixvQkFBVUksTUFMRDtBQU1wQm5CLFFBQU1lLG9CQUFVSSxNQU5JO0FBT3BCaEUsU0FBTzRELG9CQUFVQyxNQVBHO0FBUXBCWixnQkFBY1csb0JBQVVDLE1BUko7QUFTcEIxRSxpQkFBZXlFLG9CQUFVRSxJQVRMO0FBVXBCckMsY0FBWW1DLG9CQUFVQyxNQVZGO0FBV3BCckMsZUFBYW9DLG9CQUFVRSxJQVhIO0FBWXBCbkQsYUFBV2lELG9CQUFVSyxJQVpEO0FBYXBCbEQsVUFBUTZDLG9CQUFVSyxJQWJFO0FBY3BCcEQsWUFBVStDLG9CQUFVSyxJQWRBO0FBZXBCbEUsaUJBQWU2RCxvQkFBVUssSUFmTDtBQWdCcEJ4RCxjQUFZbUQsb0JBQVVLLElBaEJGO0FBaUJwQnRCLGFBQVdpQixvQkFBVU0sS0FBVixDQUFnQlIsVUFBaEIsQ0FqQlM7QUFrQnBCcEIsV0FBU3NCLG9CQUFVQyxNQWxCQztBQW1CcEJ0QixXQUFTcUIsb0JBQVVDLE1BbkJDO0FBb0JwQnBCLGFBQVdtQixvQkFBVUMsTUFwQkQ7QUFxQnBCckIscUJBQW1Cb0Isb0JBQVVLO0FBckJULENBQXRCOztBQXdCQW5GLFVBQVVxRixZQUFWLEdBQXlCO0FBQ3ZCeEIsYUFBVztBQURZLENBQXpCOztBQUlBN0QsVUFBVXNGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljaygpIHtcbiAgICB0aGlzLnNob3dEYXRlcGlja2VyKGZhbHNlKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gYCR7dGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCd9VEhIOm1tOnNzLlNTU1pgIDogKHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA/IHRoaXMucHJvcHMuZGF0ZUZvcm1hdCA6ICdZWVktTU0tREQnKTtcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZih2YWx1ZSAhPT0gaW5wdXRWYWx1ZSl7XG4gICAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcihhdXRvRm9jdXMpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlLCBhdXRvRm9jdXMgfSk7XG4gIH1cblxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaW5wdXRSZWY9e25vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKX1cbiAgICAgICAgICB2YWx1ZT17IGlucHV0VmFsdWUgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uSW5wdXRDbGljayB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkRhdGVJY29uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSwgbWluRGF0ZSwgbWF4RGF0ZSwgZXh0ZW5zaW9uUmVuZGVyZXIsIGF1dG9Gb2N1cywgZGF0ZVRvZGF5KSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dGhpcy5wcm9wcy5tZW51QWxpZ259YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH1cbiAgICAgICAgICBhdXRvRm9jdXM9eyBhdXRvRm9jdXMgfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBkYXRlVG9kYXk9e2RhdGVUb2RheX1cbiAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgLz4gOiA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLCBkYXRlVG9kYXksXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZVZhbHVlID1cbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XG4gICAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUudmFsdWUgOlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCB0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPVxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxuICAgICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/XG4gICAgICAgIG12YWx1ZS5mb3JtYXQodGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpIDpcbiAgICAgICAgICAnJztcbiAgICBjb25zdCBhdXRvRm9jdXMgPSB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA9PT0gZmFsc2UgP1xuICAgICAgdGhpcy5zdGF0ZS5hdXRvRm9jdXMgOiB0cnVlO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihcbiAgICAgIG12YWx1ZS5pc1ZhbGlkKCkgPyBtdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiB1bmRlZmluZWQsXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgZGF0ZVRvZGF5XG4gICAgKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xuICAgIGRlbGV0ZSBwcm9wcy5kYXRlRm9ybWF0O1xuICAgIGRlbGV0ZSBwcm9wcy5kZWZhdWx0T3BlbmVkO1xuICAgIGRlbGV0ZSBwcm9wcy5pbmNsdWRlVGltZTtcbiAgICBkZWxldGUgcHJvcHMub25Db21wbGV0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfVxuICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICBzdHlsZT17IG1lbnVBbGlnbiA9PT0gJ3JpZ2h0JyA/IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiBudWxsIH0gOiB7fSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTUVOVV9BTElHTiA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5jbHVkZVRpbWU6IFByb3BUeXBlcy5ib29sLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudUFsaWduOiBQcm9wVHlwZXMub25lT2YoTUVOVV9BTElHTiksXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRhdGVUb2RheTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=