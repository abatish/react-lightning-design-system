'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalContent = exports.ModalHeader = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactLightningDesignSystem = require('react-lightning-design-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'hide',
    value: function hide() {
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }, {
    key: 'renderChildComponent',
    value: function renderChildComponent(comp) {
      /* eslint-disable no-use-before-define */
      if (comp.type === ModalHeader) {
        return _react2.default.cloneElement(comp, { onClose: this.hide.bind(this) });
      }
      return comp;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var opened = _props.opened;
      var children = _props.children;
      var size = _props.size;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'opened', 'children', 'size']);

      var modalClassNames = (0, _classnames2.default)(className, 'slds-modal', {
        'slds-fade-in-open': opened,
        'slds-modal--large': size === 'large'
      });
      var backdropClassNames = (0, _classnames2.default)(className, 'slds-modal-backdrop', {
        'slds-modal-backdrop--open': opened
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: modalClassNames, 'aria-hidden': !opened, role: 'dialog' }, props),
          _react2.default.createElement(
            'div',
            { className: 'slds-modal__container' },
            _react2.default.Children.map(children, this.renderChildComponent.bind(this))
          )
        ),
        _react2.default.createElement('div', { className: backdropClassNames })
      );
    }
  }]);
  return Modal;
}(_react.Component);

var MODAL_SIZES = ['large'];

Modal.propTypes = {
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(MODAL_SIZES),
  opened: _react.PropTypes.bool,
  onHide: _react.PropTypes.func,
  children: _react.PropTypes.node
};

var ModalHeader = exports.ModalHeader = function (_Component2) {
  (0, _inherits3.default)(ModalHeader, _Component2);

  function ModalHeader() {
    (0, _classCallCheck3.default)(this, ModalHeader);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalHeader).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalHeader, [{
    key: 'onClose',
    value: function onClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var title = _props2.title;
      var tagline = _props2.tagline;
      var closeButton = _props2.closeButton;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'title', 'tagline', 'closeButton']);

      var hdClassNames = (0, _classnames2.default)(className, 'slds-modal__header');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: hdClassNames }, props),
        _react2.default.createElement(
          'h2',
          { className: 'slds-text-heading--medium' },
          title
        ),
        tagline ? _react2.default.createElement(
          'p',
          { className: 'slds-m-top--x-small' },
          tagline
        ) : null,
        closeButton ? _react2.default.createElement(_reactLightningDesignSystem.Button, {
          className: 'slds-modal__close',
          icon: 'close',
          iconSize: 'large',
          alt: 'Close',
          inverse: true,
          onClick: this.onClose.bind(this)
        }) : null
      );
    }
  }]);
  return ModalHeader;
}(_react.Component);

ModalHeader.propTypes = {
  title: _react.PropTypes.string,
  tagline: _react.PropTypes.any,
  onClose: _react.PropTypes.func,
  className: _react.PropTypes.string,
  closeButton: _react.PropTypes.bool
};

var ModalContent = exports.ModalContent = function (_Component3) {
  (0, _inherits3.default)(ModalContent, _Component3);

  function ModalContent() {
    (0, _classCallCheck3.default)(this, ModalContent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalContent).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalContent, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'children']);

      var ctClassNames = (0, _classnames2.default)(className, 'slds-modal__content');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ctClassNames }, props),
        children
      );
    }
  }]);
  return ModalContent;
}(_react.Component);

ModalContent.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var ModalFooter = exports.ModalFooter = function (_Component4) {
  (0, _inherits3.default)(ModalFooter, _Component4);

  function ModalFooter() {
    (0, _classCallCheck3.default)(this, ModalFooter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalFooter).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalFooter, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var className = _props4.className;
      var directional = _props4.directional;
      var children = _props4.children;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['className', 'directional', 'children']);

      var ftClassNames = (0, _classnames2.default)(className, 'slds-modal__footer', { 'slds-modal__footer--directional': directional });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ftClassNames }, props),
        children
      );
    }
  }]);
  return ModalFooter;
}(_react.Component);

