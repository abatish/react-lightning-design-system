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
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(FORM_TYPES),
  children: _react.PropTypes.node
};

Form.defaultProps = {
  type: 'stacked'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInJlbmRlckZvcm1FbGVtZW50IiwiYmluZCIsImVsZW1lbnQiLCJ0eXBlIiwiaXNGb3JtRWxlbWVudCIsInByb3BzIiwiaWQiLCJmb3JtRWxlbVByb3BzIiwiY2xvbmVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmb3JtQ2xhc3NOYW1lcyIsIkNoaWxkcmVuIiwibWFwIiwiRk9STV9UWVBFUyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBRXFCQSxJOzs7QUFDbkIsa0JBQWM7QUFBQTs7QUFBQTs7QUFHWixVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsT0FBekI7QUFIWTtBQUliOzs7O3NDQUNpQkMsTyxFQUFTO0FBQ3pCLFVBQUlBLFdBQVcsQ0FBQ0EsUUFBUUMsSUFBUixDQUFhQyxhQUE3QixFQUE0QztBQUFBLGdDQUNBRixRQUFRRyxLQURSLENBQ2xDQyxFQURrQztBQUFBLFlBQ2xDQSxFQURrQyx1REFDYixpQkFEYTs7QUFFMUMsWUFBTUMsZ0JBQWdCLEVBQUVELE1BQUYsRUFBdEI7QUFDQSxlQUNFO0FBQUE7QUFBa0JDLHVCQUFsQjtBQUNJLDBCQUFNQyxZQUFOLENBQW1CTixPQUFuQixFQUE0QixFQUFFSSxNQUFGLEVBQTVCO0FBREosU0FERjtBQUtEO0FBQ0QsYUFBT0osT0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDeUMsS0FBS0csS0FEOUM7QUFBQSxVQUNDSSxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZTixJQURaLFVBQ1lBLElBRFo7QUFBQSxVQUNrQk8sUUFEbEIsVUFDa0JBLFFBRGxCO0FBQUEsVUFDK0JMLEtBRC9COztBQUVQLFVBQU1NLGlCQUFpQiwwQkFBV0YsU0FBWCxrQkFBb0NOLElBQXBDLENBQXZCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsaUNBQU0sV0FBWVEsY0FBbEIsSUFBd0NOLEtBQXhDO0FBQ0ksd0JBQU1PLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkgsUUFBbkIsRUFBNkIsS0FBS1YsaUJBQWxDO0FBREosT0FERjtBQUtEOzs7OztrQkEzQmtCRCxJOzs7QUE4QnJCLElBQU1lLGFBQWEsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixRQUExQixFQUFvQyxVQUFwQyxDQUFuQjs7QUFFQWYsS0FBS2dCLFNBQUwsR0FBaUI7QUFDZk4sYUFBVyxpQkFBVU8sTUFETjtBQUVmYixRQUFNLGlCQUFVYyxLQUFWLENBQWdCSCxVQUFoQixDQUZTO0FBR2ZKLFlBQVUsaUJBQVVRO0FBSEwsQ0FBakI7O0FBTUFuQixLQUFLb0IsWUFBTCxHQUFvQjtBQUNsQmhCLFFBQU07QUFEWSxDQUFwQiIsImZpbGUiOiJGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlbmRlckZvcm1FbGVtZW50ID0gdGhpcy5yZW5kZXJGb3JtRWxlbWVudC5iaW5kKHRoaXMpO1xuICB9XG4gIHJlbmRlckZvcm1FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC50eXBlLmlzRm9ybUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgaWQgPSBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAgfSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIHsgUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgaWQgfSkgfVxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHR5cGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy1mb3JtLS0ke3R5cGV9YCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17IGZvcm1DbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJGb3JtRWxlbWVudCkgfVxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRk9STV9UWVBFUyA9IFsnc3RhY2tlZCcsICdob3Jpem9udGFsJywgJ2lubGluZScsICdjb21wb3VuZCddO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoRk9STV9UWVBFUyksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkZvcm0uZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnc3RhY2tlZCcsXG59O1xuIl19