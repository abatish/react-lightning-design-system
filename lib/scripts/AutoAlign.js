'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = autoAlign;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRelativePortal = require('react-relative-portal');

var _reactRelativePortal2 = _interopRequireDefault(_reactRelativePortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function delay(ms) {
  return new _promise2.default(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function getViewportRect() {
  var _ref = window || {},
      _ref$innerHeight = _ref.innerHeight,
      height = _ref$innerHeight === undefined ? Infinity : _ref$innerHeight,
      _ref$innerWidth = _ref.innerWidth,
      width = _ref$innerWidth === undefined ? Infinity : _ref$innerWidth;

  return { top: 0, left: 0, width: width, height: height };
}

function getCenterPoint(rect) {
  return {
    x: rect.left + 0.5 * rect.width,
    y: rect.top + 0.5 * rect.height
  };
}

function getPreferAlignment(rect) {
  var _getCenterPoint = getCenterPoint(rect),
      rx = _getCenterPoint.x,
      ry = _getCenterPoint.y;

  var _getCenterPoint2 = getCenterPoint(getViewportRect()),
      vx = _getCenterPoint2.x,
      vy = _getCenterPoint2.y;

  return {
    h: rx < vx ? 'left' : 'right',
    v: ry < vy ? 'top' : 'bottom'
  };
}

function calcAlignmentRect(target, rect, vertAlign, horizAlign) {
  return (0, _extends3.default)({}, rect, {
    top: vertAlign === 'top' ? target.top + target.height : vertAlign === 'bottom' ? target.top - rect.height : vertAlign === 'bottom-absolute' ? getViewportRect().height - rect.height : 0,
    left: horizAlign === 'left' ? target.left : horizAlign === 'right' ? target.left + target.width - rect.width : vertAlign === 'right-absolute' ? getViewportRect().width - rect.height : 0
  });
}

function hasViewportIntersection(_ref2) {
  var top = _ref2.top,
      left = _ref2.left,
      width = _ref2.width,
      height = _ref2.height;

  var _getViewportRect = getViewportRect(),
      viewportWidth = _getViewportRect.width,
      viewportHeight = _getViewportRect.height;

  return top < 0 || top + height > viewportHeight || left < 0 || left + width > viewportWidth;
}

function isEqualRect(aRect, bRect) {
  return aRect.top === bRect.top && aRect.left === bRect.left && aRect.width === bRect.width && aRect.height === bRect.height;
}

function throttle(func, ms) {
  var last = 0;
  return function () {
    var now = Date.now();
    if (last + ms < now) {
      func.apply(undefined, arguments);
      last = now;
    }
  };
}

function ignoreFirstCall(func) {
  var called = false;
  return function () {
    if (called) {
      func.apply(undefined, arguments);
    }
    called = true;
  };
}

/**
 *
 */
function autoAlign(options) {
  var triggerSelector = options.triggerSelector;


  return function (Cmp) {
    var _class, _temp2;

    return _temp2 = _class = function (_React$Component) {
      (0, _inherits3.default)(_class, _React$Component);

      function _class() {
        var _ref3,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
          triggerRect: { top: 0, left: 0, width: 0, height: 0 },
          horizAlign: 'left',
          vertAlign: 'top'
        }, _this.requestRecalcAlignment = throttle((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var pid, _arr, _i, ms;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pid = (_this.pid || 0) + 1;

                  _this.pid = pid;
                  _arr = [0, 300, 400, 300, 200];
                  _i = 0;

                case 4:
                  if (!(_i < _arr.length)) {
                    _context.next = 14;
                    break;
                  }

                  ms = _arr[_i];
                  _context.next = 8;
                  return delay(ms);

                case 8:
                  if (!(_this.pid !== pid)) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt('return');

                case 10:
                  _this.recalcAlignment();

                case 11:
                  _i++;
                  _context.next = 4;
                  break;

                case 14:
                  _this.pid = 0;

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })), 100), _this.recalcAlignment = function () {
          if (_this.node) {
            var targetEl = _this.node;
            var matches = targetEl.matches || targetEl.matchesSelector || targetEl.msMatchesSelector;
            try {
              while (targetEl) {
                if (matches.call(targetEl, triggerSelector)) {
                  break;
                }
                targetEl = targetEl.parentNode;
              }
            } catch (e) {
              targetEl = null;
            }
            var oldTriggerRect = _this.state.triggerRect;
            if (targetEl) {
              var _targetEl$getBounding = targetEl.getBoundingClientRect(),
                  top = _targetEl$getBounding.top,
                  left = _targetEl$getBounding.left,
                  width = _targetEl$getBounding.width,
                  height = _targetEl$getBounding.height;

              if (!isEqualRect(oldTriggerRect, { top: top, left: left, width: width, height: height })) {
                _this.updateAlignment({ top: top, left: left, width: width, height: height });
              } else {
                _this.updateAlignment(oldTriggerRect);
              }
            } else {
              _this.updateAlignment(oldTriggerRect);
            }
          }
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.recalcAlignment();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.pid = null;
          this.node = null;
          this.content = null;
        }
      }, {
        key: 'updateAlignment',
        value: function updateAlignment(triggerRect) {
          if (this.content && this.content.node) {
            var _state = this.state,
                oldHorizAlign = _state.horizAlign,
                oldVertAlign = _state.vertAlign,
                oldTriggerRect = _state.triggerRect;

            var _content$node$getBoun = this.content.node.getBoundingClientRect(),
                width = _content$node$getBoun.width,
                height = _content$node$getBoun.height;

            var vertAlign = null;
            var horizAlign = null;
            var preferAlign = getPreferAlignment(triggerRect);
            var _arr2 = ['top', 'bottom', preferAlign.v + '-absolute'];
            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
              var vAlign = _arr2[_i2];var _arr3 = ['left', 'right', preferAlign.h + '-absolute'];

              for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                var hAlign = _arr3[_i3];
                var aRect = calcAlignmentRect(triggerRect, { width: width, height: height }, vAlign, hAlign);
                if (!hasViewportIntersection(aRect)) {
                  vertAlign = vAlign;
                  horizAlign = hAlign;
                  break;
                }
              }
              if (vertAlign !== null && horizAlign !== null) {
                break;
              }
            }
            vertAlign = vertAlign || 'top-absolute';
            horizAlign = horizAlign || 'left-absolute';
            if (vertAlign !== oldVertAlign || horizAlign !== oldHorizAlign) {
              this.setState({ vertAlign: vertAlign, horizAlign: horizAlign, triggerRect: triggerRect });
            } else if (triggerRect.width !== oldTriggerRect.width || triggerRect.height !== oldTriggerRect.height || /absolute$/.test(vertAlign) || /absolute$/.test(horizAlign)) {
              this.setState({ triggerRect: triggerRect });
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var triggerRect = this.state.triggerRect;
          var _props = this.props,
              _props$align = _props.align,
              align = _props$align === undefined ? this.state.horizAlign : _props$align,
              _props$vertAlign = _props.vertAlign,
              vertAlign = _props$vertAlign === undefined ? this.state.vertAlign : _props$vertAlign,
              additionalPortalClassName = _props.portalClassName,
              _props$portalStyle = _props.portalStyle,
              additionalPortalStyle = _props$portalStyle === undefined ? {} : _props$portalStyle,
              preventPortalize = _props.preventPortalize,
              children = _props.children,
              pprops = (0, _objectWithoutProperties3.default)(_props, ['align', 'vertAlign', 'portalClassName', 'portalStyle', 'preventPortalize', 'children']);
          var _context2 = this.context,
              _context2$portalClass = _context2.portalClassName,
              portalClassName = _context2$portalClass === undefined ? 'slds-scope' : _context2$portalClass,
              _context2$portalStyle = _context2.portalStyle,
              portalStyle = _context2$portalStyle === undefined ? { position: 'absolute', top: 0, left: 0 } : _context2$portalStyle;
          var triggerTop = triggerRect.top,
              triggerLeft = triggerRect.left,
              triggerWidth = triggerRect.width,
              triggerHeight = triggerRect.height;

          var _getViewportRect2 = getViewportRect(),
              viewportWidth = _getViewportRect2.width,
              viewportHeight = _getViewportRect2.height;

          var offsetTop = vertAlign === 'bottom' ? -triggerHeight : vertAlign === 'top-absolute' ? -(triggerTop + triggerHeight) : vertAlign === 'bottom-absolute' ? viewportHeight - (triggerTop + triggerHeight) : 0;
          var offsetLeft = align === 'left-absolute' ? -triggerLeft : align === 'right-absolute' ? viewportWidth - (triggerLeft + triggerWidth) : 0;
          var content = _react2.default.createElement(
            Cmp,
            (0, _extends3.default)({
              align: align.split('-')[0],
              vertAlign: vertAlign.split('-')[0],
              ref: function ref(cmp) {
                return _this3.content = cmp;
              }
            }, pprops),
            children
          );
          return preventPortalize || process.env.NODE_ENV === 'test' ? content : _react2.default.createElement(
            'div',
            { ref: function ref(node) {
                return _this3.node = node;
              } },
            _react2.default.createElement(
              _reactRelativePortal2.default,
              {
                fullWidth: true,
                left: offsetLeft,
                right: -offsetLeft,
                top: offsetTop,
                onScroll: ignoreFirstCall(this.requestRecalcAlignment),
                component: 'div',
                className: (0, _classnames2.default)(portalClassName, additionalPortalClassName),
                style: (0, _extends3.default)({}, portalStyle, additionalPortalStyle)
              },
              content
            )
          );
        }
      }]);
      return _class;
    }(_react2.default.Component), _class.propTypes = {
      portalClassName: _propTypes2.default.string,
      portalStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
      size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
      align: _propTypes2.default.oneOf(['left', 'right']),
      vertAlign: _propTypes2.default.oneOf(['top', 'bottom']),
      preventPortalize: _propTypes2.default.bool,
      children: _propTypes2.default.node
    }, _class.contextTypes = {
      portalClassName: _propTypes2.default.string,
      portalStyle: _propTypes2.default.object // eslint-disable-line react/forbid-prop-types
    }, _temp2;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0F1dG9BbGlnbi5qcyJdLCJuYW1lcyI6WyJhdXRvQWxpZ24iLCJkZWxheSIsIm1zIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJnZXRWaWV3cG9ydFJlY3QiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImhlaWdodCIsIkluZmluaXR5IiwiaW5uZXJXaWR0aCIsIndpZHRoIiwidG9wIiwibGVmdCIsImdldENlbnRlclBvaW50IiwicmVjdCIsIngiLCJ5IiwiZ2V0UHJlZmVyQWxpZ25tZW50IiwicngiLCJyeSIsInZ4IiwidnkiLCJoIiwidiIsImNhbGNBbGlnbm1lbnRSZWN0IiwidGFyZ2V0IiwidmVydEFsaWduIiwiaG9yaXpBbGlnbiIsImhhc1ZpZXdwb3J0SW50ZXJzZWN0aW9uIiwidmlld3BvcnRXaWR0aCIsInZpZXdwb3J0SGVpZ2h0IiwiaXNFcXVhbFJlY3QiLCJhUmVjdCIsImJSZWN0IiwidGhyb3R0bGUiLCJmdW5jIiwibGFzdCIsIm5vdyIsIkRhdGUiLCJpZ25vcmVGaXJzdENhbGwiLCJjYWxsZWQiLCJvcHRpb25zIiwidHJpZ2dlclNlbGVjdG9yIiwic3RhdGUiLCJ0cmlnZ2VyUmVjdCIsInJlcXVlc3RSZWNhbGNBbGlnbm1lbnQiLCJwaWQiLCJyZWNhbGNBbGlnbm1lbnQiLCJub2RlIiwidGFyZ2V0RWwiLCJtYXRjaGVzIiwibWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJjYWxsIiwicGFyZW50Tm9kZSIsImUiLCJvbGRUcmlnZ2VyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZUFsaWdubWVudCIsImNvbnRlbnQiLCJvbGRIb3JpekFsaWduIiwib2xkVmVydEFsaWduIiwicHJlZmVyQWxpZ24iLCJ2QWxpZ24iLCJoQWxpZ24iLCJzZXRTdGF0ZSIsInRlc3QiLCJwcm9wcyIsImFsaWduIiwiYWRkaXRpb25hbFBvcnRhbENsYXNzTmFtZSIsInBvcnRhbENsYXNzTmFtZSIsInBvcnRhbFN0eWxlIiwiYWRkaXRpb25hbFBvcnRhbFN0eWxlIiwicHJldmVudFBvcnRhbGl6ZSIsImNoaWxkcmVuIiwicHByb3BzIiwiY29udGV4dCIsInBvc2l0aW9uIiwidHJpZ2dlclRvcCIsInRyaWdnZXJMZWZ0IiwidHJpZ2dlcldpZHRoIiwidHJpZ2dlckhlaWdodCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJzcGxpdCIsImNtcCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib2JqZWN0Iiwic2l6ZSIsIm9uZU9mIiwiYm9vbCIsImNvbnRleHRUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFrR3dCQSxTOztBQWxHeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNDLEtBQVQsQ0FBZUMsRUFBZixFQUFtQjtBQUNqQixTQUFPLHNCQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QkMsZUFBV0QsT0FBWCxFQUFvQkQsRUFBcEI7QUFDRCxHQUZNLENBQVA7QUFHRDs7QUFFRCxTQUFTRyxlQUFULEdBQTJCO0FBQUEsYUFDZ0RDLFVBQVUsRUFEMUQ7QUFBQSw4QkFDakJDLFdBRGlCO0FBQUEsTUFDSkMsTUFESSxvQ0FDS0MsUUFETDtBQUFBLDZCQUNlQyxVQURmO0FBQUEsTUFDMkJDLEtBRDNCLG1DQUNtQ0YsUUFEbkM7O0FBRXpCLFNBQU8sRUFBRUcsS0FBSyxDQUFQLEVBQVVDLE1BQU0sQ0FBaEIsRUFBbUJGLFlBQW5CLEVBQTBCSCxjQUExQixFQUFQO0FBQ0Q7O0FBRUQsU0FBU00sY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDNUIsU0FBTztBQUNMQyxPQUFHRCxLQUFLRixJQUFMLEdBQWEsTUFBTUUsS0FBS0osS0FEdEI7QUFFTE0sT0FBR0YsS0FBS0gsR0FBTCxHQUFZLE1BQU1HLEtBQUtQ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QUNBLFVBSFg7QUFJRSxxQkFBTUQsU0FKUjtBQUtFLDBCQUFXM0MsZ0JBQWdCLEtBQUtNLHNCQUFyQixDQUxiO0FBTUUsMkJBQVUsS0FOWjtBQU9FLDJCQUFZLDBCQUFXeUIsZUFBWCxFQUE0QkQseUJBQTVCLENBUGQ7QUFRRSxrREFBYUUsV0FBYixFQUE2QkMscUJBQTdCO0FBUkY7QUFVSWI7QUFWSjtBQURGLFdBRko7QUFrQkQ7QUF0S0k7QUFBQTtBQUFBLE1BQXFCOEIsZ0JBQU1DLFNBQTNCLFVBQ0VDLFNBREYsR0FDYztBQUNqQnJCLHVCQUFpQnNCLG9CQUFVQyxNQURWO0FBRWpCdEIsbUJBQWFxQixvQkFBVUUsTUFGTixFQUVjO0FBQy9CQyxZQUFNSCxvQkFBVUksS0FBVixDQUFnQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE9BQXBCLENBQWhCLENBSFc7QUFJakI1QixhQUFPd0Isb0JBQVVJLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQixDQUpVO0FBS2pCdEUsaUJBQVdrRSxvQkFBVUksS0FBVixDQUFnQixDQUFDLEtBQUQsRUFBUSxRQUFSLENBQWhCLENBTE07QUFNakJ2Qix3QkFBa0JtQixvQkFBVUssSUFOWDtBQU9qQnZCLGdCQUFVa0Isb0JBQVU1QztBQVBILEtBRGQsU0FXRWtELFlBWEYsR0FXaUI7QUFDcEI1Qix1QkFBaUJzQixvQkFBVUMsTUFEUDtBQUVwQnRCLG1CQUFhcUIsb0JBQVVFLE1BRkgsQ0FFVztBQUZYLEtBWGpCO0FBQUEsR0FBUDtBQXdLRCIsImZpbGUiOiJBdXRvQWxpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlbGF0aXZlUG9ydGFsIGZyb20gJ3JlYWN0LXJlbGF0aXZlLXBvcnRhbCc7XG5cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KCkge1xuICBjb25zdCB7IGlubmVySGVpZ2h0OiBoZWlnaHQgPSBJbmZpbml0eSwgaW5uZXJXaWR0aDogd2lkdGggPSBJbmZpbml0eSB9ID0gd2luZG93IHx8IHt9O1xuICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAsIHdpZHRoLCBoZWlnaHQgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2VudGVyUG9pbnQocmVjdCkge1xuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArICgwLjUgKiByZWN0LndpZHRoKSxcbiAgICB5OiByZWN0LnRvcCArICgwLjUgKiByZWN0LmhlaWdodCksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFByZWZlckFsaWdubWVudChyZWN0KSB7XG4gIGNvbnN0IHsgeDogcngsIHk6IHJ5IH0gPSBnZXRDZW50ZXJQb2ludChyZWN0KTtcbiAgY29uc3QgeyB4OiB2eCwgeTogdnkgfSA9IGdldENlbnRlclBvaW50KGdldFZpZXdwb3J0UmVjdCgpKTtcbiAgcmV0dXJuIHtcbiAgICBoOiAocnggPCB2eCA/ICdsZWZ0JyA6ICdyaWdodCcpLFxuICAgIHY6IChyeSA8IHZ5ID8gJ3RvcCcgOiAnYm90dG9tJyksXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGNBbGlnbm1lbnRSZWN0KHRhcmdldCwgcmVjdCwgdmVydEFsaWduLCBob3JpekFsaWduKSB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVjdCxcbiAgICB0b3A6XG4gICAgICB2ZXJ0QWxpZ24gPT09ICd0b3AnID9cbiAgICAgICAgdGFyZ2V0LnRvcCArIHRhcmdldC5oZWlnaHQgOlxuICAgICAgdmVydEFsaWduID09PSAnYm90dG9tJyA/XG4gICAgICAgIHRhcmdldC50b3AgLSByZWN0LmhlaWdodCA6XG4gICAgICB2ZXJ0QWxpZ24gPT09ICdib3R0b20tYWJzb2x1dGUnID9cbiAgICAgICAgZ2V0Vmlld3BvcnRSZWN0KCkuaGVpZ2h0IC0gcmVjdC5oZWlnaHQgOlxuICAgICAgICAwLFxuICAgIGxlZnQ6XG4gICAgICBob3JpekFsaWduID09PSAnbGVmdCcgP1xuICAgICAgICB0YXJnZXQubGVmdCA6XG4gICAgICBob3JpekFsaWduID09PSAncmlnaHQnID9cbiAgICAgICAgKHRhcmdldC5sZWZ0ICsgdGFyZ2V0LndpZHRoKSAtIHJlY3Qud2lkdGggOlxuICAgICAgdmVydEFsaWduID09PSAncmlnaHQtYWJzb2x1dGUnID9cbiAgICAgICAgZ2V0Vmlld3BvcnRSZWN0KCkud2lkdGggLSByZWN0LmhlaWdodCA6XG4gICAgICAgIDAsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc1ZpZXdwb3J0SW50ZXJzZWN0aW9uKHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0pIHtcbiAgY29uc3QgeyB3aWR0aDogdmlld3BvcnRXaWR0aCwgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCB9ID0gZ2V0Vmlld3BvcnRSZWN0KCk7XG4gIHJldHVybiAoXG4gICAgdG9wIDwgMCB8fFxuICAgIHRvcCArIGhlaWdodCA+IHZpZXdwb3J0SGVpZ2h0IHx8XG4gICAgbGVmdCA8IDAgfHxcbiAgICBsZWZ0ICsgd2lkdGggPiB2aWV3cG9ydFdpZHRoXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRXF1YWxSZWN0KGFSZWN0LCBiUmVjdCkge1xuICByZXR1cm4gKFxuICAgIGFSZWN0LnRvcCA9PT0gYlJlY3QudG9wICYmXG4gICAgYVJlY3QubGVmdCA9PT0gYlJlY3QubGVmdCAmJlxuICAgIGFSZWN0LndpZHRoID09PSBiUmVjdC53aWR0aCAmJlxuICAgIGFSZWN0LmhlaWdodCA9PT0gYlJlY3QuaGVpZ2h0XG4gICk7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIG1zKSB7XG4gIGxldCBsYXN0ID0gMDtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAobGFzdCArIG1zIDwgbm93KSB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgICAgbGFzdCA9IG5vdztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlnbm9yZUZpcnN0Q2FsbChmdW5jKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgfTtcbn1cblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dG9BbGlnbihvcHRpb25zKSB7XG4gIGNvbnN0IHsgdHJpZ2dlclNlbGVjdG9yIH0gPSBvcHRpb25zO1xuXG4gIHJldHVybiBDbXAgPT4gY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBwb3J0YWxDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBwb3J0YWxTdHlsZTogUHJvcFR5cGVzLm9iamVjdCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xuICAgICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnc21hbGwnLCAnbWVkaXVtJywgJ2xhcmdlJ10pLFxuICAgICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gICAgICB2ZXJ0QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gICAgICBwcmV2ZW50UG9ydGFsaXplOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgICAgcG9ydGFsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgcG9ydGFsU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIHRyaWdnZXJSZWN0OiB7IHRvcDogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgICAgaG9yaXpBbGlnbjogJ2xlZnQnLFxuICAgICAgdmVydEFsaWduOiAndG9wJyxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucmVjYWxjQWxpZ25tZW50KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnBpZCA9IG51bGw7XG4gICAgICB0aGlzLm5vZGUgPSBudWxsO1xuICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXF1ZXN0UmVjYWxjQWxpZ25tZW50ID0gdGhyb3R0bGUoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcGlkID0gKHRoaXMucGlkIHx8IDApICsgMTtcbiAgICAgIHRoaXMucGlkID0gcGlkO1xuICAgICAgZm9yIChjb25zdCBtcyBvZiBbMCwgMzAwLCA0MDAsIDMwMCwgMjAwXSkge1xuICAgICAgICBhd2FpdCBkZWxheShtcyk7XG4gICAgICAgIGlmICh0aGlzLnBpZCAhPT0gcGlkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVjYWxjQWxpZ25tZW50KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBpZCA9IDA7XG4gICAgfSwgMTAwKVxuXG4gICAgcmVjYWxjQWxpZ25tZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZSkge1xuICAgICAgICBsZXQgdGFyZ2V0RWwgPSB0aGlzLm5vZGU7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0YXJnZXRFbC5tYXRjaGVzIHx8IHRhcmdldEVsLm1hdGNoZXNTZWxlY3RvciB8fCB0YXJnZXRFbC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3aGlsZSAodGFyZ2V0RWwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwodGFyZ2V0RWwsIHRyaWdnZXJTZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZFRyaWdnZXJSZWN0ID0gdGhpcy5zdGF0ZS50cmlnZ2VyUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQgfSA9IHRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGlmICghaXNFcXVhbFJlY3Qob2xkVHJpZ2dlclJlY3QsIHsgdG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0IH0pKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsaWdubWVudCh7IHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGlnbm1lbnQob2xkVHJpZ2dlclJlY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsaWdubWVudChvbGRUcmlnZ2VyUmVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVBbGlnbm1lbnQodHJpZ2dlclJlY3QpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRlbnQgJiYgdGhpcy5jb250ZW50Lm5vZGUpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGhvcml6QWxpZ246IG9sZEhvcml6QWxpZ24sXG4gICAgICAgICAgdmVydEFsaWduOiBvbGRWZXJ0QWxpZ24sXG4gICAgICAgICAgdHJpZ2dlclJlY3Q6IG9sZFRyaWdnZXJSZWN0LFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmNvbnRlbnQubm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgbGV0IHZlcnRBbGlnbiA9IG51bGw7XG4gICAgICAgIGxldCBob3JpekFsaWduID0gbnVsbDtcbiAgICAgICAgY29uc3QgcHJlZmVyQWxpZ24gPSBnZXRQcmVmZXJBbGlnbm1lbnQodHJpZ2dlclJlY3QpO1xuICAgICAgICBmb3IgKGNvbnN0IHZBbGlnbiBvZiBbJ3RvcCcsICdib3R0b20nLCBgJHtwcmVmZXJBbGlnbi52fS1hYnNvbHV0ZWBdKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBoQWxpZ24gb2YgWydsZWZ0JywgJ3JpZ2h0JywgYCR7cHJlZmVyQWxpZ24uaH0tYWJzb2x1dGVgXSkge1xuICAgICAgICAgICAgY29uc3QgYVJlY3QgPSBjYWxjQWxpZ25tZW50UmVjdCh0cmlnZ2VyUmVjdCwgeyB3aWR0aCwgaGVpZ2h0IH0sIHZBbGlnbiwgaEFsaWduKTtcbiAgICAgICAgICAgIGlmICghaGFzVmlld3BvcnRJbnRlcnNlY3Rpb24oYVJlY3QpKSB7XG4gICAgICAgICAgICAgIHZlcnRBbGlnbiA9IHZBbGlnbjtcbiAgICAgICAgICAgICAgaG9yaXpBbGlnbiA9IGhBbGlnbjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ZXJ0QWxpZ24gIT09IG51bGwgJiYgaG9yaXpBbGlnbiAhPT0gbnVsbCkgeyBicmVhazsgfVxuICAgICAgICB9XG4gICAgICAgIHZlcnRBbGlnbiA9IHZlcnRBbGlnbiB8fCAndG9wLWFic29sdXRlJztcbiAgICAgICAgaG9yaXpBbGlnbiA9IGhvcml6QWxpZ24gfHwgJ2xlZnQtYWJzb2x1dGUnO1xuICAgICAgICBpZiAodmVydEFsaWduICE9PSBvbGRWZXJ0QWxpZ24gfHwgaG9yaXpBbGlnbiAhPT0gb2xkSG9yaXpBbGlnbikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2ZXJ0QWxpZ24sIGhvcml6QWxpZ24sIHRyaWdnZXJSZWN0IH0pO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgIHRyaWdnZXJSZWN0LndpZHRoICE9PSBvbGRUcmlnZ2VyUmVjdC53aWR0aCB8fFxuICAgICAgICAgIHRyaWdnZXJSZWN0LmhlaWdodCAhPT0gb2xkVHJpZ2dlclJlY3QuaGVpZ2h0IHx8XG4gICAgICAgICAgL2Fic29sdXRlJC8udGVzdCh2ZXJ0QWxpZ24pIHx8XG4gICAgICAgICAgL2Fic29sdXRlJC8udGVzdChob3JpekFsaWduKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdHJpZ2dlclJlY3QgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHRyaWdnZXJSZWN0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBhbGlnbiA9IHRoaXMuc3RhdGUuaG9yaXpBbGlnbixcbiAgICAgICAgdmVydEFsaWduID0gdGhpcy5zdGF0ZS52ZXJ0QWxpZ24sXG4gICAgICAgIHBvcnRhbENsYXNzTmFtZTogYWRkaXRpb25hbFBvcnRhbENsYXNzTmFtZSxcbiAgICAgICAgcG9ydGFsU3R5bGU6IGFkZGl0aW9uYWxQb3J0YWxTdHlsZSA9IHt9LFxuICAgICAgICBwcmV2ZW50UG9ydGFsaXplLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgLi4ucHByb3BzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcG9ydGFsQ2xhc3NOYW1lID0gJ3NsZHMtc2NvcGUnLFxuICAgICAgICBwb3J0YWxTdHlsZSA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgbGVmdDogMCB9LFxuICAgICAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdG9wOiB0cmlnZ2VyVG9wLCBsZWZ0OiB0cmlnZ2VyTGVmdCwgd2lkdGg6IHRyaWdnZXJXaWR0aCwgaGVpZ2h0OiB0cmlnZ2VySGVpZ2h0LFxuICAgICAgfSA9IHRyaWdnZXJSZWN0O1xuICAgICAgY29uc3QgeyB3aWR0aDogdmlld3BvcnRXaWR0aCwgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCB9ID0gZ2V0Vmlld3BvcnRSZWN0KCk7XG4gICAgICBjb25zdCBvZmZzZXRUb3AgPVxuICAgICAgICB2ZXJ0QWxpZ24gPT09ICdib3R0b20nID8gLXRyaWdnZXJIZWlnaHQgOlxuICAgICAgICB2ZXJ0QWxpZ24gPT09ICd0b3AtYWJzb2x1dGUnID8gLSh0cmlnZ2VyVG9wICsgdHJpZ2dlckhlaWdodCkgOlxuICAgICAgICB2ZXJ0QWxpZ24gPT09ICdib3R0b20tYWJzb2x1dGUnID8gdmlld3BvcnRIZWlnaHQgLSAodHJpZ2dlclRvcCArIHRyaWdnZXJIZWlnaHQpIDpcbiAgICAgICAgMDtcbiAgICAgIGNvbnN0IG9mZnNldExlZnQgPVxuICAgICAgICBhbGlnbiA9PT0gJ2xlZnQtYWJzb2x1dGUnID8gLXRyaWdnZXJMZWZ0IDpcbiAgICAgICAgYWxpZ24gPT09ICdyaWdodC1hYnNvbHV0ZScgPyB2aWV3cG9ydFdpZHRoIC0gKHRyaWdnZXJMZWZ0ICsgdHJpZ2dlcldpZHRoKSA6XG4gICAgICAgIDA7XG4gICAgICBjb25zdCBjb250ZW50ID0gKFxuICAgICAgICA8Q21wXG4gICAgICAgICAgYWxpZ249eyBhbGlnbi5zcGxpdCgnLScpWzBdIH1cbiAgICAgICAgICB2ZXJ0QWxpZ249eyB2ZXJ0QWxpZ24uc3BsaXQoJy0nKVswXSB9XG4gICAgICAgICAgcmVmPXsgY21wID0+ICh0aGlzLmNvbnRlbnQgPSBjbXApIH1cbiAgICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICAgID5cbiAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgPC9DbXA+XG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcHJldmVudFBvcnRhbGl6ZSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID8gY29udGVudCA6IChcbiAgICAgICAgICA8ZGl2IHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH0+XG4gICAgICAgICAgICA8UmVsYXRpdmVQb3J0YWxcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGxlZnQ9eyBvZmZzZXRMZWZ0IH1cbiAgICAgICAgICAgICAgcmlnaHQ9eyAtb2Zmc2V0TGVmdCB9XG4gICAgICAgICAgICAgIHRvcD17IG9mZnNldFRvcCB9XG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXsgaWdub3JlRmlyc3RDYWxsKHRoaXMucmVxdWVzdFJlY2FsY0FsaWdubWVudCkgfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9J2RpdidcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgY2xhc3NuYW1lcyhwb3J0YWxDbGFzc05hbWUsIGFkZGl0aW9uYWxQb3J0YWxDbGFzc05hbWUpIH1cbiAgICAgICAgICAgICAgc3R5bGU9eyB7IC4uLnBvcnRhbFN0eWxlLCAuLi5hZGRpdGlvbmFsUG9ydGFsU3R5bGUgfSB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsgY29udGVudCB9XG4gICAgICAgICAgICA8L1JlbGF0aXZlUG9ydGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==