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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbIlRyZWVOb2RlIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJlIiwib25Ub2dnbGUiLCJvbk5vZGVUb2dnbGUiLCJzZXRTdGF0ZSIsIm9uTGFiZWxDbGljayIsIm9uTm9kZUxhYmVsQ2xpY2siLCJvbkNsaWNrIiwib25Ob2RlQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsIml0ZW1Qcm9wcyIsImNsYXNzTmFtZSIsImxhYmVsIiwiaWNvbiIsImxvYWRpbmciLCJzZWxlY3RlZCIsImxlYWYiLCJpc09wZW5lZCIsImNoaWxkcmVuIiwiaXRlbVJlbmRlciIsIml0bUNsYXNzTmFtZXMiLCJwcHJvcHMiLCJwcm9wVHlwZXMiLCJiaW5kIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibGV2ZWwiLCJ0bm9kZSIsImNsb25lRWxlbWVudCIsImdycENsYXNzTmFtZXMiLCJyZW5kZXJUcmVlSXRlbSIsIkNoaWxkcmVuIiwibWFwIiwicmVuZGVyQ2hpbGROb2RlIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJudW1iZXIiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxROzs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUVDLFFBQVEsTUFBS0YsS0FBTCxDQUFXRyxhQUFyQixFQUFiO0FBRmlCO0FBR2xCOzs7OzZCQUVRQyxDLEVBQUc7QUFBQSxtQkFDeUIsS0FBS0osS0FEOUI7QUFBQSxVQUNGSyxRQURFLFVBQ0ZBLFFBREU7QUFBQSxVQUNRQyxZQURSLFVBQ1FBLFlBRFI7O0FBRVYsVUFBSUQsUUFBSixFQUFj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QkFBVVcsTUFiRTtBQWNuQnBCLFlBQVUsb0JBQVVxQixJQWREO0FBZW5CcEIsY0FBWSxvQkFBVWlCO0FBZkgsQ0FBckIiLCJmaWxlIjoiVHJlZU5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBvcGVuZWQ6IHRoaXMucHJvcHMuZGVmYXVsdE9wZW5lZCB9O1xuICB9XG5cbiAgb25Ub2dnbGUoZSkge1xuICAgIGNvbnN0IHsgb25Ub2dnbGUsIG9uTm9kZVRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25Ub2dnbGUpIHsgb25Ub2dnbGUoZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAob25Ob2RlVG9nZ2xlKSB7IG9uTm9kZVRvZ2dsZShlLCB0aGlzLnByb3BzKTsgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcbiAgfVxuXG4gIG9uTGFiZWxDbGljayhlKSB7XG4gICAgY29uc3QgeyBvbkxhYmVsQ2xpY2ssIG9uTm9kZUxhYmVsQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uTGFiZWxDbGljaykgeyBvbkxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cbiAgICBpZiAob25Ob2RlTGFiZWxDbGljaykgeyBvbk5vZGVMYWJlbENsaWNrKGUsIHRoaXMucHJvcHMpOyB9XG4gIH1cblxuICBvbkNsaWNrKGUpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2ssIG9uTm9kZUNsaWNrLCB0b2dnbGVPbk5vZGVDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DbGljaykgeyBvbkNsaWNrKGUsIHRoaXMucHJvcHMpOyB9XG4gICAgaWYgKG9uTm9kZUNsaWNrKSB7IG9uTm9kZUNsaWNrKGUsIHRoaXMucHJvcHMpOyB9XG4gICAgaWYgKHRvZ2dsZU9uTm9kZUNsaWNrKSB7XG4gICAgICB0aGlzLm9uVG9nZ2xlKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbGFiZWwsIGljb24gPSAnY2hldnJvbnJpZ2h0JywgbG9hZGluZywgc2VsZWN0ZWQsIGxlYWYsIGlzT3BlbmVkLFxuICAgICAgY2hpbGRyZW4sIGl0ZW1SZW5kZXIsIC4uLnByb3BzXG4gICAgfSA9IGl0ZW1Qcm9wcztcbiAgICBjb25zdCBpdG1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWVfX2l0ZW0nLCB7XG4gICAgICAnc2xkcy1pcy1vcGVuJzogaXNPcGVuZWQsXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgIH0pO1xuICAgIGNvbnN0IHBwcm9wcyA9IGNsZWFuUHJvcHMocHJvcHMsIFRyZWVOb2RlLnByb3BUeXBlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgaXRtQ2xhc3NOYW1lcyB9XG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGxvYWRpbmcgP1xuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgY29udGFpbmVyPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJ1xuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ3N0YXRpYycsIG1hcmdpblRvcDogMTQsIG1hcmdpbkxlZnQ6IC0yIH19XG4gICAgICAgICAgICAvPiA6XG4gICAgICAgICAgIWxlYWYgP1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0tc21hbGwnXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9JydcbiAgICAgICAgICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgICAgIGljb25TaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Ub2dnbGUuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgcm9sZT0ncHJlc2VudGF0aW9uJ1xuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTGFiZWxDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtUmVuZGVyID9cbiAgICAgICAgICAgIGl0ZW1SZW5kZXIoaXRlbVByb3BzKSA6XG4gICAgICAgICAgICBsYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9hPlxuICAgICAgICB7IGxlYWYgPyBjaGlsZHJlbiA6IG51bGwgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkTm9kZShsZXZlbCwgdG5vZGUpIHtcbiAgICBjb25zdCB7IG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodG5vZGUsIHtcbiAgICAgIGxldmVsLCBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbk5vZGVMYWJlbENsaWNrLCB0b2dnbGVPbk5vZGVDbGljayxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0T3BlbmVkLCBvcGVuZWQsIGxlYWYsIGxldmVsLFxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNPcGVuZWQgPVxuICAgICAgdHlwZW9mIG9wZW5lZCAhPT0gJ3VuZGVmaW5lZCcgPyBvcGVuZWQgOlxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUub3BlbmVkICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUub3BlbmVkIDpcbiAgICAgIGRlZmF1bHRPcGVuZWQ7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtdHJlZV9fZ3JvdXAnLCB7XG4gICAgICAnc2xkcy1uZXN0ZWQnOiAhbGVhZixcbiAgICAgICdpcy1leHBhbmRlZCc6IGlzT3BlbmVkLFxuICAgICAgJ3NsZHMtc2hvdyc6IGlzT3BlbmVkLFxuICAgICAgJ3NsZHMtaGlkZSc6ICFpc09wZW5lZCxcbiAgICB9KTtcbiAgICBjb25zdCBpdGVtUHJvcHMgPSB7IGxlYWYsIGlzT3BlbmVkLCBjaGlsZHJlbiwgLi4ucHJvcHMgfTtcbiAgICBpZiAobGVhZikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHJvbGU9J3RyZWVpdGVtJyBhcmlhLWxldmVsPXsgbGV2ZWwgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKSB9XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9eyBsZXZlbCB9IGFyaWEtZXhwYW5kZWQ9eyBpc09wZW5lZCB9PlxuICAgICAgICB7IHRoaXMucmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKSB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9eyBncnBDbGFzc05hbWVzIH0gcm9sZT0nZ3JvdXAnPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkTm9kZS5iaW5kKHRoaXMsIGxldmVsICsgMSkpIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5cblRyZWVOb2RlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlTGFiZWxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTGFiZWxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG9nZ2xlT25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGVhZjogUHJvcFR5cGVzLmJvb2wsXG4gIGxldmVsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGl0ZW1SZW5kZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdfQ==