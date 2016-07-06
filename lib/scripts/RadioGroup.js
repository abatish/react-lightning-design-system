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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup(props) {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).call(this, props));

    _this.onControlChange = _this.onControlChange.bind(_this);
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
      return this.props.name ? _react2.default.cloneElement(radio, (0, _extends3.default)({ name: this.props.name, onChange: this.onControlChange }, this.props)) : radio;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var style = _props.style;
      var onChange = _props.onChange;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'required', 'error', 'totalCols', 'cols', 'style', 'onChange', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var horizontalStyle = { display: 'flex', flexFlow: 'row nowrap' };
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ onChange: onChange, className: grpClassNames, style: grpStyles }, props),
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
  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};

RadioGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsVTs7O0FBQ25CLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUdqQixVQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztvQ0FFZSxLLEVBQU8sQyxFQUFHO0FBQ3hCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCO0FBQ0Q7QUFDRjs7O2tDQUVhLEssRUFBTztBQUNuQixhQUNFLEtBQUssS0FBTCxDQUFXLElBQVgsR0FDQSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLDJCQUE0QixNQUFNLEtBQUssS0FBTCxDQUFXLElBQTdDLEVBQW1ELFVBQVUsS0FBSyxlQUFsRSxJQUF1RixLQUFLLEtBQTVGLEVBREEsR0FFQSxLQUhGO0FBS0Q7Ozs2QkFFUTtBQUFBLG1CQUM2RixLQUFLLEtBRGxHO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixVQUNtQixRQURuQjtBQUFBLFVBQzZCLEtBRDdCLFVBQzZCLEtBRDdCO0FBQUEsVUFDb0MsU0FEcEMsVUFDb0MsU0FEcEM7QUFBQSxVQUMrQyxJQUQvQyxVQUMrQyxJQUQvQztBQUFBLFVBQ3FELEtBRHJELFVBQ3FELEtBRHJEO0FBQUEsVUFDNEQsUUFENUQsVUFDNEQsUUFENUQ7QUFBQSxVQUNzRSxRQUR0RSxVQUNzRSxRQUR0RTtBQUFBLFVBQ21GLEtBRG5GOztBQUVQLFVBQU0sZ0JBQWdCLDBCQUNwQixTQURvQixFQUVwQixtQkFGb0IsRUFHcEI7QUFDRSwwQkFBa0IsS0FEcEI7QUFFRSw0QkFBb0I7QUFGdEIsT0FIb0IsRUFPcEIsT0FBTyxTQUFQLEtBQXFCLFFBQXJCLG9CQUE4QyxRQUFRLENBQXRELGFBQThELFNBQTlELEdBQTRFLElBUHhELENBQXRCO0FBU0EsVUFBTSxZQUFZLE9BQU8sU0FBUCxLQUFxQixRQUFyQiw0QkFBa0MsU0FBUyxjQUEzQyxJQUE4RCxLQUE5RCxJQUF3RSxLQUExRjtBQUNBLFVBQU0sa0JBQWtCLEVBQUMsU0FBUyxNQUFWLEVBQWtCLFVBQVUsWUFBNUIsRUFBeEI7QUFDQSxVQUFNLGVBQ0osUUFDQyxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FDQSxRQUFPLEtBQVAsdURBQU8sS0FBUCxPQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQWxDLEdBQ0EsU0FIRCxHQUlBLFNBTEY7QUFNQSxhQUNFO0FBQUE7UUFBQSx5QkFBVSxVQUFXLFFBQXJCLEVBQWdDLFdBQVksYUFBNUMsRUFBNEQsT0FBUSxTQUFwRSxJQUFxRixLQUFyRjtRQUNFO0FBQUE7VUFBQSxFQUFRLFdBQVUsd0RBQWxCO1VBQ0ksS0FESjtVQUdJLFdBQ0E7QUFBQTtZQUFBLEVBQU0sV0FBVSxlQUFoQjtZQUFBO0FBQUEsV0FEQSxHQUVBO0FBTEosU0FERjtRQVNFO0FBQUE7VUFBQSxFQUFLLFdBQVUsNEJBQWYsRUFBNEMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLEtBQXlCLFlBQXpCLEdBQXdDLGVBQXhDLEdBQXlELEVBQTVHO1VBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxhQUFsQyxDQURKO1VBR0ksZUFDQTtBQUFBO1lBQUEsRUFBSyxXQUFVLHlCQUFmO1lBQTJDO0FBQTNDLFdBREEsR0FFQTtBQUxKO0FBVEYsT0FERjtBQW9CRDs7O0VBN0RxQyxnQkFBTSxTOztrQkFBekIsVTs7O0FBaUVyQixXQUFXLFNBQVgsR0FBdUI7QUFDckIsYUFBVyxpQkFBVSxNQURBO0FBRXJCLFNBQU8saUJBQVUsTUFGSTtBQUdyQixZQUFVLGlCQUFVLElBSEM7QUFJckIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBSmM7QUFXckIsUUFBTSxpQkFBVSxNQVhLO0FBWXJCLFlBQVUsaUJBQVUsSUFaQztBQWFyQixhQUFXLGlCQUFVLE1BYkE7QUFjckIsUUFBTSxpQkFBVSxNQWRLO0FBZXJCLFNBQU8saUJBQVUsTUFmSTtBQWdCckIsWUFBVSxpQkFBVTtBQWhCQyxDQUF2Qjs7QUFtQkEsV0FBVyxhQUFYLEdBQTJCLElBQTNCIiwiZmlsZSI6IlJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5vbkNvbnRyb2xDaGFuZ2UgPSB0aGlzLm9uQ29udHJvbENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyQ29udHJvbCA9IHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25Db250cm9sQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocmFkaW8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5uYW1lID9cbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChyYWRpbywgeyBuYW1lOiB0aGlzLnByb3BzLm5hbWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ29udHJvbENoYW5nZSAsIC4uLnRoaXMucHJvcHMgfSApIDpcbiAgICAgIHJhZGlvXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCBzdHlsZSwgb25DaGFuZ2UsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBob3Jpem9udGFsU3R5bGUgPSB7ZGlzcGxheTogJ2ZsZXgnLFx0ZmxleEZsb3c6ICdyb3cgbm93cmFwJ307XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IG9uQ2hhbmdlPXsgb25DaGFuZ2UgfSBjbGFzc05hbWU9eyBncnBDbGFzc05hbWVzIH0gc3R5bGU9eyBncnBTdHlsZXMgfSB7IC4uLnByb3BzIH0gPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcgc3R5bGU9e3RoaXMucHJvcHMuYWxpZ25tZW50ID09PSAnaG9yaXpvbnRhbCcgPyBob3Jpem9udGFsU3R5bGUgOnt9fT5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb250cm9sKSB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICApO1xuICB9XG5cbn1cblxuUmFkaW9Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblJhZGlvR3JvdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=