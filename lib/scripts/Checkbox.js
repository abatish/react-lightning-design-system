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

var Checkbox = function (_Component) {
  (0, _inherits3.default)(Checkbox, _Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Checkbox.__proto__ || (0, _getPrototypeOf2.default)(Checkbox)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Checkbox, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94Iiwib25DaGFuZ2UiLCJiaW5kIiwibmV4dFByb3BzIiwiaW5wdXQiLCJub2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkZWZhdWx0Q2hlY2tlZCIsImNoZWNrZWQiLCJwcm9wcyIsImRpc2FibGVkIiwidmFsdWUiLCJjbGFzc05hbWUiLCJsYWJlbCIsImNoZWNrYm94UmVmIiwiY2hlY2tDbGFzc05hbWVzIiwiZ3JvdXBlZCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsInJlbmRlckNoZWNrYm94IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIm51bWJlciIsImZ1bmMiLCJuYW1lIiwib25lT2ZUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQkEsUTs7O0FBQ25CLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFGWTtBQUdiOzs7OzhDQUV5QkMsUyxFQUFXO0FBQ25DLFVBQU1DLFFBQVEsS0FBS0MsSUFBTCxDQUFVQyxvQkFBVixDQUErQixPQUEvQixFQUF3QyxDQUF4QyxDQUFkO0FBQ0EsVUFBSUgsVUFBVUksY0FBVixLQUE2QkgsTUFBTUksT0FBdkMsRUFBZ0Q7QUFDOUNKLGNBQU1JLE9BQU4sR0FBZ0JMLFVBQVVJLGNBQTFCO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBSSxDQUFDLEtBQUtFLEtBQUwsQ0FBV0MsUUFBaEIsRUFBMEI7QUFDeEIsWUFBSSxLQUFLRCxLQUFMLENBQVdELE9BQWYsRUFBd0I7QUFDdEIsZUFBS0MsS0FBTCxDQUFXRCxPQUFYLEdBQXFCLEtBQXJCO0FBQ0EsZUFBS0MsS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE9BQW5CO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsZUFBS0YsS0FBTCxDQUFXRCxPQUFYLEdBQXFCLElBQXJCO0FBQ0EsZUFBS0MsS0FBTCxDQUFXRSxLQUFYLEdBQW1CLE1BQW5CO0FBQ0Q7QUFDRjtBQUNGOzs7eUNBRTJEO0FBQUE7O0FBQUEsVUFBM0NDLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLFVBQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxVQUF6QkMsV0FBeUIsUUFBekJBLFdBQXlCO0FBQUEsVUFBVEwsS0FBUzs7QUFDMUQsVUFBTU0sa0JBQWtCLDBCQUFXSCxTQUFYLEVBQXNCLGVBQXRCLENBQXhCO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFLLGFBQUNQLElBQUQsRUFBVTtBQUNiLG1CQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxnQkFBSVMsV0FBSixFQUFpQkEsWUFBWVQsSUFBWjtBQUNsQixXQUpIO0FBS0UscUJBQVlVO0FBTGQ7QUFPRSx3RUFBTyxNQUFLLFVBQVosSUFBNEJOLEtBQTVCLEVBUEY7QUFRRSxnREFBTSxXQUFVLHFCQUFoQixHQVJGO0FBU0U7QUFBQTtBQUFBLFlBQU0sV0FBVSwwQkFBaEI7QUFBNkNJO0FBQTdDO0FBVEYsT0FERjtBQWFEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFDeUQsS0FBS0osS0FEOUQ7QUFBQSxVQUNDTyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNVQyxRQURWLFVBQ1VBLFFBRFY7QUFBQSxVQUNvQkMsS0FEcEIsVUFDb0JBLEtBRHBCO0FBQUEsVUFDMkJDLFNBRDNCLFVBQzJCQSxTQUQzQjtBQUFBLFVBQ3NDQyxJQUR0QyxVQUNzQ0EsSUFEdEM7QUFBQSxVQUMrQ1gsS0FEL0M7O0FBRVAsVUFBTVksZ0JBQWdCLEVBQUVKLGtCQUFGLEVBQVlDLFlBQVosRUFBbUJDLG9CQUFuQixFQUE4QkMsVUFBOUIsRUFBdEI7QUFDQSxVQUFJLE9BQU9YLE1BQU1SLFFBQWIsS0FBMEIsV0FBOUIsRUFBMkM7QUFDekNRLGNBQU1SLFFBQU4sR0FBaUIsS0FBS0EsUUFBdEI7QUFDRDtBQUNELGFBQ0VlLFVBQ0UsS0FBS00sY0FBTCxDQUFvQmIsS0FBcEIsQ0FERixHQUVJO0FBQUE7QUFBQTtBQUNFLDBCQUFnQjtBQUFBLG1CQUFTLE9BQUtKLElBQUwsR0FBWUEsSUFBckI7QUFBQTtBQURsQixXQUVPZ0IsYUFGUDtBQUlJLGFBQUtDLGNBQUwsQ0FBb0JiLEtBQXBCO0FBSkosT0FITjtBQVVEOzs7OztrQkExRGtCVCxROzs7QUE4RHJCQSxTQUFTdUIsU0FBVCxHQUFxQjtBQUNuQlgsYUFBVyxvQkFBVVksTUFERjtBQUVuQlgsU0FBTyxvQkFBVVcsTUFGRTtBQUduQlAsWUFBVSxvQkFBVVEsSUFIRDtBQUluQlAsU0FBTyxzQkFBWUssU0FBWixDQUFzQkwsS0FKVjtBQUtuQkMsYUFBVyxvQkFBVU8sTUFMRjtBQU1uQk4sUUFBTSxvQkFBVU0sTUFORztBQU9uQlYsV0FBUyxvQkFBVVMsSUFQQTtBQVFuQlgsZUFBYSxvQkFBVWEsSUFSSjtBQVNuQkMsUUFBTSxvQkFBVUosTUFURztBQVVuQmIsU0FBTyxvQkFBVWtCLFNBQVYsQ0FBb0IsQ0FDekIsb0JBQVVMLE1BRGUsRUFFekIsb0JBQVVFLE1BRmUsQ0FBcEIsQ0FWWTtBQWNuQmxCLFdBQVMsb0JBQVVpQixJQWRBO0FBZW5CZixZQUFVLG9CQUFVZSxJQWZEO0FBZ0JuQmxCLGtCQUFnQixvQkFBVWtCO0FBaEJQLENBQXJCIiwiZmlsZSI6IkNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLm5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF07XG4gICAgaWYgKG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZCAhPT0gaW5wdXQuY2hlY2tlZCkge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IG5leHRQcm9wcy5kZWZhdWx0Q2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSgpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcHMudmFsdWUgPSAnZmFsc2UnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9wcy52YWx1ZSA9ICd0cnVlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJDaGVja2JveCh7IGNsYXNzTmFtZSwgbGFiZWwsIGNoZWNrYm94UmVmLCAuLi5wcm9wcyB9KSB7XG4gICAgY29uc3QgY2hlY2tDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWNoZWNrYm94Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICByZWY9eyhub2RlKSA9PiB7XG4gICAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgICBpZiAoY2hlY2tib3hSZWYpIGNoZWNrYm94UmVmKG5vZGUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9eyBjaGVja0NsYXNzTmFtZXMgfVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHsgLi4ucHJvcHMgfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXgnIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cGVkLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICBpZiAodHlwZW9mIHByb3BzLm9uQ2hhbmdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJvcHMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgZ3JvdXBlZCA/XG4gICAgICAgIHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIDpcbiAgICAgICAgICA8Rm9ybUVsZW1lbnRcbiAgICAgICAgICAgIGZvcm1FbGVtZW50UmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX1cbiAgICAgICAgICAgIHsgLi4uZm9ybUVsZW1Qcm9wcyB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSB9XG4gICAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG5cbn1cblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgZ3JvdXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoZWNrYm94UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0=