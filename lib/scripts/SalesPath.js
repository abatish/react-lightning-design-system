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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NhbGVzUGF0aC5qcyJdLCJuYW1lcyI6WyJTYWxlc1BhdGgiLCJzdGF0ZSIsIm9uSXRlbUNsaWNrIiwiYmluZCIsIml0ZW1LZXkiLCJwcm9wcyIsIm9uU2VsZWN0Iiwic2V0U3RhdGUiLCJhY3RpdmVLZXkiLCJwYXRocyIsInR5cGVUcmFja2VyIiwiQ2hpbGRyZW4iLCJtYXAiLCJwYXRoIiwiZXZlbnRLZXkiLCJ0eXBlIiwiaXNBY3RpdmUiLCJldmFsdWF0ZWRUeXBlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkZWZhdWx0QWN0aXZlS2V5Iiwic2FsZXNQYXRoQ2xhc3NOYW1lcyIsInJlbmRlclNhbGVzUGF0aCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJub2RlIiwiYW55IiwiUGF0aEl0ZW0iLCJ0aXRsZSIsImNvbXBsZXRlZFRpdGxlIiwicGF0aEl0ZW1DbGFzc05hbWUiLCJ0YWJJbmRleCIsImNvbXBsZXRlZFRleHQiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsUzs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBSlk7QUFLYjs7OztnQ0FFV0MsTyxFQUFTO0FBQ25CLFVBQUksS0FBS0MsS0FBTCxDQUFXQyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkYsT0FBcEI7QUFDRDtBQUNEO0FBQ0EsV0FBS0csUUFBTCxDQUFjLEVBQUVDLFdBQVdKLE9BQWIsRUFBZDtBQUNEOzs7b0NBRWVJLFMsRUFBV0MsSyxFQUFPO0FBQUE7O0FBQ2hDLFVBQUlDLGNBQWMsQ0FBQyxDQUFuQjs7QUFFQSxh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QUF5QixNQUFLLE9BQTlCLEVBQXNDLE1BQUssU0FBM0MsR0FERjtBQUVLQyxxQkFBUyxVQUFWLEdBQ0E7QUFBQTtBQUFBLGdCQUFNLFdBQVUscUJBQWhCO0FBQXdDbUI7QUFBeEMsYUFEQSxHQUVFO0FBSk4sV0FSRjtBQWNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsd0JBQWhCO0FBQTJDSjtBQUEzQztBQWRGO0FBREYsT0FERjtBQW9CRDs7O0VBeENvQixnQkFBTVAsUzs7QUEyQzdCTSxTQUFTTCxTQUFULEdBQXFCO0FBQ25CTixhQUFXLG9CQUFVTyxNQURGO0FBRW5CWCxZQUFVLG9CQUFVYyxHQUZEO0FBR25CYixRQUFNLG9CQUFVb0IsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCLFlBQXhCLENBQWhCLENBSGE7QUFJbkJMLFNBQU8sb0JBQVVMLE1BSkU7QUFLbkJNLGtCQUFnQixvQkFBVU4sTUFMUDtBQU1uQm5CLFlBQVUsb0JBQVVvQjtBQU5ELENBQXJCOztBQVNBMUIsVUFBVTZCLFFBQVYsR0FBcUJBLFFBQXJCOztrQkFFZTdCLFMiLCJmaWxlIjoiU2FsZXNQYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmNsYXNzIFNhbGVzUGF0aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgdGhpcy5vbkl0ZW1DbGljayA9IHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uSXRlbUNsaWNrKGl0ZW1LZXkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtS2V5KTtcbiAgICB9XG4gICAgLy8gVW5jb250cm9sbGVkXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUtleTogaXRlbUtleSB9KTtcbiAgfVxuXG4gIHJlbmRlclNhbGVzUGF0aChhY3RpdmVLZXksIHBhdGhzKSB7XG4gICAgbGV0IHR5cGVUcmFja2VyID0gLTE7XG5cbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHBhdGhzLCAocGF0aCkgPT4ge1xuICAgICAgY29uc3QgeyBldmVudEtleSwgdHlwZSwgLi4ucHJvcHMgfSA9IHBhdGgucHJvcHM7XG4gICAgICBjb25zdCBpc0FjdGl2ZSA9IGV2ZW50S2V5ID09PSBhY3RpdmVLZXk7XG5cbiAgICAgIHR5cGVUcmFja2VyID0gKGlzQWN0aXZlKSA/IDAgOlxuICAgICAgICAodHlwZVRyYWNrZXIgPj0gMCkgPyAxIDogLTE7XG5cbiAgICAgIGNvbnN0IGV2YWx1YXRlZFR5cGUgPSB0eXBlIHx8IChcbiAgICAgICAgKGlzQWN0aXZlKSA/ICdjdXJyZW50JyA6XG4gICAgICAgICgodHlwZVRyYWNrZXIgPT09IC0xKSA/ICdjb21wbGV0ZScgOiAnaW5jb21wbGV0ZScpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKDxQYXRoSXRlbVxuICAgICAgICBldmVudEtleT17IGV2ZW50S2V5IH1cbiAgICAgICAgdHlwZT17IGV2YWx1YXRlZFR5cGUgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25JdGVtQ2xpY2sgfVxuICAgICAgICB7IC4uLnByb3BzIH1cbiAgICAgIC8+KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlS2V5ID0gdGhpcy5wcm9wcy5hY3RpdmVLZXkgfHwgdGhpcy5zdGF0ZS5hY3RpdmVLZXkgfHwgdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xuXG4gICAgY29uc3Qgc2FsZXNQYXRoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10YWJzLS1wYXRoJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2FsZXNQYXRoQ2xhc3NOYW1lcyB9IHJvbGU9J2FwcGxpY2F0aW9uIHRhYmxpc3QnPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX25hdicgcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2FsZXNQYXRoKGFjdGl2ZUtleSwgY2hpbGRyZW4pIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2FsZXNQYXRoLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgZGVmYXVsdEFjdGl2ZUtleTogUHJvcFR5cGVzLmFueSxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxufTtcblxuXG5jbGFzcyBQYXRoSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgb25JdGVtQ2xpY2soaXRlbUtleSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZXZlbnRLZXksIHRpdGxlLCBjb21wbGV0ZWRUaXRsZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHBhdGhJdGVtQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLXRhYnMtLXBhdGhfX2l0ZW0nLFxuICAgICAgYHNsZHMtaXMtJHt0eXBlfWAsXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuXG4gICAgY29uc3QgdGFiSW5kZXggPSAodHlwZSA9PT0gJ2N1cnJlbnQnKSA/IDAgOiAtMTtcbiAgICBjb25zdCBjb21wbGV0ZWRUZXh0ID0gY29tcGxldGVkVGl0bGUgfHwgJ1N0YWdlIENvbXBsZXRlJztcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXsgcGF0aEl0ZW1DbGFzc05hbWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX19saW5rJ1xuICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9J2ZhbHNlJ1xuICAgICAgICAgIHRhYkluZGV4PXsgdGFiSW5kZXggfVxuICAgICAgICAgIHJvbGU9J3RhYidcbiAgICAgICAgICBhcmlhLWxpdmU9J2Fzc2VydGl2ZSdcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdGFicy0tcGF0aF9fc3RhZ2UnPlxuICAgICAgICAgICAgPEljb24gY2F0ZWdvcnk9J3V0aWxpdHknIGljb249J2NoZWNrJyBzaXplPSd4LXNtYWxsJyAvPlxuICAgICAgICAgICAgeyAodHlwZSA9PT0gJ2NvbXBsZXRlJykgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+eyBjb21wbGV0ZWRUZXh0IH08L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbCB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX190aXRsZSc+eyB0aXRsZSB9PC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuUGF0aEl0ZW0ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMuYW55LFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydjb21wbGV0ZScsICdjdXJyZW50JywgJ2luY29tcGxldGUnXSksXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb21wbGV0ZWRUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuU2FsZXNQYXRoLlBhdGhJdGVtID0gUGF0aEl0ZW07XG5cbmV4cG9ydCBkZWZhdWx0IFNhbGVzUGF0aDtcbiJdfQ==