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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function (_React$Component) {
  (0, _inherits3.default)(Tree, _React$Component);

  function Tree() {
    (0, _classCallCheck3.default)(this, Tree);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tree).apply(this, arguments));
  }

  (0, _createClass3.default)(Tree, [{
    key: 'renderTreeNode',
    value: function renderTreeNode(tnode) {
      var _props = this.props;
      var onNodeClick = _props.onNodeClick;
      var onNodeToggle = _props.onNodeToggle;
      var onNodeLabelClick = _props.onNodeLabelClick;
      var toggleOnNodeClick = _props.toggleOnNodeClick;

      return _react2.default.cloneElement(tnode, { level: 1, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var label = _props2.label;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'label', 'children']);

      var treeClassNames = (0, _classnames2.default)(className, 'slds-tree-container');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: treeClassNames, role: 'application' }, props),
        label ? _react2.default.createElement(
          'h4',
          { className: 'slds-text-heading--label' },
          label
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'slds-tree', role: 'tree' },
          _react2.default.Children.map(children, this.renderTreeNode.bind(this))
        )
      );
    }
  }]);
  return Tree;
}(_react2.default.Component);

exports.default = Tree;


Tree.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  onNodeClick: _react.PropTypes.func,
  onNodeToggle: _react.PropTypes.func,
  onNodeLabelClick: _react.PropTypes.func,
  toggleOnNodeClick: _react.PropTypes.bool,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUdxQixJOzs7Ozs7Ozs7O21DQUNKLEssRUFBTztBQUFBLG1CQUN1RCxLQUFLLEtBRDVEO0FBQUEsVUFDWixXQURZLFVBQ1osV0FEWTtBQUFBLFVBQ0MsWUFERCxVQUNDLFlBREQ7QUFBQSxVQUNlLGdCQURmLFVBQ2UsZ0JBRGY7QUFBQSxVQUNpQyxpQkFEakMsVUFDaUMsaUJBRGpDOztBQUVwQixhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsRUFBRSxPQUFPLENBQVQsRUFBWSx3QkFBWixFQUF5QiwwQkFBekIsRUFBdUMsa0NBQXZDLEVBQXlELG9DQUF6RCxFQUExQixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQUMwQyxLQUFLLEtBRC9DO0FBQUEsVUFDQyxTQURELFdBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixXQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixXQUNtQixRQURuQjtBQUFBLFVBQ2dDLEtBRGhDOztBQUVQLFVBQU0saUJBQWlCLDBCQUFXLFNBQVgsRUFBc0IscUJBQXRCLENBQXZCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQUssV0FBWSxjQUFqQixFQUFrQyxNQUFLLGFBQXZDLElBQTBELEtBQTFEO1FBRUksUUFDQTtBQUFBO1VBQUEsRUFBSSxXQUFVLDBCQUFkO1VBQTJDO0FBQTNDLFNBREEsR0FFQSxJQUpKO1FBTUU7QUFBQTtVQUFBLEVBQUksV0FBVSxXQUFkLEVBQTBCLE1BQUssTUFBL0I7VUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBN0I7QUFESjtBQU5GLE9BREY7QUFZRDs7O0VBckIrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBd0JyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixTQUFPLGlCQUFVLE1BRkY7QUFHZixlQUFhLGlCQUFVLElBSFI7QUFJZixnQkFBYyxpQkFBVSxJQUpUO0FBS2Ysb0JBQWtCLGlCQUFVLElBTGI7QUFNZixxQkFBbUIsaUJBQVUsSUFOZDtBQU9mLFlBQVUsaUJBQVU7QUFQTCxDQUFqQiIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJUcmVlTm9kZSh0bm9kZSkge1xuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwgeyBsZXZlbDogMSwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJlZUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZS1jb250YWluZXInKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0cmVlQ2xhc3NOYW1lcyB9IHJvbGU9J2FwcGxpY2F0aW9uJyB7IC4uLnByb3BzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJz57IGxhYmVsIH08L2g0PiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtdHJlZScgcm9sZT0ndHJlZSc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVHJlZU5vZGUuYmluZCh0aGlzKSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UcmVlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVUb2dnbGU6IFByb3BUeXBlcy5mdW5jLFxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG9nZ2xlT25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19