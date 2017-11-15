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
          var checkEl = el.querySelector('input[type=checkbox]');
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
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  name: _react.PropTypes.string,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  children: _react.PropTypes.node,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object
};

CheckboxGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOlsiQ2hlY2tib3hHcm91cCIsIm9uQ2hhbmdlIiwiYmluZCIsInJlbmRlckNvbnRyb2wiLCJlIiwicHJvcHMiLCJ2YWx1ZXMiLCJDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZHJlbiIsImNoZWNrIiwiaSIsImVsIiwicmVmIiwiY2hlY2tFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwicHVzaCIsInZhbHVlIiwiY2hlY2tib3giLCJncm91cGVkIiwiY2hlY2tib3hSZWYiLCJub2RlIiwibmFtZSIsImNsb25lRWxlbWVudCIsImNsYXNzTmFtZSIsImxhYmVsIiwidG90YWxDb2xzIiwiY29scyIsInN0eWxlIiwicmVxdWlyZWQiLCJlcnJvciIsImdycENsYXNzTmFtZXMiLCJncnBTdHlsZXMiLCJkaXNwbGF5IiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInVuZGVmaW5lZCIsIm1hcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwib2JqZWN0IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQkEsYTs7O0FBQ25CLDJCQUFjO0FBQUE7O0FBQUE7O0FBR1osVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBSlk7QUFLYjs7Ozs2QkFDUUUsQyxFQUFHO0FBQUE7O0FBQ1YsVUFBSSxLQUFLQyxLQUFMLENBQVdKLFFBQWYsRUFBeUI7QUFDdkIsWUFBTUssU0FBUyxFQUFmO0FBQ0Esd0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QixLQUFLSCxLQUFMLENBQVdJLFFB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ZEYsT0FERjtBQTJCRDs7O0VBbkZ3QyxnQkFBTUUsUzs7a0JBQTVCdkMsYTs7O0FBdUZyQkEsY0FBY3dDLFNBQWQsR0FBMEI7QUFDeEJmLGFBQVcsaUJBQVVnQixNQURHO0FBRXhCZixTQUFPLGlCQUFVZSxNQUZPO0FBR3hCWCxZQUFVLGlCQUFVWSxJQUhJO0FBSXhCWCxTQUFPLHNCQUFZUyxTQUFaLENBQXNCVCxLQUpMO0FBS3hCUixRQUFNLGlCQUFVa0IsTUFMUTtBQU14QmQsYUFBVyxpQkFBVWdCLE1BTkc7QUFPeEJmLFFBQU0saUJBQVVlLE1BUFE7QUFReEIxQyxZQUFVLGlCQUFVMkMsSUFSSTtBQVN4Qm5DLFlBQVUsaUJBQVVhLElBVEk7QUFVeEI7QUFDQU8sU0FBTyxpQkFBVWdCO0FBWE8sQ0FBMUI7O0FBY0E3QyxjQUFjOEMsYUFBZCxHQUE4QixJQUE5QiIsImZpbGUiOiJDaGVja2JveEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94R3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckNvbnRyb2wgPSB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZShlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hlY2ssIGkpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjaGVjay5wcm9wcy5yZWYgfHwgdGhpc1tgY2hlY2skeyhpICsgMSl9YF07XG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICBpZiAoY2hlY2tFbCAmJiBjaGVja0VsLmNoZWNrZWQpIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChjaGVjay5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2woY2hlY2tib3gsIGkpIHtcbiAgICBjb25zdCBwcm9wcyA9IHsgZ3JvdXBlZDogdHJ1ZSB9O1xuICAgIGlmIChjaGVja2JveC5wcm9wcy5yZWYpIHtcbiAgICAgIHByb3BzLnJlZiA9IGNoZWNrYm94LnByb3BzLnJlZjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMuY2hlY2tib3hSZWYgPSBub2RlID0+ICh0aGlzW2BjaGVjayR7KGkgKyAxKX1gXSA9IG5vZGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoZWNrYm94LCBwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgdG90YWxDb2xzLCBjb2xzLCBzdHlsZSwgcmVxdWlyZWQsIGVycm9yLCBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgIHVuZGVmaW5lZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZmllbGRzZXRcbiAgICAgICAgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9XG4gICAgICAgIHN0eWxlPXsgZ3JwU3R5bGVzIH1cbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICA+XG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsLS10b3AnPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkID9cbiAgICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJ1xuICAgICAgICA+XG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbCkgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbkNoZWNrYm94R3JvdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=