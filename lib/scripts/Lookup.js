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
            onBlur: this.onBlur.bind(this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBFbnRyeVR5cGUiLCJQcm9wVHlwZXMiLCJzaGFwZSIsImNhdGVnb3J5Iiwic3RyaW5nIiwiaWNvbiIsImxhYmVsIiwidmFsdWUiLCJtZXRhIiwiTG9va3VwU2VsZWN0aW9uIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwib25SZXNldFNlbGVjdGlvbiIsInNlbGVjdGVkIiwib25QaWxsQ2xpY2siLCJ0YXJnZXQiLCJmb2N1cyIsImlkIiwicGlsbCIsIm5vZGUiLCJvbktleURvd24iLCJiaW5kIiwidW5kZWZpbmVkIiwiaGlkZGVuIiwibG9va3VwU2VsZWN0aW9uUmVmIiwibG9va3VwQ2xhc3NOYW1lcyIsInJlbmRlclBpbGwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIklDT05fQUxJR05TIiwiTG9va3VwU2VhcmNoIiwib25Mb29rdXBJY29uQ2xpY2siLCJvblN1Ym1pdCIsIm9uSW5wdXRLZXlEb3duIiwic2VhcmNoVGV4dCIsIm9uQ29tcGxldGUiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwib3V0bGluZSIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJhcnJheU9mIiwiYW55Iiwib25lT2YiLCJMb29rdXBDYW5kaWRhdGVMaXN0IiwiZm9jdXNUb1RhcmdldEl0ZW1FbCIsInByZXZQcm9wcyIsImVudHJ5Iiwib25TZWxlY3QiLCJjdXJyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXRlbUVsIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmRleCIsImVsIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1pbldpZHRoIiwidHJ1ZUZpbHRlciIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwiYWxpZ24iLCJ2ZXJ0QWxpZ24iLCJsaXN0UmVmIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJsaXN0U3R5bGVzIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiaGFuZGxlRE9NUmVmIiwicmVuZGVyQ2FuZGlkYXRlIiwiaGVpZ2h0IiwibWFyZ2luIiwiTG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbCIsInRyaWdnZXJTZWxlY3RvciIsIkxvb2t1cCIsInN0YXRlIiwiZGVmYXVsdFNlbGVjdGVkIiwib3BlbmVkIiwiZGVmYXVsdE9wZW5lZCIsImZvY3VzRmlyc3RDYW5kaWRhdGUiLCJzZXRTdGF0ZSIsInNlYXJjaEVsZW0iLCJzZWFyY2giLCJpbnB1dEVsZW0iLCJzZWxlY3Rpb25FbGVtIiwic2VsZWN0aW9uIiwicGlsbEVsZW0iLCJ0YXJnZXRFbCIsImNhbmRpZGF0ZUxpc3QiLCJ0b3RhbENvbHMiLCJjb2xzIiwicmVxdWlyZWQiLCJlcnJvciIsImxvb2t1cEZpbHRlciIsImxpc3RIZWFkZXIiLCJsaXN0Rm9vdGVyIiwiZm9ybUVsZW1Qcm9wcyIsInNlYXJjaFByb3BzIiwib25Gb2N1c0ZpcnN0Q2FuZGlkYXRlIiwib25Mb29rdXBJdGVtU2VsZWN0IiwiRm9ybUVsZW1lbnQiLCJkZWZhdWx0VmFsdWUiLCJudW1iZXIiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7QUFHQSxJQUFNQSxrQkFBa0JDLG9CQUFVQyxLQUFWLENBQWdCO0FBQ3RDQyxZQUFVRixvQkFBVUcsTUFEa0I7QUFFdENDLFFBQU1KLG9CQUFVRyxNQUZzQjtBQUd0Q0UsU0FBT0wsb0JBQVVHLE1BSHFCO0FBSXRDRyxTQUFPTixvQkFBVUcsTUFKcUI7QUFLdENJLFFBQU1QLG9CQUFVRztBQUxzQixDQUFoQixDQUF4Qjs7QUFRQTs7OztJQUdhSyxlLFdBQUFBLGU7Ozs7Ozs7Ozs7OEJBU0RDLEMsRUFBRztBQUNYLFVBQUlBLEVBQUVDLE9BQUYsS0FBYyxDQUFkLElBQW1CRCxFQUFFQyxPQUFGLEtBQWMsRUFBckMsRUFBeUM7QUFBRTtBQUN6Q0QsVUFBRUUsY0FBRjtBQUNBRixVQUFFRyxlQUFGO0FBQ0EsWUFBSSxLQUFLQyxLQUFMLENBQVdDLGdCQUFmLEVBQWlDO0FBQy9CLGVBQUtELEtBQUwsQ0FBV0MsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVUMsUSxFQUFVO0FBQUE7O0FBQ25CLFVBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFD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LG9CQUFVK0IsSUFYUjtBQVlqQk8sY0FBWXRDLG9CQUFVRyxNQVpMO0FBYWpCOEQscUJBQW1CakUsb0JBQVVHLE1BYlo7QUFjakJ1RyxXQUFTMUcsb0JBQVUrQixJQWRGO0FBZWpCMEUsUUFBTXpHLG9CQUFVa0YsT0FBVixDQUFrQm5GLGVBQWxCLENBZlc7QUFnQmpCZ0osZ0JBQWMvSSxvQkFBVWdDLElBaEJQO0FBaUJqQmdILGNBQVloSixvQkFBVXFCLElBakJMO0FBa0JqQjRILGNBQVlqSixvQkFBVXFCLElBbEJMO0FBbUJqQjBDLFVBQVEvRCxvQkFBVWtGLE9BQVYsQ0FDTmxGLG9CQUFVQyxLQUFWLENBQWdCO0FBQ2RJLFdBQU9MLG9CQUFVRyxNQURIO0FBRWRHLFdBQU9OLG9CQUFVRyxNQUZIO0FBR2RDLFVBQU1KLG9CQUFVRztBQUhGLEdBQWhCLENBRE0sQ0FuQlM7QUEwQmpCeUQsZUFBYTVELG9CQUFVRyxNQTFCTjtBQTJCakJzRCxhQUFXekQsb0JBQVVvRixLQUFWLENBQWdCbkQsV0FBaEIsQ0EzQk07QUE0QmpCNEIsc0JBQW9CN0Qsb0JBQVVHLE1BNUJiO0FBNkJqQjJELHNCQUFvQjlELG9CQUFVZ0MsSUE3QmI7QUE4QmpCZ0Isb0JBQWtCaEQsb0JBQVVnQyxJQTlCWDtBQStCakJtQixpQkFBZW5ELG9CQUFVZ0MsSUEvQlI7QUFnQ2pCZ0MsbUJBQWlCaEUsb0JBQVVnQyxJQWhDVjtBQWlDakJlLFVBQVEvQyxvQkFBVWdDLElBakNEO0FBa0NqQnlELFlBQVV6RixvQkFBVWdDLElBbENIO0FBbUNqQk8sY0FBWXZDLG9CQUFVZ0MsSUFuQ0w7QUFvQ2pCMkcsYUFBVzNJLG9CQUFVd0osTUFwQ0o7QUFxQ2pCWixRQUFNNUksb0JBQVV3SjtBQXJDQyxDO0FBREE1QixNLENBeUNaNkIsYSxHQUFnQixJO2tCQXpDSjdCLE0iLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgUGlsbCBmcm9tICcuL1BpbGwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IExvb2t1cEVudHJ5VHlwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1ldGE6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTG9va3VwU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9va3VwU2VsZWN0aW9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWxsKHNlbGVjdGVkKSB7XG4gICAgY29uc3Qgb25QaWxsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBpbGxcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgdHJ1bmNhdGVcbiAgICAgICAgcGlsbFJlZj17IG5vZGUgPT4gKHRoaXMucGlsbCA9IG5vZGUpIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xpY2s9eyBvblBpbGxDbGljayB9XG4gICAgICAgIHRhYkluZGV4PXsgMCB9XG4gICAgICAgIGljb249e3NlbGVjdGVkLmljb24gPyB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHNlbGVjdGVkLmNhdGVnb3J5LFxuICAgICAgICAgIGljb246IHNlbGVjdGVkLmljb24sXG4gICAgICAgIH0gOiB1bmRlZmluZWR9XG4gICAgICAgIGxhYmVsPXsgc2VsZWN0ZWQubGFiZWwgfVxuICAgICAgICBvblJlbW92ZT17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaWRkZW4sIHNlbGVjdGVkLCBsb29rdXBTZWxlY3Rpb25SZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgbG9va3VwU2VsZWN0aW9uUmVmIH0gY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1waWxsX19jb250YWluZXInPlxuICAgICAgICAgIHsgc2VsZWN0ZWQgPyB0aGlzLnJlbmRlclBpbGwoc2VsZWN0ZWQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuXG4vKipcbiAqXG4gKi9cbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgfSlcbiAgICApLFxuICAgIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuYW55LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUHJlc3NEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbG9va3VwU2VhcmNoUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZWdpc3RlclN0eWxlKCdsb29rdXBTZWFyY2gnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcicsXG4gICAgICAgICd7IG1pbi13aWR0aDogM3JlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlcicsXG4gICAgICAgICd7IG1hcmdpbi1sZWZ0OiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyIC5zbGRzLWJ1dHRvbicsXG4gICAgICAgICd7IHBhZGRpbmc6IDAgMC4yNXJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgICd7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyLnJlYWN0LXNsZHMtYm94LWRpc2FibGVkJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogI2UwZTVlZTsgYm9yZGVyLWNvbG9yOiAjYThiN2M3OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyIC5zbGRzLWlucHV0LS1iYXJlJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAyLjE1cmVtOyB3aWR0aDogMTAwJTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgb25Mb29rdXBJY29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBubyBzZWFyY2ggdGV4dCwgcXVpdCBsb29rdXAgc2VhcmNoXG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzc0Rvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gcXVpdCBsb29rdXAgc2VhcmNoIChjYW5jZWwpXG4gICAgICBjb25zdCBjYW5jZWwgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKGNhbmNlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gIH1cblxuICBvbklucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2sgPSAoc2NvcGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2Uoc2NvcGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgaGFuZGxlTG9va3VwU2VhcmNoUmVmID0gKG5vZGUpID0+IHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIGNvbnN0IHsgbG9va3VwU2VhcmNoUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsb29rdXBTZWFyY2hSZWYpIHsgbG9va3VwU2VhcmNoUmVmKG5vZGUpOyB9XG4gIH1cblxuICByZW5kZXJTZWFyY2hJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoaWRkZW4sIHNlYXJjaFRleHQsIGljb25BbGlnbiA9ICdyaWdodCcgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlYXJjaElucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uJyxcbiAgICAgIGBzbGRzLWlucHV0LWhhcy1pY29uLS0ke2ljb25BbGlnbn1gLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IHBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcbiAgICBkZWxldGUgcHByb3BzLmljb25BbGlnbjtcbiAgICBkZWxldGUgcHByb3BzLnNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy50YXJnZXRTY29wZTtcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVNZW51Q2xpY2s7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNjb3BlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25QcmVzc0Rvd247XG4gICAgZGVsZXRlIHBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2NvcGVzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25Mb29rdXBSZXF1ZXN0O1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMubG9va3VwU2VhcmNoUmVmO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICBpbnB1dFJlZj17IG5vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKSB9XG4gICAgICAgICAgdmFsdWU9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIGN1cnNvcjogJ3BvaW50ZXInLCBvdXRsaW5lOiAnbm9uZScgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkxvb2t1cEljb25DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZTogdGFyZ2V0LCBkaXNhYmxlZCB9KSB7XG4gICAgbGV0IHRhcmdldFNjb3BlID0gc2NvcGVzWzBdIHx8IHt9O1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoc2NvcGUudmFsdWUgPT09IHRhcmdldCkge1xuICAgICAgICB0YXJnZXRTY29wZSA9IHNjb3BlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbiA9IDxJY29uIGljb249eyB0YXJnZXRTY29wZS5pY29uIHx8ICdub25lJyB9IHNpemU9J3gtc21hbGwnIC8+O1xuICAgIGNvbnN0IHNlbGVjdG9yQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWdyaWQtLWFsaWduLWNlbnRlcicsXG4gICAgICAnc2xkcy1ncmlkLS12ZXJ0aWNhbC1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3JlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJ1xuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VsZWN0b3JDbGFzc05hbWVzIH0+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgIGxhYmVsPXsgaWNvbiB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljayB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBzY29wZXMubWFwKHNjb3BlID0+IDxEcm9wZG93bk1lbnVJdGVtIGtleT17IHNjb3BlLnZhbHVlIH0geyAuLi5zY29wZSB9IC8+KSB9XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NvcGVzLCBoaWRkZW4sIGRpc2FibGVkLCB0YXJnZXRTY29wZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgY29uc3QgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAnc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgIHsgJ3JlYWN0LXNsZHMtYm94LWRpc2FibGVkJzogZGlzYWJsZWQgfSxcbiAgICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBzdHlsZXMgPSB7IFdlYmtpdEZsZXhXcmFwOiAnbm93cmFwJywgbXNGbGV4V3JhcDogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9eyB0aGlzLmhhbmRsZUxvb2t1cFNlYXJjaFJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgfSBzdHlsZT17IHN0eWxlcyB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZSwgZGlzYWJsZWQgfSkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh7IC4uLnByb3BzLCBkaXNhYmxlZCwgY2xhc3NOYW1lOiAnc2xkcy1jb2wnLCBiYXJlOiB0cnVlIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh0aGlzLnByb3BzKTtcbiAgfVxuXG59XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTG9va3VwQ2FuZGlkYXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgICB2ZXJ0QWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG4gICAgbGlzdFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgIXByZXZQcm9wcy5mb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChlbnRyeSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHsgLy8gVVAvRE9XTlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoaW5kZXgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubm9kZTtcbiAgICBpZiAoIWVsKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IGFuY2hvcnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgaWYgKGFuY2hvcnNbaW5kZXhdKSB7XG4gICAgICBhbmNob3JzW2luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNhbmRpZGF0ZShlbnRyeSkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnksIGljb24sIGxhYmVsLCB2YWx1ZSwgbWV0YSB9ID0gZW50cnk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9eyB2YWx1ZSB9IHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbS1hY3Rpb24gcmVhY3Qtc2xkcy1jYW5kaWRhdGUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgcm9sZT0nb3B0aW9uJ1xuICAgICAgICAgIG9uS2V5RG93bj17IGUgPT4gZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnIHN0eWxlPXsgeyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9IH0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb24gP1xuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17IHsgbWluV2lkdGg6ICcxLjVyZW0nIH0gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW0tcmlnaHQtLXgtc21hbGwnXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17IGNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LXRleHQgc2xkcy10cnVuY2F0ZSc+eyBsYWJlbCB9PC9zcGFuPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0YSA/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19yZXN1bHQtbWV0YSBzbGRzLXRydW5jYXRlJz57IG1ldGEgfTwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRydWVGaWx0ZXIgPSAoKSA9PiB0cnVlO1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGEgPSBbXSwgbG9hZGluZywgaGVhZGVyLCBmb290ZXIsIGZpbHRlciA9IHRydWVGaWx0ZXIsXG4gICAgICBhbGlnbiwgdmVydEFsaWduLFxuICAgICAgbGlzdFJlZixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtbG9va3VwX19tZW51JywgJ3NsZHMtc2hvdycpO1xuICAgIGNvbnN0IGxpc3RTdHlsZXMgPSB7XG4gICAgICBtaW5XaWR0aDogJzE1cmVtJyxcbiAgICAgIC4uLih2ZXJ0QWxpZ24gPT09ICdib3R0b20nID8geyBib3R0b206ICcxMDAlJyB9IDoge30pLFxuICAgICAgLi4uKGFsaWduID09PSAncmlnaHQnID8geyBsZWZ0OiAnYXV0bycsIHJpZ2h0OiAwIH0gOiB7fSksXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVET01SZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgIGlmIChsaXN0UmVmKSB7IGxpc3RSZWYobm9kZSk7IH1cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IGhhbmRsZURPTVJlZiB9XG4gICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cE1lbnVDbGFzc05hbWVzIH1cbiAgICAgICAgc3R5bGU9eyBsaXN0U3R5bGVzIH1cbiAgICAgICAgcm9sZT0nbGlzdGJveCdcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXIgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGhlYWRlciB9PC9kaXY+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19saXN0JyByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKGZpbHRlcikubWFwKHRoaXMucmVuZGVyQ2FuZGlkYXRlLmJpbmQodGhpcykpXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRpbmcgP1xuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PSdsb2FkaW5nJyBzdHlsZT17IHsgaGVpZ2h0OiAyMCB9IH0+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgY29udGFpbmVyPXtmYWxzZX0gc2l6ZT0nc21hbGwnIHN0eWxlPXsgeyBtYXJnaW46ICcwIGF1dG8nIH0gfSAvPlxuICAgICAgICAgICAgICA8L2xpPiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAge1xuICAgICAgICAgIGZvb3RlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgZm9vdGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IExvb2t1cENhbmRpZGF0ZUxpc3RQb3J0YWwgPSBhdXRvQWxpZ24oe1xuICB0cmlnZ2VyU2VsZWN0b3I6ICcuc2xkcy1sb29rdXAnLFxufSkoTG9va3VwQ2FuZGlkYXRlTGlzdCk7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gICAgZGVmYXVsdFNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gICAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gICAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsaXN0SGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBsaXN0Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgfSlcbiAgICApLFxuICAgIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcbiAgICBkZWZhdWx0VGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9XG5cbiAgc3RhdGljIGlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgc2VsZWN0ZWQ6IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHNlYXJjaFRleHQ6IHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0LFxuICAgICAgdGFyZ2V0U2NvcGU6IHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRTY29wZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0gJiYgc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgaWYgKCFpbnB1dEVsZW0pIHsgcmV0dXJuOyB9XG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtICYmIHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpOyAvLyB0ZWxsIHRoZSBjb21wb25lbnQgY29udGFpbmVyIHRvIHF1aXQgbG9va3VwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRydWUpOyAvLyBxdWl0IGxvb2t1cCAoY2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fFxuICAgICAgaXNFbEluQ2hpbGRyZW4odGhpcy5jYW5kaWRhdGVMaXN0LCB0YXJnZXRFbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXAnLFxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciB9O1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdFNlbGVjdGVkLCBkZWZhdWx0T3BlbmVkLCBkZWZhdWx0U2VhcmNoVGV4dCwgZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgb25TZWxlY3QsIG9uQmx1ciwgb25TY29wZUNoYW5nZSwgb25TY29wZU1lbnVDbGljaywgb25TZWFyY2hUZXh0Q2hhbmdlLCBvbkxvb2t1cFJlcXVlc3QsXG4gICAgICAuLi5zZWFyY2hQcm9wc1xuICAgIH0gPSBwcm9wcztcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtRWxlbWVudCBmb3JtRWxlbWVudFJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH0geyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH1cbiAgICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID9cbiAgICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIGxvb2t1cFNlbGVjdGlvblJlZj17IG5vZGUgPT4gKHRoaXMuc2VsZWN0aW9uID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8TG9va3VwU2VhcmNoXG4gICAgICAgICAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgbG9va3VwU2VhcmNoUmVmPXsgbm9kZSA9PiAodGhpcy5zZWFyY2ggPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxuICAgICAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9eyBvbkNvbXBsZXRlIH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9wZW5lZCA/XG4gICAgICAgICAgICAgIDxMb29rdXBDYW5kaWRhdGVMaXN0UG9ydGFsXG4gICAgICAgICAgICAgICAgcG9ydGFsQ2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgICAgICAgbGlzdFJlZj17IG5vZGUgPT4gKHRoaXMuY2FuZGlkYXRlTGlzdCA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICBkYXRhPXsgZGF0YSB9XG4gICAgICAgICAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyBsb2FkaW5nIH1cbiAgICAgICAgICAgICAgICBmaWx0ZXI9eyBsb29rdXBGaWx0ZXIgPyBlbnRyeSA9PiBsb29rdXBGaWx0ZXIoZW50cnksIHNlYXJjaFRleHQsIHRhcmdldFNjb3BlKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgICAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgICAgICAgICAgZm9vdGVyPXsgbGlzdEZvb3RlciB9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uTG9va3VwSXRlbVNlbGVjdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0=