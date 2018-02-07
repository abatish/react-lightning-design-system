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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwiZSIsIm9uVG9nZ2xlIiwibmV3VG9nZ2xlU3RhdGUiLCJzdGF0ZSIsIm9wZW5lZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzVG9UYXJnZXRJdGVtRWwiLCJvblBpY2tsaXN0SXRlbUNsaWNrIiwiaXRlbSIsIm11bHRpU2VsZWN0Iiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsImdldFZhbHVlIiwiaW5kZXhPZiIsImNsb25lRWxlbWVudCIsImluaXRpYWxWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlkIiwiZGVmYXVsdE9wZW5lZCIsIkFycmF5IiwiaXNBcnJheSIsIm5ld1ZhbHVlIiwib25WYWx1ZUNoYW5nZSIsInByZXZWYWx1ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlbGVjdGVkVmFsdWVzIiwib3B0aW9uc1NlbGVjdGVkVGV4dCIsInNlbGVjdGVkVmFsdWUiLCJDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZHJlbiIsImxhYmVsIiwic2VsZWN0ZWRUZXh0IiwiaXRlbVZhbHVlIiwic2xpY2UiLCJwdXNoIiwic3BsaWNlIiwic2V0VmFsdWUiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwiZHJvcGRvd25FbCIsImRyb3Bkb3duIiwiZmlyc3RJdGVtRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwicHByb3BzIiwicGlja2xpc3RDbGFzc05hbWVzIiwiZ2V0U2VsZWN0ZWRJdGVtTGFiZWwiLCJtZW51U2l6ZSIsIm1lbnVTdHlsZSIsIm1hcCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwicmVuZGVyRHJvcGRvd24iLCJmb3JtRWxlbVByb3BzIiwicmVuZGVyUGlja2xpc3QiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwibmFtZSIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCIsIlBpY2tsaXN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxROzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSUFDWEEsS0FEVzs7QUFBQSxVQVluQkMsT0FabUIsR0FZVCxVQUFDQyxDQUFELEVBQU87QUFBQSxVQUNQQyxRQURPLEdBQ00sTUFBS0gsS0FEWCxDQUNQRyxRQURPOzs7QUFHZixVQUFJQyxpQkFBaUIsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLE1BQWpDO0FBQ0EsWUFBS0MsUUFBTCxDQUFjLEVBQUVELFFBQVFGLGNBQVYsRUFBZDtBQUNBRCxrQkFBWUEsU0FBU0QsQ0FBVCxFQUFZRSxjQUFaLENBQVo7O0FBRUFJLGlCQUFXLFlBQU07QUFDZixjQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxFQUZIO0FBR0QsS0F0QmtCOztBQUFBLFVBd0JuQkMsbUJBeEJtQixHQXdCRyxVQUFDQyxJQUFELEVBQU9ULENBQVAsRUFBYTtBQUFBLHdCQUNpQyxNQUFLRixLQUR0QztBQUFBLFVBQ3pCWSxXQUR5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QUFKQyxDQUF4Qjs7QUFRQWhELFNBQVM4RixhQUFULEdBQXlCLElBQXpCOztBQUdPLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUcxQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVbEMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JpQyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxNQUFpQ25ELEtBQWpDO0FBQUEsU0FDMUI7QUFBQTtBQUFBO0FBQ0UsWUFBT2tCLFdBQVcsT0FBWCxHQUFxQixNQUQ5QjtBQUVFLFlBQUssZUFGUCxDQUV1QjtBQUZ2QixRQUdFLFVBQVdBO0FBSGIsT0FJT2xCLEtBSlA7QUFNSW9ELGFBQVNEO0FBTmIsR0FEMEI7QUFBQSxDQUFyQjs7O0FBV1AyQyxhQUFhWCxTQUFiLEdBQXlCO0FBQ3ZCL0IsU0FBTyxvQkFBVW9DLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVKLE1BRGUsRUFFekIsb0JBQVVFLE1BRmUsQ0FBcEIsQ0FEZ0I7QUFLdkJwRSxZQUFVLG9CQUFVbUUsSUFMRztBQU12QnBFLFNBQU8sb0JBQVV1RSxTQUFWLENBQW9CLENBQ3pCLG9CQUFVSixNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBTmdCO0FBVXZCbkMsWUFBVSxvQkFBVVM7QUFWRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KGluaXRpYWxWYWx1ZSkgPyBpbml0aWFsVmFsdWUgOiBbaW5pdGlhbFZhbHVlXSxcbiAgICB9O1xuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBuZXdUb2dnbGVTdGF0ZSA9ICF0aGlzLnN0YXRlLm9wZW5lZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBuZXdUb2dnbGVTdGF0ZSB9KTtcbiAgICBvblRvZ2dsZSAmJiBvblRvZ2dsZShlLCBuZXdUb2dnbGVTdGF0ZSk7XG4gICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdEl0ZW1DbGljayA9IChpdGVtLCBlKSA9PiB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCwgb25DaGFuZ2UsIG9uU2VsZWN0LCBvbkNvbXBsZXRlLCBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBmaW5hbEl0ZW0gPSB7IHZhbHVlOiAnJyB9O1xuICAgIGlmIChpdGVtLnNlbGVjdGVkID09PSBmYWxzZSB8fCBtdWx0aVNlbGVjdCkge1xuICAgICAgZmluYWxJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUl0ZW1WYWx1ZShmaW5hbEl0ZW0udmFsdWUpO1xuXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZSwgZmluYWxJdGVtLnZhbHVlKTtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChmaW5hbEl0ZW0pO1xuXG4gICAgaWYgKCFtdWx0aVNlbGVjdCkgeyAgLy8gY2xvc2UgaWYgb25seSBzaW5nbGUgc2VsZWN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG9wZW5lZCB9KTtcblxuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICAgICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcblxuICAgICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdENsb3NlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wZW5lZCA9IGZhbHNlO1xuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG4gICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcbiAgfTtcblxuICBvbkJsdXIgPSAoZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgY29uc3QgeyBvbkJsdXIsIG9uQ29tcGxldGUsIG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG5cbiAgICAgICAgb25CbHVyICYmIG9uQmx1cigpO1xuICAgICAgICBvbkNvbXBsZXRlICYmIG9uQ29tcGxldGUoKTtcbiAgICAgICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25LZXlkb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBmb3IgY29udHJvbGxlZCBiZWhhdmlvciByZXR1cm5pbmcgdmFsdWUgZnJvbSBwcm9wc1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgIH1cbiAgICAvLyBmb3IgdW5jb250cm9sbGVkIC0gdmFsdWUgZnJvbSBzdGF0ZVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvblZhbHVlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgLy8gdGhpcyBpcyBmb3IgY29udHJvbGxlZCBiZWhhdmlvclxuICAgIGlmIChvblZhbHVlQ2hhbmdlICYmIHByZXZWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPiAwID8gbmV3VmFsdWVbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlZhbHVlLmxlbmd0aCA+IDAgPyBwcmV2VmFsdWVbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkSXRlbUxhYmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgLy8gbWFueSBpdGVtcyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zU2VsZWN0ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIG9uZSBpdGVtXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZFZhbHVlc1swXSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMubGFiZWwgfHwgaXRlbS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQgfHwgc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB6ZXJvIGl0ZW1zXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRUZXh0O1xuICB9XG5cbiAgdXBkYXRlSXRlbVZhbHVlKGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLnNsaWNlKCk7XG5cbiAgICAgIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gYWRkIHZhbHVlIHRvIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBvbmx5IG9uZSB2YWx1ZVxuICAgICAgdGhpcy5zZXRWYWx1ZShbaXRlbVZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGNvbnN0IGZpcnN0SXRlbUVsID1cbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnNsZHMtaXMtc2VsZWN0ZWQgPiAucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKSB8fFxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICBpZiAoZmlyc3RJdGVtRWwpIHtcbiAgICAgIGZpcnN0SXRlbUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlja2xpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0Jyk7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgYnV0dG9uUmVmPXsgbm9kZSA9PiAodGhpcy5waWNrbGlzdEJ1dHRvbiA9IG5vZGUpIH1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsJ1xuICAgICAgICAgIHR5cGU9J25ldXRyYWwnXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlkb3duIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgIGRyb3Bkb3duTWVudVJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9XG4gICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uUGlja2xpc3RJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UgfVxuICAgICAgICAgIHN0eWxlPXsgbWVudVN0eWxlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0pIH1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFZhbHVlKCkuaW5kZXhPZihpdGVtLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBtZW51U2l6ZSwgbWVudVN0eWxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgZHJvcGRvd24gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBzZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblBpY2tsaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBzZWxlY3RlZFRleHQ6ICcnLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiAnJyxcbn07XG5cblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuZXhwb3J0IGNvbnN0IFBpY2tsaXN0SXRlbSA9ICh7IGxhYmVsLCBzZWxlY3RlZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH1cbiAgICByb2xlPSdtZW51aXRlbXJhZGlvJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgeyAuLi5wcm9wcyB9XG4gID5cbiAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuKTtcblxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=