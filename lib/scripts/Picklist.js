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
      if (item.selected === false) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJvcGVuZWQiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwib25QaWNrbGlzdEl0ZW1DbGljayIsIml0ZW0iLCJlIiwibXVsdGlTZWxlY3QiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJwaWNrbGlzdEJ1dHRvbkVsIiwicGlja2xpc3RCdXR0b24iLCJmb2N1cyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25QaWNrbGlzdENsb3NlIiwib25CbHVyIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbktleWRvd24iLCJrZXlDb2RlIiwib25LZXlEb3duIiwicmVuZGVyUGlja2xpc3RJdGVtIiwiZ2V0VmFsdWUiLCJpbmRleE9mIiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJyZW5kZXJEcm9wZG93biIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJuYW1lIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50IiwiUGlja2xpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBWW5CQyxPQVptQixHQVlULFlBQU07QUFDZCxZQUFLQyxRQUFMLENBQWMsRUFBRUMsUUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsTUFBdEIsRUFBZDtBQUNBRSxpQkFBVyxZQUFNO0FBQ2YsY0FBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdELEtBakJrQjs7QUFBQSxVQW1CbkJDLG1CQW5CbUIsR0FtQkcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFBQSxVQUN6QkMsV0FEeUIsR0FDVCxNQUFLVixLQURJLENBQ3pCVSxXQUR5Qjs7O0FBR2pDLFVBQUlDLFlBQVksRUFBRUMsT0FBTSxFQUFSLEVBQWhCO0FBQ0EsVUFBR0osS0FBS0ssUUFBTCxLQUFrQixLQUFyQixFQUEyQjtBQUN6QkYsb0JBQVlILElBQVo7QUFDRDs7QUFFRCxZQUFLTSxlQUFMLENBQXFCSCxVQUFVQyxLQUEvQjtB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QVVFLE1BRmUsQ0FBcEIsQ0FEZ0I7QUFLdkJ2RSxZQUFVLG9CQUFVc0UsSUFMRztBQU12QnZFLFNBQU8sb0JBQVUwRSxTQUFWLENBQW9CLENBQ3pCLG9CQUFVSixNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBTmdCO0FBVXZCbkMsWUFBVSxvQkFBVVM7QUFWRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KGluaXRpYWxWYWx1ZSkgPyBpbml0aWFsVmFsdWUgOiBbaW5pdGlhbFZhbHVlXSxcbiAgICB9O1xuICB9XG5cbiAgb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdEl0ZW1DbGljayA9IChpdGVtLCBlKSA9PiB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBmaW5hbEl0ZW0gPSB7IHZhbHVlOicnIH07XG4gICAgaWYoaXRlbS5zZWxlY3RlZCA9PT0gZmFsc2Upe1xuICAgICAgZmluYWxJdGVtID0gaXRlbTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy51cGRhdGVJdGVtVmFsdWUoZmluYWxJdGVtLnZhbHVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBmaW5hbEl0ZW0udmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChmaW5hbEl0ZW0pO1xuICAgIH1cbiAgICBpZiAoIW11bHRpU2VsZWN0KSB7ICAvLyBjbG9zZSBpZiBvbmx5IHNpbmdsZSBzZWxlY3RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25LZXlkb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBmb3IgY29udHJvbGxlZCBiZWhhdmlvciByZXR1cm5pbmcgdmFsdWUgZnJvbSBwcm9wc1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgIH1cbiAgICAvLyBmb3IgdW5jb250cm9sbGVkIC0gdmFsdWUgZnJvbSBzdGF0ZVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvblZhbHVlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgLy8gdGhpcyBpcyBmb3IgY29udHJvbGxlZCBiZWhhdmlvclxuICAgIGlmIChvblZhbHVlQ2hhbmdlICYmIHByZXZWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPiAwID8gbmV3VmFsdWVbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlZhbHVlLmxlbmd0aCA+IDAgPyBwcmV2VmFsdWVbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkSXRlbUxhYmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgLy8gbWFueSBpdGVtcyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zU2VsZWN0ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIG9uZSBpdGVtXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMubGFiZWwgfHwgaXRlbS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQgfHwgc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB6ZXJvIGl0ZW1zXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRUZXh0O1xuICB9XG5cbiAgdXBkYXRlSXRlbVZhbHVlKGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLnNsaWNlKCk7XG5cbiAgICAgIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gYWRkIHZhbHVlIHRvIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBvbmx5IG9uZSB2YWx1ZVxuICAgICAgdGhpcy5zZXRWYWx1ZShbaXRlbVZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGNvbnN0IGZpcnN0SXRlbUVsID1cbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnNsZHMtaXMtc2VsZWN0ZWQgPiAucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKSB8fFxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICBpZiAoZmlyc3RJdGVtRWwpIHtcbiAgICAgIGZpcnN0SXRlbUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlja2xpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0Jyk7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgYnV0dG9uUmVmPXsgbm9kZSA9PiAodGhpcy5waWNrbGlzdEJ1dHRvbiA9IG5vZGUpIH1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsJ1xuICAgICAgICAgIHR5cGU9J25ldXRyYWwnXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlkb3duIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgIGRyb3Bkb3duTWVudVJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9XG4gICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uUGlja2xpc3RJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UgfVxuICAgICAgICAgIHN0eWxlPXsgbWVudVN0eWxlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0pIH1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFZhbHVlKCkuaW5kZXhPZihpdGVtLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBtZW51U2l6ZSwgbWVudVN0eWxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgZHJvcGRvd24gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBzZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblBpY2tsaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBzZWxlY3RlZFRleHQ6ICcnLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiAnJyxcbn07XG5cblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuZXhwb3J0IGNvbnN0IFBpY2tsaXN0SXRlbSA9ICh7IGxhYmVsLCBzZWxlY3RlZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH1cbiAgICByb2xlPSdtZW51aXRlbXJhZGlvJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgeyAuLi5wcm9wcyB9XG4gID5cbiAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuKTtcblxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=