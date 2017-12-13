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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbIlBpY2tsaXN0IiwicHJvcHMiLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJvcGVuZWQiLCJzdGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwib25QaWNrbGlzdEl0ZW1DbGljayIsIml0ZW0iLCJlIiwibXVsdGlTZWxlY3QiLCJmaW5hbEl0ZW0iLCJ2YWx1ZSIsInNlbGVjdGVkIiwidXBkYXRlSXRlbVZhbHVlIiwib25DaGFuZ2UiLCJvblNlbGVjdCIsIm9uQ29tcGxldGUiLCJwaWNrbGlzdEJ1dHRvbkVsIiwicGlja2xpc3RCdXR0b24iLCJmb2N1cyIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25QaWNrbGlzdENsb3NlIiwib25CbHVyIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbktleWRvd24iLCJrZXlDb2RlIiwib25LZXlEb3duIiwicmVuZGVyUGlja2xpc3RJdGVtIiwiZ2V0VmFsdWUiLCJpbmRleE9mIiwiY2xvbmVFbGVtZW50IiwiaW5pdGlhbFZhbHVlIiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJkZWZhdWx0T3BlbmVkIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwicHJldlZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRWYWx1ZXMiLCJvcHRpb25zU2VsZWN0ZWRUZXh0Iiwic2VsZWN0ZWRWYWx1ZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwibGFiZWwiLCJzZWxlY3RlZFRleHQiLCJpdGVtVmFsdWUiLCJzbGljZSIsInB1c2giLCJzcGxpY2UiLCJzZXRWYWx1ZSIsInJvb3RFbCIsIm5vZGUiLCJ0YXJnZXRFbCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudE5vZGUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJwcHJvcHMiLCJwaWNrbGlzdENsYXNzTmFtZXMiLCJnZXRTZWxlY3RlZEl0ZW1MYWJlbCIsIm1lbnVTaXplIiwibWVudVN0eWxlIiwibWFwIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJyZW5kZXJEcm9wZG93biIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJQaWNrbGlzdCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJuYW1lIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJpc0Zvcm1FbGVtZW50IiwiUGlja2xpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBWW5CQyxPQVptQixHQVlULFlBQU07QUFDZCxZQUFLQyxRQUFMLENBQWMsRUFBRUMsUUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsTUFBdEIsRUFBZDtBQUNBRSxpQkFBVyxZQUFNO0FBQ2YsY0FBS0MsbUJBQUw7QUFDRCxPQUZELEVBRUcsRUFGSDtBQUdELEtBakJrQjs7QUFBQSxVQW1CbkJDLG1CQW5CbUIsR0FtQkcsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFBQSxVQUN6QkMsV0FEeUIsR0FDVCxNQUFLVixLQURJLENBQ3pCVSxXQUR5Qjs7O0FBR2pDLFVBQUlDLFlBQVksRUFBRUMsT0FBTyxFQUFULEVBQWhCO0FBQ0EsVUFBSUosS0FBS0ssUUFBTCxLQUFrQixLQUFsQixJQUEyQkgsV0FBL0IsRUFBNEM7QUFDMUNDLG9CQUFZSCxJQUFaO0FBQ0Q7O0FBRUQsWUFBS00sZUFBTCxDQUFxQkgsVUFBVUMsS0FBL0I7QUFDQSxVQUFJLE1BQUtaLEtBQUwsQ0FBV2UsUUFBZixFQUF5QjtBQUN2QixjQUFLZixLQUFMLENBQVdlLFFBQVgsQ0FBb0JOLENBQXBCLEVBQXVCRSxVQUFVQyxLQUFqQztBQUNEO0FBQ0QsVUFBSSxNQUFLWixLQUFMLENBQVdnQixRQUFmLEVBQXlCO0FBQ3ZCLGNBQUtoQixLQUFMLENBQVdnQixRQUFYLENBQW9CTCxTQUFwQjtBQUNEO0FBQ0QsVUFBSSxDQUFDRCxXQUFMLEVBQWtCO0FBQUc7QUFDbkJMLG1CQUFXLFlBQU07QUFDZixnQkFBS0gsUUFBTCxDQUFjLEVBQUVDLFFBQVEsS0FBVixFQUFkO0FBQ0EsY0FBSSxNQUFLSCxLQUFMLENBQVdpQixVQUFmLEVBQTJCO0FBQ3pCLGtCQUFLakIsS0FBTCxDQUFXaUIsVUFBWDtBQUNEO0FBQ0QsY0FBTUMsbUJBQW1CLE1BQUtDLGNBQTlCO0FBQ0EsY0FBSUQsZ0JBQUosRUFBc0I7QUFDcEJBLDZCQUFpQkUsS0FBakI7QUFDRDtBQUNGLFNBVEQsRUFTRyxHQVRIO0FBVUQ7QUFDRFgsUUFBRVksY0FBRjtBQUNBWixRQUFFYSxlQUFGO0FBQ0QsS0FoRGtCOztBQUFBLFVBa0RuQkMsZUFsRG1CLEdBa0RELFlBQU07QUFDdEIsVUFBTUwsbUJBQW1CLE1BQUtDLGNBQTlCO0FBQ0FELHVCQUFpQkUsS0FBakI7QUFDQSxZQUFLbEIsUUFBTCxDQUFjLEVBQUVDLFFBQVEsS0FBVixFQUFkO0FBQ0QsS0F0RGtCOztBQUFBLFVBd0RuQnFCLE1BeERtQixHQXdEVixZQUFNO0FBQ2JuQixpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE1BQUtvQixvQkFBTCxFQUFMLEVBQWtDO0FBQ2hDLGdCQUFLdkIsUUFBTCxDQUFjLEVBQUVDLFFBQVEsS0FBVixFQUFkO0FBQ0EsY0FBSSxNQUFLSCxLQUFMLENBQVd3QixNQUFmLEVBQXVCO0FBQ3JCLGtCQUFLeEIsS0FBTCxDQUFXd0IsTUFBWDtBQUNEO0FBQ0QsY0FBSSxNQUFLeEIsS0FBTCxDQUFXaUIsVUFBZixFQUEyQjtBQUN6QixrQkFBS2pCLEtBQUwsQ0FBV2lCLFVBQVg7QUFDRDtBQUNGO0FBQ0YsT0FWRCxFQVVHLEVBVkg7QUFXRCxLQXBFa0I7O0FBQUEsVUFzRW5CUyxTQXRFbUIsR0FzRVAsVUFBQ2pCLENBQUQsRUFBTztBQUNqQixVQUFJQSxFQUFFa0IsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQUU7QUFDdEJsQixVQUFFWSxjQUFGO0FBQ0FaLFVBQUVhLGVBQUY7QUFDQSxZQUFJLENBQUMsTUFBS2xCLEtBQUwsQ0FBV0QsTUFBaEIsRUFBd0I7QUFDdEIsZ0JBQUtELFFBQUwsQ0FBYyxFQUFFQyxRQUFRLElBQVYsRUFBZDtBQUNBRSxxQkFBVyxZQUFNO0FBQ2Ysa0JBQUtDLG1CQUFMO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHRCxTQUxELE1BS087QUFDTCxnQkFBS0EsbUJBQUw7QUFDRDtBQUNGLE9BWEQsTUFXTyxJQUFJRyxFQUFFa0IsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQUU7QUFDN0JsQixVQUFFWSxjQUFGO0FBQ0FaLFVBQUVhLGVBQUY7QUFDQSxjQUFLcEIsUUFBTCxDQUFjLEVBQUVDLFFBQVEsS0FBVixFQUFkO0FBQ0EsWUFBSSxNQUFLSCxLQUFMLENBQVdpQixVQUFmLEVBQTJCO0FBQ3pCLGdCQUFLakIsS0FBTCxDQUFXaUIsVUFBWDtBQUNEO0FBQ0Y7QUFDRCxVQUFJLE1BQUtqQixLQUFMLENBQVc0QixTQUFmLEVBQTBCO0FBQ3hCLGNBQUs1QixLQUFMLENBQVc0QixTQUFYLENBQXFCbkIsQ0FBckI7QUFDRDtBQUNGLEtBN0ZrQjs7QUFBQSxVQW1PbkJvQixrQkFuT21CLEdBbU9FLFVBQUNyQixJQUFELEVBQVU7QUFDN0IsVUFBTUssV0FBVyxNQUFLaUIsUUFBTCxHQUFnQkMsT0FBaEIsQ0FBd0J2QixLQUFLUixLQUFMLENBQVdZLEtBQW5DLE1BQThDLENBQUMsQ0FBaEU7QUFDQSxVQUFNWSxTQUFTLE1BQUtBLE1BQXBCO0FBQ0EsYUFBTyxnQkFBTVEsWUFBTixDQUFtQnhCLElBQW5CLEVBQXlCLEVBQUVLLGtCQUFGLEVBQVlXLGNBQVosRUFBekIsQ0FBUDtBQUNELEtBdk9rQjs7QUFHakIsUUFBTVMsZUFBZWpDLE1BQU1ZLEtBQU4sSUFBZVosTUFBTWtDLFlBQTFDOztBQUVBLFVBQUs5QixLQUFMLEdBQWE7QUFDWCtCLDRCQUFvQixpQkFEVDtBQUVYaEMsY0FBUUgsTUFBTW9DLGFBRkg7QUFHWHhCLGFBQU95QixNQUFNQyxPQUFOLENBQWNMLFlBQWQsSUFBOEJBLFlBQTlCLEdBQTZDLENBQUNBLFlBQUQ7QUFIekMsS0FBYjtBQUxpQjtBQVVsQjs7OzsrQkFxRlU7QUFBQSxVQUNEckIsS0FEQyxHQUNTLEtBQUtaLEtBRGQsQ0FDRFksS0FEQztBQUVUOztBQUNBLFVBQUlBLEtBQUosRUFBVztBQUNULGVBQU95QixNQUFNQyxPQUFOLENBQWMxQixLQUFkLElBQXVCQSxLQUF2QixHQUErQixDQUFDQSxLQUFELENBQXRDO0FBQ0Q7QUFDRDtBQUNBLGFBQU8sS0FBS1IsS0FBTCxDQUFXUSxLQUFsQjtBQUNEOzs7NkJBRVEyQixRLEVBQVU7QUFBQSxtQkFDc0IsS0FBS3ZDLEtBRDNCO0FBQUEsVUFDVFUsV0FEUyxVQUNUQSxXQURTO0FBQUEsVUFDSThCLGFBREosVUFDSUEsYUFESjs7QUFFakIsVUFBTUMsWUFBWSxLQUFLWCxRQUFMLEVBQWxCO0FBQ0EsV0FBSzVCLFFBQUwsQ0FBYyxFQUFFVSxPQUFPMkIsUUFBVCxFQUFkOztBQUVBO0FBQ0EsVUFBSUMsaUJBQWlCQyxjQUFjRixRQUFuQyxFQUE2QztBQUMzQyxZQUFJN0IsV0FBSixFQUFpQjtBQUNmOEIsd0JBQWNELFFBQWQsRUFBd0JFLFNBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELHdCQUFjRCxTQUFTRyxNQUFULEdBQWtCLENBQWxCLEdBQXNCSCxTQUFTLENBQVQsQ0FBdEIsR0FBb0NJLFNBQWxELEVBQ0VGLFVBQVVDLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJELFVBQVUsQ0FBVixDQUF2QixHQUFzQ0UsU0FEeEM7QUFFRDtBQUNGO0FBQ0Y7OzsyQ0FFc0I7QUFDckIsVUFBTUMsaUJBQWlCLEtBQUtkLFFBQUwsRUFBdkI7O0FBRUE7QUFDQSxVQUFJYyxlQUFlRixNQUFmLEdBQXdCLENBQTVCLEVBQStCO0FBQzdCLGVBQU8sS0FBSzFDLEtBQUwsQ0FBVzZDLG1CQUFsQjtBQUNEOztBQUVEO0FBQ0EsVUFBSUQsZUFBZUYsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQixZQUFNSSxnQkFBZ0JGLGVBQWUsQ0FBZixDQUF0QjtBQUNBLFlBQUkvQixXQUFXLElBQWY7QUFDQSx3QkFBTWtDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QixLQUFLaEQsS0FBTCxDQUFXaUQsUUFBbEMsRUFBNEMsVUFBQ3pDLElBQUQsRUFBVTtBQUNwRCxjQUFJQSxLQUFLUixLQUFMLENBQVdZLEtBQVgsS0FBcUJrQyxhQUF6QixFQUF3QztBQUN0Q2pDLHVCQUFXTCxLQUFLUixLQUFMLENBQVdrRCxLQUFYLElBQW9CMUMsS0FBS1IsS0FBTCxDQUFXaUQsUUFBMUM7QUFDRDtBQUNGLFNBSkQ7QUFLQSxlQUFPcEMsWUFBWWlDLGFBQW5CO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFPLEtBQUs5QyxLQUFMLENBQVdtRCxZQUFsQjtBQUNEOzs7b0NBRWVDLFMsRUFBVztBQUFBLFVBQ2pCMUMsV0FEaUIsR0FDRCxLQUFLVixLQURKLENBQ2pCVSxXQURpQjs7O0FBR3pCLFVBQUlBLFdBQUosRUFBaUI7QUFDZixZQUFNNkIsV0FBVyxLQUFLVCxRQUFMLEdBQWdCdUIsS0FBaEIsRUFBakI7O0FBRUE7QUFDQSxZQUFJZCxTQUFTUixPQUFULENBQWlCcUIsU0FBakIsTUFBZ0MsQ0FBQyxDQUFyQyxFQUF3QztBQUN0QztBQUNBYixtQkFBU2UsSUFBVCxDQUFjRixTQUFkO0FBQ0QsU0FIRCxNQUdPO0FBQ0w7QUFDQWIsbUJBQVNnQixNQUFULENBQWdCaEIsU0FBU1IsT0FBVCxDQUFpQnFCLFNBQWpCLENBQWhCLEVBQTZDLENBQTdDO0FBQ0Q7QUFDRCxhQUFLSSxRQUFMLENBQWNqQixRQUFkO0FBQ0QsT0FaRCxNQVlPO0FBQ0w7QUFDQSxhQUFLaUIsUUFBTCxDQUFjLENBQUNKLFNBQUQsQ0FBZDtBQUNEO0FBQ0Y7OzsyQ0FFc0I7QUFDckIsVUFBTUssU0FBUyxLQUFLQyxJQUFwQjtBQUNBLFVBQUlDLFdBQVdDLFNBQVNDLGFBQXhCO0FBQ0EsYUFBT0YsWUFBWUEsYUFBYUYsTUFBaEMsRUFBd0M7QUFDdENFLG1CQUFXQSxTQUFTRyxVQUFwQjtBQUNEO0FBQ0QsYUFBTyxDQUFDLENBQUNILFFBQVQ7QUFDRDs7OzBDQUVxQjtBQUNwQixVQUFNSSxhQUFhLEtBQUtDLFFBQXhCO0FBQ0EsVUFBTUMsY0FDSkYsV0FBV0csYUFBWCxDQUF5QixvREFBekIsS0FDQUgsV0FBV0csYUFBWCxDQUF5QixnQ0FBekIsQ0FGRjtBQUdBLFVBQUlELFdBQUosRUFBaUI7QUFDZkEsb0JBQVk3QyxLQUFaO0FBQ0Q7QUFDRjs7O21DQUVjcEIsSyxFQUFPO0FBQUE7O0FBQUEsVUFDWm1FLFNBRFksR0FDaUJuRSxLQURqQixDQUNabUUsU0FEWTtBQUFBLFVBQ0RoQyxFQURDLEdBQ2lCbkMsS0FEakIsQ0FDRG1DLEVBREM7QUFBQSxVQUNNaUMsTUFETiwwQ0FDaUJwRSxLQURqQjs7QUFFcEIsVUFBTXFFLHFCQUFxQiwwQkFBV0YsU0FBWCxFQUFzQixlQUF0QixDQUEzQjtBQUNBLGFBQU9DLE9BQU81QixhQUFkO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZNkIsa0JBQWpCLEVBQXNDLGlCQUFnQixLQUFLakUsS0FBTCxDQUFXRCxNQUFqRTtBQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFLZ0MsRUFEUDtBQUVFLHVCQUFZO0FBQUEscUJBQVMsT0FBS2hCLGNBQUwsR0FBc0J1QyxJQUEvQjtBQUFBLGFBRmQ7QUFHRSx1QkFBVSxzQkFIWjtBQUlFLGtCQUFLLFNBSlA7QUFLRSxxQkFBVSxLQUFLekQsT0FMakI7QUFNRSxvQkFBUyxLQUFLdUIsTUFOaEI7QUFPRSx1QkFBWSxLQUFLRTtBQVBuQjtBQVNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsZUFBaEI7QUFDSSxpQkFBSzRDLG9CQUFMLE1BQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEbkMsV0FURjtBQVlFLDBEQUFNLE1BQUssTUFBWDtBQVpGO0FBREYsT0FERjtBQWtCRDs7O21DQUVjQyxRLEVBQVVDLFMsRUFBVztBQUFBOztBQUFBLFVBQzFCdkIsUUFEMEIsR0FDYixLQUFLakQsS0FEUSxDQUMxQmlELFFBRDBCOztBQUVsQyxhQUNFLEtBQUs3QyxLQUFMLENBQVdELE1BQVgsR0FDRTtBQUFBO0FBQUE7QUFDRSwyQkFBa0I7QUFBQSxtQkFBUyxPQUFLNkQsUUFBTCxHQUFnQk4sSUFBekI7QUFBQSxXQURwQjtBQUVFLGdCQUFPYSxRQUZUO0FBR0UsMkJBQWtCLEtBQUtoRSxtQkFIekI7QUFJRSx1QkFBYyxLQUFLZ0IsZUFKckI7QUFLRSxpQkFBUWlELFNBTFY7QUFNRSxrQkFBUyxLQUFLaEQ7QUFOaEI7QUFRSSx3QkFBTXVCLFFBQU4sQ0FBZTBCLEdBQWYsQ0FBbUJ4QixRQUFuQixFQUE2QixLQUFLcEIsa0JBQWxDO0FBUkosT0FERixHQVdJLHVDQUFLLEtBQU07QUFBQSxpQkFBUyxPQUFLbUMsUUFBTCxHQUFnQk4sSUFBekI7QUFBQSxTQUFYLEdBWk47QUFjRDs7OzZCQVFRO0FBQUE7O0FBQ1AsVUFBTXZCLEtBQUssS0FBS25DLEtBQUwsQ0FBV21DLEVBQVgsSUFBaUIsS0FBSy9CLEtBQUwsQ0FBVytCLEVBQXZDO0FBRE8sb0JBRTRFLEtBQUtuQyxLQUZqRjtBQUFBLFVBRUNrRCxLQUZELFdBRUNBLEtBRkQ7QUFBQSxVQUVRd0IsUUFGUixXQUVRQSxRQUZSO0FBQUEsVUFFa0JDLEtBRmxCLFdBRWtCQSxLQUZsQjtBQUFBLFVBRXlCQyxTQUZ6QixXQUV5QkEsU0FGekI7QUFBQSxVQUVvQ0MsSUFGcEMsV0FFb0NBLElBRnBDO0FBQUEsVUFFMENOLFFBRjFDLFdBRTBDQSxRQUYxQztBQUFBLFVBRW9EQyxTQUZwRCxXQUVvREEsU0FGcEQ7QUFBQSxVQUVrRXhFLEtBRmxFOztBQUdQLFVBQU1nRSxXQUFXLEtBQUtjLGNBQUwsQ0FBb0JQLFFBQXBCLEVBQThCQyxTQUE5QixDQUFqQjtBQUNBLFVBQU1PLGdCQUFnQixFQUFFNUMsTUFBRixFQUFNZSxZQUFOLEVBQWF3QixrQkFBYixFQUF1QkMsWUFBdkIsRUFBOEJDLG9CQUE5QixFQUF5Q0MsVUFBekMsRUFBK0NiLGtCQUEvQyxFQUF0QjtBQUNBLGFBQ0U7QUFBQTtBQUFBLGlDQUFhLGdCQUFpQjtBQUFBLG1CQUFTLE9BQUtOLElBQUwsR0FBWUEsSUFBckI7QUFBQSxXQUE5QixJQUFnRXFCLGFBQWhFO0FBQ0ksYUFBS0MsY0FBTCw0QkFBeUJoRixLQUF6QixJQUFnQ21DLE1BQWhDO0FBREosT0FERjtBQUtEOzs7OztrQkFwUGtCcEMsUTs7O0FBdVByQkEsU0FBU2tGLFNBQVQsR0FBcUI7QUFDbkI5QyxNQUFJLG9CQUFVK0MsTUFESztBQUVuQmYsYUFBVyxvQkFBVWUsTUFGRjtBQUduQmhDLFNBQU8sb0JBQVVnQyxNQUhFO0FBSW5CUixZQUFVLG9CQUFVUyxJQUpEO0FBS25CekUsZUFBYSxvQkFBVXlFLElBTEo7QUFNbkJSLFNBQU8sc0JBQVlNLFNBQVosQ0FBc0JOLEtBTlY7QUFPbkJDLGFBQVcsb0JBQVVRLE1BUEY7QUFRbkJQLFFBQU0sb0JBQVVPLE1BUkc7QUFTbkJDLFFBQU0sb0JBQVVILE1BVEc7QUFVbkJ0RSxTQUFPLG9CQUFVMEUsU0FBVixDQUFvQixDQUN6QixvQkFBVUosTUFEZSxFQUV6QixvQkFBVUUsTUFGZSxFQUd6QixvQkFBVUcsT0FBVixDQUFrQixvQkFBVUQsU0FBVixDQUFvQixDQUNwQyxvQkFBVUosTUFEMEIsRUFFcEMsb0JBQVVFLE1BRjBCLENBQXBCLENBQWxCLENBSHlCLENBQXBCLENBVlk7QUFrQm5CbEQsZ0JBQWMsb0JBQVVvRCxTQUFWLENBQW9CLENBQ2hDLG9CQUFVSixNQURzQixFQUVoQyxvQkFBVUUsTUFGc0IsRUFHaEMsb0JBQVVHLE9BQVYsQ0FBa0Isb0JBQVVELFNBQVYsQ0FBb0IsQ0FDcEMsb0JBQVVKLE1BRDBCLEVBRXBDLG9CQUFVRSxNQUYwQixDQUFwQixDQUFsQixDQUhnQyxDQUFwQixDQWxCSztBQTBCbkJqQyxnQkFBYyxvQkFBVStCLE1BMUJMO0FBMkJuQjlDLGlCQUFlLG9CQUFVK0MsSUEzQk47QUE0Qm5CcEUsWUFBVSxvQkFBVXlFLElBNUJEO0FBNkJuQmhELGlCQUFlLG9CQUFVZ0QsSUE3Qk47QUE4Qm5CeEUsWUFBVSxvQkFBVXdFLElBOUJEO0FBK0JuQnZFLGNBQVksb0JBQVV1RSxJQS9CSDtBQWdDbkI1RCxhQUFXLG9CQUFVNEQsSUFoQ0Y7QUFpQ25CaEUsVUFBUSxvQkFBVWdFLElBakNDO0FBa0NuQmpCLFlBQVUsb0JBQVVXLE1BbENEO0FBbUNuQlYsYUFBVyxvQkFBVWlCLE1BbkNGLEVBbUNVO0FBQzdCeEMsWUFBVSxvQkFBVVMsSUFwQ0Q7QUFxQ25CYix1QkFBcUIsb0JBQVVxQztBQXJDWixDQUFyQjs7QUF3Q0FuRixTQUFTMkYsWUFBVCxHQUF3QjtBQUN0QmhGLGVBQWEsS0FEUztBQUV0QndCLGdCQUFjLEVBRlE7QUFHdEJpQixnQkFBYyxFQUhRO0FBSXRCTix1QkFBcUI7QUFKQyxDQUF4Qjs7QUFRQTlDLFNBQVM0RixhQUFULEdBQXlCLElBQXpCOztBQUdPLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLE1BQUcxQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVckMsUUFBVixRQUFVQSxRQUFWO0FBQUEsTUFBb0JvQyxRQUFwQixRQUFvQkEsUUFBcEI7QUFBQSxNQUFpQ2pELEtBQWpDO0FBQUEsU0FDMUI7QUFBQTtBQUFBO0FBQ0UsWUFBT2EsV0FBVyxPQUFYLEdBQXFCLE1BRDlCO0FBRUUsWUFBSyxlQUZQLENBRXVCO0FBRnZCLFFBR0UsVUFBV0E7QUFIYixPQUlPYixLQUpQO0FBTUlrRCxhQUFTRDtBQU5iLEdBRDBCO0FBQUEsQ0FBckI7OztBQVdQMkMsYUFBYVgsU0FBYixHQUF5QjtBQUN2Qi9CLFNBQU8sb0JBQVVvQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVSixNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBRGdCO0FBS3ZCdkUsWUFBVSxvQkFBVXNFLElBTEc7QUFNdkJ2RSxTQUFPLG9CQUFVMEUsU0FBVixDQUFvQixDQUN6QixvQkFBVUosTUFEZSxFQUV6QixvQkFBVUUsTUFGZSxDQUFwQixDQU5nQjtBQVV2Qm5DLFlBQVUsb0JBQVVTO0FBVkcsQ0FBekIiLCJmaWxlIjoiUGlja2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWUgfHwgcHJvcHMuZGVmYXVsdFZhbHVlO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICB2YWx1ZTogQXJyYXkuaXNBcnJheShpbml0aWFsVmFsdWUpID8gaW5pdGlhbFZhbHVlIDogW2luaXRpYWxWYWx1ZV0sXG4gICAgfTtcbiAgfVxuXG4gIG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgfSwgMTApO1xuICB9O1xuXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2sgPSAoaXRlbSwgZSkgPT4ge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZmluYWxJdGVtID0geyB2YWx1ZTogJycgfTtcbiAgICBpZiAoaXRlbS5zZWxlY3RlZCA9PT0gZmFsc2UgfHwgbXVsdGlTZWxlY3QpIHtcbiAgICAgIGZpbmFsSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVJdGVtVmFsdWUoZmluYWxJdGVtLnZhbHVlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBmaW5hbEl0ZW0udmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChmaW5hbEl0ZW0pO1xuICAgIH1cbiAgICBpZiAoIW11bHRpU2VsZWN0KSB7ICAvLyBjbG9zZSBpZiBvbmx5IHNpbmdsZSBzZWxlY3RcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgICAgICBpZiAocGlja2xpc3RCdXR0b25FbCkge1xuICAgICAgICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgb25QaWNrbGlzdENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBpY2tsaXN0QnV0dG9uRWwgPSB0aGlzLnBpY2tsaXN0QnV0dG9uO1xuICAgIHBpY2tsaXN0QnV0dG9uRWwuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgb25LZXlkb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyBmb3IgY29udHJvbGxlZCBiZWhhdmlvciByZXR1cm5pbmcgdmFsdWUgZnJvbSBwcm9wc1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xuICAgIH1cbiAgICAvLyBmb3IgdW5jb250cm9sbGVkIC0gdmFsdWUgZnJvbSBzdGF0ZVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnZhbHVlO1xuICB9XG5cbiAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICBjb25zdCB7IG11bHRpU2VsZWN0LCBvblZhbHVlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuXG4gICAgLy8gdGhpcyBpcyBmb3IgY29udHJvbGxlZCBiZWhhdmlvclxuICAgIGlmIChvblZhbHVlQ2hhbmdlICYmIHByZXZWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIGlmIChtdWx0aVNlbGVjdCkge1xuICAgICAgICBvblZhbHVlQ2hhbmdlKG5ld1ZhbHVlLCBwcmV2VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25WYWx1ZUNoYW5nZShuZXdWYWx1ZS5sZW5ndGggPiAwID8gbmV3VmFsdWVbMF0gOiB1bmRlZmluZWQsXG4gICAgICAgICAgcHJldlZhbHVlLmxlbmd0aCA+IDAgPyBwcmV2VmFsdWVbMF0gOiB1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFNlbGVjdGVkSXRlbUxhYmVsKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5nZXRWYWx1ZSgpO1xuXG4gICAgLy8gbWFueSBpdGVtcyBzZWxlY3RlZFxuICAgIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zU2VsZWN0ZWRUZXh0O1xuICAgIH1cblxuICAgIC8vIG9uZSBpdGVtXG4gICAgaWYgKHNlbGVjdGVkVmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgbGV0IHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJvcHMudmFsdWUgPT09IHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IGl0ZW0ucHJvcHMubGFiZWwgfHwgaXRlbS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQgfHwgc2VsZWN0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICAvLyB6ZXJvIGl0ZW1zXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRUZXh0O1xuICB9XG5cbiAgdXBkYXRlSXRlbVZhbHVlKGl0ZW1WYWx1ZSkge1xuICAgIGNvbnN0IHsgbXVsdGlTZWxlY3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAobXVsdGlTZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLnNsaWNlKCk7XG5cbiAgICAgIC8vIHRvZ2dsZSB2YWx1ZVxuICAgICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YoaXRlbVZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gYWRkIHZhbHVlIHRvIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnB1c2goaXRlbVZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIGFycmF5XG4gICAgICAgIG5ld1ZhbHVlLnNwbGljZShuZXdWYWx1ZS5pbmRleE9mKGl0ZW1WYWx1ZSksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCBvbmx5IG9uZSB2YWx1ZVxuICAgICAgdGhpcy5zZXRWYWx1ZShbaXRlbVZhbHVlXSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGNvbnN0IGZpcnN0SXRlbUVsID1cbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnNsZHMtaXMtc2VsZWN0ZWQgPiAucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKSB8fFxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICBpZiAoZmlyc3RJdGVtRWwpIHtcbiAgICAgIGZpcnN0SXRlbUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlja2xpc3QocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaWQsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0Jyk7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgYnV0dG9uUmVmPXsgbm9kZSA9PiAodGhpcy5waWNrbGlzdEJ1dHRvbiA9IG5vZGUpIH1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3RfX2xhYmVsJ1xuICAgICAgICAgIHR5cGU9J25ldXRyYWwnXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlkb3duIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPEljb24gaWNvbj0nZG93bicgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUub3BlbmVkID9cbiAgICAgICAgPERyb3Bkb3duTWVudVxuICAgICAgICAgIGRyb3Bkb3duTWVudVJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9XG4gICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uUGlja2xpc3RJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UgfVxuICAgICAgICAgIHN0eWxlPXsgbWVudVN0eWxlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0pIH1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+IDpcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKSB9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBpY2tsaXN0SXRlbSA9IChpdGVtKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldFZhbHVlKCkuaW5kZXhPZihpdGVtLnByb3BzLnZhbHVlKSAhPT0gLTE7XG4gICAgY29uc3Qgb25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBtZW51U2l6ZSwgbWVudVN0eWxlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IHRoaXMucmVuZGVyRHJvcGRvd24obWVudVNpemUsIG1lbnVTdHlsZSk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgZHJvcGRvd24gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclBpY2tsaXN0KHsgLi4ucHJvcHMsIGlkIH0pIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgXSkpLFxuICBdKSxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSksXG4gIF0pLFxuICBzZWxlY3RlZFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb3B0aW9uc1NlbGVjdGVkVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cblBpY2tsaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6IFtdLFxuICBzZWxlY3RlZFRleHQ6ICcnLFxuICBvcHRpb25zU2VsZWN0ZWRUZXh0OiAnJyxcbn07XG5cblxuUGlja2xpc3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuZXhwb3J0IGNvbnN0IFBpY2tsaXN0SXRlbSA9ICh7IGxhYmVsLCBzZWxlY3RlZCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPERyb3Bkb3duTWVudUl0ZW1cbiAgICBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH1cbiAgICByb2xlPSdtZW51aXRlbXJhZGlvJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgeyAuLi5wcm9wcyB9XG4gID5cbiAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuKTtcblxuUGlja2xpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=