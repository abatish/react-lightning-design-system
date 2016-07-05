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

var Tab = function (_React$Component) {
  (0, _inherits3.default)(Tab, _React$Component);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tab).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var active = _props.active;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'active', 'children']);

      var tabClassNames = (0, _classnames2.default)(className, 'slds-tabs__content', 'slds-' + (active ? 'show' : 'hide'));
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: tabClassNames, role: 'tabpanel' }, props),
        children
      );
    }
  }]);
  return Tab;
}(_react2.default.Component);

exports.default = Tab;


Tab.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  menu: _react.PropTypes.element,
  menuItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
  menuIcon: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCLEc7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSxtQkFDMkMsS0FBSyxLQURoRDtBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLE1BRFosVUFDWSxNQURaO0FBQUEsVUFDb0IsUUFEcEIsVUFDb0IsUUFEcEI7QUFBQSxVQUNpQyxLQURqQzs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsb0JBRm9CLGFBR1osU0FBUyxNQUFULEdBQWtCLE1BSE4sRUFBdEI7QUFLQSxhQUNFO0FBQUE7UUFBQSx5QkFBSyxXQUFZLGFBQWpCLEVBQWlDLE1BQUssVUFBdEMsSUFBc0QsS0FBdEQ7UUFDSTtBQURKLE9BREY7QUFLRDs7O0VBYjhCLGdCQUFNLFM7O2tCQUFsQixHOzs7QUFnQnJCLElBQUksU0FBSixHQUFnQjtBQUNkLGFBQVcsaUJBQVUsTUFEUDtBQUVkLFNBQU8saUJBQVUsTUFGSDtBQUdkLFVBQVEsaUJBQVUsSUFISjtBQUlkLFFBQU0saUJBQVUsT0FKRjtBQUtkLGFBQVcsaUJBQVUsT0FBVixDQUFrQixpQkFBVSxPQUE1QixDQUxHO0FBTWQsWUFBVSxpQkFBVSxNQU5OO0FBT2QsWUFBVSxpQkFBVTtBQVBOLENBQWhCIiwiZmlsZSI6IlRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBhY3RpdmUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0YWJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLXRhYnNfX2NvbnRlbnQnLFxuICAgICAgYHNsZHMtJHthY3RpdmUgPyAnc2hvdycgOiAnaGlkZSd9YFxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFiQ2xhc3NOYW1lcyB9IHJvbGU9J3RhYnBhbmVsJyB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UYWIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICBtZW51OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuZWxlbWVudCksXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuIl19