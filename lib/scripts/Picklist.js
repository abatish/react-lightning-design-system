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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picklist = function (_Component) {
  (0, _inherits3.default)(Picklist, _Component);

  function Picklist(props) {
    (0, _classCallCheck3.default)(this, Picklist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Picklist.__proto__ || (0, _getPrototypeOf2.default)(Picklist)).call(this, props));

    _this.onClick = function () {
      _this.setState({ opened: !_this.state.opened });
      setTimeout(function () {
        _this.focusToTargetItemEl();
      }, 10);
    };

    _this.onPicklistItemClick = function (item, e) {
      var multiSelect = _this.props.multiSelect;

      _this.updateItemValue(item.value);

      if (_this.props.onChange) {
        _this.props.onChange(e, item.value);
      }
      if (_this.props.onSelect) {
        _this.props.onSelect(item);
      }
      if (!multiSelect) {
        // close if only single select
        setTimeout(function () {
          _this.setState({ opened: false });
          if (_this.props.onComplete) {
            _this.props.onComplete();
          }
          var picklistButtonEl = _this.picklistButton;
          if (picklistButtonEl) {
            picklistButtonEl.focus();
          }
        }, 200);
      }
      e.preventDefault();
      e.stopPropagation();
    };

    _this.onPicklistClose = function () {
      var picklistButtonEl = _this.picklistButton;
      picklistButtonEl.focus();
      _this.setState({ opened: false });
    };

    _this.onBlur = function () {
      setTimeout(function () {
        if (!_this.isFocusedInComponent()) {
          _this.setState({ opened: false });
          if (_this.props.onBlur) {
            _this.props.onBlur();
          }
          if (_this.props.onComplete) {
            _this.props.onComplete();
          }
        }
      }, 10);
    };

    _this.onKeydown = function (e) {
      if (e.keyCode === 40) {
        // down
        e.preventDefault();
        e.stopPropagation();
        if (!_this.state.opened) {
          _this.setState({ opened: true });
          setTimeout(function () {
            _this.focusToTargetItemEl();
          }, 10);
        } else {
          _this.focusToTargetItemEl();
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        _this.setState({ opened: false });
        if (_this.props.onComplete) {
          _this.props.onComplete();
        }
      }
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.renderPicklistItem = function (item) {
      var selected = _this.getValue().indexOf(item.props.value) !== -1;
      var onBlur = _this.onBlur;
      return _react2.default.cloneElement(item, { selected: selected, onBlur: onBlur });
    };

    var initialValue = props.value || props.defaultValue;

    _this.state = {
      id: 'form-element-' + (0, _util.uuid)(),
      opened: props.defaultOpened,
      value: Array.isArray(initialValue) ? initialValue : [initialValue]
    };
    return _this;
  }

  (0, _createClass3.default)(Picklist, [{
    key: 'getValue',
    value: function getValue() {
      var value = this.props.value;
      // for controlled behavior returning value from props

      if (value) {
        return Array.isArray(value) ? value : [value];
      }
      // for uncontrolled - value from state
      return this.state.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      var _props = this.props,
          multiSelect = _props.multiSelect,
          onValueChange = _props.onValueChange;

      var prevValue = this.getValue();
      this.setState({ value: newValue });

      // this is for controlled behavior
      if (onValueChange && prevValue !== newValue) {
        if (multiSelect) {
          onValueChange(newValue, prevValue);
        } else {
          onValueChange(newValue.length > 0 ? newValue[0] : undefined, prevValue.length > 0 ? prevValue[0] : undefined);
        }
      }
    }
  }, {
    key: 'getSelectedItemLabel',
    value: function getSelectedItemLabel() {
      var selectedValues = this.getValue();

      // many items selected
      if (selectedValues.length > 1) {
        return this.props.optionsSelectedText;
      }

      // one item
      if (selectedValues.length === 1) {
        var selectedValue = selectedValues[0];
        var selected = null;
        _react2.default.Children.forEach(this.props.children, function (item) {
          if (item.props.value === selectedValue) {
            selected = item.props.label || item.props.children;
          }
        });
        return selected || selectedValue;
      }

      // zero items
      return this.props.selectedText;
    }
  }, {
    key: 'updateItemValue',
    value: function updateItemValue(itemValue) {
      var multiSelect = this.props.multiSelect;


      if (multiSelect) {
        var newValue = this.getValue().slice();

        // toggle value
        if (newValue.indexOf(itemValue) === -1) {
          // add value to array
          newValue.push(itemValue);
        } else {
          // remove from array
          newValue.splice(newValue.indexOf(itemValue), 1);
        }
        this.setValue(newValue);
      } else {
        // set only one value
        this.setValue([itemValue]);
      }
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = this.node;
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl() {
      var dropdownEl = this.dropdown;
      var firstItemEl = dropdownEl.querySelector('.slds-is-selected > .react-slds-menuitem[tabIndex]') || dropdownEl.querySelector('.react-slds-menuitem[tabIndex]');
      if (firstItemEl) {
        firstItemEl.focus();
      }
    }
  }, {
    key: 'renderPicklist',
    value: function renderPicklist(props) {
      var _this2 = this;

      var className = props.className,
          id = props.id,
          pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'id']);

      var picklistClassNames = (0, _classnames2.default)(className, 'slds-picklist');
      delete pprops.onValueChange;
      return _react2.default.createElement(
        'div',
        { className: picklistClassNames, 'aria-expanded': this.state.opened },
        _react2.default.createElement(
          _Button2.default,
          {
            id: id,
            buttonRef: function buttonRef(node) {
              return _this2.picklistButton = node;
            },
            className: 'slds-picklist__label',
            type: 'neutral',
            onClick: this.onClick,
            onBlur: this.onBlur,
            onKeyDown: this.onKeydown
          },
          _react2.default.createElement(
            'span',
            { className: 'slds-truncate' },
            this.getSelectedItemLabel() || _react2.default.createElement(
              'span',
              null,
              '\xA0'
            )
          ),
          _react2.default.createElement(_Icon2.default, { icon: 'down' })
        )
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(menuSize, menuStyle) {
      var _this3 = this;

      var children = this.props.children;

      return this.state.opened ? _react2.default.createElement(
        _DropdownMenu2.default,
        {
          dropdownMenuRef: function dropdownMenuRef(node) {
            return _this3.dropdown = node;
          },
          size: menuSize,
          onMenuItemClick: this.onPicklistItemClick,
          onMenuClose: this.onPicklistClose,
          style: menuStyle,
          onBlur: this.onBlur
        },
        _react2.default.Children.map(children, this.renderPicklistItem)
      ) : _react2.default.createElement('div', { ref: function ref(node) {
          return _this3.dropdown = node;
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var id = this.props.id || this.state.id;
      var _props2 = this.props,
          label = _props2.label,
          required = _props2.required,
          error = _props2.error,
          totalCols = _props2.totalCols,
          cols = _props2.cols,
          menuSize = _props2.menuSize,
          menuStyle = _props2.menuStyle,
          props = (0, _objectWithoutProperties3.default)(_props2, ['label', 'required', 'error', 'totalCols', 'cols', 'menuSize', 'menuStyle']);

      var dropdown = this.renderDropdown(menuSize, menuStyle);
      var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({ formElementRef: function formElementRef(node) {
            return _this4.node = node;
          } }, formElemProps),
        this.renderPicklist((0, _extends3.default)({}, props, { id: id }))
      );
    }
  }]);
  return Picklist;
}(_react.Component);

exports.default = Picklist;


Picklist.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  multiSelect: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
  selectedText: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  menuSize: _react.PropTypes.string,
  menuStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: _react.PropTypes.node,
  optionsSelectedText: _react.PropTypes.string
};

Picklist.defaultProps = {
  multiSelect: false,
  defaultValue: [],
  selectedText: '',
  optionsSelectedText: ''
};

Picklist.isFormElement = true;

var PicklistItem = function PicklistItem(_ref) {
  var label = _ref.label,
      selected = _ref.selected,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['label', 'selected', 'children']);
  return _react2.default.createElement(
    _DropdownMenu.DropdownMenuItem,
    (0, _extends3.default)({
      icon: selected ? 'check' : 'none',
      role: 'menuitemradio' // eslint-disable-line
      , selected: selected
    }, props),
    label || children
  );
};

exports.PicklistItem = PicklistItem;
PicklistItem.propTypes = {
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  selected: _react.PropTypes.bool,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJvcGVuZWQiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwib25QaWNrbGlzdEl0ZW1DbGljayIsIml0ZW0iLCJlIiwibXVsdGlTZWxlY3QiLCJ1cGRhdGVJdGVtVmFsdWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25TZWxlY3QiLCJvbkNvbXBsZXRlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsInNlbGVjdGVkIiwiZ2V0VmFsdWUiLCJpbmRleE9mIiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJyZW5kZXJEcm9wZG93biIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJuYW1lIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50IiwiUGlja2xpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxROzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSUFDWEEsS0FEVzs7QUFBQSxVQVluQkMsT0FabUIsR0FZVCxZQUFNO0FBQ2QsWUFBS0MsUUFBTCxDQUFjLEVBQUVDLFFBQVEsQ0FBQyxNQUFLQyxLQUFMLENBQVdELE1BQXRCLEVBQWQ7QUFDQUUsaUJBQVcsWUFBTTtBQUNmLGNBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLEVBRkg7QUFHRCxLQWpCa0I7O0FBQUEsVUFtQm5CQyxtQkFuQm1CLEdBbUJHLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQUEsVUFDekJDLFdBRHlCLEdBQ1QsTUFBS1YsS0FESSxDQUN6QlUsV0FEeUI7O0FBRWpDLFlBQUtDLGVBQUwsQ0FBcUJILEtBQUtJLEtBQTFCOztBQUVBLFVBQUksTUFBS1osS0FBTCxDQUFXYSxRQUFmLEVBQXlCO0FBQ3ZCLGNBQUtiLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQkosQ0FBcEIsRUFBdUJELEtBQUtJLEtBQTVCO0FBQ0Q7QUFDRCxVQUFJLE1BQUtaLEtBQUws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WUFBVSxpQkFBVVM7QUFWRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShpbml0aWFsVmFsdWUpID8gaW5pdGlhbFZhbHVlIDogW2luaXRpYWxWYWx1ZV0sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2sgPSAoaXRlbSwgZSkgPT4ge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy51cGRhdGVJdGVtVmFsdWUoaXRlbS52YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpdGVtLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XG4gICAgfVxuICAgIGlmICghbXVsdGlTZWxlY3QpIHsgIC8vIGNsb3NlIGlmIG9ubHkgc2luZ2xlIHNlbGVjdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IHRoaXMucGlja2xpc3RCdXR0b247XG4gICAgICAgIGlmIChwaWNrbGlzdEJ1dHRvbkVsKSB7XG4gICAgICAgICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAyMDApO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBvblBpY2tsaXN0Q2xvc2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IHRoaXMucGlja2xpc3RCdXR0b247XG4gICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uQmx1ciA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfTtcblxuICBvbktleWRvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfTtcblxuICBnZXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGZvciBjb250cm9sbGVkIGJlaGF2aW9yIHJldHVybmluZyB2YWx1ZSBmcm9tIHByb3BzXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgfVxuICAgIC8vIGZvciB1bmNvbnRyb2xsZWQgLSB2YWx1ZSBmcm9tIHN0YXRlXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QsIG9uVmFsdWVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsdWUgfSk7XG5cbiAgICAvLyB0aGlzIGlzIGZvciBjb250cm9sbGVkIGJlaGF2aW9yXG4gICAgaWYgKG9uVmFsdWVDaGFuZ2UgJiYgcHJldlZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUsIHByZXZWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLmxlbmd0aCA+IDAgPyBuZXdWYWx1ZVswXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2VmFsdWUubGVuZ3RoID4gMCA/IHByZXZWYWx1ZVswXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAvLyBtYW55IGl0ZW1zIHNlbGVjdGVkXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnNTZWxlY3RlZFRleHQ7XG4gICAgfVxuXG4gICAgLy8gb25lIGl0ZW1cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZXNbMF07XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcm9wcy52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdGVkID0gaXRlbS5wcm9wcy5sYWJlbCB8fCBpdGVtLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZCB8fCBzZWxlY3RlZFZhbHVlO1xuICAgIH1cblxuICAgIC8vIHplcm8gaXRlbXNcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZFRleHQ7XG4gIH1cblxuICB1cGRhdGVJdGVtVmFsdWUoaXRlbVZhbHVlKSB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlKCkuc2xpY2UoKTtcblxuICAgICAgLy8gdG9nZ2xlIHZhbHVlXG4gICAgICBpZiAobmV3VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpID09PSAtMSkge1xuICAgICAgICAvLyBhZGQgdmFsdWUgdG8gYXJyYXlcbiAgICAgICAgbmV3VmFsdWUucHVzaChpdGVtVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gYXJyYXlcbiAgICAgICAgbmV3VmFsdWUuc3BsaWNlKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IG9ubHkgb25lIHZhbHVlXG4gICAgICB0aGlzLnNldFZhbHVlKFtpdGVtVmFsdWVdKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoKSB7XG4gICAgY29uc3QgZHJvcGRvd25FbCA9IHRoaXMuZHJvcGRvd247XG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWNrbGlzdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcGlja2xpc3QnKTtcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcGlja2xpc3RDbGFzc05hbWVzIH0gYXJpYS1leHBhbmRlZD17IHRoaXMuc3RhdGUub3BlbmVkIH0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICBidXR0b25SZWY9eyBub2RlID0+ICh0aGlzLnBpY2tsaXN0QnV0dG9uID0gbm9kZSkgfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1waWNrbGlzdF9fbGFiZWwnXG4gICAgICAgICAgdHlwZT0nbmV1dHJhbCdcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleWRvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHsgdGhpcy5nZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHx8IDxzcGFuPiZuYnNwOzwvc3Bhbj4gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8SWNvbiBpY29uPSdkb3duJyAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgZHJvcGRvd25NZW51UmVmPXsgbm9kZSA9PiAodGhpcy5kcm9wZG93biA9IG5vZGUpIH1cbiAgICAgICAgICBzaXplPXsgbWVudVNpemUgfVxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25QaWNrbGlzdEl0ZW1DbGljayB9XG4gICAgICAgICAgb25NZW51Q2xvc2U9eyB0aGlzLm9uUGlja2xpc3RDbG9zZSB9XG4gICAgICAgICAgc3R5bGU9eyBtZW51U3R5bGUgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlclBpY2tsaXN0SXRlbSkgfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT4gOlxuICAgICAgICAgIDxkaXYgcmVmPXsgbm9kZSA9PiAodGhpcy5kcm9wZG93biA9IG5vZGUpIH0gLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGlja2xpc3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0VmFsdWUoKS5pbmRleE9mKGl0ZW0ucHJvcHMudmFsdWUpICE9PSAtMTtcbiAgICBjb25zdCBvbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHsgc2VsZWN0ZWQsIG9uQmx1ciB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIG1lbnVTaXplLCBtZW51U3R5bGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBkcm9wZG93biB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICB7IHRoaXMucmVuZGVyUGlja2xpc3QoeyAuLi5wcm9wcywgaWQgfSkgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cblBpY2tsaXN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIF0pKSxcbiAgXSksXG4gIHNlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuUGlja2xpc3QuZGVmYXVsdFByb3BzID0ge1xuICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogW10sXG4gIHNlbGVjdGVkVGV4dDogJycsXG4gIG9wdGlvbnNTZWxlY3RlZFRleHQ6ICcnLFxufTtcblxuXG5QaWNrbGlzdC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcblxuXG5leHBvcnQgY29uc3QgUGlja2xpc3RJdGVtID0gKHsgbGFiZWwsIHNlbGVjdGVkLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8RHJvcGRvd25NZW51SXRlbVxuICAgIGljb249eyBzZWxlY3RlZCA/ICdjaGVjaycgOiAnbm9uZScgfVxuICAgIHJvbGU9J21lbnVpdGVtcmFkaW8nIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICB7IC4uLnByb3BzIH1cbiAgPlxuICAgIHsgbGFiZWwgfHwgY2hpbGRyZW4gfVxuICA8L0Ryb3Bkb3duTWVudUl0ZW0+XG4pO1xuXG5QaWNrbGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==