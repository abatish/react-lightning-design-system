'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addUniqueValue = function addUniqueValue(values, value) {
  return values.indexOf(value) < 0 ? [].concat((0, _toConsumableArray3.default)(values), [value]) : values;
};

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup(props) {
    (0, _classCallCheck3.default)(this, CheckboxGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    _this.renderControl = _this.renderControl.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = this.props.value;


      var finalValue = e.target.checked ? addUniqueValue(value, e.target.value) : value.filter(function (i) {
        return i !== e.target.value;
      });

      if (this.props.onChange) {
        this.props.onChange(finalValue);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(checkbox, i) {
      var props = { grouped: true };
      if (this.props.name) {
        props.name = this.props.name;
      }
      return _react2.default.cloneElement(checkbox, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var style = _props.style;
      var required = _props.required;
      var error = _props.error;
      var onChange = _props.onChange;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'totalCols', 'cols', 'style', 'required', 'error', 'onChange', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles, onChange: this.onChange }, props),
        _react2.default.createElement(
          'legend',
          { className: 'slds-form-element__label slds-form-element__label--top' },
          label,
          required ? _react2.default.createElement(
            'abbr',
            { className: 'slds-required' },
            '*'
          ) : undefined
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-form-element__control' },
          _react2.default.Children.map(children, this.renderControl),
          errorMessage ? _react2.default.createElement(
            'div',
            { className: 'slds-form-element__help' },
            errorMessage
          ) : undefined
        )
      );
    }
  }]);
  return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;


CheckboxGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  name: _react.PropTypes.string,
  totalCols: _react.PropTypes.number,
  style: _react.PropTypes.object,
  cols: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  children: _react.PropTypes.node
};

CheckboxGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ3hDLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QixDQUF4Qiw4Q0FBaUMsTUFBakMsSUFBeUMsS0FBekMsS0FBa0QsTUFBekQ7QUFDRCxDQUZEOztJQUlxQixhOzs7QUFDbkIseUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHVIQUNWLEtBRFU7O0FBRWhCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUhnQjtBQUlqQjs7Ozs2QkFFUSxDLEVBQUc7QUFBQSxVQUNGLEtBREUsR0FDUSxLQUFLLEtBRGIsQ0FDRixLQURFOzs7QUFHVixVQUFNLGFBQWEsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUNqQixlQUFlLEtBQWYsRUFBc0IsRUFBRSxNQUFGLENBQVMsS0FBL0IsQ0FEaUIsR0FFakIsTUFBTSxNQUFOLENBQWE7QUFBQSxlQUFPLE1BQU0sRUFBRSxNQUFGLENBQVMsS0FBdEI7QUFBQSxPQUFiLENBRkY7O0FBSUEsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEI7QUFDRDtBQUNGOzs7a0NBRWEsUSxFQUFVLEMsRUFBRztBQUN6QixVQUFNLFFBQVEsRUFBRSxTQUFTLElBQVgsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsSUFBZixFQUFxQjtBQUNuQixjQUFNLElBQU4sR0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUF4QjtBQUNEO0FBQ0QsYUFBTyxnQkFBTSxZQUFOLENBQW1CLFFBQW5CLEVBQTZCLEtBQTdCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQzZGLEtBQUssS0FEbEc7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxLQURaLFVBQ1ksS0FEWjtBQUFBLFVBQ21CLFNBRG5CLFVBQ21CLFNBRG5CO0FBQUEsVUFDOEIsSUFEOUIsVUFDOEIsSUFEOUI7QUFBQSxVQUNvQyxLQURwQyxVQUNvQyxLQURwQztBQUFBLFVBQzJDLFFBRDNDLFVBQzJDLFFBRDNDO0FBQUEsVUFDcUQsS0FEckQsVUFDcUQsS0FEckQ7QUFBQSxVQUM0RCxRQUQ1RCxVQUM0RCxRQUQ1RDtBQUFBLFVBQ3NFLFFBRHRFLFVBQ3NFLFFBRHRFO0FBQUEsVUFDbUYsS0FEbkY7O0FBRVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLG1CQUZvQixFQUdwQjtBQUNFLDBCQUFrQixLQURwQjtBQUVFLDRCQUFvQjtBQUZ0QixPQUhvQixFQU9wQixPQUFPLFNBQVAsS0FBcUIsUUFBckIsb0JBQThDLFFBQVEsQ0FBdEQsYUFBOEQsU0FBOUQsR0FBNEUsSUFQeEQsQ0FBdEI7QUFTQSxVQUFNLFlBQVksT0FBTyxTQUFQLEtBQXFCLFFBQXJCLDRCQUFrQyxTQUFTLGNBQTNDLElBQThELEtBQTlELElBQXdFLEtBQTFGO0FBQ0EsVUFBTSxlQUNKLFFBQ0MsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLEtBQTVCLEdBQ0EsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBakIsR0FBNEIsTUFBTSxPQUFsQyxHQUNBLFNBSEQsR0FJQSxTQUxGO0FBTUEsYUFDRTtBQUFBO1FBQUEseUJBQVUsV0FBWSxhQUF0QixFQUFzQyxPQUFRLFNBQTlDLEVBQTBELFVBQVcsS0FBSyxRQUExRSxJQUEwRixLQUExRjtRQUNFO0FBQUE7VUFBQSxFQUFRLFdBQVUsd0RBQWxCO1VBQ0ksS0FESjtVQUdJLFdBQ0E7QUFBQTtZQUFBLEVBQU0sV0FBVSxlQUFoQjtZQUFBO0FBQUEsV0FEQSxHQUVBO0FBTEosU0FERjtRQVNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsNEJBQWY7VUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGFBQWxDLENBREo7VUFHSSxlQUNBO0FBQUE7WUFBQSxFQUFLLFdBQVUseUJBQWY7WUFBMkM7QUFBM0MsV0FEQSxHQUVBO0FBTEo7QUFURixPQURGO0FBb0JEOzs7RUFqRXdDLGdCQUFNLFM7O2tCQUE1QixhOzs7QUFxRXJCLGNBQWMsU0FBZCxHQUEwQjtBQUN4QixhQUFXLGlCQUFVLE1BREc7QUFFeEIsU0FBTyxpQkFBVSxNQUZPO0FBR3hCLFlBQVUsaUJBQVUsSUFISTtBQUl4QixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFEZSxFQUV6QixpQkFBVSxNQUZlLEVBR3pCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FKaUI7QUFXeEIsUUFBTSxpQkFBVSxNQVhRO0FBWXhCLGFBQVcsaUJBQVUsTUFaRztBQWF4QixTQUFPLGlCQUFVLE1BYk87QUFjeEIsUUFBTSxpQkFBVSxNQWRRO0FBZXhCLFlBQVUsaUJBQVUsSUFmSTtBQWdCeEIsWUFBVSxpQkFBVTtBQWhCSSxDQUExQjs7QUFtQkEsY0FBYyxhQUFkLEdBQThCLElBQTlCIiwiZmlsZSI6IkNoZWNrYm94R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5jb25zdCBhZGRVbmlxdWVWYWx1ZSA9ICh2YWx1ZXMsIHZhbHVlKSA9PiB7XHJcbiAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA8IDAgPyBbIC4uLnZhbHVlcywgdmFsdWVdIDogdmFsdWVzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZW5kZXJDb250cm9sID0gdGhpcy5yZW5kZXJDb250cm9sLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIGNvbnN0IGZpbmFsVmFsdWUgPSBlLnRhcmdldC5jaGVja2VkID9cclxuICAgICAgYWRkVW5pcXVlVmFsdWUodmFsdWUsIGUudGFyZ2V0LnZhbHVlKSA6XHJcbiAgICAgIHZhbHVlLmZpbHRlcihpID0+ICggaSAhPT0gZS50YXJnZXQudmFsdWUgKSk7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShmaW5hbFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRyb2woY2hlY2tib3gsIGkpIHtcclxuICAgIGNvbnN0IHByb3BzID0geyBncm91cGVkOiB0cnVlIH07XHJcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XHJcbiAgICAgIHByb3BzLm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoZWNrYm94LCBwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIHRvdGFsQ29scywgY29scywgc3R5bGUsIHJlcXVpcmVkLCBlcnJvciwgb25DaGFuZ2UsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGdycENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXHJcbiAgICAgIHtcclxuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcclxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGdycFN0eWxlcyA9IHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgLi4uc3R5bGUgfSA6IHN0eWxlO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cclxuICAgICAgZXJyb3IgP1xyXG4gICAgICAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDpcclxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcclxuICAgICAgIHVuZGVmaW5lZCkgOlxyXG4gICAgICB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9IHN0eWxlPXsgZ3JwU3R5bGVzIH0gb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0geyAuLi5wcm9wcyB9ID5cclxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cclxuICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA/XHJcbiAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2xlZ2VuZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQ2hlY2tib3hHcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuQ2hlY2tib3hHcm91cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuIl19