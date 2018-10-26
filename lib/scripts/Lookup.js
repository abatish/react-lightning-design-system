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

LookupSelection.propTypes = {
  id: _propTypes2.default.string,
  selected: LookupEntryType,
  hidden: _propTypes2.default.bool,
  onResetSelection: _propTypes2.default.func,
  lookupSelectionRef: _propTypes2.default.func
};


var LookupEntryType = _propTypes2.default.shape({
  category: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string,
  meta: _propTypes2.default.string
});

LookupSelection.propTypes = {
  id: _propTypes2.default.string,
  selected: LookupEntryType,
  hidden: _propTypes2.default.bool,
  onResetSelection: _propTypes2.default.func,
  lookupSelectionRef: _propTypes2.default.func
};

/**
 *
 */
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
            { className: 'slds-media slds-media--center slds-truncate', style: { display: 'inline-flex', alignItems: 'center' } },
            icon ? _react2.default.createElement(_Icon2.default, {
              style: { minWidth: '1.5rem' },
              className: 'slds-media__figure slds-m-right--x-small',
              category: category,
              icon: icon,
              size: 'small'
            }) : undefined,
            _react2.default.createElement(
              'div',
              { className: 'slds-media__body slds-truncate' },
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
          hidden = _props3.hidden,
          loading = _props3.loading,
          header = _props3.header,
          footer = _props3.footer,
          _props3$filter = _props3.filter,
          filter = _props3$filter === undefined ? trueFilter : _props3$filter,
          align = _props3.align,
          vertAlign = _props3.vertAlign,
          listRef = _props3.listRef;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', { 'slds-hide': hidden, 'slds-show': !hidden });
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

      var dropdown = _react2.default.createElement(LookupCandidateList, {
        ref: function ref(node) {
          return _this14.candidateList = node;
        },
        data: data,
        focus: this.state.focusFirstCandidate,
        hidden: !opened || !loading && data.length === 0,
        loading: loading,
        filter: lookupFilter ? function (entry) {
          return lookupFilter(entry, searchText, targetScope);
        } : undefined,
        header: listHeader,
        footer: listFooter,
        onSelect: this.onLookupItemSelect.bind(this),
        onBlur: this.onBlur.bind(this)
      });

      var lookupClassNames = (0, _classnames2.default)('slds-lookup', { 'slds-has-selection': selected }, className);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiTG9va3VwRW50cnlUeXBlIiwiYm9vbCIsImZ1bmMiLCJzaGFwZSIsInZhbHVlIiwibWV0YSIsIklDT05fQUxJR05TIiwiTG9va3VwU2VhcmNoIiwib25Mb29rdXBJY29uQ2xpY2siLCJvblN1Ym1pdCIsIm9uSW5wdXRLZXlEb3duIiwic2VhcmNoVGV4dCIsIm9uQ29tcGxldGUiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsInBvc2l0aW9uIiwiY3Vyc29yIiwib3V0bGluZSIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJhcnJheU9mIiwiYW55Iiwib25lT2YiLCJMb29rdXBDYW5kaWRhdGVMaXN0IiwiZm9jdXNUb1RhcmdldEl0ZW1FbCIsInByZXZQcm9wcyIsImVudHJ5Iiwib25TZWxlY3QiLCJjdXJyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXRlbUVsIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmRleCIsImVsIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1pbldpZHRoIiwidHJ1ZUZpbHRlciIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwiYWxpZ24iLCJ2ZXJ0QWxpZ24iLCJsaXN0UmVmIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJsaXN0U3R5bGVzIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiaGFuZGxlRE9NUmVmIiwicmVuZGVyQ2FuZGlkYXRlIiwiaGVpZ2h0IiwibWFyZ2luIiwiTG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbCIsInRyaWdnZXJTZWxlY3RvciIsIkxvb2t1cCIsInN0YXRlIiwiZGVmYXVsdFNlbGVjdGVkIiwib3BlbmVkIiwiZGVmYXVsdE9wZW5lZCIsImZvY3VzRmlyc3RDYW5kaWRhdGUiLCJzZXRTdGF0ZSIsImxlbmd0aCIsInNlYXJjaEVsZW0iLCJzZWFyY2giLCJpbnB1dEVsZW0iLCJzZWxlY3Rpb25FbGVtIiwic2VsZWN0aW9uIiwicGlsbEVsZW0iLCJ0YXJnZXRFbCIsImNhbmRpZGF0ZUxpc3QiLCJ0b3RhbENvbHMiLCJjb2xzIiwicmVxdWlyZWQiLCJlcnJvciIsImxvb2t1cEZpbHRlciIsImxpc3RIZWFkZXIiLCJsaXN0Rm9vdGVyIiwiZHJvcGRvd24iLCJvbkxvb2t1cEl0ZW1TZWxlY3QiLCJmb3JtRWxlbVByb3BzIiwic2VhcmNoUHJvcHMiLCJvbkZvY3VzRmlyc3RDYW5kaWRhdGUiLCJvblNlYXJjaElucHV0Q2xpY2siLCJkZWZhdWx0VmFsdWUiLCJudW1iZXIiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUdBOzs7SUFHYUEsZSxXQUFBQSxlOzs7Ozs7Ozs7OzhCQVNEQyxDLEVBQUc7QUFDWCxVQUFJQSxFQUFFQyxPQUFGLEtBQWMsQ0FBZCxJQUFtQkQsRUFBRUMsT0FBRixLQUFjLEVBQXJDLEVBQXlDO0FBQUU7QUFDekNELFVBQUVFLGNBQUY7QUFDQUYsVUFBRUcsZUFBRjtBQUNBLFlBQUksS0FBS0MsS0FBTCxDQUFXQyxnQkFBZixFQUFpQztBQUMvQixlQUFLRCxLQUFMLENBQVdDLGdCQUFYO0FBQ0Q7QUFDRjtBQUNGOzs7K0JBRVVDLFEsRUFBVTtBQUFBOztBQUNuQixVQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ1AsQ0FBRCxFQUFPO0FBQ3pCQSxVQUFFUSxNQUFGLENBQVNDLEtBQVQ7QUFDQVQsVUFBRUUsY0FBRjtBQUNBRixVQUFFRyxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFDRSxZQUFLLEtBQUtDLEtBQUwsQ0FBV00sRUFEbEI7QUFFRSxzQkFGRjtBQUdFLGlCQUFVO0FBQUEsaUJBQVMsT0FBS0MsSUFBTCxHQUFZQyxJQUFyQjtB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b0JBQVVwRyxJQVhSO0FBWWpCVSxjQUFZLG9CQUFVWixNQVpMO0FBYWpCdUMscUJBQW1CLG9CQUFVdkMsTUFiWjtBQWNqQmdGLFdBQVMsb0JBQVU5RSxJQWRGO0FBZWpCNkUsUUFBTSxvQkFBVXZCLE9BQVYsQ0FBa0J2RCxlQUFsQixDQWZXO0FBZ0JqQnFILGdCQUFjLG9CQUFVbkgsSUFoQlA7QUFpQmpCb0gsY0FBWSxvQkFBVW5JLElBakJMO0FBa0JqQm9JLGNBQVksb0JBQVVwSSxJQWxCTDtBQW1CakJpRCxVQUFRLG9CQUFVbUIsT0FBVixDQUNOLG9CQUFVcEQsS0FBVixDQUFnQjtBQUNkVixXQUFPLG9CQUFVTSxNQURIO0FBRWRLLFdBQU8sb0JBQVVMLE1BRkg7QUFHZFQsVUFBTSxvQkFBVVM7QUFIRixHQUFoQixDQURNLENBbkJTO0FBMEJqQmtDLGVBQWEsb0JBQVVsQyxNQTFCTjtBQTJCakIrQixhQUFXLG9CQUFVMkIsS0FBVixDQUFnQm5ELFdBQWhCLENBM0JNO0FBNEJqQjRCLHNCQUFvQixvQkFBVW5DLE1BNUJiO0FBNkJqQm9DLHNCQUFvQixvQkFBVWpDLElBN0JiO0FBOEJqQm1CLG9CQUFrQixvQkFBVW5CLElBOUJYO0FBK0JqQnNCLGlCQUFlLG9CQUFVdEIsSUEvQlI7QUFnQ2pCbUMsbUJBQWlCLG9CQUFVbkMsSUFoQ1Y7QUFpQ2pCa0IsVUFBUSxvQkFBVWxCLElBakNEO0FBa0NqQjRELFlBQVUsb0JBQVU1RCxJQWxDSDtBQW1DakJVLGNBQVksb0JBQVVWLElBbkNMO0FBb0NqQitHLGFBQVcsb0JBQVVjLE1BcENKO0FBcUNqQmIsUUFBTSxvQkFBVWE7QUFyQ0MsQ0FBbkI7O0FBd0NBOUIsT0FBTytCLGFBQVAsR0FBdUIsSUFBdkIiLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhdXRvQWxpZ24gZnJvbSAnLi9BdXRvQWxpZ24nO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgUGlsbCBmcm9tICcuL1BpbGwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29rdXBTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvblJlc2V0U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb29rdXBTZWxlY3Rpb25SZWY6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpbGwoc2VsZWN0ZWQpIHtcbiAgICBjb25zdCBvblBpbGxDbGljayA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8UGlsbFxuICAgICAgICBpZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICB0cnVuY2F0ZVxuICAgICAgICBwaWxsUmVmPXsgbm9kZSA9PiAodGhpcy5waWxsID0gbm9kZSkgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cbiAgICAgICAgaWNvbj17c2VsZWN0ZWQuaWNvbiA/IHtcbiAgICAgICAgICBjYXRlZ29yeTogc2VsZWN0ZWQuY2F0ZWdvcnksXG4gICAgICAgICAgaWNvbjogc2VsZWN0ZWQuaWNvbixcbiAgICAgICAgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgbGFiZWw9eyBzZWxlY3RlZC5sYWJlbCB9XG4gICAgICAgIG9uUmVtb3ZlPXsgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQsIGxvb2t1cFNlbGVjdGlvblJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9eyBsb29rdXBTZWxlY3Rpb25SZWYgfSBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2NvbnRhaW5lcic+XG4gICAgICAgICAgeyBzZWxlY3RlZCA/IHRoaXMucmVuZGVyUGlsbChzZWxlY3RlZCkgOiB1bmRlZmluZWQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5jb25zdCBMb29rdXBFbnRyeVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbkxvb2t1cFNlbGVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBvblJlc2V0U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9va3VwU2VsZWN0aW9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuY29uc3QgSUNPTl9BTElHTlMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB9KVxuICAgICksXG4gICAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5hbnksIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QcmVzc0Rvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsb29rdXBTZWFyY2hSZWY6IFByb3BUeXBlcy5mdW5jLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJlZ2lzdGVyU3R5bGUoJ2xvb2t1cFNlYXJjaCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJyxcbiAgICAgICAgJ3sgbWluLXdpZHRoOiAzcmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgICAgJ3sgbWFyZ2luLWxlZnQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXIgLnNsZHMtYnV0dG9uJyxcbiAgICAgICAgJ3sgcGFkZGluZzogMCAwLjI1cmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIucmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlNWVlOyBib3JkZXItY29sb3I6ICNhOGI3Yzc7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIgLnNsZHMtaW5wdXQtLWJhcmUnLFxuICAgICAgICAneyBoZWlnaHQ6IDIuMTVyZW07IHdpZHRoOiAxMDAlOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkxvb2t1cEljb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChzZWFyY2hUZXh0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIG5vIHNlYXJjaCB0ZXh0LCBxdWl0IGxvb2t1cCBzZWFyY2hcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vblByZXNzRG93bigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBxdWl0IGxvb2t1cCBzZWFyY2ggKGNhbmNlbClcbiAgICAgIGNvbnN0IGNhbmNlbCA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoY2FuY2VsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWFyY2hUZXh0KTtcbiAgfVxuXG4gIG9uSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayA9IChzY29wZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHRoaXMubm9kZSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBoYW5kbGVMb29rdXBTZWFyY2hSZWYgPSAobm9kZSkgPT4ge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgY29uc3QgeyBsb29rdXBTZWFyY2hSZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvb2t1cFNlYXJjaFJlZikgeyBsb29rdXBTZWFyY2hSZWYobm9kZSk7IH1cbiAgfVxuXG4gIHJlbmRlclNlYXJjaElucHV0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhpZGRlbiwgc2VhcmNoVGV4dCwgaWNvbkFsaWduID0gJ3JpZ2h0JyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtaW5wdXQtaGFzLWljb24nLFxuICAgICAgYHNsZHMtaW5wdXQtaGFzLWljb24tLSR7aWNvbkFsaWdufWAsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgcHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIGRlbGV0ZSBwcHJvcHMuaWNvbkFsaWduO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLnRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TY29wZU1lbnVDbGljaztcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5vblByZXNzRG93bjtcbiAgICBkZWxldGUgcHByb3BzLm9uQ29tcGxldGU7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNlYXJjaFRleHRDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5zY29wZXM7XG4gICAgZGVsZXRlIHBwcm9wcy5vbkxvb2t1cFJlcXVlc3Q7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5sb29rdXBTZWFyY2hSZWY7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgdGhpcy5oYW5kbGVMb29rdXBTZWFyY2hSZWYgfSBjbGFzc05hbWU9eyBzZWFyY2hJbnB1dENsYXNzTmFtZXMgfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICAgIGlucHV0UmVmPXsgbm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpIH1cbiAgICAgICAgICB2YWx1ZT17IHNlYXJjaFRleHQgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgY3Vyc29yOiAncG9pbnRlcicsIG91dGxpbmU6ICdub25lJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uTG9va3VwSWNvbkNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlOiB0YXJnZXQsIGRpc2FibGVkIH0pIHtcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgbGFiZWw9eyBpY29uIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNjb3Blcy5tYXAoc2NvcGUgPT4gPERyb3Bkb3duTWVudUl0ZW0ga2V5PXsgc2NvcGUudmFsdWUgfSB7IC4uLnNjb3BlIH0gLz4pIH1cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY29wZXMsIGhpZGRlbiwgZGlzYWJsZWQsIHRhcmdldFNjb3BlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICBjb25zdCBsb29rdXBTZWFyY2hDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICdzbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgeyAncmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB9LFxuICAgICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgV2Via2l0RmxleFdyYXA6ICdub3dyYXAnLCBtc0ZsZXhXcmFwOiAnbm93cmFwJywgZmxleFdyYXA6ICdub3dyYXAnIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyB9IHN0eWxlPXsgc3R5bGVzIH0+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlLCBkaXNhYmxlZCB9KSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNlYXJjaElucHV0KHsgLi4ucHJvcHMsIGRpc2FibGVkLCBjbGFzc05hbWU6ICdzbGRzLWNvbCcsIGJhcmU6IHRydWUgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaElucHV0KHRoaXMucHJvcHMpO1xuICB9XG5cbn1cblxuLyoqXG4gKlxuICovXG5jbGFzcyBMb29rdXBDYW5kaWRhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICAgIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAgIHZlcnRBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbSddKSxcbiAgICBsaXN0UmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhcHJldlByb3BzLmZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGVudHJ5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkgeyAvLyBVUC9ET1dOXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgY3VycmVudEVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gY3VycmVudEVsLm5leHRTaWJsaW5nIDogY3VycmVudEVsLnByZXZpb3VzU2libGluZztcbiAgICAgIHdoaWxlIChpdGVtRWwpIHtcbiAgICAgICAgY29uc3QgYW5jaG9yRWwgPSBpdGVtRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbChpbmRleCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5ub2RlO1xuICAgIGlmICghZWwpIHsgcmV0dXJuOyB9XG4gICAgY29uc3QgYW5jaG9ycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICBpZiAoYW5jaG9yc1tpbmRleF0pIHtcbiAgICAgIGFuY2hvcnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2FuZGlkYXRlKGVudHJ5KSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSwgaWNvbiwgbGFiZWwsIHZhbHVlLCBtZXRhIH0gPSBlbnRyeTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17IHZhbHVlIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtLWFjdGlvbiByZWFjdC1zbGRzLWNhbmRpZGF0ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICByb2xlPSdvcHRpb24nXG4gICAgICAgICAgb25LZXlEb3duPXsgZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLnByb3BzLm9uQmx1ciB9XG4gICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1tZWRpYSBzbGRzLW1lZGlhLS1jZW50ZXIgc2xkcy10cnVuY2F0ZScgc3R5bGU9eyB7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0gfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbiA/XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXsgeyBtaW5XaWR0aDogJzEuNXJlbScgfSB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbWVkaWFfX2ZpZ3VyZSBzbGRzLW0tcmlnaHQtLXgtc21hbGwnXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17IGNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLW1lZGlhX19ib2R5IHNsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19yZXN1bHQtdGV4dCBzbGRzLXRydW5jYXRlJz57IGxhYmVsIH08L3NwYW4+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRhID9cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX3Jlc3VsdC1tZXRhIHNsZHMtdHJ1bmNhdGUnPnsgbWV0YSB9PC9zcGFuPiA6XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdHJ1ZUZpbHRlciA9ICgpID0+IHRydWU7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YSA9IFtdLCBoaWRkZW4sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBmaWx0ZXIgPSB0cnVlRmlsdGVyLFxuICAgICAgYWxpZ24sIHZlcnRBbGlnbixcbiAgICAgIGxpc3RSZWYsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwTWVudUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWxvb2t1cF9fbWVudScsIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiwgJ3NsZHMtc2hvdyc6ICFoaWRkZW4gfSk7XG4gICAgY29uc3QgbGlzdFN0eWxlcyA9IHtcbiAgICAgIG1pbldpZHRoOiAnMTVyZW0nLFxuICAgICAgLi4uKHZlcnRBbGlnbiA9PT0gJ2JvdHRvbScgPyB7IGJvdHRvbTogJzEwMCUnIH0gOiB7fSksXG4gICAgICAuLi4oYWxpZ24gPT09ICdyaWdodCcgPyB7IGxlZnQ6ICdhdXRvJywgcmlnaHQ6IDAgfSA6IHt9KSxcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZURPTVJlZiA9IChub2RlKSA9PiB7XG4gICAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgICAgaWYgKGxpc3RSZWYpIHsgbGlzdFJlZihub2RlKTsgfVxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsgaGFuZGxlRE9NUmVmIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfVxuICAgICAgICBzdHlsZT17IGxpc3RTdHlsZXMgfVxuICAgICAgICByb2xlPSdsaXN0Ym94J1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgaGVhZGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnIHN0eWxlPXsgeyBoZWlnaHQ6IDIwIH0gfT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb250YWluZXI9e2ZhbHNlfSBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICAgIDwvbGk+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbCA9IGF1dG9BbGlnbih7XG4gIHRyaWdnZXJTZWxlY3RvcjogJy5zbGRzLWxvb2t1cCcsXG59KShMb29rdXBDYW5kaWRhdGVMaXN0KTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdFNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgICBsb29rdXBGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxpc3RIZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB9KVxuICAgICksXG4gICAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICAgIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlYXJjaFRleHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9va3VwUmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIH1cblxuICBzdGF0aWMgaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaElucHV0Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0gJiYgc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgaWYgKCFpbnB1dEVsZW0pIHsgcmV0dXJuOyB9XG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtICYmIHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpOyAvLyB0ZWxsIHRoZSBjb21wb25lbnQgY29udGFpbmVyIHRvIHF1aXQgbG9va3VwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRydWUpOyAvLyBxdWl0IGxvb2t1cCAoY2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3QgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIHRhcmdldEVsKSB8fFxuICAgICAgaXNFbEluQ2hpbGRyZW4odGhpcy5jYW5kaWRhdGVMaXN0LCB0YXJnZXRFbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIHx8ICghbG9hZGluZyAmJiBkYXRhLmxlbmd0aCA9PT0gMCkgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IGVudHJ5ID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtbG9va3VwJyxcbiAgICAgIHsgJ3NsZHMtaGFzLXNlbGVjdGlvbic6IHNlbGVjdGVkIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U2VsZWN0ZWQsIGRlZmF1bHRPcGVuZWQsIGRlZmF1bHRTZWFyY2hUZXh0LCBkZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvblNjb3BlQ2hhbmdlLCBvblNjb3BlTWVudUNsaWNrLCBvblNlYXJjaFRleHRDaGFuZ2UsIG9uTG9va3VwUmVxdWVzdCxcbiAgICAgIC4uLnNlYXJjaFByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgICBkYXRhLXNlbGVjdD0nc2luZ2xlJ1xuICAgICAgICAgIGRhdGEtc2NvcGU9eyBwcm9wcy5zY29wZXMgPyAnbXVsdGknIDogJ3NpbmdsZScgfVxuICAgICAgICAgIGRhdGEtdHlwZWFoZWFkPXsgZmFsc2UgfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2VsZWN0ZWQgP1xuICAgICAgICAgICAgICA8TG9va3VwU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgbG9va3VwU2VsZWN0aW9uUmVmPXsgbm9kZSA9PiAodGhpcy5zZWxlY3Rpb24gPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgICAgb25SZXNldFNlbGVjdGlvbj17IHRoaXMub25SZXNldFNlbGVjdGlvbi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIDxMb29rdXBTZWFyY2hcbiAgICAgICAgICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgICBsb29rdXBTZWFyY2hSZWY9eyBub2RlID0+ICh0aGlzLnNlYXJjaCA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldFNjb3BlPXsgdGFyZ2V0U2NvcGUgfVxuICAgICAgICAgICAgICAgICAgb25TY29wZU1lbnVDbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVDaGFuZ2U9eyB0aGlzLm9uU2NvcGVDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyAoKSA9PiB0aGlzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB9XG4gICAgICAgICAgICAgICAgICBvblByZXNzRG93bj17IHRoaXMub25Gb2N1c0ZpcnN0Q2FuZGlkYXRlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17IG9uQ29tcGxldGUgfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaElucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBvcGVuZWQgP1xuICAgICAgICAgICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFBvcnRhbFxuICAgICAgICAgICAgICAgIHBvcnRhbENsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgICAgICAgIGxpc3RSZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgICAgICAgIGZvY3VzPXsgdGhpcy5zdGF0ZS5mb2N1c0ZpcnN0Q2FuZGlkYXRlIH1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgICAgICAgICAgZmlsdGVyPXsgbG9va3VwRmlsdGVyID8gZW50cnkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxuICAgICAgICAgICAgICAgIGhlYWRlcj17IGxpc3RIZWFkZXIgfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkxvb2t1cEl0ZW1TZWxlY3QuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5cbkxvb2t1cC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIGRlZmF1bHRTZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICBsb29rdXBGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBsaXN0SGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgbGlzdEZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pXG4gICksXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Mb29rdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=