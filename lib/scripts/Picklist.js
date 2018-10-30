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
      // this.updateItemValue(item.value);

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
          props = (0, _objectWithoutProperties3.default)(_props3, ['label', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwiZSIsIm9uVG9nZ2xlIiwibmV3VG9nZ2xlU3RhdGUiLCJzdGF0ZSIsIm9wZW5lZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImZvY3VzVG9UYXJnZXRJdGVtRWwiLCJvblBpY2tsaXN0SXRlbUNsaWNrIiwiaXRlbSIsIm11bHRpU2VsZWN0Iiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsImdldFZhbHVlIiwiaW5kZXhPZiIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInRhcmdldEVsIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwibm9kZSIsImRyb3Bkb3duIiwiZHJvcGRvd25FbCIsImZpcnN0SXRlbUVsIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibWVudVNpemUiLCJtZW51U3R5bGUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsInJlbmRlckRyb3Bkb3duIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbVByb3BzIiwicmVuZGVyUGlja2xpc3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiRm9ybUVsZW1lbnQiLCJudW1iZXIiLCJuYW1lIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50IiwiUGlja2xpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBWW5CQyxPQVptQixHQVlULFVBQUNDLENBQUQsRUFBTztBQUFBLFVBQ1BDLFFBRE8sR0FDTSxNQUFLSCxLQURYLENBQ1BHLFFBRE87O0FBRWYsVUFBSUMsaUJBQWlCLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxNQUFqQztBQUNBLFlBQUtDLFFBQUwsQ0FBYyxFQUFFRCxRQUFRRixjQUFWLEVBQWQ7QUFDQUQsa0JBQVlBLFNBQVNELENBQVQsRUFBWUUsY0FBWixDQUFaO0FBQ0FJLGlCQUFXLFlBQU07QUFDZixjQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxFQUZIO0FBR0QsS0FwQmtCOztBQUFBLFVBdUJuQkMsbUJBdkJtQixHQXVCRyxVQUFDQyxJQUFELEVBQU9ULENBQVAsRUFBYTtBQUFBLHdC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dkJyQyxZQUFVaUMsb0JBQVV0QjtBQVZHLENBQXpCIiwiZmlsZSI6IlBpY2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRHJvcGRvd25NZW51LCBEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4gfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZSB8fCBwcm9wcy5kZWZhdWx0VmFsdWU7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHZhbHVlOiBBcnJheS5pc0FycmF5KGluaXRpYWxWYWx1ZSkgPyBpbml0aWFsVmFsdWUgOiBbaW5pdGlhbFZhbHVlXSxcbiAgICB9O1xuICB9XG5cbiAgb25DbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV3VG9nZ2xlU3RhdGUgPSAhdGhpcy5zdGF0ZS5vcGVuZWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogbmV3VG9nZ2xlU3RhdGUgfSk7XG4gICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgbmV3VG9nZ2xlU3RhdGUpOyAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cblxuICBvblBpY2tsaXN0SXRlbUNsaWNrID0gKGl0ZW0sIGUpID0+IHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvbkNoYW5nZSwgb25TZWxlY3QsIG9uQ29tcGxldGUsIG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIHRoaXMudXBkYXRlSXRlbVZhbHVlKGl0ZW0udmFsdWUpO1xuICAgIGxldCBmaW5hbEl0ZW0gPSB7IHZhbHVlOiAnJyB9O1xuICAgIGlmIChpdGVtLnNlbGVjdGVkID09PSBmYWxzZSB8fCBtdWx0aVNlbGVjdCkge1xuICAgICAgZmluYWxJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUl0ZW1WYWx1ZShmaW5hbEl0ZW0udmFsdWUpO1xuXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZSwgZmluYWxJdGVtLnZhbHVlKTtcbiAgICBvblNlbGVjdCAmJiBvblNlbGVjdChmaW5hbEl0ZW0pO1xuXG4gICAgaWYgKCFtdWx0aVNlbGVjdCkgeyAgLy8gY2xvc2UgaWYgb25seSBzaW5nbGUgc2VsZWN0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IG9wZW5lZCB9KTtcbiAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XG4gICAgICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG9wZW5lZCk7XG5cbiAgICAgICAgaWYgKHBpY2tsaXN0QnV0dG9uRWwpIHtcbiAgICAgICAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMCk7XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIG9uUGlja2xpc3RDbG9zZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBvcGVuZWQgPSBmYWxzZTtcbiAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gdGhpcy5waWNrbGlzdEJ1dHRvbjtcbiAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG4gICAgb25Ub2dnbGUgJiYgb25Ub2dnbGUoZSwgb3BlbmVkKTtcbiAgfTtcbiAgXG4gIG9uQmx1ciA9IChlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBjb25zdCB7IG9uQmx1ciwgb25Db21wbGV0ZSwgb25Ub2dnbGUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBvcGVuZWQgfSk7XG4gICAgICAgIG9uQmx1ciAmJiBvbkJsdXIoKTtcbiAgICAgICAgb25Db21wbGV0ZSAmJiBvbkNvbXBsZXRlKCk7XG4gICAgICAgIG9uVG9nZ2xlICYmIG9uVG9nZ2xlKGUsIG9wZW5lZCk7XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uS2V5ZG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9O1xuXG4gIGdldFZhbHVlKCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3IgcmV0dXJuaW5nIHZhbHVlIGZyb20gcHJvcHNcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgICB9XG4gICAgLy8gZm9yIHVuY29udHJvbGxlZCAtIHZhbHVlIGZyb20gc3RhdGVcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgeyBtdWx0aVNlbGVjdCwgb25WYWx1ZUNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcblxuICAgIC8vIHRoaXMgaXMgZm9yIGNvbnRyb2xsZWQgYmVoYXZpb3JcbiAgICBpZiAob25WYWx1ZUNoYW5nZSAmJiBwcmV2VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZSwgcHJldlZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uVmFsdWVDaGFuZ2UobmV3VmFsdWUubGVuZ3RoID4gMCA/IG5ld1ZhbHVlWzBdIDogdW5kZWZpbmVkLFxuICAgICAgICAgIHByZXZWYWx1ZS5sZW5ndGggPiAwID8gcHJldlZhbHVlWzBdIDogdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIC8vIG1hbnkgaXRlbXMgc2VsZWN0ZWRcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMub3B0aW9uc1NlbGVjdGVkVGV4dDtcbiAgICB9XG5cbiAgICAvLyBvbmUgaXRlbVxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDEgJiYgc2VsZWN0ZWRWYWx1ZXNbMF0pIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlc1swXTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgc2VsZWN0ZWQgPSBpdGVtLnByb3BzLmxhYmVsIHx8IGl0ZW0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkIHx8IHNlbGVjdGVkVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gemVybyBpdGVtc1xuICAgIHJldHVybiB0aGlzLnByb3BzLnNlbGVjdGVkVGV4dDtcbiAgfVxuXG4gIHVwZGF0ZUl0ZW1WYWx1ZShpdGVtVmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKS5zbGljZSgpO1xuXG4gICAgICAvLyB0b2dnbGUgdmFsdWVcbiAgICAgIGlmIChuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSkgPT09IC0xKSB7XG4gICAgICAgIC8vIGFkZCB2YWx1ZSB0byBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5wdXNoKGl0ZW1WYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgZnJvbSBhcnJheVxuICAgICAgICBuZXdWYWx1ZS5zcGxpY2UobmV3VmFsdWUuaW5kZXhPZihpdGVtVmFsdWUpLCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXQgb25seSBvbmUgdmFsdWVcbiAgICAgIHRoaXMuc2V0VmFsdWUoW2l0ZW1WYWx1ZV0pO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCB0YXJnZXRFbCkgfHwgaXNFbEluQ2hpbGRyZW4odGhpcy5kcm9wZG93biwgdGFyZ2V0RWwpO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gdGhpcy5kcm9wZG93bjtcbiAgICBpZiAoIWRyb3Bkb3duRWwpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCwgZGlzYWJsZWQsIG1lbnVTaXplLCBtZW51U3R5bGUsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0JywgJ3NsZHMtZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBwaWNrbGlzdENsYXNzTmFtZXMgfSBhcmlhLWV4cGFuZGVkPXsgdGhpcy5zdGF0ZS5vcGVuZWQgfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgIGJ1dHRvblJlZj17IG5vZGUgPT4gKHRoaXMucGlja2xpc3RCdXR0b24gPSBub2RlKSB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpY2tsaXN0X19sYWJlbCdcbiAgICAgICAgICB0eXBlPSduZXV0cmFsJ1xuICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIG9uQ2xpY2s9eyAhZGlzYWJsZWQgJiYgdGhpcy5vbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyAhZGlzYWJsZWQgJiYgdGhpcy5vbkJsdXIgfVxuICAgICAgICAgIG9uS2V5RG93bj17ICFkaXNhYmxlZCAmJiB0aGlzLm9uS2V5ZG93biB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyB0aGlzLmdldFNlbGVjdGVkSXRlbUxhYmVsKCkgfHwgPHNwYW4+Jm5ic3A7PC9zcGFuPiB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxJY29uIGljb249J2Rvd24nIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7IHRoaXMucmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRyb3Bkb3duKG1lbnVTaXplLCBtZW51U3R5bGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1waWNrbGlzdCcpIH1cbiAgICAgICAgICBkcm9wZG93bk1lbnVSZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfVxuICAgICAgICAgIHNpemU9eyBtZW51U2l6ZSB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vblBpY2tsaXN0SXRlbUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25QaWNrbGlzdENsb3NlIH1cbiAgICAgICAgICBzdHlsZT17IG1lbnVTdHlsZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyUGlja2xpc3RJdGVtKSB9XG4gICAgICAgIDwvRHJvcGRvd25NZW51PiA6XG4gICAgICAgICAgPGRpdiByZWY9eyBub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSkgfSAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJQaWNrbGlzdEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRWYWx1ZSgpLmluZGV4T2YoaXRlbS5wcm9wcy52YWx1ZSkgIT09IC0xO1xuICAgIGNvbnN0IG9uQmx1ciA9IHRoaXMub25CbHVyO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwgeyBzZWxlY3RlZCwgb25CbHVyIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICB7IHRoaXMucmVuZGVyUGlja2xpc3QoeyAuLi5wcm9wcywgaWQgfSkgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cblBpY2tsaXN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIF0pKSxcbiAgXSksXG4gIHNlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWVudVNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9wdGlvbnNTZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5QaWNrbGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgc2VsZWN0ZWRUZXh0OiAnJyxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogJycsXG59O1xuXG5cblBpY2tsaXN0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5cbmV4cG9ydCBjb25zdCBQaWNrbGlzdEl0ZW0gPSAoeyBsYWJlbCwgc2VsZWN0ZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxEcm9wZG93bk1lbnVJdGVtXG4gICAgaWNvbj17IHNlbGVjdGVkID8gJ2NoZWNrJyA6ICdub25lJyB9XG4gICAgcm9sZT0nbWVudWl0ZW1yYWRpbycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgIHsgLi4ucHJvcHMgfVxuICA+XG4gICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XG4gIDwvRHJvcGRvd25NZW51SXRlbT5cbik7XG5cblBpY2tsaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG4iXX0=