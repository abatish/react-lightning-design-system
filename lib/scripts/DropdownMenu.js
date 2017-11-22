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
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  header: _propTypes2.default.string,
  nubbinTop: _propTypes2.default.bool,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnVIZWFkZXIiLCJkaXZpZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZW51SGVhZGVyQ2xhc3MiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJNZW51SGVhZGVyIiwiRHJvcGRvd25NZW51SXRlbSIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmdzIiwiY3VycmVudEVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIml0ZW1FbCIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImljb24iLCJpY29uUmlnaHQiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwibWVudUl0ZW1DbGFzcyIsIm9uS2V5RG93biIsImJpbmQiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIk1lbnVJdGVtIiwiRHJvcGRvd25NZW51Iiwib25NZW51Q2xvc2UiLCJtZW51SXRlbSIsIm9uTWVudUl0ZW1DbGljayIsIm9uTWVudUl0ZW1Gb2N1cyIsIm9uTWVudUl0ZW1CbHVyIiwiY2xvbmVFbGVtZW50IiwiYWxpZ24iLCJzaXplIiwiaGVhZGVyIiwibnViYmluVG9wIiwiaG92ZXJQb3B1cCIsInN0eWxlIiwiZHJvcGRvd25NZW51Q2xhc3NOYW1lcyIsImRyb3Bkb3duTWVudVJlZiIsIm91dGxpbmUiLCJDaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJ0eXBlIiwicmVuZGVyTWVudUl0ZW0iLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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QkFBVWQsSUFMRTtBQU12QmUsY0FBWSxvQkFBVWYsSUFOQztBQU92Qk8sbUJBQWlCLG9CQUFVTCxJQVBKO0FBUXZCRyxlQUFhLG9CQUFVSCxJQVJBO0FBU3ZCWixVQUFRLG9CQUFVWSxJQVRLO0FBVXZCWCxXQUFTLG9CQUFVVyxJQVZJO0FBV3ZCckMsWUFBVSxvQkFBVUssSUFYRztBQVl2QmdELG1CQUFpQixvQkFBVWhCLElBWko7QUFhdkI7QUFDQWMsU0FBTyxvQkFBVVM7QUFkTSxDQUF6QiIsImZpbGUiOiJEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IFBpY2tsaXN0SXRlbSB9IGZyb20gJy4vUGlja2xpc3QnO1xuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SGVhZGVyID0gKHsgZGl2aWRlciwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IG1lbnVIZWFkZXJDbGFzcyA9IGNsYXNzbmFtZXMoXG4gICAgJ3NsZHMtZHJvcGRvd25fX2hlYWRlcicsXG4gICAgeyBbYHNsZHMtaGFzLWRpdmlkZXItLSR7ZGl2aWRlcn0tc3BhY2VgXTogZGl2aWRlciB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWVudUhlYWRlckNsYXNzIH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+eyBjaGlsZHJlbiB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRHJvcGRvd25NZW51SGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXZpZGVyOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgTWVudUhlYWRlciA9IERyb3Bkb3duTWVudUhlYWRlcjtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleURvd24oZSwgLi4uYXJncykge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHsgLy8gcmV0dXJuIG9yIHNwYWNlXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwIHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbGFiZWwsIGljb24sIGljb25SaWdodCwgc2VsZWN0ZWQsIGRpc2FibGVkLCBkaXZpZGVyLCB0YWJJbmRleCA9IDAsIG9uQ2xpY2ssXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51SXRlbUNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWRyb3Bkb3duX19pdGVtJywge1xuICAgICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgICBbYHNsZHMtaGFzLWRpdmlkZXItLSR7ZGl2aWRlcn0tc3BhY2VgXTogZGl2aWRlcixcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgbWVudUl0ZW1DbGFzcyB9IGRpc2FibGVkPXsgZGlzYWJsZWQgfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUgcmVhY3Qtc2xkcy1tZW51aXRlbSdcbiAgICAgICAgICByb2xlPSdtZW51aXRlbSdcbiAgICAgICAgICBhcmlhLWRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIHRhYkluZGV4PXsgZGlzYWJsZWQgPyBudWxsIDogdGFiSW5kZXggfVxuICAgICAgICAgIG9uQ2xpY2s9eyBkaXNhYmxlZCA/IG51bGwgOiBvbkNsaWNrIH1cbiAgICAgICAgICBvbktleURvd249eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkZvY3VzPXsgZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbkZvY3VzLmJpbmQodGhpcykgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHsgaWNvbiA/IDxJY29uIGljb249eyBpY29uIH0gc2l6ZT0neC1zbWFsbCcgYWxpZ249J2xlZnQnIC8+IDogbnVsbCB9XG4gICAgICAgICAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgeyBpY29uUmlnaHQgPyA8SWNvbiBpY29uPXsgaWNvblJpZ2h0IH0gc2l6ZT0neC1zbWFsbCcgYWxpZ249J3JpZ2h0JyAvPiA6IG51bGwgfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuRHJvcGRvd25NZW51SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25SaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXZpZGVyOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gRHJvcGRvd25NZW51SXRlbTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbk1lbnVJdGVtQmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51Q2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1lbnVJdGVtKG1lbnVJdGVtKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBvbkJsdXIsIG9uRm9jdXMsIC4uLnByb3BzIH0gPSBtZW51SXRlbS5wcm9wcztcbiAgICBjb25zdCBvbk1lbnVJdGVtQ2xpY2sgPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKG9uQ2xpY2spIHsgb25DbGljayguLi5hcmdzKTsgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKHByb3BzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1Gb2N1cyA9IChlKSA9PiB7XG4gICAgICBpZiAob25Gb2N1cykgeyBvbkZvY3VzKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1Gb2N1cyhlKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uTWVudUl0ZW1CbHVyID0gKGUpID0+IHtcbiAgICAgIGlmIChvbkJsdXIpIHsgb25CbHVyKGUpOyB9XG4gICAgICB0aGlzLm9uTWVudUl0ZW1CbHVyKGUpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChtZW51SXRlbSwge1xuICAgICAgb25DbGljazogb25NZW51SXRlbUNsaWNrLFxuICAgICAgb25CbHVyOiBvbk1lbnVJdGVtQmx1cixcbiAgICAgIG9uRm9jdXM6IG9uTWVudUl0ZW1Gb2N1cyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIGFsaWduID0gJ2xlZnQnLCBzaXplLCBoZWFkZXIsIG51YmJpblRvcCwgaG92ZXJQb3B1cCwgY2hpbGRyZW4sIHN0eWxlLFxuICAgICAgb25Gb2N1cywgb25CbHVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duTWVudUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxuICAgICAgJ3NsZHMtZHJvcGRvd24tLW1lbnUnLFxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7YWxpZ259YCxcbiAgICAgIHtcbiAgICAgICAgW2BzbGRzLWRyb3Bkb3duLS0ke3NpemV9YF06IHNpemUsXG4gICAgICAgICdzbGRzLWRyb3Bkb3duLS1udWJiaW4tdG9wJzogbnViYmluVG9wLFxuICAgICAgICAncmVhY3Qtc2xkcy1uby1ob3Zlci1wb3B1cCc6ICFob3ZlclBvcHVwLFxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXt0aGlzLnByb3BzLmRyb3Bkb3duTWVudVJlZn1cbiAgICAgICAgc3R5bGU9eyB7IG91dGxpbmU6ICdub25lJywgLi4uc3R5bGUgfSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGRyb3Bkb3duTWVudUNsYXNzTmFtZXMgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgdGFiSW5kZXg9Jy0xJ1xuICAgICAgICBvbkZvY3VzPXsgb25Gb2N1cyB9XG4gICAgICAgIG9uQmx1cj17IG9uQmx1ciB9XG4gICAgICA+XG4gICAgICAgIHsgaGVhZGVyID8gPE1lbnVIZWFkZXI+eyBoZWFkZXIgfTwvTWVudUhlYWRlcj4gOiBudWxsIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1kcm9wZG93bl9fbGlzdCcgcm9sZT0nbWVudSc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGl0ZW0gPT4gKFxuICAgICAgICAgICAgaXRlbS50eXBlID09PSBNZW51SXRlbSB8fCBpdGVtLnR5cGUgPT09IFBpY2tsaXN0SXRlbSA/IHRoaXMucmVuZGVyTWVudUl0ZW0oaXRlbSkgOiBpdGVtXG4gICAgICAgICAgKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudWJiaW5Ub3A6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25NZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51Q2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkcm9wZG93bk1lbnVSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iXX0=