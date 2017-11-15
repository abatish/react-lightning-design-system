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
          tabIndex: -1,
          onClick: this.onPillRemove.bind(this)
        })
      );
    }
  }]);
  return Pill;
}(_react.Component);

Pill.propTypes = {
  onClick: _react.PropTypes.func,
  onRemove: _react.PropTypes.func,
  truncate: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  tag: _react.PropTypes.string,
  pillRef: _react.PropTypes.func,
  icon: _react.PropTypes.shape({
    category: _react.PropTypes.string,
    icon: _react.PropTypes.string
  }),
  disabled: _react.PropTypes.bool
};

exports.default = Pill;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpbGwuanMiXSwibmFtZXMiOlsiUGlsbCIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwia2V5Q29kZSIsIm9uUGlsbFJlbW92ZSIsImljb24iLCJkaXNhYmxlZCIsImxhYmVsIiwidGFnIiwicGlsbFJlZiIsInRydW5jYXRlIiwiY2xhc3NOYW1lIiwiVGFnIiwicGlsbENsYXNzTmFtZXMiLCJub2RlIiwib25LZXlEb3duIiwiYmluZCIsIm9uUGlsbENsaWNrIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsInNoYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozs7OztnQ0FDUUMsQyxFQUFHO0FBQ2IsVUFBSSxLQUFLQyxLQUFMLENBQVdDLE9BQWYsRUFBd0I7QUFDdEIsYUFBS0QsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixDQUFuQjtBQUNEO0FBQ0Y7OztpQ0FFWUEsQyxFQUFHO0FBQ2RBLFFBQUVHLGNBQUY7QUFDQUgsUUFBRUksZUFBRjtBQUNBLFVBQUksS0FBS0gsS0FBTCxDQUFXSSxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUtKLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkwsQ0FBcEI7QUFDRDtBQUNGOzs7OEJBRVNBLEMsRUFBRztBQUNYLFVBQUlBLEVBQUVNLE9BQUYsS0FBYyxDQUFkLElBQW1CTixFQUFFTSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7QUFBRTtBQUN6Q04sVUFBRUcsY0FBRjtBQUNBSCxVQUFFSSxlQUFGO0FBQ0EsYUFBS0csWUFBTCxDQUFrQixFQUFsQjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQUM4RCxLQUFLTixLQURuRTtBQUFBLFVBQ0NPLElBREQsVUFDQ0EsSUFERDtBQUFBLFVBQ09DLFFBRFAsVUFDT0EsUUFEUDtBQUFBLFVBQ2lCQyxLQURqQixVQUNpQkEsS0FEakI7QUFBQSxVQUN3QkMsR0FEeEIsVUFDd0JBLEdBRHhCO0FBQUEsVUFDNkJDLE9BRDdCLFVBQzZCQSxPQUQ3QjtBQUFBLFVBQ3NDQyxRQUR0QyxVQUNzQ0EsUUFEdEM7QUFBQSxVQUNnREMsU0FEaEQsVUFDZ0RBLFNBRGhEOztBQUVQLFVBQU1DLE1BQU1OLFdBQVcsTUFBWCxHQUFxQkUsT0FBTyxHQUF4QztBQUNBLFVBQU1LLGlCQUFpQiwwQkFDckIsV0FEcUIsRUFFckIsRUFBRSxpQkFBaUJILFFBQW5CLEVBRnFCLEVBR3JCQyxTQUhxQixDQUF2QjtBQUtBLGFBQ0U7QUFBQyxXQUFEO0FBQUE7QUFDRSxlQUFNLGFBQUNHLElBQUQsRUFBVTtBQUNkLGdCQUFJTCxPQUFKLEVBQWFBLFFBQVFLLElBQVI7QUFDZCxXQUhIO0FBSUUscUJBQVdELGNBSmI7QUFLRSxxQkFBWSxLQUFLRSxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FMZDtBQU1FLG1CQUFVLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCO0FBTlo7QUFRSVgsZUFDQTtBQUNFLHFCQUFVLGlCQURaO0FBRUUsb0JBQVdBLEtBQUthLFFBRmxCO0FBR0UsZ0JBQU9iLEtBQUtBO0FBSGQsVUFEQSxHQU1BYyxTQWRKO0FBZ0JFO0FBQUE7QUFBQSxZQUFNLFdBQVUsa0JBQWhCO0FBQ0laO0FBREosU0FoQkY7QUFtQkU7QUFDRSxvQkFBV0QsUUFEYjtBQUVFLHFCQUFVLG1CQUZaO0FBR0UsZ0JBQUssV0FIUDtBQUlFLGdCQUFLLE9BSlA7QUFLRSxlQUFJLFFBTE47QUFNRSxvQkFBVyxDQUFDLENBTmQ7QUFPRSxtQkFBVSxLQUFLRixZQUFMLENBQWtCWSxJQUFsQixDQUF1QixJQUF2QjtBQVBaO0FBbkJGLE9BREY7QUErQkQ7Ozs7O0FBR0hwQixLQUFLd0IsU0FBTCxHQUFpQjtBQUNmckIsV0FBUyxpQkFBVXNCLElBREo7QUFFZm5CLFlBQVUsaUJBQVVtQixJQUZMO0FBR2ZYLFlBQVUsaUJBQVVZLElBSEw7QUFJZlgsYUFBVyxpQkFBVVksTUFKTjtBQUtmaEIsU0FBTyxpQkFBVWdCLE1BTEY7QUFNZmYsT0FBSyxpQkFBVWUsTUFOQTtBQU9mZCxXQUFTLGlCQUFVWSxJQVBKO0FBUWZoQixRQUFNLGlCQUFVbUIsS0FBVixDQUFnQjtBQUNwQk4sY0FBVSxpQkFBVUssTUFEQTtBQUVwQmxCLFVBQU0saUJBQVVrQjtBQUZJLEdBQWhCLENBUlM7QUFZZmpCLFlBQVUsaUJBQVVnQjtBQVpMLENBQWpCOztrQkFlZTFCLEkiLCJmaWxlIjoiUGlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmNsYXNzIFBpbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvblBpbGxDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uUGlsbFJlbW92ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMucHJvcHMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25SZW1vdmUoZSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uUGlsbFJlbW92ZSh7fSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgZGlzYWJsZWQsIGxhYmVsLCB0YWcsIHBpbGxSZWYsIHRydW5jYXRlLCBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgVGFnID0gZGlzYWJsZWQgPyAnc3BhbicgOiAodGFnIHx8ICdhJyk7XG4gICAgY29uc3QgcGlsbENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtcGlsbCcsXG4gICAgICB7ICdzbGRzLXRydW5jYXRlJzogdHJ1bmNhdGUgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWdcbiAgICAgICAgcmVmPXsgKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAocGlsbFJlZikgcGlsbFJlZihub2RlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtwaWxsQ2xhc3NOYW1lc31cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uUGlsbENsaWNrLmJpbmQodGhpcykgfVxuICAgICAgPlxuICAgICAgICB7IGljb24gP1xuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtcGlsbF9faWNvbidcbiAgICAgICAgICAgIGNhdGVnb3J5PXsgaWNvbi5jYXRlZ29yeSB9XG4gICAgICAgICAgICBpY29uPXsgaWNvbi5pY29uIH1cbiAgICAgICAgICAvPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2xhYmVsJz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX3JlbW92ZSdcbiAgICAgICAgICB0eXBlPSdpY29uLWJhcmUnXG4gICAgICAgICAgaWNvbj0nY2xvc2UnXG4gICAgICAgICAgYWx0PSdSZW1vdmUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25QaWxsUmVtb3ZlLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9UYWc+XG4gICAgKTtcbiAgfVxufVxuXG5QaWxsLnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJ1bmNhdGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBpbGxSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBpY29uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaWxsO1xuIl19