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

var Badge = function Badge(_ref) {
  var children = _ref.children,
      type = _ref.type,
      label = _ref.label,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'type', 'label']);

  var typeClassName = type ? 'slds-theme--' + type : null;
  var badgeClassNames = (0, _classnames2.default)('slds-badge', typeClassName);
  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: badgeClassNames }, props),
    label || children
  );
};

var BADGE_TYPES = ['default', 'shade', 'inverse'];

Badge.propTypes = {
  type: _propTypes2.default.oneOf(BADGE_TYPES),
  label: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = Badge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JhZGdlLmpzIl0sIm5hbWVzIjpbIkJhZGdlIiwiY2hpbGRyZW4iLCJ0eXBlIiwibGFiZWwiLCJwcm9wcyIsInR5cGVDbGFzc05hbWUiLCJiYWRnZUNsYXNzTmFtZXMiLCJCQURHRV9UWVBFUyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFFBQVEsU0FBUkEsS0FBUSxPQUF5QztBQUFBLE1BQXRDQyxRQUFzQyxRQUF0Q0EsUUFBc0M7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQVpDLEtBQVk7O0FBQ3JELE1BQU1DLGdCQUFnQkgsd0JBQXNCQSxJQUF0QixHQUErQixJQUFyRDtBQUNBLE1BQU1JLGtCQUFrQiwwQkFDdEIsWUFEc0IsRUFFdEJELGFBRnNCLENBQXhCO0FBSUEsU0FDRTtBQUFBO0FBQUEsNkJBQU0sV0FBWUMsZUFBbEIsSUFBd0NGLEtBQXhDO0FBQ0lELGFBQVNGO0FBRGIsR0FERjtBQUtELENBWEQ7O0FBYUEsSUFBTU0sY0FBYyxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFNBQXJCLENBQXBCOztBQUVBUCxNQUFNUSxTQUFOLEdBQWtCO0FBQ2hCTixRQUFNTyxvQkFBVUMsS0FBVixDQUFnQkgsV0FBaEIsQ0FEVTtBQUVoQkosU0FBT00sb0JBQVVFLE1BRkQ7QUFHaEJWLFlBQVVRLG9CQUFVRztBQUhKLENBQWxCOztrQkFNZVosSyIsImZpbGUiOiJCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEJhZGdlID0gKHsgY2hpbGRyZW4sIHR5cGUsIGxhYmVsLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlID8gYHNsZHMtdGhlbWUtLSR7dHlwZX1gIDogbnVsbDtcbiAgY29uc3QgYmFkZ2VDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAnc2xkcy1iYWRnZScsXG4gICAgdHlwZUNsYXNzTmFtZVxuICApO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17IGJhZGdlQ2xhc3NOYW1lcyB9IHsuLi5wcm9wc30+XG4gICAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCBCQURHRV9UWVBFUyA9IFsnZGVmYXVsdCcsICdzaGFkZScsICdpbnZlcnNlJ107XG5cbkJhZGdlLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEJBREdFX1RZUEVTKSxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIl19