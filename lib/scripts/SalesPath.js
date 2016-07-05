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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SalesPath = function (_React$Component) {
  (0, _inherits3.default)(SalesPath, _React$Component);

  function SalesPath(props) {
    (0, _classCallCheck3.default)(this, SalesPath);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SalesPath).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(SalesPath, [{
    key: 'onItemClick',
    value: function onItemClick(itemKey) {
      if (this.props.onSelect) {
        this.props.onSelect(itemKey);
      }
      // Uncontrolled
      this.setState({ activeKey: itemKey });
    }
  }, {
    key: 'renderSalesPath',
    value: function renderSalesPath(activeKey, paths) {
      var _this2 = this;

      var typeTracker = -1;

      return _react2.default.Children.map(paths, function (path) {
        var _path$props = path.props;
        var eventKey = _path$props.eventKey;
        var type = _path$props.type;
        var onSelect = _path$props.onSelect;
        var props = (0, _objectWithoutProperties3.default)(_path$props, ['eventKey', 'type', 'onSelect']);

        var isActive = eventKey === activeKey;

        typeTracker = isActive ? 0 : typeTracker >= 0 ? 1 : -1;

        var evaluatedType = type || (isActive ? 'current' : typeTracker === -1 ? 'complete' : 'incomplete');

        return _react2.default.createElement(PathItem, (0, _extends3.default)({ eventKey: eventKey, type: evaluatedType, onSelect: _this2.onItemClick.bind(_this2) }, props));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var activeKey = this.props.activeKey || this.state.activeKey || this.props.defaultActiveKey;

      var salesPathClassNames = (0, _classnames2.default)(className, 'slds-tabs--path');
      return _react2.default.createElement(
        'div',
        { className: salesPathClassNames, role: 'application tablist' },
        _react2.default.createElement(
          'ul',
          { className: 'slds-tabs--path__nav', role: 'presentation' },
          this.renderSalesPath(activeKey, children)
        )
      );
    }
  }]);
  return SalesPath;
}(_react2.default.Component);

SalesPath.propTypes = {
  className: _react.PropTypes.string,
  defaultActiveKey: _react.PropTypes.any,
  activeKey: _react.PropTypes.any,
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node
};

var PathItem = function (_React$Component2) {
  (0, _inherits3.default)(PathItem, _React$Component2);

  function PathItem() {
    (0, _classCallCheck3.default)(this, PathItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PathItem).apply(this, arguments));
  }

  (0, _createClass3.default)(PathItem, [{
    key: 'onItemClick',
    value: function onItemClick(itemKey) {
      if (this.props.onSelect) {
        this.props.onSelect(itemKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var eventKey = _props2.eventKey;
      var title = _props2.title;
      var completedTitle = _props2.completedTitle;
      var type = _props2.type;


      var pathItemClassName = (0, _classnames2.default)('slds-tabs--path__item', 'slds-is-' + type, className);

      var tabIndex = type === 'current' ? 0 : -1;
      var completedText = completedTitle || 'Stage Complete';

      return _react2.default.createElement(
        'li',
        { className: pathItemClassName, role: 'presentation' },
        _react2.default.createElement(
          'a',
          { className: 'slds-tabs--path__link', 'aria-selected': 'false', tabIndex: tabIndex, role: 'tab', 'aria-live': 'assertive', onClick: this.onItemClick.bind(this, eventKey) },
          _react2.default.createElement(
            'span',
            { className: 'slds-tabs--path__stage' },
            _react2.default.createElement(_Icon2.default, { category: 'utility', icon: 'check', size: 'x-small' }),
            type === 'complete' ? _react2.default.createElement(
              'span',
              { className: 'slds-assistive-text' },
              completedText
            ) : null
          ),
          _react2.default.createElement(
            'span',
            { className: 'slds-tabs--path__title' },
            title
          )
        )
      );
    }
  }]);
  return PathItem;
}(_react2.default.Component);

PathItem.propTypes = {
  className: _react.PropTypes.string,
  eventKey: _react.PropTypes.any,
  type: _react.PropTypes.oneOf(['complete', 'current', 'incomplete']),
  title: _react.PropTypes.string,
  completedTitle: _react.PropTypes.string,
  onSelect: _react.PropTypes.func
};

SalesPath.PathItem = PathItem;

exports.default = SalesPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NhbGVzUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTSxTOzs7QUFFSixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7OztnQ0FFVyxPLEVBQVM7QUFDbkIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FBcEI7QUFDRDs7QUFFRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLFdBQVcsT0FBYixFQUFkO0FBQ0Q7OztvQ0FFZSxTLEVBQVcsSyxFQUFPO0FBQUE7O0FBQ2hDLFVBQUksY0FBYyxDQUFDLENBQW5COztBQUVBLGFBQU8sZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsS0FBbkIsRUFBMEIsVUFBQyxJQUFELEVBQVU7QUFBQSwwQkFDTSxLQUFLLEtBRFg7QUFBQSxZQUNqQyxRQURpQyxlQUNqQyxRQURpQztBQUFBLFlBQ3ZCLElBRHVCLGVBQ3ZCLElBRHVCO0FBQUEsWUFDakIsUUFEaUIsZUFDakIsUUFEaUI7QUFBQSxZQUNKLEtBREk7O0FBRXpDLFlBQU0sV0FBVyxhQUFhLFNBQTlCOztBQUVBLHNCQUFlLFFBQUQsR0FBYSxDQUFiLEdBQ1gsZUFBZSxDQUFoQixHQUFxQixDQUFyQixHQUF5QixDQUFDLENBRDVCOztBQUdBLFlBQU0sZ0JBQWdCLFNBQ25CLFFBQUQsR0FBYSxTQUFiLEdBQ0UsZ0JBQWdCLENBQUMsQ0FBbEIsR0FBdUIsVUFBdkIsR0FBb0MsWUFGakIsQ0FBdEI7O0FBS0EsZUFBUSw4QkFBQyxRQUFELDJCQUFVLFVBQVcsUUFBckIsRUFBZ0MsTUFBTyxhQUF2QyxFQUF1RCxVQUFXLE9BQUssV0FBTCxDQUFpQixJQUFqQixR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cnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuXG5jbGFzcyBTYWxlc1BhdGggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGl0ZW1LZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtS2V5KTtcbiAgICB9XG4gICAgLy8gVW5jb250cm9sbGVkXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleTogaXRlbUtleSB9KTtcbiAgfVxuXG4gIHJlbmRlclNhbGVzUGF0aChhY3RpdmVLZXksIHBhdGhzKSB7XG4gICAgbGV0IHR5cGVUcmFja2VyID0gLTE7XG5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHBhdGhzLCAocGF0aCkgPT4ge1xuICAgICAgY29uc3QgeyBldmVudEtleSwgdHlwZSwgb25TZWxlY3QsIC4uLnByb3BzIH0gPSBwYXRoLnByb3BzO1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xuXG4gICAgICB0eXBlVHJhY2tlciA9IChpc0FjdGl2ZSkgPyAwIDpcbiAgICAgICAgKHR5cGVUcmFja2VyID49IDApID8gMSA6IC0xO1xuXG4gICAgICBjb25zdCBldmFsdWF0ZWRUeXBlID0gdHlwZSB8fCAoXG4gICAgICAgIChpc0FjdGl2ZSkgPyAnY3VycmVudCcgOlxuICAgICAgICAoKHR5cGVUcmFja2VyID09PSAtMSkgPyAnY29tcGxldGUnIDogJ2luY29tcGxldGUnKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuICg8UGF0aEl0ZW0gZXZlbnRLZXk9eyBldmVudEtleSB9IHR5cGU9eyBldmFsdWF0ZWRUeXBlIH0gb25TZWxlY3Q9eyB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykgfSB7IC4uLnByb3BzIH0gLz4pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgfHwgdGhpcy5zdGF0ZS5hY3RpdmVLZXkgfHwgdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuXG4gICAgY29uc3Qgc2FsZXNQYXRoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10YWJzLS1wYXRoJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2FsZXNQYXRoQ2xhc3NOYW1lcyB9IHJvbGU9J2FwcGxpY2F0aW9uIHRhYmxpc3QnPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX25hdicgcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2FsZXNQYXRoKGFjdGl2ZUtleSwgY2hpbGRyZW4pIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2FsZXNQYXRoLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0QWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG5jbGFzcyBQYXRoSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgb25JdGVtQ2xpY2soaXRlbUtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZXZlbnRLZXksIHRpdGxlLCBjb21wbGV0ZWRUaXRsZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHBhdGhJdGVtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLXRhYnMtLXBhdGhfX2l0ZW0nLFxuICAgICAgYHNsZHMtaXMtJHt0eXBlfWAsXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgY29uc3QgdGFiSW5kZXggPSAodHlwZSA9PT0gJ2N1cnJlbnQnKSA/IDAgOiAtMTtcbiAgICBjb25zdCBjb21wbGV0ZWRUZXh0ID0gY29tcGxldGVkVGl0bGUgfHwgJ1N0YWdlIENvbXBsZXRlJztcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aEl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdGFicy0tcGF0aF9fbGluaycgYXJpYS1zZWxlY3RlZD0nZmFsc2UnIHRhYkluZGV4PXsgdGFiSW5kZXggfSByb2xlPSd0YWInIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJyBvbkNsaWNrPXsgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX19zdGFnZSc+XG4gICAgICAgICAgICA8SWNvbiBjYXRlZ29yeT0ndXRpbGl0eScgaWNvbj0nY2hlY2snIHNpemU9J3gtc21hbGwnIC8+XG4gICAgICAgICAgICB7ICh0eXBlID09PSAnY29tcGxldGUnKSA/ICg8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgY29tcGxldGVkVGV4dCB9PC9zcGFuPikgOiBudWxsIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX3RpdGxlJz57IHRpdGxlIH08L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5QYXRoSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5hbnksXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NvbXBsZXRlJywgJ2N1cnJlbnQnLCAnaW5jb21wbGV0ZSddKSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbXBsZXRlZFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TYWxlc1BhdGguUGF0aEl0ZW0gPSBQYXRoSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZXNQYXRoO1xuIl19