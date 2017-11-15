'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var ButtonGroup = function (_Component) {
  (0, _inherits3.default)(ButtonGroup, _Component);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(ButtonGroup)).call(this));

    _this.renderButton = _this.renderButton.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'renderButton',
    value: function renderButton(button, index) {
      var cnt = _react2.default.Children.count(this.props.children);
      if (button.type && (button.type === _DropdownButton2.default || button.type.isGroupable)) {
        return _react2.default.cloneElement(button, {
          key: index,
          grouped: true,
          isFirstInGroup: index === 0,
          isLastInGroup: index === cnt - 1
        });
      }

      return button;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var btnGrpClassNames = (0, _classnames2.default)(className, 'slds-button-group');
      var pprops = (0, _assign2.default)({}, props);
      delete pprops.component;
      delete pprops.items;
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: btnGrpClassNames, role: 'group' }, props),
        _react.Children.map(children, this.renderButton)
      );
    }
  }]);
  return ButtonGroup;
}(_react.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwicmVuZGVyQnV0dG9uIiwiYmluZCIsImJ1dHRvbiIsImluZGV4IiwiY250IiwiQ2hpbGRyZW4iLCJjb3VudCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0eXBlIiwiaXNHcm91cGFibGUiLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJncm91cGVkIiwiaXNGaXJzdEluR3JvdXAiLCJpc0xhc3RJbkdyb3VwIiwiY2xhc3NOYW1lIiwiYnRuR3JwQ2xhc3NOYW1lcyIsInBwcm9wcyIsImNvbXBvbmVudCIsIml0ZW1zIiwibWFwIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsVzs7O0FBQ25CLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUZZO0FBR2I7Ozs7aUNBQ1lDLE0sRUFBUUMsSyxFQUFPO0FBQzFCLFVBQU1DLE1BQU0sZ0JBQU1DLFFBQU4sQ0FBZUMsS0FBZixDQUFxQixLQUFLQyxLQUFMLENBQVdDLFFBQWhDLENBQVo7QUFDQSxVQUFJTixPQUFPTyxJQUFQLEtBQWdCUCxPQUFPTyxJQUFQLGlDQUFrQ1AsT0FBT08sSUFBUCxDQUFZQyxXQUE5RCxDQUFKLEVBQWdGO0FBQzlFLGVBQU8sZ0JBQU1DLFlBQU4sQ0FBbUJULE1BQW5CLEVBQTJCO0FBQ2hDVSxlQUFLVCxLQUQyQjtBQUVoQ1UsbUJBQVMsSUFGdUI7QUFHaENDLDBCQUFnQlgsVUFBVSxDQUhNO0FBSWhDWSx5QkFBZVosVUFBVUMsTUFBTTtBQUpDLFNBQTNCLENBQVA7QUFNRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUNtQyxLQUFLSyxLQUR4QztBQUFBLFVBQ0NTLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lSLFFBRFosVUFDWUEsUUFEWjtBQUFBLFVBQ3lCRCxLQUR6Qjs7QUFFUCxVQUFNVSxtQkFBbUIsMEJBQVdELFNBQVgsRUFBc0IsbUJBQXRCLENBQXpCO0FBQ0EsVUFBTUUsU0FBUyxzQkFBYyxFQUFkLEVBQWtCWCxLQUFsQixDQUFmO0FBQ0EsYUFBT1csT0FBT0MsU0FBZDtBQUNBLGFBQU9ELE9BQU9FLEtBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxpQ0FBSyxXQUFZSCxnQkFBakIsRUFBb0MsTUFBSyxPQUF6QyxJQUFzRFYsS0FBdEQ7QUFDSSx3QkFBU2MsR0FBVCxDQUFhYixRQUFiLEVBQXVCLEtBQUtSLFlBQTVCO0FBREosT0FERjtBQUtEOzs7OztrQkE5QmtCRCxXOzs7QUFpQ3JCQSxZQUFZdUIsU0FBWixHQUF3QjtBQUN0Qk4sYUFBVyxpQkFBVU8sTUFEQztBQUV0QmYsWUFBVSxpQkFBVWdCO0FBRkUsQ0FBeEIiLCJmaWxlIjoiQnV0dG9uR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlckJ1dHRvbiA9IHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcyk7XG4gIH1cbiAgcmVuZGVyQnV0dG9uKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICBjb25zdCBjbnQgPSBSZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoYnV0dG9uLnR5cGUgJiYgKGJ1dHRvbi50eXBlID09PSBEcm9wZG93bkJ1dHRvbiB8fCBidXR0b24udHlwZS5pc0dyb3VwYWJsZSkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYnV0dG9uLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGdyb3VwZWQ6IHRydWUsXG4gICAgICAgIGlzRmlyc3RJbkdyb3VwOiBpbmRleCA9PT0gMCxcbiAgICAgICAgaXNMYXN0SW5Hcm91cDogaW5kZXggPT09IGNudCAtIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYnRuR3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1idXR0b24tZ3JvdXAnKTtcbiAgICBjb25zdCBwcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgZGVsZXRlIHBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHBwcm9wcy5pdGVtcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBidG5HcnBDbGFzc05hbWVzIH0gcm9sZT0nZ3JvdXAnIHsgLi4ucHJvcHMgfT5cbiAgICAgICAgeyBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQnV0dG9uKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19