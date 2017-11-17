'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldSet = function FieldSet(_ref) {
  var className = _ref.className,
      label = _ref.label,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label', 'children']);

  var fsClassNames = (0, _classnames2.default)(className, 'slds-form--compound');
  return _react2.default.createElement(
    'fieldset',
    (0, _extends3.default)({ className: fsClassNames }, props),
    label ? _react2.default.createElement(
      'legend',
      { className: 'slds-form-element__label' },
      label
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'form-element__group' },
      children
    )
  );
};

FieldSet.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  children: _propTypes2.default.node
};

FieldSet.isFormElement = true;

var Row = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderChild',
    value: function renderChild(totalCols, child) {
      if (child && !child.type.isFormElement) {
        var _child$props$id = child.props.id,
            id = _child$props$id === undefined ? 'form-element-' + (0, _util.uuid)() : _child$props$id;

        var formElemProps = { id: id, totalCols: totalCols, cols: 1 };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(child, { id: id })
        );
      }
      return _react2.default.cloneElement(child, { totalCols: totalCols });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cols = _props.cols,
          children = _props.children;

      var totalCols = cols || _react2.default.Children.count(children);
      var rowClassNames = (0, _classnames2.default)(className, 'slds-form-element__row');
      return _react2.default.createElement(
        'div',
        { className: rowClassNames },
        _react2.default.Children.map(children, this.renderChild.bind(this, totalCols))
      );
    }
  }]);
  return Row;
}(_react.Component);

Row.propTypes = {
  className: _propTypes2.default.string,
  cols: _propTypes2.default.number,
  children: _propTypes2.default.node
};

Row.isFormElement = true;

FieldSet.Row = Row;

