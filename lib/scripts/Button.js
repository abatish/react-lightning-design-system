'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = exports.BUTTON_TYPES = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
  (0, _inherits3.default)(Button, _Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Button, [{
    key: 'onClick',
    value: function onClick(e) {
      // Safari, FF to trigger focus event on click
      this.node.focus();
      var onClick = this.props.onClick;

      if (onClick) onClick(e);
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(iconSize, inv) {
      var _props = this.props,
          icon = _props.icon,
          iconAlign = _props.iconAlign,
          type = _props.type;

      var inverse = inv || /\-?inverse$/.test(type);
      return _react2.default.createElement(ButtonIcon, { icon: icon, align: iconAlign, size: iconSize, inverse: inverse });
    }
  }, {
    key: 'renderIconMore',
    value: function renderIconMore() {
      var _props2 = this.props,
          iconMore = _props2.iconMore,
          icon = _props2.icon,
          iconAlign = _props2.iconAlign,
          label = _props2.label,
          children = _props2.children;

      var adjoining = icon && (iconAlign === 'right' || !(label || children));
      var iconMoreSize = this.props.iconMoreSize || adjoining ? 'x-small' : 'small';
      return _react2.default.createElement(ButtonIcon, { icon: iconMore, align: 'right', size: iconMoreSize });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props3 = this.props,
          className = _props3.className,
          type = _props3.type,
          size = _props3.size,
          icon = _props3.icon,
          iconAlign = _props3.iconAlign,
          iconMore = _props3.iconMore,
          selected = _props3.selected,
          alt = _props3.alt,
          label = _props3.label,
          loading = _props3.loading,
          iconSize = _props3.iconSize,
          inverse = _props3.inverse,
          _props3$htmlType = _props3.htmlType,
          htmlType = _props3$htmlType === undefined ? 'button' : _props3$htmlType,
          children = _props3.children,
          buttonRef = _props3.buttonRef,
          props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'type', 'size', 'icon', 'iconAlign', 'iconMore', 'selected', 'alt', 'label', 'loading', 'iconSize', 'inverse', 'htmlType', 'children', 'buttonRef']);

      delete props.inverse;
      var typeClassName = type ? 'slds-button--' + type : null;
      var btnClassNames = (0, _classnames3.default)(className, 'slds-button', typeClassName, (_classnames = {
        'slds-is-selected': selected
      }, (0, _defineProperty3.default)(_classnames, 'slds-button--' + size, size && !/^icon-/.test(type)), (0, _defineProperty3.default)(_classnames, 'slds-button--icon-' + size, /^(x-small|small)$/.test(size) && /^icon-/.test(type)), _classnames));

      delete props.component;
      delete props.items;

      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({
          ref: function ref(node) {
            _this2.node = node;
            if (buttonRef) buttonRef(node);
          },
          className: btnClassNames,
          type: htmlType
        }, props, {
          onClick: this.onClick
        }),
        icon && iconAlign !== 'right' ? this.renderIcon(iconSize, inverse) : null,
        children || label,
        icon && iconAlign === 'right' ? this.renderIcon(iconSize, inverse) : null,
        iconMore ? this.renderIconMore() : null,
        alt ? _react2.default.createElement(
          'span',
          { className: 'slds-assistive-text' },
          alt
        ) : null,
        loading ? _react2.default.createElement(_Spinner2.default, null) : null
      );
    }
  }]);
  return Button;
}(_react.Component);

exports.default = Button;
var BUTTON_TYPES = exports.BUTTON_TYPES = ['neutral', 'brand', 'destructive', 'inverse', 'icon-bare', 'icon-container', 'icon-inverse', 'icon-more', 'icon-border', 'icon-border-filled'];

var BUTTON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_ALIGNS = ['left', 'right'];

Button.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.node,
  alt: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(BUTTON_TYPES),
  size: _react.PropTypes.oneOf(BUTTON_SIZES),
  htmlType: _react.PropTypes.string,
  selected: _react.PropTypes.bool,
  inverse: _react.PropTypes.bool,
  loading: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  iconSize: _react.PropTypes.oneOf(ICON_SIZES),
  iconAlign: _react.PropTypes.oneOf(ICON_ALIGNS),
  iconMore: _react.PropTypes.string,
  iconMoreSize: _react.PropTypes.oneOf(ICON_SIZES),
  children: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  buttonRef: _react.PropTypes.func
};

var ButtonIcon = function ButtonIcon(_ref) {
  var icon = _ref.icon,
      align = _ref.align,
      size = _ref.size,
      inverse = _ref.inverse,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties3.default)(_ref, ['icon', 'align', 'size', 'inverse', 'className', 'style']);

  var alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? 'slds-button__icon--' + align : null;
  var sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? 'slds-button__icon--' + size : null;
  var inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
  var iconClassNames = (0, _classnames3.default)('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
  var iconStyle = (0, _extends3.default)({}, style, { pointerEvents: 'none' });
  return _react2.default.createElement(_Icon2.default, (0, _extends3.default)({
    className: iconClassNames, icon: icon, textColor: null, style: iconStyle
  }, props));
};

