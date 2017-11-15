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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = exports.ModalHeader = function (_Component) {
  (0, _inherits3.default)(ModalHeader, _Component);

  function ModalHeader() {
    (0, _classCallCheck3.default)(this, ModalHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ModalHeader.__proto__ || (0, _getPrototypeOf2.default)(ModalHeader)).call(this));

    _this.onClose = _this.onClose.bind(_this);
    return _this;
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
      var _props = this.props,
          className = _props.className,
          title = _props.title,
          tagline = _props.tagline,
          closeButton = _props.closeButton,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'title', 'tagline', 'closeButton']);

      delete props.onClose;
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
        closeButton ? _react2.default.createElement(_Button2.default, {
          className: 'slds-modal__close',
          icon: 'close',
          iconSize: 'large',
          alt: 'Close',
          inverse: true,
          onClick: this.onClose
        }) : null
      );
    }
  }]);
  return ModalHeader;
}(_react.Component);

ModalHeader.propTypes = {
  title: _react.PropTypes.string,
  tagline: _react.PropTypes.string,
  onClose: _react.PropTypes.func,
  className: _react.PropTypes.string,
  closeButton: _react.PropTypes.bool
};

var Modal = function (_Component2) {
  (0, _inherits3.default)(Modal, _Component2);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call(this));

    _this2.renderChildComponent = _this2.renderChildComponent.bind(_this2);
    return _this2;
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
      if (comp.type === ModalHeader) {
        return _react2.default.cloneElement(comp, { onClose: this.hide.bind(this) });
      }
      return comp;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          opened = _props2.opened,
          children = _props2.children,
          size = _props2.size,
          containerStyle = _props2.containerStyle,
          props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'opened', 'children', 'size', 'containerStyle']);

      delete props.onHide;
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
            { className: 'slds-modal__container', style: containerStyle },
            _react2.default.Children.map(children, this.renderChildComponent)
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
  children: _react.PropTypes.node,
  /* eslint-disable react/forbid-prop-types */
  containerStyle: _react.PropTypes.object
};

var ModalContent = function ModalContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);

  var ctClassNames = (0, _classnames2.default)(className, 'slds-modal__content');
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: ctClassNames }, props),
    children
  );
};

exports.ModalContent = ModalContent;
ModalContent.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var ModalFooter = function ModalFooter(_ref2) {
  var className = _ref2.className,
      directional = _ref2.directional,
      children = _ref2.children,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['className', 'directional', 'children']);

  var ftClassNames = (0, _classnames2.default)(className, 'slds-modal__footer', { 'slds-modal__footer--directional': directional });
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: ftClassNames }, props),
    children
  );
};

