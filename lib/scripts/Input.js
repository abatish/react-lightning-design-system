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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbIklucHV0Iiwib25DaGFuZ2UiLCJiaW5kIiwib25LZXlEb3duIiwicmVnaXN0ZXJJY29uU3R5bGUiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJwcm9wcyIsInN5bWJvbFBhdHRlcm4iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJ0b0NoYXJhY3RlciIsIm1hdGNoIiwiUmVnRXhwIiwicHJldmVudERlZmF1bHQiLCJjb250ZW50IiwiaWNvbiIsImFsaWduIiwiaXNWYWxpZEVsZW1lbnQiLCJpZCIsInJlYWRPbmx5IiwiY2xhc3NOYW1lIiwiaW5wdXRSZWYiLCJ0eXBlIiwiYmFyZSIsImRlZmF1bHRWYWx1ZSIsImh0bWxSZWFkT25seSIsInBwcm9wcyIsImlucHV0Q2xhc3NOYW1lcyIsImxhYmVsIiwicmVxdWlyZWQiLCJlcnJvciIsInRvdGFsQ29scyIsImNvbHMiLCJmb3JtRWxlbVByb3BzIiwiaWNvbkxlZnQiLCJpY29uUmlnaHQiLCJhZGRvbkxlZnQiLCJhZGRvblJpZ2h0IiwiaW5wdXRQcm9wcyIsIndyYXBwZXJDbGFzc05hbWUiLCJyZW5kZXJBZGRvbiIsInVuZGVmaW5lZCIsInJlbmRlckljb24iLCJyZW5kZXJJbnB1dCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJwbGFjZWhvbGRlciIsImZ1bmMiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7SUFHcUJBLEs7OztBQUNuQixtQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVELElBQWYsT0FBakI7QUFDQSxVQUFLRSxpQkFBTDtBQUpZO0FBS2I7Ozs7NkJBRVFDLEMsRUFBRztBQUNWLFVBQU1DLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBdkI7QUFDQSxVQUFJLEtBQUtFLEtBQUwsQ0FBV1AsUUFBZixFQUF5QjtBQUN2QixhQUFLTyxLQUFMLENBQVdQLFFBQVgsQ0FBb0JJLENBQXBCLEVBQXVCQyxLQUF2QjtBQUNEO0FBQ0Y7Ozs4QkFFU0QsQyxFQUFHO0FBQUEsbUJBQzBCLEtBQUtHLEtBRC9CO0FBQUEsVUFDSEMsYUFERyxVQUNIQSxhQURHO0FBQUEsVUFDWU4sU0FEWixVQUNZQSxTQURaOztBQUVYLFVBQUlNLGFBQUosRUFBbUI7QUFBQSxZQUNUQyxPQURTLEdBQ2FMLENBRGIsQ0FDVEssT0FEUztBQUFBLFlBQ0FDLFFBREEsR0FDYU4sQ0FEYixDQUNBTSxRQURBOztBQUVqQixZQUFNTCxRQUFRLG1CQUFTTSxXQUFULENBQXFCRixPQUFyQixFQUE4QkMsUUFBOUIsQ0FBZDtBQUNBLFlBQUlMLFNBQVMsQ0FBQ0EsTUFBTU8sS0FBTixDQUFZLElBQUlDLE1BQUosQ0FBV0wsYUFBWCxDQUFaLENBQWQsRUFBc0Q7QUFDcERKLFlBQUVVLGNBQUY7QUFDQTtBQUNEO0FBQ0Y7QUFDRCxVQUFJWixTQUFKLEVBQWU7QUFDYkEsa0JBQVVFLENBQVY7QUFDRDtBQUNGOzs7d0NBRW1CO0FBQ2xCLCtCQUFjLGFBQWQsRUFBNkI7QUFDM0I7QUFDQSxPQUNFLDJEQURGLEVBRUUsaUJBRkYsQ0FGMkIsQ0FBN0I7QUFPRDs7O2dDQUVXVyxPLEVBQVM7QUFDbkIsYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFJLE1BRE47QUFFRSxxQkFBVSwwQkFGWjtBQUdFLG9CQUFTLE1BSFg7QUFJRSxnQkFBSztBQUpQO0FBTUlBO0FBTkosT0FERjtBQVVEOzs7K0JBRVVDLEksRUFBTUMsSyxFQUFPO0FBQ3RCLGFBQ0UsZ0JBQU1DLGNBQU4sQ0FBcUJGLElBQXJCLElBQTZCQSxJQUE3QixHQUNFO0FBQ0UsY0FBT0EsSUFEVDtBQUVFLG1CQUFZLDBCQUFXLGtCQUFYLHlCQUFvREMsS0FBcEQsRUFBNkQsd0JBQTdEO0FBRmQsUUFGSjtBQU9EOzs7Z0NBRVdWLEssRUFBTztBQUFBLFVBRWZZLEVBRmUsR0FJYlosS0FKYSxDQUVmWSxFQUZlO0FBQUEsVUFFWEMsUUFGVyxHQUliYixLQUphLENBRVhhLFFBRlc7QUFBQSxVQUVEQyxTQUZDLEdBSWJkLEtBSmEsQ0FFRGMsU0FGQztBQUFBLFVBRVVDLFFBRlYsR0FJYmYsS0FKYSxDQUVVZSxRQUZWO0FBQUEsVUFFb0JDLElBRnBCLEdBSWJoQixLQUphLENBRW9CZ0IsSUFGcEI7QUFBQSxVQUUwQkMsSUFGMUIsR0FJYmpCLEtBSmEsQ0FFMEJpQixJQUYxQjtBQUFBLFVBRWdDbkIsS0FGaEMsR0FJYkUsS0FKYSxDQUVnQ0YsS0FGaEM7QUFBQSxVQUV1Q29CLFlBRnZDLEdBSWJsQixLQUphLENBRXVDa0IsWUFGdkM7QUFBQSxVQUVxREMsWUFGckQsR0FJYm5CLEtBSmEsQ0FFcURtQixZQUZyRDtBQUFBLFVBR1pDLE1BSFksMENBSWJwQixLQUphOztBQUtqQixVQUFNcUIsa0JBQWtCLDBCQUFXUCxTQUFYLEVBQXNCRyxPQUFPLGtCQUFQLEdBQTRCLFlBQWxELENBQXhCO0FBQ0EsYUFDRUosV0FDRTtBQUFBO0FBQUE7QUFDRSxnQkFBSyxTQURQO0FBRUUsb0JBQVMsTUFGWDtBQUdFLHFCQUFVLDJCQUhaO0FBSUUsY0FBS0Q7QUFKUDtBQU1JZDtBQU5KLE9BREYsR0FTSTtBQUNFLGFBQU1pQixRQURSO0FBRUUsbUJBQVlNLGVBRmQ7QUFHRSxZQUFLVCxFQUhQO0FBSUUsY0FBT0ksSUFKVDtBQUtFLGVBQVFsQixLQUxWO0FBTUUsc0JBQWVvQixZQU5qQjtBQU9FLGtCQUFXQztBQVBiLFNBUU9DLE1BUlA7QUFTRSxrQkFBVyxLQUFLM0IsUUFUbEI7QUFVRSxtQkFBWSxLQUFLRTtBQVZuQixTQVZOO0FBdUJEOzs7NkJBRVE7QUFBQSxvQkFHSCxLQUFLSyxLQUhGO0FBQUEsK0JBRUxZLEVBRks7QUFBQSxVQUVMQSxFQUZLLHlDQUVTLGlCQUZUO0FBQUEsVUFFbUJVLEtBRm5CLFdBRW1CQSxLQUZuQjtBQUFBLFVBRTBCQyxRQUYxQixXQUUwQkEsUUFGMUI7QUFBQSxVQUVvQ0MsS0FGcEMsV0FFb0NBLEtBRnBDO0FBQUEsVUFFMkNYLFFBRjNDLFdBRTJDQSxRQUYzQztBQUFBLFVBRXFEWSxTQUZyRCxXQUVxREEsU0FGckQ7QUFBQSxVQUVnRUMsSUFGaEUsV0FFZ0VBLElBRmhFO0FBQUEsVUFFeUUxQixLQUZ6RTs7QUFJUCxVQUFJc0IsU0FBU0MsUUFBVCxJQUFxQkMsS0FBckIsSUFBOEJDLFNBQTlCLElBQTJDQyxJQUEvQyxFQUFxRDtBQUNuRCxZQUFNQyxnQkFBZ0IsRUFBRWYsTUFBRixFQUFNVSxZQUFOLEVBQWFDLGtCQUFiLEVBQXVCQyxZQUF2QixFQUE4Qlgsa0JBQTlCLEVBQXdDWSxvQkFBeEMsRUFBbURDLFVBQW5ELEVBQXRCO0FBQ0EsZUFDRTtBQUFBO0FBQWtCQyx1QkFBbEI7QUFDRSx3Q0FBQyxLQUFELDJCQUFjZixNQUFkLEVBQWtCQyxrQkFBbEIsSUFBK0JiLEtBQS9CO0FBREYsU0FERjtBQUtEO0FBWE0sVUFZQzRCLFFBWkQsR0FZMkQ1QixLQVozRCxDQVlDNEIsUUFaRDtBQUFBLFVBWVdDLFNBWlgsR0FZMkQ3QixLQVozRCxDQVlXNkIsU0FaWDtBQUFBLFVBWXNCQyxTQVp0QixHQVkyRDlCLEtBWjNELENBWXNCOEIsU0FadEI7QUFBQSxVQVlpQ0MsVUFaakMsR0FZMkQvQixLQVozRCxDQVlpQytCLFVBWmpDO0FBQUEsVUFZZ0RYLE1BWmhELDBDQVkyRHBCLEtBWjNEOztBQWFQLGFBQU9vQixPQUFPbkIsYUFBZDtBQUNBLFVBQU0rQix3Q0FBa0JaLE1BQWxCLElBQTBCUixNQUExQixFQUE4QkMsa0JBQTlCLEdBQU47QUFDQSxVQUFJZSxZQUFZQyxTQUFaLElBQXlCQyxTQUF6QixJQUFzQ0MsVUFBMUMsRUFBc0Q7QUFDcEQsWUFBTUUsbUJBQW1CLDBCQUN2Qiw0QkFEdUIsRUFFdkIsRUFBRSx1QkFBdUJMLFlBQVlDLFNBQXJDLEVBRnVCLEVBR3ZCLEVBQUUsbUNBQW1DRCxZQUFZQyxTQUFqRCxFQUh1QixFQUl2QixFQUFFLDZCQUE2QkQsUUFBL0IsRUFKdUIsRUFLdkIsRUFBRSw4QkFBOEJDLFNBQWhDLEVBTHVCLEVBTXZCLEVBQUUsOEJBQThCQyxhQUFhQyxVQUE3QyxFQU51QixDQUF6QjtBQVFBLGVBQ0U7QUFBQTtBQUFBLFlBQUssV0FBWUUsZ0JBQWpCO0FBQ0lILHNCQUFZLEtBQUtJLFdBQUwsQ0FBaUJKLFNBQWpCLENBQVosR0FBMENLLFNBRDlDO0FBRUlQLHFCQUFXLEtBQUtRLFVBQUwsQ0FBZ0JSLFFBQWhCLEVBQTBCLE1BQTFCLENBQVgsR0FBK0NPLFNBRm5EO0FBR0ksZUFBS0UsV0FBTCxDQUFpQkwsVUFBakIsQ0FISjtBQUlJSCxzQkFBWSxLQUFLTyxVQUFMLENBQWdCUCxTQUFoQixFQUEyQixPQUEzQixDQUFaLEdBQWtETSxTQUp0RDtBQUtJSix1QkFBYSxLQUFLRyxXQUFMLENBQWlCSCxVQUFqQixDQUFiLEdBQTRDSTtBQUxoRCxTQURGO0FBU0Q7QUFDRCxhQUFPLEtBQUtFLFdBQUwsQ0FBaUJMLFVBQWpCLENBQVA7QUFDRDs7Ozs7a0JBaklrQnhDLEs7OztBQW9JckJBLE1BQU04QyxTQUFOLEdBQWtCO0FBQ2hCMUIsTUFBSSxvQkFBVTJCLE1BREU7QUFFaEJ6QixhQUFXLG9CQUFVeUIsTUFGTDtBQUdoQmpCLFNBQU8sb0JBQVVpQixNQUhEO0FBSWhCaEIsWUFBVSxvQkFBVWlCLElBSko7QUFLaEJoQixTQUFPLHNCQUFZYyxTQUFaLENBQXNCZCxLQUxiO0FBTWhCQyxhQUFXLG9CQUFVZ0IsTUFOTDtBQU9oQmYsUUFBTSxvQkFBVWUsTUFQQTtBQVFoQjNDLFNBQU8sb0JBQVV5QyxNQVJEO0FBU2hCckIsZ0JBQWMsb0JBQVVxQixNQVRSO0FBVWhCRyxlQUFhLG9CQUFVSCxNQVZQO0FBV2hCdEIsUUFBTSxvQkFBVXVCLElBWEE7QUFZaEJ6QixZQUFVLG9CQUFVNEIsSUFaSjtBQWFoQjFDLGlCQUFlLG9CQUFVc0MsTUFiVDtBQWNoQjFCLFlBQVUsb0JBQVUyQixJQWRKO0FBZWhCckIsZ0JBQWMsb0JBQVVxQixJQWZSO0FBZ0JoQlosWUFBVSxvQkFBVWdCLFNBQVYsQ0FBb0IsQ0FDNUIsb0JBQVVMLE1BRGtCLEVBRTVCLG9CQUFVTSxPQUZrQixDQUFwQixDQWhCTTtBQW9CaEJoQixhQUFXLG9CQUFVZSxTQUFWLENBQW9CLENBQzdCLG9CQUFVTCxNQURtQixFQUU3QixvQkFBVU0sT0FGbUIsQ0FBcEIsQ0FwQks7QUF3QmhCZixhQUFXLG9CQUFVUyxNQXhCTDtBQXlCaEJSLGNBQVksb0JBQVVRLE1BekJOO0FBMEJoQjlDLFlBQVUsb0JBQVVrRCxJQTFCSjtBQTJCaEJoRCxhQUFXLG9CQUFVZ0Q7QUEzQkwsQ0FBbEI7O0FBOEJBbkQsTUFBTXNELGFBQU4sR0FBc0IsSUFBdEIiLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGtleWNvZGVyIGZyb20gJ2tleWNvZGVyJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IHsgdXVpZCwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJJY29uU3R5bGUoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGUpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGNvbnN0IHsgc3ltYm9sUGF0dGVybiwgb25LZXlEb3duIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzeW1ib2xQYXR0ZXJuKSB7XG4gICAgICBjb25zdCB7IGtleUNvZGUsIHNoaWZ0S2V5IH0gPSBlO1xuICAgICAgY29uc3QgdmFsdWUgPSBrZXljb2Rlci50b0NoYXJhY3RlcihrZXlDb2RlLCBzaGlmdEtleSk7XG4gICAgICBpZiAodmFsdWUgJiYgIXZhbHVlLm1hdGNoKG5ldyBSZWdFeHAoc3ltYm9sUGF0dGVybikpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJJY29uU3R5bGUoKSB7XG4gICAgcmVnaXN0ZXJTdHlsZSgnaW5wdXQtaWNvbnMnLCBbXG4gICAgICAvLyBmaXggc3R5bGVzIG9mIGRvdWJsZS1pY29uZWQgaW5wdXRcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0LXJpZ2h0IC5zbGRzLWlucHV0X19pY29uLS1yaWdodCcsXG4gICAgICAgICd7IGxlZnQ6IGF1dG87IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIHJlbmRlckFkZG9uKGNvbnRlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgdGFnPSdzcGFuJ1xuICAgICAgICBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19hZGRvbidcbiAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICA+XG4gICAgICAgIHsgY29udGVudCB9XG4gICAgICA8L1RleHQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckljb24oaWNvbiwgYWxpZ24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuaXNWYWxpZEVsZW1lbnQoaWNvbikgPyBpY29uIDpcbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcygnc2xkcy1pbnB1dF9faWNvbicsIGBzbGRzLWlucHV0X19pY29uLS0ke2FsaWdufWAsICdzbGRzLWljb24tdGV4dC1kZWZhdWx0JykgfVxuICAgICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLCByZWFkT25seSwgY2xhc3NOYW1lLCBpbnB1dFJlZiwgdHlwZSwgYmFyZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSwgaHRtbFJlYWRPbmx5LFxuICAgICAgLi4ucHByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGlucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBiYXJlID8gJ3NsZHMtaW5wdXQtLWJhcmUnIDogJ3NsZHMtaW5wdXQnKTtcbiAgICByZXR1cm4gKFxuICAgICAgcmVhZE9ubHkgP1xuICAgICAgICA8VGV4dFxuICAgICAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fc3RhdGljJ1xuICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICA+XG4gICAgICAgICAgeyB2YWx1ZSB9XG4gICAgICAgIDwvVGV4dD4gOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXsgaW5wdXRSZWYgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsgaW5wdXRDbGFzc05hbWVzIH1cbiAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgdHlwZT17IHR5cGUgfVxuICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBkZWZhdWx0VmFsdWUgfVxuICAgICAgICAgICAgcmVhZE9ubHk9eyBodG1sUmVhZE9ubHkgfVxuICAgICAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH1cbiAgICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duIH1cbiAgICAgICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQgPSBgaW5wdXQtJHt1dWlkKCl9YCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgcmVhZE9ubHksIHRvdGFsQ29scywgY29scywgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IgfHwgdG90YWxDb2xzIHx8IGNvbHMpIHtcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCByZWFkT25seSwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgPElucHV0IHsgLi4ueyBpZCwgcmVhZE9ubHksIC4uLnByb3BzIH0gfSAvPlxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgeyBpY29uTGVmdCwgaWNvblJpZ2h0LCBhZGRvbkxlZnQsIGFkZG9uUmlnaHQsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5zeW1ib2xQYXR0ZXJuO1xuICAgIGNvbnN0IGlucHV0UHJvcHMgPSB7IC4uLnBwcm9wcywgaWQsIHJlYWRPbmx5IH07XG4gICAgaWYgKGljb25MZWZ0IHx8IGljb25SaWdodCB8fCBhZGRvbkxlZnQgfHwgYWRkb25SaWdodCkge1xuICAgICAgY29uc3Qgd3JhcHBlckNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgIHsgJ3NsZHMtaW5wdXQtaGFzLWljb24nOiBpY29uTGVmdCB8fCBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tbGVmdC1yaWdodCc6IGljb25MZWZ0ICYmIGljb25SaWdodCB9LFxuICAgICAgICB7ICdzbGRzLWlucHV0LWhhcy1pY29uLS1sZWZ0JzogaWNvbkxlZnQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnOiBpY29uUmlnaHQgfSxcbiAgICAgICAgeyAnc2xkcy1pbnB1dC1oYXMtZml4ZWQtYWRkb24nOiBhZGRvbkxlZnQgfHwgYWRkb25SaWdodCB9LFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgd3JhcHBlckNsYXNzTmFtZSB9PlxuICAgICAgICAgIHsgYWRkb25MZWZ0ID8gdGhpcy5yZW5kZXJBZGRvbihhZGRvbkxlZnQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IGljb25MZWZ0ID8gdGhpcy5yZW5kZXJJY29uKGljb25MZWZ0LCAnbGVmdCcpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgICB7IHRoaXMucmVuZGVySW5wdXQoaW5wdXRQcm9wcykgfVxuICAgICAgICAgIHsgaWNvblJpZ2h0ID8gdGhpcy5yZW5kZXJJY29uKGljb25SaWdodCwgJ3JpZ2h0JykgOiB1bmRlZmluZWQgfVxuICAgICAgICAgIHsgYWRkb25SaWdodCA/IHRoaXMucmVuZGVyQWRkb24oYWRkb25SaWdodCkgOiB1bmRlZmluZWQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlcklucHV0KGlucHV0UHJvcHMpO1xuICB9XG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFyZTogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3ltYm9sUGF0dGVybjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBodG1sUmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuICBpY29uTGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgXSksXG4gIGljb25SaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgXSksXG4gIGFkZG9uTGVmdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWRkb25SaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxufTtcblxuSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=