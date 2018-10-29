'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.DropdownMenuItem = exports.MenuHeader = exports.DropdownMenuHeader = undefined;

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _AutoAlign = require('./AutoAlign');

var _AutoAlign2 = _interopRequireDefault(_AutoAlign);

var _Picklist = require('./Picklist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuHeader = exports.DropdownMenuHeader = function DropdownMenuHeader(_ref) {
  var divider = _ref.divider,
      className = _ref.className,
      children = _ref.children;

  var menuHeaderClass = (0, _classnames4.default)('slds-dropdown__header', (0, _defineProperty3.default)({}, 'slds-has-divider--' + divider + '-space', divider), className);
  return _react2.default.createElement(
    'div',
    { className: menuHeaderClass },
    _react2.default.createElement(
      'span',
      { className: 'slds-text-heading--label' },
      children
    )
  );
};

DropdownMenuHeader.propTypes = {
  className: _propTypes2.default.string,
  divider: _propTypes2.default.oneOf(['top', 'bottom']),
  children: _propTypes2.default.node
};

var MenuHeader = exports.MenuHeader = DropdownMenuHeader;

var DropdownMenuItem = exports.DropdownMenuItem = function (_Component) {
  (0, _inherits3.default)(DropdownMenuItem, _Component);

  function DropdownMenuItem() {
    (0, _classCallCheck3.default)(this, DropdownMenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownMenuItem.__proto__ || (0, _getPrototypeOf2.default)(DropdownMenuItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenuItem, [{
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        // return or space
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onClick) {
          var _props;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_props = this.props).onClick.apply(_props, [e].concat(args));
        }
      } else if (e.keyCode === 40 || e.keyCode === 38) {
        e.preventDefault();
        e.stopPropagation();
        var currentEl = e.target.parentElement;
        var itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
        while (itemEl) {
          var anchorEl = itemEl.querySelector('.react-slds-menuitem[tabIndex]');
          if (anchorEl && !anchorEl.disabled) {
            anchorEl.focus();
            return;
          }
          itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
        }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          label = _props2.label,
          icon = _props2.icon,
          iconRight = _props2.iconRight,
          selected = _props2.selected,
          disabled = _props2.disabled,
          divider = _props2.divider,
          _props2$tabIndex = _props2.tabIndex,
          tabIndex = _props2$tabIndex === undefined ? 0 : _props2$tabIndex,
          onClick = _props2.onClick,
          children = _props2.children,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'label', 'icon', 'iconRight', 'selected', 'disabled', 'divider', 'tabIndex', 'onClick', 'children']);

      var menuItemClass = (0, _classnames4.default)('slds-dropdown__item', (0, _defineProperty3.default)({
        'slds-is-selected': selected
      }, 'slds-has-divider--' + divider + '-space', divider), className);
      return _react2.default.createElement(
        'li',
        { className: menuItemClass, disabled: disabled },
        _react2.default.createElement(
          'a',
          (0, _extends3.default)({
            className: 'slds-truncate react-slds-menuitem',
            role: 'menuitem',
            'aria-disabled': disabled,
            tabIndex: disabled ? null : tabIndex,
            onClick: disabled ? null : onClick,
            onKeyDown: disabled ? null : this.onKeyDown.bind(this),
            onBlur: disabled ? null : this.onBlur.bind(this),
            onFocus: disabled ? null : this.onFocus.bind(this)
          }, props),
          _react2.default.createElement(
            'p',
            { className: 'slds-truncate' },
            icon ? _react2.default.createElement(_Icon2.default, { icon: icon, size: 'x-small', align: 'left' }) : null,
            label || children
          ),
          iconRight ? _react2.default.createElement(_Icon2.default, { icon: iconRight, size: 'x-small', align: 'right' }) : null
        )
      );
    }
  }]);
  return DropdownMenuItem;
}(_react.Component);

DropdownMenuItem.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  iconRight: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  divider: _propTypes2.default.oneOf(['top', 'bottom']),
  tabIndex: _propTypes2.default.number,
  selected: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var MenuItem = exports.MenuItem = DropdownMenuItem;

var DropdownMenu = function (_Component2) {
  (0, _inherits3.default)(DropdownMenu, _Component2);

  function DropdownMenu() {
    (0, _classCallCheck3.default)(this, DropdownMenu);
    return (0, _possibleConstructorReturn3.default)(this, (DropdownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropdownMenu)).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'onMenuItemBlur',
    value: function onMenuItemBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onMenuItemFocus',
    value: function onMenuItemFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        // ESC
        if (this.props.onMenuClose) {
          this.props.onMenuClose(e);
        }
      }
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(menuItem) {
      var _this3 = this;

      var _menuItem$props = menuItem.props,
          onClick = _menuItem$props.onClick,
          onBlur = _menuItem$props.onBlur,
          onFocus = _menuItem$props.onFocus,
          props = (0, _objectWithoutProperties3.default)(_menuItem$props, ['onClick', 'onBlur', 'onFocus']);

      var onMenuItemClick = function onMenuItemClick() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (onClick) {
          onClick.apply(undefined, args);
        }
        if (_this3.props.onMenuItemClick) {
          var _props3;

          (_props3 = _this3.props).onMenuItemClick.apply(_props3, [props].concat(args));
        }
      };
      var onMenuItemFocus = function onMenuItemFocus(e) {
        if (onFocus) {
          onFocus(e);
        }
        _this3.onMenuItemFocus(e);
      };
      var onMenuItemBlur = function onMenuItemBlur(e) {
        if (onBlur) {
          onBlur(e);
        }
        _this3.onMenuItemBlur(e);
      };
      return _react2.default.cloneElement(menuItem, {
        onClick: onMenuItemClick,
        onBlur: onMenuItemBlur,
        onFocus: onMenuItemFocus
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props4 = this.props,
          className = _props4.className,
          _props4$align = _props4.align,
          align = _props4$align === undefined ? 'left' : _props4$align,
          vertAlign = _props4.vertAlign,
          size = _props4.size,
          header = _props4.header,
          nubbinTop = _props4.nubbinTop,
          hoverPopup = _props4.hoverPopup,
          children = _props4.children,
          style = _props4.style,
          dropdownMenuRef = _props4.dropdownMenuRef,
          onFocus = _props4.onFocus,
          onBlur = _props4.onBlur;

      var nubbin = nubbinTop ? 'auto' : this.props.nubbin;
      var nubbinPosition = nubbin === 'auto' ? vertAlign + ' ' + align : nubbin;
      var dropdownClassNames = (0, _classnames4.default)(className, 'slds-dropdown', 'slds-dropdown--' + align, 'slds-dropdown--' + vertAlign, size ? 'slds-dropdown--' + size : undefined, nubbinPosition ? 'slds-nubbin_' + nubbinPosition.replace(/\s+/g, '-') : undefined, { 'react-slds-no-hover-popup': !hoverPopup });
      var handleDOMRef = function handleDOMRef(node) {
        _this4.node = node;
        if (dropdownMenuRef) {
          dropdownMenuRef(node);
        }
      };
      return _react2.default.createElement(
        'div',
        {
          className: dropdownClassNames,
          ref: handleDOMRef,
          style: (0, _extends3.default)({ outline: 'none' }, style),
          onKeyDown: this.onKeyDown.bind(this),
          tabIndex: '-1',
          onFocus: onFocus,
          onBlur: onBlur
        },
        header ? _react2.default.createElement(
          MenuHeader,
          null,
          header
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'slds-dropdown__list', role: 'menu' },
          _react2.default.Children.map(children, function (item) {
            return item.type === MenuItem || item.type === _Picklist.PicklistItem ? _this4.renderMenuItem(item) : item;
          })
        )
      );
    }
  }]);
  return DropdownMenu;
}(_react.Component);

DropdownMenu.propTypes = {
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'right']),
  vertAlign: _propTypes2.default.oneOf(['top', 'bottom']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  header: _propTypes2.default.string,
  nubbin: _propTypes2.default.oneOf(['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'auto']),
  nubbinTop: _propTypes2.default.bool, // for backward compatibility. use nubbin instead
  hoverPopup: _propTypes2.default.bool,
  onMenuItemClick: _propTypes2.default.func,
  onMenuClose: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  children: _propTypes2.default.node,
  dropdownMenuRef: _propTypes2.default.func,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object
};

function preventPortalizeOnHoverPopup(Cmp) {
  // eslint-disable-next-line react/prop-types
  return function (props) {
    return _react2.default.createElement(Cmp, (0, _extends3.default)({ preventPortalize: !!props.hoverPopup }, props));
  };
}

exports.default = preventPortalizeOnHoverPopup((0, _AutoAlign2.default)({
  triggerSelector: '.slds-dropdown-trigger'
})(DropdownMenu));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnVIZWFkZXIiLCJkaXZpZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZW51SGVhZGVyQ2xhc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJNZW51SGVhZGVyIiwiRHJvcGRvd25NZW51SXRlbSIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmdzIiwiY3VycmVudEVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIml0ZW1FbCIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImljb24iLCJpY29uUmlnaHQiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwibWVudUl0ZW1DbGFzcyIsIm9uS2V5RG93biIsImJpbmQiLCJDb21wb25lbnQiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIk1lbnVJdGVtIiwiRHJvcGRvd25NZW51Iiwib25NZW51Q2xvc2UiLCJtZW51SXRlbSIsIm9uTWVudUl0ZW1DbGljayIsIm9uTWVudUl0ZW1Gb2N1cyIsIm9uTWVudUl0ZW1CbHVyIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJhbGlnbiIsInZlcnRBbGlnbiIsInNpemUiLCJoZWFkZXIiLCJudWJiaW5Ub3AiLCJob3ZlclBvcHVwIiwic3R5bGUiLCJkcm9wZG93bk1lbnVSZWYiLCJudWJiaW4iLCJudWJiaW5Qb3NpdGlvbiIsImRyb3Bkb3duQ2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJoYW5kbGVET01SZWYiLCJvdXRsaW5lIiwiQ2hpbGRyZW4iLCJtYXAiLCJpdGVtIiwidHlwZSIsIlBpY2tsaXN0SXRlbSIsInJlbmRlck1lbnVJdGVtIiwib2JqZWN0IiwicHJldmVudFBvcnRhbGl6ZU9uSG92ZXJQb3B1cCIsIkNtcCIsInRyaWdnZXJTZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRU8sSUFBTUEsa0RBQXFCLFNBQXJCQSxrQkFBcUIsT0FBc0M7QUFBQSxNQUFuQ0MsT0FBbUMsUUFBbkNBLE9BQW1DO0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDdEUsTUFBTUMsa0JBQWtCLDBCQUN0Qix1QkFEc0IsMkRBRUVILE9BRkYsYUFFb0JBLE9BRnBCLEdBR3RCQyxTQUhzQixDQUF4QjtBQUtBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBWUUsZUFBakI7QUFDRTtBQUFBO0FBQUEsUUFBTSxXQUFVLDBCQUFoQjtBQUE2Q0Q7QUFBN0M7QUFERixHQURGO0FBS0QsQ0FYTTs7QUFhUEgsbUJBQW1CSyxTQUFuQixHQUErQjtBQUM3QkgsYUFBV0ksb0JBQVVDLE1BRFE7QUFFN0JOLFdBQVNLLG9CQUFVRSxLQUFWLENBQWdCLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBaEIsQ0FGb0I7QUFHN0JMLFlBQVVHLG9CQUFVRztBQUhTLENBQS9COztBQU1PLElBQU1DLGtDQUFhVixrQkFBbkI7O0lBRU1XLGdCLFdBQUFBLGdCOzs7Ozs7Ozs7OzhCQUNEQyxDLEVBQVk7QUFDcEIsVUFBSUEsRUFBRUMsT0FBRixLQUFjLEVBQWQsSUFBb0JELEVBQUVDLE9BQUYsS0FBYyxFQUF0QyxFQUEwQztBQUFFO0FBQzFDRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUFBOztBQUFBLDRDQUpaQyxJQUlZO0FBSlpBLGdCQUlZO0FBQUE7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VUFBUXZCLG9CQUFVb0MsSUFYSztBQVl2QlosV0FBU3hCLG9CQUFVb0MsSUFaSTtBQWF2QnZDLFlBQVVHLG9CQUFVRyxJQWJHO0FBY3ZCa0QsbUJBQWlCckQsb0JBQVVvQyxJQWRKO0FBZXZCO0FBQ0FnQixTQUFPcEQsb0JBQVVtRTtBQWhCTSxDQUF6Qjs7QUFtQkEsU0FBU0MsNEJBQVQsQ0FBc0NDLEdBQXRDLEVBQTJDO0FBQ3pDO0FBQ0EsU0FBTztBQUFBLFdBQVMsOEJBQUMsR0FBRCwyQkFBSyxrQkFBbUIsQ0FBQyxDQUFDM0QsTUFBTXlDLFVBQWhDLElBQWtEekMsS0FBbEQsRUFBVDtBQUFBLEdBQVA7QUFDRDs7a0JBRWMwRCw2QkFBNkIseUJBQVU7QUFDcERFLG1CQUFpQjtBQURtQyxDQUFWLEVBRXpDaEMsWUFGeUMsQ0FBN0IsQyIsImZpbGUiOiJEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IHsgUGlja2xpc3RJdGVtIH0gZnJvbSAnLi9QaWNrbGlzdCc7XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVIZWFkZXIgPSAoeyBkaXZpZGVyLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbWVudUhlYWRlckNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAnc2xkcy1kcm9wZG93bl9faGVhZGVyJyxcbiAgICB7IFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBtZW51SGVhZGVyQ2xhc3MgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJz57IGNoaWxkcmVuIH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ecm9wZG93bk1lbnVIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51SGVhZGVyID0gRHJvcGRvd25NZW51SGVhZGVyO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlLCAuLi5hcmdzKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gb3Igc3BhY2VcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiwgaWNvblJpZ2h0LCBzZWxlY3RlZCwgZGlzYWJsZWQsIGRpdmlkZXIsIHRhYkluZGV4ID0gMCwgb25DbGljayxcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbnVJdGVtQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd25fX2l0ZW0nLCB7XG4gICAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAgIFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBtZW51SXRlbUNsYXNzIH0gZGlzYWJsZWQ9eyBkaXNhYmxlZCB9PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSByZWFjdC1zbGRzLW1lbnVpdGVtJ1xuICAgICAgICAgIHJvbGU9J21lbnVpdGVtJ1xuICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgdGFiSW5kZXg9eyBkaXNhYmxlZCA/IG51bGwgOiB0YWJJbmRleCB9XG4gICAgICAgICAgb25DbGljaz17IGRpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2sgfVxuICAgICAgICAgIG9uS2V5RG93bj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQmx1cj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uRm9jdXM9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyBpY29uID8gPEljb24gaWNvbj17IGljb24gfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0nbGVmdCcgLz4gOiBudWxsIH1cbiAgICAgICAgICAgIHsgbGFiZWwgfHwgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7IGljb25SaWdodCA/IDxJY29uIGljb249eyBpY29uUmlnaHQgfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0ncmlnaHQnIC8+IDogbnVsbCB9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5Ecm9wZG93bk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblJpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBEcm9wZG93bk1lbnVJdGVtO1xuXG5cbmNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uTWVudUl0ZW1CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1Gb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVDbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lbnVJdGVtKG1lbnVJdGVtKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBvbkJsdXIsIG9uRm9jdXMsIC4uLnByb3BzIH0gPSBtZW51SXRlbS5wcm9wcztcbiAgICBjb25zdCBvbk1lbnVJdGVtQ2xpY2sgPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHsgb25DbGljayguLi5hcmdzKTsgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKHByb3BzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1Gb2N1cyA9IChlKSA9PiB7XG4gICAgICBpZiAob25Gb2N1cykgeyBvbkZvY3VzKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1Gb2N1cyhlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1CbHVyID0gKGUpID0+IHtcbiAgICAgIGlmIChvbkJsdXIpIHsgb25CbHVyKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1CbHVyKGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChtZW51SXRlbSwge1xuICAgICAgb25DbGljazogb25NZW51SXRlbUNsaWNrLFxuICAgICAgb25CbHVyOiBvbk1lbnVJdGVtQmx1cixcbiAgICAgIG9uRm9jdXM6IG9uTWVudUl0ZW1Gb2N1cyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIGFsaWduID0gJ2xlZnQnLCB2ZXJ0QWxpZ24sIHNpemUsIGhlYWRlciwgbnViYmluVG9wLCBob3ZlclBvcHVwLCBjaGlsZHJlbiwgc3R5bGUsXG4gICAgICBkcm9wZG93bk1lbnVSZWYsXG4gICAgICBvbkZvY3VzLCBvbkJsdXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbnViYmluID0gbnViYmluVG9wID8gJ2F1dG8nIDogdGhpcy5wcm9wcy5udWJiaW47XG4gICAgY29uc3QgbnViYmluUG9zaXRpb24gPSBudWJiaW4gPT09ICdhdXRvJyA/IGAke3ZlcnRBbGlnbn0gJHthbGlnbn1gIDogbnViYmluO1xuICAgIGNvbnN0IGRyb3Bkb3duQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHthbGlnbn1gLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7dmVydEFsaWdufWAsXG4gICAgICBzaXplID8gYHNsZHMtZHJvcGRvd24tLSR7c2l6ZX1gIDogdW5kZWZpbmVkLFxuICAgICAgbnViYmluUG9zaXRpb24gPyBgc2xkcy1udWJiaW5fJHtudWJiaW5Qb3NpdGlvbi5yZXBsYWNlKC9cXHMrL2csICctJyl9YCA6IHVuZGVmaW5lZCxcbiAgICAgIHsgJ3JlYWN0LXNsZHMtbm8taG92ZXItcG9wdXAnOiAhaG92ZXJQb3B1cCB9LFxuICAgICk7XG4gICAgY29uc3QgaGFuZGxlRE9NUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICBpZiAoZHJvcGRvd25NZW51UmVmKSB7XG4gICAgICAgIGRyb3Bkb3duTWVudVJlZihub2RlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17IGRyb3Bkb3duQ2xhc3NOYW1lcyB9XG4gICAgICAgIHJlZj17IGhhbmRsZURPTVJlZiB9XG4gICAgICAgIHN0eWxlPXsgeyBvdXRsaW5lOiAnbm9uZScsIC4uLnN0eWxlIH0gfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgdGFiSW5kZXg9Jy0xJ1xuICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgIG9uQmx1cj17IG9uQmx1ciB9XG4gICAgICA+XG4gICAgICAgIHsgaGVhZGVyID8gPE1lbnVIZWFkZXI+eyBoZWFkZXIgfTwvTWVudUhlYWRlcj4gOiBudWxsIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1kcm9wZG93bl9fbGlzdCcgcm9sZT0nbWVudSc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGl0ZW0gPT4gKFxuICAgICAgICAgICAgaXRlbS50eXBlID09PSBNZW51SXRlbSB8fCBpdGVtLnR5cGUgPT09IFBpY2tsaXN0SXRlbSA/IHRoaXMucmVuZGVyTWVudUl0ZW0oaXRlbSkgOiBpdGVtXG4gICAgICAgICAgKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgdmVydEFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnViYmluOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAndG9wIGxlZnQnLCAndG9wIHJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20gbGVmdCcsICdib3R0b20gcmlnaHQnLCAnYXV0byddKSxcbiAgbnViYmluVG9wOiBQcm9wVHlwZXMuYm9vbCwgLy8gZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIHVzZSBudWJiaW4gaW5zdGVhZFxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25NZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51Q2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkcm9wZG93bk1lbnVSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmZ1bmN0aW9uIHByZXZlbnRQb3J0YWxpemVPbkhvdmVyUG9wdXAoQ21wKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gIHJldHVybiBwcm9wcyA9PiA8Q21wIHByZXZlbnRQb3J0YWxpemU9eyAhIXByb3BzLmhvdmVyUG9wdXAgfSB7IC4uLnByb3BzIH0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByZXZlbnRQb3J0YWxpemVPbkhvdmVyUG9wdXAoYXV0b0FsaWduKHtcbiAgdHJpZ2dlclNlbGVjdG9yOiAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlcicsXG59KShEcm9wZG93bk1lbnUpKTtcbiJdfQ==