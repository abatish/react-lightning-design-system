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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnVIZWFkZXIiLCJkaXZpZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZW51SGVhZGVyQ2xhc3MiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJNZW51SGVhZGVyIiwiRHJvcGRvd25NZW51SXRlbSIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmdzIiwiY3VycmVudEVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIml0ZW1FbCIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImljb24iLCJpY29uUmlnaHQiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwibWVudUl0ZW1DbGFzcyIsIm9uS2V5RG93biIsImJpbmQiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIk1lbnVJdGVtIiwiRHJvcGRvd25NZW51Iiwib25NZW51Q2xvc2UiLCJtZW51SXRlbSIsIm9uTWVudUl0ZW1DbGljayIsIm9uTWVudUl0ZW1Gb2N1cyIsIm9uTWVudUl0ZW1CbHVyIiwiY2xvbmVFbGVtZW50IiwiYWxpZ24iLCJzaXplIiwiaGVhZGVyIiwibnViYmluVG9wIiwiaG92ZXJQb3B1cCIsInN0eWxlIiwiZHJvcGRvd25NZW51UmVmIiwibnViYmluIiwibnViYmluUG9zaXRpb24iLCJ2ZXJ0QWxpZ24iLCJkcm9wZG93bkNsYXNzTmFtZXMiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwiaGFuZGxlRE9NUmVmIiwib3V0bGluZSIsIkNoaWxkcmVuIiwibWFwIiwiaXRlbSIsInR5cGUiLCJyZW5kZXJNZW51SXRlbSIsIm9iamVjdCIsInByZXZlbnRQ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Q0EsU0FBTztBQUFBLFdBQVMsOEJBQUMsR0FBRCwyQkFBSyxrQkFBbUIsQ0FBQyxDQUFDeEQsTUFBTXNDLFVBQWhDLElBQWtEdEMsS0FBbEQsRUFBVDtBQUFBLEdBQVA7QUFDRDs7a0JBRWN1RCw2QkFBNkIseUJBQVU7QUFDcERFLG1CQUFpQjtBQURtQyxDQUFWLEVBRXpDOUIsWUFGeUMsQ0FBN0IsQyIsImZpbGUiOiJEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IHsgUGlja2xpc3RJdGVtIH0gZnJvbSAnLi9QaWNrbGlzdCc7XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVIZWFkZXIgPSAoeyBkaXZpZGVyLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbWVudUhlYWRlckNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAnc2xkcy1kcm9wZG93bl9faGVhZGVyJyxcbiAgICB7IFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBtZW51SGVhZGVyQ2xhc3MgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJz57IGNoaWxkcmVuIH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ecm9wZG93bk1lbnVIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51SGVhZGVyID0gRHJvcGRvd25NZW51SGVhZGVyO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlLCAuLi5hcmdzKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gb3Igc3BhY2VcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiwgaWNvblJpZ2h0LCBzZWxlY3RlZCwgZGlzYWJsZWQsIGRpdmlkZXIsIHRhYkluZGV4ID0gMCwgb25DbGljayxcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbnVJdGVtQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd25fX2l0ZW0nLCB7XG4gICAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAgIFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBtZW51SXRlbUNsYXNzIH0gZGlzYWJsZWQ9eyBkaXNhYmxlZCB9PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSByZWFjdC1zbGRzLW1lbnVpdGVtJ1xuICAgICAgICAgIHJvbGU9J21lbnVpdGVtJ1xuICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgdGFiSW5kZXg9eyBkaXNhYmxlZCA/IG51bGwgOiB0YWJJbmRleCB9XG4gICAgICAgICAgb25DbGljaz17IGRpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2sgfVxuICAgICAgICAgIG9uS2V5RG93bj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQmx1cj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uRm9jdXM9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyBpY29uID8gPEljb24gaWNvbj17IGljb24gfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0nbGVmdCcgLz4gOiBudWxsIH1cbiAgICAgICAgICAgIHsgbGFiZWwgfHwgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7IGljb25SaWdodCA/IDxJY29uIGljb249eyBpY29uUmlnaHQgfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0ncmlnaHQnIC8+IDogbnVsbCB9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5Ecm9wZG93bk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblJpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBEcm9wZG93bk1lbnVJdGVtO1xuXG5cbmNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uTWVudUl0ZW1CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1Gb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVDbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lbnVJdGVtKG1lbnVJdGVtKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBvbkJsdXIsIG9uRm9jdXMsIC4uLnByb3BzIH0gPSBtZW51SXRlbS5wcm9wcztcbiAgICBjb25zdCBvbk1lbnVJdGVtQ2xpY2sgPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHsgb25DbGljayguLi5hcmdzKTsgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKHByb3BzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1Gb2N1cyA9IChlKSA9PiB7XG4gICAgICBpZiAob25Gb2N1cykgeyBvbkZvY3VzKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1Gb2N1cyhlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1CbHVyID0gKGUpID0+IHtcbiAgICAgIGlmIChvbkJsdXIpIHsgb25CbHVyKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1CbHVyKGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChtZW51SXRlbSwge1xuICAgICAgb25DbGljazogb25NZW51SXRlbUNsaWNrLFxuICAgICAgb25CbHVyOiBvbk1lbnVJdGVtQmx1cixcbiAgICAgIG9uRm9jdXM6IG9uTWVudUl0ZW1Gb2N1cyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIGFsaWduID0gJ2xlZnQnLCBzaXplLCBoZWFkZXIsIG51YmJpblRvcCwgaG92ZXJQb3B1cCwgY2hpbGRyZW4sIHN0eWxlLFxuICAgICAgZHJvcGRvd25NZW51UmVmLFxuICAgICAgb25Gb2N1cywgb25CbHVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG51YmJpbiA9IG51YmJpblRvcCA/ICdhdXRvJyA6IHRoaXMucHJvcHMubnViYmluO1xuICAgIGNvbnN0IG51YmJpblBvc2l0aW9uID0gbnViYmluID09PSAnYXV0bycgPyBgJHt2ZXJ0QWxpZ259ICR7YWxpZ259YCA6IG51YmJpbjtcbiAgICBjb25zdCBkcm9wZG93bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7YWxpZ259YCxcbiAgICAgIGBzbGRzLWRyb3Bkb3duLS0ke3ZlcnRBbGlnbn1gLFxuICAgICAgc2l6ZSA/IGBzbGRzLWRyb3Bkb3duLS0ke3NpemV9YCA6IHVuZGVmaW5lZCxcbiAgICAgIG51YmJpblBvc2l0aW9uID8gYHNsZHMtbnViYmluXyR7bnViYmluUG9zaXRpb24ucmVwbGFjZSgvXFxzKy9nLCAnLScpfWAgOiB1bmRlZmluZWQsXG4gICAgICB7ICdyZWFjdC1zbGRzLW5vLWhvdmVyLXBvcHVwJzogIWhvdmVyUG9wdXAgfSxcbiAgICApO1xuICAgIGNvbnN0IGhhbmRsZURPTVJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgaWYgKGRyb3Bkb3duTWVudVJlZikge1xuICAgICAgICBkcm9wZG93bk1lbnVSZWYobm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyBkcm9wZG93bkNsYXNzTmFtZXMgfVxuICAgICAgICByZWY9eyBoYW5kbGVET01SZWYgfVxuICAgICAgICBzdHlsZT17IHsgb3V0bGluZTogJ25vbmUnLCAuLi5zdHlsZSB9IH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIHRhYkluZGV4PSctMSdcbiAgICAgICAgb25Gb2N1cz17IG9uRm9jdXMgfVxuICAgICAgICBvbkJsdXI9eyBvbkJsdXIgfVxuICAgICAgPlxuICAgICAgICB7IGhlYWRlciA/IDxNZW51SGVhZGVyPnsgaGVhZGVyIH08L01lbnVIZWFkZXI+IDogbnVsbCB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtZHJvcGRvd25fX2xpc3QnIHJvbGU9J21lbnUnPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBpdGVtID0+IChcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gTWVudUl0ZW0gfHwgaXRlbS50eXBlID09PSBQaWNrbGlzdEl0ZW0gPyB0aGlzLnJlbmRlck1lbnVJdGVtKGl0ZW0pIDogaXRlbVxuICAgICAgICAgICkpIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIHZlcnRBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG51YmJpbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ3RvcCBsZWZ0JywgJ3RvcCByaWdodCcsICdib3R0b20nLCAnYm90dG9tIGxlZnQnLCAnYm90dG9tIHJpZ2h0JywgJ2F1dG8nXSksXG4gIG51YmJpblRvcDogUHJvcFR5cGVzLmJvb2wsIC8vIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LiB1c2UgbnViYmluIGluc3RlYWRcbiAgaG92ZXJQb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uTWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZHJvcGRvd25NZW51UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5mdW5jdGlvbiBwcmV2ZW50UG9ydGFsaXplT25Ib3ZlclBvcHVwKENtcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICByZXR1cm4gcHJvcHMgPT4gPENtcCBwcmV2ZW50UG9ydGFsaXplPXsgISFwcm9wcy5ob3ZlclBvcHVwIH0geyAuLi5wcm9wcyB9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmV2ZW50UG9ydGFsaXplT25Ib3ZlclBvcHVwKGF1dG9BbGlnbih7XG4gIHRyaWdnZXJTZWxlY3RvcjogJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxufSkoRHJvcGRvd25NZW51KSk7XG4iXX0=