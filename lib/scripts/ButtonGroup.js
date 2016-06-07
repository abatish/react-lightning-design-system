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

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_React$Component) {
  (0, _inherits3.default)(ButtonGroup, _React$Component);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'renderButton',
    value: function renderButton(button, index) {
      var cnt = _react2.default.Children.count(this.props.children);
      if (button.type === _DropdownButton2.default) {
        return _react2.default.cloneElement(button, { key: index, grouped: true, isFirstInGroup: index === 0, isLastInGroup: index === cnt - 1 });
      }

      return button;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var btnGrpClassNames = (0, _classnames2.default)(className, 'slds-button-group');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: btnGrpClassNames, role: 'group' }, props),
        _react2.default.Children.map(children, this.renderButton.bind(this))
      );
    }
  }]);
  return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQixXOzs7Ozs7Ozs7O2lDQUNOLE0sRUFBUSxLLEVBQU87QUFDMUIsVUFBTSxNQUFNLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQWhDLENBQVo7QUFDQSxVQUFJLE9BQU8sSUFBUCw2QkFBSixFQUFvQztBQUNsQyxlQUFPLGdCQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsRUFBRSxLQUFLLEtBQVAsRUFBYyxTQUFTLElBQXZCLEVBQTZCLGdCQUFnQixVQUFVLENBQXZELEVBQTBELGVBQWUsVUFBVSxNQUFNLENBQXpGLEVBQTNCLENBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ21DLEtBQUssS0FEeEM7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxRQURaLFVBQ1ksUUFEWjtBQUFBLFVBQ3lCLEtBRHpCOztBQUVQLFVBQU0sbUJBQW1CLDBCQUFXLFNBQVgsRUFBc0IsbUJBQXRCLENBQXpCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQUssV0FBWSxnQkFBakIsRUFBb0MsTUFBSyxPQUF6QyxJQUFzRCxLQUF0RDtRQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUE3QjtBQURKLE9BREY7QUFLRDs7O0VBbEJzQyxnQkFBTSxTOztrQkFBMUIsVzs7O0FBcUJyQixZQUFZLFNBQVosR0FBd0I7QUFDdEIsYUFBVyxpQkFBVSxNQURDO0FBRXRCLFlBQVUsaUJBQVU7QUFGRSxDQUF4QiIsImZpbGUiOiJCdXR0b25Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyQnV0dG9uKGJ1dHRvbiwgaW5kZXgpIHtcclxuICAgIGNvbnN0IGNudCA9IFJlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG4gICAgaWYgKGJ1dHRvbi50eXBlID09PSBEcm9wZG93bkJ1dHRvbikge1xyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGJ1dHRvbiwgeyBrZXk6IGluZGV4LCBncm91cGVkOiB0cnVlLCBpc0ZpcnN0SW5Hcm91cDogaW5kZXggPT09IDAsIGlzTGFzdEluR3JvdXA6IGluZGV4ID09PSBjbnQgLSAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgYnRuR3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1idXR0b24tZ3JvdXAnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYnRuR3JwQ2xhc3NOYW1lcyB9IHJvbGU9J2dyb3VwJyB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcykpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQnV0dG9uR3JvdXAucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdfQ==