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
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(TAB_TYPES),
  onSelect: _propTypes2.default.func,
  children: _propTypes2.default.node,
  defaultActiveKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOlsiVGFiQ29udGVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0YWJDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJUYWJNZW51IiwiaWNvbiIsIkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIiLCJDaGlsZHJlbiIsIm9ubHkiLCJUYWJJdGVtIiwidHlwZSIsInRpdGxlIiwiYWN0aXZlS2V5IiwiZXZlbnRLZXkiLCJhY3RpdmVUYWJSZWYiLCJtZW51IiwibWVudUljb24iLCJvblRhYkNsaWNrIiwib25UYWJLZXlEb3duIiwibWVudUl0ZW1zIiwibWVudVByb3BzIiwiaXNBY3RpdmUiLCJ0YWJJdGVtQ2xhc3NOYW1lIiwidGFiTGlua0NsYXNzTmFtZSIsInRhYkl0ZW1SZW5kZXJlciIsIlRhYkl0ZW1SZW5kZXJlciIsInVuZGVmaW5lZCIsImUiLCJmdW5jIiwiZWxlbWVudCIsImFycmF5T2YiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJUYWJOYXYiLCJ0YWJzIiwidGFiTmF2Q2xhc3NOYW1lIiwibWFwIiwidGFiIiwiVGFiIiwiVGFicyIsInRhYktleSIsIm9uU2VsZWN0Iiwic2V0U3RhdGUiLCJmb2N1c1RhYiIsImtleUNvZGUiLCJpZHgiLCJ0YWJLZXlzIiwiZm9yRWFjaCIsImkiLCJwdXNoIiwiZGlyIiwiYWN0aXZlSWR4IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdGF0ZSIsImVsIiwiYWN0aXZlVGFiIiwiZm9jdXMiLCJ0YWJzQ2xhc3NOYW1lcyIsImRlZmF1bHRBY3RpdmVLZXkiLCJjbG9uZUVsZW1lbnQiLCJUQUJfVFlQRVMiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7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QSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVlELGNBQWpCO0FBQ0Usc0NBQUMsTUFBRDtBQUNFLGdCQUFPakQsSUFEVDtBQUVFLHFCQUFZRSxTQUZkO0FBR0Usd0JBQWUsc0JBQUNULElBQUQsRUFBVTtBQUFFLG1CQUFLc0QsU0FBTCxHQUFpQnRELElBQWpCO0FBQXdCLFdBSHJEO0FBSUUsZ0JBQU9OLFFBSlQ7QUFLRSxzQkFBYSxLQUFLb0IsVUFMcEI7QUFNRSx3QkFBZSxLQUFLQztBQU50QixVQURGO0FBU0ksd0JBQU1YLFFBQU4sQ0FBZTZCLEdBQWYsQ0FBbUJ2QyxRQUFuQixFQUE2QjtBQUFBLGlCQUFPLGdCQUFNZ0UsWUFBTixDQUFtQnhCLEdBQW5CLEVBQXdCLEVBQUV6QixvQkFBRixFQUF4QixDQUFQO0FBQUEsU0FBN0I7QUFUSixPQURGO0FBYUQ7Ozs7O2tCQTdGa0IyQixJOzs7QUFnR3JCLElBQU11QixZQUFZLENBQUMsU0FBRCxFQUFZLFFBQVosQ0FBbEI7O0FBRUF2QixLQUFLdkMsU0FBTCxHQUFpQjtBQUNmTCxhQUFXLG9CQUFVTSxNQUROO0FBRWZTLFFBQU0sb0JBQVVxRCxLQUFWLENBQWdCRCxTQUFoQixDQUZTO0FBR2ZyQixZQUFVLG9CQUFVYixJQUhMO0FBSWYvQixZQUFVLG9CQUFVTSxJQUpMO0FBS2Z5RCxvQkFBa0Isb0JBQVU3QixTQUFWLENBQW9CLENBQ3BDLG9CQUFVOUIsTUFEMEIsRUFFcEMsb0JBQVUrQixNQUYwQixDQUFwQixDQUxIO0FBU2ZwQixhQUFXLG9CQUFVbUIsU0FBVixDQUFvQixDQUM3QixvQkFBVTlCLE1BRG1CLEVBRTdCLG9CQUFVK0IsTUFGbUIsQ0FBcEI7QUFUSSxDQUFqQiIsImZpbGUiOiJUYWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYkNvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGFjdGl2ZSwgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IHRhYkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICAnc2xkcy10YWJzX19jb250ZW50JyxcbiAgICBgc2xkcy0ke2FjdGl2ZSA/ICdzaG93JyA6ICdoaWRlJ31gXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyB0YWJDbGFzc05hbWVzIH0gcm9sZT0ndGFicGFuZWwnIHsgLi4ucHByb3BzIH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRhYkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGljb24gPSAnZG93bicsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLXRhYi1tZW51J1xuICAgICAgaWNvbj17IGljb24gfVxuICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgaWNvblNpemU9J3NtYWxsJ1xuICAgICAgbnViYmluVG9wXG4gICAgICB7IC4uLnBwcm9wcyB9XG4gICAgPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgKTtcbn07XG5cblRhYk1lbnUucHJvcFR5cGVzID0ge1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jb25zdCBEZWZhdWx0VGFiSXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gKFxuICBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKVxuKTtcblxuRGVmYXVsdFRhYkl0ZW1SZW5kZXJlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJJdGVtID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCB0aXRsZSwgYWN0aXZlS2V5LCBldmVudEtleSwgYWN0aXZlVGFiUmVmLFxuICAgIG1lbnUsIG1lbnVJY29uLFxuICAgIG9uVGFiQ2xpY2ssIG9uVGFiS2V5RG93bixcbiAgfSA9IHByb3BzO1xuICBsZXQgeyBtZW51SXRlbXMgfSA9IHByb3BzO1xuICBtZW51SXRlbXMgPSBtZW51ID8gbWVudS5wcm9wcy5jaGlsZHJlbiA6IG1lbnVJdGVtcztcbiAgY29uc3QgbWVudVByb3BzID0gbWVudSA/IG1lbnUucHJvcHMgOiB7fTtcbiAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICBjb25zdCB0YWJJdGVtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICB7ICdzbGRzLXRhYnNfX2l0ZW0nOiAhIW1lbnVJdGVtcyB9LFxuICAgIGBzbGRzLXRhYnMtLSR7dHlwZX1fX2l0ZW1gLFxuICAgICdzbGRzLXRleHQtaGVhZGluZy0tLWxhYmVsJyxcbiAgICB7ICdzbGRzLWFjdGl2ZSc6IGlzQWN0aXZlIH0sXG4gICAgeyAncmVhY3Qtc2xkcy10YWItd2l0aC1tZW51JzogbWVudSB8fCBtZW51SXRlbXMgfVxuICApO1xuICBjb25zdCB0YWJMaW5rQ2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbGlua2A7XG4gIGNvbnN0IHsgdGFiSXRlbVJlbmRlcmVyOiBUYWJJdGVtUmVuZGVyZXIgPSBEZWZhdWx0VGFiSXRlbVJlbmRlcmVyLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9eyB0YWJJdGVtQ2xhc3NOYW1lIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgIDxUYWJJdGVtUmVuZGVyZXIgeyAuLi5wcHJvcHMgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQnPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9eyB0YWJMaW5rQ2xhc3NOYW1lIH1cbiAgICAgICAgICAgIHJvbGU9J3RhYidcbiAgICAgICAgICAgIHJlZj17IGlzQWN0aXZlID8gYWN0aXZlVGFiUmVmIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICAgIHRhYkluZGV4PXsgaXNBY3RpdmUgPyAwIDogLTEgfVxuICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD17IGlzQWN0aXZlIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBvblRhYkNsaWNrKGV2ZW50S2V5KSB9XG4gICAgICAgICAgICBvbktleURvd249eyBlID0+IG9uVGFiS2V5RG93bihldmVudEtleSwgZSkgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZW51SXRlbXMgP1xuICAgICAgICAgICAgICA8VGFiTWVudSBpY29uPXsgbWVudUljb24gfSB7IC4uLm1lbnVQcm9wcyB9PnsgbWVudUl0ZW1zIH08L1RhYk1lbnU+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1RhYkl0ZW1SZW5kZXJlcj5cbiAgICA8L2xpPlxuICApO1xufTtcblxuVGFiSXRlbS5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZVRhYlJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICB0YWJJdGVtUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiTmF2ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0eXBlLCB0YWJzLCBhY3RpdmVLZXksIGFjdGl2ZVRhYlJlZixcbiAgICBvblRhYkNsaWNrLCBvblRhYktleURvd24sXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgdGFiTmF2Q2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbmF2YDtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXsgdGFiTmF2Q2xhc3NOYW1lIH0gcm9sZT0ndGFibGlzdCc+XG4gICAgICB7XG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0YWJzLCB0YWIgPT4gKFxuICAgICAgICAgIDxUYWJJdGVtXG4gICAgICAgICAgICB7IC4uLnRhYi5wcm9wcyB9XG4gICAgICAgICAgICB0eXBlPXsgdHlwZSB9XG4gICAgICAgICAgICBhY3RpdmVLZXk9eyBhY3RpdmVLZXkgfVxuICAgICAgICAgICAgYWN0aXZlVGFiUmVmPXsgYWN0aXZlVGFiUmVmIH1cbiAgICAgICAgICAgIG9uVGFiQ2xpY2s9eyBvblRhYkNsaWNrIH1cbiAgICAgICAgICAgIG9uVGFiS2V5RG93bj17IG9uVGFiS2V5RG93biB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L3VsPlxuICApO1xufTtcblxuVGFiTmF2LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBhY3RpdmVUYWJSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB0YWJzOiBQcm9wVHlwZXMubm9kZSxcbiAgb25UYWJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFiS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBUYWIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGV2ZW50S2V5LCBhY3RpdmVLZXksIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8VGFiQ29udGVudCBjbGFzc05hbWU9eyBjbGFzc05hbWUgfSBhY3RpdmU9eyBldmVudEtleSA9PT0gYWN0aXZlS2V5IH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L1RhYkNvbnRlbnQ+XG4gICk7XG59O1xuXG5UYWIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBldmVudEtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICBtZW51SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRhYkl0ZW1SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHJlZ2lzdGVyU3R5bGUoJ3RhYi1tZW51JywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnLFxuICAgICAgICAneyBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUgPiAucmVhY3Qtc2xkcy10YWItaXRlbS1jb250ZW50JyxcbiAgICAgICAgJ3sgb3ZlcmZsb3c6IGhpZGRlbiB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWNvbnRlbnQgPiBhJyxcbiAgICAgICAgJ3sgcGFkZGluZy1yaWdodDogMnJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxuICAgICAgICAneyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgcmlnaHQ6IDA7IHZpc2liaWxpdHk6IGhpZGRlbiB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy10YWItbWVudSBidXR0b24nLFxuICAgICAgICAneyBoZWlnaHQ6IDIuNXJlbTsgbGluZS1oZWlnaHQ6IDJyZW07IHdpZHRoOiAycmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnNsZHMtYWN0aXZlIC5yZWFjdC1zbGRzLXRhYi1tZW51JyxcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW06aG92ZXIgLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxuICAgICAgICAneyB2aXNpYmlsaXR5OiB2aXNpYmxlIH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c1RhYikge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmFjdGl2ZVRhYjtcbiAgICAgIGlmIChlbCkge1xuICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c1RhYjogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgb25UYWJDbGljayA9ICh0YWJLZXkpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCh0YWJLZXkpO1xuICAgIH1cbiAgICAvLyBVbmNvbnRyb2xsZWRcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlS2V5OiB0YWJLZXksIGZvY3VzVGFiOiB0cnVlIH0pO1xuICB9XG5cbiAgb25UYWJLZXlEb3duID0gKHRhYktleSwgZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM3IHx8IGUua2V5Q29kZSA9PT0gMzkpIHsgLy8gbGVmdC9yaWdodCBjdXJzb3Iga2V5XG4gICAgICBsZXQgaWR4ID0gMDtcbiAgICAgIGNvbnN0IHRhYktleXMgPSBbXTtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKHRhYiwgaSkgPT4ge1xuICAgICAgICB0YWJLZXlzLnB1c2godGFiLnByb3BzLmV2ZW50S2V5KTtcbiAgICAgICAgaWYgKHRhYktleSA9PT0gdGFiLnByb3BzLmV2ZW50S2V5KSB7XG4gICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBkaXIgPSBlLmtleUNvZGUgPT09IDM3ID8gLTEgOiAxO1xuICAgICAgY29uc3QgYWN0aXZlSWR4ID0gKGlkeCArIGRpciArIHRhYktleXMubGVuZ3RoKSAlIHRhYktleXMubGVuZ3RoO1xuICAgICAgY29uc3QgYWN0aXZlS2V5ID0gdGFiS2V5c1thY3RpdmVJZHhdO1xuICAgICAgdGhpcy5vblRhYkNsaWNrKGFjdGl2ZUtleSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ3Njb3BlZCcgPyAnc2NvcGVkJyA6ICdkZWZhdWx0JztcbiAgICBjb25zdCB0YWJzQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy10YWJzLS0ke3R5cGV9YCk7XG4gICAgY29uc3QgYWN0aXZlS2V5ID1cbiAgICAgIHR5cGVvZiB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnByb3BzLmFjdGl2ZUtleSA6XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5hY3RpdmVLZXkgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5hY3RpdmVLZXkgOlxuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYnNDbGFzc05hbWVzIH0+XG4gICAgICAgIDxUYWJOYXZcbiAgICAgICAgICB0eXBlPXsgdHlwZSB9XG4gICAgICAgICAgYWN0aXZlS2V5PXsgYWN0aXZlS2V5IH1cbiAgICAgICAgICBhY3RpdmVUYWJSZWY9eyAobm9kZSkgPT4geyB0aGlzLmFjdGl2ZVRhYiA9IG5vZGU7IH0gfVxuICAgICAgICAgIHRhYnM9eyBjaGlsZHJlbiB9XG4gICAgICAgICAgb25UYWJDbGljaz17IHRoaXMub25UYWJDbGljayB9XG4gICAgICAgICAgb25UYWJLZXlEb3duPXsgdGhpcy5vblRhYktleURvd24gfVxuICAgICAgICAvPlxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGFiID0+IFJlYWN0LmNsb25lRWxlbWVudCh0YWIsIHsgYWN0aXZlS2V5IH0pKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFRBQl9UWVBFUyA9IFsnZGVmYXVsdCcsICdzY29wZWQnXTtcblxuVGFicy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFRBQl9UWVBFUyksXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBkZWZhdWx0QWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG59O1xuIl19