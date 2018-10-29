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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJvcGVuZWQiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwib25QaWNrbGlzdEl0ZW1DbGljayIsIml0ZW0iLCJlIiwibXVsdGlTZWxlY3QiLCJ1cGRhdGVJdGVtVmFsdWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25TZWxlY3QiLCJvbkNvbXBsZXRlIiwicGlja2xpc3RCdXR0b25FbCIsInBpY2tsaXN0QnV0dG9uIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUGlja2xpc3RDbG9zZSIsIm9uQmx1ciIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25LZXlkb3duIiwia2V5Q29kZSIsIm9uS2V5RG93biIsInJlbmRlclBpY2tsaXN0SXRlbSIsInNlbGVjdGVkIiwiZ2V0VmFsdWUiLCJpbmRleE9mIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJpbml0aWFsVmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZCIsImRlZmF1bHRPcGVuZWQiLCJBcnJheSIsImlzQXJyYXkiLCJuZXdWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJwcmV2VmFsdWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZFZhbHVlcyIsIm9wdGlvbnNTZWxlY3RlZFRleHQiLCJzZWxlY3RlZFZhbHVlIiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGRyZW4iLCJsYWJlbCIsInNlbGVjdGVkVGV4dCIsIml0ZW1WYWx1ZSIsInNsaWNlIiwicHVzaCIsInNwbGljZSIsInNldFZhbHVlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlIiwiZHJvcGRvd24iLCJkcm9wZG93bkVsIiwiZmlyc3RJdGVtRWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJtZW51U2l6ZSIsIm1lbnVTdHlsZSIsInBwcm9wcyIsInBpY2tsaXN0Q2xhc3NOYW1lcyIsImdldFNlbGVjdGVkSXRlbUxhYmVsIiwicmVuZGVyRHJvcGRvd24iLCJtYXAiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsIm5hbWUiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiZnVuYyIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsImlzRm9ybUVsZW1lbnQiLCJQaWNrbGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBQUEsVUFZbkJDLE9BWm1CLEdBWVQsWUFBTTtBQUNkLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxRQUFRLENBQUMsTUFBS0MsS0FBTCxDQUFXRCxNQUF0QixFQUFkO0FBQ0FFLGlCQUFXLFlBQU07QUFDZixjQUFLQyxtQkFBTDtBQUNELE9BRkQsRUFFRyxFQUZIO0FBR0QsS0FqQmtCOztBQUFBLFVBbUJuQkMsbUJBbkJtQixHQW1CRyxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUFBLFVBQ3pCQyxXQUR5QixHQUNULE1BQUtWLEtBREksQ0FDekJVLFdBRHlCOztBQUVqQyxZQUFLQyxlQUFMLENBQXFCSCxLQUFLSSxLQUExQjs7QUFFQSxVQUFJLE1BQUtaLEtBQUwsQ0FBV2EsUUFBZixFQUF5QjtBQUN2QixjQUFLYixLQUFMLENBQVdhLFFBQVgsQ0FBb0JKLENBQXBCLEVB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MUI7QUFBQyxrQ0FBRDtBQUFBO0FBQ0UsWUFBTzRCLFdBQVcsT0FBWCxHQUFxQixNQUQ5QjtBQUVFLFlBQUssZUFGUCxDQUV1QjtBQUZ2QixRQUdFLFVBQVdBO0FBSGIsT0FJTzVCLEtBSlA7QUFNSWtELGFBQVNEO0FBTmIsR0FEMEI7QUFBQSxDQUFyQjs7O0FBV1A2QyxhQUFhYixTQUFiLEdBQXlCO0FBQ3ZCL0IsU0FBT2dDLG9CQUFVTSxTQUFWLENBQW9CLENBQ3pCTixvQkFBVUMsTUFEZSxFQUV6QkQsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FEZ0I7QUFLdkIxRCxZQUFVc0Qsb0JBQVVFLElBTEc7QUFNdkJ4RSxTQUFPc0Usb0JBQVVNLFNBQVYsQ0FBb0IsQ0FDekJOLG9CQUFVQyxNQURlLEVBRXpCRCxvQkFBVUksTUFGZSxDQUFwQixDQU5nQjtBQVV2QnJDLFlBQVVpQyxvQkFBVXRCO0FBVkcsQ0FBekIiLCJmaWxlIjoiUGlja2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgdmFsdWU6IEFycmF5LmlzQXJyYXkoaW5pdGlhbFZhbHVlKSA/IGluaXRpYWxWYWx1ZSA6IFtpbml0aWFsVmFsdWVdLFxuICAgIH07XG4gIH1cblxuICBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgIH0sIDEwKTtcbiAgfTtcblxuICBvblBpY2tsaXN0SXRlbUNsaWNrID0gKGl0ZW0sIGUpID0+IHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMudXBkYXRlSXRlbVZhbHVlKGl0ZW0udmFsdWUpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgaXRlbS52YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoIW11bHRpU2VsZWN0KSB7ICAvLyBjbG9zZSBpZiBvbmx5IHNpbmdsZSBzZWxlY3RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25LZXlkb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBmb3IgY29udHJvbGxlZCBiZWhhdmlvciByZXR1cm5pbmcgdmFsdWUgZnJvbSBwcm9wc1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgIH1cbiAgICAvLyBmb3IgdW5jb250cm9sbGVkIC0gdmFsdWUgZnJvbSBzdGF0ZVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvblZhbHVlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgLy8gdGhpcyBpcyBmb3IgY29udHJvbGxlZCBiZWhhdmlvclxuICAgIGlmIChvblZhbHVlQ2hhbmdlICYmIHByZXZWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPiAwID8gbmV3VmFsdWVbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlZhbHVlLmxlbmd0aCA+IDAgPyBwcmV2VmFsdWVbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkSXRlbUxhYmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgLy8gbWFueSBpdGVtcyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zU2VsZWN0ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIG9uZSBpdGVtXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMubGFiZWwgfHwgaXRlbS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQgfHwgc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB6ZXJvIGl0ZW1zXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRUZXh0O1xuICB9XG5cbiAgdXBkYXRlSXRlbVZhbHVlKGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLnNsaWNlKCk7XG5cbiAgICAgIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gYWRkIHZhbHVlIHRvIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBvbmx5IG9uZSB2YWx1ZVxuICAgICAgdGhpcy5zZXRWYWx1ZShbaXRlbVZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fCBpc0VsSW5DaGlsZHJlbih0aGlzLmRyb3Bkb3duLCB0YXJnZXRFbCk7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGlmICghZHJvcGRvd25FbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGlkLCBkaXNhYmxlZCwgbWVudVNpemUsIG1lbnVTdHlsZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCBwaWNrbGlzdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtcGlja2xpc3QnLCAnc2xkcy1kcm9wZG93bi10cmlnZ2VyJyk7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgYnV0dG9uUmVmPXsgbm9kZSA9PiAodGhpcy5waWNrbGlzdEJ1dHRvbiA9IG5vZGUpIH1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsJ1xuICAgICAgICAgIHR5cGU9J25ldXRyYWwnXG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgb25DbGljaz17ICFkaXNhYmxlZCAmJiB0aGlzLm9uQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17ICFkaXNhYmxlZCAmJiB0aGlzLm9uQmx1ciB9XG4gICAgICAgICAgb25LZXlEb3duPXsgIWRpc2FibGVkICYmIHRoaXMub25LZXlkb3duIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJEcm9wZG93bihtZW51U2l6ZSwgbWVudVN0eWxlKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xuICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0JykgfVxuICAgICAgICAgIGRyb3Bkb3duTWVudVJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9XG4gICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uUGlja2xpc3RJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UgfVxuICAgICAgICAgIHN0eWxlPXsgbWVudVN0eWxlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0pIH1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFZhbHVlKCkuaW5kZXhPZihpdGVtLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH0geyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJQaWNrbGlzdCh7IC4uLnByb3BzLCBpZCB9KSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuUGlja2xpc3QucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIF0pKSxcbiAgXSksXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgc2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblBpY2tsaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBzZWxlY3RlZFRleHQ6ICcnLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiAnJyxcbn07XG5cblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuZXhwb3J0IGNvbnN0IFBpY2tsaXN0SXRlbSA9ICh7IGxhYmVsLCBzZWxlY3RlZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH1cbiAgICByb2xlPSdtZW51aXRlbXJhZGlvJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgeyAuLi5wcm9wcyB9XG4gID5cbiAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuKTtcblxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=