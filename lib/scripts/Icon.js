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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztJQUVxQixJOzs7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYLEtBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUssY0FBTDtBQUNBLFVBQU0sUUFBUSxtQkFBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLE9BQS9CLENBQWQ7QUFDQSxZQUFNLFlBQU4sQ0FBbUIsV0FBbkIsRUFBZ0MsS0FBSyxLQUFMLENBQVcsUUFBWCxJQUF1QixDQUF2RDtBQUNEOzs7eUNBRW9CO0FBQ25CLFdBQUssY0FBTDtBQUNEOzs7aUNBRVksUyxFQUFXLFEsRUFBVSxJLEVBQU07QUFDdEMsYUFDRSxLQUFLLEtBQUwsQ0FBVyxTQUFYLEdBQXVCLEtBQUssS0FBTCxDQUFXLFNBQWxDLEdBQ0EsYUFBYSxTQUFiLEdBQXlCLElBQXpCLEdBQ0EsY0FBYyxNQUFkLEdBQXVCLElBQXZCLEdBQ0EsWUFBWSxTQUFaLEdBQ0EsYUFBYSxTQUFiLEdBQXlCLElBQXpCLEdBQ0EsYUFBYSxRQUFiLEdBQXdCLEtBQUssT0FBTCxDQUFhLFNBQWIsRUFBd0IsU0FBeEIsQ0FBeEIsR0FDQSxhQUFhLFFBQWIsSUFBeUIsY0FBYyxJQUFkLENBQW1CLElBQW5CLENBQXpCLEdBQW9ELEtBQUssT0FBTCxDQUFhLGFBQWIsRUFBNEIsU0FBNUIsQ0FBcEQsR0FDQSxXQUFXLEdBQVgsR0FBaUIsQ0FBQyxRQUFRLEVBQVQsRUFBYSxPQUFiLENBQXFCLElBQXJCLEVBQTJCLEdBQTNCLENBUm5CO0FBVUQ7OztrQ0FFYSxRLEVBQVU7QUFDdEIsYUFBTyw4QkFBbUIsUUFBbkIsS0FB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RUFBdUMsSUFBdkMsQ0FBbEI7QUFDQSxZQUFNLHFCQUFxQiwwQkFDekIsc0JBRHlCLEVBRXpCLGNBQWMsUUFBZCxHQUF5Qiw4QkFBekIsR0FBMEQsSUFGakMsRUFHekIsMkJBQXlCLFNBQXpCLEdBQXVDLElBSGQsRUFJekIsU0FKeUIsQ0FBM0I7QUFNQSxlQUNFO0FBQUE7VUFBQSxFQUFNLFdBQVksa0JBQWxCLEVBQXVDLEtBQUksZUFBM0M7VUFDSSxLQUFLLFNBQUwsMEJBQWlCLGtCQUFqQixFQUEyQixVQUEzQixFQUFpQyxXQUFXLFNBQTVDLEVBQXVELG9CQUF2RCxJQUFxRSxNQUFyRTtBQURKLFNBREY7QUFLRDs7QUFFRCxhQUFPLEtBQUssU0FBTCw0QkFBb0IsS0FBcEIsSUFBMkIsa0JBQTNCLEVBQXFDLFVBQXJDLElBQVA7QUFDRDs7O0VBaEcrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBbUdyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixZQUFVLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixTQUFyQixFQUFnQyxVQUFoQyxFQUE0QyxTQUE1QyxDQUFoQixDQUZLO0FBR2YsUUFBTSxpQkFBVSxNQUhEO0FBSWYsYUFBVyxpQkFBVSxTQUFWLENBQW9CLENBQzdCLGlCQUFVLElBRG1CLEVBRTdCLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFoQixDQUY2QixDQUFwQixDQUpJO0FBUWYsU0FBTyxpQkFBVSxNQVJGO0FBU2YsYUFBVyxpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBaEIsQ0FUSTtBQVVmLFlBQVUsaUJBQVUsTUFWTDtBQVdmLGFBQVcsaUJBQVU7QUFYTixDQUFqQiIsImZpbGUiOiJJY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcbmltcG9ydCB7IGdldEFzc2V0Um9vdCwgZ2V0U3ltYm9sc0ZpbGVQYXRoIH0gZnJvbSAnLi91dGlsJztcblxuc3ZnNGV2ZXJ5Ym9keSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jaGVja0ljb25Db2xvcigpO1xuICAgIGNvbnN0IHN2Z0VsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnN2Z0ljb24pO1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgdGhpcy5wcm9wcy50YWJJbmRleCA+PSAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XG4gIH1cblxuICBnZXRJY29uQ29sb3IoZmlsbENvbG9yLCBjYXRlZ29yeSwgaWNvbikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmljb25Db2xvciA/IHRoaXMuc3RhdGUuaWNvbkNvbG9yIDpcbiAgICAgIGNhdGVnb3J5ID09PSAnZG9jdHlwZScgPyBudWxsIDpcbiAgICAgIGZpbGxDb2xvciA9PT0gJ25vbmUnID8gbnVsbCA6XG4gICAgICBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOlxuICAgICAgY2F0ZWdvcnkgPT09ICd1dGlsaXR5JyA/IG51bGwgOlxuICAgICAgY2F0ZWdvcnkgPT09ICdjdXN0b20nID8gaWNvbi5yZXBsYWNlKC9eY3VzdG9tLywgJ2N1c3RvbS0nKSA6XG4gICAgICBjYXRlZ29yeSA9PT0gJ2FjdGlvbicgJiYgL15uZXdfY3VzdG9tLy50ZXN0KGljb24pID8gaWNvbi5yZXBsYWNlKC9ebmV3X2N1c3RvbS8sICdjdXN0b20tJykgOlxuICAgICAgY2F0ZWdvcnkgKyAnLScgKyAoaWNvbiB8fCAnJykucmVwbGFjZSgvXy9nLCAnLScpXG4gICAgKTtcbiAgfVxuXG4gIGdldFN5bWJvbHNTdmcoY2F0ZWdvcnkpIHtcbiAgICByZXR1cm4gZ2V0U3ltYm9sc0ZpbGVQYXRoKGNhdGVnb3J5KSB8fCBgJHsgZ2V0QXNzZXRSb290KCkgfS9pY29ucy8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnYDtcbiAgfVxuXG4gIGNoZWNrSWNvbkNvbG9yKCkge1xuICAgIGNvbnN0IHsgZmlsbENvbG9yLCBjYXRlZ29yeSA9ICd1dGlsaXR5JywgY29udGFpbmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChmaWxsQ29sb3IgPT09ICdub25lJyB8fCBjYXRlZ29yeSA9PT0gJ2RvY3R5cGUnIHx8ICghZmlsbENvbG9yICYmIGNhdGVnb3J5ID09PSAndXRpbGl0eScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUoY29udGFpbmVyID8gdGhpcy5yZWZzLmljb25Db250YWluZXIgOiB0aGlzLnJlZnMuc3ZnSWNvbik7XG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBiZ0NvbG9yU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKVsnYmFja2dyb3VuZC1jb2xvciddO1xuICAgIGlmICgvXih0cmFuc3BhcmVudHxyZ2JhXFwoMCxcXHMqMCxcXHMqMCxcXHMqMFxcKSkkLy50ZXN0KGJnQ29sb3JTdHlsZSkpIHsgLy8gaWYgbm8gYmFja2dyb3VuZCBjb2xvciBzZXQgdG8gdGhlIGljb25cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpY29uQ29sb3I6ICdzdGFuZGFyZC1kZWZhdWx0JyB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTVkcoeyBjbGFzc05hbWUsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBpY29uLCBzaXplLCBhbGlnbiwgZmlsbENvbG9yLCBjb250YWluZXIsIHRleHRDb2xvciA9ICdkZWZhdWx0JywgLi4ucHJvcHMgfSkge1xuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xuICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHtcbiAgICAgICAgJ3NsZHMtaWNvbic6ICEvc2xkc1xcLWJ1dHRvbl9faWNvbi8udGVzdChjbGFzc05hbWUpLFxuICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfGxhcmdlKSQvLnRlc3Qoc2l6ZSksXG4gICAgICAgIFtgc2xkcy1pY29uLXRleHQtJHt0ZXh0Q29sb3J9YF06IC9eKGRlZmF1bHR8d2FybmluZ3xlcnJvcikkLy50ZXN0KHRleHRDb2xvcikgJiYgIWNvbnRhaW5lciAmJiAhaWNvbkNvbG9yLFxuICAgICAgICBbYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gXTogIWNvbnRhaW5lciAmJiBpY29uQ29sb3IsXG4gICAgICAgICdzbGRzLW0tbGVmdC0teC1zbWFsbCc6IGFsaWduID09PSAncmlnaHQnLFxuICAgICAgICAnc2xkcy1tLXJpZ2h0LS14LXNtYWxsJzogYWxpZ24gPT09ICdsZWZ0JyxcbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgY29uc3QgdXNlSHRtbCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMuZ2V0U3ltYm9sc1N2ZyhjYXRlZ29yeSl9IyR7aWNvbn1cIj48L3VzZT5gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPXsgaWNvbkNsYXNzTmFtZXMgfVxuICAgICAgICBhcmlhLWhpZGRlblxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17IHsgX19odG1sOiB1c2VIdG1sIH0gfVxuICAgICAgICByZWY9J3N2Z0ljb24nXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHsgY2F0ZWdvcnksIGljb24gfSA9IHByb3BzO1xuXG4gICAgaWYgKGljb24uaW5kZXhPZignOicpID4gMCkge1xuICAgICAgW2NhdGVnb3J5LCBpY29uXSA9IGljb24uc3BsaXQoJzonKTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3QgeyBjbGFzc05hbWUsIGZpbGxDb2xvciwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xuICAgICAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtaWNvbl9fY29udGFpbmVyJyxcbiAgICAgICAgY29udGFpbmVyID09PSAnY2lyY2xlJyA/ICdzbGRzLWljb25fX2NvbnRhaW5lci0tY2lyY2xlJyA6IG51bGwsXG4gICAgICAgIGljb25Db2xvciA/IGBzbGRzLWljb24tJHtpY29uQ29sb3J9YCA6IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IGNvbnRhaW5lckNsYXNzTmFtZSB9IHJlZj0naWNvbkNvbnRhaW5lcic+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNWRyh7IGNhdGVnb3J5LCBpY29uLCBmaWxsQ29sb3I6IGljb25Db2xvciwgY29udGFpbmVyLCAuLi5wcHJvcHMgfSkgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlbmRlclNWRyh7IC4uLnByb3BzLCBjYXRlZ29yeSwgaWNvbiB9KTtcbiAgfVxufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2N1c3RvbScsICdkb2N0eXBlJywgJ3N0YW5kYXJkJywgJ3V0aWxpdHknXSksXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjaXJjbGUnXSksXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaWxsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19