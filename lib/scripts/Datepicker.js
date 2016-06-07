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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUksSUFBSSxzQkFBTyxJQUFQLEVBQWEsWUFBYixDQUFSO0FBQ0EsTUFBSSxDQUFDLEVBQUUsT0FBRixFQUFMLEVBQWtCO0FBQ2hCLFFBQUksdUJBQUo7QUFDRDtBQUNELE1BQU0sT0FBTyxFQUFFLElBQUYsRUFBYjtBQUNBLE1BQU0sUUFBUSxFQUFFLEtBQUYsRUFBZDtBQUNBLE1BQU0sUUFBUSxzQkFBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixPQUFsQixFQUEyQixPQUEzQixDQUFtQyxNQUFuQyxDQUFkO0FBQ0EsTUFBTSxPQUFPLHNCQUFPLENBQVAsRUFBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLEtBQXpCLENBQStCLE1BQS9CLENBQWI7QUFDQSxNQUFNLFFBQVEsRUFBZDtBQUNBLE1BQUksT0FBTyxFQUFYO0FBQ0EsT0FBSyxJQUFJLEtBQUssS0FBZCxFQUFxQixHQUFHLFFBQUgsQ0FBWSxJQUFaLENBQXJCLEVBQXdDLEtBQUssR0FBRyxHQUFILENBQU8sQ0FBUCxFQUFVLEdBQVYsQ0FBN0MsRUFBNkQ7QUFDM0QsU0FBSyxJQUFMLENBQVUsRUFBRSxNQUFNLEdBQUcsSUFBSCxFQUFSLEVBQW1CLE9BQU8sR0FBRyxLQUFILEVBQTFCLEVBQXNDLE1BQU0sR0FBRyxJQUFILEVBQTVDLEVBQXVELE9BQU8sR0FBRyxNQUFILENBQVUsWUFBVixDQUE5RCxFQUFWO0FBQ0EsUUFBSSxLQUFLLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBTSxJQUFOLENBQVcsSUFBWDtBQUNBLGFBQU8sRUFBUDtBQUNEO0FBQ0Y7QUFDRCxTQUFP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QU0sdUJBQXVCLDBCQUFXLGlCQUFYLEVBQThCLFNBQTlCLENBQTdCO0FBQ0EsYUFDRTtBQUFBO1FBQUEsRUFBSyxXQUFZLG9CQUFqQixFQUF3QyxLQUFJLFlBQTVDLEVBQXlELGVBQWMsS0FBdkU7QUFDRSxrQkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBRFgsRUFDb0MsV0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCO0FBRGhEO1FBR0ksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBSEo7UUFJSSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsRUFBc0IsWUFBdEIsRUFBb0MsS0FBcEM7QUFKSixPQURGO0FBUUQ7OztFQXZNcUMsZ0JBQU0sUzs7a0JBQXpCLFU7OztBQTJNckIsV0FBVyxTQUFYLEdBQXVCO0FBQ3JCLGFBQVcsaUJBQVUsTUFEQTtBQUVyQixnQkFBYyxpQkFBVSxNQUZIO0FBR3JCLGFBQVcsaUJBQVUsSUFIQTtBQUlyQixZQUFVLGlCQUFVLElBSkM7QUFLckIsVUFBUSxpQkFBVSxJQUxHO0FBTXJCLFdBQVMsaUJBQVU7QUFORSxDQUF2QiIsImZpbGUiOiJEYXRlcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFBpY2tsaXN0LCBQaWNrbGlzdEl0ZW0gfSBmcm9tICcuL1BpY2tsaXN0JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyT2JqZWN0KGRhdGUpIHtcclxuICBsZXQgZCA9IG1vbWVudChkYXRlLCAnWVlZWS1NTS1ERCcpO1xyXG4gIGlmICghZC5pc1ZhbGlkKCkpIHtcclxuICAgIGQgPSBtb21lbnQoKTtcclxuICB9XHJcbiAgY29uc3QgeWVhciA9IGQueWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoID0gZC5tb250aCgpO1xyXG4gIGNvbnN0IGZpcnN0ID0gbW9tZW50KGQpLnN0YXJ0T2YoJ21vbnRoJykuc3RhcnRPZignd2VlaycpO1xyXG4gIGNvbnN0IGxhc3QgPSBtb21lbnQoZCkuZW5kT2YoJ21vbnRoJykuZW5kT2YoJ3dlZWsnKTtcclxuICBjb25zdCB3ZWVrcyA9IFtdO1xyXG4gIGxldCBkYXlzID0gW107XHJcbiAgZm9yIChsZXQgZGQgPSBmaXJzdDsgZGQuaXNCZWZvcmUobGFzdCk7IGRkID0gZGQuYWRkKDEsICdkJykpIHtcclxuICAgIGRheXMucHVzaCh7IHllYXI6IGRkLnllYXIoKSwgbW9udGg6IGRkLm1vbnRoKCksIGRhdGU6IGRkLmRhdGUoKSwgdmFsdWU6IGRkLmZvcm1hdCgnWVlZWS1NTS1ERCcpIH0pO1xyXG4gICAgaWYgKGRheXMubGVuZ3RoID09PSA3KSB7XHJcbiAgICAgIHdlZWtzLnB1c2goZGF5cyk7XHJcbiAgICAgIGRheXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgeWVhciwgbW9udGgsIHdlZWtzIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZXBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldERhdGUgPSB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSB8fCBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgdGhpcy5mb2N1c0RhdGUodGFyZ2V0RGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mb2N1c0RhdGUgJiYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKTtcclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRGF0ZTogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGVLZXlEb3duKGRhdGUsIGUpIHtcclxuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gLyBzcGFjZVxyXG4gICAgICB0aGlzLm9uRGF0ZUNsaWNrKGRhdGUpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA+PSAzNyAmJiBlLmtleUNvZGUgPD0gNDApIHsgLy8gY3Vyc29yIGtleVxyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHsgLy8gcmlnaHQgYXJyb3cga2V5XHJcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoMSwgZS5zaGlmdEtleSA/ICdtb250aHMnIDogJ2RheXMnKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM4KSB7IC8vIHVwIGFycm93IGtleVxyXG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKC0xLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBhcnJvdyBrZXlcclxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ3llYXJzJyA6ICd3ZWVrcycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRhcmdldERhdGUgPSB0YXJnZXREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSwgZm9jdXNEYXRlOiB0cnVlIH0pO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDbGljayhkYXRlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRlRm9jdXMoZGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSAhPT0gZGF0ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZTogZGF0ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uWWVhckNoYW5nZShpdGVtKSB7XHJcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcclxuICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkueWVhcihpdGVtLnZhbHVlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aENoYW5nZShtb250aCkge1xyXG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XHJcbiAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZChtb250aCwgJ21vbnRocycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZSkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c0RhdGUoZGF0ZSkge1xyXG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMubW9udGgpO1xyXG4gICAgY29uc3QgZGF0ZUVsID0gZWwucXVlcnlTZWxlY3RvcihgLnNsZHMtZGF5W2RhdGEtZGF0ZS12YWx1ZT1cIiR7ZGF0ZX1cIl1gKTtcclxuICAgIGlmIChkYXRlRWwpIHtcclxuICAgICAgZGF0ZUVsLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XHJcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIXRhcmdldEVsO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRmlsdGVyKGNhbCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyIHNsZHMtZ3JpZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZGF0ZXBpY2tlcl9fZmlsdGVyLS1tb250aCBzbGRzLWdyaWQgc2xkcy1ncmlkLS1hbGlnbi1zcHJlYWQgc2xkcy1zaXplLS0yLW9mLTMnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJyB0eXBlPSdpY29uLWNvbnRhaW5lcicgaWNvbj0nbGVmdCcgc2l6ZT0nc21hbGwnIGFsdD0nUHJldmlvdXMgTW9udGgnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Nb250aENoYW5nZS5iaW5kKHRoaXMsIC0xKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NsZHMtYWxpZ24tbWlkZGxlJz57IG1vbWVudC5tb250aHNTaG9ydCgpW2NhbC5tb250aF0gfTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnIHR5cGU9J2ljb24tY29udGFpbmVyJyBpY29uPSdyaWdodCcgc2l6ZT0nc21hbGwnIGFsdD0nTmV4dCBNb250aCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgMSkgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtc2l6ZS0tMS1vZi0zJz5cclxuICAgICAgICAgIDxQaWNrbGlzdCBjbGFzc05hbWU9J3NsZHMtcGlja2xpc3QtLWZsdWlkIHNsZHMtc2hyaW5rLW5vbmUnIHZhbHVlPXsgY2FsLnllYXIgfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25ZZWFyQ2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmV3IEFycmF5KDExKS5qb2luKCdfJykuc3BsaXQoJ18nKS5tYXAoKGEsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjYWwueWVhciArIGkgLSA1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxQaWNrbGlzdEl0ZW0ga2V5PXsgeWVhciB9IGxhYmVsPXsgeWVhciB9IHZhbHVlPXsgeWVhciB9IC8+O1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvUGlja2xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT0nZGF0ZXBpY2tlcl9fbW9udGgnIHJvbGU9J2dyaWQnIGFyaWEtbGFiZWxsZWRieT0nbW9udGgnIHJlZj0nbW9udGgnPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1vbWVudC53ZWVrZGF5c01pbigpLm1hcCgod2QsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDx0aCBrZXk9eyBpIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFiYnIgdGl0bGU9eyBtb21lbnQud2Vla2RheXMoaSkgfT57IHdkIH08L2FiYnI+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbC53ZWVrcy5tYXAoKGRheXMsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17IGkgfT57IGRheXMubWFwKHRoaXMucmVuZGVyRGF0ZS5iaW5kKHRoaXMsIGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkpIH08L3RyPjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckRhdGUoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5LCBkLCBpKSB7XHJcbiAgICBjb25zdCBlbmFibGVkID0gZC55ZWFyID09PSBjYWwueWVhciAmJiBkLm1vbnRoID09PSBjYWwubW9udGg7XHJcbiAgICBjb25zdCBzZWxlY3RlZCA9IGQudmFsdWUgPT09IHNlbGVjdGVkRGF0ZTtcclxuICAgIGNvbnN0IGlzVG9kYXkgPSBkLnZhbHVlID09PSB0b2RheTtcclxuICAgIGNvbnN0IGRhdGVDbGFzc05hbWUgPSBjbGFzc25hbWVzKHtcclxuICAgICAgJ3NsZHMtZGlzYWJsZWQtdGV4dCc6ICFlbmFibGVkLFxyXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxyXG4gICAgICAnc2xkcy1pcy10b2RheSc6IGlzVG9kYXksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9eyBkYXRlQ2xhc3NOYW1lIH0ga2V5PXsgaSB9IGhlYWRlcnM9eyBtb21lbnQud2Vla2RheXMoaSkgfVxyXG4gICAgICAgIHJvbGU9J2dyaWRjZWxsJyBhcmlhLWRpc2FibGVkPXsgIWVuYWJsZWQgfSBhcmlhLXNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWRheScgdGFiSW5kZXg9eyBlbmFibGVkID8gMCA6IC0xIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyBlbmFibGVkID8gdGhpcy5vbkRhdGVDbGljay5iaW5kKHRoaXMsIGQudmFsdWUpIDogbnVsbCB9XHJcbiAgICAgICAgICBvbktleURvd249eyBlbmFibGVkID8gdGhpcy5vbkRhdGVLZXlEb3duLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cclxuICAgICAgICAgIG9uRm9jdXM9eyBlbmFibGVkID8gdGhpcy5vbkRhdGVGb2N1cy5iaW5kKHRoaXMsIGQudmFsdWUpIDogY2FuY2VsRXZlbnQgfVxyXG4gICAgICAgICAgZGF0YS1kYXRlLXZhbHVlPXsgZC52YWx1ZSB9XHJcbiAgICAgICAgPnsgZC5kYXRlIH08L3NwYW4+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHNlbGVjdGVkRGF0ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCBzZWxlY3RlZERhdGU7XHJcbiAgICBjb25zdCBjYWwgPSBjcmVhdGVDYWxlbmRhck9iamVjdCh0YXJnZXREYXRlKTtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy1kYXRlcGlja2VyJywgY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZGF0ZXBpY2tlckNsYXNzTmFtZXMgfSByZWY9J2RhdGVwaWNrZXInIGFyaWEtaGlkZGVuPXsgZmFsc2UgfVxyXG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfSBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgPlxyXG4gICAgICAgIHsgdGhpcy5yZW5kZXJGaWx0ZXIoY2FsKSB9XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlck1vbnRoKGNhbCwgc2VsZWN0ZWREYXRlLCB0b2RheSkgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuRGF0ZXBpY2tlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkRGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG4iXX0=