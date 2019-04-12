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
      var _props = this.props,
          autoFocus = _props.autoFocus,
          selectedDate = _props.selectedDate,
          dateToday = _props.dateToday;

      if (autoFocus) {
        var targetDate = selectedDate || dateToday || (0, _util.getToday)();
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

      var _props2 = this.props,
          className = _props2.className,
          selectedDate = _props2.selectedDate,
          minDate = _props2.minDate,
          maxDate = _props2.maxDate,
          dateToday = _props2.dateToday,
          ExtensionRenderer = _props2.extensionRenderer;

      var today = dateToday || (0, _util.getToday)();
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
  dateToday: _propTypes2.default.string,
  extensionRenderer: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwic2VsZWN0ZWREYXRlIiwiZGF0ZVRvZGF5IiwidGFyZ2V0RGF0ZSIsImZvY3VzRGF0ZSIsInNldFN0YXRlIiwia2V5Q29kZSIsIm9uRGF0ZUNsaWNrIiwic2hpZnRLZXkiLCJvblNlbGVjdCIsInNldFRpbWVvdXQiLCJpdGVtIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkNsb3NlIiwiZWwiLCJkYXRlRWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJyb290RWwiLCJub2RlIiwidGFyZ2V0RWwiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJwYXJlbnROb2RlIiwib25Nb250aENoYW5nZSIsIm1vbWVudCIsIm1vbnRoc1Nob3J0Iiwib25ZZWFyQ2hhbmdlIiwiQXJyYXkiLCJqb2luIiwic3BsaXQiLCJtYXAiLCJhIiwiaSIsInRvZGF5Iiwid2Vla2RheXNNaW4iLCJ3ZCIsIndlZWtkYXlzIiwicmVuZGVyRGF0ZSIsInNlbGVjdGFibGUiLCJlbmFibGVkIiwibWluIiwiaXNBZnRlciIsIm1heCIsInNlbGVjdGVkIiwiaXNUb2RheSIsImRhdGVDbGFzc05hbWUiLCJvbkRhdGVLZXlEb3duIiwib25EYXRlRm9jdXMiLCJjbGFzc05hbWUiLCJFeHRlbnNpb25SZW5kZXJlciIsImV4dGVuc2lvblJlbmRlcmVyIiwiZGF0ZXBpY2tlckNsYXNzTmFtZXMiLCJyZW5kZXJGaWx0ZXIiLCJyZW5kZXJNb250aCIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0Esb0JBQVQsQ0FBOEJDLElBQTlCLEVBQW9DQyxNQUFwQyxFQUE0Q0MsTUFBNUMsRUFBb0Q7QUFDbEQsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLElBQUksc0JBQU9MLElBQVAsRUFBYSxZQUFiLENBQVI7QUFDQSxNQUFJLENBQUNLLEVBQUVDLE9BQUYsRUFBTCxFQUFrQjtBQUNoQkQsUUFBSSxzQkFBTyxxQkFBUCxFQUFtQixZQUFuQixDQUFKO0FBQ0Q7QUFDRCxNQUFJSixNQUFKLEVBQVk7QUFDVixRQUFNTSxPQUFPLHNCQUFPTixNQUFQLEVBQWUsWUFBZixDQUFiO0FBQ0EsUUFBSU0sS0FBS0QsT0FBTCxFQUFKLEVBQW9CO0FBQ2xCSCxnQkFBVTtBQUNSSyxjQUFNRCxLQUFLQyxJQUFMLEVBREU7QUFFUkMsZUFBT0YsS0FBS0UsS0FBTCxFQUZDO0FBR1JULGNBQU1PLEtBQUtQLElBQUwsRUFIRTtBQUlSVSxlQUFPSCxLQUFLSSxNQUFMLENBQVksWUFBWjtBQUpDLE9BQVY7QUFNRDtBQUNGO0FBQ0QsTUFBSVQsTUFBSixFQUFZO0FBQ1YsUUFBTVUsT0FBTyxzQkFBT1YsTUFBUCxFQUFlLFlBQWYsQ0FBYjtBQUNBLFFBQUlVLEtBQUtOLE9BQUwsRUFBSixFQUFvQjtBQUNsQkYsZ0JBQVU7QUFDUkksY0FBTUksS0FBS0os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UEU7QUFRckIxRixXQUFTeUYsb0JBQVVDLE1BUkU7QUFTckJ6RCxhQUFXd0Qsb0JBQVVDLE1BVEE7QUFVckJSLHFCQUFtQk8sb0JBQVVHO0FBVlIsQ0FBdkIiLCJmaWxlIjoiRGF0ZXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTZWxlY3QsIHsgT3B0aW9uIH0gZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IHsgZ2V0VG9kYXkgfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhck9iamVjdChkYXRlLCBtbkRhdGUsIG14RGF0ZSkge1xuICBsZXQgbWluRGF0ZTtcbiAgbGV0IG1heERhdGU7XG4gIGxldCBkID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XG4gIGlmICghZC5pc1ZhbGlkKCkpIHtcbiAgICBkID0gbW9tZW50KGdldFRvZGF5KCksICdZWVlZLU1NLUREJyk7XG4gIH1cbiAgaWYgKG1uRGF0ZSkge1xuICAgIGNvbnN0IG1pbkQgPSBtb21lbnQobW5EYXRlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGlmIChtaW5ELmlzVmFsaWQoKSkge1xuICAgICAgbWluRGF0ZSA9IHtcbiAgICAgICAgeWVhcjogbWluRC55ZWFyKCksXG4gICAgICAgIG1vbnRoOiBtaW5ELm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG1pbkQuZGF0ZSgpLFxuICAgICAgICB2YWx1ZTogbWluRC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmIChteERhdGUpIHtcbiAgICBjb25zdCBtYXhEID0gbW9tZW50KG14RGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBpZiAobWF4RC5pc1ZhbGlkKCkpIHtcbiAgICAgIG1heERhdGUgPSB7XG4gICAgICAgIHllYXI6IG1heEQueWVhcigpLFxuICAgICAgICBtb250aDogbWF4RC5tb250aCgpLFxuICAgICAgICBkYXRlOiBtYXhELmRhdGUoKSxcbiAgICAgICAgdmFsdWU6IG1heEQuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB5ZWFyID0gZC55ZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZC5tb250aCgpO1xuICBjb25zdCBmaXJzdCA9IG1vbWVudChkKS5zdGFydE9mKCdtb250aCcpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgY29uc3QgbGFzdCA9IG1vbWVudChkKS5lbmRPZignbW9udGgnKS5lbmRPZignd2VlaycpO1xuICBjb25zdCB3ZWVrcyA9IFtdO1xuICBsZXQgZGF5cyA9IFtdO1xuICBmb3IgKGxldCBkZCA9IGZpcnN0OyBkZC5pc0JlZm9yZShsYXN0KTsgZGQgPSBkZC5hZGQoMSwgJ2QnKSkge1xuICAgIGRheXMucHVzaCh7XG4gICAgICB5ZWFyOiBkZC55ZWFyKCksXG4gICAgICBtb250aDogZGQubW9udGgoKSxcbiAgICAgIGRhdGU6IGRkLmRhdGUoKSxcbiAgICAgIHZhbHVlOiBkZC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICB9KTtcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cyk7XG4gICAgICBkYXlzID0gW107XG4gICAgfVxuICB9XG4gIGNvbnN0IGNhbCA9IHsgeWVhciwgbW9udGgsIHdlZWtzIH07XG4gIGlmIChtaW5EYXRlKSB7XG4gICAgY2FsLm1pbkRhdGUgPSBtaW5EYXRlO1xuICB9XG4gIGlmIChtYXhEYXRlKSB7XG4gICAgY2FsLm1heERhdGUgPSBtYXhEYXRlO1xuICB9XG4gIHJldHVybiBjYWw7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBhdXRvRm9jdXMsIHNlbGVjdGVkRGF0ZSwgZGF0ZVRvZGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgIGNvbnN0IHRhcmdldERhdGUgPSBzZWxlY3RlZERhdGUgfHwgZGF0ZVRvZGF5IHx8IGdldFRvZGF5KCk7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0YXJnZXREYXRlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNEYXRlICYmICh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0RhdGU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUtleURvd24oZGF0ZSwgZSkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHsgLy8gcmV0dXJuIC8gc3BhY2VcbiAgICAgIHRoaXMub25EYXRlQ2xpY2soZGF0ZSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyAvLyBjdXJzb3Iga2V5XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgtMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkgeyAvLyByaWdodCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICd5ZWFycycgOiAnd2Vla3MnKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUsIGZvY3VzRGF0ZTogdHJ1ZSB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlQ2xpY2soZGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUZvY3VzKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50YXJnZXREYXRlICE9PSBkYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGU6IGRhdGUgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2hhbmdlKGUsIGl0ZW0pIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLnllYXIoaXRlbSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XG4gIH1cblxuICBvbk1vbnRoQ2hhbmdlKG1vbnRoKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQobW9udGgsICdtb250aHMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzRGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm1vbnRoO1xuICAgIGNvbnN0IGRhdGVFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoYC5zbGRzLWRheVtkYXRhLWRhdGUtdmFsdWU9XCIke2RhdGV9XCJdYCk7XG4gICAgaWYgKGRhdGVFbCkge1xuICAgICAgZGF0ZUVsLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXJGaWx0ZXIoY2FsKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXIgc2xkcy1ncmlkJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyLS1tb250aCBzbGRzLWdyaWQgc2xkcy1ncmlkLS1hbGlnbi1zcHJlYWQgc2xkcy1zaXplLS0yLW9mLTMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnXG4gICAgICAgICAgICAgIHR5cGU9J2ljb24tY29udGFpbmVyJ1xuICAgICAgICAgICAgICBpY29uPSdsZWZ0J1xuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgYWx0PSdQcmV2aW91cyBNb250aCdcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIC0xKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz57IG1vbWVudC5tb250aHNTaG9ydCgpW2NhbC5tb250aF0gfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdHlwZT0naWNvbi1jb250YWluZXInXG4gICAgICAgICAgICAgIGljb249J3JpZ2h0J1xuICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgYWx0PSdOZXh0IE1vbnRoJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgMSkgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXNpemUtLTEtb2YtMyc+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9eyBjYWwueWVhciB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25ZZWFyQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmV3IEFycmF5KDExKS5qb2luKCdfJykuc3BsaXQoJ18nKVxuICAgICAgICAgICAgICAgIC5tYXAoKGEsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSAoY2FsLnllYXIgKyBpKSAtIDU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPE9wdGlvbiBrZXk9eyB5ZWFyIH0gbGFiZWw9eyB5ZWFyIH0gdmFsdWU9eyB5ZWFyIH0gLz47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZVxuICAgICAgICBjbGFzc05hbWU9J2RhdGVwaWNrZXJfX21vbnRoJ1xuICAgICAgICByb2xlPSdncmlkJ1xuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J21vbnRoJ1xuICAgICAgICByZWY9e25vZGUgPT4gKHRoaXMubW9udGggPSBub2RlKX1cbiAgICAgID5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbW9tZW50LndlZWtkYXlzTWluKHRydWUpLm1hcCgod2QsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8dGgga2V5PXsgaSB9PlxuICAgICAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9eyBtb21lbnQud2Vla2RheXModHJ1ZSwgaSkgfT57IHdkIH08L2FiYnI+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge1xuICAgICAgICAgICAgY2FsLndlZWtzLm1hcCgoZGF5cywgaSkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXsgaSB9PnsgZGF5cy5tYXAodGhpcy5yZW5kZXJEYXRlLmJpbmQodGhpcywgY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSkgfTwvdHI+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckRhdGUoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5LCBkLCBpKSB7XG4gICAgbGV0IHNlbGVjdGFibGUgPSB0cnVlO1xuICAgIGxldCBlbmFibGVkID0gZC55ZWFyID09PSBjYWwueWVhciAmJiBkLm1vbnRoID09PSBjYWwubW9udGg7XG4gICAgaWYgKGNhbC5taW5EYXRlKSB7XG4gICAgICBjb25zdCBtaW4gPSBtb21lbnQoZC52YWx1ZSwgJ1lZWVktTU0tREQnKVxuICAgICAgICAuaXNBZnRlcihtb21lbnQoY2FsLm1pbkRhdGUudmFsdWUsICdZWVlZLU1NLUREJykpO1xuICAgICAgc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgJiYgbWluO1xuICAgICAgZW5hYmxlZCA9IGVuYWJsZWQgJiYgbWluO1xuICAgIH1cbiAgICBpZiAoY2FsLm1heERhdGUpIHtcbiAgICAgIGNvbnN0IG1heCA9IG1vbWVudChkLnZhbHVlLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIC5pc0JlZm9yZShtb21lbnQoY2FsLm1heERhdGUudmFsdWUsICdZWVlZLU1NLUREJykpO1xuICAgICAgc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgJiYgbWF4O1xuICAgICAgZW5hYmxlZCA9IGVuYWJsZWQgJiYgbWF4O1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RlZCA9IGQudmFsdWUgPT09IHNlbGVjdGVkRGF0ZTtcbiAgICBjb25zdCBpc1RvZGF5ID0gZC52YWx1ZSA9PT0gdG9kYXk7XG4gICAgY29uc3QgZGF0ZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xuICAgICAgJ3NsZHMtZGlzYWJsZWQtdGV4dCc6ICFlbmFibGVkLFxuICAgICAgJ3NsZHMtaXMtc2VsZWN0ZWQnOiBzZWxlY3RlZCxcbiAgICAgICdzbGRzLWlzLXRvZGF5JzogaXNUb2RheSxcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRkXG4gICAgICAgIGNsYXNzTmFtZT17IGRhdGVDbGFzc05hbWUgfVxuICAgICAgICBrZXk9eyBpIH1cbiAgICAgICAgaGVhZGVycz17IG1vbWVudC53ZWVrZGF5cyhpKSB9XG4gICAgICAgIHJvbGU9J2dyaWRjZWxsJ1xuICAgICAgICBhcmlhLWRpc2FibGVkPXsgIWVuYWJsZWQgfVxuICAgICAgICBhcmlhLXNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1kYXknXG4gICAgICAgICAgdGFiSW5kZXg9eyBzZWxlY3RhYmxlID8gMCA6IC0xIH1cbiAgICAgICAgICBvbkNsaWNrPXsgc2VsZWN0YWJsZSA/IHRoaXMub25EYXRlQ2xpY2suYmluZCh0aGlzLCBkLnZhbHVlKSA6IG51bGwgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHNlbGVjdGFibGUgPyB0aGlzLm9uRGF0ZUtleURvd24uYmluZCh0aGlzLCBkLnZhbHVlKSA6IG51bGwgfVxuICAgICAgICAgIG9uRm9jdXM9eyBlbmFibGVkID8gdGhpcy5vbkRhdGVGb2N1cy5iaW5kKHRoaXMsIGQudmFsdWUpIDogY2FuY2VsRXZlbnQgfVxuICAgICAgICAgIGRhdGEtZGF0ZS12YWx1ZT17IGQudmFsdWUgfVxuICAgICAgICA+eyBkLmRhdGUgfTwvc3Bhbj5cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsIHNlbGVjdGVkRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSwgZGF0ZVRvZGF5LFxuICAgICAgZXh0ZW5zaW9uUmVuZGVyZXI6IEV4dGVuc2lvblJlbmRlcmVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvZGF5ID0gZGF0ZVRvZGF5IHx8IGdldFRvZGF5KCk7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCBzZWxlY3RlZERhdGU7XG4gICAgY29uc3QgY2FsID0gY3JlYXRlQ2FsZW5kYXJPYmplY3QodGFyZ2V0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWRhdGVwaWNrZXInLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH1cbiAgICAgICAgcmVmPXtub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKX1cbiAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgIGFyaWEtaGlkZGVuPXsgZmFsc2UgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ciB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duIH1cbiAgICAgID5cbiAgICAgICAgeyB0aGlzLnJlbmRlckZpbHRlcihjYWwpIH1cbiAgICAgICAgeyB0aGlzLnJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkgfVxuICAgICAgICB7XG4gICAgICAgICAgRXh0ZW5zaW9uUmVuZGVyZXIgP1xuICAgICAgICAgICAgPEV4dGVuc2lvblJlbmRlcmVyIHsgLi4udGhpcy5wcm9wcyB9IC8+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuRGF0ZXBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBtaW5EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtYXhEYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkYXRlVG9kYXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=