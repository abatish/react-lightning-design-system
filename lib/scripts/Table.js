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
  hasActions: _react.PropTypes.bool,
  actionsPosition: _react.PropTypes.number,
  children: _react.PropTypes.node,
  sortable: _react.PropTypes.bool
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
  children: _react.PropTypes.node
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
  selected: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  /* eslint-disable react/forbid-prop-types */
  style: _react.PropTypes.object
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
  className: _react.PropTypes.string,
  onSort: _react.PropTypes.func,
  width: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  sortable: _react.PropTypes.bool,
  resizable: _react.PropTypes.bool,
  sortDir: _react.PropTypes.string,
  sorted: _react.PropTypes.bool,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  children: _react.PropTypes.node
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
  className: _react.PropTypes.string,
  truncate: _react.PropTypes.bool,
  children: _react.PropTypes.node
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
  children: _react.PropTypes.node
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
  wrapperStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  bordered: _react.PropTypes.bool,
  verticalBorders: _react.PropTypes.bool,
  noRowHover: _react.PropTypes.bool,
  striped: _react.PropTypes.bool,
  fixedLayout: _react.PropTypes.bool,
  sortable: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  autoWidth: _react.PropTypes.bool
};

exports.default = Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYmxlLmpzIl0sIm5hbWVzIjpbIlRhYmxlSGVhZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInNvcnRhYmxlIiwiaGFzQWN0aW9ucyIsImFjdGlvbnNQb3NpdGlvbiIsIm5leHRDaGlsZHJlbiIsImNsYXNzTmFtZSIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiaW5kZXgiLCJjaGlsZFNvcnRhYmxlIiwicHVzaCIsImNsb25lRWxlbWVudCIsImtleSIsInNsaWNlIiwicmVuZGVyQmFzZUhlYWRlclJvdyIsInByb3BUeXBlcyIsImJvb2wiLCJudW1iZXIiLCJub2RlIiwiZGVmYXVsdFByb3BzIiwiVGFibGVCb2R5IiwibWFwIiwiaW5uZXJDaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHJ1bmNhdGUiLCJyZW5kZXJSb3dzIiwiVGFibGVSb3ciLCJzZWxlY3RlZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyTGVmdCIsIm9iamVjdCIsIlRhYmxlSGVhZGVyQ29sdW1uIiwicmVzaXphYmxlIiwid2lkdGgiLCJzb3J0RGlyIiwib25Tb3J0Iiwic29ydGVkIiwiYWxpZ24iLCJwcHJvcHMiLCJvQ2xhc3NOYW1lcyIsIm1pbldpZHRoIiwiaWNvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc2l0aW9uIiwic3RyaW5nIiwiZnVuYyIsIm9uZU9mVHlwZSIsIlByb3BUeXBlcyIsIm9uZU9mIiwiVGFibGVSb3dDb2x1bW4iLCJUYWJsZVJvd0NvbHVtbkFjdGlvbnMiLCJUYWJsZSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwiY2hpbGROb2RlcyIsImJsdXIiLCJiYXNlIiwiYm9yZGVyZWQiLCJ2ZXJ0aWNhbEJvcmRlcnMiLCJub1Jvd0hvdmVyIiwic3RyaXBlZCIsImZpeGVkTGF5b3V0IiwiYXV0b1dpZHRoIiwid3JhcHBlclN0eWxlIiwidGFibGVDbGFzc05hbWVzIiwid3JhcFN0eWxlIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwidEJvZHkiLCJ0SGVhZCIsInR5cGUiLCJyZW5kZXJUYWJsZUhlYWRlciIsInJlbmRlclRhYmxlQm9keSIsIm9uU2Nyb2xsIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztJQUVhQSxXLFdBQUFBLFc7Ozs7Ozs7Ozs7MENBQ1c7QUFBQSxtQkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNaQyxRQURZLFVBQ1pBLFFBRFk7QUFBQSxVQUNGQyxRQURFLFVBQ0ZBLFFBREU7QUFBQSxVQUNRQyxVQURSLFVBQ1FBLFVBRFI7QUFBQSxVQUNvQkMsZUFEcEIsVUFDb0JBLGVBRHBCOztBQUVwQixVQUFJQyxlQUFlLEVBQW5COztBQUVBLFVBQU1MLFFBQVE7QUFDWk0sbUJBQVc7QUFEQyxPQUFkOztBQUlBLHNCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJQLFNBQVNELEtBQVQsQ0FBZUMsUUFBdEMsRUFBZ0QsVUFBQ1EsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQ2hFLFlBQU1DLGdCQUFnQkYsTUFBTVQsS0FBTixDQUFZRSxRQUFsQztBQUNBRyxxQkFBYU8sSUFBYixDQUFrQixnQkFBTUMsWUFBTixDQUFtQkosS0FBbkIsRUFBMEI7QUFDMUNLLGVBQUtKLEtBRHFDO0FBRTFDUixvQkFBVSxPQUFPUyxhQUFQLEtBQXlCLFdBQXpCLEdBQXVDVCxRQUF2QyxHQUFrRFM7QUFGbEIsU0FBMUIsQ0FBbEI7QUFJRCxPQU5EOztBQVFBLFVBQUlSLFVBQUosRUFBZ0I7QUFDZEUsa0VBQ0tBLGFBQWFVLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JYLGVBQXRCLENBREwsSUFFRSw4QkFBQyxpQkFBRDtBQUNFLG9CQUFVLEtBRFo7QUFFRSxpQkFBTyxFQUZUO0FBR0UsZUFBSyxDQUFDLENBSFI7QUFJRSxxQkFBVTtBQUpaLFVBRkYs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O0FBQ0U7QUFBQTtBQUFBLFlBQUssT0FBUThELFNBQWIsRUFBeUIsVUFBVSxLQUFLUSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBbkM7QUFDRTtBQUFBO0FBQUEscUNBQU8sV0FBV1YsZUFBbEIsRUFBbUMsT0FBT3hDLEtBQTFDLElBQXFEVyxNQUFyRDtBQUNHa0MsaUJBREg7QUFFR0Q7QUFGSDtBQURGO0FBREYsT0FERjtBQVVEOzs7OztBQUdIbkIsTUFBTXRDLFNBQU4sR0FBa0I7QUFDaEJvRCxnQkFBYyxpQkFBVXBDLE1BRFI7QUFFaEIzQixhQUFXLGlCQUFVMEMsTUFGTDtBQUdoQmUsWUFBVSxpQkFBVTdDLElBSEo7QUFJaEI4QyxtQkFBaUIsaUJBQVU5QyxJQUpYO0FBS2hCK0MsY0FBWSxpQkFBVS9DLElBTE47QUFNaEJnRCxXQUFTLGlCQUFVaEQsSUFOSDtBQU9oQmlELGVBQWEsaUJBQVVqRCxJQVBQO0FBUWhCaEIsWUFBVSxpQkFBVWdCLElBUko7QUFTaEJqQixZQUFVLGlCQUFVbUIsSUFUSjtBQVVoQmdELGFBQVcsaUJBQVVsRDtBQVZMLENBQWxCOztrQkFhZXFDLEsiLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyQmFzZUhlYWRlclJvdygpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzb3J0YWJsZSwgaGFzQWN0aW9ucywgYWN0aW9uc1Bvc2l0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXh0Q2hpbGRyZW4gPSBbXTtcblxuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgY2xhc3NOYW1lOiAnc2xkcy10ZXh0LXRpdGxlLS1jYXBzJyxcbiAgICB9O1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbi5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRTb3J0YWJsZSA9IGNoaWxkLnByb3BzLnNvcnRhYmxlO1xuICAgICAgbmV4dENoaWxkcmVuLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIHNvcnRhYmxlOiB0eXBlb2YgY2hpbGRTb3J0YWJsZSA9PT0gJ3VuZGVmaW5lZCcgPyBzb3J0YWJsZSA6IGNoaWxkU29ydGFibGUsXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzQWN0aW9ucykge1xuICAgICAgbmV4dENoaWxkcmVuID0gW1xuICAgICAgICAuLi5uZXh0Q2hpbGRyZW4uc2xpY2UoMCwgYWN0aW9uc1Bvc2l0aW9uKSxcbiAgICAgICAgPFRhYmxlSGVhZGVyQ29sdW1uXG4gICAgICAgICAgc29ydGFibGU9e2ZhbHNlfVxuICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICBrZXk9ey0xfVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1jZWxsLXNocmluaydcbiAgICAgICAgLz4sXG4gICAgICAgIC4uLm5leHRDaGlsZHJlbi5zbGljZShhY3Rpb25zUG9zaXRpb24pLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBwcm9wcywgbmV4dENoaWxkcmVuKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRoZWFkPlxuICAgICAgICB7IHRoaXMucmVuZGVyQmFzZUhlYWRlclJvdygpIH1cbiAgICAgIDwvdGhlYWQ+XG4gICAgKTtcbiAgfVxufVxuXG5UYWJsZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGhhc0FjdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuICBhY3Rpb25zUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuVGFibGVIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBhY3Rpb25zUG9zaXRpb246IDAsXG59O1xuXG5leHBvcnQgY2xhc3MgVGFibGVCb2R5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyUm93cygpIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZC5wcm9wcy5jaGlsZHJlbiwgKGlubmVyQ2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoaW5uZXJDaGlsZCkpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyB0cnVuY2F0ZSB9ID0gaW5uZXJDaGlsZC5wcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGVvZiB0cnVuY2F0ZSAhPT0gJ3VuZGVmaW5lZCcpIHByb3BzLnRydW5jYXRlID0gdHJ1bmNhdGU7XG4gICAgICAgIGNoaWxkcmVuLnB1c2goUmVhY3QuY2xvbmVFbGVtZW50KGlubmVyQ2hpbGQsIHByb3BzKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBjbGFzc05hbWU6ICdzbGRzLWhpbnQtcGFyZW50JyB9LCBjaGlsZHJlbik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0Ym9keT5cbiAgICAgICAgeyB0aGlzLnJlbmRlclJvd3MoKSB9XG4gICAgICA8L3Rib2R5PlxuICAgICk7XG4gIH1cbn1cblxuVGFibGVCb2R5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGNvbnN0IFRhYmxlUm93ID0gKHsgc2VsZWN0ZWQsIC4uLnByb3BzIH0pID0+IHtcbiAgbGV0IHsgc3R5bGUgfSA9IHByb3BzO1xuXG4gIGlmIChzZWxlY3RlZCkge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGOEZDRjUnLFxuICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjN2RiNDUwJyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRyIHsuLi5wcm9wc30gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3RyPlxuICApO1xufTtcblxuVGFibGVSb3cucHJvcFR5cGVzID0ge1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXJDb2x1bW4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHNvcnRhYmxlLCByZXNpemFibGUsIGNoaWxkcmVuLCBjbGFzc05hbWUsIHdpZHRoLCBzb3J0RGlyLCBvblNvcnQsIHNvcnRlZCwgYWxpZ24sIC4uLnBwcm9wc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IG9DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsXG4gICAgJ3NsZHMtdGV4dC10aXRsZS0tY2FwcyBzbGRzLXRydW5jYXRlJywge1xuICAgICAgJ3NsZHMtaXMtc29ydGFibGUnOiBzb3J0YWJsZSxcbiAgICAgICdzbGRzLWlzLXJlc2l6YWJsZSc6IHJlc2l6YWJsZSxcbiAgICAgICdzbGRzLWlzLXNvcnRlZCc6IHNvcnRlZCxcbiAgICAgIFtgc2xkcy10ZXh0LWFsaWduLS0ke2FsaWdufWBdOiBhbGlnbixcbiAgICB9KTtcblxuICBjb25zdCBzdHlsZSA9IHsgbWluV2lkdGg6IHdpZHRoIHx8ICdhdXRvJyB9O1xuXG4gIGNvbnN0IGljb24gPSBzb3J0RGlyID09PSAnREVTQycgPyAnYXJyb3dkb3duJyA6ICdhcnJvd3VwJztcblxuICByZXR1cm4gKFxuICAgIDx0aFxuICAgICAgey4uLnBwcm9wc31cbiAgICAgIGNsYXNzTmFtZT17b0NsYXNzTmFtZXN9XG4gICAgICBzY29wZT0nY29sJ1xuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgID5cbiAgICAgIHtzb3J0YWJsZSA/XG4gICAgICAgIDxhXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBvblNvcnQoKTsgfSB9XG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLXRoX19hY3Rpb24gc2xkcy10ZXh0LWxpbmstLXJlc2V0J1xuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWFzc2lzdGl2ZS10ZXh0Jz5Tb3J0IDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPntjaGlsZHJlbn08L3NwYW4+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1pcy1zb3J0YWJsZV9faWNvbidcbiAgICAgICAgICAgIHRleHRDb2xvcj0nZGVmYXVsdCdcbiAgICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgICAgc2l6ZT0neC1zbWFsbCdcbiAgICAgICAgICAgIGNhdGVnb3J5PSd1dGlsaXR5J1xuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJyBhcmlhLWF0b21pYz0ndHJ1ZScgLz5cbiAgICAgICAgPC9hPlxuICAgICAgICA6IGNoaWxkcmVuXG4gICAgICB9XG4gICAgPC90aD5cbiAgKTtcbn07XG5cblRhYmxlSGVhZGVyQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgc29ydGFibGU6IFByb3BUeXBlcy5ib29sLFxuICByZXNpemFibGU6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0RGlyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzb3J0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXSksXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBjb25zdCBUYWJsZVJvd0NvbHVtbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRydW5jYXRlLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xuICBjb25zdCBvQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCB7XG4gICAgJ3NsZHMtdHJ1bmNhdGUnOiB0cnVuY2F0ZSxcbiAgfSk7XG4gIGNvbnN0IHN0eWxlID0ge307XG4gIGlmICghdHJ1bmNhdGUpIHN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG5cbiAgcmV0dXJuIChcbiAgICA8dGRcbiAgICAgIHJvbGU9J2dyaWRjZWxsJ1xuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtvQ2xhc3NOYW1lc31cbiAgICAgIHsuLi5wcHJvcHN9XG4gICAgPntjaGlsZHJlbn08L3RkPlxuICApO1xufTtcblxuVGFibGVSb3dDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRydW5jYXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuVGFibGVSb3dDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICB0cnVuY2F0ZTogdHJ1ZSxcbn07XG5cbmV4cG9ydCBjb25zdCBUYWJsZVJvd0NvbHVtbkFjdGlvbnMgPSBwcm9wcyA9PiAoXG4gIDxUYWJsZVJvd0NvbHVtblxuICAgIGNsYXNzTmFtZT0nc2xkcy1jZWxsLXNocmluaydcbiAgICBkYXRhLWxhYmVsPSdBY3Rpb25zJ1xuICAgIHRydW5jYXRlPXtmYWxzZX1cbiAgICB3aWR0aD17NTB9XG4gICAgc3R5bGU9e3sgcG9zaXRpb246ICdzdGF0aWMnIH19XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvVGFibGVSb3dDb2x1bW4+XG4pO1xuXG5UYWJsZVJvd0NvbHVtbkFjdGlvbnMucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5jbGFzcyBUYWJsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWFjdC1zbGRzLWRyb3Bkb3duLW9wZW5lZCcpO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGgpIGVsZW1lbnRzWzBdLmNoaWxkTm9kZXNbMF0uYmx1cigpO1xuICB9XG5cbiAgcmVuZGVyVGFibGVIZWFkZXIoYmFzZSkge1xuICAgIGNvbnN0IHsgc29ydGFibGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChiYXNlLCB7IHNvcnRhYmxlIH0pO1xuICB9XG4gIHJlbmRlclRhYmxlQm9keShiYXNlKSB7XG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBib3JkZXJlZCwgdmVydGljYWxCb3JkZXJzLCBub1Jvd0hvdmVyLCBzdHJpcGVkLCBmaXhlZExheW91dCxcbiAgICAgIGNoaWxkcmVuLCBhdXRvV2lkdGgsIHdyYXBwZXJTdHlsZSwgLi4ucHByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVsZXRlIHBwcm9wcy5zb3J0YWJsZTtcblxuICAgIGNvbnN0IHRhYmxlQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICBjbGFzc05hbWUsXG4gICAgICAnc2xkcy10YWJsZSBzbGRzLXRhYmxlLS1jZWxsLWJ1ZmZlcicsXG4gICAgICB7XG4gICAgICAgICdzbGRzLXRhYmxlLS1ib3JkZXJlZCc6IGJvcmRlcmVkLFxuICAgICAgICAnc2xkcy1uby1yb3ctaG92ZXInOiBub1Jvd0hvdmVyLFxuICAgICAgICAnc2xkcy10YWJsZS0tc3RyaXBlZCc6IHN0cmlwZWQsXG4gICAgICAgICdzbGRzLXRhYmxlLS1maXhlZC1sYXlvdXQnOiBmaXhlZExheW91dCxcbiAgICAgICAgJ3NsZHMtdGFibGUtLWNvbC1ib3JkZXJlZCc6IHZlcnRpY2FsQm9yZGVycyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgd3JhcFN0eWxlID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXG4gICAgfSwgd3JhcHBlclN0eWxlKTtcblxuICAgIGNvbnN0IHN0eWxlID0ge307XG4gICAgaWYgKGF1dG9XaWR0aCkgc3R5bGUud2lkdGggPSAnYXV0byc7XG5cbiAgICBsZXQgdEJvZHk7XG4gICAgbGV0IHRIZWFkO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFRhYmxlSGVhZGVyKSB7XG4gICAgICAgIHRIZWFkID0gdGhpcy5yZW5kZXJUYWJsZUhlYWRlcihjaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLnR5cGUgPT09IFRhYmxlQm9keSkge1xuICAgICAgICB0Qm9keSA9IHRoaXMucmVuZGVyVGFibGVCb2R5KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXsgd3JhcFN0eWxlIH0gb25TY3JvbGw9e3RoaXMub25TY3JvbGwuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17dGFibGVDbGFzc05hbWVzfSBzdHlsZT17c3R5bGV9IHsuLi5wcHJvcHN9PlxuICAgICAgICAgICAge3RIZWFkfVxuICAgICAgICAgICAge3RCb2R5fVxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UYWJsZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBwZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHZlcnRpY2FsQm9yZGVyczogUHJvcFR5cGVzLmJvb2wsXG4gIG5vUm93SG92ZXI6IFByb3BUeXBlcy5ib29sLFxuICBzdHJpcGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZml4ZWRMYXlvdXQ6IFByb3BUeXBlcy5ib29sLFxuICBzb3J0YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgYXV0b1dpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl19