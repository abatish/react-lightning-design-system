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
  className: _react.PropTypes.string,
  label: _react.PropTypes.node,
  type: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  menuAlign: _react.PropTypes.oneOf(['left', 'center', 'right']),
  menuSize: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  menuHeader: _react.PropTypes.string,
  nubbinTop: _react.PropTypes.bool,
  hoverPopup: _react.PropTypes.bool,
  onBlur: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  onMenuItemClick: _react.PropTypes.func,
  grouped: _react.PropTypes.bool,
  isFirstInGroup: _react.PropTypes.bool,
  isLastInGroup: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object,
  menuStyle: _react.PropTypes.object
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkRyb3Bkb3duQnV0dG9uIiwic3RhdGUiLCJvcGVuZWQiLCJzZXRUaW1lb3V0IiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25CbHVyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uQ2xpY2siLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwiaG92ZXJQb3B1cCIsImRyb3Bkb3duIiwic3R5bGUiLCJnZXRTdHlsZXMiLCJkcm9wZG93bk9mZnNldCIsInRyaWdnZXJFbGVtIiwidHJpZ2dlciIsImZvY3VzIiwib25NZW51SXRlbUNsaWNrIiwidHJpZ2dlck9mZnNldCIsInRyaWdnZXJQYWRkaW5nIiwibnViYmluSGVpZ2h0IiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwibWFyZ2luVG9wIiwibnViYmluVG9wIiwibm9kZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImRyb3Bkb3duRWwiLCJmaXJzdEl0ZW1FbCIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cGVkIiwiaXNGaXJzdEluR3JvdXAiLCJpc0xhc3RJbkdyb3VwIiwicHByb3BzIiwiYnV0dG9uIiwib25UcmlnZ2VyQ2xpY2siLCJiaW5kIiwib25LZXlEb3duIiwibm9uZVN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsIm1lbnVBbGlnbiIsIm1lbnVTaXplIiwibWVudUhlYWRlciIsInR5cGUiLCJsYWJlbCIsImNoaWxkcmVuIiwibWVudVN0eWxlIiwiaWNvbiIsImRyb3Bkb3duQ2xhc3NOYW1lcyIsImljb25Nb3JlIiwicmVuZGVyQnV0dG9uIiwib25NZW51Q2xvc2UiLCJ0cmFuc2l0aW9uIiwicHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJib29sIiwiZnVuYyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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TSxpQkFBVU8sTUFKUztBQUt6QmQsYUFBVyxpQkFBVWUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQWhCLENBTGM7QUFNekJkLFlBQVUsaUJBQVVjLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUFoQixDQU5lO0FBT3pCYixjQUFZLGlCQUFVWSxNQVBHO0FBUXpCaEMsYUFBVyxpQkFBVWtDLElBUkk7QUFTekJqRCxjQUFZLGlCQUFVaUQsSUFURztBQVV6QnhELFVBQVEsaUJBQVV5RCxJQVZPO0FBV3pCcEQsV0FBUyxpQkFBVW9ELElBWE07QUFZekIxQyxtQkFBaUIsaUJBQVUwQyxJQVpGO0FBYXpCNUIsV0FBUyxpQkFBVTJCLElBYk07QUFjekIxQixrQkFBZ0IsaUJBQVUwQixJQWREO0FBZXpCekIsaUJBQWUsaUJBQVV5QixJQWZBO0FBZ0J6QlgsWUFBVSxpQkFBVXRCLElBaEJLO0FBaUJ6QjtBQUNBZCxTQUFPLGlCQUFVaUQsTUFsQlE7QUFtQnpCWixhQUFXLGlCQUFVWTtBQW5CSSxDQUEzQiIsImZpbGUiOiJEcm9wZG93bkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUsIGlzRWxJbkNoaWxkcmVuLCBvZmZzZXQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbmVkOiBmYWxzZSB9O1xuICAgIHJlZ2lzdGVyU3R5bGUoJ25vLWhvdmVyLXBvcHVwJywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlcjpob3ZlciAuc2xkcy1kcm9wZG93bi0tbWVudS5yZWFjdC1zbGRzLW5vLWhvdmVyLXBvcHVwJyxcbiAgICAgICAgJ3sgdmlzaWJpbGl0eTogaGlkZGVuOyBvcGFjaXR5OiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1kcm9wZG93bi10cmlnZ2VyLnJlYWN0LXNsZHMtZHJvcGRvd24tb3BlbmVkIC5zbGRzLWRyb3Bkb3duLS1tZW51JyxcbiAgICAgICAgJ3sgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50OyBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xuICAgICAgICB9LCAyMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgb25UcmlnZ2VyQ2xpY2soLi4uYXJncykge1xuICAgIGlmICghdGhpcy5wcm9wcy5ob3ZlclBvcHVwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQgfSwgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZHJvcGRvd24uc3R5bGUsIHRoaXMuZ2V0U3R5bGVzKCkuZHJvcGRvd25PZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayguLi5hcmdzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmhvdmVyUG9wdXApIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbSA9IHRoaXMudHJpZ2dlcjtcbiAgICAgICAgaWYgKHRyaWdnZXJFbGVtKSB0cmlnZ2VyRWxlbS5mb2N1cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljayguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVDbG9zZSgpIHtcbiAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGdldFN0eWxlcygpIHtcbiAgICBjb25zdCB0cmlnZ2VyT2Zmc2V0ID0gb2Zmc2V0KHRoaXMudHJpZ2dlcik7XG4gICAgY29uc3QgZHJvcGRvd25PZmZzZXQgPSBvZmZzZXQodGhpcy5kcm9wZG93bik7XG4gICAgY29uc3QgdHJpZ2dlclBhZGRpbmcgPSA1O1xuICAgIGNvbnN0IG51YmJpbkhlaWdodCA9IDg7XG4gICAgY29uc3QgdG9wID0gLTEgKlxuICAgICAgKGRyb3Bkb3duT2Zmc2V0LnRvcCAtIHRyaWdnZXJPZmZzZXQudG9wIC0gdGhpcy50cmlnZ2VyLm9mZnNldEhlaWdodCAtIHRyaWdnZXJQYWRkaW5nKTtcbiAgICByZXR1cm4ge1xuICAgICAgZHJvcGRvd25PZmZzZXQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBgJHt0b3AgKyAodGhpcy5wcm9wcy5udWJiaW5Ub3AgPyBudWJiaW5IZWlnaHQgOiAwKX1weGAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoKSB7XG4gICAgY29uc3QgZHJvcGRvd25FbCA9IHRoaXMuZHJvcGRvd247XG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcuc2xkcy1pcy1zZWxlY3RlZCA+IC5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpIHx8XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xuICAgICAgZmlyc3RJdGVtRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJCdXR0b24oeyBncm91cGVkLCBpc0ZpcnN0SW5Hcm91cCwgaXNMYXN0SW5Hcm91cCwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHBwcm9wcyA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25NZW51SXRlbUNsaWNrO1xuICAgIGNvbnN0IGJ1dHRvbiA9IChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgIGJ1dHRvblJlZj17bm9kZSA9PiAodGhpcy50cmlnZ2VyID0gbm9kZSl9XG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uVHJpZ2dlckNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBpZiAoZ3JvdXBlZCkge1xuICAgICAgY29uc3Qgbm9uZVN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbi1ncm91cCc+XG4gICAgICAgICAgeyBpc0ZpcnN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0gLz4gfVxuICAgICAgICAgIHsgYnV0dG9uIH1cbiAgICAgICAgICB7IGlzTGFzdEluR3JvdXAgPyBudWxsIDogPGJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtYnV0dG9uJyBzdHlsZT17IG5vbmVTdHlsZSB9IC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBidXR0b247XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBtZW51QWxpZ24gPSAnbGVmdCcsIG1lbnVTaXplLCBudWJiaW5Ub3AsIGhvdmVyUG9wdXAsIG1lbnVIZWFkZXIsIHR5cGUsXG4gICAgICBsYWJlbCwgY2hpbGRyZW4sIHN0eWxlLCBtZW51U3R5bGUsIC4uLnByb3BzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgeyBpY29uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRyb3Bkb3duQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtYnV0dG9uLXNwYWNlLWxlZnQnOiAhcHJvcHMuZ3JvdXBlZCxcbiAgICAgICAgJ3JlYWN0LXNsZHMtZHJvcGRvd24tb3BlbmVkJzogdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICB9XG4gICAgKTtcbiAgICBsZXQgaWNvbk1vcmUgPSBudWxsO1xuICAgIGlmICghbGFiZWwgJiYgIWljb24pIHtcbiAgICAgIGljb24gPSAnZG93bic7XG4gICAgfVxuICAgIGlmIChsYWJlbCB8fCB0eXBlID09PSAnaWNvbi1tb3JlJykge1xuICAgICAgaWNvbk1vcmUgPSAnZG93bic7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZHJvcGRvd25DbGFzc05hbWVzIH0gc3R5bGU9e3N0eWxlfSByZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlckJ1dHRvbih7IHR5cGUsIGxhYmVsLCBpY29uLCBpY29uTW9yZSwgLi4ucHJvcHMgfSkgfVxuICAgICAgICB7IHRoaXMuc3RhdGUub3BlbmVkIHx8IGhvdmVyUG9wdXAgP1xuICAgICAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgICAgIGFsaWduPXsgbWVudUFsaWduIH1cbiAgICAgICAgICAgIGhlYWRlcj17IG1lbnVIZWFkZXIgfVxuICAgICAgICAgICAgc2l6ZT17IG1lbnVTaXplIH1cbiAgICAgICAgICAgIG51YmJpblRvcD17IG51YmJpblRvcCB9XG4gICAgICAgICAgICBob3ZlclBvcHVwPXsgaG92ZXJQb3B1cCB9XG4gICAgICAgICAgICBkcm9wZG93bk1lbnVSZWY9e25vZGUgPT4gKHRoaXMuZHJvcGRvd24gPSBub2RlKX1cbiAgICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgb25NZW51Q2xvc2U9eyB0aGlzLm9uTWVudUNsb3NlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBzdHlsZT17IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHsgdHJhbnNpdGlvbjogJ25vbmUnIH0sXG4gICAgICAgICAgICAgIG1lbnVTdHlsZSkgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICAgIDwvRHJvcGRvd25NZW51PiA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkRyb3Bkb3duQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIG1lbnVIZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG51YmJpblRvcDogUHJvcFR5cGVzLmJvb2wsXG4gIGhvdmVyUG9wdXA6IFByb3BUeXBlcy5ib29sLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ3JvdXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzRmlyc3RJbkdyb3VwOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNMYXN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG4iXX0=