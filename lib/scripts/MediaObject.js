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
  figureLeft: _react.PropTypes.node,
  figureRight: _react.PropTypes.node,
  figureCenter: _react.PropTypes.node,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01lZGlhT2JqZWN0LmpzIl0sIm5hbWVzIjpbIk1lZGlhT2JqZWN0IiwiZmlndXJlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJmaWd1cmVMZWZ0IiwiZmlndXJlUmlnaHQiLCJmaWd1cmVDZW50ZXIiLCJjaGlsZHJlbiIsInJlbmRlckZpZ3VyZSIsInByb3BUeXBlcyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7O2lDQUNOQyxNLEVBQVFDLFMsRUFBVztBQUM5QixVQUFJLENBQUNELE1BQUwsRUFBYSxPQUFPLElBQVA7QUFDYixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsMEJBQVcsb0JBQVgsRUFBaUNDLFNBQWpDLENBQWhCO0FBQ0dEO0FBREgsT0FERjtBQUtEOzs7NkJBRVE7QUFBQSxtQkFDcUQsS0FBS0UsS0FEMUQ7QUFBQSxVQUNDQyxVQURELFVBQ0NBLFVBREQ7QUFBQSxVQUNhQyxXQURiLFVBQ2FBLFdBRGI7QUFBQSxVQUMwQkMsWUFEMUIsVUFDMEJBLFlBRDFCO0FBQUEsVUFDd0NDLFFBRHhDLFVBQ3dDQSxRQUR4Qzs7QUFFUCxVQUFNTCxZQUFZLFlBQWxCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQSxTQUFoQjtBQUNHLGFBQUtNLFlBQUwsQ0FBa0JGLFlBQWxCLEVBQWdDLDZCQUFoQyxDQURIO0FBRUcsYUFBS0UsWUFBTCxDQUFrQkosVUFBbEIsQ0FGSDtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVcsa0JBQWhCO0FBQ0dHO0FBREgsU0FIRjtBQU1HLGFBQUtDLFlBQUwsQ0FBa0JILFdBQWxCLEVBQStCLDZCQUEvQjtBQU5ILE9BREY7QUFVRDs7Ozs7a0JBdkJrQkwsVzs7O0FBMEJyQkEsWUFBWVMsU0FBWixHQUF3QjtBQUN0QkwsY0FBWSxpQkFBVU0sSUFEQTtBQUV0QkwsZUFBYSxpQkFBVUssSUFGRDtBQUd0QkosZ0JBQWMsaUJBQVVJLElBSEY7QUFJdEJILFlBQVUsaUJBQVVHO0FBSkUsQ0FBeEIiLCJmaWxlIjoiTWVkaWFPYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYU9iamVjdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckZpZ3VyZShmaWd1cmUsIGNsYXNzTmFtZSkge1xuICAgIGlmICghZmlndXJlKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ3NsZHMtbWVkaWFfX2ZpZ3VyZScsIGNsYXNzTmFtZSl9PlxuICAgICAgICB7ZmlndXJlfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpZ3VyZUxlZnQsIGZpZ3VyZVJpZ2h0LCBmaWd1cmVDZW50ZXIsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9ICdzbGRzLW1lZGlhJztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnJlbmRlckZpZ3VyZShmaWd1cmVDZW50ZXIsICdzbGRzLW1lZGlhX19maWd1cmUtLXN0YWNrZWQnKX1cbiAgICAgICAge3RoaXMucmVuZGVyRmlndXJlKGZpZ3VyZUxlZnQpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NsZHMtbWVkaWFfX2JvZHknfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5yZW5kZXJGaWd1cmUoZmlndXJlUmlnaHQsICdzbGRzLW1lZGlhX19maWd1cmUtLXJldmVyc2UnKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTWVkaWFPYmplY3QucHJvcFR5cGVzID0ge1xuICBmaWd1cmVMZWZ0OiBQcm9wVHlwZXMubm9kZSxcbiAgZmlndXJlUmlnaHQ6IFByb3BUeXBlcy5ub2RlLFxuICBmaWd1cmVDZW50ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19