exports.ModalFooter = ModalFooter;
ModalFooter.propTypes = {
  className: _react.PropTypes.string,
  directional: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

exports.default = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsSGVhZGVyIiwib25DbG9zZSIsImJpbmQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRpdGxlIiwidGFnbGluZSIsImNsb3NlQnV0dG9uIiwiaGRDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJNb2RhbCIsInJlbmRlckNoaWxkQ29tcG9uZW50Iiwib25IaWRlIiwiY29tcCIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJoaWRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJzaXplIiwiY29udGFpbmVyU3R5bGUiLCJtb2RhbENsYXNzTmFtZXMiLCJiYWNrZHJvcENsYXNzTmFtZXMiLCJDaGlsZHJlbiIsIm1hcCIsIk1PREFMX1NJWkVTIiwib25lT2YiLCJub2RlIiwib2JqZWN0IiwiTW9kYWxDb250ZW50IiwiY3RDbGFzc05hbWVzIiwiTW9kYWxGb290ZXIiLCJkaXJlY3Rpb25hbCIsImZ0Q2xhc3NOYW1lcyIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFYUEsVyxXQUFBQSxXOzs7QUFDWCx5QkFBYztBQUFBOztBQUFBOztBQUdaLFVBQUtDLE9BQUwsR0FBZSxNQUFLQSxPQUFMLENBQWFDLElBQWIsT0FBZjtBQUhZO0FBSWI7Ozs7OEJBQ1M7QUFDUixVQUFJLEtBQUtDLEtBQUwsQ0FBV0YsT0FBZixFQUF3QjtBQUN0QixhQUFLRSxLQUFMLENBQVdGLE9BQVg7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQSxtQkFDc0QsS0FBS0UsS0FEM0Q7QUFBQSxVQUNDQyxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxLQURaLFVBQ1lBLEtBRFo7QUFBQSxVQUNtQkMsT0FEbkIsVUFDbUJBLE9BRG5CO0FBQUEsVUFDNEJDLFdB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IiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcblxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0aXRsZSwgdGFnbGluZSwgY2xvc2VCdXR0b24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkNsb3NlO1xuICAgIGNvbnN0IGhkQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1tb2RhbF9faGVhZGVyJyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaGRDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdzbGRzLXRleHQtaGVhZGluZy0tbWVkaXVtJz57IHRpdGxlIH08L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgdGFnbGluZSA/XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtbS10b3AtLXgtc21hbGwnPnsgdGFnbGluZSB9PC9wPiA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGNsb3NlQnV0dG9uID9cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW1vZGFsX19jbG9zZSdcbiAgICAgICAgICAgICAgaWNvbj0nY2xvc2UnXG4gICAgICAgICAgICAgIGljb25TaXplPSdsYXJnZSdcbiAgICAgICAgICAgICAgYWx0PSdDbG9zZSdcbiAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsb3NlIH1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbk1vZGFsSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsb3NlQnV0dG9uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVuZGVyQ2hpbGRDb21wb25lbnQgPSB0aGlzLnJlbmRlckNoaWxkQ29tcG9uZW50LmJpbmQodGhpcyk7XG4gIH1cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkhpZGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRDb21wb25lbnQoY29tcCkge1xuICAgIGlmIChjb21wLnR5cGUgPT09IE1vZGFsSGVhZGVyKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNvbXAsIHsgb25DbG9zZTogdGhpcy5oaWRlLmJpbmQodGhpcykgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBvcGVuZWQsIGNoaWxkcmVuLCBzaXplLCBjb250YWluZXJTdHlsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVsZXRlIHByb3BzLm9uSGlkZTtcbiAgICBjb25zdCBtb2RhbENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWwnLCB7XG4gICAgICAnc2xkcy1mYWRlLWluLW9wZW4nOiBvcGVuZWQsXG4gICAgICAnc2xkcy1tb2RhbC0tbGFyZ2UnOiBzaXplID09PSAnbGFyZ2UnLFxuICAgIH0pO1xuICAgIGNvbnN0IGJhY2tkcm9wQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1tb2RhbC1iYWNrZHJvcCcsIHtcbiAgICAgICdzbGRzLW1vZGFsLWJhY2tkcm9wLS1vcGVuJzogb3BlbmVkLFxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IG1vZGFsQ2xhc3NOYW1lcyB9IGFyaWEtaGlkZGVuPXsgIW9wZW5lZCB9IHJvbGU9J2RpYWxvZycgeyAuLi5wcm9wcyB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLW1vZGFsX19jb250YWluZXInIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cbiAgICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkQ29tcG9uZW50KSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGJhY2tkcm9wQ2xhc3NOYW1lcyB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IE1PREFMX1NJWkVTID0gWydsYXJnZSddO1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKE1PREFMX1NJWkVTKSxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuICBjb250YWluZXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblxuZXhwb3J0IGNvbnN0IE1vZGFsQ29udGVudCA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLW1vZGFsX19jb250ZW50Jyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+eyBjaGlsZHJlbiB9PC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbENvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gKHsgY2xhc3NOYW1lLCBkaXJlY3Rpb25hbCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgZnRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICBjbGFzc05hbWUsXG4gICAgJ3NsZHMtbW9kYWxfX2Zvb3RlcicsXG4gICAgeyAnc2xkcy1tb2RhbF9fZm9vdGVyLS1kaXJlY3Rpb25hbCc6IGRpcmVjdGlvbmFsIH1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGZ0Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT57IGNoaWxkcmVuIH08L2Rpdj5cbiAgKTtcbn07XG5cbk1vZGFsRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXJlY3Rpb25hbDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblxuTW9kYWwuSGVhZGVyID0gTW9kYWxIZWFkZXI7XG5Nb2RhbC5Db250ZW50ID0gTW9kYWxDb250ZW50O1xuTW9kYWwuRm9vdGVyID0gTW9kYWxGb290ZXI7XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIl19