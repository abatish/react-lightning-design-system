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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MediaObject = function (_Component) {
  (0, _inherits3.default)(MediaObject, _Component);

  function MediaObject() {
    (0, _classCallCheck3.default)(this, MediaObject);
    return (0, _possibleConstructorReturn3.default)(this, (MediaObject.__proto__ || (0, _getPrototypeOf2.default)(MediaObject)).apply(this, arguments));
  }

  (0, _createClass3.default)(MediaObject, [{
    key: 'renderFigure',
    value: function renderFigure(figure, className) {
      if (!figure) return null;
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('slds-media__figure', className) },
        figure
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          figureLeft = _props.figureLeft,
          figureRight = _props.figureRight,
          figureCenter = _props.figureCenter,
          children = _props.children;

      var className = 'slds-media';
      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderFigure(figureCenter, 'slds-media__figure--stacked'),
        this.renderFigure(figureLeft),
        _react2.default.createElement(
          'div',
          { className: 'slds-media__body' },
          children
        ),
        this.renderFigure(figureRight, 'slds-media__figure--reverse')
      );
    }
  }]);
  return MediaObject;
}(_react.Component);

exports.default = MediaObject;


MediaObject.propTypes = {
  figureLeft: _propTypes2.default.node,
  figureRight: _propTypes2.default.node,
  figureCenter: _propTypes2.default.node,
  children: _propTypes2.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01lZGlhT2JqZWN0LmpzIl0sIm5hbWVzIjpbIk1lZGlhT2JqZWN0IiwiZmlndXJlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJmaWd1cmVMZWZ0IiwiZmlndXJlUmlnaHQiLCJmaWd1cmVDZW50ZXIiLCJjaGlsZHJlbiIsInJlbmRlckZpZ3VyZSIsInByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7aUNBQ05DLE0sRUFBUUMsUyxFQUFXO0FBQzlCLFVBQUksQ0FBQ0QsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUNiLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVywwQkFBVyxvQkFBWCxFQUFpQ0MsU0FBakMsQ0FBaEI7QUFDR0Q7QUFESCxPQURGO0FBS0Q7Ozs2QkFFUTtBQUFBLG1CQUNxRCxLQUFLRSxLQUQxRDtBQUFBLFVBQ0NDLFVBREQsVUFDQ0EsVUFERDtBQUFBLFVBQ2FDLFdBRGIsVUFDYUEsV0FEYjtBQUFBLFVBQzBCQyxZQUQxQixVQUMwQkEsWUFEMUI7QUFBQSxVQUN3Q0MsUUFEeEMsVUFDd0NBLFFBRHhDOztBQUVQLFVBQU1MLFlBQVksWUFBbEI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdBLFNBQWhCO0FBQ0csYUFBS00sWUFBTCxDQUFrQkYsWUFBbEIsRUFBZ0MsNkJBQWhDLENBREg7QUFFRyxhQUFLRSxZQUFMLENBQWtCSixVQUFsQixDQUZIO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVyxrQkFBaEI7QUFDR0c7QUFESCxTQUhGO0FBTUcsYUFBS0MsWUFBTCxDQUFrQkgsV0FBbEIsRUFBK0IsNkJBQS9CO0FBTkgsT0FERjtBQVVEOzs7OztrQkF2QmtCTCxXOzs7QUEwQnJCQSxZQUFZUyxTQUFaLEdBQXdCO0FBQ3RCTCxjQUFZLG9CQUFVTSxJQURBO0FBRXRCTCxlQUFhLG9CQUFVSyxJQUZEO0FBR3RCSixnQkFBYyxvQkFBVUksSUFIRjtBQUl0QkgsWUFBVSxvQkFBVUc7QUFKRSxDQUF4QiIsImZpbGUiOiJNZWRpYU9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhT2JqZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyRmlndXJlKGZpZ3VyZSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFmaWd1cmUpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2xkcy1tZWRpYV9fZmlndXJlJywgY2xhc3NOYW1lKX0+XG4gICAgICAgIHtmaWd1cmV9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlndXJlTGVmdCwgZmlndXJlUmlnaHQsIGZpZ3VyZUNlbnRlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gJ3NsZHMtbWVkaWEnO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucmVuZGVyRmlndXJlKGZpZ3VyZUNlbnRlciwgJ3NsZHMtbWVkaWFfX2ZpZ3VyZS0tc3RhY2tlZCcpfVxuICAgICAgICB7dGhpcy5yZW5kZXJGaWd1cmUoZmlndXJlTGVmdCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnc2xkcy1tZWRpYV9fYm9keSd9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZ3VyZShmaWd1cmVSaWdodCwgJ3NsZHMtbWVkaWFfX2ZpZ3VyZS0tcmV2ZXJzZScpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5NZWRpYU9iamVjdC5wcm9wVHlwZXMgPSB7XG4gIGZpZ3VyZUxlZnQ6IFByb3BUeXBlcy5ub2RlLFxuICBmaWd1cmVSaWdodDogUHJvcFR5cGVzLm5vZGUsXG4gIGZpZ3VyZUNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG4iXX0=