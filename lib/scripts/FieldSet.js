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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldSet = function FieldSet(_ref) {
  var className = _ref.className,
      label = _ref.label,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label', 'children']);

  var fsClassNames = (0, _classnames2.default)(className, 'slds-form--compound');
  return _react2.default.createElement(
    'fieldset',
    (0, _extends3.default)({ className: fsClassNames }, props),
    label ? _react2.default.createElement(
      'legend',
      { className: 'slds-form-element__label' },
      label
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'form-element__group' },
      children
    )
  );
};

FieldSet.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};

FieldSet.isFormElement = true;

var Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderChild',
    value: function renderChild(totalCols, child) {
      if (child && !child.type.isFormElement) {
        var _child$props$id = child.props.id,
            id = _child$props$id === undefined ? 'form-element-' + (0, _util.uuid)() : _child$props$id;

        var formElemProps = { id: id, totalCols: totalCols, cols: 1 };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(child, { id: id })
        );
      }
      return _react2.default.cloneElement(child, { totalCols: totalCols });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cols = _props.cols,
          children = _props.children;

      var totalCols = cols || _react2.default.Children.count(children);
      var rowClassNames = (0, _classnames2.default)(className, 'slds-form-element__row');
      return _react2.default.createElement(
        'div',
        { className: rowClassNames },
        _react2.default.Children.map(children, this.renderChild.bind(this, totalCols))
      );
    }
  }]);
  return Row;
}(_react.Component);

Row.propTypes = {
  className: _react.PropTypes.string,
  cols: _react.PropTypes.number,
  children: _react.PropTypes.node
};

Row.isFormElement = true;

FieldSet.Row = Row;

exports.default = FieldSet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ZpZWxkU2V0LmpzIl0sIm5hbWVzIjpbIkZpZWxkU2V0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BzIiwiZnNDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImlzRm9ybUVsZW1lbnQiLCJSb3ciLCJ0b3RhbENvbHMiLCJjaGlsZCIsInR5cGUiLCJpZCIsImZvcm1FbGVtUHJvcHMiLCJjb2xzIiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJjb3VudCIsInJvd0NsYXNzTmFtZXMiLCJtYXAiLCJyZW5kZXJDaGlsZCIsImJpbmQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxPQUE4QztBQUFBLE1BQTNDQyxTQUEyQyxRQUEzQ0EsU0FBMkM7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQzdELE1BQU1DLGVBQWUsMEJBQVdKLFNBQVgsRUFBc0IscUJBQXRCLENBQXJCO0FBQ0EsU0FDRTtBQUFBO0FBQUEsNkJBQVUsV0FBWUksWUFBdEIsSUFBMENELEtBQTFDO0FBRUlGLFlBQ0U7QUFBQTtBQUFBLFFBQVEsV0FBVSwwQkFBbEI7QUFBK0NBO0FBQS9DLEtBREYsR0FFRSxJQUpOO0FBTUU7QUFBQTtBQUFBLFFBQUssV0FBVSxxQkFBZjtBQUNJQztBQURKO0FBTkYsR0FERjtBQVlELENBZEQ7O0FBZ0JBSCxTQUFTTSxTQUFULEdBQXFCO0FBQ25CTCxhQUFXLGlCQUFVTSxNQURGO0FBRW5CTCxTQUFPLGlCQUFVSyxNQUZFO0FBR25CSixZQUFVLGlCQUFVSztBQUhELENBQXJCOztBQU1BUixTQUFTUyxhQUFULEdBQXlCLElBQXpCOztJQUdNQyxHOzs7Ozs7Ozs7O2dDQUNRQyxTLEVBQVdDLEssRUFBTztBQUM1QixVQUFJQSxTQUFTLENBQUNBLE1BQU1DLElBQU4sQ0FBV0osYUFBekIsRUFBd0M7QUFBQSw4QkFDSUcsTUFBTVIsS0FEVixDQUM5QlUsRUFEOEI7QUFBQSxZQUM5QkEsRUFEOEIscURBQ1QsaUJBRFM7O0FBRXRDLFlBQU1DLGdCQUFnQixFQUFFRCxNQUFGLEVBQU1ILG9CQUFOLEVBQWlCSyxNQUFNLENBQXZCLEVBQXRCO0FBQ0EsZUFDRTtBQUFBO0FBQWtCRCx1QkFBbEI7QUFDSSwwQkFBTUUsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEIsRUFBRUUsTUFBRixFQUExQjtBQURKLFNBREY7QUFLRDtBQUNELGFBQU8sZ0JBQU1HLFlBQU4sQ0FBbUJMLEtBQW5CLEVBQTBCLEVBQUVELG9CQUFGLEVBQTFCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQytCLEtBQUtQLEtBRHBDO0FBQUEsVUFDQ0gsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWWUsSUFEWixVQUNZQSxJQURaO0FBQUEsVUFDa0JiLFFBRGxCLFVBQ2tCQSxRQURsQjs7QUFFUCxVQUFNUSxZQUFZSyxRQUFRLGdCQUFNRSxRQUFOLENBQWVDLEtBQWYsQ0FBcUJoQixRQUFyQixDQUExQjtBQUNBLFVBQU1pQixnQkFBZ0IsMEJBQVduQixTQUFYLEVBQXNCLHdCQUF0QixDQUF0QjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBWW1CLGFBQWpCO0FBQ0ksd0JBQU1GLFFBQU4sQ0FBZUcsR0FBZixDQUFtQmxCLFFBQW5CLEVBQTZCLEtBQUttQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QlosU0FBNUIsQ0FBN0I7QUFESixPQURGO0FBS0Q7Ozs7O0FBR0hELElBQUlKLFNBQUosR0FBZ0I7QUFDZEwsYUFBVyxpQkFBVU0sTUFEUDtBQUVkUyxRQUFNLGlCQUFVUSxNQUZGO0FBR2RyQixZQUFVLGlCQUFVSztBQUhOLENBQWhCOztBQU1BRSxJQUFJRCxhQUFKLEdBQW9CLElBQXBCOztBQUVBVCxTQUFTVSxHQUFULEdBQWVBLEdBQWY7O2tCQUVlVixRIiwiZmlsZSI6IkZpZWxkU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5jb25zdCBGaWVsZFNldCA9ICh7IGNsYXNzTmFtZSwgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGZzQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1mb3JtLS1jb21wb3VuZCcpO1xuICByZXR1cm4gKFxuICAgIDxmaWVsZHNldCBjbGFzc05hbWU9eyBmc0NsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICB7XG4gICAgICAgIGxhYmVsID9cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L2xlZ2VuZD4gOlxuICAgICAgICAgIG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVsZW1lbnRfX2dyb3VwJz5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2ZpZWxkc2V0PlxuICApO1xufTtcblxuRmllbGRTZXQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5GaWVsZFNldC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcblxuXG5jbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJDaGlsZCh0b3RhbENvbHMsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmICFjaGlsZC50eXBlLmlzRm9ybUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgaWQgPSBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAgfSA9IGNoaWxkLnByb3BzO1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29sczogMSB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIHsgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGlkIH0pIH1cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgdG90YWxDb2xzIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjb2xzLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b3RhbENvbHMgPSBjb2xzIHx8IFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKTtcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWZvcm0tZWxlbWVudF9fcm93Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9PlxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZC5iaW5kKHRoaXMsIHRvdGFsQ29scykpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Sb3cuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cbkZpZWxkU2V0LlJvdyA9IFJvdztcblxuZXhwb3J0IGRlZmF1bHQgRmllbGRTZXQ7XG4iXX0=