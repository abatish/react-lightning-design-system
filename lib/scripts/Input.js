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
    _this.registerIconStyle();
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
    key: 'registerIconStyle',
    value: function registerIconStyle() {
      (0, _util.registerStyle)('input-icons', [
      // fix styles of double-iconed input
      ['.slds-input-has-icon--left-right .slds-input__icon--right', '{ left: auto; }']]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0Iiwib25DaGFuZ2UiLCJiaW5kIiwib25LZXlEb3duIiwicmVnaXN0ZXJJY29uU3R5bGUiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcm9wcyIsInN5bWJvbFBhdHRlcm4iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJrZXljb2RlciIsInRvQ2hhcmFjdGVyIiwibWF0Y2giLCJSZWdFeHAiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRlbnQiLCJpY29uIiwiYWxpZ24iLCJSZWFjdCIsImlzVmFsaWRFbGVtZW50IiwiaWQiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwidHlwZSIsImJhcmUiLCJkZWZhdWx0VmFsdWUiLCJodG1sUmVhZE9ubHkiLCJwcHJvcHMiLCJpbnB1dENsYXNzTmFtZXMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsImljb25MZWZ0IiwiaWNvblJpZ2h0IiwiYWRkb25MZWZ0IiwiYWRkb25SaWdodCIsImlucHV0UHJvcHMiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwicmVuZGVyQWRkb24iLCJ1bmRlZmluZWQiLCJyZW5kZXJJY29uIiwicmVuZGVySW5wdXQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiRm9ybUVsZW1lbnQiLCJudW1iZXIiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLEs7OztBQUNuQixtQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFFBQUwsR0FB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QUFRaEJoRCxTQUFPNEMsb0JBQVVDLE1BUkQ7QUFTaEJ2QixnQkFBY3NCLG9CQUFVQyxNQVRSO0FBVWhCSSxlQUFhTCxvQkFBVUMsTUFWUDtBQVdoQnhCLFFBQU11QixvQkFBVUUsSUFYQTtBQVloQjNCLFlBQVV5QixvQkFBVU0sSUFaSjtBQWFoQi9DLGlCQUFleUMsb0JBQVVDLE1BYlQ7QUFjaEI1QixZQUFVMkIsb0JBQVVFLElBZEo7QUFlaEJ2QixnQkFBY3FCLG9CQUFVRSxJQWZSO0FBZ0JoQmQsWUFBVVksb0JBQVVPLFNBQVYsQ0FBb0IsQ0FDNUJQLG9CQUFVQyxNQURrQixFQUU1QkQsb0JBQVVRLE9BRmtCLENBQXBCLENBaEJNO0FBb0JoQm5CLGFBQVdXLG9CQUFVTyxTQUFWLENBQW9CLENBQzdCUCxvQkFBVUMsTUFEbUIsRUFFN0JELG9CQUFVUSxPQUZtQixDQUFwQixDQXBCSztBQXdCaEJsQixhQUFXVSxvQkFBVUMsTUF4Qkw7QUF5QmhCVixjQUFZUyxvQkFBVUMsTUF6Qk47QUEwQmhCbEQsWUFBVWlELG9CQUFVTSxJQTFCSjtBQTJCaEJyRCxhQUFXK0Msb0JBQVVNO0FBM0JMLENBQWxCOztBQThCQXhELE1BQU0yRCxhQUFOLEdBQXNCLElBQXRCIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBrZXljb2RlciBmcm9tICdrZXljb2Rlcic7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCB7IHV1aWQsIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVySWNvblN0eWxlKCk7XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBjb25zdCB7IHN5bWJvbFBhdHRlcm4sIG9uS2V5RG93biB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc3ltYm9sUGF0dGVybikge1xuICAgICAgY29uc3QgeyBrZXlDb2RlLCBzaGlmdEtleSB9ID0gZTtcbiAgICAgIGNvbnN0IHZhbHVlID0ga2V5Y29kZXIudG9DaGFyYWN0ZXIoa2V5Q29kZSwgc2hpZnRLZXkpO1xuICAgICAgaWYgKHZhbHVlICYmICF2YWx1ZS5tYXRjaChuZXcgUmVnRXhwKHN5bWJvbFBhdHRlcm4pKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVySWNvblN0eWxlKCkge1xuICAgIHJlZ2lzdGVyU3R5bGUoJ2lucHV0LWljb25zJywgW1xuICAgICAgLy8gZml4IHN0eWxlcyBvZiBkb3VibGUtaWNvbmVkIGlucHV0XG4gICAgICBbXG4gICAgICAgICcuc2xkcy1pbnB1dC1oYXMtaWNvbi0tbGVmdC1yaWdodCAuc2xkcy1pbnB1dF9faWNvbi0tcmlnaHQnLFxuICAgICAgICAneyBsZWZ0OiBhdXRvOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICByZW5kZXJBZGRvbihjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHRhZz0nc3BhbidcbiAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fYWRkb24nXG4gICAgICAgIGNhdGVnb3J5PSdib2R5J1xuICAgICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgPlxuICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgPC9UZXh0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJY29uKGljb24sIGFsaWduKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pID8gaWNvbiA6XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17IGljb24gfVxuICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ3NsZHMtaW5wdXRfX2ljb24nLCBgc2xkcy1pbnB1dF9faWNvbi0tJHthbGlnbn1gLCAnc2xkcy1pY29uLXRleHQtZGVmYXVsdCcpIH1cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgcmVhZE9ubHksIGNsYXNzTmFtZSwgaW5wdXRSZWYsIHR5cGUsIGJhcmUsIHZhbHVlLCBkZWZhdWx0VmFsdWUsIGh0bWxSZWFkT25seSxcbiAgICAgIC4uLnBwcm9wc1xuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBpbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYmFyZSA/ICdzbGRzLWlucHV0LS1iYXJlJyA6ICdzbGRzLWlucHV0Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlYWRPbmx5ID9cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgICAgIGNhdGVnb3J5PSdib2R5J1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX3N0YXRpYydcbiAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdmFsdWUgfVxuICAgICAgICA8L1RleHQ+IDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IGlucHV0Q2xhc3NOYW1lcyB9XG4gICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgZGVmYXVsdFZhbHVlIH1cbiAgICAgICAgICAgIHJlYWRPbmx5PXsgaHRtbFJlYWRPbmx5IH1cbiAgICAgICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9XG4gICAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93biB9XG4gICAgICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkID0gYGlucHV0LSR7dXVpZCgpfWAsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHJlYWRPbmx5LCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxhYmVsIHx8IHJlcXVpcmVkIHx8IGVycm9yIHx8IHRvdGFsQ29scyB8fCBjb2xzKSB7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgcmVhZE9ubHksIHRvdGFsQ29scywgY29scyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxJbnB1dCB7IC4uLnsgaWQsIHJlYWRPbmx5LCAuLi5wcm9wcyB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWNvbkxlZnQsIGljb25SaWdodCwgYWRkb25MZWZ0LCBhZGRvblJpZ2h0LCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMuc3ltYm9sUGF0dGVybjtcbiAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi5wcHJvcHMsIGlkLCByZWFkT25seSB9O1xuICAgIGlmIChpY29uTGVmdCB8fCBpY29uUmlnaHQgfHwgYWRkb25MZWZ0IHx8IGFkZG9uUmlnaHQpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uJzogaWNvbkxlZnQgfHwgaWNvblJpZ2h0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24tLWxlZnQtcmlnaHQnOiBpY29uTGVmdCAmJiBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tbGVmdCc6IGljb25MZWZ0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0JzogaWNvblJpZ2h0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWZpeGVkLWFkZG9uJzogYWRkb25MZWZ0IHx8IGFkZG9uUmlnaHQgfSxcbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHdyYXBwZXJDbGFzc05hbWUgfT5cbiAgICAgICAgICB7IGFkZG9uTGVmdCA/IHRoaXMucmVuZGVyQWRkb24oYWRkb25MZWZ0KSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgeyBpY29uTGVmdCA/IHRoaXMucmVuZGVySWNvbihpY29uTGVmdCwgJ2xlZnQnKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KGlucHV0UHJvcHMpIH1cbiAgICAgICAgICB7IGljb25SaWdodCA/IHRoaXMucmVuZGVySWNvbihpY29uUmlnaHQsICdyaWdodCcpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IGFkZG9uUmlnaHQgPyB0aGlzLnJlbmRlckFkZG9uKGFkZG9uUmlnaHQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dChpbnB1dFByb3BzKTtcbiAgfVxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhcmU6IFByb3BUeXBlcy5ib29sLFxuICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHN5bWJvbFBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaHRtbFJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbkxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gIF0pLFxuICBpY29uUmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gIF0pLFxuICBhZGRvbkxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFkZG9uUmlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbklucHV0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19