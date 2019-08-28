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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwiRE9NcHVyaWZ5IiwiYWRkSG9vayIsIm5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVIb29rIiwibmV4dFByb3BzIiwiaW5wdXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRlZmF1bHRDaGVja2VkIiwiY2hlY2tlZCIsInByb3BzIiwiZGlzYWJsZWQiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImxhYmVsIiwiY2hlY2tib3hSZWYiLCJjaGVja0NsYXNzTmFtZXMiLCJfX2h0bWwiLCJzYW5pdGl6ZSIsImdyb3VwZWQiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJyZW5kZXJDaGVja2JveCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsIm51bWJlciIsImZ1bmMiLCJuYW1lIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxROzs7QUFDbkIsc0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUZZO0FBR2I7Ozs7d0NBRWtCO0FBQ2pCQywwQkFBVUMsT0FBVixDQUFrQix5QkFBbEIsRUFBNkMsVUFBU0MsSUFBVCxFQUFlO0FBQzFEO0FBQ0EsWUFBSSxZQUFZQSxJQUFoQixFQUFzQjtBQUNsQkEsZUFBS0MsWUFBTCxDQUFrQixRQUFsQixFQUEyQixRQUEzQjtBQUNIO0FBQ0YsT0FMRDtBQU1EOzs7MkNBRXFCO0FBQ3BCSCwwQkFBVUksVUFBVixDQUFxQix5QkFBckI7QUFDRDs7OzhDQUd5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Q3pCUCxvQkFBVUMsTUFEZSxFQUV6QkQsb0JBQVVJLE1BRmUsQ0FBcEIsQ0FWWTtBQWNuQnZCLFdBQVNtQixvQkFBVUUsSUFkQTtBQWVuQm5CLFlBQVVpQixvQkFBVUUsSUFmRDtBQWdCbkJ0QixrQkFBZ0JvQixvQkFBVUU7QUFoQlAsQ0FBckIiLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IERPTXB1cmlmeSBmcm9tICdkb21wdXJpZnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgRE9NcHVyaWZ5LmFkZEhvb2soJ2FmdGVyU2FuaXRpemVBdHRyaWJ1dGVzJywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgLy8gc2V0IGFsbCBlbGVtZW50cyBvd25pbmcgdGFyZ2V0IHRvIHRhcmdldD1fYmxhbmsgYXMgZG9tcHVyaWZ5IHJlbW92ZXMgaXRcbiAgICAgIGlmICgndGFyZ2V0JyBpbiBub2RlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsJ19ibGFuaycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICBET01wdXJpZnkucmVtb3ZlSG9vaygnYWZ0ZXJTYW5pdGl6ZUF0dHJpYnV0ZXMnKTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXTtcbiAgICBpZiAobmV4dFByb3BzLmRlZmF1bHRDaGVja2VkICE9PSBpbnB1dC5jaGVja2VkKSB7XG4gICAgICBpbnB1dC5jaGVja2VkID0gbmV4dFByb3BzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9ICdmYWxzZSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlID0gJ3RydWUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgY2hlY2tib3hSZWYsIC4uLnByb3BzIH0pIHtcbiAgICBjb25zdCBjaGVja0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtY2hlY2tib3gnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsXG4gICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgIGlmIChjaGVja2JveFJlZikgY2hlY2tib3hSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17IGNoZWNrQ2xhc3NOYW1lcyB9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgeyAuLi5wcm9wcyB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1jaGVja2JveC0tZmF1eCcgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBET01wdXJpZnkuc2FuaXRpemUobGFiZWwpfX0+PC9zcGFuPlxuICAgICAgPC9sYWJlbD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3JvdXBlZCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgaWYgKHR5cGVvZiBwcm9wcy5vbkNoYW5nZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHByb3BzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGdyb3VwZWQgP1xuICAgICAgICB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSA6XG4gICAgICAgICAgPEZvcm1FbGVtZW50XG4gICAgICAgICAgICBmb3JtRWxlbWVudFJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9XG4gICAgICAgICAgICB7IC4uLmZvcm1FbGVtUHJvcHMgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJDaGVja2JveChwcm9wcykgfVxuICAgICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxuXG59XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdyb3VwZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2JveFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19