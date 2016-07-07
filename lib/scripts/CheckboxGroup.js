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
      var horizontalStyle = { display: 'flex', flexFlow: 'row nowrap' };
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
          { className: 'slds-form-element__control', style: this.props.alignment === 'horizontal' ? horizontalStyle : {} },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ3hDLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QixDQUF4Qiw4Q0FBaUMsTUFBakMsSUFBeUMsS0FBekMsS0FBa0QsTUFBekQ7QUFDRCxDQUZEOztJQUlxQixhOzs7QUFDbkIseUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHVIQUNWLEtBRFU7O0FBRWhCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUhnQjtBQUlqQjs7Ozs2QkFFUSxDLEVBQUc7QUFBQSxVQUNGLEtBREUsR0FDUSxLQUFLLEtBRGIsQ0FDRixLQURFOzs7QUFHVixVQUFNLGFBQWEsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUNqQixlQUFlLEtBQWYsRUFBc0IsRUFBRSxNQUFGLENBQVMsS0FBL0IsQ0FEaUIsR0FFakIsTUFBTSxNQUFOLENBQWE7QUFBQSxlQUFPLE1BQU0sRUFBRSxNQUFGLENBQVMsS0FBdEI7QUFBQSxPQUFiLENBRkY7O0FBSUEsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEI7QUFDRDtBQUNGOzs7a0NBRWEsUSxFQUFVLEMsRUFBRztBQUN6QixVQUFNLFFBQVEsRUFBRSxTQUFTLElBQVgsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsSUFBZixFQUFxQjtBQUNuQixjQUFNLElBQU4sR0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUF4QjtBQUNEO0FBQ0QsYUFBTyxnQkFBTSxZQUFOLENBQW1CLFFBQW5CLEVBQTZCLEtBQTdCLENBQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQzZGLEtBQUssS0FEbEc7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxLQURaLFVBQ1ksS0FEWjtBQUFBLFVBQ21CLFNBRG5CLFVBQ21CLFNBRG5CO0FBQUEsVUFDOEIsSUFEOUIsVUFDOEIsSUFEOUI7QUFBQSxVQUNvQyxLQURwQyxVQUNvQyxLQURwQztBQUFBLFVBQzJDLFFBRDNDLFVBQzJDLFFBRDNDO0FBQUEsVUFDcUQsS0FEckQsVUFDcUQsS0FEckQ7QUFBQSxVQUM0RCxRQUQ1RCxVQUM0RCxRQUQ1RDtBQUFBLFVBQ3NFLFFBRHRFLFVBQ3NFLFFBRHRFO0FBQUEsVUFDbUYsS0FEbkY7O0FBRVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLG1CQUZvQixFQUdwQjtBQUNFLDBCQUFrQixLQURwQjtBQUVFLDRCQUFvQjtBQUZ0QixPQUhvQixFQU9wQixPQUFPLFNBQVAsS0FBcUIsUUFBckIsb0JBQThDLFFBQVEsQ0FBdEQsYUFBOEQsU0FBOUQsR0FBNEUsSUFQeEQsQ0FBdEI7QUFTQSxVQUFNLFlBQVksT0FBTyxTQUFQLEtBQXFCLFFBQXJCLDRCQUFrQyxTQUFTLGNBQTNDLElBQThELEtBQTlELElBQXdFLEtBQTFGO0FBQ0EsVUFBTSxrQkFBa0IsRUFBQyxTQUFTLE1BQVYsRUFBa0IsVUFBVSxZQUE1QixFQUF4QjtBQUNBLFVBQU0sZUFDSixRQUNDLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUNBLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWpCLEdBQTRCLE1BQU0sT0FBbEMsR0FDQSxTQUhELEdBSUEsU0FMRjtBQU1BLGFBQ0U7QUFBQTtRQUFBLHlCQUFVLFdBQVksYUFBdEIsRUFBc0MsT0FBUSxTQUE5QyxFQUEwRCxVQUFXLEtBQUssUUFBMUUsSUFBMEYsS0FBMUY7UUFDRTtBQUFBO1VBQUEsRUFBUSxXQUFVLHdEQUFsQjtVQUNJLEtBREo7VUFHSSxXQUNBO0FBQUE7WUFBQSxFQUFNLFdBQVUsZUFBaEI7WUFBQTtBQUFBLFdBREEsR0FFQTtBQUxKLFNBREY7UUFTRTtBQUFBO1VBQUEsRUFBSyxXQUFVLDRCQUFmLEVBQTRDLE9BQU8sS0FBSyxLQUFMLENBQVcsU0FBWCxLQUF5QixZQUF6QixHQUF3QyxlQUF4QyxHQUF5RCxFQUE1RztVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssYUFBbEMsQ0FESjtVQUdJLGVBQ0E7QUFBQTtZQUFBLEVBQUssV0FBVSx5QkFBZjtZQUEyQztBQUEzQyxXQURBLEdBRUE7QUFMSjtBQVRGLE9BREY7QUFvQkQ7OztFQWxFd0MsZ0JBQU0sUzs7a0JBQTVCLGE7OztBQXNFckIsY0FBYyxTQUFkLEdBQTBCO0FBQ3hCLGFBQVcsaUJBQVUsTUFERztBQUV4QixTQUFPLGlCQUFVLE1BRk87QUFHeEIsWUFBVSxpQkFBVSxJQUhJO0FBSXhCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUppQjtBQVd4QixRQUFNLGlCQUFVLE1BWFE7QUFZeEIsYUFBVyxpQkFBVSxNQVpHO0FBYXhCLFNBQU8saUJBQVUsTUFiTztBQWN4QixRQUFNLGlCQUFVLE1BZFE7QUFleEIsWUFBVSxpQkFBVSxJQWZJO0FBZ0J4QixZQUFVLGlCQUFVO0FBaEJJLENBQTFCOztBQW1CQSxjQUFjLGFBQWQsR0FBOEIsSUFBOUIiLCJmaWxlIjoiQ2hlY2tib3hHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBhZGRVbmlxdWVWYWx1ZSA9ICh2YWx1ZXMsIHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPCAwID8gWyAuLi52YWx1ZXMsIHZhbHVlXSA6IHZhbHVlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNvbnRyb2wgPSB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZmluYWxWYWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQgP1xuICAgICAgYWRkVW5pcXVlVmFsdWUodmFsdWUsIGUudGFyZ2V0LnZhbHVlKSA6XG4gICAgICB2YWx1ZS5maWx0ZXIoaSA9PiAoIGkgIT09IGUudGFyZ2V0LnZhbHVlICkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZmluYWxWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ29udHJvbChjaGVja2JveCwgaSkge1xuICAgIGNvbnN0IHByb3BzID0geyBncm91cGVkOiB0cnVlIH07XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSkge1xuICAgICAgcHJvcHMubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGVja2JveCwgcHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBsYWJlbCwgdG90YWxDb2xzLCBjb2xzLCBzdHlsZSwgcmVxdWlyZWQsIGVycm9yLCBvbkNoYW5nZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGdycENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50JyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXG4gICAgICAgICdzbGRzLWlzLXJlcXVpcmVkJzogcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyBgc2xkcy1zaXplLS0ke2NvbHMgfHwgMX0tb2YtJHt0b3RhbENvbHN9YCA6IG51bGxcbiAgICApO1xuICAgIGNvbnN0IGdycFN0eWxlcyA9IHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgLi4uc3R5bGUgfSA6IHN0eWxlO1xuICAgIGNvbnN0IGhvcml6b250YWxTdHlsZSA9IHtkaXNwbGF5OiAnZmxleCcsXHRmbGV4RmxvdzogJ3JvdyBub3dyYXAnfTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgIHVuZGVmaW5lZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuICAgIHJldHVybiAoXG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9IHN0eWxlPXsgZ3JwU3R5bGVzIH0gb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0geyAuLi5wcm9wcyB9ID5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnIHN0eWxlPXt0aGlzLnByb3BzLmFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gaG9yaXpvbnRhbFN0eWxlIDp7fX0+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbkNoZWNrYm94R3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5DaGVja2JveEdyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19