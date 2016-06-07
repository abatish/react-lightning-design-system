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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NhbGVzUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTSxTOzs7QUFFSixxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7OztnQ0FFVyxPLEVBQVM7QUFDbkIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FBcEI7QUFDRDs7QUFFRCxXQUFLLFFBQUwsQ0FBYyxFQUFFLFdBQVcsT0FBYixFQUFkO0FBQ0Q7OztvQ0FFZSxTLEVBQVcsSyxFQUFPO0FBQUE7O0FBQ2hDLFVBQUksY0FBYyxDQUFDLENBQW5COztBQUVBLGFBQU8sZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsS0FBbkIsRUFBMEIsVUFBQyxJQUFELEVBQVU7QUFBQSwwQkFDTSxLQUFLLEtBRFg7QUFBQSxZQUNqQyxRQURpQyxlQUNqQyxRQURpQztBQUFBLFlBQ3ZCLElBRHVCLGVBQ3ZCLElBRHVCO0FBQUEsWUFDakIsUUFEaUIsZUFDakIsUUFEaUI7QUFBQSxZQUNKLEtBREk7O0FBRXpDLFlBQU0sV0FBVyxhQUFhLFNBQTlCOztBQUVBLHNCQUFlLFFBQUQsR0FBYSxDQUFiLEdBQ1gsZUFBZSxDQUFoQixHQUFxQixDQUFyQixHQUF5QixDQUFDLENBRDVCOztBQUdBLFlBQU0sZ0JBQWdCLFNBQ25CLFFBQUQsR0FBYSxTQUFiLEdBQ0UsZ0JBQWdCLENBQUMsQ0FBbEIsR0FBdUIsVUFBdkIsR0FBb0MsWUFGakIsQ0FBdEI7O0FBS0EsZUFBUSw4QkFBQyxRQUFELDJCQUFVLFVBQVcsUUFBckIsRUFBZ0MsTUFBTyxhQUF2QyxFQUF1RCxVQUFXLE9BQUssV0FBTCxDQUFpQixJQUFqQixR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cnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuXHJcbmNsYXNzIFNhbGVzUGF0aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayhpdGVtS2V5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5jb250cm9sbGVkXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlS2V5OiBpdGVtS2V5IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2FsZXNQYXRoKGFjdGl2ZUtleSwgcGF0aHMpIHtcclxuICAgIGxldCB0eXBlVHJhY2tlciA9IC0xO1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAocGF0aHMsIChwYXRoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXZlbnRLZXksIHR5cGUsIG9uU2VsZWN0LCAuLi5wcm9wcyB9ID0gcGF0aC5wcm9wcztcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xyXG5cclxuICAgICAgdHlwZVRyYWNrZXIgPSAoaXNBY3RpdmUpID8gMCA6XHJcbiAgICAgICAgKHR5cGVUcmFja2VyID49IDApID8gMSA6IC0xO1xyXG5cclxuICAgICAgY29uc3QgZXZhbHVhdGVkVHlwZSA9IHR5cGUgfHwgKFxyXG4gICAgICAgIChpc0FjdGl2ZSkgPyAnY3VycmVudCcgOlxyXG4gICAgICAgICgodHlwZVRyYWNrZXIgPT09IC0xKSA/ICdjb21wbGV0ZScgOiAnaW5jb21wbGV0ZScpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKDxQYXRoSXRlbSBldmVudEtleT17IGV2ZW50S2V5IH0gdHlwZT17IGV2YWx1YXRlZFR5cGUgfSBvblNlbGVjdD17IHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSB9IHsgLi4ucHJvcHMgfSAvPik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSB8fCB0aGlzLnN0YXRlLmFjdGl2ZUtleSB8fCB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XHJcblxyXG4gICAgY29uc3Qgc2FsZXNQYXRoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10YWJzLS1wYXRoJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNhbGVzUGF0aENsYXNzTmFtZXMgfSByb2xlPSdhcHBsaWNhdGlvbiB0YWJsaXN0Jz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX25hdicgcm9sZT0ncHJlc2VudGF0aW9uJz5cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTYWxlc1BhdGgoYWN0aXZlS2V5LCBjaGlsZHJlbikgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblNhbGVzUGF0aC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRBY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXHJcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuY2xhc3MgUGF0aEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBvbkl0ZW1DbGljayhpdGVtS2V5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGV2ZW50S2V5LCB0aXRsZSwgY29tcGxldGVkVGl0bGUsIHR5cGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgcGF0aEl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy10YWJzLS1wYXRoX19pdGVtJyxcclxuICAgICAgYHNsZHMtaXMtJHt0eXBlfWAsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0YWJJbmRleCA9ICh0eXBlID09PSAnY3VycmVudCcpID8gMCA6IC0xO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGV4dCA9IGNvbXBsZXRlZFRpdGxlIHx8ICdTdGFnZSBDb21wbGV0ZSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGhJdGVtQ2xhc3NOYW1lIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdGFicy0tcGF0aF9fbGluaycgYXJpYS1zZWxlY3RlZD0nZmFsc2UnIHRhYkluZGV4PXsgdGFiSW5kZXggfSByb2xlPSd0YWInIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJyBvbkNsaWNrPXsgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX3N0YWdlJz5cclxuICAgICAgICAgICAgPEljb24gY2F0ZWdvcnk9J3V0aWxpdHknIGljb249J2NoZWNrJyBzaXplPSd4LXNtYWxsJyAvPlxyXG4gICAgICAgICAgICB7ICh0eXBlID09PSAnY29tcGxldGUnKSA/ICg8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgY29tcGxldGVkVGV4dCB9PC9zcGFuPikgOiBudWxsIH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX190aXRsZSc+eyB0aXRsZSB9PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYXRoSXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMuYW55LFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NvbXBsZXRlJywgJ2N1cnJlbnQnLCAnaW5jb21wbGV0ZSddKSxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb21wbGV0ZWRUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5TYWxlc1BhdGguUGF0aEl0ZW0gPSBQYXRoSXRlbTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVzUGF0aDtcclxuIl19