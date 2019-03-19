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
  onComplete: _propTypes2.default.func,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number
};

Lookup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwiQ29tcG9uZW50IiwiTG9va3VwRW50cnlUeXBlIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJ2YWx1ZSIsIm1ldGEiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIkxvb2t1cFNlYXJjaCIsIm9uTG9va3VwSWNvbkNsaWNrIiwib25TdWJtaXQiLCJvbklucHV0S2V5RG93biIsInNlYXJjaFRleHQiLCJvbkNvbXBsZXRlIiwib25SZXR1cm5LZXkiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsImN1cnNvciIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJJQ09OX0FMSUdOUyIsImFycmF5T2YiLCJhbnkiLCJvbmVPZiIsIkxvb2t1cENhbmRpZGF0ZUxpc3QiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwicHJldlByb3BzIiwiZW50cnkiLCJvblNlbGVjdCIsImN1cnJlbnRFbCIsInBhcmVudEVsZW1lbnQiLCJpdGVtRWwiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImFuY2hvckVsIiwicXVlcnlTZWxlY3RvciIsImluZGV4IiwiZWwiLCJhbmNob3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJyZW5kZXJDYW5kaWRhdGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJMb29rdXAiLCJzdGF0ZSIsImRlZmF1bHRTZWxlY3RlZCIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJmb2N1c0ZpcnN0Q2FuZGlkYXRlIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJzZWFyY2hFbGVtIiwic2VhcmNoIiwiaW5wdXRFbGVtIiwic2VsZWN0aW9uRWxlbSIsInNlbGVjdGlvbiIsInBpbGxFbGVtIiwicm9vdEVsIiwidGFyZ2V0RWwiLCJwYXJlbnROb2RlIiwidG90YWxDb2xzIiwiY29scyIsInJlcXVpcmVkIiwiZXJyb3IiLCJsb29rdXBGaWx0ZXIiLCJsaXN0SGVhZGVyIiwibGlzdEZvb3RlciIsImRyb3Bkb3duIiwiY2FuZGlkYXRlTGlzdCIsIm9uTG9va3VwSXRlbVNlbGVjdCIsImZvcm1FbGVtUHJvcHMiLCJzZWFyY2hQcm9wcyIsIm9uRm9jdXNGaXJzdENhbmRpZGF0ZSIsIm9uU2VhcmNoSW5wdXRDbGljayIsIkZvcm1FbGVtZW50IiwiZGVmYXVsdFZhbHVlIiwibnVtYmVyIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0lBRWFBLGUsV0FBQUEsZTs7Ozs7Ozs7Ozs4QkFDREMsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRUMsT0FBRixLQUFjLENBQWQsSUFBbUJELEVBQUVDLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBS0QsS0FBTCxDQUFXQyxnQkFBWDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVQyxRLEVBQVU7QUFBQTs7QUFDbkIsVUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNQLENBQUQsRUFBTztBQUN6QkEsVUFBRVEsTUFBRixDQUFTQyxLQUFUO0FBQ0FULFVBQUVFLGNBQUY7QUFDQUYsVUFBRUcsZUFBRjtBQUNELE9BSkQ7QUFLQSxhQUNFLDhCQUFDLGNBQUQ7QUFDRSxZQUFLLEtBQUtDLEtBQUwsQ0FBV00sRUFEbEI7QUFFRSxzQkFGRjtBQUdFLGlCQUFVO0FBQUEsaUJBQVMsT0FBS0MsSUFBTCxHQUFZQyxJQUFyQjtBQUFBLFNBSFo7QUFJRSxtQkFBWSxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FKZDtBQUtFLGlCQUFVUCxXQUxaO0FBTUUsa0JBQVcsQ0FOYjtBQU9FLGNBQU1ELFNBQVNTLElBQVQsR0FBZ0I7QUFDcEJD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bkJTO0FBMEJqQmlDLGVBQWFuQyxvQkFBVUUsTUExQk47QUEyQmpCOEIsYUFBV2hDLG9CQUFVMEQsS0FBVixDQUFnQkgsV0FBaEIsQ0EzQk07QUE0QmpCbkIsc0JBQW9CcEMsb0JBQVVFLE1BNUJiO0FBNkJqQm1DLHNCQUFvQnJDLG9CQUFVTyxJQTdCYjtBQThCakJnQixvQkFBa0J2QixvQkFBVU8sSUE5Qlg7QUErQmpCbUIsaUJBQWUxQixvQkFBVU8sSUEvQlI7QUFnQ2pCZ0MsbUJBQWlCdkMsb0JBQVVPLElBaENWO0FBaUNqQmUsVUFBUXRCLG9CQUFVTyxJQWpDRDtBQWtDakJ3RCxZQUFVL0Qsb0JBQVVPLElBbENIO0FBbUNqQk0sY0FBWWIsb0JBQVVPLElBbkNMO0FBb0NqQjhGLGFBQVdyRyxvQkFBVXFILE1BcENKO0FBcUNqQmYsUUFBTXRHLG9CQUFVcUg7QUFyQ0MsQ0FBbkI7O0FBd0NBakMsT0FBT2tDLGFBQVAsR0FBdUIsSUFBdkIiLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi9QaWxsJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcbmltcG9ydCB7IERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyB1dWlkLCBpc0VsSW5DaGlsZHJlbiwgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBMb29rdXBTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlsbChzZWxlY3RlZCkge1xuICAgIGNvbnN0IG9uUGlsbENsaWNrID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxQaWxsXG4gICAgICAgIGlkPXsgdGhpcy5wcm9wcy5pZCB9XG4gICAgICAgIHRydW5jYXRlXG4gICAgICAgIHBpbGxSZWY9eyBub2RlID0+ICh0aGlzLnBpbGwgPSBub2RlKSB9XG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsaWNrPXsgb25QaWxsQ2xpY2sgfVxuICAgICAgICB0YWJJbmRleD17IDAgfVxuICAgICAgICBpY29uPXtzZWxlY3RlZC5pY29uID8ge1xuICAgICAgICAgIGNhdGVnb3J5OiBzZWxlY3RlZC5jYXRlZ29yeSxcbiAgICAgICAgICBpY29uOiBzZWxlY3RlZC5pY29uLFxuICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICBsYWJlbD17IHNlbGVjdGVkLmxhYmVsIH1cbiAgICAgICAgb25SZW1vdmU9eyB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24gfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuLCBzZWxlY3RlZCwgbG9va3VwU2VsZWN0aW9uUmVmIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IGxvb2t1cFNlbGVjdGlvblJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fY29udGFpbmVyJz5cbiAgICAgICAgICB7IHNlbGVjdGVkID8gdGhpcy5yZW5kZXJQaWxsKHNlbGVjdGVkKSA6IHVuZGVmaW5lZCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IExvb2t1cEVudHJ5VHlwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1ldGE6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuTG9va3VwU2VsZWN0aW9uLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uUmVzZXRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBsb29rdXBTZWxlY3Rpb25SZWY6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29rdXBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4gICAgcmVnaXN0ZXJTdHlsZSgnbG9va3VwU2VhcmNoJywgW1xuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InLFxuICAgICAgICAneyBtaW4td2lkdGg6IDNyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAgICAneyBtYXJnaW4tbGVmdDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlciAuc2xkcy1idXR0b24nLFxuICAgICAgICAneyBwYWRkaW5nOiAwIDAuMjVyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlci5yZWFjdC1zbGRzLWJveC1kaXNhYmxlZCcsXG4gICAgICAgICd7IGJhY2tncm91bmQtY29sb3I6ICNlMGU1ZWU7IGJvcmRlci1jb2xvcjogI2E4YjdjNzsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnNsZHMtbG9va3VwW2RhdGEtc2NvcGU9XCJtdWx0aVwiXSAuc2xkcy1ib3gtLWJvcmRlciAuc2xkcy1pbnB1dC0tYmFyZScsXG4gICAgICAgICd7IGhlaWdodDogMi4xNXJlbTsgd2lkdGg6IDEwMCU7IH0nLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfVxuXG4gIG9uTG9va3VwSWNvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgfVxuXG4gIG9uSW5wdXRLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKHNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgbm8gc2VhcmNoIHRleHQsIHF1aXQgbG9va3VwIHNlYXJjaFxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmV0dXJuS2V5KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXR1cm5LZXkoZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vblByZXNzRG93bigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBxdWl0IGxvb2t1cCBzZWFyY2ggKGNhbmNlbClcbiAgICAgIGNvbnN0IGNhbmNlbCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZShjYW5jZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlYXJjaFRleHQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIgPSAoZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrID0gKGUpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51SXRlbUNsaWNrID0gKHNjb3BlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHNjb3BlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gaXNFbEluQ2hpbGRyZW4odGhpcy5ub2RlLCBkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGhhbmRsZUxvb2t1cFNlYXJjaFJlZiA9IChub2RlKSA9PiB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICBjb25zdCB7IGxvb2t1cFNlYXJjaFJlZiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobG9va3VwU2VhcmNoUmVmKSB7IGxvb2t1cFNlYXJjaFJlZihub2RlKTsgfVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoSW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGlkZGVuLCBzZWFyY2hUZXh0LCBpY29uQWxpZ24gPSAncmlnaHQnIH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWFyY2hJbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbicsXG4gICAgICBgc2xkcy1pbnB1dC1oYXMtaWNvbi0tJHtpY29uQWxpZ259YCxcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcbiAgICBjb25zdCBwcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyk7XG4gICAgZGVsZXRlIHBwcm9wcy5pY29uQWxpZ247XG4gICAgZGVsZXRlIHBwcm9wcy5zZWFyY2hUZXh0O1xuICAgIGRlbGV0ZSBwcHJvcHMudGFyZ2V0U2NvcGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblNjb3BlTWVudUNsaWNrO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TY29wZUNoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLm9uUHJlc3NEb3duO1xuICAgIGRlbGV0ZSBwcHJvcHMub25Db21wbGV0ZTtcbiAgICBkZWxldGUgcHByb3BzLm9uUmV0dXJuS2V5O1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2NvcGVzO1xuICAgIGRlbGV0ZSBwcHJvcHMub25Mb29rdXBSZXF1ZXN0O1xuICAgIGRlbGV0ZSBwcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQ7XG4gICAgZGVsZXRlIHBwcm9wcy5vblZhbHVlQ2hhbmdlO1xuICAgIGRlbGV0ZSBwcHJvcHMubG9va3VwU2VhcmNoUmVmO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IHRoaXMuaGFuZGxlTG9va3VwU2VhcmNoUmVmIH0gY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsgLi4ucHByb3BzIH1cbiAgICAgICAgICBpbnB1dFJlZj17IG5vZGUgPT4gKHRoaXMuaW5wdXQgPSBub2RlKSB9XG4gICAgICAgICAgdmFsdWU9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ciB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgc3R5bGU9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XG4gICAgICAgICAgb25DbGljaz17IHByb3BzLmRpc2FibGVkID8gdW5kZWZpbmVkIDogdGhpcy5vbkxvb2t1cEljb25DbGljayB9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgaWNvbj0nc2VhcmNoJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZTogdGFyZ2V0LCBkaXNhYmxlZCB9KSB7XG4gICAgbGV0IHRhcmdldFNjb3BlID0gc2NvcGVzWzBdIHx8IHt9O1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoc2NvcGUudmFsdWUgPT09IHRhcmdldCkge1xuICAgICAgICB0YXJnZXRTY29wZSA9IHNjb3BlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbiA9IDxJY29uIGljb249eyB0YXJnZXRTY29wZS5pY29uIHx8ICdub25lJyB9IHNpemU9J3gtc21hbGwnIC8+O1xuICAgIGNvbnN0IHNlbGVjdG9yQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWdyaWQtLWFsaWduLWNlbnRlcicsXG4gICAgICAnc2xkcy1ncmlkLS12ZXJ0aWNhbC1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3JlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJ1xuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VsZWN0b3JDbGFzc05hbWVzIH0+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgIGxhYmVsPXsgaWNvbiB9XG4gICAgICAgICAgZGlzYWJsZWQ9eyBkaXNhYmxlZCB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljayB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2sgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICA+XG4gICAgICAgICAgeyBzY29wZXMubWFwKHNjb3BlID0+IDxEcm9wZG93bk1lbnVJdGVtIGtleT17IHNjb3BlLnZhbHVlIH0geyAuLi5zY29wZSB9IC8+KSB9XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NvcGVzLCBoaWRkZW4sIGRpc2FibGVkLCB0YXJnZXRTY29wZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNjb3Blcykge1xuICAgICAgY29uc3QgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxuICAgICAgICAnc2xkcy1ib3gtLWJvcmRlcicsXG4gICAgICAgIHsgJ3JlYWN0LXNsZHMtYm94LWRpc2FibGVkJzogZGlzYWJsZWQgfSxcbiAgICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBzdHlsZXMgPSB7IFdlYmtpdEZsZXhXcmFwOiAnbm93cmFwJywgbXNGbGV4V3JhcDogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9eyB0aGlzLmhhbmRsZUxvb2t1cFNlYXJjaFJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgfSBzdHlsZT17IHN0eWxlcyB9PlxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTY29wZVNlbGVjdG9yKHsgc2NvcGVzLCB0YXJnZXRTY29wZSwgZGlzYWJsZWQgfSkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh7IC4uLnByb3BzLCBkaXNhYmxlZCwgY2xhc3NOYW1lOiAnc2xkcy1jb2wnLCBiYXJlOiB0cnVlIH0pIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh0aGlzLnByb3BzKTtcbiAgfVxuXG59XG5cbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XG5cbkxvb2t1cFNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5hbnksIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblByZXNzRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUmV0dXJuS2V5OiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9va3VwU2VhcmNoUmVmOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvb2t1cENhbmRpZGF0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICFwcmV2UHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChlbnRyeSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHsgLy8gVVAvRE9XTlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoaW5kZXgpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMubm9kZTtcbiAgICBjb25zdCBhbmNob3JzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgIGlmIChhbmNob3JzW2luZGV4XSkge1xuICAgICAgYW5jaG9yc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDYW5kaWRhdGUoZW50cnkpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBpY29uLCBsYWJlbCwgdmFsdWUsIG1ldGEgfSA9IGVudHJ5O1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXsgdmFsdWUgfSByb2xlPSdwcmVzZW50YXRpb24nPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0tYWN0aW9uIHJlYWN0LXNsZHMtY2FuZGlkYXRlJ1xuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHJvbGU9J29wdGlvbidcbiAgICAgICAgICBvbktleURvd249eyBlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5vblNlbGVjdChlbnRyeSkgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLW1lZGlhIHNsZHMtbWVkaWEtLWNlbnRlciBzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWNvbiA/XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tZWRpYV9fZmlndXJlJ1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9eyBjYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgICBpY29uPXsgaWNvbiB9XG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1tZWRpYV9fYm9keSBzbGRzLXRydW5jYXRlJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LXRleHQgc2xkcy10cnVuY2F0ZSc+eyBsYWJlbCB9PC9zcGFuPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWV0YSA/XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19yZXN1bHQtbWV0YSBzbGRzLXRydW5jYXRlJz57IG1ldGEgfTwvc3Bhbj4gOlxuICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSA9IFtdLCBoaWRkZW4sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBmaWx0ZXIgPSAoKSA9PiB0cnVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cE1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWxvb2t1cF9fbWVudScsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4sICdzbGRzLXNob3cnOiAhaGlkZGVuIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfVxuICAgICAgICBjbGFzc05hbWU9eyBsb29rdXBNZW51Q2xhc3NOYW1lcyB9XG4gICAgICAgIHJvbGU9J2xpc3Rib3gnXG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBoZWFkZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fbGlzdCcgcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLmZpbHRlcihmaWx0ZXIpLm1hcCh0aGlzLnJlbmRlckNhbmRpZGF0ZS5iaW5kKHRoaXMpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkaW5nID9cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nIGtleT0nbG9hZGluZycgc3R5bGU9eyB7IGhlaWdodDogMjAgfSB9PlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIGNvbnRhaW5lcj17ZmFsc2V9IHNpemU9J3NtYWxsJyBzdHlsZT17IHsgbWFyZ2luOiAnMCBhdXRvJyB9IH0gLz5cbiAgICAgICAgICAgICAgPC9saT4gOlxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmb290ZXIgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGZvb3RlciB9PC9kaXY+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuTG9va3VwQ2FuZGlkYXRlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0OiBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlOiBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayhlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoSW5wdXRDbGljaygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5kYXRhICYmIHRoaXMucHJvcHMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRTY29wZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBudWxsIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSgnJyk7XG4gICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QoJycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IHRoaXMuc2VhcmNoO1xuICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25Mb29rdXBJdGVtU2VsZWN0KHNlbGVjdGVkKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQsIG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25FbGVtID0gdGhpcy5zZWxlY3Rpb247XG4gICAgICAgIGNvbnN0IHBpbGxFbGVtID0gc2VsZWN0aW9uRWxlbS5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIGlmIChwaWxsRWxlbSkgeyBwaWxsRWxlbS5mb2N1cygpOyB9XG4gICAgICB9LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7IC8vIHRlbGwgdGhlIGNvbXBvbmVudCBjb250YWluZXIgdG8gcXVpdCBsb29rdXBcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzRmlyc3RDYW5kaWRhdGUoKSB7XG4gICAgY29uc3QgeyBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QodGhpcy5zdGF0ZS5zZWFyY2hUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IHRydWUgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUodHJ1ZSk7IC8vIHF1aXQgbG9va3VwIChjYW5jZWwpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSB0aGlzLm5vZGU7XG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gISF0YXJnZXRFbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbENvbHMsIGNvbHMsXG4gICAgICBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkLFxuICAgICAgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0ID0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LFxuICAgICAgdGFyZ2V0U2NvcGUgPSB0aGlzLnN0YXRlLnRhcmdldFNjb3BlLFxuICAgICAgbG9hZGluZywgbG9va3VwRmlsdGVyLFxuICAgICAgbGlzdEhlYWRlciwgbGlzdEZvb3RlcixcbiAgICAgIGRhdGEsXG4gICAgICBvbkNvbXBsZXRlLCBcbiAgICAgIG9uUmV0dXJuS2V5LCBcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9eyBub2RlID0+ICh0aGlzLmNhbmRpZGF0ZUxpc3QgPSBub2RlKSB9XG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIHx8ICghbG9hZGluZyAmJiBkYXRhLmxlbmd0aCA9PT0gMCkgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IGVudHJ5ID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtbG9va3VwJyxcbiAgICAgIHsgJ3NsZHMtaGFzLXNlbGVjdGlvbic6IHNlbGVjdGVkIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0U2VsZWN0ZWQsIGRlZmF1bHRPcGVuZWQsIGRlZmF1bHRTZWFyY2hUZXh0LCBkZWZhdWx0VGFyZ2V0U2NvcGUsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvblNjb3BlQ2hhbmdlLCBvblNjb3BlTWVudUNsaWNrLCBvblNlYXJjaFRleHRDaGFuZ2UsIG9uTG9va3VwUmVxdWVzdCxcbiAgICAgIC4uLnNlYXJjaFByb3BzXG4gICAgfSA9IHByb3BzO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IGZvcm1FbGVtZW50UmVmPXsgbm9kZSA9PiAodGhpcy5ub2RlID0gbm9kZSkgfSB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgIGRhdGEtc2VsZWN0PSdzaW5nbGUnXG4gICAgICAgICAgZGF0YS1zY29wZT17IHByb3BzLnNjb3BlcyA/ICdtdWx0aScgOiAnc2luZ2xlJyB9XG4gICAgICAgICAgZGF0YS10eXBlYWhlYWQ9eyBmYWxzZSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZCA/XG4gICAgICAgICAgICAgIDxMb29rdXBTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICBsb29rdXBTZWxlY3Rpb25SZWY9eyBub2RlID0+ICh0aGlzLnNlbGVjdGlvbiA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgICBvblJlc2V0U2VsZWN0aW9uPXsgdGhpcy5vblJlc2V0U2VsZWN0aW9uLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgPExvb2t1cFNlYXJjaFxuICAgICAgICAgICAgICAgICAgeyAuLi5zZWFyY2hQcm9wcyB9XG4gICAgICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgICAgIGxvb2t1cFNlYXJjaFJlZj17IG5vZGUgPT4gKHRoaXMuc2VhcmNoID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgICAgc2VhcmNoVGV4dD17IHNlYXJjaFRleHQgfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0U2NvcGU9eyB0YXJnZXRTY29wZSB9XG4gICAgICAgICAgICAgICAgICBvblNjb3BlTWVudUNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25TY29wZUNoYW5nZT17IHRoaXMub25TY29wZUNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ICgpID0+IHRoaXMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIH1cbiAgICAgICAgICAgICAgICAgIG9uUHJlc3NEb3duPXsgdGhpcy5vbkZvY3VzRmlyc3RDYW5kaWRhdGUuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlPXsgb25Db21wbGV0ZSB9XG4gICAgICAgICAgICAgICAgICBvblJldHVybktleT17IG9uUmV0dXJuS2V5IH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaElucHV0Q2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICk7XG4gIH1cbn1cblxuXG5Mb29rdXAucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogRm9ybUVsZW1lbnQucHJvcFR5cGVzLmVycm9yLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbkFsaWduOiBQcm9wVHlwZXMub25lT2YoSUNPTl9BTElHTlMpLFxuICBkZWZhdWx0VGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU2VhcmNoVGV4dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Mb29rdXBSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTG9va3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuIl19