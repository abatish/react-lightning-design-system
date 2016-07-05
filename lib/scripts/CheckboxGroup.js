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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ3hDLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QixDQUF4Qiw4Q0FBaUMsTUFBakMsSUFBeUMsS0FBekMsS0FBa0QsTUFBekQ7QUFDRCxDQUZEOztJQUlxQixhOzs7QUFDbkIseUJBQVksS0FBWixFQUFrQjtBQUFBOztBQUFBLHVIQUNWLEtBRFU7O0FBRWhCLFVBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsQ0FBYyxJQUFkLE9BQWhCO0FBQ0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUhnQjtBQUlqQjs7Ozs2QkFFUSxDLEVBQUc7QUFBQSxVQUNGLEtBREUsR0FDUSxLQUFLLEtBRGIsQ0FDRixLQURFOzs7QUFHVixVQUFNLGFBQWEsRUFBRSxNQUFGLENBQVMsT0FBVCxHQUNqQixlQUFlLEtBQWYsRUFBc0IsRUFBRSxNQUFGLENBQVMsS0FBL0IsQ0FEaUIsR0FFakIsTUFBTSxNQUFOLENBQWE7QUFBQSxlQUFPLE1BQU0sRUFBRSxNQUFGLENBQVMsS0FBdEI7QUFBQSxPQUFiLENBRkY7O0FBSUEsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEI7QUFDRDtBQUNGOzs7a0NBRWEsUSxFQUFVLEMsRUFBRztBQUN6QixVQUFNLGlDQUFVLFNBQVMsSUFBbkIsSUFBOEIsS0FBSyxLQUFuQyxDQUFOO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFmLEVBQXFCO0FBQ25CLGNBQU0sSUFBTixHQUFhLEtBQUssS0FBTCxDQUFXLElBQXhCO0FBQ0Q7QUFDRCxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsS0FBN0IsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDNkYsS0FBSyxLQURsRztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLEtBRFosVUFDWSxLQURaO0FBQUEsVUFDbUIsU0FEbkIsVUFDbUIsU0FEbkI7QUFBQSxVQUM4QixJQUQ5QixVQUM4QixJQUQ5QjtBQUFBLFVBQ29DLEtBRHBDLFVBQ29DLEtBRHBDO0FBQUEsVUFDMkMsUUFEM0MsVUFDMkMsUUFEM0M7QUFBQSxVQUNxRCxLQURyRCxVQUNxRCxLQURyRDtBQUFBLFVBQzRELFFBRDVELFVBQzRELFFBRDVEO0FBQUEsVUFDc0UsUUFEdEUsVUFDc0UsUUFEdEU7QUFBQSxVQUNtRixLQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBRHBCO0FBRUUsNEJBQW9CO0FBRnRCLE9BSG9CLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUF0RCxhQUE4RCxTQUE5RCxHQUE0RSxJQVB4RCxDQUF0QjtBQVNBLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBM0MsSUFBOEQsS0FBOUQsSUFBd0UsS0FBMUY7QUFDQSxVQUFNLGVBQ0osUUFDQyxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FDQSxRQUFPLEtBQVAsdURBQU8sS0FBUCxPQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQWxDLEdBQ0EsU0FIRCxHQUlBLFNBTEY7QUFNQSxhQUNFO0FBQUE7UUFBQSx5QkFBVSxXQUFZLGFBQXRCLEVBQXNDLE9BQVEsU0FBOUMsRUFBMEQsVUFBVyxLQUFLLFFBQTFFLElBQTBGLEtBQTFGO1FBQ0U7QUFBQTtVQUFBLEVBQVEsV0FBVSx3REFBbEI7VUFDSSxLQURKO1VBR0ksV0FDQTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQUE7QUFBQSxXQURBLEdBRUE7QUFMSixTQURGO1FBU0U7QUFBQTtVQUFBLEVBQUssV0FBVSw0QkFBZjtVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssYUFBbEMsQ0FESjtVQUdJLGVBQ0E7QUFBQTtZQUFBLEVBQUssV0FBVSx5QkFBZjtZQUEyQztBQUEzQyxXQURBLEdBRUE7QUFMSjtBQVRGLE9BREY7QUFvQkQ7OztFQWpFd0MsZ0JBQU0sUzs7a0JBQTVCLGE7OztBQXFFckIsY0FBYyxTQUFkLEdBQTBCO0FBQ3hCLGFBQVcsaUJBQVUsTUFERztBQUV4QixTQUFPLGlCQUFVLE1BRk87QUFHeEIsWUFBVSxpQkFBVSxJQUhJO0FBSXhCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUppQjtBQVd4QixRQUFNLGlCQUFVLE1BWFE7QUFZeEIsYUFBVyxpQkFBVSxNQVpHO0FBYXhCLFNBQU8saUJBQVUsTUFiTztBQWN4QixRQUFNLGlCQUFVLE1BZFE7QUFleEIsWUFBVSxpQkFBVSxJQWZJO0FBZ0J4QixZQUFVLGlCQUFVO0FBaEJJLENBQTFCOztBQW1CQSxjQUFjLGFBQWQsR0FBOEIsSUFBOUIiLCJmaWxlIjoiQ2hlY2tib3hHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBhZGRVbmlxdWVWYWx1ZSA9ICh2YWx1ZXMsIHZhbHVlKSA9PiB7XG4gIHJldHVybiB2YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPCAwID8gWyAuLi52YWx1ZXMsIHZhbHVlXSA6IHZhbHVlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNvbnRyb2wgPSB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZmluYWxWYWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQgP1xuICAgICAgYWRkVW5pcXVlVmFsdWUodmFsdWUsIGUudGFyZ2V0LnZhbHVlKSA6XG4gICAgICB2YWx1ZS5maWx0ZXIoaSA9PiAoIGkgIT09IGUudGFyZ2V0LnZhbHVlICkpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZmluYWxWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ29udHJvbChjaGVja2JveCwgaSkge1xuICAgIGNvbnN0IHByb3BzID0geyBncm91cGVkOiB0cnVlICwgLi4uIHRoaXMucHJvcHMgfTtcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoZWNrYm94LCBwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCByZXF1aXJlZCwgZXJyb3IsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IHsgLi4ucHJvcHMgfSA+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsLS10b3AnPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkID9cbiAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb250cm9sKSB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICApO1xuICB9XG5cbn1cblxuQ2hlY2tib3hHcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkNoZWNrYm94R3JvdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=