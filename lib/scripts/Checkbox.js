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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var className = _ref.className;
      var label = _ref.label;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        (0, _extends3.default)({ className: checkClassNames }, props),
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props)),
        _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label' },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var grouped = _props.grouped;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  grouped: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQixROzs7Ozs7Ozs7O3lDQUU0QjtBQUFBLFVBQTlCLFNBQThCLFFBQTlCLFNBQThCO0FBQUEsVUFBbkIsS0FBbUIsUUFBbkIsS0FBbUI7QUFBQSxVQUFULEtBQVM7O0FBQzdDLFVBQU0sa0JBQWtCLDBCQUFXLFNBQVgsRUFBc0IsZUFBdEIsQ0FBeEI7QUFDQSxhQUNFO0FBQUE7UUFBQSx5QkFBTyxXQUFZLGVBQW5CLElBQTBDLEtBQTFDO1FBQ0UsZ0VBQU8sTUFBSyxVQUFaLElBQTRCLEtBQTVCLEVBREY7UUFFRSx3Q0FBTSxXQUFVLHFCQUFoQixHQUZGO1FBR0U7QUFBQTtVQUFBLEVBQU0sV0FBVSwwQkFBaEI7VUFBNkM7QUFBN0M7QUFIRixPQURGO0FBT0Q7Ozs2QkFFUTtBQUFBLG1CQUN5RCxLQUFLLEtBRDlEO0FBQUEsVUFDQyxPQURELFVBQ0MsT0FERDtBQUFBLFVBQ1UsUUFEVixVQUNVLFFBRFY7QUFBQSxVQUNvQixLQURwQixVQUNvQixLQURwQjtBQUFBLFVBQzJCLFNBRDNCLFVBQzJCLFNBRDNCO0FBQUEsVUFDc0MsSUFEdEMsVUFDc0MsSUFEdEM7QUFBQSxVQUMrQyxLQUQvQzs7QUFFUCxVQUFNLGdCQUFnQixFQUFFLGtCQUFGLEVBQVksWUFBWixFQUFtQixvQkFBbkIsRUFBOEIsVUFBOUIsRUFBdEI7QUFDQSxhQUNFLFVBQ0EsS0FBSyxjQUFMLENBQW9CLEtBQXBCLENBREEsR0FFQTtBQUFBO1FBQWtCLGFBQWxCO1FBQ0ksS0FBSyxjQUFMLENBQW9CLEtBQXBCO0FBREosT0FIRjtBQU9EOzs7RUF2Qm1DLGdCQUFNLFM7O2tCQUF2QixROzs7QUEyQnJCLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixhQUFXLGlCQUFVLE1BREY7QUFFbkIsU0FBTyxpQkFBVSxNQUZFO0FBR25CLFlBQVUsaUJBQVUsSUFIRDtBQUluQixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFEZSxFQUV6QixpQkFBVSxNQUZlLEVBR3pCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FKWTtBQVduQixhQUFXLGlCQUFVLE1BWEY7QUFZbkIsUUFBTSxpQkFBVSxNQVpHO0FBYW5CLFFBQU0saUJBQVUsTUFiRztBQWNuQixTQUFPLGlCQUFVLEdBZEU7QUFlbkIsV0FBUyxpQkFBVSxJQWZBO0FBZ0JuQixXQUFTLGlCQUFVLElBaEJBO0FBaUJuQixrQkFBZ0IsaUJBQVU7QUFqQlAsQ0FBckIiLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IGNoZWNrQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1jaGVja2JveCcpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgY2hlY2tDbGFzc05hbWVzIH0gey4uLiBwcm9wc30gPlxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHsgLi4ucHJvcHMgfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXgnPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwZWQsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIHJldHVybiAoXG4gICAgICBncm91cGVkID9cbiAgICAgIHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIDpcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgeyB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSB9XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=