'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _DropdownMenu = require('./DropdownMenu');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */

var LookupSelection = function (_Component) {
  (0, _inherits3.default)(LookupSelection, _Component);

  function LookupSelection() {
    (0, _classCallCheck3.default)(this, LookupSelection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSelection).apply(this, arguments));
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
      var onPillClick = function onPillClick(e) {
        e.target.focus();
        e.preventDefault();
        e.stopPropagation();
      };
      return _react2.default.createElement(
        'a',
        { className: 'slds-pill',
          id: this.props.id,
          ref: 'pill',
          onKeyDown: this.onKeyDown.bind(this),
          onClick: onPillClick,
          tabIndex: 0
        },
        selected.icon ? _react2.default.createElement(_Icon2.default, { className: 'slds-pill__icon', category: selected.category, icon: selected.icon }) : undefined,
        _react2.default.createElement(
          'span',
          { className: 'slds-pill__label' },
          selected.label
        ),
        _react2.default.createElement(_Button2.default, { className: 'slds-pill__remove', type: 'icon-bare', icon: 'close', alt: 'Remove',
          tabIndex: -1,
          onClick: this.props.onResetSelection
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hidden = _props.hidden;
      var selected = _props.selected;

      var lookupClassNames = (0, _classnames2.default)({ 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupClassNames },
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

var LookupEntryType = _react.PropTypes.shape({
  category: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.string,
  value: _react.PropTypes.string
});

LookupSelection.propTypes = {
  id: _react.PropTypes.string,
  selected: LookupEntryType,
  hidden: _react.PropTypes.bool,
  onResetSelection: _react.PropTypes.func
};

/**
 *
 */

var LookupSearch = function (_Component2) {
  (0, _inherits3.default)(LookupSearch, _Component2);

  function LookupSearch(props) {
    (0, _classCallCheck3.default)(this, LookupSearch);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSearch).call(this, props));

    (0, _util.registerStyle)('lookupSearch', [['.react-slds-lookup-scope-selector', '{ width: 3rem; }'], ['.react-slds-lookup-scope-selector .slds-dropdown-trigger', '{ margin-left: 0; }'], ['.react-slds-lookup-scope-selector .slds-dropdown-trigger .slds-button', '{ padding: 0 0.25rem; }']]);
    return _this2;
  }

  (0, _createClass3.default)(LookupSearch, [{
    key: 'onLookupIconClick',
    value: function onLookupIconClick() {
      this.props.onSubmit();
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        var searchText = e.target.value;
        if (searchText) {
          this.props.onSubmit();
        } else {
          this.props.onComplete();
        }
      } else if (e.keyCode === 40) {
        // down key
        e.preventDefault();
        e.stopPropagation();
        this.props.onPressDown();
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.props.onComplete();
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var searchText = e.target.value;
      this.props.onChange(searchText);
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onMenuItemClick',
    value: function onMenuItemClick(scope) {
      if (this.props.onScopeChange) {
        this.props.onScopeChange(scope.value);
      }
    }
  }, {
    key: 'renderSearchInput',
    value: function renderSearchInput(props) {
      var className = props.className;
      var hidden = props.hidden;
      var searchText = props.searchText;

      var searchInputClassNames = (0, _classnames2.default)('slds-grid', 'slds-input-has-icon', 'slds-input-has-icon--right', { 'slds-hide': hidden }, className);
      return _react2.default.createElement(
        'div',
        { className: searchInputClassNames },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({}, props, {
          ref: 'input',
          value: searchText,
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'search', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onLookupIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderScopeSelector',
    value: function renderScopeSelector(scopes, target) {
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
          { label: icon,
            onClick: this.onScopeMenuClick.bind(this),
            onMenuItemClick: this.onMenuItemClick.bind(this)
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
      var _props2 = this.props;
      var scopes = _props2.scopes;
      var hidden = _props2.hidden;
      var className = _props2.className;
      var targetScope = _props2.targetScope;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['scopes', 'hidden', 'className', 'targetScope']);

      if (scopes) {
        var lookupSearchClassNames = (0, _classnames2.default)('slds-grid', 'slds-form-element__control', 'slds-box--border', { 'slds-hide': hidden });
        var styles = { 'WebkitFlexWrap': 'nowrap', 'msFlexWrap': 'nowrap', flexWrap: 'nowrap' };
        return _react2.default.createElement(
          'div',
          { className: lookupSearchClassNames, style: styles },
          this.renderScopeSelector(scopes, targetScope),
          this.renderSearchInput((0, _extends3.default)({}, props, { className: 'slds-col', bare: true }))
        );
      }
      return this.renderSearchInput(this.props);
    }
  }]);
  return LookupSearch;
}(_react.Component);

LookupSearch.propTypes = {
  className: _react.PropTypes.string,
  hidden: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string
  })),
  targetScope: _react.PropTypes.any,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onPressDown: _react.PropTypes.func,
  onSubmit: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

/**
 *
 */

var LookupCandidateList = function (_Component3) {
  (0, _inherits3.default)(LookupCandidateList, _Component3);

  function LookupCandidateList() {
    (0, _classCallCheck3.default)(this, LookupCandidateList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupCandidateList).apply(this, arguments));
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
      var el = _reactDom2.default.findDOMNode(this);
      var anchors = el.querySelectorAll('.react-slds-candidate[tabIndex]');
      if (anchors[index]) {
        anchors[index].focus();
      }
    }
  }, {
    key: 'renderCandidate',
    value: function renderCandidate(entry) {
      var _this4 = this;

      return _react2.default.createElement(
        'li',
        { className: 'slds-lookup__item', key: entry.value },
        _react2.default.createElement(
          'a',
          { className: 'slds-truncate react-slds-candidate', tabIndex: -1, role: 'option',
            onKeyDown: function onKeyDown(e) {
              return e.keyCode === 13 && _this4.onSelect(entry);
            },
            onBlur: this.props.onBlur,
            onClick: function onClick() {
              return _this4.onSelect(entry);
            }
          },
          entry.icon ? _react2.default.createElement(_Icon2.default, { category: entry.category, icon: entry.icon, size: 'small' }) : undefined,
          entry.label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var _props3$data = _props3.data;
      var data = _props3$data === undefined ? [] : _props3$data;
      var hidden = _props3.hidden;
      var loading = _props3.loading;
      var header = _props3.header;
      var footer = _props3.footer;
      var spinnerSrc = _props3.spinnerSrc;
      var _props3$filter = _props3.filter;
      var filter = _props3$filter === undefined ? function () {
        return true;
      } : _props3$filter;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', { 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupMenuClassNames, role: 'listbox',
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
            { className: 'slds-lookup__item', key: 'loading' },
            _react2.default.createElement(_Spinner2.default, { spinnerSrc: spinnerSrc, size: 'small', style: { margin: '0 auto' } })
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
  data: _react.PropTypes.arrayOf(LookupEntryType),
  focus: _react.PropTypes.bool,
  loading: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  filter: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  header: _react.PropTypes.node,
  footer: _react.PropTypes.node,
  spinnerSrc: _react.PropTypes.string
};

/**
 *
 */

var Lookup = function (_Component4) {
  (0, _inherits3.default)(Lookup, _Component4);

  function Lookup(props) {
    (0, _classCallCheck3.default)(this, Lookup);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Lookup).call(this, props));

    _this5.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      selected: props.defaultSelected,
      opened: props.defaultOpened,
      searchText: props.defaultSearchText,
      targetScope: props.defaultTargetScope,
      focusFirstCandidate: false
    };
    return _this5;
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
    key: 'onComplete',
    value: function onComplete() {
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  }, {
    key: 'onResetSelection',
    value: function onResetSelection() {
      var _this6 = this;

      this.setState({ selected: null });
      if (this.props.onSelect) {
        this.props.onSelect(null);
      }
      this.onSearchTextChange('');
      this.onLookupRequest('');
      setTimeout(function () {
        var searchElem = _reactDom2.default.findDOMNode(_this6.refs.search);
        var inputElem = searchElem.querySelector('input');
        inputElem.focus();
      }, 10);
    }
  }, {
    key: 'onLookupItemSelect',
    value: function onLookupItemSelect(selected) {
      var _this7 = this;

      if (selected) {
        this.setState({ selected: selected, opened: false });
        if (this.props.onSelect) {
          this.props.onSelect(selected);
        }
        setTimeout(function () {
          var selectionElem = _reactDom2.default.findDOMNode(_this7.refs.selection);
          var pillElem = selectionElem.querySelector('a');
          if (pillElem) {
            pillElem.focus();
          }
        }, 10);
      } else {
        this.setState({ opened: false });
        setTimeout(function () {
          var searchElem = _reactDom2.default.findDOMNode(_this7.refs.search);
          var inputElem = searchElem.querySelector('input');
          inputElem.focus();
        }, 10);
      }
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  }, {
    key: 'onFocusFirstCandidate',
    value: function onFocusFirstCandidate() {
      var _this8 = this;

      var _props$opened = this.props.opened;
      var opened = _props$opened === undefined ? this.state.opened : _props$opened;

      if (!opened) {
        this.onLookupRequest(this.state.searchText);
      } else {
        this.setState({ focusFirstCandidate: true });
        setTimeout(function () {
          _this8.setState({ focusFirstCandidate: false });
        }, 10);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this9 = this;

      setTimeout(function () {
        if (!_this9.isFocusedInComponent()) {
          _this9.setState({ opened: false });
          if (_this9.props.onBlur) {
            _this9.props.onBlur();
          }
          if (_this9.props.onComplete) {
            _this9.props.onComplete();
          }
        }
      }, 10);
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
    key: 'render',
    value: function render() {
      var _this10 = this;

      var id = this.props.id || this.state.id;
      var _props4 = this.props;
      var totalCols = _props4.totalCols;
      var cols = _props4.cols;
      var label = _props4.label;
      var required = _props4.required;
      var error = _props4.error;
      var className = _props4.className;
      var _props4$selected = _props4.selected;
      var selected = _props4$selected === undefined ? this.state.selected : _props4$selected;
      var defaultSelected = _props4.defaultSelected;
      var _props4$opened = _props4.opened;
      var opened = _props4$opened === undefined ? this.state.opened : _props4$opened;
      var defaultOpened = _props4.defaultOpened;
      var _props4$searchText = _props4.searchText;
      var searchText = _props4$searchText === undefined ? this.state.searchText : _props4$searchText;
      var defaultSearchText = _props4.defaultSearchText;
      var _props4$targetScope = _props4.targetScope;
      var targetScope = _props4$targetScope === undefined ? this.state.targetScope : _props4$targetScope;
      var defaultTargetScope = _props4.defaultTargetScope;
      var loading = _props4.loading;
      var lookupFilter = _props4.lookupFilter;
      var listHeader = _props4.listHeader;
      var listFooter = _props4.listFooter;
      var data = _props4.data;
      var onSelect = _props4.onSelect;
      var onBlur = _props4.onBlur;
      var onComplete = _props4.onComplete;
      var onScopeChange = _props4.onScopeChange;
      var onScopeMenuClick = _props4.onScopeMenuClick;
      var onSearchTextChange = _props4.onSearchTextChange;
      var onLookupRequest = _props4.onLookupRequest;
      var spinnerSrc = _props4.spinnerSrc;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['totalCols', 'cols', 'label', 'required', 'error', 'className', 'selected', 'defaultSelected', 'opened', 'defaultOpened', 'searchText', 'defaultSearchText', 'targetScope', 'defaultTargetScope', 'loading', 'lookupFilter', 'listHeader', 'listFooter', 'data', 'onSelect', 'onBlur', 'onComplete', 'onScopeChange', 'onScopeMenuClick', 'onSearchTextChange', 'onLookupRequest', 'spinnerSrc']);

      var dropdown = _react2.default.createElement(LookupCandidateList, {
        ref: 'candidateList',
        data: data,
        focus: this.state.focusFirstCandidate,
        hidden: !opened,
        loading: loading,
        filter: lookupFilter ? function (entry) {
          return lookupFilter(entry, searchText, targetScope);
        } : undefined,
        header: listHeader,
        footer: listFooter,
        spinnerSrc: spinnerSrc,
        onSelect: this.onLookupItemSelect.bind(this),
        onBlur: this.onBlur.bind(this)
      });
      var lookupClassNames = (0, _classnames2.default)('slds-lookup', { 'slds-has-selection': selected }, className);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        _react2.default.createElement(
          'div',
          { className: lookupClassNames,
            'data-select': 'single',
            'data-scope': props.scopes ? 'multi' : 'single',
            'data-typeahead': false
          },
          selected ? _react2.default.createElement(LookupSelection, {
            id: id,
            ref: 'selection',
            selected: selected,
            onResetSelection: this.onResetSelection.bind(this)
          }) : _react2.default.createElement(LookupSearch, (0, _extends3.default)({}, props, {
            id: id,
            ref: 'search',
            searchText: searchText,
            targetScope: targetScope,
            onScopeMenuClick: this.onScopeMenuClick.bind(this),
            onScopeChange: this.onScopeChange.bind(this),
            onChange: this.onSearchTextChange.bind(this),
            onSubmit: function onSubmit() {
              return _this10.onLookupRequest(searchText);
            },
            onPressDown: this.onFocusFirstCandidate.bind(this),
            onComplete: this.onComplete.bind(this),
            onBlur: this.onBlur.bind(this)
          }))
        )
      );
    }
  }]);
  return Lookup;
}(_react.Component);

exports.default = Lookup;


Lookup.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  selected: LookupEntryType,
  defaultSelected: LookupEntryType,
  opened: _react.PropTypes.bool,
  defaultOpened: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  defaultSearchText: _react.PropTypes.string,
  loading: _react.PropTypes.bool,
  data: _react.PropTypes.arrayOf(LookupEntryType),
  lookupFilter: _react.PropTypes.func,
  listHeader: _react.PropTypes.node,
  listFooter: _react.PropTypes.node,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string
  })),
  targetScope: _react.PropTypes.string,
  defaultTargetScope: _react.PropTypes.string,
  onSearchTextChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onLookupRequest: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number
};

Lookup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS00sZTs7Ozs7Ozs7Ozs4QkFDTSxDLEVBQUc7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLENBQWQsSUFBbUIsRUFBRSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7O0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVSxRLEVBQVU7QUFDbkIsVUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBTztBQUN6QixVQUFFLE1BQUYsQ0FBUyxLQUFUO0FBQ0EsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFBQTtRQUFBLEVBQUcsV0FBVSxXQUFiO0FBQ0UsY0FBSyxLQUFLLEtBQUwsQ0FBVyxFQURsQjtBQUVFLGVBQUksTUFGTjtBQUdFLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FIZDtBQUlFLG1CQUFVLFdBSlo7QUFLRSxvQkFBVztBQUxiO1FBUUksU0FBUyxJQUFULEdBQ0EsZ0RBQU0sV0FBVSxpQkFBaEIsRUFBa0MsVUFBVyxTQUFTLFFBQXRELEVBQWlFLE1BQU8sU0FBUyxJQUFqRixHQURBLEdBRUEsU0FWSjtRQVlFO0FBQUE7VUFBQSxFQUFNLFdBQVUsa0JBQWhCO1VBQXFDLFNBQVM7QUFBOUMsU0FaRjtRQWFFLGtEQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssV0FBM0MsRUFBdUQsTUFB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dCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XHJcbmltcG9ydCB7IERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyU3R5bGUgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBMb29rdXBTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIG9uS2V5RG93bihlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclBpbGwoc2VsZWN0ZWQpIHtcclxuICAgIGNvbnN0IG9uUGlsbENsaWNrID0gKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuZm9jdXMoKTtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIGNsYXNzTmFtZT0nc2xkcy1waWxsJ1xyXG4gICAgICAgIGlkPXsgdGhpcy5wcm9wcy5pZCB9XHJcbiAgICAgICAgcmVmPSdwaWxsJ1xyXG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxyXG4gICAgICAgIG9uQ2xpY2s9eyBvblBpbGxDbGljayB9XHJcbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNlbGVjdGVkLmljb24gP1xyXG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2ljb24nIGNhdGVnb3J5PXsgc2VsZWN0ZWQuY2F0ZWdvcnkgfSBpY29uPXsgc2VsZWN0ZWQuaWNvbiB9IC8+IDpcclxuICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fbGFiZWwnPnsgc2VsZWN0ZWQubGFiZWwgfTwvc3Bhbj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1waWxsX19yZW1vdmUnIHR5cGU9J2ljb24tYmFyZScgaWNvbj0nY2xvc2UnIGFsdD0nUmVtb3ZlJ1xyXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBoaWRkZW4sIHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fY29udGFpbmVyJz5cclxuICAgICAgICAgIHsgc2VsZWN0ZWQgPyB0aGlzLnJlbmRlclBpbGwoc2VsZWN0ZWQpIDogdW5kZWZpbmVkIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IExvb2t1cEVudHJ5VHlwZSA9IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxufSk7XHJcblxyXG5Mb29rdXBTZWxlY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXHJcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvblJlc2V0U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIExvb2t1cFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHJlZ2lzdGVyU3R5bGUoJ2xvb2t1cFNlYXJjaCcsIFtcclxuICAgICAgW1xyXG4gICAgICAgICcucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InLFxyXG4gICAgICAgICd7IHdpZHRoOiAzcmVtOyB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlcicsXHJcbiAgICAgICAgJ3sgbWFyZ2luLWxlZnQ6IDA7IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyIC5zbGRzLWJ1dHRvbicsXHJcbiAgICAgICAgJ3sgcGFkZGluZzogMCAwLjI1cmVtOyB9JyxcclxuICAgICAgXSxcclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgb25Mb29rdXBJY29uQ2xpY2soKSB7XHJcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0S2V5RG93bihlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgeyAvLyByZXR1cm4ga2V5XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBpZiAoc2VhcmNoVGV4dCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7IC8vIGRvd24ga2V5XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5wcm9wcy5vblByZXNzRG93bigpO1xyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25JbnB1dENoYW5nZShlKSB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlYXJjaFRleHQpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEJsdXIoZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TY29wZU1lbnVDbGljayhlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1DbGljayhzY29wZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2Uoc2NvcGUudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2VhcmNoSW5wdXQocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoaWRkZW4sIHNlYXJjaFRleHQgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtZ3JpZCcsXHJcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uJyxcclxuICAgICAgJ3NsZHMtaW5wdXQtaGFzLWljb24tLXJpZ2h0JyxcclxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH0sXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgPElucHV0IHsgLi4ucHJvcHMgfVxyXG4gICAgICAgICAgcmVmPSdpbnB1dCdcclxuICAgICAgICAgIHZhbHVlPXsgc2VhcmNoVGV4dCB9XHJcbiAgICAgICAgICBvbktleURvd249eyB0aGlzLm9uSW5wdXRLZXlEb3duLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcykgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb24gaWNvbj0nc2VhcmNoJyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIHN0eWxlPXsgeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTG9va3VwSWNvbkNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclNjb3BlU2VsZWN0b3Ioc2NvcGVzLCB0YXJnZXQpIHtcclxuICAgIGxldCB0YXJnZXRTY29wZSA9IHNjb3Blc1swXSB8fCB7fTtcclxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XHJcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0U2NvcGUgPSBzY29wZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaWNvbiA9IDxJY29uIGljb249eyB0YXJnZXRTY29wZS5pY29uIHx8ICdub25lJyB9IHNpemU9J3gtc21hbGwnIC8+O1xyXG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtZ3JpZCcsXHJcbiAgICAgICdzbGRzLWdyaWQtLWFsaWduLWNlbnRlcicsXHJcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXHJcbiAgICAgICdyZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcidcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNlbGVjdG9yQ2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBsYWJlbD17IGljb24gfVxyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uTWVudUl0ZW1DbGljaz17IHRoaXMub25NZW51SXRlbUNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsgc2NvcGVzLm1hcCgoc2NvcGUpID0+IDxEcm9wZG93bk1lbnVJdGVtIGtleT17IHNjb3BlLnZhbHVlIH0geyAuLi5zY29wZSB9IC8+KSB9XHJcbiAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzY29wZXMsIGhpZGRlbiwgY2xhc3NOYW1lLCB0YXJnZXRTY29wZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoc2NvcGVzKSB7XHJcbiAgICAgIGNvbnN0IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICdzbGRzLWdyaWQnLFxyXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXHJcbiAgICAgICAgJ3NsZHMtYm94LS1ib3JkZXInLFxyXG4gICAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgJ1dlYmtpdEZsZXhXcmFwJzogJ25vd3JhcCcsICdtc0ZsZXhXcmFwJzogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJyB9O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyB9IHN0eWxlPXsgc3R5bGVzIH0+XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2NvcGVTZWxlY3RvcihzY29wZXMsIHRhcmdldFNjb3BlKSB9XHJcbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoeyAuLi5wcm9wcywgY2xhc3NOYW1lOiAnc2xkcy1jb2wnLCBiYXJlOiB0cnVlIH0pIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaElucHV0KHRoaXMucHJvcHMpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5Mb29rdXBTZWFyY2gucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pXHJcbiAgKSxcclxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLmFueSxcclxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uUHJlc3NEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIExvb2t1cENhbmRpZGF0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICFwcmV2UHJvcHMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWxlY3QoZW50cnkpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZW50cnkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHsgLy8gVVAvRE9XTlxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gY3VycmVudEVsLm5leHRTaWJsaW5nIDogY3VycmVudEVsLnByZXZpb3VzU2libGluZztcclxuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcclxuICAgICAgICBpZiAoYW5jaG9yRWwgJiYgIWFuY2hvckVsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBhbmNob3JFbC5mb2N1cygpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gaXRlbUVsLm5leHRTaWJsaW5nIDogaXRlbUVsLnByZXZpb3VzU2libGluZztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMub25TZWxlY3QobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKGluZGV4KSB7XHJcbiAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgY29uc3QgYW5jaG9ycyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcclxuICAgIGlmIChhbmNob3JzW2luZGV4XSkge1xyXG4gICAgICBhbmNob3JzW2luZGV4XS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2FuZGlkYXRlKGVudHJ5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PXsgZW50cnkudmFsdWUgfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUgcmVhY3Qtc2xkcy1jYW5kaWRhdGUnIHRhYkluZGV4PXsgLTEgfSByb2xlPSdvcHRpb24nXHJcbiAgICAgICAgICBvbktleURvd249eyAoZSkgPT4gZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLnByb3BzLm9uQmx1ciB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5vblNlbGVjdChlbnRyeSkgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZW50cnkuaWNvbiA/XHJcbiAgICAgICAgICAgIDxJY29uIGNhdGVnb3J5PXsgZW50cnkuY2F0ZWdvcnkgfSBpY29uPXsgZW50cnkuaWNvbiB9IHNpemU9J3NtYWxsJyAvPiA6XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgeyBlbnRyeS5sYWJlbCB9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSA9IFtdLCBoaWRkZW4sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBzcGlubmVyU3JjLCBmaWx0ZXIgPSAoKSA9PiB0cnVlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbG9va3VwTWVudUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy1sb29rdXBfX21lbnUnLFxyXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfSByb2xlPSdsaXN0Ym94J1xyXG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxyXG4gICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBoZWFkZXIgfTwvZGl2PiA6XHJcbiAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEuZmlsdGVyKGZpbHRlcikubWFwKHRoaXMucmVuZGVyQ2FuZGlkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvYWRpbmcgP1xyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PSdsb2FkaW5nJz5cclxuICAgICAgICAgICAgICA8U3Bpbm5lciBzcGlubmVyU3JjPXsgc3Bpbm5lclNyYyB9IHNpemU9J3NtYWxsJyBzdHlsZT17IHsgbWFyZ2luOiAnMCBhdXRvJyB9IH0gLz5cclxuICAgICAgICAgICAgPC9saT4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvb3RlciA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgZm9vdGVyIH08L2Rpdj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTG9va3VwQ2FuZGlkYXRlTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcclxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcclxuICBzcGlubmVyU3JjOiBQcm9wVHlwZXMuc3RyaW5nXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29rdXAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxyXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxyXG4gICAgICBvcGVuZWQ6IHByb3BzLmRlZmF1bHRPcGVuZWQsXHJcbiAgICAgIHNlYXJjaFRleHQ6IHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0LFxyXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxyXG4gICAgICBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0U2NvcGUgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2Uoc2VhcmNoVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ29tcGxldGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXNldFNlbGVjdGlvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbnVsbCB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSgnJyk7XHJcbiAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCgnJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2gpO1xyXG4gICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25Mb29rdXBJdGVtU2VsZWN0KHNlbGVjdGVkKSB7XHJcbiAgICBpZiAoc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkLCBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VsZWN0aW9uKTtcclxuICAgICAgICBjb25zdCBwaWxsRWxlbSA9IHNlbGVjdGlvbkVsZW0ucXVlcnlTZWxlY3RvcignYScpO1xyXG4gICAgICAgIGlmIChwaWxsRWxlbSkgeyBwaWxsRWxlbS5mb2N1cygpOyB9XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWFyY2hFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xyXG4gICAgY29uc3QgeyBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmICghb3BlbmVkKSB7XHJcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogdHJ1ZSB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgaXNGb2N1c2VkSW5Db21wb25lbnQoKSB7XHJcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcbiAgICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xyXG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gISF0YXJnZXRFbDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b3RhbENvbHMsIGNvbHMsXHJcbiAgICAgIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkLCBkZWZhdWx0U2VsZWN0ZWQsXHJcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLCBkZWZhdWx0T3BlbmVkLFxyXG4gICAgICBzZWFyY2hUZXh0ID0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LCBkZWZhdWx0U2VhcmNoVGV4dCxcclxuICAgICAgdGFyZ2V0U2NvcGUgPSB0aGlzLnN0YXRlLnRhcmdldFNjb3BlLCBkZWZhdWx0VGFyZ2V0U2NvcGUsXHJcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcclxuICAgICAgbGlzdEhlYWRlciwgbGlzdEZvb3RlcixcclxuICAgICAgZGF0YSxcclxuICAgICAgb25TZWxlY3QsIG9uQmx1ciwgb25Db21wbGV0ZSxcclxuICAgICAgb25TY29wZUNoYW5nZSwgb25TY29wZU1lbnVDbGljaywgb25TZWFyY2hUZXh0Q2hhbmdlLCBvbkxvb2t1cFJlcXVlc3QsXHJcbiAgICAgIHNwaW5uZXJTcmMsXHJcbiAgICAgIC4uLnByb3BzXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gKFxyXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxyXG4gICAgICAgIHJlZj0nY2FuZGlkYXRlTGlzdCdcclxuICAgICAgICBkYXRhPXsgZGF0YSB9XHJcbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxyXG4gICAgICAgIGhpZGRlbj17ICFvcGVuZWQgfVxyXG4gICAgICAgIGxvYWRpbmc9eyBsb2FkaW5nIH1cclxuICAgICAgICBmaWx0ZXI9eyBsb29rdXBGaWx0ZXIgPyAoZW50cnkpID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cclxuICAgICAgICBoZWFkZXI9eyBsaXN0SGVhZGVyIH1cclxuICAgICAgICBmb290ZXI9eyBsaXN0Rm9vdGVyIH1cclxuICAgICAgICBzcGlubmVyU3JjPXsgc3Bpbm5lclNyYyB9XHJcbiAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uTG9va3VwSXRlbVNlbGVjdC5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtbG9va3VwJyxcclxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApO1xyXG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxyXG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcclxuICAgICAgICAgIGRhdGEtc2NvcGU9eyBwcm9wcy5zY29wZXMgPyAnbXVsdGknIDogJ3NpbmdsZScgfVxyXG4gICAgICAgICAgZGF0YS10eXBlYWhlYWQ9eyBmYWxzZSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzZWxlY3RlZCA/XHJcbiAgICAgICAgICAgIDxMb29rdXBTZWxlY3Rpb25cclxuICAgICAgICAgICAgICBpZD17IGlkIH1cclxuICAgICAgICAgICAgICByZWY9J3NlbGVjdGlvbidcclxuICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cclxuICAgICAgICAgICAgICBvblJlc2V0U2VsZWN0aW9uPXsgdGhpcy5vblJlc2V0U2VsZWN0aW9uLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgIDxMb29rdXBTZWFyY2ggeyAuLi5wcm9wcyB9XHJcbiAgICAgICAgICAgICAgaWQ9eyBpZCB9XHJcbiAgICAgICAgICAgICAgcmVmPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgc2VhcmNoVGV4dD17IHNlYXJjaFRleHQgfVxyXG4gICAgICAgICAgICAgIHRhcmdldFNjb3BlPXsgdGFyZ2V0U2NvcGUgfVxyXG4gICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgICAgb25TY29wZUNoYW5nZT17IHRoaXMub25TY29wZUNoYW5nZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxyXG4gICAgICAgICAgICAgIG9uUHJlc3NEb3duPXsgdGhpcy5vbkZvY3VzRmlyc3RDYW5kaWRhdGUuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgICAgb25Db21wbGV0ZT17IHRoaXMub25Db21wbGV0ZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuTG9va3VwLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcclxuICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcclxuICBvcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVmYXVsdFNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcclxuICBsb29rdXBGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGxpc3RIZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxyXG4gIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxyXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KVxyXG4gICksXHJcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVmYXVsdFRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uU2VhcmNoVGV4dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Mb29rdXBSZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcclxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcclxufTtcclxuXHJcbkxvb2t1cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuIl19