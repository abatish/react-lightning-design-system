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

      var taClassNames = (0, _classnames2.default)(className, 'slds-input');
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
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  textareaRef: _react.PropTypes.func
};

Textarea.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwic3RhdGUiLCJpZCIsIm9uQ2hhbmdlIiwiYmluZCIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInByb3BzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYVJlZiIsInBwcm9wcyIsInRhQ2xhc3NOYW1lcyIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxROzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWEsRUFBRUMsc0JBQW9CLGlCQUF0QixFQUFiOztBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBSlk7QUFLYjs7Ozs2QkFFUUMsQyxFQUFHO0FBQ1YsVUFBTUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUF2QjtBQUNBLFVBQUksS0FBS0UsS0FBTCxDQUFXTCxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUtLLEtBQUwsQ0FBV0wsUUFBWCxDQUFvQkUsQ0FBcEIsRUFBdUJDLEtBQXZCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsVUFBTUosS0FBSyxLQUFLTSxLQUFMLENBQVdOLEVBQVgsSUFBaUIsS0FBS0QsS0FBTCxDQUFXQyxFQUF2QztBQURPLG1CQUV1RCxLQUFLTSxLQUY1RDtBQUFBLFVBRUNDLEtBRkQsVUFFQ0EsS0FGRDtBQUFBLFVBRVFDLFFBRlIsVUFFUUEsUUFGUjtBQUFBLFVBRWtCQyxLQUZsQixVQUVrQkEsS0FGbEI7QUFBQSxVQUV5QkMsU0FGekIsVUFFeUJBLFNBRnpCO0FBQUEsVUFFb0NDLElBRnBDLFVBRW9DQSxJQUZwQztBQUFBLFVBRTZDTCxLQUY3Qzs7QUFHUCxVQUFJQyxTQUFTQyxRQUFULElBQXFCQyxLQUFyQixJQUE4QkMsU0FBOUIsSUFBMkNDLElBQS9DLEVBQXFEO0FBQ25ELFlBQU1DLGdCQUFnQixFQUFFWixNQUFGLEVBQU1PLFlBQU4sRUFBYUMsa0JBQWIsRUFBdUJDLFlBQXZCLEVBQThCQyxvQkFBOUIsRUFBeUNDLFVBQXpDLEVBQXRCO0FBQ0EsZUFDRTtBQUFBO0FBQWtCQyx1QkFBbEI7QUFDRSx3Q0FBQyxRQUFELDZCQUFvQk4sS0FBcEIsSUFBMkJOLE1BQTNCO0FBREYsU0FERjtBQUtEO0FBVk0sVUFXQ2EsU0FYRCxHQVd1Q1AsS0FYdkMsQ0FXQ08sU0FYRDtBQUFBLFVBV1lDLFdBWFosR0FXdUNSLEtBWHZDLENBV1lRLFdBWFo7QUFBQSxVQVc0QkMsTUFYNUIsMENBV3VDVCxLQVh2Qzs7QUFZUCxVQUFNVSxlQUFlLDBCQUFXSCxTQUFYLEVBQXNCLFlBQXRCLENBQXJCO0FBQ0EsYUFDRTtBQUNFLFlBQUtiLEVBRFA7QUFFRSxhQUFNYyxXQUZSO0FBR0UsbUJBQVlFLFlBSGQ7QUFJRSxrQkFBVyxLQUFLZjtBQUpsQixTQUtPYyxNQUxQLEVBREY7QUFTRDs7Ozs7a0JBckNrQmpCLFE7OztBQXdDckJBLFNBQVNtQixTQUFULEdBQXFCO0FBQ25CakIsTUFBSSxpQkFBVWtCLE1BREs7QUFFbkJMLGFBQVcsaUJBQVVLLE1BRkY7QUFHbkJYLFNBQU8saUJBQVVXLE1BSEU7QUFJbkJWLFlBQVUsaUJBQVVXLElBSkQ7QUFLbkJWLFNBQU8sc0JBQVlRLFNBQVosQ0FBc0JSLEtBTFY7QUFNbkJDLGFBQVcsaUJBQVVVLE1BTkY7QUFPbkJULFFBQU0saUJBQVVTLE1BUEc7QUFRbkJuQixZQUFVLGlCQUFVb0IsSUFSRDtBQVNuQlAsZUFBYSxpQkFBVU87QUFUSixDQUFyQjs7QUFZQXZCLFNBQVN3QixhQUFULEdBQXlCLElBQXpCIiwiZmlsZSI6IlRleHRhcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvciB8fCB0b3RhbENvbHMgfHwgY29scykge1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxUZXh0YXJlYSB7IC4uLnsgLi4ucHJvcHMsIGlkIH0gfSAvPlxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHRleHRhcmVhUmVmLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IHRhQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1pbnB1dCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgIHJlZj17IHRleHRhcmVhUmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgdGFDbGFzc05hbWVzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRleHRhcmVhUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRleHRhcmVhLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19