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
      return this.props.name ? _react2.default.cloneElement(radio, { name: this.props.name, onChange: this.onControlChange }) : radio;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsVTs7O0FBQ25CLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUdqQixVQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztvQ0FFZSxLLEVBQU8sQyxFQUFHO0FBQ3hCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCO0FBQ0Q7QUFDRjs7O2tDQUVhLEssRUFBTztBQUNuQixhQUNFLEtBQUssS0FBTCxDQUFXLElBQVgsR0FDQSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEVBQUUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFuQixFQUF5QixVQUFVLEtBQUssZUFBeEMsRUFBMUIsQ0FEQSxHQUVBLEtBSEY7QUFLRDs7OzZCQUVRO0FBQUEsbUJBQzZGLEtBQUssS0FEbEc7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxLQURaLFVBQ1ksS0FEWjtBQUFBLFVBQ21CLFFBRG5CLFVBQ21CLFFBRG5CO0FBQUEsVUFDNkIsS0FEN0IsVUFDNkIsS0FEN0I7QUFBQSxVQUNvQyxTQURwQyxVQUNvQyxTQURwQztBQUFBLFVBQytDLElBRC9DLFVBQytDLElBRC9DO0FBQUEsVUFDcUQsS0FEckQsVUFDcUQsS0FEckQ7QUFBQSxVQUM0RCxRQUQ1RCxVQUM0RCxRQUQ1RDtBQUFBLFVBQ3NFLFFBRHRFLFVBQ3NFLFFBRHRFO0FBQUEsVUFDbUYsS0FEbkY7O0FBRVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLG1CQUZvQixFQUdwQjtBQUNFLDBCQUFrQixLQURwQjtBQUVFLDRCQUFvQjtBQUZ0QixPQUhvQixFQU9wQixPQUFPLFNBQVAsS0FBcUIsUUFBckIsb0JBQThDLFFBQVEsQ0FBdEQsYUFBOEQsU0FBOUQsR0FBNEUsSUFQeEQsQ0FBdEI7QUFTQSxVQUFNLFlBQVksT0FBTyxTQUFQLEtBQXFCLFFBQXJCLDRCQUFrQyxTQUFTLGNBQTNDLElBQThELEtBQTlELElBQXdFLEtBQTFGO0FBQ0EsVUFBTSxrQkFBa0IsRUFBQyxTQUFTLE1BQVYsRUFBa0IsVUFBVSxZQUE1QixFQUF4QjtBQUNBLFVBQU0sZUFDSixRQUNDLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUNBLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWpCLEdBQTRCLE1BQU0sT0FBbEMsR0FDQSxTQUhELEdBSUEsU0FMRjtBQU1BLGFBQ0U7QUFBQTtRQUFBLHlCQUFVLFVBQVcsUUFBckIsRUFBZ0MsV0FBWSxhQUE1QyxFQUE0RCxPQUFRLFNBQXBFLElBQXFGLEtBQXJGO1FBQ0U7QUFBQTtVQUFBLEVBQVEsV0FBVSx3REFBbEI7VUFDSSxLQURKO1VBR0ksV0FDQTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQUE7QUFBQSxXQURBLEdBRUE7QUFMSixTQURGO1FBU0U7QUFBQTtVQUFBLEVBQUssV0FBVSw0QkFBZixFQUE0QyxPQUFPLEtBQUssS0FBTCxDQUFXLFNBQVgsS0FBeUIsWUFBekIsR0FBd0MsZUFBeEMsR0FBeUQsRUFBNUc7VUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGFBQWxDLENBREo7VUFHSSxlQUNBO0FBQUE7WUFBQSxFQUFLLFdBQVUseUJBQWY7WUFBMkM7QUFBM0MsV0FEQSxHQUVBO0FBTEo7QUFURixPQURGO0FBb0JEOzs7RUE3RHFDLGdCQUFNLFM7O2tCQUF6QixVOzs7QUFpRXJCLFdBQVcsU0FBWCxHQUF1QjtBQUNyQixhQUFXLGlCQUFVLE1BREE7QUFFckIsU0FBTyxpQkFBVSxNQUZJO0FBR3JCLFlBQVUsaUJBQVUsSUFIQztBQUlyQixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFEZSxFQUV6QixpQkFBVSxNQUZlLEVBR3pCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FKYztBQVdyQixRQUFNLGlCQUFVLE1BWEs7QUFZckIsWUFBVSxpQkFBVSxJQVpDO0FBYXJCLGFBQVcsaUJBQVUsTUFiQTtBQWNyQixRQUFNLGlCQUFVLE1BZEs7QUFlckIsU0FBTyxpQkFBVSxNQWZJO0FBZ0JyQixZQUFVLGlCQUFVO0FBaEJDLENBQXZCOztBQW1CQSxXQUFXLGFBQVgsR0FBMkIsSUFBM0IiLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm9uQ29udHJvbENoYW5nZSA9IHRoaXMub25Db250cm9sQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJDb250cm9sID0gdGhpcy5yZW5kZXJDb250cm9sLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNvbnRyb2xDaGFuZ2UodmFsdWUsIGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ29udHJvbChyYWRpbykge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLm5hbWUgP1xuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHJhZGlvLCB7IG5hbWU6IHRoaXMucHJvcHMubmFtZSwgb25DaGFuZ2U6IHRoaXMub25Db250cm9sQ2hhbmdlIH0gKSA6XG4gICAgICByYWRpb1xuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgc3R5bGUsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XG4gICAgY29uc3QgaG9yaXpvbnRhbFN0eWxlID0ge2Rpc3BsYXk6ICdmbGV4JyxcdGZsZXhGbG93OiAncm93IG5vd3JhcCd9O1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XG4gICAgICBlcnJvciA/XG4gICAgICAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDpcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICAgdW5kZWZpbmVkKSA6XG4gICAgICB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmaWVsZHNldCBvbkNoYW5nZT17IG9uQ2hhbmdlIH0gY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9IHN0eWxlPXsgZ3JwU3R5bGVzIH0geyAuLi5wcm9wcyB9ID5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnIHN0eWxlPXt0aGlzLnByb3BzLmFsaWdubWVudCA9PT0gJ2hvcml6b250YWwnID8gaG9yaXpvbnRhbFN0eWxlIDp7fX0+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5SYWRpb0dyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19