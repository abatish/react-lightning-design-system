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

    _this.onClick = function (e) {
      var onToggle = _this.props.onToggle;


      var newToggleState = !_this.state.opened;
      _this.setState({ opened: newToggleState });
      onToggle && onToggle(e, newToggleState);

      setTimeout(function () {
        _this.focusToTargetItemEl();
      }, 10);
    };

    _this.onPicklistItemClick = function (item, e) {
      var _this$props = _this.props,
          multiSelect = _this$props.multiSelect,
          onChange = _this$props.onChange,
          onSelect = _this$props.onSelect,
          onComplete = _this$props.onComplete,
          onToggle = _this$props.onToggle;


      var finalItem = { value: '' };
      if (item.selected === false || multiSelect) {
        finalItem = item;
      }

      _this.updateItemValue(finalItem.value);

      onChange && onChange(e, finalItem.value);
      onSelect && onSelect(finalItem);

      if (!multiSelect) {
        // close if only single select
        setTimeout(function () {
          var opened = false;
          var picklistButtonEl = _this.picklistButton;

          _this.setState({ opened: opened });

          onComplete && onComplete();
          onToggle && onToggle(e, opened);

          if (picklistButtonEl) {
            picklistButtonEl.focus();
          }
        }, 200);
      }
      e.preventDefault();
      e.stopPropagation();
    };

    _this.onPicklistClose = function (e) {
      var onToggle = _this.props.onToggle;

      var opened = false;
      var picklistButtonEl = _this.picklistButton;
      picklistButtonEl.focus();
      _this.setState({ opened: opened });
      onToggle && onToggle(e, opened);
    };

    _this.onBlur = function (e) {
      setTimeout(function () {
        if (!_this.isFocusedInComponent()) {
          var _this$props2 = _this.props,
              onBlur = _this$props2.onBlur,
              onComplete = _this$props2.onComplete,
              onToggle = _this$props2.onToggle;

          var opened = false;

          _this.setState({ opened: opened });

          onBlur && onBlur();
          onComplete && onComplete();
          onToggle && onToggle(e, opened);
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
      if (selectedValues.length === 1 && selectedValues[0]) {
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
      var targetEl = document.activeElement;
      return (0, _util.isElInChildren)(this.node, targetEl) || (0, _util.isElInChildren)(this.dropdown, targetEl);
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl() {
      var dropdownEl = this.dropdown;
      if (!dropdownEl) {
        return;
      }
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
          disabled = props.disabled,
          menuSize = props.menuSize,
          menuStyle = props.menuStyle,
          pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'id', 'disabled', 'menuSize', 'menuStyle']);

      var picklistClassNames = (0, _classnames2.default)(className, 'slds-picklist', 'slds-dropdown-trigger');
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
            disabled: disabled,
            onClick: !disabled && this.onClick,
            onBlur: !disabled && this.onBlur,
            onKeyDown: !disabled && this.onKeydown
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
        ),
        this.renderDropdown(menuSize, menuStyle)
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(menuSize, menuStyle) {
      var _this3 = this;

      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children;

      return this.state.opened ? _react2.default.createElement(
        _DropdownMenu2.default,
        {
          portalClassName: (0, _classnames2.default)(className, 'slds-picklist'),
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
      var _props3 = this.props,
          label = _props3.label,
          required = _props3.required,
          error = _props3.error,
          totalCols = _props3.totalCols,
          cols = _props3.cols,
          menuSize = _props3.menuSize,
          menuStyle = _props3.menuStyle,
          props = (0, _objectWithoutProperties3.default)(_props3, ['label', 'required', 'error', 'totalCols', 'cols', 'menuSize', 'menuStyle']);

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
  disabled: _propTypes2.default.bool,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwiZSIsIm9uVG9nZ2xlIiwibmV3VG9nZ2xlU3RhdGUiLCJzdGF0ZSIsIm9wZW5lZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzVG9UYXJnZXRJdGVtRWwiLCJvblBpY2tsaXN0SXRlbUNsaWNrIiwiaXRlbSIsIm11bHRpU2VsZWN0Iiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsImdldFZhbHVlIiwiaW5kZXhPZiIsImNsb25lRWxlbWVudCIsImluaXRpYWxWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlkIiwiZGVmYXVsdE9wZW5lZCIsIkFycmF5IiwiaXNBcnJheSIsIm5ld1ZhbHVlIiwib25WYWx1ZUNoYW5nZSIsInByZXZWYWx1ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlbGVjdGVkVmFsdWVzIiwib3B0aW9uc1NlbGVjdGVkVGV4dCIsInNlbGVjdGVkVmFsdWUiLCJDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZHJlbiIsImxhYmVsIiwic2VsZWN0ZWRUZXh0IiwiaXRlbVZhbHVlIiwic2xpY2UiLCJwdXNoIiwic3BsaWNlIiwic2V0VmFsdWUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIm5vZGUiLCJkcm9wZG93biIsImRyb3Bkb3duRWwiLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwicHByb3BzIiwicGlja2xpc3RDbGFzc05hbWVzIiwiZ2V0U2VsZWN0ZWRJdGVtTGFiZWwiLCJyZW5kZXJEcm9wZG93biIsIm1hcCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsInJlbmRlclBpY2tsaXN0IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsIm5hbWUiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImlzRm9ybUVsZW1lbnQiLCJQaWNrbGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBQUEsVUFZbkJDLE9BWm1CLEdBWVQsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7O0FBR2YsVUFBSUMsaUJBQWlCLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxNQUFqQztBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFFRCxRQUFRRixjQUFWLEVBQWQ7QUFDQUQsa0JBQVlBLFNBQVNELENBQVQsRUFBWUUsY0FBWixDQUFaOztBQUVBSSxpQkFBVyxZQUFNO0FBQ2YsY0FBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdELEtBdEJrQjs7QUFBQSxVQXdCbkJDLG1CQXhCbUIsR0F3QkcsVUFBQ0MsSUFBRCxFQUFPVCxDQUFQLEVBQWE7QUFBQSx3QkFDaUMsTUFBS0YsS0FEdEM7QUFBQSxVQUN6QlksV0FEeUIsZUFDekJBLFdB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QyxZQUFVLG9CQUFVVztBQVZHLENBQXpCIiwiZmlsZSI6IlBpY2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4gfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KGluaXRpYWxWYWx1ZSkgPyBpbml0aWFsVmFsdWUgOiBbaW5pdGlhbFZhbHVlXSxcbiAgICB9O1xuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBuZXdUb2dnbGVTdGF0ZSA9ICF0aGlzLnN0YXRlLm9wZW5lZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBuZXdUb2dnbGVTdGF0ZSB9KTtcbiAgICBvblRvZ2dsZSAmJiBvblRvZ2dsZShlLCBuZXdUb2dnbGVTdGF0ZSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdEl0ZW1DbGljayA9IChpdGVtLCBlKSA9PiB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCwgb25DaGFuZ2UsIG9uU2VsZWN0LCBvbkNvbXBsZXRlLCBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBmaW5hbEl0ZW0gPSB7IHZhbHVlOiAnJyB9O1xuICAgIGlmIChpdGVtLnNlbGVjdGVkID09PSBmYWxzZSB8fCBtdWx0aVNlbGVjdCkge1xuICAgICAgZmluYWxJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUl0ZW1WYWx1ZShmaW5hbEl0ZW0udmFsdWUpO1xuXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZSwgZmluYWxJdGVtLnZhbHVlKTtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChmaW5hbEl0ZW0pO1xuXG4gICAgaWYgKCFtdWx0aVNlbGVjdCkgeyAgLy8gY2xvc2UgaWYgb25seSBzaW5nbGUgc2VsZWN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG9wZW5lZCB9KTtcblxuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICAgICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcblxuICAgICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdENsb3NlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wZW5lZCA9IGZhbHNlO1xuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG4gICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgY29uc3QgeyBvbkJsdXIsIG9uQ29tcGxldGUsIG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG5cbiAgICAgICAgb25CbHVyICYmIG9uQmx1cigpO1xuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICAgICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25LZXlkb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBmb3IgY29udHJvbGxlZCBiZWhhdmlvciByZXR1cm5pbmcgdmFsdWUgZnJvbSBwcm9wc1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgIH1cbiAgICAvLyBmb3IgdW5jb250cm9sbGVkIC0gdmFsdWUgZnJvbSBzdGF0ZVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvblZhbHVlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgLy8gdGhpcyBpcyBmb3IgY29udHJvbGxlZCBiZWhhdmlvclxuICAgIGlmIChvblZhbHVlQ2hhbmdlICYmIHByZXZWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPiAwID8gbmV3VmFsdWVbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlZhbHVlLmxlbmd0aCA+IDAgPyBwcmV2VmFsdWVbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkSXRlbUxhYmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgLy8gbWFueSBpdGVtcyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zU2VsZWN0ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIG9uZSBpdGVtXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZFZhbHVlc1swXSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMubGFiZWwgfHwgaXRlbS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQgfHwgc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB6ZXJvIGl0ZW1zXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRUZXh0O1xuICB9XG5cbiAgdXBkYXRlSXRlbVZhbHVlKGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLnNsaWNlKCk7XG5cbiAgICAgIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gYWRkIHZhbHVlIHRvIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBvbmx5IG9uZSB2YWx1ZVxuICAgICAgdGhpcy5zZXRWYWx1ZShbaXRlbVZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fCBpc0VsSW5DaGlsZHJlbih0aGlzLmRyb3Bkb3duLCB0YXJnZXRFbCk7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGlmICghZHJvcGRvd25FbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCBkaXNhYmxlZCwgbWVudVNpemUsIG1lbnVTdHlsZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWNrbGlzdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcGlja2xpc3QnLCAnc2xkcy1kcm9wZG93bi10cmlnZ2VyJyk7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgYnV0dG9uUmVmPXsgbm9kZSA9PiAodGhpcy5waWNrbGlzdEJ1dHRvbiA9IG5vZGUpIH1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsJ1xuICAgICAgICAgIHR5cGU9J25ldXRyYWwnXG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgb25DbGljaz17ICFkaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17ICFkaXNhYmxlZCAmJiB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgb25LZXlEb3duPXsgIWRpc2FibGVkICYmIHRoaXMub25LZXlkb3duIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0JykgfVxuICAgICAgICAgIGRyb3Bkb3duTWVudVJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9XG4gICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uUGlja2xpc3RJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UgfVxuICAgICAgICAgIHN0eWxlPXsgbWVudVN0eWxlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0pIH1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFZhbHVlKCkuaW5kZXhPZihpdGVtLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBtZW51U2l6ZSwgbWVudVN0eWxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgZHJvcGRvd24gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBzZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25WYWx1ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuUGlja2xpc3QuZGVmYXVsdFByb3BzID0ge1xuICBtdWx0aVNlbGVjdDogZmFsc2UsXG4gIGRlZmF1bHRWYWx1ZTogW10sXG4gIHNlbGVjdGVkVGV4dDogJycsXG4gIG9wdGlvbnNTZWxlY3RlZFRleHQ6ICcnLFxufTtcblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBQaWNrbGlzdEl0ZW0gPSAoeyBsYWJlbCwgc2VsZWN0ZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9XG4gICAgcm9sZT0nbWVudWl0ZW1yYWRpbycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgIHsgLi4ucHJvcHMgfVxuICA+XG4gICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XG4gIDwvRHJvcGRvd25NZW51SXRlbT5cbik7XG5cblBpY2tsaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19