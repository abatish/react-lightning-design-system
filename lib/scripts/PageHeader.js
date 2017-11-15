'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeaderHeading = exports.PageHeaderHeadingTitle = exports.PageHeaderDetail = exports.PageHeaderDetailItem = exports.PageHeaderDetailLabel = exports.PageHeaderDetailBody = undefined;

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _MediaObject = require('./MediaObject');

var _MediaObject2 = _interopRequireDefault(_MediaObject);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _BreadCrumbs = require('./BreadCrumbs');

var _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeaderDetailBody = function PageHeaderDetailBody(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return typeof children === 'string' ? _react2.default.createElement(
    _Text2.default,
    (0, _extends3.default)({
      category: 'body',
      type: 'regular',
      truncate: true
    }, props),
    children
  ) : children;
};

exports.PageHeaderDetailBody = PageHeaderDetailBody;
PageHeaderDetailBody.propTypes = {
  children: _react.PropTypes.node
};

var PageHeaderDetailLabel = function PageHeaderDetailLabel(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['children']);
  return typeof children === 'string' ? _react2.default.createElement(
    _Text2.default,
    (0, _extends3.default)({
      category: 'title',
      truncate: true,
      className: 'slds-m-bottom--xx-small'
    }, props),
    children
  ) : children;
};

exports.PageHeaderDetailLabel = PageHeaderDetailLabel;
PageHeaderDetailLabel.propTypes = {
  children: _react.PropTypes.node
};

var PageHeaderDetailItem = function PageHeaderDetailItem(props) {
  var children = props.children,
      label = props.label,
      pprops = (0, _objectWithoutProperties3.default)(props, ['children', 'label']);

  var manuallyAssembled = !label;
  return _react2.default.createElement(
    'li',
    (0, _extends3.default)({ className: 'slds-page-header__detail-block' }, pprops),
    !manuallyAssembled ? [_react2.default.createElement(
      PageHeaderDetailLabel,
      { key: 0 },
      label
    ), _react2.default.createElement(
      PageHeaderDetailBody,
      { key: 1 },
      children
    )] : [children]
  );
};

exports.PageHeaderDetailItem = PageHeaderDetailItem;
PageHeaderDetailItem.propTypes = {
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var PageHeaderDetail = function PageHeaderDetail(_ref3) {
  var children = _ref3.children,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['children']);
  return _react2.default.createElement(
    _Grid2.default,
    (0, _extends3.default)({
      tag: 'ul',
      vertical: false,
      className: 'slds-page-header__detail-row'
    }, props),
    children
  );
};

exports.PageHeaderDetail = PageHeaderDetail;
PageHeaderDetail.propTypes = {
  children: _react.PropTypes.node
};

var PageHeaderHeadingTitle = exports.PageHeaderHeadingTitle = function PageHeaderHeadingTitle(props) {
  var className = props.className,
      children = props.children;

  var titleClassNames = (0, _classnames2.default)(className, 'slds-page-header__title slds-truncate slds-align-middle');
  return _react2.default.createElement(
    'h1',
    (0, _extends3.default)({}, props, { className: titleClassNames }),
    children
  );
};

PageHeaderHeadingTitle.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var PageHeaderHeading = exports.PageHeaderHeading = function (_Component) {
  (0, _inherits3.default)(PageHeaderHeading, _Component);

  function PageHeaderHeading() {
    (0, _classCallCheck3.default)(this, PageHeaderHeading);
    return (0, _possibleConstructorReturn3.default)(this, (PageHeaderHeading.__proto__ || (0, _getPrototypeOf2.default)(PageHeaderHeading)).apply(this, arguments));
  }

  (0, _createClass3.default)(PageHeaderHeading, [{
    key: 'renderInfo',
    value: function renderInfo(info) {
      return info ? _react2.default.createElement(
        _Text2.default,
        {
          category: 'body',
          type: 'small'
        },
        info
      ) : null;
    }
  }, {
    key: 'renderWithMedia',
    value: function renderWithMedia(figure) {
      var content = this.renderContent();
      return figure ? _react2.default.createElement(
        _MediaObject2.default,
        { figureLeft: figure },
        content
      ) : content;
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var _props = this.props,
          rightActions = _props.rightActions,
          info = _props.info,
          legend = _props.legend,
          title = _props.title,
          breadCrumbs = _props.breadCrumbs,
          leftActions = _props.leftActions;

      var infoPart = info && !breadCrumbs && !legend && !rightActions ? this.renderInfo(info) : null;
      var titlePart = typeof title === 'string' ? _react2.default.createElement(
        PageHeaderHeadingTitle,
        { className: 'slds-m-right--small' },
        title
      ) : title;

      var breadCrumbsPart = null;
      if (breadCrumbs) {
        breadCrumbsPart = breadCrumbs.length && breadCrumbs[0].type === _BreadCrumbs.Crumb ? _react2.default.createElement(
          _BreadCrumbs2.default,
          null,
          breadCrumbs
        ) : breadCrumbs;
      }

      return _react2.default.createElement(
        'div',
        null,
        breadCrumbsPart,
        legend ? _react2.default.createElement(
          _Text2.default,
          {
            category: 'title',
            type: 'caps',
            className: 'slds-line-height--reset'
          },
          legend
        ) : null,
        leftActions ? _react2.default.createElement(
          _Grid2.default,
          { vertical: false },
          titlePart,
          _react2.default.createElement(
            _Grid.Col,
            { className: 'slds-shrink-none' },
            leftActions
          )
        ) : titlePart,
        infoPart
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          rightActions = _props2.rightActions,
          info = _props2.info,
          breadCrumbs = _props2.breadCrumbs,
          figure = _props2.figure,
          legend = _props2.legend;

      var content = this.renderWithMedia(figure);
      var infoPart = info && (breadCrumbs || legend || rightActions) ? this.renderInfo(info) : null;

      return rightActions ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Grid2.default,
          { vertical: false },
          _react2.default.createElement(
            _Grid.Col,
            { className: 'slds-has-flexi-truncate' },
            content
          ),
          _react2.default.createElement(
            _Grid.Col,
            { align: 'top', noFlex: true },
            _react2.default.createElement(
              _Grid2.default,
              null,
              _react2.default.createElement(
                _Grid.Row,
                { cols: 1 },
                rightActions
              )
            )
          )
        ),
        infoPart
      ) : _react2.default.createElement(
        'div',
        null,
        content,
        infoPart
      );
    }
  }]);
  return PageHeaderHeading;
}(_react.Component);

PageHeaderHeading.propTypes = {
  info: _react.PropTypes.string,
  legend: _react.PropTypes.string,
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  breadCrumbs: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_BreadCrumbs.Crumb), _react.PropTypes.node]),
  leftActions: _react.PropTypes.node,
  figure: _react.PropTypes.node,
  rightActions: _react.PropTypes.node
};

var PageHeader = function PageHeader(props) {
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: 'slds-page-header',
      role: 'banner'
    }, props),
    props.children
  );
};

PageHeader.propTypes = {
  children: _react.PropTypes.node
};

exports.default = PageHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BhZ2VIZWFkZXIuanMiXSwibmFtZXMiOlsiUGFnZUhlYWRlckRldGFpbEJvZHkiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsIlBhZ2VIZWFkZXJEZXRhaWxMYWJlbCIsIlBhZ2VIZWFkZXJEZXRhaWxJdGVtIiwibGFiZWwiLCJwcHJvcHMiLCJtYW51YWxseUFzc2VtYmxlZCIsInN0cmluZyIsIlBhZ2VIZWFkZXJEZXRhaWwiLCJQYWdlSGVhZGVySGVhZGluZ1RpdGxlIiwiY2xhc3NOYW1lIiwidGl0bGVDbGFzc05hbWVzIiwiUGFnZUhlYWRlckhlYWRpbmciLCJpbmZvIiwiZmlndXJlIiwiY29udGVudCIsInJlbmRlckNvbnRlbnQiLCJyaWdodEFjdGlvbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImJyZWFkQ3J1bWJzIiwibGVmdEFjdGlvbnMiLCJpbmZvUGFydCIsInJlbmRlckluZm8iLCJ0aXRsZVBhcnQiLCJicmVhZENydW1ic1BhcnQiLCJsZW5ndGgiLCJ0eXBlIiwicmVuZGVyV2l0aE1lZGlhIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIlBhZ2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjtBQUFBLFNBQ2xDLE9BQU9ELFFBQVAsS0FBb0IsUUFBcEIsR0FDRTtBQUFBO0FBQUE7QUFDRSxnQkFBUyxNQURYO0FBRUUsWUFBSyxTQUZQO0FBR0U7QUFIRixPQUlNQyxLQUpOO0FBS0VEO0FBTEYsR0FERixHQU9JQSxRQVI4QjtBQUFBLENBQTdCOzs7QUFXUEQscUJBQXFCRyxTQUFyQixHQUFpQztBQUMvQkYsWUFBVSxpQkFBVUc7QUFEVyxDQUFqQzs7QUFJTyxJQUFNQyx3QkFBd0IsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQUdKLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjtBQUFBLFNBQ25DLE9BQU9ELFFBQVAsS0FBb0IsUUFBcEIsR0FDRTtBQUFBO0FBQUE7QUFDRSxnQkFBUyxPQURYO0FBRUUsb0JBRkY7QUFHRSxpQkFBVTtBQUhaLE9BSU1DLEtBSk47QUFLRUQ7QUFMRixHQURGLEdBT0lBLFFBUitCO0FBQUEsQ0FBOUI7OztBQVdQSSxzQkFBc0JGLFNBQXRCLEdBQWtDO0FBQ2hDRixZQUFVLGlCQUFVRztBQURZLENBQWxDOztBQUlPLElBQU1FLHVCQUF1QixTQUF2QkEsb0JBQXVCLENBQUNKLEtBQUQsRUFBVztBQUFBLE1BQ3JDRCxRQURxQyxHQUNOQyxLQURNLENBQ3JDRCxRQURxQztBQUFBLE1BQzNCTSxLQUQyQixHQUNOTCxLQURNLENBQzNCSyxLQUQyQjtBQUFBLE1BQ2pCQyxNQURpQiwwQ0FDTk4sS0FETTs7QUFFN0MsTUFBTU8sb0JBQW9CLENBQUNGLEtBQTNCO0FBQ0EsU0FDRTtBQUFBO0FBQUEsNkJBQUksV0FBVSxnQ0FBZCxJQUFtREMsTUFBbkQ7QUFDRyxLQUFDQyxpQkFBRCxHQUFxQixDQUNwQjtBQUFDLDJCQUFEO0FBQUEsUUFBdUIsS0FBSyxDQUE1QjtBQUNHRjtBQURILEtBRG9CLEVBSXBCO0FBQUMsMEJBQUQ7QUFBQSxRQUFzQixLQUFLLENBQTNCO0FBQ0dOO0FBREgsS0FKb0IsQ0FBckIsR0FPRyxDQUFDQSxRQUFEO0FBUk4sR0FERjtBQVlELENBZk07OztBQWlCUEsscUJBQXFCSCxTQUFyQixHQUFpQztBQUMvQkksU0FBTyxpQkFBVUcsTUFEYztBQUUvQlQsWUFBVSxpQkFBVUc7QUFGVyxDQUFqQzs7QUFLTyxJQUFNTyxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdWLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjtBQUFBLFNBQzlCO0FBQUE7QUFBQTtBQUNFLFdBQUksSUFETjtBQUVFLGdCQUFVLEtBRlo7QUFHRSxpQkFBVTtBQUhaLE9BSU1BLEtBSk47QUFNR0Q7QUFOSCxHQUQ4QjtBQUFBLENBQXpCOzs7QUFXUFUsaUJBQWlCUixTQUFqQixHQUE2QjtBQUMzQkYsWUFBVSxpQkFBVUc7QUFETyxDQUE3Qjs7QUFJTyxJQUFNUSwwREFBeUIsU0FBekJBLHNCQUF5QixDQUFDVixLQUFELEVBQVc7QUFBQSxNQUN2Q1csU0FEdUMsR0FDZlgsS0FEZSxDQUN2Q1csU0FEdUM7QUFBQSxNQUM1QlosUUFENEIsR0FDZkMsS0FEZSxDQUM1QkQsUUFENEI7O0FBRS9DLE1BQU1hLGtCQUFrQiwwQkFDdEJELFNBRHNCLEVBRXRCLHlEQUZzQixDQUF4QjtBQUlBLFNBQ0U7QUFBQTtBQUFBLCtCQUFRWCxLQUFSLElBQWUsV0FBV1ksZUFBMUI7QUFDR2I7QUFESCxHQURGO0FBS0QsQ0FYTTs7QUFhUFcsdUJBQXVCVCxTQUF2QixHQUFtQztBQUNqQ1UsYUFBVyxpQkFBVUgsTUFEWTtBQUVqQ1QsWUFBVSxpQkFBVUc7QUFGYSxDQUFuQzs7SUFLYVcsaUIsV0FBQUEsaUI7Ozs7Ozs7Ozs7K0JBQ0FDLEksRUFBTTtBQUNmLGFBQU9BLE9BQ0w7QUFBQTtBQUFBO0FBQ0Usb0JBQVMsTUFEWDtBQUVFLGdCQUFLO0FBRlA7QUFJR0E7QUFKSCxPQURLLEdBT0gsSUFQSjtBQVFEOzs7b0NBQ2VDLE0sRUFBUTtBQUN0QixVQUFNQyxVQUFVLEtBQUtDLGFBQUwsRUFBaEI7QUFDQSxhQUFPRixTQUNMO0FBQUE7QUFBQSxVQUFhLFlBQVlBLE1BQXpCO0FBQ0dDO0FBREgsT0FESyxHQUlIQSxPQUpKO0FBS0Q7OztvQ0FDZTtBQUFBLG1CQUMwRCxLQUFLaEIsS0FEL0Q7QUFBQSxVQUNOa0IsWUFETSxVQUNOQSxZQURNO0FBQUEsVUFDUUosSUFEUixVQUNRQSxJQURSO0FBQUEsVUFDY0ssTUFEZCxVQUNjQSxNQURkO0FBQUEsVUFDc0JDLEtBRHRCLFVBQ3NCQSxLQUR0QjtBQUFBLFVBQzZCQyxXQUQ3QixVQUM2QkEsV0FEN0I7QUFBQSxVQUMwQ0MsV0FEMUMsVUFDMENBLFdBRDFDOztBQUVkLFVBQU1DLFdBQVlULFFBQVEsQ0FBQ08sV0FBVCxJQUF3QixDQUFDRixNQUF6QixJQUFtQyxDQUFDRCxZQUFyQyxHQUNmLEtBQUtNLFVBQUwsQ0FBZ0JWLElBQWhCLENBRGUsR0FDUyxJQUQxQjtBQUVBLFVBQU1XLFlBQVksT0FBT0wsS0FBUCxLQUFpQixRQUFqQixHQUNoQjtBQUFDLDhCQUFEO0FBQUEsVUFBd0IsV0FBVSxxQkFBbEM7QUFDR0E7QUFESCxPQURnQixHQUlkQSxLQUpKOztBQU1BLFVBQUlNLGtCQUFrQixJQUF0QjtBQUNBLFVBQUlMLFdBQUosRUFBaUI7QUFDZkssMEJBQWtCTCxZQUFZTSxNQUFaLElBQXNCTixZQUFZLENBQVosRUFBZU8sSUFBZix1QkFBdEIsR0FDaEI7QUFBQTtBQUFBO0FBQ0dQO0FBREgsU0FEZ0IsR0FJZEEsV0FKSjtBQUtEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0dLLHVCQURIO0FBRUdQLGlCQUNDO0FBQUE7QUFBQTtBQUNFLHNCQUFTLE9BRFg7QUFFRSxrQkFBSyxNQUZQO0FBR0UsdUJBQVU7QUFIWjtBQUtHQTtBQUxILFNBREQsR0FPVyxJQVRkO0FBVUdHLHNCQUNDO0FBQUE7QUFBQSxZQUFNLFVBQVUsS0FBaEI7QUFDR0csbUJBREg7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQ0dIO0FBREg7QUFGRixTQURELEdBT0dHLFNBakJOO0FBa0JHRjtBQWxCSCxPQURGO0FBc0JEOzs7NkJBQ1E7QUFBQSxvQkFDcUQsS0FBS3ZCLEtBRDFEO0FBQUEsVUFDQ2tCLFlBREQsV0FDQ0EsWUFERDtBQUFBLFVBQ2VKLElBRGYsV0FDZUEsSUFEZjtBQUFBLFVBQ3FCTyxXQURyQixXQUNxQkEsV0FEckI7QUFBQSxVQUNrQ04sTUFEbEMsV0FDa0NBLE1BRGxDO0FBQUEsVUFDMENJLE1BRDFDLFdBQzBDQSxNQUQxQzs7QUFFUCxVQUFNSCxVQUFVLEtBQUthLGVBQUwsQ0FBcUJkLE1BQXJCLENBQWhCO0FBQ0EsVUFBTVEsV0FBV1QsU0FBU08sZUFBZUYsTUFBZixJQUF5QkQsWUFBbEMsSUFBa0QsS0FBS00sVUFBTCxDQUFnQlYsSUFBaEIsQ0FBbEQsR0FBMEUsSUFBM0Y7O0FBRUEsYUFBT0ksZUFDTDtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQWhCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNHRjtBQURILFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxPQUFNLEtBQVgsRUFBaUIsWUFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssTUFBTSxDQUFYO0FBQ0dFO0FBREg7QUFERjtBQURGO0FBSkYsU0FERjtBQWFHSztBQWJILE9BREssR0FpQkw7QUFBQTtBQUFBO0FBQ0dQLGVBREg7QUFFR087QUFGSCxPQWpCRjtBQXNCRDs7Ozs7QUFHSFYsa0JBQWtCWixTQUFsQixHQUE4QjtBQUM1QmEsUUFBTSxpQkFBVU4sTUFEWTtBQUU1QlcsVUFBUSxpQkFBVVgsTUFGVTtBQUc1QlksU0FBTyxpQkFBVVUsU0FBVixDQUFvQixDQUN6QixpQkFBVXRCLE1BRGUsRUFFekIsaUJBQVVOLElBRmUsQ0FBcEIsQ0FIcUI7QUFPNUJtQixlQUFhLGlCQUFVUyxTQUFWLENBQW9CLENBQy9CLGlCQUFVQyxPQUFWLG9CQUQrQixFQUUvQixpQkFBVTdCLElBRnFCLENBQXBCLENBUGU7QUFXNUJvQixlQUFhLGlCQUFVcEIsSUFYSztBQVk1QmEsVUFBUSxpQkFBVWIsSUFaVTtBQWE1QmdCLGdCQUFjLGlCQUFVaEI7QUFiSSxDQUE5Qjs7QUFnQkEsSUFBTThCLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFLGlCQUFVLGtCQURaO0FBRUUsWUFBSztBQUZQLE9BR01oQyxLQUhOO0FBS0dBLFVBQU1EO0FBTFQsR0FEaUI7QUFBQSxDQUFuQjs7QUFTQWlDLFdBQVcvQixTQUFYLEdBQXVCO0FBQ3JCRixZQUFVLGlCQUFVRztBQURDLENBQXZCOztrQkFJZThCLFUiLCJmaWxlIjoiUGFnZUhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBNZWRpYU9iamVjdCBmcm9tICcuL01lZGlhT2JqZWN0JztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgR3JpZCwgeyBSb3csIENvbCB9IGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgQnJlYWRDcnVtYnMsIHsgQ3J1bWIgfSBmcm9tICcuL0JyZWFkQ3J1bWJzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWxCb2R5ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IChcbiAgICA8VGV4dFxuICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgdHJ1bmNhdGVcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+e2NoaWxkcmVufTwvVGV4dD5cbiAgKSA6IGNoaWxkcmVuXG4pO1xuXG5QYWdlSGVhZGVyRGV0YWlsQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyRGV0YWlsTGFiZWwgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gKFxuICAgIDxUZXh0XG4gICAgICBjYXRlZ29yeT0ndGl0bGUnXG4gICAgICB0cnVuY2F0ZVxuICAgICAgY2xhc3NOYW1lPSdzbGRzLW0tYm90dG9tLS14eC1zbWFsbCdcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+e2NoaWxkcmVufTwvVGV4dD5cbiAgKSA6IGNoaWxkcmVuXG4pO1xuXG5QYWdlSGVhZGVyRGV0YWlsTGFiZWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgbGFiZWwsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IG1hbnVhbGx5QXNzZW1ibGVkID0gIWxhYmVsO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtcGFnZS1oZWFkZXJfX2RldGFpbC1ibG9jaycgey4uLnBwcm9wc30+XG4gICAgICB7IW1hbnVhbGx5QXNzZW1ibGVkID8gW1xuICAgICAgICA8UGFnZUhlYWRlckRldGFpbExhYmVsIGtleT17MH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1BhZ2VIZWFkZXJEZXRhaWxMYWJlbD4sXG4gICAgICAgIDxQYWdlSGVhZGVyRGV0YWlsQm9keSBrZXk9ezF9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYWdlSGVhZGVyRGV0YWlsQm9keT4sXG4gICAgICBdIDogW2NoaWxkcmVuXX1cbiAgICA8L2xpPlxuICApO1xufTtcblxuUGFnZUhlYWRlckRldGFpbEl0ZW0ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWwgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8R3JpZFxuICAgIHRhZz0ndWwnXG4gICAgdmVydGljYWw9e2ZhbHNlfVxuICAgIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcl9fZGV0YWlsLXJvdydcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvR3JpZD5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckhlYWRpbmdUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCB0aXRsZUNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICAnc2xkcy1wYWdlLWhlYWRlcl9fdGl0bGUgc2xkcy10cnVuY2F0ZSBzbGRzLWFsaWduLW1pZGRsZSdcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8aDEgey4uLnByb3BzfSBjbGFzc05hbWU9e3RpdGxlQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKTtcbn07XG5cblBhZ2VIZWFkZXJIZWFkaW5nVGl0bGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVySGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckluZm8oaW5mbykge1xuICAgIHJldHVybiBpbmZvID8gKFxuICAgICAgPFRleHRcbiAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgIHR5cGU9J3NtYWxsJ1xuICAgICAgPlxuICAgICAgICB7aW5mb31cbiAgICAgIDwvVGV4dD5cbiAgICApIDogbnVsbDtcbiAgfVxuICByZW5kZXJXaXRoTWVkaWEoZmlndXJlKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIHJldHVybiBmaWd1cmUgPyAoXG4gICAgICA8TWVkaWFPYmplY3QgZmlndXJlTGVmdD17ZmlndXJlfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L01lZGlhT2JqZWN0PlxuICAgICkgOiBjb250ZW50O1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyByaWdodEFjdGlvbnMsIGluZm8sIGxlZ2VuZCwgdGl0bGUsIGJyZWFkQ3J1bWJzLCBsZWZ0QWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpbmZvUGFydCA9IChpbmZvICYmICFicmVhZENydW1icyAmJiAhbGVnZW5kICYmICFyaWdodEFjdGlvbnMpID9cbiAgICAgIHRoaXMucmVuZGVySW5mbyhpbmZvKSA6IG51bGw7XG4gICAgY29uc3QgdGl0bGVQYXJ0ID0gdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IChcbiAgICAgIDxQYWdlSGVhZGVySGVhZGluZ1RpdGxlIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCc+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvUGFnZUhlYWRlckhlYWRpbmdUaXRsZT5cbiAgICApIDogdGl0bGU7XG5cbiAgICBsZXQgYnJlYWRDcnVtYnNQYXJ0ID0gbnVsbDtcbiAgICBpZiAoYnJlYWRDcnVtYnMpIHtcbiAgICAgIGJyZWFkQ3J1bWJzUGFydCA9IGJyZWFkQ3J1bWJzLmxlbmd0aCAmJiBicmVhZENydW1ic1swXS50eXBlID09PSBDcnVtYiA/IChcbiAgICAgICAgPEJyZWFkQ3J1bWJzPlxuICAgICAgICAgIHticmVhZENydW1ic31cbiAgICAgICAgPC9CcmVhZENydW1icz5cbiAgICAgICkgOiBicmVhZENydW1icztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2JyZWFkQ3J1bWJzUGFydH1cbiAgICAgICAge2xlZ2VuZCA/XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNhdGVnb3J5PSd0aXRsZSdcbiAgICAgICAgICAgIHR5cGU9J2NhcHMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbGluZS1oZWlnaHQtLXJlc2V0J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWdlbmR9XG4gICAgICAgICAgPC9UZXh0PiA6IG51bGx9XG4gICAgICAgIHtsZWZ0QWN0aW9ucyA/IChcbiAgICAgICAgICA8R3JpZCB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgICAge3RpdGxlUGFydH1cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdzbGRzLXNocmluay1ub25lJz5cbiAgICAgICAgICAgICAge2xlZnRBY3Rpb25zfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApIDogdGl0bGVQYXJ0fVxuICAgICAgICB7aW5mb1BhcnR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJpZ2h0QWN0aW9ucywgaW5mbywgYnJlYWRDcnVtYnMsIGZpZ3VyZSwgbGVnZW5kIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlbmRlcldpdGhNZWRpYShmaWd1cmUpO1xuICAgIGNvbnN0IGluZm9QYXJ0ID0gaW5mbyAmJiAoYnJlYWRDcnVtYnMgfHwgbGVnZW5kIHx8IHJpZ2h0QWN0aW9ucykgPyB0aGlzLnJlbmRlckluZm8oaW5mbykgOiBudWxsO1xuXG4gICAgcmV0dXJuIHJpZ2h0QWN0aW9ucyA/IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9J3NsZHMtaGFzLWZsZXhpLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgYWxpZ249J3RvcCcgbm9GbGV4PlxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgIDxSb3cgY29scz17MX0+XG4gICAgICAgICAgICAgICAge3JpZ2h0QWN0aW9uc31cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAge2luZm9QYXJ0fVxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7aW5mb1BhcnR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhZ2VIZWFkZXJIZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgaW5mbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGVnZW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGJyZWFkQ3J1bWJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihDcnVtYiksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBsZWZ0QWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG4gIGZpZ3VyZTogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0QWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jb25zdCBQYWdlSGVhZGVyID0gcHJvcHMgPT5cbiAgPGRpdlxuICAgIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcidcbiAgICByb2xlPSdiYW5uZXInXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj47XG5cblBhZ2VIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIl19