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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsVTs7O0FBQ25CLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWCxLQURXOztBQUdqQixVQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUppQjtBQUtsQjs7OztvQ0FFZSxLLEVBQU8sQyxFQUFHO0FBQ3hCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCO0FBQ0Q7QUFDRjs7O2tDQUVhLEssRUFBTztBQUNuQixhQUNFLEtBQUssS0FBTCxDQUFXLElBQVgsR0FDQSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLDJCQUE0QixNQUFNLEtBQUssS0FBTCxDQUFXLElBQTdDLEVBQW1ELFVBQVUsS0FBSyxlQUFsRSxJQUF1RixLQUFLLEtBQTVGLEVBREEsR0FFQSxLQUhGO0FBS0Q7Ozs2QkFFUTtBQUFBLG1CQUM2RixLQUFLLEtBRGxHO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixVQUNtQixRQURuQjtBQUFBLFVBQzZCLEtBRDdCLFVBQzZCLEtBRDdCO0FBQUEsVUFDb0MsU0FEcEMsVUFDb0MsU0FEcEM7QUFBQSxVQUMrQyxJQUQvQyxVQUMrQyxJQUQvQztBQUFBLFVBQ3FELEtBRHJELFVBQ3FELEtBRHJEO0FBQUEsVUFDNEQsUUFENUQsVUFDNEQsUUFENUQ7QUFBQSxVQUNzRSxRQUR0RSxVQUNzRSxRQUR0RTtBQUFBLFVBQ21GLEtBRG5GOztBQUVQLFVBQU0sZ0JBQWdCLDBCQUNwQixTQURvQixFQUVwQixtQkFGb0IsRUFHcEI7QUFDRSwwQkFBa0IsS0FEcEI7QUFFRSw0QkFBb0I7QUFGdEIsT0FIb0IsRUFPcEIsT0FBTyxTQUFQLEtBQXFCLFFBQXJCLG9CQUE4QyxRQUFRLENBQXRELGFBQThELFNBQTlELEdBQTRFLElBUHhELENBQXRCO0FBU0EsVUFBTSxZQUFZLE9BQU8sU0FBUCxLQUFxQixRQUFyQiw0QkFBa0MsU0FBUyxjQUEzQyxJQUE4RCxLQUE5RCxJQUF3RSxLQUExRjtBQUNBLFVBQU0sZUFDSixRQUNDLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUNBLFFBQU8sS0FBUCx1REFBTyxLQUFQLE9BQWlCLFFBQWpCLEdBQTRCLE1BQU0sT0FBbEMsR0FDQSxTQUhELEdBSUEsU0FMRjtBQU1BLGFBQ0U7QUFBQTtRQUFBLHlCQUFVLFVBQVcsUUFBckIsRUFBZ0MsV0FBWSxhQUE1QyxFQUE0RCxPQUFRLFNBQXBFLElBQXFGLEtBQXJGO1FBQ0U7QUFBQTtVQUFBLEVBQVEsV0FBVSx3REFBbEI7VUFDSSxLQURKO1VBR0ksV0FDQTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQUE7QUFBQSxXQURBLEdBRUE7QUFMSixTQURGO1FBU0U7QUFBQTtVQUFBLEVBQUssV0FBVSw0QkFBZjtVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssYUFBbEMsQ0FESjtVQUdJLGVBQ0E7QUFBQTtZQUFBLEVBQUssV0FBVSx5QkFBZjtZQUEyQztBQUEzQyxXQURBLEdBRUE7QUFMSjtBQVRGLE9BREY7QUFvQkQ7OztFQTVEcUMsZ0JBQU0sUzs7a0JBQXpCLFU7OztBQWdFckIsV0FBVyxTQUFYLEdBQXVCO0FBQ3JCLGFBQVcsaUJBQVUsTUFEQTtBQUVyQixTQUFPLGlCQUFVLE1BRkk7QUFHckIsWUFBVSxpQkFBVSxJQUhDO0FBSXJCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUpjO0FBV3JCLFFBQU0saUJBQVUsTUFYSztBQVlyQixZQUFVLGlCQUFVLElBWkM7QUFhckIsYUFBVyxpQkFBVSxNQWJBO0FBY3JCLFFBQU0saUJBQVUsTUFkSztBQWVyQixTQUFPLGlCQUFVLE1BZkk7QUFnQnJCLFlBQVUsaUJBQVU7QUFoQkMsQ0FBdkI7O0FBbUJBLFdBQVcsYUFBWCxHQUEyQixJQUEzQiIsImZpbGUiOiJSYWRpb0dyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMub25Db250cm9sQ2hhbmdlID0gdGhpcy5vbkNvbnRyb2xDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNvbnRyb2wgPSB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ29udHJvbENoYW5nZSh2YWx1ZSwgZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDb250cm9sKHJhZGlvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMubmFtZSA/XG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQocmFkaW8sIHsgbmFtZTogdGhpcy5wcm9wcy5uYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNvbnRyb2xDaGFuZ2UgLCAuLi50aGlzLnByb3BzIH0gKSA6XG4gICAgICByYWRpb1xuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgc3R5bGUsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IG9uQ2hhbmdlPXsgb25DaGFuZ2UgfSBjbGFzc05hbWU9eyBncnBDbGFzc05hbWVzIH0gc3R5bGU9eyBncnBTdHlsZXMgfSB7IC4uLnByb3BzIH0gPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCc+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5SYWRpb0dyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19