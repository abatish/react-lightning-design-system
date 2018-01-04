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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function (_Component) {
  (0, _inherits3.default)(Textarea, _Component);

  function Textarea() {
    (0, _classCallCheck3.default)(this, Textarea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call(this));

    _this.state = { id: 'form-element-' + (0, _util.uuid)() };

    _this.onChange = _this.onChange.bind(_this);
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
          _react2.default.createElement(Textarea, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className,
          textareaRef = props.textareaRef,
          pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'textareaRef']);

      var taClassNames = (0, _classnames2.default)(className, 'slds-textarea');
      return _react2.default.createElement('textarea', (0, _extends3.default)({
        id: id,
        ref: textareaRef,
        className: taClassNames,
        onChange: this.onChange
      }, pprops));
    }
  }]);
  return Textarea;
}(_react.Component);

exports.default = Textarea;


Textarea.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  textareaRef: _propTypes2.default.func
};

Textarea.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwic3RhdGUiLCJpZCIsIm9uQ2hhbmdlIiwiYmluZCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByb3BzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYVJlZiIsInBwcm9wcyIsInRhQ2xhc3NOYW1lcyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLFE7OztBQUNuQixzQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFFQyxzQkFBb0IsaUJBQXRCLEVBQWI7O0FBRUEsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFKWTtBQUtiOzs7OzZCQUVRQyxDLEVBQUc7QUFDVixVQUFNQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXZCO0FBQ0EsVUFBSSxLQUFLRSxLQUFMLENBQVdMLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0ssS0FBTCxDQUFXTCxRQUFYLENBQW9CRSxDQUFwQixFQUF1QkMsS0FBdkI7QUFDRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNSixLQUFLLEtBQUtNLEtBQUwsQ0FBV04sRUFBWCxJQUFpQixLQUFLRCxLQUFMLENBQVdDLEVBQXZDO0FBRE8sbUJBRXVELEtBQUtNLEtBRjVEO0FBQUEsVUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsVUFFUUMsUUFGUixVQUVRQSxRQUZSO0FBQUEsVUFFa0JDLEtBRmxCLFVBRWtCQSxLQUZsQjtBQUFBLFVBRXlCQyxTQUZ6QixVQUV5QkEsU0FGekI7QUFBQSxVQUVvQ0MsSUFGcEMsVUFFb0NBLElBRnBDO0FBQUEsVUFFNkNMLEtBRjdDOztBQUdQLFVBQUlDLFNBQVNDLFFBQVQsSUFBcUJDLEtBQXJCLElBQThCQyxTQUE5QixJQUEyQ0MsSUFBL0MsRUFBcUQ7QUFDbkQsWUFBTUMsZ0JBQWdCLEVBQUVaLE1BQUYsRUFBTU8sWUFBTixFQUFhQyxrQkFBYixFQUF1QkMsWUFBdkIsRUFBOEJDLG9CQUE5QixFQUF5Q0MsVUFBekMsRUFBdEI7QUFDQSxlQUNFO0FBQUE7QUFBa0JDLHVCQUFsQjtBQUNFLHdDQUFDLFFBQUQsNkJBQW9CTixLQUFwQixJQUEyQk4sTUFBM0I7QUFERixTQURGO0FBS0Q7QUFWTSxVQVdDYSxTQVhELEdBV3VDUCxLQVh2QyxDQVdDTyxTQVhEO0FBQUEsVUFXWUMsV0FYWixHQVd1Q1IsS0FYdkMsQ0FXWVEsV0FYWjtBQUFBLFVBVzRCQyxNQVg1QiwwQ0FXdUNULEtBWHZDOztBQVlQLFVBQU1VLGVBQWUsMEJBQVdILFNBQVgsRUFBc0IsZUFBdEIsQ0FBckI7QUFDQSxhQUNFO0FBQ0UsWUFBS2IsRUFEUDtBQUVFLGFBQU1jLFdBRlI7QUFHRSxtQkFBWUUsWUFIZDtBQUlFLGtCQUFXLEtBQUtmO0FBSmxCLFNBS09jLE1BTFAsRUFERjtBQVNEOzs7OztrQkFyQ2tCakIsUTs7O0FBd0NyQkEsU0FBU21CLFNBQVQsR0FBcUI7QUFDbkJqQixNQUFJLG9CQUFVa0IsTUFESztBQUVuQkwsYUFBVyxvQkFBVUssTUFGRjtBQUduQlgsU0FBTyxvQkFBVVcsTUFIRTtBQUluQlYsWUFBVSxvQkFBVVcsSUFKRDtBQUtuQlYsU0FBTyxzQkFBWVEsU0FBWixDQUFzQlIsS0FMVjtBQU1uQkMsYUFBVyxvQkFBVVUsTUFORjtBQU9uQlQsUUFBTSxvQkFBVVMsTUFQRztBQVFuQm5CLFlBQVUsb0JBQVVvQixJQVJEO0FBU25CUCxlQUFhLG9CQUFVTztBQVRKLENBQXJCOztBQVlBdkIsU0FBU3dCLGFBQVQsR0FBeUIsSUFBekIiLCJmaWxlIjoiVGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAgfTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IgfHwgdG90YWxDb2xzIHx8IGNvbHMpIHtcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICA8VGV4dGFyZWEgeyAuLi57IC4uLnByb3BzLCBpZCB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0ZXh0YXJlYVJlZiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBjb25zdCB0YUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdGV4dGFyZWEnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPXsgaWQgfVxuICAgICAgICByZWY9eyB0ZXh0YXJlYVJlZiB9XG4gICAgICAgIGNsYXNzTmFtZT17IHRhQ2xhc3NOYW1lcyB9XG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9XG4gICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0ZXh0YXJlYVJlZjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UZXh0YXJlYS5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==