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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwicmVuZGVyQnV0dG9uIiwiYmluZCIsImJ1dHRvbiIsImluZGV4IiwiY250IiwiUmVhY3QiLCJDaGlsZHJlbiIsImNvdW50IiwicHJvcHMiLCJjaGlsZHJlbiIsInR5cGUiLCJEcm9wZG93bkJ1dHRvbiIsImlzR3JvdXBhYmxlIiwiY2xvbmVFbGVtZW50Iiwia2V5IiwiZ3JvdXBlZCIsImlzRmlyc3RJbkdyb3VwIiwiaXNMYXN0SW5Hcm91cCIsImNsYXNzTmFtZSIsImJ0bkdycENsYXNzTmFtZXMiLCJwcHJvcHMiLCJjb21wb25lbnQiLCJpdGVtcyIsIm1hcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsVzs7O0FBQ25CLHlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUZZO0FBR2I7Ozs7aUNBQ1lDLE0sRUFBUUMsSyxFQUFPO0FBQzFCLFVBQU1DLE1BQU1DLGdCQUFNQyxRQUFOLENBQWVDLEtBQWYsQ0FBcUIsS0FBS0MsS0FBTCxDQUFXQyxRQUFoQyxDQUFaO0FBQ0EsVUFBSVAsT0FBT1EsSUFBUCxLQUFnQlIsT0FBT1EsSUFBUCxLQUFnQkMsd0JBQWhCLElBQWtDVCxPQUFPUSxJQUFQLENBQVlFLFdBQTlELENBQUosRUFBZ0Y7QUFDOUUsZUFBT1AsZ0JBQU1RLFlBQU4sQ0FBbUJYLE1BQW5CLEVBQTJCO0FBQ2hDWSxlQUFLWCxLQUQyQjtBQUVoQ1ksbUJBQVMsSUFGdUI7QUFHaENDLDBCQUFnQmIsVUFBVSxDQUhNO0FBSWhDYyx5QkFBZWQsVUFBVUMsTUFBTTtBQUpDLFNBQTNCLENBQVA7QUFNRDs7QUFFRCxhQUFPRixNQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUNtQyxLQUFLTSxLQUR4QztBQUFBLFVBQ0NVLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lULFFBRFosVUFDWUEsUUFEWjtBQUFBLFVBQ3lCRCxLQUR6Qjs7QUFFUCxVQUFNVyxtQkFBbUIsMEJBQVdELFNBQVgsRUFBc0IsbUJBQXRCLENBQXpCO0FBQ0EsVUFBTUUsU0FBUyxzQkFBYyxFQUFkLEVBQWtCWixLQUFsQixDQUFmO0FBQ0EsYUFBT1ksT0FBT0MsU0FBZDtBQUNBLGFBQU9ELE9BQU9FLEtBQWQ7QUFDQSxhQUNFO0FBQUE7QUFBQSxpQ0FBSyxXQUFZSCxnQkFBakIsRUFBb0MsTUFBSyxPQUF6QyxJQUFzRFgsS0FBdEQ7QUFDSUYsd0JBQVNpQixHQUFULENBQWFkLFFBQWIsRUFBdUIsS0FBS1QsWUFBNUI7QUFESixPQURGO0FBS0Q7OztFQTlCc0N3QixnQjs7a0JBQXBCekIsVzs7O0FBaUNyQkEsWUFBWTBCLFNBQVosR0FBd0I7QUFDdEJQLGFBQVdRLG9CQUFVQyxNQURDO0FBRXRCbEIsWUFBVWlCLG9CQUFVRTtBQUZFLENBQXhCIiwiZmlsZSI6IkJ1dHRvbkdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkdyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJlbmRlckJ1dHRvbiA9IHRoaXMucmVuZGVyQnV0dG9uLmJpbmQodGhpcyk7XG4gIH1cbiAgcmVuZGVyQnV0dG9uKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICBjb25zdCBjbnQgPSBSZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICBpZiAoYnV0dG9uLnR5cGUgJiYgKGJ1dHRvbi50eXBlID09PSBEcm9wZG93bkJ1dHRvbiB8fCBidXR0b24udHlwZS5pc0dyb3VwYWJsZSkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYnV0dG9uLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGdyb3VwZWQ6IHRydWUsXG4gICAgICAgIGlzRmlyc3RJbkdyb3VwOiBpbmRleCA9PT0gMCxcbiAgICAgICAgaXNMYXN0SW5Hcm91cDogaW5kZXggPT09IGNudCAtIDEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYnRuR3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1idXR0b24tZ3JvdXAnKTtcbiAgICBjb25zdCBwcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgZGVsZXRlIHBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHBwcm9wcy5pdGVtcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBidG5HcnBDbGFzc05hbWVzIH0gcm9sZT0nZ3JvdXAnIHsgLi4ucHJvcHMgfT5cbiAgICAgICAgeyBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQnV0dG9uKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19