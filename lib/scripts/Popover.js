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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BvcG92ZXIuanMiXSwibmFtZXMiOlsiUG9wb3ZlckhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiUG9wb3ZlckJvZHkiLCJQb3BvdmVyIiwic3RhdGUiLCJoaWRkZW4iLCJkb2N1bWVudENsaWNrIiwiYmluZCIsImlzTW91c2VFbnRlcmVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidHJpZ2dlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJob3ZlciIsInRvZ2dsZSIsImUiLCJ0cmlnZ2VyRWwiLCJ0cmlnZ2VyRWxlbWVudCIsImlzUmVhY3RDb21wb25lbnQiLCJ0YXJnZXQiLCJyb290RWwiLCJzZXRTdGF0ZSIsInZhbHVlIiwicG9zaXRpb24iLCJ0aGVtZSIsInRvb2x0aXAiLCJib2R5U3R5bGUiLCJwcHJvcHMiLCJwb3BvdmVyQ2xhc3NOYW1lcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUE9QT1ZFUl9QT1NJVElPTlMiLCJQT1BPVkVSX1RIRU1FUyIsIm9uZU9mIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBRU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFNBQzNCO0FBQUE7QUFBQSxNQUFLLFdBQVUsc0JBQWY7QUFDR0MsVUFBTUM7QUFEVCxHQUQyQjtBQUFBLENBQXRCOztBQU1QRixjQUFjRyxTQUFkLEdBQTBCO0FBQ3hCRCxZQUFVRSxvQkFBVUM7QUFESSxDQUExQjs7QUFJTyxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FDekI7QUFBQTtBQUFBLDZCQUFLLFdBQVUsb0JBQWYsSUFBd0NMLEtBQXhDO0FBQ0dBLFVBQU1DO0FBRFQsR0FEeUI7QUFBQSxDQUFwQjs7QUFNUEksWUFBWUgsU0FBWixHQUF3QjtBQUN0QkQsWUFBVUUsb0JBQVVDO0FBREUsQ0FBeEI7O0lBSXFCRSxPOzs7QUFDbkIsbUJBQVlOLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFHakIsVUFBS08sS0FBTCxHQUFhO0FBQ1hDLGNBQVFSLE1BQU1RO0FBREgsS0FBYjs7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCOztBQUVBLFVBQUtDLGNBQUwsR0FBc0IsS0FBdEI7O0FBRUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQUNBLFVBQUtHLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkgsSUFBbEIsT0FBcEI7QUFaaUI7QUFhbEI7Ozs7d0NBQ21CO0FBQ2xCLFVBQUksS0FBS1YsS0FBTCxDQUFXYyxPQUFmLEVBQXdCO0FBQ3RCQyxpQkFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBS1AsYUFBeEM7QUFDRDtBQUNGOzs7MkNBQ3NCO0FBQ3JCLFVBQUksS0FBS1QsS0FBTCxDQUFXYyxPQUFmLEVBQXdCO0FBQ3RCQyxpQkFBU0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS1IsYUFBM0M7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixXQUFLRSxjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7OzttQ0FDYztBQUNiLFVBQUksQ0FBQyxLQUFLWCxLQUFMLENBQVdrQixLQUFoQixFQUF1QjtBQUN2QixXQUFLUCxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsV0FBS1EsTUFBTCxDQUFZLEtBQVo7QUFDRDs7O2tDQUNhQyxDLEVBQUc7QUFDZixVQUFJQyxrQkFBSjtBQURlLFVBRVBQLE9BRk8sR0FFSyxLQUFLZCxLQUZWLENBRVBjLE9BRk87O0FBR2YsVUFBSUEsT0FBSixFQUFhO0FBQ1gsWUFBTVEsaUJBQWlCUixTQUF2QjtBQUNBLFlBQUlRLGtCQUFrQkEsZUFBZUMsZ0JBQXJDLEVBQXVEO0FBQ3JERixzQkFBWSwyQkFBWUMsY0FBWixDQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xELHNCQUFZQyxjQUFaO0FBQ0Q7QUFDRjtBQUNELFVBQUksS0FBS2YsS0FBTCxDQUFXQyxNQUFYLElBQXNCYSxhQUFhLDBCQUFlQSxTQUFmLEVBQTBCRCxFQUFFSSxNQUE1QixDQUF2QyxFQUE2RTtBQUM3RSxVQUFNQyxTQUFTLDJCQUFZLElBQVosQ0FBZjtBQUNBLFVBQUksQ0FBQywwQkFBZUEsTUFBZixFQUF1QkwsRUFBRUksTUFBekIsQ0FBTCxFQUF1QztBQUNyQyxhQUFLRSxRQUFMLENBQWM7QUFDWmxCLGtCQUFRO0FBREksU0FBZDtBQUdEO0FBQ0Y7OzsyQkFFTW1CLEssRUFBTztBQUNaLFdBQUtELFFBQUwsQ0FBYztBQUNabEIsZ0JBQVEsT0FBT21CLEtBQVAsS0FBaUIsV0FBakIsR0FBK0IsQ0FBQ0EsS0FBaEMsR0FBd0MsQ0FBQyxLQUFLcEIsS0FBTCxDQUFXQztBQURoRCxPQUFkO0FBR0Q7OzttQ0FDYztBQUNiLGFBQU8sS0FBS0csY0FBWjtBQUNEOzs7NkJBQ1E7QUFDUCxhQUFPLEtBQUtKLEtBQUwsQ0FBV0MsTUFBbEI7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQUEsbUJBQzZELEtBQUtSLEtBRGxFO0FBQUEsVUFDQ0MsUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDVzJCLFFBRFgsVUFDV0EsUUFEWDtBQUFBLFVBQ3FCQyxLQURyQixVQUNxQkEsS0FEckI7QUFBQSxVQUM0QkMsT0FENUIsVUFDNEJBLE9BRDVCO0FBQUEsVUFDcUNDLFNBRHJDLFVBQ3FDQSxTQURyQztBQUFBLFVBQ21EL0IsS0FEbkQ7O0FBRVAsVUFBTWdDLFNBQVMsc0JBQVdoQyxLQUFYLEVBQWtCTSxRQUFRSixTQUExQixDQUFmO0FBQ0EsVUFBTStCLG9CQUFvQiwwQkFDeEIsY0FEd0I7QUFHdEIscUJBQWEsS0FBSzFCLEtBQUwsQ0FBV0MsTUFIRjtBQUl0QixpQ0FBeUJzQjtBQUpILHNFQUtMRixRQUxLLEVBS1FBLFFBTFIsK0RBTU5DLEtBTk0sRUFNSUEsS0FOSixnQkFBMUI7QUFTQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHdCQUFlLEtBQUtqQixZQUR0QjtBQUVFLHdCQUFlLEtBQUtDLFlBRnRCO0FBR0UscUJBQVdvQixpQkFIYjtBQUlFLGdCQUFLO0FBSlAsV0FLTUQsTUFMTjtBQU9FO0FBQUMscUJBQUQ7QUFBQSxZQUFhLE9BQU9ELFNBQXBCO0FBQWdDOUI7QUFBaEM7QUFQRixPQURGO0FBV0Q7OztFQXhGa0NpQyxnQkFBTUMsUzs7a0JBQXRCN0IsTzs7O0FBMkZyQixJQUFNOEIsb0JBQW9CLENBQ3hCLEtBRHdCLEVBQ2pCLFVBRGlCLEVBQ0wsV0FESyxFQUV4QixRQUZ3QixFQUVkLGFBRmMsRUFFQyxjQUZELEVBR3hCLE1BSHdCLEVBR2hCLFVBSGdCLEVBR0osYUFISSxFQUl4QixPQUp3QixFQUlmLFdBSmUsRUFJRixjQUpFLENBQTFCOztBQU9BLElBQU1DLGlCQUFpQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLE9BQS9CLENBQXZCOztBQUVBL0IsUUFBUUosU0FBUixHQUFvQjtBQUNsQjBCLFlBQVV6QixvQkFBVW1DLEtBQVYsQ0FBZ0JGLGlCQUFoQixDQURRO0FBRWxCNUIsVUFBUUwsb0JBQVVvQyxJQUZBO0FBR2xCVixTQUFPMUIsb0JBQVVtQyxLQUFWLENBQWdCRCxjQUFoQixDQUhXO0FBSWxCUCxXQUFTM0Isb0JBQVVvQyxJQUpEO0FBS2xCdEMsWUFBVUUsb0JBQVVDLElBTEY7QUFNbEJjLFNBQU9mLG9CQUFVb0MsSUFOQztBQU9sQnpCLFdBQVNYLG9CQUFVcUMsSUFQRDtBQVFsQjtBQUNBVCxhQUFXNUIsb0JBQVVzQztBQVRILENBQXBCOztBQVlBbkMsUUFBUW9DLFlBQVIsR0FBdUI7QUFDckJsQyxVQUFRO0FBRGEsQ0FBdkIiLCJmaWxlIjoiUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBpc0VsSW5DaGlsZHJlbiwgY2xlYW5Qcm9wcyB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBQb3BvdmVySGVhZGVyID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1wb3BvdmVyX19oZWFkZXInPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5Qb3BvdmVySGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBvcG92ZXJCb2R5ID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1wb3BvdmVyX19ib2R5JyB7Li4ucHJvcHN9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5Qb3BvdmVyQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlkZGVuOiBwcm9wcy5oaWRkZW4sXG4gICAgfTtcblxuICAgIHRoaXMuZG9jdW1lbnRDbGljayA9IHRoaXMuZG9jdW1lbnRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pc01vdXNlRW50ZXJlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRDbGljayk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb2N1bWVudENsaWNrKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgdGhpcy5pc01vdXNlRW50ZXJlZCA9IHRydWU7XG4gIH1cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5ob3ZlcikgcmV0dXJuO1xuICAgIHRoaXMuaXNNb3VzZUVudGVyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gIH1cbiAgZG9jdW1lbnRDbGljayhlKSB7XG4gICAgbGV0IHRyaWdnZXJFbDtcbiAgICBjb25zdCB7IHRyaWdnZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIGNvbnN0IHRyaWdnZXJFbGVtZW50ID0gdHJpZ2dlcigpO1xuICAgICAgaWYgKHRyaWdnZXJFbGVtZW50ICYmIHRyaWdnZXJFbGVtZW50LmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgdHJpZ2dlckVsID0gZmluZERPTU5vZGUodHJpZ2dlckVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJpZ2dlckVsID0gdHJpZ2dlckVsZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmhpZGRlbiB8fCAodHJpZ2dlckVsICYmIGlzRWxJbkNoaWxkcmVuKHRyaWdnZXJFbCwgZS50YXJnZXQpKSkgcmV0dXJuO1xuICAgIGNvbnN0IHJvb3RFbCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICghaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCBlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGhpZGRlbjogdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyA/ICF2YWx1ZSA6ICF0aGlzLnN0YXRlLmhpZGRlbixcbiAgICB9KTtcbiAgfVxuICBtb3VzZUVudGVyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNNb3VzZUVudGVyZWQ7XG4gIH1cbiAgaGlkZGVuKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhpZGRlbjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgcG9zaXRpb24sIHRoZW1lLCB0b29sdGlwLCBib2R5U3R5bGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHBwcm9wcyA9IGNsZWFuUHJvcHMocHJvcHMsIFBvcG92ZXIucHJvcFR5cGVzKTtcbiAgICBjb25zdCBwb3BvdmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1wb3BvdmVyJyxcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaGlkZSc6IHRoaXMuc3RhdGUuaGlkZGVuLFxuICAgICAgICAnc2xkcy1wb3BvdmVyLS10b29sdGlwJzogdG9vbHRpcCxcbiAgICAgICAgW2BzbGRzLW51YmJpbi0tJHtwb3NpdGlvbn1gXTogcG9zaXRpb24sXG4gICAgICAgIFtgc2xkcy10aGVtZS0tJHt0aGVtZX1gXTogdGhlbWUsXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBvbk1vdXNlRW50ZXI9eyB0aGlzLm9uTW91c2VFbnRlciB9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17IHRoaXMub25Nb3VzZUxlYXZlIH1cbiAgICAgICAgY2xhc3NOYW1lPXtwb3BvdmVyQ2xhc3NOYW1lc31cbiAgICAgICAgcm9sZT0nZGlhbG9nJ1xuICAgICAgICB7Li4ucHByb3BzfVxuICAgICAgPlxuICAgICAgICA8UG9wb3ZlckJvZHkgc3R5bGU9e2JvZHlTdHlsZX0+e2NoaWxkcmVufTwvUG9wb3ZlckJvZHk+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFBPUE9WRVJfUE9TSVRJT05TID0gW1xuICAndG9wJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsXG4gICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JyxcbiAgJ2xlZnQnLCAnbGVmdC10b3AnLCAnbGVmdC1ib3R0b20nLFxuICAncmlnaHQnLCAncmlnaHQtdG9wJywgJ3JpZ2h0LWJvdHRvbScsXG5dO1xuXG5jb25zdCBQT1BPVkVSX1RIRU1FUyA9IFsnaW5mbycsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZXJyb3InXTtcblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoUE9QT1ZFUl9QT1NJVElPTlMpLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mKFBPUE9WRVJfVEhFTUVTKSxcbiAgdG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaG92ZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhpZGRlbjogdHJ1ZSxcbn07XG4iXX0=