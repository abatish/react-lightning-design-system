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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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


      var finalItem = { value: '' };
      if (item.selected === false || multiSelect) {
        finalItem = item;
      }

      _this.updateItemValue(finalItem.value);
      if (_this.props.onChange) {
        _this.props.onChange(e, finalItem.value);
      }
      if (_this.props.onSelect) {
        _this.props.onSelect(finalItem);
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
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  multiSelect: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),
  defaultValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),
  selectedText: _propTypes2.default.string,
  defaultOpened: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onValueChange: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  menuSize: _propTypes2.default.string,
  menuStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  children: _propTypes2.default.node,
  optionsSelectedText: _propTypes2.default.string
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
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selected: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  children: _propTypes2.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJvcGVuZWQiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwib25QaWNrbGlzdEl0ZW1DbGljayIsIml0ZW0iLCJlIiwibXVsdGlTZWxlY3QiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJwaWNrbGlzdEJ1dHRvbkVsIiwicGlja2xpc3RCdXR0b24iLCJmb2N1cyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25QaWNrbGlzdENsb3NlIiwib25CbHVyIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbktleWRvd24iLCJrZXlDb2RlIiwib25LZXlEb3duIiwicmVuZGVyUGlja2xpc3RJdGVtIiwiZ2V0VmFsdWUiLCJpbmRleE9mIiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJyZW5kZXJEcm9wZG93biIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJuYW1lIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50IiwiUGlja2xpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBWW5CQyxPQVptQixHQVlULFlBQU07QUFDZCxZQUFLQyxRQUFMLENBQWMsRUFBRUMsUUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsTUFBdEIsRUFBZDtBQUNBRSxpQkFBVyxZQUFNO0FBQ2YsY0FBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdELEtBakJrQjs7QUFBQSxVQW1CbkJDLG1CQW5CbUIsR0FtQkcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFBQSxVQUN6QkMsV0FEeUIsR0FDVCxNQUFLVixLQURJLENBQ3pCVSxXQUR5Qjs7O0FBR2pDLFVBQUlDLFlBQVksRUFBRUMsT0FBTSxFQUFSLEVBQWhCO0FBQ0EsVUFBR0osS0FBS0ssUUFBTCxLQUFrQixLQUFsQixJQUEyQkgsV0FBOUIsRUFBMEM7QUFDeENDLG9CQUFZSCxJQUFaO0FBQ0Q7O0FBRUQsWUFBS00sZUFBTCxDQUFxQkgs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QURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBRGdCO0FBS3ZCdkUsWUFBVSxvQkFBVXNFLElBTEc7QUFNdkJ2RSxTQUFPLG9CQUFVMEUsU0FBVixDQUFvQixDQUN6QixvQkFBVUosTUFEZSxFQUV6QixvQkFBVUUsTUFGZSxDQUFwQixDQU5nQjtBQVV2Qm5DLFlBQVUsb0JBQVVTO0FBVkcsQ0FBekIiLCJmaWxlIjoiUGlja2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShpbml0aWFsVmFsdWUpID8gaW5pdGlhbFZhbHVlIDogW2luaXRpYWxWYWx1ZV0sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2sgPSAoaXRlbSwgZSkgPT4ge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZmluYWxJdGVtID0geyB2YWx1ZTonJyB9O1xuICAgIGlmKGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlIHx8IG11bHRpU2VsZWN0KXtcbiAgICAgIGZpbmFsSXRlbSA9IGl0ZW07XG4gICAgfVxuICAgIFxuICAgIHRoaXMudXBkYXRlSXRlbVZhbHVlKGZpbmFsSXRlbS52YWx1ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgZmluYWxJdGVtLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZmluYWxJdGVtKTtcbiAgICB9XG4gICAgaWYgKCFtdWx0aVNlbGVjdCkgeyAgLy8gY2xvc2UgaWYgb25seSBzaW5nbGUgc2VsZWN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gdGhpcy5waWNrbGlzdEJ1dHRvbjtcbiAgICAgICAgaWYgKHBpY2tsaXN0QnV0dG9uRWwpIHtcbiAgICAgICAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIG9uUGlja2xpc3RDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gdGhpcy5waWNrbGlzdEJ1dHRvbjtcbiAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH07XG5cbiAgb25CbHVyID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uS2V5ZG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFZhbHVlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3IgcmV0dXJuaW5nIHZhbHVlIGZyb20gcHJvcHNcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICB9XG4gICAgLy8gZm9yIHVuY29udHJvbGxlZCAtIHZhbHVlIGZyb20gc3RhdGVcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCwgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcblxuICAgIC8vIHRoaXMgaXMgZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3JcbiAgICBpZiAob25WYWx1ZUNoYW5nZSAmJiBwcmV2VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZSwgcHJldlZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUubGVuZ3RoID4gMCA/IG5ld1ZhbHVlWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZWYWx1ZS5sZW5ndGggPiAwID8gcHJldlZhbHVlWzBdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIC8vIG1hbnkgaXRlbXMgc2VsZWN0ZWRcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9uc1NlbGVjdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBvbmUgaXRlbVxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlc1swXTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSBpdGVtLnByb3BzLmxhYmVsIHx8IGl0ZW0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkIHx8IHNlbGVjdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gemVybyBpdGVtc1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGVkVGV4dDtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW1WYWx1ZShpdGVtVmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKS5zbGljZSgpO1xuXG4gICAgICAvLyB0b2dnbGUgdmFsdWVcbiAgICAgIGlmIChuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgIC8vIGFkZCB2YWx1ZSB0byBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgZnJvbSBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5zcGxpY2UobmV3VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgb25seSBvbmUgdmFsdWVcbiAgICAgIHRoaXMuc2V0VmFsdWUoW2l0ZW1WYWx1ZV0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gdGhpcy5kcm9wZG93bjtcbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHBpY2tsaXN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1waWNrbGlzdCcpO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBwaWNrbGlzdENsYXNzTmFtZXMgfSBhcmlhLWV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuZWQgfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgIGJ1dHRvblJlZj17IG5vZGUgPT4gKHRoaXMucGlja2xpc3RCdXR0b24gPSBub2RlKSB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpY2tsaXN0X19sYWJlbCdcbiAgICAgICAgICB0eXBlPSduZXV0cmFsJ1xuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5ZG93biB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyB0aGlzLmdldFNlbGVjdGVkSXRlbUxhYmVsKCkgfHwgPHNwYW4+Jm5ic3A7PC9zcGFuPiB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxJY29uIGljb249J2Rvd24nIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKG1lbnVTaXplLCBtZW51U3R5bGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XG4gICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICBkcm9wZG93bk1lbnVSZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfVxuICAgICAgICAgIHNpemU9eyBtZW51U2l6ZSB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vblBpY2tsaXN0SXRlbUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25QaWNrbGlzdENsb3NlIH1cbiAgICAgICAgICBzdHlsZT17IG1lbnVTdHlsZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyUGlja2xpc3RJdGVtKSB9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PiA6XG4gICAgICAgICAgPGRpdiByZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfSAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRWYWx1ZSgpLmluZGV4T2YoaXRlbS5wcm9wcy52YWx1ZSkgIT09IC0xO1xuICAgIGNvbnN0IG9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyBzZWxlY3RlZCwgb25CbHVyIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgbWVudVNpemUsIG1lbnVTdHlsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKG1lbnVTaXplLCBtZW51U3R5bGUpO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIGRyb3Bkb3duIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH0geyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJQaWNrbGlzdCh7IC4uLnByb3BzLCBpZCB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuUGlja2xpc3QucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIF0pKSxcbiAgXSksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgc2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudVNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9wdGlvbnNTZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5QaWNrbGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgc2VsZWN0ZWRUZXh0OiAnJyxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogJycsXG59O1xuXG5cblBpY2tsaXN0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5cbmV4cG9ydCBjb25zdCBQaWNrbGlzdEl0ZW0gPSAoeyBsYWJlbCwgc2VsZWN0ZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9XG4gICAgcm9sZT0nbWVudWl0ZW1yYWRpbycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgIHsgLi4ucHJvcHMgfVxuICA+XG4gICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XG4gIDwvRHJvcGRvd25NZW51SXRlbT5cbik7XG5cblBpY2tsaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19