exports.ButtonIcon = ButtonIcon;
ButtonIcon.propTypes = {
  className: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'right']),
  size: _react.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  inverse: _react.PropTypes.bool,
  style: _react.PropTypes.object // eslint-disable-line react/forbid-prop-types
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJvbkNsaWNrIiwiYmluZCIsImUiLCJub2RlIiwiZm9jdXMiLCJwcm9wcyIsImljb25TaXplIiwiaW52IiwiaWNvbiIsImljb25BbGlnbiIsInR5cGUiLCJpbnZlcnNlIiwidGVzdCIsImljb25Nb3JlIiwibGFiZWwiLCJjaGlsZHJlbiIsImFkam9pbmluZyIsImljb25Nb3JlU2l6ZSIsImNsYXNzTmFtZSIsInNpemUiLCJzZWxlY3RlZCIsImFsdCIsImxvYWRpbmciLCJodG1sVHlwZSIsImJ1dHRvblJlZiIsInR5cGVDbGFzc05hbWUiLCJidG5DbGFzc05hbWVzIiwiY29tcG9uZW50IiwiaXRlbXMiLCJyZW5kZXJJY29uIiwicmVuZGVySWNvbk1vcmUiLCJCVVRUT05fVFlQRVMiLCJCVVRUT05fU0laRVMiLCJJQ09OX1NJWkVTIiwiSUNPTl9BTElHTlMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwiQnV0dG9uSWNvbiIsImFsaWduIiwic3R5bGUiLCJhbGlnbkNsYXNzTmFtZSIsImluZGV4T2YiLCJzaXplQ2xhc3NOYW1lIiwiaW52ZXJzZUNsYXNzTmFtZSIsImljb25DbGFzc05hbWVzIiwiaWNvblN0eWxlIiwicG9pbnRlckV2ZW50cyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQkEsTTs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBRlk7QUFHYjs7Ozs0QkFDT0MsQyxFQUFHO0FBQ1Q7QUFDQSxXQUFLQyxJQUFMLENBQVVDLEtBQVY7QUFGUyxVQUdESixPQUhDLEdBR1csS0FBS0ssS0FIaEIsQ0FHREwsT0FI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LE1BQXZDLEdBQU47QUFDQSxTQUNFO0FBQ0UsZUFBWUYsY0FEZCxFQUMrQixNQUFPdkMsSUFEdEMsRUFDNkMsV0FBWSxJQUR6RCxFQUNnRSxPQUFRd0M7QUFEeEUsS0FFTzNDLEtBRlAsRUFERjtBQU1ELENBYk07OztBQWVQbUMsV0FBV0wsU0FBWCxHQUF1QjtBQUNyQmpCLGFBQVcsaUJBQVVrQixNQURBO0FBRXJCNUIsUUFBTSxpQkFBVTRCLE1BRks7QUFHckJLLFNBQU8saUJBQVVKLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQixDQUhjO0FBSXJCbEIsUUFBTSxpQkFBVWtCLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixRQUFyQixFQUErQixPQUEvQixDQUFoQixDQUplO0FBS3JCMUIsV0FBUyxpQkFBVTJCLElBTEU7QUFNckJJLFNBQU8saUJBQVVRLE1BTkksQ0FNSTtBQU5KLENBQXZCIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgb25DbGljayhlKSB7XG4gICAgLy8gU2FmYXJpLCBGRiB0byB0cmlnZ2VyIGZvY3VzIGV2ZW50IG9uIGNsaWNrXG4gICAgdGhpcy5ub2RlLmZvY3VzKCk7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGUpO1xuICB9XG5cbiAgcmVuZGVySWNvbihpY29uU2l6ZSwgaW52KSB7XG4gICAgY29uc3QgeyBpY29uLCBpY29uQWxpZ24sIHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW52ZXJzZSA9IGludiB8fCAvXFwtP2ludmVyc2UkLy50ZXN0KHR5cGUpO1xuICAgIHJldHVybiA8QnV0dG9uSWNvbiBpY29uPXsgaWNvbiB9IGFsaWduPXsgaWNvbkFsaWduIH0gc2l6ZT17IGljb25TaXplIH0gaW52ZXJzZT17IGludmVyc2UgfSAvPjtcbiAgfVxuXG4gIHJlbmRlckljb25Nb3JlKCkge1xuICAgIGNvbnN0IHsgaWNvbk1vcmUsIGljb24sIGljb25BbGlnbiwgbGFiZWwsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFkam9pbmluZyA9IGljb24gJiYgKGljb25BbGlnbiA9PT0gJ3JpZ2h0JyB8fCAhKGxhYmVsIHx8IGNoaWxkcmVuKSk7XG4gICAgY29uc3QgaWNvbk1vcmVTaXplID0gdGhpcy5wcm9wcy5pY29uTW9yZVNpemUgfHwgYWRqb2luaW5nID8gJ3gtc21hbGwnIDogJ3NtYWxsJztcbiAgICByZXR1cm4gPEJ1dHRvbkljb24gaWNvbj17IGljb25Nb3JlIH0gYWxpZ249J3JpZ2h0JyBzaXplPXsgaWNvbk1vcmVTaXplIH0gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCB0eXBlLCBzaXplLCBpY29uLCBpY29uQWxpZ24sIGljb25Nb3JlLCBzZWxlY3RlZCwgYWx0LCBsYWJlbCwgbG9hZGluZyxcbiAgICAgIGljb25TaXplLCBpbnZlcnNlLCBodG1sVHlwZSA9ICdidXR0b24nLCBjaGlsZHJlbiwgYnV0dG9uUmVmLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZSBwcm9wcy5pbnZlcnNlO1xuICAgIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlID8gYHNsZHMtYnV0dG9uLS0ke3R5cGV9YCA6IG51bGw7XG4gICAgY29uc3QgYnRuQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1idXR0b24nLFxuICAgICAgdHlwZUNsYXNzTmFtZSxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgW2BzbGRzLWJ1dHRvbi0tJHtzaXplfWBdOiBzaXplICYmICEvXmljb24tLy50ZXN0KHR5cGUpLFxuICAgICAgICBbYHNsZHMtYnV0dG9uLS1pY29uLSR7c2l6ZX1gXTogL14oeC1zbWFsbHxzbWFsbCkkLy50ZXN0KHNpemUpICYmIC9eaWNvbi0vLnRlc3QodHlwZSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHByb3BzLml0ZW1zO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXsobm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgICAgaWYgKGJ1dHRvblJlZikgYnV0dG9uUmVmKG5vZGUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9eyBidG5DbGFzc05hbWVzIH1cbiAgICAgICAgdHlwZT17IGh0bWxUeXBlIH1cbiAgICAgICAgeyAuLi5wcm9wcyB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgID5cbiAgICAgICAgeyBpY29uICYmIGljb25BbGlnbiAhPT0gJ3JpZ2h0JyA/IHRoaXMucmVuZGVySWNvbihpY29uU2l6ZSwgaW52ZXJzZSkgOiBudWxsIH1cbiAgICAgICAgeyBjaGlsZHJlbiB8fCBsYWJlbCB9XG4gICAgICAgIHsgaWNvbiAmJiBpY29uQWxpZ24gPT09ICdyaWdodCcgPyB0aGlzLnJlbmRlckljb24oaWNvblNpemUsIGludmVyc2UpIDogbnVsbCB9XG4gICAgICAgIHsgaWNvbk1vcmUgPyB0aGlzLnJlbmRlckljb25Nb3JlKCkgOiBudWxsIH1cbiAgICAgICAgeyBhbHQgPyA8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgYWx0IH08L3NwYW4+IDogbnVsbCB9XG4gICAgICAgIHsgbG9hZGluZyA/IDxTcGlubmVyIC8+IDogbnVsbCB9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBCVVRUT05fVFlQRVMgPSBbXG4gICduZXV0cmFsJyxcbiAgJ2JyYW5kJyxcbiAgJ2Rlc3RydWN0aXZlJyxcbiAgJ2ludmVyc2UnLFxuICAnaWNvbi1iYXJlJyxcbiAgJ2ljb24tY29udGFpbmVyJyxcbiAgJ2ljb24taW52ZXJzZScsXG4gICdpY29uLW1vcmUnLFxuICAnaWNvbi1ib3JkZXInLFxuICAnaWNvbi1ib3JkZXItZmlsbGVkJyxcbl07XG5cbmNvbnN0IEJVVFRPTl9TSVpFUyA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcblxuY29uc3QgSUNPTl9TSVpFUyA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcblxuY29uc3QgSUNPTl9BTElHTlMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9UWVBFUyksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihCVVRUT05fU0laRVMpLFxuICBodG1sVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25TaXplOiBQcm9wVHlwZXMub25lT2YoSUNPTl9TSVpFUyksXG4gIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcbiAgaWNvbk1vcmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25Nb3JlU2l6ZTogUHJvcFR5cGVzLm9uZU9mKElDT05fU0laRVMpLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBidXR0b25SZWY6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuXG5leHBvcnQgY29uc3QgQnV0dG9uSWNvbiA9ICh7IGljb24sIGFsaWduLCBzaXplLCBpbnZlcnNlLCBjbGFzc05hbWUsIHN0eWxlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGFsaWduQ2xhc3NOYW1lID0gSUNPTl9BTElHTlMuaW5kZXhPZihhbGlnbikgPj0gMCA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHthbGlnbn1gIDogbnVsbDtcbiAgY29uc3Qgc2l6ZUNsYXNzTmFtZSA9IElDT05fU0laRVMuaW5kZXhPZihzaXplKSA+PSAwID8gYHNsZHMtYnV0dG9uX19pY29uLS0ke3NpemV9YCA6IG51bGw7XG4gIGNvbnN0IGludmVyc2VDbGFzc05hbWUgPSBpbnZlcnNlID8gJ3NsZHMtYnV0dG9uX19pY29uLS1pbnZlcnNlJyA6IG51bGw7XG4gIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy1idXR0b25fX2ljb24nLCBhbGlnbkNsYXNzTmFtZSwgc2l6ZUNsYXNzTmFtZSxcbiAgICBpbnZlcnNlQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICBjb25zdCBpY29uU3R5bGUgPSB7IC4uLnN0eWxlLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfTtcbiAgcmV0dXJuIChcbiAgICA8SWNvblxuICAgICAgY2xhc3NOYW1lPXsgaWNvbkNsYXNzTmFtZXMgfSBpY29uPXsgaWNvbiB9IHRleHRDb2xvcj17IG51bGwgfSBzdHlsZT17IGljb25TdHlsZSB9XG4gICAgICB7IC4uLnByb3BzIH1cbiAgICAvPlxuICApO1xufTtcblxuQnV0dG9uSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG4iXX0=