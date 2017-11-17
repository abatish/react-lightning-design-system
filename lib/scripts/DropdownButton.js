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
      return (0, _util.isElInChildren)(this.node, document.activeElement);
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
          _props3$menuAlign = _props3.menuAlign,
          menuAlign = _props3$menuAlign === undefined ? 'left' : _props3$menuAlign,
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

      return _react2.default.createElement(
        'div',
        { className: dropdownClassNames, style: style, ref: function ref(node) {
            return _this7.node = node;
          } },
        this.renderButton((0, _extends3.default)({ type: type, label: label, icon: icon, iconMore: iconMore }, props)),
        this.state.opened || hoverPopup ? _react2.default.createElement(
          _DropdownMenu2.default,
          {
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
        ) : null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnV0dG9uIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRUaW1lb3V0IiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25CbHVyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2siLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwiaG92ZXJQb3B1cCIsImRyb3Bkb3duIiwic3R5bGUiLCJnZXRTdHlsZXMiLCJkcm9wZG93bk9mZnNldCIsInRyaWdnZXJFbGVtIiwidHJpZ2dlciIsImZvY3VzIiwib25NZW51SXRlbUNsaWNrIiwidHJpZ2dlck9mZnNldCIsInRyaWdnZXJQYWRkaW5nIiwibnViYmluSGVpZ2h0IiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luVG9wIiwibnViYmluVG9wIiwibm9kZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImRyb3Bkb3duRWwiLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cGVkIiwiaXNGaXJzdEluR3JvdXAiLCJpc0xhc3RJbkdyb3VwIiwicHByb3BzIiwiYnV0dG9uIiwib25UcmlnZ2VyQ2xpY2siLCJiaW5kIiwib25LZXlEb3duIiwibm9uZVN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsIm1lbnVBbGlnbiIsIm1lbnVTaXplIiwibWVudUhlYWRlciIsInR5cGUiLCJsYWJlbCIsImNoaWxkcmVuIiwibWVudVN0eWxlIiwiaWNvbiIsImRyb3Bkb3duQ2xhc3NOYW1lcyIsImljb25Nb3JlIiwicmVuZGVyQnV0dG9uIiwib25NZW51Q2xvc2UiLCJ0cmFuc2l0aW9uIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJib29sIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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SXpCUCxRQUFNLG9CQUFVTyxNQUpTO0FBS3pCZCxhQUFXLG9CQUFVZSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FMYztBQU16QmQsWUFBVSxvQkFBVWMsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBTmU7QUFPekJiLGNBQVksb0JBQVVZLE1BUEc7QUFRekJoQyxhQUFXLG9CQUFVa0MsSUFSSTtBQVN6QmpELGNBQVksb0JBQVVpRCxJQVRHO0FBVXpCeEQsVUFBUSxvQkFBVXlELElBVk87QUFXekJwRCxXQUFTLG9CQUFVb0QsSUFYTTtBQVl6QjFDLG1CQUFpQixvQkFBVTBDLElBWkY7QUFhekI1QixXQUFTLG9CQUFVMkIsSUFiTTtBQWN6QjFCLGtCQUFnQixvQkFBVTBCLElBZEQ7QUFlekJ6QixpQkFBZSxvQkFBVXlCLElBZkE7QUFnQnpCWCxZQUFVLG9CQUFVdEIsSUFoQks7QUFpQnpCO0FBQ0FkLFNBQU8sb0JBQVVpRCxNQWxCUTtBQW1CekJaLGFBQVcsb0JBQVVZO0FBbkJJLENBQTNCIiwiZmlsZSI6IkRyb3Bkb3duQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlLCBpc0VsSW5DaGlsZHJlbiwgb2Zmc2V0IH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25CdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfTtcbiAgICByZWdpc3RlclN0eWxlKCduby1ob3Zlci1wb3B1cCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXI6aG92ZXIgLnNsZHMtZHJvcGRvd24tLW1lbnUucmVhY3Qtc2xkcy1uby1ob3Zlci1wb3B1cCcsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IGhpZGRlbjsgb3BhY2l0eTogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlci5yZWFjdC1zbGRzLWRyb3Bkb3duLW9wZW5lZCAuc2xkcy1kcm9wZG93bi0tbWVudScsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVHJpZ2dlckNsaWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0sICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRyb3Bkb3duLnN0eWxlLCB0aGlzLmdldFN0eWxlcygpLmRyb3Bkb3duT2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2soLi4uYXJncykge1xuICAgIGlmICghdGhpcy5wcm9wcy5ob3ZlclBvcHVwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdHJpZ2dlckVsZW0gPSB0aGlzLnRyaWdnZXI7XG4gICAgICAgIGlmICh0cmlnZ2VyRWxlbSkgdHJpZ2dlckVsZW0uZm9jdXMoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2soLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51Q2xvc2UoKSB7XG4gICAgdGhpcy50cmlnZ2VyLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH1cblxuICBnZXRTdHlsZXMoKSB7XG4gICAgY29uc3QgdHJpZ2dlck9mZnNldCA9IG9mZnNldCh0aGlzLnRyaWdnZXIpO1xuICAgIGNvbnN0IGRyb3Bkb3duT2Zmc2V0ID0gb2Zmc2V0KHRoaXMuZHJvcGRvd24pO1xuICAgIGNvbnN0IHRyaWdnZXJQYWRkaW5nID0gNTtcbiAgICBjb25zdCBudWJiaW5IZWlnaHQgPSA4O1xuICAgIGNvbnN0IHRvcCA9IC0xICpcbiAgICAgIChkcm9wZG93bk9mZnNldC50b3AgLSB0cmlnZ2VyT2Zmc2V0LnRvcCAtIHRoaXMudHJpZ2dlci5vZmZzZXRIZWlnaHQgLSB0cmlnZ2VyUGFkZGluZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRyb3Bkb3duT2Zmc2V0OiB7XG4gICAgICAgIG1hcmdpblRvcDogYCR7dG9wICsgKHRoaXMucHJvcHMubnViYmluVG9wID8gbnViYmluSGVpZ2h0IDogMCl9cHhgLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHRoaXMubm9kZSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKCkge1xuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSB0aGlzLmRyb3Bkb3duO1xuICAgIGNvbnN0IGZpcnN0SXRlbUVsID1cbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnNsZHMtaXMtc2VsZWN0ZWQgPiAucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKSB8fFxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcbiAgICBpZiAoZmlyc3RJdGVtRWwpIHtcbiAgICAgIGZpcnN0SXRlbUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQnV0dG9uKHsgZ3JvdXBlZCwgaXNGaXJzdEluR3JvdXAsIGlzTGFzdEluR3JvdXAsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBwcHJvcHMgPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uTWVudUl0ZW1DbGljaztcbiAgICBjb25zdCBidXR0b24gPSAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgYXJpYS1oYXNwb3B1cFxuICAgICAgICBidXR0b25SZWY9e25vZGUgPT4gKHRoaXMudHJpZ2dlciA9IG5vZGUpfVxuICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblRyaWdnZXJDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgaWYgKGdyb3VwZWQpIHtcbiAgICAgIGNvbnN0IG5vbmVTdHlsZSA9IHsgZGlzcGxheTogJ25vbmUnIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1idXR0b24tZ3JvdXAnPlxuICAgICAgICAgIHsgaXNGaXJzdEluR3JvdXAgPyBudWxsIDogPGJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtYnV0dG9uJyBzdHlsZT17IG5vbmVTdHlsZSB9IC8+IH1cbiAgICAgICAgICB7IGJ1dHRvbiB9XG4gICAgICAgICAgeyBpc0xhc3RJbkdyb3VwID8gbnVsbCA6IDxidXR0b24gY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbicgc3R5bGU9eyBub25lU3R5bGUgfSAvPiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbWVudUFsaWduID0gJ2xlZnQnLCBtZW51U2l6ZSwgbnViYmluVG9wLCBob3ZlclBvcHVwLCBtZW51SGVhZGVyLCB0eXBlLFxuICAgICAgbGFiZWwsIGNoaWxkcmVuLCBzdHlsZSwgbWVudVN0eWxlLCAuLi5wcm9wc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgaWNvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZHJvcGRvd24tdHJpZ2dlcicsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWJ1dHRvbi1zcGFjZS1sZWZ0JzogIXByb3BzLmdyb3VwZWQsXG4gICAgICAgICdyZWFjdC1zbGRzLWRyb3Bkb3duLW9wZW5lZCc6IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgfVxuICAgICk7XG4gICAgbGV0IGljb25Nb3JlID0gbnVsbDtcbiAgICBpZiAoIWxhYmVsICYmICFpY29uKSB7XG4gICAgICBpY29uID0gJ2Rvd24nO1xuICAgIH1cbiAgICBpZiAobGFiZWwgfHwgdHlwZSA9PT0gJ2ljb24tbW9yZScpIHtcbiAgICAgIGljb25Nb3JlID0gJ2Rvd24nO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGRyb3Bkb3duQ2xhc3NOYW1lcyB9IHN0eWxlPXtzdHlsZX0gcmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJCdXR0b24oeyB0eXBlLCBsYWJlbCwgaWNvbiwgaWNvbk1vcmUsIC4uLnByb3BzIH0pIH1cbiAgICAgICAgeyB0aGlzLnN0YXRlLm9wZW5lZCB8fCBob3ZlclBvcHVwID9cbiAgICAgICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgICAgICBhbGlnbj17IG1lbnVBbGlnbiB9XG4gICAgICAgICAgICBoZWFkZXI9eyBtZW51SGVhZGVyIH1cbiAgICAgICAgICAgIHNpemU9eyBtZW51U2l6ZSB9XG4gICAgICAgICAgICBudWJiaW5Ub3A9eyBudWJiaW5Ub3AgfVxuICAgICAgICAgICAgaG92ZXJQb3B1cD17IGhvdmVyUG9wdXAgfVxuICAgICAgICAgICAgZHJvcGRvd25NZW51UmVmPXtub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSl9XG4gICAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vbk1lbnVDbG9zZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgc3R5bGU9eyBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7IHRyYW5zaXRpb246ICdub25lJyB9LFxuICAgICAgICAgICAgICBtZW51U3R5bGUpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudT4gOiBudWxsIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Ecm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBtZW51SGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudWJiaW5Ub3A6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0ZpcnN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTGFzdEluR3JvdXA6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtZW51U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl19