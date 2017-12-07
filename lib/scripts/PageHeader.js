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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BhZ2VIZWFkZXIuanMiXSwibmFtZXMiOlsiUGFnZUhlYWRlckRldGFpbEJvZHkiLCJjaGlsZHJlbiIsInByb3BzIiwicHJvcFR5cGVzIiwibm9kZSIsIlBhZ2VIZWFkZXJEZXRhaWxMYWJlbCIsIlBhZ2VIZWFkZXJEZXRhaWxJdGVtIiwibGFiZWwiLCJwcHJvcHMiLCJtYW51YWxseUFzc2VtYmxlZCIsInN0cmluZyIsIlBhZ2VIZWFkZXJEZXRhaWwiLCJQYWdlSGVhZGVySGVhZGluZ1RpdGxlIiwiY2xhc3NOYW1lIiwidGl0bGVDbGFzc05hbWVzIiwiUGFnZUhlYWRlckhlYWRpbmciLCJpbmZvIiwiZmlndXJlIiwiY29udGVudCIsInJlbmRlckNvbnRlbnQiLCJyaWdodEFjdGlvbnMiLCJ1bnNhZmUiLCJsZWdlbmQiLCJ0aXRsZSIsImJyZWFkQ3J1bWJzIiwibGVmdEFjdGlvbnMiLCJpbmZvUGFydCIsInJlbmRlckluZm8iLCJ0aXRsZVBhcnQiLCJfX2h0bWwiLCJicmVhZENydW1ic1BhcnQiLCJsZW5ndGgiLCJ0eXBlIiwicmVuZGVyV2l0aE1lZGlhIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImJvb2wiLCJQYWdlSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx1QkFBdUIsU0FBdkJBLG9CQUF1QjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjtBQUFBLFNBQ2xDLE9BQU9ELFFBQVAsS0FBb0IsUUFBcEIsR0FDRTtBQUFBO0FBQUE7QUFDRSxnQkFBUyxNQURYO0FBRUUsWUFBSyxTQUZQO0FBR0U7QUFIRixPQUlNQyxLQUpOO0FBS0VEO0FBTEYsR0FERixHQU9JQSxRQVI4QjtBQUFBLENBQTdCOzs7QUFXUEQscUJB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QUFVaEI7QUFkSSxDQUE5Qjs7QUFpQkEsSUFBTWlDLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFLGlCQUFVLGtCQURaO0FBRUUsWUFBSztBQUZQLE9BR01uQyxLQUhOO0FBS0dBLFVBQU1EO0FBTFQsR0FEaUI7QUFBQSxDQUFuQjs7QUFTQW9DLFdBQVdsQyxTQUFYLEdBQXVCO0FBQ3JCRixZQUFVLG9CQUFVRztBQURDLENBQXZCOztrQkFJZWlDLFUiLCJmaWxlIjoiUGFnZUhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBNZWRpYU9iamVjdCBmcm9tICcuL01lZGlhT2JqZWN0JztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgR3JpZCwgeyBSb3csIENvbCB9IGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgQnJlYWRDcnVtYnMsIHsgQ3J1bWIgfSBmcm9tICcuL0JyZWFkQ3J1bWJzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWxCb2R5ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IChcbiAgICA8VGV4dFxuICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICB0eXBlPSdyZWd1bGFyJ1xuICAgICAgdHJ1bmNhdGVcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+e2NoaWxkcmVufTwvVGV4dD5cbiAgKSA6IGNoaWxkcmVuXG4pO1xuXG5QYWdlSGVhZGVyRGV0YWlsQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdlSGVhZGVyRGV0YWlsTGFiZWwgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gKFxuICAgIDxUZXh0XG4gICAgICBjYXRlZ29yeT0ndGl0bGUnXG4gICAgICB0cnVuY2F0ZVxuICAgICAgY2xhc3NOYW1lPSdzbGRzLW0tYm90dG9tLS14eC1zbWFsbCdcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+e2NoaWxkcmVufTwvVGV4dD5cbiAgKSA6IGNoaWxkcmVuXG4pO1xuXG5QYWdlSGVhZGVyRGV0YWlsTGFiZWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckRldGFpbEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgbGFiZWwsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XG4gIGNvbnN0IG1hbnVhbGx5QXNzZW1ibGVkID0gIWxhYmVsO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtcGFnZS1oZWFkZXJfX2RldGFpbC1ibG9jaycgey4uLnBwcm9wc30+XG4gICAgICB7IW1hbnVhbGx5QXNzZW1ibGVkID8gW1xuICAgICAgICA8UGFnZUhlYWRlckRldGFpbExhYmVsIGtleT17MH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L1BhZ2VIZWFkZXJEZXRhaWxMYWJlbD4sXG4gICAgICAgIDxQYWdlSGVhZGVyRGV0YWlsQm9keSBrZXk9ezF9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYWdlSGVhZGVyRGV0YWlsQm9keT4sXG4gICAgICBdIDogW2NoaWxkcmVuXX1cbiAgICA8L2xpPlxuICApO1xufTtcblxuUGFnZUhlYWRlckRldGFpbEl0ZW0ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXJEZXRhaWwgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8R3JpZFxuICAgIHRhZz0ndWwnXG4gICAgdmVydGljYWw9e2ZhbHNlfVxuICAgIGNsYXNzTmFtZT0nc2xkcy1wYWdlLWhlYWRlcl9fZGV0YWlsLXJvdydcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvR3JpZD5cbik7XG5cblBhZ2VIZWFkZXJEZXRhaWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgUGFnZUhlYWRlckhlYWRpbmdUaXRsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCB0aXRsZUNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICAnc2xkcy1wYWdlLWhlYWRlcl9fdGl0bGUgc2xkcy10cnVuY2F0ZSBzbGRzLWFsaWduLW1pZGRsZSdcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8aDEgey4uLnByb3BzfSBjbGFzc05hbWU9e3RpdGxlQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKTtcbn07XG5cblBhZ2VIZWFkZXJIZWFkaW5nVGl0bGUucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVySGVhZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckluZm8oaW5mbykge1xuICAgIHJldHVybiBpbmZvID8gKFxuICAgICAgPFRleHRcbiAgICAgICAgY2F0ZWdvcnk9J2JvZHknXG4gICAgICAgIHR5cGU9J3NtYWxsJ1xuICAgICAgPlxuICAgICAgICB7aW5mb31cbiAgICAgIDwvVGV4dD5cbiAgICApIDogbnVsbDtcbiAgfVxuICByZW5kZXJXaXRoTWVkaWEoZmlndXJlKSB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIHJldHVybiBmaWd1cmUgPyAoXG4gICAgICA8TWVkaWFPYmplY3QgZmlndXJlTGVmdD17ZmlndXJlfT5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L01lZGlhT2JqZWN0PlxuICAgICkgOiBjb250ZW50O1xuICB9XG4gIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyByaWdodEFjdGlvbnMsIHVuc2FmZSwgaW5mbywgbGVnZW5kLCB0aXRsZSwgYnJlYWRDcnVtYnMsIGxlZnRBY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGluZm9QYXJ0ID0gKGluZm8gJiYgIWJyZWFkQ3J1bWJzICYmICFsZWdlbmQgJiYgIXJpZ2h0QWN0aW9ucykgP1xuICAgICAgdGhpcy5yZW5kZXJJbmZvKGluZm8pIDogbnVsbDtcbiAgICBjb25zdCB0aXRsZVBhcnQgPSB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnID8gICh1bnNhZmUpID8gKFxuICAgICAgPFBhZ2VIZWFkZXJIZWFkaW5nVGl0bGUgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXNtYWxsJyBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19IC8+XG4gICAgKSA6XG4gICAgKCA8UGFnZUhlYWRlckhlYWRpbmdUaXRsZSBjbGFzc05hbWU9J3NsZHMtbS1yaWdodC0tc21hbGwnPnt0aXRsZX08L1BhZ2VIZWFkZXJIZWFkaW5nVGl0bGU+IClcbiAgICA6IHRpdGxlO1xuXG4gICAgbGV0IGJyZWFkQ3J1bWJzUGFydCA9IG51bGw7XG4gICAgaWYgKGJyZWFkQ3J1bWJzKSB7XG4gICAgICBicmVhZENydW1ic1BhcnQgPSBicmVhZENydW1icy5sZW5ndGggJiYgYnJlYWRDcnVtYnNbMF0udHlwZSA9PT0gQ3J1bWIgPyAoXG4gICAgICAgIDxCcmVhZENydW1icz5cbiAgICAgICAgICB7YnJlYWRDcnVtYnN9XG4gICAgICAgIDwvQnJlYWRDcnVtYnM+XG4gICAgICApIDogYnJlYWRDcnVtYnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHticmVhZENydW1ic1BhcnR9XG4gICAgICAgIHtsZWdlbmQgP1xuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBjYXRlZ29yeT0ndGl0bGUnXG4gICAgICAgICAgICB0eXBlPSdjYXBzJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWxpbmUtaGVpZ2h0LS1yZXNldCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGVnZW5kfVxuICAgICAgICAgIDwvVGV4dD4gOiBudWxsfVxuICAgICAgICB7bGVmdEFjdGlvbnMgPyAoXG4gICAgICAgICAgPEdyaWQgdmVydGljYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIHt0aXRsZVBhcnR9XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nc2xkcy1zaHJpbmstbm9uZSc+XG4gICAgICAgICAgICAgIHtsZWZ0QWN0aW9uc31cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSA6IHRpdGxlUGFydH1cbiAgICAgICAge2luZm9QYXJ0fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByaWdodEFjdGlvbnMsIGluZm8sIGJyZWFkQ3J1bWJzLCBmaWd1cmUsIGxlZ2VuZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5yZW5kZXJXaXRoTWVkaWEoZmlndXJlKTtcbiAgICBjb25zdCBpbmZvUGFydCA9IGluZm8gJiYgKGJyZWFkQ3J1bWJzIHx8IGxlZ2VuZCB8fCByaWdodEFjdGlvbnMpID8gdGhpcy5yZW5kZXJJbmZvKGluZm8pIDogbnVsbDtcblxuICAgIHJldHVybiByaWdodEFjdGlvbnMgPyAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R3JpZCB2ZXJ0aWNhbD17ZmFsc2V9PlxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdzbGRzLWhhcy1mbGV4aS10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIGFsaWduPSd0b3AnIG5vRmxleD5cbiAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICA8Um93IGNvbHM9ezF9PlxuICAgICAgICAgICAgICAgIHtyaWdodEFjdGlvbnN9XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHtpbmZvUGFydH1cbiAgICAgIDwvZGl2PlxuICAgICkgOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7Y29udGVudH1cbiAgICAgICAge2luZm9QYXJ0fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWdlSGVhZGVySGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGluZm86IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxlZ2VuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLFxuICBicmVhZENydW1iczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoQ3J1bWIpLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgdW5zYWZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGVmdEFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICBmaWd1cmU6IFByb3BUeXBlcy5ub2RlLFxuICByaWdodEFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuY29uc3QgUGFnZUhlYWRlciA9IHByb3BzID0+XG4gIDxkaXZcbiAgICBjbGFzc05hbWU9J3NsZHMtcGFnZS1oZWFkZXInXG4gICAgcm9sZT0nYmFubmVyJ1xuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+O1xuXG5QYWdlSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlcjtcbiJdfQ==