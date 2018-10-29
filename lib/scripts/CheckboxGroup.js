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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    (0, _classCallCheck3.default)(this, CheckboxGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckboxGroup.__proto__ || (0, _getPrototypeOf2.default)(CheckboxGroup)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    _this.renderControl = _this.renderControl.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      var _this2 = this;

      if (this.props.onChange) {
        var values = [];
        _react2.default.Children.forEach(this.props.children, function (check, i) {
          var el = check.props.ref || _this2['check' + (i + 1)];
          var checkEl = el && el.querySelector('input[type=checkbox]');
          if (checkEl && checkEl.checked) {
            values.push(check.props.value);
          }
        });
        this.props.onChange(e, values);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(checkbox, i) {
      var _this3 = this;

      var props = { grouped: true };
      if (checkbox.props.ref) {
        props.ref = checkbox.props.ref;
      } else {
        props.checkboxRef = function (node) {
          return _this3['check' + (i + 1)] = node;
        };
      }
      if (this.props.name) {
        props.name = this.props.name;
      }
      return _react2.default.cloneElement(checkbox, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          label = _props.label,
          totalCols = _props.totalCols,
          cols = _props.cols,
          style = _props.style,
          required = _props.required,
          error = _props.error,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'totalCols', 'cols', 'style', 'required', 'error', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;

      delete props.onChange;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({
          className: grpClassNames,
          style: grpStyles,
          onChange: this.onChange
        }, props),
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
          {
            className: 'slds-form-element__control'
          },
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
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  name: _propTypes2.default.string,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object
};

CheckboxGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOlsiQ2hlY2tib3hHcm91cCIsIm9uQ2hhbmdlIiwiYmluZCIsInJlbmRlckNvbnRyb2wiLCJlIiwicHJvcHMiLCJ2YWx1ZXMiLCJSZWFjdCIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkcmVuIiwiY2hlY2siLCJpIiwiZWwiLCJyZWYiLCJjaGVja0VsIiwicXVlcnlTZWxlY3RvciIsImNoZWNrZWQiLCJwdXNoIiwidmFsdWUiLCJjaGVja2JveCIsImdyb3VwZWQiLCJjaGVja2JveFJlZiIsIm5vZGUiLCJuYW1lIiwiY2xvbmVFbGVtZW50IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ0b3RhbENvbHMiLCJjb2xzIiwic3R5bGUiLCJyZXF1aXJlZCIsImVycm9yIiwiZ3JwQ2xhc3NOYW1lcyIsImdycFN0eWxlcyIsImRpc3BsYXkiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwibWFwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIkZvcm1FbGVtZW50IiwibnVtYmVyIiwiZnVuYyIsIm9iamVjdCIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQkEsYTs7O0FBQ25CLDJCQUFjO0FBQUE7O0FBQUE7O0FBR1osVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBSlk7QUFLYjs7Ozs2QkFDUUUsQyxFQUFHO0FBQUE7O0FBQ1YsVUFBSSxLQUFLQyxLQUFMLENBQVdKLFFBQWYsRUFBeUI7QUFDdkIsWUFBTUssU0FBUyxFQUFmO0FBQ0FDLHdCQUFN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QTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUEyQ0E7QUFBM0MsV0FERixHQUVFRTtBQVBOO0FBZEYsT0FERjtBQTJCRDs7O0VBbkZ3Qy9CLGdCQUFNaUMsUzs7a0JBQTVCeEMsYTs7O0FBdUZyQkEsY0FBY3lDLFNBQWQsR0FBMEI7QUFDeEJmLGFBQVdnQixvQkFBVUMsTUFERztBQUV4QmhCLFNBQU9lLG9CQUFVQyxNQUZPO0FBR3hCWixZQUFVVyxvQkFBVUUsSUFISTtBQUl4QlosU0FBT2Esc0JBQVlKLFNBQVosQ0FBc0JULEtBSkw7QUFLeEJSLFFBQU1rQixvQkFBVUMsTUFMUTtBQU14QmYsYUFBV2Msb0JBQVVJLE1BTkc7QUFPeEJqQixRQUFNYSxvQkFBVUksTUFQUTtBQVF4QjdDLFlBQVV5QyxvQkFBVUssSUFSSTtBQVN4QnJDLFlBQVVnQyxvQkFBVW5CLElBVEk7QUFVeEI7QUFDQU8sU0FBT1ksb0JBQVVNO0FBWE8sQ0FBMUI7O0FBY0FoRCxjQUFjaUQsYUFBZCxHQUE4QixJQUE5QiIsImZpbGUiOiJDaGVja2JveEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJDb250cm9sID0gdGhpcy5yZW5kZXJDb250cm9sLmJpbmQodGhpcyk7XG4gIH1cbiAgb25DaGFuZ2UoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoZWNrLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gY2hlY2sucHJvcHMucmVmIHx8IHRoaXNbYGNoZWNrJHsoaSArIDEpfWBdO1xuICAgICAgICBjb25zdCBjaGVja0VsID0gZWwgJiYgZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgICAgaWYgKGNoZWNrRWwgJiYgY2hlY2tFbC5jaGVja2VkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2goY2hlY2sucHJvcHMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDb250cm9sKGNoZWNrYm94LCBpKSB7XG4gICAgY29uc3QgcHJvcHMgPSB7IGdyb3VwZWQ6IHRydWUgfTtcbiAgICBpZiAoY2hlY2tib3gucHJvcHMucmVmKSB7XG4gICAgICBwcm9wcy5yZWYgPSBjaGVja2JveC5wcm9wcy5yZWY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzLmNoZWNrYm94UmVmID0gbm9kZSA9PiAodGhpc1tgY2hlY2skeyhpICsgMSl9YF0gPSBub2RlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSkge1xuICAgICAgcHJvcHMubmFtZSA9IHRoaXMucHJvcHMubmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGVja2JveCwgcHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgbGFiZWwsIHRvdGFsQ29scywgY29scywgc3R5bGUsIHJlcXVpcmVkLCBlcnJvciwgY2hpbGRyZW4sIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxuICAgICAge1xuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IGBzbGRzLXNpemUtLSR7Y29scyB8fCAxfS1vZi0ke3RvdGFsQ29sc31gIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIGVycm9yID9cbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxuICAgICAgIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgPyBlcnJvci5tZXNzYWdlIDpcbiAgICAgICB1bmRlZmluZWQpIDpcbiAgICAgIHVuZGVmaW5lZDtcblxuICAgIGRlbGV0ZSBwcm9wcy5vbkNoYW5nZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0XG4gICAgICAgIGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfVxuICAgICAgICBzdHlsZT17IGdycFN0eWxlcyB9XG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgPlxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXF1aXJlZCA/XG4gICAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvbGVnZW5kPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCdcbiAgICAgICAgPlxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNvbnRyb2wpIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICApO1xuICB9XG5cbn1cblxuQ2hlY2tib3hHcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5DaGVja2JveEdyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19