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
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(CONTAINER_SIZES),
  align: _react.PropTypes.oneOf(CONTAINER_ALIGNS),
  children: _react.PropTypes.element
};

exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJjbGFzc05hbWUiLCJzaXplIiwiYWxpZ24iLCJjaGlsZHJlbiIsInByb3BzIiwiY3RDbGFzc05hbWVzIiwiQ09OVEFJTkVSX1NJWkVTIiwiQ09OVEFJTkVSX0FMSUdOUyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksT0FBb0Q7QUFBQSxNQUFqREMsU0FBaUQsUUFBakRBLFNBQWlEO0FBQUEsTUFBdENDLElBQXNDLFFBQXRDQSxJQUFzQztBQUFBLE1BQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDcEUsTUFBTUMsZUFBZSwwQkFDbkJMLFNBRG1CLHdCQUVBQyxRQUFRLE9BRlIsR0FHbkJDLDZCQUEyQkEsS0FBM0IsR0FBcUMsSUFIbEIsQ0FBckI7QUFLQSxTQUNFO0FBQUE7QUFBQSw2QkFBSyxXQUFZRyxZQUFqQixJQUFxQ0QsS0FBckM7QUFDSUQ7QUFESixHQURGO0FBS0QsQ0FYRDs7QUFhQSxJQUFNRyxrQkFBa0IsQ0FDdEIsT0FEc0IsRUFFdEIsUUFGc0IsRUFHdEIsT0FIc0IsQ0FBeEI7O0FBTUEsSUFBTUMsbUJBQW1CLENBQ3ZCLE1BRHVCLEVBRXZCLFFBRnVCLEVBR3ZCLE9BSHVCLENBQXpCOztBQU1BUixVQUFVUyxTQUFWLEdBQXNCO0FBQ3BCUixhQUFXLGlCQUFVUyxNQUREO0FBRXBCUixRQUFNLGlCQUFVUyxLQUFWLENBQWdCSixlQUFoQixDQUZjO0FBR3BCSixTQUFPLGlCQUFVUSxLQUFWLENBQWdCSCxnQkFBaEIsQ0FIYTtBQUlwQkosWUFBVSxpQkFBVVE7QUFKQSxDQUF0Qjs7a0JBT2VaLFMiLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjbGFzc05hbWUsIHNpemUsIGFsaWduLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBjdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBgc2xkcy1jb250YWluZXItLSR7c2l6ZSB8fCAnZmx1aWQnfWAsXG4gICAgYWxpZ24gPyBgc2xkcy1jb250YWluZXItLSR7YWxpZ259YCA6IG51bGxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGN0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfSA+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENPTlRBSU5FUl9TSVpFUyA9IFtcbiAgJ3NtYWxsJyxcbiAgJ21lZGl1bScsXG4gICdsYXJnZScsXG5dO1xuXG5jb25zdCBDT05UQUlORVJfQUxJR05TID0gW1xuICAnbGVmdCcsXG4gICdjZW50ZXInLFxuICAncmlnaHQnLFxuXTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoQ09OVEFJTkVSX1NJWkVTKSxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihDT05UQUlORVJfQUxJR05TKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIl19