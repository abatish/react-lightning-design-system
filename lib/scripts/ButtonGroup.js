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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQixXOzs7Ozs7Ozs7O2lDQUNOLE0sRUFBUSxLLEVBQU87QUFDMUIsVUFBTSxNQUFNLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQWhDLENBQVo7QUFDQSxVQUFJLE9BQU8sSUFBUCw2QkFBSixFQUFvQztBQUNsQyxlQUFPLGdCQUFNLFlBQU4sQ0FBbUIsTUFBbkIsRUFBMkIsRUFBRSxLQUFLLEtBQVAsRUFBYyxTQUFTLElBQXZCLEVBQTZCLGdCQUFnQixVQUFVLENBQXZELEVBQTBELGVBQWUsVUFBVSxNQUFNLENBQXpGLEVBQTNCLENBQVA7QUFDRDs7QUFFRCxhQUFPLE1BQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ21DLEtBQUssS0FEeEM7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxRQURaLFVBQ1ksUUFEWjtBQUFBLFVBQ3lCLEtBRHpCOztBQUVQLFVBQU0sbUJBQW1CLDBCQUFXLFNBQVgsRUFBc0IsbUJBQXRCLENBQXpCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQUssV0FBWSxnQkFBakIsRUFBb0MsTUFBSyxPQUF6QyxJQUFzRCxLQUF0RDtRQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUE3QjtBQURKLE9BREY7QUFLRDs7O0VBbEJzQyxnQkFBTSxTOztrQkFBMUIsVzs7O0FBcUJyQixZQUFZLFNBQVosR0FBd0I7QUFDdEIsYUFBVyxpQkFBVSxNQURDO0FBRXRCLFlBQVUsaUJBQVU7QUFGRSxDQUF4QiIsImZpbGUiOiJCdXR0b25Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJCdXR0b24oYnV0dG9uLCBpbmRleCkge1xuICAgIGNvbnN0IGNudCA9IFJlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChidXR0b24udHlwZSA9PT0gRHJvcGRvd25CdXR0b24pIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYnV0dG9uLCB7IGtleTogaW5kZXgsIGdyb3VwZWQ6IHRydWUsIGlzRmlyc3RJbkdyb3VwOiBpbmRleCA9PT0gMCwgaXNMYXN0SW5Hcm91cDogaW5kZXggPT09IGNudCAtIDEgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJ0bkdycENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtYnV0dG9uLWdyb3VwJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYnRuR3JwQ2xhc3NOYW1lcyB9IHJvbGU9J2dyb3VwJyB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19