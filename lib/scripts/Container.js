'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(_ref) {
  var className = _ref.className,
      size = _ref.size,
      align = _ref.align,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'size', 'align', 'children']);

  var ctClassNames = (0, _classnames2.default)(className, 'slds-container--' + (size || 'fluid'), align ? 'slds-container--' + align : null);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: ctClassNames }, props),
    children
  );
};

var CONTAINER_SIZES = ['small', 'medium', 'large'];

var CONTAINER_ALIGNS = ['left', 'center', 'right'];

Container.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(CONTAINER_SIZES),
  align: _propTypes2.default.oneOf(CONTAINER_ALIGNS),
  children: _propTypes2.default.element
};

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJjbGFzc05hbWUiLCJzaXplIiwiYWxpZ24iLCJjaGlsZHJlbiIsInByb3BzIiwiY3RDbGFzc05hbWVzIiwiQ09OVEFJTkVSX1NJWkVTIiwiQ09OVEFJTkVSX0FMSUdOUyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxPQUFvRDtBQUFBLE1BQWpEQyxTQUFpRCxRQUFqREEsU0FBaUQ7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUNwRSxNQUFNQyxlQUFlLDBCQUNuQkwsU0FEbUIsd0JBRUFDLFFBQVEsT0FGUixHQUduQkMsNkJBQTJCQSxLQUEzQixHQUFxQyxJQUhsQixDQUFyQjtBQUtBLFNBQ0U7QUFBQTtBQUFBLDZCQUFLLFdBQVlHLFlBQWpCLElBQXFDRCxLQUFyQztBQUNJRDtBQURKLEdBREY7QUFLRCxDQVhEOztBQWFBLElBQU1HLGtCQUFrQixDQUN0QixPQURzQixFQUV0QixRQUZzQixFQUd0QixPQUhzQixDQUF4Qjs7QUFNQSxJQUFNQyxtQkFBbUIsQ0FDdkIsTUFEdUIsRUFFdkIsUUFGdUIsRUFHdkIsT0FIdUIsQ0FBekI7O0FBTUFSLFVBQVVTLFNBQVYsR0FBc0I7QUFDcEJSLGFBQVcsb0JBQVVTLE1BREQ7QUFFcEJSLFFBQU0sb0JBQVVTLEtBQVYsQ0FBZ0JKLGVBQWhCLENBRmM7QUFHcEJKLFNBQU8sb0JBQVVRLEtBQVYsQ0FBZ0JILGdCQUFoQixDQUhhO0FBSXBCSixZQUFVLG9CQUFVUTtBQUpBLENBQXRCOztrQkFPZVosUyIsImZpbGUiOiJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjbGFzc05hbWUsIHNpemUsIGFsaWduLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBjdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgc2xkcy1jb250YWluZXItLSR7c2l6ZSB8fCAnZmx1aWQnfWAsXG4gICAgYWxpZ24gPyBgc2xkcy1jb250YWluZXItLSR7YWxpZ259YCA6IG51bGxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGN0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfSA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENPTlRBSU5FUl9TSVpFUyA9IFtcbiAgJ3NtYWxsJyxcbiAgJ21lZGl1bScsXG4gICdsYXJnZScsXG5dO1xuXG5jb25zdCBDT05UQUlORVJfQUxJR05TID0gW1xuICAnbGVmdCcsXG4gICdjZW50ZXInLFxuICAncmlnaHQnLFxuXTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoQ09OVEFJTkVSX1NJWkVTKSxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihDT05UQUlORVJfQUxJR05TKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl19