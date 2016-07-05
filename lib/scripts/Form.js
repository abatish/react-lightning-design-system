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

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Form).apply(this, arguments));
  }

  (0, _createClass3.default)(Form, [{
    key: 'renderFormElement',
    value: function renderFormElement(element) {
      if (!element) {
        return element;
      }

      var klass = element.type;
      if (!klass.isFormElement) {
        var _element$props = element.props;
        var _element$props$id = _element$props.id;
        var id = _element$props$id === undefined ? 'form-element-' + (0, _uuid2.default)() : _element$props$id;
        var label = _element$props.label;
        var required = _element$props.required;
        var error = _element$props.error;
        var totalCols = _element$props.totalCols;
        var cols = _element$props.cols;
        var children = _element$props.children;
        var props = (0, _objectWithoutProperties3.default)(_element$props, ['id', 'label', 'required', 'error', 'totalCols', 'cols', 'children']);

        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(element, { id: id, label: undefined, required: undefined, error: undefined })
        );
      }
      return element;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var type = _props.type;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children']);

      var formClassNames = (0, _classnames2.default)(className, 'slds-form--' + type);
      return _react2.default.createElement(
        'form',
        (0, _extends3.default)({ className: formClassNames }, props),
        _react2.default.Children.map(children, this.renderFormElement.bind(this))
      );
    }
  }]);
  return Form;
}(_react2.default.Component);

exports.default = Form;


var FORM_TYPES = ['stacked', 'horizontal', 'inline', 'compound'];

Form.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(FORM_TYPES),
  children: _react.PropTypes.node
};

Form.defaultProps = {
  type: 'stacked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUIsSTs7Ozs7Ozs7OztzQ0FDRCxPLEVBQVM7QUFDekIsVUFBSSxDQUFFLE9BQU4sRUFBYztBQUNaLGVBQU8sT0FBUDtBQUNEOztBQUVELFVBQU0sUUFBUSxRQUFRLElBQXRCO0FBQ0EsVUFBSSxDQUFDLE1BQU0sYUFBWCxFQUEwQjtBQUFBLDZCQUMrRSxRQUFRLEtBRHZGO0FBQUEsK0NBQ2hCLEVBRGdCO0FBQUEsWUFDaEIsRUFEZ0IsdURBQ0sscUJBREw7QUFBQSxZQUNlLEtBRGYsa0JBQ2UsS0FEZjtBQUFBLFlBQ3NCLFFBRHRCLGtCQUNzQixRQUR0QjtBQUFBLFlBQ2dDLEtBRGhDLGtCQUNnQyxLQURoQztBQUFBLFlBQ3VDLFNBRHZDLGtCQUN1QyxTQUR2QztBQUFBLFlBQ2tELElBRGxELGtCQUNrRCxJQURsRDtBQUFBLFlBQ3dELFFBRHhELGtCQUN3RCxRQUR4RDtBQUFBLFlBQ3FFLEtBRHJFOztBQUV4QixZQUFNLGdCQUFnQixFQUFFLE1BQUYsRUFBTSxZQUFOLEVBQWEsa0JBQWIsRUFBdUIsWUFBdkIsRUFBOEIsb0JBQTlCLEVBQXlDLFVBQXpDLEVBQXRCO0FBQ0EsZUFDRTtBQUFBO1VBQWtCLGFBQWxCO1VBQ0ksZ0JBQU0sWUFBTixDQUFtQixPQUFuQixFQUE0QixFQUFFLE1BQUYsRUFBTSxPQUFPLFNBQWIsRUFBd0IsVUFBVSxTQUFsQyxFQUE2QyxPQUFPLFNBQXBELEVBQTVCO0FBREosU0FERjtBQUtEO0FBQ0QsYUFBTyxPQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUN5QyxLQUFLLEtBRDlDO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksSUFEWixVQUNZLElBRFo7QUFBQSxVQUNrQixRQURsQixVQUNrQixRQURsQjtBQUFBLFVBQytCLEtBRC9COztBQUVQLFVBQU0saUJBQWlCLDBCQUFXLFNBQVgsa0JBQW9DLElBQXBDLENBQXZCO0FBQ0EsYUFDRTtBQUFBO1FBQUEseUJBQU0sV0FBWSxjQUFsQixJQUF3QyxLQUF4QztRQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBN0I7QUFESixPQURGO0FBS0Q7OztFQTNCK0IsZ0JBQU0sUzs7a0JBQW5CLEk7OztBQThCckIsSUFBTSxhQUFhLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsUUFBMUIsRUFBb0MsVUFBcEMsQ0FBbkI7O0FBRUEsS0FBSyxTQUFMLEdBQWlCO0FBQ2YsYUFBVyxpQkFBVSxNQUROO0FBRWYsUUFBTSxpQkFBVSxLQUFWLENBQWdCLFVBQWhCLENBRlM7QUFHZixZQUFVLGlCQUFVO0FBSEwsQ0FBakI7O0FBTUEsS0FBSyxZQUFMLEdBQW9CO0FBQ2xCLFFBQU07QUFEWSxDQUFwQiIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlckZvcm1FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoISBlbGVtZW50KXtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGtsYXNzID0gZWxlbWVudC50eXBlO1xuICAgIGlmICgha2xhc3MuaXNGb3JtRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBpZCA9IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgeyBpZCwgbGFiZWw6IHVuZGVmaW5lZCwgcmVxdWlyZWQ6IHVuZGVmaW5lZCwgZXJyb3I6IHVuZGVmaW5lZCB9KSB9XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLWZvcm0tLSR7dHlwZX1gKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXsgZm9ybUNsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckZvcm1FbGVtZW50LmJpbmQodGhpcykpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZPUk1fVFlQRVMgPSBbJ3N0YWNrZWQnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnLCAnY29tcG91bmQnXTtcblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEZPUk1fVFlQRVMpLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Gb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3N0YWNrZWQnLFxufTtcbiJdfQ==