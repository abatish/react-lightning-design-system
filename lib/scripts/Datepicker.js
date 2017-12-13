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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwidGFyZ2V0RGF0ZSIsInNlbGVjdGVkRGF0ZSIsImZvY3VzRGF0ZSIsInNldFN0YXRlIiwia2V5Q29kZSIsIm9uRGF0ZUNsaWNrIiwic2hpZnRLZXkiLCJvblNlbGVjdCIsInNldFRpbWVvdXQiLCJpdGVtIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkNsb3NlIiwiZWwiLCJkYXRlRWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwib25Nb250aENoYW5nZSIsIm1vbnRoc1Nob3J0Iiwib25ZZWFyQ2hhbmdlIiwiQXJyYXkiLCJqb2luIiwic3BsaXQiLCJtYXAiLCJhIiwiaSIsInRvZGF5Iiwid2Vla2RheXNNaW4iLCJ3ZCIsIndlZWtkYXlzIiwicmVuZGVyRGF0ZSIsInNlbGVjdGFibGUiLCJlbmFibGVkIiwibWluIiwiaXNBZnRlciIsIm1heCIsInNlbGVjdGVkIiwiaXNUb2RheSIsImRhdGVDbGFzc05hbWUiLCJvbkRhdGVLZXlEb3duIiwib25EYXRlRm9jdXMiLCJjbGFzc05hbWUiLCJFeHRlbnNpb25SZW5kZXJlciIsImV4dGVuc2lvblJlbmRlcmVyIiwiZGF0ZXBpY2tlckNsYXNzTmFtZXMiLCJyZW5kZXJGaWx0ZXIiLCJyZW5kZXJNb250aCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0Esb0JBQVQsQ0FBOEJDLElBQTlCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsTUFBNUMsRUFBb0Q7QUFDbEQsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLElBQUksc0JBQU9MLElBQVAsRUFBYSxZQUFiLENBQVI7QUFDQSxNQUFJLENBQUNLLEVBQUVDLE9BQUYsRUFBTCxFQUFrQjtBQUNoQkQsUUFBSSxzQkFBTyxxQkFBUCxFQUFtQixZQUFuQixDQUFKO0FBQ0Q7QUFDRCxNQUFJSixNQUFKLEVBQVk7QUFDVixRQUFNTSxPQUFPLHNCQUFPTixNQUFQLEVBQWUsWUFBZixDQUFiO0FBQ0EsUUFBSU0sS0FBS0QsT0FBTCxFQUFKLEVBQW9CO0FBQ2xCSCxnQkFBVTtBQUNSSyxjQUFNRCxLQUFLQyxJQUFMLEVBREU7QUFFUkMsZUFBT0YsS0FBS0UsS0FBTCxFQUZDO0FBR1JULGNBQU1PLEtBQUtQLElBQUwsRUFIRTtBQUlSVSxlQUFPSCxLQUFLSSxNQUFMLENBQVksWUFBWjtBQUpDLE9BQVY7QUFNRDtBQUNGO0FBQ0QsTUFBSVQsTUFBSixFQUFZO0FBQ1YsUUFBTVUsT0FBTyxzQkFBT1YsTUFBUCxFQUFlLFlBQWYsQ0FBYjtBQUNBLFFBQUlVLEtBQUtOLE9BQUwsRUFBSixFQUFvQjtBQUNsQkYsZ0JBQVU7QUFDUkksY0FBTUksS0FBS0osSUFBTCxFQURFO0FBRVJDLGVBQU9HLEtBQUtILEtBQUwsRUFGQztBQUdSVCxj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QUFyQixFQUFpQ2pDLE9BQWpDLEVBQTBDQyxPQUExQyxDQUFaO0FBQ0EsVUFBTWlGLHVCQUF1QiwwQkFBVyxpQkFBWCxFQUE4QkgsU0FBOUIsQ0FBN0I7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFZRyxvQkFEZDtBQUVFLGVBQUs7QUFBQSxtQkFBUyxPQUFLaEMsSUFBTCxHQUFZQSxJQUFyQjtBQUFBLFdBRlA7QUFHRSxvQkFBVyxDQUFDLENBSGQ7QUFJRSx5QkFBYyxLQUpoQjtBQUtFLGtCQUFTLEtBQUt0QixNQUxoQjtBQU1FLHFCQUFZLEtBQUtFO0FBTm5CO0FBUUksYUFBS3FELFlBQUwsQ0FBa0I5RCxHQUFsQixDQVJKO0FBU0ksYUFBSytELFdBQUwsQ0FBaUIvRCxHQUFqQixFQUFzQmEsWUFBdEIsRUFBb0M4QixLQUFwQyxDQVRKO0FBV0lnQiw0QkFDRSw4QkFBQyxpQkFBRCxFQUF3QixLQUFLakQsS0FBN0IsQ0FERixHQUVFc0Q7QUFiTixPQURGO0FBa0JEOzs7OztrQkE3UGtCM0QsVTs7O0FBaVFyQkEsV0FBVzRELFNBQVgsR0FBdUI7QUFDckJQLGFBQVcsb0JBQVVRLE1BREE7QUFFckJyRCxnQkFBYyxvQkFBVXFELE1BRkg7QUFHckJ2RCxhQUFXLG9CQUFVd0QsSUFIQTtBQUlyQmhELFlBQVUsb0JBQVVpRCxJQUpDO0FBS3JCN0QsVUFBUSxvQkFBVTZELElBTEc7QUFNckI3QyxXQUFTLG9CQUFVNkMsSUFORTtBQU9yQnpGLFdBQVMsb0JBQVV1RixNQVBFO0FBUXJCdEYsV0FBUyxvQkFBVXNGLE1BUkU7QUFTckJOLHFCQUFtQixvQkFBVVE7QUFUUixDQUF2QiIsImZpbGUiOiJEYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgeyBnZXRUb2RheSB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyT2JqZWN0KGRhdGUsIG1uRGF0ZSwgbXhEYXRlKSB7XG4gIGxldCBtaW5EYXRlO1xuICBsZXQgbWF4RGF0ZTtcbiAgbGV0IGQgPSBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgaWYgKCFkLmlzVmFsaWQoKSkge1xuICAgIGQgPSBtb21lbnQoZ2V0VG9kYXkoKSwgJ1lZWVktTU0tREQnKTtcbiAgfVxuICBpZiAobW5EYXRlKSB7XG4gICAgY29uc3QgbWluRCA9IG1vbWVudChtbkRhdGUsICdZWVlZLU1NLUREJyk7XG4gICAgaWYgKG1pbkQuaXNWYWxpZCgpKSB7XG4gICAgICBtaW5EYXRlID0ge1xuICAgICAgICB5ZWFyOiBtaW5ELnllYXIoKSxcbiAgICAgICAgbW9udGg6IG1pbkQubW9udGgoKSxcbiAgICAgICAgZGF0ZTogbWluRC5kYXRlKCksXG4gICAgICAgIHZhbHVlOiBtaW5ELmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgaWYgKG14RGF0ZSkge1xuICAgIGNvbnN0IG1heEQgPSBtb21lbnQobXhEYXRlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGlmIChtYXhELmlzVmFsaWQoKSkge1xuICAgICAgbWF4RGF0ZSA9IHtcbiAgICAgICAgeWVhcjogbWF4RC55ZWFyKCksXG4gICAgICAgIG1vbnRoOiBtYXhELm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG1heEQuZGF0ZSgpLFxuICAgICAgICB2YWx1ZTogbWF4RC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGNvbnN0IHllYXIgPSBkLnllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkLm1vbnRoKCk7XG4gIGNvbnN0IGZpcnN0ID0gbW9tZW50KGQpLnN0YXJ0T2YoJ21vbnRoJykuc3RhcnRPZignd2VlaycpO1xuICBjb25zdCBsYXN0ID0gbW9tZW50KGQpLmVuZE9mKCdtb250aCcpLmVuZE9mKCd3ZWVrJyk7XG4gIGNvbnN0IHdlZWtzID0gW107XG4gIGxldCBkYXlzID0gW107XG4gIGZvciAobGV0IGRkID0gZmlyc3Q7IGRkLmlzQmVmb3JlKGxhc3QpOyBkZCA9IGRkLmFkZCgxLCAnZCcpKSB7XG4gICAgZGF5cy5wdXNoKHtcbiAgICAgIHllYXI6IGRkLnllYXIoKSxcbiAgICAgIG1vbnRoOiBkZC5tb250aCgpLFxuICAgICAgZGF0ZTogZGQuZGF0ZSgpLFxuICAgICAgdmFsdWU6IGRkLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgIH0pO1xuICAgIGlmIChkYXlzLmxlbmd0aCA9PT0gNykge1xuICAgICAgd2Vla3MucHVzaChkYXlzKTtcbiAgICAgIGRheXMgPSBbXTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY2FsID0geyB5ZWFyLCBtb250aCwgd2Vla3MgfTtcbiAgaWYgKG1pbkRhdGUpIHtcbiAgICBjYWwubWluRGF0ZSA9IG1pbkRhdGU7XG4gIH1cbiAgaWYgKG1heERhdGUpIHtcbiAgICBjYWwubWF4RGF0ZSA9IG1heERhdGU7XG4gIH1cbiAgcmV0dXJuIGNhbDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsRXZlbnQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVwaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldERhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSB8fCBnZXRUb2RheSgpO1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGFyZ2V0RGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzRGF0ZSAmJiAodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKSkge1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKTtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlICovXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNEYXRlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVLZXlEb3duKGRhdGUsIGUpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7IC8vIHJldHVybiAvIHNwYWNlXG4gICAgICB0aGlzLm9uRGF0ZUNsaWNrKGRhdGUpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSAzNyAmJiBlLmtleUNvZGUgPD0gNDApIHsgLy8gY3Vyc29yIGtleVxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAnbW9udGhzJyA6ICdkYXlzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHsgLy8gcmlnaHQgYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKDEsIGUuc2hpZnRLZXkgPyAnbW9udGhzJyA6ICdkYXlzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24gYXJyb3cga2V5XG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKDEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XG4gICAgICB9XG4gICAgICB0YXJnZXREYXRlID0gdGFyZ2V0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlLCBmb2N1c0RhdGU6IHRydWUgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUNsaWNrKGRhdGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbkRhdGVGb2N1cyhkYXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSAhPT0gZGF0ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlOiBkYXRlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG9uWWVhckNoYW5nZShlLCBpdGVtKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS55ZWFyKGl0ZW0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlIH0pO1xuICB9XG5cbiAgb25Nb250aENoYW5nZShtb250aCkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKG1vbnRoLCAnbW9udGhzJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XG4gIH1cblxuICBvbkJsdXIoZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1c0RhdGUoZGF0ZSkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5tb250aDtcbiAgICBjb25zdCBkYXRlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKGAuc2xkcy1kYXlbZGF0YS1kYXRlLXZhbHVlPVwiJHtkYXRlfVwiXWApO1xuICAgIGlmIChkYXRlRWwpIHtcbiAgICAgIGRhdGVFbC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgcmVuZGVyRmlsdGVyKGNhbCkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyIHNsZHMtZ3JpZCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRhdGVwaWNrZXJfX2ZpbHRlci0tbW9udGggc2xkcy1ncmlkIHNsZHMtZ3JpZC0tYWxpZ24tc3ByZWFkIHNsZHMtc2l6ZS0tMi1vZi0zJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgaWNvbj0nbGVmdCdcbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgIGFsdD0nUHJldmlvdXMgTW9udGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAtMSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+eyBtb21lbnQubW9udGhzU2hvcnQoKVtjYWwubW9udGhdIH08L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnXG4gICAgICAgICAgICAgIHR5cGU9J2ljb24tY29udGFpbmVyJ1xuICAgICAgICAgICAgICBpY29uPSdyaWdodCdcbiAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgIGFsdD0nTmV4dCBNb250aCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIDEpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zaXplLS0xLW9mLTMnPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXsgY2FsLnllYXIgfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uWWVhckNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5ldyBBcnJheSgxMSkuam9pbignXycpLnNwbGl0KCdfJylcbiAgICAgICAgICAgICAgICAubWFwKChhLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gKGNhbC55ZWFyICsgaSkgLSA1O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxPcHRpb24ga2V5PXsgeWVhciB9IGxhYmVsPXsgeWVhciB9IHZhbHVlPXsgeWVhciB9IC8+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGVcbiAgICAgICAgY2xhc3NOYW1lPSdkYXRlcGlja2VyX19tb250aCdcbiAgICAgICAgcm9sZT0nZ3JpZCdcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PSdtb250aCdcbiAgICAgICAgcmVmPXtub2RlID0+ICh0aGlzLm1vbnRoID0gbm9kZSl9XG4gICAgICA+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1vbWVudC53ZWVrZGF5c01pbih0cnVlKS5tYXAoKHdkLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHRoIGtleT17IGkgfT5cbiAgICAgICAgICAgICAgICAgIDxhYmJyIHRpdGxlPXsgbW9tZW50LndlZWtkYXlzKHRydWUsIGkpIH0+eyB3ZCB9PC9hYmJyPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhbC53ZWVrcy5tYXAoKGRheXMsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17IGkgfT57IGRheXMubWFwKHRoaXMucmVuZGVyRGF0ZS5iaW5kKHRoaXMsIGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkpIH08L3RyPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJEYXRlKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSwgZCwgaSkge1xuICAgIGxldCBzZWxlY3RhYmxlID0gdHJ1ZTtcbiAgICBsZXQgZW5hYmxlZCA9IGQueWVhciA9PT0gY2FsLnllYXIgJiYgZC5tb250aCA9PT0gY2FsLm1vbnRoO1xuICAgIGlmIChjYWwubWluRGF0ZSkge1xuICAgICAgY29uc3QgbWluID0gbW9tZW50KGQudmFsdWUsICdZWVlZLU1NLUREJylcbiAgICAgICAgLmlzQWZ0ZXIobW9tZW50KGNhbC5taW5EYXRlLnZhbHVlLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgIHNlbGVjdGFibGUgPSBzZWxlY3RhYmxlICYmIG1pbjtcbiAgICAgIGVuYWJsZWQgPSBlbmFibGVkICYmIG1pbjtcbiAgICB9XG4gICAgaWYgKGNhbC5tYXhEYXRlKSB7XG4gICAgICBjb25zdCBtYXggPSBtb21lbnQoZC52YWx1ZSwgJ1lZWVktTU0tREQnKVxuICAgICAgICAuaXNCZWZvcmUobW9tZW50KGNhbC5tYXhEYXRlLnZhbHVlLCAnWVlZWS1NTS1ERCcpKTtcbiAgICAgIHNlbGVjdGFibGUgPSBzZWxlY3RhYmxlICYmIG1heDtcbiAgICAgIGVuYWJsZWQgPSBlbmFibGVkICYmIG1heDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkLnZhbHVlID09PSBzZWxlY3RlZERhdGU7XG4gICAgY29uc3QgaXNUb2RheSA9IGQudmFsdWUgPT09IHRvZGF5O1xuICAgIGNvbnN0IGRhdGVDbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcbiAgICAgICdzbGRzLWRpc2FibGVkLXRleHQnOiAhZW5hYmxlZCxcbiAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgICAnc2xkcy1pcy10b2RheSc6IGlzVG9kYXksXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZFxuICAgICAgICBjbGFzc05hbWU9eyBkYXRlQ2xhc3NOYW1lIH1cbiAgICAgICAga2V5PXsgaSB9XG4gICAgICAgIGhlYWRlcnM9eyBtb21lbnQud2Vla2RheXMoaSkgfVxuICAgICAgICByb2xlPSdncmlkY2VsbCdcbiAgICAgICAgYXJpYS1kaXNhYmxlZD17ICFlbmFibGVkIH1cbiAgICAgICAgYXJpYS1zZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtZGF5J1xuICAgICAgICAgIHRhYkluZGV4PXsgc2VsZWN0YWJsZSA/IDAgOiAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHNlbGVjdGFibGUgPyB0aGlzLm9uRGF0ZUNsaWNrLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbktleURvd249eyBzZWxlY3RhYmxlID8gdGhpcy5vbkRhdGVLZXlEb3duLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cbiAgICAgICAgICBvbkZvY3VzPXsgZW5hYmxlZCA/IHRoaXMub25EYXRlRm9jdXMuYmluZCh0aGlzLCBkLnZhbHVlKSA6IGNhbmNlbEV2ZW50IH1cbiAgICAgICAgICBkYXRhLWRhdGUtdmFsdWU9eyBkLnZhbHVlIH1cbiAgICAgICAgPnsgZC5kYXRlIH08L3NwYW4+XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBzZWxlY3RlZERhdGUsIG1pbkRhdGUsIG1heERhdGUsXG4gICAgICBleHRlbnNpb25SZW5kZXJlcjogRXh0ZW5zaW9uUmVuZGVyZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG9kYXkgPSBnZXRUb2RheSgpO1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgc2VsZWN0ZWREYXRlO1xuICAgIGNvbnN0IGNhbCA9IGNyZWF0ZUNhbGVuZGFyT2JqZWN0KHRhcmdldERhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICAgIGNvbnN0IGRhdGVwaWNrZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy1kYXRlcGlja2VyJywgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9XG4gICAgICAgIHJlZj17bm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSl9XG4gICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICBhcmlhLWhpZGRlbj17IGZhbHNlIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93biB9XG4gICAgICA+XG4gICAgICAgIHsgdGhpcy5yZW5kZXJGaWx0ZXIoY2FsKSB9XG4gICAgICAgIHsgdGhpcy5yZW5kZXJNb250aChjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpIH1cbiAgICAgICAge1xuICAgICAgICAgIEV4dGVuc2lvblJlbmRlcmVyID9cbiAgICAgICAgICAgIDxFeHRlbnNpb25SZW5kZXJlciB7IC4uLnRoaXMucHJvcHMgfSAvPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbkRhdGVwaWNrZXIucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbWluRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWF4RGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXh0ZW5zaW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxufTtcbiJdfQ==