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

      console.log('test', opened, loading, data.length, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwiTG9va3VwRW50cnlUeXBlIiwic2hhcGUiLCJzdHJpbmciLCJ2YWx1ZSIsIm1ldGEiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIkxvb2t1cFNlYXJjaCIsIm9uTG9va3VwSWNvbkNsaWNrIiwib25TdWJtaXQiLCJvbklucHV0S2V5RG93biIsInNlYXJjaFRleHQiLCJvbkNvbXBsZXRlIiwib25QcmVzc0Rvd24iLCJjYW5jZWwiLCJvbklucHV0Q2hhbmdlIiwib25DaGFuZ2UiLCJvbklucHV0Qmx1ciIsInNldFRpbWVvdXQiLCJpc0ZvY3VzZWRJbkNvbXBvbmVudCIsIm9uQmx1ciIsIm9uU2NvcGVNZW51Q2xpY2siLCJvbk1lbnVJdGVtQ2xpY2siLCJzY29wZSIsIm9uU2NvcGVDaGFuZ2UiLCJoYW5kbGVMb29rdXBTZWFyY2hSZWYiLCJsb29rdXBTZWFyY2hSZWYiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpY29uQWxpZ24iLCJzZWFyY2hJbnB1dENsYXNzTmFtZXMiLCJwcHJvcHMiLCJ0YXJnZXRTY29wZSIsImRlZmF1bHRUYXJnZXRTY29wZSIsIm9uU2VhcmNoVGV4dENoYW5nZSIsInNjb3BlcyIsIm9uTG9va3VwUmVxdWVzdCIsImRlZmF1bHRTZWFyY2hUZXh0Iiwib25WYWx1ZUNoYW5nZSIsImlucHV0IiwiZGlzYWJsZWQiLCJjdXJzb3IiLCJzZWxlY3RvckNsYXNzTmFtZXMiLCJtYXAiLCJsb29rdXBTZWFyY2hDbGFzc05hbWVzIiwic3R5bGVzIiwiV2Via2l0RmxleFdyYXAiLCJtc0ZsZXhXcmFwIiwiZmxleFdyYXAiLCJyZW5kZXJTY29wZVNlbGVjdG9yIiwicmVuZGVyU2VhcmNoSW5wdXQiLCJiYXJlIiwiSUNPTl9BTElHTlMiLCJhcnJheU9mIiwiYW55Iiwib25lT2YiLCJMb29rdXBDYW5kaWRhdGVMaXN0IiwiZm9jdXNUb1RhcmdldEl0ZW1FbCIsInByZXZQcm9wcyIsImVudHJ5Iiwib25TZWxlY3QiLCJjdXJyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXRlbUVsIiwibmV4dFNpYmxpbmciLCJwcmV2aW91c1NpYmxpbmciLCJhbmNob3JFbCIsInF1ZXJ5U2VsZWN0b3IiLCJpbmRleCIsImVsIiwiYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkYXRhIiwibG9hZGluZyIsImhlYWRlciIsImZvb3RlciIsImZpbHRlciIsImxvb2t1cE1lbnVDbGFzc05hbWVzIiwicmVuZGVyQ2FuZGlkYXRlIiwiaGVpZ2h0IiwibWFyZ2luIiwiTG9va3VwIiwic3RhdGUiLCJkZWZhdWx0U2VsZWN0ZWQiLCJvcGVuZWQiLCJkZWZhdWx0T3BlbmVkIiwiZm9jdXNGaXJzdENhbmRpZGF0ZSIsInNldFN0YXRlIiwibGVuZ3RoIiwic2VhcmNoRWxlbSIsInNlYXJjaCIsImlucHV0RWxlbSIsInNlbGVjdGlvbkVsZW0iLCJzZWxlY3Rpb24iLCJwaWxsRWxlbSIsInJvb3RFbCIsInRhcmdldEVsIiwicGFyZW50Tm9kZSIsInRvdGFsQ29scyIsImNvbHMiLCJyZXF1aXJlZCIsImVycm9yIiwibG9va3VwRmlsdGVyIiwibGlzdEhlYWRlciIsImxpc3RGb290ZXIiLCJkcm9wZG93biIsImNhbmRpZGF0ZUxpc3QiLCJvbkxvb2t1cEl0ZW1TZWxlY3QiLCJjb25zb2xlIiwibG9nIiwiZm9ybUVsZW1Qcm9wcyIsInNlYXJjaFByb3BzIiwib25Gb2N1c0ZpcnN0Q2FuZGlkYXRlIiwib25TZWFyY2hJbnB1dENsaWNrIiwiZGVmYXVsdFZhbHVlIiwibnVtYmVyIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0lBRWFBLGUsV0FBQUEsZTs7Ozs7Ozs7Ozs4QkFDREMsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRUMsT0FBRixLQUFjLENBQWQsSUFBbUJELEVBQUVDLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBS0QsS0FBTCxDQUFXQyxnQkFBWDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVQyxRLEVBQVU7QUFBQTs7QUFDbkIsVUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNQLENBQUQsRUFBTztBQUN6QkEsVUFBRVEsTUFBRixDQUFTQyxLQUFUO0FBQ0FULFVBQUVFLGNBQUY7QUFDQUYsVUFBRUcsZUFBRjtBQUNELE9BSkQ7QUFLQSxhQUNFO0FBQ0UsWUFBSyxLQUFLQyxLQUFMLENBQVdNLEVBRGxCO0FBRUUsc0JBRkY7QUFHRSxpQkFBVTtBQUFBLGlCQUFTLE9BQUtDLElBQUwsR0FBWUMsSUFBckI7QUFBQSxTQUhaO0FBSUUsbUJBQVksS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBSmQ7QUFLRSxpQkFBVVAsV0FMWjtBQU1FLGtCQUFXLENBTmI7QUFPRSxjQUFNRCxTQUFTUyxJQUFULEdBQWdCO0FBQ3BCQyxvQkFBVVYsU0FBU1UsUUFEQztBQUVwQkQsZ0JBQU1ULFNBQVNTO0FBRkssU0FB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dGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgUGlsbCBmcm9tICcuL1BpbGwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIExvb2t1cFNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWxsKHNlbGVjdGVkKSB7XG4gICAgY29uc3Qgb25QaWxsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBpbGxcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgdHJ1bmNhdGVcbiAgICAgICAgcGlsbFJlZj17IG5vZGUgPT4gKHRoaXMucGlsbCA9IG5vZGUpIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xpY2s9eyBvblBpbGxDbGljayB9XG4gICAgICAgIHRhYkluZGV4PXsgMCB9XG4gICAgICAgIGljb249e3NlbGVjdGVkLmljb24gPyB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHNlbGVjdGVkLmNhdGVnb3J5LFxuICAgICAgICAgIGljb246IHNlbGVjdGVkLmljb24sXG4gICAgICAgIH0gOiB1bmRlZmluZWR9XG4gICAgICAgIGxhYmVsPXsgc2VsZWN0ZWQubGFiZWwgfVxuICAgICAgICBvblJlbW92ZT17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaWRkZW4sIHNlbGVjdGVkLCBsb29rdXBTZWxlY3Rpb25SZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgbG9va3VwU2VsZWN0aW9uUmVmIH0gY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1waWxsX19jb250YWluZXInPlxuICAgICAgICAgIHsgc2VsZWN0ZWQgPyB0aGlzLnJlbmRlclBpbGwoc2VsZWN0ZWQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgTG9va3VwRW50cnlUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5Mb29rdXBTZWxlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvb2t1cFNlbGVjdGlvblJlZjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZWdpc3RlclN0eWxlKCdsb29rdXBTZWFyY2gnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcicsXG4gICAgICAgICd7IG1pbi13aWR0aDogM3JlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlcicsXG4gICAgICAgICd7IG1hcmdpbi1sZWZ0OiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyIC5zbGRzLWJ1dHRvbicsXG4gICAgICAgICd7IHBhZGRpbmc6IDAgMC4yNXJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgICd7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyLnJlYWN0LXNsZHMtYm94LWRpc2FibGVkJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogI2UwZTVlZTsgYm9yZGVyLWNvbG9yOiAjYThiN2M3OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyIC5zbGRzLWlucHV0LS1iYXJlJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAyLjE1cmVtOyB3aWR0aDogMTAwJTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgb25Mb29rdXBJY29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBubyBzZWFyY2ggdGV4dCwgcXVpdCBsb29rdXAgc2VhcmNoXG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzc0Rvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gcXVpdCBsb29rdXAgc2VhcmNoIChjYW5jZWwpXG4gICAgICBjb25zdCBjYW5jZWwgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKGNhbmNlbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gIH1cblxuICBvbklucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2sgPSAoc2NvcGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2Uoc2NvcGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgaGFuZGxlTG9va3VwU2VhcmNoUmVmID0gKG5vZGUpID0+IHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIGNvbnN0IHsgbG9va3VwU2VhcmNoUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsb29rdXBTZWFyY2hSZWYpIHsgbG9va3VwU2VhcmNoUmVmKG5vZGUpOyB9XG4gIH1cblxuICByZW5kZXJTZWFyY2hJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoaWRkZW4sIHNlYXJjaFRleHQsIGljb25BbGlnbiA9ICdyaWdodCcgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlYXJjaElucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uJyxcbiAgICAgIGBzbGRzLWlucHV0LWhhcy1pY29uLS0ke2ljb25BbGlnbn1gLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IHBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcbiAgICBkZWxldGUgcHByb3BzLmljb25BbGlnbjtcbiAgICBkZWxldGUgcHByb3BzLnNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy50YXJnZXRTY29wZTtcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVNZW51Q2xpY2s7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNjb3BlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25QcmVzc0Rvd247XG4gICAgZGVsZXRlIHBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2NvcGVzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25Mb29rdXBSZXF1ZXN0O1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMubG9va3VwU2VhcmNoUmVmO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICBpbnB1dFJlZj17IG5vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKSB9XG4gICAgICAgICAgdmFsdWU9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkxvb2t1cEljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZTogdGFyZ2V0LCBkaXNhYmxlZCB9KSB7XG4gICAgbGV0IHRhcmdldFNjb3BlID0gc2NvcGVzWzBdIHx8IHt9O1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoc2NvcGUudmFsdWUgPT09IHRhcmdldCkge1xuICAgICAgICB0YXJnZXRTY29wZSA9IHNjb3BlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbiA9IDxJY29uIGljb249eyB0YXJnZXRTY29wZS5pY29uIHx8ICdub25lJyB9IHNpemU9J3gtc21hbGwnIC8+O1xuICAgIGNvbnN0IHNlbGVjdG9yQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWdyaWQtLWFsaWduLWNlbnRlcicsXG4gICAgICAnc2xkcy1ncmlkLS12ZXJ0aWNhbC1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3JlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJ1xuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VsZWN0b3JDbGFzc05hbWVzIH0+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgIGxhYmVsPXsgaWNvbiB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljayB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBzY29wZXMubWFwKHNjb3BlID0+IDxEcm9wZG93bk1lbnVJdGVtIGtleT17IHNjb3BlLnZhbHVlIH0geyAuLi5zY29wZSB9IC8+KSB9XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NvcGVzLCBoaWRkZW4sIGRpc2FibGVkLCB0YXJnZXRTY29wZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgY29uc3QgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAnc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgIHsgJ3JlYWN0LXNsZHMtYm94LWRpc2FibGVkJzogZGlzYWJsZWQgfSxcbiAgICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBzdHlsZXMgPSB7IFdlYmtpdEZsZXhXcmFwOiAnbm93cmFwJywgbXNGbGV4V3JhcDogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9eyB0aGlzLmhhbmRsZUxvb2t1cFNlYXJjaFJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgfSBzdHlsZT17IHN0eWxlcyB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZSwgZGlzYWJsZWQgfSkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh7IC4uLnByb3BzLCBkaXNhYmxlZCwgY2xhc3NOYW1lOiAnc2xkcy1jb2wnLCBiYXJlOiB0cnVlIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh0aGlzLnByb3BzKTtcbiAgfVxuXG59XG5cbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkxvb2t1cFNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5hbnksIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblByZXNzRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvb2t1cFNlYXJjaFJlZjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29rdXBDYW5kaWRhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhcHJldlByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3QoZW50cnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlbnRyeSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7IC8vIFVQL0RPV05cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICBhbmNob3JFbC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gaXRlbUVsLm5leHRTaWJsaW5nIDogaXRlbUVsLnByZXZpb3VzU2libGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKGluZGV4KSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgYW5jaG9ycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICBpZiAoYW5jaG9yc1tpbmRleF0pIHtcbiAgICAgIGFuY2hvcnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2FuZGlkYXRlKGVudHJ5KSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSwgaWNvbiwgbGFiZWwsIHZhbHVlLCBtZXRhIH0gPSBlbnRyeTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17IHZhbHVlIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtLWFjdGlvbiByZWFjdC1zbGRzLWNhbmRpZGF0ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICByb2xlPSdvcHRpb24nXG4gICAgICAgICAgb25LZXlEb3duPXsgZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLnByb3BzLm9uQmx1ciB9XG4gICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1tZWRpYSBzbGRzLW1lZGlhLS1jZW50ZXIgc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb24gP1xuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbWVkaWFfX2ZpZ3VyZSdcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXsgY2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgICAgaWNvbj17IGljb24gfVxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbWVkaWFfX2JvZHkgc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX3Jlc3VsdC10ZXh0IHNsZHMtdHJ1bmNhdGUnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGEgP1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LW1ldGEgc2xkcy10cnVuY2F0ZSc+eyBtZXRhIH08L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgPSBbXSwgaGlkZGVuLCBsb2FkaW5nLCBoZWFkZXIsIGZvb3RlciwgZmlsdGVyID0gKCkgPT4gdHJ1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXBfX21lbnUnLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuLCAnc2xkcy1zaG93JzogIWhpZGRlbiB9XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfVxuICAgICAgICByb2xlPSdsaXN0Ym94J1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgaGVhZGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnIHN0eWxlPXsgeyBoZWlnaHQ6IDIwIH0gfT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb250YWluZXI9e2ZhbHNlfSBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICAgIDwvbGk+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkxvb2t1cENhbmRpZGF0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaElucHV0Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uTG9va3VwSXRlbVNlbGVjdChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkLCBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRWxlbSA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBwaWxsRWxlbSA9IHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpOyAvLyB0ZWxsIHRoZSBjb21wb25lbnQgY29udGFpbmVyIHRvIHF1aXQgbG9va3VwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRydWUpOyAvLyBxdWl0IGxvb2t1cCAoY2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIHx8ICghbG9hZGluZyAmJiBkYXRhLmxlbmd0aCA9PT0gMCkgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IGVudHJ5ID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jywgb3BlbmVkLCBsb2FkaW5nLCBkYXRhLmxlbmd0aCwgZGF0YSk7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXAnLFxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCwgZGVmYXVsdE9wZW5lZCwgZGVmYXVsdFNlYXJjaFRleHQsIGRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uU2NvcGVDaGFuZ2UsIG9uU2NvcGVNZW51Q2xpY2ssIG9uU2VhcmNoVGV4dENoYW5nZSwgb25Mb29rdXBSZXF1ZXN0LFxuICAgICAgLi4uc2VhcmNoUHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID9cbiAgICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIGxvb2t1cFNlbGVjdGlvblJlZj17IG5vZGUgPT4gKHRoaXMuc2VsZWN0aW9uID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8TG9va3VwU2VhcmNoXG4gICAgICAgICAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgbG9va3VwU2VhcmNoUmVmPXsgbm9kZSA9PiAodGhpcy5zZWFyY2ggPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxuICAgICAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9eyBvbkNvbXBsZXRlIH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaElucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuXG5Mb29rdXAucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBkZWZhdWx0VGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VhcmNoVGV4dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Mb29rdXBSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTG9va3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19