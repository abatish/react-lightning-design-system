'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function (_React$Component) {
  (0, _inherits3.default)(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    (0, _classCallCheck3.default)(this, Breadcrumbs);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Breadcrumbs).apply(this, arguments));
  }

  (0, _createClass3.default)(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;


      return _react2.default.createElement(
        'nav',
        { role: 'navigation' },
        _react2.default.createElement(
          'ol',
          {
            className: 'slds-breadcrumb slds-list--horizontal',
            'aria-labelledby': 'bread-crumb-label'
          },
          items.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              {
                key: index,
                className: 'slds-list__item slds-text-heading--label'
              },
              _react2.default.createElement(
                'a',
                { href: item.href },
                item.label
              )
            );
          })
        )
      );
    }
  }]);
  return Breadcrumbs;
}(_react2.default.Component);

exports.default = Breadcrumbs;


Breadcrumbs.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    href: _react2.default.PropTypes.string
  })).isRequired
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JyZWFkY3J1bWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQixXOzs7Ozs7Ozs7OzZCQUNWO0FBQUEsVUFDQyxLQURELEdBQ1csS0FBSyxLQURoQixDQUNDLEtBREQ7OztBQUdQLGFBQ0U7QUFBQTtRQUFBLEVBQUssTUFBSyxZQUFWO1FBQ0U7QUFBQTtVQUFBO0FBQ0UsdUJBQVUsdUNBRFo7QUFFRSwrQkFBZ0I7QUFGbEI7VUFJRyxNQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQzFCLG1CQUNFO0FBQUE7Y0FBQTtBQUNFLHFCQUFNLEtBRFI7QUFFRSwyQkFBVTtBQUZaO2NBSUU7QUFBQTtnQkFBQSxFQUFHLE1BQU8sS0FBSyxJQUFmO2dCQUF3QixLQUFLO0FBQTdCO0FBSkYsYUFERjtBQVFELFdBVEE7QUFKSDtBQURGLE9BREY7QUFtQkQ7OztFQXZCc0MsZ0JBQU0sUzs7a0JBQTFCLFc7OztBQTBCckIsWUFBWSxTQUFaLEdBQXdCO0FBQ3RCLFNBQU8saUJBQVUsT0FBVixDQUFrQixpQkFBVSxLQUFWLENBQWdCO0FBQ3ZDLFdBQU8sZ0JBQU0sU0FBTixDQUFnQixNQURnQjtBQUV2QyxVQUFNLGdCQUFNLFNBQU4sQ0FBZ0I7QUFGaUIsR0FBaEIsQ0FBbEIsRUFHSDtBQUprQixDQUF4QiIsImZpbGUiOiJCcmVhZGNydW1icy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFkY3J1bWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiByb2xlPSduYXZpZ2F0aW9uJz5cbiAgICAgICAgPG9sXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWJyZWFkY3J1bWIgc2xkcy1saXN0LS1ob3Jpem9udGFsJ1xuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT0nYnJlYWQtY3J1bWItbGFiZWwnXG4gICAgICAgID5cbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAga2V5PXsgaW5kZXggfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1saXN0X19pdGVtIHNsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9eyBpdGVtLmhyZWYgfT57IGl0ZW0ubGFiZWwgfTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvb2w+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG5cbkJyZWFkY3J1bWJzLnByb3BUeXBlcyA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGFiZWw6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgaHJlZjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuIl19