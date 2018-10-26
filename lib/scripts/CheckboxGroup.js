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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOlsiQ2hlY2tib3hHcm91cCIsIm9uQ2hhbmdlIiwiYmluZCIsInJlbmRlckNvbnRyb2wiLCJlIiwicHJvcHMiLCJ2YWx1ZXMiLCJDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZHJlbiIsImNoZWNrIiwiaSIsImVsIiwicmVmIiwiY2hlY2tFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwicHVzaCIsInZhbHVlIiwiY2hlY2tib3giLCJncm91cGVkIiwiY2hlY2tib3hSZWYiLCJub2RlIiwibmFtZSIsImNsb25lRWxlbWVudCIsImNsYXNzTmFtZSIsImxhYmVsIiwidG90YWxDb2xzIiwiY29scyIsInN0eWxlIiwicmVxdWlyZWQiLCJlcnJvciIsImdycENsYXNzTmFtZXMiLCJncnBTdHlsZXMiLCJkaXNwbGF5IiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInVuZGVmaW5lZCIsIm1hcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwib2JqZWN0IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCQSxhOzs7QUFDbkIsMkJBQWM7QUFBQTs7QUFBQTs7QUFHWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFKWTtBQUtiOzs7OzZCQUNRRSxDLEVBQUc7QUFBQTs7QUFDVixVQUFJLEtBQUtDLEtBQUwsQ0FBV0osUUFBZixFQUF5QjtBQUN2QixZQUFNSyxTQUFTLEVBQWY7QUFDQSx3QkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCLEtBQUtILEtBQUws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LEdBRUVFO0FBUE47QUFkRixPQURGO0FBMkJEOzs7RUFuRndDLGdCQUFNRSxTOztrQkFBNUJ2QyxhOzs7QUF1RnJCQSxjQUFjd0MsU0FBZCxHQUEwQjtBQUN4QmYsYUFBVyxvQkFBVWdCLE1BREc7QUFFeEJmLFNBQU8sb0JBQVVlLE1BRk87QUFHeEJYLFlBQVUsb0JBQVVZLElBSEk7QUFJeEJYLFNBQU8sc0JBQVlTLFNBQVosQ0FBc0JULEtBSkw7QUFLeEJSLFFBQU0sb0JBQVVrQixNQUxRO0FBTXhCZCxhQUFXLG9CQUFVZ0IsTUFORztBQU94QmYsUUFBTSxvQkFBVWUsTUFQUTtBQVF4QjFDLFlBQVUsb0JBQVUyQyxJQVJJO0FBU3hCbkMsWUFBVSxvQkFBVWEsSUFUSTtBQVV4QjtBQUNBTyxTQUFPLG9CQUFVZ0I7QUFYTyxDQUExQjs7QUFjQTdDLGNBQWM4QyxhQUFkLEdBQThCLElBQTlCIiwiZmlsZSI6IkNoZWNrYm94R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNvbnRyb2wgPSB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hlY2ssIGkpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjaGVjay5wcm9wcy5yZWYgfHwgdGhpc1tgY2hlY2skeyhpICsgMSl9YF07XG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBlbCAmJiBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICBpZiAoY2hlY2tFbCAmJiBjaGVja0VsLmNoZWNrZWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChjaGVjay5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2woY2hlY2tib3gsIGkpIHtcbiAgICBjb25zdCBwcm9wcyA9IHsgZ3JvdXBlZDogdHJ1ZSB9O1xuICAgIGlmIChjaGVja2JveC5wcm9wcy5yZWYpIHtcbiAgICAgIHByb3BzLnJlZiA9IGNoZWNrYm94LnByb3BzLnJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuY2hlY2tib3hSZWYgPSBub2RlID0+ICh0aGlzW2BjaGVjayR7KGkgKyAxKX1gXSA9IG5vZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoZWNrYm94LCBwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgdG90YWxDb2xzLCBjb2xzLCBzdHlsZSwgcmVxdWlyZWQsIGVycm9yLCBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgIHVuZGVmaW5lZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZmllbGRzZXRcbiAgICAgICAgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9XG4gICAgICAgIHN0eWxlPXsgZ3JwU3R5bGVzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICA+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsLS10b3AnPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkID9cbiAgICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJ1xuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkNoZWNrYm94R3JvdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=