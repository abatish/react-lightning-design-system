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

var _keycoder = require('keycoder');

var _keycoder2 = _interopRequireDefault(_keycoder);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this));

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _props = this.props,
          symbolPattern = _props.symbolPattern,
          onKeyDown = _props.onKeyDown;

      if (symbolPattern) {
        var keyCode = e.keyCode,
            shiftKey = e.shiftKey;

        var value = _keycoder2.default.toCharacter(keyCode, shiftKey);
        if (value && !value.match(new RegExp(symbolPattern))) {
          e.preventDefault();
          return;
        }
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }
  }, {
    key: 'renderAddon',
    value: function renderAddon(content) {
      return _react2.default.createElement(
        _Text2.default,
        {
          tag: 'span',
          className: 'slds-form-element__addon',
          category: 'body',
          type: 'regular'
        },
        content
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon, align) {
      return _react2.default.isValidElement(icon) ? icon : _react2.default.createElement(_Icon2.default, {
        icon: icon,
        className: (0, _classnames2.default)('slds-input__icon', 'slds-input__icon--' + align, 'slds-icon-text-default')
      });
    }
  }, {
    key: 'renderInput',
    value: function renderInput(props) {
      var id = props.id,
          readOnly = props.readOnly,
          className = props.className,
          inputRef = props.inputRef,
          type = props.type,
          bare = props.bare,
          value = props.value,
          defaultValue = props.defaultValue,
          htmlReadOnly = props.htmlReadOnly,
          pprops = (0, _objectWithoutProperties3.default)(props, ['id', 'readOnly', 'className', 'inputRef', 'type', 'bare', 'value', 'defaultValue', 'htmlReadOnly']);

      var inputClassNames = (0, _classnames2.default)(className, bare ? 'slds-input--bare' : 'slds-input');
      return readOnly ? _react2.default.createElement(
        _Text2.default,
        {
          type: 'regular',
          category: 'body',
          className: 'slds-form-element__static',
          id: id
        },
        value
      ) : _react2.default.createElement('input', (0, _extends3.default)({
        ref: inputRef,
        className: inputClassNames,
        id: id,
        type: type,
        value: value,
        defaultValue: defaultValue,
        readOnly: htmlReadOnly
      }, pprops, {
        onChange: this.onChange,
        onKeyDown: this.onKeyDown
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$id = _props2.id,
          id = _props2$id === undefined ? 'input-' + (0, _util.uuid)() : _props2$id,
          label = _props2.label,
          required = _props2.required,
          error = _props2.error,
          readOnly = _props2.readOnly,
          totalCols = _props2.totalCols,
          cols = _props2.cols,
          props = (0, _objectWithoutProperties3.default)(_props2, ['id', 'label', 'required', 'error', 'readOnly', 'totalCols', 'cols']);

      if (label || required || error || totalCols || cols) {
        var formElemProps = { id: id, label: label, required: required, error: error, readOnly: readOnly, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Input, (0, _extends3.default)({ id: id, readOnly: readOnly }, props))
        );
      }
      var iconLeft = props.iconLeft,
          iconRight = props.iconRight,
          addonLeft = props.addonLeft,
          addonRight = props.addonRight,
          pprops = (0, _objectWithoutProperties3.default)(props, ['iconLeft', 'iconRight', 'addonLeft', 'addonRight']);

      delete pprops.symbolPattern;
      var inputProps = (0, _extends3.default)({}, pprops, { id: id, readOnly: readOnly });
      if (iconLeft || iconRight || addonLeft || addonRight) {
        var wrapperClassName = (0, _classnames2.default)('slds-form-element__control', { 'slds-input-has-icon': iconLeft || iconRight }, { 'slds-input-has-icon--left-right': iconLeft && iconRight }, { 'slds-input-has-icon--left': iconLeft }, { 'slds-input-has-icon--right': iconRight }, { 'slds-input-has-fixed-addon': addonLeft || addonRight });
        return _react2.default.createElement(
          'div',
          { className: wrapperClassName },
          addonLeft ? this.renderAddon(addonLeft) : undefined,
          iconLeft ? this.renderIcon(iconLeft, 'left') : undefined,
          this.renderInput(inputProps),
          iconRight ? this.renderIcon(iconRight, 'right') : undefined,
          addonRight ? this.renderAddon(addonRight) : undefined
        );
      }
      return this.renderInput(inputProps);
    }
  }]);
  return Input;
}(_react.Component);

exports.default = Input;


Input.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  bare: _propTypes2.default.bool,
  inputRef: _propTypes2.default.func,
  symbolPattern: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  htmlReadOnly: _propTypes2.default.bool,
  iconLeft: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  iconRight: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  addonLeft: _propTypes2.default.string,
  addonRight: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func
};

Input.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0Iiwib25DaGFuZ2UiLCJiaW5kIiwib25LZXlEb3duIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJzeW1ib2xQYXR0ZXJuIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidG9DaGFyYWN0ZXIiLCJtYXRjaCIsIlJlZ0V4cCIsInByZXZlbnREZWZhdWx0IiwiY29udGVudCIsImljb24iLCJhbGlnbiIsImlzVmFsaWRFbGVtZW50IiwiaWQiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwidHlwZSIsImJhcmUiLCJkZWZhdWx0VmFsdWUiLCJodG1sUmVhZE9ubHkiLCJwcHJvcHMiLCJpbnB1dENsYXNzTmFtZXMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsImljb25MZWZ0IiwiaWNvblJpZ2h0IiwiYWRkb25MZWZ0IiwiYWRkb25SaWdodCIsImlucHV0UHJvcHMiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwicmVuZGVyQWRkb24iLCJ1bmRlZmluZWQiLCJyZW5kZXJJY29uIiwicmVuZGVySW5wdXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxLOzs7QUFDbkIsbUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCxPQUFoQjtBQUNBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlRCxJQUFmLE9B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QixTQUFWLENBQW9CLENBQzVCLG9CQUFVTCxNQURrQixFQUU1QixvQkFBVU0sT0FGa0IsQ0FBcEIsQ0FoQk07QUFvQmhCaEIsYUFBVyxvQkFBVWUsU0FBVixDQUFvQixDQUM3QixvQkFBVUwsTUFEbUIsRUFFN0Isb0JBQVVNLE9BRm1CLENBQXBCLENBcEJLO0FBd0JoQmYsYUFBVyxvQkFBVVMsTUF4Qkw7QUF5QmhCUixjQUFZLG9CQUFVUSxNQXpCTjtBQTBCaEI3QyxZQUFVLG9CQUFVaUQsSUExQko7QUEyQmhCL0MsYUFBVyxvQkFBVStDO0FBM0JMLENBQWxCOztBQThCQWxELE1BQU1xRCxhQUFOLEdBQXNCLElBQXRCIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBrZXljb2RlciBmcm9tICdrZXljb2Rlcic7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGNvbnN0IHsgc3ltYm9sUGF0dGVybiwgb25LZXlEb3duIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzeW1ib2xQYXR0ZXJuKSB7XG4gICAgICBjb25zdCB7IGtleUNvZGUsIHNoaWZ0S2V5IH0gPSBlO1xuICAgICAgY29uc3QgdmFsdWUgPSBrZXljb2Rlci50b0NoYXJhY3RlcihrZXlDb2RlLCBzaGlmdEtleSk7XG4gICAgICBpZiAodmFsdWUgJiYgIXZhbHVlLm1hdGNoKG5ldyBSZWdFeHAoc3ltYm9sUGF0dGVybikpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQWRkb24oY29udGVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICB0YWc9J3NwYW4nXG4gICAgICAgIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2FkZG9uJ1xuICAgICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgICAgdHlwZT0ncmVndWxhcidcbiAgICAgID5cbiAgICAgICAgeyBjb250ZW50IH1cbiAgICAgIDwvVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySWNvbihpY29uLCBhbGlnbikge1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5pc1ZhbGlkRWxlbWVudChpY29uKSA/IGljb24gOlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICBjbGFzc05hbWU9eyBjbGFzc25hbWVzKCdzbGRzLWlucHV0X19pY29uJywgYHNsZHMtaW5wdXRfX2ljb24tLSR7YWxpZ259YCwgJ3NsZHMtaWNvbi10ZXh0LWRlZmF1bHQnKSB9XG4gICAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KHByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsIHJlYWRPbmx5LCBjbGFzc05hbWUsIGlucHV0UmVmLCB0eXBlLCBiYXJlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlLCBodG1sUmVhZE9ubHksXG4gICAgICAuLi5wcHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3QgaW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGJhcmUgPyAnc2xkcy1pbnB1dC0tYmFyZScgOiAnc2xkcy1pbnB1dCcpO1xuICAgIHJldHVybiAoXG4gICAgICByZWFkT25seSA/XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgdHlwZT0ncmVndWxhcidcbiAgICAgICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19zdGF0aWMnXG4gICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHZhbHVlIH1cbiAgICAgICAgPC9UZXh0PiA6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9eyBpbnB1dFJlZiB9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyBpbnB1dENsYXNzTmFtZXMgfVxuICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICB0eXBlPXsgdHlwZSB9XG4gICAgICAgICAgICB2YWx1ZT17IHZhbHVlIH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IGRlZmF1bHRWYWx1ZSB9XG4gICAgICAgICAgICByZWFkT25seT17IGh0bWxSZWFkT25seSB9XG4gICAgICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfVxuICAgICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCA9IGBpbnB1dC0ke3V1aWQoKX1gLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCByZWFkT25seSwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvciB8fCB0b3RhbENvbHMgfHwgY29scykge1xuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHJlYWRPbmx5LCB0b3RhbENvbHMsIGNvbHMgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICA8SW5wdXQgeyAuLi57IGlkLCByZWFkT25seSwgLi4ucHJvcHMgfSB9IC8+XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCB7IGljb25MZWZ0LCBpY29uUmlnaHQsIGFkZG9uTGVmdCwgYWRkb25SaWdodCwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICBkZWxldGUgcHByb3BzLnN5bWJvbFBhdHRlcm47XG4gICAgY29uc3QgaW5wdXRQcm9wcyA9IHsgLi4ucHByb3BzLCBpZCwgcmVhZE9ubHkgfTtcbiAgICBpZiAoaWNvbkxlZnQgfHwgaWNvblJpZ2h0IHx8IGFkZG9uTGVmdCB8fCBhZGRvblJpZ2h0KSB7XG4gICAgICBjb25zdCB3cmFwcGVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbic6IGljb25MZWZ0IHx8IGljb25SaWdodCB9LFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0LXJpZ2h0JzogaWNvbkxlZnQgJiYgaWNvblJpZ2h0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24tLWxlZnQnOiBpY29uTGVmdCB9LFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc6IGljb25SaWdodCB9LFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1maXhlZC1hZGRvbic6IGFkZG9uTGVmdCB8fCBhZGRvblJpZ2h0IH0sXG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyB3cmFwcGVyQ2xhc3NOYW1lIH0+XG4gICAgICAgICAgeyBhZGRvbkxlZnQgPyB0aGlzLnJlbmRlckFkZG9uKGFkZG9uTGVmdCkgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHsgaWNvbkxlZnQgPyB0aGlzLnJlbmRlckljb24oaWNvbkxlZnQsICdsZWZ0JykgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dChpbnB1dFByb3BzKSB9XG4gICAgICAgICAgeyBpY29uUmlnaHQgPyB0aGlzLnJlbmRlckljb24oaWNvblJpZ2h0LCAncmlnaHQnKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgeyBhZGRvblJpZ2h0ID8gdGhpcy5yZW5kZXJBZGRvbihhZGRvblJpZ2h0KSA6IHVuZGVmaW5lZCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVySW5wdXQoaW5wdXRQcm9wcyk7XG4gIH1cbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBzeW1ib2xQYXR0ZXJuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gIGh0bWxSZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gIGljb25MZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICBdKSxcbiAgaWNvblJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICBdKSxcbiAgYWRkb25MZWZ0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhZGRvblJpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5JbnB1dC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==