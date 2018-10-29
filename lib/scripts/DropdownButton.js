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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnV0dG9uIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRUaW1lb3V0IiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25CbHVyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2siLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwiaG92ZXJQb3B1cCIsImRyb3Bkb3duIiwic3R5bGUiLCJnZXRTdHlsZXMiLCJkcm9wZG93bk9mZnNldCIsInRyaWdnZXJFbGVtIiwidHJpZ2dlciIsImZvY3VzIiwib25NZW51SXRlbUNsaWNrIiwidHJpZ2dlck9mZnNldCIsInRyaWdnZXJQYWRkaW5nIiwibnViYmluSGVpZ2h0IiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luVG9wIiwibnViYmluVG9wIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJub2RlIiwiZHJvcGRvd25FbCIsImZpcnN0SXRlbUVsIiwicXVlcnlTZWxlY3RvciIsImdyb3VwZWQiLCJpc0ZpcnN0SW5Hcm91cCIsImlzTGFzdEluR3JvdXAiLCJwcHJvcHMiLCJidXR0b24iLCJvblRyaWdnZXJDbGljayIsImJpbmQiLCJvbktleURvd24iLCJub25lU3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwibWVudUFsaWduIiwibWVudVNpemUiLCJtZW51SGVhZGVyIiwidHlwZSIsImxhYmVsIiwiY2hpbGRyZW4iLCJtZW51U3R5bGUiLCJpY29uIiwiZHJvcGRvd25DbGFzc05hbWVzIiwiaWNvbk1vcmUiLCJvbk1lbnVDbG9zZSIsInRyYW5zaXRpb24iLCJyZW5kZXJCdXR0b24iLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wi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c0JBQWMsS0FBS2IsS0FBTCxDQUFXQyxNQUF6QixHQUFrQ2EsUUFBbEMsR0FBNkM4QztBQUZqRCxPQURGO0FBTUQ7OztFQTFMeUNDLGdCOztrQkFBdkI5RCxjOzs7QUE4THJCQSxlQUFlK0QsU0FBZixHQUEyQjtBQUN6QmhCLGFBQVdpQixvQkFBVUMsTUFESTtBQUV6QmIsU0FBT1ksb0JBQVUvQixJQUZRO0FBR3pCa0IsUUFBTWEsb0JBQVVDLE1BSFM7QUFJekJWLFFBQU1TLG9CQUFVQyxNQUpTO0FBS3pCakIsYUFBV2dCLG9CQUFVRSxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBaEIsQ0FMYztBQU16QmpCLFlBQVVlLG9CQUFVRSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FOZTtBQU96QmhCLGNBQVljLG9CQUFVQyxNQVBHO0FBUXpCcEMsYUFBV21DLG9CQUFVRyxJQVJJO0FBU3pCckQsY0FBWWtELG9CQUFVRyxJQVRHO0FBVXpCNUQsVUFBUXlELG9CQUFVSSxJQVZPO0FBV3pCeEQsV0FBU29ELG9CQUFVSSxJQVhNO0FBWXpCOUMsbUJBQWlCMEMsb0JBQVVJLElBWkY7QUFhekIvQixXQUFTMkIsb0JBQVVHLElBYk07QUFjekI3QixrQkFBZ0IwQixvQkFBVUcsSUFkRDtBQWV6QjVCLGlCQUFleUIsb0JBQVVHLElBZkE7QUFnQnpCZCxZQUFVVyxvQkFBVS9CLElBaEJLO0FBaUJ6QjtBQUNBakIsU0FBT2dELG9CQUFVSyxNQWxCUTtBQW1CekJmLGFBQVdVLG9CQUFVSztBQW5CSSxDQUEzQiIsImZpbGUiOiJEcm9wZG93bkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSwgaXNFbEluQ2hpbGRyZW4sIG9mZnNldCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuZWQ6IGZhbHNlIH07XG4gICAgcmVnaXN0ZXJTdHlsZSgnbm8taG92ZXItcG9wdXAnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1kcm9wZG93bi10cmlnZ2VyOmhvdmVyIC5zbGRzLWRyb3Bkb3duLS1tZW51LnJlYWN0LXNsZHMtbm8taG92ZXItcG9wdXAnLFxuICAgICAgICAneyB2aXNpYmlsaXR5OiBoaWRkZW47IG9wYWNpdHk6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXIucmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQgLnNsZHMtZHJvcGRvd24tLW1lbnUnLFxuICAgICAgICAneyB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7IG9wYWNpdHk6IDEgIWltcG9ydGFudDsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblRyaWdnZXJDbGljayguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmhvdmVyUG9wdXApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9LCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kcm9wZG93bi5zdHlsZSwgdGhpcy5nZXRTdHlsZXMoKS5kcm9wZG93bk9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51SXRlbUNsaWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtID0gdGhpcy50cmlnZ2VyO1xuICAgICAgICBpZiAodHJpZ2dlckVsZW0pIHRyaWdnZXJFbGVtLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUNsb3NlKCkge1xuICAgIHRoaXMudHJpZ2dlci5mb2N1cygpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICB9XG5cbiAgZ2V0U3R5bGVzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJPZmZzZXQgPSBvZmZzZXQodGhpcy50cmlnZ2VyKTtcbiAgICBjb25zdCBkcm9wZG93bk9mZnNldCA9IG9mZnNldCh0aGlzLmRyb3Bkb3duKTtcbiAgICBjb25zdCB0cmlnZ2VyUGFkZGluZyA9IDU7XG4gICAgY29uc3QgbnViYmluSGVpZ2h0ID0gODtcbiAgICBjb25zdCB0b3AgPSAtMSAqXG4gICAgICAoZHJvcGRvd25PZmZzZXQudG9wIC0gdHJpZ2dlck9mZnNldC50b3AgLSB0aGlzLnRyaWdnZXIub2Zmc2V0SGVpZ2h0IC0gdHJpZ2dlclBhZGRpbmcpO1xuICAgIHJldHVybiB7XG4gICAgICBkcm9wZG93bk9mZnNldDoge1xuICAgICAgICBtYXJnaW5Ub3A6IGAke3RvcCArICh0aGlzLnByb3BzLm51YmJpblRvcCA/IG51YmJpbkhlaWdodCA6IDApfXB4YCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCB0YXJnZXRFbCkgfHwgaXNFbEluQ2hpbGRyZW4odGhpcy5kcm9wZG93biwgdGFyZ2V0RWwpO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gdGhpcy5kcm9wZG93bjtcbiAgICBpZiAoIWRyb3Bkb3duRWwpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJCdXR0b24oeyBncm91cGVkLCBpc0ZpcnN0SW5Hcm91cCwgaXNMYXN0SW5Hcm91cCwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25NZW51SXRlbUNsaWNrO1xuICAgIGNvbnN0IGJ1dHRvbiA9IChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgIGJ1dHRvblJlZj17bm9kZSA9PiAodGhpcy50cmlnZ2VyID0gbm9kZSl9XG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uVHJpZ2dlckNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBpZiAoZ3JvdXBlZCkge1xuICAgICAgY29uc3Qgbm9uZVN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbi1ncm91cCc+XG4gICAgICAgICAgeyBpc0ZpcnN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0gLz4gfVxuICAgICAgICAgIHsgYnV0dG9uIH1cbiAgICAgICAgICB7IGlzTGFzdEluR3JvdXAgPyBudWxsIDogPGJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtYnV0dG9uJyBzdHlsZT17IG5vbmVTdHlsZSB9IC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBtZW51QWxpZ24sIG1lbnVTaXplLCBudWJiaW5Ub3AsIGhvdmVyUG9wdXAsIG1lbnVIZWFkZXIsIHR5cGUsXG4gICAgICBsYWJlbCwgY2hpbGRyZW4sIHN0eWxlLCBtZW51U3R5bGUsIC4uLnByb3BzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBpY29uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtYnV0dG9uLXNwYWNlLWxlZnQnOiAhcHJvcHMuZ3JvdXBlZCxcbiAgICAgICAgJ3JlYWN0LXNsZHMtZHJvcGRvd24tb3BlbmVkJzogdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICB9XG4gICAgKTtcbiAgICBsZXQgaWNvbk1vcmUgPSBudWxsO1xuICAgIGlmICghbGFiZWwgJiYgIWljb24pIHtcbiAgICAgIGljb24gPSAnZG93bic7XG4gICAgfVxuICAgIGlmIChsYWJlbCB8fCB0eXBlID09PSAnaWNvbi1tb3JlJykge1xuICAgICAgaWNvbk1vcmUgPSAnZG93bic7XG4gICAgfVxuXG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIHBvcnRhbENsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG4gICAgICAgIGFsaWduPXsgbWVudUFsaWduIH1cbiAgICAgICAgaGVhZGVyPXsgbWVudUhlYWRlciB9XG4gICAgICAgIHNpemU9eyBtZW51U2l6ZSB9XG4gICAgICAgIG51YmJpblRvcD17IG51YmJpblRvcCB9XG4gICAgICAgIGhvdmVyUG9wdXA9eyBob3ZlclBvcHVwIH1cbiAgICAgICAgZHJvcGRvd25NZW51UmVmPXtub2RlID0+ICh0aGlzLmRyb3Bkb3duID0gbm9kZSl9XG4gICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25NZW51Q2xvc2UuYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB0cmFuc2l0aW9uOiAnbm9uZScgfSxcbiAgICAgICAgICBtZW51U3R5bGUpIH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZHJvcGRvd25DbGFzc05hbWVzIH0gc3R5bGU9e3N0eWxlfSByZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlckJ1dHRvbih7IHR5cGUsIGxhYmVsLCBpY29uLCBpY29uTW9yZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgICB7IGhvdmVyUG9wdXAgfHwgdGhpcy5zdGF0ZS5vcGVuZWQgPyBkcm9wZG93biA6IHVuZGVmaW5lZCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuRHJvcGRvd25CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudUFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddKSxcbiAgbWVudVNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgbWVudUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbnViYmluVG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgaG92ZXJQb3B1cDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1lbnVJdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNGaXJzdEluR3JvdXA6IFByb3BUeXBlcy5ib29sLFxuICBpc0xhc3RJbkdyb3VwOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbWVudVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdfQ==