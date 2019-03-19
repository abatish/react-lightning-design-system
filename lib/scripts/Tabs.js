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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOlsiVGFiQ29udGVudCIsInByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJ0YWJDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm5vZGUiLCJUYWJNZW51IiwiaWNvbiIsIkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwib25seSIsIlRhYkl0ZW0iLCJ0eXBlIiwidGl0bGUiLCJhY3RpdmVLZXkiLCJldmVudEtleSIsImFjdGl2ZVRhYlJlZiIsIm1lbnUiLCJtZW51SWNvbiIsIm9uVGFiQ2xpY2siLCJvblRhYktleURvd24iLCJtZW51SXRlbXMiLCJtZW51UHJvcHMiLCJpc0FjdGl2ZSIsInRhYkl0ZW1DbGFzc05hbWUiLCJ0YWJMaW5rQ2xhc3NOYW1lIiwidGFiSXRlbVJlbmRlcmVyIiwiVGFiSXRlbVJlbmRlcmVyIiwidW5kZWZpbmVkIiwiZSIsImZ1bmMiLCJlbGVtZW50IiwiYXJyYXlPZiIsIm9uZU9mVHlwZSIsIm51bWJlciIsIlRhYk5hdiIsInRhYnMiLCJ0YWJOYXZDbGFzc05hbWUiLCJtYXAiLCJ0YWIiLCJUYWIiLCJUYWJzIiwidGFiS2V5Iiwib25TZWxlY3QiLCJzZXRTdGF0ZSIsImZvY3VzVGFiIiwia2V5Q29kZSIsImlkeCIsInRhYktleXMiLCJmb3JFYWNoIiwiaSIsInB1c2giLCJkaXIiLCJhY3RpdmVJZHgiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInN0YXRlIiwiZWwiLCJhY3RpdmVUYWIiLCJmb2N1cyIsInRhYnNDbGFzc05hbWVzIiwiZGVmYXVsdEFjdGl2ZUtleSIsImNsb25lRWxlbWVudCIsIkNvbXBvbmVudCIsIlRBQl9UWVBFUyIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcblxuLyoqXG4gKlxuICovXG5jb25zdCBUYWJDb250ZW50ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBhY3RpdmUsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCB0YWJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgJ3NsZHMtdGFic19fY29udGVudCcsXG4gICAgYHNsZHMtJHthY3RpdmUgPyAnc2hvdycgOiAnaGlkZSd9YFxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFiQ2xhc3NOYW1lcyB9IHJvbGU9J3RhYnBhbmVsJyB7IC4uLnBwcm9wcyB9PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UYWJDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYk1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpY29uID0gJ2Rvd24nLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgIGNsYXNzTmFtZT0ncmVhY3Qtc2xkcy10YWItbWVudSdcbiAgICAgIGljb249eyBpY29uIH1cbiAgICAgIHR5cGU9J2ljb24tYmFyZSdcbiAgICAgIGljb25TaXplPSdzbWFsbCdcbiAgICAgIG51YmJpblRvcFxuICAgICAgeyAuLi5wcHJvcHMgfVxuICAgID5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICk7XG59O1xuXG5UYWJNZW51LnByb3BUeXBlcyA9IHtcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuY29uc3QgRGVmYXVsdFRhYkl0ZW1SZW5kZXJlciA9IHByb3BzID0+IChcbiAgUmVhY3QuQ2hpbGRyZW4ub25seShwcm9wcy5jaGlsZHJlbilcbik7XG5cbkRlZmF1bHRUYWJJdGVtUmVuZGVyZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuY29uc3QgVGFiSXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSwgdGl0bGUsIGFjdGl2ZUtleSwgZXZlbnRLZXksIGFjdGl2ZVRhYlJlZixcbiAgICBtZW51LCBtZW51SWNvbixcbiAgICBvblRhYkNsaWNrLCBvblRhYktleURvd24sXG4gIH0gPSBwcm9wcztcbiAgbGV0IHsgbWVudUl0ZW1zIH0gPSBwcm9wcztcbiAgbWVudUl0ZW1zID0gbWVudSA/IG1lbnUucHJvcHMuY2hpbGRyZW4gOiBtZW51SXRlbXM7XG4gIGNvbnN0IG1lbnVQcm9wcyA9IG1lbnUgPyBtZW51LnByb3BzIDoge307XG4gIGNvbnN0IGlzQWN0aXZlID0gZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcbiAgY29uc3QgdGFiSXRlbUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgeyAnc2xkcy10YWJzX19pdGVtJzogISFtZW51SXRlbXMgfSxcbiAgICBgc2xkcy10YWJzLS0ke3R5cGV9X19pdGVtYCxcbiAgICAnc2xkcy10ZXh0LWhlYWRpbmctLS1sYWJlbCcsXG4gICAgeyAnc2xkcy1hY3RpdmUnOiBpc0FjdGl2ZSB9LFxuICAgIHsgJ3JlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSc6IG1lbnUgfHwgbWVudUl0ZW1zIH1cbiAgKTtcbiAgY29uc3QgdGFiTGlua0NsYXNzTmFtZSA9IGBzbGRzLXRhYnMtLSR7dHlwZX1fX2xpbmtgO1xuICBjb25zdCB7IHRhYkl0ZW1SZW5kZXJlcjogVGFiSXRlbVJlbmRlcmVyID0gRGVmYXVsdFRhYkl0ZW1SZW5kZXJlciwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXsgdGFiSXRlbUNsYXNzTmFtZSB9IHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICA8VGFiSXRlbVJlbmRlcmVyIHsgLi4ucHByb3BzIH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncmVhY3Qtc2xkcy10YWItaXRlbS1jb250ZW50Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgdGFiTGlua0NsYXNzTmFtZSB9XG4gICAgICAgICAgICByb2xlPSd0YWInXG4gICAgICAgICAgICByZWY9eyBpc0FjdGl2ZSA/IGFjdGl2ZVRhYlJlZiA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgICB0YWJJbmRleD17IGlzQWN0aXZlID8gMCA6IC0xIH1cbiAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9eyBpc0FjdGl2ZSB9XG4gICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gb25UYWJDbGljayhldmVudEtleSkgfVxuICAgICAgICAgICAgb25LZXlEb3duPXsgZSA9PiBvblRhYktleURvd24oZXZlbnRLZXksIGUpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRpdGxlIH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVudUl0ZW1zID9cbiAgICAgICAgICAgICAgPFRhYk1lbnUgaWNvbj17IG1lbnVJY29uIH0geyAuLi5tZW51UHJvcHMgfT57IG1lbnVJdGVtcyB9PC9UYWJNZW51PiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9UYWJJdGVtUmVuZGVyZXI+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cblRhYkl0ZW0ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVUYWJSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxuICBtZW51SWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgdGFiSXRlbVJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25UYWJDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVGFiS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmNvbnN0IFRhYk5hdiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdHlwZSwgdGFicywgYWN0aXZlS2V5LCBhY3RpdmVUYWJSZWYsXG4gICAgb25UYWJDbGljaywgb25UYWJLZXlEb3duLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHRhYk5hdkNsYXNzTmFtZSA9IGBzbGRzLXRhYnMtLSR7dHlwZX1fX25hdmA7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17IHRhYk5hdkNsYXNzTmFtZSB9IHJvbGU9J3RhYmxpc3QnPlxuICAgICAge1xuICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAodGFicywgdGFiID0+IChcbiAgICAgICAgICA8VGFiSXRlbVxuICAgICAgICAgICAgeyAuLi50YWIucHJvcHMgfVxuICAgICAgICAgICAgdHlwZT17IHR5cGUgfVxuICAgICAgICAgICAgYWN0aXZlS2V5PXsgYWN0aXZlS2V5IH1cbiAgICAgICAgICAgIGFjdGl2ZVRhYlJlZj17IGFjdGl2ZVRhYlJlZiB9XG4gICAgICAgICAgICBvblRhYkNsaWNrPXsgb25UYWJDbGljayB9XG4gICAgICAgICAgICBvblRhYktleURvd249eyBvblRhYktleURvd24gfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cblRhYk5hdi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgYWN0aXZlVGFiUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGFiczogUHJvcFR5cGVzLm5vZGUsXG4gIG9uVGFiQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblRhYktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY29uc3QgVGFiID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBldmVudEtleSwgYWN0aXZlS2V5LCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPFRhYkNvbnRlbnQgY2xhc3NOYW1lPXsgY2xhc3NOYW1lIH0gYWN0aXZlPXsgZXZlbnRLZXkgPT09IGFjdGl2ZUtleSB9PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9UYWJDb250ZW50PlxuICApO1xufTtcblxuVGFiLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5lbGVtZW50KSxcbiAgbWVudUljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0YWJJdGVtUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICByZWdpc3RlclN0eWxlKCd0YWItbWVudScsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51JyxcbiAgICAgICAgJ3sgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51ID4gLnJlYWN0LXNsZHMtdGFiLWl0ZW0tY29udGVudCcsXG4gICAgICAgICd7IG92ZXJmbG93OiBoaWRkZW4gfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUgPiAucmVhY3Qtc2xkcy10YWItaXRlbS1jb250ZW50ID4gYScsXG4gICAgICAgICd7IHBhZGRpbmctcmlnaHQ6IDJyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLXRhYi1tZW51JyxcbiAgICAgICAgJ3sgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyB2aXNpYmlsaXR5OiBoaWRkZW4gfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAyLjVyZW07IGxpbmUtaGVpZ2h0OiAycmVtOyB3aWR0aDogMnJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5zbGRzLWFjdGl2ZSAucmVhY3Qtc2xkcy10YWItbWVudScsXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtOmhvdmVyIC5yZWFjdC1zbGRzLXRhYi1tZW51JyxcbiAgICAgICAgJ3sgdmlzaWJpbGl0eTogdmlzaWJsZSB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNUYWIpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5hY3RpdmVUYWI7XG4gICAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNUYWI6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFiQ2xpY2sgPSAodGFiS2V5KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGFiS2V5KTtcbiAgICB9XG4gICAgLy8gVW5jb250cm9sbGVkXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleTogdGFiS2V5LCBmb2N1c1RhYjogdHJ1ZSB9KTtcbiAgfVxuXG4gIG9uVGFiS2V5RG93biA9ICh0YWJLZXksIGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM5KSB7IC8vIGxlZnQvcmlnaHQgY3Vyc29yIGtleVxuICAgICAgbGV0IGlkeCA9IDA7XG4gICAgICBjb25zdCB0YWJLZXlzID0gW107XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sICh0YWIsIGkpID0+IHtcbiAgICAgICAgdGFiS2V5cy5wdXNoKHRhYi5wcm9wcy5ldmVudEtleSk7XG4gICAgICAgIGlmICh0YWJLZXkgPT09IHRhYi5wcm9wcy5ldmVudEtleSkge1xuICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGlyID0gZS5rZXlDb2RlID09PSAzNyA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkeCA9IChpZHggKyBkaXIgKyB0YWJLZXlzLmxlbmd0aCkgJSB0YWJLZXlzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRhYktleXNbYWN0aXZlSWR4XTtcbiAgICAgIHRoaXMub25UYWJDbGljayhhY3RpdmVLZXkpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPT09ICdzY29wZWQnID8gJ3Njb3BlZCcgOiAnZGVmYXVsdCc7XG4gICAgY29uc3QgdGFic0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtdGFicy0tJHt0eXBlfWApO1xuICAgIGNvbnN0IGFjdGl2ZUtleSA9XG4gICAgICB0eXBlb2YgdGhpcy5wcm9wcy5hY3RpdmVLZXkgIT09ICd1bmRlZmluZWQnID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOlxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUuYWN0aXZlS2V5IDpcbiAgICAgIHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0YWJzQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8VGFiTmF2XG4gICAgICAgICAgdHlwZT17IHR5cGUgfVxuICAgICAgICAgIGFjdGl2ZUtleT17IGFjdGl2ZUtleSB9XG4gICAgICAgICAgYWN0aXZlVGFiUmVmPXsgKG5vZGUpID0+IHsgdGhpcy5hY3RpdmVUYWIgPSBub2RlOyB9IH1cbiAgICAgICAgICB0YWJzPXsgY2hpbGRyZW4gfVxuICAgICAgICAgIG9uVGFiQ2xpY2s9eyB0aGlzLm9uVGFiQ2xpY2sgfVxuICAgICAgICAgIG9uVGFiS2V5RG93bj17IHRoaXMub25UYWJLZXlEb3duIH1cbiAgICAgICAgLz5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRhYiA9PiBSZWFjdC5jbG9uZUVsZW1lbnQodGFiLCB7IGFjdGl2ZUtleSB9KSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBUQUJfVFlQRVMgPSBbJ2RlZmF1bHQnLCAnc2NvcGVkJ107XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihUQUJfVFlQRVMpLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZGVmYXVsdEFjdGl2ZUtleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxufTtcbiJdfQ==