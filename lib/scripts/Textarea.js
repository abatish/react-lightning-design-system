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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLFE7OztBQUNuQixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBRSxzQkFBb0IscUJBQXRCLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBRVEsQyxFQUFHO0FBQ1YsVUFBTSxRQUFRLEVBQUUsTUFBRixDQUFTLEtBQXZCO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNLEtBQUssS0FBSyxLQUFMLENBQVcsRUFBWCxJQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUF2QztBQURPLG1CQUVzQyxLQUFLLEtBRjNDO0FBQUEsVUFFQyxLQUZELFVBRUMsS0FGRDtBQUFBLFVBRVEsUUFGUixVQUVRLFFBRlI7QUFBQSxVQUVrQixLQUZsQixVQUVrQixLQUZsQjtBQUFBLFVBRTRCLEtBRjVCOztBQUdQLFVBQUksU0FBUyxRQUFULElBQXFCLEtBQXpCLEVBQWdDO0FBQzlCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUF0QjtBQUNBLGVBQ0U7QUFBQTtVQUFrQixhQUFsQjtVQUNFLDhCQUFDLFFBQUQsNkJBQW9CLEtBQXBCLElBQTJCLE1BQTNCO0FBREYsU0FERjtBQUtEO0FBVk0sVUFXQyxTQVhELEdBV29DLEtBWHBDLENBV0MsU0FYRDtBQUFBLFVBV1ksUUFYWixHQVdvQyxLQVhwQyxDQVdZLFFBWFo7QUFBQSxVQVd5QixNQVh6QiwwQ0FXb0MsS0FYcEM7O0FBWVAsVUFBTSxlQUFlLDBCQUFXLFNBQVgsRUFBc0IsWUFBdEIsQ0FBckI7QUFDQSxhQUNFO0FBQ0UsWUFBSyxFQURQO0FBRUUsbUJBQVksWUFGZDtBQUdFLGtCQUFXLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkI7QUFIYixTQUlPLE1BSlAsRUFERjtBQVFEOzs7RUFsQ21DLGdCQUFNLFM7O2tCQUF2QixROzs7QUFxQ3JCLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixNQUFJLGlCQUFVLE1BREs7QUFFbkIsYUFBVyxpQkFBVSxNQUZGO0FBR25CLFNBQU8saUJBQVUsTUFIRTtBQUluQixZQUFVLGlCQUFVLElBSkQ7QUFLbkIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBTFk7QUFZbkIsU0FBTyxpQkFBVSxNQVpFO0FBYW5CLGdCQUFjLGlCQUFVLE1BYkw7QUFjbkIsZUFBYSxpQkFBVSxNQWRKO0FBZW5CLFlBQVUsaUJBQVU7QUFmRCxDQUFyQiIsImZpbGUiOiJUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9O1xuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7IGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvcikge1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICA8VGV4dGFyZWEgeyAuLi57IC4uLnByb3BzLCBpZCB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBvbkNoYW5nZSwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCB0YUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtaW5wdXQnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXsgaWQgfVxuICAgICAgICBjbGFzc05hbWU9eyB0YUNsYXNzTmFtZXMgfVxuICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=