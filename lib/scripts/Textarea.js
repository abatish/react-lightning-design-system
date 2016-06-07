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

var Textarea = function (_React$Component) {
  (0, _inherits3.default)(Textarea, _React$Component);

  function Textarea(props) {
    (0, _classCallCheck3.default)(this, Textarea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Textarea).call(this, props));

    _this.state = { id: 'form-element-' + (0, _uuid2.default)() };
    return _this;
  }

  (0, _createClass3.default)(Textarea, [{
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
          _react2.default.createElement(Textarea, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'onChange']);

      var taClassNames = (0, _classnames2.default)(className, 'slds-input');
      return _react2.default.createElement('textarea', (0, _extends3.default)({
        id: id,
        className: taClassNames,
        onChange: this.onChange.bind(this)
      }, pprops));
    }
  }]);
  return Textarea;
}(_react2.default.Component);

exports.default = Textarea;


Textarea.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBRSxzQkFBb0IscUJBQXRCLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVEsQyxFQUFHO0FBQ1YsVUFBTSxRQUFRLEVBQUUsTUFBRixDQUFTLEtBQXZCO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNLEtBQUssS0FBSyxLQUFMLENBQVcsRUFBWCxJQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUF2QztBQURPLG1CQUVzQyxLQUFLLEtBRjNDO0FBQUEsVUFFQyxLQUZELFVBRUMsS0FGRDtBQUFBLFVBRVEsUUFGUixVQUVRLFFBRlI7QUFBQSxVQUVrQixLQUZsQixVQUVrQixLQUZsQjtBQUFBLFVBRTRCLEtBRjVCOztBQUdQLFVBQUksU0FBUyxRQUFULElBQXFCLEtBQXpCLEVBQWdDO0FBQzlCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUF0QjtBQUNBLGVBQ0U7QUFBQTtVQUFrQixhQUFsQjtVQUNFLDhCQUFDLFFBQUQsNkJBQW9CLEtBQXBCLElBQTJCLE1BQTNCO0FBREYsU0FERjtBQUtEO0FBVk0sVUFXQyxTQVhELEdBV29DLEtBWHBDLENBV0MsU0FYRDtBQUFBLFVBV1ksUUFYWixHQVdvQyxLQVhwQyxDQVdZLFFBWFo7QUFBQSxVQVd5QixNQVh6QiwwQ0FXb0MsS0FYcEM7O0FBWVAsVUFBTSxlQUFlLDBCQUFXLFNBQVgsRUFBc0IsWUFBdEIsQ0FBckI7QUFDQSxhQUNFO0FBQ0UsWUFBSyxFQURQO0FBRUUsbUJBQVksWUFGZDtBQUdFLGtCQUFXLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkI7QUFIYixTQUlPLE1BSlAsRUFERjtBQVFEOzs7RUFsQ21DLGdCQUFNLFM7O2tCQUF2QixROzs7QUFxQ3JCLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLGlCQUFVLE1BREs7QUFFbkIsYUFBVyxpQkFBVSxNQUZGO0FBR25CLFNBQU8saUJBQVUsTUFIRTtBQUluQixZQUFVLGlCQUFVLElBSkQ7QUFLbkIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBTFk7QUFZbkIsU0FBTyxpQkFBVSxNQVpFO0FBYW5CLGdCQUFjLGlCQUFVLE1BYkw7QUFjbkIsZUFBYSxpQkFBVSxNQWRKO0FBZW5CLFlBQVUsaUJBQVU7QUFmRCxDQUFyQiIsImZpbGUiOiJUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9O1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XHJcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKGxhYmVsIHx8IHJlcXVpcmVkIHx8IGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yIH07XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxyXG4gICAgICAgICAgPFRleHRhcmVhIHsgLi4ueyAuLi5wcm9wcywgaWQgfSB9IC8+XHJcbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBvbkNoYW5nZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHRhQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1pbnB1dCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgaWQ9eyBpZCB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXsgdGFDbGFzc05hbWVzIH1cclxuICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgeyAuLi5wcHJvcHMgfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRleHRhcmVhLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG4iXX0=