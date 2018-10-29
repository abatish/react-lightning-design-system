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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwiRE9NcHVyaWZ5IiwiYWRkSG9vayIsIm5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVIb29rIiwibmV4dFByb3BzIiwiaW5wdXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRDaGVja2VkIiwiY2hlY2tlZCIsInByb3BzIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiY2hlY2tib3hSZWYiLCJjaGVja0NsYXNzTmFtZXMiLCJfX2h0bWwiLCJzYW5pdGl6ZSIsImdyb3VwZWQiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJDaGVja2JveCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsImZ1bmMiLCJuYW1lIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUZZO0FBR2I7Ozs7d0NBRWtCO0FBQ2pCQywwQkFBVUMsT0FBVixDQUFrQix5QkFBbEIsRUFBNkMsVUFBU0MsSUFBVCxFQUFlO0FBQzFEO0FBQ0EsWUFBSSxZQUFZQSxJQUFoQixFQUFzQjtBQUNsQkEsZUFBS0MsWUFBTCxDQUFrQixRQUFsQixFQUEyQixRQUEzQjtBQUNIO0FBQ0YsT0FMRDtBQU1EOzs7MkNBRXFCO0FBQ3BCSCwwQkFBVUksVUFBVixDQUFxQix5QkFBckI7QUFDRDs7OzhDQUV5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Q3pCUCxvQkFBVUMsTUFEZSxFQUV6QkQsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FWWTtBQWNuQnZCLFdBQVNtQixvQkFBVUUsSUFkQTtBQWVuQm5CLFlBQVVpQixvQkFBVUUsSUFmRDtBQWdCbkJ0QixrQkFBZ0JvQixvQkFBVUU7QUFoQlAsQ0FBckIiLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IERPTXB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgRE9NcHVyaWZ5LmFkZEhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgLy8gc2V0IGFsbCBlbGVtZW50cyBvd25pbmcgdGFyZ2V0IHRvIHRhcmdldD1fYmxhbmsgYXMgZG9tcHVyaWZ5IHJlbW92ZXMgaXRcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBub2RlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsJ19ibGFuaycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBET01wdXJpZnkucmVtb3ZlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLm5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgaWYgKG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gaW5wdXQuY2hlY2tlZCkge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMudmFsdWUgPSAnZmFsc2UnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGVja2JveCh7IGNsYXNzTmFtZSwgbGFiZWwsIGNoZWNrYm94UmVmLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgY2hlY2tDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWNoZWNrYm94Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICByZWY9eyhub2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgICBpZiAoY2hlY2tib3hSZWYpIGNoZWNrYm94UmVmKG5vZGUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9eyBjaGVja0NsYXNzTmFtZXMgfVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHsgLi4ucHJvcHMgfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXgnIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogRE9NcHVyaWZ5LnNhbml0aXplKGxhYmVsKX19Pjwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyb3VwZWQsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xuICAgIGlmICh0eXBlb2YgcHJvcHMub25DaGFuZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwcm9wcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBncm91cGVkID9cbiAgICAgICAgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgOlxuICAgICAgICAgIDxGb3JtRWxlbWVudFxuICAgICAgICAgICAgZm9ybUVsZW1lbnRSZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfVxuICAgICAgICAgICAgeyAuLi5mb3JtRWxlbVByb3BzIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIH1cbiAgICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cblxufVxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBncm91cGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hlY2tib3hSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuIl19