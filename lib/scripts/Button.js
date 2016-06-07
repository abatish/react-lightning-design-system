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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var _props = this.props;
      var icon = _props.icon;
      var iconAlign = _props.iconAlign;
      var iconSize = _props.iconSize;
      var type = _props.type;
      var inverse = this.props.inverse;

      inverse = inverse || /\-?inverse$/.test(type);
      return _react2.default.createElement(ButtonIcon, { icon: icon, align: iconAlign, size: iconSize, inverse: inverse });
    }
  }, {
    key: 'renderIconMore',
    value: function renderIconMore() {
      var _props2 = this.props;
      var iconMore = _props2.iconMore;
      var icon = _props2.icon;
      var iconAlign = _props2.iconAlign;
      var label = _props2.label;
      var children = _props2.children;

      var adjoining = icon && (iconAlign === 'right' || !(label || children));
      var iconMoreSize = this.props.iconMoreSize || adjoining ? 'x-small' : 'small';
      return _react2.default.createElement(ButtonIcon, { icon: iconMore, align: 'right', size: iconMoreSize });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props3 = this.props;
      var className = _props3.className;
      var type = _props3.type;
      var size = _props3.size;
      var icon = _props3.icon;
      var iconSize = _props3.iconSize;
      var iconAlign = _props3.iconAlign;
      var iconMore = _props3.iconMore;
      var selected = _props3.selected;
      var alt = _props3.alt;
      var label = _props3.label;
      var _props3$htmlType = _props3.htmlType;
      var htmlType = _props3$htmlType === undefined ? 'button' : _props3$htmlType;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'type', 'size', 'icon', 'iconSize', 'iconAlign', 'iconMore', 'selected', 'alt', 'label', 'htmlType', 'children']);

      var typeClassName = type ? 'slds-button--' + type : null;
      var btnClassNames = (0, _classnames3.default)(className, 'slds-button', typeClassName, (_classnames = {
        'slds-is-selected': selected
      }, (0, _defineProperty3.default)(_classnames, 'slds-button--' + size, size && !/^icon-/.test(type)), (0, _defineProperty3.default)(_classnames, 'slds-button--icon-' + size, /^(x-small|small)$/.test(size) && /^icon-/.test(type)), _classnames));
      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({ className: btnClassNames, type: htmlType }, props),
        icon && iconAlign !== 'right' ? this.renderIcon() : null,
        children || label,
        icon && iconAlign === 'right' ? this.renderIcon() : null,
        iconMore ? this.renderIconMore() : null,
        alt ? _react2.default.createElement(
          'span',
          { className: 'slds-assistive-text' },
          alt
        ) : null
      );
    }
  }]);
  return Button;
}(_react2.default.Component);

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
  disabled: _react.PropTypes.bool,
  selected: _react.PropTypes.bool,
  inverse: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  iconSize: _react.PropTypes.oneOf(ICON_SIZES),
  iconAlign: _react.PropTypes.oneOf(ICON_ALIGNS),
  iconMore: _react.PropTypes.string,
  iconMoreSize: _react.PropTypes.oneOf(ICON_SIZES),
  children: _react.PropTypes.node
};

var ButtonIcon = exports.ButtonIcon = function (_React$Component2) {
  (0, _inherits3.default)(ButtonIcon, _React$Component2);

  function ButtonIcon() {
    (0, _classCallCheck3.default)(this, ButtonIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonIcon, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var icon = _props4.icon;
      var align = _props4.align;
      var size = _props4.size;
      var inverse = _props4.inverse;
      var className = _props4.className;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['icon', 'align', 'size', 'inverse', 'className']);

      var alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? 'slds-button__icon--' + align : null;
      var sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? 'slds-button__icon--' + size : null;
      var inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
      var iconClassNames = (0, _classnames3.default)('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
      return _react2.default.createElement(_Icon2.default, (0, _extends3.default)({ className: iconClassNames, icon: icon, textColor: null }, props));
    }
  }]);
  return ButtonIcon;
}(_react2.default.Component);

ButtonIcon.propTypes = {
  className: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'right']),
  size: _react.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  inverse: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQixNOzs7Ozs7Ozs7O2lDQUNOO0FBQUEsbUJBQ2lDLEtBQUssS0FEdEM7QUFBQSxVQUNILElBREcsVUFDSCxJQURHO0FBQUEsVUFDRyxTQURILFVBQ0csU0FESDtBQUFBLFVBQ2MsUUFEZCxVQUNjLFFBRGQ7QUFBQSxVQUN3QixJQUR4QixVQUN3QixJQUR4QjtBQUFBLFVBRUwsT0FGSyxHQUVPLEtBQUssS0FGWixDQUVMLE9BRks7O0FBR1gsZ0JBQVUsV0FBVyxjQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBckI7QUFDQSxhQUFPLDhCQUFDLFVBQUQsSUFBWSxNQUFPLElBQW5CLEVBQTBCLE9BQVEsU0FBbEMsRUFBOEMsTUFBTyxRQUFyRCxFQUFnRSxTQUFVLE9BQTFFLEdBQVA7QUFDRDs7O3FDQUVnQjtBQUFBLG9CQUN3QyxLQUFLLEtBRDdDO0FBQUEsVUFDUCxRQURPLFdBQ1AsUUFETztBQUFBLFVBQ0csSUFESCxXQUNHLElBREg7QUFBQSxVQUNTLFNBRFQsV0FDUyxTQURUO0FBQUEsVUFDb0IsS0FEcEIsV0FDb0IsS0FEcEI7QUFBQSxVQUMyQixRQUQzQixXQUMyQixRQUQzQjs7QUFFZixVQUFNLFlBQVksU0FBUyxjQUFjLE9BQWQsSUFBeUIsRUFBRSxTQUFTLFFBQVgsQ0FBbEMsQ0FBbEI7QUFDQSxVQUFNLGVBQWUsS0FBSyxLQUFMLENBQVcsWUFBWCxJQUEyQixTQUEzQixHQUF1QyxTQUF2QyxHQUFtRCxPQUF4RTtBQUNBLGFBQU8sOEJBQUMsVUFBRCxJQUFZLE1BQU8sUUFBbkIsRUFBOEIsT0FBTSxPQUFwQyxFQUE0QyxNQUFPLFlBQW5ELEdBQVA7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsb0JBQytILEtBQUssS0FEcEk7QUFBQSxV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LEtBRFAsV0FDTyxLQURQO0FBQUEsVUFDYyxJQURkLFdBQ2MsSUFEZDtBQUFBLFVBQ29CLE9BRHBCLFdBQ29CLE9BRHBCO0FBQUEsVUFDNkIsU0FEN0IsV0FDNkIsU0FEN0I7QUFBQSxVQUMyQyxLQUQzQzs7QUFFUCxVQUFNLGlCQUFpQixZQUFZLE9BQVosQ0FBb0IsS0FBcEIsS0FBOEIsQ0FBOUIsMkJBQXdELEtBQXhELEdBQWtFLElBQXpGO0FBQ0EsVUFBTSxnQkFBZ0IsV0FBVyxPQUFYLENBQW1CLElBQW5CLEtBQTRCLENBQTVCLDJCQUFzRCxJQUF0RCxHQUErRCxJQUFyRjtBQUNBLFVBQU0sbUJBQW1CLFVBQVUsNEJBQVYsR0FBeUMsSUFBbEU7QUFDQSxVQUFNLGlCQUFpQiwwQkFBVyxtQkFBWCxFQUFnQyxjQUFoQyxFQUFnRCxhQUFoRCxFQUErRCxnQkFBL0QsRUFBaUYsU0FBakYsQ0FBdkI7QUFDQSxhQUFPLHVFQUFNLFdBQVksY0FBbEIsRUFBbUMsTUFBTyxJQUExQyxFQUFpRCxXQUFZLElBQTdELElBQXlFLEtBQXpFLEVBQVA7QUFDRDs7O0VBUjZCLGdCQUFNLFM7O0FBV3RDLFdBQVcsU0FBWCxHQUF1QjtBQUNyQixhQUFXLGlCQUFVLE1BREE7QUFFckIsUUFBTSxpQkFBVSxNQUZLO0FBR3JCLFNBQU8saUJBQVUsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCLENBSGM7QUFJckIsUUFBTSxpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsT0FBL0IsQ0FBaEIsQ0FKZTtBQUtyQixXQUFTLGlCQUFVO0FBTEUsQ0FBdkIiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlckljb24oKSB7XHJcbiAgICBjb25zdCB7IGljb24sIGljb25BbGlnbiwgaWNvblNpemUsIHR5cGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBpbnZlcnNlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaW52ZXJzZSA9IGludmVyc2UgfHwgL1xcLT9pbnZlcnNlJC8udGVzdCh0eXBlKTtcclxuICAgIHJldHVybiA8QnV0dG9uSWNvbiBpY29uPXsgaWNvbiB9IGFsaWduPXsgaWNvbkFsaWduIH0gc2l6ZT17IGljb25TaXplIH0gaW52ZXJzZT17IGludmVyc2UgfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlckljb25Nb3JlKCkge1xyXG4gICAgY29uc3QgeyBpY29uTW9yZSwgaWNvbiwgaWNvbkFsaWduLCBsYWJlbCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhZGpvaW5pbmcgPSBpY29uICYmIChpY29uQWxpZ24gPT09ICdyaWdodCcgfHwgIShsYWJlbCB8fCBjaGlsZHJlbikpO1xyXG4gICAgY29uc3QgaWNvbk1vcmVTaXplID0gdGhpcy5wcm9wcy5pY29uTW9yZVNpemUgfHwgYWRqb2luaW5nID8gJ3gtc21hbGwnIDogJ3NtYWxsJztcclxuICAgIHJldHVybiA8QnV0dG9uSWNvbiBpY29uPXsgaWNvbk1vcmUgfSBhbGlnbj0ncmlnaHQnIHNpemU9eyBpY29uTW9yZVNpemUgfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0eXBlLCBzaXplLCBpY29uLCBpY29uU2l6ZSwgaWNvbkFsaWduLCBpY29uTW9yZSwgc2VsZWN0ZWQsIGFsdCwgbGFiZWwsIGh0bWxUeXBlID0gJ2J1dHRvbicsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlID8gYHNsZHMtYnV0dG9uLS0ke3R5cGV9YCA6IG51bGw7XHJcbiAgICBjb25zdCBidG5DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAnc2xkcy1idXR0b24nLFxyXG4gICAgICB0eXBlQ2xhc3NOYW1lLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcclxuICAgICAgICBbYHNsZHMtYnV0dG9uLS0ke3NpemV9YF06IHNpemUgJiYgIS9eaWNvbi0vLnRlc3QodHlwZSksXHJcbiAgICAgICAgW2BzbGRzLWJ1dHRvbi0taWNvbi0ke3NpemV9YF06IC9eKHgtc21hbGx8c21hbGwpJC8udGVzdChzaXplKSAmJiAvXmljb24tLy50ZXN0KHR5cGUpLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBidG5DbGFzc05hbWVzIH0gdHlwZT17IGh0bWxUeXBlIH0geyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIHsgaWNvbiAmJiBpY29uQWxpZ24gIT09ICdyaWdodCcgPyB0aGlzLnJlbmRlckljb24oKSA6IG51bGwgfVxyXG4gICAgICAgIHsgY2hpbGRyZW4gfHwgbGFiZWwgfVxyXG4gICAgICAgIHsgaWNvbiAmJiBpY29uQWxpZ24gPT09ICdyaWdodCcgPyB0aGlzLnJlbmRlckljb24oKSA6IG51bGwgfVxyXG4gICAgICAgIHsgaWNvbk1vcmUgPyB0aGlzLnJlbmRlckljb25Nb3JlKCkgOiBudWxsIH1cclxuICAgICAgICB7IGFsdCA/IDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBhbHQgfTwvc3Bhbj4gOiBudWxsIH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJVVFRPTl9UWVBFUyA9IFtcclxuICAnbmV1dHJhbCcsXHJcbiAgJ2JyYW5kJyxcclxuICAnZGVzdHJ1Y3RpdmUnLFxyXG4gICdpbnZlcnNlJyxcclxuICAnaWNvbi1iYXJlJyxcclxuICAnaWNvbi1jb250YWluZXInLFxyXG4gICdpY29uLWludmVyc2UnLFxyXG4gICdpY29uLW1vcmUnLFxyXG4gICdpY29uLWJvcmRlcicsXHJcbiAgJ2ljb24tYm9yZGVyLWZpbGxlZCcsXHJcbl07XHJcblxyXG5jb25zdCBCVVRUT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XHJcblxyXG5jb25zdCBJQ09OX1NJWkVTID0gWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddO1xyXG5cclxuY29uc3QgSUNPTl9BTElHTlMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcclxuXHJcbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9UWVBFUyksXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9TSVpFUyksXHJcbiAgaHRtbFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25TaXplOiBQcm9wVHlwZXMub25lT2YoSUNPTl9TSVpFUyksXHJcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxyXG4gIGljb25Nb3JlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb25Nb3JlU2l6ZTogUHJvcFR5cGVzLm9uZU9mKElDT05fU0laRVMpLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpY29uLCBhbGlnbiwgc2l6ZSwgaW52ZXJzZSwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGFsaWduQ2xhc3NOYW1lID0gSUNPTl9BTElHTlMuaW5kZXhPZihhbGlnbikgPj0gMCA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHthbGlnbn1gIDogbnVsbDtcclxuICAgIGNvbnN0IHNpemVDbGFzc05hbWUgPSBJQ09OX1NJWkVTLmluZGV4T2Yoc2l6ZSkgPj0gMCA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHtzaXplfWAgOiBudWxsO1xyXG4gICAgY29uc3QgaW52ZXJzZUNsYXNzTmFtZSA9IGludmVyc2UgPyAnc2xkcy1idXR0b25fX2ljb24tLWludmVyc2UnIDogbnVsbDtcclxuICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy1idXR0b25fX2ljb24nLCBhbGlnbkNsYXNzTmFtZSwgc2l6ZUNsYXNzTmFtZSwgaW52ZXJzZUNsYXNzTmFtZSwgY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiA8SWNvbiBjbGFzc05hbWU9eyBpY29uQ2xhc3NOYW1lcyB9IGljb249eyBpY29uIH0gdGV4dENvbG9yPXsgbnVsbCB9IHsgLi4ucHJvcHMgfSAvPjtcclxuICB9XHJcbn1cclxuXHJcbkJ1dHRvbkljb24ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxyXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iXX0=