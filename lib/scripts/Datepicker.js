'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCalendarObject(date, mnDate, mxDate) {
  var minDate = void 0;
  var maxDate = void 0;
  var d = (0, _moment2.default)(date, 'YYYY-MM-DD');
  if (!d.isValid()) {
    d = (0, _moment2.default)((0, _util.getToday)(), 'YYYY-MM-DD');
  }
  if (mnDate) {
    var minD = (0, _moment2.default)(mnDate, 'YYYY-MM-DD');
    if (minD.isValid()) {
      minDate = {
        year: minD.year(),
        month: minD.month(),
        date: minD.date(),
        value: minD.format('YYYY-MM-DD')
      };
    }
  }
  if (mxDate) {
    var maxD = (0, _moment2.default)(mxDate, 'YYYY-MM-DD');
    if (maxD.isValid()) {
      maxDate = {
        year: maxD.year(),
        month: maxD.month(),
        date: maxD.date(),
        value: maxD.format('YYYY-MM-DD')
      };
    }
  }
  var year = d.year();
  var month = d.month();
  var first = (0, _moment2.default)(d).startOf('month').startOf('week');
  var last = (0, _moment2.default)(d).endOf('month').endOf('week');
  var weeks = [];
  var days = [];
  for (var dd = first; dd.isBefore(last); dd = dd.add(1, 'd')) {
    days.push({
      year: dd.year(),
      month: dd.month(),
      date: dd.date(),
      value: dd.format('YYYY-MM-DD')
    });
    if (days.length === 7) {
      weeks.push(days);
      days = [];
    }
  }
  var cal = { year: year, month: month, weeks: weeks };
  if (minDate) {
    cal.minDate = minDate;
  }
  if (maxDate) {
    cal.maxDate = maxDate;
  }
  return cal;
}

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

