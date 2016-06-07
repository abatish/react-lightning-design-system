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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function (_React$Component) {
  (0, _inherits3.default)(Spinner, _React$Component);

  function Spinner() {
    (0, _classCallCheck3.default)(this, Spinner);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spinner).apply(this, arguments));
  }

  (0, _createClass3.default)(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var type = _props.type;
      var alt = _props.alt;
      var spinnerSrc = _props.spinnerSrc;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'type', 'alt', 'spinnerSrc']);

      var spinnerClassNames = (0, _classnames2.default)(className, 'slds-spinner--' + size);
      var spinnerImgName = type === 'brand' ? 'slds_spinner_brand' : type === 'inverse' ? 'slds_spinner_inverse' : 'slds_spinner';
      var finalSpinnerSrc = spinnerSrc || _util2.default.getAssetRoot() + '/images/spinners/' + spinnerImgName + '.gif';

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: spinnerClassNames }, props),
        _react2.default.createElement('img', { src: finalSpinnerSrc, alt: alt })
      );
    }
  }]);
  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;


Spinner.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.string,
  size: _react.PropTypes.string,
  alt: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCLE87Ozs7Ozs7Ozs7NkJBRVY7QUFBQSxtQkFDc0QsS0FBSyxLQUQzRDtBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLElBRFosVUFDWSxJQURaO0FBQUEsVUFDa0IsSUFEbEIsVUFDa0IsSUFEbEI7QUFBQSxVQUN3QixHQUR4QixVQUN3QixHQUR4QjtBQUFBLFVBQzZCLFVBRDdCLFVBQzZCLFVBRDdCO0FBQUEsVUFDNEMsS0FENUM7O0FBRVAsVUFBTSxvQkFBb0IsMEJBQVcsU0FBWCxxQkFBdUMsSUFBdkMsQ0FBMUI7QUFDQSxVQUFNLGlCQUNKLFNBQVMsT0FBVCxHQUFtQixvQkFBbkIsR0FDQSxTQUFTLFNBQVQsR0FBcUIsc0JBQXJCLEdBQ0EsY0FIRjtBQUlBLFVBQU0sa0JBQWtCLGNBQWlCLGVBQUssWUFBTCxFQUFqQix5QkFBd0QsY0FBeEQsU0FBeEI7O0FBRUEsYUFDRTtBQUFBO1FBQUEseUJBQUssV0FBWSxpQkFBakIsSUFBMEMsS0FBMUM7UUFDRSx1Q0FBSyxLQUFNLGVBQVgsRUFBNkIsS0FBTSxHQUFuQztBQURGLE9BREY7QUFLRDs7O0VBaEJrQyxnQkFBTSxTOztrQkFBdEIsTzs7O0FBbUJyQixRQUFRLFNBQVIsR0FBb0I7QUFDbEIsYUFBVyxpQkFBVSxNQURIO0FBRWxCLFFBQU0saUJBQVUsTUFGRTtBQUdsQixRQUFNLGlCQUFVLE1BSEU7QUFJbEIsT0FBSyxpQkFBVTtBQUpHLENBQXBCIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHNpemUsIHR5cGUsIGFsdCwgc3Bpbm5lclNyYywgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBzcGlubmVyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy1zcGlubmVyLS0ke3NpemV9YCk7XHJcbiAgICBjb25zdCBzcGlubmVySW1nTmFtZSA9XHJcbiAgICAgIHR5cGUgPT09ICdicmFuZCcgPyAnc2xkc19zcGlubmVyX2JyYW5kJyA6XHJcbiAgICAgIHR5cGUgPT09ICdpbnZlcnNlJyA/ICdzbGRzX3NwaW5uZXJfaW52ZXJzZScgOlxyXG4gICAgICAnc2xkc19zcGlubmVyJztcbiAgICBjb25zdCBmaW5hbFNwaW5uZXJTcmMgPSBzcGlubmVyU3JjIHx8IGAke3V0aWwuZ2V0QXNzZXRSb290KCl9L2ltYWdlcy9zcGlubmVycy8ke3NwaW5uZXJJbWdOYW1lfS5naWZgXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3Bpbm5lckNsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgPGltZyBzcmM9eyBmaW5hbFNwaW5uZXJTcmMgfSBhbHQ9eyBhbHQgfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIl19