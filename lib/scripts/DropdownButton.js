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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUI7OztBQUNuQixXQURtQixjQUNuQixDQUFZLEtBQVosRUFBbUI7d0NBREEsZ0JBQ0E7OzZGQURBLDJCQUVYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQUUsUUFBUSxLQUFSLEVBQWYsQ0FGaUI7QUFHakIsNkJBQWMsZ0JBQWQsRUFBZ0MsQ0FDOUIsQ0FDRSw2RUFERixFQUVFLHFDQUZGLENBRDhCLEVBSzlCLENBQ0Usd0VBREYsRUFFRSw0REFGRixDQUw4QixDQUFoQyxFQUhpQjs7R0FBbkI7OzZCQURtQjs7NkJBZ0JWOzs7QUFDUCxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUssb0JBQUwsRUFBRCxFQUE4QjtBQUNoQyxpQkFBSyxRQUFMLENBQWMsRUFBRSxRQUFRLEtBQVIsRUFBaEIsRUFEZ0M7QUFFaEMsY0FBSSxPQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CO0FBQ3JCLG1CQUFLLEtBQUwsQ0FBVyxNQUFYLEdBRHFCO1dBQXZCO1NBRkY7T0FEUyxFQU9SLEVBUEgsRUFETzs7Ozs4QkFXQyxHQUFHOzs7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLEVBQWQsRUFBa0I7O0FBQ3BCLFVBQUUsY0FBRixHQURvQjtBQUVwQixVQUFFLGVBQUYsR0FGb0I7QUFHcEIsWUFBSSxDQUFDLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFDdEIsZUFBSyxRQUFMLENBQWMsRUFBRSxRQUFRLElBQVIsRUFBaEIsRUFEc0I7QUFFdEIsY0FBSSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CO0FBQ3RCLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLENBQW5CLEVBRHNCO1dBQXhCO0FBR0Es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TSxTQUFOOztrQkFBdkI7OztBQTRKckIsZUFBZSxTQUFmLEdBQTJCO0FBQ3pCLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsSUFBVjtBQUNQLFFBQU0saUJBQVUsTUFBVjtBQUNOLFFBQU0saUJBQVUsTUFBVjtBQUNOLGFBQVcsaUJBQVUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQWhCLENBQVg7QUFDQSxZQUFVLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUFoQixDQUFWO0FBQ0EsY0FBWSxpQkFBVSxNQUFWO0FBQ1osYUFBVyxpQkFBVSxJQUFWO0FBQ1gsY0FBWSxpQkFBVSxJQUFWO0FBQ1osVUFBUSxpQkFBVSxJQUFWO0FBQ1IsV0FBUyxpQkFBVSxJQUFWO0FBQ1QsbUJBQWlCLGlCQUFVLElBQVY7QUFDakIsV0FBUyxpQkFBVSxJQUFWO0FBQ1Qsa0JBQWdCLGlCQUFVLElBQVY7QUFDaEIsaUJBQWUsaUJBQVUsSUFBVjtBQUNmLFlBQVUsaUJBQVUsSUFBVjtDQWhCWiIsImZpbGUiOiJEcm9wZG93bkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xyXG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbmVkOiBmYWxzZSB9O1xyXG4gICAgcmVnaXN0ZXJTdHlsZSgnbm8taG92ZXItcG9wdXAnLCBbXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtZHJvcGRvd24tdHJpZ2dlcjpob3ZlciAuc2xkcy1kcm9wZG93bi0tbWVudS5yZWFjdC1zbGRzLW5vLWhvdmVyLXBvcHVwJyxcclxuICAgICAgICAneyB2aXNpYmlsaXR5OiBoaWRkZW47IG9wYWNpdHk6IDA7IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLWRyb3Bkb3duLXRyaWdnZXIucmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQgLnNsZHMtZHJvcGRvd24tLW1lbnUnLFxyXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgb3BhY2l0eTogMSAhaW1wb3J0YW50OyB9JyxcclxuICAgICAgXSxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd25cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUub3BlbmVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XHJcbiAgICAgICAgfSwgMjApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRyaWdnZXJDbGljayguLi5hcmdzKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DbGljayguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1DbGljayguLi5hcmdzKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaG92ZXJQb3B1cCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0cmlnZ2VyRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy50cmlnZ2VyKTtcclxuICAgICAgICBpZiAodHJpZ2dlckVsZW0pIHRyaWdnZXJFbGVtLmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljaykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljayguLi5hcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUNsb3NlKCkge1xyXG4gICAgY29uc3QgdHJpZ2dlckVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMudHJpZ2dlcik7XHJcbiAgICB0cmlnZ2VyRWxlbS5mb2N1cygpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XHJcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIXRhcmdldEVsO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcclxuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZHJvcGRvd24pO1xyXG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxyXG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcclxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcclxuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xyXG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQnV0dG9uKHsgZ3JvdXBlZCwgaXNGaXJzdEluR3JvdXAsIGlzTGFzdEluR3JvdXAsIC4uLnByb3BzIH0pIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IChcclxuICAgICAgPEJ1dHRvbiB7IC4uLnByb3BzIH0gYXJpYS1oYXNwb3B1cFxyXG4gICAgICAgIHJlZj0ndHJpZ2dlcidcclxuICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblRyaWdnZXJDbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcblxyXG4gICAgaWYgKGdyb3VwZWQpIHtcclxuICAgICAgY29uc3Qgbm9uZVN0eWxlID0geyBkaXNwbGF5OiAnbm9uZScgfTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1idXR0b24tZ3JvdXAnPlxyXG4gICAgICAgICAgeyBpc0ZpcnN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0+PC9idXR0b24+IH1cclxuICAgICAgICAgIHsgYnV0dG9uIH1cclxuICAgICAgICAgIHsgaXNMYXN0SW5Hcm91cCA/IG51bGwgOiA8YnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1idXR0b24nIHN0eWxlPXsgbm9uZVN0eWxlIH0+PC9idXR0b24+IH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIG1lbnVBbGlnbiA9ICdsZWZ0JywgbWVudVNpemUsIG51YmJpblRvcCwgaG92ZXJQb3B1cCwgbWVudUhlYWRlciwgdHlwZSwgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IGljb24gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBkcm9wZG93bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgICdzbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NsZHMtYnV0dG9uLXNwYWNlLWxlZnQnOiAhcHJvcHMuZ3JvdXBlZCxcclxuICAgICAgICAncmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQnOiB0aGlzLnN0YXRlLm9wZW5lZCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGxldCBpY29uTW9yZSA9IG51bGw7XHJcbiAgICBpZiAoIWxhYmVsICYmICFpY29uKSB7XHJcbiAgICAgIGljb24gPSAnZG93bic7XHJcbiAgICB9XHJcbiAgICBpZiAobGFiZWwgfHwgdHlwZSA9PT0gJ2ljb24tbW9yZScpIHtcclxuICAgICAgaWNvbk1vcmUgPSAnZG93bic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGRyb3Bkb3duQ2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIHsgdGhpcy5yZW5kZXJCdXR0b24oeyB0eXBlLCBsYWJlbCwgaWNvbiwgaWNvbk1vcmUsIC4uLnByb3BzIH0pIH1cclxuICAgICAgICA8RHJvcGRvd25NZW51IGFsaWduPXsgbWVudUFsaWduIH0gaGVhZGVyPXsgbWVudUhlYWRlciB9IHNpemU9eyBtZW51U2l6ZSB9XHJcbiAgICAgICAgICBudWJiaW5Ub3A9eyBudWJiaW5Ub3AgfSBob3ZlclBvcHVwPXsgaG92ZXJQb3B1cCB9XHJcbiAgICAgICAgICByZWY9J2Ryb3Bkb3duJ1xyXG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbk1lbnVDbG9zZT17IHRoaXMub25NZW51Q2xvc2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkRyb3Bkb3duQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtZW51QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxyXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXHJcbiAgbWVudUhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBudWJiaW5Ub3A6IFByb3BUeXBlcy5ib29sLFxyXG4gIGhvdmVyUG9wdXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25NZW51SXRlbUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpc0ZpcnN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaXNMYXN0SW5Hcm91cDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXX0=