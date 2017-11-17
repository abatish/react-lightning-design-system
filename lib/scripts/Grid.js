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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0dyaWQuanMiXSwibmFtZXMiOlsiR3JpZCIsImNsYXNzTmFtZSIsImZyYW1lIiwidmVydGljYWwiLCJjaGlsZHJlbiIsInRhZyIsInByb3BzIiwiZ3JpZENsYXNzTmFtZXMiLCJUYWciLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImRlZmF1bHRQcm9wcyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsIkNvbCIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicHByb3BzIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJDT0xfQUxJR05TIiwib25lT2ZUeXBlIiwib25lT2YiLCJudW1iZXIiLCJSb3ciLCJjb2xQcm9wcyIsImNoaWxkIiwidHlwZSIsImNoaWxkUHJvcHMiLCJyZWR1Y2UiLCJjcHJvcHMiLCJrZXkiLCJjbG9uZUVsZW1lbnQiLCJub3dyYXAiLCJub3dyYXBTbWFsbCIsIm5vd3JhcE1lZGl1bSIsIm5vd3JhcExhcmdlIiwicHVsbFBhZGRlZCIsImNudCIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImlzVmFsaWRFbGVtZW50IiwibWFwIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsIlJPV19BTElHTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLE9BQTZEO0FBQUEsTUFBMURDLFNBQTBELFFBQTFEQSxTQUEwRDtBQUFBLE1BQS9DQyxLQUErQyxRQUEvQ0EsS0FBK0M7QUFB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SixHQUFnQjtBQUNkUixhQUFXLG9CQUFVUyxNQURQO0FBRWRTLFNBQU8sb0JBQVVtQixLQUFWLENBQWdCdUIsVUFBaEIsQ0FGTztBQUdkWixVQUFRLG9CQUFVdEMsSUFISjtBQUlkdUMsZUFBYSxvQkFBVXZDLElBSlQ7QUFLZHdDLGdCQUFjLG9CQUFVeEMsSUFMVjtBQU1keUMsZUFBYSxvQkFBVXpDLElBTlQ7QUFPZDBDLGNBQVksb0JBQVUxQyxJQVBSO0FBUWRjLFFBQU0sb0JBQVVjLE1BUkY7QUFTZGIsYUFBVyxvQkFBVWEsTUFUUDtBQVVkWixjQUFZLG9CQUFVWSxNQVZSO0FBV2RYLGFBQVcsb0JBQVVXLE1BWFA7QUFZZG5DLFlBQVUsb0JBQVVRO0FBWk4sQ0FBaEI7O2tCQWdCZVosSSIsImZpbGUiOiJHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgR3JpZCA9ICh7IGNsYXNzTmFtZSwgZnJhbWUsIHZlcnRpY2FsLCBjaGlsZHJlbiwgdGFnLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGdyaWRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsICdzbGRzLWdyaWQnLFxuICAgIHZlcnRpY2FsID8gJ3NsZHMtZ3JpZC0tdmVydGljYWwnIDogbnVsbCxcbiAgICBmcmFtZSA/ICdzbGRzLWdyaWQtLWZyYW1lJyA6IG51bGxcbiAgKTtcbiAgY29uc3QgVGFnID0gdGFnIHx8ICdkaXYnO1xuICByZXR1cm4gKFxuICAgIDxUYWcgY2xhc3NOYW1lPXsgZ3JpZENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICB7IGNoaWxkcmVuIH1cbiAgICA8L1RhZz5cbiAgKTtcbn07XG5cbkdyaWQucHJvcFR5cGVzID0ge1xuICB0YWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJhbWU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICB2ZXJ0aWNhbDogdHJ1ZSxcbn07XG5cbmZ1bmN0aW9uIGFkanVzdENvbHMoY29sTnVtLCBsYXJnZSkge1xuICBpZiAoY29sTnVtID4gNikge1xuICAgIHJldHVybiBsYXJnZSA/IDEyIDogNjtcbiAgfVxuICByZXR1cm4gY29sTnVtO1xufVxuXG5leHBvcnQgY29uc3QgQ29sID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsIHBhZGRlZCwgYWxpZ24sIG5vRmxleCxcbiAgICBvcmRlciwgb3JkZXJTbWFsbCwgb3JkZXJNZWRpdW0sIG9yZGVyTGFyZ2UsXG4gICAgY29scywgY29sc1NtYWxsLCBjb2xzTWVkaXVtLCBjb2xzTGFyZ2UsXG4gICAgdG90YWxDb2xzLCB0b3RhbENvbHNTbWFsbCwgdG90YWxDb2xzTWVkaXVtLCB0b3RhbENvbHNMYXJnZSxcbiAgICBjaGlsZHJlbiwgLi4ucHByb3BzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgIHBhZGRlZCA/XG4gICAgICBgc2xkcy1jb2wtLXBhZGRlZCR7L14obWVkaXVtfGxhcmdlKSQvLnRlc3QocGFkZGVkKSA/IGAtJHtwYWRkZWR9YCA6ICcnfWAgOlxuICAgICAgJ3NsZHMtY29sJyxcbiAgICBhbGlnbiA/IGBzbGRzLWFsaWduLSR7YWxpZ259YCA6IG51bGwsXG4gICAgbm9GbGV4ID8gJ3NsZHMtbm8tZmxleCcgOiBudWxsLFxuICAgIG9yZGVyID8gYHNsZHMtb3JkZXItLSR7b3JkZXJ9YCA6IG51bGwsXG4gICAgb3JkZXJTbWFsbCA/IGBzbGRzLXNtYWxsLW9yZGVyLS0ke29yZGVyU21hbGx9YCA6IG51bGwsXG4gICAgb3JkZXJNZWRpdW0gPyBgc2xkcy1tZWRpdW0tb3JkZXItLSR7b3JkZXJNZWRpdW19YCA6IG51bGwsXG4gICAgb3JkZXJMYXJnZSA/IGBzbGRzLWxhcmdlLW9yZGVyLS0ke29yZGVyTGFyZ2V9YCA6IG51bGwsXG4gICAgY29scyAmJiB0b3RhbENvbHMgPyBgc2xkcy1zaXplLS0ke2NvbHN9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHMsIHRydWUpfWAgOiBudWxsLFxuICAgIGNvbHNTbWFsbCAmJiB0b3RhbENvbHNTbWFsbCA/XG4gICAgICBgc2xkcy1zbWFsbC1zaXplLS0ke2NvbHNTbWFsbH0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc1NtYWxsKX1gIDogbnVsbCxcbiAgICBjb2xzTWVkaXVtICYmIHRvdGFsQ29sc01lZGl1bSA/XG4gICAgICBgc2xkcy1tZWRpdW0tc2l6ZS0tJHtjb2xzTWVkaXVtfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzTWVkaXVtKX1gIDogbnVsbCxcbiAgICBjb2xzTGFyZ2UgJiYgdG90YWxDb2xzTWVkaXVtID9cbiAgICAgIGBzbGRzLWxhcmdlLXNpemUtLSR7Y29sc0xhcmdlfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzTGFyZ2UsIHRydWUpfWAgOiBudWxsXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyByb3dDbGFzc05hbWVzIH0geyAuLi5wcHJvcHMgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgQ09MX0FMSUdOUyA9IFtcbiAgJ3RvcCcsXG4gICdtZWRpdW0nLFxuICAnYm90dG9tJyxcbl07XG5cbkNvbC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGFkZGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICBdKSxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihDT0xfQUxJR05TKSxcbiAgbm9GbGV4OiBQcm9wVHlwZXMuYm9vbCxcbiAgb3JkZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9yZGVyU21hbGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9yZGVyTWVkaXVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlckxhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzU21hbGw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxDb2xzTWVkaXVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHNMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnJhbWU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY2xhc3MgUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyQ29sdW1uKGNvbFByb3BzLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZC50eXBlICE9PSBDb2wpIHtcbiAgICAgIHJldHVybiA8Q29sIHsgLi4uY29sUHJvcHMgfT57IGNoaWxkIH08L0NvbD47XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgICBjb25zdCBjaGlsZFByb3BzID0gT2JqZWN0LmtleXMoY29sUHJvcHMpLnJlZHVjZSgoY3Byb3BzLCBrZXkpID0+IHtcbiAgICAgIGNwcm9wc1trZXldID0gY2hpbGQucHJvcHNba2V5XSB8fCBjb2xQcm9wc1trZXldO1xuICAgICAgcmV0dXJuIGNwcm9wcztcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBhbGlnbiwgbm93cmFwLCBub3dyYXBTbWFsbCwgbm93cmFwTWVkaXVtLCBub3dyYXBMYXJnZSxcbiAgICAgIGNvbHMsIGNvbHNTbWFsbCwgY29sc01lZGl1bSwgY29sc0xhcmdlLCBwdWxsUGFkZGVkLFxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsICdzbGRzLWdyaWQnLFxuICAgICAgYWxpZ24gPyBgc2xkcy1ncmlkLS1hbGlnbi0ke2FsaWdufWAgOiBudWxsLFxuICAgICAgbm93cmFwID8gJ3NsZHMtbm93cmFwJyA6ICdzbGRzLXdyYXAnLFxuICAgICAgbm93cmFwU21hbGwgPyAnc2xkcy1ub3dyYXAtLXNtYWxsJyA6IG51bGwsXG4gICAgICBub3dyYXBNZWRpdW0gPyAnc2xkcy1ub3dyYXAtLW1lZGl1bScgOiBudWxsLFxuICAgICAgbm93cmFwTGFyZ2UgPyAnc2xkcy1ub3dyYXAtLWxhcmdlJyA6IG51bGwsXG4gICAgICBwdWxsUGFkZGVkID8gJ3NsZHMtZ3JpZC0tcHVsbC1wYWRkZWQnIDogbnVsbFxuICAgICk7XG4gICAgY29uc3QgdG90YWxDb2xzID0gY29scyB8fCAoKCkgPT4ge1xuICAgICAgbGV0IGNudCA9IDA7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHJldHVybjtcbiAgICAgICAgY250ICs9IGNoaWxkLnByb3BzLmNvbHMgfHwgMTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNudDtcbiAgICB9KSgpO1xuICAgIGNvbnN0IGNvbFByb3BzID0ge1xuICAgICAgdG90YWxDb2xzLFxuICAgICAgdG90YWxDb2xzU21hbGw6IGNvbHNTbWFsbCB8fCB0b3RhbENvbHMsXG4gICAgICB0b3RhbENvbHNNZWRpdW06IGNvbHNNZWRpdW0gfHwgdG90YWxDb2xzLFxuICAgICAgdG90YWxDb2xzTGFyZ2U6IGNvbHNMYXJnZSB8fCB0b3RhbENvbHMsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyByb3dDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzLCBjb2xQcm9wcykpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgUk9XX0FMSUdOUyA9IFtcbiAgJ2NlbnRlcicsXG4gICdzcGFjZScsXG4gICdzcHJlYWQnLFxuXTtcblxuUm93LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFJPV19BTElHTlMpLFxuICBub3dyYXA6IFByb3BUeXBlcy5ib29sLFxuICBub3dyYXBTbWFsbDogUHJvcFR5cGVzLmJvb2wsXG4gIG5vd3JhcE1lZGl1bTogUHJvcFR5cGVzLmJvb2wsXG4gIG5vd3JhcExhcmdlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHVsbFBhZGRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc01lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XG4iXX0=