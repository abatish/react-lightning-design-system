'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var Container = function (_React$Component) {
  (0, _inherits3.default)(Container, _React$Component);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var align = _props.align;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'align', 'children']);

      var ctClassNames = (0, _classnames2.default)(className, 'slds-container--' + (size || 'fluid'), align ? 'slds-container--' + align : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ctClassNames }, props),
        children
      );
    }
  }]);
  return Container;
}(_react2.default.Component);

exports.default = Container;


var CONTAINER_SIZES = ['small', 'medium', 'large'];

var CONTAINER_ALIGNS = ['left', 'center', 'right'];

Container.propTypes = {
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(CONTAINER_SIZES),
  align: _react.PropTypes.oneOf(CONTAINER_ALIGNS),
  children: _react.PropTypes.element
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCLFM7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDZ0QsS0FBSyxLQURyRDtBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLElBRFosVUFDWSxJQURaO0FBQUEsVUFDa0IsS0FEbEIsVUFDa0IsS0FEbEI7QUFBQSxVQUN5QixRQUR6QixVQUN5QixRQUR6QjtBQUFBLFVBQ3NDLEtBRHRDOztBQUVQLFVBQU0sZUFBZSwwQkFDbkIsU0FEbUIsd0JBRUEsUUFBUSxPQUZSLEdBR25CLDZCQUEyQixLQUEzQixHQUFxQyxJQUhsQixDQUFyQjtBQUtBLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksWUFBakIsSUFBcUMsS0FBckM7UUFDSTtBQURKLE9BREY7QUFLRDs7O0VBYm9DLGdCQUFNLFM7O2tCQUF4QixTOzs7QUFnQnJCLElBQU0sa0JBQWtCLENBQ3RCLE9BRHNCLEVBRXRCLFFBRnNCLEVBR3RCLE9BSHNCLENBQXhCOztBQU1BLElBQU0sbUJBQW1CLENBQ3ZCLE1BRHVCLEVBRXZCLFFBRnVCLEVBR3ZCLE9BSHVCLENBQXpCOztBQU1BLFVBQVUsU0FBVixHQUFzQjtBQUNwQixhQUFXLGlCQUFVLE1BREQ7QUFFcEIsUUFBTSxpQkFBVSxLQUFWLENBQWdCLGVBQWhCLENBRmM7QUFHcEIsU0FBTyxpQkFBVSxLQUFWLENBQWdCLGdCQUFoQixDQUhhO0FBSXBCLFlBQVUsaUJBQVU7QUFKQSxDQUF0QiIsImZpbGUiOiJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHNpemUsIGFsaWduLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIGBzbGRzLWNvbnRhaW5lci0tJHtzaXplIHx8ICdmbHVpZCd9YCxcclxuICAgICAgYWxpZ24gPyBgc2xkcy1jb250YWluZXItLSR7YWxpZ259YCA6IG51bGxcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGN0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfSA+XHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IENPTlRBSU5FUl9TSVpFUyA9IFtcclxuICAnc21hbGwnLFxyXG4gICdtZWRpdW0nLFxyXG4gICdsYXJnZScsXHJcbl07XHJcblxyXG5jb25zdCBDT05UQUlORVJfQUxJR05TID0gW1xyXG4gICdsZWZ0JyxcclxuICAnY2VudGVyJyxcclxuICAncmlnaHQnLFxyXG5dO1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKENPTlRBSU5FUl9TSVpFUyksXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihDT05UQUlORVJfQUxJR05TKSxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcbiJdfQ==