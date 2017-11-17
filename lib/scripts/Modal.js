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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  title: _propTypes2.default.string,
  tagline: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  className: _propTypes2.default.string,
  closeButton: _propTypes2.default.bool
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
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(MODAL_SIZES),
  opened: _propTypes2.default.bool,
  onHide: _propTypes2.default.func,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  containerStyle: _propTypes2.default.object
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
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
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
  className: _propTypes2.default.string,
  directional: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

exports.default = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsSGVhZGVyIiwib25DbG9zZSIsImJpbmQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRpdGxlIiwidGFnbGluZSIsImNsb3NlQnV0dG9uIiwiaGRDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiLCJNb2RhbCIsInJlbmRlckNoaWxkQ29tcG9uZW50Iiwib25IaWRlIiwiY29tcCIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJoaWRlIiwib3BlbmVkIiwiY2hpbGRyZW4iLCJzaXplIiwiY29udGFpbmVyU3R5bGUiLCJtb2RhbENsYXNzTmFtZXMiLCJiYWNrZHJvcENsYXNzTmFtZXMiLCJDaGlsZHJlbiIsIm1hcCIsIk1PREFMX1NJWkVTIiwib25lT2YiLCJub2RlIiwib2JqZWN0IiwiTW9kYWxDb250ZW50IiwiY3RDbGFzc05hbWVzIiwiTW9kYWxGb290ZXIiLCJkaXJlY3Rpb25hbCIsImZ0Q2xhc3NOYW1lcyIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVhQSxXLFdBQUFBLFc7OztBQUNYLHlCQUFjO0FBQUE7O0FBQUE7O0FBR1osVUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUMsSUFBYixPQUFmO0FBSFk7QUFJYjs7Ozs4QkFDUztBQUNSLFVBQUksS0FBS0MsS0FBTCxDQUFXRixPQUFmLEVBQXdCO0FBQ3RCLGFBQUtFLEtBQUwsQ0FBV0YsT0FBWDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUFBLG1CQUNzRCxLQUFLRSxLQUQzRDtBQUFBLFVBQ0NDLFNBREQsVUFDQ0EsU0FERDtBQUFBLFVBQ1lDLEtBRFosVUFDWUEsS0FEWjtBQUFBLFVBQ21CQyxPQURuQixVQUNtQkEsT0FEbkI7QUFBQSxV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QkFFZXJCLEsiLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBNb2RhbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdGl0bGUsIHRhZ2xpbmUsIGNsb3NlQnV0dG9uLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBkZWxldGUgcHJvcHMub25DbG9zZTtcbiAgICBjb25zdCBoZENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWxfX2hlYWRlcicpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGhkQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2xkcy10ZXh0LWhlYWRpbmctLW1lZGl1bSc+eyB0aXRsZSB9PC9oMj5cbiAgICAgICAge1xuICAgICAgICAgIHRhZ2xpbmUgP1xuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzbGRzLW0tdG9wLS14LXNtYWxsJz57IHRhZ2xpbmUgfTwvcD4gOlxuICAgICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBjbG9zZUJ1dHRvbiA/XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy1tb2RhbF9fY2xvc2UnXG4gICAgICAgICAgICAgIGljb249J2Nsb3NlJ1xuICAgICAgICAgICAgICBpY29uU2l6ZT0nbGFyZ2UnXG4gICAgICAgICAgICAgIGFsdD0nQ2xvc2UnXG4gICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25DbG9zZSB9XG4gICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Nb2RhbEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlbmRlckNoaWxkQ29tcG9uZW50ID0gdGhpcy5yZW5kZXJDaGlsZENvbXBvbmVudC5iaW5kKHRoaXMpO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25IaWRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNoaWxkQ29tcG9uZW50KGNvbXApIHtcbiAgICBpZiAoY29tcC50eXBlID09PSBNb2RhbEhlYWRlcikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjb21wLCB7IG9uQ2xvc2U6IHRoaXMuaGlkZS5iaW5kKHRoaXMpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgb3BlbmVkLCBjaGlsZHJlbiwgc2l6ZSwgY29udGFpbmVyU3R5bGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZSBwcm9wcy5vbkhpZGU7XG4gICAgY29uc3QgbW9kYWxDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLW1vZGFsJywge1xuICAgICAgJ3NsZHMtZmFkZS1pbi1vcGVuJzogb3BlbmVkLFxuICAgICAgJ3NsZHMtbW9kYWwtLWxhcmdlJzogc2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICB9KTtcbiAgICBjb25zdCBiYWNrZHJvcENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWwtYmFja2Ryb3AnLCB7XG4gICAgICAnc2xkcy1tb2RhbC1iYWNrZHJvcC0tb3Blbic6IG9wZW5lZCxcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBtb2RhbENsYXNzTmFtZXMgfSBhcmlhLWhpZGRlbj17ICFvcGVuZWQgfSByb2xlPSdkaWFsb2cnIHsgLi4ucHJvcHMgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1tb2RhbF9fY29udGFpbmVyJyBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG4gICAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZENvbXBvbmVudCkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBiYWNrZHJvcENsYXNzTmFtZXMgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBNT0RBTF9TSVpFUyA9IFsnbGFyZ2UnXTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihNT0RBTF9TSVpFUyksXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbiAgY29udGFpbmVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBNb2RhbENvbnRlbnQgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1tb2RhbF9fY29udGVudCcpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY3RDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PnsgY2hpbGRyZW4gfTwvZGl2PlxuICApO1xufTtcblxuTW9kYWxDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9ICh7IGNsYXNzTmFtZSwgZGlyZWN0aW9uYWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGZ0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgY2xhc3NOYW1lLFxuICAgICdzbGRzLW1vZGFsX19mb290ZXInLFxuICAgIHsgJ3NsZHMtbW9kYWxfX2Zvb3Rlci0tZGlyZWN0aW9uYWwnOiBkaXJlY3Rpb25hbCB9XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBmdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+eyBjaGlsZHJlbiB9PC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbEZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlyZWN0aW9uYWw6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5cbk1vZGFsLkhlYWRlciA9IE1vZGFsSGVhZGVyO1xuTW9kYWwuQ29udGVudCA9IE1vZGFsQ29udGVudDtcbk1vZGFsLkZvb3RlciA9IE1vZGFsRm9vdGVyO1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdfQ==