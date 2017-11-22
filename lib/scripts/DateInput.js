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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6WyJEYXRlSW5wdXQiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwib25EYXRlSWNvbkNsaWNrIiwiYmluZCIsIm9uSW5wdXRLZXlEb3duIiwib25JbnB1dENoYW5nZSIsIm9uSW5wdXRCbHVyIiwib25EYXRlcGlja2VyU2VsZWN0Iiwib25EYXRlcGlja2VyQmx1ciIsIm9uRGF0ZXBpY2tlckNsb3NlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25WYWx1ZUNoYW5nZSIsInZhbHVlIiwic2V0VGltZW91dCIsInNob3dEYXRlcGlja2VyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFZhbHVlRnJvbUlucHV0IiwidGFyZ2V0Iiwib25Db21wbGV0ZSIsIm9uS2V5RG93biIsImlucHV0VmFsdWUiLCJzZXRTdGF0ZSIsIm9uQ2hhbmdlIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkJsdXIiLCJkdmFsdWUiLCJmb3JtYXQiLCJnZXRWYWx1ZUZvcm1hdCIsInVuZGVmaW5lZCIsImlucHV0RWwiLCJpbnB1dCIsImZvY3VzIiwic2VsZWN0IiwiaW5jbHVkZVRpbWUiLCJkYXRlRm9ybWF0IiwiZ2V0SW5wdXRWYWx1ZUZvcm1hdCIsImlzVmFsaWQiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwcHJvcHMiLCJkaXNhYmxlZCIsImN1cnNvciIsImRhdGVWYWx1ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiZXh0ZW5zaW9uUmVuZGVyZXIiLCJkYXRlcGlja2VyQ2xhc3NOYW1lcyIsIm1lbnVBbGlnbiIsInRvdGFsQ29scyIsImNvbHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJkZWZhdWx0VmFsdWUiLCJtdmFsdWUiLCJkcm9wZG93biIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInBvc2l0aW9uIiwicmlnaHQiLCJyZW5kZXJJbnB1dCIsIk1FTlVfQUxJR04iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uZU9mIiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsUzs7O0FBQ25CLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyw0QkFBb0IsaUJBRFQ7QUFFWEMsY0FBU0gsTUFBTUksYUFBTixJQUF1QjtBQUZyQixLQUFiOztBQUtBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkgsSUFBakIsT0FBbkI7O0FBRUEsVUFBS0ksa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JKLElBQXhCLE9BQTFCO0FBQ0EsVUFBS0ssZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JMLElBQXRCLE9BQXhCO0FBQ0EsVUFBS00saUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJOLElBQXZCLE9BQXpCOztBQUVBLDZCQUFjLFdBQWQsRUFBMkIsQ0FDekIsQ0FDRSwrQ0FERixFQUVFLGtEQUZGLENBRHlCLENBQTNCO0FBaEJpQjtBQXNCbEI7Ozs7dUNBRWtCTyxTLEVBQVdDLFMsRUFBVztBQUN2QyxVQUFJLEtBQUtkLEtB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Ozs7QUF3UHJCLElBQU13RSxhQUFhLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBbkI7O0FBRUF4RSxVQUFVeUUsU0FBVixHQUFzQjtBQUNwQnRFLE1BQUksb0JBQVV1RSxNQURNO0FBRXBCYixTQUFPLG9CQUFVYSxNQUZHO0FBR3BCWixZQUFVLG9CQUFVYSxJQUhBO0FBSXBCWixTQUFPLHNCQUFZVSxTQUFaLENBQXNCVixLQUpUO0FBS3BCSixhQUFXLG9CQUFVaUIsTUFMRDtBQU1wQmhCLFFBQU0sb0JBQVVnQixNQU5JO0FBT3BCM0QsU0FBTyxvQkFBVXlELE1BUEc7QUFRcEJWLGdCQUFjLG9CQUFVVSxNQVJKO0FBU3BCckUsaUJBQWUsb0JBQVVzRSxJQVRMO0FBVXBCakMsY0FBWSxvQkFBVWdDLE1BVkY7QUFXcEJqQyxlQUFhLG9CQUFVa0MsSUFYSDtBQVlwQmhELGFBQVcsb0JBQVVrRCxJQVpEO0FBYXBCN0MsVUFBUSxvQkFBVTZDLElBYkU7QUFjcEIvQyxZQUFVLG9CQUFVK0MsSUFkQTtBQWVwQjdELGlCQUFlLG9CQUFVNkQsSUFmTDtBQWdCcEJuRCxjQUFZLG9CQUFVbUQsSUFoQkY7QUFpQnBCbkIsYUFBVyxvQkFBVW9CLEtBQVYsQ0FBZ0JOLFVBQWhCLENBakJTO0FBa0JwQmxCLFdBQVMsb0JBQVVvQixNQWxCQztBQW1CcEJuQixXQUFTLG9CQUFVbUIsTUFuQkM7QUFvQnBCbEIscUJBQW1CLG9CQUFVcUI7QUFwQlQsQ0FBdEI7O0FBdUJBN0UsVUFBVStFLFlBQVYsR0FBeUI7QUFDdkJyQixhQUFXO0FBRFksQ0FBekI7O0FBSUExRCxVQUFVZ0YsYUFBVixHQUEwQixJQUExQiIsImZpbGUiOiJEYXRlSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxuICAgIH07XG5cbiAgICB0aGlzLm9uRGF0ZUljb25DbGljayA9IHRoaXMub25EYXRlSWNvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0S2V5RG93biA9IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRCbHVyID0gdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbkRhdGVwaWNrZXJTZWxlY3QgPSB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EYXRlcGlja2VyQmx1ciA9IHRoaXMub25EYXRlcGlja2VyQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25EYXRlcGlja2VyQ2xvc2UgPSB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICByZWdpc3RlclN0eWxlKCdkYXRlaW5wdXQnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1oYXMtZXJyb3IgLnNsZHMtZGF0ZXBpY2tlciAuc2xkcy1zZWxlY3QnLFxuICAgICAgICAneyBib3JkZXI6IDFweCBzb2xpZCAjZDhkZGU2OyBib3gtc2hhZG93OiBub25lOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIHByZXZTdGF0ZS52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUsIHByZXZTdGF0ZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlSWNvbkNsaWNrKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Qmx1cihlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdChkdmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG1vbWVudChkdmFsdWUpLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gdGhpcy5pbnB1dDtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSB0aGlzLmlucHV0O1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmluY2x1ZGVUaW1lID8gJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWicgOiAnWVlZWS1NTS1ERCc7XG4gIH1cblxuICBnZXRJbnB1dFZhbHVlRm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGVGb3JtYXQgfHwgKHRoaXMucHJvcHMuaW5jbHVkZVRpbWUgPyAnTCBISDptbScgOiAnTCcpO1xuICB9XG5cbiAgc2V0VmFsdWVGcm9tSW5wdXQoaW5wdXRWYWx1ZSkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudChpbnB1dFZhbHVlLCB0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHJvb3RFbCwgdGFyZ2V0RWwpO1xuICB9XG5cbiAgc2hvd0RhdGVwaWNrZXIoKSB7XG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlID0gbW9tZW50KHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSwgdGhpcy5nZXRJbnB1dFZhbHVlRm9ybWF0KCkpO1xuICAgICAgaWYgKHZhbHVlLmlzVmFsaWQoKSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCh0aGlzLmdldFZhbHVlRm9ybWF0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlLCB2YWx1ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHsgaW5wdXRWYWx1ZSwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtaW5wdXQtaGFzLWljb24gc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpbnB1dFJlZj17bm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpfVxuICAgICAgICAgIHZhbHVlPXsgaW5wdXRWYWx1ZSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25EYXRlSWNvbkNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihkYXRlVmFsdWUsIG1pbkRhdGUsIG1heERhdGUsIGV4dGVuc2lvblJlbmRlcmVyKSB7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dGhpcy5wcm9wcy5tZW51QWxpZ259YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH1cbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgIG1heERhdGU9e21heERhdGV9XG4gICAgICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI9eyBleHRlbnNpb25SZW5kZXJlciB9XG4gICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdCB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkRhdGVwaWNrZXJCbHVyIH1cbiAgICAgICAgICBvbkNsb3NlPXsgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZSB9XG4gICAgICAgIC8+IDogPGRpdiAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgZGVmYXVsdFZhbHVlLCB2YWx1ZSwgbWVudUFsaWduLFxuICAgICAgbWluRGF0ZSwgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRlVmFsdWUgPVxuICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDpcbiAgICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XG4gICAgICAgICAgZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IG12YWx1ZSA9IG1vbWVudChkYXRlVmFsdWUsIHRoaXMuZ2V0VmFsdWVGb3JtYXQoKSk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSA6XG4gICAgICB0eXBlb2YgZGF0ZVZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBtdmFsdWUuaXNWYWxpZCgpID9cbiAgICAgICAgbXZhbHVlLmZvcm1hdCh0aGlzLmdldElucHV0VmFsdWVGb3JtYXQoKSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oXG4gICAgICBtdmFsdWUuaXNWYWxpZCgpID8gbXZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogdW5kZWZpbmVkLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcixcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgZGVsZXRlIHByb3BzLmRhdGVGb3JtYXQ7XG4gICAgZGVsZXRlIHByb3BzLmRlZmF1bHRPcGVuZWQ7XG4gICAgZGVsZXRlIHByb3BzLmluY2x1ZGVUaW1lO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgIHN0eWxlPXsgbWVudUFsaWduID09PSAncmlnaHQnID8geyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IG51bGwgfSA6IHt9IH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNRU5VX0FMSUdOID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkRhdGVJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmNsdWRlVGltZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihNRU5VX0FMSUdOKSxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbWVudUFsaWduOiAnbGVmdCcsXG59O1xuXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=