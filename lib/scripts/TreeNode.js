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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBRSxRQUFRLE1BQUssS0FBTCxDQUFXLGFBQXJCLEVBQWI7QUFGaUI7QUFHbEI7Ozs7Ozs7a0NBR2EsQyxFQUFHO0FBQUEsbUJBQ29CLEtBQUssS0FEekI7QUFBQSxVQUNQLFFBRE8sVUFDUCxRQURPO0FBQUEsVUFDRyxZQURILFVBQ0csWUFESDs7QUFFZixVQUFJLFFBQUosRUFBYztBQUFFLGlCQUFTLENBQVQsRUFBWSxLQUFLLEtBQWpCO0FBQTBCO0FBQzFDLFVBQUksWUFBSixFQUFrQjtBQUFFLHFCQUFhLENBQWIsRUFBZ0IsS0FBSyxLQUFyQjtBQUE4QjtBQUNsRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUF0QixFQUFkO0FBQ0Q7OztzQ0FFaUIsQyxFQUFHO0FBQUEsb0JBQ3dCLEtBQUssS0FEN0I7QUFBQSxVQUNYLFlBRFcsV0FDWCxZQURXO0FBQUEsVUFDRyxnQkFESCxXQUNHLGdCQURIOztBQUVuQixVQUFJLFlBQUosRUFBa0I7QUFBRSxxQkFBYSxDQUFiLEVBQWdCLEtBQUssS0FBckI7QUFBOEI7QUFDbEQsVUFBSSxnQkFBSixFQUFzQjtBQUFFLHlCQUFpQixDQUFqQixFQUFvQixLQUFLLEtBQXpCO0FBQWtDO0FBQzNEOzs7aUNBRVksQyxFQUFHO0FBQUEsb0JBQ3NDLEtBQUssS0FEM0M7QUFBQSxVQUNOLE9BRE0sV0FDTixPQURNO0FBQUEsVUFDRyxXQURILFdBQ0csV0FESDtBQUFBLFVBQ2dCLGlCQURoQixXQUNnQixpQkFEaEI7O0FBRWQs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aUJBQVUsSUFSSjtBQVNuQixxQkFBbUIsaUJBQVUsSUFUVjtBQVVuQixpQkFBZSxpQkFBVSxJQVZOO0FBV25CLFVBQVEsaUJBQVUsSUFYQztBQVluQixRQUFNLGlCQUFVLElBWkc7QUFhbkIsU0FBTyxpQkFBVSxNQWJFO0FBY25CLFlBQVUsaUJBQVU7QUFkRCxDQUFyQiIsImZpbGUiOiJUcmVlTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlTm9kZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5lZDogdGhpcy5wcm9wcy5kZWZhdWx0T3BlbmVkIH07XG4gIH1cblxuICAvLyBUT0RPOiByZXZlcnQgaXQgYmFiZWxqcyBidWcgaHR0cHM6Ly9waGFicmljYXRvci5iYWJlbGpzLmlvL1QyODkyXG4gIG9uVG9nZ2xlRXZlbnQoZSkge1xuICAgIGNvbnN0IHsgb25Ub2dnbGUsIG9uTm9kZVRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25Ub2dnbGUpIHsgb25Ub2dnbGUoZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAob25Ob2RlVG9nZ2xlKSB7IG9uTm9kZVRvZ2dsZShlLCB0aGlzLnByb3BzKTsgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcbiAgfVxuXG4gIG9uTGFiZWxDbGlja0V2ZW50KGUpIHtcbiAgICBjb25zdCB7IG9uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25MYWJlbENsaWNrKSB7IG9uTGFiZWxDbGljayhlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVMYWJlbENsaWNrKSB7IG9uTm9kZUxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgfVxuXG4gIG9uQ2xpY2tFdmVudChlKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrLCBvbk5vZGVDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2xpY2spIHsgb25DbGljayhlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmIChvbk5vZGVDbGljaykgeyBvbk5vZGVDbGljayhlLCB0aGlzLnByb3BzKTsgfVxuICAgIGlmICh0b2dnbGVPbk5vZGVDbGljaykge1xuICAgICAgdGhpcy5vblRvZ2dsZUV2ZW50KGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbGFiZWwsIGljb24gPSAnY2hldnJvbnJpZ2h0JywgbG9hZGluZywgc2VsZWN0ZWQsIGxlYWYsIGlzT3BlbmVkLFxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzLFxuICAgIH0gPSBpdGVtUHJvcHM7XG4gICAgY29uc3QgaXRtQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10cmVlX19pdGVtJywge1xuICAgICAgJ3NsZHMtaXMtb3Blbic6IGlzT3BlbmVkLFxuICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBpdG1DbGFzc05hbWVzIH0gb25DbGljaz17IHRoaXMub25DbGlja0V2ZW50LmJpbmQodGhpcykgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkaW5nID8gPFNwaW5uZXIgc2l6ZT0nc21hbGwnIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJyAvPiA6XG4gICAgICAgICAgIWxlYWYgP1xuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXNtYWxsJ1xuICAgICAgICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgICAgICAgaWNvbj17IGljb24gfVxuICAgICAgICAgICAgaWNvblNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Ub2dnbGVFdmVudC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJ1xuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHJvbGU9J3ByZXNlbnRhdGlvbidcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkxhYmVsQ2xpY2tFdmVudC5iaW5kKHRoaXMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICA8L2E+XG4gICAgICAgIHsgbGVhZiA/IGNoaWxkcmVuIDogbnVsbCB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ2hpbGROb2RlKGxldmVsLCB0bm9kZSkge1xuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwgeyBsZXZlbCwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdE9wZW5lZCwgb3BlbmVkLCBsZWFmLCBsZXZlbCxcbiAgICAgIG9uQ2xpY2ssIG9uVG9nZ2xlLCBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbkxhYmVsQ2xpY2ssIG9uTm9kZUxhYmVsQ2xpY2ssXG4gICAgICB0b2dnbGVPbk5vZGVDbGljayxcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc09wZW5lZCA9XG4gICAgICB0eXBlb2Ygb3BlbmVkICE9PSAndW5kZWZpbmVkJyA/IG9wZW5lZCA6XG4gICAgICB0eXBlb2YgdGhpcy5zdGF0ZS5vcGVuZWQgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5vcGVuZWQgOlxuICAgICAgZGVmYXVsdE9wZW5lZDtcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcbiAgICAgICdzbGRzLW5lc3RlZCc6ICFsZWFmLFxuICAgICAgJ2lzLWV4cGFuZGVkJzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1oaWRlJzogIWlzT3BlbmVkLFxuICAgIH0pO1xuICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHsgbGVhZiwgaXNPcGVuZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9O1xuICAgIGlmIChsZWFmKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9eyBsZXZlbCB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSByb2xlPSd0cmVlaXRlbScgYXJpYS1sZXZlbD17IGxldmVsIH0gYXJpYS1leHBhbmRlZD17IGlzT3BlbmVkIH0+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUcmVlSXRlbShpdGVtUHJvcHMpIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSByb2xlPSdncm91cCc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGROb2RlLmJpbmQodGhpcywgbGV2ZWwgKyAxKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cblxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBsZWFmOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGV2ZWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=