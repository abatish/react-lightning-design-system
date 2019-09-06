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
      if (this.props.focusOnOpen) {
        this.showDatepicker(false);
      }
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
  extensionRenderer: _propTypes2.default.func,
  focusOnOpen: _propTypes2.default.bool
};

DateInput.defaultProps = {
  menuAlign: 'left',
  focusOnOpen: true
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25JbnB1dENsaWNrIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsInNldFN0YXRlIiwib25LZXlEb3duIiwiaW5wdXRWYWx1ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJmb2N1c09uT3BlbiIsImR2YWx1ZSIsImZvcm1hdCIsImdldFZhbHVlRm9ybWF0IiwidW5kZWZpbmVkIiwiaW5wdXRFbCIsImlucHV0IiwiZm9jdXMiLCJzZWxlY3QiLCJpbmNsdWRlVGltZSIsImRhdGVGb3JtYXQiLCJnZXRJbnB1dFZhbHVlRm9ybWF0IiwiaXNWYWxpZCIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImF1dG9Gb2N1cyIsInBwcm9wcyIsImRpc2FibGVkIiwiY3Vyc29yIiwiZGF0ZVZhbHVlIiwibWluRGF0ZSIsIm1heERhdGUiLCJleHRlbnNpb25SZW5kZXJlciIsImRhdGVUb2RheSIsImRhdGVwaWNrZXJDbGFzc05hbWVzIiwibWVudUFsaWduIiwidG90YWxDb2xzIiwiY29scyIsImxhYmVsIiwicmVxdWlyZWQiLCJlcnJvciIsImRlZmF1bHRWYWx1ZSIsIm12YWx1ZSIsImRyb3Bkb3duIiwicmVuZGVyRHJvcGRvd24iLCJmb3JtRWxlbVByb3BzIiwicG9zaXRpb24iLCJyaWdodCIsInJlbmRlcklucHV0IiwiQ29tcG9uZW50IiwiTUVOVV9BTElHTiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsImRlZmF1bHRQcm9wcyIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUJBLFM7OztBQUNuQixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsNEJBQW9CLGlCQURUO0FBRVhDLGNBQVNILE1BQU1JLGFBQU4sSUFBdUI7QUFGckIsS0FBYjs7QUFLQSxVQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJILElBQWpCLE9BQW5CO0FBQ0EsVUFBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixPQUFwQjs7QUFFQSxVQUFLSyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkwsSUFBeEIsT0FBMUI7QUFDQSxVQUFLTSxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQk4sSUFBdEIsT0FBeEI7QUFDQSxVQUFLTyxpQkFBTCxHQUF5QixNQUFLQSxpQkFB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OztBQThRckIsSUFBTTZFLGFBQWEsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFuQjs7QUFFQTdFLFVBQVU4RSxTQUFWLEdBQXNCO0FBQ3BCM0UsTUFBSTRFLG9CQUFVQyxNQURNO0FBRXBCZixTQUFPYyxvQkFBVUMsTUFGRztBQUdwQmQsWUFBVWEsb0JBQVVFLElBSEE7QUFJcEJkLFNBQU9lLHNCQUFZSixTQUFaLENBQXNCWCxLQUpUO0FBS3BCSixhQUFXZ0Isb0JBQVVJLE1BTEQ7QUFNcEJuQixRQUFNZSxvQkFBVUksTUFOSTtBQU9wQmpFLFNBQU82RCxvQkFBVUMsTUFQRztBQVFwQlosZ0JBQWNXLG9CQUFVQyxNQVJKO0FBU3BCM0UsaUJBQWUwRSxvQkFBVUUsSUFUTDtBQVVwQnJDLGNBQVltQyxvQkFBVUMsTUFWRjtBQVdwQnJDLGVBQWFvQyxvQkFBVUUsSUFYSDtBQVlwQnBELGFBQVdrRCxvQkFBVUssSUFaRDtBQWFwQm5ELFVBQVE4QyxvQkFBVUssSUFiRTtBQWNwQnJELFlBQVVnRCxvQkFBVUssSUFkQTtBQWVwQm5FLGlCQUFlOEQsb0JBQVVLLElBZkw7QUFnQnBCekQsY0FBWW9ELG9CQUFVSyxJQWhCRjtBQWlCcEJ0QixhQUFXaUIsb0JBQVVNLEtBQVYsQ0FBZ0JSLFVBQWhCLENBakJTO0FBa0JwQnBCLFdBQVNzQixvQkFBVUMsTUFsQkM7QUFtQnBCdEIsV0FBU3FCLG9CQUFVQyxNQW5CQztBQW9CcEJwQixhQUFXbUIsb0JBQVVDLE1BcEJEO0FBcUJwQnJCLHFCQUFtQm9CLG9CQUFVSyxJQXJCVDtBQXNCcEJsRCxlQUFhNkMsb0JBQVVFO0FBdEJILENBQXRCOztBQXlCQWpGLFVBQVVzRixZQUFWLEdBQXlCO0FBQ3ZCeEIsYUFBVyxNQURZO0FBRXZCNUIsZUFBYTtBQUZVLENBQXpCOztBQUtBbEMsVUFBVXVGLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcbiAgICB9O1xuXG4gICAgdGhpcy5vbkRhdGVJY29uQ2xpY2sgPSB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dEtleURvd24gPSB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlID0gdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0Qmx1ciA9IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDbGljayA9IHRoaXMub25JbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCA9IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJCbHVyID0gdGhpcy5vbkRhdGVwaWNrZXJCbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSA9IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKTtcblxuICAgIHJlZ2lzdGVyU3R5bGUoJ2RhdGVpbnB1dCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAuc2xkcy1kYXRlcGlja2VyIC5zbGRzLXNlbGVjdCcsXG4gICAgICAgICd7IGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7IGJveC1zaGFkb3c6IG5vbmU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVJY29uQ2xpY2soKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRCbHVyKGUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRDbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1c09uT3Blbikge1xuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcihmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlcGlja2VyU2VsZWN0KGR2YWx1ZSkge1xuICAgIGNvbnN0IHZhbHVlID0gbW9tZW50KGR2YWx1ZSkuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgICAgaWYgKGlucHV0RWwpIHtcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAyMDApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQmx1cigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25EYXRlcGlja2VyQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgY29uc3QgaW5wdXRFbCA9IHRoaXMuaW5wdXQ7XG4gICAgaWYgKGlucHV0RWwpIHtcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWVGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyBgJHt0aGlzLnByb3BzLmRhdGVGb3JtYXQgPyB0aGlzLnByb3BzLmRhdGVGb3JtYXQgOiAnWVlZLU1NLUREJ31USEg6bW06c3MuU1NTWmAgOiAodGhpcy5wcm9wcy5kYXRlRm9ybWF0ID8gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IDogJ1lZWS1NTS1ERCcpO1xuICB9XG5cbiAgZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRlRm9ybWF0IHx8ICh0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ0wgSEg6bW0nIDogJ0wnKTtcbiAgfVxuXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmKHZhbHVlICE9PSBpbnB1dFZhbHVlKXtcbiAgICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbihyb290RWwsIHRhcmdldEVsKTtcbiAgfVxuXG4gIHNob3dEYXRlcGlja2VyKGF1dG9Gb2N1cykge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMuZ2V0SW5wdXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQodGhpcy5nZXRWYWx1ZUZvcm1hdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSwgdmFsdWUsIGF1dG9Gb2N1cyB9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtaW5wdXQtaGFzLWljb24gc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpbnB1dFJlZj17bm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpfVxuICAgICAgICAgIHZhbHVlPXsgaW5wdXRWYWx1ZSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25JbnB1dENsaWNrIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uRGF0ZUljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPSdldmVudCcgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJyAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlLCBtaW5EYXRlLCBtYXhEYXRlLCBleHRlbnNpb25SZW5kZXJlciwgYXV0b0ZvY3VzLCBkYXRlVG9kYXkpIHtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHt0aGlzLnByb3BzLm1lbnVBbGlnbn1gXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgICBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfVxuICAgICAgICAgIGF1dG9Gb2N1cz17IGF1dG9Gb2N1cyB9XG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGRhdGVUb2RheT17ZGF0ZVRvZGF5fVxuICAgICAgICAgIGV4dGVuc2lvblJlbmRlcmVyPXsgZXh0ZW5zaW9uUmVuZGVyZXIgfVxuICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25EYXRlcGlja2VyQmx1ciB9XG4gICAgICAgICAgb25DbG9zZT17IHRoaXMub25EYXRlcGlja2VyQ2xvc2UgfVxuICAgICAgICAvPiA6IDxkaXYgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIG1lbnVBbGlnbixcbiAgICAgIG1pbkRhdGUsIG1heERhdGUsIGRhdGVUb2RheSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRlVmFsdWUgPVxuICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDpcbiAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XG4gICAgICAgICAgZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IG12YWx1ZSA9IG1vbWVudChkYXRlVmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA6XG4gICAgICB0eXBlb2YgZGF0ZVZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBtdmFsdWUuaXNWYWxpZCgpID9cbiAgICAgICAgbXZhbHVlLmZvcm1hdCh0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSkgOlxuICAgICAgICAgICcnO1xuICAgIGNvbnN0IGF1dG9Gb2N1cyA9IHRoaXMuc3RhdGUuYXV0b0ZvY3VzID09PSBmYWxzZSA/XG4gICAgICB0aGlzLnN0YXRlLmF1dG9Gb2N1cyA6IHRydWU7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKFxuICAgICAgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBkYXRlVG9kYXlcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgZGVsZXRlIHByb3BzLmRhdGVGb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmRlZmF1bHRPcGVuZWQ7XG4gICAgZGVsZXRlIHByb3BzLmluY2x1ZGVUaW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgIHN0eWxlPXsgbWVudUFsaWduID09PSAncmlnaHQnID8geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IG51bGwgfSA6IHt9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNRU5VX0FMSUdOID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGF0ZVRvZGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvY3VzT25PcGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG4gIGZvY3VzT25PcGVuOiB0cnVlXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=