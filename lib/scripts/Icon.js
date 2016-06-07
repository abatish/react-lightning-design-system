'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svg4everybody = require('svg4everybody');

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon(props) {
    (0, _classCallCheck3.default)(this, Icon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIconColor();
      var svgEl = _reactDom2.default.findDOMNode(this.refs.svgIcon);
      svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkIconColor();
    }
  }, {
    key: 'getIconColor',
    value: function getIconColor(fillColor, category, icon) {
      return this.state.iconColor ? this.state.iconColor : category === 'doctype' ? null : fillColor === 'none' ? null : fillColor ? fillColor : category === 'utility' ? null : category === 'custom' ? icon.replace(/^custom/, 'custom-') : category === 'action' && /^new_custom/.test(icon) ? icon.replace(/^new_custom/, 'custom-') : category + '-' + (icon || '').replace(/_/g, '-');
    }
  }, {
    key: 'getSymbolsSvg',
    value: function getSymbolsSvg(category) {
      return (0, _util.getSymbolsFilePath)(category) || (0, _util.getAssetRoot)() + '/icons/' + category + '-sprite/svg/symbols.svg';
    }
  }, {
    key: 'checkIconColor',
    value: function checkIconColor() {
      var _props = this.props;
      var fillColor = _props.fillColor;
      var _props$category = _props.category;
      var category = _props$category === undefined ? 'utility' : _props$category;
      var container = _props.container;

      if (fillColor === 'none' || category === 'doctype' || !fillColor && category === 'utility') {
        return;
      }
      var el = _reactDom2.default.findDOMNode(container ? this.refs.iconContainer : this.refs.svgIcon);
      if (!el) {
        return;
      }
      var bgColorStyle = getComputedStyle(el)['background-color'];
      if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
        // if no background color set to the icon
        this.setState({ iconColor: 'standard-default' });
      }
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG(_ref) {
      var _classnames;

      var className = _ref.className;
      var _ref$category = _ref.category;
      var category = _ref$category === undefined ? 'utility' : _ref$category;
      var icon = _ref.icon;
      var size = _ref.size;
      var align = _ref.align;
      var fillColor = _ref.fillColor;
      var container = _ref.container;
      var _ref$textColor = _ref.textColor;
      var textColor = _ref$textColor === undefined ? 'default' : _ref$textColor;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor']);

      var iconColor = this.getIconColor(fillColor, category, icon);
      var iconClassNames = (0, _classnames3.default)((_classnames = {
        'slds-icon': !/slds\-button__icon/.test(className)
      }, (0, _defineProperty3.default)(_classnames, 'slds-icon--' + size, /^(x-small|small|large)$/.test(size)), (0, _defineProperty3.default)(_classnames, 'slds-icon-text-' + textColor, /^(default|warning|error)$/.test(textColor) && !container && !iconColor), (0, _defineProperty3.default)(_classnames, 'slds-icon-' + iconColor, !container && iconColor), (0, _defineProperty3.default)(_classnames, 'slds-m-left--x-small', align === 'right'), (0, _defineProperty3.default)(_classnames, 'slds-m-right--x-small', align === 'left'), _classnames), className);

      var useHtml = '<use xlink:href="' + this.getSymbolsSvg(category) + '#' + icon + '"></use>';

      return _react2.default.createElement('svg', (0, _extends3.default)({ className: iconClassNames,
        'aria-hidden': true,
        dangerouslySetInnerHTML: { __html: useHtml },
        ref: 'svgIcon'
      }, props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var container = _props2.container;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['container']);
      var category = props.category;
      var icon = props.icon;


      if (icon.indexOf(':') > 0) {
        var _icon$split = icon.split(':');

        var _icon$split2 = (0, _slicedToArray3.default)(_icon$split, 2);

        category = _icon$split2[0];
        icon = _icon$split2[1];
      }
      if (container) {
        var className = props.className;
        var fillColor = props.fillColor;
        var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'fillColor']);

        var iconColor = this.getIconColor(fillColor, category, icon);
        var containerClassName = (0, _classnames3.default)('slds-icon__container', container === 'circle' ? 'slds-icon__container--circle' : null, iconColor ? 'slds-icon-' + iconColor : null, className);
        return _react2.default.createElement(
          'span',
          { className: containerClassName, ref: 'iconContainer' },
          this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
        );
      }

      return this.renderSVG((0, _extends3.default)({}, props, { category: category, icon: icon }));
    }
  }]);
  return Icon;
}(_react2.default.Component);

exports.default = Icon;


Icon.propTypes = {
  className: _react.PropTypes.string,
  category: _react.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
  icon: _react.PropTypes.string,
  container: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['default', 'circle'])]),
  color: _react.PropTypes.string,
  textColor: _react.PropTypes.oneOf(['default', 'warning', 'error']),
  tabIndex: _react.PropTypes.number,
  fillColor: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztJQUVxQixJOzs7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUssY0FBTDtBQUNBLFVBQU0sUUFBUSxtQkFBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLE9BQS9CLENBQWQ7QUFDQSxZQUFNLFlBQU4sQ0FBbUIsV0FBbkIsRUFBZ0MsS0FBSyxLQUFMLENBQVcsUUFBWCxJQUF1QixDQUF2RDtBQUNEOzs7eUNBRW9CO0FBQ25CLFdBQUssY0FBTDtBQUNEOzs7aUNBRVksUyxFQUFXLFEsRUFBVSxJLEVBQU07QUFDdEMsYUFDRSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLEtBQUssS0FBTCxDQUFXLFNBQWxDLEdBQ0EsYUFBYSxTQUFiLEdBQXlCLElBQXpCLEdBQ0EsY0FBYyxNQUFkLEdBQXVCLElBQXZCLEdBQ0EsWUFBWSxTQUFaLEdBQ0EsYUFBYSxTQUFiLEdBQXlCLElBQXpCLEdBQ0EsYUFBYSxRQUFiLEdBQXdCLEtBQUssT0FBTCxDQUFhLFNBQWIsRUFBd0IsU0FBeEIsQ0FBeEIsR0FDQSxhQUFhLFFBQWIsSUFBeUIsY0FBYyxJQUFkLENBQW1CLElBQW5CLENBQXpCLEdBQW9ELEtBQUssT0FBTCxDQUFhLGFBQWIsRUFBNEIsU0FBNUIsQ0FBcEQsR0FDQSxXQUFXLEdBQVgsR0FBaUIsQ0FBQyxRQUFRLEVBQVQsRUFBYSxPQUFiLENBQXFCLElBQXJCLEVBQTJCLEdBQTNCLENBUm5CO0FBVUQ7OztrQ0FFYSxRLEVBQVU7QUFDdEIsYUFBTyw4QkFBbUIsUUFBbkIsS0FB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RUFBdUMsSUFBdkMsQ0FBbEI7QUFDQSxZQUFNLHFCQUFxQiwwQkFDekIsc0JBRHlCLEVBRXpCLGNBQWMsUUFBZCxHQUF5Qiw4QkFBekIsR0FBMEQsSUFGakMsRUFHekIsMkJBQXlCLFNBQXpCLEdBQXVDLElBSGQsRUFJekIsU0FKeUIsQ0FBM0I7QUFNQSxlQUNFO0FBQUE7VUFBQSxFQUFNLFdBQVksa0JBQWxCLEVBQXVDLEtBQUksZUFBM0M7VUFDSSxLQUFLLFNBQUwsMEJBQWlCLGtCQUFqQixFQUEyQixVQUEzQixFQUFpQyxXQUFXLFNBQTVDLEVBQXVELG9CQUF2RCxJQUFxRSxNQUFyRTtBQURKLFNBREY7QUFLRDs7QUFFRCxhQUFPLEtBQUssU0FBTCw0QkFBb0IsS0FBcEIsSUFBMkIsa0JBQTNCLEVBQXFDLFVBQXJDLElBQVA7QUFDRDs7O0VBaEcrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBbUdyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixZQUFVLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixTQUFyQixFQUFnQyxVQUFoQyxFQUE0QyxTQUE1QyxDQUFoQixDQUZLO0FBR2YsUUFBTSxpQkFBVSxNQUhEO0FBSWYsYUFBVyxpQkFBVSxTQUFWLENBQW9CLENBQzdCLGlCQUFVLElBRG1CLEVBRTdCLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFoQixDQUY2QixDQUFwQixDQUpJO0FBUWYsU0FBTyxpQkFBVSxNQVJGO0FBU2YsYUFBVyxpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBaEIsQ0FUSTtBQVVmLFlBQVUsaUJBQVUsTUFWTDtBQVdmLGFBQVcsaUJBQVU7QUFYTixDQUFqQiIsImZpbGUiOiJJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuaW1wb3J0IHsgZ2V0QXNzZXRSb290LCBnZXRTeW1ib2xzRmlsZVBhdGggfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xyXG4gICAgY29uc3Qgc3ZnRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc3ZnSWNvbik7XHJcbiAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzYWJsZScsIHRoaXMucHJvcHMudGFiSW5kZXggPj0gMCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5zdGF0ZS5pY29uQ29sb3IgPyB0aGlzLnN0YXRlLmljb25Db2xvciA6XHJcbiAgICAgIGNhdGVnb3J5ID09PSAnZG9jdHlwZScgPyBudWxsIDpcclxuICAgICAgZmlsbENvbG9yID09PSAnbm9uZScgPyBudWxsIDpcclxuICAgICAgZmlsbENvbG9yID8gZmlsbENvbG9yIDpcclxuICAgICAgY2F0ZWdvcnkgPT09ICd1dGlsaXR5JyA/IG51bGwgOlxyXG4gICAgICBjYXRlZ29yeSA9PT0gJ2N1c3RvbScgPyBpY29uLnJlcGxhY2UoL15jdXN0b20vLCAnY3VzdG9tLScpIDpcclxuICAgICAgY2F0ZWdvcnkgPT09ICdhY3Rpb24nICYmIC9ebmV3X2N1c3RvbS8udGVzdChpY29uKSA/IGljb24ucmVwbGFjZSgvXm5ld19jdXN0b20vLCAnY3VzdG9tLScpIDpcclxuICAgICAgY2F0ZWdvcnkgKyAnLScgKyAoaWNvbiB8fCAnJykucmVwbGFjZSgvXy9nLCAnLScpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3ltYm9sc1N2ZyhjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuIGdldFN5bWJvbHNGaWxlUGF0aChjYXRlZ29yeSkgfHwgYCR7IGdldEFzc2V0Um9vdCgpIH0vaWNvbnMvJHtjYXRlZ29yeX0tc3ByaXRlL3N2Zy9zeW1ib2xzLnN2Z2A7XHJcbiAgfVxyXG5cclxuICBjaGVja0ljb25Db2xvcigpIHtcclxuICAgIGNvbnN0IHsgZmlsbENvbG9yLCBjYXRlZ29yeSA9ICd1dGlsaXR5JywgY29udGFpbmVyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKGZpbGxDb2xvciA9PT0gJ25vbmUnIHx8IGNhdGVnb3J5ID09PSAnZG9jdHlwZScgfHwgKCFmaWxsQ29sb3IgJiYgY2F0ZWdvcnkgPT09ICd1dGlsaXR5JykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZShjb250YWluZXIgPyB0aGlzLnJlZnMuaWNvbkNvbnRhaW5lciA6IHRoaXMucmVmcy5zdmdJY29uKTtcclxuICAgIGlmICghZWwpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCBiZ0NvbG9yU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVsnYmFja2dyb3VuZC1jb2xvciddO1xyXG4gICAgaWYgKC9eKHRyYW5zcGFyZW50fHJnYmFcXCgwLFxccyowLFxccyowLFxccyowXFwpKSQvLnRlc3QoYmdDb2xvclN0eWxlKSkgeyAvLyBpZiBubyBiYWNrZ3JvdW5kIGNvbG9yIHNldCB0byB0aGUgaWNvblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaWNvbkNvbG9yOiAnc3RhbmRhcmQtZGVmYXVsdCcgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJTVkcoeyBjbGFzc05hbWUsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBpY29uLCBzaXplLCBhbGlnbiwgZmlsbENvbG9yLCBjb250YWluZXIsIHRleHRDb2xvciA9ICdkZWZhdWx0JywgLi4ucHJvcHMgfSkge1xyXG4gICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5nZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbik7XHJcbiAgICBjb25zdCBpY29uQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIHtcclxuICAgICAgICAnc2xkcy1pY29uJzogIS9zbGRzXFwtYnV0dG9uX19pY29uLy50ZXN0KGNsYXNzTmFtZSksXHJcbiAgICAgICAgW2BzbGRzLWljb24tLSR7c2l6ZX1gXTogL14oeC1zbWFsbHxzbWFsbHxsYXJnZSkkLy50ZXN0KHNpemUpLFxyXG4gICAgICAgIFtgc2xkcy1pY29uLXRleHQtJHt0ZXh0Q29sb3J9YF06IC9eKGRlZmF1bHR8d2FybmluZ3xlcnJvcikkLy50ZXN0KHRleHRDb2xvcikgJiYgIWNvbnRhaW5lciAmJiAhaWNvbkNvbG9yLFxyXG4gICAgICAgIFtgc2xkcy1pY29uLSR7aWNvbkNvbG9yfWBdOiAhY29udGFpbmVyICYmIGljb25Db2xvcixcclxuICAgICAgICAnc2xkcy1tLWxlZnQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ3JpZ2h0JyxcclxuICAgICAgICAnc2xkcy1tLXJpZ2h0LS14LXNtYWxsJzogYWxpZ24gPT09ICdsZWZ0JyxcclxuICAgICAgfSxcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZUh0bWwgPSBgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLmdldFN5bWJvbHNTdmcoY2F0ZWdvcnkpfSMke2ljb259XCI+PC91c2U+YDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3ZnIGNsYXNzTmFtZT17IGljb25DbGFzc05hbWVzIH1cclxuICAgICAgICBhcmlhLWhpZGRlblxyXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IHVzZUh0bWwgfSB9XHJcbiAgICAgICAgcmVmPSdzdmdJY29uJ1xyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBjYXRlZ29yeSwgaWNvbiB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKGljb24uaW5kZXhPZignOicpID4gMCkge1xyXG4gICAgICBbY2F0ZWdvcnksIGljb25dID0gaWNvbi5zcGxpdCgnOicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSwgZmlsbENvbG9yLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xyXG4gICAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLmdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKTtcclxuICAgICAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAnc2xkcy1pY29uX19jb250YWluZXInLFxyXG4gICAgICAgIGNvbnRhaW5lciA9PT0gJ2NpcmNsZScgPyAnc2xkcy1pY29uX19jb250YWluZXItLWNpcmNsZScgOiBudWxsLFxyXG4gICAgICAgIGljb25Db2xvciA/IGBzbGRzLWljb24tJHtpY29uQ29sb3J9YCA6IG51bGwsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgY29udGFpbmVyQ2xhc3NOYW1lIH0gcmVmPSdpY29uQ29udGFpbmVyJz5cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTVkcoeyBjYXRlZ29yeSwgaWNvbiwgZmlsbENvbG9yOiBpY29uQ29sb3IsIGNvbnRhaW5lciwgLi4ucHByb3BzIH0pIH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU1ZHKHsgLi4ucHJvcHMsIGNhdGVnb3J5LCBpY29uIH0pO1xyXG4gIH1cclxufVxyXG5cclxuSWNvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMub25lT2YoWydhY3Rpb24nLCAnY3VzdG9tJywgJ2RvY3R5cGUnLCAnc3RhbmRhcmQnLCAndXRpbGl0eSddKSxcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnY2lyY2xlJ10pLFxyXG4gIF0pLFxyXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICd3YXJuaW5nJywgJ2Vycm9yJ10pLFxyXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGZpbGxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIl19