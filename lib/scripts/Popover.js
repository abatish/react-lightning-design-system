'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.PopoverHeader = undefined;

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactDom = require('react-dom');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverHeader = exports.PopoverHeader = function PopoverHeader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'slds-popover__header' },
    props.children
  );
};

PopoverHeader.propTypes = {
  children: _propTypes2.default.node
};

var PopoverBody = exports.PopoverBody = function PopoverBody(props) {
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: 'slds-popover__body' }, props),
    props.children
  );
};

PopoverBody.propTypes = {
  children: _propTypes2.default.node
};

var Popover = function (_React$Component) {
  (0, _inherits3.default)(Popover, _React$Component);

  function Popover(props) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this));

    _this.state = {
      hidden: props.hidden
    };

    _this.documentClick = _this.documentClick.bind(_this);

    _this.isMouseEntered = false;

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.trigger) {
        document.addEventListener('click', this.documentClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.trigger) {
        document.removeEventListener('click', this.documentClick);
      }
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      this.isMouseEntered = true;
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      if (!this.props.hover) return;
      this.isMouseEntered = false;
      this.toggle(false);
    }
  }, {
    key: 'documentClick',
    value: function documentClick(e) {
      var triggerEl = void 0;
      var trigger = this.props.trigger;

      if (trigger) {
        var triggerElement = trigger();
        if (triggerElement && triggerElement.isReactComponent) {
          triggerEl = (0, _reactDom.findDOMNode)(triggerElement);
        } else {
          triggerEl = triggerElement;
        }
      }
      if (this.state.hidden || triggerEl && (0, _util.isElInChildren)(triggerEl, e.target)) return;
      var rootEl = (0, _reactDom.findDOMNode)(this);
      if (!(0, _util.isElInChildren)(rootEl, e.target)) {
        this.setState({
          hidden: true
        });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(value) {
      this.setState({
        hidden: typeof value !== 'undefined' ? !value : !this.state.hidden
      });
    }
  }, {
    key: 'mouseEntered',
    value: function mouseEntered() {
      return this.isMouseEntered;
    }
  }, {
    key: 'hidden',
    value: function hidden() {
      return this.state.hidden;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          position = _props.position,
          theme = _props.theme,
          tooltip = _props.tooltip,
          bodyStyle = _props.bodyStyle,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'position', 'theme', 'tooltip', 'bodyStyle']);

      var pprops = (0, _util.cleanProps)(props, Popover.propTypes);
      var popoverClassNames = (0, _classnames3.default)('slds-popover', (_classnames = {
        'slds-hide': this.state.hidden,
        'slds-popover--tooltip': tooltip
      }, (0, _defineProperty3.default)(_classnames, 'slds-nubbin--' + position, position), (0, _defineProperty3.default)(_classnames, 'slds-theme--' + theme, theme), _classnames));
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          className: popoverClassNames,
          role: 'dialog'
        }, pprops),
        _react2.default.createElement(
          PopoverBody,
          { style: bodyStyle },
          children
        )
      );
    }
  }]);
  return Popover;
}(_react2.default.Component);

exports.default = Popover;


var POPOVER_POSITIONS = ['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom'];

var POPOVER_THEMES = ['info', 'success', 'warning', 'error'];

Popover.propTypes = {
  position: _propTypes2.default.oneOf(POPOVER_POSITIONS),
  hidden: _propTypes2.default.bool,
  theme: _propTypes2.default.oneOf(POPOVER_THEMES),
  tooltip: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  hover: _propTypes2.default.bool,
  trigger: _propTypes2.default.func,
  /* eslint-disable react/forbid-prop-types */
  bodyStyle: _propTypes2.default.object
};

Popover.defaultProps = {
  hidden: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlckhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIiwiUG9wb3ZlckJvZHkiLCJQb3BvdmVyIiwic3RhdGUiLCJoaWRkZW4iLCJkb2N1bWVudENsaWNrIiwiYmluZCIsImlzTW91c2VFbnRlcmVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidHJpZ2dlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJob3ZlciIsInRvZ2dsZSIsImUiLCJ0cmlnZ2VyRWwiLCJ0cmlnZ2VyRWxlbWVudCIsImlzUmVhY3RDb21wb25lbnQiLCJ0YXJnZXQiLCJyb290RWwiLCJzZXRTdGF0ZSIsInZhbHVlIiwicG9zaXRpb24iLCJ0aGVtZSIsInRvb2x0aXAiLCJib2R5U3R5bGUiLCJwcHJvcHMiLCJwb3BvdmVyQ2xhc3NOYW1lcyIsIkNvbXBvbmVudCIsIlBPUE9WRVJfUE9TSVRJT05TIiwiUE9QT1ZFUl9USEVNRVMiLCJvbmVPZiIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLHdDQUFnQixTQUFoQkEsYUFBZ0I7QUFBQSxTQUMzQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHNCQUFmO0FBQ0dDLFVBQU1DO0FBRFQsR0FEMkI7QUFBQSxDQUF0Qjs7QUFNUEYsY0FBY0csU0FBZCxHQUEwQjtBQUN4QkQsWUFBVSxvQkFBVUU7QUFESSxDQUExQjs7QUFJTyxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FDekI7QUFBQTtBQUFBLDZCQUFLLFdBQVUsb0JBQWYsSUFBd0NKLEtBQXhDO0FBQ0dBLFVBQU1D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REFNTkMsS0FOTSxFQU1JQSxLQU5KLGdCQUExQjtBQVNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQWUsS0FBS2pCLFlBRHRCO0FBRUUsd0JBQWUsS0FBS0MsWUFGdEI7QUFHRSxxQkFBV29CLGlCQUhiO0FBSUUsZ0JBQUs7QUFKUCxXQUtNRCxNQUxOO0FBT0U7QUFBQyxxQkFBRDtBQUFBLFlBQWEsT0FBT0QsU0FBcEI7QUFBZ0M3QjtBQUFoQztBQVBGLE9BREY7QUFXRDs7O0VBeEZrQyxnQkFBTWdDLFM7O2tCQUF0QjVCLE87OztBQTJGckIsSUFBTTZCLG9CQUFvQixDQUN4QixLQUR3QixFQUNqQixVQURpQixFQUNMLFdBREssRUFFeEIsUUFGd0IsRUFFZCxhQUZjLEVBRUMsY0FGRCxFQUd4QixNQUh3QixFQUdoQixVQUhnQixFQUdKLGFBSEksRUFJeEIsT0FKd0IsRUFJZixXQUplLEVBSUYsY0FKRSxDQUExQjs7QUFPQSxJQUFNQyxpQkFBaUIsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixTQUFwQixFQUErQixPQUEvQixDQUF2Qjs7QUFFQTlCLFFBQVFILFNBQVIsR0FBb0I7QUFDbEJ5QixZQUFVLG9CQUFVUyxLQUFWLENBQWdCRixpQkFBaEIsQ0FEUTtBQUVsQjNCLFVBQVEsb0JBQVU4QixJQUZBO0FBR2xCVCxTQUFPLG9CQUFVUSxLQUFWLENBQWdCRCxjQUFoQixDQUhXO0FBSWxCTixXQUFTLG9CQUFVUSxJQUpEO0FBS2xCcEMsWUFBVSxvQkFBVUUsSUFMRjtBQU1sQmMsU0FBTyxvQkFBVW9CLElBTkM7QUFPbEJ4QixXQUFTLG9CQUFVeUIsSUFQRDtBQVFsQjtBQUNBUixhQUFXLG9CQUFVUztBQVRILENBQXBCOztBQVlBbEMsUUFBUW1DLFlBQVIsR0FBdUI7QUFDckJqQyxVQUFRO0FBRGEsQ0FBdkIiLCJmaWxlIjoiUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBpc0VsSW5DaGlsZHJlbiwgY2xlYW5Qcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBQb3BvdmVySGVhZGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1wb3BvdmVyX19oZWFkZXInPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5Qb3BvdmVySGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBvcG92ZXJCb2R5ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1wb3BvdmVyX19ib2R5JyB7Li4ucHJvcHN9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlkZGVuOiBwcm9wcy5oaWRkZW4sXG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnRDbGljayA9IHRoaXMuZG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pc01vdXNlRW50ZXJlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5pc01vdXNlRW50ZXJlZCA9IHRydWU7XG4gIH1cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5ob3ZlcikgcmV0dXJuO1xuICAgIHRoaXMuaXNNb3VzZUVudGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gIH1cbiAgZG9jdW1lbnRDbGljayhlKSB7XG4gICAgbGV0IHRyaWdnZXJFbDtcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdHJpZ2dlcigpO1xuICAgICAgaWYgKHRyaWdnZXJFbGVtZW50ICYmIHRyaWdnZXJFbGVtZW50LmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgdHJpZ2dlckVsID0gZmluZERPTU5vZGUodHJpZ2dlckVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJpZ2dlckVsID0gdHJpZ2dlckVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhpZGRlbiB8fCAodHJpZ2dlckVsICYmIGlzRWxJbkNoaWxkcmVuKHRyaWdnZXJFbCwgZS50YXJnZXQpKSkgcmV0dXJuO1xuICAgIGNvbnN0IHJvb3RFbCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICghaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpZGRlbjogdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/ICF2YWx1ZSA6ICF0aGlzLnN0YXRlLmhpZGRlbixcbiAgICB9KTtcbiAgfVxuICBtb3VzZUVudGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb3VzZUVudGVyZWQ7XG4gIH1cbiAgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhpZGRlbjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcG9zaXRpb24sIHRoZW1lLCB0b29sdGlwLCBib2R5U3R5bGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBwcm9wcyA9IGNsZWFuUHJvcHMocHJvcHMsIFBvcG92ZXIucHJvcFR5cGVzKTtcbiAgICBjb25zdCBwb3BvdmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1wb3BvdmVyJyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaGlkZSc6IHRoaXMuc3RhdGUuaGlkZGVuLFxuICAgICAgICAnc2xkcy1wb3BvdmVyLS10b29sdGlwJzogdG9vbHRpcCxcbiAgICAgICAgW2BzbGRzLW51YmJpbi0tJHtwb3NpdGlvbn1gXTogcG9zaXRpb24sXG4gICAgICAgIFtgc2xkcy10aGVtZS0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBvbk1vdXNlRW50ZXI9eyB0aGlzLm9uTW91c2VFbnRlciB9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17IHRoaXMub25Nb3VzZUxlYXZlIH1cbiAgICAgICAgY2xhc3NOYW1lPXtwb3BvdmVyQ2xhc3NOYW1lc31cbiAgICAgICAgcm9sZT0nZGlhbG9nJ1xuICAgICAgICB7Li4ucHByb3BzfVxuICAgICAgPlxuICAgICAgICA8UG9wb3ZlckJvZHkgc3R5bGU9e2JvZHlTdHlsZX0+e2NoaWxkcmVufTwvUG9wb3ZlckJvZHk+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFBPUE9WRVJfUE9TSVRJT05TID0gW1xuICAndG9wJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsXG4gICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JyxcbiAgJ2xlZnQnLCAnbGVmdC10b3AnLCAnbGVmdC1ib3R0b20nLFxuICAncmlnaHQnLCAncmlnaHQtdG9wJywgJ3JpZ2h0LWJvdHRvbScsXG5dO1xuXG5jb25zdCBQT1BPVkVSX1RIRU1FUyA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXTtcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoUE9QT1ZFUl9QT1NJVElPTlMpLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFBPUE9WRVJfVEhFTUVTKSxcbiAgdG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaG92ZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGRlbjogdHJ1ZSxcbn07XG4iXX0=