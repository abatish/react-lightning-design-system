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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJhdXRvRm9jdXMiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIkNvbXBvbmVudCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiRm9ybUVsZW1lbnQiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBRXFCQSxTOzs7QUFDbkIscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLDRCQUFvQixpQkFEVDtBQUVYQyxjQUFTSCxNQUFNSSxhQUFOLElBQXVCO0FBRnJCLEtBQWI7O0FBS0EsVUFBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCSCxJQUFqQixPQUFuQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7O0FBRUEsVUFBS0ssa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JMLElBQXhCLE9BQTFCO0FBQ0EsVUFBS00sZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JOLElBQXRCLE9BQXhCO0FBQ0EsVUFBS08saUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJQLElBQXZCLE9BQXpCOztBQUVB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WUFBVWEsb0JBQVVFLElBSEE7QUFJcEJkLFNBQU9lLHNCQUFZSixTQUFaLENBQXNCWCxLQUpUO0FBS3BCSixhQUFXZ0Isb0JBQVVJLE1BTEQ7QUFNcEJuQixRQUFNZSxvQkFBVUksTUFOSTtBQU9wQi9ELFNBQU8yRCxvQkFBVUMsTUFQRztBQVFwQlosZ0JBQWNXLG9CQUFVQyxNQVJKO0FBU3BCekUsaUJBQWV3RSxvQkFBVUUsSUFUTDtBQVVwQnBDLGNBQVlrQyxvQkFBVUMsTUFWRjtBQVdwQnBDLGVBQWFtQyxvQkFBVUUsSUFYSDtBQVlwQmxELGFBQVdnRCxvQkFBVUssSUFaRDtBQWFwQmpELFVBQVE0QyxvQkFBVUssSUFiRTtBQWNwQm5ELFlBQVU4QyxvQkFBVUssSUFkQTtBQWVwQmpFLGlCQUFlNEQsb0JBQVVLLElBZkw7QUFnQnBCdkQsY0FBWWtELG9CQUFVSyxJQWhCRjtBQWlCcEJ0QixhQUFXaUIsb0JBQVVNLEtBQVYsQ0FBZ0JSLFVBQWhCLENBakJTO0FBa0JwQm5CLFdBQVNxQixvQkFBVUMsTUFsQkM7QUFtQnBCckIsV0FBU29CLG9CQUFVQyxNQW5CQztBQW9CcEJwQixxQkFBbUJtQixvQkFBVUs7QUFwQlQsQ0FBdEI7O0FBdUJBbEYsVUFBVW9GLFlBQVYsR0FBeUI7QUFDdkJ4QixhQUFXO0FBRFksQ0FBekI7O0FBSUE1RCxVQUFVcUYsYUFBVixHQUEwQixJQUExQiIsImZpbGUiOiJEYXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxuICAgIH07XG5cbiAgICB0aGlzLm9uRGF0ZUljb25DbGljayA9IHRoaXMub25EYXRlSWNvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0S2V5RG93biA9IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRCbHVyID0gdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dENsaWNrID0gdGhpcy5vbklucHV0Q2xpY2suYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25EYXRlcGlja2VyU2VsZWN0ID0gdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgPSB0aGlzLm9uRGF0ZXBpY2tlckJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlID0gdGhpcy5vbkRhdGVwaWNrZXJDbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgcmVnaXN0ZXJTdHlsZSgnZGF0ZWlucHV0JywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtaGFzLWVycm9yIC5zbGRzLWRhdGVwaWNrZXIgLnNsZHMtc2VsZWN0JyxcbiAgICAgICAgJ3sgYm9yZGVyOiAxcHggc29saWQgI2Q4ZGRlNjsgYm94LXNoYWRvdzogbm9uZTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSAmJiBwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUljb25DbGljaygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gOSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dENsaWNrKCkge1xuICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoZmFsc2UpO1xuICB9XG5cbiAgb25EYXRlcGlja2VyU2VsZWN0KGR2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGR2YWx1ZSkuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGlucHV0RWwpIHtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGlucHV0RWwpIHtcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyBgJHt0aGlzLnByb3BzLmRhdGVGb3JtYXQgPyB0aGlzLnByb3BzLmRhdGVGb3JtYXQgOiAnWVlZLU1NLUREJ31USEg6bW06c3MuU1NTWmAgOiAodGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCcpO1xuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IHx8ICh0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ0wgSEg6bW0nIDogJ0wnKTtcbiAgfVxuXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmKHZhbHVlICE9PSBpbnB1dFZhbHVlKXtcbiAgICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbihyb290RWwsIHRhcmdldEVsKTtcbiAgfVxuXG4gIHNob3dEYXRlcGlja2VyKGF1dG9Gb2N1cykge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSwgdmFsdWUsIGF1dG9Gb2N1cyB9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtaW5wdXQtaGFzLWljb24gc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpbnB1dFJlZj17bm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpfVxuICAgICAgICAgIHZhbHVlPXsgaW5wdXRWYWx1ZSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25JbnB1dENsaWNrIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uRGF0ZUljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPSdldmVudCcgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlLCBtaW5EYXRlLCBtYXhEYXRlLCBleHRlbnNpb25SZW5kZXJlciwgYXV0b0ZvY3VzKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dGhpcy5wcm9wcy5tZW51QWxpZ259YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH1cbiAgICAgICAgICBhdXRvRm9jdXM9eyBhdXRvRm9jdXMgfVxuICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICBleHRlbnNpb25SZW5kZXJlcj17IGV4dGVuc2lvblJlbmRlcmVyIH1cbiAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0IH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIgfVxuICAgICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlIH1cbiAgICAgICAgLz4gOiA8ZGl2IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBkZWZhdWx0VmFsdWUsIHZhbHVlLCBtZW51QWxpZ24sXG4gICAgICBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgICAgICBkZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbXZhbHVlID0gbW9tZW50KGRhdGVWYWx1ZSwgdGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcbiAgICAgIHR5cGVvZiBkYXRlVmFsdWUgIT09ICd1bmRlZmluZWQnICYmIG12YWx1ZS5pc1ZhbGlkKCkgP1xuICAgICAgICBtdmFsdWUuZm9ybWF0KHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKSA6XG4gICAgICAgICAgJyc7XG4gICAgY29uc3QgYXV0b0ZvY3VzID0gdGhpcy5zdGF0ZS5hdXRvRm9jdXMgPT09IGZhbHNlID9cbiAgICAgIHRoaXMuc3RhdGUuYXV0b0ZvY3VzIDogdHJ1ZTtcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oXG4gICAgICBtdmFsdWUuaXNWYWxpZCgpID8gbXZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogdW5kZWZpbmVkLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICAgIGF1dG9Gb2N1c1xuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICBkZWxldGUgcHJvcHMuZGF0ZUZvcm1hdDtcbiAgICBkZWxldGUgcHJvcHMuZGVmYXVsdE9wZW5lZDtcbiAgICBkZWxldGUgcHJvcHMuaW5jbHVkZVRpbWU7XG4gICAgZGVsZXRlIHByb3BzLm9uQ29tcGxldGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgc3R5bGU9eyBtZW51QWxpZ24gPT09ICdyaWdodCcgPyB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogbnVsbCB9IDoge30gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoeyBpZCwgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1FTlVfQUxJR04gPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluY2x1ZGVUaW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVBbGlnbjogUHJvcFR5cGVzLm9uZU9mKE1FTlVfQUxJR04pLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5EYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBtZW51QWxpZ246ICdsZWZ0Jyxcbn07XG5cbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==