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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS00sZTs7Ozs7Ozs7Ozs4QkFDTSxDLEVBQUc7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLENBQWQsSUFBbUIsRUFBRSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7O0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVSxRLEVBQVU7QUFDbkIsVUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBTztBQUN6QixVQUFFLE1BQUYsQ0FBUyxLQUFUO0FBQ0EsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFBQTtRQUFBLEVBQUcsV0FBVSxXQUFiO0FBQ0UsY0FBSyxLQUFLLEtBQUwsQ0FBVyxFQURsQjtBQUVFLGVBQUksTUFGTjtBQUdFLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FIZDtBQUlFLG1CQUFVLFdBSlo7QUFLRSxvQkFBVztBQUxiO1FBUUksU0FBUyxJQUFULEdBQ0EsZ0RBQU0sV0FBVSxpQkFBaEIsRUFBa0MsVUFBVyxTQUFTLFFBQXRELEVBQWlFLE1BQU8sU0FBUyxJQUFqRixHQURBLEdBRUEsU0FWSjtRQVlFO0FBQUE7VUFBQSxFQUFNLFdBQVUsa0JBQWhCO1VBQXFDLFNBQVM7QUFBOUMsU0FaRjtRQWFFLGtEQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssV0FBM0MsRUFBdUQsTUFB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dCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAnLi9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTG9va3VwU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHsgLy8gQmFjc3BhY2UgLyBERUxcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBpbGwoc2VsZWN0ZWQpIHtcbiAgICBjb25zdCBvblBpbGxDbGljayA9IChlKSA9PiB7XG4gICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8YSBjbGFzc05hbWU9J3NsZHMtcGlsbCdcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cbiAgICAgICAgcmVmPSdwaWxsJ1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cbiAgICAgICAgdGFiSW5kZXg9eyAwIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkLmljb24gP1xuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc2xkcy1waWxsX19pY29uJyBjYXRlZ29yeT17IHNlbGVjdGVkLmNhdGVnb3J5IH0gaWNvbj17IHNlbGVjdGVkLmljb24gfSAvPiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2xhYmVsJz57IHNlbGVjdGVkLmxhYmVsIH08L3NwYW4+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX3JlbW92ZScgdHlwZT0naWNvbi1iYXJlJyBpY29uPSdjbG9zZScgYWx0PSdSZW1vdmUnXG4gICAgICAgICAgdGFiSW5kZXg9eyAtMSB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1waWxsX19jb250YWluZXInPlxuICAgICAgICAgIHsgc2VsZWN0ZWQgPyB0aGlzLnJlbmRlclBpbGwoc2VsZWN0ZWQpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn1cblxuY29uc3QgTG9va3VwRW50cnlUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5Mb29rdXBTZWxlY3Rpb24ucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgcmVnaXN0ZXJTdHlsZSgnbG9va3VwU2VhcmNoJywgW1xuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJyxcbiAgICAgICAgJ3sgd2lkdGg6IDNyZW07IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcbiAgICAgICAgJ3sgbWFyZ2luLWxlZnQ6IDA7IH0nLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJy5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyIC5zbGRzLWJ1dHRvbicsXG4gICAgICAgICd7IHBhZGRpbmc6IDAgMC4yNXJlbTsgfScsXG4gICAgICBdLFxuICAgIF0pO1xuICB9XG5cbiAgb25Mb29rdXBJY29uQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xuICB9XG5cbiAgb25JbnB1dEtleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBpZiAoc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uUHJlc3NEb3duKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNlYXJjaFRleHQpO1xuICB9XG5cbiAgb25JbnB1dEJsdXIoZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZU1lbnVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljayhzY29wZSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2VhcmNoSW5wdXQocHJvcHMpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGlkZGVuLCBzZWFyY2hUZXh0IH0gPSBwcm9wcztcbiAgICBjb25zdCBzZWFyY2hJbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbicsXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH0sXG4gICAgICBjbGFzc05hbWVcbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNlYXJjaElucHV0Q2xhc3NOYW1lcyB9PlxuICAgICAgICA8SW5wdXQgeyAuLi5wcm9wcyB9XG4gICAgICAgICAgcmVmPSdpbnB1dCdcbiAgICAgICAgICB2YWx1ZT17IHNlYXJjaFRleHQgfVxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uSW5wdXRDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgICAgPEljb24gaWNvbj0nc2VhcmNoJyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIHN0eWxlPXsgeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkxvb2t1cEljb25DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTY29wZVNlbGVjdG9yKHNjb3BlcywgdGFyZ2V0KSB7XG4gICAgbGV0IHRhcmdldFNjb3BlID0gc2NvcGVzWzBdIHx8IHt9O1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBpZiAoc2NvcGUudmFsdWUgPT09IHRhcmdldCkge1xuICAgICAgICB0YXJnZXRTY29wZSA9IHNjb3BlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaWNvbiA9IDxJY29uIGljb249eyB0YXJnZXRTY29wZS5pY29uIHx8ICdub25lJyB9IHNpemU9J3gtc21hbGwnIC8+O1xuICAgIGNvbnN0IHNlbGVjdG9yQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWdyaWQtLWFsaWduLWNlbnRlcicsXG4gICAgICAnc2xkcy1ncmlkLS12ZXJ0aWNhbC1hbGlnbi1jZW50ZXInLFxuICAgICAgJ3JlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJ1xuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VsZWN0b3JDbGFzc05hbWVzIH0+XG4gICAgICAgIDxEcm9wZG93bkJ1dHRvbiBsYWJlbD17IGljb24gfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNjb3Blcy5tYXAoKHNjb3BlKSA9PiA8RHJvcGRvd25NZW51SXRlbSBrZXk9eyBzY29wZS52YWx1ZSB9IHsgLi4uc2NvcGUgfSAvPikgfVxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNjb3BlcywgaGlkZGVuLCBjbGFzc05hbWUsIHRhcmdldFNjb3BlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2NvcGVzKSB7XG4gICAgICBjb25zdCBsb29rdXBTZWFyY2hDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICAgJ3NsZHMtZ3JpZCcsXG4gICAgICAgICdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCcsXG4gICAgICAgICdzbGRzLWJveC0tYm9yZGVyJyxcbiAgICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBzdHlsZXMgPSB7ICdXZWJraXRGbGV4V3JhcCc6ICdub3dyYXAnLCAnbXNGbGV4V3JhcCc6ICdub3dyYXAnLCBmbGV4V3JhcDogJ25vd3JhcCcgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyB9IHN0eWxlPXsgc3R5bGVzIH0+XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNjb3BlU2VsZWN0b3Ioc2NvcGVzLCB0YXJnZXRTY29wZSkgfVxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh7IC4uLnByb3BzLCBjbGFzc05hbWU6ICdzbGRzLWNvbCcsIGJhcmU6IHRydWUgfSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbmRlclNlYXJjaElucHV0KHRoaXMucHJvcHMpO1xuICB9XG5cbn1cblxuXG5Mb29rdXBTZWFyY2gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pXG4gICksXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuYW55LFxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QcmVzc0Rvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuLyoqXG4gKlxuICovXG5jbGFzcyBMb29rdXBDYW5kaWRhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhcHJldlByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3QoZW50cnkpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlbnRyeSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7IC8vIFVQL0RPV05cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICBhbmNob3JFbC5mb2N1cygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gaXRlbUVsLm5leHRTaWJsaW5nIDogaXRlbUVsLnByZXZpb3VzU2libGluZztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5vblNlbGVjdChudWxsKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c1RvVGFyZ2V0SXRlbUVsKGluZGV4KSB7XG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBjb25zdCBhbmNob3JzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xuICAgIGlmIChhbmNob3JzW2luZGV4XSkge1xuICAgICAgYW5jaG9yc1tpbmRleF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDYW5kaWRhdGUoZW50cnkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nIGtleT17IGVudHJ5LnZhbHVlIH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSByZWFjdC1zbGRzLWNhbmRpZGF0ZScgdGFiSW5kZXg9eyAtMSB9IHJvbGU9J29wdGlvbidcbiAgICAgICAgICBvbktleURvd249eyAoZSkgPT4gZS5rZXlDb2RlID09PSAxMyAmJiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbnRyeS5pY29uID9cbiAgICAgICAgICAgIDxJY29uIGNhdGVnb3J5PXsgZW50cnkuY2F0ZWdvcnkgfSBpY29uPXsgZW50cnkuaWNvbiB9IHNpemU9J3NtYWxsJyAvPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgeyBlbnRyeS5sYWJlbCB9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEgPSBbXSwgaGlkZGVuLCBsb2FkaW5nLCBoZWFkZXIsIGZvb3Rlciwgc3Bpbm5lclNyYywgZmlsdGVyID0gKCkgPT4gdHJ1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXBfX21lbnUnLFxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cbiAgICApO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cE1lbnVDbGFzc05hbWVzIH0gcm9sZT0nbGlzdGJveCdcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBoZWFkZXIgfTwvZGl2PiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2xpc3QnIHJvbGU9J3ByZXNlbnRhdGlvbic+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcbiAgICAgICAgICB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PSdsb2FkaW5nJz5cbiAgICAgICAgICAgICAgPFNwaW5uZXIgc3Bpbm5lclNyYz17IHNwaW5uZXJTcmMgfSBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICA8L2xpPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmb290ZXIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Mb29rdXBDYW5kaWRhdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBzcGlubmVyU3JjOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZTogcHJvcHMuZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcbiAgICB9XG4gIH1cblxuICBvblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldFNjb3BlIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGV4dCB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlYXJjaFRleHRDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25SZXNldFNlbGVjdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG51bGwgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QobnVsbCk7XG4gICAgfVxuICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlKCcnKTtcbiAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCgnJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzZWFyY2hFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaCk7XG4gICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH1cblxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3Qoc2VsZWN0ZWQpO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbkVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VsZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcbiAgICAgICAgaWYgKHBpbGxFbGVtKSB7IHBpbGxFbGVtLmZvY3VzKCk7IH1cbiAgICAgIH0sIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2gpO1xuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0RWxlbS5mb2N1cygpO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzRmlyc3RDYW5kaWRhdGUoKSB7XG4gICAgY29uc3QgeyBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QodGhpcy5zdGF0ZS5zZWFyY2hUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IHRydWUgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlIH0pO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwKTtcbiAgfVxuXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGxldCB0YXJnZXRFbCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XG4gICAgY29uc3Qge1xuICAgICAgdG90YWxDb2xzLCBjb2xzLFxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCwgZGVmYXVsdFNlbGVjdGVkLFxuICAgICAgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQsIGRlZmF1bHRPcGVuZWQsXG4gICAgICBzZWFyY2hUZXh0ID0gdGhpcy5zdGF0ZS5zZWFyY2hUZXh0LCBkZWZhdWx0U2VhcmNoVGV4dCxcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSwgZGVmYXVsdFRhcmdldFNjb3BlLFxuICAgICAgbG9hZGluZywgbG9va3VwRmlsdGVyLFxuICAgICAgbGlzdEhlYWRlciwgbGlzdEZvb3RlcixcbiAgICAgIGRhdGEsXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvbkNvbXBsZXRlLFxuICAgICAgb25TY29wZUNoYW5nZSwgb25TY29wZU1lbnVDbGljaywgb25TZWFyY2hUZXh0Q2hhbmdlLCBvbkxvb2t1cFJlcXVlc3QsXG4gICAgICBzcGlubmVyU3JjLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkcm9wZG93biA9IChcbiAgICAgIDxMb29rdXBDYW5kaWRhdGVMaXN0XG4gICAgICAgIHJlZj0nY2FuZGlkYXRlTGlzdCdcbiAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICBmb2N1cz17IHRoaXMuc3RhdGUuZm9jdXNGaXJzdENhbmRpZGF0ZSB9XG4gICAgICAgIGhpZGRlbj17ICFvcGVuZWQgfVxuICAgICAgICBsb2FkaW5nPXsgbG9hZGluZyB9XG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IChlbnRyeSkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxuICAgICAgICBoZWFkZXI9eyBsaXN0SGVhZGVyIH1cbiAgICAgICAgZm9vdGVyPXsgbGlzdEZvb3RlciB9XG4gICAgICAgIHNwaW5uZXJTcmM9eyBzcGlubmVyU3JjIH1cbiAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uTG9va3VwSXRlbVNlbGVjdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XG4gICAgICAvPlxuICAgICk7XG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1sb29rdXAnLFxuICAgICAgeyAnc2xkcy1oYXMtc2VsZWN0aW9uJzogc2VsZWN0ZWQgfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIHRvdGFsQ29scywgY29scywgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgZHJvcGRvd24gfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfVxuICAgICAgICAgIGRhdGEtc2VsZWN0PSdzaW5nbGUnXG4gICAgICAgICAgZGF0YS1zY29wZT17IHByb3BzLnNjb3BlcyA/ICdtdWx0aScgOiAnc2luZ2xlJyB9XG4gICAgICAgICAgZGF0YS10eXBlYWhlYWQ9eyBmYWxzZSB9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZWxlY3RlZCA/XG4gICAgICAgICAgICA8TG9va3VwU2VsZWN0aW9uXG4gICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICByZWY9J3NlbGVjdGlvbidcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XG4gICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICA8TG9va3VwU2VhcmNoIHsgLi4ucHJvcHMgfVxuICAgICAgICAgICAgICBpZD17IGlkIH1cbiAgICAgICAgICAgICAgcmVmPSdzZWFyY2gnXG4gICAgICAgICAgICAgIHNlYXJjaFRleHQ9eyBzZWFyY2hUZXh0IH1cbiAgICAgICAgICAgICAgdGFyZ2V0U2NvcGU9eyB0YXJnZXRTY29wZSB9XG4gICAgICAgICAgICAgIG9uU2NvcGVNZW51Q2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIG9uU2NvcGVDaGFuZ2U9eyB0aGlzLm9uU2NvcGVDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXsgKCkgPT4gdGhpcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkgfVxuICAgICAgICAgICAgICBvblByZXNzRG93bj17IHRoaXMub25Gb2N1c0ZpcnN0Q2FuZGlkYXRlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXsgdGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5cbkxvb2t1cC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYm9vbCxcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICBdKSxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgZGVmYXVsdFNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0U2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXG4gIGxvb2t1cEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGxpc3RIZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBsaXN0Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5Mb29rdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XG4iXX0=