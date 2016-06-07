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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = function (_React$Component) {
  (0, _inherits3.default)(TreeNode, _React$Component);

  function TreeNode(props) {
    (0, _classCallCheck3.default)(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TreeNode).call(this, props));

    _this.state = { opened: _this.props.defaultOpened };
    return _this;
  }

  // TODO: revert it babeljs bug https://phabricator.babeljs.io/T2892


  (0, _createClass3.default)(TreeNode, [{
    key: 'onToggleEvent',
    value: function onToggleEvent(e) {
      var _props = this.props;
      var onToggle = _props.onToggle;
      var onNodeToggle = _props.onNodeToggle;

      if (onToggle) {
        onToggle(e, this.props);
      }
      if (onNodeToggle) {
        onNodeToggle(e, this.props);
      }
      this.setState({ opened: !this.state.opened });
    }
  }, {
    key: 'onLabelClickEvent',
    value: function onLabelClickEvent(e) {
      var _props2 = this.props;
      var onLabelClick = _props2.onLabelClick;
      var onNodeLabelClick = _props2.onNodeLabelClick;

      if (onLabelClick) {
        onLabelClick(e, this.props);
      }
      if (onNodeLabelClick) {
        onNodeLabelClick(e, this.props);
      }
    }
  }, {
    key: 'onClickEvent',
    value: function onClickEvent(e) {
      var _props3 = this.props;
      var onClick = _props3.onClick;
      var onNodeClick = _props3.onNodeClick;
      var toggleOnNodeClick = _props3.toggleOnNodeClick;

      if (onClick) {
        onClick(e, this.props);
      }
      if (onNodeClick) {
        onNodeClick(e, this.props);
      }
      if (toggleOnNodeClick) {
        this.onToggleEvent(e);
      }
    }
  }, {
    key: 'renderTreeItem',
    value: function renderTreeItem(itemProps) {
      var className = itemProps.className;
      var label = itemProps.label;
      var _itemProps$icon = itemProps.icon;
      var icon = _itemProps$icon === undefined ? 'chevronright' : _itemProps$icon;
      var loading = itemProps.loading;
      var selected = itemProps.selected;
      var leaf = itemProps.leaf;
      var isOpened = itemProps.isOpened;
      var children = itemProps.children;
      var props = (0, _objectWithoutProperties3.default)(itemProps, ['className', 'label', 'icon', 'loading', 'selected', 'leaf', 'isOpened', 'children']);

      var itmClassNames = (0, _classnames2.default)(className, 'slds-tree__item', {
        'slds-is-open': isOpened,
        'slds-is-selected': selected
      });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: itmClassNames, onClick: this.onClickEvent.bind(this) }, props),
        loading ? _react2.default.createElement(_Spinner2.default, { size: 'small', className: 'slds-m-right--x-small' }) : !leaf ? _react2.default.createElement(_Button2.default, { className: 'slds-m-right--small',
          type: 'icon-bare',
          icon: icon,
          iconSize: 'small',
          onClick: this.onToggleEvent.bind(this)
        }) : null,
        _react2.default.createElement(
          'a',
          {
            className: 'slds-truncate',
            tabIndex: -1,
            role: 'presentation',
            onClick: this.onLabelClickEvent.bind(this)
          },
          label
        ),
        leaf ? children : null
      );
    }
  }, {
    key: 'renderChildNode',
    value: function renderChildNode(level, tnode) {
      var _props4 = this.props;
      var onNodeClick = _props4.onNodeClick;
      var onNodeToggle = _props4.onNodeToggle;
      var onNodeLabelClick = _props4.onNodeLabelClick;
      var toggleOnNodeClick = _props4.toggleOnNodeClick;

      return _react2.default.cloneElement(tnode, { level: level, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props;
      var defaultOpened = _props5.defaultOpened;
      var opened = _props5.opened;
      var leaf = _props5.leaf;
      var level = _props5.level;
      var onClick = _props5.onClick;
      var onToggle = _props5.onToggle;
      var onNodeClick = _props5.onNodeClick;
      var onNodeToggle = _props5.onNodeToggle;
      var onLabelClick = _props5.onLabelClick;
      var onNodeLabelClick = _props5.onNodeLabelClick;
      var toggleOnNodeClick = _props5.toggleOnNodeClick;
      var children = _props5.children;
      var props = (0, _objectWithoutProperties3.default)(_props5, ['defaultOpened', 'opened', 'leaf', 'level', 'onClick', 'onToggle', 'onNodeClick', 'onNodeToggle', 'onLabelClick', 'onNodeLabelClick', 'toggleOnNodeClick', 'children']);

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
}(_react2.default.Component);

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
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBRSxRQUFRLE1BQUssS0FBTCxDQUFXLGFBQXJCLEVBQWI7QUFGaUI7QUFHbEI7Ozs7Ozs7a0NBR2EsQyxFQUFHO0FBQUEsbUJBQ29CLEtBQUssS0FEekI7QUFBQSxVQUNQLFFBRE8sVUFDUCxRQURPO0FBQUEsVUFDRyxZQURILFVBQ0csWUFESDs7QUFFZixVQUFJLFFBQUosRUFBYztBQUFFLGlCQUFTLENBQVQsRUFBWSxLQUFLLEtBQWpCO0FBQTBCO0FBQzFDLFVBQUksWUFBSixFQUFrQjtBQUFFLHFCQUFhLENBQWIsRUFBZ0IsS0FBSyxLQUFyQjtBQUE4QjtBQUNsRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUF0QixFQUFkO0FBQ0Q7OztzQ0FFaUIsQyxFQUFHO0FBQUEsb0JBQ3dCLEtBQUssS0FEN0I7QUFBQSxVQUNYLFlBRFcsV0FDWCxZQURXO0FBQUEsVUFDRyxnQkFESCxXQUNHLGdCQURIOztBQUVuQixVQUFJLFlBQUosRUFBa0I7QUFBRSxxQkFBYSxDQUFiLEVBQWdCLEtBQUssS0FBckI7QUFBOEI7QUFDbEQsVUFBSSxnQkFBSixFQUFzQjtBQUFFLHlCQUFpQixDQUFqQixFQUFvQixLQUFLLEtBQXpCO0FBQWtDO0FBQzNEOzs7aUNBRVksQyxFQUFHO0FBQUEsb0JBQ3NDLEtBQUssS0FEM0M7QUFBQSxVQUNOLE9BRE0sV0FDTixPQURNO0FBQUEsVUFDRyxXQURILFdBQ0csV0FESDtBQUFBLFVBQ2dCLGlCQURoQixXQUNnQixpQkFEaEI7O0FBRWQs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aUJBQVUsSUFSSjtBQVNuQixxQkFBbUIsaUJBQVUsSUFUVjtBQVVuQixpQkFBZSxpQkFBVSxJQVZOO0FBV25CLFVBQVEsaUJBQVUsSUFYQztBQVluQixRQUFNLGlCQUFVLElBWkc7QUFhbkIsU0FBTyxpQkFBVSxNQWJFO0FBY25CLFlBQVUsaUJBQVU7QUFkRCxDQUFyQiIsImZpbGUiOiJUcmVlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogdGhpcy5wcm9wcy5kZWZhdWx0T3BlbmVkIH07XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiByZXZlcnQgaXQgYmFiZWxqcyBidWcgaHR0cHM6Ly9waGFicmljYXRvci5iYWJlbGpzLmlvL1QyODkyXHJcbiAgb25Ub2dnbGVFdmVudChlKSB7XHJcbiAgICBjb25zdCB7IG9uVG9nZ2xlLCBvbk5vZGVUb2dnbGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAob25Ub2dnbGUpIHsgb25Ub2dnbGUoZSwgdGhpcy5wcm9wcyk7IH1cclxuICAgIGlmIChvbk5vZGVUb2dnbGUpIHsgb25Ob2RlVG9nZ2xlKGUsIHRoaXMucHJvcHMpOyB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiAhdGhpcy5zdGF0ZS5vcGVuZWQgfSk7XHJcbiAgfVxyXG5cclxuICBvbkxhYmVsQ2xpY2tFdmVudChlKSB7XHJcbiAgICBjb25zdCB7IG9uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChvbkxhYmVsQ2xpY2spIHsgb25MYWJlbENsaWNrKGUsIHRoaXMucHJvcHMpOyB9XHJcbiAgICBpZiAob25Ob2RlTGFiZWxDbGljaykgeyBvbk5vZGVMYWJlbENsaWNrKGUsIHRoaXMucHJvcHMpOyB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrRXZlbnQoZSkge1xyXG4gICAgY29uc3QgeyBvbkNsaWNrLCBvbk5vZGVDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAob25DbGljaykgeyBvbkNsaWNrKGUsIHRoaXMucHJvcHMpOyB9XHJcbiAgICBpZiAob25Ob2RlQ2xpY2spIHsgb25Ob2RlQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cclxuICAgIGlmICh0b2dnbGVPbk5vZGVDbGljaykge1xyXG4gICAgICB0aGlzLm9uVG9nZ2xlRXZlbnQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiA9ICdjaGV2cm9ucmlnaHQnLCBsb2FkaW5nLCBzZWxlY3RlZCwgbGVhZiwgaXNPcGVuZWQsXHJcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wcyxcclxuICAgIH0gPSBpdGVtUHJvcHM7XHJcbiAgICBjb25zdCBpdG1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWVfX2l0ZW0nLCB7XHJcbiAgICAgICdzbGRzLWlzLW9wZW4nOiBpc09wZW5lZCxcclxuICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBpdG1DbGFzc05hbWVzIH0gb25DbGljaz17IHRoaXMub25DbGlja0V2ZW50LmJpbmQodGhpcykgfSB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbG9hZGluZyA/IDxTcGlubmVyIHNpemU9J3NtYWxsJyBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0teC1zbWFsbCcgLz4gOlxyXG4gICAgICAgICAgIWxlYWYgP1xyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0tc21hbGwnXHJcbiAgICAgICAgICAgIHR5cGU9J2ljb24tYmFyZSdcclxuICAgICAgICAgICAgaWNvbj17IGljb24gfVxyXG4gICAgICAgICAgICBpY29uU2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uVG9nZ2xlRXZlbnQuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnXHJcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cclxuICAgICAgICAgIHJvbGU9J3ByZXNlbnRhdGlvbidcclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTGFiZWxDbGlja0V2ZW50LmJpbmQodGhpcykgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7IGxlYWYgPyBjaGlsZHJlbiA6IG51bGwgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDaGlsZE5vZGUobGV2ZWwsIHRub2RlKSB7XHJcbiAgICBjb25zdCB7IG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwgeyBsZXZlbCwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRlZmF1bHRPcGVuZWQsIG9wZW5lZCwgbGVhZiwgbGV2ZWwsXHJcbiAgICAgIG9uQ2xpY2ssIG9uVG9nZ2xlLCBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbkxhYmVsQ2xpY2ssIG9uTm9kZUxhYmVsQ2xpY2ssXHJcbiAgICAgIHRvZ2dsZU9uTm9kZUNsaWNrLFxyXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGlzT3BlbmVkID1cclxuICAgICAgdHlwZW9mIG9wZW5lZCAhPT0gJ3VuZGVmaW5lZCcgPyBvcGVuZWQgOlxyXG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5vcGVuZWQgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5vcGVuZWQgOlxyXG4gICAgICBkZWZhdWx0T3BlbmVkO1xyXG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtdHJlZV9fZ3JvdXAnLCB7XHJcbiAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxyXG4gICAgICAnaXMtZXhwYW5kZWQnOiBpc09wZW5lZCxcclxuICAgICAgJ3NsZHMtc2hvdyc6IGlzT3BlbmVkLFxyXG4gICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpdGVtUHJvcHMgPSB7IGxlYWYsIGlzT3BlbmVkLCBjaGlsZHJlbiwgLi4ucHJvcHMgfTtcclxuICAgIGlmIChsZWFmKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIHJvbGU9J3RyZWVpdGVtJyBhcmlhLWxldmVsPXsgbGV2ZWwgfT5cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17IGxldmVsIH0gYXJpYS1leHBhbmRlZD17IGlzT3BlbmVkIH0+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcykgfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9eyBncnBDbGFzc05hbWVzIH0gcm9sZT0nZ3JvdXAnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGROb2RlLmJpbmQodGhpcywgbGV2ZWwgKyAxKSkgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uTm9kZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Ob2RlTGFiZWxDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbk5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdG9nZ2xlT25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGVhZjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXX0=