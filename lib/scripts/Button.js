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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  className: _propTypes2.default.string,
  label: _propTypes2.default.node,
  alt: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(BUTTON_TYPES),
  size: _propTypes2.default.oneOf(BUTTON_SIZES),
  htmlType: _propTypes2.default.string,
  selected: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  iconSize: _propTypes2.default.oneOf(ICON_SIZES),
  iconAlign: _propTypes2.default.oneOf(ICON_ALIGNS),
  iconMore: _propTypes2.default.string,
  iconMoreSize: _propTypes2.default.oneOf(ICON_SIZES),
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  buttonRef: _propTypes2.default.func
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
  className: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'right']),
  size: _propTypes2.default.oneOf(['x-small', 'small', 'medium', 'large']),
  inverse: _propTypes2.default.bool,
  style: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJvbkNsaWNrIiwiYmluZCIsImUiLCJub2RlIiwiZm9jdXMiLCJwcm9wcyIsImljb25TaXplIiwiaW52IiwiaWNvbiIsImljb25BbGlnbiIsInR5cGUiLCJpbnZlcnNlIiwidGVzdCIsImljb25Nb3JlIiwibGFiZWwiLCJjaGlsZHJlbiIsImFkam9pbmluZyIsImljb25Nb3JlU2l6ZSIsImNsYXNzTmFtZSIsInNpemUiLCJzZWxlY3RlZCIsImFsdCIsImxvYWRpbmciLCJodG1sVHlwZSIsImJ1dHRvblJlZiIsInR5cGVDbGFzc05hbWUiLCJidG5DbGFzc05hbWVzIiwiY29tcG9uZW50IiwiaXRlbXMiLCJyZW5kZXJJY29uIiwicmVuZGVySWNvbk1vcmUiLCJCVVRUT05fVFlQRVMiLCJCVVRUT05fU0laRVMiLCJJQ09OX1NJWkVTIiwiSUNPTl9BTElHTlMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwiQnV0dG9uSWNvbiIsImFsaWduIiwic3R5bGUiLCJhbGlnbkNsYXNzTmFtZSIsImluZGV4T2YiLCJzaXplQ2xhc3NOYW1lIiwiaW52ZXJzZUNsYXNzTmFtZSIsImljb25DbGFzc05hbWVzIiwiaWNvblN0eWxlIiwicG9pbnRlckV2ZW50cyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLE9BQWY7QUFGWTtBQUdiOzs7OzRCQUNPQyxDLEVBQUc7QUFDVDtBQUNBLFdBQUtDLElBQUwsQ0FBVUMsS0FBVjtBQUZTLFVBR0RKLE9BSEMsR0FHVyxLQUFLSyxLQUhoQixD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d0JPLGVBQWUsTUFBdkMsR0FBTjtBQUNBLFNBQ0U7QUFDRSxlQUFZRixjQURkLEVBQytCLE1BQU92QyxJQUR0QyxFQUM2QyxXQUFZLElBRHpELEVBQ2dFLE9BQVF3QztBQUR4RSxLQUVPM0MsS0FGUCxFQURGO0FBTUQsQ0FiTTs7O0FBZVBtQyxXQUFXTCxTQUFYLEdBQXVCO0FBQ3JCakIsYUFBVyxvQkFBVWtCLE1BREE7QUFFckI1QixRQUFNLG9CQUFVNEIsTUFGSztBQUdyQkssU0FBTyxvQkFBVUosS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCLENBSGM7QUFJckJsQixRQUFNLG9CQUFVa0IsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFFBQXJCLEVBQStCLE9BQS9CLENBQWhCLENBSmU7QUFLckIxQixXQUFTLG9CQUFVMkIsSUFMRTtBQU1yQkksU0FBTyxvQkFBVVEsTUFOSSxDQU1JO0FBTkosQ0FBdkIiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIG9uQ2xpY2soZSkge1xuICAgIC8vIFNhZmFyaSwgRkYgdG8gdHJpZ2dlciBmb2N1cyBldmVudCBvbiBjbGlja1xuICAgIHRoaXMubm9kZS5mb2N1cygpO1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DbGljaykgb25DbGljayhlKTtcbiAgfVxuXG4gIHJlbmRlckljb24oaWNvblNpemUsIGludikge1xuICAgIGNvbnN0IHsgaWNvbiwgaWNvbkFsaWduLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGludmVyc2UgPSBpbnYgfHwgL1xcLT9pbnZlcnNlJC8udGVzdCh0eXBlKTtcbiAgICByZXR1cm4gPEJ1dHRvbkljb24gaWNvbj17IGljb24gfSBhbGlnbj17IGljb25BbGlnbiB9IHNpemU9eyBpY29uU2l6ZSB9IGludmVyc2U9eyBpbnZlcnNlIH0gLz47XG4gIH1cblxuICByZW5kZXJJY29uTW9yZSgpIHtcbiAgICBjb25zdCB7IGljb25Nb3JlLCBpY29uLCBpY29uQWxpZ24sIGxhYmVsLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhZGpvaW5pbmcgPSBpY29uICYmIChpY29uQWxpZ24gPT09ICdyaWdodCcgfHwgIShsYWJlbCB8fCBjaGlsZHJlbikpO1xuICAgIGNvbnN0IGljb25Nb3JlU2l6ZSA9IHRoaXMucHJvcHMuaWNvbk1vcmVTaXplIHx8IGFkam9pbmluZyA/ICd4LXNtYWxsJyA6ICdzbWFsbCc7XG4gICAgcmV0dXJuIDxCdXR0b25JY29uIGljb249eyBpY29uTW9yZSB9IGFsaWduPSdyaWdodCcgc2l6ZT17IGljb25Nb3JlU2l6ZSB9IC8+O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgdHlwZSwgc2l6ZSwgaWNvbiwgaWNvbkFsaWduLCBpY29uTW9yZSwgc2VsZWN0ZWQsIGFsdCwgbGFiZWwsIGxvYWRpbmcsXG4gICAgICBpY29uU2l6ZSwgaW52ZXJzZSwgaHRtbFR5cGUgPSAnYnV0dG9uJywgY2hpbGRyZW4sIGJ1dHRvblJlZiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBkZWxldGUgcHJvcHMuaW52ZXJzZTtcbiAgICBjb25zdCB0eXBlQ2xhc3NOYW1lID0gdHlwZSA/IGBzbGRzLWJ1dHRvbi0tJHt0eXBlfWAgOiBudWxsO1xuICAgIGNvbnN0IGJ0bkNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtYnV0dG9uJyxcbiAgICAgIHR5cGVDbGFzc05hbWUsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAgIFtgc2xkcy1idXR0b24tLSR7c2l6ZX1gXTogc2l6ZSAmJiAhL15pY29uLS8udGVzdCh0eXBlKSxcbiAgICAgICAgW2BzbGRzLWJ1dHRvbi0taWNvbi0ke3NpemV9YF06IC9eKHgtc21hbGx8c21hbGwpJC8udGVzdChzaXplKSAmJiAvXmljb24tLy50ZXN0KHR5cGUpLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBkZWxldGUgcHJvcHMuY29tcG9uZW50O1xuICAgIGRlbGV0ZSBwcm9wcy5pdGVtcztcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIHJlZj17KG5vZGUpID0+IHtcbiAgICAgICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgICAgIGlmIChidXR0b25SZWYpIGJ1dHRvblJlZihub2RlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXsgYnRuQ2xhc3NOYW1lcyB9XG4gICAgICAgIHR5cGU9eyBodG1sVHlwZSB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHsgaWNvbiAmJiBpY29uQWxpZ24gIT09ICdyaWdodCcgPyB0aGlzLnJlbmRlckljb24oaWNvblNpemUsIGludmVyc2UpIDogbnVsbCB9XG4gICAgICAgIHsgY2hpbGRyZW4gfHwgbGFiZWwgfVxuICAgICAgICB7IGljb24gJiYgaWNvbkFsaWduID09PSAncmlnaHQnID8gdGhpcy5yZW5kZXJJY29uKGljb25TaXplLCBpbnZlcnNlKSA6IG51bGwgfVxuICAgICAgICB7IGljb25Nb3JlID8gdGhpcy5yZW5kZXJJY29uTW9yZSgpIDogbnVsbCB9XG4gICAgICAgIHsgYWx0ID8gPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0Jz57IGFsdCB9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICB7IGxvYWRpbmcgPyA8U3Bpbm5lciAvPiA6IG51bGwgfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQlVUVE9OX1RZUEVTID0gW1xuICAnbmV1dHJhbCcsXG4gICdicmFuZCcsXG4gICdkZXN0cnVjdGl2ZScsXG4gICdpbnZlcnNlJyxcbiAgJ2ljb24tYmFyZScsXG4gICdpY29uLWNvbnRhaW5lcicsXG4gICdpY29uLWludmVyc2UnLFxuICAnaWNvbi1tb3JlJyxcbiAgJ2ljb24tYm9yZGVyJyxcbiAgJ2ljb24tYm9yZGVyLWZpbGxlZCcsXG5dO1xuXG5jb25zdCBCVVRUT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG5cbmNvbnN0IElDT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG5cbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihCVVRUT05fVFlQRVMpLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoQlVUVE9OX1NJWkVTKSxcbiAgaHRtbFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uU2l6ZTogUHJvcFR5cGVzLm9uZU9mKElDT05fU0laRVMpLFxuICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gIGljb25Nb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uTW9yZVNpemU6IFByb3BUeXBlcy5vbmVPZihJQ09OX1NJWkVTKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgYnV0dG9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkljb24gPSAoeyBpY29uLCBhbGlnbiwgc2l6ZSwgaW52ZXJzZSwgY2xhc3NOYW1lLCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBhbGlnbkNsYXNzTmFtZSA9IElDT05fQUxJR05TLmluZGV4T2YoYWxpZ24pID49IDAgPyBgc2xkcy1idXR0b25fX2ljb24tLSR7YWxpZ259YCA6IG51bGw7XG4gIGNvbnN0IHNpemVDbGFzc05hbWUgPSBJQ09OX1NJWkVTLmluZGV4T2Yoc2l6ZSkgPj0gMCA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHtzaXplfWAgOiBudWxsO1xuICBjb25zdCBpbnZlcnNlQ2xhc3NOYW1lID0gaW52ZXJzZSA/ICdzbGRzLWJ1dHRvbl9faWNvbi0taW52ZXJzZScgOiBudWxsO1xuICBjb25zdCBpY29uQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtYnV0dG9uX19pY29uJywgYWxpZ25DbGFzc05hbWUsIHNpemVDbGFzc05hbWUsXG4gICAgaW52ZXJzZUNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcbiAgY29uc3QgaWNvblN0eWxlID0geyAuLi5zdHlsZSwgcG9pbnRlckV2ZW50czogJ25vbmUnIH07XG4gIHJldHVybiAoXG4gICAgPEljb25cbiAgICAgIGNsYXNzTmFtZT17IGljb25DbGFzc05hbWVzIH0gaWNvbj17IGljb24gfSB0ZXh0Q29sb3I9eyBudWxsIH0gc3R5bGU9eyBpY29uU3R5bGUgfVxuICAgICAgeyAuLi5wcm9wcyB9XG4gICAgLz5cbiAgKTtcbn07XG5cbkJ1dHRvbkljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuIl19