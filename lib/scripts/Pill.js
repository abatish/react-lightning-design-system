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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwia2V5Q29kZSIsIm9uUGlsbFJlbW92ZSIsImljb24iLCJkaXNhYmxlZCIsImxhYmVsIiwidGFnIiwicGlsbFJlZiIsInRydW5jYXRlIiwiY2xhc3NOYW1lIiwiVGFnIiwicGlsbENsYXNzTmFtZXMiLCJub2RlIiwib25LZXlEb3duIiwiYmluZCIsIm9uUGlsbENsaWNrIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7O2dDQUNRQyxDLEVBQUc7QUFDYixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUN0QixhQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRjs7O2lDQUVZQSxDLEVBQUc7QUFDZEEsUUFBRUcsY0FBRjtBQUNBSCxRQUFFSSxlQUFGO0FBQ0EsVUFBSSxLQUFLSCxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0osS0FBTCxDQUFXSSxRQUFYLENBQW9CTCxDQUFwQjtBQUNEO0FBQ0Y7Ozs4QkFFU0EsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRU0sT0FBRixLQUFjLENBQWQsSUFBbUJOLEVBQUVNLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDTixVQUFFRyxjQUFGO0FBQ0FILFVBQUVJLGVBQUY7QUFDQSxhQUFLRyxZQUFMLENBQWtCLEVBQWxCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsbUJBQzhELEtBQUtOLEtBRG5FO0FBQUEsVUFDQ08sSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsUUFEUCxVQUNPQSxRQURQO0FBQUEsVUFDaUJDLEtBRGpCLFVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxHQUR4QixVQUN3QkEsR0FEeEI7QUFBQSxVQUM2QkMsT0FEN0IsVUFDNkJBLE9BRDdCO0FBQUEsVUFDc0NDLFFBRHRDLFVBQ3NDQSxRQUR0QztBQUFBLFVBQ2dEQyxTQURoRCxVQUNnREEsU0FEaEQ7O0FBRVAsVUFBTUMsTUFBTU4sV0FBVyxNQUFYLEdBQXFCRSxPQUFPLEdBQXhDO0FBQ0EsVUFBTUssaUJBQWlCLDBCQUNyQixXQURxQixFQUVyQixFQUFFLGlCQUFpQkgsUUFBbkIsRUFGcUIsRUFHckJDLFNBSHFCLENBQXZCO0FBS0EsYUFDRTtBQUFDLFdBQUQ7QUFBQTtBQUNFLGVBQU0sYUFBQ0csSUFBRCxFQUFVO0FBQ2QsZ0JBQUlMLE9BQUosRUFBYUEsUUFBUUssSUFBUjtBQUNkLFdBSEg7QUFJRSxxQkFBV0QsY0FKYjtBQUtFLHFCQUFZLEtBQUtFLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUxkO0FBTUUsbUJBQVUsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEI7QUFOWjtBQVFJWCxlQUNBLDhCQUFDLGNBQUQ7QUFDRSxxQkFBVSxpQkFEWjtBQUVFLG9CQUFXQSxLQUFLYSxRQUZsQjtBQUdFLGdCQUFPYixLQUFLQTtBQUhkLFVBREEsR0FNQWMsU0FkSjtBQWdCRTtBQUFBO0FBQUEsWUFBTSxXQUFVLGtCQUFoQjtBQUNJWjtBQURKLFNBaEJGO0FBbUJFLHNDQUFDLGdCQUFEO0FBQ0Usb0JBQVdELFFBRGI7QUFFRSxxQkFBVSxtQkFGWjtBQUdFLGdCQUFLLFdBSFA7QUFJRSxnQkFBSyxPQUpQO0FBS0UsZUFBSSxRQUxOO0FBTUUsaUJBQU0sUUFOUjtBQU9FLG9CQUFXLENBQUMsQ0FQZDtBQVFFLG1CQUFVLEtBQUtGLFlBQUwsQ0FBa0JZLElBQWxCLENBQXVCLElBQXZCO0FBUlo7QUFuQkYsT0FERjtBQWdDRDs7O0VBL0RnQkksZ0I7O0FBa0VuQnhCLEtBQUt5QixTQUFMLEdBQWlCO0FBQ2Z0QixXQUFTdUIsb0JBQVVDLElBREo7QUFFZnJCLFlBQVVvQixvQkFBVUMsSUFGTDtBQUdmYixZQUFVWSxvQkFBVUUsSUFITDtBQUlmYixhQUFXVyxvQkFBVUcsTUFKTjtBQUtmbEIsU0FBT2Usb0JBQVVHLE1BTEY7QUFNZmpCLE9BQUtjLG9CQUFVRyxNQU5BO0FBT2ZoQixXQUFTYSxvQkFBVUMsSUFQSjtBQVFmbEIsUUFBTWlCLG9CQUFVSSxLQUFWLENBQWdCO0FBQ3BCUixjQUFVSSxvQkFBVUcsTUFEQTtBQUVwQnBCLFVBQU1pQixvQkFBVUc7QUFGSSxHQUFoQixDQVJTO0FBWWZuQixZQUFVZ0Isb0JBQVVFO0FBWkwsQ0FBakI7O2tCQWVlNUIsSSIsImZpbGUiOiJQaWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuXG5jbGFzcyBQaWxsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25QaWxsQ2xpY2soZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblBpbGxSZW1vdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vblBpbGxSZW1vdmUoe30pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGljb24sIGRpc2FibGVkLCBsYWJlbCwgdGFnLCBwaWxsUmVmLCB0cnVuY2F0ZSwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IFRhZyA9IGRpc2FibGVkID8gJ3NwYW4nIDogKHRhZyB8fCAnYScpO1xuICAgIGNvbnN0IHBpbGxDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLXBpbGwnLFxuICAgICAgeyAnc2xkcy10cnVuY2F0ZSc6IHRydW5jYXRlIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8VGFnXG4gICAgICAgIHJlZj17IChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKHBpbGxSZWYpIHBpbGxSZWYobm9kZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17cGlsbENsYXNzTmFtZXN9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblBpbGxDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAgeyBpY29uID9cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2ljb24nXG4gICAgICAgICAgICBjYXRlZ29yeT17IGljb24uY2F0ZWdvcnkgfVxuICAgICAgICAgICAgaWNvbj17IGljb24uaWNvbiB9XG4gICAgICAgICAgLz4gOlxuICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1waWxsX19sYWJlbCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1waWxsX19yZW1vdmUnXG4gICAgICAgICAgdHlwZT0naWNvbi1iYXJlJ1xuICAgICAgICAgIGljb249J2Nsb3NlJ1xuICAgICAgICAgIGFsdD0nUmVtb3ZlJ1xuICAgICAgICAgIHRpdGxlPSdSZW1vdmUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25QaWxsUmVtb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuXG5QaWxsLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBpbGxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpY29uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaWxsO1xuIl19