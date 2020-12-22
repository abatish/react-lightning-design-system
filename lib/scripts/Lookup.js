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

      var key = value + '-' + label;
      return _react2.default.createElement(
        'li',
        { key: key, role: 'presentation' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6WyJMb29rdXBTZWxlY3Rpb24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcHMiLCJvblJlc2V0U2VsZWN0aW9uIiwic2VsZWN0ZWQiLCJvblNlbGVjdGVkT3B0aW9uQ2xpY2siLCJvblBpbGxDbGljayIsInRhcmdldCIsImZvY3VzIiwiaWQiLCJwaWxsIiwibm9kZSIsIm9uS2V5RG93biIsImJpbmQiLCJpY29uIiwiY2F0ZWdvcnkiLCJ1bmRlZmluZWQiLCJsYWJlbCIsImhpZGRlbiIsImxvb2t1cFNlbGVjdGlvblJlZiIsImxvb2t1cENsYXNzTmFtZXMiLCJyZW5kZXJQaWxsIiwiQ29tcG9uZW50IiwiTG9va3VwRW50cnlUeXBlIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJ2YWx1ZSIsIm1ldGEiLCJwcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsIkxvb2t1cFNlYXJjaCIsIm9uTG9va3VwSWNvbkNsaWNrIiwib25TdWJtaXQiLCJvbklucHV0S2V5RG93biIsInNlYXJjaFRleHQiLCJvbkNvbXBsZXRlIiwib25SZXR1cm5LZXkiLCJvblByZXNzRG93biIsImNhbmNlbCIsIm9uSW5wdXRDaGFuZ2UiLCJvbkNoYW5nZSIsIm9uSW5wdXRCbHVyIiwic2V0VGltZW91dCIsImlzRm9jdXNlZEluQ29tcG9uZW50Iiwib25CbHVyIiwib25TY29wZU1lbnVDbGljayIsIm9uTWVudUl0ZW1DbGljayIsInNjb3BlIiwib25TY29wZUNoYW5nZSIsImhhbmRsZUxvb2t1cFNlYXJjaFJlZiIsImxvb2t1cFNlYXJjaFJlZiIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNsYXNzTmFtZSIsImljb25BbGlnbiIsInNlYXJjaElucHV0Q2xhc3NOYW1lcyIsInBwcm9wcyIsInRhcmdldFNjb3BlIiwiZGVmYXVsdFRhcmdldFNjb3BlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwic2NvcGVzIiwib25Mb29rdXBSZXF1ZXN0IiwiZGVmYXVsdFNlYXJjaFRleHQiLCJvblZhbHVlQ2hhbmdlIiwiaW5wdXQiLCJkaXNhYmxlZCIsImN1cnNvciIsInNlbGVjdG9yQ2xhc3NOYW1lcyIsIm1hcCIsImxvb2t1cFNlYXJjaENsYXNzTmFtZXMiLCJzdHlsZXMiLCJXZWJraXRGbGV4V3JhcCIsIm1zRmxleFdyYXAiLCJmbGV4V3JhcCIsInJlbmRlclNjb3BlU2VsZWN0b3IiLCJyZW5kZXJTZWFyY2hJbnB1dCIsImJhcmUiLCJJQ09OX0FMSUdOUyIsImFycmF5T2YiLCJhbnkiLCJvbmVPZiIsIkxvb2t1cENhbmRpZGF0ZUxpc3QiLCJmb2N1c1RvVGFyZ2V0SXRlbUVsIiwicHJldlByb3BzIiwiZW50cnkiLCJvblNlbGVjdCIsImN1cnJlbnRFbCIsInBhcmVudEVsZW1lbnQiLCJpdGVtRWwiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImFuY2hvckVsIiwicXVlcnlTZWxlY3RvciIsImluZGV4IiwiZWwiLCJhbmNob3JzIiwicXVlcnlTZWxlY3RvckFsbCIsImtleSIsImRhdGEiLCJsb2FkaW5nIiwiaGVhZGVyIiwiZm9vdGVyIiwiZmlsdGVyIiwibG9va3VwTWVudUNsYXNzTmFtZXMiLCJyZW5kZXJDYW5kaWRhdGUiLCJoZWlnaHQiLCJtYXJnaW4iLCJMb29rdXAiLCJzdGF0ZSIsImRlZmF1bHRTZWxlY3RlZCIsIm9wZW5lZCIsImRlZmF1bHRPcGVuZWQiLCJmb2N1c0ZpcnN0Q2FuZGlkYXRlIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJzZWFyY2hFbGVtIiwic2VhcmNoIiwiaW5wdXRFbGVtIiwic2VsZWN0aW9uRWxlbSIsInNlbGVjdGlvbiIsInBpbGxFbGVtIiwicm9vdEVsIiwidGFyZ2V0RWwiLCJwYXJlbnROb2RlIiwidG90YWxDb2xzIiwiY29scyIsInJlcXVpcmVkIiwiZXJyb3IiLCJsb29rdXBGaWx0ZXIiLCJsaXN0SGVhZGVyIiwibGlzdEZvb3RlciIsImRyb3Bkb3duIiwiY2FuZGlkYXRlTGlzdCIsIm9uTG9va3VwSXRlbVNlbGVjdCIsImZvcm1FbGVtUHJvcHMiLCJzZWFyY2hQcm9wcyIsIm9uRm9jdXNGaXJzdENhbmRpZGF0ZSIsIm9uU2VhcmNoSW5wdXRDbGljayIsIkZvcm1FbGVtZW50IiwiZGVmYXVsdFZhbHVlIiwibnVtYmVyIiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0lBRWFBLGUsV0FBQUEsZTs7Ozs7Ozs7Ozs4QkFDREMsQyxFQUFHO0FBQ1gsVUFBSUEsRUFBRUMsT0FBRixLQUFjLENBQWQsSUFBbUJELEVBQUVDLE9BQUYsS0FBYyxFQUFyQyxFQUF5QztBQUFFO0FBQ3pDRCxVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQSxZQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBS0QsS0FBTCxDQUFXQyxnQkFBWDtBQUNEO0FBQ0Y7QUFDRjs7OytCQUVVQyxRLEVBQVVDLHFCLEVBQXVCO0FBQUE7O0FBQzFDLFVBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDUixDQUFELEVBQU87QUFDekJBLFVBQUVTLE1BQUYsQ0FBU0MsS0FBVDtBQUNBVixVQUFFRSxjQUFGO0FBQ0FGLFVBQUVHLGVBQUY7QUFDQUksaUNBQXlCQSx1QkFBekI7QUFDRCxPQUxEO0FBTUEsYUFDRSw4QkFBQyxjQUFEO0FBQ0UsWUFBSyxLQUFLSCxLQUFMLENBQVdPLEVBRGxCO0FBRUUsc0JBRkY7QUFHRSxpQkFBVTtBQUFBLGlCQUFTLE9BQUtDLElBQUwsR0FBWUMsSUFBckI7QUFBQSxTQUhaO0FBSUUsbUJBQVksS0FBS0MsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBSmQ7QUFLRSxp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Q0FBa0J6RCxlQUFsQixDQWZXO0FBZ0JqQjJHLGdCQUFjMUcsb0JBQVVPLElBaEJQO0FBaUJqQm9HLGNBQVkzRyxvQkFBVWIsSUFqQkw7QUFrQmpCeUgsY0FBWTVHLG9CQUFVYixJQWxCTDtBQW1CakJtRCxVQUFRdEMsb0JBQVV3RCxPQUFWLENBQ054RCxvQkFBVUMsS0FBVixDQUFnQjtBQUNkUixXQUFPTyxvQkFBVUUsTUFESDtBQUVkQyxXQUFPSCxvQkFBVUUsTUFGSDtBQUdkWixVQUFNVSxvQkFBVUU7QUFIRixHQUFoQixDQURNLENBbkJTO0FBMEJqQmlDLGVBQWFuQyxvQkFBVUUsTUExQk47QUEyQmpCOEIsYUFBV2hDLG9CQUFVMEQsS0FBVixDQUFnQkgsV0FBaEIsQ0EzQk07QUE0QmpCbkIsc0JBQW9CcEMsb0JBQVVFLE1BNUJiO0FBNkJqQm1DLHNCQUFvQnJDLG9CQUFVTyxJQTdCYjtBQThCakJnQixvQkFBa0J2QixvQkFBVU8sSUE5Qlg7QUErQmpCbUIsaUJBQWUxQixvQkFBVU8sSUEvQlI7QUFnQ2pCZ0MsbUJBQWlCdkMsb0JBQVVPLElBaENWO0FBaUNqQmUsVUFBUXRCLG9CQUFVTyxJQWpDRDtBQWtDakJ3RCxZQUFVL0Qsb0JBQVVPLElBbENIO0FBbUNqQjFCLHlCQUF1Qm1CLG9CQUFVTyxJQW5DaEI7QUFvQ2pCTSxjQUFZYixvQkFBVU8sSUFwQ0w7QUFxQ2pCK0YsYUFBV3RHLG9CQUFVc0gsTUFyQ0o7QUFzQ2pCZixRQUFNdkcsb0JBQVVzSDtBQXRDQyxDQUFuQjs7QUF5Q0FqQyxPQUFPa0MsYUFBUCxHQUF1QixJQUF2QiIsImZpbGUiOiJMb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgUGlsbCBmcm9tICcuL1BpbGwnO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IHV1aWQsIGlzRWxJbkNoaWxkcmVuLCByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIExvb2t1cFNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXJQaWxsKHNlbGVjdGVkLCBvblNlbGVjdGVkT3B0aW9uQ2xpY2spIHtcbiAgICBjb25zdCBvblBpbGxDbGljayA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uU2VsZWN0ZWRPcHRpb25DbGljayAmJiBvblNlbGVjdGVkT3B0aW9uQ2xpY2soKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8UGlsbFxuICAgICAgICBpZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICB0cnVuY2F0ZVxuICAgICAgICBwaWxsUmVmPXsgbm9kZSA9PiAodGhpcy5waWxsID0gbm9kZSkgfVxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cbiAgICAgICAgaWNvbj17c2VsZWN0ZWQuaWNvbiA/IHtcbiAgICAgICAgICBjYXRlZ29yeTogc2VsZWN0ZWQuY2F0ZWdvcnksXG4gICAgICAgICAgaWNvbjogc2VsZWN0ZWQuaWNvbixcbiAgICAgICAgfSA6IHVuZGVmaW5lZH1cbiAgICAgICAgbGFiZWw9eyBzZWxlY3RlZC5sYWJlbCB9XG4gICAgICAgIG9uUmVtb3ZlPXsgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQsIGxvb2t1cFNlbGVjdGlvblJlZiwgb25TZWxlY3RlZE9wdGlvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17IGxvb2t1cFNlbGVjdGlvblJlZiB9IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fY29udGFpbmVyJz5cbiAgICAgICAgICB7IHNlbGVjdGVkID8gdGhpcy5yZW5kZXJQaWxsKHNlbGVjdGVkLCBvblNlbGVjdGVkT3B0aW9uQ2xpY2spIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgTG9va3VwRW50cnlUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWV0YTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5Mb29rdXBTZWxlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvb2t1cFNlbGVjdGlvblJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0ZWRPcHRpb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIHJlZ2lzdGVyU3R5bGUoJ2xvb2t1cFNlYXJjaCcsIFtcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJyxcbiAgICAgICAgJ3sgbWluLXdpZHRoOiAzcmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgICAgJ3sgbWFyZ2luLWxlZnQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXIgLnNsZHMtYnV0dG9uJyxcbiAgICAgICAgJ3sgcGFkZGluZzogMCAwLjI1cmVtOyB9JyxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICcuc2xkcy1sb29rdXBbZGF0YS1zY29wZT1cIm11bHRpXCJdIC5zbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgJ3sgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIucmVhY3Qtc2xkcy1ib3gtZGlzYWJsZWQnLFxuICAgICAgICAneyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlNWVlOyBib3JkZXItY29sb3I6ICNhOGI3Yzc7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5zbGRzLWxvb2t1cFtkYXRhLXNjb3BlPVwibXVsdGlcIl0gLnNsZHMtYm94LS1ib3JkZXIgLnNsZHMtaW5wdXQtLWJhcmUnLFxuICAgICAgICAneyBoZWlnaHQ6IDIuMTVyZW07IHdpZHRoOiAxMDAlOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkxvb2t1cEljb25DbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChzZWFyY2hUZXh0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIG5vIHNlYXJjaCB0ZXh0LCBxdWl0IGxvb2t1cCBzZWFyY2hcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJldHVybktleSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uUmV0dXJuS2V5KGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzc0Rvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gcXVpdCBsb29rdXAgc2VhcmNoIChjYW5jZWwpXG4gICAgICBjb25zdCBjYW5jZWwgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoY2FuY2VsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcbiAgICB9XG4gIH1cblxuICBvbklucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWFyY2hUZXh0KTtcbiAgfVxuXG4gIG9uSW5wdXRCbHVyID0gKGUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayA9IChlKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayA9IChzY29wZSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIGlzRWxJbkNoaWxkcmVuKHRoaXMubm9kZSwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG4gIH1cblxuICBoYW5kbGVMb29rdXBTZWFyY2hSZWYgPSAobm9kZSkgPT4ge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgY29uc3QgeyBsb29rdXBTZWFyY2hSZWYgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxvb2t1cFNlYXJjaFJlZikgeyBsb29rdXBTZWFyY2hSZWYobm9kZSk7IH1cbiAgfVxuXG4gIHJlbmRlclNlYXJjaElucHV0KHByb3BzKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhpZGRlbiwgc2VhcmNoVGV4dCwgaWNvbkFsaWduID0gJ3JpZ2h0JyB9ID0gcHJvcHM7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtaW5wdXQtaGFzLWljb24nLFxuICAgICAgYHNsZHMtaW5wdXQtaGFzLWljb24tLSR7aWNvbkFsaWdufWAsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgcHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIGRlbGV0ZSBwcHJvcHMuaWNvbkFsaWduO1xuICAgIGRlbGV0ZSBwcHJvcHMuc2VhcmNoVGV4dDtcbiAgICBkZWxldGUgcHByb3BzLnRhcmdldFNjb3BlO1xuICAgIGRlbGV0ZSBwcHJvcHMub25TY29wZU1lbnVDbGljaztcbiAgICBkZWxldGUgcHByb3BzLm9uU2NvcGVDaGFuZ2U7XG4gICAgZGVsZXRlIHBwcm9wcy5vblByZXNzRG93bjtcbiAgICBkZWxldGUgcHByb3BzLm9uQ29tcGxldGU7XG4gICAgZGVsZXRlIHBwcm9wcy5vblJldHVybktleTtcbiAgICBkZWxldGUgcHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZTtcbiAgICBkZWxldGUgcHByb3BzLm9uU2VhcmNoVGV4dENoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLnNjb3BlcztcbiAgICBkZWxldGUgcHByb3BzLm9uTG9va3VwUmVxdWVzdDtcbiAgICBkZWxldGUgcHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0O1xuICAgIGRlbGV0ZSBwcHJvcHMub25WYWx1ZUNoYW5nZTtcbiAgICBkZWxldGUgcHByb3BzLmxvb2t1cFNlYXJjaFJlZjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiByZWY9eyB0aGlzLmhhbmRsZUxvb2t1cFNlYXJjaFJlZiB9IGNsYXNzTmFtZT17IHNlYXJjaElucHV0Q2xhc3NOYW1lcyB9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7IC4uLnBwcm9wcyB9XG4gICAgICAgICAgaW5wdXRSZWY9eyBub2RlID0+ICh0aGlzLmlucHV0ID0gbm9kZSkgfVxuICAgICAgICAgIHZhbHVlPXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93biB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIgfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxuICAgICAgICAgIHN0eWxlPXsgcHJvcHMuZGlzYWJsZWQgPyB1bmRlZmluZWQgOiB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyBwcm9wcy5kaXNhYmxlZCA/IHVuZGVmaW5lZCA6IHRoaXMub25Mb29rdXBJY29uQ2xpY2sgfVxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249J3NlYXJjaCdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbidcbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2NvcGVTZWxlY3Rvcih7IHNjb3BlcywgdGFyZ2V0U2NvcGU6IHRhcmdldCwgZGlzYWJsZWQgfSkge1xuICAgIGxldCB0YXJnZXRTY29wZSA9IHNjb3Blc1swXSB8fCB7fTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgaWYgKHNjb3BlLnZhbHVlID09PSB0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0U2NvcGUgPSBzY29wZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGljb24gPSA8SWNvbiBpY29uPXsgdGFyZ2V0U2NvcGUuaWNvbiB8fCAnbm9uZScgfSBzaXplPSd4LXNtYWxsJyAvPjtcbiAgICBjb25zdCBzZWxlY3RvckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1ncmlkLS1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3NsZHMtZ3JpZC0tdmVydGljYWwtYWxpZ24tY2VudGVyJyxcbiAgICAgICdyZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcidcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNlbGVjdG9yQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8RHJvcGRvd25CdXR0b25cbiAgICAgICAgICBsYWJlbD17IGljb24gfVxuICAgICAgICAgIGRpc2FibGVkPXsgZGlzYWJsZWQgfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2sgfVxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgc2NvcGVzLm1hcChzY29wZSA9PiA8RHJvcGRvd25NZW51SXRlbSBrZXk9eyBzY29wZS52YWx1ZSB9IHsgLi4uc2NvcGUgfSAvPikgfVxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjb3BlcywgaGlkZGVuLCBkaXNhYmxlZCwgdGFyZ2V0U2NvcGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzY29wZXMpIHtcbiAgICAgIGNvbnN0IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgJ3NsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICB7ICdyZWFjdC1zbGRzLWJveC1kaXNhYmxlZCc6IGRpc2FibGVkIH0sXG4gICAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgICApO1xuICAgICAgY29uc3Qgc3R5bGVzID0geyBXZWJraXRGbGV4V3JhcDogJ25vd3JhcCcsIG1zRmxleFdyYXA6ICdub3dyYXAnLCBmbGV4V3JhcDogJ25vd3JhcCcgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXsgdGhpcy5oYW5kbGVMb29rdXBTZWFyY2hSZWYgfSBjbGFzc05hbWU9eyBsb29rdXBTZWFyY2hDbGFzc05hbWVzIH0gc3R5bGU9eyBzdHlsZXMgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2NvcGVTZWxlY3Rvcih7IHNjb3BlcywgdGFyZ2V0U2NvcGUsIGRpc2FibGVkIH0pIH1cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoeyAuLi5wcm9wcywgZGlzYWJsZWQsIGNsYXNzTmFtZTogJ3NsZHMtY29sJywgYmFyZTogdHJ1ZSB9KSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQodGhpcy5wcm9wcyk7XG4gIH1cblxufVxuXG5jb25zdCBJQ09OX0FMSUdOUyA9IFsnbGVmdCcsICdyaWdodCddO1xuXG5Mb29rdXBTZWFyY2gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pXG4gICksXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuYW55LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QcmVzc0Rvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICBvblJldHVybktleTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvb2t1cFNlYXJjaFJlZjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBMb29rdXBDYW5kaWRhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhcHJldlByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3QoZW50cnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlbnRyeSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7IC8vIFVQL0RPV05cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICBhbmNob3JFbC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gaXRlbUVsLm5leHRTaWJsaW5nIDogaXRlbUVsLnByZXZpb3VzU2libGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKGluZGV4KSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLm5vZGU7XG4gICAgY29uc3QgYW5jaG9ycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICBpZiAoYW5jaG9yc1tpbmRleF0pIHtcbiAgICAgIGFuY2hvcnNbaW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2FuZGlkYXRlKGVudHJ5KSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSwgaWNvbiwgbGFiZWwsIHZhbHVlLCBtZXRhIH0gPSBlbnRyeTtcbiAgICBjb25zdCBrZXkgPSBgJHt2YWx1ZX0tJHtsYWJlbH1gO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXsga2V5IH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtLWFjdGlvbiByZWFjdC1zbGRzLWNhbmRpZGF0ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICByb2xlPSdvcHRpb24nXG4gICAgICAgICAgb25LZXlEb3duPXsgZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLnByb3BzLm9uQmx1ciB9XG4gICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1tZWRpYSBzbGRzLW1lZGlhLS1jZW50ZXIgc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb24gP1xuICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbWVkaWFfX2ZpZ3VyZSdcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXsgY2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgICAgaWNvbj17IGljb24gfVxuICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXG4gICAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbWVkaWFfX2JvZHkgc2xkcy10cnVuY2F0ZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX3Jlc3VsdC10ZXh0IHNsZHMtdHJ1bmNhdGUnPnsgbGFiZWwgfTwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGEgP1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fcmVzdWx0LW1ldGEgc2xkcy10cnVuY2F0ZSc+eyBtZXRhIH08L3NwYW4+IDpcbiAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgPSBbXSwgaGlkZGVuLCBsb2FkaW5nLCBoZWFkZXIsIGZvb3RlciwgZmlsdGVyID0gKCkgPT4gdHJ1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXBfX21lbnUnLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuLCAnc2xkcy1zaG93JzogIWhpZGRlbiB9XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMubm9kZSA9IG5vZGUpIH1cbiAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfVxuICAgICAgICByb2xlPSdsaXN0Ym94J1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlciA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgaGVhZGVyIH08L2Rpdj4gOlxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnIHN0eWxlPXsgeyBoZWlnaHQ6IDIwIH0gfT5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBjb250YWluZXI9e2ZhbHNlfSBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICAgIDwvbGk+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVyID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbkxvb2t1cENhbmRpZGF0ZUxpc3QucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaElucHV0Q2xpY2soKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGF0YSAmJiB0aGlzLnByb3BzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSB0aGlzLnNlYXJjaDtcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIG9uTG9va3VwSXRlbVNlbGVjdChzZWxlY3RlZCkge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkLCBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRWxlbSA9IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICBjb25zdCBwaWxsRWxlbSA9IHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gdGhpcy5zZWFyY2g7XG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpOyAvLyB0ZWxsIHRoZSBjb21wb25lbnQgY29udGFpbmVyIHRvIHF1aXQgbG9va3VwXG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKHRydWUpOyAvLyBxdWl0IGxvb2t1cCAoY2FuY2VsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTApO1xuICB9XG5cbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XG4gICAgY29uc3Qgcm9vdEVsID0gdGhpcy5ub2RlO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIG9uUmV0dXJuS2V5LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IChcbiAgICAgIDxMb29rdXBDYW5kaWRhdGVMaXN0XG4gICAgICAgIHJlZj17IG5vZGUgPT4gKHRoaXMuY2FuZGlkYXRlTGlzdCA9IG5vZGUpIH1cbiAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICBmb2N1cz17IHRoaXMuc3RhdGUuZm9jdXNGaXJzdENhbmRpZGF0ZSB9XG4gICAgICAgIGhpZGRlbj17ICFvcGVuZWQgfHwgKCFsb2FkaW5nICYmIGRhdGEubGVuZ3RoID09PSAwKSB9XG4gICAgICAgIGxvYWRpbmc9eyBsb2FkaW5nIH1cbiAgICAgICAgZmlsdGVyPXsgbG9va3VwRmlsdGVyID8gZW50cnkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxuICAgICAgICBoZWFkZXI9eyBsaXN0SGVhZGVyIH1cbiAgICAgICAgZm9vdGVyPXsgbGlzdEZvb3RlciB9XG4gICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkxvb2t1cEl0ZW1TZWxlY3QuYmluZCh0aGlzKSB9XG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXAnLFxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtcbiAgICAgIGRlZmF1bHRTZWxlY3RlZCwgZGVmYXVsdE9wZW5lZCwgZGVmYXVsdFNlYXJjaFRleHQsIGRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uU2NvcGVDaGFuZ2UsIG9uU2NvcGVNZW51Q2xpY2ssIG9uU2VhcmNoVGV4dENoYW5nZSwgb25Mb29rdXBSZXF1ZXN0LFxuICAgICAgb25TZWxlY3RlZE9wdGlvbkNsaWNrLFxuICAgICAgLi4uc2VhcmNoUHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgZm9ybUVsZW1lbnRSZWY9eyBub2RlID0+ICh0aGlzLm5vZGUgPSBub2RlKSB9IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID9cbiAgICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICAgIGxvb2t1cFNlbGVjdGlvblJlZj17IG5vZGUgPT4gKHRoaXMuc2VsZWN0aW9uID0gbm9kZSkgfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxuICAgICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RlZE9wdGlvbkNsaWNrPXsgb25TZWxlY3RlZE9wdGlvbkNsaWNrIH1cbiAgICAgICAgICAgICAgLz4gOlxuICAgICAgICAgICAgICAgIDxMb29rdXBTZWFyY2hcbiAgICAgICAgICAgICAgICAgIHsgLi4uc2VhcmNoUHJvcHMgfVxuICAgICAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgICAgICBsb29rdXBTZWFyY2hSZWY9eyBub2RlID0+ICh0aGlzLnNlYXJjaCA9IG5vZGUpIH1cbiAgICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldFNjb3BlPXsgdGFyZ2V0U2NvcGUgfVxuICAgICAgICAgICAgICAgICAgb25TY29wZU1lbnVDbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uU2NvcGVDaGFuZ2U9eyB0aGlzLm9uU2NvcGVDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyAoKSA9PiB0aGlzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB9XG4gICAgICAgICAgICAgICAgICBvblByZXNzRG93bj17IHRoaXMub25Gb2N1c0ZpcnN0Q2FuZGlkYXRlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17IG9uQ29tcGxldGUgfVxuICAgICAgICAgICAgICAgICAgb25SZXR1cm5LZXk9eyBvblJldHVybktleSB9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hJbnB1dENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cblxuTG9va3VwLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IEZvcm1FbGVtZW50LnByb3BUeXBlcy5lcnJvcixcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgZGVmYXVsdFNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0U2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gIGxvb2t1cEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxpc3RIZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBsaXN0Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcbiAgZGVmYXVsdFRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlYXJjaFRleHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTG9va3VwUmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RlZE9wdGlvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkxvb2t1cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==