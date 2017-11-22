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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOlsiRm9ybSIsInJlbmRlckZvcm1FbGVtZW50IiwiYmluZCIsImVsZW1lbnQiLCJ0eXBlIiwiaXNGb3JtRWxlbWVudCIsInByb3BzIiwiaWQiLCJmb3JtRWxlbVByb3BzIiwiY2xvbmVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmb3JtQ2xhc3NOYW1lcyIsIkNoaWxkcmVuIiwibWFwIiwiRk9STV9UWVBFUyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwibm9kZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFFcUJBLEk7OztBQUNuQixrQkFBYztBQUFBOztBQUFBOztBQUdaLFVBQUtDLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6QjtBQUhZO0FBSWI7Ozs7c0NBQ2lCQyxPLEVBQVM7QUFDekIsVUFBSUEsV0FBVyxDQUFDQSxRQUFRQyxJQUFSLENBQWFDLGFBQTdCLEVBQTRDO0FBQUEsZ0NBQ0FGLFFBQVFHLEtBRFIsQ0FDbENDLEVBRGtDO0FBQUEsWUFDbENBLEVBRGtDLHVEQUNiLGlCQURhOztBQUUxQyxZQUFNQyxnQkFBZ0IsRUFBRUQsTUFBRixFQUF0QjtBQUNBLGVBQ0U7QUFBQTtBQUFrQkMsdUJBQWxCO0FBQ0ksMEJBQU1DLFlBQU4sQ0FBbUJOLE9BQW5CLEVBQTRCLEVBQUVJLE1BQUYsRUFBNUI7QUFESixTQURGO0FBS0Q7QUFDRCxhQUFPSixPQUFQO0FBQ0Q7Ozs2QkFFUTtBQUFBLG1CQUN5QyxLQUFLRyxLQUQ5QztBQUFBLFVBQ0NJLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lOLElBRFosVUFDWUEsSUFEWjtBQUFBLFVBQ2tCTyxRQURsQixVQUNrQkEsUUFEbEI7QUFBQSxVQUMrQkwsS0FEL0I7O0FBRVAsVUFBTU0saUJBQWlCLDBCQUFXRixTQUFYLGtCQUFvQ04sSUFBcEMsQ0FBdkI7QUFDQSxhQUNFO0FBQUE7QUFBQSxpQ0FBTSxXQUFZUSxjQUFsQixJQUF3Q04sS0FBeEM7QUFDSSx3QkFBTU8sUUFBTixDQUFlQyxHQUFmLENBQW1CSCxRQUFuQixFQUE2QixLQUFLVixpQkFBbEM7QUFESixPQURGO0FBS0Q7Ozs7O2tCQTNCa0JELEk7OztBQThCckIsSUFBTWUsYUFBYSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFFBQTFCLEVBQW9DLFVBQXBDLENBQW5COztBQUVBZixLQUFLZ0IsU0FBTCxHQUFpQjtBQUNmTixhQUFXLG9CQUFVTyxNQUROO0FBRWZiLFFBQU0sb0JBQVVjLEtBQVYsQ0FBZ0JILFVBQWhCLENBRlM7QUFHZkosWUFBVSxvQkFBVVE7QUFITCxDQUFqQjs7QUFNQW5CLEtBQUtvQixZQUFMLEdBQW9CO0FBQ2xCaEIsUUFBTTtBQURZLENBQXBCIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZW5kZXJGb3JtRWxlbWVudCA9IHRoaXMucmVuZGVyRm9ybUVsZW1lbnQuYmluZCh0aGlzKTtcbiAgfVxuICByZW5kZXJGb3JtRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgIWVsZW1lbnQudHlwZS5pc0Zvcm1FbGVtZW50KSB7XG4gICAgICBjb25zdCB7IGlkID0gYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gIH0gPSBlbGVtZW50LnByb3BzO1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICB7IFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7IGlkIH0pIH1cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0eXBlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtZm9ybS0tJHt0eXBlfWApO1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9eyBmb3JtQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQpIH1cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEZPUk1fVFlQRVMgPSBbJ3N0YWNrZWQnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnLCAnY29tcG91bmQnXTtcblxuRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEZPUk1fVFlQRVMpLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5Gb3JtLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3N0YWNrZWQnLFxufTtcbiJdfQ==