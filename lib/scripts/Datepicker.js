'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Datepicker$propTypes;

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


Datepicker.propTypes = (_Datepicker$propTypes = {
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
}, (0, _defineProperty3.default)(_Datepicker$propTypes, 'minDate', _propTypes2.default.string), (0, _defineProperty3.default)(_Datepicker$propTypes, 'maxDate', _propTypes2.default.string), (0, _defineProperty3.default)(_Datepicker$propTypes, 'extensionRenderer', _propTypes2.default.func), _Datepicker$propTypes);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlQ2FsZW5kYXJPYmplY3QiLCJkYXRlIiwibW5EYXRlIiwibXhEYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJkIiwiaXNWYWxpZCIsIm1pbkQiLCJ5ZWFyIiwibW9udGgiLCJ2YWx1ZSIsImZvcm1hdCIsIm1heEQiLCJmaXJzdCIsInN0YXJ0T2YiLCJsYXN0IiwiZW5kT2YiLCJ3ZWVrcyIsImRheXMiLCJkZCIsImlzQmVmb3JlIiwiYWRkIiwicHVzaCIsImxlbmd0aCIsImNhbCIsImNhbmNlbEV2ZW50IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRGF0ZXBpY2tlciIsInN0YXRlIiwib25CbHVyIiwiYmluZCIsIm9uS2V5RG93biIsInByb3BzIiwiYXV0b0ZvY3VzIiwidGFyZ2V0RGF0ZSIsInNlbGVjdGVkRGF0ZSIsInNldFRpbWVvdXQiLCJmb2N1c0RhdGUiLCJzZXRTdGF0ZSIsImtleUNvZGUiLCJvbkRhdGVDbGljayIsInNoaWZ0S2V5Iiwib25TZWxlY3QiLCJpdGVtIiwiaXNGb2N1c2VkSW5Db21wb25lbnQiLCJvbkNsb3NlIiwiZWwiLCJkYXRlRWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJub2RlIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50Iiwib25Nb250aENoYW5nZSIsIm1vbnRoc1Nob3J0Iiwib25ZZWFyQ2hhbmdlIiwiQXJyYXkiLCJqb2luIiwic3BsaXQiLCJtYXAiLCJhIiwiaSIsInRvZGF5Iiwid2Vla2RheXNNaW4iLCJ3ZCIsIndlZWtkYXlzIiwicmVuZGVyRGF0ZSIsInNlbGVjdGFibGUiLCJlbmFibGVkIiwibWluIiwiaXNBZnRlciIsIm1heCIsInNlbGVjdGVkIiwiaXNUb2RheSIsImRhdGVDbGFzc05hbWUiLCJvbkRhdGVLZXlEb3duIiwib25EYXRlRm9jdXMiLCJjbGFzc05hbWUiLCJlbGVtZW50UmVmIiwiRXh0ZW5zaW9uUmVuZGVyZXIiLCJleHRlbnNpb25SZW5kZXJlciIsImRhdGVwaWNrZXJDbGFzc05hbWVzIiwiaGFuZGxlRE9NUmVmIiwicmVuZGVyRmlsdGVyIiwicmVuZGVyTW9udGgiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLFNBQVNBLG9CQUFULENBQThCQyxJQUE5QixFQUFvQ0MsTUFBcEMsRUFBNENDLE1BQTVDLEVBQW9EO0FBQ2xELE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsZ0JBQUo7QUFDQSxNQUFJQyxJQUFJLHNCQUFPTCxJQUFQLEVBQWEsWUFBYixDQUFSO0FBQ0EsTUFBSSxDQUFDSyxFQUFFQyxPQUFGLEVBQUwsRUFBa0I7QUFDaEJELFFBQUksc0JBQU8scUJBQVAsRUFBbUIsWUFBbkIsQ0FBSjtBQUNEO0FBQ0QsTUFBSUosTUFBSixFQUFZO0FBQ1YsUUFBTU0sT0FBTyxzQkFBT04sTUFBUCxFQUFlLFlBQWYsQ0FBYjtBQUNBLFFBQUlNLEtBQUtELE9BQUwsRUFBSixFQUFvQjtBQUNsQkgsZ0JBQVU7QUFDUkssY0FBTUQsS0FBS0MsSUFBTCxFQURFO0FBRVJDLGVBQU9GLEtBQUtFLEtBQUwsRUFGQztBQUdSVCxjQUFNTyxLQUFLUCxJQUFMLEVBSEU7QUFJUlUsZUFBT0gsS0FBS0ksTUFBTCxDQUFZLFlBQVo7QUFKQyxPQUFWO0FBTUQ7QUFDRjtBQUNELE1BQUlULE1BQUosRUFBWTtBQUNWLFFBQU1VLE9BQU8sc0JBQU9WLE1BQVAsRUFBZSxZQUFmLENBQWI7QUFDQSxRQUFJVSxLQUFLTixPQUFMLEVBQUosRUFBb0I7QUFDbEJGLGdCQUFVO0FBQ1JJLGNBQU1JLEtBQUtKLElBQUwsRUFERTtBQUVSQyxlQUFPRyxLQUFLSCxLQUFMLEVBRkM7QUFHUlQs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OiJEYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICcuL1NlbGVjdCc7XG5pbXBvcnQgeyBnZXRUb2RheSwgaXNFbEluQ2hpbGRyZW4gfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhck9iamVjdChkYXRlLCBtbkRhdGUsIG14RGF0ZSkge1xuICBsZXQgbWluRGF0ZTtcbiAgbGV0IG1heERhdGU7XG4gIGxldCBkID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XG4gIGlmICghZC5pc1ZhbGlkKCkpIHtcbiAgICBkID0gbW9tZW50KGdldFRvZGF5KCksICdZWVlZLU1NLUREJyk7XG4gIH1cbiAgaWYgKG1uRGF0ZSkge1xuICAgIGNvbnN0IG1pbkQgPSBtb21lbnQobW5EYXRlLCAnWVlZWS1NTS1ERCcpO1xuICAgIGlmIChtaW5ELmlzVmFsaWQoKSkge1xuICAgICAgbWluRGF0ZSA9IHtcbiAgICAgICAgeWVhcjogbWluRC55ZWFyKCksXG4gICAgICAgIG1vbnRoOiBtaW5ELm1vbnRoKCksXG4gICAgICAgIGRhdGU6IG1pbkQuZGF0ZSgpLFxuICAgICAgICB2YWx1ZTogbWluRC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGlmIChteERhdGUpIHtcbiAgICBjb25zdCBtYXhEID0gbW9tZW50KG14RGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBpZiAobWF4RC5pc1ZhbGlkKCkpIHtcbiAgICAgIG1heERhdGUgPSB7XG4gICAgICAgIHllYXI6IG1heEQueWVhcigpLFxuICAgICAgICBtb250aDogbWF4RC5tb250aCgpLFxuICAgICAgICBkYXRlOiBtYXhELmRhdGUoKSxcbiAgICAgICAgdmFsdWU6IG1heEQuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBjb25zdCB5ZWFyID0gZC55ZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZC5tb250aCgpO1xuICBjb25zdCBmaXJzdCA9IG1vbWVudChkKS5zdGFydE9mKCdtb250aCcpLnN0YXJ0T2YoJ3dlZWsnKTtcbiAgY29uc3QgbGFzdCA9IG1vbWVudChkKS5lbmRPZignbW9udGgnKS5lbmRPZignd2VlaycpO1xuICBjb25zdCB3ZWVrcyA9IFtdO1xuICBsZXQgZGF5cyA9IFtdO1xuICBmb3IgKGxldCBkZCA9IGZpcnN0OyBkZC5pc0JlZm9yZShsYXN0KTsgZGQgPSBkZC5hZGQoMSwgJ2QnKSkge1xuICAgIGRheXMucHVzaCh7XG4gICAgICB5ZWFyOiBkZC55ZWFyKCksXG4gICAgICBtb250aDogZGQubW9udGgoKSxcbiAgICAgIGRhdGU6IGRkLmRhdGUoKSxcbiAgICAgIHZhbHVlOiBkZC5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICB9KTtcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDcpIHtcbiAgICAgIHdlZWtzLnB1c2goZGF5cyk7XG4gICAgICBkYXlzID0gW107XG4gICAgfVxuICB9XG4gIGNvbnN0IGNhbCA9IHsgeWVhciwgbW9udGgsIHdlZWtzIH07XG4gIGlmIChtaW5EYXRlKSB7XG4gICAgY2FsLm1pbkRhdGUgPSBtaW5EYXRlO1xuICB9XG4gIGlmIChtYXhEYXRlKSB7XG4gICAgY2FsLm1heERhdGUgPSBtYXhEYXRlO1xuICB9XG4gIHJldHVybiBjYWw7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUgfHwgZ2V0VG9kYXkoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvY3VzRGF0ZSh0YXJnZXREYXRlKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZm9jdXNEYXRlICYmICh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0RhdGU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUtleURvd24oZGF0ZSwgZSkge1xuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUua2V5Q29kZSA9PT0gMzIpIHsgLy8gcmV0dXJuIC8gc3BhY2VcbiAgICAgIHRoaXMub25EYXRlQ2xpY2soZGF0ZSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyAvLyBjdXJzb3Iga2V5XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgtMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkgeyAvLyByaWdodCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvLyB1cCBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvdyBrZXlcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICd5ZWFycycgOiAnd2Vla3MnKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUsIGZvY3VzRGF0ZTogdHJ1ZSB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25EYXRlQ2xpY2soZGF0ZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRGF0ZUZvY3VzKGRhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50YXJnZXREYXRlICE9PSBkYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGU6IGRhdGUgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25ZZWFyQ2hhbmdlKGUsIGl0ZW0pIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLnllYXIoaXRlbSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XG4gIH1cblxuICBvbk1vbnRoQ2hhbmdlKG1vbnRoKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQobW9udGgsICdtb250aHMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcbiAgfVxuXG4gIG9uQmx1cihlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvY3VzRGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm1vbnRoO1xuICAgIGlmICghZWwpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgZGF0ZUVsID0gZWwucXVlcnlTZWxlY3RvcihgLnNsZHMtZGF5W2RhdGEtZGF0ZS12YWx1ZT1cIiR7ZGF0ZX1cIl1gKTtcbiAgICBpZiAoZGF0ZUVsKSB7XG4gICAgICBkYXRlRWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlckZpbHRlcihjYWwpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRhdGVwaWNrZXJfX2ZpbHRlciBzbGRzLWdyaWQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXItLW1vbnRoIHNsZHMtZ3JpZCBzbGRzLWdyaWQtLWFsaWduLXNwcmVhZCBzbGRzLXNpemUtLTItb2YtMyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSdcbiAgICAgICAgICAgICAgdHlwZT0naWNvbi1jb250YWluZXInXG4gICAgICAgICAgICAgIGljb249J2xlZnQnXG4gICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBhbHQ9J1ByZXZpb3VzIE1vbnRoJ1xuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgLTEpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPnsgbW9tZW50Lm1vbnRoc1Nob3J0KClbY2FsLm1vbnRoXSB9PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJ1xuICAgICAgICAgICAgICB0eXBlPSdpY29uLWNvbnRhaW5lcidcbiAgICAgICAgICAgICAgaWNvbj0ncmlnaHQnXG4gICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICBhbHQ9J05leHQgTW9udGgnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAxKSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtc2l6ZS0tMS1vZi0zJz5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB2YWx1ZT17IGNhbC55ZWFyIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vblllYXJDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuZXcgQXJyYXkoMTEpLmpvaW4oJ18nKS5zcGxpdCgnXycpXG4gICAgICAgICAgICAgICAgLm1hcCgoYSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IChjYWwueWVhciArIGkpIC0gNTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8T3B0aW9uIGtleT17IHllYXIgfSBsYWJlbD17IHllYXIgfSB2YWx1ZT17IHllYXIgfSAvPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNb250aChjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlXG4gICAgICAgIGNsYXNzTmFtZT0nZGF0ZXBpY2tlcl9fbW9udGgnXG4gICAgICAgIHJvbGU9J2dyaWQnXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT0nbW9udGgnXG4gICAgICAgIHJlZj17bm9kZSA9PiAodGhpcy5tb250aCA9IG5vZGUpfVxuICAgICAgPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtb21lbnQud2Vla2RheXNNaW4odHJ1ZSkubWFwKCh3ZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDx0aCBrZXk9eyBpIH0+XG4gICAgICAgICAgICAgICAgICA8YWJiciB0aXRsZT17IG1vbWVudC53ZWVrZGF5cyh0cnVlLCBpKSB9Pnsgd2QgfTwvYWJicj5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYWwud2Vla3MubWFwKChkYXlzLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDx0ciBrZXk9eyBpIH0+eyBkYXlzLm1hcCh0aGlzLnJlbmRlckRhdGUuYmluZCh0aGlzLCBjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXkpKSB9PC90cj5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRGF0ZShjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXksIGQsIGkpIHtcbiAgICBsZXQgc2VsZWN0YWJsZSA9IHRydWU7XG4gICAgbGV0IGVuYWJsZWQgPSBkLnllYXIgPT09IGNhbC55ZWFyICYmIGQubW9udGggPT09IGNhbC5tb250aDtcbiAgICBpZiAoY2FsLm1pbkRhdGUpIHtcbiAgICAgIGNvbnN0IG1pbiA9IG1vbWVudChkLnZhbHVlLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIC5pc0FmdGVyKG1vbWVudChjYWwubWluRGF0ZS52YWx1ZSwgJ1lZWVktTU0tREQnKSk7XG4gICAgICBzZWxlY3RhYmxlID0gc2VsZWN0YWJsZSAmJiBtaW47XG4gICAgICBlbmFibGVkID0gZW5hYmxlZCAmJiBtaW47XG4gICAgfVxuICAgIGlmIChjYWwubWF4RGF0ZSkge1xuICAgICAgY29uc3QgbWF4ID0gbW9tZW50KGQudmFsdWUsICdZWVlZLU1NLUREJylcbiAgICAgICAgLmlzQmVmb3JlKG1vbWVudChjYWwubWF4RGF0ZS52YWx1ZSwgJ1lZWVktTU0tREQnKSk7XG4gICAgICBzZWxlY3RhYmxlID0gc2VsZWN0YWJsZSAmJiBtYXg7XG4gICAgICBlbmFibGVkID0gZW5hYmxlZCAmJiBtYXg7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkID0gZC52YWx1ZSA9PT0gc2VsZWN0ZWREYXRlO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBkLnZhbHVlID09PSB0b2RheTtcbiAgICBjb25zdCBkYXRlQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyh7XG4gICAgICAnc2xkcy1kaXNhYmxlZC10ZXh0JzogIWVuYWJsZWQsXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxuICAgICAgJ3NsZHMtaXMtdG9kYXknOiBpc1RvZGF5LFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dGRcbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZUNsYXNzTmFtZSB9XG4gICAgICAgIGtleT17IGkgfVxuICAgICAgICBoZWFkZXJzPXsgbW9tZW50LndlZWtkYXlzKGkpIH1cbiAgICAgICAgcm9sZT0nZ3JpZGNlbGwnXG4gICAgICAgIGFyaWEtZGlzYWJsZWQ9eyAhZW5hYmxlZCB9XG4gICAgICAgIGFyaWEtc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWRheSdcbiAgICAgICAgICB0YWJJbmRleD17IHNlbGVjdGFibGUgPyAwIDogLTEgfVxuICAgICAgICAgIG9uQ2xpY2s9eyBzZWxlY3RhYmxlID8gdGhpcy5vbkRhdGVDbGljay5iaW5kKHRoaXMsIGQudmFsdWUpIDogbnVsbCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgc2VsZWN0YWJsZSA/IHRoaXMub25EYXRlS2V5RG93bi5iaW5kKHRoaXMsIGQudmFsdWUpIDogbnVsbCB9XG4gICAgICAgICAgb25Gb2N1cz17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUZvY3VzLmJpbmQodGhpcywgZC52YWx1ZSkgOiBjYW5jZWxFdmVudCB9XG4gICAgICAgICAgZGF0YS1kYXRlLXZhbHVlPXsgZC52YWx1ZSB9XG4gICAgICAgID57IGQuZGF0ZSB9PC9zcGFuPlxuICAgICAgPC90ZD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZSwgc2VsZWN0ZWREYXRlLCBtaW5EYXRlLCBtYXhEYXRlLFxuICAgICAgZWxlbWVudFJlZixcbiAgICAgIGV4dGVuc2lvblJlbmRlcmVyOiBFeHRlbnNpb25SZW5kZXJlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0b2RheSA9IGdldFRvZGF5KCk7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCBzZWxlY3RlZERhdGU7XG4gICAgY29uc3QgY2FsID0gY3JlYXRlQ2FsZW5kYXJPYmplY3QodGFyZ2V0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWRhdGVwaWNrZXInLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IGhhbmRsZURPTVJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgaWYgKGVsZW1lbnRSZWYpIHsgZWxlbWVudFJlZihub2RlKTsgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfVxuICAgICAgICByZWY9eyBoYW5kbGVET01SZWYgfVxuICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgYXJpYS1oaWRkZW49eyBmYWxzZSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24gfVxuICAgICAgPlxuICAgICAgICB7IHRoaXMucmVuZGVyRmlsdGVyKGNhbCkgfVxuICAgICAgICB7IHRoaXMucmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB9XG4gICAgICAgIHtcbiAgICAgICAgICBFeHRlbnNpb25SZW5kZXJlciA/XG4gICAgICAgICAgICA8RXh0ZW5zaW9uUmVuZGVyZXIgeyAuLi50aGlzLnByb3BzIH0gLz4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5EYXRlcGlja2VyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZWxlbWVudFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1pbkRhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1heERhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4dGVuc2lvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG4iXX0=