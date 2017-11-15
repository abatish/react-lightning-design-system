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
  tag: _react.PropTypes.string,
  className: _react.PropTypes.string,
  frame: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  vertical: _react.PropTypes.bool
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
  className: _react.PropTypes.string,
  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
  align: _react.PropTypes.oneOf(COL_ALIGNS),
  noFlex: _react.PropTypes.bool,
  order: _react.PropTypes.number,
  orderSmall: _react.PropTypes.number,
  orderMedium: _react.PropTypes.number,
  orderLarge: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  totalColsSmall: _react.PropTypes.number,
  totalColsMedium: _react.PropTypes.number,
  totalColsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

Grid.propTypes = {
  className: _react.PropTypes.string,
  frame: _react.PropTypes.bool,
  children: _react.PropTypes.node
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
  className: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(ROW_ALIGNS),
  nowrap: _react.PropTypes.bool,
  nowrapSmall: _react.PropTypes.bool,
  nowrapMedium: _react.PropTypes.bool,
  nowrapLarge: _react.PropTypes.bool,
  pullPadded: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0dyaWQuanMiXSwibmFtZXMiOlsiR3JpZCIsImNsYXNzTmFtZSIsImZyYW1lIiwidmVydGljYWwiLCJjaGlsZHJlbiIsInRhZyIsInByb3BzIiwiZ3JpZENsYXNzTmFtZXMiLCJUYWciLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibm9kZSIsImRlZmF1bHRQcm9wcyIsImFkanVzdENvbHMiLCJjb2xOdW0iLCJsYXJnZSIsIkNvbCIsInBhZGRlZCIsImFsaWduIiwibm9GbGV4Iiwib3JkZXIiLCJvcmRlclNtYWxsIiwib3JkZXJNZWRpdW0iLCJvcmRlckxhcmdlIiwiY29scyIsImNvbHNTbWFsbCIsImNvbHNNZWRpdW0iLCJjb2xzTGFyZ2UiLCJ0b3RhbENvbHMiLCJ0b3RhbENvbHNTbWFsbCIsInRvdGFsQ29sc01lZGl1bSIsInRvdGFsQ29sc0xhcmdlIiwicHByb3BzIiwicm93Q2xhc3NOYW1lcyIsInRlc3QiLCJDT0xfQUxJR05TIiwib25lT2ZUeXBlIiwib25lT2YiLCJudW1iZXIiLCJSb3ciLCJjb2xQcm9wcyIsImNoaWxkIiwidHlwZSIsImNoaWxkUHJvcHMiLCJyZWR1Y2UiLCJjcHJvcHMiLCJrZXkiLCJjbG9uZUVsZW1lbnQiLCJub3dyYXAiLCJub3dyYXBTbWFsbCIsIm5vd3JhcE1lZGl1bSIsIm5vd3JhcExhcmdlIiwicHVsbFBhZGRlZCIsImNudCIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImlzVmFsaWRFbGVtZW50IiwibWFwIiwicmVuZGVyQ29sdW1uIiwiYmluZCIsIlJPV19BTElHTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxPQUE2RDtBQUFBLE1BQTFEQyxTQUEwRCxRQUExREEsU0FBMEQ7QUFBQSxNQUEvQ0MsS0FBK0MsUUFBL0NBLEtBQStDO0FBQUEsTUFBeEND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QUFDZFIsYUFBVyxpQkFBVVMsTUFEUDtBQUVkUyxTQUFPLGlCQUFVbUIsS0FBVixDQUFnQnVCLFVBQWhCLENBRk87QUFHZFosVUFBUSxpQkFBVXRDLElBSEo7QUFJZHVDLGVBQWEsaUJBQVV2QyxJQUpUO0FBS2R3QyxnQkFBYyxpQkFBVXhDLElBTFY7QUFNZHlDLGVBQWEsaUJBQVV6QyxJQU5UO0FBT2QwQyxjQUFZLGlCQUFVMUMsSUFQUjtBQVFkYyxRQUFNLGlCQUFVYyxNQVJGO0FBU2RiLGFBQVcsaUJBQVVhLE1BVFA7QUFVZFosY0FBWSxpQkFBVVksTUFWUjtBQVdkWCxhQUFXLGlCQUFVVyxNQVhQO0FBWWRuQyxZQUFVLGlCQUFVUTtBQVpOLENBQWhCOztrQkFnQmVaLEkiLCJmaWxlIjoiR3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBHcmlkID0gKHsgY2xhc3NOYW1lLCBmcmFtZSwgdmVydGljYWwsIGNoaWxkcmVuLCB0YWcsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgZ3JpZENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgIGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsXG4gICAgdmVydGljYWwgPyAnc2xkcy1ncmlkLS12ZXJ0aWNhbCcgOiBudWxsLFxuICAgIGZyYW1lID8gJ3NsZHMtZ3JpZC0tZnJhbWUnIDogbnVsbFxuICApO1xuICBjb25zdCBUYWcgPSB0YWcgfHwgJ2Rpdic7XG4gIHJldHVybiAoXG4gICAgPFRhZyBjbGFzc05hbWU9eyBncmlkQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvVGFnPlxuICApO1xufTtcblxuR3JpZC5wcm9wVHlwZXMgPSB7XG4gIHRhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcmFtZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdmVydGljYWw6IFByb3BUeXBlcy5ib29sLFxufTtcblxuR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZlcnRpY2FsOiB0cnVlLFxufTtcblxuZnVuY3Rpb24gYWRqdXN0Q29scyhjb2xOdW0sIGxhcmdlKSB7XG4gIGlmIChjb2xOdW0gPiA2KSB7XG4gICAgcmV0dXJuIGxhcmdlID8gMTIgOiA2O1xuICB9XG4gIHJldHVybiBjb2xOdW07XG59XG5cbmV4cG9ydCBjb25zdCBDb2wgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSwgcGFkZGVkLCBhbGlnbiwgbm9GbGV4LFxuICAgIG9yZGVyLCBvcmRlclNtYWxsLCBvcmRlck1lZGl1bSwgb3JkZXJMYXJnZSxcbiAgICBjb2xzLCBjb2xzU21hbGwsIGNvbHNNZWRpdW0sIGNvbHNMYXJnZSxcbiAgICB0b3RhbENvbHMsIHRvdGFsQ29sc1NtYWxsLCB0b3RhbENvbHNNZWRpdW0sIHRvdGFsQ29sc0xhcmdlLFxuICAgIGNoaWxkcmVuLCAuLi5wcHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgcGFkZGVkID9cbiAgICAgIGBzbGRzLWNvbC0tcGFkZGVkJHsvXihtZWRpdW18bGFyZ2UpJC8udGVzdChwYWRkZWQpID8gYC0ke3BhZGRlZH1gIDogJyd9YCA6XG4gICAgICAnc2xkcy1jb2wnLFxuICAgIGFsaWduID8gYHNsZHMtYWxpZ24tJHthbGlnbn1gIDogbnVsbCxcbiAgICBub0ZsZXggPyAnc2xkcy1uby1mbGV4JyA6IG51bGwsXG4gICAgb3JkZXIgPyBgc2xkcy1vcmRlci0tJHtvcmRlcn1gIDogbnVsbCxcbiAgICBvcmRlclNtYWxsID8gYHNsZHMtc21hbGwtb3JkZXItLSR7b3JkZXJTbWFsbH1gIDogbnVsbCxcbiAgICBvcmRlck1lZGl1bSA/IGBzbGRzLW1lZGl1bS1vcmRlci0tJHtvcmRlck1lZGl1bX1gIDogbnVsbCxcbiAgICBvcmRlckxhcmdlID8gYHNsZHMtbGFyZ2Utb3JkZXItLSR7b3JkZXJMYXJnZX1gIDogbnVsbCxcbiAgICBjb2xzICYmIHRvdGFsQ29scyA/IGBzbGRzLXNpemUtLSR7Y29sc30tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29scywgdHJ1ZSl9YCA6IG51bGwsXG4gICAgY29sc1NtYWxsICYmIHRvdGFsQ29sc1NtYWxsID9cbiAgICAgIGBzbGRzLXNtYWxsLXNpemUtLSR7Y29sc1NtYWxsfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzU21hbGwpfWAgOiBudWxsLFxuICAgIGNvbHNNZWRpdW0gJiYgdG90YWxDb2xzTWVkaXVtID9cbiAgICAgIGBzbGRzLW1lZGl1bS1zaXplLS0ke2NvbHNNZWRpdW19LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNNZWRpdW0pfWAgOiBudWxsLFxuICAgIGNvbHNMYXJnZSAmJiB0b3RhbENvbHNNZWRpdW0gP1xuICAgICAgYHNsZHMtbGFyZ2Utc2l6ZS0tJHtjb2xzTGFyZ2V9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNMYXJnZSwgdHJ1ZSl9YCA6IG51bGxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHJvd0NsYXNzTmFtZXMgfSB7IC4uLnBwcm9wcyB9PlxuICAgICAgeyBjaGlsZHJlbiB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBDT0xfQUxJR05TID0gW1xuICAndG9wJyxcbiAgJ21lZGl1bScsXG4gICdib3R0b20nLFxuXTtcblxuQ29sLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwYWRkZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKENPTF9BTElHTlMpLFxuICBub0ZsZXg6IFByb3BUeXBlcy5ib29sLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXJTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgb3JkZXJNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIG9yZGVyTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc01lZGl1bTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sc1NtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbENvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsQ29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5HcmlkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmcmFtZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXJDb2x1bW4oY29sUHJvcHMsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgIT09IENvbCkge1xuICAgICAgcmV0dXJuIDxDb2wgeyAuLi5jb2xQcm9wcyB9PnsgY2hpbGQgfTwvQ29sPjtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSBPYmplY3Qua2V5cyhjb2xQcm9wcykucmVkdWNlKChjcHJvcHMsIGtleSkgPT4ge1xuICAgICAgY3Byb3BzW2tleV0gPSBjaGlsZC5wcm9wc1trZXldIHx8IGNvbFByb3BzW2tleV07XG4gICAgICByZXR1cm4gY3Byb3BzO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIGFsaWduLCBub3dyYXAsIG5vd3JhcFNtYWxsLCBub3dyYXBNZWRpdW0sIG5vd3JhcExhcmdlLFxuICAgICAgY29scywgY29sc1NtYWxsLCBjb2xzTWVkaXVtLCBjb2xzTGFyZ2UsIHB1bGxQYWRkZWQsXG4gICAgICBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsXG4gICAgICBhbGlnbiA/IGBzbGRzLWdyaWQtLWFsaWduLSR7YWxpZ259YCA6IG51bGwsXG4gICAgICBub3dyYXAgPyAnc2xkcy1ub3dyYXAnIDogJ3NsZHMtd3JhcCcsXG4gICAgICBub3dyYXBTbWFsbCA/ICdzbGRzLW5vd3JhcC0tc21hbGwnIDogbnVsbCxcbiAgICAgIG5vd3JhcE1lZGl1bSA/ICdzbGRzLW5vd3JhcC0tbWVkaXVtJyA6IG51bGwsXG4gICAgICBub3dyYXBMYXJnZSA/ICdzbGRzLW5vd3JhcC0tbGFyZ2UnIDogbnVsbCxcbiAgICAgIHB1bGxQYWRkZWQgPyAnc2xkcy1ncmlkLS1wdWxsLXBhZGRlZCcgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCB0b3RhbENvbHMgPSBjb2xzIHx8ICgoKSA9PiB7XG4gICAgICBsZXQgY250ID0gMDtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuICAgICAgICBjbnQgKz0gY2hpbGQucHJvcHMuY29scyB8fCAxO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY250O1xuICAgIH0pKCk7XG4gICAgY29uc3QgY29sUHJvcHMgPSB7XG4gICAgICB0b3RhbENvbHMsXG4gICAgICB0b3RhbENvbHNTbWFsbDogY29sc1NtYWxsIHx8IHRvdGFsQ29scyxcbiAgICAgIHRvdGFsQ29sc01lZGl1bTogY29sc01lZGl1bSB8fCB0b3RhbENvbHMsXG4gICAgICB0b3RhbENvbHNMYXJnZTogY29sc0xhcmdlIHx8IHRvdGFsQ29scyxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHJvd0NsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNvbHVtbi5iaW5kKHRoaXMsIGNvbFByb3BzKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBST1dfQUxJR05TID0gW1xuICAnY2VudGVyJyxcbiAgJ3NwYWNlJyxcbiAgJ3NwcmVhZCcsXG5dO1xuXG5Sb3cucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoUk9XX0FMSUdOUyksXG4gIG5vd3JhcDogUHJvcFR5cGVzLmJvb2wsXG4gIG5vd3JhcFNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm93cmFwTWVkaXVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm93cmFwTGFyZ2U6IFByb3BUeXBlcy5ib29sLFxuICBwdWxsUGFkZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sc1NtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzTWVkaXVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgR3JpZDtcbiJdfQ==