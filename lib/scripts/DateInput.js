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
      } else if (e.keyCode == 9) {
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
          if (_this4.state.opened === true) {
            _this4.setState({ opened: false });
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7QUFDQSxVQUFLSSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JKLElBQWxCLE9BQXBCOztBQUVBLFVBQUtLLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCTCxJQUF4QixPQUExQjtBQUNBLFVBQUtNLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCTixJQUF0QixPQUF4QjtBQUNBLFVBQUtPLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCUCxJQUF2QixPQUF6Qjs7QUFFQSw2QkFBYyxXQUFkLEVBQTJCLENBQ3pCLENBQ0UsK0NBREYsRUFF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O0FBVXBCbEMsY0FBWSxvQkFBVWlDLE1BVkY7QUFXcEJsQyxlQUFhLG9CQUFVbUMsSUFYSDtBQVlwQmhELGFBQVcsb0JBQVVrRCxJQVpEO0FBYXBCOUMsVUFBUSxvQkFBVThDLElBYkU7QUFjcEJoRCxZQUFVLG9CQUFVZ0QsSUFkQTtBQWVwQjlELGlCQUFlLG9CQUFVOEQsSUFmTDtBQWdCcEJwRCxjQUFZLG9CQUFVb0QsSUFoQkY7QUFpQnBCbkIsYUFBVyxvQkFBVW9CLEtBQVYsQ0FBZ0JOLFVBQWhCLENBakJTO0FBa0JwQmxCLFdBQVMsb0JBQVVvQixNQWxCQztBQW1CcEJuQixXQUFTLG9CQUFVbUIsTUFuQkM7QUFvQnBCbEIscUJBQW1CLG9CQUFVcUI7QUFwQlQsQ0FBdEI7O0FBdUJBL0UsVUFBVWlGLFlBQVYsR0FBeUI7QUFDdkJyQixhQUFXO0FBRFksQ0FBekI7O0FBSUE1RCxVQUFVa0YsYUFBVixHQUEwQixJQUExQiIsImZpbGUiOiJEYXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxuICAgIH07XG5cbiAgICB0aGlzLm9uRGF0ZUljb25DbGljayA9IHRoaXMub25EYXRlSWNvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0S2V5RG93biA9IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRCbHVyID0gdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dENsaWNrID0gdGhpcy5vbklucHV0Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25EYXRlcGlja2VyU2VsZWN0ID0gdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgPSB0aGlzLm9uRGF0ZXBpY2tlckJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlID0gdGhpcy5vbkRhdGVwaWNrZXJDbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgcmVnaXN0ZXJTdHlsZSgnZGF0ZWlucHV0JywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtaGFzLWVycm9yIC5zbGRzLWRhdGVwaWNrZXIgLnNsZHMtc2VsZWN0JyxcbiAgICAgICAgJ3sgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGRlNjsgYm94LXNoYWRvdzogbm9uZTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSAmJiBwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUljb25DbGljaygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9ZWxzZSBpZihlLmtleUNvZGUgPT0gOSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgIGlmKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSl7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuc3RhdGUub3BlbmVkID09PSB0cnVlKXtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcblxuICB9XG5cbiAgb25JbnB1dENsaWNrKGUpe1xuICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoZmFsc2UpO1xuICB9XG5cbiAgb25EYXRlcGlja2VyU2VsZWN0KGR2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGR2YWx1ZSkuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGlucHV0RWwpIHtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGlucHV0RWwpIHtcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyAnWVlZWS1NTS1ERFRISDptbTpzcy5TU1NaJyA6ICdZWVlZLU1NLUREJztcbiAgfVxuXG4gIGdldElucHV0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCB8fCAodGhpcy5wcm9wcy5pbmNsdWRlVGltZSA/ICdMIEhIOm1tJyA6ICdMJyk7XG4gIH1cblxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCB0YXJnZXRFbCk7XG4gIH1cblxuICBzaG93RGF0ZXBpY2tlcihhdXRvRm9jdXMpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlLCBhdXRvRm9jdXN9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtaW5wdXQtaGFzLWljb24gc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpbnB1dFJlZj17bm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpfVxuICAgICAgICAgIHZhbHVlPXsgaW5wdXRWYWx1ZSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25JbnB1dENsaWNrIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uRGF0ZUljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPSdldmVudCcgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlLCBtaW5EYXRlLCBtYXhEYXRlLCBleHRlbnNpb25SZW5kZXJlciwgYXV0b0ZvY3VzKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dGhpcy5wcm9wcy5tZW51QWxpZ259YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH1cbiAgICAgICAgICBhdXRvRm9jdXM9IHsgYXV0b0ZvY3VzIH1cbiAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI9eyBleHRlbnNpb25SZW5kZXJlciB9XG4gICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkRhdGVwaWNrZXJCbHVyIH1cbiAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSB9XG4gICAgICAgIC8+IDogPGRpdiAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgZGVmYXVsdFZhbHVlLCB2YWx1ZSwgbWVudUFsaWduLFxuICAgICAgbWluRGF0ZSwgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRlVmFsdWUgPVxuICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDpcbiAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XG4gICAgICAgICAgZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IG12YWx1ZSA9IG1vbWVudChkYXRlVmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA6XG4gICAgICB0eXBlb2YgZGF0ZVZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBtdmFsdWUuaXNWYWxpZCgpID9cbiAgICAgICAgbXZhbHVlLmZvcm1hdCh0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSkgOlxuICAgICAgICAgICcnO1xuICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuc3RhdGUuYXV0b0ZvY3VzID09PSBmYWxzZSA/XG4gICAgICB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA6IHRydWU7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKFxuICAgICAgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICBhdXRvRm9jdXNcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgZGVsZXRlIHByb3BzLmRhdGVGb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmRlZmF1bHRPcGVuZWQ7XG4gICAgZGVsZXRlIHByb3BzLmluY2x1ZGVUaW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgIHN0eWxlPXsgbWVudUFsaWduID09PSAncmlnaHQnID8geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IG51bGwgfSA6IHt9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNRU5VX0FMSUdOID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=