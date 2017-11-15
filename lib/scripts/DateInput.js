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
      }, 10);
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
    value: function showDatepicker() {
      var value = this.state.value;
      if (typeof this.state.inputValue !== 'undefined') {
        value = (0, _moment2.default)(this.state.inputValue, this.getInputValueFormat());
        if (value.isValid()) {
          value = value.format(this.getValueFormat());
        } else {
          value = this.state.value;
        }
      }
      this.setState({ opened: true, value: value });
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
          onBlur: this.onInputBlur
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
    value: function renderDropdown(dateValue, minDate, maxDate, extensionRenderer) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--' + this.props.menuAlign);
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, {
        className: datepickerClassNames,
        selectedDate: dateValue,
        autoFocus: true,
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
      var dropdown = this.renderDropdown(mvalue.isValid() ? mvalue.format('YYYY-MM-DD') : undefined, minDate, maxDate, extensionRenderer);
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
  id: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  dateFormat: _react.PropTypes.string,
  includeTime: _react.PropTypes.bool,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  menuAlign: _react.PropTypes.oneOf(MENU_ALIGN),
  minDate: _react.PropTypes.string,
  maxDate: _react.PropTypes.string,
  extensionRenderer: _react.PropTypes.func
};

DateInput.defaultProps = {
  menuAlign: 'left'
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUJBLFM7OztBQUNuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsNEJBQW9CLGlCQURUO0FBRVhDLGNBQVNILE1BQU1JLGFBQU4sSUFBdUI7QUFGckIsS0FBYjs7QUFLQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLE9BQW5COztBQUVBLFVBQUtJLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCSixJQUF4QixPQUExQjtBQUNBLFVBQUtLLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTCxJQUF0QixPQUF4QjtBQUNBLFVBQUtNLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCTixJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFFRSxrREFGRixDQUR5QixDQUEzQjtBQWhCaUI7QUFzQmxCOzs7O3VDQUVrQk8sUyxFQUFXQyxTLEVBQVc7QUFDdkMsVUFBSSxLQUFLZCxLQUFMLENBQVdl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QixJQUFNd0UsYUFBYSxDQUFDLE1BQUQsRUFBUyxPQUFULENBQW5COztBQUVBeEUsVUFBVXlFLFNBQVYsR0FBc0I7QUFDcEJ0RSxNQUFJLGlCQUFVdUUsTUFETTtBQUVwQmIsU0FBTyxpQkFBVWEsTUFGRztBQUdwQlosWUFBVSxpQkFBVWEsSUFIQTtBQUlwQlosU0FBTyxzQkFBWVUsU0FBWixDQUFzQlYsS0FKVDtBQUtwQkosYUFBVyxpQkFBVWlCLE1BTEQ7QUFNcEJoQixRQUFNLGlCQUFVZ0IsTUFOSTtBQU9wQjNELFNBQU8saUJBQVV5RCxNQVBHO0FBUXBCVixnQkFBYyxpQkFBVVUsTUFSSjtBQVNwQnJFLGlCQUFlLGlCQUFVc0UsSUFUTDtBQVVwQmpDLGNBQVksaUJBQVVnQyxNQVZGO0FBV3BCakMsZUFBYSxpQkFBVWtDLElBWEg7QUFZcEJoRCxhQUFXLGlCQUFVa0QsSUFaRDtBQWFwQjdDLFVBQVEsaUJBQVU2QyxJQWJFO0FBY3BCL0MsWUFBVSxpQkFBVStDLElBZEE7QUFlcEI3RCxpQkFBZSxpQkFBVTZELElBZkw7QUFnQnBCbkQsY0FBWSxpQkFBVW1ELElBaEJGO0FBaUJwQm5CLGFBQVcsaUJBQVVvQixLQUFWLENBQWdCTixVQUFoQixDQWpCUztBQWtCcEJsQixXQUFTLGlCQUFVb0IsTUFsQkM7QUFtQnBCbkIsV0FBUyxpQkFBVW1CLE1BbkJDO0FBb0JwQmxCLHFCQUFtQixpQkFBVXFCO0FBcEJULENBQXRCOztBQXVCQTdFLFVBQVUrRSxZQUFWLEdBQXlCO0FBQ3ZCckIsYUFBVztBQURZLENBQXpCOztBQUlBMUQsVUFBVWdGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgb3BlbmVkOiAocHJvcHMuZGVmYXVsdE9wZW5lZCB8fCBmYWxzZSksXG4gICAgfTtcblxuICAgIHRoaXMub25EYXRlSWNvbkNsaWNrID0gdGhpcy5vbkRhdGVJY29uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRLZXlEb3duID0gdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dENoYW5nZSA9IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEJsdXIgPSB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyU2VsZWN0KGR2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGR2YWx1ZSkuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGlucHV0RWwpIHtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGlucHV0RWwpIHtcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJyA6ICdZWVlZLU1NLUREJztcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcigpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVySW5wdXQoeyBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgcHByb3BzID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlucHV0UmVmPXtub2RlID0+ICh0aGlzLmlucHV0ID0gbm9kZSl9XG4gICAgICAgICAgdmFsdWU9eyBpbnB1dFZhbHVlIH1cbiAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkRhdGVJY29uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSwgbWluRGF0ZSwgbWF4RGF0ZSwgZXh0ZW5zaW9uUmVuZGVyZXIpIHtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHt0aGlzLnByb3BzLm1lbnVBbGlnbn1gXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgLz4gOiA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihcbiAgICAgIG12YWx1ZS5pc1ZhbGlkKCkgPyBtdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiB1bmRlZmluZWQsXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICBkZWxldGUgcHJvcHMuZGF0ZUZvcm1hdDtcbiAgICBkZWxldGUgcHJvcHMuZGVmYXVsdE9wZW5lZDtcbiAgICBkZWxldGUgcHJvcHMuaW5jbHVkZVRpbWU7XG4gICAgZGVsZXRlIHByb3BzLm9uQ29tcGxldGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBtZW51QWxpZ24gPT09ICdyaWdodCcgPyB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogbnVsbCB9IDoge30gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoeyBpZCwgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1FTlVfQUxJR04gPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1ZGVUaW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVBbGlnbjogUHJvcFR5cGVzLm9uZU9mKE1FTlVfQUxJR04pLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5EYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBtZW51QWxpZ246ICdsZWZ0Jyxcbn07XG5cbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==