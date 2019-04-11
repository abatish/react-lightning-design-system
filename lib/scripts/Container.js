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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJjbGFzc05hbWUiLCJzaXplIiwiYWxpZ24iLCJjaGlsZHJlbiIsInByb3BzIiwiY3RDbGFzc05hbWVzIiwiQ09OVEFJTkVSX1NJWkVTIiwiQ09OVEFJTkVSX0FMSUdOUyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxPQUFvRDtBQUFBLE1BQWpEQyxTQUFpRCxRQUFqREEsU0FBaUQ7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUNwRSxNQUFNQyxlQUFlLDBCQUNuQkwsU0FEbUIsd0JBRUFDLFFBQVEsT0FGUixHQUduQkMsNkJBQTJCQSxLQUEzQixHQUFxQyxJQUhsQixDQUFyQjtBQUtBLFNBQ0U7QUFBQTtBQUFBLDZCQUFLLFdBQVlHLFlBQWpCLElBQXFDRCxLQUFyQztBQUNJRDtBQURKLEdBREY7QUFLRCxDQVhEOztBQWFBLElBQU1HLGtCQUFrQixDQUN0QixPQURzQixFQUV0QixRQUZzQixFQUd0QixPQUhzQixDQUF4Qjs7QUFNQSxJQUFNQyxtQkFBbUIsQ0FDdkIsTUFEdUIsRUFFdkIsUUFGdUIsRUFHdkIsT0FIdUIsQ0FBekI7O0FBTUFSLFVBQVVTLFNBQVYsR0FBc0I7QUFDcEJSLGFBQVdTLG9CQUFVQyxNQUREO0FBRXBCVCxRQUFNUSxvQkFBVUUsS0FBVixDQUFnQkwsZUFBaEIsQ0FGYztBQUdwQkosU0FBT08sb0JBQVVFLEtBQVYsQ0FBZ0JKLGdCQUFoQixDQUhhO0FBSXBCSixZQUFVTSxvQkFBVUc7QUFKQSxDQUF0Qjs7a0JBT2ViLFMiLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgQ29udGFpbmVyID0gKHsgY2xhc3NOYW1lLCBzaXplLCBhbGlnbiwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgYHNsZHMtY29udGFpbmVyLS0ke3NpemUgfHwgJ2ZsdWlkJ31gLFxuICAgIGFsaWduID8gYHNsZHMtY29udGFpbmVyLS0ke2FsaWdufWAgOiBudWxsXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0gPlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDT05UQUlORVJfU0laRVMgPSBbXG4gICdzbWFsbCcsXG4gICdtZWRpdW0nLFxuICAnbGFyZ2UnLFxuXTtcblxuY29uc3QgQ09OVEFJTkVSX0FMSUdOUyA9IFtcbiAgJ2xlZnQnLFxuICAnY2VudGVyJyxcbiAgJ3JpZ2h0Jyxcbl07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKENPTlRBSU5FUl9TSVpFUyksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoQ09OVEFJTkVSX0FMSUdOUyksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ==