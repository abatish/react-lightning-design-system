'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRowColumnActions = exports.TableRowColumn = exports.TableHeaderColumn = exports.TableRow = exports.TableBody = exports.TableHeader = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeader = exports.TableHeader = function (_Component) {
  (0, _inherits3.default)(TableHeader, _Component);

  function TableHeader() {
    (0, _classCallCheck3.default)(this, TableHeader);
    return (0, _possibleConstructorReturn3.default)(this, (TableHeader.__proto__ || (0, _getPrototypeOf2.default)(TableHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableHeader, [{
    key: 'renderBaseHeaderRow',
    value: function renderBaseHeaderRow() {
      var _props = this.props,
          children = _props.children,
          sortable = _props.sortable,
          hasActions = _props.hasActions,
          actionsPosition = _props.actionsPosition;

      var nextChildren = [];

      var props = {
        className: 'slds-text-title--caps'
      };

      _react2.default.Children.forEach(children.props.children, function (child, index) {
        var childSortable = child.props.sortable;
        nextChildren.push(_react2.default.cloneElement(child, {
          key: index,
          sortable: typeof childSortable === 'undefined' ? sortable : childSortable
        }));
      });

      if (hasActions) {
        nextChildren = [].concat((0, _toConsumableArray3.default)(nextChildren.slice(0, actionsPosition)), [_react2.default.createElement(TableHeaderColumn, {
          sortable: false,
          width: 50,
          key: -1,
          className: 'slds-cell-shrink'
        })], (0, _toConsumableArray3.default)(nextChildren.slice(actionsPosition)));
      }

      return _react2.default.cloneElement(children, props, nextChildren);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'thead',
        null,
        this.renderBaseHeaderRow()
      );
    }
  }]);
  return TableHeader;
}(_react.Component);

TableHeader.propTypes = {
  hasActions: _propTypes2.default.bool,
  actionsPosition: _propTypes2.default.number,
  children: _propTypes2.default.node,
  sortable: _propTypes2.default.bool
};

TableHeader.defaultProps = {
  actionsPosition: 0
};

var TableBody = exports.TableBody = function (_Component2) {
  (0, _inherits3.default)(TableBody, _Component2);

  function TableBody() {
    (0, _classCallCheck3.default)(this, TableBody);
    return (0, _possibleConstructorReturn3.default)(this, (TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'renderRows',
    value: function renderRows() {
      return _react2.default.Children.map(this.props.children, function (child) {
        var children = [];

        _react2.default.Children.forEach(child.props.children, function (innerChild, index) {
          if (!_react2.default.isValidElement(innerChild)) return;
          var truncate = innerChild.props.truncate;

          var props = {
            key: index
          };
          if (typeof truncate !== 'undefined') props.truncate = truncate;
          children.push(_react2.default.cloneElement(innerChild, props));
        });

        return _react2.default.cloneElement(child, { className: 'slds-hint-parent' }, children);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tbody',
        null,
        this.renderRows()
      );
    }
  }]);
  return TableBody;
}(_react.Component);

TableBody.propTypes = {
  children: _propTypes2.default.node
};

var TableRow = function TableRow(_ref) {
  var selected = _ref.selected,
      props = (0, _objectWithoutProperties3.default)(_ref, ['selected']);
  var style = props.style;


  if (selected) {
    style = (0, _assign2.default)({}, style, {
      backgroundColor: '#F8FCF5',
      borderLeft: '2px solid #7db450'
    });
  }

  return _react2.default.createElement(
    'tr',
    (0, _extends3.default)({}, props, { style: style }),
    props.children
  );
};

exports.TableRow = TableRow;
TableRow.propTypes = {
  selected: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object
};

var TableHeaderColumn = function TableHeaderColumn(props) {
  var sortable = props.sortable,
      resizable = props.resizable,
      children = props.children,
      className = props.className,
      width = props.width,
      sortDir = props.sortDir,
      onSort = props.onSort,
      sorted = props.sorted,
      align = props.align,
      pprops = (0, _objectWithoutProperties3.default)(props, ['sortable', 'resizable', 'children', 'className', 'width', 'sortDir', 'onSort', 'sorted', 'align']);

  var oClassNames = (0, _classnames3.default)(className, 'slds-text-title--caps slds-truncate', (0, _defineProperty3.default)({
    'slds-is-sortable': sortable,
    'slds-is-resizable': resizable,
    'slds-is-sorted': sorted
  }, 'slds-text-align--' + align, align));

  var style = { minWidth: width || 'auto' };

  var icon = sortDir === 'DESC' ? 'arrowdown' : 'arrowup';

  return _react2.default.createElement(
    'th',
    (0, _extends3.default)({}, pprops, {
      className: oClassNames,
      scope: 'col',
      style: style
    }),
    sortable ? _react2.default.createElement(
      'a',
      {
        onClick: function onClick(e) {
          e.preventDefault();onSort();
        },
        className: 'slds-th__action slds-text-link--reset'
      },
      _react2.default.createElement(
        'span',
        { className: 'slds-assistive-text' },
        'Sort '
      ),
      _react2.default.createElement(
        'span',
        { className: 'slds-truncate' },
        children
      ),
      _react2.default.createElement(_Icon2.default, {
        className: 'slds-is-sortable__icon',
        textColor: 'default',
        container: true,
        size: 'x-small',
        category: 'utility',
        icon: icon,
        style: { position: 'absolute' }
      }),
      _react2.default.createElement('span', { className: 'slds-assistive-text', 'aria-live': 'assertive', 'aria-atomic': 'true' })
    ) : children
  );
};

exports.TableHeaderColumn = TableHeaderColumn;
TableHeaderColumn.propTypes = {
  className: _propTypes2.default.string,
  onSort: _propTypes2.default.func,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  sortable: _propTypes2.default.bool,
  resizable: _propTypes2.default.bool,
  sortDir: _propTypes2.default.string,
  sorted: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  children: _propTypes2.default.node
};

var TableRowColumn = function TableRowColumn(props) {
  var truncate = props.truncate,
      className = props.className,
      children = props.children,
      pprops = (0, _objectWithoutProperties3.default)(props, ['truncate', 'className', 'children']);

  var oClassNames = (0, _classnames3.default)(className, {
    'slds-truncate': truncate
  });
  var style = {};
  if (!truncate) style.position = 'static';

  return _react2.default.createElement(
    'td',
    (0, _extends3.default)({
      role: 'gridcell',
      style: style,
      className: oClassNames
    }, pprops),
    children
  );
};

exports.TableRowColumn = TableRowColumn;
TableRowColumn.propTypes = {
  className: _propTypes2.default.string,
  truncate: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

TableRowColumn.defaultProps = {
  truncate: true
};

var TableRowColumnActions = exports.TableRowColumnActions = function TableRowColumnActions(props) {
  return _react2.default.createElement(
    TableRowColumn,
    {
      className: 'slds-cell-shrink',
      'data-label': 'Actions',
      truncate: false,
      width: 50,
      style: { position: 'static' }
    },
    props.children
  );
};

TableRowColumnActions.propTypes = {
  children: _propTypes2.default.node
};

var Table = function (_Component3) {
  (0, _inherits3.default)(Table, _Component3);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'onScroll',
    value: function onScroll() {
      var elements = document.getElementsByClassName('react-slds-dropdown-opened');
      if (elements.length) elements[0].childNodes[0].blur();
    }
  }, {
    key: 'renderTableHeader',
    value: function renderTableHeader(base) {
      var sortable = this.props.sortable;

      return _react2.default.cloneElement(base, { sortable: sortable });
    }
  }, {
    key: 'renderTableBody',
    value: function renderTableBody(base) {
      return base;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          className = _props2.className,
          bordered = _props2.bordered,
          verticalBorders = _props2.verticalBorders,
          noRowHover = _props2.noRowHover,
          striped = _props2.striped,
          fixedLayout = _props2.fixedLayout,
          children = _props2.children,
          autoWidth = _props2.autoWidth,
          wrapperStyle = _props2.wrapperStyle,
          pprops = (0, _objectWithoutProperties3.default)(_props2, ['className', 'bordered', 'verticalBorders', 'noRowHover', 'striped', 'fixedLayout', 'children', 'autoWidth', 'wrapperStyle']);

      delete pprops.sortable;

      var tableClassNames = (0, _classnames3.default)(className, 'slds-table slds-table--cell-buffer', {
        'slds-table--bordered': bordered,
        'slds-no-row-hover': noRowHover,
        'slds-table--striped': striped,
        'slds-table--fixed-layout': fixedLayout,
        'slds-table--col-bordered': verticalBorders
      });

      var wrapStyle = (0, _assign2.default)({
        overflowY: 'hidden',
        overflowX: 'auto'
      }, wrapperStyle);

      var style = {};
      if (autoWidth) style.width = 'auto';

      var tBody = void 0;
      var tHead = void 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) return;
        if (child.type === TableHeader) {
          tHead = _this4.renderTableHeader(child);
        } else if (child.type === TableBody) {
          tBody = _this4.renderTableBody(child);
        }
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: wrapStyle, onScroll: this.onScroll.bind(this) },
          _react2.default.createElement(
            'table',
            (0, _extends3.default)({ className: tableClassNames, style: style }, pprops),
            tHead,
            tBody
          )
        )
      );
    }
  }]);
  return Table;
}(_react.Component);

Table.propTypes = {
  wrapperStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  bordered: _propTypes2.default.bool,
  verticalBorders: _propTypes2.default.bool,
  noRowHover: _propTypes2.default.bool,
  striped: _propTypes2.default.bool,
  fixedLayout: _propTypes2.default.bool,
  sortable: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  autoWidth: _propTypes2.default.bool
};

exports.default = Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInNvcnRhYmxlIiwiaGFzQWN0aW9ucyIsImFjdGlvbnNQb3NpdGlvbiIsIm5leHRDaGlsZHJlbiIsImNsYXNzTmFtZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJjaGlsZFNvcnRhYmxlIiwicHVzaCIsImNsb25lRWxlbWVudCIsImtleSIsInNsaWNlIiwicmVuZGVyQmFzZUhlYWRlclJvdyIsInByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJub2RlIiwiZGVmYXVsdFByb3BzIiwiVGFibGVCb2R5IiwibWFwIiwiaW5uZXJDaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHJ1bmNhdGUiLCJyZW5kZXJSb3dzIiwiVGFibGVSb3ciLCJzZWxlY3RlZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyTGVmdCIsIm9iamVjdCIsIlRhYmxlSGVhZGVyQ29sdW1uIiwicmVzaXphYmxlIiwid2lkdGgiLCJzb3J0RGlyIiwib25Tb3J0Iiwic29ydGVkIiwiYWxpZ24iLCJwcHJvcHMiLCJvQ2xhc3NOYW1lcyIsIm1pbldpZHRoIiwiaWNvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc2l0aW9uIiwic3RyaW5nIiwiZnVuYyIsIm9uZU9mVHlwZSIsIm9uZU9mIiwiVGFibGVSb3dDb2x1bW4iLCJUYWJsZVJvd0NvbHVtbkFjdGlvbnMiLCJUYWJsZSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsImJsdXIiLCJiYXNlIiwiYm9yZGVyZWQiLCJ2ZXJ0aWNhbEJvcmRlcnMiLCJub1Jvd0hvdmVyIiwic3RyaXBlZCIsImZpeGVkTGF5b3V0IiwiYXV0b1dpZHRoIiwid3JhcHBlclN0eWxlIiwidGFibGVDbGFzc05hbWVzIiwid3JhcFN0eWxlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidEJvZHkiLCJ0SGVhZCIsInR5cGUiLCJyZW5kZXJUYWJsZUhlYWRlciIsInJlbmRlclRhYmxlQm9keSIsIm9uU2Nyb2xsIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0lBRWFBLFcsV0FBQUEsVzs7Ozs7Ozs7OzswQ0FDVztBQUFBLG1CQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ1pDLFFBRFksVUFDWkEsUUFEWTtBQUFBLFVBQ0ZDLFFBREUsVUFDRkEsUUFERTtBQUFBLFVBQ1FDLFVBRFIsVUFDUUEsVUFEUjtBQUFBLFVBQ29CQyxlQURwQixVQUNvQkEsZUFEcEI7O0FBRXBCLFVBQUlDLGVBQWUsRUFBbkI7O0FBRUEsVUFBTUwsUUFBUTtBQUNaTSxtQkFBVztBQURDLE9BQWQ7O0FBSUEsc0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QlAsU0FBU0QsS0FBVCxDQUFlQyxRQUF0QyxFQUFnRCxVQUFDUSxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDaEUsWUFBTUMsZ0JBQWdCRixNQUFNVCxLQUFOLENBQVlFLFFBQWxDO0FBQ0FHLHFCQUFhTyxJQUFiLENBQWtCLGdCQUFNQyxZQUFOLENBQW1CSixLQUFuQixFQUEwQjtBQUMxQ0ssZUFBS0osS0FEcUM7QUFFMUNSLG9CQUFVLE9BQU9TLGFBQVAsS0FBeUIsV0FBekIsR0FBdUNULFFBQXZDLEdBQWtEUztBQUZsQixTQUExQixDQUFsQjtBQUlELE9BTkQ7O0FBUUEsVUFBSVIsVUFBSixFQUFnQjtBQUNkRSxrRUFDS0EsYUFBYVUsS0FBYixDQUFtQixDQUFuQixFQUFzQlgsZUFBdEIsQ0FETCxJQUVFLDhCQUFDLGlCQUFEO0FBQ0Usb0JBQVUsS0FEWjtBQUVFLGlCQUFPLEVBRlQ7QUFHRSxlQUFLLENBQUMsQ0FIUjtBQUlFLHFCQUFVO0FBSlosVUFGRixvQ0FR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U0FBYixFQUF5QixVQUFVLEtBQUtRLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFuQztBQUNFO0FBQUE7QUFBQSxxQ0FBTyxXQUFXVixlQUFsQixFQUFtQyxPQUFPdkMsS0FBMUMsSUFBcURXLE1BQXJEO0FBQ0dpQyxpQkFESDtBQUVHRDtBQUZIO0FBREY7QUFERixPQURGO0FBVUQ7Ozs7O0FBR0huQixNQUFNckMsU0FBTixHQUFrQjtBQUNoQm1ELGdCQUFjLG9CQUFVbkMsTUFEUjtBQUVoQjNCLGFBQVcsb0JBQVUwQyxNQUZMO0FBR2hCYyxZQUFVLG9CQUFVNUMsSUFISjtBQUloQjZDLG1CQUFpQixvQkFBVTdDLElBSlg7QUFLaEI4QyxjQUFZLG9CQUFVOUMsSUFMTjtBQU1oQitDLFdBQVMsb0JBQVUvQyxJQU5IO0FBT2hCZ0QsZUFBYSxvQkFBVWhELElBUFA7QUFRaEJoQixZQUFVLG9CQUFVZ0IsSUFSSjtBQVNoQmpCLFlBQVUsb0JBQVVtQixJQVRKO0FBVWhCK0MsYUFBVyxvQkFBVWpEO0FBVkwsQ0FBbEI7O2tCQWFlb0MsSyIsImZpbGUiOiJUYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlckJhc2VIZWFkZXJSb3coKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc29ydGFibGUsIGhhc0FjdGlvbnMsIGFjdGlvbnNQb3NpdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgbmV4dENoaWxkcmVuID0gW107XG5cbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogJ3NsZHMtdGV4dC10aXRsZS0tY2FwcycsXG4gICAgfTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkU29ydGFibGUgPSBjaGlsZC5wcm9wcy5zb3J0YWJsZTtcbiAgICAgIG5leHRDaGlsZHJlbi5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBzb3J0YWJsZTogdHlwZW9mIGNoaWxkU29ydGFibGUgPT09ICd1bmRlZmluZWQnID8gc29ydGFibGUgOiBjaGlsZFNvcnRhYmxlLFxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgaWYgKGhhc0FjdGlvbnMpIHtcbiAgICAgIG5leHRDaGlsZHJlbiA9IFtcbiAgICAgICAgLi4ubmV4dENoaWxkcmVuLnNsaWNlKDAsIGFjdGlvbnNQb3NpdGlvbiksXG4gICAgICAgIDxUYWJsZUhlYWRlckNvbHVtblxuICAgICAgICAgIHNvcnRhYmxlPXtmYWxzZX1cbiAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAga2V5PXstMX1cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtY2VsbC1zaHJpbmsnXG4gICAgICAgIC8+LFxuICAgICAgICAuLi5uZXh0Q2hpbGRyZW4uc2xpY2UoYWN0aW9uc1Bvc2l0aW9uKSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgcHJvcHMsIG5leHRDaGlsZHJlbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0aGVhZD5cbiAgICAgICAgeyB0aGlzLnJlbmRlckJhc2VIZWFkZXJSb3coKSB9XG4gICAgICA8L3RoZWFkPlxuICAgICk7XG4gIH1cbn1cblxuVGFibGVIZWFkZXIucHJvcFR5cGVzID0ge1xuICBoYXNBY3Rpb25zOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWN0aW9uc1Bvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblRhYmxlSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aW9uc1Bvc2l0aW9uOiAwLFxufTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlQm9keSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlclJvd3MoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGQucHJvcHMuY2hpbGRyZW4sIChpbm5lckNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGlubmVyQ2hpbGQpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgdHJ1bmNhdGUgfSA9IGlubmVyQ2hpbGQucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0eXBlb2YgdHJ1bmNhdGUgIT09ICd1bmRlZmluZWQnKSBwcm9wcy50cnVuY2F0ZSA9IHRydW5jYXRlO1xuICAgICAgICBjaGlsZHJlbi5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChpbm5lckNoaWxkLCBwcm9wcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgY2xhc3NOYW1lOiAnc2xkcy1oaW50LXBhcmVudCcgfSwgY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJSb3dzKCkgfVxuICAgICAgPC90Ym9keT5cbiAgICApO1xuICB9XG59XG5cblRhYmxlQm9keS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9ICh7IHNlbGVjdGVkLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGxldCB7IHN0eWxlIH0gPSBwcm9wcztcblxuICBpZiAoc2VsZWN0ZWQpIHtcbiAgICBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjhGQ0Y1JyxcbiAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgIzdkYjQ1MCcsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx0ciB7Li4ucHJvcHN9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC90cj5cbiAgKTtcbn07XG5cblRhYmxlUm93LnByb3BUeXBlcyA9IHtcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZGVyQ29sdW1uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzb3J0YWJsZSwgcmVzaXphYmxlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCB3aWR0aCwgc29ydERpciwgb25Tb3J0LCBzb3J0ZWQsIGFsaWduLCAuLi5wcHJvcHNcbiAgfSA9IHByb3BzO1xuICBjb25zdCBvQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLFxuICAgICdzbGRzLXRleHQtdGl0bGUtLWNhcHMgc2xkcy10cnVuY2F0ZScsIHtcbiAgICAgICdzbGRzLWlzLXNvcnRhYmxlJzogc29ydGFibGUsXG4gICAgICAnc2xkcy1pcy1yZXNpemFibGUnOiByZXNpemFibGUsXG4gICAgICAnc2xkcy1pcy1zb3J0ZWQnOiBzb3J0ZWQsXG4gICAgICBbYHNsZHMtdGV4dC1hbGlnbi0tJHthbGlnbn1gXTogYWxpZ24sXG4gICAgfSk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7IG1pbldpZHRoOiB3aWR0aCB8fCAnYXV0bycgfTtcblxuICBjb25zdCBpY29uID0gc29ydERpciA9PT0gJ0RFU0MnID8gJ2Fycm93ZG93bicgOiAnYXJyb3d1cCc7XG5cbiAgcmV0dXJuIChcbiAgICA8dGhcbiAgICAgIHsuLi5wcHJvcHN9XG4gICAgICBjbGFzc05hbWU9e29DbGFzc05hbWVzfVxuICAgICAgc2NvcGU9J2NvbCdcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICB7c29ydGFibGUgP1xuICAgICAgICA8YVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgb25Tb3J0KCk7IH0gfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10aF9fYWN0aW9uIHNsZHMtdGV4dC1saW5rLS1yZXNldCdcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1hc3Npc3RpdmUtdGV4dCc+U29ydCA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtaXMtc29ydGFibGVfX2ljb24nXG4gICAgICAgICAgICB0ZXh0Q29sb3I9J2RlZmF1bHQnXG4gICAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAgIHNpemU9J3gtc21hbGwnXG4gICAgICAgICAgICBjYXRlZ29yeT0ndXRpbGl0eSdcbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0JyBhcmlhLWxpdmU9J2Fzc2VydGl2ZScgYXJpYS1hdG9taWM9J3RydWUnIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgOiBjaGlsZHJlblxuICAgICAgfVxuICAgIDwvdGg+XG4gICk7XG59O1xuXG5UYWJsZUhlYWRlckNvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuYyxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIHNvcnRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVzaXphYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydERpcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgc29ydGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgY29uc3QgVGFibGVSb3dDb2x1bW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0cnVuY2F0ZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHByb3BzIH0gPSBwcm9wcztcbiAgY29uc3Qgb0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwge1xuICAgICdzbGRzLXRydW5jYXRlJzogdHJ1bmNhdGUsXG4gIH0pO1xuICBjb25zdCBzdHlsZSA9IHt9O1xuICBpZiAoIXRydW5jYXRlKSBzdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuXG4gIHJldHVybiAoXG4gICAgPHRkXG4gICAgICByb2xlPSdncmlkY2VsbCdcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17b0NsYXNzTmFtZXN9XG4gICAgICB7Li4ucHByb3BzfVxuICAgID57Y2hpbGRyZW59PC90ZD5cbiAgKTtcbn07XG5cblRhYmxlUm93Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cnVuY2F0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblRhYmxlUm93Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJ1bmNhdGU6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgVGFibGVSb3dDb2x1bW5BY3Rpb25zID0gcHJvcHMgPT4gKFxuICA8VGFibGVSb3dDb2x1bW5cbiAgICBjbGFzc05hbWU9J3NsZHMtY2VsbC1zaHJpbmsnXG4gICAgZGF0YS1sYWJlbD0nQWN0aW9ucydcbiAgICB0cnVuY2F0ZT17ZmFsc2V9XG4gICAgd2lkdGg9ezUwfVxuICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RhdGljJyB9fVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L1RhYmxlUm93Q29sdW1uPlxuKTtcblxuVGFibGVSb3dDb2x1bW5BY3Rpb25zLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIG9uU2Nyb2xsKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVhY3Qtc2xkcy1kcm9wZG93bi1vcGVuZWQnKTtcbiAgICBpZiAoZWxlbWVudHMubGVuZ3RoKSBlbGVtZW50c1swXS5jaGlsZE5vZGVzWzBdLmJsdXIoKTtcbiAgfVxuXG4gIHJlbmRlclRhYmxlSGVhZGVyKGJhc2UpIHtcbiAgICBjb25zdCB7IHNvcnRhYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYmFzZSwgeyBzb3J0YWJsZSB9KTtcbiAgfVxuICByZW5kZXJUYWJsZUJvZHkoYmFzZSkge1xuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgYm9yZGVyZWQsIHZlcnRpY2FsQm9yZGVycywgbm9Sb3dIb3Zlciwgc3RyaXBlZCwgZml4ZWRMYXlvdXQsXG4gICAgICBjaGlsZHJlbiwgYXV0b1dpZHRoLCB3cmFwcGVyU3R5bGUsIC4uLnBwcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZSBwcHJvcHMuc29ydGFibGU7XG5cbiAgICBjb25zdCB0YWJsZUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgJ3NsZHMtdGFibGUgc2xkcy10YWJsZS0tY2VsbC1idWZmZXInLFxuICAgICAge1xuICAgICAgICAnc2xkcy10YWJsZS0tYm9yZGVyZWQnOiBib3JkZXJlZCxcbiAgICAgICAgJ3NsZHMtbm8tcm93LWhvdmVyJzogbm9Sb3dIb3ZlcixcbiAgICAgICAgJ3NsZHMtdGFibGUtLXN0cmlwZWQnOiBzdHJpcGVkLFxuICAgICAgICAnc2xkcy10YWJsZS0tZml4ZWQtbGF5b3V0JzogZml4ZWRMYXlvdXQsXG4gICAgICAgICdzbGRzLXRhYmxlLS1jb2wtYm9yZGVyZWQnOiB2ZXJ0aWNhbEJvcmRlcnMsXG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHdyYXBTdHlsZSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAgIG92ZXJmbG93WDogJ2F1dG8nLFxuICAgIH0sIHdyYXBwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBzdHlsZSA9IHt9O1xuICAgIGlmIChhdXRvV2lkdGgpIHN0eWxlLndpZHRoID0gJ2F1dG8nO1xuXG4gICAgbGV0IHRCb2R5O1xuICAgIGxldCB0SGVhZDtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHJldHVybjtcbiAgICAgIGlmIChjaGlsZC50eXBlID09PSBUYWJsZUhlYWRlcikge1xuICAgICAgICB0SGVhZCA9IHRoaXMucmVuZGVyVGFibGVIZWFkZXIoY2hpbGQpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSBUYWJsZUJvZHkpIHtcbiAgICAgICAgdEJvZHkgPSB0aGlzLnJlbmRlclRhYmxlQm9keShjaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17IHdyYXBTdHlsZSB9IG9uU2Nyb2xsPXt0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyl9PlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3RhYmxlQ2xhc3NOYW1lc30gc3R5bGU9e3N0eWxlfSB7Li4ucHByb3BzfT5cbiAgICAgICAgICAgIHt0SGVhZH1cbiAgICAgICAgICAgIHt0Qm9keX1cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuVGFibGUucHJvcFR5cGVzID0ge1xuICB3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuICB2ZXJ0aWNhbEJvcmRlcnM6IFByb3BUeXBlcy5ib29sLFxuICBub1Jvd0hvdmVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RyaXBlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGZpeGVkTGF5b3V0OiBQcm9wVHlwZXMuYm9vbCxcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiJdfQ==