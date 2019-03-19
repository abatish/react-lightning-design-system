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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SalesPath = function (_React$Component) {
  (0, _inherits3.default)(SalesPath, _React$Component);

  function SalesPath() {
    (0, _classCallCheck3.default)(this, SalesPath);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SalesPath.__proto__ || (0, _getPrototypeOf2.default)(SalesPath)).call(this));

    _this.state = {};

    _this.onItemClick = _this.onItemClick.bind(_this);
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
        var _path$props = path.props,
            eventKey = _path$props.eventKey,
            type = _path$props.type,
            props = (0, _objectWithoutProperties3.default)(_path$props, ['eventKey', 'type']);

        var isActive = eventKey === activeKey;

        typeTracker = isActive ? 0 : typeTracker >= 0 ? 1 : -1;

        var evaluatedType = type || (isActive ? 'current' : typeTracker === -1 ? 'complete' : 'incomplete');

        return _react2.default.createElement(PathItem, (0, _extends3.default)({
          eventKey: eventKey,
          type: evaluatedType,
          onSelect: _this2.onItemClick
        }, props));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;

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
  className: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  defaultActiveKey: _propTypes2.default.any,
  activeKey: _propTypes2.default.any
};

var PathItem = function (_React$Component2) {
  (0, _inherits3.default)(PathItem, _React$Component2);

  function PathItem() {
    (0, _classCallCheck3.default)(this, PathItem);
    return (0, _possibleConstructorReturn3.default)(this, (PathItem.__proto__ || (0, _getPrototypeOf2.default)(PathItem)).apply(this, arguments));
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
      var _props2 = this.props,
          className = _props2.className,
          eventKey = _props2.eventKey,
          title = _props2.title,
          completedTitle = _props2.completedTitle,
          type = _props2.type;


      var pathItemClassName = (0, _classnames2.default)('slds-tabs--path__item', 'slds-is-' + type, className);

      var tabIndex = type === 'current' ? 0 : -1;
      var completedText = completedTitle || 'Stage Complete';

      return _react2.default.createElement(
        'li',
        { className: pathItemClassName, role: 'presentation' },
        _react2.default.createElement(
          'a',
          {
            className: 'slds-tabs--path__link',
            'aria-selected': 'false',
            tabIndex: tabIndex,
            role: 'tab',
            'aria-live': 'assertive',
            onClick: this.onItemClick.bind(this, eventKey)
          },
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
  className: _propTypes2.default.string,
  eventKey: _propTypes2.default.any,
  type: _propTypes2.default.oneOf(['complete', 'current', 'incomplete']),
  title: _propTypes2.default.string,
  completedTitle: _propTypes2.default.string,
  onSelect: _propTypes2.default.func
};

SalesPath.PathItem = PathItem;

exports.default = SalesPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NhbGVzUGF0aC5qcyJdLCJuYW1lcyI6WyJTYWxlc1BhdGgiLCJzdGF0ZSIsIm9uSXRlbUNsaWNrIiwiYmluZCIsIml0ZW1LZXkiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic2V0U3RhdGUiLCJhY3RpdmVLZXkiLCJwYXRocyIsInR5cGVUcmFja2VyIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsInBhdGgiLCJldmVudEtleSIsInR5cGUiLCJpc0FjdGl2ZSIsImV2YWx1YXRlZFR5cGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRlZmF1bHRBY3RpdmVLZXkiLCJzYWxlc1BhdGhDbGFzc05hbWVzIiwicmVuZGVyU2FsZXNQYXRoIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsIm5vZGUiLCJhbnkiLCJQYXRoSXRlbSIsInRpdGxlIiwiY29tcGxldGVkVGl0bGUiLCJwYXRoSXRlbUNsYXNzTmFtZSIsInRhYkluZGV4IiwiY29tcGxldGVkVGV4dCIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxTOzs7QUFDSix1QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYSxFQUFiOztBQUVBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFKWTtBQUtiOzs7O2dDQUVXQyxPLEVBQVM7QUFDbkIsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixPQUFwQjtBQUNEO0FBQ0Q7QUFDQSxXQUFLRyxRQUFMLENBQWMsRUFBRUMsV0FBV0osT0FBYixFQUFkO0FBQ0Q7OztvQ0FFZUksUyxFQUFXQyxLLEVBQU87QUFBQTs7QUFDaEMsVUFBSUMsY0FB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LHdCQUFoQjtBQUNFLDBDQUFDLGNBQUQsSUFBTSxVQUFTLFNBQWYsRUFBeUIsTUFBSyxPQUE5QixFQUFzQyxNQUFLLFNBQTNDLEdBREY7QUFFS0MscUJBQVMsVUFBVixHQUNBO0FBQUE7QUFBQSxnQkFBTSxXQUFVLHFCQUFoQjtBQUF3Q29CO0FBQXhDLGFBREEsR0FFRTtBQUpOLFdBUkY7QUFjRTtBQUFBO0FBQUEsY0FBTSxXQUFVLHdCQUFoQjtBQUEyQ0o7QUFBM0M7QUFkRjtBQURGLE9BREY7QUFvQkQ7OztFQXhDb0JyQixnQkFBTWEsUzs7QUEyQzdCTyxTQUFTTixTQUFULEdBQXFCO0FBQ25CTixhQUFXTyxvQkFBVUMsTUFERjtBQUVuQlosWUFBVVcsb0JBQVVJLEdBRkQ7QUFHbkJkLFFBQU1VLG9CQUFVVyxLQUFWLENBQWdCLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBd0IsWUFBeEIsQ0FBaEIsQ0FIYTtBQUluQkwsU0FBT04sb0JBQVVDLE1BSkU7QUFLbkJNLGtCQUFnQlAsb0JBQVVDLE1BTFA7QUFNbkJyQixZQUFVb0Isb0JBQVVFO0FBTkQsQ0FBckI7O0FBU0E1QixVQUFVK0IsUUFBVixHQUFxQkEsUUFBckI7O2tCQUVlL0IsUyIsImZpbGUiOiJTYWxlc1BhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuY2xhc3MgU2FsZXNQYXRoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB0aGlzLm9uSXRlbUNsaWNrID0gdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25JdGVtQ2xpY2soaXRlbUtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xuICAgIH1cbiAgICAvLyBVbmNvbnRyb2xsZWRcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlS2V5OiBpdGVtS2V5IH0pO1xuICB9XG5cbiAgcmVuZGVyU2FsZXNQYXRoKGFjdGl2ZUtleSwgcGF0aHMpIHtcbiAgICBsZXQgdHlwZVRyYWNrZXIgPSAtMTtcblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAocGF0aHMsIChwYXRoKSA9PiB7XG4gICAgICBjb25zdCB7IGV2ZW50S2V5LCB0eXBlLCAuLi5wcm9wcyB9ID0gcGF0aC5wcm9wcztcbiAgICAgIGNvbnN0IGlzQWN0aXZlID0gZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcblxuICAgICAgdHlwZVRyYWNrZXIgPSAoaXNBY3RpdmUpID8gMCA6XG4gICAgICAgICh0eXBlVHJhY2tlciA+PSAwKSA/IDEgOiAtMTtcblxuICAgICAgY29uc3QgZXZhbHVhdGVkVHlwZSA9IHR5cGUgfHwgKFxuICAgICAgICAoaXNBY3RpdmUpID8gJ2N1cnJlbnQnIDpcbiAgICAgICAgKCh0eXBlVHJhY2tlciA9PT0gLTEpID8gJ2NvbXBsZXRlJyA6ICdpbmNvbXBsZXRlJylcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoPFBhdGhJdGVtXG4gICAgICAgIGV2ZW50S2V5PXsgZXZlbnRLZXkgfVxuICAgICAgICB0eXBlPXsgZXZhbHVhdGVkVHlwZSB9XG4gICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkl0ZW1DbGljayB9XG4gICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgLz4pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSB8fCB0aGlzLnN0YXRlLmFjdGl2ZUtleSB8fCB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XG5cbiAgICBjb25zdCBzYWxlc1BhdGhDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRhYnMtLXBhdGgnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzYWxlc1BhdGhDbGFzc05hbWVzIH0gcm9sZT0nYXBwbGljYXRpb24gdGFibGlzdCc+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtdGFicy0tcGF0aF9fbmF2JyByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTYWxlc1BhdGgoYWN0aXZlS2V5LCBjaGlsZHJlbikgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TYWxlc1BhdGgucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBkZWZhdWx0QWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXG59O1xuXG5cbmNsYXNzIFBhdGhJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBvbkl0ZW1DbGljayhpdGVtS2V5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbUtleSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBldmVudEtleSwgdGl0bGUsIGNvbXBsZXRlZFRpdGxlLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcGF0aEl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtdGFicy0tcGF0aF9faXRlbScsXG4gICAgICBgc2xkcy1pcy0ke3R5cGV9YCxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG5cbiAgICBjb25zdCB0YWJJbmRleCA9ICh0eXBlID09PSAnY3VycmVudCcpID8gMCA6IC0xO1xuICAgIGNvbnN0IGNvbXBsZXRlZFRleHQgPSBjb21wbGV0ZWRUaXRsZSB8fCAnU3RhZ2UgQ29tcGxldGUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBwYXRoSXRlbUNsYXNzTmFtZSB9IHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX2xpbmsnXG4gICAgICAgICAgYXJpYS1zZWxlY3RlZD0nZmFsc2UnXG4gICAgICAgICAgdGFiSW5kZXg9eyB0YWJJbmRleCB9XG4gICAgICAgICAgcm9sZT0ndGFiJ1xuICAgICAgICAgIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJ1xuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcywgZXZlbnRLZXkpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX19zdGFnZSc+XG4gICAgICAgICAgICA8SWNvbiBjYXRlZ29yeT0ndXRpbGl0eScgaWNvbj0nY2hlY2snIHNpemU9J3gtc21hbGwnIC8+XG4gICAgICAgICAgICB7ICh0eXBlID09PSAnY29tcGxldGUnKSA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0Jz57IGNvbXBsZXRlZFRleHQgfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsIH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX3RpdGxlJz57IHRpdGxlIH08L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5QYXRoSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXZlbnRLZXk6IFByb3BUeXBlcy5hbnksXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NvbXBsZXRlJywgJ2N1cnJlbnQnLCAnaW5jb21wbGV0ZSddKSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbXBsZXRlZFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TYWxlc1BhdGguUGF0aEl0ZW0gPSBQYXRoSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsZXNQYXRoO1xuIl19