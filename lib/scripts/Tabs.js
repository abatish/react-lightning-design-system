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
  className: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node
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
  icon: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var DefaultTabItemRenderer = function DefaultTabItemRenderer(props) {
  return _react2.default.Children.only(props.children);
};

DefaultTabItemRenderer.propTypes = {
  children: _react.PropTypes.node
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
  type: _react.PropTypes.string,
  activeTabRef: _react.PropTypes.func,
  title: _react.PropTypes.string,
  menu: _react.PropTypes.element,
  menuItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
  menuIcon: _react.PropTypes.string,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  tabItemRenderer: _react.PropTypes.func,
  onTabClick: _react.PropTypes.func,
  onTabKeyDown: _react.PropTypes.func
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
  type: _react.PropTypes.string,
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  activeTabRef: _react.PropTypes.func,
  tabs: _react.PropTypes.node,
  onTabClick: _react.PropTypes.func,
  onTabKeyDown: _react.PropTypes.func
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
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  eventKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  menu: _react.PropTypes.element,
  menuItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
  menuIcon: _react.PropTypes.string,
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  children: _react.PropTypes.node,
  tabItemRenderer: _react.PropTypes.func
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
    (0, _util.registerStyle)('tab-menu', [['.slds-tabs__item.react-slds-tab-with-menu', '{ position: relative !important; overflow: visible !important; }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-content', '{ overflow: hidden }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-content > a', '{ padding-right: 2rem; }'], ['.react-slds-tab-menu', '{ position: absolute; top: 0; right: 0; visibility: hidden }'], ['.react-slds-tab-menu button', '{ height: 2.5rem; line-height: 2rem; width: 2rem; }'], ['.slds-tabs__item.slds-active .react-slds-tab-menu', '.slds-tabs__item:hover .react-slds-tab-menu', '{ visibility: visible }']]);
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
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(TAB_TYPES),
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node,
  defaultActiveKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOlsiVGFiQ29udGVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0YWJDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJUYWJNZW51IiwiaWNvbiIsIkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIiLCJDaGlsZHJlbiIsIm9ubHkiLCJUYWJJdGVtIiwidHlwZSIsInRpdGxlIiwiYWN0aXZlS2V5IiwiZXZlbnRLZXkiLCJhY3RpdmVUYWJSZWYiLCJtZW51IiwibWVudUljb24iLCJvblRhYkNsaWNrIiwib25UYWJLZXlEb3duIiwibWVudUl0ZW1zIiwibWVudVByb3BzIiwiaXNBY3RpdmUiLCJ0YWJJdGVtQ2xhc3NOYW1lIiwidGFiTGlua0NsYXNzTmFtZSIsInRhYkl0ZW1SZW5kZXJlciIsIlRhYkl0ZW1SZW5kZXJlciIsInVuZGVmaW5lZCIsImUiLCJmdW5jIiwiZWxlbWVudCIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJUYWJOYXYiLCJ0YWJzIiwidGFiTmF2Q2xhc3NOYW1lIiwibWFwIiwidGFiIiwiVGFiIiwiVGFicyIsInRhYktleSIsIm9uU2VsZWN0Iiwic2V0U3RhdGUiLCJmb2N1c1RhYiIsImtleUNvZGUiLCJpZHgiLCJ0YWJLZXlzIiwiZm9yRWFjaCIsImkiLCJwdXNoIiwiZGlyIiwiYWN0aXZlSWR4IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGF0ZSIsImVsIiwiYWN0aXZlVGFiIiwiZm9jdXMiLCJ0YWJzQ2xhc3NOYW1lcyIsImRlZmF1bHRBY3RpdmVLZXkiLCJjbG9uZUVsZW1lbnQiLCJUQUJfVFlQRVMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7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QUFBO0FBQUEsVUFBSyxXQUFZRCxjQUFqQjtBQUNFLHNDQUFDLE1BQUQ7QUFDRSxnQkFBT2pELElBRFQ7QUFFRSxxQkFBWUUsU0FGZDtBQUdFLHdCQUFlLHNCQUFDVCxJQUFELEVBQVU7QUFBRSxtQkFBS3NELFNBQUwsR0FBaUJ0RCxJQUFqQjtBQUF3QixXQUhyRDtBQUlFLGdCQUFPTixRQUpUO0FBS0Usc0JBQWEsS0FBS29CLFVBTHBCO0FBTUUsd0JBQWUsS0FBS0M7QUFOdEIsVUFERjtBQVNJLHdCQUFNWCxRQUFOLENBQWU2QixHQUFmLENBQW1CdkMsUUFBbkIsRUFBNkI7QUFBQSxpQkFBTyxnQkFBTWdFLFlBQU4sQ0FBbUJ4QixHQUFuQixFQUF3QixFQUFFekIsb0JBQUYsRUFBeEIsQ0FBUDtBQUFBLFNBQTdCO0FBVEosT0FERjtBQWFEOzs7OztrQkE3RmtCMkIsSTs7O0FBZ0dyQixJQUFNdUIsWUFBWSxDQUFDLFNBQUQsRUFBWSxRQUFaLENBQWxCOztBQUVBdkIsS0FBS3ZDLFNBQUwsR0FBaUI7QUFDZkwsYUFBVyxpQkFBVU0sTUFETjtBQUVmUyxRQUFNLGlCQUFVcUQsS0FBVixDQUFnQkQsU0FBaEIsQ0FGUztBQUdmckIsWUFBVSxpQkFBVWIsSUFITDtBQUlmL0IsWUFBVSxpQkFBVU0sSUFKTDtBQUtmeUQsb0JBQWtCLGlCQUFVN0IsU0FBVixDQUFvQixDQUNwQyxpQkFBVTlCLE1BRDBCLEVBRXBDLGlCQUFVK0IsTUFGMEIsQ0FBcEIsQ0FMSDtBQVNmcEIsYUFBVyxpQkFBVW1CLFNBQVYsQ0FBb0IsQ0FDN0IsaUJBQVU5QixNQURtQixFQUU3QixpQkFBVStCLE1BRm1CLENBQXBCO0FBVEksQ0FBakIiLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgYWN0aXZlLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgdGFiQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdzbGRzLXRhYnNfX2NvbnRlbnQnLFxuICAgIGBzbGRzLSR7YWN0aXZlID8gJ3Nob3cnIDogJ2hpZGUnfWBcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYkNsYXNzTmFtZXMgfSByb2xlPSd0YWJwYW5lbCcgeyAuLi5wcHJvcHMgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGFiQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWNvbiA9ICdkb3duJywgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLW1lbnUnXG4gICAgICBpY29uPXsgaWNvbiB9XG4gICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICBpY29uU2l6ZT0nc21hbGwnXG4gICAgICBudWJiaW5Ub3BcbiAgICAgIHsgLi4ucHByb3BzIH1cbiAgICA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICApO1xufTtcblxuVGFiTWVudS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IERlZmF1bHRUYWJJdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiAoXG4gIFJlYWN0LkNoaWxkcmVuLm9ubHkocHJvcHMuY2hpbGRyZW4pXG4pO1xuXG5EZWZhdWx0VGFiSXRlbVJlbmRlcmVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYkl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIHRpdGxlLCBhY3RpdmVLZXksIGV2ZW50S2V5LCBhY3RpdmVUYWJSZWYsXG4gICAgbWVudSwgbWVudUljb24sXG4gICAgb25UYWJDbGljaywgb25UYWJLZXlEb3duLFxuICB9ID0gcHJvcHM7XG4gIGxldCB7IG1lbnVJdGVtcyB9ID0gcHJvcHM7XG4gIG1lbnVJdGVtcyA9IG1lbnUgPyBtZW51LnByb3BzLmNoaWxkcmVuIDogbWVudUl0ZW1zO1xuICBjb25zdCBtZW51UHJvcHMgPSBtZW51ID8gbWVudS5wcm9wcyA6IHt9O1xuICBjb25zdCBpc0FjdGl2ZSA9IGV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XG4gIGNvbnN0IHRhYkl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgIHsgJ3NsZHMtdGFic19faXRlbSc6ICEhbWVudUl0ZW1zIH0sXG4gICAgYHNsZHMtdGFicy0tJHt0eXBlfV9faXRlbWAsXG4gICAgJ3NsZHMtdGV4dC1oZWFkaW5nLS0tbGFiZWwnLFxuICAgIHsgJ3NsZHMtYWN0aXZlJzogaXNBY3RpdmUgfSxcbiAgICB7ICdyZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnOiBtZW51IHx8IG1lbnVJdGVtcyB9XG4gICk7XG4gIGNvbnN0IHRhYkxpbmtDbGFzc05hbWUgPSBgc2xkcy10YWJzLS0ke3R5cGV9X19saW5rYDtcbiAgY29uc3QgeyB0YWJJdGVtUmVuZGVyZXI6IFRhYkl0ZW1SZW5kZXJlciA9IERlZmF1bHRUYWJJdGVtUmVuZGVyZXIsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17IHRhYkl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgPFRhYkl0ZW1SZW5kZXJlciB7IC4uLnBwcm9wcyB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLWl0ZW0tY29udGVudCc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRhYkxpbmtDbGFzc05hbWUgfVxuICAgICAgICAgICAgcm9sZT0ndGFiJ1xuICAgICAgICAgICAgcmVmPXsgaXNBY3RpdmUgPyBhY3RpdmVUYWJSZWYgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgdGFiSW5kZXg9eyBpc0FjdGl2ZSA/IDAgOiAtMSB9XG4gICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXsgaXNBY3RpdmUgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uVGFiQ2xpY2soZXZlbnRLZXkpIH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17IGUgPT4gb25UYWJLZXlEb3duKGV2ZW50S2V5LCBlKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lbnVJdGVtcyA/XG4gICAgICAgICAgICAgIDxUYWJNZW51IGljb249eyBtZW51SWNvbiB9IHsgLi4ubWVudVByb3BzIH0+eyBtZW51SXRlbXMgfTwvVGFiTWVudT4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVGFiSXRlbVJlbmRlcmVyPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5UYWJJdGVtLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlVGFiUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgbWVudUljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHRhYkl0ZW1SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFiQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJOYXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIHRhYnMsIGFjdGl2ZUtleSwgYWN0aXZlVGFiUmVmLFxuICAgIG9uVGFiQ2xpY2ssIG9uVGFiS2V5RG93bixcbiAgfSA9IHByb3BzO1xuICBjb25zdCB0YWJOYXZDbGFzc05hbWUgPSBgc2xkcy10YWJzLS0ke3R5cGV9X19uYXZgO1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9eyB0YWJOYXZDbGFzc05hbWUgfSByb2xlPSd0YWJsaXN0Jz5cbiAgICAgIHtcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRhYnMsIHRhYiA9PiAoXG4gICAgICAgICAgPFRhYkl0ZW1cbiAgICAgICAgICAgIHsgLi4udGFiLnByb3BzIH1cbiAgICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICAgIGFjdGl2ZUtleT17IGFjdGl2ZUtleSB9XG4gICAgICAgICAgICBhY3RpdmVUYWJSZWY9eyBhY3RpdmVUYWJSZWYgfVxuICAgICAgICAgICAgb25UYWJDbGljaz17IG9uVGFiQ2xpY2sgfVxuICAgICAgICAgICAgb25UYWJLZXlEb3duPXsgb25UYWJLZXlEb3duIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5UYWJOYXYucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGFjdGl2ZVRhYlJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRhYnM6IFByb3BUeXBlcy5ub2RlLFxuICBvblRhYkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgZXZlbnRLZXksIGFjdGl2ZUtleSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZW50IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IGFjdGl2ZT17IGV2ZW50S2V5ID09PSBhY3RpdmVLZXkgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvVGFiQ29udGVudD5cbiAgKTtcbn07XG5cblRhYi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdGFiSXRlbVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgcmVnaXN0ZXJTdHlsZSgndGFiLW1lbnUnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudScsXG4gICAgICAgICd7IHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQnLFxuICAgICAgICAneyBvdmVyZmxvdzogaGlkZGVuIH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51ID4gLnJlYWN0LXNsZHMtdGFiLWl0ZW0tY29udGVudCA+IGEnLFxuICAgICAgICAneyBwYWRkaW5nLXJpZ2h0OiAycmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy10YWItbWVudScsXG4gICAgICAgICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgdmlzaWJpbGl0eTogaGlkZGVuIH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLXRhYi1tZW51IGJ1dHRvbicsXG4gICAgICAgICd7IGhlaWdodDogMi41cmVtOyBsaW5lLWhlaWdodDogMnJlbTsgd2lkdGg6IDJyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0uc2xkcy1hY3RpdmUgLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxuICAgICAgICAnLnNsZHMtdGFic19faXRlbTpob3ZlciAucmVhY3Qtc2xkcy10YWItbWVudScsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzVGFiKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuYWN0aXZlVGFiO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzVGFiOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblRhYkNsaWNrID0gKHRhYktleSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRhYktleSk7XG4gICAgfVxuICAgIC8vIFVuY29udHJvbGxlZFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IHRhYktleSwgZm9jdXNUYWI6IHRydWUgfSk7XG4gIH1cblxuICBvblRhYktleURvd24gPSAodGFiS2V5LCBlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkgeyAvLyBsZWZ0L3JpZ2h0IGN1cnNvciBrZXlcbiAgICAgIGxldCBpZHggPSAwO1xuICAgICAgY29uc3QgdGFiS2V5cyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAodGFiLCBpKSA9PiB7XG4gICAgICAgIHRhYktleXMucHVzaCh0YWIucHJvcHMuZXZlbnRLZXkpO1xuICAgICAgICBpZiAodGFiS2V5ID09PSB0YWIucHJvcHMuZXZlbnRLZXkpIHtcbiAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRpciA9IGUua2V5Q29kZSA9PT0gMzcgPyAtMSA6IDE7XG4gICAgICBjb25zdCBhY3RpdmVJZHggPSAoaWR4ICsgZGlyICsgdGFiS2V5cy5sZW5ndGgpICUgdGFiS2V5cy5sZW5ndGg7XG4gICAgICBjb25zdCBhY3RpdmVLZXkgPSB0YWJLZXlzW2FjdGl2ZUlkeF07XG4gICAgICB0aGlzLm9uVGFiQ2xpY2soYWN0aXZlS2V5KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wcy50eXBlID09PSAnc2NvcGVkJyA/ICdzY29wZWQnIDogJ2RlZmF1bHQnO1xuICAgIGNvbnN0IHRhYnNDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLXRhYnMtLSR7dHlwZX1gKTtcbiAgICBjb25zdCBhY3RpdmVLZXkgPVxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDpcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmFjdGl2ZUtleSA6XG4gICAgICB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFic0NsYXNzTmFtZXMgfT5cbiAgICAgICAgPFRhYk5hdlxuICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICBhY3RpdmVLZXk9eyBhY3RpdmVLZXkgfVxuICAgICAgICAgIGFjdGl2ZVRhYlJlZj17IChub2RlKSA9PiB7IHRoaXMuYWN0aXZlVGFiID0gbm9kZTsgfSB9XG4gICAgICAgICAgdGFicz17IGNoaWxkcmVuIH1cbiAgICAgICAgICBvblRhYkNsaWNrPXsgdGhpcy5vblRhYkNsaWNrIH1cbiAgICAgICAgICBvblRhYktleURvd249eyB0aGlzLm9uVGFiS2V5RG93biB9XG4gICAgICAgIC8+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0YWIgPT4gUmVhY3QuY2xvbmVFbGVtZW50KHRhYiwgeyBhY3RpdmVLZXkgfSkpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgVEFCX1RZUEVTID0gWydkZWZhdWx0JywgJ3Njb3BlZCddO1xuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoVEFCX1RZUEVTKSxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGRlZmF1bHRBY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbn07XG4iXX0=