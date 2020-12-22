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

var Form = function (_Component) {
  (0, _inherits3.default)(Form, _Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this));

    _this.renderFormElement = _this.renderFormElement.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Form, [{
    key: 'renderFormElement',
    value: function renderFormElement(element) {
      if (element && !element.type.isFormElement) {
        var _element$props$id = element.props.id,
            id = _element$props$id === undefined ? 'form-element-' + (0, _util.uuid)() : _element$props$id;

        var formElemProps = { id: id };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(element, { id: id })
        );
      }
      return element;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          type = _props.type,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children']);

      var formClassNames = (0, _classnames2.default)(className, 'slds-form--' + type);
      return _react2.default.createElement(
        'form',
        (0, _extends3.default)({ className: formClassNames }, props),
        _react2.default.Children.map(children, this.renderFormElement)
      );
    }
  }]);
  return Form;
}(_react.Component);

exports.default = Form;


var FORM_TYPES = ['stacked', 'horizontal', 'inline', 'compound'];

Form.propTypes = {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(FORM_TYPES),
  children: _propTypes2.default.node
};

Form.defaultProps = {
  type: 'stacked'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInJlbmRlckZvcm1FbGVtZW50IiwiYmluZCIsImVsZW1lbnQiLCJ0eXBlIiwiaXNGb3JtRWxlbWVudCIsInByb3BzIiwiaWQiLCJmb3JtRWxlbVByb3BzIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImZvcm1DbGFzc05hbWVzIiwiQ2hpbGRyZW4iLCJtYXAiLCJDb21wb25lbnQiLCJGT1JNX1RZUEVTIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2YiLCJub2RlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUVxQkEsSTs7O0FBQ25CLGtCQUFjO0FBQUE7O0FBQUE7O0FBR1osVUFBS0MsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLE9BQXpCO0FBSFk7QUFJYjs7OztzQ0FDaUJDLE8sRUFBUztBQUN6QixVQUFJQSxXQUFXLENBQUNBLFFBQVFDLElBQVIsQ0FBYUMsYUFBN0IsRUFBNEM7QUFBQSxnQ0FDQUYsUUFBUUcsS0FEUixDQUNsQ0MsRUFEa0M7QUFBQSxZQUNsQ0EsRUFEa0MsdURBQ2IsaUJBRGE7O0FBRTFDLFlBQU1DLGdCQUFnQixFQUFFRCxNQUFGLEVBQXRCO0FBQ0EsZUFDRTtBQUFDLCtCQUFEO0FBQWtCQyx1QkFBbEI7QUFDSUMsMEJBQU1DLFlBQU4sQ0FBbUJQLE9BQW5CLEVBQTRCLEVBQUVJLE1BQUYsRUFBNUI7QUFESixTQURGO0FBS0Q7QUFDRCxhQUFPSixPQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUN5QyxLQUFLRyxLQUQ5QztBQUFBLFVBQ0NLLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lQLElBRFosVUFDWUEsSUFEWjtBQUFBLFVBQ2tCUSxRQURsQixVQUNrQkEsUUFEbEI7QUFBQSxVQUMrQk4sS0FEL0I7O0FBRVAsVUFBTU8saUJBQWlCLDBCQUFXRixTQUFYLGtCQUFvQ1AsSUFBcEMsQ0FBdkI7QUFDQSxhQUNFO0FBQUE7QUFBQSxpQ0FBTSxXQUFZUyxjQUFsQixJQUF3Q1AsS0FBeEM7QUFDSUcsd0JBQU1LLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkgsUUFBbkIsRUFBNkIsS0FBS1gsaUJBQWxDO0FBREosT0FERjtBQUtEOzs7RUEzQitCZSxnQjs7a0JBQWJoQixJOzs7QUE4QnJCLElBQU1pQixhQUFhLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsUUFBMUIsRUFBb0MsVUFBcEMsQ0FBbkI7O0FBRUFqQixLQUFLa0IsU0FBTCxHQUFpQjtBQUNmUCxhQUFXUSxvQkFBVUMsTUFETjtBQUVmaEIsUUFBTWUsb0JBQVVFLEtBQVYsQ0FBZ0JKLFVBQWhCLENBRlM7QUFHZkwsWUFBVU8sb0JBQVVHO0FBSEwsQ0FBakI7O0FBTUF0QixLQUFLdUIsWUFBTCxHQUFvQjtBQUNsQm5CLFFBQU07QUFEWSxDQUFwQiIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQgPSB0aGlzLnJlbmRlckZvcm1FbGVtZW50LmJpbmQodGhpcyk7XG4gIH1cbiAgcmVuZGVyRm9ybUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICYmICFlbGVtZW50LnR5cGUuaXNGb3JtRWxlbWVudCkge1xuICAgICAgY29uc3QgeyBpZCA9IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCB9ID0gZWxlbWVudC5wcm9wcztcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgeyBpZCB9KSB9XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLWZvcm0tLSR7dHlwZX1gKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXsgZm9ybUNsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckZvcm1FbGVtZW50KSB9XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGT1JNX1RZUEVTID0gWydzdGFja2VkJywgJ2hvcml6b250YWwnLCAnaW5saW5lJywgJ2NvbXBvdW5kJ107XG5cbkZvcm0ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihGT1JNX1RZUEVTKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuRm9ybS5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdzdGFja2VkJyxcbn07XG4iXX0=