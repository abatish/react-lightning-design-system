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
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onNodeClick: _propTypes2.default.func,
  onNodeToggle: _propTypes2.default.func,
  onNodeLabelClick: _propTypes2.default.func,
  toggleOnNodeClick: _propTypes2.default.bool,
  children: _propTypes2.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWUuanMiXSwibmFtZXMiOlsiVHJlZSIsInJlbmRlclRyZWVOb2RlIiwiYmluZCIsInRub2RlIiwicHJvcHMiLCJvbk5vZGVDbGljayIsIm9uTm9kZVRvZ2dsZSIsIm9uTm9kZUxhYmVsQ2xpY2siLCJ0b2dnbGVPbk5vZGVDbGljayIsImxldmVsIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGlsZHJlbiIsInRyZWVDbGFzc05hbWVzIiwicHByb3BzIiwicHJvcFR5cGVzIiwibWFwIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLEk7OztBQUNuQixrQkFBYztBQUFBOztBQUFBOztBQUdaLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFIWTtBQUliOzs7O21DQUVjQyxLLEVBQU87QUFBQSxtQkFDdUQsS0FBS0MsS0FENUQ7QUFBQSxVQUNaQyxXQURZLFVBQ1pBLFdBRFk7QUFBQSxVQUNDQyxZQURELFVBQ0NBLFlBREQ7QUFBQSxVQUNlQyxnQkFEZixVQUNlQSxnQkFEZjtBQUFBLFVBQ2lDQyxpQkFEakMsVUFDaUNBLGlCQURqQzs7QUFFcEIsYUFBTyx5QkFBYUwsS0FBYixFQUFvQjtBQUN6Qk0sZUFBTyxDQURrQixFQUNmSix3QkFEZSxFQUNGQywwQkFERSxFQUNZQyxrQ0FEWixFQUM4QkM7QUFEOUIsT0FBcEIsQ0FBUDtBQUdEOzs7NkJBRVE7QUFBQSxvQkFDMEMsS0FBS0osS0FEL0M7QUFBQSxVQUNDTSxTQURELFdBQ0NBLFNBREQ7QUFBQSxVQUNZQyxLQURaLFdBQ1lBLEtBRFo7QUFBQSxVQUNtQkMsUUFEbkIsV0FDbUJBLFFBRG5CO0FBQUEsVUFDZ0NSLEtBRGhDOztBQUVQLFVBQU1TLGlCQUFpQiwwQkFBV0gsU0FBWCxFQUFzQixxQkFBdEIsQ0FBdkI7QUFDQSxVQUFNSSxTQUFTLHNCQUFXVixLQUFYLEVBQWtCSixLQUFLZSxTQUF2QixDQUFmO0FBQ0EsYUFDRTtBQUFBO0FBQUEsaUNBQUssV0FBWUYsY0FBakIsRUFBa0MsTUFBSyxhQUF2QyxJQUEwREMsTUFBMUQ7QUFFSUgsZ0JBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVSwwQkFBZDtBQUEyQ0E7QUFBM0MsU0FERixHQUVFLElBSk47QUFNRTtBQUFBO0FBQUEsWUFBSSxXQUFVLFdBQWQsRUFBMEIsTUFBSyxNQUEvQjtBQUNJLDBCQUFTSyxHQUFULENBQWFKLFFBQWIsRUFBdUIsS0FBS1gsY0FBNUI7QUFESjtBQU5GLE9BREY7QUFZRDs7Ozs7a0JBOUJrQkQsSTs7O0FBaUNyQkEsS0FBS2UsU0FBTCxHQUFpQjtBQUNmTCxhQUFXLG9CQUFVTyxNQUROO0FBRWZOLFNBQU8sb0JBQVVNLE1BRkY7QUFHZlosZUFBYSxvQkFBVWEsSUFIUjtBQUlmWixnQkFBYyxvQkFBVVksSUFKVDtBQUtmWCxvQkFBa0Isb0JBQVVXLElBTGI7QUFNZlYscUJBQW1CLG9CQUFVVyxJQU5kO0FBT2ZQLFlBQVUsb0JBQVVRO0FBUEwsQ0FBakIiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuLCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVuZGVyVHJlZU5vZGUgPSB0aGlzLnJlbmRlclRyZWVOb2RlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXJUcmVlTm9kZSh0bm9kZSkge1xuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudCh0bm9kZSwge1xuICAgICAgbGV2ZWw6IDEsIG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRyZWVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWUtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHByb3BzID0gY2xlYW5Qcm9wcyhwcm9wcywgVHJlZS5wcm9wVHlwZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRyZWVDbGFzc05hbWVzIH0gcm9sZT0nYXBwbGljYXRpb24nIHsgLi4ucHByb3BzIH0+XG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbCA/XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdzbGRzLXRleHQtaGVhZGluZy0tbGFiZWwnPnsgbGFiZWwgfTwvaDQ+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRyZWUnIHJvbGU9J3RyZWUnPlxuICAgICAgICAgIHsgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlclRyZWVOb2RlKSB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRyZWUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbk5vZGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTm9kZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTm9kZUxhYmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=