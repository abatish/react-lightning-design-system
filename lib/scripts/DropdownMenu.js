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

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Picklist = require('./Picklist');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuHeader = exports.DropdownMenuHeader = function DropdownMenuHeader(_ref) {
  var divider = _ref.divider,
      className = _ref.className,
      children = _ref.children;

  var menuHeaderClass = (0, _classnames5.default)('slds-dropdown__header', (0, _defineProperty3.default)({}, 'slds-has-divider--' + divider + '-space', divider), className);
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
  className: _react.PropTypes.string,
  divider: _react.PropTypes.oneOf(['top', 'bottom']),
  children: _react.PropTypes.node
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

      var menuItemClass = (0, _classnames5.default)('slds-dropdown__item', (0, _defineProperty3.default)({
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
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconRight: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  divider: _react.PropTypes.oneOf(['top', 'bottom']),
  tabIndex: _react.PropTypes.number,
  selected: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  children: _react.PropTypes.node
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
          this.props.onMenuClose();
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
      var _classnames3,
          _this4 = this;

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
          onFocus = _props4.onFocus,
          onBlur = _props4.onBlur;

      var dropdownMenuClassNames = (0, _classnames5.default)(className, 'slds-dropdown', 'slds-dropdown--menu', 'slds-dropdown--' + align, (_classnames3 = {}, (0, _defineProperty3.default)(_classnames3, 'slds-dropdown--' + size, size), (0, _defineProperty3.default)(_classnames3, 'slds-dropdown--nubbin-top', nubbinTop), (0, _defineProperty3.default)(_classnames3, 'react-slds-no-hover-popup', !hoverPopup), _classnames3));
      return _react2.default.createElement(
        'div',
        {
          ref: this.props.dropdownMenuRef,
          style: (0, _extends3.default)({ outline: 'none' }, style),
          className: dropdownMenuClassNames,
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

exports.default = DropdownMenu;


DropdownMenu.propTypes = {
  className: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  header: _react.PropTypes.string,
  nubbinTop: _react.PropTypes.bool,
  hoverPopup: _react.PropTypes.bool,
  onMenuItemClick: _react.PropTypes.func,
  onMenuClose: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  children: _react.PropTypes.node,
  dropdownMenuRef: _react.PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnVIZWFkZXIiLCJkaXZpZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZW51SGVhZGVyQ2xhc3MiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJNZW51SGVhZGVyIiwiRHJvcGRvd25NZW51SXRlbSIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmdzIiwiY3VycmVudEVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIml0ZW1FbCIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImljb24iLCJpY29uUmlnaHQiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwibWVudUl0ZW1DbGFzcyIsIm9uS2V5RG93biIsImJpbmQiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIk1lbnVJdGVtIiwiRHJvcGRvd25NZW51Iiwib25NZW51Q2xvc2UiLCJtZW51SXRlbSIsIm9uTWVudUl0ZW1DbGljayIsIm9uTWVudUl0ZW1Gb2N1cyIsIm9uTWVudUl0ZW1CbHVyIiwiY2xvbmVFbGVtZW50IiwiYWxpZ24iLCJzaXplIiwiaGVhZGVyIiwibnViYmluVG9wIiwiaG92ZXJQb3B1cCIsInN0eWxlIiwiZHJvcGRvd25NZW51Q2xhc3NOYW1lcyIsImRyb3Bkb3duTWVudVJlZiIsIm91dGxpbmUiLCJDaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwicmVuZGVyTWVudUl0ZW0iLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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TEU7QUFNdkJlLGNBQVksaUJBQVVmLElBTkM7QUFPdkJPLG1CQUFpQixpQkFBVUwsSUFQSjtBQVF2QkcsZUFBYSxpQkFBVUgsSUFSQTtBQVN2QlosVUFBUSxpQkFBVVksSUFUSztBQVV2QlgsV0FBUyxpQkFBVVcsSUFWSTtBQVd2QnJDLFlBQVUsaUJBQVVLLElBWEc7QUFZdkJnRCxtQkFBaUIsaUJBQVVoQixJQVpKO0FBYXZCO0FBQ0FjLFNBQU8saUJBQVVTO0FBZE0sQ0FBekIiLCJmaWxlIjoiRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgUGlja2xpc3RJdGVtIH0gZnJvbSAnLi9QaWNrbGlzdCc7XG5cbmV4cG9ydCBjb25zdCBEcm9wZG93bk1lbnVIZWFkZXIgPSAoeyBkaXZpZGVyLCBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbWVudUhlYWRlckNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAnc2xkcy1kcm9wZG93bl9faGVhZGVyJyxcbiAgICB7IFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyIH0sXG4gICAgY2xhc3NOYW1lXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBtZW51SGVhZGVyQ2xhc3MgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJz57IGNoaWxkcmVuIH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ecm9wZG93bk1lbnVIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBNZW51SGVhZGVyID0gRHJvcGRvd25NZW51SGVhZGVyO1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25NZW51SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlLCAuLi5hcmdzKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gb3Igc3BhY2VcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbGljayhlLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiwgaWNvblJpZ2h0LCBzZWxlY3RlZCwgZGlzYWJsZWQsIGRpdmlkZXIsIHRhYkluZGV4ID0gMCwgb25DbGljayxcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1lbnVJdGVtQ2xhc3MgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZHJvcGRvd25fX2l0ZW0nLCB7XG4gICAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAgIFtgc2xkcy1oYXMtZGl2aWRlci0tJHtkaXZpZGVyfS1zcGFjZWBdOiBkaXZpZGVyLFxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBtZW51SXRlbUNsYXNzIH0gZGlzYWJsZWQ9eyBkaXNhYmxlZCB9PlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSByZWFjdC1zbGRzLW1lbnVpdGVtJ1xuICAgICAgICAgIHJvbGU9J21lbnVpdGVtJ1xuICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgdGFiSW5kZXg9eyBkaXNhYmxlZCA/IG51bGwgOiB0YWJJbmRleCB9XG4gICAgICAgICAgb25DbGljaz17IGRpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2sgfVxuICAgICAgICAgIG9uS2V5RG93bj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uQmx1cj17IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uRm9jdXM9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSB9XG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgeyBpY29uID8gPEljb24gaWNvbj17IGljb24gfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0nbGVmdCcgLz4gOiBudWxsIH1cbiAgICAgICAgICAgIHsgbGFiZWwgfHwgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7IGljb25SaWdodCA/IDxJY29uIGljb249eyBpY29uUmlnaHQgfSBzaXplPSd4LXNtYWxsJyBhbGlnbj0ncmlnaHQnIC8+IDogbnVsbCB9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5Ecm9wZG93bk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblJpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpdmlkZXI6IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBEcm9wZG93bk1lbnVJdGVtO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uTWVudUl0ZW1CbHVyKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1Gb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVDbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTWVudUl0ZW0obWVudUl0ZW0pIHtcbiAgICBjb25zdCB7IG9uQ2xpY2ssIG9uQmx1ciwgb25Gb2N1cywgLi4ucHJvcHMgfSA9IG1lbnVJdGVtLnByb3BzO1xuICAgIGNvbnN0IG9uTWVudUl0ZW1DbGljayA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAob25DbGljaykgeyBvbkNsaWNrKC4uLmFyZ3MpOyB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2socHJvcHMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25NZW51SXRlbUZvY3VzID0gKGUpID0+IHtcbiAgICAgIGlmIChvbkZvY3VzKSB7IG9uRm9jdXMoZSk7IH1cbiAgICAgIHRoaXMub25NZW51SXRlbUZvY3VzKGUpO1xuICAgIH07XG4gICAgY29uc3Qgb25NZW51SXRlbUJsdXIgPSAoZSkgPT4ge1xuICAgICAgaWYgKG9uQmx1cikgeyBvbkJsdXIoZSk7IH1cbiAgICAgIHRoaXMub25NZW51SXRlbUJsdXIoZSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KG1lbnVJdGVtLCB7XG4gICAgICBvbkNsaWNrOiBvbk1lbnVJdGVtQ2xpY2ssXG4gICAgICBvbkJsdXI6IG9uTWVudUl0ZW1CbHVyLFxuICAgICAgb25Gb2N1czogb25NZW51SXRlbUZvY3VzLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgYWxpZ24gPSAnbGVmdCcsIHNpemUsIGhlYWRlciwgbnViYmluVG9wLCBob3ZlclBvcHVwLCBjaGlsZHJlbiwgc3R5bGUsXG4gICAgICBvbkZvY3VzLCBvbkJsdXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd25NZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1kcm9wZG93bicsXG4gICAgICAnc2xkcy1kcm9wZG93bi0tbWVudScsXG4gICAgICBgc2xkcy1kcm9wZG93bi0tJHthbGlnbn1gLFxuICAgICAge1xuICAgICAgICBbYHNsZHMtZHJvcGRvd24tLSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgICAgJ3NsZHMtZHJvcGRvd24tLW51YmJpbi10b3AnOiBudWJiaW5Ub3AsXG4gICAgICAgICdyZWFjdC1zbGRzLW5vLWhvdmVyLXBvcHVwJzogIWhvdmVyUG9wdXAsXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3RoaXMucHJvcHMuZHJvcGRvd25NZW51UmVmfVxuICAgICAgICBzdHlsZT17IHsgb3V0bGluZTogJ25vbmUnLCAuLi5zdHlsZSB9IH1cbiAgICAgICAgY2xhc3NOYW1lPXsgZHJvcGRvd25NZW51Q2xhc3NOYW1lcyB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICB0YWJJbmRleD0nLTEnXG4gICAgICAgIG9uRm9jdXM9eyBvbkZvY3VzIH1cbiAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgID5cbiAgICAgICAgeyBoZWFkZXIgPyA8TWVudUhlYWRlcj57IGhlYWRlciB9PC9NZW51SGVhZGVyPiA6IG51bGwgfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLWRyb3Bkb3duX19saXN0JyByb2xlPSdtZW51Jz5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgaXRlbSA9PiAoXG4gICAgICAgICAgICBpdGVtLnR5cGUgPT09IE1lbnVJdGVtIHx8IGl0ZW0udHlwZSA9PT0gUGlja2xpc3RJdGVtID8gdGhpcy5yZW5kZXJNZW51SXRlbShpdGVtKSA6IGl0ZW1cbiAgICAgICAgICApKSB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG5Ecm9wZG93bk1lbnUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG51YmJpblRvcDogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyUG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBvbk1lbnVJdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1lbnVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGRyb3Bkb3duTWVudVJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdfQ==