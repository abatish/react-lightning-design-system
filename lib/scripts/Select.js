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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select(props) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props));

    _this.state = { id: 'form-element-' + (0, _uuid2.default)() };
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
      var _props = this.props;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var props = (0, _objectWithoutProperties3.default)(_props, ['label', 'required', 'error']);

      if (label || required || error) {
        var formElemProps = { id: id, label: label, required: required, error: error };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Select, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var children = props.children;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'onChange']);

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
}(_react2.default.Component);

exports.default = Select;


Select.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  placeholder: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};

var Option = exports.Option = function (_React$Component2) {
  (0, _inherits3.default)(Option, _React$Component2);

  function Option() {
    (0, _classCallCheck3.default)(this, Option);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
  }

  (0, _createClass3.default)(Option, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('option', this.props);
    }
  }]);
  return Option;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUIsTTs7O0FBQ25CLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFFLHNCQUFvQixxQkFBdEIsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFFUSxDLEVBQUc7QUFDVixVQUFNLFFBQVEsRUFBRSxNQUFGLENBQVMsS0FBdkI7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixDQUFwQixFQUF1QixLQUF2QjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU0sS0FBSyxLQUFLLEtBQUwsQ0FBVyxFQUFYLElBQWlCLEtBQUssS0FBTCxDQUFXLEVBQXZDO0FBRE8sbUJBRXNDLEtBQUssS0FGM0M7QUFBQSxVQUVDLEtBRkQsVUFFQyxLQUZEO0FBQUEsVUFFUSxRQUZSLFVBRVEsUUFGUjtBQUFBLFVBRWtCLEtBRmxCLFVBRWtCLEtBRmxCO0FBQUEsVUFFNEIsS0FGNUI7O0FBR1AsVUFBSSxTQUFTLFFBQVQsSUFBcUIsS0FBekIsRUFBZ0M7QUFDOUIsWUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQU0sWUFBTixFQUFhLGtCQUFiLEVBQXVCLFlBQXZCLEVBQXRCO0FBQ0EsZUFDRTtBQUFBO1VBQWtCLGFBQWxCO1VBQ0UsOEJBQUMsTUFBRCw2QkFBa0IsS0FBbEIsSUFBeUIsTUFBekI7QUFERixTQURGO0FBS0Q7QUFWTSxVQVdDLFNBWEQsR0FXOEMsS0FYOUMsQ0FXQyxTQVhEO0FBQUEsVUFXWSxRQVhaLEdBVzhDLEtBWDlDLENBV1ksUUFYWjtBQUFBLFVBV3NCLFFBWHRCLEdBVzhDLEtBWDlDLENBV3NCLFFBWHRCO0FBQUEsVUFXbUMsTUFYbkMsMENBVzhDLEtBWDlDOztBQVlQLFVBQU0sbUJBQW1CLDBCQUFXLFNBQVgsRUFBc0IsYUFBdEIsQ0FBekI7QUFDQSxhQUNFO0FBQUE7UUFBQTtBQUNFLGNBQUssRUFEUDtBQUVFLHFCQUFZLGdCQUZkO0FBR0Usb0JBQVcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQjtBQUhiLFdBSU8sTUFKUDtRQU1JO0FBTkosT0FERjtBQVVEOzs7RUFwQ2lDLGdCQUFNLFM7O2tCQUFyQixNOzs7QUF3Q3JCLE9BQU8sU0FBUCxHQUFtQjtBQUNqQixNQUFJLGlCQUFVLE1BREc7QUFFakIsYUFBVyxpQkFBVSxNQUZKO0FBR2pCLFNBQU8saUJBQVUsTUFIQTtBQUlqQixZQUFVLGlCQUFVLElBSkg7QUFLakIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBTFU7QUFZakIsU0FBTyxpQkFBVSxHQVpBO0FBYWpCLGdCQUFjLGlCQUFVLEdBYlA7QUFjakIsZUFBYSxpQkFBVSxNQWROO0FBZWpCLFlBQVUsaUJBQVU7QUFmSCxDQUFuQjs7SUFrQmEsTSxXQUFBLE07Ozs7Ozs7Ozs7NkJBQ0Y7QUFDUCxhQUFPLHdDQUFhLEtBQUssS0FBbEIsQ0FBUDtBQUNEOzs7RUFIeUIsZ0JBQU0sUyIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gIH07XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxhYmVsIHx8IHJlcXVpcmVkIHx8IGVycm9yKSB7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxTZWxlY3QgeyAuLi57IC4uLnByb3BzLCBpZCB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgb25DaGFuZ2UsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1zZWxlY3QnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgc2VsZWN0Q2xhc3NOYW1lcyB9XG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgPlxuICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG4gIH1cblxufVxuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgXSksXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgY2xhc3MgT3B0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8b3B0aW9uIHsgLi4udGhpcy5wcm9wcyB9IC8+O1xuICB9XG59XG4iXX0=