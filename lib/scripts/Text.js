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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  tag: _propTypes2.default.string,
  category: _propTypes2.default.oneOf(TEXT_CATEGORIES),
  type: _propTypes2.default.oneOf(TEXT_TYPES),
  align: _propTypes2.default.oneOf(TEXT_ALIGNS),
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  truncate: _propTypes2.default.bool,
  section: _propTypes2.default.bool
};

exports.default = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHQuanMiXSwibmFtZXMiOlsiVGV4dCIsInRhZyIsImNhdGVnb3J5IiwidHlwZSIsImFsaWduIiwidHJ1bmNhdGUiLCJzZWN0aW9uIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwcm9wcyIsInRleHRDbGFzc05hbWVzIiwiVGFnIiwicHByb3BzIiwidHJhbmNhdGUiLCJURVhUX0NBVEVHT1JJRVMiLCJURVhUX0JPRFlfVFlQRVMiLCJURVhUX0hFQURJTkdfVFlQRVMiLCJURVhUX1RZUEVTIiwiY29uY2F0IiwiVEVYVF9BTElHTlMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsIm5vZGUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sT0FBc0Y7QUFBQTs7QUFBQSxNQUFuRkMsR0FBbUYsUUFBbkZBLEdBQW1GO0FBQUEsTUFBOUVDLFFBQThFLFFBQTlFQSxRQUE4RTtBQUFBLE1BQXBFQyxJQUFvRSxRQUFwRUEsSUFBb0U7QUFBQSxNQUE5REMsS0FBOEQsUUFBOURBLEtBQThEO0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTdDQyxPQUE2QyxRQUE3Q0EsT0FBNkM7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DO0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2pHLE1BQU1DLGlCQUFpQix1R0FFTFIsUUFGSyxVQUVRQyxJQUZSLEVBRWlCQSxRQUFRRCxRQUZ6Qiw2REFHTEEsUUFISyxFQUdRQSxZQUFZLENBQUNDLElBSHJCLDhDQUluQixlQUptQixFQUlGRSxRQUpFLG9FQUtFRCxLQUxGLEVBS1lBLEtBTFosOENBTW5CLDZCQU5tQixFQU1ZRSxPQU5aLGlCQVFyQkUsU0FScUIsQ0FBdkI7QUFVQSxNQUFNRyxNQUFNVixPQUFPLEdBQW5CO0FBQ0EsTUFBTVcsU0FBUyxzQkFBYyxFQUFkLEVBQWtCSCxLQUFsQixDQUFmO0FBQ0EsU0FBT0csT0FBT0MsUUFBZDtBQUNBLFNBQ0U7QUFBQyxPQUFEO0FBQUEsK0JBQVNELE1BQVQsSUFBaUIsV0FBV0YsY0FBNUI7QUFDR0g7QUFESCxHQURGO0FBS0QsQ0FuQkQ7O0FBcUJBLElBQU1PLGtCQUFrQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLE9BQXBCLENBQXhCO0FBQ0EsSUFBTUMsa0JBQWtCLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsTUFBckIsQ0FBeEI7QUFDQSxJQUFNQyxxQkFBcUIsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixPQUFwQixDQUEzQjtBQUNBLElBQU1DLGFBQWEsQ0FBQyxPQUFELEVBQVVDLE1BQVYsQ0FBaUJILGVBQWpCLEVBQWtDQyxrQkFBbEMsQ0FBbkI7QUFDQSxJQUFNRyxjQUFjLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FBcEI7O0FBRUFuQixLQUFLb0IsU0FBTCxHQUFpQjtBQUNmbkIsT0FBSyxvQkFBVW9CLE1BREE7QUFFZm5CLFlBQVUsb0JBQVVvQixLQUFWLENBQWdCUixlQUFoQixDQUZLO0FBR2ZYLFFBQU0sb0JBQVVtQixLQUFWLENBQWdCTCxVQUFoQixDQUhTO0FBSWZiLFNBQU8sb0JBQVVrQixLQUFWLENBQWdCSCxXQUFoQixDQUpRO0FBS2ZYLGFBQVcsb0JBQVVhLE1BTE47QUFNZmQsWUFBVSxvQkFBVWdCLElBTkw7QUFPZmxCLFlBQVUsb0JBQVVtQixJQVBMO0FBUWZsQixXQUFTLG9CQUFVa0I7QUFSSixDQUFqQjs7a0JBV2V4QixJIiwiZmlsZSI6IlRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBUZXh0ID0gKHsgdGFnLCBjYXRlZ29yeSwgdHlwZSwgYWxpZ24sIHRydW5jYXRlLCBzZWN0aW9uLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHRleHRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICB7XG4gICAgICBbYHNsZHMtdGV4dC0ke2NhdGVnb3J5fS0tJHt0eXBlfWBdOiB0eXBlICYmIGNhdGVnb3J5LFxuICAgICAgW2BzbGRzLXRleHQtJHtjYXRlZ29yeX1gXTogY2F0ZWdvcnkgJiYgIXR5cGUsXG4gICAgICAnc2xkcy10cnVuY2F0ZSc6IHRydW5jYXRlLFxuICAgICAgW2BzbGRzLXRleHQtYWxpZ24tLSR7YWxpZ259YF06IGFsaWduLFxuICAgICAgJ3NsZHMtc2VjdGlvbi10aXRsZS0tZGl2aWRlcic6IHNlY3Rpb24sXG4gICAgfSxcbiAgICBjbGFzc05hbWVcbiAgKTtcbiAgY29uc3QgVGFnID0gdGFnIHx8ICdwJztcbiAgY29uc3QgcHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICBkZWxldGUgcHByb3BzLnRyYW5jYXRlO1xuICByZXR1cm4gKFxuICAgIDxUYWcgey4uLnBwcm9wc30gY2xhc3NOYW1lPXt0ZXh0Q2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWc+XG4gICk7XG59O1xuXG5jb25zdCBURVhUX0NBVEVHT1JJRVMgPSBbJ2JvZHknLCAnaGVhZGluZycsICd0aXRsZSddO1xuY29uc3QgVEVYVF9CT0RZX1RZUEVTID0gWydyZWd1bGFyJywgJ3NtYWxsJywgJ2NhcHMnXTtcbmNvbnN0IFRFWFRfSEVBRElOR19UWVBFUyA9IFsnbGFyZ2UnLCAnbWVkaXVtJywgJ2xhYmVsJ107XG5jb25zdCBURVhUX1RZUEVTID0gWydzbWFsbCddLmNvbmNhdChURVhUX0JPRFlfVFlQRVMsIFRFWFRfSEVBRElOR19UWVBFUyk7XG5jb25zdCBURVhUX0FMSUdOUyA9IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXTtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5vbmVPZihURVhUX0NBVEVHT1JJRVMpLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoVEVYVF9UWVBFUyksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoVEVYVF9BTElHTlMpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxuICBzZWN0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0=