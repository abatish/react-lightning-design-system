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
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  error: _FormElement2.default.propTypes.error,
  onChange: _react.PropTypes.func
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
  children: _react.PropTypes.node,
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJzdGF0ZSIsImlkIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJvbkNoYW5nZSIsImxhYmVsIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbVByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcHJvcHMiLCJzZWxlY3RDbGFzc05hbWVzIiwiYmluZCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiaXNGb3JtRWxlbWVudCIsIk9wdGlvbiIsIm5vZGUiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLE07OztBQUNuQixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFFQyxzQkFBb0IsaUJBQXRCLEVBQWI7QUFGWTtBQUdiOzs7OzZCQUVRQyxDLEVBQUc7QUFDVixVQUFNQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXZCO0FBQ0EsVUFBSSxLQUFLRSxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CSixDQUFwQixFQUF1QkMsS0FBdkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNRixLQUFLLEtBQUtJLEtBQUwsQ0FBV0osRUFBWCxJQUFpQixLQUFLRCxLQUFMLENBQVdDLEVBQXZDO0FBRE8sbUJBRXVELEtBQUtJLEtBRjVEO0FBQUEsVUFFQ0UsS0FGRCxVQUVDQSxLQUZEO0FBQUEsVUFFUUMsUUFGUixVQUVRQSxRQUZSO0FBQUEsVUFFa0JDLEtBRmxCLFVBRWtCQSxLQUZsQjtBQUFBLFVBRXlCQyxTQUZ6QixVQUV5QkEsU0FGekI7QUFBQSxVQUVvQ0MsSUFGcEMsVUFFb0NBLElBRnBDO0FBQUEsVUFFNkNOLEtBRjdDOztBQUdQLFVBQUlFLFNBQVNDLFFBQVQsSUFBcUJDLEtBQXJCLElBQThCQyxTQUE5QixJQUEyQ0MsSUFBL0MsRUFBcUQ7QUFDbkQsWUFBTUMsZ0JBQWdCLEVBQUVYLE1BQUYsRUFBTU0sWUFBTixFQUFhQyxrQkFBYixFQUF1QkMsWUFBdkIsRUFBOEJDLG9CQUE5QixFQUF5Q0MsVUFBekMsRUFBdEI7QUFDQSxlQUNFO0FBQUE7QUFBa0JDLHVCQUFsQjtBQUNFLHdDQUFDLE1BQUQsNkJBQWtCUCxLQUFsQixJQUF5QkosTUFBekI7QUFERixTQURGO0FBS0Q7QUFWTSxVQVdDWSxTQVhELEdBV29DUixLQVhwQyxDQVdDUSxTQVhEO0FBQUEsVUFXWUMsUUFYWixHQVdvQ1QsS0FYcEMsQ0FXWVMsUUFYWjtBQUFBLFVBV3lCQyxNQVh6QiwwQ0FXb0NWLEtBWHBDOztBQVlQLGFBQU9VLE9BQU9ULFFBQWQ7QUFDQSxVQUFNVSxtQkFBbUIsMEJBQVdILFNBQVgsRUFBc0IsYUFBdEIsQ0FBekI7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLGNBQUtaLEVBRFA7QUFFRSxxQkFBWWUsZ0JBRmQ7QUFHRSxvQkFBVyxLQUFLVixRQUFMLENBQWNXLElBQWQsQ0FBbUIsSUFBbkI7QUFIYixXQUlPRixNQUpQO0FBTUlEO0FBTkosT0FERjtBQVVEOzs7OztrQkFyQ2tCZixNOzs7QUF5Q3JCQSxPQUFPbUIsU0FBUCxHQUFtQjtBQUNqQmpCLE1BQUksaUJBQVVrQixNQURHO0FBRWpCTixhQUFXLGlCQUFVTSxNQUZKO0FBR2pCWixTQUFPLGlCQUFVWSxNQUhBO0FBSWpCWCxZQUFVLGlCQUFVWSxJQUpIO0FBS2pCVixhQUFXLGlCQUFVVyxNQUxKO0FBTWpCVixRQUFNLGlCQUFVVSxNQU5DO0FBT2pCWixTQUFPLHNCQUFZUyxTQUFaLENBQXNCVCxLQVBaO0FBUWpCSCxZQUFVLGlCQUFVZ0I7QUFSSCxDQUFuQjs7QUFXQXZCLE9BQU93QixhQUFQLEdBQXVCLElBQXZCOztBQUVPLElBQU1DLFNBQVMsU0FBVEEsTUFBUyxDQUFDbkIsS0FBRCxFQUFXO0FBQUEsTUFDdkJFLEtBRHVCLEdBQ1FGLEtBRFIsQ0FDdkJFLEtBRHVCO0FBQUEsTUFDaEJPLFFBRGdCLEdBQ1FULEtBRFIsQ0FDaEJTLFFBRGdCO0FBQUEsTUFDSEMsTUFERywwQ0FDUVYsS0FEUjs7QUFFL0IsU0FBUTtBQUFBO0FBQWFVLFVBQWI7QUFBd0JSLGFBQVNPO0FBQWpDLEdBQVI7QUFDRCxDQUhNOzs7QUFLUFUsT0FBT04sU0FBUCxHQUFtQjtBQUNqQkosWUFBVSxpQkFBVVcsSUFESDtBQUVqQmxCLFNBQU8saUJBQVVtQixTQUFWLENBQW9CLENBQ3pCLGlCQUFVUCxNQURlLEVBRXpCLGlCQUFVRSxNQUZlLENBQXBCO0FBRlUsQ0FBbkIiLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAgfTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvciB8fCB0b3RhbENvbHMgfHwgY29scykge1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxTZWxlY3QgeyAuLi57IC4uLnByb3BzLCBpZCB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLm9uQ2hhbmdlO1xuICAgIGNvbnN0IHNlbGVjdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtc2VsZWN0Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzTmFtZXMgfVxuICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgID5cbiAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L3NlbGVjdD5cbiAgICApO1xuICB9XG5cbn1cblxuU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TZWxlY3QuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCBPcHRpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4sIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoPG9wdGlvbiB7IC4uLnBwcm9wcyB9PnsgbGFiZWwgfHwgY2hpbGRyZW4gfTwvb3B0aW9uPik7XG59O1xuXG5PcHRpb24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxufTtcbiJdfQ==