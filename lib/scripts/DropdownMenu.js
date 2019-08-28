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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6WyJEcm9wZG93bk1lbnVIZWFkZXIiLCJkaXZpZGVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJtZW51SGVhZGVyQ2xhc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJNZW51SGVhZGVyIiwiRHJvcGRvd25NZW51SXRlbSIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcmdzIiwiY3VycmVudEVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIml0ZW1FbCIsIm5leHRTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiYW5jaG9yRWwiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmb2N1cyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJsYWJlbCIsImljb24iLCJpY29uUmlnaHQiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwibWVudUl0ZW1DbGFzcyIsIm9uS2V5RG93biIsImJpbmQiLCJDb21wb25lbnQiLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIk1lbnVJdGVtIiwiRHJvcGRvd25NZW51Iiwib25NZW51Q2xvc2UiLCJtZW51SXRlbSIsIm9uTWVudUl0ZW1DbGljayIsIm9uTWVudUl0ZW1Gb2N1cyIsIm9uTWVudUl0ZW1CbHVyIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJhbGlnbiIsInNpemUiLCJoZWFkZXIiLCJudWJiaW5Ub3AiLCJob3ZlclBvcHVwIiwic3R5bGUiLCJkcm9wZG93bk1lbnVDbGFzc05hbWVzIiwiZHJvcGRvd25NZW51UmVmIiwib3V0bGluZSIsIkNoaWxkcmVuIiwibWFwIiwiaXRlbSIsInR5cGUiLCJQaWNrbGlzdEl0ZW0iLCJyZW5kZXJNZW51SXRlbSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QW1CLE9BQW5CLENBQWhCLENBRmdCO0FBR3ZCNkMsUUFBTS9DLG9CQUFVRSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FIaUI7QUFJdkI4QyxVQUFRaEQsb0JBQVVDLE1BSks7QUFLdkJnRCxhQUFXakQsb0JBQVVrQyxJQUxFO0FBTXZCZ0IsY0FBWWxELG9CQUFVa0MsSUFOQztBQU92Qk8sbUJBQWlCekMsb0JBQVVvQyxJQVBKO0FBUXZCRyxlQUFhdkMsb0JBQVVvQyxJQVJBO0FBU3ZCYixVQUFRdkIsb0JBQVVvQyxJQVRLO0FBVXZCWixXQUFTeEIsb0JBQVVvQyxJQVZJO0FBV3ZCdkMsWUFBVUcsb0JBQVVHLElBWEc7QUFZdkJrRCxtQkFBaUJyRCxvQkFBVW9DLElBWko7QUFhdkI7QUFDQWUsU0FBT25ELG9CQUFVNkQ7QUFkTSxDQUF6QiIsImZpbGUiOiJEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IFBpY2tsaXN0SXRlbSB9IGZyb20gJy4vUGlja2xpc3QnO1xuXG5leHBvcnQgY29uc3QgRHJvcGRvd25NZW51SGVhZGVyID0gKHsgZGl2aWRlciwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IG1lbnVIZWFkZXJDbGFzcyA9IGNsYXNzbmFtZXMoXG4gICAgJ3NsZHMtZHJvcGRvd25fX2hlYWRlcicsXG4gICAgeyBbYHNsZHMtaGFzLWRpdmlkZXItLSR7ZGl2aWRlcn0tc3BhY2VgXTogZGl2aWRlciB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWVudUhlYWRlckNsYXNzIH0+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+eyBjaGlsZHJlbiB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRHJvcGRvd25NZW51SGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXZpZGVyOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgTWVudUhlYWRlciA9IERyb3Bkb3duTWVudUhlYWRlcjtcblxuZXhwb3J0IGNsYXNzIERyb3Bkb3duTWVudUl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleURvd24oZSwgLi4uYXJncykge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHsgLy8gcmV0dXJuIG9yIHNwYWNlXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSwgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwIHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbGFiZWwsIGljb24sIGljb25SaWdodCwgc2VsZWN0ZWQsIGRpc2FibGVkLCBkaXZpZGVyLCB0YWJJbmRleCA9IDAsIG9uQ2xpY2ssXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW51SXRlbUNsYXNzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWRyb3Bkb3duX19pdGVtJywge1xuICAgICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgICBbYHNsZHMtaGFzLWRpdmlkZXItLSR7ZGl2aWRlcn0tc3BhY2VgXTogZGl2aWRlcixcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgbWVudUl0ZW1DbGFzcyB9IGRpc2FibGVkPXsgZGlzYWJsZWQgfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUgcmVhY3Qtc2xkcy1tZW51aXRlbSdcbiAgICAgICAgICByb2xlPSdtZW51aXRlbSdcbiAgICAgICAgICBhcmlhLWRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIHRhYkluZGV4PXsgZGlzYWJsZWQgPyBudWxsIDogdGFiSW5kZXggfVxuICAgICAgICAgIG9uQ2xpY2s9eyBkaXNhYmxlZCA/IG51bGwgOiBvbkNsaWNrIH1cbiAgICAgICAgICBvbktleURvd249eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkZvY3VzPXsgZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbkZvY3VzLmJpbmQodGhpcykgfVxuICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHsgaWNvbiA/IDxJY29uIGljb249eyBpY29uIH0gc2l6ZT0neC1zbWFsbCcgYWxpZ249J2xlZnQnIC8+IDogbnVsbCB9XG4gICAgICAgICAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgeyBpY29uUmlnaHQgPyA8SWNvbiBpY29uPXsgaWNvblJpZ2h0IH0gc2l6ZT0neC1zbWFsbCcgYWxpZ249J3JpZ2h0JyAvPiA6IG51bGwgfVxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuRHJvcGRvd25NZW51SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25SaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXZpZGVyOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gRHJvcGRvd25NZW51SXRlbTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbk1lbnVJdGVtQmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtRm9jdXMoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51Q2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1lbnVDbG9zZShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJNZW51SXRlbShtZW51SXRlbSkge1xuICAgIGNvbnN0IHsgb25DbGljaywgb25CbHVyLCBvbkZvY3VzLCAuLi5wcm9wcyB9ID0gbWVudUl0ZW0ucHJvcHM7XG4gICAgY29uc3Qgb25NZW51SXRlbUNsaWNrID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmIChvbkNsaWNrKSB7IG9uQ2xpY2soLi4uYXJncyk7IH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljayhwcm9wcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvbk1lbnVJdGVtRm9jdXMgPSAoZSkgPT4ge1xuICAgICAgaWYgKG9uRm9jdXMpIHsgb25Gb2N1cyhlKTsgfVxuICAgICAgdGhpcy5vbk1lbnVJdGVtRm9jdXMoZSk7XG4gICAgfTtcbiAgICBjb25zdCBvbk1lbnVJdGVtQmx1ciA9IChlKSA9PiB7XG4gICAgICBpZiAob25CbHVyKSB7IG9uQmx1cihlKTsgfVxuICAgICAgdGhpcy5vbk1lbnVJdGVtQmx1cihlKTtcbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQobWVudUl0ZW0sIHtcbiAgICAgIG9uQ2xpY2s6IG9uTWVudUl0ZW1DbGljayxcbiAgICAgIG9uQmx1cjogb25NZW51SXRlbUJsdXIsXG4gICAgICBvbkZvY3VzOiBvbk1lbnVJdGVtRm9jdXMsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBhbGlnbiA9ICdsZWZ0Jywgc2l6ZSwgaGVhZGVyLCBudWJiaW5Ub3AsIGhvdmVyUG9wdXAsIGNoaWxkcmVuLCBzdHlsZSxcbiAgICAgIG9uRm9jdXMsIG9uQmx1cixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93bk1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWRyb3Bkb3duJyxcbiAgICAgICdzbGRzLWRyb3Bkb3duLS1tZW51JyxcbiAgICAgIGBzbGRzLWRyb3Bkb3duLS0ke2FsaWdufWAsXG4gICAgICB7XG4gICAgICAgIFtgc2xkcy1kcm9wZG93bi0tJHtzaXplfWBdOiBzaXplLFxuICAgICAgICAnc2xkcy1kcm9wZG93bi0tbnViYmluLXRvcCc6IG51YmJpblRvcCxcbiAgICAgICAgJ3JlYWN0LXNsZHMtbm8taG92ZXItcG9wdXAnOiAhaG92ZXJQb3B1cCxcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5wcm9wcy5kcm9wZG93bk1lbnVSZWZ9XG4gICAgICAgIHN0eWxlPXsgeyBvdXRsaW5lOiAnbm9uZScsIC4uLnN0eWxlIH0gfVxuICAgICAgICBjbGFzc05hbWU9eyBkcm9wZG93bk1lbnVDbGFzc05hbWVzIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIHRhYkluZGV4PSctMSdcbiAgICAgICAgb25Gb2N1cz17IG9uRm9jdXMgfVxuICAgICAgICBvbkJsdXI9eyBvbkJsdXIgfVxuICAgICAgPlxuICAgICAgICB7IGhlYWRlciA/IDxNZW51SGVhZGVyPnsgaGVhZGVyIH08L01lbnVIZWFkZXI+IDogbnVsbCB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtZHJvcGRvd25fX2xpc3QnIHJvbGU9J21lbnUnPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBpdGVtID0+IChcbiAgICAgICAgICAgIGl0ZW0udHlwZSA9PT0gTWVudUl0ZW0gfHwgaXRlbS50eXBlID09PSBQaWNrbGlzdEl0ZW0gPyB0aGlzLnJlbmRlck1lbnVJdGVtKGl0ZW0pIDogaXRlbVxuICAgICAgICAgICkpIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnViYmluVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXJQb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uTWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZHJvcGRvd25NZW51UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl19