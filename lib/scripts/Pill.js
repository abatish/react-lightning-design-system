'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pill = function (_Component) {
  (0, _inherits3.default)(Pill, _Component);

  function Pill() {
    (0, _classCallCheck3.default)(this, Pill);
    return (0, _possibleConstructorReturn3.default)(this, (Pill.__proto__ || (0, _getPrototypeOf2.default)(Pill)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pill, [{
    key: 'onPillClick',
    value: function onPillClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'onPillRemove',
    value: function onPillRemove(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.props.onRemove) {
        this.props.onRemove(e);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 8 || e.keyCode === 46) {
        // Bacspace / DEL
        e.preventDefault();
        e.stopPropagation();
        this.onPillRemove({});
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          disabled = _props.disabled,
          label = _props.label,
          tag = _props.tag,
          pillRef = _props.pillRef,
          truncate = _props.truncate,
          className = _props.className;

      var Tag = disabled ? 'span' : tag || 'a';
      var pillClassNames = (0, _classnames2.default)('slds-pill', { 'slds-truncate': truncate }, className);

      return _react2.default.createElement(
        Tag,
        {
          ref: function ref(node) {
            if (pillRef) pillRef(node);
          },
          className: pillClassNames,
          onKeyDown: this.onKeyDown.bind(this),
          onClick: this.onPillClick.bind(this)
        },
        icon ? _react2.default.createElement(_Icon2.default, {
          className: 'slds-pill__icon',
          category: icon.category,
          icon: icon.icon
        }) : undefined,
        _react2.default.createElement(
          'span',
          { className: 'slds-pill__label' },
          label
        ),
        _react2.default.createElement(_Button2.default, {
          disabled: disabled,
          className: 'slds-pill__remove',
          type: 'icon-bare',
          icon: 'close',
          alt: 'Remove',
          title: 'Remove',
          tabIndex: -1,
          onClick: this.onPillRemove.bind(this)
        })
      );
    }
  }]);
  return Pill;
}(_react.Component);

Pill.propTypes = {
  onClick: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  truncate: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  pillRef: _propTypes2.default.func,
  icon: _propTypes2.default.shape({
    category: _propTypes2.default.string,
    icon: _propTypes2.default.string
  }),
  disabled: _propTypes2.default.bool
};

exports.default = Pill;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwia2V5Q29kZSIsIm9uUGlsbFJlbW92ZSIsImljb24iLCJkaXNhYmxlZCIsImxhYmVsIiwidGFnIiwicGlsbFJlZiIsInRydW5jYXRlIiwiY2xhc3NOYW1lIiwiVGFnIiwicGlsbENsYXNzTmFtZXMiLCJub2RlIiwib25LZXlEb3duIiwiYmluZCIsIm9uUGlsbENsaWNrIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7O2dDQUNRQyxDLEVBQUc7QUFDYixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUN0QixhQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRjs7O2lDQUVZQSxDLEVBQUc7QUFDZEEsUUFBRUcsY0FBRjtBQUNBSCxRQUFFSSxlQUFGO0FBQ0EsVUFBSSxLQUFLSCxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0osS0FBTCxDQUFXSSxRQUFYLENBQW9CTCxDQUFwQjtBQUNEO0FBQ0Y7Ozs4QkFFU0EsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRU0sT0FBRixLQUFjLENBQWQsSUFBbUJOLEVBQUVNLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDTixVQUFFRyxjQUFGO0FBQ0FILFVBQUVJLGVBQUY7QUFDQSxhQUFLRyxZQUFMLENBQWtCLEVBQWxCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsbUJBQzhELEtBQUtOLEtBRG5FO0FBQUEsVUFDQ08sSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsUUFEUCxVQUNPQSxRQURQO0FBQUEsVUFDaUJDLEtBRGpCLFVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxHQUR4QixVQUN3QkEsR0FEeEI7QUFBQSxVQUM2QkMsT0FEN0IsVUFDNkJBLE9BRDdCO0FBQUEsVUFDc0NDLFFBRHRDLFVBQ3NDQSxRQUR0QztBQUFBLFVBQ2dEQyxTQURoRCxVQUNnREEsU0FEaEQ7O0FBRVAsVUFBTUMsTUFBTU4sV0FBVyxNQUFYLEdBQXFCRSxPQUFPLEdBQXhDO0FBQ0EsVUFBTUssaUJBQWlCLDBCQUNyQixXQURxQixFQUVyQixFQUFFLGlCQUFpQkgsUUFBbkIsRUFGcUIsRUFHckJDLFNBSHFCLENBQXZCOztBQU1BLGFBQ0U7QUFBQyxXQUFEO0FBQUE7QUFDRSxlQUFNLGFBQUNHLElBQUQsRUFBVTtBQUNkLGdCQUFJTCxPQUFKLEVBQWFBLFFBQVFLLElBQVI7QUFDZCxXQUhIO0FBSUUscUJBQVdELGNBSmI7QUFLRSxxQkFBWSxLQUFLRSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FMZDtBQU1FLG1CQUFVLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCO0FBTlo7QUFRSVgsZUFDQSw4QkFBQyxjQUFEO0FBQ0UscUJBQVUsaUJBRFo7QUFFRSxvQkFBV0EsS0FBS2EsUUFGbEI7QUFHRSxnQkFBT2IsS0FBS0E7QUFIZCxVQURBLEdBTUFjLFNBZEo7QUFnQkU7QUFBQTtBQUFBLFlBQU0sV0FBVSxrQkFBaEI7QUFDSVo7QUFESixTQWhCRjtBQW1CRSxzQ0FBQyxnQkFBRDtBQUNFLG9CQUFXRCxRQURiO0FBRUUscUJBQVUsbUJBRlo7QUFHRSxnQkFBSyxXQUhQO0FBSUUsZ0JBQUssT0FKUDtBQUtFLGVBQUksUUFMTjtBQU1FLGlCQUFNLFFBTlI7QUFPRSxvQkFBVyxDQUFDLENBUGQ7QUFRRSxtQkFBVSxLQUFLRixZQUFMLENBQWtCWSxJQUFsQixDQUF1QixJQUF2QjtBQVJaO0FBbkJGLE9BREY7QUFnQ0Q7OztFQWhFZ0JJLGdCOztBQW1FbkJ4QixLQUFLeUIsU0FBTCxHQUFpQjtBQUNmdEIsV0FBU3VCLG9CQUFVQyxJQURKO0FBRWZyQixZQUFVb0Isb0JBQVVDLElBRkw7QUFHZmIsWUFBVVksb0JBQVVFLElBSEw7QUFJZmIsYUFBV1csb0JBQVVHLE1BSk47QUFLZmxCLFNBQU9lLG9CQUFVRyxNQUxGO0FBTWZqQixPQUFLYyxvQkFBVUcsTUFOQTtBQU9maEIsV0FBU2Esb0JBQVVDLElBUEo7QUFRZmxCLFFBQU1pQixvQkFBVUksS0FBVixDQUFnQjtBQUNwQlIsY0FBVUksb0JBQVVHLE1BREE7QUFFcEJwQixVQUFNaUIsb0JBQVVHO0FBRkksR0FBaEIsQ0FSUztBQVlmbkIsWUFBVWdCLG9CQUFVRTtBQVpMLENBQWpCOztrQkFlZTVCLEkiLCJmaWxlIjoiUGlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuY2xhc3MgUGlsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uUGlsbENsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25QaWxsUmVtb3ZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlbW92ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZShlKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25QaWxsUmVtb3ZlKHt9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpY29uLCBkaXNhYmxlZCwgbGFiZWwsIHRhZywgcGlsbFJlZiwgdHJ1bmNhdGUsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBUYWcgPSBkaXNhYmxlZCA/ICdzcGFuJyA6ICh0YWcgfHwgJ2EnKTtcbiAgICBjb25zdCBwaWxsQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1waWxsJyxcbiAgICAgIHsgJ3NsZHMtdHJ1bmNhdGUnOiB0cnVuY2F0ZSB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFnXG4gICAgICAgIHJlZj17IChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKHBpbGxSZWYpIHBpbGxSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17cGlsbENsYXNzTmFtZXN9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblBpbGxDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAgeyBpY29uID9cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2ljb24nXG4gICAgICAgICAgICBjYXRlZ29yeT17IGljb24uY2F0ZWdvcnkgfVxuICAgICAgICAgICAgaWNvbj17IGljb24uaWNvbiB9XG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1waWxsX19sYWJlbCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1waWxsX19yZW1vdmUnXG4gICAgICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgICAgIGljb249J2Nsb3NlJ1xuICAgICAgICAgIGFsdD0nUmVtb3ZlJ1xuICAgICAgICAgIHRpdGxlPSdSZW1vdmUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25QaWxsUmVtb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuXG5QaWxsLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBpbGxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpY29uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaWxsO1xuIl19