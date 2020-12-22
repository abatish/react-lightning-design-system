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
          unsafe = _props.unsafe,
          info = _props.info,
          legend = _props.legend,
          title = _props.title,
          breadCrumbs = _props.breadCrumbs,
          leftActions = _props.leftActions;

      var infoPart = info && !breadCrumbs && !legend && !rightActions ? this.renderInfo(info) : null;
      var titlePart = typeof title === 'string' ? unsafe ? _react2.default.createElement(PageHeaderHeadingTitle, { className: 'slds-m-right--small', dangerouslySetInnerHTML: { __html: title } }) : _react2.default.createElement(
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
  unsafe: _propTypes2.default.bool,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BhZ2VIZWFkZXIuanMiXSwibmFtZXMiOlsiUGFnZUhlYWRlckRldGFpbEJvZHkiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIlBhZ2VIZWFkZXJEZXRhaWxMYWJlbCIsIlBhZ2VIZWFkZXJEZXRhaWxJdGVtIiwibGFiZWwiLCJwcHJvcHMiLCJtYW51YWxseUFzc2VtYmxlZCIsInN0cmluZyIsIlBhZ2VIZWFkZXJEZXRhaWwiLCJQYWdlSGVhZGVySGVhZGluZ1RpdGxlIiwiY2xhc3NOYW1lIiwidGl0bGVDbGFzc05hbWVzIiwiUGFnZUhlYWRlckhlYWRpbmciLCJpbmZvIiwiZmlndXJlIiwiY29udGVudCIsInJlbmRlckNvbnRlbnQiLCJyaWdodEFjdGlvbnMiLCJ1bnNhZmUiLCJsZWdlbmQiLCJ0aXRsZSIsImJyZWFkQ3J1bWJzIiwibGVmdEFjdGlvbnMiLCJpbmZvUGFydCIsInJlbmRlckluZm8iLCJ0aXRsZVBhcnQiLCJfX2h0bWwiLCJicmVhZENydW1ic1BhcnQiLCJsZW5ndGgiLCJ0eXBlIiwiQ3J1bWIiLCJyZW5kZXJXaXRoTWVkaWEiLCJDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJhcnJheU9mIiwiYm9vbCIsIlBhZ2VIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixTQUF2QkEsb0JBQXVCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBZ0JDLEtBQWhCO0FBQUEsU0FDbEMsT0FBT0QsUUFBUCxLQUFvQixRQUFwQixHQUNFO0FBQUMsa0JBQUQ7QUFBQTtBQUNFLGdCQUFTLE1BRFg7QUFFRSxZQUFLLFNBRlA7QUFHRTtBQUhGLE9BSU1DLEtBSk47QUFLRUQ7QUFMRixH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QVYsQ0FBb0IsQ0FDL0JqQyxvQkFBVWtDLE9BQVYsQ0FBa0JKLGtCQUFsQixDQUQrQixFQUUvQjlCLG9CQUFVQyxJQUZxQixDQUFwQixDQVBlO0FBVzVCaUIsVUFBUWxCLG9CQUFVbUMsSUFYVTtBQVk1QmIsZUFBYXRCLG9CQUFVQyxJQVpLO0FBYTVCYSxVQUFRZCxvQkFBVUMsSUFiVTtBQWM1QmdCLGdCQUFjakIsb0JBQVVDO0FBZEksQ0FBOUI7O0FBaUJBLElBQU1tQyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFDRSxpQkFBVSxrQkFEWjtBQUVFLFlBQUs7QUFGUCxPQUdNdEMsS0FITjtBQUtHQSxVQUFNRDtBQUxULEdBRGlCO0FBQUEsQ0FBbkI7O0FBU0F1QyxXQUFXckMsU0FBWCxHQUF1QjtBQUNyQkYsWUFBVUcsb0JBQVVDO0FBREMsQ0FBdkI7O2tCQUllbUMsVSIsImZpbGUiOiJQYWdlSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IE1lZGlhT2JqZWN0IGZyb20gJy4vTWVkaWFPYmplY3QnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBHcmlkLCB7IFJvdywgQ29sIH0gZnJvbSAnLi9HcmlkJztcbmltcG9ydCBCcmVhZENydW1icywgeyBDcnVtYiB9IGZyb20gJy4vQnJlYWRDcnVtYnMnO1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbEJvZHkgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gKFxuICAgIDxUZXh0XG4gICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgIHR5cGU9J3JlZ3VsYXInXG4gICAgICB0cnVuY2F0ZVxuICAgICAgey4uLnByb3BzfVxuICAgID57Y2hpbGRyZW59PC9UZXh0PlxuICApIDogY2hpbGRyZW5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWxCb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWxMYWJlbCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgPFRleHRcbiAgICAgIGNhdGVnb3J5PSd0aXRsZSdcbiAgICAgIHRydW5jYXRlXG4gICAgICBjbGFzc05hbWU9J3NsZHMtbS1ib3R0b20tLXh4LXNtYWxsJ1xuICAgICAgey4uLnByb3BzfVxuICAgID57Y2hpbGRyZW59PC9UZXh0PlxuICApIDogY2hpbGRyZW5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWxMYWJlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyRGV0YWlsSXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBsYWJlbCwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgbWFudWFsbHlBc3NlbWJsZWQgPSAhbGFiZWw7XG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcl9fZGV0YWlsLWJsb2NrJyB7Li4ucHByb3BzfT5cbiAgICAgIHshbWFudWFsbHlBc3NlbWJsZWQgPyBbXG4gICAgICAgIDxQYWdlSGVhZGVyRGV0YWlsTGFiZWwga2V5PXswfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvUGFnZUhlYWRlckRldGFpbExhYmVsPixcbiAgICAgICAgPFBhZ2VIZWFkZXJEZXRhaWxCb2R5IGtleT17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhZ2VIZWFkZXJEZXRhaWxCb2R5PixcbiAgICAgIF0gOiBbY2hpbGRyZW5dfVxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5QYWdlSGVhZGVyRGV0YWlsSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxHcmlkXG4gICAgdGFnPSd1bCdcbiAgICB2ZXJ0aWNhbD17ZmFsc2V9XG4gICAgY2xhc3NOYW1lPSdzbGRzLXBhZ2UtaGVhZGVyX19kZXRhaWwtcm93J1xuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9HcmlkPlxuKTtcblxuUGFnZUhlYWRlckRldGFpbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVySGVhZGluZ1RpdGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHRpdGxlQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdzbGRzLXBhZ2UtaGVhZGVyX190aXRsZSBzbGRzLXRydW5jYXRlIHNsZHMtYWxpZ24tbWlkZGxlJ1xuICApO1xuICByZXR1cm4gKFxuICAgIDxoMSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17dGl0bGVDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2gxPlxuICApO1xufTtcblxuUGFnZUhlYWRlckhlYWRpbmdUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJIZWFkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVySW5mbyhpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8gPyAoXG4gICAgICA8VGV4dFxuICAgICAgICBjYXRlZ29yeT0nYm9keSdcbiAgICAgICAgdHlwZT0nc21hbGwnXG4gICAgICA+XG4gICAgICAgIHtpbmZvfVxuICAgICAgPC9UZXh0PlxuICAgICkgOiBudWxsO1xuICB9XG4gIHJlbmRlcldpdGhNZWRpYShmaWd1cmUpIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgcmV0dXJuIGZpZ3VyZSA/IChcbiAgICAgIDxNZWRpYU9iamVjdCBmaWd1cmVMZWZ0PXtmaWd1cmV9PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvTWVkaWFPYmplY3Q+XG4gICAgKSA6IGNvbnRlbnQ7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCB7IHJpZ2h0QWN0aW9ucywgdW5zYWZlLCBpbmZvLCBsZWdlbmQsIHRpdGxlLCBicmVhZENydW1icywgbGVmdEFjdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaW5mb1BhcnQgPSAoaW5mbyAmJiAhYnJlYWRDcnVtYnMgJiYgIWxlZ2VuZCAmJiAhcmlnaHRBY3Rpb25zKSA/XG4gICAgICB0aGlzLnJlbmRlckluZm8oaW5mbykgOiBudWxsO1xuICAgIGNvbnN0IHRpdGxlUGFydCA9IHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyAodW5zYWZlKSA/IChcbiAgICAgIDxQYWdlSGVhZGVySGVhZGluZ1RpdGxlIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aXRsZSB9fSAvPlxuICAgICkgOlxuICAgICg8UGFnZUhlYWRlckhlYWRpbmdUaXRsZSBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0tc21hbGwnPnt0aXRsZX08L1BhZ2VIZWFkZXJIZWFkaW5nVGl0bGU+KVxuICAgIDogdGl0bGU7XG5cbiAgICBsZXQgYnJlYWRDcnVtYnNQYXJ0ID0gbnVsbDtcbiAgICBpZiAoYnJlYWRDcnVtYnMpIHtcbiAgICAgIGJyZWFkQ3J1bWJzUGFydCA9IGJyZWFkQ3J1bWJzLmxlbmd0aCAmJiBicmVhZENydW1ic1swXS50eXBlID09PSBDcnVtYiA/IChcbiAgICAgICAgPEJyZWFkQ3J1bWJzPlxuICAgICAgICAgIHticmVhZENydW1ic31cbiAgICAgICAgPC9CcmVhZENydW1icz5cbiAgICAgICkgOiBicmVhZENydW1icztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2JyZWFkQ3J1bWJzUGFydH1cbiAgICAgICAge2xlZ2VuZCA/XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGNhdGVnb3J5PSd0aXRsZSdcbiAgICAgICAgICAgIHR5cGU9J2NhcHMnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbGluZS1oZWlnaHQtLXJlc2V0J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWdlbmR9XG4gICAgICAgICAgPC9UZXh0PiA6IG51bGx9XG4gICAgICAgIHtsZWZ0QWN0aW9ucyA/IChcbiAgICAgICAgICA8R3JpZCB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgICAge3RpdGxlUGFydH1cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdzbGRzLXNocmluay1ub25lJz5cbiAgICAgICAgICAgICAge2xlZnRBY3Rpb25zfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApIDogdGl0bGVQYXJ0fVxuICAgICAgICB7aW5mb1BhcnR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJpZ2h0QWN0aW9ucywgaW5mbywgYnJlYWRDcnVtYnMsIGZpZ3VyZSwgbGVnZW5kIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlbmRlcldpdGhNZWRpYShmaWd1cmUpO1xuICAgIGNvbnN0IGluZm9QYXJ0ID0gaW5mbyAmJiAoYnJlYWRDcnVtYnMgfHwgbGVnZW5kIHx8IHJpZ2h0QWN0aW9ucykgPyB0aGlzLnJlbmRlckluZm8oaW5mbykgOiBudWxsO1xuXG4gICAgcmV0dXJuIHJpZ2h0QWN0aW9ucyA/IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIHZlcnRpY2FsPXtmYWxzZX0+XG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9J3NsZHMtaGFzLWZsZXhpLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgYWxpZ249J3RvcCcgbm9GbGV4PlxuICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgIDxSb3cgY29scz17MX0+XG4gICAgICAgICAgICAgICAge3JpZ2h0QWN0aW9uc31cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAge2luZm9QYXJ0fVxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgICB7aW5mb1BhcnR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBhZ2VIZWFkZXJIZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgaW5mbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGVnZW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGJyZWFkQ3J1bWJzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihDcnVtYiksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICB1bnNhZmU6IFByb3BUeXBlcy5ib29sLFxuICBsZWZ0QWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG4gIGZpZ3VyZTogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0QWN0aW9uczogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jb25zdCBQYWdlSGVhZGVyID0gcHJvcHMgPT5cbiAgPGRpdlxuICAgIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcidcbiAgICByb2xlPSdiYW5uZXInXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L2Rpdj47XG5cblBhZ2VIZWFkZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlSGVhZGVyO1xuIl19