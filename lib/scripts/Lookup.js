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
    value: function renderPill(selected, onSelectedOptionClick) {
      var _this2 = this;

      var onPillClick = function onPillClick(e) {
        e.target.focus();
        e.preventDefault();
        e.stopPropagation();
        onSelectedOptionClick && onSelectedOptionClick();
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
          lookupSelectionRef = _props.lookupSelectionRef,
          onSelectedOptionClick = _props.onSelectedOptionClick;

      var lookupClassNames = (0, _classnames2.default)({ 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { ref: lookupSelectionRef, className: lookupClassNames },
        _react2.default.createElement(
          'div',
          { className: 'slds-pill__container' },
          selected ? this.renderPill(selected, onSelectedOptionClick) : undefined
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
  lookupSelectionRef: _propTypes2.default.func,
  onSelectedOptionClick: _propTypes2.default.func
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
          if (_this3.props.onComplete) {
            _this3.props.onComplete();
          }
        }
        if (_this3.props.onReturnKey) {
          _this3.props.onReturnKey(e);
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
        if (_this3.props.onComplete) {
          _this3.props.onComplete(cancel);
        }
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
      delete pprops.onReturnKey;
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
  onReturnKey: _propTypes2.default.func,
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
          onReturnKey = _props4.onReturnKey,
          props = (0, _objectWithoutProperties3.default)(_props4, ['totalCols', 'cols', 'label', 'required', 'error', 'className', 'selected', 'opened', 'searchText', 'targetScope', 'loading', 'lookupFilter', 'listHeader', 'listFooter', 'data', 'onComplete', 'onReturnKey']);

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
          onSelectedOptionClick = props.onSelectedOptionClick,
          searchProps = (0, _objectWithoutProperties3.default)(props, ['defaultSelected', 'defaultOpened', 'defaultSearchText', 'defaultTargetScope', 'onSelect', 'onBlur', 'onScopeChange', 'onScopeMenuClick', 'onSearchTextChange', 'onLookupRequest', 'onSelectedOptionClick']);
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
            onResetSelection: this.onResetSelection.bind(this),
            onSelectedOptionClick: onSelectedOptionClick
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
            onReturnKey: onReturnKey,
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
  onSelectedOptionClick: _propTypes2.default.func,
  onComplete: _propTypes2.default.func,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number
};

Lookup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblNlbGVjdGVkT3B0aW9uQ2xpY2siLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwiQ29tcG9uZW50IiwiTG9va3VwRW50cnlUeXBlIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJ2YWx1ZSIsIm1ldGEiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIkxvb2t1cFNlYXJjaCIsIm9uTG9va3VwSWNvbkNsaWNrIiwib25TdWJtaXQiLCJvbklucHV0S2V5RG93biIsInNlYXJjaFRleHQiLCJvbkNvbXBsZXRlIiwib25SZXR1cm5LZXkiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsImN1cnNvciIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJJQ09OX0FMSUdOUyIsImFycmF5T2YiLCJhbnkiLCJvbmVPZiIsIkxvb2t1cENhbmRpZGF0ZUxpc3QiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwicHJldlByb3BzIiwiZW50cnkiLCJvblNlbGVjdCIsImN1cnJlbnRFbCIsInBhcmVudEVsZW1lbnQiLCJpdGVtRWwiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImFuY2hvckVsIiwicXVlcnlTZWxlY3RvciIsImluZGV4IiwiZWwiLCJhbmNob3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJyZW5kZXJDYW5kaWRhdGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJMb29rdXAiLCJzdGF0ZSIsImRlZmF1bHRTZWxlY3RlZCIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJmb2N1c0ZpcnN0Q2FuZGlkYXRlIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJzZWFyY2hFbGVtIiwic2VhcmNoIiwiaW5wdXRFbGVtIiwic2VsZWN0aW9uRWxlbSIsInNlbGVjdGlvbiIsInBpbGxFbGVtIiwicm9vdEVsIiwidGFyZ2V0RWwiLCJwYXJlbnROb2RlIiwidG90YWxDb2xzIiwiY29scyIsInJlcXVpcmVkIiwiZXJyb3IiLCJsb29rdXBGaWx0ZXIiLCJsaXN0SGVhZGVyIiwibGlzdEZvb3RlciIsImRyb3Bkb3duIiwiY2FuZGlkYXRlTGlzdCIsIm9uTG9va3VwSXRlbVNlbGVjdCIsImZvcm1FbGVtUHJvcHMiLCJzZWFyY2hQcm9wcyIsIm9uRm9jdXNGaXJzdENhbmRpZGF0ZSIsIm9uU2VhcmNoSW5wdXRDbGljayIsIkZvcm1FbGVtZW50IiwiZGVmYXVsdFZhbHVlIiwibnVtYmVyIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0lBRWFBLGUsV0FBQUEsZTs7Ozs7Ozs7Ozs4QkFDREMsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRUMsT0FBRixLQUFjLENBQWQsSUFBbUJELEVBQUVDLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBS0QsS0FBTCxDQUFXQyxnQkFBWDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVQyxRLEVBQVVDLHFCLEVBQXVCO0FBQUE7O0FBQzFDLFVBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDUixDQUFELEVBQU87QUFDekJBLFVBQUVTLE1BQUYsQ0FBU0MsS0FBVDtBQUNBVixVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQUksaUNBQXlCQSx1QkFBekI7QUFDRCxPQUxEO0FBTUEsYUFDRSw4QkFBQyxjQUFEO0FBQ0UsWUFBSyxLQUFLSCxLQUFMLENBQVdPLEVBRGxCO0FBRUUsc0JBRkY7QUFHRSxpQkFBVTtBQUFBLGlCQUFTLE9BQUtDLElBQUwsR0FBWUMsSUFBckI7QUFBQSxTQUhaO0FBSUUsbUJBQVksS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBSmQ7QUFLRSxpQkFBVVAs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QWhCUDtBQWlCakJtRyxjQUFZMUcsb0JBQVViLElBakJMO0FBa0JqQndILGNBQVkzRyxvQkFBVWIsSUFsQkw7QUFtQmpCbUQsVUFBUXRDLG9CQUFVd0QsT0FBVixDQUNOeEQsb0JBQVVDLEtBQVYsQ0FBZ0I7QUFDZFIsV0FBT08sb0JBQVVFLE1BREg7QUFFZEMsV0FBT0gsb0JBQVVFLE1BRkg7QUFHZFosVUFBTVUsb0JBQVVFO0FBSEYsR0FBaEIsQ0FETSxDQW5CUztBQTBCakJpQyxlQUFhbkMsb0JBQVVFLE1BMUJOO0FBMkJqQjhCLGFBQVdoQyxvQkFBVTBELEtBQVYsQ0FBZ0JILFdBQWhCLENBM0JNO0FBNEJqQm5CLHNCQUFvQnBDLG9CQUFVRSxNQTVCYjtBQTZCakJtQyxzQkFBb0JyQyxvQkFBVU8sSUE3QmI7QUE4QmpCZ0Isb0JBQWtCdkIsb0JBQVVPLElBOUJYO0FBK0JqQm1CLGlCQUFlMUIsb0JBQVVPLElBL0JSO0FBZ0NqQmdDLG1CQUFpQnZDLG9CQUFVTyxJQWhDVjtBQWlDakJlLFVBQVF0QixvQkFBVU8sSUFqQ0Q7QUFrQ2pCd0QsWUFBVS9ELG9CQUFVTyxJQWxDSDtBQW1DakIxQix5QkFBdUJtQixvQkFBVU8sSUFuQ2hCO0FBb0NqQk0sY0FBWWIsb0JBQVVPLElBcENMO0FBcUNqQjhGLGFBQVdyRyxvQkFBVXFILE1BckNKO0FBc0NqQmYsUUFBTXRHLG9CQUFVcUg7QUF0Q0MsQ0FBbkI7O0FBeUNBakMsT0FBT2tDLGFBQVAsR0FBdUIsSUFBdkIiLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi9QaWxsJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcbmltcG9ydCB7IERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBMb29rdXBTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlsbChzZWxlY3RlZCwgb25TZWxlY3RlZE9wdGlvbkNsaWNrKSB7XG4gICAgY29uc3Qgb25QaWxsQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdGVkT3B0aW9uQ2xpY2sgJiYgb25TZWxlY3RlZE9wdGlvbkNsaWNrKCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFBpbGxcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgdHJ1bmNhdGVcbiAgICAgICAgcGlsbFJlZj17IG5vZGUgPT4gKHRoaXMucGlsbCA9IG5vZGUpIH1cbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQ2xpY2s9eyBvblBpbGxDbGljayB9XG4gICAgICAgIHRhYkluZGV4PXsgMCB9XG4gICAgICAgIGljb249e3NlbGVjdGVkLmljb24gPyB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHNlbGVjdGVkLmNhdGVnb3J5LFxuICAgICAgICAgIGljb246IHNlbGVjdGVkLmljb24sXG4gICAgICAgIH0gOiB1bmRlZmluZWR9XG4gICAgICAgIGxhYmVsPXsgc2VsZWN0ZWQubGFiZWwgfVxuICAgICAgICBvblJlbW92ZT17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoaWRkZW4sIHNlbGVjdGVkLCBsb29rdXBTZWxlY3Rpb25SZWYsIG9uU2VsZWN0ZWRPcHRpb25DbGljayB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9eyBsb29rdXBTZWxlY3Rpb25SZWYgfSBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2NvbnRhaW5lcic+XG4gICAgICAgICAgeyBzZWxlY3RlZCA/IHRoaXMucmVuZGVyUGlsbChzZWxlY3RlZCwgb25TZWxlY3RlZE9wdGlvbkNsaWNrKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IExvb2t1cEVudHJ5VHlwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1ldGE6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuTG9va3VwU2VsZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uUmVzZXRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBsb29rdXBTZWxlY3Rpb25SZWY6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdGVkT3B0aW9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICByZWdpc3RlclN0eWxlKCdsb29rdXBTZWFyY2gnLCBbXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcicsXG4gICAgICAgICd7IG1pbi13aWR0aDogM3JlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlcicsXG4gICAgICAgICd7IG1hcmdpbi1sZWZ0OiAwOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyIC5zbGRzLWJ1dHRvbicsXG4gICAgICAgICd7IHBhZGRpbmc6IDAgMC4yNXJlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgICd7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyLnJlYWN0LXNsZHMtYm94LWRpc2FibGVkJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogI2UwZTVlZTsgYm9yZGVyLWNvbG9yOiAjYThiN2M3OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyIC5zbGRzLWlucHV0LS1iYXJlJyxcbiAgICAgICAgJ3sgaGVpZ2h0OiAyLjE1cmVtOyB3aWR0aDogMTAwJTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgb25Mb29rdXBJY29uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBubyBzZWFyY2ggdGV4dCwgcXVpdCBsb29rdXAgc2VhcmNoXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXR1cm5LZXkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJldHVybktleShlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uUHJlc3NEb3duKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vIHF1aXQgbG9va3VwIHNlYXJjaCAoY2FuY2VsKVxuICAgICAgY29uc3QgY2FuY2VsID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKGNhbmNlbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gIH1cblxuICBvbklucHV0Qmx1ciA9IChlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvbk1lbnVJdGVtQ2xpY2sgPSAoc2NvcGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2Uoc2NvcGUudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIHJldHVybiBpc0VsSW5DaGlsZHJlbih0aGlzLm5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgaGFuZGxlTG9va3VwU2VhcmNoUmVmID0gKG5vZGUpID0+IHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIGNvbnN0IHsgbG9va3VwU2VhcmNoUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsb29rdXBTZWFyY2hSZWYpIHsgbG9va3VwU2VhcmNoUmVmKG5vZGUpOyB9XG4gIH1cblxuICByZW5kZXJTZWFyY2hJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoaWRkZW4sIHNlYXJjaFRleHQsIGljb25BbGlnbiA9ICdyaWdodCcgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlYXJjaElucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uJyxcbiAgICAgIGBzbGRzLWlucHV0LWhhcy1pY29uLS0ke2ljb25BbGlnbn1gLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IHBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcbiAgICBkZWxldGUgcHByb3BzLmljb25BbGlnbjtcbiAgICBkZWxldGUgcHByb3BzLnNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy50YXJnZXRTY29wZTtcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVNZW51Q2xpY2s7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNjb3BlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25QcmVzc0Rvd247XG4gICAgZGVsZXRlIHBwcm9wcy5vbkNvbXBsZXRlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25SZXR1cm5LZXk7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNlYXJjaFRleHRDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5zY29wZXM7XG4gICAgZGVsZXRlIHBwcm9wcy5vbkxvb2t1cFJlcXVlc3Q7XG4gICAgZGVsZXRlIHBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLm9uVmFsdWVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5sb29rdXBTZWFyY2hSZWY7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgdGhpcy5oYW5kbGVMb29rdXBTZWFyY2hSZWYgfSBjbGFzc05hbWU9eyBzZWFyY2hJbnB1dENsYXNzTmFtZXMgfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgeyAuLi5wcHJvcHMgfVxuICAgICAgICAgIGlucHV0UmVmPXsgbm9kZSA9PiAodGhpcy5pbnB1dCA9IG5vZGUpIH1cbiAgICAgICAgICB2YWx1ZT17IHNlYXJjaFRleHQgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24gfVxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBzdHlsZT17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB0aGlzLm9uTG9va3VwSWNvbkNsaWNrIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPSdzZWFyY2gnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlOiB0YXJnZXQsIGRpc2FibGVkIH0pIHtcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uXG4gICAgICAgICAgbGFiZWw9eyBpY29uIH1cbiAgICAgICAgICBkaXNhYmxlZD17IGRpc2FibGVkIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljayB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNjb3Blcy5tYXAoc2NvcGUgPT4gPERyb3Bkb3duTWVudUl0ZW0ga2V5PXsgc2NvcGUudmFsdWUgfSB7IC4uLnNjb3BlIH0gLz4pIH1cbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzY29wZXMsIGhpZGRlbiwgZGlzYWJsZWQsIHRhcmdldFNjb3BlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICBjb25zdCBsb29rdXBTZWFyY2hDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICdzbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgeyAncmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnOiBkaXNhYmxlZCB9LFxuICAgICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgV2Via2l0RmxleFdyYXA6ICdub3dyYXAnLCBtc0ZsZXhXcmFwOiAnbm93cmFwJywgZmxleFdyYXA6ICdub3dyYXAnIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyB9IHN0eWxlPXsgc3R5bGVzIH0+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNjb3BlU2VsZWN0b3IoeyBzY29wZXMsIHRhcmdldFNjb3BlLCBkaXNhYmxlZCB9KSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNlYXJjaElucHV0KHsgLi4ucHJvcHMsIGRpc2FibGVkLCBjbGFzc05hbWU6ICdzbGRzLWNvbCcsIGJhcmU6IHRydWUgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaElucHV0KHRoaXMucHJvcHMpO1xuICB9XG5cbn1cblxuY29uc3QgSUNPTl9BTElHTlMgPSBbJ2xlZnQnLCAncmlnaHQnXTtcblxuTG9va3VwU2VhcmNoLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLmFueSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUHJlc3NEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZXR1cm5LZXk6IFByb3BUeXBlcy5mdW5jLFxuICBsb29rdXBTZWFyY2hSZWY6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTG9va3VwQ2FuZGlkYXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgIXByZXZQcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGVudHJ5KSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkgeyAvLyBVUC9ET1dOXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgY3VycmVudEVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gY3VycmVudEVsLm5leHRTaWJsaW5nIDogY3VycmVudEVsLnByZXZpb3VzU2libGluZztcbiAgICAgIHdoaWxlIChpdGVtRWwpIHtcbiAgICAgICAgY29uc3QgYW5jaG9yRWwgPSBpdGVtRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNUb1RhcmdldEl0ZW1FbChpbmRleCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5ub2RlO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgaWYgKGFuY2hvcnNbaW5kZXhdKSB7XG4gICAgICBhbmNob3JzW2luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNhbmRpZGF0ZShlbnRyeSkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnksIGljb24sIGxhYmVsLCB2YWx1ZSwgbWV0YSB9ID0gZW50cnk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBrZXk9eyB2YWx1ZSB9IHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbS1hY3Rpb24gcmVhY3Qtc2xkcy1jYW5kaWRhdGUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgcm9sZT0nb3B0aW9uJ1xuICAgICAgICAgIG9uS2V5RG93bj17IGUgPT4gZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbWVkaWEgc2xkcy1tZWRpYS0tY2VudGVyIHNsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpY29uID9cbiAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW1lZGlhX19maWd1cmUnXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeT17IGNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICAgIGljb249eyBpY29uIH1cbiAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xuICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLW1lZGlhX19ib2R5IHNsZHMtdHJ1bmNhdGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19yZXN1bHQtdGV4dCBzbGRzLXRydW5jYXRlJz57IGxhYmVsIH08L3NwYW4+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBtZXRhID9cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX3Jlc3VsdC1tZXRhIHNsZHMtdHJ1bmNhdGUnPnsgbWV0YSB9PC9zcGFuPiA6XG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhID0gW10sIGhpZGRlbiwgbG9hZGluZywgaGVhZGVyLCBmb290ZXIsIGZpbHRlciA9ICgpID0+IHRydWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwTWVudUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtbG9va3VwX19tZW51JyxcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiwgJ3NsZHMtc2hvdyc6ICFoaWRkZW4gfVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9XG4gICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cE1lbnVDbGFzc05hbWVzIH1cbiAgICAgICAgcm9sZT0nbGlzdGJveCdcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXIgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGhlYWRlciB9PC9kaXY+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19saXN0JyByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKGZpbHRlcikubWFwKHRoaXMucmVuZGVyQ2FuZGlkYXRlLmJpbmQodGhpcykpXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRpbmcgP1xuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PSdsb2FkaW5nJyBzdHlsZT17IHsgaGVpZ2h0OiAyMCB9IH0+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgY29udGFpbmVyPXtmYWxzZX0gc2l6ZT0nc21hbGwnIHN0eWxlPXsgeyBtYXJnaW46ICcwIGF1dG8nIH0gfSAvPlxuICAgICAgICAgICAgICA8L2xpPiA6XG4gICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAge1xuICAgICAgICAgIGZvb3RlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgZm9vdGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Mb29rdXBDYW5kaWRhdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2t1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgc2VsZWN0ZWQ6IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHNlYXJjaFRleHQ6IHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0LFxuICAgICAgdGFyZ2V0U2NvcGU6IHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hJbnB1dENsaWNrKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRhdGEgJiYgdGhpcy5wcm9wcy5kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBvblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldFNjb3BlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGV4dCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG51bGwgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlKCcnKTtcbiAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCgnJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSB0aGlzLnNlbGVjdGlvbjtcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgaWYgKHBpbGxFbGVtKSB7IHBpbGxFbGVtLmZvY3VzKCk7IH1cbiAgICAgIH0sIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoO1xuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTsgLy8gdGVsbCB0aGUgY29tcG9uZW50IGNvbnRhaW5lciB0byBxdWl0IGxvb2t1cFxuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNGaXJzdENhbmRpZGF0ZSgpIHtcbiAgICBjb25zdCB7IG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghb3BlbmVkKSB7XG4gICAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCh0aGlzLnN0YXRlLnNlYXJjaFRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogdHJ1ZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UgfSk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSh0cnVlKTsgLy8gcXVpdCBsb29rdXAgKGNhbmNlbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IHRoaXMubm9kZTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scyxcbiAgICAgIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQsXG4gICAgICBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCxcbiAgICAgIHNlYXJjaFRleHQgPSB0aGlzLnN0YXRlLnNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZSA9IHRoaXMuc3RhdGUudGFyZ2V0U2NvcGUsXG4gICAgICBsb2FkaW5nLCBsb29rdXBGaWx0ZXIsXG4gICAgICBsaXN0SGVhZGVyLCBsaXN0Rm9vdGVyLFxuICAgICAgZGF0YSxcbiAgICAgIG9uQ29tcGxldGUsXG4gICAgICBvblJldHVybktleSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIHx8ICghbG9hZGluZyAmJiBkYXRhLmxlbmd0aCA9PT0gMCkgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IGVudHJ5ID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtbG9va3VwJyxcbiAgICAgIHsgJ3NsZHMtaGFzLXNlbGVjdGlvbic6IHNlbGVjdGVkIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U2VsZWN0ZWQsIGRlZmF1bHRPcGVuZWQsIGRlZmF1bHRTZWFyY2hUZXh0LCBkZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvblNjb3BlQ2hhbmdlLCBvblNjb3BlTWVudUNsaWNrLCBvblNlYXJjaFRleHRDaGFuZ2UsIG9uTG9va3VwUmVxdWVzdCxcbiAgICAgIG9uU2VsZWN0ZWRPcHRpb25DbGljayxcbiAgICAgIC4uLnNlYXJjaFByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgIGRhdGEtc2VsZWN0PSdzaW5nbGUnXG4gICAgICAgICAgZGF0YS1zY29wZT17IHByb3BzLnNjb3BlcyA/ICdtdWx0aScgOiAnc2luZ2xlJyB9XG4gICAgICAgICAgZGF0YS10eXBlYWhlYWQ9eyBmYWxzZSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZCA/XG4gICAgICAgICAgICAgIDxMb29rdXBTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICBsb29rdXBTZWxlY3Rpb25SZWY9eyBub2RlID0+ICh0aGlzLnNlbGVjdGlvbiA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICBvblJlc2V0U2VsZWN0aW9uPXsgdGhpcy5vblJlc2V0U2VsZWN0aW9uLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRPcHRpb25DbGljaz17IG9uU2VsZWN0ZWRPcHRpb25DbGljayB9XG4gICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8TG9va3VwU2VhcmNoXG4gICAgICAgICAgICAgICAgICB7IC4uLnNlYXJjaFByb3BzIH1cbiAgICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgICAgbG9va3VwU2VhcmNoUmVmPXsgbm9kZSA9PiAodGhpcy5zZWFyY2ggPSBub2RlKSB9XG4gICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxuICAgICAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9eyBvbkNvbXBsZXRlIH1cbiAgICAgICAgICAgICAgICAgIG9uUmV0dXJuS2V5PXsgb25SZXR1cm5LZXkgfVxuICAgICAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoSW5wdXRDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5cbkxvb2t1cC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIGRlZmF1bHRTZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICBsb29rdXBGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBsaXN0SGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgbGlzdEZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pXG4gICksXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uQWxpZ246IFByb3BUeXBlcy5vbmVPZihJQ09OX0FMSUdOUyksXG4gIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0ZWRPcHRpb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Mb29rdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=