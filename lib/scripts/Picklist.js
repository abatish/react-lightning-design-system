'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PicklistItem = undefined;

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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picklist = function (_React$Component) {
  (0, _inherits3.default)(Picklist, _React$Component);

  function Picklist(props) {
    (0, _classCallCheck3.default)(this, Picklist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Picklist).call(this, props));

    _this.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      opened: props.defaultOpened,
      value: props.defaultValue
    };
    return _this;
  }

  (0, _createClass3.default)(Picklist, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onValueChange && prevState.value !== this.state.value) {
        this.props.onValueChange(this.state.value, prevState.value);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _this2 = this;

      this.setState({ opened: !this.state.opened });
      setTimeout(function () {
        _this2.focusToTargetItemEl();
      }, 10);
    }
  }, {
    key: 'onPicklistItemClick',
    value: function onPicklistItemClick(item, e) {
      var _this3 = this;

      this.setState({ value: item.value });
      if (this.props.onChange) {
        this.props.onChange(e, item.value);
      }
      if (this.props.onSelect) {
        this.props.onSelect(item);
      }
      setTimeout(function () {
        _this3.setState({ opened: false });
        if (_this3.props.onComplete) {
          _this3.props.onComplete();
        }
        var picklistButtonEl = _reactDom2.default.findDOMNode(_this3.refs.picklistButton);
        if (picklistButtonEl) {
          picklistButtonEl.focus();
        }
      }, 200);
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'onPicklistClose',
    value: function onPicklistClose() {
      var picklistButtonEl = _reactDom2.default.findDOMNode(this.refs.picklistButton);
      picklistButtonEl.focus();
      this.setState({ opened: false });
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this4 = this;

      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
          _this4.setState({ opened: false });
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
    key: 'onKeydown',
    value: function onKeydown(e) {
      var _this5 = this;

      if (e.keyCode === 40) {
        // down
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.opened) {
          this.setState({ opened: true });
          setTimeout(function () {
            _this5.focusToTargetItemEl();
          }, 10);
        } else {
          this.focusToTargetItemEl();
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.setState({ opened: false });
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      var _props = this.props;
      var defaultValue = _props.defaultValue;
      var value = _props.value;

      return typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
    }
  }, {
    key: 'getSelectedItemLabel',
    value: function getSelectedItemLabel() {
      var selectedValue = this.getSelectedValue();
      var selected = null;
      _react2.default.Children.forEach(this.props.children, function (item) {
        if (item.props.value === selectedValue) {
          selected = item.props.label || item.props.children;
        }
      });
      return selected || this.props.selectedText;
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
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl() {
      var dropdownEl = _reactDom2.default.findDOMNode(this.refs.dropdown);
      var firstItemEl = dropdownEl.querySelector('.slds-is-selected > .react-slds-menuitem[tabIndex]') || dropdownEl.querySelector('.react-slds-menuitem[tabIndex]');
      if (firstItemEl) {
        firstItemEl.focus();
      }
    }
  }, {
    key: 'renderPicklist',
    value: function renderPicklist(props) {
      var className = props.className;
      var id = props.id;
      var menuSize = props.menuSize;
      var children = props.children;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'id', 'menuSize', 'children']);

      var picklistClassNames = (0, _classnames2.default)(className, 'slds-picklist');
      return _react2.default.createElement(
        'div',
        { className: picklistClassNames, 'aria-expanded': this.state.opened },
        _react2.default.createElement(
          'button',
          (0, _extends3.default)({ id: id, ref: 'picklistButton', className: 'slds-picklist__label slds-button slds-button--neutral',
            type: 'button', 'aria-haspopup': true }, pprops, {
            onClick: this.onClick.bind(this),
            onBlur: this.onBlur.bind(this),
            onKeyDown: this.onKeydown.bind(this)
          }),
          _react2.default.createElement(
            'span',
            { className: 'slds-truncate' },
            this.getSelectedItemLabel() || _react2.default.createElement(
              'span',
              null,
              ' '
            )
          ),
          _react2.default.createElement(_Icon2.default, { icon: 'down' })
        )
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown() {
      var _props2 = this.props;
      var menuSize = _props2.menuSize;
      var children = _props2.children;

      return this.state.opened ? _react2.default.createElement(
        _DropdownMenu2.default,
        { ref: 'dropdown', size: menuSize,
          onMenuItemClick: this.onPicklistItemClick.bind(this),
          onMenuClose: this.onPicklistClose.bind(this)
        },
        _react2.default.Children.map(children, this.renderPicklistItem.bind(this))
      ) : _react2.default.createElement('div', { ref: 'dropdown' });
    }
  }, {
    key: 'renderPicklistItem',
    value: function renderPicklistItem(item) {
      var selected = item.props.value === this.getSelectedValue();
      var onBlur = this.onBlur.bind(this);
      return _react2.default.cloneElement(item, { selected: selected, onBlur: onBlur });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props3 = this.props;
      var label = _props3.label;
      var required = _props3.required;
      var error = _props3.error;
      var totalCols = _props3.totalCols;
      var cols = _props3.cols;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['label', 'required', 'error', 'totalCols', 'cols']);

      var dropdown = this.renderDropdown();
      var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderPicklist((0, _extends3.default)({}, props, { id: id }))
      );
    }
  }]);
  return Picklist;
}(_react2.default.Component);

exports.default = Picklist;


Picklist.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  selectedText: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  menuSize: _react.PropTypes.string,
  children: _react.PropTypes.node
};

Picklist.isFormElement = true;

var PicklistItem = exports.PicklistItem = function (_React$Component2) {
  (0, _inherits3.default)(PicklistItem, _React$Component2);

  function PicklistItem() {
    (0, _classCallCheck3.default)(this, PicklistItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PicklistItem).apply(this, arguments));
  }

  (0, _createClass3.default)(PicklistItem, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var label = _props4.label;
      var selected = _props4.selected;
      var value = _props4.value;
      var children = _props4.children;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['label', 'selected', 'value', 'children']);

      return _react2.default.createElement(
        _DropdownMenu.DropdownMenuItem,
        (0, _extends3.default)({ icon: selected ? 'check' : 'none', role: 'menuitemradio', selected: selected }, props),
        label || children
      );
    }
  }]);
  return PicklistItem;
}(_react2.default.Component);

PicklistItem.propTypes = {
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  selected: _react.PropTypes.bool,
  value: _react.PropTypes.any,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixROzs7QUFDbkIsb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsNEJBQW9CLHFCQURUO0FBRVgsY0FBUSxNQUFNLGFBRkg7QUFHWCxhQUFPLE1BQU07QUFIRixLQUFiO0FBRmlCO0FBT2xCOzs7O3VDQUVrQixTLEVBQVcsUyxFQUFXO0FBQ3ZDLFVBQUksS0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixVQUFVLEtBQVYsS0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBL0QsRUFBc0U7QUFDcEUsYUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLEtBQUwsQ0FBVyxLQUFwQyxFQUEyQyxVQUFVLEtBQXJEO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQUE7O0FBQ1IsV0FBSyxRQUFMLENBQWMsRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBdEIsRUFBZDtBQUNBLGlCQUFXLFlBQU07QUFDZixlQUFLLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLEVBRkg7QUFHRDs7O3dDQUVtQixJLEVBQU0sQyxFQUFHO0FBQUE7O0FBQzNCLFdBQUssUUFBTCxDQUFjLEVBQUUsT0FBTyxLQUFLLEtBQWQsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQUssS0FBNUI7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCO0FBQ0Q7QUFDRCxpQkFB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Qjs7SUFHYSxZLFdBQUEsWTs7Ozs7Ozs7Ozs2QkFFRjtBQUFBLG9CQUNnRCxLQUFLLEtBRHJEO0FBQUEsVUFDQyxLQURELFdBQ0MsS0FERDtBQUFBLFVBQ1EsUUFEUixXQUNRLFFBRFI7QUFBQSxVQUNrQixLQURsQixXQUNrQixLQURsQjtBQUFBLFVBQ3lCLFFBRHpCLFdBQ3lCLFFBRHpCO0FBQUEsVUFDc0MsS0FEdEM7O0FBRVAsYUFDRTtBQUFBO1FBQUEseUJBQWtCLE1BQU8sV0FBVyxPQUFYLEdBQXFCLE1BQTlDLEVBQXVELE1BQUssZUFBNUQsRUFBNEUsVUFBVyxRQUF2RixJQUF1RyxLQUF2RztRQUNJLFNBQVM7QUFEYixPQURGO0FBS0Q7OztFQVQrQixnQkFBTSxTOztBQWF4QyxhQUFhLFNBQWIsR0FBeUI7QUFDdkIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLE1BRGUsRUFFekIsaUJBQVUsTUFGZSxDQUFwQixDQURnQjtBQUt2QixZQUFVLGlCQUFVLElBTEc7QUFNdkIsU0FBTyxpQkFBVSxHQU5NO0FBT3ZCLFlBQVUsaUJBQVU7QUFQRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxyXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXHJcbiAgICAgIHZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWUsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblZhbHVlQ2hhbmdlICYmIHByZXZTdGF0ZS52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBvblBpY2tsaXN0SXRlbUNsaWNrKGl0ZW0sIGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogaXRlbS52YWx1ZSB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaXRlbS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5waWNrbGlzdEJ1dHRvbik7XHJcbiAgICAgIGlmIChwaWNrbGlzdEJ1dHRvbkVsKSB7XHJcbiAgICAgICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDApO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIG9uUGlja2xpc3RDbG9zZSgpIHtcclxuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMucGlja2xpc3RCdXR0b24pO1xyXG4gICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25LZXlkb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVmFsdWUoKSB7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgdmFsdWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxyXG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLnZhbHVlIDpcclxuICAgICAgZGVmYXVsdFZhbHVlXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZFZhbHVlKCk7XHJcbiAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5wcm9wcy52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgIHNlbGVjdGVkID0gaXRlbS5wcm9wcy5sYWJlbCB8fCBpdGVtLnByb3BzLmNoaWxkcmVuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoc2VsZWN0ZWQgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZFRleHQpO1xyXG4gIH1cclxuXHJcbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XHJcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xyXG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISF0YXJnZXRFbDtcclxuICB9XHJcblxyXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoKSB7XHJcbiAgICBjb25zdCBkcm9wZG93bkVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRyb3Bkb3duKTtcclxuICAgIGNvbnN0IGZpcnN0SXRlbUVsID1cclxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XHJcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XHJcbiAgICBpZiAoZmlyc3RJdGVtRWwpIHtcclxuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIG1lbnVTaXplLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHBpY2tsaXN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1waWNrbGlzdCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBwaWNrbGlzdENsYXNzTmFtZXMgfSBhcmlhLWV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuZWQgfT5cclxuICAgICAgICA8YnV0dG9uIGlkPXsgaWQgfSByZWY9J3BpY2tsaXN0QnV0dG9uJyBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsIHNsZHMtYnV0dG9uIHNsZHMtYnV0dG9uLS1uZXV0cmFsJ1xyXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJyBhcmlhLWhhc3BvcHVwIHsgLi4ucHByb3BzIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlkb3duLmJpbmQodGhpcykgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+eyB0aGlzLmdldFNlbGVjdGVkSXRlbUxhYmVsKCkgfHwgPHNwYW4+Jm5ic3A7PC9zcGFuPiB9PC9zcGFuPlxyXG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB7IG1lbnVTaXplLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cclxuICAgICAgPERyb3Bkb3duTWVudSByZWY9J2Ryb3Bkb3duJyBzaXplPXsgbWVudVNpemUgfVxyXG4gICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25QaWNrbGlzdEl0ZW1DbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25QaWNrbGlzdENsb3NlLmJpbmQodGhpcykgfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyUGlja2xpc3RJdGVtLmJpbmQodGhpcykpIH1cclxuICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcclxuICAgICAgPGRpdiByZWY9J2Ryb3Bkb3duJyAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclBpY2tsaXN0SXRlbShpdGVtKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMudmFsdWUgPT09IHRoaXMuZ2V0U2VsZWN0ZWRWYWx1ZSgpO1xyXG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyBzZWxlY3RlZCwgb25CbHVyIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XHJcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24oKTtcclxuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIGRyb3Bkb3duIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cclxuICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGlja2xpc3QucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIHNlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBpY2tsaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbGFiZWwsIHNlbGVjdGVkLCB2YWx1ZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyb3Bkb3duTWVudUl0ZW0gaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9IHJvbGU9J21lbnVpdGVtcmFkaW8nIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfSB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XHJcbiAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICBdKSxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXX0=