ModalFooter.propTypes = {
  className: _react.PropTypes.string,
  directional: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR00sSzs7Ozs7Ozs7OzsyQkFDRztBQUNMLFVBQUksS0FBSyxLQUFMLENBQVcsTUFBZixFQUF1QjtBQUNyQixhQUFLLEtBQUwsQ0FBVyxNQUFYO0FBQ0Q7QUFDRjs7O3lDQUVvQixJLEVBQU07O0FBRXpCLFVBQUksS0FBSyxJQUFMLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0IsZUFBTyxnQkFBTSxZQUFOLENBQW1CLElBQW5CLEVBQXlCLEVBQUUsU0FBUyxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsSUFBZixDQUFYLEVBQXpCLENBQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDaUQsS0FBSyxLQUR0RDtBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLE1BRFosVUFDWSxNQURaO0FBQUEsVUFDb0IsUUFEcEIsVUFDb0IsUUFEcEI7QUFBQSxVQUM4QixJQUQ5QixVQUM4QixJQUQ5QjtBQUFBLFVBQ3VDLEtBRHZDOztBQUVQLFVBQU0sa0JBQWtCLDBCQUFXLFNBQVgsRUFBc0IsWUFBdEIsRUFBb0M7QUFDMUQsNkJBQXFCLE1BRHFDO0FBRTFELDZCQUFxQixTQUFTO0FBRjRCLE9BQXBDLENBQXhCO0FBSUEsVUFBTSxxQkFBcUIsMEJBQVcsU0FBWCxFQUFzQixxQkFBdEIsRUFBNkM7QUFDdEUscUNBQTZCO0FBRHlDLE9BQTdDLENBQTNCO0FBR0EsYUFDRTtBQUFBO1FBQUE7UUFDRTtBQUFBO1VBQUEseUJBQUssV0FBWSxlQUFqQixFQUFtQyxlQUFjLENBQUMsTUFBbEQsRUFBMkQsTUFBSyxRQUFoRSxJQUE4RSxLQUE5RTtVQUNFO0FBQUE7WUFBQSxFQUFLLFdBQVUsdUJBQWY7WUFDSSxnQkFBTSxRQUFOLENBQWUsR0FB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ZjtBQUNBLE1BQU0sT0FBTixHQUFnQixZQUFoQjtBQUNBLE1BQU0sTUFBTixHQUFlLFdBQWY7O2tCQUVlLEsiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdC1saWdodG5pbmctZGVzaWduLXN5c3RlbSc7XHJcblxyXG5cclxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGhpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkhpZGUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNoaWxkQ29tcG9uZW50KGNvbXApIHtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbiAgICBpZiAoY29tcC50eXBlID09PSBNb2RhbEhlYWRlcikge1xyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNvbXAsIHsgb25DbG9zZTogdGhpcy5oaWRlLmJpbmQodGhpcykgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBvcGVuZWQsIGNoaWxkcmVuLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IG1vZGFsQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1tb2RhbCcsIHtcclxuICAgICAgJ3NsZHMtZmFkZS1pbi1vcGVuJzogb3BlbmVkLFxyXG4gICAgICAnc2xkcy1tb2RhbC0tbGFyZ2UnOiBzaXplID09PSAnbGFyZ2UnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBiYWNrZHJvcENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWwtYmFja2Ryb3AnLCB7XHJcbiAgICAgICdzbGRzLW1vZGFsLWJhY2tkcm9wLS1vcGVuJzogb3BlbmVkLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbW9kYWxDbGFzc05hbWVzIH0gYXJpYS1oaWRkZW49eyAhb3BlbmVkIH0gcm9sZT0nZGlhbG9nJyB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1tb2RhbF9fY29udGFpbmVyJz5cclxuICAgICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGRDb21wb25lbnQuYmluZCh0aGlzKSkgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBiYWNrZHJvcENsYXNzTmFtZXMgfT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgTU9EQUxfU0laRVMgPSBbJ2xhcmdlJ107XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihNT0RBTF9TSVpFUyksXHJcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIG9uQ2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHRpdGxlLCB0YWdsaW5lLCBjbG9zZUJ1dHRvbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBoZENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWxfX2hlYWRlcicpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBoZENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLW1lZGl1bSc+eyB0aXRsZSB9PC9oMj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0YWdsaW5lID9cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc2xkcy1tLXRvcC0teC1zbWFsbCc+eyB0YWdsaW5lIH08L3A+IDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2xvc2VCdXR0b24gP1xyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbW9kYWxfX2Nsb3NlJ1xyXG4gICAgICAgICAgICBpY29uPSdjbG9zZSdcclxuICAgICAgICAgICAgaWNvblNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICBhbHQ9J0Nsb3NlJ1xyXG4gICAgICAgICAgICBpbnZlcnNlXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTW9kYWxIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5hbnksXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLW1vZGFsX19jb250ZW50Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGN0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT57IGNoaWxkcmVuIH08L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Nb2RhbENvbnRlbnQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZGlyZWN0aW9uYWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGZ0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgJ3NsZHMtbW9kYWxfX2Zvb3RlcicsXHJcbiAgICAgIHsgJ3NsZHMtbW9kYWxfX2Zvb3Rlci0tZGlyZWN0aW9uYWwnOiBkaXJlY3Rpb25hbCB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBmdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+eyBjaGlsZHJlbiB9PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTW9kYWxGb290ZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkaXJlY3Rpb25hbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuXHJcbk1vZGFsLkhlYWRlciA9IE1vZGFsSGVhZGVyO1xyXG5Nb2RhbC5Db250ZW50ID0gTW9kYWxDb250ZW50O1xyXG5Nb2RhbC5Gb290ZXIgPSBNb2RhbEZvb3RlcjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iXX0=