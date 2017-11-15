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
      if (this.props.autoFocus) {
        var targetDate = this.props.selectedDate || (0, _util.getToday)();
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
      console.log('onDateClick', date);
      if (this.props.onSelect) {
        this.props.onSelect(date);
      }
    }
  }, {
    key: 'onDateFocus',
    value: function onDateFocus(date) {
      var _this2 = this;

      if (this.state.targetDate !== date) {
        setTimeout(function () {
          console.log('onDateFocus=>', date);
          _this2.setState({ targetDate: date });
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
      var _this3 = this;

      setTimeout(function () {
        if (!_this3.isFocusedInComponent()) {
          if (_this3.props.onBlur) {
            _this3.props.onBlur(e);
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
      var dateEl = el.querySelector('.slds-day[data-date-value="' + date + '"]');
      if (dateEl) {
        dateEl.focus();
      }
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = this.node;
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
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
      var _this4 = this;

      return _react2.default.createElement(
        'table',
        {
          className: 'datepicker__month',
          role: 'grid',
          'aria-labelledby': 'month',
          ref: function ref(node) {
            return _this4.month = node;
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
              days.map(_this4.renderDate.bind(_this4, cal, selectedDate, today))
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
      var _this5 = this;

      var _props = this.props,
          className = _props.className,
          selectedDate = _props.selectedDate,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          ExtensionRenderer = _props.extensionRenderer;

      var today = (0, _util.getToday)();
      var targetDate = this.state.targetDate || selectedDate;
      var cal = createCalendarObject(targetDate, minDate, maxDate);
      var datepickerClassNames = (0, _classnames2.default)('slds-datepicker', className);
      return _react2.default.createElement(
        'div',
        {
          className: datepickerClassNames,
          ref: function ref(node) {
            return _this5.node = node;
          },
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
  className: _react.PropTypes.string,
  selectedDate: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onClose: _react.PropTypes.func,
  minDate: _react.PropTypes.string,
  maxDate: _react.PropTypes.string,
  extensionRenderer: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwidGFyZ2V0RGF0ZSIsInNlbGVjdGVkRGF0ZSIsImZvY3VzRGF0ZSIsInNldFN0YXRlIiwia2V5Q29kZSIsIm9uRGF0ZUNsaWNrIiwic2hpZnRLZXkiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3QiLCJzZXRUaW1lb3V0IiwiaXRlbSIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25DbG9zZSIsImVsIiwiZGF0ZUVsIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwicm9vdEVsIiwibm9kZSIsInRhcmdldEVsIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50Tm9kZSIsIm9uTW9udGhDaGFuZ2UiLCJtb250aHNTaG9ydCIsIm9uWWVhckNoYW5nZSIsIkFycmF5Iiwiam9pbiIsInNwbGl0IiwibWFwIiwiYSIsImkiLCJ0b2RheSIsIndlZWtkYXlzTWluIiwid2QiLCJ3ZWVrZGF5cyIsInJlbmRlckRhdGUiLCJzZWxlY3RhYmxlIiwiZW5hYmxlZCIsIm1pbiIsImlzQWZ0ZXIiLCJtYXgiLCJzZWxlY3RlZCIsImlzVG9kYXkiLCJkYXRlQ2xhc3NOYW1lIiwib25EYXRlS2V5RG93biIsIm9uRGF0ZUZvY3VzIiwiY2xhc3NOYW1lIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJleHRlbnNpb25SZW5kZXJlciIsImRhdGVwaWNrZXJDbGFzc05hbWVzIiwicmVuZGVyRmlsdGVyIiwicmVuZGVyTW9udGgiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxvQkFBVCxDQUE4QkMsSUFBOUIsRUFBb0NDLE1BQXBDLEVBQTRDQyxNQUE1QyxFQUFvRDtBQUNsRCxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsSUFBSSxzQkFBT0wsSUFBUCxFQUFhLFlBQWIsQ0FBUjtBQUNBLE1BQUksQ0FBQ0ssRUFBRUMsT0FBRixFQUFMLEVBQWtCO0FBQ2hCRCxRQUFJLHNCQUFPLHFCQUFQLEVBQW1CLFlBQW5CLENBQUo7QUFDRDtBQUNELE1BQUlKLE1BQUosRUFBWTtBQUNWLFFBQU1NLE9BQU8sc0JBQU9OLE1BQVAsRUFBZSxZQUFmLENBQWI7QUFDQSxRQUFJTSxLQUFLRCxPQUFMLEVBQUosRUFBb0I7QUFDbEJILGdCQUFVO0FBQ1JLLGNBQU1ELEtBQUtDLElBQUwsRUFERTtBQUVSQyxlQUFPRixLQUFLRSxLQUFMLEVBRkM7QUFHUlQsY0FBTU8sS0FBS1AsSUFBTCxFQUhFO0FBSVJVLGVBQU9ILEtBQUtJLE1BQUwsQ0FBWSxZQUFaO0FBSkMsT0FBVjtBQU1EO0FBQ0Y7QUFDRCxNQUFJVCxNQUFKLEVBQVk7QUFDVixRQUFNVSxPQUFPLHNCQUFPVixNQUFQLEVBQWUsWUFBZixDQUFiO0FBQ0EsUUFBSVUsS0FBS04sT0FBTCxFQUFKLEVBQW9CO0FBQ2xCRixnQkFBVTtBQUNSSSxjQUFNSSxLQUFLSixJQUFMLEVBREU7QUFFUkMsZUFBT0csS0FBS0gsS0FBTCxFQUZD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QixRQUFRLHFCQUFkO0FBQ0EsVUFBTWpDLGFBQWEsS0FBS04sS0FBTCxDQUFXTSxVQUFYLElBQXlCQyxZQUE1QztBQUNBLFVBQU1iLE1BQU16QixxQkFBcUJxQyxVQUFyQixFQUFpQ2pDLE9BQWpDLEVBQTBDQyxPQUExQyxDQUFaO0FBQ0EsVUFBTW1GLHVCQUF1QiwwQkFBVyxpQkFBWCxFQUE4QkgsU0FBOUIsQ0FBN0I7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFZRyxvQkFEZDtBQUVFLGVBQUs7QUFBQSxtQkFBUyxPQUFLaEMsSUFBTCxHQUFZQSxJQUFyQjtBQUFBLFdBRlA7QUFHRSxvQkFBVyxDQUFDLENBSGQ7QUFJRSx5QkFBYyxLQUpoQjtBQUtFLGtCQUFTLEtBQUt4QixNQUxoQjtBQU1FLHFCQUFZLEtBQUtFO0FBTm5CO0FBUUksYUFBS3VELFlBQUwsQ0FBa0JoRSxHQUFsQixDQVJKO0FBU0ksYUFBS2lFLFdBQUwsQ0FBaUJqRSxHQUFqQixFQUFzQmEsWUFBdEIsRUFBb0NnQyxLQUFwQyxDQVRKO0FBV0lnQiw0QkFDRSw4QkFBQyxpQkFBRCxFQUF3QixLQUFLbkQsS0FBN0IsQ0FERixHQUVFd0Q7QUFiTixPQURGO0FBa0JEOzs7OztrQkEvUGtCN0QsVTs7O0FBbVFyQkEsV0FBVzhELFNBQVgsR0FBdUI7QUFDckJQLGFBQVcsaUJBQVVRLE1BREE7QUFFckJ2RCxnQkFBYyxpQkFBVXVELE1BRkg7QUFHckJ6RCxhQUFXLGlCQUFVMEQsSUFIQTtBQUlyQmhELFlBQVUsaUJBQVVpRCxJQUpDO0FBS3JCL0QsVUFBUSxpQkFBVStELElBTEc7QUFNckI3QyxXQUFTLGlCQUFVNkMsSUFORTtBQU9yQjNGLFdBQVMsaUJBQVV5RixNQVBFO0FBUXJCeEYsV0FBUyxpQkFBVXdGLE1BUkU7QUFTckJOLHFCQUFtQixpQkFBVVE7QUFUUixDQUF2QiIsImZpbGUiOiJEYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcywgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTZWxlY3QsIHsgT3B0aW9uIH0gZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IHsgZ2V0VG9kYXkgfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhck9iamVjdChkYXRlLCBtbkRhdGUsIG14RGF0ZSkge1xuICBsZXQgbWluRGF0ZTtcbiAgbGV0IG1heERhdGU7XG4gIGxldCBkID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XG4gIGlmICghZC5pc1ZhbGlkKCkpIHtcbiAgICBkID0gbW9tZW50KGdldFRvZGF5KCksICdZWVlZLU1NLUREJyk7XG4gIH1cbiAgaWYgKG1uRGF0ZSkge1xuICAgIGNvbnN0IG1pbkQgPSBtb21lbnQobW5EYXRlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGlmIChtaW5ELmlzVmFsaWQoKSkge1xuICAgICAgbWluRGF0ZSA9IHtcbiAgICAgICAgeWVhcjogbWluRC55ZWFyKCksXG4gICAgICAgIG1vbnRoOiBtaW5ELm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG1pbkQuZGF0ZSgpLFxuICAgICAgICB2YWx1ZTogbWluRC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmIChteERhdGUpIHtcbiAgICBjb25zdCBtYXhEID0gbW9tZW50KG14RGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBpZiAobWF4RC5pc1ZhbGlkKCkpIHtcbiAgICAgIG1heERhdGUgPSB7XG4gICAgICAgIHllYXI6IG1heEQueWVhcigpLFxuICAgICAgICBtb250aDogbWF4RC5tb250aCgpLFxuICAgICAgICBkYXRlOiBtYXhELmRhdGUoKSxcbiAgICAgICAgdmFsdWU6IG1heEQuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB5ZWFyID0gZC55ZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZC5tb250aCgpO1xuICBjb25zdCBmaXJzdCA9IG1vbWVudChkKS5zdGFydE9mKCdtb250aCcpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgY29uc3QgbGFzdCA9IG1vbWVudChkKS5lbmRPZignbW9udGgnKS5lbmRPZignd2VlaycpO1xuICBjb25zdCB3ZWVrcyA9IFtdO1xuICBsZXQgZGF5cyA9IFtdO1xuICBmb3IgKGxldCBkZCA9IGZpcnN0OyBkZC5pc0JlZm9yZShsYXN0KTsgZGQgPSBkZC5hZGQoMSwgJ2QnKSkge1xuICAgIGRheXMucHVzaCh7XG4gICAgICB5ZWFyOiBkZC55ZWFyKCksXG4gICAgICBtb250aDogZGQubW9udGgoKSxcbiAgICAgIGRhdGU6IGRkLmRhdGUoKSxcbiAgICAgIHZhbHVlOiBkZC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICB9KTtcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cyk7XG4gICAgICBkYXlzID0gW107XG4gICAgfVxuICB9XG4gIGNvbnN0IGNhbCA9IHsgeWVhciwgbW9udGgsIHdlZWtzIH07XG4gIGlmIChtaW5EYXRlKSB7XG4gICAgY2FsLm1pbkRhdGUgPSBtaW5EYXRlO1xuICB9XG4gIGlmIChtYXhEYXRlKSB7XG4gICAgY2FsLm1heERhdGUgPSBtYXhEYXRlO1xuICB9XG4gIHJldHVybiBjYWw7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUgfHwgZ2V0VG9kYXkoKTtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRhcmdldERhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c0RhdGUgJiYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRGF0ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlS2V5RG93bihkYXRlLCBlKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gLyBzcGFjZVxuICAgICAgdGhpcy5vbkRhdGVDbGljayhkYXRlKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB7IC8vIGN1cnNvciBrZXlcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7IC8vIHJpZ2h0IGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgtMSwgZS5zaGlmdEtleSA/ICd5ZWFycycgOiAnd2Vla3MnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93IGtleVxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSwgZm9jdXNEYXRlOiB0cnVlIH0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVDbGljayhkYXRlKSB7XG4gICAgY29uc29sZS5sb2coJ29uRGF0ZUNsaWNrJywgZGF0ZSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlRm9jdXMoZGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnRhcmdldERhdGUgIT09IGRhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnb25EYXRlRm9jdXM9PicsIGRhdGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZTogZGF0ZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvblllYXJDaGFuZ2UoZSwgaXRlbSkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkueWVhcihpdGVtKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uTW9udGhDaGFuZ2UobW9udGgpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZChtb250aCwgJ21vbnRocycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlIH0pO1xuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXNEYXRlKGRhdGUpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubW9udGg7XG4gICAgY29uc3QgZGF0ZUVsID0gZWwucXVlcnlTZWxlY3RvcihgLnNsZHMtZGF5W2RhdGEtZGF0ZS12YWx1ZT1cIiR7ZGF0ZX1cIl1gKTtcbiAgICBpZiAoZGF0ZUVsKSB7XG4gICAgICBkYXRlRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcihjYWwpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRhdGVwaWNrZXJfX2ZpbHRlciBzbGRzLWdyaWQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXItLW1vbnRoIHNsZHMtZ3JpZCBzbGRzLWdyaWQtLWFsaWduLXNwcmVhZCBzbGRzLXNpemUtLTItb2YtMyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdHlwZT0naWNvbi1jb250YWluZXInXG4gICAgICAgICAgICAgIGljb249J2xlZnQnXG4gICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBhbHQ9J1ByZXZpb3VzIE1vbnRoJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgLTEpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPnsgbW9tZW50Lm1vbnRoc1Nob3J0KClbY2FsLm1vbnRoXSB9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgaWNvbj0ncmlnaHQnXG4gICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBhbHQ9J05leHQgTW9udGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAxKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtc2l6ZS0tMS1vZi0zJz5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17IGNhbC55ZWFyIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vblllYXJDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuZXcgQXJyYXkoMTEpLmpvaW4oJ18nKS5zcGxpdCgnXycpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IChjYWwueWVhciArIGkpIC0gNTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIGtleT17IHllYXIgfSBsYWJlbD17IHllYXIgfSB2YWx1ZT17IHllYXIgfSAvPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb250aChjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlXG4gICAgICAgIGNsYXNzTmFtZT0nZGF0ZXBpY2tlcl9fbW9udGgnXG4gICAgICAgIHJvbGU9J2dyaWQnXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT0nbW9udGgnXG4gICAgICAgIHJlZj17bm9kZSA9PiAodGhpcy5tb250aCA9IG5vZGUpfVxuICAgICAgPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb21lbnQud2Vla2RheXNNaW4odHJ1ZSkubWFwKCh3ZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDx0aCBrZXk9eyBpIH0+XG4gICAgICAgICAgICAgICAgICA8YWJiciB0aXRsZT17IG1vbWVudC53ZWVrZGF5cyh0cnVlLCBpKSB9Pnsgd2QgfTwvYWJicj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYWwud2Vla3MubWFwKChkYXlzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9eyBpIH0+eyBkYXlzLm1hcCh0aGlzLnJlbmRlckRhdGUuYmluZCh0aGlzLCBjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpKSB9PC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRGF0ZShjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXksIGQsIGkpIHtcbiAgICBsZXQgc2VsZWN0YWJsZSA9IHRydWU7XG4gICAgbGV0IGVuYWJsZWQgPSBkLnllYXIgPT09IGNhbC55ZWFyICYmIGQubW9udGggPT09IGNhbC5tb250aDtcbiAgICBpZiAoY2FsLm1pbkRhdGUpIHtcbiAgICAgIGNvbnN0IG1pbiA9IG1vbWVudChkLnZhbHVlLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIC5pc0FmdGVyKG1vbWVudChjYWwubWluRGF0ZS52YWx1ZSwgJ1lZWVktTU0tREQnKSk7XG4gICAgICBzZWxlY3RhYmxlID0gc2VsZWN0YWJsZSAmJiBtaW47XG4gICAgICBlbmFibGVkID0gZW5hYmxlZCAmJiBtaW47XG4gICAgfVxuICAgIGlmIChjYWwubWF4RGF0ZSkge1xuICAgICAgY29uc3QgbWF4ID0gbW9tZW50KGQudmFsdWUsICdZWVlZLU1NLUREJylcbiAgICAgICAgLmlzQmVmb3JlKG1vbWVudChjYWwubWF4RGF0ZS52YWx1ZSwgJ1lZWVktTU0tREQnKSk7XG4gICAgICBzZWxlY3RhYmxlID0gc2VsZWN0YWJsZSAmJiBtYXg7XG4gICAgICBlbmFibGVkID0gZW5hYmxlZCAmJiBtYXg7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkID0gZC52YWx1ZSA9PT0gc2VsZWN0ZWREYXRlO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBkLnZhbHVlID09PSB0b2RheTtcbiAgICBjb25zdCBkYXRlQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2xkcy1kaXNhYmxlZC10ZXh0JzogIWVuYWJsZWQsXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgJ3NsZHMtaXMtdG9kYXknOiBpc1RvZGF5LFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dGRcbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZUNsYXNzTmFtZSB9XG4gICAgICAgIGtleT17IGkgfVxuICAgICAgICBoZWFkZXJzPXsgbW9tZW50LndlZWtkYXlzKGkpIH1cbiAgICAgICAgcm9sZT0nZ3JpZGNlbGwnXG4gICAgICAgIGFyaWEtZGlzYWJsZWQ9eyAhZW5hYmxlZCB9XG4gICAgICAgIGFyaWEtc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWRheSdcbiAgICAgICAgICB0YWJJbmRleD17IHNlbGVjdGFibGUgPyAwIDogLTEgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBzZWxlY3RhYmxlID8gdGhpcy5vbkRhdGVDbGljay5iaW5kKHRoaXMsIGQudmFsdWUpIDogbnVsbCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgc2VsZWN0YWJsZSA/IHRoaXMub25EYXRlS2V5RG93bi5iaW5kKHRoaXMsIGQudmFsdWUpIDogbnVsbCB9XG4gICAgICAgICAgb25Gb2N1cz17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUZvY3VzLmJpbmQodGhpcywgZC52YWx1ZSkgOiBjYW5jZWxFdmVudCB9XG4gICAgICAgICAgZGF0YS1kYXRlLXZhbHVlPXsgZC52YWx1ZSB9XG4gICAgICAgID57IGQuZGF0ZSB9PC9zcGFuPlxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgc2VsZWN0ZWREYXRlLCBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI6IEV4dGVuc2lvblJlbmRlcmVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZGF5ID0gZ2V0VG9kYXkoKTtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHNlbGVjdGVkRGF0ZTtcbiAgICBjb25zdCBjYWwgPSBjcmVhdGVDYWxlbmRhck9iamVjdCh0YXJnZXREYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgICBjb25zdCBkYXRlcGlja2VyQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtZGF0ZXBpY2tlcicsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICByZWY9e25vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpfVxuICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgYXJpYS1oaWRkZW49eyBmYWxzZSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVyRmlsdGVyKGNhbCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB9XG4gICAgICAgIHtcbiAgICAgICAgICBFeHRlbnNpb25SZW5kZXJlciA/XG4gICAgICAgICAgICA8RXh0ZW5zaW9uUmVuZGVyZXIgeyAuLi50aGlzLnByb3BzIH0gLz4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5EYXRlcGlja2VyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=