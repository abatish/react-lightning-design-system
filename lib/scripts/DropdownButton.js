'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownButton = function (_React$Component) {
  (0, _inherits3.default)(DropdownButton, _React$Component);

  function DropdownButton(props) {
    (0, _classCallCheck3.default)(this, DropdownButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownButton).call(this, props));

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
      if (!this.props.hoverPopup) {
        this.setState({ opened: !this.state.opened });
      }
      if (this.props.onClick) {
        var _props;

        (_props = this.props).onClick.apply(_props, arguments);
      }
    }
  }, {
    key: 'onMenuItemClick',
    value: function onMenuItemClick() {
      var _this4 = this;

      if (!this.props.hoverPopup) {
        setTimeout(function () {
          var triggerElem = _reactDom2.default.findDOMNode(_this4.refs.trigger);
          if (triggerElem) triggerElem.focus();
          _this4.setState({ opened: false });
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
      var triggerElem = _reactDom2.default.findDOMNode(this.refs.trigger);
      triggerElem.focus();
      this.setState({ opened: false });
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = _reactDom2.default.findDOMNode(this);
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl() {
      var dropdownEl = _reactDom2.default.findDOMNode(this.refs.dropdown);
      var firstItemEl = dropdownEl.querySelector('.slds-is-selected > .react-slds-menuitem[tabIndex]') || dropdownEl.querySelector('.react-slds-menuitem[tabIndex]');
      if (firstItemEl) {
        firstItemEl.focus();
      }
    }
  }, {
    key: 'renderButton',
    value: function renderButton(_ref) {
      var grouped = _ref.grouped;
      var isFirstInGroup = _ref.isFirstInGroup;
      var isLastInGroup = _ref.isLastInGroup;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['grouped', 'isFirstInGroup', 'isLastInGroup']);

      var button = _react2.default.createElement(_Button2.default, (0, _extends3.default)({}, props, { 'aria-haspopup': true,
        ref: 'trigger',
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
      var _props3 = this.props;
      var className = _props3.className;
      var _props3$menuAlign = _props3.menuAlign;
      var menuAlign = _props3$menuAlign === undefined ? 'left' : _props3$menuAlign;
      var menuSize = _props3.menuSize;
      var nubbinTop = _props3.nubbinTop;
      var hoverPopup = _props3.hoverPopup;
      var menuHeader = _props3.menuHeader;
      var type = _props3.type;
      var label = _props3.label;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'menuAlign', 'menuSize', 'nubbinTop', 'hoverPopup', 'menuHeader', 'type', 'label', 'children']);
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
        { className: dropdownClassNames },
        this.renderButton((0, _extends3.default)({ type: type, label: label, icon: icon, iconMore: iconMore }, props)),
        _react2.default.createElement(
          _DropdownMenu2.default,
          { align: menuAlign, header: menuHeader, size: menuSize,
            nubbinTop: nubbinTop, hoverPopup: hoverPopup,
            ref: 'dropdown',
            onMenuItemClick: this.onMenuItemClick.bind(this),
            onMenuClose: this.onMenuClose.bind(this),
            onBlur: this.onBlur.bind(this)
          },
          children
        )
      );
    }
  }]);
  return DropdownButton;
}(_react2.default.Component);

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
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUIsYzs7O0FBQ25CLDBCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFFLFFBQVEsS0FBVixFQUFiO0FBQ0EsNkJBQWMsZ0JBQWQsRUFBZ0MsQ0FDOUIsQ0FDRSw2RUFERixFQUVFLHFDQUZGLENBRDhCLEVBSzlCLENBQ0Usd0VBREYsRUFFRSw0REFGRixDQUw4QixDQUFoQztBQUhpQjtBQWFsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGlCQUFXLFlBQU07QUFDZixZQUFJLENBQUMsT0FBSyxvQkFBTCxFQUFMLEVBQWtDO0FBQ2hDLGlCQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsS0FBVixFQUFkO0FBQ0EsY0FBSSxPQUFLLEtBQUwsQ0FBVyxNQUFmLEVBQXVCO0FBQ3JCLG1CQUFLLEtBQUwsQ0FBVyxNQUFYO0FBQ0Q7QUFDRjtBQUNGLE9BUEQsRUFPRyxFQVBIO0FBUUQ7Ozs4QkFFUyxDLEVBQUc7QUFBQTs7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCOztBQUNwQixVQUFFLGNBQUY7QUFDQSxVQUFFLGVBQUY7QUFDQSxZQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBaEIsRUFBd0I7QUFDdEIsZUFBSyxRQUFMLENBQWMsRUFBRSxRQUFRLElBQVYsRUFBZDtBQUNBLGNBQUksS0FBSyxLQUFMLENBQVcsT0FBZixFQUF3QjtBQUN0QixpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixDQUFuQjtBQUNEO0FBQ0QscUJBQVcsWUFBTTtBQUNmLG1CQUFLLG1CQUFMO0FBQ0QsV0FGRCxFQUVHLEVBRkg7QUFHRCxTQVJELE1B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TCxDQUFZLElBQVosQ0FBaUIsSUFBakI7QUFMWDtVQU9JO0FBUEo7QUFGRixPQURGO0FBY0Q7OztFQXhKeUMsZ0JBQU0sUzs7a0JBQTdCLGM7OztBQTRKckIsZUFBZSxTQUFmLEdBQTJCO0FBQ3pCLGFBQVcsaUJBQVUsTUFESTtBQUV6QixTQUFPLGlCQUFVLElBRlE7QUFHekIsUUFBTSxpQkFBVSxNQUhTO0FBSXpCLFFBQU0saUJBQVUsTUFKUztBQUt6QixhQUFXLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFoQixDQUxjO0FBTXpCLFlBQVUsaUJBQVUsS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBTmU7QUFPekIsY0FBWSxpQkFBVSxNQVBHO0FBUXpCLGFBQVcsaUJBQVUsSUFSSTtBQVN6QixjQUFZLGlCQUFVLElBVEc7QUFVekIsVUFBUSxpQkFBVSxJQVZPO0FBV3pCLFdBQVMsaUJBQVUsSUFYTTtBQVl6QixtQkFBaUIsaUJBQVUsSUFaRjtBQWF6QixXQUFTLGlCQUFVLElBYk07QUFjekIsa0JBQWdCLGlCQUFVLElBZEQ7QUFlekIsaUJBQWUsaUJBQVUsSUFmQTtBQWdCekIsWUFBVSxpQkFBVTtBQWhCSyxDQUEzQiIsImZpbGUiOiJEcm9wZG93bkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogZmFsc2UgfTtcbiAgICByZWdpc3RlclN0eWxlKCduby1ob3Zlci1wb3B1cCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXI6aG92ZXIgLnNsZHMtZHJvcGRvd24tLW1lbnUucmVhY3Qtc2xkcy1uby1ob3Zlci1wb3B1cCcsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IGhpZGRlbjsgb3BhY2l0eTogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlci5yZWFjdC1zbGRzLWRyb3Bkb3duLW9wZW5lZCAuc2xkcy1kcm9wZG93bi0tbWVudScsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcbiAgICAgICAgfSwgMjApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVHJpZ2dlckNsaWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51SXRlbUNsaWNrKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnRyaWdnZXIpO1xuICAgICAgICBpZiAodHJpZ2dlckVsZW0pIHRyaWdnZXJFbGVtLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25NZW51SXRlbUNsaWNrKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUNsb3NlKCkge1xuICAgIGNvbnN0IHRyaWdnZXJFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnRyaWdnZXIpO1xuICAgIHRyaWdnZXJFbGVtLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcbiAgICBjb25zdCBkcm9wZG93bkVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmRyb3Bkb3duKTtcbiAgICBjb25zdCBmaXJzdEl0ZW1FbCA9XG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcbiAgICAgIGRyb3Bkb3duRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJyk7XG4gICAgaWYgKGZpcnN0SXRlbUVsKSB7XG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckJ1dHRvbih7IGdyb3VwZWQsIGlzRmlyc3RJbkdyb3VwLCBpc0xhc3RJbkdyb3VwLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgYnV0dG9uID0gKFxuICAgICAgPEJ1dHRvbiB7IC4uLnByb3BzIH0gYXJpYS1oYXNwb3B1cFxuICAgICAgICByZWY9J3RyaWdnZXInXG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uVHJpZ2dlckNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBpZiAoZ3JvdXBlZCkge1xuICAgICAgY29uc3Qgbm9uZVN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbi1ncm91cCc+XG4gICAgICAgICAgeyBpc0ZpcnN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0+PC9idXR0b24+IH1cbiAgICAgICAgICB7IGJ1dHRvbiB9XG4gICAgICAgICAgeyBpc0xhc3RJbkdyb3VwID8gbnVsbCA6IDxidXR0b24gY2xhc3NOYW1lPSdzbGRzLWJ1dHRvbicgc3R5bGU9eyBub25lU3R5bGUgfT48L2J1dHRvbj4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbWVudUFsaWduID0gJ2xlZnQnLCBtZW51U2l6ZSwgbnViYmluVG9wLCBob3ZlclBvcHVwLCBtZW51SGVhZGVyLCB0eXBlLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB7IGljb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAge1xuICAgICAgICAnc2xkcy1idXR0b24tc3BhY2UtbGVmdCc6ICFwcm9wcy5ncm91cGVkLFxuICAgICAgICAncmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCxcbiAgICAgIH1cbiAgICApO1xuICAgIGxldCBpY29uTW9yZSA9IG51bGw7XG4gICAgaWYgKCFsYWJlbCAmJiAhaWNvbikge1xuICAgICAgaWNvbiA9ICdkb3duJztcbiAgICB9XG4gICAgaWYgKGxhYmVsIHx8IHR5cGUgPT09ICdpY29uLW1vcmUnKSB7XG4gICAgICBpY29uTW9yZSA9ICdkb3duJztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZHJvcGRvd25DbGFzc05hbWVzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJCdXR0b24oeyB0eXBlLCBsYWJlbCwgaWNvbiwgaWNvbk1vcmUsIC4uLnByb3BzIH0pIH1cbiAgICAgICAgPERyb3Bkb3duTWVudSBhbGlnbj17IG1lbnVBbGlnbiB9IGhlYWRlcj17IG1lbnVIZWFkZXIgfSBzaXplPXsgbWVudVNpemUgfVxuICAgICAgICAgIG51YmJpblRvcD17IG51YmJpblRvcCB9IGhvdmVyUG9wdXA9eyBob3ZlclBvcHVwIH1cbiAgICAgICAgICByZWY9J2Ryb3Bkb3duJ1xuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vbk1lbnVDbG9zZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Ecm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICBtZW51U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBtZW51SGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBudWJiaW5Ub3A6IFByb3BUeXBlcy5ib29sLFxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTWVudUl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0ZpcnN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzTGFzdEluR3JvdXA6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19