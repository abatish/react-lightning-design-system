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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwia2V5Q29kZSIsIm9uUGlsbFJlbW92ZSIsImljb24iLCJkaXNhYmxlZCIsImxhYmVsIiwidGFnIiwicGlsbFJlZiIsInRydW5jYXRlIiwiY2xhc3NOYW1lIiwiVGFnIiwicGlsbENsYXNzTmFtZXMiLCJub2RlIiwib25LZXlEb3duIiwiYmluZCIsIm9uUGlsbENsaWNrIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7O2dDQUNRQyxDLEVBQUc7QUFDYixVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUN0QixhQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRjs7O2lDQUVZQSxDLEVBQUc7QUFDZEEsUUFBRUcsY0FBRjtBQUNBSCxRQUFFSSxlQUFGO0FBQ0EsVUFBSSxLQUFLSCxLQUFMLENBQVdJLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0osS0FBTCxDQUFXSSxRQUFYLENBQW9CTCxDQUFwQjtBQUNEO0FBQ0Y7Ozs4QkFFU0EsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRU0sT0FBRixLQUFjLENBQWQsSUFBbUJOLEVBQUVNLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDTixVQUFFRyxjQUFGO0FBQ0FILFVBQUVJLGVBQUY7QUFDQSxhQUFLRyxZQUFMLENBQWtCLEVBQWxCO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQUEsbUJBQzhELEtBQUtOLEtBRG5FO0FBQUEsVUFDQ08sSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsUUFEUCxVQUNPQSxRQURQO0FBQUEsVUFDaUJDLEtBRGpCLFVBQ2lCQSxLQURqQjtBQUFBLFVBQ3dCQyxHQUR4QixVQUN3QkEsR0FEeEI7QUFBQSxVQUM2QkMsT0FEN0IsVUFDNkJBLE9BRDdCO0FBQUEsVUFDc0NDLFFBRHRDLFVBQ3NDQSxRQUR0QztBQUFBLFVBQ2dEQyxTQURoRCxVQUNnREEsU0FEaEQ7O0FBRVAsVUFBTUMsTUFBTU4sV0FBVyxNQUFYLEdBQXFCRSxPQUFPLEdBQXhDO0FBQ0EsVUFBTUssaUJBQWlCLDBCQUNyQixXQURxQixFQUVyQixFQUFFLGlCQUFpQkgsUUFBbkIsRUFGcUIsRUFHckJDLFNBSHFCLENBQXZCOztBQU1BLGFBQ0U7QUFBQyxXQUFEO0FBQUE7QUFDRSxlQUFNLGFBQUNHLElBQUQsRUFBVTtBQUNkLGdCQUFJTCxPQUFKLEVBQWFBLFFBQVFLLElBQVI7QUFDZCxXQUhIO0FBSUUscUJBQVdELGNBSmI7QUFLRSxxQkFBWSxLQUFLRSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FMZDtBQU1FLG1CQUFVLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCO0FBTlo7QUFRSVgsZUFDQTtBQUNFLHFCQUFVLGlCQURaO0FBRUUsb0JBQVdBLEtBQUthLFFBRmxCO0FBR0UsZ0JBQU9iLEtBQUtBO0FBSGQsVUFEQSxHQU1BYyxTQWRKO0FBZ0JFO0FBQUE7QUFBQSxZQUFNLFdBQVUsa0JBQWhCO0FBQ0laO0FBREosU0FoQkY7QUFtQkU7QUFDRSxvQkFBV0QsUUFEYjtBQUVFLHFCQUFVLG1CQUZaO0FBR0UsZ0JBQUssV0FIUDtBQUlFLGdCQUFLLE9BSlA7QUFLRSxlQUFJLFFBTE47QUFNRSxpQkFBTSxRQU5SO0FBT0Usb0JBQVcsQ0FBQyxDQVBkO0FBUUUsbUJBQVUsS0FBS0YsWUFBTCxDQUFrQlksSUFBbEIsQ0FBdUIsSUFBdkI7QUFSWjtBQW5CRixPQURGO0FBZ0NEOzs7OztBQUdIcEIsS0FBS3dCLFNBQUwsR0FBaUI7QUFDZnJCLFdBQVMsb0JBQVVzQixJQURKO0FBRWZuQixZQUFVLG9CQUFVbUIsSUFGTDtBQUdmWCxZQUFVLG9CQUFVWSxJQUhMO0FBSWZYLGFBQVcsb0JBQVVZLE1BSk47QUFLZmhCLFNBQU8sb0JBQVVnQixNQUxGO0FBTWZmLE9BQUssb0JBQVVlLE1BTkE7QUFPZmQsV0FBUyxvQkFBVVksSUFQSjtBQVFmaEIsUUFBTSxvQkFBVW1CLEtBQVYsQ0FBZ0I7QUFDcEJOLGNBQVUsb0JBQVVLLE1BREE7QUFFcEJsQixVQUFNLG9CQUFVa0I7QUFGSSxHQUFoQixDQVJTO0FBWWZqQixZQUFVLG9CQUFVZ0I7QUFaTCxDQUFqQjs7a0JBZWUxQixJIiwiZmlsZSI6IlBpbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmNsYXNzIFBpbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvblBpbGxDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGlsbFJlbW92ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUoZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uUGlsbFJlbW92ZSh7fSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgZGlzYWJsZWQsIGxhYmVsLCB0YWcsIHBpbGxSZWYsIHRydW5jYXRlLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgVGFnID0gZGlzYWJsZWQgPyAnc3BhbicgOiAodGFnIHx8ICdhJyk7XG4gICAgY29uc3QgcGlsbENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtcGlsbCcsXG4gICAgICB7ICdzbGRzLXRydW5jYXRlJzogdHJ1bmNhdGUgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWdcbiAgICAgICAgcmVmPXsgKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAocGlsbFJlZikgcGlsbFJlZihub2RlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtwaWxsQ2xhc3NOYW1lc31cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uUGlsbENsaWNrLmJpbmQodGhpcykgfVxuICAgICAgPlxuICAgICAgICB7IGljb24gP1xuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlsbF9faWNvbidcbiAgICAgICAgICAgIGNhdGVnb3J5PXsgaWNvbi5jYXRlZ29yeSB9XG4gICAgICAgICAgICBpY29uPXsgaWNvbi5pY29uIH1cbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2xhYmVsJz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX3JlbW92ZSdcbiAgICAgICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICAgICAgaWNvbj0nY2xvc2UnXG4gICAgICAgICAgYWx0PSdSZW1vdmUnXG4gICAgICAgICAgdGl0bGU9J1JlbW92ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblBpbGxSZW1vdmUuYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICA8L1RhZz5cbiAgICApO1xuICB9XG59XG5cblBpbGwucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICB0cnVuY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGlsbFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIGljb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGw7XG4iXX0=