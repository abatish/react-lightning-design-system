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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixROzs7QUFDbkIsb0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhO0FBQ1gsNEJBQW9CLHFCQURUO0FBRVgsY0FBUSxNQUFNLGFBRkg7QUFHWCxhQUFPLE1BQU07QUFIRixLQUFiO0FBRmlCO0FBT2xCOzs7O3VDQUVrQixTLEVBQVcsUyxFQUFXO0FBQ3ZDLFVBQUksS0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixVQUFVLEtBQVYsS0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBL0QsRUFBc0U7QUFDcEUsYUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLEtBQUwsQ0FBVyxLQUFwQyxFQUEyQyxVQUFVLEtBQXJEO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQUE7O0FBQ1IsV0FBSyxRQUFMLENBQWMsRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBdEIsRUFBZDtBQUNBLGlCQUFXLFlBQU07QUFDZixlQUFLLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLEVBRkg7QUFHRDs7O3dDQUVtQixJLEVBQU0sQyxFQUFHO0FBQUE7O0FBQzNCLFdBQUssUUFBTCxDQUFjLEVBQUUsT0FBTyxLQUFLLEtBQWQsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQUssS0FBNUI7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLElBQXBCO0FBQ0Q7QUFDRCxpQkFB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Qjs7SUFHYSxZLFdBQUEsWTs7Ozs7Ozs7Ozs2QkFFRjtBQUFBLG9CQUNnRCxLQUFLLEtBRHJEO0FBQUEsVUFDQyxLQURELFdBQ0MsS0FERDtBQUFBLFVBQ1EsUUFEUixXQUNRLFFBRFI7QUFBQSxVQUNrQixLQURsQixXQUNrQixLQURsQjtBQUFBLFVBQ3lCLFFBRHpCLFdBQ3lCLFFBRHpCO0FBQUEsVUFDc0MsS0FEdEM7O0FBRVAsYUFDRTtBQUFBO1FBQUEseUJBQWtCLE1BQU8sV0FBVyxPQUFYLEdBQXFCLE1BQTlDLEVBQXVELE1BQUssZUFBNUQsRUFBNEUsVUFBVyxRQUF2RixJQUF1RyxLQUF2RztRQUNJLFNBQVM7QUFEYixPQURGO0FBS0Q7OztFQVQrQixnQkFBTSxTOztBQWF4QyxhQUFhLFNBQWIsR0FBeUI7QUFDdkIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLE1BRGUsRUFFekIsaUJBQVUsTUFGZSxDQUFwQixDQURnQjtBQUt2QixZQUFVLGlCQUFVLElBTEc7QUFNdkIsU0FBTyxpQkFBVSxHQU5NO0FBT3ZCLFlBQVUsaUJBQVU7QUFQRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSwgcHJldlN0YXRlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2soaXRlbSwgZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogaXRlbS52YWx1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpdGVtLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5waWNrbGlzdEJ1dHRvbik7XG4gICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgMjAwKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIG9uUGlja2xpc3RDbG9zZSgpIHtcbiAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnBpY2tsaXN0QnV0dG9uKTtcbiAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbktleWRvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkVmFsdWUoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnID8gdmFsdWUgOlxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUudmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS52YWx1ZSA6XG4gICAgICBkZWZhdWx0VmFsdWVcbiAgICApO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRWYWx1ZSgpO1xuICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBpdGVtLnByb3BzLmxhYmVsIHx8IGl0ZW0ucHJvcHMuY2hpbGRyZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIChzZWxlY3RlZCB8fCB0aGlzLnByb3BzLnNlbGVjdGVkVGV4dCk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRyb3Bkb3duKTtcbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCBtZW51U2l6ZSwgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcGlja2xpc3RDbGFzc05hbWVzIH0gYXJpYS1leHBhbmRlZD17IHRoaXMuc3RhdGUub3BlbmVkIH0+XG4gICAgICAgIDxidXR0b24gaWQ9eyBpZCB9IHJlZj0ncGlja2xpc3RCdXR0b24nIGNsYXNzTmFtZT0nc2xkcy1waWNrbGlzdF9fbGFiZWwgc2xkcy1idXR0b24gc2xkcy1idXR0b24tLW5ldXRyYWwnXG4gICAgICAgICAgdHlwZT0nYnV0dG9uJyBhcmlhLWhhc3BvcHVwIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlkb3duLmJpbmQodGhpcykgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz57IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH08L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24oKSB7XG4gICAgY29uc3QgeyBtZW51U2l6ZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgIDxEcm9wZG93bk1lbnUgcmVmPSdkcm9wZG93bicgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vblBpY2tsaXN0SXRlbUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25QaWNrbGlzdENsb3NlLmJpbmQodGhpcykgfVxuICAgICAgPlxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0uYmluZCh0aGlzKSkgfVxuICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgIDxkaXYgcmVmPSdkcm9wZG93bicgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGlja2xpc3RJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMudmFsdWUgPT09IHRoaXMuZ2V0U2VsZWN0ZWRWYWx1ZSgpO1xuICAgIGNvbnN0IG9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bigpO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIGRyb3Bkb3duIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblBpY2tsaXN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIHNlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cblBpY2tsaXN0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5cbmV4cG9ydCBjbGFzcyBQaWNrbGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBzZWxlY3RlZCwgdmFsdWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTWVudUl0ZW0gaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9IHJvbGU9J21lbnVpdGVtcmFkaW8nIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgbGFiZWwgfHwgY2hpbGRyZW4gfVxuICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICk7XG4gIH1cblxufVxuXG5QaWNrbGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==