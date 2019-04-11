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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwiZSIsIm9uVG9nZ2xlIiwibmV3VG9nZ2xlU3RhdGUiLCJzdGF0ZSIsIm9wZW5lZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzVG9UYXJnZXRJdGVtRWwiLCJvblBpY2tsaXN0SXRlbUNsaWNrIiwiaXRlbSIsIm11bHRpU2VsZWN0Iiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsImdldFZhbHVlIiwiaW5kZXhPZiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJyZW5kZXJEcm9wZG93biIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsIm5hbWUiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImlzRm9ybUVsZW1lbnQiLCJQaWNrbGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBQUEsVUFZbkJDLE9BWm1CLEdBWVQsVUFBQ0MsQ0FBRCxFQUFPO0FBQUEsVUFDUEMsUUFETyxHQUNNLE1BQUtILEtBRFgsQ0FDUEcsUUFETzs7O0FBR2YsVUFBSUMsaUJBQWlCLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxNQUFqQztBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFFRCxRQUFRRixjQUFWLEVBQWQ7QUFDQUQsa0JBQVlBLFNBQVNELENBQVQsRUFBWUUsY0FBWixDQUFaOztBQUVBSSxpQkFBVyxZQUFNO0FBQ2YsY0FBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdELEtBdEJrQjs7QUFBQSxVQXdCbkJDLG1CQXhCbUIsR0F3QkcsVUFBQ0MsSUFBRCxFQUFPVCxDQUFQ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LHVCQUFxQnNDLG9CQUFVQztBQXJDWixDQUFyQjs7QUF3Q0F4RixTQUFTaUcsWUFBVCxHQUF3QjtBQUN0QnBGLGVBQWEsS0FEUztBQUV0QnlCLGdCQUFjLEVBRlE7QUFHdEJpQixnQkFBYyxFQUhRO0FBSXRCTix1QkFBcUI7QUFKQyxDQUF4Qjs7QUFRQWpELFNBQVNrRyxhQUFULEdBQXlCLElBQXpCOztBQUdPLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUc3QyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVbkMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JrQyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxNQUFpQ3BELEtBQWpDO0FBQUEsU0FDMUI7QUFBQyxrQ0FBRDtBQUFBO0FBQ0UsWUFBT2tCLFdBQVcsT0FBWCxHQUFxQixNQUQ5QjtBQUVFLFlBQUssZUFGUCxDQUV1QjtBQUZ2QixRQUdFLFVBQVdBO0FBSGIsT0FJT2xCLEtBSlA7QUFNSXFELGFBQVNEO0FBTmIsR0FEMEI7QUFBQSxDQUFyQjs7O0FBV1A4QyxhQUFhYixTQUFiLEdBQXlCO0FBQ3ZCaEMsU0FBT2lDLG9CQUFVTSxTQUFWLENBQW9CLENBQ3pCTixvQkFBVUMsTUFEZSxFQUV6QkQsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FEZ0I7QUFLdkJ4RSxZQUFVb0Usb0JBQVVFLElBTEc7QUFNdkJ2RSxTQUFPcUUsb0JBQVVNLFNBQVYsQ0FBb0IsQ0FDekJOLG9CQUFVQyxNQURlLEVBRXpCRCxvQkFBVUksTUFGZSxDQUFwQixDQU5nQjtBQVV2QnRDLFlBQVVrQyxvQkFBVXpCO0FBVkcsQ0FBekIiLCJmaWxlIjoiUGlja2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShpbml0aWFsVmFsdWUpID8gaW5pdGlhbFZhbHVlIDogW2luaXRpYWxWYWx1ZV0sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgb25Ub2dnbGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgbmV3VG9nZ2xlU3RhdGUgPSAhdGhpcy5zdGF0ZS5vcGVuZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogbmV3VG9nZ2xlU3RhdGUgfSk7XG4gICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgbmV3VG9nZ2xlU3RhdGUpO1xuICAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2sgPSAoaXRlbSwgZSkgPT4ge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QsIG9uQ2hhbmdlLCBvblNlbGVjdCwgb25Db21wbGV0ZSwgb25Ub2dnbGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZmluYWxJdGVtID0geyB2YWx1ZTogJycgfTtcbiAgICBpZiAoaXRlbS5zZWxlY3RlZCA9PT0gZmFsc2UgfHwgbXVsdGlTZWxlY3QpIHtcbiAgICAgIGZpbmFsSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVJdGVtVmFsdWUoZmluYWxJdGVtLnZhbHVlKTtcblxuICAgIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGUsIGZpbmFsSXRlbS52YWx1ZSk7XG4gICAgb25TZWxlY3QgJiYgb25TZWxlY3QoZmluYWxJdGVtKTtcblxuICAgIGlmICghbXVsdGlTZWxlY3QpIHsgIC8vIGNsb3NlIGlmIG9ubHkgc2luZ2xlIHNlbGVjdFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gdGhpcy5waWNrbGlzdEJ1dHRvbjtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG5cbiAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XG4gICAgICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG9wZW5lZCk7XG5cbiAgICAgICAgaWYgKHBpY2tsaXN0QnV0dG9uRWwpIHtcbiAgICAgICAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIG9uUGlja2xpc3RDbG9zZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gdGhpcy5waWNrbGlzdEJ1dHRvbjtcbiAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogb3BlbmVkIH0pO1xuICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG9wZW5lZCk7XG4gIH07XG5cbiAgb25CbHVyID0gKGUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGNvbnN0IHsgb25CbHVyLCBvbkNvbXBsZXRlLCBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogb3BlbmVkIH0pO1xuXG4gICAgICAgIG9uQmx1ciAmJiBvbkJsdXIoKTtcbiAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XG4gICAgICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG9wZW5lZCk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uS2V5ZG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFZhbHVlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3IgcmV0dXJuaW5nIHZhbHVlIGZyb20gcHJvcHNcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICB9XG4gICAgLy8gZm9yIHVuY29udHJvbGxlZCAtIHZhbHVlIGZyb20gc3RhdGVcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCwgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcblxuICAgIC8vIHRoaXMgaXMgZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3JcbiAgICBpZiAob25WYWx1ZUNoYW5nZSAmJiBwcmV2VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZSwgcHJldlZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUubGVuZ3RoID4gMCA/IG5ld1ZhbHVlWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZWYWx1ZS5sZW5ndGggPiAwID8gcHJldlZhbHVlWzBdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIC8vIG1hbnkgaXRlbXMgc2VsZWN0ZWRcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9uc1NlbGVjdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBvbmUgaXRlbVxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRWYWx1ZXNbMF0pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlc1swXTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSBpdGVtLnByb3BzLmxhYmVsIHx8IGl0ZW0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkIHx8IHNlbGVjdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gemVybyBpdGVtc1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGVkVGV4dDtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW1WYWx1ZShpdGVtVmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKS5zbGljZSgpO1xuXG4gICAgICAvLyB0b2dnbGUgdmFsdWVcbiAgICAgIGlmIChuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgIC8vIGFkZCB2YWx1ZSB0byBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgZnJvbSBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5zcGxpY2UobmV3VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgb25seSBvbmUgdmFsdWVcbiAgICAgIHRoaXMuc2V0VmFsdWUoW2l0ZW1WYWx1ZV0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gdGhpcy5kcm9wZG93bjtcbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHBpY2tsaXN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1waWNrbGlzdCcpO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBwaWNrbGlzdENsYXNzTmFtZXMgfSBhcmlhLWV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuZWQgfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgIGJ1dHRvblJlZj17IG5vZGUgPT4gKHRoaXMucGlja2xpc3RCdXR0b24gPSBub2RlKSB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpY2tsaXN0X19sYWJlbCdcbiAgICAgICAgICB0eXBlPSduZXV0cmFsJ1xuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5ZG93biB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyB0aGlzLmdldFNlbGVjdGVkSXRlbUxhYmVsKCkgfHwgPHNwYW4+Jm5ic3A7PC9zcGFuPiB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxJY29uIGljb249J2Rvd24nIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKG1lbnVTaXplLCBtZW51U3R5bGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XG4gICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICBkcm9wZG93bk1lbnVSZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfVxuICAgICAgICAgIHNpemU9eyBtZW51U2l6ZSB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vblBpY2tsaXN0SXRlbUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25QaWNrbGlzdENsb3NlIH1cbiAgICAgICAgICBzdHlsZT17IG1lbnVTdHlsZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyUGlja2xpc3RJdGVtKSB9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PiA6XG4gICAgICAgICAgPGRpdiByZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfSAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRWYWx1ZSgpLmluZGV4T2YoaXRlbS5wcm9wcy52YWx1ZSkgIT09IC0xO1xuICAgIGNvbnN0IG9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyBzZWxlY3RlZCwgb25CbHVyIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgbWVudVNpemUsIG1lbnVTdHlsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKG1lbnVTaXplLCBtZW51U3R5bGUpO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIGRyb3Bkb3duIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH0geyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJQaWNrbGlzdCh7IC4uLnByb3BzLCBpZCB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuUGlja2xpc3QucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIF0pKSxcbiAgXSksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgc2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudVNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9wdGlvbnNTZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5QaWNrbGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgc2VsZWN0ZWRUZXh0OiAnJyxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogJycsXG59O1xuXG5cblBpY2tsaXN0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5cbmV4cG9ydCBjb25zdCBQaWNrbGlzdEl0ZW0gPSAoeyBsYWJlbCwgc2VsZWN0ZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9XG4gICAgcm9sZT0nbWVudWl0ZW1yYWRpbycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgIHsgLi4ucHJvcHMgfVxuICA+XG4gICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XG4gIDwvRHJvcGRvd25NZW51SXRlbT5cbik7XG5cblBpY2tsaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19