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

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);
    return (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || (0, _getPrototypeOf2.default)(Toggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'renderToggle',
    value: function renderToggle(_ref) {
      var className = _ref.className,
          label = _ref.label,
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var toggleClassNames = (0, _classnames2.default)(className, 'slds-checkbox--toggle slds-grid');
      return _react2.default.createElement(
        'label',
        { className: toggleClassNames },
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label slds-m-bottom--none' },
          label
        ),
        _react2.default.createElement('input', (0, _extends3.default)({
          name: 'checkbox',
          type: 'checkbox',
          'aria-describedby': 'toggle-desc'
        }, props)),
        _react2.default.createElement(
          'span',
          {
            className: 'slds-checkbox--faux_container',
            'aria-live': 'assertive'
          },
          _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
          _react2.default.createElement(
            'span',
            { className: 'slds-checkbox--on' },
            'Enabled'
          ),
          _react2.default.createElement(
            'span',
            { className: 'slds-checkbox--off' },
            'Disabled'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          props = (0, _objectWithoutProperties3.default)(_props, ['required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this2.node = node;
          }
        }, formElemProps),
        this.renderToggle(props)
      );
    }
  }]);
  return Toggle;
}(_react.Component);

exports.default = Toggle;


Toggle.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RvZ2dsZS5qcyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJjbGFzc05hbWUiLCJsYWJlbCIsInByb3BzIiwidG9nZ2xlQ2xhc3NOYW1lcyIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsIm5vZGUiLCJyZW5kZXJUb2dnbGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwibmFtZSIsInZhbHVlIiwib25lT2ZUeXBlIiwiY2hlY2tlZCIsImRlZmF1bHRDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7dUNBQzBCO0FBQUEsVUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLFVBQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxVQUFUQyxLQUFTOztBQUMzQyxVQUFNQyxtQkFBbUIsMEJBQVdILFNBQVgsRUFBc0IsaUNBQXRCLENBQXpCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBTyxXQUFZRyxnQkFBbkI7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFVLDhDQUFoQjtBQUFpRUY7QUFBakUsU0FERjtBQUVFO0FBQ0UsZ0JBQUssVUFEUDtBQUVFLGdCQUFLLFVBRlA7QUFHRSw4QkFBaUI7QUFIbkIsV0FJT0MsS0FKUCxFQUZGO0FBUUU7QUFBQTtBQUFBO0FBQ0UsdUJBQVUsK0JBRFo7QUFFRSx5QkFBVTtBQUZaO0FBSUUsa0RBQU0sV0FBVSxxQkFBaEIsR0FKRjtBQUtFO0FBQUE7QUFBQSxjQUFNLFdBQVUsbUJBQWhCO0FBQUE7QUFBQSxXQUxGO0FBTUU7QUFBQTtBQUFBLGNBQU0sV0FBVSxvQkFBaEI7QUFBQTtBQUFBO0FBTkY7QUFSRixPQURGO0FBbUJEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDZ0QsS0FBS0EsS0FEckQ7QUFBQSxVQUNDRSxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxLQURYLFVBQ1dBLEtBRFg7QUFBQSxVQUNrQkMsU0FEbEIsVUFDa0JBLFNBRGxCO0FBQUEsVUFDNkJDLElBRDdCLFVBQzZCQSxJQUQ3QjtBQUFBLFVBQ3NDTCxLQUR0Qzs7QUFFUCxVQUFNTSxnQkFBZ0IsRUFBRUosa0JBQUYsRUFBWUMsWUFBWixFQUFtQkMsb0JBQW5CLEVBQThCQyxVQUE5QixFQUF0QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsMEJBQWdCO0FBQUEsbUJBQVMsT0FBS0UsSUFBTCxHQUFZQSxJQUFyQjtBQUFBO0FBRGxCLFdBRU9ELGFBRlA7QUFJSSxhQUFLRSxZQUFMLENBQWtCUixLQUFsQjtBQUpKLE9BREY7QUFRRDs7Ozs7a0JBbkNrQkgsTTs7O0FBdUNyQkEsT0FBT1ksU0FBUCxHQUFtQjtBQUNqQlgsYUFBVyxpQkFBVVksTUFESjtBQUVqQlgsU0FBTyxpQkFBVVcsTUFGQTtBQUdqQlIsWUFBVSxpQkFBVVMsSUFISDtBQUlqQlIsU0FBTyxzQkFBWU0sU0FBWixDQUFzQk4sS0FKWjtBQUtqQkMsYUFBVyxpQkFBVVEsTUFMSjtBQU1qQlAsUUFBTSxpQkFBVU8sTUFOQztBQU9qQkMsUUFBTSxpQkFBVUgsTUFQQztBQVFqQkksU0FBTyxpQkFBVUMsU0FBVixDQUFvQixDQUN6QixpQkFBVUwsTUFEZSxFQUV6QixpQkFBVUUsTUFGZSxDQUFwQixDQVJVO0FBWWpCSSxXQUFTLGlCQUFVTCxJQVpGO0FBYWpCTSxrQkFBZ0IsaUJBQVVOO0FBYlQsQ0FBbkIiLCJmaWxlIjoiVG9nZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyVG9nZ2xlKHsgY2xhc3NOYW1lLCBsYWJlbCwgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IHRvZ2dsZUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtY2hlY2tib3gtLXRvZ2dsZSBzbGRzLWdyaWQnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17IHRvZ2dsZUNsYXNzTmFtZXMgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1tLWJvdHRvbS0tbm9uZSc+eyBsYWJlbCB9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPSdjaGVja2JveCdcbiAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PSd0b2dnbGUtZGVzYydcbiAgICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXhfY29udGFpbmVyJ1xuICAgICAgICAgIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJ1xuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1mYXV4JyAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tb24nPkVuYWJsZWQ8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1vZmYnPkRpc2FibGVkPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgIGZvcm1FbGVtZW50UmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX1cbiAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlclRvZ2dsZShwcm9wcykgfVxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG5cbn1cblxuVG9nZ2xlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcbiJdfQ==