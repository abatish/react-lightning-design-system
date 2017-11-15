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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this));

    _this.renderControl = _this.renderControl.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'onControlChange',
    value: function onControlChange(value, e) {
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(radio) {
      return this.props.name ? _react2.default.cloneElement(radio, {
        name: this.props.name,
        onChange: this.onControlChange.bind(this, radio.props.value)
      }) : radio;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          label = _props.label,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          style = _props.style,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'required', 'error', 'totalCols', 'cols', 'style', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;

      delete props.onChange;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles }, props),
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
  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  children: _react.PropTypes.node,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object
};

RadioGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOlsiUmFkaW9Hcm91cCIsInJlbmRlckNvbnRyb2wiLCJiaW5kIiwidmFsdWUiLCJlIiwicHJvcHMiLCJvbkNoYW5nZSIsInJhZGlvIiwibmFtZSIsImNsb25lRWxlbWVudCIsIm9uQ29udHJvbENoYW5nZSIsImNsYXNzTmFtZSIsImxhYmVsIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJzdHlsZSIsImNoaWxkcmVuIiwiZ3JwQ2xhc3NOYW1lcyIsImdycFN0eWxlcyIsImRpc3BsYXkiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiQ2hpbGRyZW4iLCJtYXAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIm51bWJlciIsIm5vZGUiLCJvYmplY3QiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7QUFDbkIsd0JBQWM7QUFBQTs7QUFBQTs7QUFHWixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBSFk7QUFJYjs7OztvQ0FFZUMsSyxFQUFPQyxDLEVBQUc7QUFDeEIsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQixFQUF1QkQsS0FBdkI7QUFDRDtBQUNGOzs7a0NBRWFJLEssRUFBTztBQUNuQixhQUNFLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxHQUNFLGdCQUFNQyxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUN4QkMsY0FBTSxLQUFLSCxLQUFMLENBQVdHLElBRE87QUFFeEJGLGtCQUFVLEtBQUtJLGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCLElBQTFCLEVBQWdDSyxNQUFNRixLQUFOLENBQVlGLEtBQTVDO0FBRmMsT0FBMUIsQ0FERixHQUtFSSxLQU5KO0FBUUQ7Ozs2QkFFUTtBQUFBLG1CQUdILEtBQUtGLEtBSEY7QUFBQSxVQUVMTSxTQUZLLFVBRUxBLFNBRks7QUFBQSxVQUVNQyxLQUZOLFVBRU1BLEtBRk47QUFBQSxVQUVhQyxRQUZiLFVBRWFBLFFBRmI7QUFBQSxVQUV1QkMsS0FGdkIsVUFFdUJBLEtBRnZCO0FBQUEsVUFFOEJDLFNBRjlCLFVBRThCQSxTQUY5QjtBQUFBLFVBRXlDQyxJQUZ6QyxVQUV5Q0EsSUFGekM7QUFBQSxVQUUrQ0MsS0FGL0MsVUFFK0NBLEtBRi9DO0FBQUEsVUFFc0RDLFFBRnRELFVBRXNEQSxRQUZ0RDtBQUFBLFVBRW1FYixLQUZuRTs7QUFJUCxVQUFNYyxnQkFBZ0IsMEJBQ3BCUixTQURvQixFQUVwQixtQkFGb0IsRUFHcEI7QUFDRSwwQkFBa0JHLEtBRHBCO0FBRUUsNEJBQW9CRDtBQUZ0QixPQUhvQixFQU9wQixPQUFPRSxTQUFQLEtBQXFCLFFBQXJCLG9CQUE4Q0MsUUFBUSxDQUF0RCxhQUE4REQsU0FBOUQsR0FBNEUsSUFQeEQsQ0FBdEI7QUFTQSxVQUFNSyxZQUFZLE9BQU9MLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDTSxTQUFTLGNBQTNDLElBQThESixLQUE5RCxJQUF3RUEsS0FBMUY7QUFDQSxVQUFNSyxlQUNKUixRQUNDLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQ0EsUUFBT0EsS0FBUCx1REFBT0EsS0FBUCxPQUFpQixRQUFqQixHQUE0QkEsTUFBTVMsT0FBbEMsR0FDQUMsU0FIRCxHQUlBQSxTQUxGOztBQU9BLGFBQU9uQixNQUFNQyxRQUFiO0FBQ0EsYUFDRTtBQUFBO0FBQUEsaUNBQVUsV0FBWWEsYUFBdEIsRUFBc0MsT0FBUUMsU0FBOUMsSUFBK0RmLEtBQS9EO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSx3REFBbEI7QUFDSU8sZUFESjtBQUdJQyxxQkFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGVBQWhCO0FBQUE7QUFBQSxXQURGLEdBRUVXO0FBTE4sU0FERjtBQVNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsNEJBQWY7QUFDSSwwQkFBTUMsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixLQUFLakIsYUFBbEMsQ0FESjtBQUdJcUIseUJBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUEyQ0E7QUFBM0MsV0FERixHQUVFRTtBQUxOO0FBVEYsT0FERjtBQW9CRDs7O0VBbEVxQyxnQkFBTUcsUzs7a0JBQXpCM0IsVTs7O0FBc0VyQkEsV0FBVzRCLFNBQVgsR0FBdUI7QUFDckJqQixhQUFXLGlCQUFVa0IsTUFEQTtBQUVyQmpCLFNBQU8saUJBQVVpQixNQUZJO0FBR3JCaEIsWUFBVSxpQkFBVWlCLElBSEM7QUFJckJoQixTQUFPLHNCQUFZYyxTQUFaLENBQXNCZCxLQUpSO0FBS3JCTixRQUFNLGlCQUFVcUIsTUFMSztBQU1yQnZCLFlBQVUsaUJBQVV5QixJQU5DO0FBT3JCaEIsYUFBVyxpQkFBVWlCLE1BUEE7QUFRckJoQixRQUFNLGlCQUFVZ0IsTUFSSztBQVNyQmQsWUFBVSxpQkFBVWUsSUFUQztBQVVyQjtBQUNBaEIsU0FBTyxpQkFBVWlCO0FBWEksQ0FBdkI7O0FBY0FsQyxXQUFXbUMsYUFBWCxHQUEyQixJQUEzQiIsImZpbGUiOiJSYWRpb0dyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVuZGVyQ29udHJvbCA9IHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25Db250cm9sQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocmFkaW8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5uYW1lID9cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHJhZGlvLCB7XG4gICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ29udHJvbENoYW5nZS5iaW5kKHRoaXMsIHJhZGlvLnByb3BzLnZhbHVlKSxcbiAgICAgICAgfSkgOlxuICAgICAgICByYWRpb1xuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgIHVuZGVmaW5lZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9IHN0eWxlPXsgZ3JwU3R5bGVzIH0geyAuLi5wcm9wcyB9ID5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb250cm9sKSB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9kaXY+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuUmFkaW9Hcm91cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==