'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function Text(_ref) {
  var _classnames;

  var tag = _ref.tag,
      category = _ref.category,
      type = _ref.type,
      align = _ref.align,
      truncate = _ref.truncate,
      section = _ref.section,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties3.default)(_ref, ['tag', 'category', 'type', 'align', 'truncate', 'section', 'children', 'className']);

  var textClassNames = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, 'slds-text-' + category + '--' + type, type && category), (0, _defineProperty3.default)(_classnames, 'slds-text-' + category, category && !type), (0, _defineProperty3.default)(_classnames, 'slds-truncate', truncate), (0, _defineProperty3.default)(_classnames, 'slds-text-align--' + align, align), (0, _defineProperty3.default)(_classnames, 'slds-section-title--divider', section), _classnames), className);
  var Tag = tag || 'p';
  var pprops = (0, _assign2.default)({}, props);
  delete pprops.trancate;
  return _react2.default.createElement(
    Tag,
    (0, _extends3.default)({}, pprops, { className: textClassNames }),
    children
  );
};

var TEXT_CATEGORIES = ['body', 'heading', 'title'];
var TEXT_BODY_TYPES = ['regular', 'small', 'caps'];
var TEXT_HEADING_TYPES = ['large', 'medium', 'label'];
var TEXT_TYPES = ['small'].concat(TEXT_BODY_TYPES, TEXT_HEADING_TYPES);
var TEXT_ALIGNS = ['left', 'center', 'right'];

Text.propTypes = {
  tag: _react.PropTypes.string,
  category: _react.PropTypes.oneOf(TEXT_CATEGORIES),
  type: _react.PropTypes.oneOf(TEXT_TYPES),
  align: _react.PropTypes.oneOf(TEXT_ALIGNS),
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  truncate: _react.PropTypes.bool,
  section: _react.PropTypes.bool
};

exports.default = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHQuanMiXSwibmFtZXMiOlsiVGV4dCIsInRhZyIsImNhdGVnb3J5IiwidHlwZSIsImFsaWduIiwidHJ1bmNhdGUiLCJzZWN0aW9uIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsInRleHRDbGFzc05hbWVzIiwiVGFnIiwicHByb3BzIiwidHJhbmNhdGUiLCJURVhUX0NBVEVHT1JJRVMiLCJURVhUX0JPRFlfVFlQRVMiLCJURVhUX0hFQURJTkdfVFlQRVMiLCJURVhUX1RZUEVTIiwiY29uY2F0IiwiVEVYVF9BTElHTlMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLE9BQXNGO0FBQUE7O0FBQUEsTUFBbkZDLEdBQW1GLFFBQW5GQSxHQUFtRjtBQUFBLE1BQTlFQyxRQUE4RSxRQUE5RUEsUUFBOEU7QUFBQSxNQUFwRUMsSUFBb0UsUUFBcEVBLElBQW9FO0FBQUEsTUFBOURDLEtBQThELFFBQTlEQSxLQUE4RDtBQUFBLE1BQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxNQUE3Q0MsT0FBNkMsUUFBN0NBLE9BQTZDO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxNQUFaQyxLQUFZOztBQUNqRyxNQUFNQyxpQkFBaUIsdUdBRUxSLFFBRkssVUFFUUMsSUFGUixFQUVpQkEsUUFBUUQsUUFGekIsNkRBR0xBLFFBSEssRUFHUUEsWUFBWSxDQUFDQyxJQUhyQiw4Q0FJbkIsZUFKbUIsRUFJRkUsUUFKRSxvRUFLRUQsS0FMRixFQUtZQSxLQUxaLDhDQU1uQiw2QkFObUIsRUFNWUUsT0FOWixpQkFRckJFLFNBUnFCLENBQXZCO0FBVUEsTUFBTUcsTUFBTVYsT0FBTyxHQUFuQjtBQUNBLE1BQU1XLFNBQVMsc0JBQWMsRUFBZCxFQUFrQkgsS0FBbEIsQ0FBZjtBQUNBLFNBQU9HLE9BQU9DLFFBQWQ7QUFDQSxTQUNFO0FBQUMsT0FBRDtBQUFBLCtCQUFTRCxNQUFULElBQWlCLFdBQVdGLGNBQTVCO0FBQ0dIO0FBREgsR0FERjtBQUtELENBbkJEOztBQXFCQSxJQUFNTyxrQkFBa0IsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixPQUFwQixDQUF4QjtBQUNBLElBQU1DLGtCQUFrQixDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLE1BQXJCLENBQXhCO0FBQ0EsSUFBTUMscUJBQXFCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBM0I7QUFDQSxJQUFNQyxhQUFhLENBQUMsT0FBRCxFQUFVQyxNQUFWLENBQWlCSCxlQUFqQixFQUFrQ0Msa0JBQWxDLENBQW5CO0FBQ0EsSUFBTUcsY0FBYyxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLE9BQW5CLENBQXBCOztBQUVBbkIsS0FBS29CLFNBQUwsR0FBaUI7QUFDZm5CLE9BQUssaUJBQVVvQixNQURBO0FBRWZuQixZQUFVLGlCQUFVb0IsS0FBVixDQUFnQlIsZUFBaEIsQ0FGSztBQUdmWCxRQUFNLGlCQUFVbUIsS0FBVixDQUFnQkwsVUFBaEIsQ0FIUztBQUlmYixTQUFPLGlCQUFVa0IsS0FBVixDQUFnQkgsV0FBaEIsQ0FKUTtBQUtmWCxhQUFXLGlCQUFVYSxNQUxOO0FBTWZkLFlBQVUsaUJBQVVnQixJQU5MO0FBT2ZsQixZQUFVLGlCQUFVbUIsSUFQTDtBQVFmbEIsV0FBUyxpQkFBVWtCO0FBUkosQ0FBakI7O2tCQVdleEIsSSIsImZpbGUiOiJUZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFRleHQgPSAoeyB0YWcsIGNhdGVnb3J5LCB0eXBlLCBhbGlnbiwgdHJ1bmNhdGUsIHNlY3Rpb24sIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgdGV4dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIHtcbiAgICAgIFtgc2xkcy10ZXh0LSR7Y2F0ZWdvcnl9LS0ke3R5cGV9YF06IHR5cGUgJiYgY2F0ZWdvcnksXG4gICAgICBbYHNsZHMtdGV4dC0ke2NhdGVnb3J5fWBdOiBjYXRlZ29yeSAmJiAhdHlwZSxcbiAgICAgICdzbGRzLXRydW5jYXRlJzogdHJ1bmNhdGUsXG4gICAgICBbYHNsZHMtdGV4dC1hbGlnbi0tJHthbGlnbn1gXTogYWxpZ24sXG4gICAgICAnc2xkcy1zZWN0aW9uLXRpdGxlLS1kaXZpZGVyJzogc2VjdGlvbixcbiAgICB9LFxuICAgIGNsYXNzTmFtZVxuICApO1xuICBjb25zdCBUYWcgPSB0YWcgfHwgJ3AnO1xuICBjb25zdCBwcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gIGRlbGV0ZSBwcHJvcHMudHJhbmNhdGU7XG4gIHJldHVybiAoXG4gICAgPFRhZyB7Li4ucHByb3BzfSBjbGFzc05hbWU9e3RleHRDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbiAgKTtcbn07XG5cbmNvbnN0IFRFWFRfQ0FURUdPUklFUyA9IFsnYm9keScsICdoZWFkaW5nJywgJ3RpdGxlJ107XG5jb25zdCBURVhUX0JPRFlfVFlQRVMgPSBbJ3JlZ3VsYXInLCAnc21hbGwnLCAnY2FwcyddO1xuY29uc3QgVEVYVF9IRUFESU5HX1RZUEVTID0gWydsYXJnZScsICdtZWRpdW0nLCAnbGFiZWwnXTtcbmNvbnN0IFRFWFRfVFlQRVMgPSBbJ3NtYWxsJ10uY29uY2F0KFRFWFRfQk9EWV9UWVBFUywgVEVYVF9IRUFESU5HX1RZUEVTKTtcbmNvbnN0IFRFWFRfQUxJR05TID0gWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLm9uZU9mKFRFWFRfQ0FURUdPUklFUyksXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihURVhUX1RZUEVTKSxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihURVhUX0FMSUdOUyksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0cnVuY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHNlY3Rpb246IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdfQ==