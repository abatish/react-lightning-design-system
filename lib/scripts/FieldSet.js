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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  children: _propTypes2.default.node
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
  className: _propTypes2.default.string,
  cols: _propTypes2.default.number,
  children: _propTypes2.default.node
};

Row.isFormElement = true;

FieldSet.Row = Row;

exports.default = FieldSet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ZpZWxkU2V0LmpzIl0sIm5hbWVzIjpbIkZpZWxkU2V0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BzIiwiZnNDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImlzRm9ybUVsZW1lbnQiLCJSb3ciLCJ0b3RhbENvbHMiLCJjaGlsZCIsInR5cGUiLCJpZCIsImZvcm1FbGVtUHJvcHMiLCJjb2xzIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJDaGlsZHJlbiIsImNvdW50Iiwicm93Q2xhc3NOYW1lcyIsIm1hcCIsInJlbmRlckNoaWxkIiwiYmluZCIsIkNvbXBvbmVudCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsT0FBOEM7QUFBQSxNQUEzQ0MsU0FBMkMsUUFBM0NBLFNBQTJDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUM3RCxNQUFNQyxlQUFlLDBCQUFXSixTQUFYLEVBQXNCLHFCQUF0QixDQUFyQjtBQUNBLFNBQ0U7QUFBQTtBQUFBLDZCQUFVLFdBQVlJLFlBQXRCLElBQTBDRCxLQUExQztBQUVJRixZQUNFO0FBQUE7QUFBQSxRQUFRLFdBQVUsMEJBQWxCO0FBQStDQTtBQUEvQyxLQURGLEdBRUUsSUFKTjtBQU1FO0FBQUE7QUFBQSxRQUFLLFdBQVUscUJBQWY7QUFDSUM7QUFESjtBQU5GLEdBREY7QUFZRCxDQWREOztBQWdCQUgsU0FBU00sU0FBVCxHQUFxQjtBQUNuQkwsYUFBV00sb0JBQVVDLE1BREY7QUFFbkJOLFNBQU9LLG9CQUFVQyxNQUZFO0FBR25CTCxZQUFVSSxvQkFBVUU7QUFIRCxDQUFyQjs7QUFNQVQsU0FBU1UsYUFBVCxHQUF5QixJQUF6Qjs7SUFHTUMsRzs7Ozs7Ozs7OztnQ0FDUUMsUyxFQUFXQyxLLEVBQU87QUFDNUIsVUFBSUEsU0FBUyxDQUFDQSxNQUFNQyxJQUFOLENBQVdKLGFBQXpCLEVBQXdDO0FBQUEsOEJBQ0lHLE1BQU1ULEtBRFYsQ0FDOUJXLEVBRDhCO0FBQUEsWUFDOUJBLEVBRDhCLHFEQUNULGlCQURTOztBQUV0QyxZQUFNQyxnQkFBZ0IsRUFBRUQsTUFBRixFQUFNSCxvQkFBTixFQUFpQkssTUFBTSxDQUF2QixFQUF0QjtBQUNBLGVBQ0U7QUFBQywrQkFBRDtBQUFrQkQsdUJBQWxCO0FBQ0lFLDBCQUFNQyxZQUFOLENBQW1CTixLQUFuQixFQUEwQixFQUFFRSxNQUFGLEVBQTFCO0FBREosU0FERjtBQUtEO0FBQ0QsYUFBT0csZ0JBQU1DLFlBQU4sQ0FBbUJOLEtBQW5CLEVBQTBCLEVBQUVELG9CQUFGLEVBQTFCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQytCLEtBQUtSLEtBRHBDO0FBQUEsVUFDQ0gsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWWdCLElBRFosVUFDWUEsSUFEWjtBQUFBLFVBQ2tCZCxRQURsQixVQUNrQkEsUUFEbEI7O0FBRVAsVUFBTVMsWUFBWUssUUFBUUMsZ0JBQU1FLFFBQU4sQ0FBZUMsS0FBZixDQUFxQmxCLFFBQXJCLENBQTFCO0FBQ0EsVUFBTW1CLGdCQUFnQiwwQkFBV3JCLFNBQVgsRUFBc0Isd0JBQXRCLENBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZcUIsYUFBakI7QUFDSUosd0JBQU1FLFFBQU4sQ0FBZUcsR0FBZixDQUFtQnBCLFFBQW5CLEVBQTZCLEtBQUtxQixXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixFQUE0QmIsU0FBNUIsQ0FBN0I7QUFESixPQURGO0FBS0Q7OztFQXZCZWMsZ0I7O0FBMEJsQmYsSUFBSUwsU0FBSixHQUFnQjtBQUNkTCxhQUFXTSxvQkFBVUMsTUFEUDtBQUVkUyxRQUFNVixvQkFBVW9CLE1BRkY7QUFHZHhCLFlBQVVJLG9CQUFVRTtBQUhOLENBQWhCOztBQU1BRSxJQUFJRCxhQUFKLEdBQW9CLElBQXBCOztBQUVBVixTQUFTVyxHQUFULEdBQWVBLEdBQWY7O2tCQUVlWCxRIiwiZmlsZSI6IkZpZWxkU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmNvbnN0IEZpZWxkU2V0ID0gKHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgZnNDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWZvcm0tLWNvbXBvdW5kJyk7XG4gIHJldHVybiAoXG4gICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGZzQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgIHtcbiAgICAgICAgbGFiZWwgP1xuICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvbGVnZW5kPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZWxlbWVudF9fZ3JvdXAnPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZmllbGRzZXQ+XG4gICk7XG59O1xuXG5GaWVsZFNldC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkZpZWxkU2V0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5cbmNsYXNzIFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckNoaWxkKHRvdGFsQ29scywgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgJiYgIWNoaWxkLnR5cGUuaXNGb3JtRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBpZCA9IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9ID0gY2hpbGQucHJvcHM7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzOiAxIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgaWQgfSkgfVxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyB0b3RhbENvbHMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNvbHMsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pO1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtZm9ybS1lbGVtZW50X19yb3cnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyByb3dDbGFzc05hbWVzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkLmJpbmQodGhpcywgdG90YWxDb2xzKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblJvdy5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcblxuRmllbGRTZXQuUm93ID0gUm93O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFNldDtcbiJdfQ==