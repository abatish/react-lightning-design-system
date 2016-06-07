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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
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
      var _props = this.props;
      var _props$id = _props.id;
      var id = _props$id === undefined ? 'input-' + (0, _uuid2.default)() : _props$id;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var props = (0, _objectWithoutProperties3.default)(_props, ['id', 'label', 'required', 'error']);

      if (label || required || error) {
        var formElemProps = { id: id, label: label, required: required, error: error };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Input, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var type = props.type;
      var bare = props.bare;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'bare', 'onChange']);

      var inputClassNames = (0, _classnames2.default)(className, bare ? 'slds-input--bare' : 'slds-input');
      return _react2.default.createElement('input', (0, _extends3.default)({ className: inputClassNames,
        id: id,
        type: type,
        onChange: this.onChange.bind(this)
      }, pprops));
    }
  }]);
  return Input;
}(_react2.default.Component);

exports.default = Input;


Input.propTypes = {
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
  bare: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLEs7Ozs7Ozs7Ozs7NkJBQ1YsQyxFQUFHO0FBQ1YsVUFBTSxRQUFRLEVBQUUsTUFBRixDQUFTLEtBQXZCO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxtQkFDOEQsS0FBSyxLQURuRTtBQUFBLDZCQUNDLEVBREQ7QUFBQSxVQUNDLEVBREQsd0NBQ2UscUJBRGY7QUFBQSxVQUN5QixLQUR6QixVQUN5QixLQUR6QjtBQUFBLFVBQ2dDLFFBRGhDLFVBQ2dDLFFBRGhDO0FBQUEsVUFDMEMsS0FEMUMsVUFDMEMsS0FEMUM7QUFBQSxVQUNvRCxLQURwRDs7QUFFUCxVQUFJLFNBQVMsUUFBVCxJQUFxQixLQUF6QixFQUFnQztBQUM5QixZQUFNLGdCQUFnQixFQUFFLE1BQUYsRUFBTSxZQUFOLEVBQWEsa0JBQWIsRUFBdUIsWUFBdkIsRUFBdEI7QUFDQSxlQUNFO0FBQUE7VUFBa0IsYUFBbEI7VUFDRSw4QkFBQyxLQUFELDZCQUFpQixLQUFqQixJQUF3QixNQUF4QjtBQURGLFNBREY7QUFLRDtBQVRNLFVBVUMsU0FWRCxHQVVnRCxLQVZoRCxDQVVDLFNBVkQ7QUFBQSxVQVVZLElBVlosR0FVZ0QsS0FWaEQsQ0FVWSxJQVZaO0FBQUEsVUFVa0IsSUFWbEIsR0FVZ0QsS0FWaEQsQ0FVa0IsSUFWbEI7QUFBQSxVQVV3QixRQVZ4QixHQVVnRCxLQVZoRCxDQVV3QixRQVZ4QjtBQUFBLFVBVXFDLE1BVnJDLDBDQVVnRCxLQVZoRDs7QUFXUCxVQUFNLGtCQUFrQiwwQkFBVyxTQUFYLEVBQXNCLE9BQU8sa0JBQVAsR0FBNEIsWUFBbEQsQ0FBeEI7QUFDQSxhQUNFLGdFQUFPLFdBQVksZUFBbkI7QUFDRSxZQUFLLEVBRFA7QUFFRSxjQUFPLElBRlQ7QUFHRSxrQkFBVyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CO0FBSGIsU0FJTyxNQUpQLEVBREY7QUFRRDs7O0VBNUJnQyxnQkFBTSxTOztrQkFBcEIsSzs7O0FBK0JyQixNQUFNLFNBQU4sR0FBa0I7QUFDaEIsTUFBSSxpQkFBVSxNQURFO0FBRWhCLGFBQVcsaUJBQVUsTUFGTDtBQUdoQixTQUFPLGlCQUFVLE1BSEQ7QUFJaEIsWUFBVSxpQkFBVSxJQUpKO0FBS2hCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUxTO0FBWWhCLFNBQU8saUJBQVUsR0FaRDtBQWFoQixnQkFBYyxpQkFBVSxHQWJSO0FBY2hCLGVBQWEsaUJBQVUsTUFkUDtBQWVoQixRQUFNLGlCQUFVLElBZkE7QUFnQmhCLFlBQVUsaUJBQVU7QUFoQkosQ0FBbEIiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpZCA9IGBpbnB1dC0ke3V1aWQoKX1gLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvcikge1xyXG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciB9O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICAgIDxJbnB1dCB7IC4uLnsgLi4ucHJvcHMsIGlkIH0gfSAvPlxyXG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZSwgYmFyZSwgb25DaGFuZ2UsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBpbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYmFyZSA/ICdzbGRzLWlucHV0LS1iYXJlJyA6ICdzbGRzLWlucHV0Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPXsgaW5wdXRDbGFzc05hbWVzIH1cclxuICAgICAgICBpZD17IGlkIH1cclxuICAgICAgICB0eXBlPXsgdHlwZSB9XHJcbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgIHsgLi4ucHByb3BzIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJhcmU6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIl19