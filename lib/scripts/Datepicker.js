'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Picklist = require('./Picklist');

var _Picklist2 = _interopRequireDefault(_Picklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCalendarObject(date) {
  var d = (0, _moment2.default)(date, 'YYYY-MM-DD');
  if (!d.isValid()) {
    d = (0, _moment2.default)();
  }
  var year = d.year();
  var month = d.month();
  var first = (0, _moment2.default)(d).startOf('month').startOf('week');
  var last = (0, _moment2.default)(d).endOf('month').endOf('week');
  var weeks = [];
  var days = [];
  for (var dd = first; dd.isBefore(last); dd = dd.add(1, 'd')) {
    days.push({ year: dd.year(), month: dd.month(), date: dd.date(), value: dd.format('YYYY-MM-DD') });
    if (days.length === 7) {
      weeks.push(days);
      days = [];
    }
  }
  return { year: year, month: month, weeks: weeks };
}

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

var Datepicker = function (_React$Component) {
  (0, _inherits3.default)(Datepicker, _React$Component);

  function Datepicker(props) {
    (0, _classCallCheck3.default)(this, Datepicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Datepicker).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Datepicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var targetDate = this.props.selectedDate || (0, _moment2.default)().format('YYYY-MM-DD');
        this.focusDate(targetDate);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.focusDate && (this.state.targetDate || this.props.selectedDate)) {
        this.focusDate(this.state.targetDate || this.props.selectedDate);
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ focusDate: false });
      }
    }
  }, {
    key: 'onDateKeyDown',
    value: function onDateKeyDown(date, e) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      if (e.keyCode === 13 || e.keyCode === 32) {
        // return / space
        this.onDateClick(date);
        e.preventDefault();
        e.stopPropagation();
      } else if (e.keyCode >= 37 && e.keyCode <= 40) {
        // cursor key
        if (e.keyCode === 37) {
          targetDate = (0, _moment2.default)(targetDate).add(-1, e.shiftKey ? 'months' : 'days');
        } else if (e.keyCode === 39) {
          // right arrow key
          targetDate = (0, _moment2.default)(targetDate).add(1, e.shiftKey ? 'months' : 'days');
        } else if (e.keyCode === 38) {
          // up arrow key
          targetDate = (0, _moment2.default)(targetDate).add(-1, e.shiftKey ? 'years' : 'weeks');
        } else if (e.keyCode === 40) {
          // down arrow key
          targetDate = (0, _moment2.default)(targetDate).add(1, e.shiftKey ? 'years' : 'weeks');
        }
        targetDate = targetDate.format('YYYY-MM-DD');
        this.setState({ targetDate: targetDate, focusDate: true });
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'onDateClick',
    value: function onDateClick(date) {
      if (this.props.onSelect) {
        this.props.onSelect(date);
      }
    }
  }, {
    key: 'onDateFocus',
    value: function onDateFocus(date) {
      if (this.state.targetDate !== date) {
        this.setState({ targetDate: date });
      }
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange(item) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      targetDate = (0, _moment2.default)(targetDate).year(item.value).format('YYYY-MM-DD');
      this.setState({ targetDate: targetDate });
    }
  }, {
    key: 'onMonthChange',
    value: function onMonthChange(month) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      targetDate = (0, _moment2.default)(targetDate).add(month, 'months').format('YYYY-MM-DD');
      this.setState({ targetDate: targetDate });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      setTimeout(function () {
        if (!_this2.isFocusedInComponent()) {
          if (_this2.props.onBlur) {
            _this2.props.onBlur(e);
          }
        }
      }, 10);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        // ESC
        if (this.props.onClose) {
          this.props.onClose();
        }
      }
    }
  }, {
    key: 'focusDate',
    value: function focusDate(date) {
      var el = _reactDom2.default.findDOMNode(this.refs.month);
      var dateEl = el.querySelector('.slds-day[data-date-value="' + date + '"]');
      if (dateEl) {
        dateEl.focus();
      }
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = _reactDom2.default.findDOMNode(this);
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'renderFilter',
    value: function renderFilter(cal) {
      return _react2.default.createElement(
        'div',
        { className: 'slds-datepicker__filter slds-grid' },
        _react2.default.createElement(
          'div',
          { className: 'slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--2-of-3' },
          _react2.default.createElement(
            'div',
            { className: 'slds-align-middle' },
            _react2.default.createElement(_Button2.default, { className: 'slds-align-middle', type: 'icon-container', icon: 'left', size: 'small', alt: 'Previous Month',
              onClick: this.onMonthChange.bind(this, -1)
            })
          ),
          _react2.default.createElement(
            'h2',
            { className: 'slds-align-middle' },
            _moment2.default.monthsShort()[cal.month]
          ),
          _react2.default.createElement(
            'div',
            { className: 'slds-align-middle' },
            _react2.default.createElement(_Button2.default, { className: 'slds-align-middle', type: 'icon-container', icon: 'right', size: 'small', alt: 'Next Month',
              onClick: this.onMonthChange.bind(this, 1)
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-size--1-of-3' },
          _react2.default.createElement(
            _Picklist2.default,
            { className: 'slds-picklist--fluid slds-shrink-none', value: cal.year,
              onSelect: this.onYearChange.bind(this)
            },
            new Array(11).join('_').split('_').map(function (a, i) {
              var year = cal.year + i - 5;
              return _react2.default.createElement(_Picklist.PicklistItem, { key: year, label: year, value: year });
            })
          )
        )
      );
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth(cal, selectedDate, today) {
      var _this3 = this;

      return _react2.default.createElement(
        'table',
        { className: 'datepicker__month', role: 'grid', 'aria-labelledby': 'month', ref: 'month' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _moment2.default.weekdaysMin().map(function (wd, i) {
              return _react2.default.createElement(
                'th',
                { key: i },
                _react2.default.createElement(
                  'abbr',
                  { title: _moment2.default.weekdays(i) },
                  wd
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          cal.weeks.map(function (days, i) {
            return _react2.default.createElement(
              'tr',
              { key: i },
              days.map(_this3.renderDate.bind(_this3, cal, selectedDate, today))
            );
          })
        )
      );
    }
  }, {
    key: 'renderDate',
    value: function renderDate(cal, selectedDate, today, d, i) {
      var enabled = d.year === cal.year && d.month === cal.month;
      var selected = d.value === selectedDate;
      var isToday = d.value === today;
      var dateClassName = (0, _classnames2.default)({
        'slds-disabled-text': !enabled,
        'slds-is-selected': selected,
        'slds-is-today': isToday
      });
      return _react2.default.createElement(
        'td',
        { className: dateClassName, key: i, headers: _moment2.default.weekdays(i),
          role: 'gridcell', 'aria-disabled': !enabled, 'aria-selected': selected
        },
        _react2.default.createElement(
          'span',
          { className: 'slds-day', tabIndex: enabled ? 0 : -1,
            onClick: enabled ? this.onDateClick.bind(this, d.value) : null,
            onKeyDown: enabled ? this.onDateKeyDown.bind(this, d.value) : null,
            onFocus: enabled ? this.onDateFocus.bind(this, d.value) : cancelEvent,
            'data-date-value': d.value
          },
          d.date
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var selectedDate = _props.selectedDate;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'selectedDate']);

      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      var targetDate = this.state.targetDate || selectedDate;
      var cal = createCalendarObject(targetDate);
      var datepickerClassNames = (0, _classnames2.default)('slds-datepicker', className);
      return _react2.default.createElement(
        'div',
        { className: datepickerClassNames, ref: 'datepicker', 'aria-hidden': false,
          onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this)
        },
        this.renderFilter(cal),
        this.renderMonth(cal, selectedDate, today)
      );
    }
  }]);
  return Datepicker;
}(_react2.default.Component);

exports.default = Datepicker;


Datepicker.propTypes = {
  className: _react.PropTypes.string,
  selectedDate: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onClose: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUksSUFBSSxzQkFBTyxJQUFQLEVBQWEsWUFBYixDQUFSO0FBQ0EsTUFBSSxDQUFDLEVBQUUsT0FBRixFQUFMLEVBQWtCO0FBQ2hCLFFBQUksdUJBQUo7QUFDRDtBQUNELE1BQU0sT0FBTyxFQUFFLElBQUYsRUFBYjtBQUNBLE1BQU0sUUFBUSxFQUFFLEtBQUYsRUFBZDtBQUNBLE1BQU0sUUFBUSxzQkFBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixPQUFsQixFQUEyQixPQUEzQixDQUFtQyxNQUFuQyxDQUFkO0FBQ0EsTUFBTSxPQUFPLHNCQUFPLENBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLEtBQXpCLENBQStCLE1BQS9CLENBQWI7QUFDQSxNQUFNLFFBQVEsRUFBZDtBQUNBLE1BQUksT0FBTyxFQUFYO0FBQ0EsT0FBSyxJQUFJLEtBQUssS0FBZCxFQUFxQixHQUFHLFFBQUgsQ0FBWSxJQUFaLENBQXJCLEVBQXdDLEtBQUssR0FBRyxHQUFILENBQU8sQ0FBUCxFQUFVLEdBQVYsQ0FBN0MsRUFBNkQ7QUFDM0QsU0FBSyxJQUFMLENBQVUsRUFBRSxNQUFNLEdBQUcsSUFBSCxFQUFSLEVBQW1CLE9BQU8sR0FBRyxLQUFILEVBQTFCLEVBQXNDLE1BQU0sR0FBRyxJQUFILEVBQTVDLEVBQXVELE9BQU8sR0FBRyxNQUFILENBQVUsWUFBVixDQUE5RCxFQUFWO0FBQ0EsUUFBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGFBQU8sRUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFP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QU0sdUJBQXVCLDBCQUFXLGlCQUFYLEVBQThCLFNBQTlCLENBQTdCO0FBQ0EsYUFDRTtBQUFBO1FBQUEsRUFBSyxXQUFZLG9CQUFqQixFQUF3QyxLQUFJLFlBQTVDLEVBQXlELGVBQWMsS0FBdkU7QUFDRSxrQkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBRFgsRUFDb0MsV0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCO0FBRGhEO1FBR0ksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBSEo7UUFJSSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsRUFBc0IsWUFBdEIsRUFBb0MsS0FBcEM7QUFKSixPQURGO0FBUUQ7OztFQXZNcUMsZ0JBQU0sUzs7a0JBQXpCLFU7OztBQTJNckIsV0FBVyxTQUFYLEdBQXVCO0FBQ3JCLGFBQVcsaUJBQVUsTUFEQTtBQUVyQixnQkFBYyxpQkFBVSxNQUZIO0FBR3JCLGFBQVcsaUJBQVUsSUFIQTtBQUlyQixZQUFVLGlCQUFVLElBSkM7QUFLckIsVUFBUSxpQkFBVSxJQUxHO0FBTXJCLFdBQVMsaUJBQVU7QUFORSxDQUF2QiIsImZpbGUiOiJEYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGlja2xpc3QsIFBpY2tsaXN0SXRlbSB9IGZyb20gJy4vUGlja2xpc3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhck9iamVjdChkYXRlKSB7XG4gIGxldCBkID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XG4gIGlmICghZC5pc1ZhbGlkKCkpIHtcbiAgICBkID0gbW9tZW50KCk7XG4gIH1cbiAgY29uc3QgeWVhciA9IGQueWVhcigpO1xuICBjb25zdCBtb250aCA9IGQubW9udGgoKTtcbiAgY29uc3QgZmlyc3QgPSBtb21lbnQoZCkuc3RhcnRPZignbW9udGgnKS5zdGFydE9mKCd3ZWVrJyk7XG4gIGNvbnN0IGxhc3QgPSBtb21lbnQoZCkuZW5kT2YoJ21vbnRoJykuZW5kT2YoJ3dlZWsnKTtcbiAgY29uc3Qgd2Vla3MgPSBbXTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgZGQgPSBmaXJzdDsgZGQuaXNCZWZvcmUobGFzdCk7IGRkID0gZGQuYWRkKDEsICdkJykpIHtcbiAgICBkYXlzLnB1c2goeyB5ZWFyOiBkZC55ZWFyKCksIG1vbnRoOiBkZC5tb250aCgpLCBkYXRlOiBkZC5kYXRlKCksIHZhbHVlOiBkZC5mb3JtYXQoJ1lZWVktTU0tREQnKSB9KTtcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cyk7XG4gICAgICBkYXlzID0gW107XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCB3ZWVrcyB9O1xufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZXBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlIHx8IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGFyZ2V0RGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzRGF0ZSAmJiAodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKSkge1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNEYXRlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVLZXlEb3duKGRhdGUsIGUpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7IC8vIHJldHVybiAvIHNwYWNlXG4gICAgICB0aGlzLm9uRGF0ZUNsaWNrKGRhdGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSAzNyAmJiBlLmtleUNvZGUgPD0gNDApIHsgLy8gY3Vyc29yIGtleVxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAnbW9udGhzJyA6ICdkYXlzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHsgLy8gcmlnaHQgYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKDEsIGUuc2hpZnRLZXkgPyAnbW9udGhzJyA6ICdkYXlzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKDEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XG4gICAgICB9XG4gICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlLCBmb2N1c0RhdGU6IHRydWUgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUNsaWNrKGRhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVGb2N1cyhkYXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSAhPT0gZGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGU6IGRhdGUgfSk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2hhbmdlKGl0ZW0pIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLnllYXIoaXRlbS52YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XG4gIH1cblxuICBvbk1vbnRoQ2hhbmdlKG1vbnRoKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQobW9udGgsICdtb250aHMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzRGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9udGgpO1xuICAgIGNvbnN0IGRhdGVFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYC5zbGRzLWRheVtkYXRhLWRhdGUtdmFsdWU9XCIke2RhdGV9XCJdYCk7XG4gICAgaWYgKGRhdGVFbCkge1xuICAgICAgZGF0ZUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcihjYWwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyIHNsZHMtZ3JpZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRhdGVwaWNrZXJfX2ZpbHRlci0tbW9udGggc2xkcy1ncmlkIHNsZHMtZ3JpZC0tYWxpZ24tc3ByZWFkIHNsZHMtc2l6ZS0tMi1vZi0zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJyB0eXBlPSdpY29uLWNvbnRhaW5lcicgaWNvbj0nbGVmdCcgc2l6ZT0nc21hbGwnIGFsdD0nUHJldmlvdXMgTW9udGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAtMSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+eyBtb21lbnQubW9udGhzU2hvcnQoKVtjYWwubW9udGhdIH08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnIHR5cGU9J2ljb24tY29udGFpbmVyJyBpY29uPSdyaWdodCcgc2l6ZT0nc21hbGwnIGFsdD0nTmV4dCBNb250aCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIDEpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zaXplLS0xLW9mLTMnPlxuICAgICAgICAgIDxQaWNrbGlzdCBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3QtLWZsdWlkIHNsZHMtc2hyaW5rLW5vbmUnIHZhbHVlPXsgY2FsLnllYXIgfVxuICAgICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uWWVhckNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5ldyBBcnJheSgxMSkuam9pbignXycpLnNwbGl0KCdfJykubWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IGNhbC55ZWFyICsgaSAtIDU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxQaWNrbGlzdEl0ZW0ga2V5PXsgeWVhciB9IGxhYmVsPXsgeWVhciB9IHZhbHVlPXsgeWVhciB9IC8+O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvUGlja2xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlcGlja2VyX19tb250aCcgcm9sZT0nZ3JpZCcgYXJpYS1sYWJlbGxlZGJ5PSdtb250aCcgcmVmPSdtb250aCc+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vbWVudC53ZWVrZGF5c01pbigpLm1hcCgod2QsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17IGkgfT5cbiAgICAgICAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9eyBtb21lbnQud2Vla2RheXMoaSkgfT57IHdkIH08L2FiYnI+XG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhbC53ZWVrcy5tYXAoKGRheXMsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9eyBpIH0+eyBkYXlzLm1hcCh0aGlzLnJlbmRlckRhdGUuYmluZCh0aGlzLCBjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpKSB9PC90cj47XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRhdGUoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5LCBkLCBpKSB7XG4gICAgY29uc3QgZW5hYmxlZCA9IGQueWVhciA9PT0gY2FsLnllYXIgJiYgZC5tb250aCA9PT0gY2FsLm1vbnRoO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZC52YWx1ZSA9PT0gc2VsZWN0ZWREYXRlO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBkLnZhbHVlID09PSB0b2RheTtcbiAgICBjb25zdCBkYXRlQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2xkcy1kaXNhYmxlZC10ZXh0JzogIWVuYWJsZWQsXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgJ3NsZHMtaXMtdG9kYXknOiBpc1RvZGF5LFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dGQgY2xhc3NOYW1lPXsgZGF0ZUNsYXNzTmFtZSB9IGtleT17IGkgfSBoZWFkZXJzPXsgbW9tZW50LndlZWtkYXlzKGkpIH1cbiAgICAgICAgcm9sZT0nZ3JpZGNlbGwnIGFyaWEtZGlzYWJsZWQ9eyAhZW5hYmxlZCB9IGFyaWEtc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1kYXknIHRhYkluZGV4PXsgZW5hYmxlZCA/IDAgOiAtMSB9XG4gICAgICAgICAgb25DbGljaz17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUNsaWNrLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbktleURvd249eyBlbmFibGVkID8gdGhpcy5vbkRhdGVLZXlEb3duLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbkZvY3VzPXsgZW5hYmxlZCA/IHRoaXMub25EYXRlRm9jdXMuYmluZCh0aGlzLCBkLnZhbHVlKSA6IGNhbmNlbEV2ZW50IH1cbiAgICAgICAgICBkYXRhLWRhdGUtdmFsdWU9eyBkLnZhbHVlIH1cbiAgICAgICAgPnsgZC5kYXRlIH08L3NwYW4+XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHNlbGVjdGVkRGF0ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHNlbGVjdGVkRGF0ZTtcbiAgICBjb25zdCBjYWwgPSBjcmVhdGVDYWxlbmRhck9iamVjdCh0YXJnZXREYXRlKTtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtZGF0ZXBpY2tlcicsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfSByZWY9J2RhdGVwaWNrZXInIGFyaWEtaGlkZGVuPXsgZmFsc2UgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH0gb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJGaWx0ZXIoY2FsKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJNb250aChjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5EYXRlcGlja2VyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl19