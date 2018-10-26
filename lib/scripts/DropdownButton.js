'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownButton = function (_Component) {
  (0, _inherits3.default)(DropdownButton, _Component);

  function DropdownButton() {
    (0, _classCallCheck3.default)(this, DropdownButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropdownButton.__proto__ || (0, _getPrototypeOf2.default)(DropdownButton)).call(this));

    _this.state = { opened: false };
    (0, _util.registerStyle)('no-hover-popup', [['.slds-dropdown-trigger:hover .slds-dropdown--menu.react-slds-no-hover-popup', '{ visibility: hidden; opacity: 0; }'], ['.slds-dropdown-trigger.react-slds-dropdown-opened .slds-dropdown--menu', '{ visibility: visible !important; opacity: 1 !important; }']]);
    return _this;
  }

  (0, _createClass3.default)(DropdownButton, [{
    key: 'onBlur',
    value: function onBlur() {
      var _this2 = this;

      setTimeout(function () {
        if (!_this2.isFocusedInComponent()) {
          _this2.setState({ opened: false });
          if (_this2.props.onBlur) {
            _this2.props.onBlur();
          }
        }
      }, 10);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _this3 = this;

      if (e.keyCode === 40) {
        // down
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.opened) {
          this.setState({ opened: true });
          if (this.props.onClick) {
            this.props.onClick(e);
          }
          setTimeout(function () {
            _this3.focusToTargetItemEl();
          }, 20);
        } else {
          this.focusToTargetItemEl();
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.setState({ opened: false });
      }
    }
  }, {
    key: 'onTriggerClick',
    value: function onTriggerClick() {
      var _this4 = this;

      if (!this.props.hoverPopup) {
        this.setState({ opened: !this.state.opened }, function () {
          if (_this4.state.opened) {
            (0, _assign2.default)(_this4.dropdown.style, _this4.getStyles().dropdownOffset);
          }
        });
      }
      if (this.props.onClick) {
        var _props;

        (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'onMenuItemClick',
    value: function onMenuItemClick() {
      var _this5 = this;

      if (!this.props.hoverPopup) {
        setTimeout(function () {
          var triggerElem = _this5.trigger;
          if (triggerElem) triggerElem.focus();
          _this5.setState({ opened: false });
        }, 10);
      }
      if (this.props.onMenuItemClick) {
        var _props2;

        (_props2 = this.props).onMenuItemClick.apply(_props2, arguments);
      }
    }
  }, {
    key: 'onMenuClose',
    value: function onMenuClose() {
      this.trigger.focus();
      this.setState({ opened: false });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var triggerOffset = (0, _util.offset)(this.trigger);
      var dropdownOffset = (0, _util.offset)(this.dropdown);
      var triggerPadding = 5;
      var nubbinHeight = 8;
      var top = -1 * (dropdownOffset.top - triggerOffset.top - this.trigger.offsetHeight - triggerPadding);
      return {
        dropdownOffset: {
          marginTop: top + (this.props.nubbinTop ? nubbinHeight : 0) + 'px'
        }
      };
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
    key: 'renderButton',
    value: function renderButton(_ref) {
      var _this6 = this;

      var grouped = _ref.grouped,
          isFirstInGroup = _ref.isFirstInGroup,
          isLastInGroup = _ref.isLastInGroup,
          props = (0, _objectWithoutProperties3.default)(_ref, ['grouped', 'isFirstInGroup', 'isLastInGroup']);

      var pprops = props;
      delete pprops.onMenuItemClick;
      var button = _react2.default.createElement(_Button2.default, (0, _extends3.default)({}, pprops, {
        'aria-haspopup': true,
        buttonRef: function buttonRef(node) {
          return _this6.trigger = node;
        },
        onClick: this.onTriggerClick.bind(this),
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.onBlur.bind(this)
      }));

      if (grouped) {
        var noneStyle = { display: 'none' };
        return _react2.default.createElement(
          'div',
          { className: 'slds-button-group' },
          isFirstInGroup ? null : _react2.default.createElement('button', { className: 'slds-button', style: noneStyle }),
          button,
          isLastInGroup ? null : _react2.default.createElement('button', { className: 'slds-button', style: noneStyle })
        );
      }

      return button;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _props3 = this.props,
          className = _props3.className,
          menuAlign = _props3.menuAlign,
          menuSize = _props3.menuSize,
          nubbinTop = _props3.nubbinTop,
          hoverPopup = _props3.hoverPopup,
          menuHeader = _props3.menuHeader,
          type = _props3.type,
          label = _props3.label,
          children = _props3.children,
          style = _props3.style,
          menuStyle = _props3.menuStyle,
          props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'menuAlign', 'menuSize', 'nubbinTop', 'hoverPopup', 'menuHeader', 'type', 'label', 'children', 'style', 'menuStyle']);
      var icon = this.props.icon;

      var dropdownClassNames = (0, _classnames2.default)(className, 'slds-dropdown-trigger', {
        'slds-button-space-left': !props.grouped,
        'react-slds-dropdown-opened': this.state.opened
      });
      var iconMore = null;
      if (!label && !icon) {
        icon = 'down';
      }
      if (label || type === 'icon-more') {
        iconMore = 'down';
      }

      var dropdown = _react2.default.createElement(
        _DropdownMenu2.default,
        {
          portalClassName: className,
          align: menuAlign,
          header: menuHeader,
          size: menuSize,
          nubbinTop: nubbinTop,
          hoverPopup: hoverPopup,
          dropdownMenuRef: function dropdownMenuRef(node) {
            return _this7.dropdown = node;
          },
          onMenuItemClick: this.onMenuItemClick.bind(this),
          onMenuClose: this.onMenuClose.bind(this),
          onBlur: this.onBlur.bind(this),
          style: (0, _assign2.default)({ transition: 'none' }, menuStyle)
        },
        children
      );

      return _react2.default.createElement(
        'div',
        { className: dropdownClassNames, style: style, ref: function ref(node) {
            return _this7.node = node;
          } },
        this.renderButton((0, _extends3.default)({ type: type, label: label, icon: icon, iconMore: iconMore }, props)),
        hoverPopup || this.state.opened ? dropdown : undefined
      );
    }
  }]);
  return DropdownButton;
}(_react.Component);

exports.default = DropdownButton;


DropdownButton.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.node,
  type: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  menuAlign: _propTypes2.default.oneOf(['left', 'center', 'right']),
  menuSize: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  menuHeader: _propTypes2.default.string,
  nubbinTop: _propTypes2.default.bool,
  hoverPopup: _propTypes2.default.bool,
  onBlur: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onMenuItemClick: _propTypes2.default.func,
  grouped: _propTypes2.default.bool,
  isFirstInGroup: _propTypes2.default.bool,
  isLastInGroup: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object,
  menuStyle: _propTypes2.default.object
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnV0dG9uIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRUaW1lb3V0IiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25CbHVyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2siLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwiaG92ZXJQb3B1cCIsImRyb3Bkb3duIiwic3R5bGUiLCJnZXRTdHlsZXMiLCJkcm9wZG93bk9mZnNldCIsInRyaWdnZXJFbGVtIiwidHJpZ2dlciIsImZvY3VzIiwib25NZW51SXRlbUNsaWNrIiwidHJpZ2dlck9mZnNldCIsInRyaWdnZXJQYWRkaW5nIiwibnViYmluSGVpZ2h0IiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luVG9wIiwibnViYmluVG9wIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlIiwiZHJvcGRvd25FbCIsImZpcnN0SXRlbUVsIiwicXVlcnlTZWxlY3RvciIsImdyb3VwZWQiLCJpc0ZpcnN0SW5Hcm91cCIsImlzTGFzdEluR3JvdXAiLCJwcHJvcHMiLCJidXR0b24iLCJvblRyaWdnZXJDbGljayIsImJpbmQiLCJvbktleURvd24iLCJub25lU3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwibWVudUFsaWduIiwibWVudVNpemUiLCJtZW51SGVhZGVyIiwidHlwZSIsImxhYmVsIiwiY2hpbGRyZW4iLCJtZW51U3R5bGUiLCJpY29uIiwiZHJvcGRvd25DbGFzc05hbWVzIiwiaWNvbk1vcmUiLCJvbk1lbnVDbG9zZSIsInRyYW5zaXRpb24iLCJyZW5kZXJCdXR0b24iLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBp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R0FBNkM4QztBQUZqRCxPQURGO0FBTUQ7Ozs7O2tCQTFMa0I3RCxjOzs7QUE4THJCQSxlQUFlOEQsU0FBZixHQUEyQjtBQUN6QmYsYUFBVyxvQkFBVWdCLE1BREk7QUFFekJYLFNBQU8sb0JBQVVuQixJQUZRO0FBR3pCa0IsUUFBTSxvQkFBVVksTUFIUztBQUl6QlIsUUFBTSxvQkFBVVEsTUFKUztBQUt6QmYsYUFBVyxvQkFBVWdCLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFoQixDQUxjO0FBTXpCZixZQUFVLG9CQUFVZSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FOZTtBQU96QmQsY0FBWSxvQkFBVWEsTUFQRztBQVF6QmxDLGFBQVcsb0JBQVVvQyxJQVJJO0FBU3pCbkQsY0FBWSxvQkFBVW1ELElBVEc7QUFVekIxRCxVQUFRLG9CQUFVMkQsSUFWTztBQVd6QnRELFdBQVMsb0JBQVVzRCxJQVhNO0FBWXpCNUMsbUJBQWlCLG9CQUFVNEMsSUFaRjtBQWF6QjdCLFdBQVMsb0JBQVU0QixJQWJNO0FBY3pCM0Isa0JBQWdCLG9CQUFVMkIsSUFkRDtBQWV6QjFCLGlCQUFlLG9CQUFVMEIsSUFmQTtBQWdCekJaLFlBQVUsb0JBQVVwQixJQWhCSztBQWlCekI7QUFDQWpCLFNBQU8sb0JBQVVtRCxNQWxCUTtBQW1CekJiLGFBQVcsb0JBQVVhO0FBbkJJLENBQTNCIiwiZmlsZSI6IkRyb3Bkb3duQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlLCBpc0VsSW5DaGlsZHJlbiwgb2Zmc2V0IH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25CdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfTtcbiAgICByZWdpc3RlclN0eWxlKCduby1ob3Zlci1wb3B1cCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXI6aG92ZXIgLnNsZHMtZHJvcGRvd24tLW1lbnUucmVhY3Qtc2xkcy1uby1ob3Zlci1wb3B1cCcsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IGhpZGRlbjsgb3BhY2l0eTogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlci5yZWFjdC1zbGRzLWRyb3Bkb3duLW9wZW5lZCAuc2xkcy1kcm9wZG93bi0tbWVudScsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVHJpZ2dlckNsaWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0sICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyb3Bkb3duLnN0eWxlLCB0aGlzLmdldFN0eWxlcygpLmRyb3Bkb3duT2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2soLi4uYXJncykge1xuICAgIGlmICghdGhpcy5wcm9wcy5ob3ZlclBvcHVwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdHJpZ2dlckVsZW0gPSB0aGlzLnRyaWdnZXI7XG4gICAgICAgIGlmICh0cmlnZ2VyRWxlbSkgdHJpZ2dlckVsZW0uZm9jdXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2soLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51Q2xvc2UoKSB7XG4gICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH1cblxuICBnZXRTdHlsZXMoKSB7XG4gICAgY29uc3QgdHJpZ2dlck9mZnNldCA9IG9mZnNldCh0aGlzLnRyaWdnZXIpO1xuICAgIGNvbnN0IGRyb3Bkb3duT2Zmc2V0ID0gb2Zmc2V0KHRoaXMuZHJvcGRvd24pO1xuICAgIGNvbnN0IHRyaWdnZXJQYWRkaW5nID0gNTtcbiAgICBjb25zdCBudWJiaW5IZWlnaHQgPSA4O1xuICAgIGNvbnN0IHRvcCA9IC0xICpcbiAgICAgIChkcm9wZG93bk9mZnNldC50b3AgLSB0cmlnZ2VyT2Zmc2V0LnRvcCAtIHRoaXMudHJpZ2dlci5vZmZzZXRIZWlnaHQgLSB0cmlnZ2VyUGFkZGluZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyb3Bkb3duT2Zmc2V0OiB7XG4gICAgICAgIG1hcmdpblRvcDogYCR7dG9wICsgKHRoaXMucHJvcHMubnViYmluVG9wID8gbnViYmluSGVpZ2h0IDogMCl9cHhgLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fCBpc0VsSW5DaGlsZHJlbih0aGlzLmRyb3Bkb3duLCB0YXJnZXRFbCk7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGlmICghZHJvcGRvd25FbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckJ1dHRvbih7IGdyb3VwZWQsIGlzRmlyc3RJbkdyb3VwLCBpc0xhc3RJbkdyb3VwLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgcHByb3BzID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5vbk1lbnVJdGVtQ2xpY2s7XG4gICAgY29uc3QgYnV0dG9uID0gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICAgIGFyaWEtaGFzcG9wdXBcbiAgICAgICAgYnV0dG9uUmVmPXtub2RlID0+ICh0aGlzLnRyaWdnZXIgPSBub2RlKX1cbiAgICAgICAgb25DbGljaz17IHRoaXMub25UcmlnZ2VyQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGlmIChncm91cGVkKSB7XG4gICAgICBjb25zdCBub25lU3R5bGUgPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYnV0dG9uLWdyb3VwJz5cbiAgICAgICAgICB7IGlzRmlyc3RJbkdyb3VwID8gbnVsbCA6IDxidXR0b24gY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbicgc3R5bGU9eyBub25lU3R5bGUgfSAvPiB9XG4gICAgICAgICAgeyBidXR0b24gfVxuICAgICAgICAgIHsgaXNMYXN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0gLz4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIG1lbnVBbGlnbiwgbWVudVNpemUsIG51YmJpblRvcCwgaG92ZXJQb3B1cCwgbWVudUhlYWRlciwgdHlwZSxcbiAgICAgIGxhYmVsLCBjaGlsZHJlbiwgc3R5bGUsIG1lbnVTdHlsZSwgLi4ucHJvcHNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7IGljb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAge1xuICAgICAgICAnc2xkcy1idXR0b24tc3BhY2UtbGVmdCc6ICFwcm9wcy5ncm91cGVkLFxuICAgICAgICAncmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCxcbiAgICAgIH1cbiAgICApO1xuICAgIGxldCBpY29uTW9yZSA9IG51bGw7XG4gICAgaWYgKCFsYWJlbCAmJiAhaWNvbikge1xuICAgICAgaWNvbiA9ICdkb3duJztcbiAgICB9XG4gICAgaWYgKGxhYmVsIHx8IHR5cGUgPT09ICdpY29uLW1vcmUnKSB7XG4gICAgICBpY29uTW9yZSA9ICdkb3duJztcbiAgICB9XG5cbiAgICBjb25zdCBkcm9wZG93biA9IChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXsgY2xhc3NOYW1lIH1cbiAgICAgICAgYWxpZ249eyBtZW51QWxpZ24gfVxuICAgICAgICBoZWFkZXI9eyBtZW51SGVhZGVyIH1cbiAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgbnViYmluVG9wPXsgbnViYmluVG9wIH1cbiAgICAgICAgaG92ZXJQb3B1cD17IGhvdmVyUG9wdXAgfVxuICAgICAgICBkcm9wZG93bk1lbnVSZWY9e25vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKX1cbiAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vbk1lbnVDbG9zZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgIHN0eWxlPXsgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7IHRyYW5zaXRpb246ICdub25lJyB9LFxuICAgICAgICAgIG1lbnVTdHlsZSkgfVxuICAgICAgPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBkcm9wZG93bkNsYXNzTmFtZXMgfSBzdHlsZT17c3R5bGV9IHJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9PlxuICAgICAgICB7IHRoaXMucmVuZGVyQnV0dG9uKHsgdHlwZSwgbGFiZWwsIGljb24sIGljb25Nb3JlLCAuLi5wcm9wcyB9KSB9XG4gICAgICAgIHsgaG92ZXJQb3B1cCB8fCB0aGlzLnN0YXRlLm9wZW5lZCA/IGRyb3Bkb3duIDogdW5kZWZpbmVkIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Ecm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBtZW51SGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudWJiaW5Ub3A6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0ZpcnN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTGFzdEluR3JvdXA6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl19