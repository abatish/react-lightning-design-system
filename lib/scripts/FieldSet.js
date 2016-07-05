'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldSet = function (_React$Component) {
  (0, _inherits3.default)(FieldSet, _React$Component);

  function FieldSet() {
    (0, _classCallCheck3.default)(this, FieldSet);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FieldSet).apply(this, arguments));
  }

  (0, _createClass3.default)(FieldSet, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'children']);

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
    }
  }]);
  return FieldSet;
}(_react2.default.Component);

FieldSet.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};

FieldSet.isFormElement = true;

var Row = function (_React$Component2) {
  (0, _inherits3.default)(Row, _React$Component2);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderChild',
    value: function renderChild(totalCols, child) {
      var klass = child.type;
      if (!klass.isFormElement) {
        var _child$props = child.props;
        var _child$props$id = _child$props.id;
        var id = _child$props$id === undefined ? 'form-element-' + (0, _uuid2.default)() : _child$props$id;
        var label = _child$props.label;
        var required = _child$props.required;
        var error = _child$props.error;
        var cols = _child$props.cols;
        var children = _child$props.children;
        var props = (0, _objectWithoutProperties3.default)(_child$props, ['id', 'label', 'required', 'error', 'cols', 'children']);

        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(child, { id: id, label: undefined, required: undefined, error: undefined })
        );
      }
      return _react2.default.cloneElement(child, { totalCols: totalCols });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var cols = _props2.cols;
      var children = _props2.children;

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
}(_react2.default.Component);

Row.propTypes = {
  className: _react.PropTypes.string,
  cols: _react.PropTypes.number,
  children: _react.PropTypes.node
};

Row.isFormElement = true;

FieldSet.Row = Row;

exports.default = FieldSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ZpZWxkU2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR00sUTs7Ozs7Ozs7Ozs2QkFDSztBQUFBLG1CQUMwQyxLQUFLLEtBRC9DO0FBQUEsVUFDQyxTQURELFVBQ0MsU0FERDtBQUFBLFVBQ1ksS0FEWixVQUNZLEtBRFo7QUFBQSxVQUNtQixRQURuQixVQUNtQixRQURuQjtBQUFBLFVBQ2dDLEtBRGhDOztBQUVQLFVBQU0sZUFBZSwwQkFBVyxTQUFYLHdCQUFyQjtBQUNBLGFBQ0U7QUFBQTtRQUFBLHlCQUFVLFdBQVksWUFBdEIsSUFBMEMsS0FBMUM7UUFFSSxRQUNBO0FBQUE7VUFBQSxFQUFRLFdBQVUsMEJBQWxCO1VBQStDO0FBQS9DLFNBREEsR0FFQSxJQUpKO1FBTUU7QUFBQTtVQUFBLEVBQUssV0FBVSxxQkFBZjtVQUNJO0FBREo7QUFORixPQURGO0FBWUQ7OztFQWhCb0IsZ0JBQU0sUzs7QUFtQjdCLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixhQUFXLGlCQUFVLE1BREY7QUFFbkIsU0FBTyxpQkFBVSxNQUZFO0FBR25CLFlBQVUsaUJBQVU7QUFIRCxDQUFyQjs7QUFNQSxTQUFTLGFBQVQsR0FBeUIsSUFBekI7O0lBR00sRzs7Ozs7Ozs7OztnQ0FDUSxTLEVBQVcsSyxFQUFPO0FBQzVCLFVBQU0sUUFBUSxNQUFNLElBQXBCO0FBQ0EsVUFBSSxDQUFDLE1BQU0sYUFBWCxFQUEwQjtBQUFBLDJCQUNvRSxNQUFNLEtBRDFFO0FBQUEsMkNBQ2hCLEVBRGdCO0FBQUEsWUFDaEIsRUFEZ0IscURBQ0sscUJBREw7QUFBQSxZQUNlLEtBRGYsZ0JBQ2UsS0FEZjtBQUFBLFlBQ3NCLFFBRHRCLGdCQUNzQixRQUR0QjtBQUFBLFlBQ2dDLEtBRGhDLGdCQUNnQyxLQURoQztBQUFBLFlBQ3VDLElBRHZDLGdCQUN1QyxJQUR2QztBQUFBLFlBQzZDLFFBRDdDLGdCQUM2QyxRQUQ3QztBQUFBLFlBQzBELEtBRDFEOztBQUV4QixZQUFNLGdCQUFnQixFQUFFLE1BQUYsRUFBTSxZQUFOLEVBQWEsa0JBQWIsRUFBdUIsWUFBdkIsRUFBOEIsb0JBQTlCLEVBQXlDLFVBQXpDLEVBQXRCO0FBQ0EsZUFDRTtBQUFBO1VBQWtCLGFBQWxCO1VBQ0ksZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUEwQixFQUFFLE1BQUYsRUFBTSxPQUFPLFNBQWIsRUFBd0IsVUFBVSxTQUFsQyxFQUE2QyxPQUFPLFNBQXBELEVBQTFCO0FBREosU0FERjtBQUtEO0FBQ0QsYUFBTyxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEVBQUUsb0JBQUYsRUFBMUIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxvQkFDK0IsS0FBSyxLQURwQztBQUFBLFVBQ0MsU0FERCxXQUNDLFNBREQ7QUFBQSxVQUNZLElBRFosV0FDWSxJQURaO0FBQUEsVUFDa0IsUUFEbEIsV0FDa0IsUUFEbEI7O0FBRVAsVUFBTSxZQUFZLFFBQVEsZ0JBQU0sUUFBTixDQUFlLEtBQWYsQ0FBcUIsUUFBckIsQ0FBMUI7QUFDQSxVQUFNLGdCQUFnQiwwQkFBVyxTQUFYLEVBQXNCLHdCQUF0QixDQUF0QjtBQUNBLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBWSxhQUFqQjtRQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixFQUE0QixTQUE1QixDQUE3QjtBQURKLE9BREY7QUFLRDs7O0VBeEJlLGdCQUFNLFM7O0FBMkJ4QixJQUFJLFNBQUosR0FBZ0I7QUFDZCxhQUFXLGlCQUFVLE1BRFA7QUFFZCxRQUFNLGlCQUFVLE1BRkY7QUFHZCxZQUFVLGlCQUFVO0FBSE4sQ0FBaEI7O0FBTUEsSUFBSSxhQUFKLEdBQW9CLElBQXBCOztBQUVBLFNBQVMsR0FBVCxHQUFlLEdBQWY7O2tCQUVlLFEiLCJmaWxlIjoiRmllbGRTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcblxuXG5jbGFzcyBGaWVsZFNldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmc0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtZm9ybS0tY29tcG91bmRgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGZzQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsID9cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsJz57IGxhYmVsIH08L2xlZ2VuZD4gOlxuICAgICAgICAgIG51bGxcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1lbGVtZW50X19ncm91cCc+XG4gICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICApO1xuICB9XG59XG5cbkZpZWxkU2V0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuRmllbGRTZXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XG5cblxuY2xhc3MgUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ2hpbGQodG90YWxDb2xzLCBjaGlsZCkge1xuICAgIGNvbnN0IGtsYXNzID0gY2hpbGQudHlwZTtcbiAgICBpZiAoIWtsYXNzLmlzRm9ybUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHsgaWQgPSBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGNvbHMsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gY2hpbGQucHJvcHM7XG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgaWQsIGxhYmVsOiB1bmRlZmluZWQsIHJlcXVpcmVkOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQgfSkgfVxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgeyB0b3RhbENvbHMgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNvbHMsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pO1xuICAgIGNvbnN0IHJvd0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtZm9ybS1lbGVtZW50X19yb3cnKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyByb3dDbGFzc05hbWVzIH0+XG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkLmJpbmQodGhpcywgdG90YWxDb2xzKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cblJvdy5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcblxuRmllbGRTZXQuUm93ID0gUm93O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFNldDtcbiJdfQ==