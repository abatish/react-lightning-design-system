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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwic3RhdGUiLCJpZCIsIm9uQ2hhbmdlIiwiYmluZCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByb3BzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYVJlZiIsInBwcm9wcyIsInRhQ2xhc3NOYW1lcyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsImZ1bmMiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsUTs7O0FBQ25CLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhLEVBQUVDLHNCQUFvQixpQkFBdEIsRUFBYjs7QUFFQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUpZO0FBS2I7Ozs7NkJBRVFDLEMsRUFBRztBQUNWLFVBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxVQUFJLEtBQUtFLEtBQUwsQ0FBV0wsUUFBZixFQUF5QjtBQUN2QixhQUFLSyxLQUFMLENBQVdMLFFBQVgsQ0FBb0JFLENBQXBCLEVBQXVCQyxLQUF2QjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1KLEtBQUssS0FBS00sS0FBTCxDQUFXTixFQUFYLElBQWlCLEtBQUtELEtBQUwsQ0FBV0MsRUFBdkM7QUFETyxtQkFFdUQsS0FBS00sS0FGNUQ7QUFBQSxVQUVDQyxLQUZELFVBRUNBLEtBRkQ7QUFBQSxVQUVRQyxRQUZSLFVBRVFBLFFBRlI7QUFBQSxVQUVrQkMsS0FGbEIsVUFFa0JBLEtBRmxCO0FBQUEsVUFFeUJDLFNBRnpCLFVBRXlCQSxTQUZ6QjtBQUFBLFVBRW9DQyxJQUZwQyxVQUVvQ0EsSUFGcEM7QUFBQSxVQUU2Q0wsS0FGN0M7O0FBR1AsVUFBSUMsU0FBU0MsUUFBVCxJQUFxQkMsS0FBckIsSUFBOEJDLFNBQTlCLElBQTJDQyxJQUEvQyxFQUFxRDtBQUNuRCxZQUFNQyxnQkFBZ0IsRUFBRVosTUFBRixFQUFNTyxZQUFOLEVBQWFDLGtCQUFiLEVBQXVCQyxZQUF2QixFQUE4QkMsb0JBQTlCLEVBQXlDQyxVQUF6QyxFQUF0QjtBQUNBLGVBQ0U7QUFBQywrQkFBRDtBQUFrQkMsdUJBQWxCO0FBQ0Usd0NBQUMsUUFBRCw2QkFBb0JOLEtBQXBCLElBQTJCTixNQUEzQjtBQURGLFNBREY7QUFLRDtBQVZNLFVBV0NhLFNBWEQsR0FXdUNQLEtBWHZDLENBV0NPLFNBWEQ7QUFBQSxVQVdZQyxXQVhaLEdBV3VDUixLQVh2QyxDQVdZUSxXQVhaO0FBQUEsVUFXNEJDLE1BWDVCLDBDQVd1Q1QsS0FYdkM7O0FBWVAsVUFBTVUsZUFBZSwwQkFBV0gsU0FBWCxFQUFzQixlQUF0QixDQUFyQjtBQUNBLGFBQ0U7QUFDRSxZQUFLYixFQURQO0FBRUUsYUFBTWMsV0FGUjtBQUdFLG1CQUFZRSxZQUhkO0FBSUUsa0JBQVcsS0FBS2Y7QUFKbEIsU0FLT2MsTUFMUCxFQURGO0FBU0Q7OztFQXJDbUNFLGdCOztrQkFBakJuQixROzs7QUF3Q3JCQSxTQUFTb0IsU0FBVCxHQUFxQjtBQUNuQmxCLE1BQUltQixvQkFBVUMsTUFESztBQUVuQlAsYUFBV00sb0JBQVVDLE1BRkY7QUFHbkJiLFNBQU9ZLG9CQUFVQyxNQUhFO0FBSW5CWixZQUFVVyxvQkFBVUUsSUFKRDtBQUtuQlosU0FBT2Esc0JBQVlKLFNBQVosQ0FBc0JULEtBTFY7QUFNbkJDLGFBQVdTLG9CQUFVSSxNQU5GO0FBT25CWixRQUFNUSxvQkFBVUksTUFQRztBQVFuQnRCLFlBQVVrQixvQkFBVUssSUFSRDtBQVNuQlYsZUFBYUssb0JBQVVLO0FBVEosQ0FBckI7O0FBWUExQixTQUFTMkIsYUFBVCxHQUF5QixJQUF6QiIsImZpbGUiOiJUZXh0YXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvciB8fCB0b3RhbENvbHMgfHwgY29scykge1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxUZXh0YXJlYSB7IC4uLnsgLi4ucHJvcHMsIGlkIH0gfSAvPlxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHRleHRhcmVhUmVmLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHRhQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10ZXh0YXJlYScpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgIHJlZj17IHRleHRhcmVhUmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgdGFDbGFzc05hbWVzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRleHRhcmVhLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19