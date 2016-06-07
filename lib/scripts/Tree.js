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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUdxQixJOzs7Ozs7Ozs7O21DQUNKLEssRUFBTztBQUFBLG1CQUN1RCxLQUFLLEtBRDVEO0FBQUEsVUFDWixXQURZLFVBQ1osV0FEWTtBQUFBLFVBQ0MsWUFERCxVQUNDLFlBREQ7QUFBQSxVQUNlLGdCQURmLFVBQ2UsZ0JBRGY7QUFBQSxVQUNpQyxpQkFEakMsVUFDaUMsaUJBRGpDOztBQUVwQixhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsRUFBRSxPQUFPLENBQVQsRUFBWSx3QkFBWixFQUF5QiwwQkFBekIsRUFBdUMsa0NBQXZDLEVBQXlELG9DQUF6RCxFQUExQixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG9CQUMwQyxLQUFLLEtBRC9DO0FBQUEsVUFDQyxTQURELFdBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixXQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixXQUNtQixRQURuQjtBQUFBLFVBQ2dDLEtBRGhDOztBQUVQLFVBQU0saUJBQWlCLDBCQUFXLFNBQVgsRUFBc0IscUJBQXRCLENBQXZCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQUssV0FBWSxjQUFqQixFQUFrQyxNQUFLLGFBQXZDLElBQTBELEtBQTFEO1FBRUksUUFDQTtBQUFBO1VBQUEsRUFBSSxXQUFVLDBCQUFkO1VBQTJDO0FBQTNDLFNBREEsR0FFQSxJQUpKO1FBTUU7QUFBQTtVQUFBLEVBQUksV0FBVSxXQUFkLEVBQTBCLE1BQUssTUFBL0I7VUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBN0I7QUFESjtBQU5GLE9BREY7QUFZRDs7O0VBckIrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBd0JyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixTQUFPLGlCQUFVLE1BRkY7QUFHZixlQUFhLGlCQUFVLElBSFI7QUFJZixnQkFBYyxpQkFBVSxJQUpUO0FBS2Ysb0JBQWtCLGlCQUFVLElBTGI7QUFNZixxQkFBbUIsaUJBQVUsSUFOZDtBQU9mLFlBQVUsaUJBQVU7QUFQTCxDQUFqQiIsImZpbGUiOiJUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyVHJlZU5vZGUodG5vZGUpIHtcclxuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRub2RlLCB7IGxldmVsOiAxLCBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbk5vZGVMYWJlbENsaWNrLCB0b2dnbGVPbk5vZGVDbGljayB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdHJlZUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZS1jb250YWluZXInKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdHJlZUNsYXNzTmFtZXMgfSByb2xlPSdhcHBsaWNhdGlvbicgeyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsID9cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+eyBsYWJlbCB9PC9oND4gOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRyZWUnIHJvbGU9J3RyZWUnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVHJlZU5vZGUuYmluZCh0aGlzKSkgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRyZWUucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbk5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Ob2RlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXX0=