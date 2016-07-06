'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
      var props = (0, _extends3.default)({ grouped: true }, this.props);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ3hDLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QixDQUF4Qiw4Q0FBaUMsTUFBakMsSUFBeUMsS0FBekMsS0FBa0QsTUFBekQ7QUFDRCxDQUZEOztJQUlxQixhOzs7QUFDbkIseUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHVIQUNWLEtBRFU7O0FBRWhCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUhnQjtBQUlqQjs7Ozs2QkFFUSxDLEVBQUc7QUFBQSxVQUNGLEtBREUsR0FDUSxLQUFLLEtBRGIsQ0FDRixLQURFOzs7QUFHVixVQUFNLGFBQWEsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUNqQixlQUFlLEtBQWYsRUFBc0IsRUFBRSxNQUFGLENBQVMsS0FBL0IsQ0FEaUIsR0FFakIsTUFBTSxNQUFOLENBQWE7QUFBQSxlQUFPLE1BQU0sRUFBRSxNQUFGLENBQVMsS0FBdEI7QUFBQSxPQUFiLENBRkY7O0FBSUEsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEI7QUFDRDtBQUNGOzs7a0NBRWEsUSxFQUFVLEMsRUFBRztBQUN6QixVQUFNLGlDQUFVLFNBQVMsSUFBbkIsSUFBOEIsS0FBSyxLQUFuQyxDQUFOO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFmLEVBQXFCO0FBQ25CLGNBQU0sSUFBTixHQUFhLEtBQUssS0FBTCxDQUFXLElBQXhCO0FBQ0Q7QUFDRCxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsS0FBN0IsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDNkYsS0FBSyxLQURsRztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLEtBRFosVUFDWSxLQURaO0FBQUEsVUFDbUIsU0FEbkIsVUFDbUIsU0FEbkI7QUFBQSxVQUM4QixJQUQ5QixVQUM4QixJQUQ5QjtBQUFBLFVBQ29DLEtBRHBDLFVBQ29DLEtBRHBDO0FBQUEsVUFDMkMsUUFEM0MsVUFDMkMsUUFEM0M7QUFBQSxVQUNxRCxLQURyRCxVQUNxRCxLQURyRDtBQUFBLFVBQzRELFFBRDVELFVBQzRELFFBRDVEO0FBQUEsVUFDc0UsUUFEdEUsVUFDc0UsUUFEdEU7QUFBQSxVQUNtRixLQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBRHBCO0FBRUUsNEJBQW9CO0FBRnRCLE9BSG9CLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUF0RCxhQUE4RCxTQUE5RCxHQUE0RSxJQVB4RCxDQUF0QjtBQVNBLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBM0MsSUFBOEQsS0FBOUQsSUFBd0UsS0FBMUY7QUFDQSxVQUFNLGtCQUFrQixFQUFDLFNBQVMsTUFBVixFQUFrQixVQUFVLFlBQTVCLEVBQXhCO0FBQ0EsVUFBTSxlQUNKLFFBQ0MsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLEtBQTVCLEdBQ0EsUUFBTyxLQUFQLHVEQUFPLEtBQVAsT0FBaUIsUUFBakIsR0FBNEIsTUFBTSxPQUFsQyxHQUNBLFNBSEQsR0FJQSxTQUxGO0FBTUEsYUFDRTtBQUFBO1FBQUEseUJBQVUsV0FBWSxhQUF0QixFQUFzQyxPQUFRLFNBQTlDLEVBQTBELFVBQVcsS0FBSyxRQUExRSxJQUEwRixLQUExRjtRQUNFO0FBQUE7VUFBQSxFQUFRLFdBQVUsd0RBQWxCO1VBQ0ksS0FESjtVQUdJLFdBQ0E7QUFBQTtZQUFBLEVBQU0sV0FBVSxlQUFoQjtZQUFBO0FBQUEsV0FEQSxHQUVBO0FBTEosU0FERjtRQVNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEtBQXlCLFlBQXpCLEdBQXdDLGVBQXhDLEdBQXlELEVBQTVHO1VBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxhQUFsQyxDQURKO1VBR0ksZUFDQTtBQUFBO1lBQUEsRUFBSyxXQUFVLHlCQUFmO1lBQTJDO0FBQTNDLFdBREEsR0FFQTtBQUxKO0FBVEYsT0FERjtBQW9CRDs7O0VBbEV3QyxnQkFBTSxTOztrQkFBNUIsYTs7O0FBc0VyQixjQUFjLFNBQWQsR0FBMEI7QUFDeEIsYUFBVyxpQkFBVSxNQURHO0FBRXhCLFNBQU8saUJBQVUsTUFGTztBQUd4QixZQUFVLGlCQUFVLElBSEk7QUFJeEIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBSmlCO0FBV3hCLFFBQU0saUJBQVUsTUFYUTtBQVl4QixhQUFXLGlCQUFVLE1BWkc7QUFheEIsU0FBTyxpQkFBVSxNQWJPO0FBY3hCLFFBQU0saUJBQVUsTUFkUTtBQWV4QixZQUFVLGlCQUFVLElBZkk7QUFnQnhCLFlBQVUsaUJBQVU7QUFoQkksQ0FBMUI7O0FBbUJBLGNBQWMsYUFBZCxHQUE4QixJQUE5QiIsImZpbGUiOiJDaGVja2JveEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IGFkZFVuaXF1ZVZhbHVlID0gKHZhbHVlcywgdmFsdWUpID0+IHtcbiAgcmV0dXJuIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA8IDAgPyBbIC4uLnZhbHVlcywgdmFsdWVdIDogdmFsdWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyQ29udHJvbCA9IHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBmaW5hbFZhbHVlID0gZS50YXJnZXQuY2hlY2tlZCA/XG4gICAgICBhZGRVbmlxdWVWYWx1ZSh2YWx1ZSwgZS50YXJnZXQudmFsdWUpIDpcbiAgICAgIHZhbHVlLmZpbHRlcihpID0+ICggaSAhPT0gZS50YXJnZXQudmFsdWUgKSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShmaW5hbFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDb250cm9sKGNoZWNrYm94LCBpKSB7XG4gICAgY29uc3QgcHJvcHMgPSB7IGdyb3VwZWQ6IHRydWUgLCAuLi4gdGhpcy5wcm9wcyB9O1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHByb3BzLm5hbWUgPSB0aGlzLnByb3BzLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hlY2tib3gsIHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIHRvdGFsQ29scywgY29scywgc3R5bGUsIHJlcXVpcmVkLCBlcnJvciwgb25DaGFuZ2UsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBob3Jpem9udGFsU3R5bGUgPSB7ZGlzcGxheTogJ2ZsZXgnLFx0ZmxleEZsb3c6ICdyb3cgbm93cmFwJ307XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHsgLi4ucHJvcHMgfSA+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsLS10b3AnPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkID9cbiAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyBzdHlsZT17dGhpcy5wcm9wcy5hbGlnbm1lbnQgPT09ICdob3Jpem9udGFsJyA/IGhvcml6b250YWxTdHlsZSA6e319PlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNvbnRyb2wpIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9kaXY+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KSxcbiAgXSksXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuQ2hlY2tib3hHcm91cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==