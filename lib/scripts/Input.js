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
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _FormElement2.default.propTypes.error,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  bare: _react.PropTypes.bool,
  inputRef: _react.PropTypes.func,
  symbolPattern: _react.PropTypes.string,
  readOnly: _react.PropTypes.bool,
  htmlReadOnly: _react.PropTypes.bool,
  iconLeft: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  iconRight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
  addonLeft: _react.PropTypes.string,
  addonRight: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func
};

Input.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0Iiwib25DaGFuZ2UiLCJiaW5kIiwib25LZXlEb3duIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJzeW1ib2xQYXR0ZXJuIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidG9DaGFyYWN0ZXIiLCJtYXRjaCIsIlJlZ0V4cCIsInByZXZlbnREZWZhdWx0IiwiY29udGVudCIsImljb24iLCJhbGlnbiIsImlzVmFsaWRFbGVtZW50IiwiaWQiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsImlucHV0UmVmIiwidHlwZSIsImJhcmUiLCJkZWZhdWx0VmFsdWUiLCJodG1sUmVhZE9ubHkiLCJwcHJvcHMiLCJpbnB1dENsYXNzTmFtZXMiLCJsYWJlbCIsInJlcXVpcmVkIiwiZXJyb3IiLCJ0b3RhbENvbHMiLCJjb2xzIiwiZm9ybUVsZW1Qcm9wcyIsImljb25MZWZ0IiwiaWNvblJpZ2h0IiwiYWRkb25MZWZ0IiwiYWRkb25SaWdodCIsImlucHV0UHJvcHMiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwicmVuZGVyQWRkb24iLCJ1bmRlZmluZWQiLCJyZW5kZXJJY29uIiwicmVuZGVySW5wdXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwicGxhY2Vob2xkZXIiLCJmdW5jIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImlzRm9ybUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQkEsSzs7O0FBQ25CLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNDLElBQWQsT0FBaEI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUQsSUFBZixPQUFqQjtBQUhZ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QUFvQixDQUM1QixpQkFBVUwsTUFEa0IsRUFFNUIsaUJBQVVNLE9BRmtCLENBQXBCLENBaEJNO0FBb0JoQmhCLGFBQVcsaUJBQVVlLFNBQVYsQ0FBb0IsQ0FDN0IsaUJBQVVMLE1BRG1CLEVBRTdCLGlCQUFVTSxPQUZtQixDQUFwQixDQXBCSztBQXdCaEJmLGFBQVcsaUJBQVVTLE1BeEJMO0FBeUJoQlIsY0FBWSxpQkFBVVEsTUF6Qk47QUEwQmhCN0MsWUFBVSxpQkFBVWlELElBMUJKO0FBMkJoQi9DLGFBQVcsaUJBQVUrQztBQTNCTCxDQUFsQjs7QUE4QkFsRCxNQUFNcUQsYUFBTixHQUFzQixJQUF0QiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGtleWNvZGVyIGZyb20gJ2tleWNvZGVyJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgY29uc3QgeyBzeW1ib2xQYXR0ZXJuLCBvbktleURvd24gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHN5bWJvbFBhdHRlcm4pIHtcbiAgICAgIGNvbnN0IHsga2V5Q29kZSwgc2hpZnRLZXkgfSA9IGU7XG4gICAgICBjb25zdCB2YWx1ZSA9IGtleWNvZGVyLnRvQ2hhcmFjdGVyKGtleUNvZGUsIHNoaWZ0S2V5KTtcbiAgICAgIGlmICh2YWx1ZSAmJiAhdmFsdWUubWF0Y2gobmV3IFJlZ0V4cChzeW1ib2xQYXR0ZXJuKSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJBZGRvbihjb250ZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIHRhZz0nc3BhbidcbiAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fYWRkb24nXG4gICAgICAgIGNhdGVnb3J5PSdib2R5J1xuICAgICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgPlxuICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgPC9UZXh0PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJY29uKGljb24sIGFsaWduKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFJlYWN0LmlzVmFsaWRFbGVtZW50KGljb24pID8gaWNvbiA6XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17IGljb24gfVxuICAgICAgICAgIGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoJ3NsZHMtaW5wdXRfX2ljb24nLCBgc2xkcy1pbnB1dF9faWNvbi0tJHthbGlnbn1gLCAnc2xkcy1pY29uLXRleHQtZGVmYXVsdCcpIH1cbiAgICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgcmVhZE9ubHksIGNsYXNzTmFtZSwgaW5wdXRSZWYsIHR5cGUsIGJhcmUsIHZhbHVlLCBkZWZhdWx0VmFsdWUsIGh0bWxSZWFkT25seSxcbiAgICAgIC4uLnBwcm9wc1xuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBpbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYmFyZSA/ICdzbGRzLWlucHV0LS1iYXJlJyA6ICdzbGRzLWlucHV0Jyk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlYWRPbmx5ID9cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgICAgIGNhdGVnb3J5PSdib2R5J1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX3N0YXRpYydcbiAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgdmFsdWUgfVxuICAgICAgICA8L1RleHQ+IDpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17IGlucHV0UmVmIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17IGlucHV0Q2xhc3NOYW1lcyB9XG4gICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgIHR5cGU9eyB0eXBlIH1cbiAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgZGVmYXVsdFZhbHVlIH1cbiAgICAgICAgICAgIHJlYWRPbmx5PXsgaHRtbFJlYWRPbmx5IH1cbiAgICAgICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9XG4gICAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93biB9XG4gICAgICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkID0gYGlucHV0LSR7dXVpZCgpfWAsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHJlYWRPbmx5LCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxhYmVsIHx8IHJlcXVpcmVkIHx8IGVycm9yIHx8IHRvdGFsQ29scyB8fCBjb2xzKSB7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgcmVhZE9ubHksIHRvdGFsQ29scywgY29scyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICAgIDxJbnB1dCB7IC4uLnsgaWQsIHJlYWRPbmx5LCAuLi5wcm9wcyB9IH0gLz5cbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHsgaWNvbkxlZnQsIGljb25SaWdodCwgYWRkb25MZWZ0LCBhZGRvblJpZ2h0LCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMuc3ltYm9sUGF0dGVybjtcbiAgICBjb25zdCBpbnB1dFByb3BzID0geyAuLi5wcHJvcHMsIGlkLCByZWFkT25seSB9O1xuICAgIGlmIChpY29uTGVmdCB8fCBpY29uUmlnaHQgfHwgYWRkb25MZWZ0IHx8IGFkZG9uUmlnaHQpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uJzogaWNvbkxlZnQgfHwgaWNvblJpZ2h0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24tLWxlZnQtcmlnaHQnOiBpY29uTGVmdCAmJiBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tbGVmdCc6IGljb25MZWZ0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0JzogaWNvblJpZ2h0IH0sXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWZpeGVkLWFkZG9uJzogYWRkb25MZWZ0IHx8IGFkZG9uUmlnaHQgfSxcbiAgICAgICk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHdyYXBwZXJDbGFzc05hbWUgfT5cbiAgICAgICAgICB7IGFkZG9uTGVmdCA/IHRoaXMucmVuZGVyQWRkb24oYWRkb25MZWZ0KSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgeyBpY29uTGVmdCA/IHRoaXMucmVuZGVySWNvbihpY29uTGVmdCwgJ2xlZnQnKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlcklucHV0KGlucHV0UHJvcHMpIH1cbiAgICAgICAgICB7IGljb25SaWdodCA/IHRoaXMucmVuZGVySWNvbihpY29uUmlnaHQsICdyaWdodCcpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IGFkZG9uUmlnaHQgPyB0aGlzLnJlbmRlckFkZG9uKGFkZG9uUmlnaHQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dChpbnB1dFByb3BzKTtcbiAgfVxufVxuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhcmU6IFByb3BUeXBlcy5ib29sLFxuICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIHN5bWJvbFBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaHRtbFJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbkxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gIF0pLFxuICBpY29uUmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gIF0pLFxuICBhZGRvbkxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFkZG9uUmlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbklucHV0LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19