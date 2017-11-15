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

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tree = function (_Component) {
  (0, _inherits3.default)(Tree, _Component);

  function Tree() {
    (0, _classCallCheck3.default)(this, Tree);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tree.__proto__ || (0, _getPrototypeOf2.default)(Tree)).call(this));

    _this.renderTreeNode = _this.renderTreeNode.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Tree, [{
    key: 'renderTreeNode',
    value: function renderTreeNode(tnode) {
      var _props = this.props,
          onNodeClick = _props.onNodeClick,
          onNodeToggle = _props.onNodeToggle,
          onNodeLabelClick = _props.onNodeLabelClick,
          toggleOnNodeClick = _props.toggleOnNodeClick;

      return (0, _react.cloneElement)(tnode, {
        level: 1, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          label = _props2.label,
          children = _props2.children,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'label', 'children']);

      var treeClassNames = (0, _classnames2.default)(className, 'slds-tree-container');
      var pprops = (0, _util.cleanProps)(props, Tree.propTypes);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: treeClassNames, role: 'application' }, pprops),
        label ? _react2.default.createElement(
          'h4',
          { className: 'slds-text-heading--label' },
          label
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'slds-tree', role: 'tree' },
          _react.Children.map(children, this.renderTreeNode)
        )
      );
    }
  }]);
  return Tree;
}(_react.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWUuanMiXSwibmFtZXMiOlsiVHJlZSIsInJlbmRlclRyZWVOb2RlIiwiYmluZCIsInRub2RlIiwicHJvcHMiLCJvbk5vZGVDbGljayIsIm9uTm9kZVRvZ2dsZSIsIm9uTm9kZUxhYmVsQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsImxldmVsIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGlsZHJlbiIsInRyZWVDbGFzc05hbWVzIiwicHByb3BzIiwicHJvcFR5cGVzIiwibWFwIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxJOzs7QUFDbkIsa0JBQWM7QUFBQTs7QUFBQTs7QUFHWixVQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBSFk7QUFJYjs7OzttQ0FFY0MsSyxFQUFPO0FBQUEsbUJBQ3VELEtBQUtDLEtBRDVEO0FBQUEsVUFDWkMsV0FEWSxVQUNaQSxXQURZO0FBQUEsVUFDQ0MsWUFERCxVQUNDQSxZQUREO0FBQUEsVUFDZUMsZ0JBRGYsVUFDZUEsZ0JBRGY7QUFBQSxVQUNpQ0MsaUJBRGpDLFVBQ2lDQSxpQkFEakM7O0FBRXBCLGFBQU8seUJBQWFMLEtBQWIsRUFBb0I7QUFDekJNLGVBQU8sQ0FEa0IsRUFDZkosd0JBRGUsRUFDRkMsMEJBREUsRUFDWUMsa0NBRFosRUFDOEJDO0FBRDlCLE9BQXBCLENBQVA7QUFHRDs7OzZCQUVRO0FBQUEsb0JBQzBDLEtBQUtKLEtBRC9DO0FBQUEsVUFDQ00sU0FERCxXQUNDQSxTQUREO0FBQUEsVUFDWUMsS0FEWixXQUNZQSxLQURaO0FBQUEsVUFDbUJDLFFBRG5CLFdBQ21CQSxRQURuQjtBQUFBLFVBQ2dDUixLQURoQzs7QUFFUCxVQUFNUyxpQkFBaUIsMEJBQVdILFNBQVgsRUFBc0IscUJBQXRCLENBQXZCO0FBQ0EsVUFBTUksU0FBUyxzQkFBV1YsS0FBWCxFQUFrQkosS0FBS2UsU0FBdkIsQ0FBZjtBQUNBLGFBQ0U7QUFBQTtBQUFBLGlDQUFLLFdBQVlGLGNBQWpCLEVBQWtDLE1BQUssYUFBdkMsSUFBMERDLE1BQTFEO0FBRUlILGdCQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsMEJBQWQ7QUFBMkNBO0FBQTNDLFNBREYsR0FFRSxJQUpOO0FBTUU7QUFBQTtBQUFBLFlBQUksV0FBVSxXQUFkLEVBQTBCLE1BQUssTUFBL0I7QUFDSSwwQkFBU0ssR0FBVCxDQUFhSixRQUFiLEVBQXVCLEtBQUtYLGNBQTVCO0FBREo7QUFORixPQURGO0FBWUQ7Ozs7O2tCQTlCa0JELEk7OztBQWlDckJBLEtBQUtlLFNBQUwsR0FBaUI7QUFDZkwsYUFBVyxpQkFBVU8sTUFETjtBQUVmTixTQUFPLGlCQUFVTSxNQUZGO0FBR2ZaLGVBQWEsaUJBQVVhLElBSFI7QUFJZlosZ0JBQWMsaUJBQVVZLElBSlQ7QUFLZlgsb0JBQWtCLGlCQUFVVyxJQUxiO0FBTWZWLHFCQUFtQixpQkFBVVcsSUFOZDtBQU9mUCxZQUFVLGlCQUFVUTtBQVBMLENBQWpCIiwiZmlsZSI6IlRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMsIENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZW5kZXJUcmVlTm9kZSA9IHRoaXMucmVuZGVyVHJlZU5vZGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlclRyZWVOb2RlKHRub2RlKSB7XG4gICAgY29uc3QgeyBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbk5vZGVMYWJlbENsaWNrLCB0b2dnbGVPbk5vZGVDbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KHRub2RlLCB7XG4gICAgICBsZXZlbDogMSwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2ssXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdHJlZUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZS1jb250YWluZXInKTtcbiAgICBjb25zdCBwcHJvcHMgPSBjbGVhblByb3BzKHByb3BzLCBUcmVlLnByb3BUeXBlcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdHJlZUNsYXNzTmFtZXMgfSByb2xlPSdhcHBsaWNhdGlvbicgeyAuLi5wcHJvcHMgfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID9cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+eyBsYWJlbCB9PC9oND4gOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtdHJlZScgcm9sZT0ndHJlZSc+XG4gICAgICAgICAgeyBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVHJlZU5vZGUpIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVHJlZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Ob2RlTGFiZWxDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvZ2dsZU9uTm9kZUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==