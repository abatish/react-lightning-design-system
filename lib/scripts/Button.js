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
          title = _props3.title,
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
          props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'type', 'title', 'size', 'icon', 'iconAlign', 'iconMore', 'selected', 'alt', 'label', 'loading', 'iconSize', 'inverse', 'htmlType', 'children', 'buttonRef']);

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
          title: title,
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
  title: _propTypes2.default.string,
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
      title = _ref.title,
      align = _ref.align,
      size = _ref.size,
      inverse = _ref.inverse,
      className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties3.default)(_ref, ['icon', 'title', 'align', 'size', 'inverse', 'className', 'style']);

  var alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? 'slds-button__icon--' + align : null;
  var sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? 'slds-button__icon--' + size : null;
  var inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
  var iconClassNames = (0, _classnames3.default)('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
  var iconStyle = (0, _extends3.default)({}, style, { pointerEvents: 'none' });
  return _react2.default.createElement(_Icon2.default, (0, _extends3.default)({
    className: iconClassNames,
    icon: icon,
    textColor: null,
    style: iconStyle,
    title: title
  }, props));
};

exports.ButtonIcon = ButtonIcon;
ButtonIcon.propTypes = {
  className: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(['left', 'right']),
  size: _propTypes2.default.oneOf(['x-small', 'small', 'medium', 'large']),
  inverse: _propTypes2.default.bool,
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types,
  title: _propTypes2.default.string
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJvbkNsaWNrIiwiYmluZCIsImUiLCJub2RlIiwiZm9jdXMiLCJwcm9wcyIsImljb25TaXplIiwiaW52IiwiaWNvbiIsImljb25BbGlnbiIsInR5cGUiLCJpbnZlcnNlIiwidGVzdCIsImljb25Nb3JlIiwibGFiZWwiLCJjaGlsZHJlbiIsImFkam9pbmluZyIsImljb25Nb3JlU2l6ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwic2l6ZSIsInNlbGVjdGVkIiwiYWx0IiwibG9hZGluZyIsImh0bWxUeXBlIiwiYnV0dG9uUmVmIiwidHlwZUNsYXNzTmFtZSIsImJ0bkNsYXNzTmFtZXMiLCJjb21wb25lbnQiLCJpdGVtcyIsInJlbmRlckljb24iLCJyZW5kZXJJY29uTW9yZSIsIkJVVFRPTl9UWVBFUyIsIkJVVFRPTl9TSVpFUyIsIklDT05fU0laRVMiLCJJQ09OX0FMSUdOUyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mIiwiYm9vbCIsImZ1bmMiLCJCdXR0b25JY29uIiwiYWxpZ24iLCJzdHlsZSIsImFsaWduQ2xhc3NOYW1lIiwiaW5kZXhPZiIsInNpemVDbGFzc05hbWUiLCJpbnZlcnNlQ2xhc3NOYW1lIiwiaWNvbkNsYXNzTmFtZXMiLCJpY29uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUJBLE07OztBQUNuQixvQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIsT0FBZjtBQUZZO0FBR2I7Ozs7NEJBQ09DLEMsRUFBRztBQUNUO0FBQ0EsV0FBS0MsSUFBTCxDQUFVQyxLQUFWO0FBRlMsVUFHREosT0FIQyxHQUdXLEtBQUtL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QUFDQSxNQUFNcUMsaUJBQWlCLDBCQUFXLG1CQUFYLEVBQWdDSixjQUFoQyxFQUFnREUsYUFBaEQsRUFDckJDLGdCQURxQixFQUNIN0IsU0FERyxDQUF2QjtBQUVBLE1BQU0rQix1Q0FBaUJOLEtBQWpCLElBQXdCTyxlQUFlLE1BQXZDLEdBQU47QUFDQSxTQUNFO0FBQ0UsZUFBWUYsY0FEZDtBQUVFLFVBQU94QyxJQUZUO0FBR0UsZUFBWSxJQUhkO0FBSUUsV0FBUXlDLFNBSlY7QUFLRSxXQUFROUI7QUFMVixLQU1PZCxLQU5QLEVBREY7QUFVRCxDQWpCTTs7O0FBbUJQb0MsV0FBV0wsU0FBWCxHQUF1QjtBQUNyQmxCLGFBQVcsb0JBQVVtQixNQURBO0FBRXJCN0IsUUFBTSxvQkFBVTZCLE1BRks7QUFHckJLLFNBQU8sb0JBQVVKLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQixDQUhjO0FBSXJCbEIsUUFBTSxvQkFBVWtCLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixRQUFyQixFQUErQixPQUEvQixDQUFoQixDQUplO0FBS3JCM0IsV0FBUyxvQkFBVTRCLElBTEU7QUFNckJJLFNBQU8sb0JBQVVRLE1BTkksRUFNSTtBQUN6QmhDLFNBQU8sb0JBQVVrQjtBQVBJLENBQXZCIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICBvbkNsaWNrKGUpIHtcbiAgICAvLyBTYWZhcmksIEZGIHRvIHRyaWdnZXIgZm9jdXMgZXZlbnQgb24gY2xpY2tcbiAgICB0aGlzLm5vZGUuZm9jdXMoKTtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZSk7XG4gIH1cblxuICByZW5kZXJJY29uKGljb25TaXplLCBpbnYpIHtcbiAgICBjb25zdCB7IGljb24sIGljb25BbGlnbiwgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbnZlcnNlID0gaW52IHx8IC9cXC0/aW52ZXJzZSQvLnRlc3QodHlwZSk7XG4gICAgcmV0dXJuIDxCdXR0b25JY29uIGljb249eyBpY29uIH0gYWxpZ249eyBpY29uQWxpZ24gfSBzaXplPXsgaWNvblNpemUgfSBpbnZlcnNlPXsgaW52ZXJzZSB9IC8+O1xuICB9XG5cbiAgcmVuZGVySWNvbk1vcmUoKSB7XG4gICAgY29uc3QgeyBpY29uTW9yZSwgaWNvbiwgaWNvbkFsaWduLCBsYWJlbCwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWRqb2luaW5nID0gaWNvbiAmJiAoaWNvbkFsaWduID09PSAncmlnaHQnIHx8ICEobGFiZWwgfHwgY2hpbGRyZW4pKTtcbiAgICBjb25zdCBpY29uTW9yZVNpemUgPSB0aGlzLnByb3BzLmljb25Nb3JlU2l6ZSB8fCBhZGpvaW5pbmcgPyAneC1zbWFsbCcgOiAnc21hbGwnO1xuICAgIHJldHVybiA8QnV0dG9uSWNvbiBpY29uPXsgaWNvbk1vcmUgfSBhbGlnbj0ncmlnaHQnIHNpemU9eyBpY29uTW9yZVNpemUgfSAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIHR5cGUsIHRpdGxlLCBzaXplLCBpY29uLCBpY29uQWxpZ24sIGljb25Nb3JlLCBzZWxlY3RlZCwgYWx0LCBsYWJlbCwgbG9hZGluZyxcbiAgICAgIGljb25TaXplLCBpbnZlcnNlLCBodG1sVHlwZSA9ICdidXR0b24nLCBjaGlsZHJlbiwgYnV0dG9uUmVmLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZSBwcm9wcy5pbnZlcnNlO1xuICAgIGNvbnN0IHR5cGVDbGFzc05hbWUgPSB0eXBlID8gYHNsZHMtYnV0dG9uLS0ke3R5cGV9YCA6IG51bGw7XG4gICAgY29uc3QgYnRuQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy1idXR0b24nLFxuICAgICAgdHlwZUNsYXNzTmFtZSxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICAgW2BzbGRzLWJ1dHRvbi0tJHtzaXplfWBdOiBzaXplICYmICEvXmljb24tLy50ZXN0KHR5cGUpLFxuICAgICAgICBbYHNsZHMtYnV0dG9uLS1pY29uLSR7c2l6ZX1gXTogL14oeC1zbWFsbHxzbWFsbCkkLy50ZXN0KHNpemUpICYmIC9eaWNvbi0vLnRlc3QodHlwZSksXG4gICAgICB9XG4gICAgKTtcblxuICAgIGRlbGV0ZSBwcm9wcy5jb21wb25lbnQ7XG4gICAgZGVsZXRlIHByb3BzLml0ZW1zO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgcmVmPXsobm9kZSkgPT4ge1xuICAgICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgICAgaWYgKGJ1dHRvblJlZikgYnV0dG9uUmVmKG5vZGUpO1xuICAgICAgICB9fVxuICAgICAgICB0aXRsZT17IHRpdGxlIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgYnRuQ2xhc3NOYW1lcyB9XG4gICAgICAgIHR5cGU9eyBodG1sVHlwZSB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHsgaWNvbiAmJiBpY29uQWxpZ24gIT09ICdyaWdodCcgPyB0aGlzLnJlbmRlckljb24oaWNvblNpemUsIGludmVyc2UpIDogbnVsbCB9XG4gICAgICAgIHsgY2hpbGRyZW4gfHwgbGFiZWwgfVxuICAgICAgICB7IGljb24gJiYgaWNvbkFsaWduID09PSAncmlnaHQnID8gdGhpcy5yZW5kZXJJY29uKGljb25TaXplLCBpbnZlcnNlKSA6IG51bGwgfVxuICAgICAgICB7IGljb25Nb3JlID8gdGhpcy5yZW5kZXJJY29uTW9yZSgpIDogbnVsbCB9XG4gICAgICAgIHsgYWx0ID8gPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0Jz57IGFsdCB9PC9zcGFuPiA6IG51bGwgfVxuICAgICAgICB7IGxvYWRpbmcgPyA8U3Bpbm5lciAvPiA6IG51bGwgfVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQlVUVE9OX1RZUEVTID0gW1xuICAnbmV1dHJhbCcsXG4gICdicmFuZCcsXG4gICdkZXN0cnVjdGl2ZScsXG4gICdpbnZlcnNlJyxcbiAgJ2ljb24tYmFyZScsXG4gICdpY29uLWNvbnRhaW5lcicsXG4gICdpY29uLWludmVyc2UnLFxuICAnaWNvbi1tb3JlJyxcbiAgJ2ljb24tYm9yZGVyJyxcbiAgJ2ljb24tYm9yZGVyLWZpbGxlZCcsXG5dO1xuXG5jb25zdCBCVVRUT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG5cbmNvbnN0IElDT05fU0laRVMgPSBbJ3gtc21hbGwnLCAnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ107XG5cbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoQlVUVE9OX1RZUEVTKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKEJVVFRPTl9TSVpFUyksXG4gIGh0bWxUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvblNpemU6IFByb3BUeXBlcy5vbmVPZihJQ09OX1NJWkVTKSxcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBpY29uTW9yZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbk1vcmVTaXplOiBQcm9wVHlwZXMub25lT2YoSUNPTl9TSVpFUyksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGJ1dHRvblJlZjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBCdXR0b25JY29uID0gKHsgaWNvbiwgdGl0bGUsIGFsaWduLCBzaXplLCBpbnZlcnNlLCBjbGFzc05hbWUsIHN0eWxlLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGFsaWduQ2xhc3NOYW1lID0gSUNPTl9BTElHTlMuaW5kZXhPZihhbGlnbikgPj0gMCA/IGBzbGRzLWJ1dHRvbl9faWNvbi0tJHthbGlnbn1gIDogbnVsbDtcbiAgY29uc3Qgc2l6ZUNsYXNzTmFtZSA9IElDT05fU0laRVMuaW5kZXhPZihzaXplKSA+PSAwID8gYHNsZHMtYnV0dG9uX19pY29uLS0ke3NpemV9YCA6IG51bGw7XG4gIGNvbnN0IGludmVyc2VDbGFzc05hbWUgPSBpbnZlcnNlID8gJ3NsZHMtYnV0dG9uX19pY29uLS1pbnZlcnNlJyA6IG51bGw7XG4gIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy1idXR0b25fX2ljb24nLCBhbGlnbkNsYXNzTmFtZSwgc2l6ZUNsYXNzTmFtZSxcbiAgICBpbnZlcnNlQ2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICBjb25zdCBpY29uU3R5bGUgPSB7IC4uLnN0eWxlLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfTtcbiAgcmV0dXJuIChcbiAgICA8SWNvblxuICAgICAgY2xhc3NOYW1lPXsgaWNvbkNsYXNzTmFtZXMgfVxuICAgICAgaWNvbj17IGljb24gfVxuICAgICAgdGV4dENvbG9yPXsgbnVsbCB9XG4gICAgICBzdHlsZT17IGljb25TdHlsZSB9XG4gICAgICB0aXRsZT17IHRpdGxlIH1cbiAgICAgIHsgLi4ucHJvcHMgfVxuICAgIC8+XG4gICk7XG59O1xuXG5CdXR0b25JY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSksXG4gIGludmVyc2U6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19