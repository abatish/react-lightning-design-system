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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0Iiwib25DaGFuZ2UiLCJiaW5kIiwib25LZXlEb3duIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJzeW1ib2xQYXR0ZXJuIiwia2V5Q29kZSIsInNoaWZ0S2V5Iiwia2V5Y29kZXIiLCJ0b0NoYXJhY3RlciIsIm1hdGNoIiwiUmVnRXhwIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiaWNvbiIsImFsaWduIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsImlkIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJpbnB1dFJlZiIsInR5cGUiLCJiYXJlIiwiZGVmYXVsdFZhbHVlIiwiaHRtbFJlYWRPbmx5IiwicHByb3BzIiwiaW5wdXRDbGFzc05hbWVzIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsImZvcm1FbGVtUHJvcHMiLCJpY29uTGVmdCIsImljb25SaWdodCIsImFkZG9uTGVmdCIsImFkZG9uUmlnaHQiLCJpbnB1dFByb3BzIiwid3JhcHBlckNsYXNzTmFtZSIsInJlbmRlckFkZG9uIiwidW5kZWZpbmVkIiwicmVuZGVySWNvbiIsInJlbmRlcklucHV0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsIkZvcm1FbGVtZW50IiwibnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR3FCQSxLOzs7QUFDbkIsbUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0Ms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eUIsb0JBQVVNLElBWko7QUFhaEIvQyxpQkFBZXlDLG9CQUFVQyxNQWJUO0FBY2hCNUIsWUFBVTJCLG9CQUFVRSxJQWRKO0FBZWhCdkIsZ0JBQWNxQixvQkFBVUUsSUFmUjtBQWdCaEJkLFlBQVVZLG9CQUFVTyxTQUFWLENBQW9CLENBQzVCUCxvQkFBVUMsTUFEa0IsRUFFNUJELG9CQUFVUSxPQUZrQixDQUFwQixDQWhCTTtBQW9CaEJuQixhQUFXVyxvQkFBVU8sU0FBVixDQUFvQixDQUM3QlAsb0JBQVVDLE1BRG1CLEVBRTdCRCxvQkFBVVEsT0FGbUIsQ0FBcEIsQ0FwQks7QUF3QmhCbEIsYUFBV1Usb0JBQVVDLE1BeEJMO0FBeUJoQlYsY0FBWVMsb0JBQVVDLE1BekJOO0FBMEJoQmpELFlBQVVnRCxvQkFBVU0sSUExQko7QUEyQmhCcEQsYUFBVzhDLG9CQUFVTTtBQTNCTCxDQUFsQjs7QUE4QkF2RCxNQUFNMEQsYUFBTixHQUFzQixJQUF0QiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQga2V5Y29kZXIgZnJvbSAna2V5Y29kZXInO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi91dGlsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBjb25zdCB7IHN5bWJvbFBhdHRlcm4sIG9uS2V5RG93biB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc3ltYm9sUGF0dGVybikge1xuICAgICAgY29uc3QgeyBrZXlDb2RlLCBzaGlmdEtleSB9ID0gZTtcbiAgICAgIGNvbnN0IHZhbHVlID0ga2V5Y29kZXIudG9DaGFyYWN0ZXIoa2V5Q29kZSwgc2hpZnRLZXkpO1xuICAgICAgaWYgKHZhbHVlICYmICF2YWx1ZS5tYXRjaChuZXcgUmVnRXhwKHN5bWJvbFBhdHRlcm4pKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckFkZG9uKGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgdGFnPSdzcGFuJ1xuICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19hZGRvbidcbiAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICA+XG4gICAgICAgIHsgY29udGVudCB9XG4gICAgICA8L1RleHQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckljb24oaWNvbiwgYWxpZ24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuaXNWYWxpZEVsZW1lbnQoaWNvbikgPyBpY29uIDpcbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnc2xkcy1pbnB1dF9faWNvbicsIGBzbGRzLWlucHV0X19pY29uLS0ke2FsaWdufWAsICdzbGRzLWljb24tdGV4dC1kZWZhdWx0JykgfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLCByZWFkT25seSwgY2xhc3NOYW1lLCBpbnB1dFJlZiwgdHlwZSwgYmFyZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSwgaHRtbFJlYWRPbmx5LFxuICAgICAgLi4ucHByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGlucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBiYXJlID8gJ3NsZHMtaW5wdXQtLWJhcmUnIDogJ3NsZHMtaW5wdXQnKTtcbiAgICByZXR1cm4gKFxuICAgICAgcmVhZE9ubHkgP1xuICAgICAgICA8VGV4dFxuICAgICAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fc3RhdGljJ1xuICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgeyB2YWx1ZSB9XG4gICAgICAgIDwvVGV4dD4gOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgaW5wdXRDbGFzc05hbWVzIH1cbiAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgdHlwZT17IHR5cGUgfVxuICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgfVxuICAgICAgICAgICAgcmVhZE9ubHk9eyBodG1sUmVhZE9ubHkgfVxuICAgICAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duIH1cbiAgICAgICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQgPSBgaW5wdXQtJHt1dWlkKCl9YCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgcmVhZE9ubHksIHRvdGFsQ29scywgY29scywgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IgfHwgdG90YWxDb2xzIHx8IGNvbHMpIHtcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCByZWFkT25seSwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgPElucHV0IHsgLi4ueyBpZCwgcmVhZE9ubHksIC4uLnByb3BzIH0gfSAvPlxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBpY29uTGVmdCwgaWNvblJpZ2h0LCBhZGRvbkxlZnQsIGFkZG9uUmlnaHQsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5zeW1ib2xQYXR0ZXJuO1xuICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7IC4uLnBwcm9wcywgaWQsIHJlYWRPbmx5IH07XG4gICAgaWYgKGljb25MZWZ0IHx8IGljb25SaWdodCB8fCBhZGRvbkxlZnQgfHwgYWRkb25SaWdodCkge1xuICAgICAgY29uc3Qgd3JhcHBlckNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24nOiBpY29uTGVmdCB8fCBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tbGVmdC1yaWdodCc6IGljb25MZWZ0ICYmIGljb25SaWdodCB9LFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0JzogaWNvbkxlZnQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnOiBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtZml4ZWQtYWRkb24nOiBhZGRvbkxlZnQgfHwgYWRkb25SaWdodCB9LFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgd3JhcHBlckNsYXNzTmFtZSB9PlxuICAgICAgICAgIHsgYWRkb25MZWZ0ID8gdGhpcy5yZW5kZXJBZGRvbihhZGRvbkxlZnQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IGljb25MZWZ0ID8gdGhpcy5yZW5kZXJJY29uKGljb25MZWZ0LCAnbGVmdCcpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoaW5wdXRQcm9wcykgfVxuICAgICAgICAgIHsgaWNvblJpZ2h0ID8gdGhpcy5yZW5kZXJJY29uKGljb25SaWdodCwgJ3JpZ2h0JykgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHsgYWRkb25SaWdodCA/IHRoaXMucmVuZGVyQWRkb24oYWRkb25SaWdodCkgOiB1bmRlZmluZWQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KGlucHV0UHJvcHMpO1xuICB9XG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFyZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3ltYm9sUGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBodG1sUmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBpY29uTGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgXSksXG4gIGljb25SaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgXSksXG4gIGFkZG9uTGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWRkb25SaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=