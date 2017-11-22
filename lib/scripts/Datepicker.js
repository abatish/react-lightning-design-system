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
  className: _propTypes2.default.string,
  selectedDate: _propTypes2.default.string,
  autoFocus: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  minDate: _propTypes2.default.string,
  maxDate: _propTypes2.default.string,
  extensionRenderer: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwidGFyZ2V0RGF0ZSIsInNlbGVjdGVkRGF0ZSIsImZvY3VzRGF0ZSIsInNldFN0YXRlIiwia2V5Q29kZSIsIm9uRGF0ZUNsaWNrIiwic2hpZnRLZXkiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3QiLCJzZXRUaW1lb3V0IiwiaXRlbSIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25DbG9zZSIsImVsIiwiZGF0ZUVsIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwicm9vdEVsIiwibm9kZSIsInRhcmdldEVsIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50Tm9kZSIsIm9uTW9udGhDaGFuZ2UiLCJtb250aHNTaG9ydCIsIm9uWWVhckNoYW5nZSIsIkFycmF5Iiwiam9pbiIsInNwbGl0IiwibWFwIiwiYSIsImkiLCJ0b2RheSIsIndlZWtkYXlzTWluIiwid2QiLCJ3ZWVrZGF5cyIsInJlbmRlckRhdGUiLCJzZWxlY3RhYmxlIiwiZW5hYmxlZCIsIm1pbiIsImlzQWZ0ZXIiLCJtYXgiLCJzZWxlY3RlZCIsImlzVG9kYXkiLCJkYXRlQ2xhc3NOYW1lIiwib25EYXRlS2V5RG93biIsIm9uRGF0ZUZvY3VzIiwiY2xhc3NOYW1lIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJleHRlbnNpb25SZW5kZXJlciIsImRhdGVwaWNrZXJDbGFzc05hbWVzIiwicmVuZGVyRmlsdGVyIiwicmVuZGVyTW9udGgiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFNBQVNBLG9CQUFULENBQThCQyxJQUE5QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EO0FBQ2xELE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxJQUFJLHNCQUFPTCxJQUFQLEVBQWEsWUFBYixDQUFSO0FBQ0EsTUFBSSxDQUFDSyxFQUFFQyxPQUFGLEVBQUwsRUFBa0I7QUFDaEJELFFBQUksc0JBQU8scUJBQVAsRUFBbUIsWUFBbkIsQ0FBSjtBQUNEO0FBQ0QsTUFBSUosTUFBSixFQUFZO0FBQ1YsUUFBTU0sT0FBTyxzQkFBT04sTUFBUCxFQUFlLFlBQWYsQ0FBYjtBQUNBLFFBQUlNLEtBQUtELE9BQUwsRUFBSixFQUFvQjtBQUNsQkgsZ0JBQVU7QUFDUkssY0FBTUQsS0FBS0MsSUFBTCxFQURFO0FBRVJDLGVBQU9GLEtBQUtFLEtBQUwsRUFGQztBQUdSVCxjQUFNTyxLQUFLUCxJQUFMLEVBSEU7QUFJUlUsZUFBT0gsS0FBS0ksTUFBTCxDQUFZLFlBQVo7QUFKQyxPQUFWO0FBTUQ7QUFDRjtBQUNELE1BQUlULE1BQUosRUFBWTtBQUNWLFFBQU1VLE9BQU8sc0JBQU9WLE1BQVAsRUFBZSxZQUFmLENBQWI7QUFDQSxRQUFJVSxLQUFLTixPQUFMLEVBQUosRUFBb0I7QUFDbEJGLGdCQUFVO0FBQ1JJLGNBQU1JLEtBQUtKLElBQUwsRUFERTtBQUVSQyxlQUFPRyxLQUFLSCxL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S1AsVUFBTWpCLFFBQVEscUJBQWQ7QUFDQSxVQUFNakMsYUFBYSxLQUFLTixLQUFMLENBQVdNLFVBQVgsSUFBeUJDLFlBQTVDO0FBQ0EsVUFBTWIsTUFBTXpCLHFCQUFxQnFDLFVBQXJCLEVBQWlDakMsT0FBakMsRUFBMENDLE9BQTFDLENBQVo7QUFDQSxVQUFNbUYsdUJBQXVCLDBCQUFXLGlCQUFYLEVBQThCSCxTQUE5QixDQUE3QjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0UscUJBQVlHLG9CQURkO0FBRUUsZUFBSztBQUFBLG1CQUFTLE9BQUtoQyxJQUFMLEdBQVlBLElBQXJCO0FBQUEsV0FGUDtBQUdFLG9CQUFXLENBQUMsQ0FIZDtBQUlFLHlCQUFjLEtBSmhCO0FBS0Usa0JBQVMsS0FBS3hCLE1BTGhCO0FBTUUscUJBQVksS0FBS0U7QUFObkI7QUFRSSxhQUFLdUQsWUFBTCxDQUFrQmhFLEdBQWxCLENBUko7QUFTSSxhQUFLaUUsV0FBTCxDQUFpQmpFLEdBQWpCLEVBQXNCYSxZQUF0QixFQUFvQ2dDLEtBQXBDLENBVEo7QUFXSWdCLDRCQUNFLDhCQUFDLGlCQUFELEVBQXdCLEtBQUtuRCxLQUE3QixDQURGLEdBRUV3RDtBQWJOLE9BREY7QUFrQkQ7Ozs7O2tCQS9Qa0I3RCxVOzs7QUFtUXJCQSxXQUFXOEQsU0FBWCxHQUF1QjtBQUNyQlAsYUFBVyxvQkFBVVEsTUFEQTtBQUVyQnZELGdCQUFjLG9CQUFVdUQsTUFGSDtBQUdyQnpELGFBQVcsb0JBQVUwRCxJQUhBO0FBSXJCaEQsWUFBVSxvQkFBVWlELElBSkM7QUFLckIvRCxVQUFRLG9CQUFVK0QsSUFMRztBQU1yQjdDLFdBQVMsb0JBQVU2QyxJQU5FO0FBT3JCM0YsV0FBUyxvQkFBVXlGLE1BUEU7QUFRckJ4RixXQUFTLG9CQUFVd0YsTUFSRTtBQVNyQk4scUJBQW1CLG9CQUFVUTtBQVRSLENBQXZCIiwiZmlsZSI6IkRhdGVwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgU2VsZWN0LCB7IE9wdGlvbiB9IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCB7IGdldFRvZGF5IH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJPYmplY3QoZGF0ZSwgbW5EYXRlLCBteERhdGUpIHtcbiAgbGV0IG1pbkRhdGU7XG4gIGxldCBtYXhEYXRlO1xuICBsZXQgZCA9IG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpO1xuICBpZiAoIWQuaXNWYWxpZCgpKSB7XG4gICAgZCA9IG1vbWVudChnZXRUb2RheSgpLCAnWVlZWS1NTS1ERCcpO1xuICB9XG4gIGlmIChtbkRhdGUpIHtcbiAgICBjb25zdCBtaW5EID0gbW9tZW50KG1uRGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBpZiAobWluRC5pc1ZhbGlkKCkpIHtcbiAgICAgIG1pbkRhdGUgPSB7XG4gICAgICAgIHllYXI6IG1pbkQueWVhcigpLFxuICAgICAgICBtb250aDogbWluRC5tb250aCgpLFxuICAgICAgICBkYXRlOiBtaW5ELmRhdGUoKSxcbiAgICAgICAgdmFsdWU6IG1pbkQuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBpZiAobXhEYXRlKSB7XG4gICAgY29uc3QgbWF4RCA9IG1vbWVudChteERhdGUsICdZWVlZLU1NLUREJyk7XG4gICAgaWYgKG1heEQuaXNWYWxpZCgpKSB7XG4gICAgICBtYXhEYXRlID0ge1xuICAgICAgICB5ZWFyOiBtYXhELnllYXIoKSxcbiAgICAgICAgbW9udGg6IG1heEQubW9udGgoKSxcbiAgICAgICAgZGF0ZTogbWF4RC5kYXRlKCksXG4gICAgICAgIHZhbHVlOiBtYXhELmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc3QgeWVhciA9IGQueWVhcigpO1xuICBjb25zdCBtb250aCA9IGQubW9udGgoKTtcbiAgY29uc3QgZmlyc3QgPSBtb21lbnQoZCkuc3RhcnRPZignbW9udGgnKS5zdGFydE9mKCd3ZWVrJyk7XG4gIGNvbnN0IGxhc3QgPSBtb21lbnQoZCkuZW5kT2YoJ21vbnRoJykuZW5kT2YoJ3dlZWsnKTtcbiAgY29uc3Qgd2Vla3MgPSBbXTtcbiAgbGV0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgZGQgPSBmaXJzdDsgZGQuaXNCZWZvcmUobGFzdCk7IGRkID0gZGQuYWRkKDEsICdkJykpIHtcbiAgICBkYXlzLnB1c2goe1xuICAgICAgeWVhcjogZGQueWVhcigpLFxuICAgICAgbW9udGg6IGRkLm1vbnRoKCksXG4gICAgICBkYXRlOiBkZC5kYXRlKCksXG4gICAgICB2YWx1ZTogZGQuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgfSk7XG4gICAgaWYgKGRheXMubGVuZ3RoID09PSA3KSB7XG4gICAgICB3ZWVrcy5wdXNoKGRheXMpO1xuICAgICAgZGF5cyA9IFtdO1xuICAgIH1cbiAgfVxuICBjb25zdCBjYWwgPSB7IHllYXIsIG1vbnRoLCB3ZWVrcyB9O1xuICBpZiAobWluRGF0ZSkge1xuICAgIGNhbC5taW5EYXRlID0gbWluRGF0ZTtcbiAgfVxuICBpZiAobWF4RGF0ZSkge1xuICAgIGNhbC5tYXhEYXRlID0gbWF4RGF0ZTtcbiAgfVxuICByZXR1cm4gY2FsO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZXBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlIHx8IGdldFRvZGF5KCk7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0YXJnZXREYXRlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNEYXRlICYmICh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0RhdGU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUtleURvd24oZGF0ZSwgZSkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHsgLy8gcmV0dXJuIC8gc3BhY2VcbiAgICAgIHRoaXMub25EYXRlQ2xpY2soZGF0ZSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyAvLyBjdXJzb3Iga2V5XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgtMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkgeyAvLyByaWdodCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICd5ZWFycycgOiAnd2Vla3MnKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUsIGZvY3VzRGF0ZTogdHJ1ZSB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlQ2xpY2soZGF0ZSkge1xuICAgIGNvbnNvbGUubG9nKCdvbkRhdGVDbGljaycsIGRhdGUpO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUZvY3VzKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50YXJnZXREYXRlICE9PSBkYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uRGF0ZUZvY3VzPT4nLCBkYXRlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGU6IGRhdGUgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2hhbmdlKGUsIGl0ZW0pIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLnllYXIoaXRlbSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XG4gIH1cblxuICBvbk1vbnRoQ2hhbmdlKG1vbnRoKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQobW9udGgsICdtb250aHMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzRGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm1vbnRoO1xuICAgIGNvbnN0IGRhdGVFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYC5zbGRzLWRheVtkYXRhLWRhdGUtdmFsdWU9XCIke2RhdGV9XCJdYCk7XG4gICAgaWYgKGRhdGVFbCkge1xuICAgICAgZGF0ZUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXJGaWx0ZXIoY2FsKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXIgc2xkcy1ncmlkJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyLS1tb250aCBzbGRzLWdyaWQgc2xkcy1ncmlkLS1hbGlnbi1zcHJlYWQgc2xkcy1zaXplLS0yLW9mLTMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnXG4gICAgICAgICAgICAgIHR5cGU9J2ljb24tY29udGFpbmVyJ1xuICAgICAgICAgICAgICBpY29uPSdsZWZ0J1xuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgYWx0PSdQcmV2aW91cyBNb250aCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIC0xKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz57IG1vbWVudC5tb250aHNTaG9ydCgpW2NhbC5tb250aF0gfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdHlwZT0naWNvbi1jb250YWluZXInXG4gICAgICAgICAgICAgIGljb249J3JpZ2h0J1xuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgYWx0PSdOZXh0IE1vbnRoJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgMSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNpemUtLTEtb2YtMyc+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9eyBjYWwueWVhciB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25ZZWFyQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmV3IEFycmF5KDExKS5qb2luKCdfJykuc3BsaXQoJ18nKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSAoY2FsLnllYXIgKyBpKSAtIDU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiBrZXk9eyB5ZWFyIH0gbGFiZWw9eyB5ZWFyIH0gdmFsdWU9eyB5ZWFyIH0gLz47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZVxuICAgICAgICBjbGFzc05hbWU9J2RhdGVwaWNrZXJfX21vbnRoJ1xuICAgICAgICByb2xlPSdncmlkJ1xuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J21vbnRoJ1xuICAgICAgICByZWY9e25vZGUgPT4gKHRoaXMubW9udGggPSBub2RlKX1cbiAgICAgID5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9tZW50LndlZWtkYXlzTWluKHRydWUpLm1hcCgod2QsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dGgga2V5PXsgaSB9PlxuICAgICAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9eyBtb21lbnQud2Vla2RheXModHJ1ZSwgaSkgfT57IHdkIH08L2FiYnI+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FsLndlZWtzLm1hcCgoZGF5cywgaSkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXsgaSB9PnsgZGF5cy5tYXAodGhpcy5yZW5kZXJEYXRlLmJpbmQodGhpcywgY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSkgfTwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRhdGUoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5LCBkLCBpKSB7XG4gICAgbGV0IHNlbGVjdGFibGUgPSB0cnVlO1xuICAgIGxldCBlbmFibGVkID0gZC55ZWFyID09PSBjYWwueWVhciAmJiBkLm1vbnRoID09PSBjYWwubW9udGg7XG4gICAgaWYgKGNhbC5taW5EYXRlKSB7XG4gICAgICBjb25zdCBtaW4gPSBtb21lbnQoZC52YWx1ZSwgJ1lZWVktTU0tREQnKVxuICAgICAgICAuaXNBZnRlcihtb21lbnQoY2FsLm1pbkRhdGUudmFsdWUsICdZWVlZLU1NLUREJykpO1xuICAgICAgc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgJiYgbWluO1xuICAgICAgZW5hYmxlZCA9IGVuYWJsZWQgJiYgbWluO1xuICAgIH1cbiAgICBpZiAoY2FsLm1heERhdGUpIHtcbiAgICAgIGNvbnN0IG1heCA9IG1vbWVudChkLnZhbHVlLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIC5pc0JlZm9yZShtb21lbnQoY2FsLm1heERhdGUudmFsdWUsICdZWVlZLU1NLUREJykpO1xuICAgICAgc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgJiYgbWF4O1xuICAgICAgZW5hYmxlZCA9IGVuYWJsZWQgJiYgbWF4O1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZCA9IGQudmFsdWUgPT09IHNlbGVjdGVkRGF0ZTtcbiAgICBjb25zdCBpc1RvZGF5ID0gZC52YWx1ZSA9PT0gdG9kYXk7XG4gICAgY29uc3QgZGF0ZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NsZHMtZGlzYWJsZWQtdGV4dCc6ICFlbmFibGVkLFxuICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICdzbGRzLWlzLXRvZGF5JzogaXNUb2RheSxcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkXG4gICAgICAgIGNsYXNzTmFtZT17IGRhdGVDbGFzc05hbWUgfVxuICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgaGVhZGVycz17IG1vbWVudC53ZWVrZGF5cyhpKSB9XG4gICAgICAgIHJvbGU9J2dyaWRjZWxsJ1xuICAgICAgICBhcmlhLWRpc2FibGVkPXsgIWVuYWJsZWQgfVxuICAgICAgICBhcmlhLXNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1kYXknXG4gICAgICAgICAgdGFiSW5kZXg9eyBzZWxlY3RhYmxlID8gMCA6IC0xIH1cbiAgICAgICAgICBvbkNsaWNrPXsgc2VsZWN0YWJsZSA/IHRoaXMub25EYXRlQ2xpY2suYmluZCh0aGlzLCBkLnZhbHVlKSA6IG51bGwgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHNlbGVjdGFibGUgPyB0aGlzLm9uRGF0ZUtleURvd24uYmluZCh0aGlzLCBkLnZhbHVlKSA6IG51bGwgfVxuICAgICAgICAgIG9uRm9jdXM9eyBlbmFibGVkID8gdGhpcy5vbkRhdGVGb2N1cy5iaW5kKHRoaXMsIGQudmFsdWUpIDogY2FuY2VsRXZlbnQgfVxuICAgICAgICAgIGRhdGEtZGF0ZS12YWx1ZT17IGQudmFsdWUgfVxuICAgICAgICA+eyBkLmRhdGUgfTwvc3Bhbj5cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIHNlbGVjdGVkRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSxcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyOiBFeHRlbnNpb25SZW5kZXJlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2RheSA9IGdldFRvZGF5KCk7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCBzZWxlY3RlZERhdGU7XG4gICAgY29uc3QgY2FsID0gY3JlYXRlQ2FsZW5kYXJPYmplY3QodGFyZ2V0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWRhdGVwaWNrZXInLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgcmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX1cbiAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgIGFyaWEtaGlkZGVuPXsgZmFsc2UgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duIH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlckZpbHRlcihjYWwpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkgfVxuICAgICAgICB7XG4gICAgICAgICAgRXh0ZW5zaW9uUmVuZGVyZXIgP1xuICAgICAgICAgICAgPEV4dGVuc2lvblJlbmRlcmVyIHsgLi4udGhpcy5wcm9wcyB9IC8+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuRGF0ZXBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHRlbnNpb25SZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl19