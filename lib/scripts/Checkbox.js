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

var _dompurify = require('dompurify');

var _dompurify2 = _interopRequireDefault(_dompurify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _dompurify2.default.addHook('afterSanitizeAttributes', function (node) {
        // set all elements owning target to target=_blank as dompurify removes it
        if ('target' in node) {
          node.setAttribute('target', '_blank');
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _dompurify2.default.removeHook('afterSanitizeAttributes');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var input = this.node.getElementsByTagName('input')[0];
      if (nextProps.defaultChecked !== input.checked) {
        input.checked = nextProps.defaultChecked;
      }
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      if (!this.props.disabled) {
        if (this.props.checked) {
          this.props.checked = false;
          this.props.value = 'false';
        } else {
          this.props.checked = true;
          this.props.value = 'true';
        }
      }
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var _this2 = this;

      var className = _ref.className,
          label = _ref.label,
          checkboxRef = _ref.checkboxRef,
          props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label', 'checkboxRef']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        {
          ref: function ref(node) {
            _this2.node = node;
            if (checkboxRef) checkboxRef(node);
          },
          className: checkClassNames
        },
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props)),
        _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
        _react2.default.createElement('span', { className: 'slds-form-element__label', dangerouslySetInnerHTML: { __html: _dompurify2.default.sanitize(label) } })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          grouped = _props.grouped,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      if (typeof props.onChange === 'undefined') {
        props.onChange = this.onChange;
      }
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({
          formElementRef: function formElementRef(node) {
            return _this3.node = node;
          }
        }, formElemProps),
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  grouped: _propTypes2.default.bool,
  checkboxRef: _propTypes2.default.func,
  name: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwiYWRkSG9vayIsIm5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVIb29rIiwibmV4dFByb3BzIiwiaW5wdXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRDaGVja2VkIiwiY2hlY2tlZCIsInByb3BzIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiY2hlY2tib3hSZWYiLCJjaGVja0NsYXNzTmFtZXMiLCJfX2h0bWwiLCJzYW5pdGl6ZSIsImdyb3VwZWQiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJDaGVja2JveCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJmdW5jIiwibmFtZSIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsUTs7O0FBQ25CLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFGWTtBQUdiOzs7O3dDQUVrQjtBQUNqQiwwQkFBVUMsT0FBVixDQUFrQix5QkFBbEIsRUFBNkMsVUFBU0MsSUFBVCxFQUFlO0FBQzFEO0FBQ0EsWUFBSSxZQUFZQSxJQUFoQixFQUFzQjtBQUNsQkEsZUFBS0MsWUFBTCxDQUFrQixRQUFsQixFQUEyQixRQUEzQjtBQUNIO0FBQ0YsT0FMRDtBQU1EOzs7MkNBRXFCO0FBQ3BCLDBCQUFVQyxVQUFWLENBQXFCLHlCQUFyQjtBQUNEOzs7OENBRXlCQyxTLEVBQVc7QUFDbkMsVUFBTUMsUUFBUSxLQUFLSixJQUFMLENBQVVLLG9CQUFWLENB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LG9CQUFVaUIsSUFmRDtBQWdCbkJwQixrQkFBZ0Isb0JBQVVvQjtBQWhCUCxDQUFyQiIsImZpbGUiOiJDaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgRE9NcHVyaWZ5IGZyb20gJ2RvbXB1cmlmeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBET01wdXJpZnkuYWRkSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAvLyBzZXQgYWxsIGVsZW1lbnRzIG93bmluZyB0YXJnZXQgdG8gdGFyZ2V0PV9ibGFuayBhcyBkb21wdXJpZnkgcmVtb3ZlcyBpdFxuICAgICAgaWYgKCd0YXJnZXQnIGluIG5vZGUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywnX2JsYW5rJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIERPTXB1cmlmeS5yZW1vdmVIb29rKCdhZnRlclNhbml0aXplQXR0cmlidXRlcycpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcbiAgICBpZiAobmV4dFByb3BzLmRlZmF1bHRDaGVja2VkICE9PSBpbnB1dC5jaGVja2VkKSB7XG4gICAgICBpbnB1dC5jaGVja2VkID0gbmV4dFByb3BzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9ICdmYWxzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hlY2tib3hSZWYsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBjaGVja0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtY2hlY2tib3gnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgIGlmIChjaGVja2JveFJlZikgY2hlY2tib3hSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17IGNoZWNrQ2xhc3NOYW1lcyB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eCcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBET01wdXJpZnkuc2FuaXRpemUobGFiZWwpfX0+PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBlZCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGdyb3VwZWQgP1xuICAgICAgICB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSA6XG4gICAgICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgICAgICBmb3JtRWxlbWVudFJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9XG4gICAgICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgfVxuICAgICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2JveFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19