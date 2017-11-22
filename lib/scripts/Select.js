'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_Component) {
  (0, _inherits3.default)(Select, _Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this));

    _this.state = { id: 'form-element-' + (0, _util.uuid)() };
    return _this;
  }

  (0, _createClass3.default)(Select, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props = this.props,
          label = _props.label,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          props = (0, _objectWithoutProperties3.default)(_props, ['label', 'required', 'error', 'totalCols', 'cols']);

      if (label || required || error || totalCols || cols) {
        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Select, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className,
          children = props.children,
          pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

      delete pprops.onChange;
      var selectClassNames = (0, _classnames2.default)(className, 'slds-select');
      return _react2.default.createElement(
        'select',
        (0, _extends3.default)({
          id: id,
          className: selectClassNames,
          onChange: this.onChange.bind(this)
        }, pprops),
        children
      );
    }
  }]);
  return Select;
}(_react.Component);

exports.default = Select;


Select.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  error: _FormElement2.default.propTypes.error,
  onChange: _propTypes2.default.func
};

Select.isFormElement = true;

var Option = function Option(props) {
  var label = props.label,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['label', 'children']);

  return _react2.default.createElement(
    'option',
    pprops,
    label || children
  );
};

exports.Option = Option;
Option.propTypes = {
  children: _propTypes2.default.node,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzdGF0ZSIsImlkIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbVByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJzZWxlY3RDbGFzc05hbWVzIiwiYmluZCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiaXNGb3JtRWxlbWVudCIsIk9wdGlvbiIsIm5vZGUiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsTTs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhLEVBQUVDLHNCQUFvQixpQkFBdEIsRUFBYjtBQUZZO0FBR2I7Ozs7NkJBRVFDLEMsRUFBRztBQUNWLFVBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxVQUFJLEtBQUtFLEtBQUwsQ0FBV0MsUUFBZixFQUF5QjtBQUN2QixhQUFLRCxLQUFMLENBQVdDLFFBQVgsQ0FBb0JKLENBQXBCLEVBQXVCQyxLQUF2QjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1GLEtBQUssS0FBS0ksS0FBTCxDQUFXSixFQUFYLElBQWlCLEtBQUtELEtBQUwsQ0FBV0MsRUFBdkM7QUFETyxtQkFFdUQsS0FBS0ksS0FGNUQ7QUFBQSxVQUVDRSxLQUZELFVBRUNBLEtBRkQ7QUFBQSxVQUVRQyxRQUZSLFVBRVFBLFFBRlI7QUFBQSxVQUVrQkMsS0FGbEIsVUFFa0JBLEtBRmxCO0FBQUEsVUFFeUJDLFNBRnpCLFVBRXlCQSxTQUZ6QjtBQUFBLFVBRW9DQyxJQUZwQyxVQUVvQ0EsSUFGcEM7QUFBQSxVQUU2Q04sS0FGN0M7O0FBR1AsVUFBSUUsU0FBU0MsUUFBVCxJQUFxQkMsS0FBckIsSUFBOEJDLFNBQTlCLElBQTJDQyxJQUEvQyxFQUFxRDtBQUNuRCxZQUFNQyxnQkFBZ0IsRUFBRVgsTUFBRixFQUFNTSxZQUFOLEVBQWFDLGtCQUFiLEVBQXVCQyxZQUF2QixFQUE4QkMsb0JBQTlCLEVBQXlDQyxVQUF6QyxFQUF0QjtBQUNBLGVBQ0U7QUFBQTtBQUFrQkMsdUJBQWxCO0FBQ0Usd0NBQUMsTUFBRCw2QkFBa0JQLEtBQWxCLElBQXlCSixNQUF6QjtBQURGLFNBREY7QUFLRDtBQVZNLFVBV0NZLFNBWEQsR0FXb0NSLEtBWHBDLENBV0NRLFNBWEQ7QUFBQSxVQVdZQyxRQVhaLEdBV29DVCxLQVhwQyxDQVdZUyxRQVhaO0FBQUEsVUFXeUJDLE1BWHpCLDBDQVdvQ1YsS0FYcEM7O0FBWVAsYUFBT1UsT0FBT1QsUUFBZDtBQUNBLFVBQU1VLG1CQUFtQiwwQkFBV0gsU0FBWCxFQUFzQixhQUF0QixDQUF6QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsY0FBS1osRUFEUDtBQUVFLHFCQUFZZSxnQkFGZDtBQUdFLG9CQUFXLEtBQUtWLFFBQUwsQ0FBY1csSUFBZCxDQUFtQixJQUFuQjtBQUhiLFdBSU9GLE1BSlA7QUFNSUQ7QUFOSixPQURGO0FBVUQ7Ozs7O2tCQXJDa0JmLE07OztBQXlDckJBLE9BQU9tQixTQUFQLEdBQW1CO0FBQ2pCakIsTUFBSSxvQkFBVWtCLE1BREc7QUFFakJOLGFBQVcsb0JBQVVNLE1BRko7QUFHakJaLFNBQU8sb0JBQVVZLE1BSEE7QUFJakJYLFlBQVUsb0JBQVVZLElBSkg7QUFLakJWLGFBQVcsb0JBQVVXLE1BTEo7QUFNakJWLFFBQU0sb0JBQVVVLE1BTkM7QUFPakJaLFNBQU8sc0JBQVlTLFNBQVosQ0FBc0JULEtBUFo7QUFRakJILFlBQVUsb0JBQVVnQjtBQVJILENBQW5COztBQVdBdkIsT0FBT3dCLGFBQVAsR0FBdUIsSUFBdkI7O0FBRU8sSUFBTUMsU0FBUyxTQUFUQSxNQUFTLENBQUNuQixLQUFELEVBQVc7QUFBQSxNQUN2QkUsS0FEdUIsR0FDUUYsS0FEUixDQUN2QkUsS0FEdUI7QUFBQSxNQUNoQk8sUUFEZ0IsR0FDUVQsS0FEUixDQUNoQlMsUUFEZ0I7QUFBQSxNQUNIQyxNQURHLDBDQUNRVixLQURSOztBQUUvQixTQUFRO0FBQUE7QUFBYVUsVUFBYjtBQUF3QlIsYUFBU087QUFBakMsR0FBUjtBQUNELENBSE07OztBQUtQVSxPQUFPTixTQUFQLEdBQW1CO0FBQ2pCSixZQUFVLG9CQUFVVyxJQURIO0FBRWpCbEIsU0FBTyxvQkFBVW1CLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVQLE1BRGUsRUFFekIsb0JBQVVFLE1BRmUsQ0FBcEI7QUFGVSxDQUFuQiIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0geyBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gIH07XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IgfHwgdG90YWxDb2xzIHx8IGNvbHMpIHtcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICA8U2VsZWN0IHsgLi4ueyAuLi5wcm9wcywgaWQgfSB9IC8+XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5vbkNoYW5nZTtcbiAgICBjb25zdCBzZWxlY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXNlbGVjdCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPXsgaWQgfVxuICAgICAgICBjbGFzc05hbWU9eyBzZWxlY3RDbGFzc05hbWVzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICA+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgKTtcbiAgfVxuXG59XG5cblNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU2VsZWN0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKDxvcHRpb24geyAuLi5wcHJvcHMgfT57IGxhYmVsIHx8IGNoaWxkcmVuIH08L29wdGlvbj4pO1xufTtcblxuT3B0aW9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbn07XG4iXX0=