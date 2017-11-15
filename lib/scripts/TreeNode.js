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
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  onToggle: _react.PropTypes.func,
  onNodeToggle: _react.PropTypes.func,
  onNodeLabelClick: _react.PropTypes.func,
  onLabelClick: _react.PropTypes.func,
  onNodeClick: _react.PropTypes.func,
  toggleOnNodeClick: _react.PropTypes.bool,
  defaultOpened: _react.PropTypes.bool,
  opened: _react.PropTypes.bool,
  leaf: _react.PropTypes.bool,
  level: _react.PropTypes.number,
  children: _react.PropTypes.node,
  itemRender: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJlIiwib25Ub2dnbGUiLCJvbk5vZGVUb2dnbGUiLCJzZXRTdGF0ZSIsIm9uTGFiZWxDbGljayIsIm9uTm9kZUxhYmVsQ2xpY2siLCJvbkNsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsIml0ZW1Qcm9wcyIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwcHJvcHMiLCJwcm9wVHlwZXMiLCJiaW5kIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibGV2ZWwiLCJ0bm9kZSIsImNsb25lRWxlbWVudCIsImdycENsYXNzTmFtZXMiLCJyZW5kZXJUcmVlSXRlbSIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVyQ2hpbGROb2RlIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJudW1iZXIiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsUTs7O0FBQ25CLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMElBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFFQyxRQUFRLE1BQUtGLEtBQUwsQ0FBV0csYUFBckIsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFFUUMsQyxFQUFHO0FBQUEsbUJBQ3lCLEtBQUtKLEtBRDlCO0FBQUEsVUFDRkssUUFERSxVQUNGQSxRQURFO0FBQUEsVUFDUUMsWUFEUixVQUNRQSxZQURSOztBQUVWLFVBQUlELFFBQUosRUFBYztBQUFFQSxp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YkU7QUFjbkJwQixZQUFVLGlCQUFVcUIsSUFkRDtBQWVuQnBCLGNBQVksaUJBQVVpQjtBQWZILENBQXJCIiwiZmlsZSI6IlRyZWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogdGhpcy5wcm9wcy5kZWZhdWx0T3BlbmVkIH07XG4gIH1cblxuICBvblRvZ2dsZShlKSB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSwgb25Ob2RlVG9nZ2xlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvblRvZ2dsZSkgeyBvblRvZ2dsZShlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVUb2dnbGUpIHsgb25Ob2RlVG9nZ2xlKGUsIHRoaXMucHJvcHMpOyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogIXRoaXMuc3RhdGUub3BlbmVkIH0pO1xuICB9XG5cbiAgb25MYWJlbENsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25MYWJlbENsaWNrKSB7IG9uTGFiZWxDbGljayhlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVMYWJlbENsaWNrKSB7IG9uTm9kZUxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgfVxuXG4gIG9uQ2xpY2soZSkge1xuICAgIGNvbnN0IHsgb25DbGljaywgb25Ob2RlQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNsaWNrKSB7IG9uQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAob25Ob2RlQ2xpY2spIHsgb25Ob2RlQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAodG9nZ2xlT25Ob2RlQ2xpY2spIHtcbiAgICAgIHRoaXMub25Ub2dnbGUoZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiA9ICdjaGV2cm9ucmlnaHQnLCBsb2FkaW5nLCBzZWxlY3RlZCwgbGVhZiwgaXNPcGVuZWQsXG4gICAgICBjaGlsZHJlbiwgaXRlbVJlbmRlciwgLi4ucHJvcHNcbiAgICB9ID0gaXRlbVByb3BzO1xuICAgIGNvbnN0IGl0bUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZV9faXRlbScsIHtcbiAgICAgICdzbGRzLWlzLW9wZW4nOiBpc09wZW5lZCxcbiAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgfSk7XG4gICAgY29uc3QgcHByb3BzID0gY2xlYW5Qcm9wcyhwcm9wcywgVHJlZU5vZGUucHJvcFR5cGVzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyBpdG1DbGFzc05hbWVzIH1cbiAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICBjb250YWluZXI9e2ZhbHNlfVxuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXgtc21hbGwnXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RhdGljJywgbWFyZ2luVG9wOiAxNCwgbWFyZ2luTGVmdDogLTIgfX1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAhbGVhZiA/XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCdcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgaWNvblNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICByb2xlPSdwcmVzZW50YXRpb24nXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25MYWJlbENsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1SZW5kZXIgP1xuICAgICAgICAgICAgaXRlbVJlbmRlcihpdGVtUHJvcHMpIDpcbiAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICA8L2E+XG4gICAgICAgIHsgbGVhZiA/IGNoaWxkcmVuIDogbnVsbCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGROb2RlKGxldmVsLCB0bm9kZSkge1xuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwge1xuICAgICAgbGV2ZWwsIG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRPcGVuZWQsIG9wZW5lZCwgbGVhZiwgbGV2ZWwsXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc09wZW5lZCA9XG4gICAgICB0eXBlb2Ygb3BlbmVkICE9PSAndW5kZWZpbmVkJyA/IG9wZW5lZCA6XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5vcGVuZWQgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5vcGVuZWQgOlxuICAgICAgZGVmYXVsdE9wZW5lZDtcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcbiAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxuICAgICAgJ2lzLWV4cGFuZGVkJzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHsgbGVhZiwgaXNPcGVuZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9O1xuICAgIGlmIChsZWFmKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9eyBsZXZlbCB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17IGxldmVsIH0gYXJpYS1leHBhbmRlZD17IGlzT3BlbmVkIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSByb2xlPSdncm91cCc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGROb2RlLmJpbmQodGhpcywgbGV2ZWwgKyAxKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsZWFmOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXRlbVJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl19