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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCLFM7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDZ0QsS0FBSyxLQURyRDtBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLElBRFosVUFDWSxJQURaO0FBQUEsVUFDa0IsS0FEbEIsVUFDa0IsS0FEbEI7QUFBQSxVQUN5QixRQUR6QixVQUN5QixRQUR6QjtBQUFBLFVBQ3NDLEtBRHRDOztBQUVQLFVBQU0sZUFBZSwwQkFDbkIsU0FEbUIsd0JBRUEsUUFBUSxPQUZSLEdBR25CLDZCQUEyQixLQUEzQixHQUFxQyxJQUhsQixDQUFyQjtBQUtBLGFBQ0U7QUFBQTtRQUFBLHlCQUFLLFdBQVksWUFBakIsSUFBcUMsS0FBckM7UUFDSTtBQURKLE9BREY7QUFLRDs7O0VBYm9DLGdCQUFNLFM7O2tCQUF4QixTOzs7QUFnQnJCLElBQU0sa0JBQWtCLENBQ3RCLE9BRHNCLEVBRXRCLFFBRnNCLEVBR3RCLE9BSHNCLENBQXhCOztBQU1BLElBQU0sbUJBQW1CLENBQ3ZCLE1BRHVCLEVBRXZCLFFBRnVCLEVBR3ZCLE9BSHVCLENBQXpCOztBQU1BLFVBQVUsU0FBVixHQUFzQjtBQUNwQixhQUFXLGlCQUFVLE1BREQ7QUFFcEIsUUFBTSxpQkFBVSxLQUFWLENBQWdCLGVBQWhCLENBRmM7QUFHcEIsU0FBTyxpQkFBVSxLQUFWLENBQWdCLGdCQUFoQixDQUhhO0FBSXBCLFlBQVUsaUJBQVU7QUFKQSxDQUF0QiIsImZpbGUiOiJDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2l6ZSwgYWxpZ24sIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYHNsZHMtY29udGFpbmVyLS0ke3NpemUgfHwgJ2ZsdWlkJ31gLFxuICAgICAgYWxpZ24gPyBgc2xkcy1jb250YWluZXItLSR7YWxpZ259YCA6IG51bGxcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGN0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfSA+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBDT05UQUlORVJfU0laRVMgPSBbXG4gICdzbWFsbCcsXG4gICdtZWRpdW0nLFxuICAnbGFyZ2UnLFxuXTtcblxuY29uc3QgQ09OVEFJTkVSX0FMSUdOUyA9IFtcbiAgJ2xlZnQnLFxuICAnY2VudGVyJyxcbiAgJ3JpZ2h0Jyxcbl07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKENPTlRBSU5FUl9TSVpFUyksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoQ09OVEFJTkVSX0FMSUdOUyksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG4iXX0=