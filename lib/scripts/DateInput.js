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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUIsUzs7O0FBQ25CLHFCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLDRCQUFvQixxQkFEVDtBQUVYLGNBQVMsTUFBTSxhQUFOLElBQXVCO0FBRnJCLEtBQWI7QUFGaUI7QUFNbEI7Ozs7dUNBRWtCLFMsRUFBVyxTLEVBQVc7QUFDdkMsVUFBSSxLQUFLLEtBQUwsQ0FBVyxhQUFYLElBQTRCLFVBQVUsS0FBVixLQUFvQixLQUFLLEtBQUwsQ0FBVyxLQUEvRCxFQUFzRTtBQUNwRSxhQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssS0FBTCxDQUFXLEtBQXBDLEVBQTJDLFVBQVUsS0FBckQ7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQUE7O0FBQ2hCLGlCQUFXLFlBQU07QUFDZixlQUFLLGNBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdEOzs7bUNBRWMsQyxFQUFHO0FBQUE7O0FBQ2hCLFVBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7O0FBQ3BCLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLGFBQUssaUJBQUwsQ0FBdUIsRUFBRSxNQUFGLENBQVMsS0FBaEM7QUFDQSxZQUFJLEtBQUssS0FBTCxDQUFXLFVBQWYsRUFBMkI7QUFDekIscUJBQVcsWUFBTTtBQUNmLG1CQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHRDtBQUNGLE9BVEQsTUFTTyxJQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCOztBQUMzQixhQUFLLGNBQUw7QUFDQSxVQUFF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QUFWLEdBQXlCO0FBQ3ZCLGNBQVk7QUFEVyxDQUF6Qjs7QUFJQSxVQUFVLGFBQVYsR0FBMEIsSUFBMUIiLCJmaWxlIjoiRGF0ZUlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXHJcbiAgICAgIG9wZW5lZDogKHByb3BzLmRlZmF1bHRPcGVuZWQgfHwgZmFsc2UpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSAmJiBwcmV2U3RhdGUudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUsIHByZXZTdGF0ZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGVJY29uQ2xpY2soKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEtleURvd24oZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxyXG4gICAgICB0aGlzLnNob3dEYXRlcGlja2VyKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIGlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dEJsdXIoZSkge1xyXG4gICAgdGhpcy5zZXRWYWx1ZUZyb21JbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlcGlja2VyU2VsZWN0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgICAgY29uc3QgaW5wdXRFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XHJcbiAgICAgIGlmIChpbnB1dEVsKSB7XHJcbiAgICAgICAgaW5wdXRFbC5mb2N1cygpO1xyXG4gICAgICAgIGlucHV0RWwuc2VsZWN0KCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDApO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlcGlja2VyQmx1cigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZXBpY2tlckNsb3NlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICBjb25zdCBpbnB1dEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmlucHV0KTtcclxuICAgIGlmIChpbnB1dEVsKSB7XHJcbiAgICAgIGlucHV0RWwuZm9jdXMoKTtcclxuICAgICAgaW5wdXRFbC5zZWxlY3QoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlRnJvbUlucHV0KGlucHV0VmFsdWUpIHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XHJcbiAgICBpZiAoIWlucHV0VmFsdWUpIHtcclxuICAgICAgdmFsdWUgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaW5wdXRWYWx1ZTogdW5kZWZpbmVkIH0pO1xyXG4gIH1cclxuXHJcbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XHJcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xyXG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISF0YXJnZXRFbDtcclxuICB9XHJcblxyXG4gIHNob3dEYXRlcGlja2VyKCkge1xyXG4gICAgbGV0IHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB2YWx1ZSA9IG1vbWVudCh0aGlzLnN0YXRlLmlucHV0VmFsdWUsIHRoaXMucHJvcHMuZGF0ZUZvcm1hdCk7XHJcbiAgICAgIGlmICh2YWx1ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSwgdmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJbnB1dCh7IGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWlucHV0LWhhcy1pY29uIHNsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0Jz5cclxuICAgICAgICA8SW5wdXQgcmVmPSdpbnB1dCcgdmFsdWU9eyBpbnB1dFZhbHVlIH0geyAuLi5wcm9wcyB9XHJcbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcykgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb24gaWNvbj0nZXZlbnQnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgc3R5bGU9eyB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25EYXRlSWNvbkNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSkge1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy1kcm9wZG93bicsXHJcbiAgICAgICdzbGRzLWRyb3Bkb3duLS1sZWZ0J1xyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cclxuICAgICAgPERhdGVwaWNrZXIgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfSBzZWxlY3RlZERhdGU9eyBkYXRlVmFsdWUgfSBhdXRvRm9jdXNcclxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25EYXRlcGlja2VyU2VsZWN0LmJpbmQodGhpcykgfVxyXG4gICAgICAgIG9uQmx1cj17IHRoaXMub25EYXRlcGlja2VyQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbkNsb3NlPXsgdGhpcy5vbkRhdGVwaWNrZXJDbG9zZS5iaW5kKHRoaXMpIH1cclxuICAgICAgLz4gOlxyXG4gICAgICA8ZGl2IC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcclxuICAgICAgZGVmYXVsdFZhbHVlLCB2YWx1ZSwgZGF0ZUZvcm1hdCxcclxuICAgICAgb25DaGFuZ2UsIG9uS2V5RG93biwgb25CbHVyLCAuLi5wcm9wcyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZGF0ZVZhbHVlID1cclxuICAgICAgdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHZhbHVlIDpcclxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XHJcbiAgICAgIGRlZmF1bHRWYWx1ZTtcclxuICAgIGNvbnN0IG12YWx1ZSA9IG1vbWVudChkYXRlVmFsdWUsICdZWVlZLU1NLUREJyk7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID1cclxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmlucHV0VmFsdWUgOlxyXG4gICAgICB0eXBlb2YgZGF0ZVZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBtdmFsdWUuaXNWYWxpZCgpID8gbXZhbHVlLmZvcm1hdChkYXRlRm9ybWF0KSA6XHJcbiAgICAgIG51bGw7XHJcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oZGF0ZVZhbHVlKTtcclxuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KHsgaWQsIGlucHV0VmFsdWUsIC4uLnByb3BzIH0pIH1cclxuICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5EYXRlSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGF0ZUZvcm1hdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5EYXRlSW5wdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIGRhdGVGb3JtYXQ6ICdMJyxcclxufTtcclxuXHJcbkRhdGVJbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuIl19