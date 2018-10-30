'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookupCandidateListPortal = exports.LookupSearch = exports.LookupSelection = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _AutoAlign = require('./AutoAlign');

var _AutoAlign2 = _interopRequireDefault(_AutoAlign);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Pill = require('./Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _DropdownMenu = require('./DropdownMenu');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */
var LookupEntryType = _propTypes2.default.shape({
  category: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  meta: _propTypes2.default.string
});

/**
 *
 */

var LookupSelection = exports.LookupSelection = function (_Component) {
  (0, _inherits3.default)(LookupSelection, _Component);

  function LookupSelection() {
    (0, _classCallCheck3.default)(this, LookupSelection);
    return (0, _possibleConstructorReturn3.default)(this, (LookupSelection.__proto__ || (0, _getPrototypeOf2.default)(LookupSelection)).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupSelection, [{
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 8 || e.keyCode === 46) {
        // Bacspace / DEL
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onResetSelection) {
          this.props.onResetSelection();
        }
      }
    }
  }, {
    key: 'renderPill',
    value: function renderPill(selected) {
      var _this2 = this;

      var onPillClick = function onPillClick(e) {
        e.target.focus();
        e.preventDefault();
        e.stopPropagation();
      };
      return _react2.default.createElement(_Pill2.default, {
        id: this.props.id,
        truncate: true,
        pillRef: function pillRef(node) {
          return _this2.pill = node;
        },
        onKeyDown: this.onKeyDown.bind(this),
        onClick: onPillClick,
        tabIndex: 0,
        icon: selected.icon ? {
          category: selected.category,
          icon: selected.icon
        } : undefined,
        label: selected.label,
        onRemove: this.props.onResetSelection
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hidden = _props.hidden,
          selected = _props.selected,
          lookupSelectionRef = _props.lookupSelectionRef;

      var lookupClassNames = (0, _classnames2.default)({ 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { ref: lookupSelectionRef, className: lookupClassNames },
        _react2.default.createElement(
          'div',
          { className: 'slds-pill__container' },
          selected ? this.renderPill(selected) : undefined
        )
      );
    }
  }]);
  return LookupSelection;
}(_react.Component);

/**
 *
 */


LookupSelection.propTypes = {
  id: _propTypes2.default.string,
  selected: LookupEntryType,
  hidden: _propTypes2.default.bool,
  onResetSelection: _propTypes2.default.func,
  lookupSelectionRef: _propTypes2.default.func
};
var ICON_ALIGNS = ['left', 'right'];

/**
 *
 */

var LookupSearch = exports.LookupSearch = function (_Component2) {
  (0, _inherits3.default)(LookupSearch, _Component2);

  function LookupSearch(props) {
    (0, _classCallCheck3.default)(this, LookupSearch);

    /* eslint-disable max-len */
    var _this3 = (0, _possibleConstructorReturn3.default)(this, (LookupSearch.__proto__ || (0, _getPrototypeOf2.default)(LookupSearch)).call(this, props));

    _this3.onLookupIconClick = function () {
      _this3.props.onSubmit();
    };

    _this3.onInputKeyDown = function (e) {
      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        var searchText = e.target.value;
        if (searchText) {
          _this3.props.onSubmit();
        } else {
          // if no search text, quit lookup search
          _this3.props.onComplete();
        }
      } else if (e.keyCode === 40) {
        // down key
        e.preventDefault();
        e.stopPropagation();
        _this3.props.onPressDown();
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        // quit lookup search (cancel)
        var cancel = true;
        _this3.props.onComplete(cancel);
      }
      if (_this3.props.onKeyDown) {
        _this3.props.onKeyDown(e);
      }
    };

    _this3.onInputChange = function (e) {
      var searchText = e.target.value;
      _this3.props.onChange(searchText);
    };

    _this3.onInputBlur = function (e) {
      setTimeout(function () {
        if (!_this3.isFocusedInComponent()) {
          if (_this3.props.onBlur) {
            _this3.props.onBlur(e);
          }
        }
      }, 10);
    };

    _this3.onScopeMenuClick = function (e) {
      if (_this3.props.onScopeMenuClick) {
        _this3.props.onScopeMenuClick(e);
      }
    };

    _this3.onMenuItemClick = function (scope) {
      if (_this3.props.onScopeChange) {
        _this3.props.onScopeChange(scope.value);
      }
    };

    _this3.handleLookupSearchRef = function (node) {
      _this3.node = node;
      var lookupSearchRef = _this3.props.lookupSearchRef;

      if (lookupSearchRef) {
        lookupSearchRef(node);
      }
    };

    (0, _util.registerStyle)('lookupSearch', [['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector', '{ min-width: 3rem; }'], ['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector .slds-dropdown-trigger', '{ margin-left: 0; }'], ['.slds-lookup[data-scope="multi"] .react-slds-lookup-scope-selector .slds-dropdown-trigger .slds-button', '{ padding: 0 0.25rem; }'], ['.slds-lookup[data-scope="multi"] .slds-box--border', '{ background-color: white; }'], ['.slds-lookup[data-scope="multi"] .slds-box--border.react-slds-box-disabled', '{ background-color: #e0e5ee; border-color: #a8b7c7; cursor: not-allowed; }'], ['.slds-lookup[data-scope="multi"] .slds-box--border .slds-input--bare', '{ height: 2.15rem; width: 100%; }']]);
    return _this3;
  }

  (0, _createClass3.default)(LookupSearch, [{
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      return (0, _util.isElInChildren)(this.node, document.activeElement);
    }
  }, {
    key: 'renderSearchInput',
    value: function renderSearchInput(props) {
      var _this4 = this;

      var className = props.className,
          hidden = props.hidden,
          searchText = props.searchText,
          _props$iconAlign = props.iconAlign,
          iconAlign = _props$iconAlign === undefined ? 'right' : _props$iconAlign;

      var searchInputClassNames = (0, _classnames2.default)('slds-grid', 'slds-input-has-icon', 'slds-input-has-icon--' + iconAlign, { 'slds-hide': hidden }, className);
      var pprops = (0, _assign2.default)({}, props);
      delete pprops.iconAlign;
      delete pprops.searchText;
      delete pprops.targetScope;
      delete pprops.onScopeMenuClick;
      delete pprops.onScopeChange;
      delete pprops.onPressDown;
      delete pprops.onComplete;
      delete pprops.defaultTargetScope;
      delete pprops.onSearchTextChange;
      delete pprops.scopes;
      delete pprops.onLookupRequest;
      delete pprops.defaultSearchText;
      delete pprops.onValueChange;
      delete pprops.lookupSearchRef;
      return _react2.default.createElement(
        'div',
        { ref: this.handleLookupSearchRef, className: searchInputClassNames },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({}, pprops, {
          inputRef: function inputRef(node) {
            return _this4.input = node;
          },
          value: searchText,
          onKeyDown: this.onInputKeyDown,
          onChange: this.onInputChange,
          onBlur: this.onInputBlur
        })),
        _react2.default.createElement(
          'span',
          {
            tabIndex: -1,
            style: props.disabled ? undefined : { position: 'relative', cursor: 'pointer', outline: 'none' },
            onClick: props.disabled ? undefined : this.onLookupIconClick,
            onBlur: this.onInputBlur
          },
          _react2.default.createElement(_Icon2.default, {
            icon: 'search',
            className: 'slds-input__icon'
          })
        )
      );
    }
  }, {
    key: 'renderScopeSelector',
    value: function renderScopeSelector(_ref) {
      var scopes = _ref.scopes,
          target = _ref.targetScope,
          disabled = _ref.disabled;

      var targetScope = scopes[0] || {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(scopes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var scope = _step.value;

          if (scope.value === target) {
            targetScope = scope;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var icon = _react2.default.createElement(_Icon2.default, { icon: targetScope.icon || 'none', size: 'x-small' });
      var selectorClassNames = (0, _classnames2.default)('slds-grid', 'slds-grid--align-center', 'slds-grid--vertical-align-center', 'react-slds-lookup-scope-selector');
      return _react2.default.createElement(
        'div',
        { className: selectorClassNames },
        _react2.default.createElement(
          _DropdownButton2.default,
          {
            label: icon,
            disabled: disabled,
            onClick: this.onScopeMenuClick,
            onMenuItemClick: this.onMenuItemClick,
            onBlur: this.onInputBlur
          },
          scopes.map(function (scope) {
            return _react2.default.createElement(_DropdownMenu.DropdownMenuItem, (0, _extends3.default)({ key: scope.value }, scope));
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          scopes = _props2.scopes,
          hidden = _props2.hidden,
          disabled = _props2.disabled,
          targetScope = _props2.targetScope,
          props = (0, _objectWithoutProperties3.default)(_props2, ['scopes', 'hidden', 'disabled', 'targetScope']);

      if (scopes) {
        var lookupSearchClassNames = (0, _classnames2.default)('slds-grid', 'slds-form-element__control', 'slds-box--border', { 'react-slds-box-disabled': disabled }, { 'slds-hide': hidden });
        var styles = { WebkitFlexWrap: 'nowrap', msFlexWrap: 'nowrap', flexWrap: 'nowrap' };
        return _react2.default.createElement(
          'div',
          { ref: this.handleLookupSearchRef, className: lookupSearchClassNames, style: styles },
          this.renderScopeSelector({ scopes: scopes, targetScope: targetScope, disabled: disabled }),
          this.renderSearchInput((0, _extends3.default)({}, props, { disabled: disabled, className: 'slds-col', bare: true }))
        );
      }
      return this.renderSearchInput(this.props);
    }
  }]);
  return LookupSearch;
}(_react.Component);

/**
 *
 */


LookupSearch.propTypes = {
  className: _propTypes2.default.string,
  hidden: _propTypes2.default.bool,
  searchText: _propTypes2.default.string,
  scopes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.string,
    icon: _propTypes2.default.string
  })),
  targetScope: _propTypes2.default.any, // eslint-disable-line
  iconAlign: _propTypes2.default.oneOf(ICON_ALIGNS),
  disabled: _propTypes2.default.bool,
  onKeyDown: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onScopeMenuClick: _propTypes2.default.func,
  onScopeChange: _propTypes2.default.func,
  onPressDown: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  lookupSearchRef: _propTypes2.default.func
};

var LookupCandidateList = function (_Component3) {
  (0, _inherits3.default)(LookupCandidateList, _Component3);

  function LookupCandidateList() {
    (0, _classCallCheck3.default)(this, LookupCandidateList);
    return (0, _possibleConstructorReturn3.default)(this, (LookupCandidateList.__proto__ || (0, _getPrototypeOf2.default)(LookupCandidateList)).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupCandidateList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus) {
        this.focusToTargetItemEl(0);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this6 = this;

      if (this.props.focus && !prevProps.focus) {
        setTimeout(function () {
          _this6.focusToTargetItemEl(0);
        }, 10);
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(entry) {
      if (this.props.onSelect) {
        this.props.onSelect(entry);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        // UP/DOWN
        e.preventDefault();
        e.stopPropagation();
        var currentEl = e.target.parentElement;
        var itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
        while (itemEl) {
          var anchorEl = itemEl.querySelector('.react-slds-candidate[tabIndex]');
          if (anchorEl && !anchorEl.disabled) {
            anchorEl.focus();
            return;
          }
          itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.onSelect(null);
      }
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl(index) {
      var el = this.node;
      if (!el) {
        return;
      }
      var anchors = el.querySelectorAll('.react-slds-candidate[tabIndex]');
      if (anchors[index]) {
        anchors[index].focus();
      }
    }
  }, {
    key: 'renderCandidate',
    value: function renderCandidate(entry) {
      var _this7 = this;

      var category = entry.category,
          icon = entry.icon,
          label = entry.label,
          value = entry.value,
          meta = entry.meta;

      return _react2.default.createElement(
        'li',
        { key: value, role: 'presentation' },
        _react2.default.createElement(
          'a',
          {
            className: 'slds-lookup__item-action react-slds-candidate',
            tabIndex: -1,
            role: 'option',
            onKeyDown: function onKeyDown(e) {
              return e.keyCode === 13 && _this7.onSelect(entry);
            },
            onBlur: this.props.onBlur,
            onClick: function onClick() {
              return _this7.onSelect(entry);
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'slds-truncate', style: { display: 'inline-flex', alignItems: 'center' } },
            icon ? _react2.default.createElement(_Icon2.default, {
              style: { minWidth: '1.5rem' },
              className: 'slds-m-right--x-small',
              category: category,
              icon: icon,
              size: 'small'
            }) : undefined,
            _react2.default.createElement(
              'div',
              { className: 'slds-truncate' },
              _react2.default.createElement(
                'span',
                { className: 'slds-lookup__result-text slds-truncate' },
                label
              ),
              meta ? _react2.default.createElement(
                'span',
                { className: 'slds-lookup__result-meta slds-truncate' },
                meta
              ) : undefined
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var trueFilter = function trueFilter() {
        return true;
      };
      var _props3 = this.props,
          _props3$data = _props3.data,
          data = _props3$data === undefined ? [] : _props3$data,
          loading = _props3.loading,
          header = _props3.header,
          footer = _props3.footer,
          _props3$filter = _props3.filter,
          filter = _props3$filter === undefined ? trueFilter : _props3$filter,
          align = _props3.align,
          vertAlign = _props3.vertAlign,
          listRef = _props3.listRef;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', 'slds-show');
      var listStyles = (0, _extends3.default)({
        minWidth: '15rem'
      }, vertAlign === 'bottom' ? { bottom: '100%' } : {}, align === 'right' ? { left: 'auto', right: 0 } : {});
      var handleDOMRef = function handleDOMRef(node) {
        _this8.node = node;
        if (listRef) {
          listRef(node);
        }
      };
      return _react2.default.createElement(
        'div',
        {
          ref: handleDOMRef,
          className: lookupMenuClassNames,
          style: listStyles,
          role: 'listbox',
          onKeyDown: this.onKeyDown.bind(this)
        },
        header ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          header
        ) : undefined,
        _react2.default.createElement(
          'ul',
          { className: 'slds-lookup__list', role: 'presentation' },
          data.filter(filter).map(this.renderCandidate.bind(this)),
          loading ? _react2.default.createElement(
            'li',
            { className: 'slds-lookup__item', key: 'loading', style: { height: 20 } },
            _react2.default.createElement(_Spinner2.default, { container: false, size: 'small', style: { margin: '0 auto' } })
          ) : undefined
        ),
        footer ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          footer
        ) : undefined
      );
    }
  }]);
  return LookupCandidateList;
}(_react.Component);

LookupCandidateList.propTypes = {
  data: _propTypes2.default.arrayOf(LookupEntryType),
  focus: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  filter: _propTypes2.default.func,
  align: _propTypes2.default.oneOf(['left', 'right']),
  vertAlign: _propTypes2.default.oneOf(['top', 'bottom']),
  listRef: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node
};
var LookupCandidateListPortal = exports.LookupCandidateListPortal = (0, _AutoAlign2.default)({
  triggerSelector: '.slds-lookup'
})(LookupCandidateList);

/**
 *
 */

var Lookup = function (_Component4) {
  (0, _inherits3.default)(Lookup, _Component4);

  function Lookup(props) {
    (0, _classCallCheck3.default)(this, Lookup);

    var _this9 = (0, _possibleConstructorReturn3.default)(this, (Lookup.__proto__ || (0, _getPrototypeOf2.default)(Lookup)).call(this, props));

    _this9.state = {
      id: 'form-element-' + (0, _util.uuid)(),
      selected: props.defaultSelected,
      opened: props.defaultOpened,
      searchText: props.defaultSearchText,
      targetScope: props.defaultTargetScope,
      focusFirstCandidate: false
    };
    return _this9;
  }

  (0, _createClass3.default)(Lookup, [{
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      this.setState({ opened: false });
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onSearchInputClick',
    value: function onSearchInputClick() {
      if (this.props.data && this.props.data.length) {
        this.setState({ opened: true });
      }
    }
  }, {
    key: 'onScopeChange',
    value: function onScopeChange(targetScope) {
      this.setState({ targetScope: targetScope });
      if (this.props.onScopeChange) {
        this.props.onScopeChange(targetScope);
      }
    }
  }, {
    key: 'onSearchTextChange',
    value: function onSearchTextChange(searchText) {
      this.setState({ searchText: searchText });
      this.setState({ opened: true });
      if (this.props.onSearchTextChange) {
        this.props.onSearchTextChange(searchText);
      }
    }
  }, {
    key: 'onLookupRequest',
    value: function onLookupRequest(searchText) {
      this.setState({ opened: true });
      if (this.props.onLookupRequest) {
        this.props.onLookupRequest(searchText);
      }
    }
  }, {
    key: 'onResetSelection',
    value: function onResetSelection() {
      var _this10 = this;

      this.setState({ selected: null });
      if (this.props.onSelect) {
        this.props.onSelect(null);
      }
      this.onSearchTextChange('');
      this.onLookupRequest('');
      setTimeout(function () {
        var searchElem = _this10.search;
        var inputElem = searchElem && searchElem.querySelector('input');
        if (!inputElem) {
          return;
        }
        inputElem.focus();
      }, 10);
    }
  }, {
    key: 'onLookupItemSelect',
    value: function onLookupItemSelect(selected) {
      var _this11 = this;

      if (selected) {
        this.setState({ selected: selected, opened: false });
        if (this.props.onSelect) {
          this.props.onSelect(selected);
        }
        setTimeout(function () {
          var selectionElem = _this11.selection;
          var pillElem = selectionElem && selectionElem.querySelector('a');
          if (pillElem) {
            pillElem.focus();
          }
        }, 10);
      } else {
        this.setState({ opened: false });
        setTimeout(function () {
          var searchElem = _this11.search;
          var inputElem = searchElem.querySelector('input');
          inputElem.focus();
        }, 10);
      }
      if (this.props.onComplete) {
        this.props.onComplete(); // tell the component container to quit lookup
      }
    }
  }, {
    key: 'onFocusFirstCandidate',
    value: function onFocusFirstCandidate() {
      var _this12 = this;

      var _props$opened = this.props.opened,
          opened = _props$opened === undefined ? this.state.opened : _props$opened;

      if (!opened) {
        this.onLookupRequest(this.state.searchText);
      } else {
        this.setState({ focusFirstCandidate: true });
        setTimeout(function () {
          _this12.setState({ focusFirstCandidate: false });
        }, 10);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this13 = this;

      setTimeout(function () {
        if (!_this13.isFocusedInComponent()) {
          _this13.setState({ opened: false });
          if (_this13.props.onBlur) {
            _this13.props.onBlur();
          }
          if (_this13.props.onComplete) {
            _this13.props.onComplete(true); // quit lookup (cancel)
          }
        }
      }, 10);
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var targetEl = document.activeElement;
      return (0, _util.isElInChildren)(this.node, targetEl) || (0, _util.isElInChildren)(this.candidateList, targetEl);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this14 = this;

      var id = this.props.id || this.state.id;
      var _props4 = this.props,
          totalCols = _props4.totalCols,
          cols = _props4.cols,
          label = _props4.label,
          required = _props4.required,
          error = _props4.error,
          className = _props4.className,
          _props4$selected = _props4.selected,
          selected = _props4$selected === undefined ? this.state.selected : _props4$selected,
          _props4$opened = _props4.opened,
          opened = _props4$opened === undefined ? this.state.opened : _props4$opened,
          _props4$searchText = _props4.searchText,
          searchText = _props4$searchText === undefined ? this.state.searchText : _props4$searchText,
          _props4$targetScope = _props4.targetScope,
          targetScope = _props4$targetScope === undefined ? this.state.targetScope : _props4$targetScope,
          loading = _props4.loading,
          lookupFilter = _props4.lookupFilter,
          listHeader = _props4.listHeader,
          listFooter = _props4.listFooter,
          data = _props4.data,
          onComplete = _props4.onComplete,
          props = (0, _objectWithoutProperties3.default)(_props4, ['totalCols', 'cols', 'label', 'required', 'error', 'className', 'selected', 'opened', 'searchText', 'targetScope', 'loading', 'lookupFilter', 'listHeader', 'listFooter', 'data', 'onComplete']);

      var lookupClassNames = (0, _classnames2.default)('slds-lookup', { 'slds-has-selection': selected }, className);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error };
      /* eslint-disable no-unused-vars */
      var defaultSelected = props.defaultSelected,
          defaultOpened = props.defaultOpened,
          defaultSearchText = props.defaultSearchText,
          defaultTargetScope = props.defaultTargetScope,
          onSelect = props.onSelect,
          onBlur = props.onBlur,
          onScopeChange = props.onScopeChange,
          onScopeMenuClick = props.onScopeMenuClick,
          onSearchTextChange = props.onSearchTextChange,
          onLookupRequest = props.onLookupRequest,
          searchProps = (0, _objectWithoutProperties3.default)(props, ['defaultSelected', 'defaultOpened', 'defaultSearchText', 'defaultTargetScope', 'onSelect', 'onBlur', 'onScopeChange', 'onScopeMenuClick', 'onSearchTextChange', 'onLookupRequest']);
      /* eslint-enable no-unused-vars */

      return _react2.default.createElement(
        _FormElement2.default,
        (0, _extends3.default)({ formElementRef: function formElementRef(node) {
            return _this14.node = node;
          } }, formElemProps),
        _react2.default.createElement(
          'div',
          {
            className: lookupClassNames,
            ref: function ref(node) {
              return _this14.node = node;
            },
            'data-select': 'single',
            'data-scope': props.scopes ? 'multi' : 'single',
            'data-typeahead': false
          },
          selected ? _react2.default.createElement(LookupSelection, {
            id: id,
            lookupSelectionRef: function lookupSelectionRef(node) {
              return _this14.selection = node;
            },
            selected: selected,
            onResetSelection: this.onResetSelection.bind(this)
          }) : _react2.default.createElement(LookupSearch, (0, _extends3.default)({}, searchProps, {
            id: id,
            lookupSearchRef: function lookupSearchRef(node) {
              return _this14.search = node;
            },
            searchText: searchText,
            targetScope: targetScope,
            onScopeMenuClick: this.onScopeMenuClick.bind(this),
            onScopeChange: this.onScopeChange.bind(this),
            onChange: this.onSearchTextChange.bind(this),
            onSubmit: function onSubmit() {
              return _this14.onLookupRequest(searchText);
            },
            onPressDown: this.onFocusFirstCandidate.bind(this),
            onComplete: onComplete,
            onBlur: this.onBlur.bind(this),
            onClick: this.onSearchInputClick.bind(this)
          })),
          opened ? _react2.default.createElement(LookupCandidateListPortal, {
            portalClassName: lookupClassNames,
            listRef: function listRef(node) {
              return _this14.candidateList = node;
            },
            data: data,
            focus: this.state.focusFirstCandidate,
            loading: loading,
            filter: lookupFilter ? function (entry) {
              return lookupFilter(entry, searchText, targetScope);
            } : undefined,
            header: listHeader,
            footer: listFooter,
            onSelect: this.onLookupItemSelect.bind(this),
            onBlur: this.onBlur.bind(this)
          }) : undefined
        )
      );
    }
  }]);
  return Lookup;
}(_react.Component);

Lookup.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  selected: LookupEntryType,
  defaultSelected: LookupEntryType,
  opened: _propTypes2.default.bool,
  defaultOpened: _propTypes2.default.bool,
  searchText: _propTypes2.default.string,
  defaultSearchText: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  data: _propTypes2.default.arrayOf(LookupEntryType),
  lookupFilter: _propTypes2.default.func,
  listHeader: _propTypes2.default.node,
  listFooter: _propTypes2.default.node,
  scopes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.string,
    icon: _propTypes2.default.string
  })),
  targetScope: _propTypes2.default.string,
  iconAlign: _propTypes2.default.oneOf(ICON_ALIGNS),
  defaultTargetScope: _propTypes2.default.string,
  onSearchTextChange: _propTypes2.default.func,
  onScopeMenuClick: _propTypes2.default.func,
  onScopeChange: _propTypes2.default.func,
  onLookupRequest: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number
};
Lookup.isFormElement = true;
exports.default = Lookup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBFbnRyeVR5cGUiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImNhdGVnb3J5Iiwic3RyaW5nIiwiaWNvbiIsImxhYmVsIiwidmFsdWUiLCJtZXRhIiwiTG9va3VwU2VsZWN0aW9uIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwib25SZXNldFNlbGVjdGlvbiIsInNlbGVjdGVkIiwib25QaWxsQ2xpY2siLCJ0YXJnZXQiLCJmb2N1cyIsImlkIiwicGlsbCIsIm5vZGUiLCJvbktleURvd24iLCJiaW5kIiwidW5kZWZpbmVkIiwiaGlkZGVuIiwibG9va3VwU2VsZWN0aW9uUmVmIiwibG9va3VwQ2xhc3NOYW1lcyIsInJlbmRlclBpbGwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIklDT05fQUxJR05TIiwiTG9va3VwU2VhcmNoIiwib25Mb29rdXBJY29uQ2xpY2siLCJvblN1Ym1pdCIsIm9uSW5wdXRLZXlEb3duIiwic2VhcmNoVGV4dCIsIm9uQ29tcGxldGUiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwib3V0bGluZSIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJhcnJheU9mIiwiYW55Iiwib25lT2YiLCJMb29rdXBDYW5kaWRhdGVMaXN0IiwiZm9jdXNUb1RhcmdldEl0ZW1FbCIsInByZXZQcm9wcyIsImVudHJ5Iiwib25TZWxlY3QiLCJjdXJyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXRlbUVsIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmRleCIsImVsIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1pbldpZHRoIiwidHJ1ZUZpbHRlciIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwiYWxpZ24iLCJ2ZXJ0QWxpZ24iLCJsaXN0UmVmIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJsaXN0U3R5bGVzIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiaGFuZGxlRE9NUmVmIiwicmVuZGVyQ2FuZGlkYXRlIiwiaGVpZ2h0IiwibWFyZ2luIiwiTG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbCIsInRyaWdnZXJTZWxlY3RvciIsIkxvb2t1cCIsInN0YXRlIiwiZGVmYXVsdFNlbGVjdGVkIiwib3BlbmVkIiwiZGVmYXVsdE9wZW5lZCIsImZvY3VzRmlyc3RDYW5kaWRhdGUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsInNlYXJjaEVsZW0iLCJzZWFyY2giLCJpbnB1dEVsZW0iLCJzZWxlY3Rpb25FbGVtIiwic2VsZWN0aW9uIiwicGlsbEVsZW0iLCJ0YXJnZXRFbCIsImNhbmRpZGF0ZUxpc3QiLCJ0b3RhbENvbHMiLCJjb2xzIiwicmVxdWlyZWQiLCJlcnJvciIsImxvb2t1cEZpbHRlciIsImxpc3RIZWFkZXIiLCJsaXN0Rm9vdGVyIiwiZm9ybUVsZW1Qcm9wcyIsInNlYXJjaFByb3BzIiwib25Gb2N1c0ZpcnN0Q2FuZGlkYXRlIiwib25TZWFyY2hJbnB1dENsaWNrIiwib25Mb29rdXBJdGVtU2VsZWN0IiwiRm9ybUVsZW1lbnQiLCJkZWZhdWx0VmFsdWUiLCJudW1iZXIiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7QUFHQSxJQUFNQSxrQkFBa0JDLG9CQUFVQyxLQUFWLENBQWdCO0FBQ3RDQyxZQUFVRixvQkFBVUcsTUFEa0I7QUFFdENDLFFBQU1KLG9CQUFVRyxNQUZzQjtBQUd0Q0UsU0FBT0wsb0JBQVVHLE1BSHFCO0FBSXRDRyxTQUFPTixvQkFBVUcsTUFKcUI7QUFLdENJLFFBQU1QLG9CQUFVRztBQUxzQixDQUFoQixDQUF4Qjs7QUFRQTs7OztJQUdhSyxlLFdBQUFBLGU7Ozs7Ozs7Ozs7OEJBU0RDLEMsRUFBRztBQUNYLFVBQUlBLEVBQUVDLE9BQUYsS0FBYyxDQUFkLElBQW1CRCxFQUFFQyxPQUFGLEtBQWMsRUFBckMsRUFBeUM7QUFBRTtBQUN6Q0QsVUFBRUUsY0FBRjtBQUNBRixVQUFFRyxlQUFGO0FBQ0EsWUFBSSxLQUFLQyxLQUFMLENBQVdDLGdCQUFmLEVBQWlDO0FBQy9CLGVBQUtELEtBQUwsQ0FBV0MsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVUMsUSxFQUFVO0FBQUE7O0FB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L0Msb0JBQVVnQyxJQWpDRDtBQWtDakJ5RCxZQUFVekYsb0JBQVVnQyxJQWxDSDtBQW1DakJPLGNBQVl2QyxvQkFBVWdDLElBbkNMO0FBb0NqQjRHLGFBQVc1SSxvQkFBVTBKLE1BcENKO0FBcUNqQmIsUUFBTTdJLG9CQUFVMEo7QUFyQ0MsQztBQURBOUIsTSxDQXlDWitCLGEsR0FBZ0IsSTtrQkF6Q0ovQixNIiwiZmlsZSI6Ikxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgYXV0b0FsaWduIGZyb20gJy4vQXV0b0FsaWduJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi9QaWxsJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcbmltcG9ydCB7IERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cblxuLyoqXG4gKlxuICovXG5jb25zdCBMb29rdXBFbnRyeVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cFNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9uUmVzZXRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvb2t1cFNlbGVjdGlvblJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlsbChzZWxlY3RlZCkge1xuICAgIGNvbnN0IG9uUGlsbENsaWNrID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxQaWxsXG4gICAgICAgIGlkPXsgdGhpcy5wcm9wcy5pZCB9XG4gICAgICAgIHRydW5jYXRlXG4gICAgICAgIHBpbGxSZWY9eyBub2RlID0+ICh0aGlzLnBpbGwgPSBub2RlKSB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsaWNrPXsgb25QaWxsQ2xpY2sgfVxuICAgICAgICB0YWJJbmRleD17IDAgfVxuICAgICAgICBpY29uPXtzZWxlY3RlZC5pY29uID8ge1xuICAgICAgICAgIGNhdGVnb3J5OiBzZWxlY3RlZC5jYXRlZ29yeSxcbiAgICAgICAgICBpY29uOiBzZWxlY3RlZC5pY29uLFxuICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICBsYWJlbD17IHNlbGVjdGVkLmxhYmVsIH1cbiAgICAgICAgb25SZW1vdmU9eyB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24gfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuLCBzZWxlY3RlZCwgbG9va3VwU2VsZWN0aW9uUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IGxvb2t1cFNlbGVjdGlvblJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fY29udGFpbmVyJz5cbiAgICAgICAgICB7IHNlbGVjdGVkID8gdGhpcy5yZW5kZXJQaWxsKHNlbGVjdGVkKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuLyoqXG4gKlxuICovXG5jb25zdCBJQ09OX0FMSUdOUyA9IFsnbGVmdCcsICdyaWdodCddO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29rdXBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIH0pXG4gICAgKSxcbiAgICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLmFueSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblByZXNzRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvb2t1cFNlYXJjaFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmVnaXN0ZXJTdHlsZSgnbG9va3VwU2VhcmNoJywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InLFxuICAgICAgICAneyBtaW4td2lkdGg6IDNyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAgICAneyBtYXJnaW4tbGVmdDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlciAuc2xkcy1idXR0b24nLFxuICAgICAgICAneyBwYWRkaW5nOiAwIDAuMjVyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlci5yZWFjdC1zbGRzLWJveC1kaXNhYmxlZCcsXG4gICAgICAgICd7IGJhY2tncm91bmQtY29sb3I6ICNlMGU1ZWU7IGJvcmRlci1jb2xvcjogI2E4YjdjNzsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlciAuc2xkcy1pbnB1dC0tYmFyZScsXG4gICAgICAgICd7IGhlaWdodDogMi4xNXJlbTsgd2lkdGg6IDEwMCU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIG9uTG9va3VwSWNvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbm8gc2VhcmNoIHRleHQsIHF1aXQgbG9va3VwIHNlYXJjaFxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uUHJlc3NEb3duKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIHF1aXQgbG9va3VwIHNlYXJjaCAoY2FuY2VsKVxuICAgICAgY29uc3QgY2FuY2VsID0gdHJ1ZTtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZShjYW5jZWwpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlYXJjaFRleHQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51SXRlbUNsaWNrID0gKHNjb3BlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHNjb3BlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGhhbmRsZUxvb2t1cFNlYXJjaFJlZiA9IChub2RlKSA9PiB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICBjb25zdCB7IGxvb2t1cFNlYXJjaFJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobG9va3VwU2VhcmNoUmVmKSB7IGxvb2t1cFNlYXJjaFJlZihub2RlKTsgfVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoSW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGlkZGVuLCBzZWFyY2hUZXh0LCBpY29uQWxpZ24gPSAncmlnaHQnIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWFyY2hJbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbicsXG4gICAgICBgc2xkcy1pbnB1dC1oYXMtaWNvbi0tJHtpY29uQWxpZ259YCxcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcbiAgICBjb25zdCBwcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgZGVsZXRlIHBwcm9wcy5pY29uQWxpZ247XG4gICAgZGVsZXRlIHBwcm9wcy5zZWFyY2hUZXh0O1xuICAgIGRlbGV0ZSBwcHJvcHMudGFyZ2V0U2NvcGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNjb3BlTWVudUNsaWNrO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TY29wZUNoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLm9uUHJlc3NEb3duO1xuICAgIGRlbGV0ZSBwcHJvcHMub25Db21wbGV0ZTtcbiAgICBkZWxldGUgcHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZTtcbiAgICBkZWxldGUgcHByb3BzLm9uU2VhcmNoVGV4dENoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLnNjb3BlcztcbiAgICBkZWxldGUgcHByb3BzLm9uTG9va3VwUmVxdWVzdDtcbiAgICBkZWxldGUgcHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0O1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLmxvb2t1cFNlYXJjaFJlZjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9eyB0aGlzLmhhbmRsZUxvb2t1cFNlYXJjaFJlZiB9IGNsYXNzTmFtZT17IHNlYXJjaElucHV0Q2xhc3NOYW1lcyB9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICAgICAgaW5wdXRSZWY9eyBub2RlID0+ICh0aGlzLmlucHV0ID0gbm9kZSkgfVxuICAgICAgICAgIHZhbHVlPXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBjdXJzb3I6ICdwb2ludGVyJywgb3V0bGluZTogJ25vbmUnIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25Mb29rdXBJY29uQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249J3NlYXJjaCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbidcbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2NvcGVTZWxlY3Rvcih7IHNjb3BlcywgdGFyZ2V0U2NvcGU6IHRhcmdldCwgZGlzYWJsZWQgfSkge1xuICAgIGxldCB0YXJnZXRTY29wZSA9IHNjb3Blc1swXSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKHNjb3BlLnZhbHVlID09PSB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0U2NvcGUgPSBzY29wZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGljb24gPSA8SWNvbiBpY29uPXsgdGFyZ2V0U2NvcGUuaWNvbiB8fCAnbm9uZScgfSBzaXplPSd4LXNtYWxsJyAvPjtcbiAgICBjb25zdCBzZWxlY3RvckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1ncmlkLS1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3NsZHMtZ3JpZC0tdmVydGljYWwtYWxpZ24tY2VudGVyJyxcbiAgICAgICdyZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcidcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNlbGVjdG9yQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICBsYWJlbD17IGljb24gfVxuICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2sgfVxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgc2NvcGVzLm1hcChzY29wZSA9PiA8RHJvcGRvd25NZW51SXRlbSBrZXk9eyBzY29wZS52YWx1ZSB9IHsgLi4uc2NvcGUgfSAvPikgfVxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjb3BlcywgaGlkZGVuLCBkaXNhYmxlZCwgdGFyZ2V0U2NvcGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzY29wZXMpIHtcbiAgICAgIGNvbnN0IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgJ3NsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICB7ICdyZWFjdC1zbGRzLWJveC1kaXNhYmxlZCc6IGRpc2FibGVkIH0sXG4gICAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgICApO1xuICAgICAgY29uc3Qgc3R5bGVzID0geyBXZWJraXRGbGV4V3JhcDogJ25vd3JhcCcsIG1zRmxleFdyYXA6ICdub3dyYXAnLCBmbGV4V3JhcDogJ25vd3JhcCcgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXsgdGhpcy5oYW5kbGVMb29rdXBTZWFyY2hSZWYgfSBjbGFzc05hbWU9eyBsb29rdXBTZWFyY2hDbGFzc05hbWVzIH0gc3R5bGU9eyBzdHlsZXMgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2NvcGVTZWxlY3Rvcih7IHNjb3BlcywgdGFyZ2V0U2NvcGUsIGRpc2FibGVkIH0pIH1cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoeyAuLi5wcm9wcywgZGlzYWJsZWQsIGNsYXNzTmFtZTogJ3NsZHMtY29sJywgYmFyZTogdHJ1ZSB9KSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQodGhpcy5wcm9wcyk7XG4gIH1cblxufVxuXG4vKipcbiAqXG4gKi9cbmNsYXNzIExvb2t1cENhbmRpZGF0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gICAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gICAgdmVydEFsaWduOiBQcm9wVHlwZXMub25lT2YoWyd0b3AnLCAnYm90dG9tJ10pLFxuICAgIGxpc3RSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICFwcmV2UHJvcHMuZm9jdXMpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3QoZW50cnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlbnRyeSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7IC8vIFVQL0RPV05cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICBhbmNob3JFbC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gaXRlbUVsLm5leHRTaWJsaW5nIDogaXRlbUVsLnByZXZpb3VzU2libGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKGluZGV4KSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm5vZGU7XG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgICBjb25zdCBhbmNob3JzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgIGlmIChhbmNob3JzW2luZGV4XSkge1xuICAgICAgYW5jaG9yc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDYW5kaWRhdGUoZW50cnkpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBpY29uLCBsYWJlbCwgdmFsdWUsIG1ldGEgfSA9IGVudHJ5O1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXsgdmFsdWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0tYWN0aW9uIHJlYWN0LXNsZHMtY2FuZGlkYXRlJ1xuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHJvbGU9J29wdGlvbidcbiAgICAgICAgICBvbktleURvd249eyBlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJyBzdHlsZT17IHsgZGlzcGxheTogJ2lubGluZS1mbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSB9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uID9cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9eyB7IG1pbldpZHRoOiAnMS41cmVtJyB9IH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJ1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9eyBjYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX3Jlc3VsdC10ZXh0IHNsZHMtdHJ1bmNhdGUnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGEgP1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LW1ldGEgc2xkcy10cnVuY2F0ZSc+eyBtZXRhIH08L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cnVlRmlsdGVyID0gKCkgPT4gdHJ1ZTtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhID0gW10sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBmaWx0ZXIgPSB0cnVlRmlsdGVyLFxuICAgICAgYWxpZ24sIHZlcnRBbGlnbixcbiAgICAgIGxpc3RSZWYsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwTWVudUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWxvb2t1cF9fbWVudScsICdzbGRzLXNob3cnKTtcbiAgICBjb25zdCBsaXN0U3R5bGVzID0ge1xuICAgICAgbWluV2lkdGg6ICcxNXJlbScsXG4gICAgICAuLi4odmVydEFsaWduID09PSAnYm90dG9tJyA/IHsgYm90dG9tOiAnMTAwJScgfSA6IHt9KSxcbiAgICAgIC4uLihhbGlnbiA9PT0gJ3JpZ2h0JyA/IHsgbGVmdDogJ2F1dG8nLCByaWdodDogMCB9IDoge30pLFxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlRE9NUmVmID0gKG5vZGUpID0+IHtcbiAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICBpZiAobGlzdFJlZikgeyBsaXN0UmVmKG5vZGUpOyB9XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9eyBoYW5kbGVET01SZWYgfVxuICAgICAgICBjbGFzc05hbWU9eyBsb29rdXBNZW51Q2xhc3NOYW1lcyB9XG4gICAgICAgIHN0eWxlPXsgbGlzdFN0eWxlcyB9XG4gICAgICAgIHJvbGU9J2xpc3Rib3gnXG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBoZWFkZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fbGlzdCcgcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLmZpbHRlcihmaWx0ZXIpLm1hcCh0aGlzLnJlbmRlckNhbmRpZGF0ZS5iaW5kKHRoaXMpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkaW5nID9cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nIGtleT0nbG9hZGluZycgc3R5bGU9eyB7IGhlaWdodDogMjAgfSB9PlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbnRhaW5lcj17ZmFsc2V9IHNpemU9J3NtYWxsJyBzdHlsZT17IHsgbWFyZ2luOiAnMCBhdXRvJyB9IH0gLz5cbiAgICAgICAgICAgICAgPC9saT4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmb290ZXIgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGZvb3RlciB9PC9kaXY+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBMb29rdXBDYW5kaWRhdGVMaXN0UG9ydGFsID0gYXV0b0FsaWduKHtcbiAgdHJpZ2dlclNlbGVjdG9yOiAnLnNsZHMtbG9va3VwJyxcbn0pKExvb2t1cENhbmRpZGF0ZUxpc3QpO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2t1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICAgIGRlZmF1bHRTZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICAgIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0U2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICAgIGxvb2t1cEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbGlzdEZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIH0pXG4gICAgKSxcbiAgICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gICAgZGVmYXVsdFRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VhcmNoVGV4dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Mb29rdXBSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgfVxuXG4gIHN0YXRpYyBpc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0OiBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlOiBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoSW5wdXRDbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRTY29wZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBudWxsIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSgnJyk7XG4gICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QoJycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoO1xuICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbSAmJiBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBpZiAoIWlucHV0RWxlbSkgeyByZXR1cm47IH1cbiAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uTG9va3VwSXRlbVNlbGVjdChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkLCBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRWxlbSA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBwaWxsRWxlbSA9IHNlbGVjdGlvbkVsZW0gJiYgc2VsZWN0aW9uRWxlbS5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIGlmIChwaWxsRWxlbSkgeyBwaWxsRWxlbS5mb2N1cygpOyB9XG4gICAgICB9LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7IC8vIHRlbGwgdGhlIGNvbXBvbmVudCBjb250YWluZXIgdG8gcXVpdCBsb29rdXBcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzRmlyc3RDYW5kaWRhdGUoKSB7XG4gICAgY29uc3QgeyBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QodGhpcy5zdGF0ZS5zZWFyY2hUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IHRydWUgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUodHJ1ZSk7IC8vIHF1aXQgbG9va3VwIChjYW5jZWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHRoaXMubm9kZSwgdGFyZ2V0RWwpIHx8XG4gICAgICBpc0VsSW5DaGlsZHJlbih0aGlzLmNhbmRpZGF0ZUxpc3QsIHRhcmdldEVsKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsXG4gICAgICBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkLFxuICAgICAgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0ID0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgdGFyZ2V0U2NvcGUgPSB0aGlzLnN0YXRlLnRhcmdldFNjb3BlLFxuICAgICAgbG9hZGluZywgbG9va3VwRmlsdGVyLFxuICAgICAgbGlzdEhlYWRlciwgbGlzdEZvb3RlcixcbiAgICAgIGRhdGEsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWxvb2t1cCcsXG4gICAgICB7ICdzbGRzLWhhcy1zZWxlY3Rpb24nOiBzZWxlY3RlZCB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yIH07XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U2VsZWN0ZWQsIGRlZmF1bHRPcGVuZWQsIGRlZmF1bHRTZWFyY2hUZXh0LCBkZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvblNjb3BlQ2hhbmdlLCBvblNjb3BlTWVudUNsaWNrLCBvblNlYXJjaFRleHRDaGFuZ2UsIG9uTG9va3VwUmVxdWVzdCxcbiAgICAgIC4uLnNlYXJjaFByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgICBkYXRhLXNlbGVjdD0nc2luZ2xlJ1xuICAgICAgICAgIGRhdGEtc2NvcGU9eyBwcm9wcy5zY29wZXMgPyAnbXVsdGknIDogJ3NpbmdsZScgfVxuICAgICAgICAgIGRhdGEtdHlwZWFoZWFkPXsgZmFsc2UgfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0ZWQgP1xuICAgICAgICAgICAgICA8TG9va3VwU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbG9va3VwU2VsZWN0aW9uUmVmPXsgbm9kZSA9PiAodGhpcy5zZWxlY3Rpb24gPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgb25SZXNldFNlbGVjdGlvbj17IHRoaXMub25SZXNldFNlbGVjdGlvbi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIDxMb29rdXBTZWFyY2hcbiAgICAgICAgICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgICBsb29rdXBTZWFyY2hSZWY9eyBub2RlID0+ICh0aGlzLnNlYXJjaCA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldFNjb3BlPXsgdGFyZ2V0U2NvcGUgfVxuICAgICAgICAgICAgICAgICAgb25TY29wZU1lbnVDbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVDaGFuZ2U9eyB0aGlzLm9uU2NvcGVDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyAoKSA9PiB0aGlzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB9XG4gICAgICAgICAgICAgICAgICBvblByZXNzRG93bj17IHRoaXMub25Gb2N1c0ZpcnN0Q2FuZGlkYXRlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17IG9uQ29tcGxldGUgfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaElucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcGVuZWQgP1xuICAgICAgICAgICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbFxuICAgICAgICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgICAgICAgIGxpc3RSZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgICAgICAgIGZvY3VzPXsgdGhpcy5zdGF0ZS5mb2N1c0ZpcnN0Q2FuZGlkYXRlIH1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgICAgICAgICAgZmlsdGVyPXsgbG9va3VwRmlsdGVyID8gZW50cnkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgICAgIGhlYWRlcj17IGxpc3RIZWFkZXIgfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkxvb2t1cEl0ZW1TZWxlY3QuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl19