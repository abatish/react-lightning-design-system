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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  children: _propTypes2.default.node
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
  children: _propTypes2.default.node
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
  label: _propTypes2.default.string,
  children: _propTypes2.default.node
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
  children: _propTypes2.default.node
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
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
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
  info: _propTypes2.default.string,
  legend: _propTypes2.default.string,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  breadCrumbs: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_BreadCrumbs.Crumb), _propTypes2.default.node]),
  leftActions: _propTypes2.default.node,
  figure: _propTypes2.default.node,
  rightActions: _propTypes2.default.node
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
  children: _propTypes2.default.node
};

exports.default = PageHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BhZ2VIZWFkZXIuanMiXSwibmFtZXMiOlsiUGFnZUhlYWRlckRldGFpbEJvZHkiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsIlBhZ2VIZWFkZXJEZXRhaWxMYWJlbCIsIlBhZ2VIZWFkZXJEZXRhaWxJdGVtIiwibGFiZWwiLCJwcHJvcHMiLCJtYW51YWxseUFzc2VtYmxlZCIsInN0cmluZyIsIlBhZ2VIZWFkZXJEZXRhaWwiLCJQYWdlSGVhZGVySGVhZGluZ1RpdGxlIiwiY2xhc3NOYW1lIiwidGl0bGVDbGFzc05hbWVzIiwiUGFnZUhlYWRlckhlYWRpbmciLCJpbmZvIiwiZmlndXJlIiwiY29udGVudCIsInJlbmRlckNvbnRlbnQiLCJyaWdodEFjdGlvbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImJyZWFkQ3J1bWJzIiwibGVmdEFjdGlvbnMiLCJpbmZvUGFydCIsInJlbmRlckluZm8iLCJ0aXRsZVBhcnQiLCJicmVhZENydW1ic1BhcnQiLCJsZW5ndGgiLCJ0eXBlIiwicmVuZGVyV2l0aE1lZGlhIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsIlBhZ2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixTQUF2QkEsb0JBQXVCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLEtBQWhCO0FBQUEsU0FDbEMsT0FBT0QsUUFBUCxLQUFvQixRQUFwQixHQUNFO0FBQUE7QUFBQTtBQUNFLGdCQUFTLE1BRFg7QUFFRSxZQUFLLFNBRlA7QUFHRTtBQUhGLE9BSU1DLEtBSk47QUFLRUQ7QUFMRixHQURGLEdBT0lBLFFBUjhCO0FBQUEsQ0FBN0I7OztBQVdQRCxxQkFBcUJHLFNBQXJCLEdBQWlDO0FBQy9CRixZ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LFlBQVUsb0JBQVVHO0FBREMsQ0FBdkI7O2tCQUllOEIsVSIsImZpbGUiOiJQYWdlSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE1lZGlhT2JqZWN0IGZyb20gJy4vTWVkaWFPYmplY3QnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBHcmlkLCB7IFJvdywgQ29sIH0gZnJvbSAnLi9HcmlkJztcbmltcG9ydCBCcmVhZENydW1icywgeyBDcnVtYiB9IGZyb20gJy4vQnJlYWRDcnVtYnMnO1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbEJvZHkgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gKFxuICAgIDxUZXh0XG4gICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICB0cnVuY2F0ZVxuICAgICAgey4uLnByb3BzfVxuICAgID57Y2hpbGRyZW59PC9UZXh0PlxuICApIDogY2hpbGRyZW5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWxCb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWxMYWJlbCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgPFRleHRcbiAgICAgIGNhdGVnb3J5PSd0aXRsZSdcbiAgICAgIHRydW5jYXRlXG4gICAgICBjbGFzc05hbWU9J3NsZHMtbS1ib3R0b20tLXh4LXNtYWxsJ1xuICAgICAgey4uLnByb3BzfVxuICAgID57Y2hpbGRyZW59PC9UZXh0PlxuICApIDogY2hpbGRyZW5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWxMYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyRGV0YWlsSXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBsYWJlbCwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgbWFudWFsbHlBc3NlbWJsZWQgPSAhbGFiZWw7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcl9fZGV0YWlsLWJsb2NrJyB7Li4ucHByb3BzfT5cbiAgICAgIHshbWFudWFsbHlBc3NlbWJsZWQgPyBbXG4gICAgICAgIDxQYWdlSGVhZGVyRGV0YWlsTGFiZWwga2V5PXswfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvUGFnZUhlYWRlckRldGFpbExhYmVsPixcbiAgICAgICAgPFBhZ2VIZWFkZXJEZXRhaWxCb2R5IGtleT17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhZ2VIZWFkZXJEZXRhaWxCb2R5PixcbiAgICAgIF0gOiBbY2hpbGRyZW5dfVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5QYWdlSGVhZGVyRGV0YWlsSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxHcmlkXG4gICAgdGFnPSd1bCdcbiAgICB2ZXJ0aWNhbD17ZmFsc2V9XG4gICAgY2xhc3NOYW1lPSdzbGRzLXBhZ2UtaGVhZGVyX19kZXRhaWwtcm93J1xuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9HcmlkPlxuKTtcblxuUGFnZUhlYWRlckRldGFpbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVySGVhZGluZ1RpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHRpdGxlQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdzbGRzLXBhZ2UtaGVhZGVyX190aXRsZSBzbGRzLXRydW5jYXRlIHNsZHMtYWxpZ24tbWlkZGxlJ1xuICApO1xuICByZXR1cm4gKFxuICAgIDxoMSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17dGl0bGVDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2gxPlxuICApO1xufTtcblxuUGFnZUhlYWRlckhlYWRpbmdUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJIZWFkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySW5mbyhpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8gPyAoXG4gICAgICA8VGV4dFxuICAgICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgICAgdHlwZT0nc21hbGwnXG4gICAgICA+XG4gICAgICAgIHtpbmZvfVxuICAgICAgPC9UZXh0PlxuICAgICkgOiBudWxsO1xuICB9XG4gIHJlbmRlcldpdGhNZWRpYShmaWd1cmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgcmV0dXJuIGZpZ3VyZSA/IChcbiAgICAgIDxNZWRpYU9iamVjdCBmaWd1cmVMZWZ0PXtmaWd1cmV9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvTWVkaWFPYmplY3Q+XG4gICAgKSA6IGNvbnRlbnQ7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCB7IHJpZ2h0QWN0aW9ucywgaW5mbywgbGVnZW5kLCB0aXRsZSwgYnJlYWRDcnVtYnMsIGxlZnRBY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGluZm9QYXJ0ID0gKGluZm8gJiYgIWJyZWFkQ3J1bWJzICYmICFsZWdlbmQgJiYgIXJpZ2h0QWN0aW9ucykgP1xuICAgICAgdGhpcy5yZW5kZXJJbmZvKGluZm8pIDogbnVsbDtcbiAgICBjb25zdCB0aXRsZVBhcnQgPSB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnID8gKFxuICAgICAgPFBhZ2VIZWFkZXJIZWFkaW5nVGl0bGUgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXNtYWxsJz5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9QYWdlSGVhZGVySGVhZGluZ1RpdGxlPlxuICAgICkgOiB0aXRsZTtcblxuICAgIGxldCBicmVhZENydW1ic1BhcnQgPSBudWxsO1xuICAgIGlmIChicmVhZENydW1icykge1xuICAgICAgYnJlYWRDcnVtYnNQYXJ0ID0gYnJlYWRDcnVtYnMubGVuZ3RoICYmIGJyZWFkQ3J1bWJzWzBdLnR5cGUgPT09IENydW1iID8gKFxuICAgICAgICA8QnJlYWRDcnVtYnM+XG4gICAgICAgICAge2JyZWFkQ3J1bWJzfVxuICAgICAgICA8L0JyZWFkQ3J1bWJzPlxuICAgICAgKSA6IGJyZWFkQ3J1bWJzO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7YnJlYWRDcnVtYnNQYXJ0fVxuICAgICAgICB7bGVnZW5kID9cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2F0ZWdvcnk9J3RpdGxlJ1xuICAgICAgICAgICAgdHlwZT0nY2FwcydcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1saW5lLWhlaWdodC0tcmVzZXQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xlZ2VuZH1cbiAgICAgICAgICA8L1RleHQ+IDogbnVsbH1cbiAgICAgICAge2xlZnRBY3Rpb25zID8gKFxuICAgICAgICAgIDxHcmlkIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgICAgICB7dGl0bGVQYXJ0fVxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J3NsZHMtc2hyaW5rLW5vbmUnPlxuICAgICAgICAgICAgICB7bGVmdEFjdGlvbnN9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkgOiB0aXRsZVBhcnR9XG4gICAgICAgIHtpbmZvUGFydH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmlnaHRBY3Rpb25zLCBpbmZvLCBicmVhZENydW1icywgZmlndXJlLCBsZWdlbmQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucmVuZGVyV2l0aE1lZGlhKGZpZ3VyZSk7XG4gICAgY29uc3QgaW5mb1BhcnQgPSBpbmZvICYmIChicmVhZENydW1icyB8fCBsZWdlbmQgfHwgcmlnaHRBY3Rpb25zKSA/IHRoaXMucmVuZGVySW5mbyhpbmZvKSA6IG51bGw7XG5cbiAgICByZXR1cm4gcmlnaHRBY3Rpb25zID8gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEdyaWQgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nc2xkcy1oYXMtZmxleGktdHJ1bmNhdGUnPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBhbGlnbj0ndG9wJyBub0ZsZXg+XG4gICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgPFJvdyBjb2xzPXsxfT5cbiAgICAgICAgICAgICAgICB7cmlnaHRBY3Rpb25zfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7aW5mb1BhcnR9XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIHtpbmZvUGFydH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUGFnZUhlYWRlckhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBpbmZvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsZWdlbmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgYnJlYWRDcnVtYnM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheU9mKENydW1iKSxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGxlZnRBY3Rpb25zOiBQcm9wVHlwZXMubm9kZSxcbiAgZmlndXJlOiBQcm9wVHlwZXMubm9kZSxcbiAgcmlnaHRBY3Rpb25zOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmNvbnN0IFBhZ2VIZWFkZXIgPSBwcm9wcyA9PlxuICA8ZGl2XG4gICAgY2xhc3NOYW1lPSdzbGRzLXBhZ2UtaGVhZGVyJ1xuICAgIHJvbGU9J2Jhbm5lcidcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvZGl2PjtcblxuUGFnZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VIZWFkZXI7XG4iXX0=