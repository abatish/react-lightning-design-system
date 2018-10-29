'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = undefined;

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
var TabContent = function TabContent(props) {
  var className = props.className,
      active = props.active,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'active', 'children']);

  var tabClassNames = (0, _classnames2.default)(className, 'slds-tabs__content', 'slds-' + (active ? 'show' : 'hide'));
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: tabClassNames, role: 'tabpanel' }, pprops),
    children
  );
};

TabContent.propTypes = {
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

/**
 *
 */
var TabMenu = function TabMenu(props) {
  var _props$icon = props.icon,
      icon = _props$icon === undefined ? 'down' : _props$icon,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['icon', 'children']);

  return _react2.default.createElement(
    _DropdownButton2.default,
    (0, _extends3.default)({
      className: 'react-slds-tab-menu',
      icon: icon,
      type: 'icon-bare',
      iconSize: 'small',
      nubbinTop: true
    }, pprops),
    children
  );
};

TabMenu.propTypes = {
  icon: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var DefaultTabItemRenderer = function DefaultTabItemRenderer(props) {
  return _react2.default.Children.only(props.children);
};

DefaultTabItemRenderer.propTypes = {
  children: _propTypes2.default.node
};

/**
 *
 */
var TabItem = function TabItem(props) {
  var type = props.type,
      title = props.title,
      activeKey = props.activeKey,
      eventKey = props.eventKey,
      activeTabRef = props.activeTabRef,
      menu = props.menu,
      menuIcon = props.menuIcon,
      onTabClick = props.onTabClick,
      onTabKeyDown = props.onTabKeyDown;
  var menuItems = props.menuItems;

  menuItems = menu ? menu.props.children : menuItems;
  var menuProps = menu ? menu.props : {};
  var isActive = eventKey === activeKey;
  var tabItemClassName = (0, _classnames2.default)({ 'slds-tabs__item': !!menuItems }, 'slds-tabs--' + type + '__item', 'slds-text-heading---label', { 'slds-active': isActive }, { 'react-slds-tab-with-menu': menu || menuItems });
  var tabLinkClassName = 'slds-tabs--' + type + '__link';
  var _props$tabItemRendere = props.tabItemRenderer,
      TabItemRenderer = _props$tabItemRendere === undefined ? DefaultTabItemRenderer : _props$tabItemRendere,
      pprops = (0, _objectWithoutProperties3.default)(props, ['tabItemRenderer']);

  return _react2.default.createElement(
    'li',
    { className: tabItemClassName, role: 'presentation' },
    _react2.default.createElement(
      TabItemRenderer,
      pprops,
      _react2.default.createElement(
        'span',
        { className: 'react-slds-tab-item-content' },
        _react2.default.createElement(
          'a',
          {
            className: tabLinkClassName,
            role: 'tab',
            ref: isActive ? activeTabRef : undefined,
            tabIndex: isActive ? 0 : -1,
            'aria-selected': isActive,
            onClick: function onClick() {
              return onTabClick(eventKey);
            },
            onKeyDown: function onKeyDown(e) {
              return onTabKeyDown(eventKey, e);
            }
          },
          title
        ),
        menuItems ? _react2.default.createElement(
          TabMenu,
          (0, _extends3.default)({ icon: menuIcon }, menuProps),
          menuItems
        ) : undefined
      )
    )
  );
};

TabItem.propTypes = {
  type: _propTypes2.default.string,
  activeTabRef: _propTypes2.default.func,
  title: _propTypes2.default.string,
  menu: _propTypes2.default.element,
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  menuIcon: _propTypes2.default.string,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  tabItemRenderer: _propTypes2.default.func,
  onTabClick: _propTypes2.default.func,
  onTabKeyDown: _propTypes2.default.func
};

/**
 *
 */
var TabNav = function TabNav(props) {
  var type = props.type,
      tabs = props.tabs,
      activeKey = props.activeKey,
      activeTabRef = props.activeTabRef,
      onTabClick = props.onTabClick,
      onTabKeyDown = props.onTabKeyDown;

  var tabNavClassName = 'slds-tabs--' + type + '__nav';
  return _react2.default.createElement(
    'ul',
    { className: tabNavClassName, role: 'tablist' },
    _react2.default.Children.map(tabs, function (tab) {
      return _react2.default.createElement(TabItem, (0, _extends3.default)({}, tab.props, {
        type: type,
        activeKey: activeKey,
        activeTabRef: activeTabRef,
        onTabClick: onTabClick,
        onTabKeyDown: onTabKeyDown
      }));
    })
  );
};

TabNav.propTypes = {
  type: _propTypes2.default.string,
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  activeTabRef: _propTypes2.default.func,
  tabs: _propTypes2.default.node,
  onTabClick: _propTypes2.default.func,
  onTabKeyDown: _propTypes2.default.func
};

/**
 *
 */
var Tab = exports.Tab = function Tab(props) {
  var className = props.className,
      eventKey = props.eventKey,
      activeKey = props.activeKey,
      children = props.children;

  return _react2.default.createElement(
    TabContent,
    { className: className, active: eventKey === activeKey },
    children
  );
};

Tab.propTypes = {
  className: _propTypes2.default.string,
  title: _propTypes2.default.string,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  menu: _propTypes2.default.element,
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.element),
  menuIcon: _propTypes2.default.string,
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  children: _propTypes2.default.node,
  tabItemRenderer: _propTypes2.default.func
};

/**
 *
 */

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this));

    _this.onTabClick = function (tabKey) {
      if (_this.props.onSelect) {
        _this.props.onSelect(tabKey);
      }
      // Uncontrolled
      _this.setState({ activeKey: tabKey, focusTab: true });
    };

    _this.onTabKeyDown = function (tabKey, e) {
      if (e.keyCode === 37 || e.keyCode === 39) {
        // left/right cursor key
        var idx = 0;
        var tabKeys = [];
        _react2.default.Children.forEach(_this.props.children, function (tab, i) {
          tabKeys.push(tab.props.eventKey);
          if (tabKey === tab.props.eventKey) {
            idx = i;
          }
        });
        var dir = e.keyCode === 37 ? -1 : 1;
        var activeIdx = (idx + dir + tabKeys.length) % tabKeys.length;
        var activeKey = tabKeys[activeIdx];
        _this.onTabClick(activeKey);
        e.preventDefault();
        e.stopPropagation();
      }
    };

    _this.state = {};
    (0, _util.registerStyle)('tab-menu', [['.slds-tabs__item.react-slds-tab-with-menu', '{ position: relative !important; overflow: visible !important; }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-content', '{ overflow: hidden }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-content > a', '{ padding-right: 2rem; }'], ['.react-slds-tab-menu', '{ position: absolute; top: 0; right: 0; }'], ['.react-slds-tab-menu button', '{ height: 2.5rem; line-height: 2rem; width: 2rem; visibility: hidden }'], ['.slds-tabs__item.slds-active .react-slds-tab-menu button', '.slds-tabs__item:hover .react-slds-tab-menu button', '.slds-tabs__item .react-slds-tab-menu button:focus', '{ visibility: visible }']]);
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.focusTab) {
        var el = this.activeTab;
        if (el) {
          el.focus();
        }
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ focusTab: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children;

      var type = this.props.type === 'scoped' ? 'scoped' : 'default';
      var tabsClassNames = (0, _classnames2.default)(className, 'slds-tabs--' + type);
      var activeKey = typeof this.props.activeKey !== 'undefined' ? this.props.activeKey : typeof this.state.activeKey !== 'undefined' ? this.state.activeKey : this.props.defaultActiveKey;
      return _react2.default.createElement(
        'div',
        { className: tabsClassNames },
        _react2.default.createElement(TabNav, {
          type: type,
          activeKey: activeKey,
          activeTabRef: function activeTabRef(node) {
            _this2.activeTab = node;
          },
          tabs: children,
          onTabClick: this.onTabClick,
          onTabKeyDown: this.onTabKeyDown
        }),
        _react2.default.Children.map(children, function (tab) {
          return _react2.default.cloneElement(tab, { activeKey: activeKey });
        })
      );
    }
  }]);
  return Tabs;
}(_react.Component);

exports.default = Tabs;


var TAB_TYPES = ['default', 'scoped'];

Tabs.propTypes = {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(TAB_TYPES),
  onSelect: _propTypes2.default.func,
  children: _propTypes2.default.node,
  defaultActiveKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOlsiVGFiQ29udGVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0YWJDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJUYWJNZW51IiwiaWNvbiIsIkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsIlRhYkl0ZW0iLCJ0eXBlIiwidGl0bGUiLCJhY3RpdmVLZXkiLCJldmVudEtleSIsImFjdGl2ZVRhYlJlZiIsIm1lbnUiLCJtZW51SWNvbiIsIm9uVGFiQ2xpY2siLCJvblRhYktleURvd24iLCJtZW51SXRlbXMiLCJtZW51UHJvcHMiLCJpc0FjdGl2ZSIsInRhYkl0ZW1DbGFzc05hbWUiLCJ0YWJMaW5rQ2xhc3NOYW1lIiwidGFiSXRlbVJlbmRlcmVyIiwiVGFiSXRlbVJlbmRlcmVyIiwidW5kZWZpbmVkIiwiZSIsImZ1bmMiLCJlbGVtZW50IiwiYXJyYXlPZiIsIm9uZU9mVHlwZSIsIm51bWJlciIsIlRhYk5hdiIsInRhYnMiLCJ0YWJOYXZDbGFzc05hbWUiLCJtYXAiLCJ0YWIiLCJUYWIiLCJUYWJzIiwidGFiS2V5Iiwib25TZWxlY3QiLCJzZXRTdGF0ZSIsImZvY3VzVGFiIiwia2V5Q29kZSIsImlkeCIsInRhYktleXMiLCJmb3JFYWNoIiwiaSIsInB1c2giLCJkaXIiLCJhY3RpdmVJZHgiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN0YXRlIiwiZWwiLCJhY3RpdmVUYWIiLCJmb2N1cyIsInRhYnNDbGFzc05hbWVzIiwiZGVmYXVsdEFjdGl2ZUtleSIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCIsIlRBQl9UWVBFUyIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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bGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYkNvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGFjdGl2ZSwgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHRhYkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICAnc2xkcy10YWJzX19jb250ZW50JyxcbiAgICBgc2xkcy0ke2FjdGl2ZSA/ICdzaG93JyA6ICdoaWRlJ31gXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyB0YWJDbGFzc05hbWVzIH0gcm9sZT0ndGFicGFuZWwnIHsgLi4ucHByb3BzIH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRhYkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGljb24gPSAnZG93bicsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLXRhYi1tZW51J1xuICAgICAgaWNvbj17IGljb24gfVxuICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgaWNvblNpemU9J3NtYWxsJ1xuICAgICAgbnViYmluVG9wXG4gICAgICB7IC4uLnBwcm9wcyB9XG4gICAgPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgKTtcbn07XG5cblRhYk1lbnUucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jb25zdCBEZWZhdWx0VGFiSXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gKFxuICBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKVxuKTtcblxuRGVmYXVsdFRhYkl0ZW1SZW5kZXJlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCB0aXRsZSwgYWN0aXZlS2V5LCBldmVudEtleSwgYWN0aXZlVGFiUmVmLFxuICAgIG1lbnUsIG1lbnVJY29uLFxuICAgIG9uVGFiQ2xpY2ssIG9uVGFiS2V5RG93bixcbiAgfSA9IHByb3BzO1xuICBsZXQgeyBtZW51SXRlbXMgfSA9IHByb3BzO1xuICBtZW51SXRlbXMgPSBtZW51ID8gbWVudS5wcm9wcy5jaGlsZHJlbiA6IG1lbnVJdGVtcztcbiAgY29uc3QgbWVudVByb3BzID0gbWVudSA/IG1lbnUucHJvcHMgOiB7fTtcbiAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICBjb25zdCB0YWJJdGVtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICB7ICdzbGRzLXRhYnNfX2l0ZW0nOiAhIW1lbnVJdGVtcyB9LFxuICAgIGBzbGRzLXRhYnMtLSR7dHlwZX1fX2l0ZW1gLFxuICAgICdzbGRzLXRleHQtaGVhZGluZy0tLWxhYmVsJyxcbiAgICB7ICdzbGRzLWFjdGl2ZSc6IGlzQWN0aXZlIH0sXG4gICAgeyAncmVhY3Qtc2xkcy10YWItd2l0aC1tZW51JzogbWVudSB8fCBtZW51SXRlbXMgfVxuICApO1xuICBjb25zdCB0YWJMaW5rQ2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbGlua2A7XG4gIGNvbnN0IHsgdGFiSXRlbVJlbmRlcmVyOiBUYWJJdGVtUmVuZGVyZXIgPSBEZWZhdWx0VGFiSXRlbVJlbmRlcmVyLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9eyB0YWJJdGVtQ2xhc3NOYW1lIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgIDxUYWJJdGVtUmVuZGVyZXIgeyAuLi5wcHJvcHMgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQnPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9eyB0YWJMaW5rQ2xhc3NOYW1lIH1cbiAgICAgICAgICAgIHJvbGU9J3RhYidcbiAgICAgICAgICAgIHJlZj17IGlzQWN0aXZlID8gYWN0aXZlVGFiUmVmIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgIHRhYkluZGV4PXsgaXNBY3RpdmUgPyAwIDogLTEgfVxuICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvblRhYkNsaWNrKGV2ZW50S2V5KSB9XG4gICAgICAgICAgICBvbktleURvd249eyBlID0+IG9uVGFiS2V5RG93bihldmVudEtleSwgZSkgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZW51SXRlbXMgP1xuICAgICAgICAgICAgICA8VGFiTWVudSBpY29uPXsgbWVudUljb24gfSB7IC4uLm1lbnVQcm9wcyB9PnsgbWVudUl0ZW1zIH08L1RhYk1lbnU+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1RhYkl0ZW1SZW5kZXJlcj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuVGFiSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZVRhYlJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICB0YWJJdGVtUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiTmF2ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCB0YWJzLCBhY3RpdmVLZXksIGFjdGl2ZVRhYlJlZixcbiAgICBvblRhYkNsaWNrLCBvblRhYktleURvd24sXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgdGFiTmF2Q2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbmF2YDtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXsgdGFiTmF2Q2xhc3NOYW1lIH0gcm9sZT0ndGFibGlzdCc+XG4gICAgICB7XG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0YWJzLCB0YWIgPT4gKFxuICAgICAgICAgIDxUYWJJdGVtXG4gICAgICAgICAgICB7IC4uLnRhYi5wcm9wcyB9XG4gICAgICAgICAgICB0eXBlPXsgdHlwZSB9XG4gICAgICAgICAgICBhY3RpdmVLZXk9eyBhY3RpdmVLZXkgfVxuICAgICAgICAgICAgYWN0aXZlVGFiUmVmPXsgYWN0aXZlVGFiUmVmIH1cbiAgICAgICAgICAgIG9uVGFiQ2xpY2s9eyBvblRhYkNsaWNrIH1cbiAgICAgICAgICAgIG9uVGFiS2V5RG93bj17IG9uVGFiS2V5RG93biB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L3VsPlxuICApO1xufTtcblxuVGFiTmF2LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBhY3RpdmVUYWJSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB0YWJzOiBQcm9wVHlwZXMubm9kZSxcbiAgb25UYWJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFiS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBUYWIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGV2ZW50S2V5LCBhY3RpdmVLZXksIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8VGFiQ29udGVudCBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSBhY3RpdmU9eyBldmVudEtleSA9PT0gYWN0aXZlS2V5IH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L1RhYkNvbnRlbnQ+XG4gICk7XG59O1xuXG5UYWIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICBtZW51SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRhYkl0ZW1SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHJlZ2lzdGVyU3R5bGUoJ3RhYi1tZW51JywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnLFxuICAgICAgICAneyBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUgPiAucmVhY3Qtc2xkcy10YWItaXRlbS1jb250ZW50JyxcbiAgICAgICAgJ3sgb3ZlcmZsb3c6IGhpZGRlbiB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQgPiBhJyxcbiAgICAgICAgJ3sgcGFkZGluZy1yaWdodDogMnJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxuICAgICAgICAneyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgcmlnaHQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbicsXG4gICAgICAgICd7IGhlaWdodDogMi41cmVtOyBsaW5lLWhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07IHZpc2liaWxpdHk6IGhpZGRlbiB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnNsZHMtYWN0aXZlIC5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbicsXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtOmhvdmVyIC5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbicsXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtIC5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbjpmb2N1cycsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzVGFiKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuYWN0aXZlVGFiO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzVGFiOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblRhYkNsaWNrID0gKHRhYktleSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRhYktleSk7XG4gICAgfVxuICAgIC8vIFVuY29udHJvbGxlZFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IHRhYktleSwgZm9jdXNUYWI6IHRydWUgfSk7XG4gIH1cblxuICBvblRhYktleURvd24gPSAodGFiS2V5LCBlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkgeyAvLyBsZWZ0L3JpZ2h0IGN1cnNvciBrZXlcbiAgICAgIGxldCBpZHggPSAwO1xuICAgICAgY29uc3QgdGFiS2V5cyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAodGFiLCBpKSA9PiB7XG4gICAgICAgIHRhYktleXMucHVzaCh0YWIucHJvcHMuZXZlbnRLZXkpO1xuICAgICAgICBpZiAodGFiS2V5ID09PSB0YWIucHJvcHMuZXZlbnRLZXkpIHtcbiAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRpciA9IGUua2V5Q29kZSA9PT0gMzcgPyAtMSA6IDE7XG4gICAgICBjb25zdCBhY3RpdmVJZHggPSAoaWR4ICsgZGlyICsgdGFiS2V5cy5sZW5ndGgpICUgdGFiS2V5cy5sZW5ndGg7XG4gICAgICBjb25zdCBhY3RpdmVLZXkgPSB0YWJLZXlzW2FjdGl2ZUlkeF07XG4gICAgICB0aGlzLm9uVGFiQ2xpY2soYWN0aXZlS2V5KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wcy50eXBlID09PSAnc2NvcGVkJyA/ICdzY29wZWQnIDogJ2RlZmF1bHQnO1xuICAgIGNvbnN0IHRhYnNDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLXRhYnMtLSR7dHlwZX1gKTtcbiAgICBjb25zdCBhY3RpdmVLZXkgPVxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDpcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmFjdGl2ZUtleSA6XG4gICAgICB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFic0NsYXNzTmFtZXMgfT5cbiAgICAgICAgPFRhYk5hdlxuICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICBhY3RpdmVLZXk9eyBhY3RpdmVLZXkgfVxuICAgICAgICAgIGFjdGl2ZVRhYlJlZj17IChub2RlKSA9PiB7IHRoaXMuYWN0aXZlVGFiID0gbm9kZTsgfSB9XG4gICAgICAgICAgdGFicz17IGNoaWxkcmVuIH1cbiAgICAgICAgICBvblRhYkNsaWNrPXsgdGhpcy5vblRhYkNsaWNrIH1cbiAgICAgICAgICBvblRhYktleURvd249eyB0aGlzLm9uVGFiS2V5RG93biB9XG4gICAgICAgIC8+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0YWIgPT4gUmVhY3QuY2xvbmVFbGVtZW50KHRhYiwgeyBhY3RpdmVLZXkgfSkpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgVEFCX1RZUEVTID0gWydkZWZhdWx0JywgJ3Njb3BlZCddO1xuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoVEFCX1RZUEVTKSxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGRlZmF1bHRBY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbn07XG4iXX0=