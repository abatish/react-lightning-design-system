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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOlsiVGFiQ29udGVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0YWJDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJUYWJNZW51IiwiaWNvbiIsIkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIiLCJDaGlsZHJlbiIsIm9ubHkiLCJUYWJJdGVtIiwidHlwZSIsInRpdGxlIiwiYWN0aXZlS2V5IiwiZXZlbnRLZXkiLCJhY3RpdmVUYWJSZWYiLCJtZW51IiwibWVudUljb24iLCJvblRhYkNsaWNrIiwib25UYWJLZXlEb3duIiwibWVudUl0ZW1zIiwibWVudVByb3BzIiwiaXNBY3RpdmUiLCJ0YWJJdGVtQ2xhc3NOYW1lIiwidGFiTGlua0NsYXNzTmFtZSIsInRhYkl0ZW1SZW5kZXJlciIsIlRhYkl0ZW1SZW5kZXJlciIsInVuZGVmaW5lZCIsImUiLCJmdW5jIiwiZWxlbWVudCIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJUYWJOYXYiLCJ0YWJzIiwidGFiTmF2Q2xhc3NOYW1lIiwibWFwIiwidGFiIiwiVGFiIiwiVGFicyIsInRhYktleSIsIm9uU2VsZWN0Iiwic2V0U3RhdGUiLCJmb2N1c1RhYiIsImtleUNvZGUiLCJpZHgiLCJ0YWJLZXlzIiwiZm9yRWFjaCIsImkiLCJwdXNoIiwiZGlyIiwiYWN0aXZlSWR4IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGF0ZSIsImVsIiwiYWN0aXZlVGFiIiwiZm9jdXMiLCJ0YWJzQ2xhc3NOYW1lcyIsImRlZmF1bHRBY3RpdmVLZXkiLCJjbG9uZUVsZW1lbnQiLCJUQUJfVFlQRVMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7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RSxnQkFIYjtBQUlBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBWUQsY0FBakI7QUFDRSxzQ0FBQyxNQUFEO0FBQ0UsZ0JBQU9qRCxJQURUO0FBRUUscUJBQVlFLFNBRmQ7QUFHRSx3QkFBZSxzQkFBQ1QsSUFBRCxFQUFVO0FBQUUsbUJBQUtzRCxTQUFMLEdBQWlCdEQsSUFBakI7QUFBd0IsV0FIckQ7QUFJRSxnQkFBT04sUUFKVDtBQUtFLHNCQUFhLEtBQUtvQixVQUxwQjtBQU1FLHdCQUFlLEtBQUtDO0FBTnRCLFVBREY7QUFTSSx3QkFBTVgsUUFBTixDQUFlNkIsR0FBZixDQUFtQnZDLFFBQW5CLEVBQTZCO0FBQUEsaUJBQU8sZ0JBQU1nRSxZQUFOLENBQW1CeEIsR0FBbkIsRUFBd0IsRUFBRXpCLG9CQUFGLEVBQXhCLENBQVA7QUFBQSxTQUE3QjtBQVRKLE9BREY7QUFhRDs7Ozs7a0JBOUZrQjJCLEk7OztBQWlHckIsSUFBTXVCLFlBQVksQ0FBQyxTQUFELEVBQVksUUFBWixDQUFsQjs7QUFFQXZCLEtBQUt2QyxTQUFMLEdBQWlCO0FBQ2ZMLGFBQVcsb0JBQVVNLE1BRE47QUFFZlMsUUFBTSxvQkFBVXFELEtBQVYsQ0FBZ0JELFNBQWhCLENBRlM7QUFHZnJCLFlBQVUsb0JBQVViLElBSEw7QUFJZi9CLFlBQVUsb0JBQVVNLElBSkw7QUFLZnlELG9CQUFrQixvQkFBVTdCLFNBQVYsQ0FBb0IsQ0FDcEMsb0JBQVU5QixNQUQwQixFQUVwQyxvQkFBVStCLE1BRjBCLENBQXBCLENBTEg7QUFTZnBCLGFBQVcsb0JBQVVtQixTQUFWLENBQW9CLENBQzdCLG9CQUFVOUIsTUFEbUIsRUFFN0Isb0JBQVUrQixNQUZtQixDQUFwQjtBQVRJLENBQWpCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiQ29udGVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgYWN0aXZlLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgdGFiQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdzbGRzLXRhYnNfX2NvbnRlbnQnLFxuICAgIGBzbGRzLSR7YWN0aXZlID8gJ3Nob3cnIDogJ2hpZGUnfWBcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYkNsYXNzTmFtZXMgfSByb2xlPSd0YWJwYW5lbCcgeyAuLi5wcHJvcHMgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGFiQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWNvbiA9ICdkb3duJywgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLW1lbnUnXG4gICAgICBpY29uPXsgaWNvbiB9XG4gICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICBpY29uU2l6ZT0nc21hbGwnXG4gICAgICBudWJiaW5Ub3BcbiAgICAgIHsgLi4ucHByb3BzIH1cbiAgICA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICApO1xufTtcblxuVGFiTWVudS5wcm9wVHlwZXMgPSB7XG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IERlZmF1bHRUYWJJdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiAoXG4gIFJlYWN0LkNoaWxkcmVuLm9ubHkocHJvcHMuY2hpbGRyZW4pXG4pO1xuXG5EZWZhdWx0VGFiSXRlbVJlbmRlcmVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYkl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIHRpdGxlLCBhY3RpdmVLZXksIGV2ZW50S2V5LCBhY3RpdmVUYWJSZWYsXG4gICAgbWVudSwgbWVudUljb24sXG4gICAgb25UYWJDbGljaywgb25UYWJLZXlEb3duLFxuICB9ID0gcHJvcHM7XG4gIGxldCB7IG1lbnVJdGVtcyB9ID0gcHJvcHM7XG4gIG1lbnVJdGVtcyA9IG1lbnUgPyBtZW51LnByb3BzLmNoaWxkcmVuIDogbWVudUl0ZW1zO1xuICBjb25zdCBtZW51UHJvcHMgPSBtZW51ID8gbWVudS5wcm9wcyA6IHt9O1xuICBjb25zdCBpc0FjdGl2ZSA9IGV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XG4gIGNvbnN0IHRhYkl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgIHsgJ3NsZHMtdGFic19faXRlbSc6ICEhbWVudUl0ZW1zIH0sXG4gICAgYHNsZHMtdGFicy0tJHt0eXBlfV9faXRlbWAsXG4gICAgJ3NsZHMtdGV4dC1oZWFkaW5nLS0tbGFiZWwnLFxuICAgIHsgJ3NsZHMtYWN0aXZlJzogaXNBY3RpdmUgfSxcbiAgICB7ICdyZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnOiBtZW51IHx8IG1lbnVJdGVtcyB9XG4gICk7XG4gIGNvbnN0IHRhYkxpbmtDbGFzc05hbWUgPSBgc2xkcy10YWJzLS0ke3R5cGV9X19saW5rYDtcbiAgY29uc3QgeyB0YWJJdGVtUmVuZGVyZXI6IFRhYkl0ZW1SZW5kZXJlciA9IERlZmF1bHRUYWJJdGVtUmVuZGVyZXIsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT17IHRhYkl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgPFRhYkl0ZW1SZW5kZXJlciB7IC4uLnBwcm9wcyB9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLWl0ZW0tY29udGVudCc+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IHRhYkxpbmtDbGFzc05hbWUgfVxuICAgICAgICAgICAgcm9sZT0ndGFiJ1xuICAgICAgICAgICAgcmVmPXsgaXNBY3RpdmUgPyBhY3RpdmVUYWJSZWYgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgdGFiSW5kZXg9eyBpc0FjdGl2ZSA/IDAgOiAtMSB9XG4gICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXsgaXNBY3RpdmUgfVxuICAgICAgICAgICAgb25DbGljaz17ICgpID0+IG9uVGFiQ2xpY2soZXZlbnRLZXkpIH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17IGUgPT4gb25UYWJLZXlEb3duKGV2ZW50S2V5LCBlKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1lbnVJdGVtcyA/XG4gICAgICAgICAgICAgIDxUYWJNZW51IGljb249eyBtZW51SWNvbiB9IHsgLi4ubWVudVByb3BzIH0+eyBtZW51SXRlbXMgfTwvVGFiTWVudT4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVGFiSXRlbVJlbmRlcmVyPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5UYWJJdGVtLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlVGFiUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgbWVudUljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHRhYkl0ZW1SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFiQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJOYXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cGUsIHRhYnMsIGFjdGl2ZUtleSwgYWN0aXZlVGFiUmVmLFxuICAgIG9uVGFiQ2xpY2ssIG9uVGFiS2V5RG93bixcbiAgfSA9IHByb3BzO1xuICBjb25zdCB0YWJOYXZDbGFzc05hbWUgPSBgc2xkcy10YWJzLS0ke3R5cGV9X19uYXZgO1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9eyB0YWJOYXZDbGFzc05hbWUgfSByb2xlPSd0YWJsaXN0Jz5cbiAgICAgIHtcbiAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKHRhYnMsIHRhYiA9PiAoXG4gICAgICAgICAgPFRhYkl0ZW1cbiAgICAgICAgICAgIHsgLi4udGFiLnByb3BzIH1cbiAgICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICAgIGFjdGl2ZUtleT17IGFjdGl2ZUtleSB9XG4gICAgICAgICAgICBhY3RpdmVUYWJSZWY9eyBhY3RpdmVUYWJSZWYgfVxuICAgICAgICAgICAgb25UYWJDbGljaz17IG9uVGFiQ2xpY2sgfVxuICAgICAgICAgICAgb25UYWJLZXlEb3duPXsgb25UYWJLZXlEb3duIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5UYWJOYXYucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGFjdGl2ZVRhYlJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRhYnM6IFByb3BUeXBlcy5ub2RlLFxuICBvblRhYkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFRhYiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgZXZlbnRLZXksIGFjdGl2ZUtleSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxUYWJDb250ZW50IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IGFjdGl2ZT17IGV2ZW50S2V5ID09PSBhY3RpdmVLZXkgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvVGFiQ29udGVudD5cbiAgKTtcbn07XG5cblRhYi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdGFiSXRlbVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgcmVnaXN0ZXJTdHlsZSgndGFiLW1lbnUnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudScsXG4gICAgICAgICd7IHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQnLFxuICAgICAgICAneyBvdmVyZmxvdzogaGlkZGVuIH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51ID4gLnJlYWN0LXNsZHMtdGFiLWl0ZW0tY29udGVudCA+IGEnLFxuICAgICAgICAneyBwYWRkaW5nLXJpZ2h0OiAycmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy10YWItbWVudScsXG4gICAgICAgICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAyLjVyZW07IGxpbmUtaGVpZ2h0OiAycmVtOyB3aWR0aDogMnJlbTsgdmlzaWJpbGl0eTogaGlkZGVuIH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0uc2xkcy1hY3RpdmUgLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW06aG92ZXIgLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0gLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uOmZvY3VzJyxcbiAgICAgICAgJ3sgdmlzaWJpbGl0eTogdmlzaWJsZSB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNUYWIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5hY3RpdmVUYWI7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNUYWI6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFiQ2xpY2sgPSAodGFiS2V5KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGFiS2V5KTtcbiAgICB9XG4gICAgLy8gVW5jb250cm9sbGVkXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleTogdGFiS2V5LCBmb2N1c1RhYjogdHJ1ZSB9KTtcbiAgfVxuXG4gIG9uVGFiS2V5RG93biA9ICh0YWJLZXksIGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM5KSB7IC8vIGxlZnQvcmlnaHQgY3Vyc29yIGtleVxuICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICBjb25zdCB0YWJLZXlzID0gW107XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sICh0YWIsIGkpID0+IHtcbiAgICAgICAgdGFiS2V5cy5wdXNoKHRhYi5wcm9wcy5ldmVudEtleSk7XG4gICAgICAgIGlmICh0YWJLZXkgPT09IHRhYi5wcm9wcy5ldmVudEtleSkge1xuICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGlyID0gZS5rZXlDb2RlID09PSAzNyA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkeCA9IChpZHggKyBkaXIgKyB0YWJLZXlzLmxlbmd0aCkgJSB0YWJLZXlzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRhYktleXNbYWN0aXZlSWR4XTtcbiAgICAgIHRoaXMub25UYWJDbGljayhhY3RpdmVLZXkpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPT09ICdzY29wZWQnID8gJ3Njb3BlZCcgOiAnZGVmYXVsdCc7XG4gICAgY29uc3QgdGFic0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtdGFicy0tJHt0eXBlfWApO1xuICAgIGNvbnN0IGFjdGl2ZUtleSA9XG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT09ICd1bmRlZmluZWQnID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOlxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUuYWN0aXZlS2V5IDpcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0YWJzQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8VGFiTmF2XG4gICAgICAgICAgdHlwZT17IHR5cGUgfVxuICAgICAgICAgIGFjdGl2ZUtleT17IGFjdGl2ZUtleSB9XG4gICAgICAgICAgYWN0aXZlVGFiUmVmPXsgKG5vZGUpID0+IHsgdGhpcy5hY3RpdmVUYWIgPSBub2RlOyB9IH1cbiAgICAgICAgICB0YWJzPXsgY2hpbGRyZW4gfVxuICAgICAgICAgIG9uVGFiQ2xpY2s9eyB0aGlzLm9uVGFiQ2xpY2sgfVxuICAgICAgICAgIG9uVGFiS2V5RG93bj17IHRoaXMub25UYWJLZXlEb3duIH1cbiAgICAgICAgLz5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRhYiA9PiBSZWFjdC5jbG9uZUVsZW1lbnQodGFiLCB7IGFjdGl2ZUtleSB9KSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBUQUJfVFlQRVMgPSBbJ2RlZmF1bHQnLCAnc2NvcGVkJ107XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihUQUJfVFlQRVMpLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGVmYXVsdEFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxufTtcbiJdfQ==