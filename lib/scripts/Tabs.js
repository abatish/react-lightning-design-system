'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _util = require('./util');

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tabs).call(this, props));

    _this.state = {};
    (0, _util.registerStyle)('tab-menu', [['.slds-tabs__item.react-slds-tab-with-menu', '{ position: relative !important; overflow: visible !important; }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-inner', '{ overflow: hidden }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-inner > a', '{ padding-right: 2rem; }'], ['.react-slds-tab-menu', '{ position: absolute; top: 0; right: 0; visibility: hidden }'], ['.react-slds-tab-menu button', '{ height: 3rem; line-height: 3rem; width: 2rem; }'], ['.slds-tabs__item.slds-active .react-slds-tab-menu', '.slds-tabs__item:hover .react-slds-tab-menu', '{ visibility: visible }']]);
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.focusTab) {
        var el = _reactDom2.default.findDOMNode(this.refs.activeTab);
        if (el) {
          el.focus();
        }
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ focusTab: false });
      }
    }
  }, {
    key: 'onTabClick',
    value: function onTabClick(tabKey) {
      if (this.props.onSelect) {
        this.props.onSelect(tabKey);
      }
      // Uncontrolled
      this.setState({ activeKey: tabKey, focusTab: true });
    }
  }, {
    key: 'onTabKeyDown',
    value: function onTabKeyDown(tabKey, e) {
      var _this2 = this;

      if (e.keyCode === 37 || e.keyCode === 39) {
        (function () {
          // left/right cursor key
          var idx = 0;
          var tabKeys = [];
          _react2.default.Children.forEach(_this2.props.children, function (tab, i) {
            tabKeys.push(tab.props.eventKey);
            if (tabKey === tab.props.eventKey) {
              idx = i;
            }
          });
          var dir = e.keyCode === 37 ? -1 : 1;
          var activeIdx = (idx + dir + tabKeys.length) % tabKeys.length;
          var activeKey = tabKeys[activeIdx];
          _this2.onTabClick(activeKey);
          e.preventDefault();
          e.stopPropagation();
        })();
      }
    }
  }, {
    key: 'renderTabNav',
    value: function renderTabNav(type, tabs) {
      var _this3 = this;

      var activeKey = typeof this.props.activeKey !== 'undefined' ? this.props.activeKey : typeof this.state.activeKey !== 'undefined' ? this.state.activeKey : this.props.defaultActiveKey;
      var tabNavClassName = 'slds-tabs--' + type + '__nav';
      return _react2.default.createElement(
        'ul',
        { className: tabNavClassName, role: 'tablist' },
        _react2.default.Children.map(tabs, function (tab) {
          var _tab$props = tab.props;
          var title = _tab$props.title;
          var eventKey = _tab$props.eventKey;
          var menu = _tab$props.menu;
          var menuIcon = _tab$props.menuIcon;
          var menuItems = tab.props.menuItems;

          menuItems = menu ? menu.props.children : menuItems;
          var menuProps = menu ? menu.props : {};
          var isActive = eventKey === activeKey;
          var tabItemClassName = (0, _classnames2.default)('slds-tabs__item', 'slds-tabs--' + type + '__item', 'slds-text-heading---label', { 'slds-active': isActive }, { 'react-slds-tab-with-menu': menu || menuItems });
          var tabLinkClassName = 'slds-tabs--' + type + '__link';
          return _react2.default.createElement(
            'li',
            { className: tabItemClassName, role: 'presentation' },
            _react2.default.createElement(
              'span',
              { className: 'react-slds-tab-item-inner' },
              _react2.default.createElement(
                'a',
                { className: tabLinkClassName,
                  onClick: _this3.onTabClick.bind(_this3, eventKey),
                  onKeyDown: _this3.onTabKeyDown.bind(_this3, eventKey),
                  role: 'tab',
                  ref: isActive ? 'activeTab' : null,
                  tabIndex: isActive ? 0 : -1,
                  'aria-selected': isActive
                },
                title
              ),
              menuItems ? _this3.renderTabMenu(menuIcon, menuItems, menuProps) : null
            )
          );
        })
      );
    }
  }, {
    key: 'renderTabMenu',
    value: function renderTabMenu() {
      var menuIcon = arguments.length <= 0 || arguments[0] === undefined ? 'down' : arguments[0];
      var menuItems = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      var menuProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return _react2.default.createElement(
        _DropdownButton2.default,
        (0, _extends3.default)({ className: 'react-slds-tab-menu', icon: menuIcon, type: 'icon-bare', iconSize: 'small', nubbinTop: true }, menuProps),
        menuItems
      );
    }
  }, {
    key: 'renderTabPanel',
    value: function renderTabPanel(tab) {
      var activeKey = this.props.activeKey || this.state.activeKey || this.props.defaultActiveKey;
      var eventKey = tab.props.eventKey;

      var isActive = eventKey === activeKey;
      return _react2.default.cloneElement(tab, { active: isActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var type = this.props.type === 'scoped' ? 'scoped' : 'default';
      var tabsClassNames = (0, _classnames2.default)(className, 'slds-tabs--' + type);
      return _react2.default.createElement(
        'div',
        { className: tabsClassNames },
        this.renderTabNav(type, children),
        _react2.default.Children.map(children, this.renderTabPanel.bind(this))
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;


var TAB_TYPES = ['default', 'scoped'];

Tabs.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(TAB_TYPES),
  defaultActiveKey: _react.PropTypes.any,
  activeKey: _react.PropTypes.any,
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUIsSTs7O0FBRW5CLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsNkJBQWMsVUFBZCxFQUEwQixDQUN4QixDQUNFLDJDQURGLEVBRUUsa0VBRkYsQ0FEd0IsRUFLeEIsQ0FDRSx3RUFERixFQUVFLHNCQUZGLENBTHdCLEVBU3hCLENBQ0UsNEVBREYsRUFFRSwwQkFGRixDQVR3QixFQWF4QixDQUNFLHNCQURGLEVBRUUsOERBRkYsQ0Fid0IsRUFpQnhCLENBQ0UsNkJBREYsRUFFRSxtREFGRixDQWpCd0IsRUFxQnhCLENBQ0UsbURBREYsRUFFRSw2Q0FGRixFQUdFLHlCQUhGLENBckJ3QixDQUExQjtBQUhpQjtBQThCbEI7Ozs7eUNBRW9CO0FBQ25CLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixZQUFNLEtBQUssbUJBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxTQUEvQixDQUFYO0FBQ0EsWUFBSSxFQUFKLEVBQVE7QUFDTixhQUFHLEtBQUg7QUFDRDs7QUFFRCxhQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsS0FBWixFQUFkO0FBQ0Q7QUFDRjs7OytCQUVVLE0sRUFBUTtBQUNqQixVQUFJLEtBQUssS0FBTCxDQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQjtBQUNEOztBQUVELFdBQUssUUFBTCxDQUFjLEVBQUUsV0FBVyxNQUFiLEVBQXFCLFVBQVUsSUFBL0IsRUFBZDtBQUNEOzs7aUNBRVksTSxFQUFRLEMsRUFBRztBQUFBOztBQUN0QixVQUFJLEVBQUUsT0FBRixLQUFj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WixDQUFsQjs7QUFFQSxLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FGUztBQUdmLG9CQUFrQixpQkFBVSxHQUhiO0FBSWYsYUFBVyxpQkFBVSxHQUpOO0FBS2YsWUFBVSxpQkFBVSxJQUxMO0FBTWYsWUFBVSxpQkFBVTtBQU5MLENBQWpCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIHJlZ2lzdGVyU3R5bGUoJ3RhYi1tZW51JywgW1xyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51JyxcclxuICAgICAgICAneyBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUgPiAucmVhY3Qtc2xkcy10YWItaXRlbS1pbm5lcicsXHJcbiAgICAgICAgJ3sgb3ZlcmZsb3c6IGhpZGRlbiB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWlubmVyID4gYScsXHJcbiAgICAgICAgJ3sgcGFkZGluZy1yaWdodDogMnJlbTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxyXG4gICAgICAgICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgdmlzaWJpbGl0eTogaGlkZGVuIH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbicsXHJcbiAgICAgICAgJ3sgaGVpZ2h0OiAzcmVtOyBsaW5lLWhlaWdodDogM3JlbTsgd2lkdGg6IDJyZW07IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0uc2xkcy1hY3RpdmUgLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxyXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtOmhvdmVyIC5yZWFjdC1zbGRzLXRhYi1tZW51JyxcclxuICAgICAgICAneyB2aXNpYmlsaXR5OiB2aXNpYmxlIH0nLFxyXG4gICAgICBdLFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c1RhYikge1xyXG4gICAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5hY3RpdmVUYWIpO1xyXG4gICAgICBpZiAoZWwpIHtcclxuICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c1RhYjogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRhYkNsaWNrKHRhYktleSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0YWJLZXkpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5jb250cm9sbGVkXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlS2V5OiB0YWJLZXksIGZvY3VzVGFiOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25UYWJLZXlEb3duKHRhYktleSwgZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkgeyAvLyBsZWZ0L3JpZ2h0IGN1cnNvciBrZXlcclxuICAgICAgbGV0IGlkeCA9IDA7XHJcbiAgICAgIGNvbnN0IHRhYktleXMgPSBbXTtcclxuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAodGFiLCBpKSA9PiB7XHJcbiAgICAgICAgdGFiS2V5cy5wdXNoKHRhYi5wcm9wcy5ldmVudEtleSk7XHJcbiAgICAgICAgaWYgKHRhYktleSA9PT0gdGFiLnByb3BzLmV2ZW50S2V5KSB7XHJcbiAgICAgICAgICBpZHggPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGRpciA9IGUua2V5Q29kZSA9PT0gMzcgPyAtMSA6IDE7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZUlkeCA9IChpZHggKyBkaXIgKyB0YWJLZXlzLmxlbmd0aCkgJSB0YWJLZXlzLmxlbmd0aDtcclxuICAgICAgY29uc3QgYWN0aXZlS2V5ID0gdGFiS2V5c1thY3RpdmVJZHhdO1xyXG4gICAgICB0aGlzLm9uVGFiQ2xpY2soYWN0aXZlS2V5KTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFiTmF2KHR5cGUsIHRhYnMpIHtcclxuICAgIGNvbnN0IGFjdGl2ZUtleSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6XHJcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmFjdGl2ZUtleSA6XHJcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcclxuICAgIGNvbnN0IHRhYk5hdkNsYXNzTmFtZSA9IGBzbGRzLXRhYnMtLSR7dHlwZX1fX25hdmA7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXsgdGFiTmF2Q2xhc3NOYW1lIH0gcm9sZT0ndGFibGlzdCc+XHJcbiAgICAgIHtcclxuICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAodGFicywgKHRhYikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyB0aXRsZSwgZXZlbnRLZXksIG1lbnUsIG1lbnVJY29uIH0gPSB0YWIucHJvcHM7XHJcbiAgICAgICAgICBsZXQgeyBtZW51SXRlbXMgfSA9IHRhYi5wcm9wcztcclxuICAgICAgICAgIG1lbnVJdGVtcyA9IG1lbnUgPyBtZW51LnByb3BzLmNoaWxkcmVuIDogbWVudUl0ZW1zO1xyXG4gICAgICAgICAgY29uc3QgbWVudVByb3BzID0gbWVudSA/IG1lbnUucHJvcHMgOiB7fTtcclxuICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcclxuICAgICAgICAgIGNvbnN0IHRhYkl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICAgICAnc2xkcy10YWJzX19pdGVtJyxcclxuICAgICAgICAgICAgYHNsZHMtdGFicy0tJHt0eXBlfV9faXRlbWAsXHJcbiAgICAgICAgICAgICdzbGRzLXRleHQtaGVhZGluZy0tLWxhYmVsJyxcclxuICAgICAgICAgICAgeyAnc2xkcy1hY3RpdmUnOiBpc0FjdGl2ZSB9LFxyXG4gICAgICAgICAgICB7ICdyZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnOiBtZW51IHx8IG1lbnVJdGVtcyB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgdGFiTGlua0NsYXNzTmFtZSA9IGBzbGRzLXRhYnMtLSR7dHlwZX1fX2xpbmtgO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRhYkl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmVhY3Qtc2xkcy10YWItaXRlbS1pbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyB0YWJMaW5rQ2xhc3NOYW1lIH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25UYWJDbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25UYWJLZXlEb3duLmJpbmQodGhpcywgZXZlbnRLZXkpIH1cclxuICAgICAgICAgICAgICAgICAgcm9sZT0ndGFiJ1xyXG4gICAgICAgICAgICAgICAgICByZWY9eyBpc0FjdGl2ZSA/ICdhY3RpdmVUYWInIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXsgaXNBY3RpdmUgPyAwIDogLTEgfVxyXG4gICAgICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXsgaXNBY3RpdmUgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsgbWVudUl0ZW1zID8gdGhpcy5yZW5kZXJUYWJNZW51KG1lbnVJY29uLCBtZW51SXRlbXMsIG1lbnVQcm9wcykgOiBudWxsIH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJNZW51KG1lbnVJY29uID0gJ2Rvd24nLCBtZW51SXRlbXMgPSBbXSwgbWVudVByb3BzID0ge30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLW1lbnUnIGljb249eyBtZW51SWNvbiB9IHR5cGU9J2ljb24tYmFyZScgaWNvblNpemU9J3NtYWxsJyBudWJiaW5Ub3AgeyAuLi5tZW51UHJvcHMgfT5cclxuICAgICAgICB7IG1lbnVJdGVtcyB9XHJcbiAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFiUGFuZWwodGFiKSB7XHJcbiAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSB8fCB0aGlzLnN0YXRlLmFjdGl2ZUtleSB8fCB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XHJcbiAgICBjb25zdCB7IGV2ZW50S2V5IH0gPSB0YWIucHJvcHM7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRhYiwgeyBhY3RpdmU6IGlzQWN0aXZlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPT09ICdzY29wZWQnID8gJ3Njb3BlZCcgOiAnZGVmYXVsdCc7XHJcbiAgICBjb25zdCB0YWJzQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy10YWJzLS0ke3R5cGV9YCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYnNDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlclRhYk5hdih0eXBlLCBjaGlsZHJlbikgfVxyXG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlclRhYlBhbmVsLmJpbmQodGhpcykpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVEFCX1RZUEVTID0gWydkZWZhdWx0JywgJ3Njb3BlZCddO1xyXG5cclxuVGFicy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihUQUJfVFlQRVMpLFxyXG4gIGRlZmF1bHRBY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXHJcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdfQ==