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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUIsSTs7O0FBRW5CLGdCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsNkJBQWMsVUFBZCxFQUEwQixDQUN4QixDQUNFLDJDQURGLEVBRUUsa0VBRkYsQ0FEd0IsRUFLeEIsQ0FDRSx3RUFERixFQUVFLHNCQUZGLENBTHdCLEVBU3hCLENBQ0UsNEVBREYsRUFFRSwwQkFGRixDQVR3QixFQWF4QixDQUNFLHNCQURGLEVBRUUsOERBRkYsQ0Fid0IsRUFpQnhCLENBQ0UsNkJBREYsRUFFRSxtREFGRixDQWpCd0IsRUFxQnhCLENBQ0UsbURBREYsRUFFRSw2Q0FGRixFQUdFLHlCQUhGLENBckJ3QixDQUExQjtBQUhpQjtBQThCbEI7Ozs7eUNBRW9CO0FBQ25CLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixZQUFNLEtBQUssbUJBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxTQUEvQixDQUFYO0FBQ0EsWUFBSSxFQUFKLEVBQVE7QUFDTixhQUFHLEtBQUg7QUFDRDs7QUFFRCxhQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsS0FBWixFQUFkO0FBQ0Q7QUFDRjs7OytCQUVVLE0sRUFBUTtBQUNqQixVQUFJLEtBQUssS0FBTCxDQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixNQUFwQjtBQUNEOztBQUVELFdBQUssUUFBTCxDQUFjLEVBQUUsV0FBVyxNQUFiLEVBQXFCLFVBQVUsSUFBL0IsRUFBZDtBQUNEOzs7aUNBRVksTSxFQUFRLEMsRUFBRztBQUFBOztBQUN0QixVQUFJLEVBQUUsT0FBRixLQUFj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WixDQUFsQjs7QUFFQSxLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FGUztBQUdmLG9CQUFrQixpQkFBVSxHQUhiO0FBSWYsYUFBVyxpQkFBVSxHQUpOO0FBS2YsWUFBVSxpQkFBVSxJQUxMO0FBTWYsWUFBVSxpQkFBVTtBQU5MLENBQWpCIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gICAgcmVnaXN0ZXJTdHlsZSgndGFiLW1lbnUnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudScsXG4gICAgICAgICd7IHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWlubmVyJyxcbiAgICAgICAgJ3sgb3ZlcmZsb3c6IGhpZGRlbiB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWlubmVyID4gYScsXG4gICAgICAgICd7IHBhZGRpbmctcmlnaHQ6IDJyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLXRhYi1tZW51JyxcbiAgICAgICAgJ3sgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyB2aXNpYmlsaXR5OiBoaWRkZW4gfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAzcmVtOyBsaW5lLWhlaWdodDogM3JlbTsgd2lkdGg6IDJyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0uc2xkcy1hY3RpdmUgLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxuICAgICAgICAnLnNsZHMtdGFic19faXRlbTpob3ZlciAucmVhY3Qtc2xkcy10YWItbWVudScsXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzVGFiKSB7XG4gICAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5hY3RpdmVUYWIpO1xuICAgICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzVGFiOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblRhYkNsaWNrKHRhYktleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRhYktleSk7XG4gICAgfVxuICAgIC8vIFVuY29udHJvbGxlZFxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IHRhYktleSwgZm9jdXNUYWI6IHRydWUgfSk7XG4gIH1cblxuICBvblRhYktleURvd24odGFiS2V5LCBlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzcgfHwgZS5rZXlDb2RlID09PSAzOSkgeyAvLyBsZWZ0L3JpZ2h0IGN1cnNvciBrZXlcbiAgICAgIGxldCBpZHggPSAwO1xuICAgICAgY29uc3QgdGFiS2V5cyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAodGFiLCBpKSA9PiB7XG4gICAgICAgIHRhYktleXMucHVzaCh0YWIucHJvcHMuZXZlbnRLZXkpO1xuICAgICAgICBpZiAodGFiS2V5ID09PSB0YWIucHJvcHMuZXZlbnRLZXkpIHtcbiAgICAgICAgICBpZHggPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRpciA9IGUua2V5Q29kZSA9PT0gMzcgPyAtMSA6IDE7XG4gICAgICBjb25zdCBhY3RpdmVJZHggPSAoaWR4ICsgZGlyICsgdGFiS2V5cy5sZW5ndGgpICUgdGFiS2V5cy5sZW5ndGg7XG4gICAgICBjb25zdCBhY3RpdmVLZXkgPSB0YWJLZXlzW2FjdGl2ZUlkeF07XG4gICAgICB0aGlzLm9uVGFiQ2xpY2soYWN0aXZlS2V5KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFiTmF2KHR5cGUsIHRhYnMpIHtcbiAgICBjb25zdCBhY3RpdmVLZXkgPVxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDpcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmFjdGl2ZUtleSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLmFjdGl2ZUtleSA6XG4gICAgICB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG4gICAgY29uc3QgdGFiTmF2Q2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbmF2YDtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17IHRhYk5hdkNsYXNzTmFtZSB9IHJvbGU9J3RhYmxpc3QnPlxuICAgICAge1xuICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAodGFicywgKHRhYikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdGl0bGUsIGV2ZW50S2V5LCBtZW51LCBtZW51SWNvbiB9ID0gdGFiLnByb3BzO1xuICAgICAgICAgIGxldCB7IG1lbnVJdGVtcyB9ID0gdGFiLnByb3BzO1xuICAgICAgICAgIG1lbnVJdGVtcyA9IG1lbnUgPyBtZW51LnByb3BzLmNoaWxkcmVuIDogbWVudUl0ZW1zO1xuICAgICAgICAgIGNvbnN0IG1lbnVQcm9wcyA9IG1lbnUgPyBtZW51LnByb3BzIDoge307XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuICAgICAgICAgIGNvbnN0IHRhYkl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICAgICAgJ3NsZHMtdGFic19faXRlbScsXG4gICAgICAgICAgICBgc2xkcy10YWJzLS0ke3R5cGV9X19pdGVtYCxcbiAgICAgICAgICAgICdzbGRzLXRleHQtaGVhZGluZy0tLWxhYmVsJyxcbiAgICAgICAgICAgIHsgJ3NsZHMtYWN0aXZlJzogaXNBY3RpdmUgfSxcbiAgICAgICAgICAgIHsgJ3JlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSc6IG1lbnUgfHwgbWVudUl0ZW1zIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHRhYkxpbmtDbGFzc05hbWUgPSBgc2xkcy10YWJzLS0ke3R5cGV9X19saW5rYDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17IHRhYkl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLWl0ZW0taW5uZXInPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IHRhYkxpbmtDbGFzc05hbWUgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25UYWJDbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9XG4gICAgICAgICAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uVGFiS2V5RG93bi5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9XG4gICAgICAgICAgICAgICAgICByb2xlPSd0YWInXG4gICAgICAgICAgICAgICAgICByZWY9eyBpc0FjdGl2ZSA/ICdhY3RpdmVUYWInIDogbnVsbCB9XG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17IGlzQWN0aXZlID8gMCA6IC0xIH1cbiAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9eyBpc0FjdGl2ZSB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyB0aXRsZSB9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIHsgbWVudUl0ZW1zID8gdGhpcy5yZW5kZXJUYWJNZW51KG1lbnVJY29uLCBtZW51SXRlbXMsIG1lbnVQcm9wcykgOiBudWxsIH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyVGFiTWVudShtZW51SWNvbiA9ICdkb3duJywgbWVudUl0ZW1zID0gW10sIG1lbnVQcm9wcyA9IHt9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBjbGFzc05hbWU9J3JlYWN0LXNsZHMtdGFiLW1lbnUnIGljb249eyBtZW51SWNvbiB9IHR5cGU9J2ljb24tYmFyZScgaWNvblNpemU9J3NtYWxsJyBudWJiaW5Ub3AgeyAuLi5tZW51UHJvcHMgfT5cbiAgICAgICAgeyBtZW51SXRlbXMgfVxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyVGFiUGFuZWwodGFiKSB7XG4gICAgY29uc3QgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgfHwgdGhpcy5zdGF0ZS5hY3RpdmVLZXkgfHwgdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuICAgIGNvbnN0IHsgZXZlbnRLZXkgfSA9IHRhYi5wcm9wcztcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0YWIsIHsgYWN0aXZlOiBpc0FjdGl2ZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BzLnR5cGUgPT09ICdzY29wZWQnID8gJ3Njb3BlZCcgOiAnZGVmYXVsdCc7XG4gICAgY29uc3QgdGFic0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtdGFicy0tJHt0eXBlfWApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYnNDbGFzc05hbWVzIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUYWJOYXYodHlwZSwgY2hpbGRyZW4pIH1cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVGFiUGFuZWwuYmluZCh0aGlzKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBUQUJfVFlQRVMgPSBbJ2RlZmF1bHQnLCAnc2NvcGVkJ107XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihUQUJfVFlQRVMpLFxuICBkZWZhdWx0QWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==