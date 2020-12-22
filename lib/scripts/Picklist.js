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

var _reactEscapeOutside = require('react-escape-outside');

var _reactEscapeOutside2 = _interopRequireDefault(_reactEscapeOutside);

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

    _this.handleEscapeOutside = _this.handleEscapeOutside.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Picklist, [{
    key: 'handleEscapeOutside',
    value: function handleEscapeOutside() {
      var opened = false;
      this.setState({ opened: opened });
    }
  }, {
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
        _reactEscapeOutside2.default,
        { onEscapeOutside: this.handleEscapeOutside },
        _react2.default.createElement(
          _FormElement2.default,
          (0, _extends3.default)({ formElementRef: function formElementRef(node) {
              return _this4.node = node;
            } }, formElemProps),
          this.renderPicklist((0, _extends3.default)({}, props, { id: id }))
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwiZSIsIm9uVG9nZ2xlIiwibmV3VG9nZ2xlU3RhdGUiLCJzdGF0ZSIsIm9wZW5lZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzVG9UYXJnZXRJdGVtRWwiLCJvblBpY2tsaXN0SXRlbUNsaWNrIiwiaXRlbSIsIm11bHRpU2VsZWN0Iiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsImdldFZhbHVlIiwiaW5kZXhPZiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlRXNjYXBlT3V0c2lkZSIsImJpbmQiLCJuZXdWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJwcmV2VmFsdWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZFZhbHVlcyIsIm9wdGlvbnNTZWxlY3RlZFRleHQiLCJzZWxlY3RlZFZhbHVlIiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGRyZW4iLCJsYWJlbCIsInNlbGVjdGVkVGV4dCIsIml0ZW1WYWx1ZSIsInNsaWNlIiwicHVzaCIsInNwbGljZSIsInNldFZhbHVlIiwicm9vdEVsIiwibm9kZSIsInRhcmdldEVsIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50Tm9kZSIsImRyb3Bkb3duRWwiLCJkcm9wZG93biIsImZpcnN0SXRlbUVsIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsInBwcm9wcyIsInBpY2tsaXN0Q2xhc3NOYW1lcyIsImdldFNlbGVjdGVkSXRlbUxhYmVsIiwibWVudVNpemUiLCJtZW51U3R5bGUiLCJtYXAiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsInJlbmRlckRyb3Bkb3duIiwiZm9ybUVsZW1Qcm9wcyIsInJlbmRlclBpY2tsaXN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIkZvcm1FbGVtZW50IiwibnVtYmVyIiwibmFtZSIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIiwiaXNGb3JtRWxlbWVudCIsIlBpY2tsaXN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBbUJuQkMsT0FuQm1CLEdBbUJULFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1BDLFFBRE8sR0FDTSxNQUFLSCxLQURYLENBQ1BHLFFBRE87OztBQUdmLFVBQUlDLGlCQUFpQixDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsTUFBakM7QUFDQSxZQUFLQyxRQUFMLENBQWMsRUFBRUQsUUFBUUYsY0FBVixFQUFkO0FBQ0FELGtCQUFZQSxTQUFTRCxDQUFULEVBQVlFLGNBQVosQ0FBWjs7QUFFQUksaUJBQVcsWUFBTTtBQUNmLGNBQUtDLG1CQUFMO0FBQ0QsT0FGRCxFQUVHLEVBRkg7QUFHRCxLQTdCa0I7O0FBQUEsVUEr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TmdCO0FBVXZCdEMsWUFBVWtDLG9CQUFVekI7QUFWRyxDQUF6QiIsImZpbGUiOiJQaWNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IEVzY2FwZU91dHNpZGUgZnJvbSBcInJlYWN0LWVzY2FwZS1vdXRzaWRlXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShpbml0aWFsVmFsdWUpID8gaW5pdGlhbFZhbHVlIDogW2luaXRpYWxWYWx1ZV0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRXNjYXBlT3V0c2lkZSA9IHRoaXMuaGFuZGxlRXNjYXBlT3V0c2lkZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRXNjYXBlT3V0c2lkZSgpIHtcbiAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG4gIH1cblxuICBvbkNsaWNrID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IG5ld1RvZ2dsZVN0YXRlID0gIXRoaXMuc3RhdGUub3BlbmVkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG5ld1RvZ2dsZVN0YXRlIH0pO1xuICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG5ld1RvZ2dsZVN0YXRlKTtcbiAgICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgIH0sIDEwKTtcbiAgfTtcblxuICBvblBpY2tsaXN0SXRlbUNsaWNrID0gKGl0ZW0sIGUpID0+IHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvbkNoYW5nZSwgb25TZWxlY3QsIG9uQ29tcGxldGUsIG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGZpbmFsSXRlbSA9IHsgdmFsdWU6ICcnIH07XG4gICAgaWYgKGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlIHx8IG11bHRpU2VsZWN0KSB7XG4gICAgICBmaW5hbEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSXRlbVZhbHVlKGZpbmFsSXRlbS52YWx1ZSk7XG5cbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZShlLCBmaW5hbEl0ZW0udmFsdWUpO1xuICAgIG9uU2VsZWN0ICYmIG9uU2VsZWN0KGZpbmFsSXRlbSk7XG5cbiAgICBpZiAoIW11bHRpU2VsZWN0KSB7ICAvLyBjbG9zZSBpZiBvbmx5IHNpbmdsZSBzZWxlY3RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IHRoaXMucGlja2xpc3RCdXR0b247XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogb3BlbmVkIH0pO1xuXG4gICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZSgpO1xuICAgICAgICBvblRvZ2dsZSAmJiBvblRvZ2dsZShlLCBvcGVuZWQpO1xuXG4gICAgICAgIGlmIChwaWNrbGlzdEJ1dHRvbkVsKSB7XG4gICAgICAgICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LCAyMDApO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBvblBpY2tsaXN0Q2xvc2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgb25Ub2dnbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3BlbmVkID0gZmFsc2U7XG4gICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IHRoaXMucGlja2xpc3RCdXR0b247XG4gICAgcGlja2xpc3RCdXR0b25FbC5mb2N1cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG9wZW5lZCB9KTtcbiAgICBvblRvZ2dsZSAmJiBvblRvZ2dsZShlLCBvcGVuZWQpO1xuICB9O1xuXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBjb25zdCB7IG9uQmx1ciwgb25Db21wbGV0ZSwgb25Ub2dnbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG9wZW5lZCB9KTtcblxuICAgICAgICBvbkJsdXIgJiYgb25CbHVyKCk7XG4gICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZSgpO1xuICAgICAgICBvblRvZ2dsZSAmJiBvblRvZ2dsZShlLCBvcGVuZWQpO1xuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfTtcblxuICBvbktleWRvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfTtcblxuICBnZXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGZvciBjb250cm9sbGVkIGJlaGF2aW9yIHJldHVybmluZyB2YWx1ZSBmcm9tIHByb3BzXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gICAgfVxuICAgIC8vIGZvciB1bmNvbnRyb2xsZWQgLSB2YWx1ZSBmcm9tIHN0YXRlXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudmFsdWU7XG4gIH1cblxuICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QsIG9uVmFsdWVDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsdWUgfSk7XG5cbiAgICAvLyB0aGlzIGlzIGZvciBjb250cm9sbGVkIGJlaGF2aW9yXG4gICAgaWYgKG9uVmFsdWVDaGFuZ2UgJiYgcHJldlZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUsIHByZXZWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLmxlbmd0aCA+IDAgPyBuZXdWYWx1ZVswXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmV2VmFsdWUubGVuZ3RoID4gMCA/IHByZXZWYWx1ZVswXSA6IHVuZGVmaW5lZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAvLyBtYW55IGl0ZW1zIHNlbGVjdGVkXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9wdGlvbnNTZWxlY3RlZFRleHQ7XG4gICAgfVxuXG4gICAgLy8gb25lIGl0ZW1cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID09PSAxICYmIHNlbGVjdGVkVmFsdWVzWzBdKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZXNbMF07XG4gICAgICBsZXQgc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcm9wcy52YWx1ZSA9PT0gc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIHNlbGVjdGVkID0gaXRlbS5wcm9wcy5sYWJlbCB8fCBpdGVtLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZWxlY3RlZCB8fCBzZWxlY3RlZFZhbHVlO1xuICAgIH1cblxuICAgIC8vIHplcm8gaXRlbXNcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5zZWxlY3RlZFRleHQ7XG4gIH1cblxuICB1cGRhdGVJdGVtVmFsdWUoaXRlbVZhbHVlKSB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmdldFZhbHVlKCkuc2xpY2UoKTtcblxuICAgICAgLy8gdG9nZ2xlIHZhbHVlXG4gICAgICBpZiAobmV3VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpID09PSAtMSkge1xuICAgICAgICAvLyBhZGQgdmFsdWUgdG8gYXJyYXlcbiAgICAgICAgbmV3VmFsdWUucHVzaChpdGVtVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gYXJyYXlcbiAgICAgICAgbmV3VmFsdWUuc3BsaWNlKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IG9ubHkgb25lIHZhbHVlXG4gICAgICB0aGlzLnNldFZhbHVlKFtpdGVtVmFsdWVdKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoKSB7XG4gICAgY29uc3QgZHJvcGRvd25FbCA9IHRoaXMuZHJvcGRvd247XG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWNrbGlzdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcGlja2xpc3QnKTtcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcGlja2xpc3RDbGFzc05hbWVzIH0gYXJpYS1leHBhbmRlZD17IHRoaXMuc3RhdGUub3BlbmVkIH0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICBidXR0b25SZWY9eyBub2RlID0+ICh0aGlzLnBpY2tsaXN0QnV0dG9uID0gbm9kZSkgfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1waWNrbGlzdF9fbGFiZWwnXG4gICAgICAgICAgdHlwZT0nbmV1dHJhbCdcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleWRvd24gfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHsgdGhpcy5nZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHx8IDxzcGFuPiZuYnNwOzwvc3Bhbj4gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8SWNvbiBpY29uPSdkb3duJyAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgZHJvcGRvd25NZW51UmVmPXsgbm9kZSA9PiAodGhpcy5kcm9wZG93biA9IG5vZGUpIH1cbiAgICAgICAgICBzaXplPXsgbWVudVNpemUgfVxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25QaWNrbGlzdEl0ZW1DbGljayB9XG4gICAgICAgICAgb25NZW51Q2xvc2U9eyB0aGlzLm9uUGlja2xpc3RDbG9zZSB9XG4gICAgICAgICAgc3R5bGU9eyBtZW51U3R5bGUgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlclBpY2tsaXN0SXRlbSkgfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT4gOlxuICAgICAgICAgIDxkaXYgcmVmPXsgbm9kZSA9PiAodGhpcy5kcm9wZG93biA9IG5vZGUpIH0gLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUGlja2xpc3RJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0VmFsdWUoKS5pbmRleE9mKGl0ZW0ucHJvcHMudmFsdWUpICE9PSAtMTtcbiAgICBjb25zdCBvbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGl0ZW0sIHsgc2VsZWN0ZWQsIG9uQmx1ciB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIG1lbnVTaXplLCBtZW51U3R5bGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBkcm9wZG93biB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RXNjYXBlT3V0c2lkZSBvbkVzY2FwZU91dHNpZGU9eyB0aGlzLmhhbmRsZUVzY2FwZU91dHNpZGUgfT5cbiAgICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyUGlja2xpc3QoeyAuLi5wcm9wcywgaWQgfSkgfVxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgPC9Fc2NhcGVPdXRzaWRlPlxuXG4gICAgKTtcbiAgfVxufVxuXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBzZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblBpY2tsaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBzZWxlY3RlZFRleHQ6ICcnLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiAnJyxcbn07XG5cblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuZXhwb3J0IGNvbnN0IFBpY2tsaXN0SXRlbSA9ICh7IGxhYmVsLCBzZWxlY3RlZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH1cbiAgICByb2xlPSdtZW51aXRlbXJhZGlvJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgeyAuLi5wcm9wcyB9XG4gID5cbiAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuKTtcblxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=