var Datepicker = function (_Component) {
  (0, _inherits3.default)(Datepicker, _Component);

  function Datepicker() {
    (0, _classCallCheck3.default)(this, Datepicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Datepicker.__proto__ || (0, _getPrototypeOf2.default)(Datepicker)).call(this));

    _this.state = {};

    _this.onBlur = _this.onBlur.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Datepicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoFocus) {
        var targetDate = this.props.selectedDate || (0, _util.getToday)();
        setTimeout(function () {
          _this2.focusDate(targetDate);
        }, 10);
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
      var _this3 = this;

      if (this.state.targetDate !== date) {
        setTimeout(function () {
          _this3.setState({ targetDate: date });
        }, 10);
      }
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange(e, item) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      targetDate = (0, _moment2.default)(targetDate).year(item).format('YYYY-MM-DD');
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
      var _this4 = this;

      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
          if (_this4.props.onBlur) {
            _this4.props.onBlur(e);
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
      var el = this.month;
      if (!el) {
        return;
      }
      var dateEl = el.querySelector('.slds-day[data-date-value="' + date + '"]');
      if (dateEl) {
        dateEl.focus();
      }
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      return (0, _util.isElInChildren)(this.node, document.activeElement);
    }
  }, {
    key: 'renderFilter',
    value: function renderFilter(cal) {
      /* eslint-disable max-len */
      return _react2.default.createElement(
        'div',
        { className: 'slds-datepicker__filter slds-grid' },
        _react2.default.createElement(
          'div',
          { className: 'slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--2-of-3' },
          _react2.default.createElement(
            'div',
            { className: 'slds-align-middle' },
            _react2.default.createElement(_Button2.default, {
              className: 'slds-align-middle',
              type: 'icon-container',
              icon: 'left',
              size: 'small',
              alt: 'Previous Month',
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
            _react2.default.createElement(_Button2.default, {
              className: 'slds-align-middle',
              type: 'icon-container',
              icon: 'right',
              size: 'small',
              alt: 'Next Month',
              onClick: this.onMonthChange.bind(this, 1)
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-size--1-of-3' },
          _react2.default.createElement(
            _Select2.default,
            {
              value: cal.year,
              onChange: this.onYearChange.bind(this)
            },
            new Array(11).join('_').split('_').map(function (a, i) {
              var year = cal.year + i - 5;
              return _react2.default.createElement(_Select.Option, { key: year, label: year, value: year });
            })
          )
        )
      );
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth(cal, selectedDate, today) {
      var _this5 = this;

      return _react2.default.createElement(
        'table',
        {
          className: 'datepicker__month',
          role: 'grid',
          'aria-labelledby': 'month',
          ref: function ref(node) {
            return _this5.month = node;
          }
        },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _moment2.default.weekdaysMin(true).map(function (wd, i) {
              return _react2.default.createElement(
                'th',
                { key: i },
                _react2.default.createElement(
                  'abbr',
                  { title: _moment2.default.weekdays(true, i) },
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
              days.map(_this5.renderDate.bind(_this5, cal, selectedDate, today))
            );
          })
        )
      );
    }
  }, {
    key: 'renderDate',
    value: function renderDate(cal, selectedDate, today, d, i) {
      var selectable = true;
      var enabled = d.year === cal.year && d.month === cal.month;
      if (cal.minDate) {
        var min = (0, _moment2.default)(d.value, 'YYYY-MM-DD').isAfter((0, _moment2.default)(cal.minDate.value, 'YYYY-MM-DD'));
        selectable = selectable && min;
        enabled = enabled && min;
      }
      if (cal.maxDate) {
        var max = (0, _moment2.default)(d.value, 'YYYY-MM-DD').isBefore((0, _moment2.default)(cal.maxDate.value, 'YYYY-MM-DD'));
        selectable = selectable && max;
        enabled = enabled && max;
      }
      var selected = d.value === selectedDate;
      var isToday = d.value === today;
      var dateClassName = (0, _classnames2.default)({
        'slds-disabled-text': !enabled,
        'slds-is-selected': selected,
        'slds-is-today': isToday
      });
      return _react2.default.createElement(
        'td',
        {
          className: dateClassName,
          key: i,
          headers: _moment2.default.weekdays(i),
          role: 'gridcell',
          'aria-disabled': !enabled,
          'aria-selected': selected
        },
        _react2.default.createElement(
          'span',
          {
            className: 'slds-day',
            tabIndex: selectable ? 0 : -1,
            onClick: selectable ? this.onDateClick.bind(this, d.value) : null,
            onKeyDown: selectable ? this.onDateKeyDown.bind(this, d.value) : null,
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
      var _this6 = this;

      var _props = this.props,
          className = _props.className,
          selectedDate = _props.selectedDate,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          elementRef = _props.elementRef,
          ExtensionRenderer = _props.extensionRenderer;

      var today = (0, _util.getToday)();
      var targetDate = this.state.targetDate || selectedDate;
      var cal = createCalendarObject(targetDate, minDate, maxDate);
      var datepickerClassNames = (0, _classnames2.default)('slds-datepicker', className);
      var handleDOMRef = function handleDOMRef(node) {
        _this6.node = node;
        if (elementRef) {
          elementRef(node);
        }
      };
      return _react2.default.createElement(
        'div',
        {
          className: datepickerClassNames,
          ref: handleDOMRef,
          tabIndex: -1,
          'aria-hidden': false,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown
        },
        this.renderFilter(cal),
        this.renderMonth(cal, selectedDate, today),
        ExtensionRenderer ? _react2.default.createElement(ExtensionRenderer, this.props) : undefined
      );
    }
  }]);
  return Datepicker;
}(_react.Component);

exports.default = Datepicker;


Datepicker.propTypes = {
  className: _propTypes2.default.string,
  selectedDate: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  extensionRenderer: _propTypes2.default.func,
  elementRef: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwidGFyZ2V0RGF0ZSIsInNlbGVjdGVkRGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c0RhdGUiLCJzZXRTdGF0ZSIsImtleUNvZGUiLCJvbkRhdGVDbGljayIsInNoaWZ0S2V5Iiwib25TZWxlY3QiLCJpdGVtIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkNsb3NlIiwiZWwiLCJkYXRlRWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJub2RlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwib25Nb250aENoYW5nZSIsIm1vbWVudCIsIm1vbnRoc1Nob3J0Iiwib25ZZWFyQ2hhbmdlIiwiQXJyYXkiLCJqb2luIiwic3BsaXQiLCJtYXAiLCJhIiwiaSIsInRvZGF5Iiwid2Vla2RheXNNaW4iLCJ3ZCIsIndlZWtkYXlzIiwicmVuZGVyRGF0ZSIsInNlbGVjdGFibGUiLCJlbmFibGVkIiwibWluIiwiaXNBZnRlciIsIm1heCIsInNlbGVjdGVkIiwiaXNUb2RheSIsImRhdGVDbGFzc05hbWUiLCJvbkRhdGVLZXlEb3duIiwib25EYXRlRm9jdXMiLCJjbGFzc05hbWUiLCJlbGVtZW50UmVmIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJleHRlbnNpb25SZW5kZXJlciIsImRhdGVwaWNrZXJDbGFzc05hbWVzIiwiaGFuZGxlRE9NUmVmIiwicmVuZGVyRmlsdGVyIiwicmVuZGVyTW9udGgiLCJ1bmRlZmluZWQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFNBQVNBLG9CQUFULENBQThCQyxJQUE5QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EO0FBQ2xELE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxJQUFJLHNCQUFPTCxJQUFQLEVBQWEsWUFBYixDQUFSO0FBQ0EsTUFBSSxDQUFDSyxFQUFFQyxPQUFGLEVBQUwsRUFBa0I7QUFDaEJELFFBQUksc0JBQU8scUJBQVAsRUFBbUIsWUFBbkIsQ0FBSjtBQUNEO0FBQ0QsTUFBSUosTUFBSixFQUFZO0FBQ1YsUUFBTU0sT0FBTyxzQkFBT04sTUFBUCxFQUFlLFlBQWYsQ0FBYjtBQUNBLFFBQUlNLEtBQUtELE9BQUwsRUFBSixFQUFvQjtBQUNsQkgsZ0JBQVU7QUFDUkssY0FBTUQsS0FBS0MsSUFBTCxFQURFO0FBRVJDLGVBQU9GLEtBQUtFLEtBQUwsRUFGQztBQUdSVCxjQUFNTyxLQUFLUCxJQUFMLEVBSEU7QUFJUlUsZUFBT0gsS0FBS0ksTUFBTCxDQUFZLFlBQVo7QUFKQyxPQUFWO0FBTUQ7QUFDRjtBQUNELE1BQUlULE1BQUosRUFBWTtBQUNWLFFBQU1VLE9BQU8sc0JBQU9WLE1BQVAsRUFBZSxZQUFmLENBQWI7QUFDQSxRQUFJVSxLQUFLTixPQUFMLEVBQUosRUFBb0I7QUFDbEJGLGdCQUFVO0FBQ1JJLGNBQU1JLEtBQUtKLElBQUwsRUFERTtBQUVSQyxl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UTRELG9CQUFVRyxJQVRHO0FBVXJCL0MsV0FBUzRDLG9CQUFVRztBQVZFLENBQXZCIiwiZmlsZSI6IkRhdGVwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgU2VsZWN0LCB7IE9wdGlvbiB9IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCB7IGdldFRvZGF5LCBpc0VsSW5DaGlsZHJlbiB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyT2JqZWN0KGRhdGUsIG1uRGF0ZSwgbXhEYXRlKSB7XG4gIGxldCBtaW5EYXRlO1xuICBsZXQgbWF4RGF0ZTtcbiAgbGV0IGQgPSBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgaWYgKCFkLmlzVmFsaWQoKSkge1xuICAgIGQgPSBtb21lbnQoZ2V0VG9kYXkoKSwgJ1lZWVktTU0tREQnKTtcbiAgfVxuICBpZiAobW5EYXRlKSB7XG4gICAgY29uc3QgbWluRCA9IG1vbWVudChtbkRhdGUsICdZWVlZLU1NLUREJyk7XG4gICAgaWYgKG1pbkQuaXNWYWxpZCgpKSB7XG4gICAgICBtaW5EYXRlID0ge1xuICAgICAgICB5ZWFyOiBtaW5ELnllYXIoKSxcbiAgICAgICAgbW9udGg6IG1pbkQubW9udGgoKSxcbiAgICAgICAgZGF0ZTogbWluRC5kYXRlKCksXG4gICAgICAgIHZhbHVlOiBtaW5ELmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKG14RGF0ZSkge1xuICAgIGNvbnN0IG1heEQgPSBtb21lbnQobXhEYXRlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGlmIChtYXhELmlzVmFsaWQoKSkge1xuICAgICAgbWF4RGF0ZSA9IHtcbiAgICAgICAgeWVhcjogbWF4RC55ZWFyKCksXG4gICAgICAgIG1vbnRoOiBtYXhELm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG1heEQuZGF0ZSgpLFxuICAgICAgICB2YWx1ZTogbWF4RC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGNvbnN0IHllYXIgPSBkLnllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkLm1vbnRoKCk7XG4gIGNvbnN0IGZpcnN0ID0gbW9tZW50KGQpLnN0YXJ0T2YoJ21vbnRoJykuc3RhcnRPZignd2VlaycpO1xuICBjb25zdCBsYXN0ID0gbW9tZW50KGQpLmVuZE9mKCdtb250aCcpLmVuZE9mKCd3ZWVrJyk7XG4gIGNvbnN0IHdlZWtzID0gW107XG4gIGxldCBkYXlzID0gW107XG4gIGZvciAobGV0IGRkID0gZmlyc3Q7IGRkLmlzQmVmb3JlKGxhc3QpOyBkZCA9IGRkLmFkZCgxLCAnZCcpKSB7XG4gICAgZGF5cy5wdXNoKHtcbiAgICAgIHllYXI6IGRkLnllYXIoKSxcbiAgICAgIG1vbnRoOiBkZC5tb250aCgpLFxuICAgICAgZGF0ZTogZGQuZGF0ZSgpLFxuICAgICAgdmFsdWU6IGRkLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgIH0pO1xuICAgIGlmIChkYXlzLmxlbmd0aCA9PT0gNykge1xuICAgICAgd2Vla3MucHVzaChkYXlzKTtcbiAgICAgIGRheXMgPSBbXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY2FsID0geyB5ZWFyLCBtb250aCwgd2Vla3MgfTtcbiAgaWYgKG1pbkRhdGUpIHtcbiAgICBjYWwubWluRGF0ZSA9IG1pbkRhdGU7XG4gIH1cbiAgaWYgKG1heERhdGUpIHtcbiAgICBjYWwubWF4RGF0ZSA9IG1heERhdGU7XG4gIH1cbiAgcmV0dXJuIGNhbDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRXZlbnQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVwaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldERhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSB8fCBnZXRUb2RheSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXNEYXRlKHRhcmdldERhdGUpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c0RhdGUgJiYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRGF0ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlS2V5RG93bihkYXRlLCBlKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gLyBzcGFjZVxuICAgICAgdGhpcy5vbkRhdGVDbGljayhkYXRlKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB7IC8vIGN1cnNvciBrZXlcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7IC8vIHJpZ2h0IGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgtMSwgZS5zaGlmdEtleSA/ICd5ZWFycycgOiAnd2Vla3MnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSwgZm9jdXNEYXRlOiB0cnVlIH0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVDbGljayhkYXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlRm9jdXMoZGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnRhcmdldERhdGUgIT09IGRhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZTogZGF0ZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvblllYXJDaGFuZ2UoZSwgaXRlbSkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkueWVhcihpdGVtKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uTW9udGhDaGFuZ2UobW9udGgpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZChtb250aCwgJ21vbnRocycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlIH0pO1xuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXNEYXRlKGRhdGUpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubW9udGg7XG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBkYXRlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKGAuc2xkcy1kYXlbZGF0YS1kYXRlLXZhbHVlPVwiJHtkYXRlfVwiXWApO1xuICAgIGlmIChkYXRlRWwpIHtcbiAgICAgIGRhdGVFbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVyRmlsdGVyKGNhbCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyIHNsZHMtZ3JpZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRhdGVwaWNrZXJfX2ZpbHRlci0tbW9udGggc2xkcy1ncmlkIHNsZHMtZ3JpZC0tYWxpZ24tc3ByZWFkIHNsZHMtc2l6ZS0tMi1vZi0zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgaWNvbj0nbGVmdCdcbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgIGFsdD0nUHJldmlvdXMgTW9udGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAtMSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+eyBtb21lbnQubW9udGhzU2hvcnQoKVtjYWwubW9udGhdIH08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnXG4gICAgICAgICAgICAgIHR5cGU9J2ljb24tY29udGFpbmVyJ1xuICAgICAgICAgICAgICBpY29uPSdyaWdodCdcbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgIGFsdD0nTmV4dCBNb250aCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIDEpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zaXplLS0xLW9mLTMnPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXsgY2FsLnllYXIgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uWWVhckNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5ldyBBcnJheSgxMSkuam9pbignXycpLnNwbGl0KCdfJylcbiAgICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gKGNhbC55ZWFyICsgaSkgLSA1O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24ga2V5PXsgeWVhciB9IGxhYmVsPXsgeWVhciB9IHZhbHVlPXsgeWVhciB9IC8+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGVcbiAgICAgICAgY2xhc3NOYW1lPSdkYXRlcGlja2VyX19tb250aCdcbiAgICAgICAgcm9sZT0nZ3JpZCdcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdtb250aCdcbiAgICAgICAgcmVmPXtub2RlID0+ICh0aGlzLm1vbnRoID0gbm9kZSl9XG4gICAgICA+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vbWVudC53ZWVrZGF5c01pbih0cnVlKS5tYXAoKHdkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIGtleT17IGkgfT5cbiAgICAgICAgICAgICAgICAgIDxhYmJyIHRpdGxlPXsgbW9tZW50LndlZWtkYXlzKHRydWUsIGkpIH0+eyB3ZCB9PC9hYmJyPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhbC53ZWVrcy5tYXAoKGRheXMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17IGkgfT57IGRheXMubWFwKHRoaXMucmVuZGVyRGF0ZS5iaW5kKHRoaXMsIGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkpIH08L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEYXRlKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSwgZCwgaSkge1xuICAgIGxldCBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICBsZXQgZW5hYmxlZCA9IGQueWVhciA9PT0gY2FsLnllYXIgJiYgZC5tb250aCA9PT0gY2FsLm1vbnRoO1xuICAgIGlmIChjYWwubWluRGF0ZSkge1xuICAgICAgY29uc3QgbWluID0gbW9tZW50KGQudmFsdWUsICdZWVlZLU1NLUREJylcbiAgICAgICAgLmlzQWZ0ZXIobW9tZW50KGNhbC5taW5EYXRlLnZhbHVlLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgIHNlbGVjdGFibGUgPSBzZWxlY3RhYmxlICYmIG1pbjtcbiAgICAgIGVuYWJsZWQgPSBlbmFibGVkICYmIG1pbjtcbiAgICB9XG4gICAgaWYgKGNhbC5tYXhEYXRlKSB7XG4gICAgICBjb25zdCBtYXggPSBtb21lbnQoZC52YWx1ZSwgJ1lZWVktTU0tREQnKVxuICAgICAgICAuaXNCZWZvcmUobW9tZW50KGNhbC5tYXhEYXRlLnZhbHVlLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgIHNlbGVjdGFibGUgPSBzZWxlY3RhYmxlICYmIG1heDtcbiAgICAgIGVuYWJsZWQgPSBlbmFibGVkICYmIG1heDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkLnZhbHVlID09PSBzZWxlY3RlZERhdGU7XG4gICAgY29uc3QgaXNUb2RheSA9IGQudmFsdWUgPT09IHRvZGF5O1xuICAgIGNvbnN0IGRhdGVDbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzbGRzLWRpc2FibGVkLXRleHQnOiAhZW5hYmxlZCxcbiAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAnc2xkcy1pcy10b2RheSc6IGlzVG9kYXksXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZFxuICAgICAgICBjbGFzc05hbWU9eyBkYXRlQ2xhc3NOYW1lIH1cbiAgICAgICAga2V5PXsgaSB9XG4gICAgICAgIGhlYWRlcnM9eyBtb21lbnQud2Vla2RheXMoaSkgfVxuICAgICAgICByb2xlPSdncmlkY2VsbCdcbiAgICAgICAgYXJpYS1kaXNhYmxlZD17ICFlbmFibGVkIH1cbiAgICAgICAgYXJpYS1zZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZGF5J1xuICAgICAgICAgIHRhYkluZGV4PXsgc2VsZWN0YWJsZSA/IDAgOiAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHNlbGVjdGFibGUgPyB0aGlzLm9uRGF0ZUNsaWNrLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbktleURvd249eyBzZWxlY3RhYmxlID8gdGhpcy5vbkRhdGVLZXlEb3duLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbkZvY3VzPXsgZW5hYmxlZCA/IHRoaXMub25EYXRlRm9jdXMuYmluZCh0aGlzLCBkLnZhbHVlKSA6IGNhbmNlbEV2ZW50IH1cbiAgICAgICAgICBkYXRhLWRhdGUtdmFsdWU9eyBkLnZhbHVlIH1cbiAgICAgICAgPnsgZC5kYXRlIH08L3NwYW4+XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBzZWxlY3RlZERhdGUsIG1pbkRhdGUsIG1heERhdGUsXG4gICAgICBlbGVtZW50UmVmLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI6IEV4dGVuc2lvblJlbmRlcmVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXkoKTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHNlbGVjdGVkRGF0ZTtcbiAgICBjb25zdCBjYWwgPSBjcmVhdGVDYWxlbmRhck9iamVjdCh0YXJnZXREYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtZGF0ZXBpY2tlcicsIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgaGFuZGxlRE9NUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICBpZiAoZWxlbWVudFJlZikgeyBlbGVtZW50UmVmKG5vZGUpOyB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgIHJlZj17IGhhbmRsZURPTVJlZiB9XG4gICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICBhcmlhLWhpZGRlbj17IGZhbHNlIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93biB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJGaWx0ZXIoY2FsKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJNb250aChjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpIH1cbiAgICAgICAge1xuICAgICAgICAgIEV4dGVuc2lvblJlbmRlcmVyID9cbiAgICAgICAgICAgIDxFeHRlbnNpb25SZW5kZXJlciB7IC4uLnRoaXMucHJvcHMgfSAvPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbkRhdGVwaWNrZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICBlbGVtZW50UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=