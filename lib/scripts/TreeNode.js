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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = function (_Component) {
  (0, _inherits3.default)(TreeNode, _Component);

  function TreeNode(props) {
    (0, _classCallCheck3.default)(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeNode.__proto__ || (0, _getPrototypeOf2.default)(TreeNode)).call(this, props));

    _this.state = { opened: _this.props.defaultOpened };
    return _this;
  }

  (0, _createClass3.default)(TreeNode, [{
    key: 'onToggle',
    value: function onToggle(e) {
      var _props = this.props,
          onToggle = _props.onToggle,
          onNodeToggle = _props.onNodeToggle;

      if (onToggle) {
        onToggle(e, this.props);
      }
      if (onNodeToggle) {
        onNodeToggle(e, this.props);
      }
      this.setState({ opened: !this.state.opened });
    }
  }, {
    key: 'onLabelClick',
    value: function onLabelClick(e) {
      var _props2 = this.props,
          onLabelClick = _props2.onLabelClick,
          onNodeLabelClick = _props2.onNodeLabelClick;

      if (onLabelClick) {
        onLabelClick(e, this.props);
      }
      if (onNodeLabelClick) {
        onNodeLabelClick(e, this.props);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      var _props3 = this.props,
          onClick = _props3.onClick,
          onNodeClick = _props3.onNodeClick,
          toggleOnNodeClick = _props3.toggleOnNodeClick;

      if (onClick) {
        onClick(e, this.props);
      }
      if (onNodeClick) {
        onNodeClick(e, this.props);
      }
      if (toggleOnNodeClick) {
        this.onToggle(e);
      }
    }
  }, {
    key: 'renderTreeItem',
    value: function renderTreeItem(itemProps) {
      var className = itemProps.className,
          label = itemProps.label,
          _itemProps$icon = itemProps.icon,
          icon = _itemProps$icon === undefined ? 'chevronright' : _itemProps$icon,
          loading = itemProps.loading,
          selected = itemProps.selected,
          leaf = itemProps.leaf,
          isOpened = itemProps.isOpened,
          children = itemProps.children,
          itemRender = itemProps.itemRender,
          props = (0, _objectWithoutProperties3.default)(itemProps, ['className', 'label', 'icon', 'loading', 'selected', 'leaf', 'isOpened', 'children', 'itemRender']);

      var itmClassNames = (0, _classnames2.default)(className, 'slds-tree__item', {
        'slds-is-open': isOpened,
        'slds-is-selected': selected
      });
      var pprops = (0, _util.cleanProps)(props, TreeNode.propTypes);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: itmClassNames,
          onClick: this.onClick.bind(this),
          style: { position: 'relative' }
        }, pprops),
        loading ? _react2.default.createElement(_Spinner2.default, {
          container: false,
          size: 'small',
          className: 'slds-m-right--x-small',
          style: { position: 'static', marginTop: 14, marginLeft: -2 }
        }) : !leaf ? _react2.default.createElement(_Button2.default, {
          className: 'slds-m-right--small',
          'aria-controls': '',
          type: 'icon-bare',
          icon: icon,
          iconSize: 'small',
          onClick: this.onToggle.bind(this)
        }) : null,
        _react2.default.createElement(
          'a',
          {
            className: 'slds-truncate',
            tabIndex: -1,
            role: 'presentation',
            onClick: this.onLabelClick.bind(this)
          },
          itemRender ? itemRender(itemProps) : label
        ),
        leaf ? children : null
      );
    }
  }, {
    key: 'renderChildNode',
    value: function renderChildNode(level, tnode) {
      var _props4 = this.props,
          onNodeClick = _props4.onNodeClick,
          onNodeToggle = _props4.onNodeToggle,
          onNodeLabelClick = _props4.onNodeLabelClick,
          toggleOnNodeClick = _props4.toggleOnNodeClick;

      return _react2.default.cloneElement(tnode, {
        level: level, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          defaultOpened = _props5.defaultOpened,
          opened = _props5.opened,
          leaf = _props5.leaf,
          level = _props5.level,
          children = _props5.children,
          props = (0, _objectWithoutProperties3.default)(_props5, ['defaultOpened', 'opened', 'leaf', 'level', 'children']);

      var isOpened = typeof opened !== 'undefined' ? opened : typeof this.state.opened !== 'undefined' ? this.state.opened : defaultOpened;
      var grpClassNames = (0, _classnames2.default)('slds-tree__group', {
        'slds-nested': !leaf,
        'is-expanded': isOpened,
        'slds-show': isOpened,
        'slds-hide': !isOpened
      });
      var itemProps = (0, _extends3.default)({ leaf: leaf, isOpened: isOpened, children: children }, props);
      if (leaf) {
        return _react2.default.createElement(
          'li',
          { role: 'treeitem', 'aria-level': level },
          this.renderTreeItem(itemProps)
        );
      }

      return _react2.default.createElement(
        'li',
        { role: 'treeitem', 'aria-level': level, 'aria-expanded': isOpened },
        this.renderTreeItem(itemProps),
        _react2.default.createElement(
          'ul',
          { className: grpClassNames, role: 'group' },
          _react2.default.Children.map(children, this.renderChildNode.bind(this, level + 1))
        )
      );
    }
  }]);
  return TreeNode;
}(_react.Component);

exports.default = TreeNode;


TreeNode.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  onToggle: _propTypes2.default.func,
  onNodeToggle: _propTypes2.default.func,
  onNodeLabelClick: _propTypes2.default.func,
  onLabelClick: _propTypes2.default.func,
  onNodeClick: _propTypes2.default.func,
  toggleOnNodeClick: _propTypes2.default.bool,
  defaultOpened: _propTypes2.default.bool,
  opened: _propTypes2.default.bool,
  leaf: _propTypes2.default.bool,
  level: _propTypes2.default.number,
  children: _propTypes2.default.node,
  itemRender: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJlIiwib25Ub2dnbGUiLCJvbk5vZGVUb2dnbGUiLCJzZXRTdGF0ZSIsIm9uTGFiZWxDbGljayIsIm9uTm9kZUxhYmVsQ2xpY2siLCJvbkNsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsIml0ZW1Qcm9wcyIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwcHJvcHMiLCJwcm9wVHlwZXMiLCJiaW5kIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibGV2ZWwiLCJ0bm9kZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiZ3JwQ2xhc3NOYW1lcyIsInJlbmRlclRyZWVJdGVtIiwiQ2hpbGRyZW4iLCJtYXAiLCJyZW5kZXJDaGlsZE5vZGUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm51bWJlciIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsUUFBUSxNQUFLRixLQUFMLENBQVdHLGFBQXJCLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVFDLEMsRUFBRztBQUFBLG1CQUN5QixLQUFLSixLQUQ5QjtBQUFBLFVBQ0ZLLFFBREUsVUFDRkEsUUFERTtBQUFBLFVBQ1FDLFlBRFIs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LG9CQUFVRyxJQVZOO0FBV25CekMsVUFBUXNDLG9CQUFVRyxJQVhDO0FBWW5CeEIsUUFBTXFCLG9CQUFVRyxJQVpHO0FBYW5CYixTQUFPVSxvQkFBVUksTUFiRTtBQWNuQnZCLFlBQVVtQixvQkFBVUssSUFkRDtBQWVuQnZCLGNBQVlrQixvQkFBVUU7QUFmSCxDQUFyQiIsImZpbGUiOiJUcmVlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogdGhpcy5wcm9wcy5kZWZhdWx0T3BlbmVkIH07XG4gIH1cblxuICBvblRvZ2dsZShlKSB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSwgb25Ob2RlVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvblRvZ2dsZSkgeyBvblRvZ2dsZShlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVUb2dnbGUpIHsgb25Ob2RlVG9nZ2xlKGUsIHRoaXMucHJvcHMpOyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICB9XG5cbiAgb25MYWJlbENsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25MYWJlbENsaWNrKSB7IG9uTGFiZWxDbGljayhlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVMYWJlbENsaWNrKSB7IG9uTm9kZUxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25DbGljaywgb25Ob2RlQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNsaWNrKSB7IG9uQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAob25Ob2RlQ2xpY2spIHsgb25Ob2RlQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAodG9nZ2xlT25Ob2RlQ2xpY2spIHtcbiAgICAgIHRoaXMub25Ub2dnbGUoZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiA9ICdjaGV2cm9ucmlnaHQnLCBsb2FkaW5nLCBzZWxlY3RlZCwgbGVhZiwgaXNPcGVuZWQsXG4gICAgICBjaGlsZHJlbiwgaXRlbVJlbmRlciwgLi4ucHJvcHNcbiAgICB9ID0gaXRlbVByb3BzO1xuICAgIGNvbnN0IGl0bUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZV9faXRlbScsIHtcbiAgICAgICdzbGRzLWlzLW9wZW4nOiBpc09wZW5lZCxcbiAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgfSk7XG4gICAgY29uc3QgcHByb3BzID0gY2xlYW5Qcm9wcyhwcm9wcywgVHJlZU5vZGUucHJvcFR5cGVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyBpdG1DbGFzc05hbWVzIH1cbiAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICBjb250YWluZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXgtc21hbGwnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RhdGljJywgbWFyZ2luVG9wOiAxNCwgbWFyZ2luTGVmdDogLTIgfX1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAhbGVhZiA/XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCdcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgaWNvblNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICByb2xlPSdwcmVzZW50YXRpb24nXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25MYWJlbENsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1SZW5kZXIgP1xuICAgICAgICAgICAgaXRlbVJlbmRlcihpdGVtUHJvcHMpIDpcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICA8L2E+XG4gICAgICAgIHsgbGVhZiA/IGNoaWxkcmVuIDogbnVsbCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGROb2RlKGxldmVsLCB0bm9kZSkge1xuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwge1xuICAgICAgbGV2ZWwsIG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRPcGVuZWQsIG9wZW5lZCwgbGVhZiwgbGV2ZWwsXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc09wZW5lZCA9XG4gICAgICB0eXBlb2Ygb3BlbmVkICE9PSAndW5kZWZpbmVkJyA/IG9wZW5lZCA6XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5vcGVuZWQgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5vcGVuZWQgOlxuICAgICAgZGVmYXVsdE9wZW5lZDtcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcbiAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxuICAgICAgJ2lzLWV4cGFuZGVkJzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHsgbGVhZiwgaXNPcGVuZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9O1xuICAgIGlmIChsZWFmKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9eyBsZXZlbCB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17IGxldmVsIH0gYXJpYS1leHBhbmRlZD17IGlzT3BlbmVkIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSByb2xlPSdncm91cCc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGROb2RlLmJpbmQodGhpcywgbGV2ZWwgKyAxKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsZWFmOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXRlbVJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl19