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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RvZ2dsZS5qcyJdLCJuYW1lcyI6WyJUb2dnbGUiLCJjbGFzc05hbWUiLCJsYWJlbCIsInByb3BzIiwidG9nZ2xlQ2xhc3NOYW1lcyIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsIm5vZGUiLCJyZW5kZXJUb2dnbGUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwibmFtZSIsInZhbHVlIiwib25lT2ZUeXBlIiwiY2hlY2tlZCIsImRlZmF1bHRDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozt1Q0FDMEI7QUFBQSxVQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsVUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLFVBQVRDLEtBQVM7O0FBQzNDLFVBQU1DLG1CQUFtQiwwQkFBV0gsU0FBWCxFQUFzQixpQ0FBdEIsQ0FBekI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVlHLGdCQUFuQjtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsOENBQWhCO0FBQWlFRjtBQUFqRSxTQURGO0FBRUU7QUFDRSxnQkFBSyxVQURQO0FBRUUsZ0JBQUssVUFGUDtBQUdFLDhCQUFpQjtBQUhuQixXQUlPQyxLQUpQLEVBRkY7QUFRRTtBQUFBO0FBQUE7QUFDRSx1QkFBVSwrQkFEWjtBQUVFLHlCQUFVO0FBRlo7QUFJRSxrREFBTSxXQUFVLHFCQUFoQixHQUpGO0FBS0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxtQkFBaEI7QUFBQTtBQUFBLFdBTEY7QUFNRTtBQUFBO0FBQUEsY0FBTSxXQUFVLG9CQUFoQjtBQUFBO0FBQUE7QUFORjtBQVJGLE9BREY7QUFtQkQ7Ozs2QkFFUTtBQUFBOztBQUFBLG1CQUNnRCxLQUFLQSxLQURyRDtBQUFBLFVBQ0NFLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dDLEtBRFgsVUFDV0EsS0FEWDtBQUFBLFVBQ2tCQyxTQURsQixVQUNrQkEsU0FEbEI7QUFBQSxVQUM2QkMsSUFEN0IsVUFDNkJBLElBRDdCO0FBQUEsVUFDc0NMLEtBRHRDOztBQUVQLFVBQU1NLGdCQUFnQixFQUFFSixrQkFBRixFQUFZQyxZQUFaLEVBQW1CQyxvQkFBbkIsRUFBOEJDLFVBQTlCLEVBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSwwQkFBZ0I7QUFBQSxtQkFBUyxPQUFLRSxJQUFMLEdBQVlBLElBQXJCO0FBQUE7QUFEbEIsV0FFT0QsYUFGUDtBQUlJLGFBQUtFLFlBQUwsQ0FBa0JSLEtBQWxCO0FBSkosT0FERjtBQVFEOzs7OztrQkFuQ2tCSCxNOzs7QUF1Q3JCQSxPQUFPWSxTQUFQLEdBQW1CO0FBQ2pCWCxhQUFXLG9CQUFVWSxNQURKO0FBRWpCWCxTQUFPLG9CQUFVVyxNQUZBO0FBR2pCUixZQUFVLG9CQUFVUyxJQUhIO0FBSWpCUixTQUFPLHNCQUFZTSxTQUFaLENBQXNCTixLQUpaO0FBS2pCQyxhQUFXLG9CQUFVUSxNQUxKO0FBTWpCUCxRQUFNLG9CQUFVTyxNQU5DO0FBT2pCQyxRQUFNLG9CQUFVSCxNQVBDO0FBUWpCSSxTQUFPLG9CQUFVQyxTQUFWLENBQW9CLENBQ3pCLG9CQUFVTCxNQURlLEVBRXpCLG9CQUFVRSxNQUZlLENBQXBCLENBUlU7QUFZakJJLFdBQVMsb0JBQVVMLElBWkY7QUFhakJNLGtCQUFnQixvQkFBVU47QUFiVCxDQUFuQiIsImZpbGUiOiJUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlclRvZ2dsZSh7IGNsYXNzTmFtZSwgbGFiZWwsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCB0b2dnbGVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWNoZWNrYm94LS10b2dnbGUgc2xkcy1ncmlkJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9eyB0b2dnbGVDbGFzc05hbWVzIH0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtbS1ib3R0b20tLW5vbmUnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT0nY2hlY2tib3gnXG4gICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT0ndG9nZ2xlLWRlc2MnXG4gICAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWNoZWNrYm94LS1mYXV4X2NvbnRhaW5lcidcbiAgICAgICAgICBhcmlhLWxpdmU9J2Fzc2VydGl2ZSdcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eCcgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLW9uJz5FbmFibGVkPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tb2ZmJz5EaXNhYmxlZDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICBmb3JtRWxlbWVudFJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9XG4gICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJUb2dnbGUocHJvcHMpIH1cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblRvZ2dsZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=