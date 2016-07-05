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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Datepicker = require('./Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = function (_React$Component) {
  (0, _inherits3.default)(DateInput, _React$Component);

  function DateInput(props) {
    (0, _classCallCheck3.default)(this, DateInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DateInput).call(this, props));

    _this.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      opened: props.defaultOpened || false
    };
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
    value: function onDatepickerSelect(value) {
      var _this5 = this;

      this.setState({ value: value, inputValue: undefined });
      setTimeout(function () {
        _this5.setState({ opened: false });
        var inputEl = _reactDom2.default.findDOMNode(_this5.refs.input);
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
      var inputEl = _reactDom2.default.findDOMNode(this.refs.input);
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
    }
  }, {
    key: 'setValueFromInput',
    value: function setValueFromInput(inputValue) {
      var value = this.state.value;
      if (!inputValue) {
        value = '';
      } else {
        value = (0, _moment2.default)(inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = '';
        }
      }
      this.setState({ value: value, inputValue: undefined });
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = _reactDom2.default.findDOMNode(this);
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'showDatepicker',
    value: function showDatepicker() {
      var value = this.state.value;
      if (typeof this.state.inputValue !== 'undefined') {
        value = (0, _moment2.default)(this.state.inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = this.state.value;
        }
      }
      this.setState({ opened: true, value: value });
    }
  }, {
    key: 'renderInput',
    value: function renderInput(_ref) {
      var inputValue = _ref.inputValue;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['inputValue']);

      return _react2.default.createElement(
        'div',
        { className: 'slds-input-has-icon slds-input-has-icon--right' },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({ ref: 'input', value: inputValue }, props, {
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'event', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onDateIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(dateValue) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--left');
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, { className: datepickerClassNames, selectedDate: dateValue, autoFocus: true,
        onSelect: this.onDatepickerSelect.bind(this),
        onBlur: this.onDatepickerBlur.bind(this),
        onClose: this.onDatepickerClose.bind(this)
      }) : _react2.default.createElement('div', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props = this.props;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var defaultValue = _props.defaultValue;
      var value = _props.value;
      var dateFormat = _props.dateFormat;
      var onChange = _props.onChange;
      var onKeyDown = _props.onKeyDown;
      var onBlur = _props.onBlur;
      var props = (0, _objectWithoutProperties3.default)(_props, ['totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'dateFormat', 'onChange', 'onKeyDown', 'onBlur']);

      var dateValue = typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
      var mvalue = (0, _moment2.default)(dateValue, 'YYYY-MM-DD');
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(dateFormat) : null;
      var dropdown = this.renderDropdown(dateValue);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderInput((0, _extends3.default)({ id: id, inputValue: inputValue }, props))
      );
    }
  }]);
  return DateInput;
}(_react2.default.Component);

exports.default = DateInput;


DateInput.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  value: _react.PropTypes.string,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  defaultValue: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  dateFormat: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

DateInput.defaultProps = {
  dateFormat: 'L'
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUIsUzs7O0FBQ25CLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLDRCQUFvQixxQkFEVDtBQUVYLGNBQVMsTUFBTSxhQUFOLElBQXVCO0FBRnJCLEtBQWI7QUFGaUI7QUFNbEI7Ozs7dUNBRWtCLFMsRUFBVyxTLEVBQVc7QUFDdkMsVUFBSSxLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTRCLFVBQVUsS0FBVixLQUFvQixLQUFLLEtBQUwsQ0FBVyxLQUEvRCxFQUFzRTtBQUNwRSxhQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssS0FBTCxDQUFXLEtBQXBDLEVBQTJDLFVBQVUsS0FBckQ7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQUE7O0FBQ2hCLGlCQUFXLFlBQU07QUFDZixlQUFLLGNBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdEOzs7bUNBRWMsQyxFQUFHO0FBQUE7O0FBQ2hCLFVBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7O0FBQ3BCLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLGFBQUssaUJBQUwsQ0FBdUIsRUFBRSxNQUFGLENBQVMsS0FBaEM7QUFDQSxZQUFJLEtBQUssS0FBTCxDQUFXLFVBQWYsRUFBMkI7QUFDekIscUJBQVcsWUFBTTtBQUNmLG1CQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHRDtBQUNGLE9BVEQsTUFTTyxJQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCOztBQUMzQixhQUFLLGNBQUw7QUFDQSxVQUFF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QUFWLEdBQXlCO0FBQ3ZCLGNBQVk7QUFEVyxDQUF6Qjs7QUFJQSxVQUFVLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIHByZXZTdGF0ZS52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUsIHByZXZTdGF0ZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlSWNvbkNsaWNrKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpbnB1dFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Qmx1cihlKSB7XG4gICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlclNlbGVjdCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBjb25zdCBpbnB1dEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcbiAgICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGNvbnN0IGlucHV0RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xuICAgIGlmIChpbnB1dEVsKSB7XG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XG4gICAgICBpbnB1dEVsLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgIGlmICghaW5wdXRWYWx1ZSkge1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBtb21lbnQoaW5wdXRWYWx1ZSwgdGhpcy5wcm9wcy5kYXRlRm9ybWF0KTtcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIHNob3dEYXRlcGlja2VyKCkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCk7XG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlIH0pO1xuICB9XG5cbiAgcmVuZGVySW5wdXQoeyBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cbiAgICAgICAgPElucHV0IHJlZj0naW5wdXQnIHZhbHVlPXsgaW5wdXRWYWx1ZSB9IHsgLi4ucHJvcHMgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgc3R5bGU9eyB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihkYXRlVmFsdWUpIHtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICAnc2xkcy1kcm9wZG93bi0tbGVmdCdcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XG4gICAgICA8RGF0ZXBpY2tlciBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9IHNlbGVjdGVkRGF0ZT17IGRhdGVWYWx1ZSB9IGF1dG9Gb2N1c1xuICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xvc2U9eyB0aGlzLm9uRGF0ZXBpY2tlckNsb3NlLmJpbmQodGhpcykgfVxuICAgICAgLz4gOlxuICAgICAgPGRpdiAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgZGVmYXVsdFZhbHVlLCB2YWx1ZSwgZGF0ZUZvcm1hdCxcbiAgICAgIG9uQ2hhbmdlLCBvbktleURvd24sIG9uQmx1ciwgLi4ucHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0ZVZhbHVlID1cbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcbiAgICAgIGRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPVxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxuICAgICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgOlxuICAgICAgbnVsbDtcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkYXRlRm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkRhdGVJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGVGb3JtYXQ6ICdMJyxcbn07XG5cbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==