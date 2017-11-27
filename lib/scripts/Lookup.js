'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookupCandidateList = exports.LookupSearch = exports.LookupSelection = undefined;

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
            style: props.disabled ? undefined : { cursor: 'pointer' },
            onClick: props.disabled ? undefined : this.onLookupIconClick
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

var ICON_ALIGNS = ['left', 'right'];

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

/**
 *
 */

var LookupCandidateList = exports.LookupCandidateList = function (_Component3) {
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
      if (this.props.focus && !prevProps.focus) {
        this.focusToTargetItemEl(0);
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
      var anchors = el.querySelectorAll('.react-slds-candidate[tabIndex]');
      if (anchors[index]) {
        anchors[index].focus();
      }
    }
  }, {
    key: 'renderCandidate',
    value: function renderCandidate(entry) {
      var _this6 = this;

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
              return e.keyCode === 13 && _this6.onSelect(entry);
            },
            onBlur: this.props.onBlur,
            onClick: function onClick() {
              return _this6.onSelect(entry);
            }
          },
          _react2.default.createElement(
            'span',
            { className: 'slds-media slds-media--center slds-truncate' },
            icon ? _react2.default.createElement(_Icon2.default, {
              className: 'slds-media__figure',
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
      var _this7 = this;

      var _props3 = this.props,
          _props3$data = _props3.data,
          data = _props3$data === undefined ? [] : _props3$data,
          hidden = _props3.hidden,
          loading = _props3.loading,
          header = _props3.header,
          footer = _props3.footer,
          _props3$filter = _props3.filter,
          filter = _props3$filter === undefined ? function () {
        return true;
      } : _props3$filter;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', { 'slds-hide': hidden, 'slds-show': !hidden });
      return _react2.default.createElement(
        'div',
        {
          ref: function ref(node) {
            return _this7.node = node;
          },
          className: lookupMenuClassNames,
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
  hidden: _propTypes2.default.bool,
  filter: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  header: _propTypes2.default.node,
  footer: _propTypes2.default.node
};

/**
 *
 */

var Lookup = function (_Component4) {
  (0, _inherits3.default)(Lookup, _Component4);

  function Lookup(props) {
    (0, _classCallCheck3.default)(this, Lookup);

    var _this8 = (0, _possibleConstructorReturn3.default)(this, (Lookup.__proto__ || (0, _getPrototypeOf2.default)(Lookup)).call(this, props));

    _this8.state = {
      id: 'form-element-' + (0, _util.uuid)(),
      selected: props.defaultSelected,
      opened: props.defaultOpened,
      searchText: props.defaultSearchText,
      targetScope: props.defaultTargetScope,
      focusFirstCandidate: false
    };
    return _this8;
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
      var _this9 = this;

      this.setState({ selected: null });
      if (this.props.onSelect) {
        this.props.onSelect(null);
      }
      this.onSearchTextChange('');
      this.onLookupRequest('');
      setTimeout(function () {
        var searchElem = _this9.search;
        var inputElem = searchElem.querySelector('input');
        inputElem.focus();
      }, 10);
    }
  }, {
    key: 'onLookupItemSelect',
    value: function onLookupItemSelect(selected) {
      var _this10 = this;

      if (selected) {
        this.setState({ selected: selected, opened: false });
        if (this.props.onSelect) {
          this.props.onSelect(selected);
        }
        setTimeout(function () {
          var selectionElem = _this10.selection;
          var pillElem = selectionElem.querySelector('a');
          if (pillElem) {
            pillElem.focus();
          }
        }, 10);
      } else {
        this.setState({ opened: false });
        setTimeout(function () {
          var searchElem = _this10.search;
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
      var _this11 = this;

      var _props$opened = this.props.opened,
          opened = _props$opened === undefined ? this.state.opened : _props$opened;

      if (!opened) {
        this.onLookupRequest(this.state.searchText);
      } else {
        this.setState({ focusFirstCandidate: true });
        setTimeout(function () {
          _this11.setState({ focusFirstCandidate: false });
        }, 10);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this12 = this;

      setTimeout(function () {
        if (!_this12.isFocusedInComponent()) {
          _this12.setState({ opened: false });
          if (_this12.props.onBlur) {
            _this12.props.onBlur();
          }
          if (_this12.props.onComplete) {
            _this12.props.onComplete(true); // quit lookup (cancel)
          }
        }
      }, 10);
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
    key: 'render',
    value: function render() {
      var _this13 = this;

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
          return _this13.candidateList = node;
        },
        data: data,
        focus: this.state.focusFirstCandidate,
        hidden: !opened,
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
            return _this13.node = node;
          } }, formElemProps),
        _react2.default.createElement(
          'div',
          {
            className: lookupClassNames,
            'data-select': 'single',
            'data-scope': props.scopes ? 'multi' : 'single',
            'data-typeahead': false
          },
          selected ? _react2.default.createElement(LookupSelection, {
            id: id,
            lookupSelectionRef: function lookupSelectionRef(node) {
              return _this13.selection = node;
            },
            selected: selected,
            onResetSelection: this.onResetSelection.bind(this)
          }) : _react2.default.createElement(LookupSearch, (0, _extends3.default)({}, searchProps, {
            id: id,
            lookupSearchRef: function lookupSearchRef(node) {
              return _this13.search = node;
            },
            searchText: searchText,
            targetScope: targetScope,
            onScopeMenuClick: this.onScopeMenuClick.bind(this),
            onScopeChange: this.onScopeChange.bind(this),
            onChange: this.onSearchTextChange.bind(this),
            onSubmit: function onSubmit() {
              return _this13.onLookupRequest(searchText);
            },
            onPressDown: this.onFocusFirstCandidate.bind(this),
            onComplete: onComplete,
            onBlur: this.onBlur.bind(this),
            onClick: this.onSearchInputClick.bind(this)
          }))
        )
      );
    }
  }]);
  return Lookup;
}(_react.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwiTG9va3VwRW50cnlUeXBlIiwic2hhcGUiLCJzdHJpbmciLCJ2YWx1ZSIsIm1ldGEiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIkxvb2t1cFNlYXJjaCIsIm9uTG9va3VwSWNvbkNsaWNrIiwib25TdWJtaXQiLCJvbklucHV0S2V5RG93biIsInNlYXJjaFRleHQiLCJvbkNvbXBsZXRlIiwib25QcmVzc0Rvd24iLCJjYW5jZWwiLCJvbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJvbklucHV0Qmx1ciIsInNldFRpbWVvdXQiLCJpc0ZvY3VzZWRJbkNvbXBvbmVudCIsIm9uQmx1ciIsIm9uU2NvcGVNZW51Q2xpY2siLCJvbk1lbnVJdGVtQ2xpY2siLCJzY29wZSIsIm9uU2NvcGVDaGFuZ2UiLCJoYW5kbGVMb29rdXBTZWFyY2hSZWYiLCJsb29rdXBTZWFyY2hSZWYiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpY29uQWxpZ24iLCJzZWFyY2hJbnB1dENsYXNzTmFtZXMiLCJwcHJvcHMiLCJ0YXJnZXRTY29wZSIsImRlZmF1bHRUYXJnZXRTY29wZSIsIm9uU2VhcmNoVGV4dENoYW5nZSIsInNjb3BlcyIsIm9uTG9va3VwUmVxdWVzdCIsImRlZmF1bHRTZWFyY2hUZXh0Iiwib25WYWx1ZUNoYW5nZSIsImlucHV0IiwiZGlzYWJsZWQiLCJjdXJzb3IiLCJzZWxlY3RvckNsYXNzTmFtZXMiLCJtYXAiLCJsb29rdXBTZWFyY2hDbGFzc05hbWVzIiwic3R5bGVzIiwiV2Via2l0RmxleFdyYXAiLCJtc0ZsZXhXcmFwIiwiZmxleFdyYXAiLCJyZW5kZXJTY29wZVNlbGVjdG9yIiwicmVuZGVyU2VhcmNoSW5wdXQiLCJiYXJlIiwiSUNPTl9BTElHTlMiLCJhcnJheU9mIiwiYW55Iiwib25lT2YiLCJMb29rdXBDYW5kaWRhdGVMaXN0IiwiZm9jdXNUb1RhcmdldEl0ZW1FbCIsInByZXZQcm9wcyIsImVudHJ5Iiwib25TZWxlY3QiLCJjdXJyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXRlbUVsIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmRleCIsImVsIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhIiwibG9hZGluZyIsImhlYWRlciIsImZvb3RlciIsImZpbHRlciIsImxvb2t1cE1lbnVDbGFzc05hbWVzIiwicmVuZGVyQ2FuZGlkYXRlIiwiaGVpZ2h0IiwibWFyZ2luIiwiTG9va3VwIiwic3RhdGUiLCJkZWZhdWx0U2VsZWN0ZWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwiZm9jdXNGaXJzdENhbmRpZGF0ZSIsInNldFN0YXRlIiwibGVuZ3RoIiwic2VhcmNoRWxlbSIsInNlYXJjaCIsImlucHV0RWxlbSIsInNlbGVjdGlvbkVsZW0iLCJzZWxlY3Rpb24iLCJwaWxsRWxlbSIsInJvb3RFbCIsInRhcmdldEVsIiwicGFyZW50Tm9kZSIsInRvdGFsQ29scyIsImNvbHMiLCJyZXF1aXJlZCIsImVycm9yIiwibG9va3VwRmlsdGVyIiwibGlzdEhlYWRlciIsImxpc3RGb290ZXIiLCJkcm9wZG93biIsImNhbmRpZGF0ZUxpc3QiLCJvbkxvb2t1cEl0ZW1TZWxlY3QiLCJmb3JtRWxlbVByb3BzIiwic2VhcmNoUHJvcHMiLCJvbkZvY3VzRmlyc3RDYW5kaWRhdGUiLCJvblNlYXJjaElucHV0Q2xpY2siLCJkZWZhdWx0VmFsdWUiLCJudW1iZXIiLCJpc0Zvcm1FbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7SUFFYUEsZSxXQUFBQSxlOzs7Ozs7Ozs7OzhCQUNEQyxDLEVBQUc7QUFDWCxVQUFJQSxFQUFFQyxPQUFGLEtBQWMsQ0FBZCxJQUFtQkQsRUFBRUMsT0FBRixLQUFjLEVBQXJDLEVBQXlDO0FBQUU7QUFDekNELFVBQUVFLGNBQUY7QUFDQUYsVUFBRUcsZUFBRjtBQUNBLFlBQUksS0FBS0MsS0FBTCxDQUFXQyxnQkFBZixFQUFpQztBQUMvQixlQUFLRCxLQUFMLENBQVdDLGdCQUFYO0FBQ0Q7QUFDRjtBQUNGOzs7K0JBRVVDLFEsRUFBVTtBQUFBOztBQUNuQixVQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ1AsQ0FBRCxFQUFPO0FBQ3pCQSxVQUFFUSxNQUFGLENBQVNDLEtBQVQ7QUFDQVQsVUFBRUUsY0FBRjtBQUNBRixVQUFFRyxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFDRSxZQUFLLEtBQUtDLEtBQUwsQ0FBV00sRUFEbEI7QUFFRSxzQkFGRjtBQUdFLGlCQUFVO0FBQUEsaUJBQVMsT0FBS0MsSUFBTCxHQUFZQyxJQUFyQjtBQUFBLFNBSFo7QUFJRSxtQkFBWSxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FKZDtBQUtFLGlCQUFVUCxXQUxaO0FBTUUsa0JBQVcsQ0FOYjtBQU9FLGNBQU1ELFNBQVNTLElBQVQsR0FBZ0I7QUFDcEJDLG9CQUFVVixTQUFTVSxRQURDO0FBRXBCRCxnQkFBTVQsU0FBU1M7QUFGSyxTQUFoQixHQUdGRSxTQVZOO0FB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YWpCcUMscUJBQW1CLG9CQUFVckMsTUFiWjtBQWNqQnlFLFdBQVMsb0JBQVVyRSxJQWRGO0FBZWpCb0UsUUFBTSxvQkFBVW5CLE9BQVYsQ0FBa0J2RCxlQUFsQixDQWZXO0FBZ0JqQndHLGdCQUFjLG9CQUFVakcsSUFoQlA7QUFpQmpCa0csY0FBWSxvQkFBVXBILElBakJMO0FBa0JqQnFILGNBQVksb0JBQVVySCxJQWxCTDtBQW1CakJnRCxVQUFRLG9CQUFVa0IsT0FBVixDQUNOLG9CQUFVdEQsS0FBVixDQUFnQjtBQUNkTixXQUFPLG9CQUFVTyxNQURIO0FBRWRDLFdBQU8sb0JBQVVELE1BRkg7QUFHZFYsVUFBTSxvQkFBVVU7QUFIRixHQUFoQixDQURNLENBbkJTO0FBMEJqQmdDLGVBQWEsb0JBQVVoQyxNQTFCTjtBQTJCakI2QixhQUFXLG9CQUFVMEIsS0FBVixDQUFnQkgsV0FBaEIsQ0EzQk07QUE0QmpCbkIsc0JBQW9CLG9CQUFVakMsTUE1QmI7QUE2QmpCa0Msc0JBQW9CLG9CQUFVN0IsSUE3QmI7QUE4QmpCZSxvQkFBa0Isb0JBQVVmLElBOUJYO0FBK0JqQmtCLGlCQUFlLG9CQUFVbEIsSUEvQlI7QUFnQ2pCK0IsbUJBQWlCLG9CQUFVL0IsSUFoQ1Y7QUFpQ2pCYyxVQUFRLG9CQUFVZCxJQWpDRDtBQWtDakJ1RCxZQUFVLG9CQUFVdkQsSUFsQ0g7QUFtQ2pCTSxjQUFZLG9CQUFVTixJQW5DTDtBQW9DakI2RixhQUFXLG9CQUFVZSxNQXBDSjtBQXFDakJkLFFBQU0sb0JBQVVjO0FBckNDLENBQW5COztBQXdDQWhDLE9BQU9pQyxhQUFQLEdBQXVCLElBQXZCIiwiZmlsZSI6Ikxvb2t1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcbmltcG9ydCBQaWxsIGZyb20gJy4vUGlsbCc7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgdXVpZCwgaXNFbEluQ2hpbGRyZW4sIHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgTG9va3VwU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpbGwoc2VsZWN0ZWQpIHtcbiAgICBjb25zdCBvblBpbGxDbGljayA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8UGlsbFxuICAgICAgICBpZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICB0cnVuY2F0ZVxuICAgICAgICBwaWxsUmVmPXsgbm9kZSA9PiAodGhpcy5waWxsID0gbm9kZSkgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cbiAgICAgICAgaWNvbj17c2VsZWN0ZWQuaWNvbiA/IHtcbiAgICAgICAgICBjYXRlZ29yeTogc2VsZWN0ZWQuY2F0ZWdvcnksXG4gICAgICAgICAgaWNvbjogc2VsZWN0ZWQuaWNvbixcbiAgICAgICAgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgbGFiZWw9eyBzZWxlY3RlZC5sYWJlbCB9XG4gICAgICAgIG9uUmVtb3ZlPXsgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQsIGxvb2t1cFNlbGVjdGlvblJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9eyBsb29rdXBTZWxlY3Rpb25SZWYgfSBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2NvbnRhaW5lcic+XG4gICAgICAgICAgeyBzZWxlY3RlZCA/IHRoaXMucmVuZGVyUGlsbChzZWxlY3RlZCkgOiB1bmRlZmluZWQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5jb25zdCBMb29rdXBFbnRyeVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbkxvb2t1cFNlbGVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBvblJlc2V0U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9va3VwU2VsZWN0aW9uUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJlZ2lzdGVyU3R5bGUoJ2xvb2t1cFNlYXJjaCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJyxcbiAgICAgICAgJ3sgbWluLXdpZHRoOiAzcmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgICAgJ3sgbWFyZ2luLWxlZnQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXIgLnNsZHMtYnV0dG9uJyxcbiAgICAgICAgJ3sgcGFkZGluZzogMCAwLjI1cmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIucmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlNWVlOyBib3JkZXItY29sb3I6ICNhOGI3Yzc7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIgLnNsZHMtaW5wdXQtLWJhcmUnLFxuICAgICAgICAneyBoZWlnaHQ6IDIuMTVyZW07IHdpZHRoOiAxMDAlOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkxvb2t1cEljb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChzZWFyY2hUZXh0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIG5vIHNlYXJjaCB0ZXh0LCBxdWl0IGxvb2t1cCBzZWFyY2hcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vblByZXNzRG93bigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBxdWl0IGxvb2t1cCBzZWFyY2ggKGNhbmNlbClcbiAgICAgIGNvbnN0IGNhbmNlbCA9IHRydWU7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoY2FuY2VsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWFyY2hUZXh0KTtcbiAgfVxuXG4gIG9uSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayA9IChzY29wZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHRoaXMubm9kZSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBoYW5kbGVMb29rdXBTZWFyY2hSZWYgPSAobm9kZSkgPT4ge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgY29uc3QgeyBsb29rdXBTZWFyY2hSZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvb2t1cFNlYXJjaFJlZikgeyBsb29rdXBTZWFyY2hSZWYobm9kZSk7IH1cbiAgfVxuXG4gIHJlbmRlclNlYXJjaElucHV0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhpZGRlbiwgc2VhcmNoVGV4dCwgaWNvbkFsaWduID0gJ3JpZ2h0JyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtaW5wdXQtaGFzLWljb24nLFxuICAgICAgYHNsZHMtaW5wdXQtaGFzLWljb24tLSR7aWNvbkFsaWdufWAsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgcHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIGRlbGV0ZSBwcHJvcHMuaWNvbkFsaWduO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLnRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TY29wZU1lbnVDbGljaztcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5vblByZXNzRG93bjtcbiAgICBkZWxldGUgcHByb3BzLm9uQ29tcGxldGU7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNlYXJjaFRleHRDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5zY29wZXM7XG4gICAgZGVsZXRlIHBwcm9wcy5vbkxvb2t1cFJlcXVlc3Q7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5sb29rdXBTZWFyY2hSZWY7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgdGhpcy5oYW5kbGVMb29rdXBTZWFyY2hSZWYgfSBjbGFzc05hbWU9eyBzZWFyY2hJbnB1dENsYXNzTmFtZXMgfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICAgIGlucHV0UmVmPXsgbm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpIH1cbiAgICAgICAgICB2YWx1ZT17IHNlYXJjaFRleHQgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uTG9va3VwSWNvbkNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlOiB0YXJnZXQsIGRpc2FibGVkIH0pIHtcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgbGFiZWw9eyBpY29uIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNjb3Blcy5tYXAoc2NvcGUgPT4gPERyb3Bkb3duTWVudUl0ZW0ga2V5PXsgc2NvcGUudmFsdWUgfSB7IC4uLnNjb3BlIH0gLz4pIH1cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY29wZXMsIGhpZGRlbiwgZGlzYWJsZWQsIHRhcmdldFNjb3BlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICBjb25zdCBsb29rdXBTZWFyY2hDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICdzbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgeyAncmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB9LFxuICAgICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgV2Via2l0RmxleFdyYXA6ICdub3dyYXAnLCBtc0ZsZXhXcmFwOiAnbm93cmFwJywgZmxleFdyYXA6ICdub3dyYXAnIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyB9IHN0eWxlPXsgc3R5bGVzIH0+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlLCBkaXNhYmxlZCB9KSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNlYXJjaElucHV0KHsgLi4ucHJvcHMsIGRpc2FibGVkLCBjbGFzc05hbWU6ICdzbGRzLWNvbCcsIGJhcmU6IHRydWUgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaElucHV0KHRoaXMucHJvcHMpO1xuICB9XG5cbn1cblxuY29uc3QgSUNPTl9BTElHTlMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuTG9va3VwU2VhcmNoLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLmFueSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUHJlc3NEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9va3VwU2VhcmNoUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cENhbmRpZGF0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICFwcmV2UHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChlbnRyeSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHsgLy8gVVAvRE9XTlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoaW5kZXgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBhbmNob3JzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgIGlmIChhbmNob3JzW2luZGV4XSkge1xuICAgICAgYW5jaG9yc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDYW5kaWRhdGUoZW50cnkpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBpY29uLCBsYWJlbCwgdmFsdWUsIG1ldGEgfSA9IGVudHJ5O1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXsgdmFsdWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0tYWN0aW9uIHJlYWN0LXNsZHMtY2FuZGlkYXRlJ1xuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHJvbGU9J29wdGlvbidcbiAgICAgICAgICBvbktleURvd249eyBlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLW1lZGlhIHNsZHMtbWVkaWEtLWNlbnRlciBzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbiA/XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tZWRpYV9fZmlndXJlJ1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9eyBjYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1tZWRpYV9fYm9keSBzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LXRleHQgc2xkcy10cnVuY2F0ZSc+eyBsYWJlbCB9PC9zcGFuPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0YSA/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19yZXN1bHQtbWV0YSBzbGRzLXRydW5jYXRlJz57IG1ldGEgfTwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSA9IFtdLCBoaWRkZW4sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBmaWx0ZXIgPSAoKSA9PiB0cnVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cE1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWxvb2t1cF9fbWVudScsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4sICdzbGRzLXNob3cnOiAhaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfVxuICAgICAgICByb2xlPSdsaXN0Ym94J1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgaGVhZGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnIHN0eWxlPXsgeyBoZWlnaHQ6IDIwIH0gfT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb250YWluZXI9e2ZhbHNlfSBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICAgIDwvbGk+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkxvb2t1cENhbmRpZGF0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaElucHV0Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uTG9va3VwSXRlbVNlbGVjdChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkLCBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRWxlbSA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBwaWxsRWxlbSA9IHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpOyAvLyB0ZWxsIHRoZSBjb21wb25lbnQgY29udGFpbmVyIHRvIHF1aXQgbG9va3VwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRydWUpOyAvLyBxdWl0IGxvb2t1cCAoY2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIH1cbiAgICAgICAgbG9hZGluZz17IGxvYWRpbmcgfVxuICAgICAgICBmaWx0ZXI9eyBsb29rdXBGaWx0ZXIgPyBlbnRyeSA9PiBsb29rdXBGaWx0ZXIoZW50cnksIHNlYXJjaFRleHQsIHRhcmdldFNjb3BlKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgIGhlYWRlcj17IGxpc3RIZWFkZXIgfVxuICAgICAgICBmb290ZXI9eyBsaXN0Rm9vdGVyIH1cbiAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uTG9va3VwSXRlbVNlbGVjdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXAnLFxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCwgZGVmYXVsdE9wZW5lZCwgZGVmYXVsdFNlYXJjaFRleHQsIGRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uU2NvcGVDaGFuZ2UsIG9uU2NvcGVNZW51Q2xpY2ssIG9uU2VhcmNoVGV4dENoYW5nZSwgb25Mb29rdXBSZXF1ZXN0LFxuICAgICAgLi4uc2VhcmNoUHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID9cbiAgICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIGxvb2t1cFNlbGVjdGlvblJlZj17IG5vZGUgPT4gKHRoaXMuc2VsZWN0aW9uID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8TG9va3VwU2VhcmNoXG4gICAgICAgICAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgbG9va3VwU2VhcmNoUmVmPXsgbm9kZSA9PiAodGhpcy5zZWFyY2ggPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxuICAgICAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9eyBvbkNvbXBsZXRlIH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaElucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuXG5Mb29rdXAucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBkZWZhdWx0VGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VhcmNoVGV4dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Mb29rdXBSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTG9va3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19