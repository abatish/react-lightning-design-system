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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwIiwicmVuZGVyQnV0dG9uIiwiYmluZCIsImJ1dHRvbiIsImluZGV4IiwiY250IiwiQ2hpbGRyZW4iLCJjb3VudCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0eXBlIiwiaXNHcm91cGFibGUiLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJncm91cGVkIiwiaXNGaXJzdEluR3JvdXAiLCJpc0xhc3RJbkdyb3VwIiwiY2xhc3NOYW1lIiwiYnRuR3JwQ2xhc3NOYW1lcyIsInBwcm9wcyIsImNvbXBvbmVudCIsIml0ZW1zIiwibWFwIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxXOzs7QUFDbkIseUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBRlk7QUFHYjs7OztpQ0FDWUMsTSxFQUFRQyxLLEVBQU87QUFDMUIsVUFBTUMsTUFBTSxnQkFBTUMsUUFBTixDQUFlQyxLQUFmLENBQXFCLEtBQUtDLEtBQUwsQ0FBV0MsUUFBaEMsQ0FBWjtBQUNBLFVBQUlOLE9BQU9PLElBQVAsS0FBZ0JQLE9BQU9PLElBQVAsaUNBQWtDUCxPQUFPTyxJQUFQLENBQVlDLFdBQTlELENBQUosRUFBZ0Y7QUFDOUUsZUFBTyxnQkFBTUMsWUFBTixDQUFtQlQsTUFBbkIsRUFBMkI7QUFDaENVLGVBQUtULEtBRDJCO0FBRWhDVSxtQkFBUyxJQUZ1QjtBQUdoQ0MsMEJBQWdCWCxVQUFVLENBSE07QUFJaENZLHlCQUFlWixVQUFVQyxNQUFNO0FBSkMsU0FBM0IsQ0FBUDtBQU1EOztBQUVELGFBQU9GLE1BQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ21DLEtBQUtLLEtBRHhDO0FBQUEsVUFDQ1MsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWVIsUUFEWixVQUNZQSxRQURaO0FBQUEsVUFDeUJELEtBRHpCOztBQUVQLFVBQU1VLG1CQUFtQiwwQkFBV0QsU0FBWCxFQUFzQixtQkFBdEIsQ0FBekI7QUFDQSxVQUFNRSxTQUFTLHNCQUFjLEVBQWQsRUFBa0JYLEtBQWxCLENBQWY7QUFDQSxhQUFPVyxPQUFPQyxTQUFkO0FBQ0EsYUFBT0QsT0FBT0UsS0FBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLGlDQUFLLFdBQVlILGdCQUFqQixFQUFvQyxNQUFLLE9BQXpDLElBQXNEVixLQUF0RDtBQUNJLHdCQUFTYyxHQUFULENBQWFiLFFBQWIsRUFBdUIsS0FBS1IsWUFBNUI7QUFESixPQURGO0FBS0Q7Ozs7O2tCQTlCa0JELFc7OztBQWlDckJBLFlBQVl1QixTQUFaLEdBQXdCO0FBQ3RCTixhQUFXLG9CQUFVTyxNQURDO0FBRXRCZixZQUFVLG9CQUFVZ0I7QUFGRSxDQUF4QiIsImZpbGUiOiJCdXR0b25Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25Hcm91cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5yZW5kZXJCdXR0b24gPSB0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpO1xuICB9XG4gIHJlbmRlckJ1dHRvbihidXR0b24sIGluZGV4KSB7XG4gICAgY29uc3QgY250ID0gUmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgaWYgKGJ1dHRvbi50eXBlICYmIChidXR0b24udHlwZSA9PT0gRHJvcGRvd25CdXR0b24gfHwgYnV0dG9uLnR5cGUuaXNHcm91cGFibGUpKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGJ1dHRvbiwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBncm91cGVkOiB0cnVlLFxuICAgICAgICBpc0ZpcnN0SW5Hcm91cDogaW5kZXggPT09IDAsXG4gICAgICAgIGlzTGFzdEluR3JvdXA6IGluZGV4ID09PSBjbnQgLSAxLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGJ0bkdycENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtYnV0dG9uLWdyb3VwJyk7XG4gICAgY29uc3QgcHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIGRlbGV0ZSBwcHJvcHMuY29tcG9uZW50O1xuICAgIGRlbGV0ZSBwcHJvcHMuaXRlbXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYnRuR3JwQ2xhc3NOYW1lcyB9IHJvbGU9J2dyb3VwJyB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckJ1dHRvbikgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcbiJdfQ==