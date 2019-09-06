'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Col = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var className = _ref.className,
      frame = _ref.frame,
      vertical = _ref.vertical,
      children = _ref.children,
      tag = _ref.tag,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'frame', 'vertical', 'children', 'tag']);

  var gridClassNames = (0, _classnames2.default)(className, 'slds-grid', vertical ? 'slds-grid--vertical' : null, frame ? 'slds-grid--frame' : null);
  var Tag = tag || 'div';
  return _react2.default.createElement(
    Tag,
    (0, _extends3.default)({ className: gridClassNames }, props),
    children
  );
};

Grid.propTypes = {
  tag: _propTypes2.default.string,
  className: _propTypes2.default.string,
  frame: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  vertical: _propTypes2.default.bool
};

Grid.defaultProps = {
  vertical: true
};

function adjustCols(colNum, large) {
  if (colNum > 6) {
    return large ? 12 : 6;
  }
  return colNum;
}

var Col = function Col(props) {
  var className = props.className,
      padded = props.padded,
      align = props.align,
      noFlex = props.noFlex,
      order = props.order,
      orderSmall = props.orderSmall,
      orderMedium = props.orderMedium,
      orderLarge = props.orderLarge,
      cols = props.cols,
      colsSmall = props.colsSmall,
      colsMedium = props.colsMedium,
      colsLarge = props.colsLarge,
      totalCols = props.totalCols,
      totalColsSmall = props.totalColsSmall,
      totalColsMedium = props.totalColsMedium,
      totalColsLarge = props.totalColsLarge,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'padded', 'align', 'noFlex', 'order', 'orderSmall', 'orderMedium', 'orderLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'totalCols', 'totalColsSmall', 'totalColsMedium', 'totalColsLarge', 'children']);

  var rowClassNames = (0, _classnames2.default)(className, padded ? 'slds-col--padded' + (/^(medium|large)$/.test(padded) ? '-' + padded : '') : 'slds-col', align ? 'slds-align-' + align : null, noFlex ? 'slds-no-flex' : null, order ? 'slds-order--' + order : null, orderSmall ? 'slds-small-order--' + orderSmall : null, orderMedium ? 'slds-medium-order--' + orderMedium : null, orderLarge ? 'slds-large-order--' + orderLarge : null, cols && totalCols ? 'slds-size--' + cols + '-of-' + adjustCols(totalCols, true) : null, colsSmall && totalColsSmall ? 'slds-small-size--' + colsSmall + '-of-' + adjustCols(totalColsSmall) : null, colsMedium && totalColsMedium ? 'slds-medium-size--' + colsMedium + '-of-' + adjustCols(totalColsMedium) : null, colsLarge && totalColsMedium ? 'slds-large-size--' + colsLarge + '-of-' + adjustCols(totalColsLarge, true) : null);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rowClassNames }, pprops),
    children
  );
};

exports.Col = Col;
var COL_ALIGNS = ['top', 'medium', 'bottom'];

Col.propTypes = {
  className: _propTypes2.default.string,
  padded: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  align: _propTypes2.default.oneOf(COL_ALIGNS),
  noFlex: _propTypes2.default.bool,
  order: _propTypes2.default.number,
  orderSmall: _propTypes2.default.number,
  orderMedium: _propTypes2.default.number,
  orderLarge: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  colsSmall: _propTypes2.default.number,
  colsMedium: _propTypes2.default.number,
  colsLarge: _propTypes2.default.number,
  totalCols: _propTypes2.default.number,
  totalColsSmall: _propTypes2.default.number,
  totalColsMedium: _propTypes2.default.number,
  totalColsLarge: _propTypes2.default.number,
  children: _propTypes2.default.node
};

Grid.propTypes = {
  className: _propTypes2.default.string,
  frame: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

var Row = exports.Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderColumn',
    value: function renderColumn(colProps, child) {
      if (child.type !== Col) {
        return _react2.default.createElement(
          Col,
          colProps,
          child
        );
      }

      /* eslint-disable no-param-reassign */
      var childProps = (0, _keys2.default)(colProps).reduce(function (cprops, key) {
        cprops[key] = child.props[key] || colProps[key];
        return cprops;
      }, {});
      return _react2.default.cloneElement(child, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          align = _props.align,
          nowrap = _props.nowrap,
          nowrapSmall = _props.nowrapSmall,
          nowrapMedium = _props.nowrapMedium,
          nowrapLarge = _props.nowrapLarge,
          cols = _props.cols,
          colsSmall = _props.colsSmall,
          colsMedium = _props.colsMedium,
          colsLarge = _props.colsLarge,
          pullPadded = _props.pullPadded,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'align', 'nowrap', 'nowrapSmall', 'nowrapMedium', 'nowrapLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'pullPadded', 'children']);

      var rowClassNames = (0, _classnames2.default)(className, 'slds-grid', align ? 'slds-grid--align-' + align : null, nowrap ? 'slds-nowrap' : 'slds-wrap', nowrapSmall ? 'slds-nowrap--small' : null, nowrapMedium ? 'slds-nowrap--medium' : null, nowrapLarge ? 'slds-nowrap--large' : null, pullPadded ? 'slds-grid--pull-padded' : null);
      var totalCols = cols || function () {
        var cnt = 0;
        _react2.default.Children.forEach(children, function (child) {
          if (!_react2.default.isValidElement(child)) return;
          cnt += child.props.cols || 1;
        });
        return cnt;
      }();
      var colProps = {
        totalCols: totalCols,
        totalColsSmall: colsSmall || totalCols,
        totalColsMedium: colsMedium || totalCols,
        totalColsLarge: colsLarge || totalCols
      };
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rowClassNames }, props),
        _react2.default.Children.map(children, this.renderColumn.bind(this, colProps))
      );
    }
  }]);
  return Row;
}(_react.Component);

var ROW_ALIGNS = ['center', 'space', 'spread'];

Row.propTypes = {
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(ROW_ALIGNS),
  nowrap: _propTypes2.default.bool,
  nowrapSmall: _propTypes2.default.bool,
  nowrapMedium: _propTypes2.default.bool,
  nowrapLarge: _propTypes2.default.bool,
  pullPadded: _propTypes2.default.bool,
  cols: _propTypes2.default.number,
  colsSmall: _propTypes2.default.number,
  colsMedium: _propTypes2.default.number,
  colsLarge: _propTypes2.default.number,
  children: _propTypes2.default.node
};

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0dyaWQuanMiXSwibmFtZXMiOlsiR3JpZCIsImNsYXNzTmFtZSIsImZyYW1lIiwidmVydGljYWwiLCJjaGlsZHJlbiIsInRhZyIsInByb3BzIiwiZ3JpZENsYXNzTmFtZXMiLCJUYWciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImRlZmF1bHRQcm9wcyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsIkNvbCIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicHByb3BzIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJDT0xfQUxJR05TIiwib25lT2ZUeXBlIiwib25lT2YiLCJudW1iZXIiLCJSb3ciLCJjb2xQcm9wcyIsImNoaWxkIiwidHlwZSIsImNoaWxkUHJvcHMiLCJyZWR1Y2UiLCJjcHJvcHMiLCJrZXkiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIm5vd3JhcCIsIm5vd3JhcFNtYWxsIiwibm93cmFwTWVkaXVtIiwibm93cmFwTGFyZ2UiLCJwdWxsUGFkZGVkIiwiY250IiwiQ2hpbGRyZW4iLCJmb3JFYWNoIiwiaXNWYWxpZEVsZW1lbnQiLCJtYXAiLCJyZW5kZXJDb2x1bW4iLCJiaW5kIiwiQ29tcG9uZW50IiwiUk9XX0FMSUdOUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sT0FBNkQ7QUFBQSxNQUExREMsU0FBMEQsUUFBMURBLFNBQTBEO0FB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RDs7O0VBaERzQnFCLGdCOztBQW1EekIsSUFBTUMsYUFBYSxDQUNqQixRQURpQixFQUVqQixPQUZpQixFQUdqQixRQUhpQixDQUFuQjs7QUFNQXZCLElBQUloQyxTQUFKLEdBQWdCO0FBQ2RSLGFBQVdTLG9CQUFVQyxNQURQO0FBRWRTLFNBQU9WLG9CQUFVNkIsS0FBVixDQUFnQnlCLFVBQWhCLENBRk87QUFHZGIsVUFBUXpDLG9CQUFVRSxJQUhKO0FBSWR3QyxlQUFhMUMsb0JBQVVFLElBSlQ7QUFLZHlDLGdCQUFjM0Msb0JBQVVFLElBTFY7QUFNZDBDLGVBQWE1QyxvQkFBVUUsSUFOVDtBQU9kMkMsY0FBWTdDLG9CQUFVRSxJQVBSO0FBUWRjLFFBQU1oQixvQkFBVThCLE1BUkY7QUFTZGIsYUFBV2pCLG9CQUFVOEIsTUFUUDtBQVVkWixjQUFZbEIsb0JBQVU4QixNQVZSO0FBV2RYLGFBQVduQixvQkFBVThCLE1BWFA7QUFZZHBDLFlBQVVNLG9CQUFVRztBQVpOLENBQWhCOztrQkFnQmViLEkiLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEdyaWQgPSAoeyBjbGFzc05hbWUsIGZyYW1lLCB2ZXJ0aWNhbCwgY2hpbGRyZW4sIHRhZywgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBncmlkQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLCAnc2xkcy1ncmlkJyxcbiAgICB2ZXJ0aWNhbCA/ICdzbGRzLWdyaWQtLXZlcnRpY2FsJyA6IG51bGwsXG4gICAgZnJhbWUgPyAnc2xkcy1ncmlkLS1mcmFtZScgOiBudWxsXG4gICk7XG4gIGNvbnN0IFRhZyA9IHRhZyB8fCAnZGl2JztcbiAgcmV0dXJuIChcbiAgICA8VGFnIGNsYXNzTmFtZT17IGdyaWRDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9UYWc+XG4gICk7XG59O1xuXG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyYW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB2ZXJ0aWNhbDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5HcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmVydGljYWw6IHRydWUsXG59O1xuXG5mdW5jdGlvbiBhZGp1c3RDb2xzKGNvbE51bSwgbGFyZ2UpIHtcbiAgaWYgKGNvbE51bSA+IDYpIHtcbiAgICByZXR1cm4gbGFyZ2UgPyAxMiA6IDY7XG4gIH1cbiAgcmV0dXJuIGNvbE51bTtcbn1cblxuZXhwb3J0IGNvbnN0IENvbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLCBwYWRkZWQsIGFsaWduLCBub0ZsZXgsXG4gICAgb3JkZXIsIG9yZGVyU21hbGwsIG9yZGVyTWVkaXVtLCBvcmRlckxhcmdlLFxuICAgIGNvbHMsIGNvbHNTbWFsbCwgY29sc01lZGl1bSwgY29sc0xhcmdlLFxuICAgIHRvdGFsQ29scywgdG90YWxDb2xzU21hbGwsIHRvdGFsQ29sc01lZGl1bSwgdG90YWxDb2xzTGFyZ2UsXG4gICAgY2hpbGRyZW4sIC4uLnBwcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSxcbiAgICBwYWRkZWQgP1xuICAgICAgYHNsZHMtY29sLS1wYWRkZWQkey9eKG1lZGl1bXxsYXJnZSkkLy50ZXN0KHBhZGRlZCkgPyBgLSR7cGFkZGVkfWAgOiAnJ31gIDpcbiAgICAgICdzbGRzLWNvbCcsXG4gICAgYWxpZ24gPyBgc2xkcy1hbGlnbi0ke2FsaWdufWAgOiBudWxsLFxuICAgIG5vRmxleCA/ICdzbGRzLW5vLWZsZXgnIDogbnVsbCxcbiAgICBvcmRlciA/IGBzbGRzLW9yZGVyLS0ke29yZGVyfWAgOiBudWxsLFxuICAgIG9yZGVyU21hbGwgPyBgc2xkcy1zbWFsbC1vcmRlci0tJHtvcmRlclNtYWxsfWAgOiBudWxsLFxuICAgIG9yZGVyTWVkaXVtID8gYHNsZHMtbWVkaXVtLW9yZGVyLS0ke29yZGVyTWVkaXVtfWAgOiBudWxsLFxuICAgIG9yZGVyTGFyZ2UgPyBgc2xkcy1sYXJnZS1vcmRlci0tJHtvcmRlckxhcmdlfWAgOiBudWxsLFxuICAgIGNvbHMgJiYgdG90YWxDb2xzID8gYHNsZHMtc2l6ZS0tJHtjb2xzfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzLCB0cnVlKX1gIDogbnVsbCxcbiAgICBjb2xzU21hbGwgJiYgdG90YWxDb2xzU21hbGwgP1xuICAgICAgYHNsZHMtc21hbGwtc2l6ZS0tJHtjb2xzU21hbGx9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNTbWFsbCl9YCA6IG51bGwsXG4gICAgY29sc01lZGl1bSAmJiB0b3RhbENvbHNNZWRpdW0gP1xuICAgICAgYHNsZHMtbWVkaXVtLXNpemUtLSR7Y29sc01lZGl1bX0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc01lZGl1bSl9YCA6IG51bGwsXG4gICAgY29sc0xhcmdlICYmIHRvdGFsQ29sc01lZGl1bSA/XG4gICAgICBgc2xkcy1sYXJnZS1zaXplLS0ke2NvbHNMYXJnZX0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc0xhcmdlLCB0cnVlKX1gIDogbnVsbFxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9IHsgLi4ucHByb3BzIH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IENPTF9BTElHTlMgPSBbXG4gICd0b3AnLFxuICAnbWVkaXVtJyxcbiAgJ2JvdHRvbScsXG5dO1xuXG5Db2wucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZGRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoQ09MX0FMSUdOUyksXG4gIG5vRmxleDogUHJvcFR5cGVzLmJvb2wsXG4gIG9yZGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlclNtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlck1lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXJMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc1NtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzTWVkaXVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzU21hbGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sc01lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZyYW1lOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNsYXNzIFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckNvbHVtbihjb2xQcm9wcywgY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQudHlwZSAhPT0gQ29sKSB7XG4gICAgICByZXR1cm4gPENvbCB7IC4uLmNvbFByb3BzIH0+eyBjaGlsZCB9PC9Db2w+O1xuICAgIH1cblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IE9iamVjdC5rZXlzKGNvbFByb3BzKS5yZWR1Y2UoKGNwcm9wcywga2V5KSA9PiB7XG4gICAgICBjcHJvcHNba2V5XSA9IGNoaWxkLnByb3BzW2tleV0gfHwgY29sUHJvcHNba2V5XTtcbiAgICAgIHJldHVybiBjcHJvcHM7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgYWxpZ24sIG5vd3JhcCwgbm93cmFwU21hbGwsIG5vd3JhcE1lZGl1bSwgbm93cmFwTGFyZ2UsXG4gICAgICBjb2xzLCBjb2xzU21hbGwsIGNvbHNNZWRpdW0sIGNvbHNMYXJnZSwgcHVsbFBhZGRlZCxcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLCAnc2xkcy1ncmlkJyxcbiAgICAgIGFsaWduID8gYHNsZHMtZ3JpZC0tYWxpZ24tJHthbGlnbn1gIDogbnVsbCxcbiAgICAgIG5vd3JhcCA/ICdzbGRzLW5vd3JhcCcgOiAnc2xkcy13cmFwJyxcbiAgICAgIG5vd3JhcFNtYWxsID8gJ3NsZHMtbm93cmFwLS1zbWFsbCcgOiBudWxsLFxuICAgICAgbm93cmFwTWVkaXVtID8gJ3NsZHMtbm93cmFwLS1tZWRpdW0nIDogbnVsbCxcbiAgICAgIG5vd3JhcExhcmdlID8gJ3NsZHMtbm93cmFwLS1sYXJnZScgOiBudWxsLFxuICAgICAgcHVsbFBhZGRlZCA/ICdzbGRzLWdyaWQtLXB1bGwtcGFkZGVkJyA6IG51bGxcbiAgICApO1xuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgKCgpID0+IHtcbiAgICAgIGxldCBjbnQgPSAwO1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgICAgIGNudCArPSBjaGlsZC5wcm9wcy5jb2xzIHx8IDE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjbnQ7XG4gICAgfSkoKTtcbiAgICBjb25zdCBjb2xQcm9wcyA9IHtcbiAgICAgIHRvdGFsQ29scyxcbiAgICAgIHRvdGFsQ29sc1NtYWxsOiBjb2xzU21hbGwgfHwgdG90YWxDb2xzLFxuICAgICAgdG90YWxDb2xzTWVkaXVtOiBjb2xzTWVkaXVtIHx8IHRvdGFsQ29scyxcbiAgICAgIHRvdGFsQ29sc0xhcmdlOiBjb2xzTGFyZ2UgfHwgdG90YWxDb2xzLFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29sdW1uLmJpbmQodGhpcywgY29sUHJvcHMpKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFJPV19BTElHTlMgPSBbXG4gICdjZW50ZXInLFxuICAnc3BhY2UnLFxuICAnc3ByZWFkJyxcbl07XG5cblJvdy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihST1dfQUxJR05TKSxcbiAgbm93cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm93cmFwU21hbGw6IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXBNZWRpdW06IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXBMYXJnZTogUHJvcFR5cGVzLmJvb2wsXG4gIHB1bGxQYWRkZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzU21hbGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBHcmlkO1xuIl19