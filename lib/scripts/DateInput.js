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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFF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QUFNcEJoQixRQUFNLG9CQUFVZ0IsTUFOSTtBQU9wQjVELFNBQU8sb0JBQVUwRCxNQVBHO0FBUXBCVixnQkFBYyxvQkFBVVUsTUFSSjtBQVNwQnZFLGlCQUFlLG9CQUFVd0UsSUFUTDtBQVVwQmxDLGNBQVksb0JBQVVpQyxNQVZGO0FBV3BCbEMsZUFBYSxvQkFBVW1DLElBWEg7QUFZcEJoRCxhQUFXLG9CQUFVa0QsSUFaRDtBQWFwQjlDLFVBQVEsb0JBQVU4QyxJQWJFO0FBY3BCaEQsWUFBVSxvQkFBVWdELElBZEE7QUFlcEI5RCxpQkFBZSxvQkFBVThELElBZkw7QUFnQnBCcEQsY0FBWSxvQkFBVW9ELElBaEJGO0FBaUJwQm5CLGFBQVcsb0JBQVVvQixLQUFWLENBQWdCTixVQUFoQixDQWpCUztBQWtCcEJsQixXQUFTLG9CQUFVb0IsTUFsQkM7QUFtQnBCbkIsV0FBUyxvQkFBVW1CLE1BbkJDO0FBb0JwQmxCLHFCQUFtQixvQkFBVXFCO0FBcEJULENBQXRCOztBQXVCQS9FLFVBQVVpRixZQUFWLEdBQXlCO0FBQ3ZCckIsYUFBVztBQURZLENBQXpCOztBQUlBNUQsVUFBVWtGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dENsaWNrKCkge1xuICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoZmFsc2UpO1xuICB9XG5cbiAgb25EYXRlcGlja2VyU2VsZWN0KGR2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGR2YWx1ZSkuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGlucHV0RWwpIHtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGlucHV0RWwpIHtcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyBgJHt0aGlzLnByb3BzLmRhdGVGb3JtYXQgPyB0aGlzLnByb3BzLmRhdGVGb3JtYXQgOiAnWVlZLU1NLUREJ31USEg6bW06c3MuU1NTWmAgOiAodGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCcpO1xuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IHx8ICh0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ0wgSEg6bW0nIDogJ0wnKTtcbiAgfVxuXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbihyb290RWwsIHRhcmdldEVsKTtcbiAgfVxuXG4gIHNob3dEYXRlcGlja2VyKGF1dG9Gb2N1cykge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSwgdmFsdWUsIGF1dG9Gb2N1cyB9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtaW5wdXQtaGFzLWljb24gc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpbnB1dFJlZj17bm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpfVxuICAgICAgICAgIHZhbHVlPXsgaW5wdXRWYWx1ZSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25JbnB1dENsaWNrIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uRGF0ZUljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPSdldmVudCcgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlLCBtaW5EYXRlLCBtYXhEYXRlLCBleHRlbnNpb25SZW5kZXJlciwgYXV0b0ZvY3VzKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dGhpcy5wcm9wcy5tZW51QWxpZ259YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH1cbiAgICAgICAgICBhdXRvRm9jdXM9eyBhdXRvRm9jdXMgfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgLz4gOiA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgJyc7XG4gICAgY29uc3QgYXV0b0ZvY3VzID0gdGhpcy5zdGF0ZS5hdXRvRm9jdXMgPT09IGZhbHNlID9cbiAgICAgIHRoaXMuc3RhdGUuYXV0b0ZvY3VzIDogdHJ1ZTtcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oXG4gICAgICBtdmFsdWUuaXNWYWxpZCgpID8gbXZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogdW5kZWZpbmVkLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICAgIGF1dG9Gb2N1c1xuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICBkZWxldGUgcHJvcHMuZGF0ZUZvcm1hdDtcbiAgICBkZWxldGUgcHJvcHMuZGVmYXVsdE9wZW5lZDtcbiAgICBkZWxldGUgcHJvcHMuaW5jbHVkZVRpbWU7XG4gICAgZGVsZXRlIHByb3BzLm9uQ29tcGxldGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBtZW51QWxpZ24gPT09ICdyaWdodCcgPyB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogbnVsbCB9IDoge30gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoeyBpZCwgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1FTlVfQUxJR04gPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1ZGVUaW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVBbGlnbjogUHJvcFR5cGVzLm9uZU9mKE1FTlVfQUxJR04pLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5EYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBtZW51QWxpZ246ICdsZWZ0Jyxcbn07XG5cbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==