exports.default = FieldSet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ZpZWxkU2V0LmpzIl0sIm5hbWVzIjpbIkZpZWxkU2V0IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BzIiwiZnNDbGFzc05hbWVzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImlzRm9ybUVsZW1lbnQiLCJSb3ciLCJ0b3RhbENvbHMiLCJjaGlsZCIsInR5cGUiLCJpZCIsImZvcm1FbGVtUHJvcHMiLCJjb2xzIiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJjb3VudCIsInJvd0NsYXNzTmFtZXMiLCJtYXAiLCJyZW5kZXJDaGlsZCIsImJpbmQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0EsSUFBTUEsV0FBVyxTQUFYQSxRQUFXLE9BQThDO0FBQUEsTUFBM0NDLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLE1BQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0QsTUFBTUMsZUFBZSwwQkFBV0osU0FBWCxFQUFzQixxQkFBdEIsQ0FBckI7QUFDQSxTQUNFO0FBQUE7QUFBQSw2QkFBVSxXQUFZSSxZQUF0QixJQUEwQ0QsS0FBMUM7QUFFSUYsWUFDRTtBQUFBO0FBQUEsUUFBUSxXQUFVLDBCQUFsQjtBQUErQ0E7QUFBL0MsS0FERixHQUVFLElBSk47QUFNRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHFCQUFmO0FBQ0lDO0FBREo7QUFORixHQURGO0FBWUQsQ0FkRDs7QUFnQkFILFNBQVNNLFNBQVQsR0FBcUI7QUFDbkJMLGFBQVcsb0JBQVVNLE1BREY7QUFFbkJMLFNBQU8sb0JBQVVLLE1BRkU7QUFHbkJKLFlBQVUsb0JBQVVLO0FBSEQsQ0FBckI7O0FBTUFSLFNBQVNTLGFBQVQsR0FBeUIsSUFBekI7O0lBR01DLEc7Ozs7Ozs7Ozs7Z0NBQ1FDLFMsRUFBV0MsSyxFQUFPO0FBQzVCLFVBQUlBLFNBQVMsQ0FBQ0EsTUFBTUMsSUFBTixDQUFXSixhQUF6QixFQUF3QztBQUFBLDhCQUNJRyxNQUFNUixLQURWLENBQzlCVSxFQUQ4QjtBQUFBLFlBQzlCQSxFQUQ4QixxREFDVCxpQkFEUzs7QUFFdEMsWUFBTUMsZ0JBQWdCLEVBQUVELE1BQUYsRUFBTUgsb0JBQU4sRUFBaUJLLE1BQU0sQ0FBdkIsRUFBdEI7QUFDQSxlQUNFO0FBQUE7QUFBa0JELHVCQUFsQjtBQUNJLDBCQUFNRSxZQUFOLENBQW1CTCxLQUFuQixFQUEwQixFQUFFRSxNQUFGLEVBQTFCO0FBREosU0FERjtBQUtEO0FBQ0QsYUFBTyxnQkFBTUcsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEIsRUFBRUQsb0JBQUYsRUFBMUIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDK0IsS0FBS1AsS0FEcEM7QUFBQSxVQUNDSCxTQURELFVBQ0NBLFNBREQ7QUFBQSxVQUNZZSxJQURaLFVBQ1lBLElBRFo7QUFBQSxVQUNrQmIsUUFEbEIsVUFDa0JBLFFBRGxCOztBQUVQLFVBQU1RLFlBQVlLLFFBQVEsZ0JBQU1FLFFBQU4sQ0FBZUMsS0FBZixDQUFxQmhCLFFBQXJCLENBQTFCO0FBQ0EsVUFBTWlCLGdCQUFnQiwwQkFBV25CLFNBQVgsRUFBc0Isd0JBQXRCLENBQXRCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZbUIsYUFBakI7QUFDSSx3QkFBTUYsUUFBTixDQUFlRyxHQUFmLENBQW1CbEIsUUFBbkIsRUFBNkIsS0FBS21CLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLEVBQTRCWixTQUE1QixDQUE3QjtBQURKLE9BREY7QUFLRDs7Ozs7QUFHSEQsSUFBSUosU0FBSixHQUFnQjtBQUNkTCxhQUFXLG9CQUFVTSxNQURQO0FBRWRTLFFBQU0sb0JBQVVRLE1BRkY7QUFHZHJCLFlBQVUsb0JBQVVLO0FBSE4sQ0FBaEI7O0FBTUFFLElBQUlELGFBQUosR0FBb0IsSUFBcEI7O0FBRUFULFNBQVNVLEdBQVQsR0FBZUEsR0FBZjs7a0JBRWVWLFEiLCJmaWxlIjoiRmllbGRTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbCc7XG5cblxuY29uc3QgRmllbGRTZXQgPSAoeyBjbGFzc05hbWUsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBmc0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtZm9ybS0tY29tcG91bmQnKTtcbiAgcmV0dXJuIChcbiAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXsgZnNDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxuICAgICAge1xuICAgICAgICBsYWJlbCA/XG4gICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCc+eyBsYWJlbCB9PC9sZWdlbmQ+IDpcbiAgICAgICAgICBudWxsXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1lbGVtZW50X19ncm91cCc+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9kaXY+XG4gICAgPC9maWVsZHNldD5cbiAgKTtcbn07XG5cbkZpZWxkU2V0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuRmllbGRTZXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuY2xhc3MgUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hpbGQodG90YWxDb2xzLCBjaGlsZCkge1xuICAgIGlmIChjaGlsZCAmJiAhY2hpbGQudHlwZS5pc0Zvcm1FbGVtZW50KSB7XG4gICAgICBjb25zdCB7IGlkID0gYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gIH0gPSBjaGlsZC5wcm9wcztcbiAgICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHM6IDEgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cbiAgICAgICAgICB7IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyBpZCB9KSB9XG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IHRvdGFsQ29scyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY29scywgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdG90YWxDb2xzID0gY29scyB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbik7XG4gICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1mb3JtLWVsZW1lbnRfX3JvdycpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHJvd0NsYXNzTmFtZXMgfT5cbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGQuYmluZCh0aGlzLCB0b3RhbENvbHMpKSB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJvdy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuUm93LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xuXG5GaWVsZFNldC5Sb3cgPSBSb3c7XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkU2V0O1xuIl19