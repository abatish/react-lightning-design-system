'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Crumb = undefined;

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

var Crumb = function Crumb(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'href', 'children']);

  var text = children;
  var cClassName = (0, _classnames2.default)('slds-list__item slds-text-heading--label', className);

  return _react2.default.createElement(
    'li',
    (0, _extends3.default)({}, props, { className: cClassName }),
    _react2.default.createElement(
      'a',
      { href: href },
      text
    )
  );
};

exports.Crumb = Crumb;
Crumb.propTypes = {
  href: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var BreadCrumbs = function BreadCrumbs(_ref2) {
  var label = _ref2.label,
      className = _ref2.className,
      children = _ref2.children,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['label', 'className', 'children']);

  var oClassName = (0, _classnames2.default)('slds-breadcrumb slds-list--horizontal', className);

  return _react2.default.createElement(
    'nav',
    (0, _extends3.default)({}, props, { role: 'navigation' }),
    label ? _react2.default.createElement(
      'p',
      { id: 'bread-crumb-label', className: 'slds-assistive-text' },
      label
    ) : null,
    _react2.default.createElement(
      'ol',
      { className: oClassName, 'aria-labelledby': 'bread-crumb-label' },
      children
    )
  );
};

BreadCrumbs.propTypes = {
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

exports.default = BreadCrumbs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JyZWFkQ3J1bWJzLmpzIl0sIm5hbWVzIjpbIkNydW1iIiwiY2xhc3NOYW1lIiwiaHJlZiIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0IiwiY0NsYXNzTmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiLCJCcmVhZENydW1icyIsImxhYmVsIiwib0NsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsT0FBNkM7QUFBQSxNQUExQ0MsU0FBMEMsUUFBMUNBLFNBQTBDO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUNoRSxNQUFNQyxPQUFPRixRQUFiO0FBQ0EsTUFBTUcsYUFBYSwwQkFDakIsMENBRGlCLEVBRWpCTCxTQUZpQixDQUFuQjs7QUFLQSxTQUNFO0FBQUE7QUFBQSwrQkFBU0csS0FBVCxJQUFpQixXQUFZRSxVQUE3QjtBQUNFO0FBQUE7QUFBQSxRQUFHLE1BQU9KLElBQVY7QUFBbUJHO0FBQW5CO0FBREYsR0FERjtBQUtELENBWk07OztBQWNQTCxNQUFNTyxTQUFOLEdBQWtCO0FBQ2hCTCxRQUFNTSxvQkFBVUMsTUFEQTtBQUVoQlIsYUFBV08sb0JBQVVDLE1BRkw7QUFHaEJOLFlBQVVLLG9CQUFVRTtBQUhKLENBQWxCOztBQU1BLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxRQUE4QztBQUFBLE1BQTNDQyxLQUEyQyxTQUEzQ0EsS0FBMkM7QUFBQSxNQUFwQ1gsU0FBb0MsU0FBcENBLFNBQW9DO0FBQUEsTUFBekJFLFFBQXlCLFNBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2hFLE1BQU1TLGFBQWEsMEJBQ2pCLHVDQURpQixFQUVqQlosU0FGaUIsQ0FBbkI7O0FBS0EsU0FDRTtBQUFBO0FBQUEsK0JBQVVHLEtBQVYsSUFBa0IsTUFBSyxZQUF2QjtBQUNHUSxZQUNDO0FBQUE7QUFBQSxRQUFHLElBQUcsbUJBQU4sRUFBMEIsV0FBVSxxQkFBcEM7QUFBNERBO0FBQTVELEtBREQsR0FDMkUsSUFGOUU7QUFHRTtBQUFBO0FBQUEsUUFBSSxXQUFZQyxVQUFoQixFQUE2QixtQkFBZ0IsbUJBQTdDO0FBQ0lWO0FBREo7QUFIRixHQURGO0FBU0QsQ0FmRDs7QUFpQkFRLFlBQVlKLFNBQVosR0FBd0I7QUFDdEJLLFNBQU9KLG9CQUFVQyxNQURLO0FBRXRCUixhQUFXTyxvQkFBVUMsTUFGQztBQUd0Qk4sWUFBVUssb0JBQVVFO0FBSEUsQ0FBeEI7O2tCQU1lQyxXIiwiZmlsZSI6IkJyZWFkQ3J1bWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGNvbnN0IENydW1iID0gKHsgY2xhc3NOYW1lLCBocmVmLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0ZXh0ID0gY2hpbGRyZW47XG4gIGNvbnN0IGNDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICdzbGRzLWxpc3RfX2l0ZW0gc2xkcy10ZXh0LWhlYWRpbmctLWxhYmVsJyxcbiAgICBjbGFzc05hbWVcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxsaSB7IC4uLnByb3BzIH0gY2xhc3NOYW1lPXsgY0NsYXNzTmFtZSB9PlxuICAgICAgPGEgaHJlZj17IGhyZWYgfT57IHRleHQgfTwvYT5cbiAgICA8L2xpPlxuICApO1xufTtcblxuQ3J1bWIucHJvcFR5cGVzID0ge1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IEJyZWFkQ3J1bWJzID0gKHsgbGFiZWwsIGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3Qgb0NsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgJ3NsZHMtYnJlYWRjcnVtYiBzbGRzLWxpc3QtLWhvcml6b250YWwnLFxuICAgIGNsYXNzTmFtZVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiB7IC4uLnByb3BzIH0gcm9sZT0nbmF2aWdhdGlvbic+XG4gICAgICB7bGFiZWwgP1xuICAgICAgICA8cCBpZD0nYnJlYWQtY3J1bWItbGFiZWwnIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBsYWJlbCB9PC9wPiA6IG51bGx9XG4gICAgICA8b2wgY2xhc3NOYW1lPXsgb0NsYXNzTmFtZSB9IGFyaWEtbGFiZWxsZWRieT0nYnJlYWQtY3J1bWItbGFiZWwnPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5CcmVhZENydW1icy5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkQ3J1bWJzO1xuIl19