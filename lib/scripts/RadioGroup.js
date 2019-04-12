'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    (0, _classCallCheck3.default)(this, RadioGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call(this));

    _this.renderControl = _this.renderControl.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'onControlChange',
    value: function onControlChange(value, e) {
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(radio) {
      return this.props.name ? _react2.default.cloneElement(radio, {
        name: this.props.name,
        onChange: this.onControlChange.bind(this, radio.props.value)
      }) : radio;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          label = _props.label,
          required = _props.required,
          error = _props.error,
          totalCols = _props.totalCols,
          cols = _props.cols,
          style = _props.style,
          children = _props.children,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'required', 'error', 'totalCols', 'cols', 'style', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;

      delete props.onChange;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles }, props),
        _react2.default.createElement(
          'legend',
          { className: 'slds-form-element__label slds-form-element__label--top' },
          label,
          required ? _react2.default.createElement(
            'abbr',
            { className: 'slds-required' },
            '*'
          ) : undefined
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-form-element__control' },
          _react2.default.Children.map(children, this.renderControl),
          errorMessage ? _react2.default.createElement(
            'div',
            { className: 'slds-form-element__help' },
            errorMessage
          ) : undefined
        )
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  error: _FormElement2.default.propTypes.error,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  totalCols: _propTypes2.default.number,
  cols: _propTypes2.default.number,
  children: _propTypes2.default.node,
  /* eslint-disable react/forbid-prop-types */
  style: _propTypes2.default.object
};

RadioGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOlsiUmFkaW9Hcm91cCIsInJlbmRlckNvbnRyb2wiLCJiaW5kIiwidmFsdWUiLCJlIiwicHJvcHMiLCJvbkNoYW5nZSIsInJhZGlvIiwibmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50Iiwib25Db250cm9sQ2hhbmdlIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJyZXF1aXJlZCIsImVycm9yIiwidG90YWxDb2xzIiwiY29scyIsInN0eWxlIiwiY2hpbGRyZW4iLCJncnBDbGFzc05hbWVzIiwiZ3JwU3R5bGVzIiwiZGlzcGxheSIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJDaGlsZHJlbiIsIm1hcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJGb3JtRWxlbWVudCIsImZ1bmMiLCJudW1iZXIiLCJub2RlIiwib2JqZWN0IiwiaXNGb3JtRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxVOzs7QUFDbkIsd0JBQWM7QUFBQTs7QUFBQTs7QUFHWixVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBSFk7QUFJYjs7OztvQ0FFZUMsSyxFQUFPQyxDLEVBQUc7QUFDeEIsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxRQUFYLENBQW9CRixDQUFwQixFQUF1QkQsS0FBdkI7QUFDRDtBQUNGOzs7a0NBRWFJLEssRUFBTztBQUNuQixhQUNFLEtBQUtGLEtBQUwsQ0FBV0csSUFBWCxHQUNFQyxnQkFBTUMsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDeEJDLGNBQU0sS0FBS0gsS0FBTCxDQUFXRyxJQURPO0FBRXhCRixrQkFBVSxLQUFLSyxlQUFMLENBQXFCVCxJQUFyQixDQUEwQixJQUExQixFQUFnQ0ssTUFBTUYsS0FBTixDQUFZRixLQUE1QztBQUZjLE9BQTFCLENBREYsR0FLRUksS0FOSjtBQVFEOzs7NkJBRVE7QUFBQSxtQkFHSCxLQUFLRixLQUhGO0FBQUEsVUFFTE8sU0FGSyxVQUVMQSxTQUZLO0FBQUEsVUFFTUMsS0FGTixVQUVNQSxLQUZOO0FBQUEsVUFFYUMsUUFGYixVQUVhQSxRQUZiO0FBQUEsVUFFdUJDLEtBRnZCLFVBRXVCQSxLQUZ2QjtBQUFBLFVBRThCQyxTQUY5QixVQUU4QkEsU0FGOUI7QUFBQSxVQUV5Q0MsSUFGekMsVUFFeUNBLElBRnpDO0FBQUEsVUFFK0NDLEtBRi9DLFVBRStDQSxLQUYvQztBQUFBLFVBRXNEQyxRQUZ0RCxVQUVzREEsUUFGdEQ7QUFBQSxVQUVtRWQsS0FGbkU7O0FBSVAsVUFBTWUsZ0JBQWdCLDBCQUNwQlIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCRyxLQURwQjtBQUVFLDRCQUFvQkQ7QUFGdEIsT0FIb0IsRUFPcEIsT0FBT0UsU0FBUCxLQUFxQixRQUFyQixvQkFBOENDLFFBQVEsQ0FBdEQsYUFBOERELFNBQTlELEdBQTRFLElBUHhELENBQXRCO0FBU0EsVUFBTUssWUFBWSxPQUFPTCxTQUFQLEtBQXFCLFFBQXJCLDRCQUFrQ00sU0FBUyxjQUEzQyxJQUE4REosS0FBOUQsSUFBd0VBLEtBQTFGO0FBQ0EsVUFBTUssZUFDSlIsUUFDQyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCQSxLQUE1QixHQUNBLFFBQU9BLEtBQVAsdURBQU9BLEtBQVAsT0FBaUIsUUFBakIsR0FBNEJBLE1BQU1TLE9BQWxDLEdBQ0FDLFNBSEQsR0FJQUEsU0FMRjs7QUFPQSxhQUFPcEIsTUFBTUMsUUFBYjtBQUNBLGFBQ0U7QUFBQTtBQUFBLGlDQUFVLFdBQVljLGFBQXRCLEVBQXNDLE9BQVFDLFNBQTlDLElBQStEaEIsS0FBL0Q7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLHdEQUFsQjtBQUNJUSxlQURKO0FBR0lDLHFCQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsZUFBaEI7QUFBQTtBQUFBLFdBREYsR0FFRVc7QUFMTixTQURGO0FBU0U7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNJaEIsMEJBQU1pQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLEtBQUtsQixhQUFsQyxDQURKO0FBR0lzQix5QkFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHlCQUFmO0FBQTJDQTtBQUEzQyxXQURGLEdBRUVFO0FBTE47QUFURixPQURGO0FBb0JEOzs7RUFsRXFDaEIsZ0JBQU1tQixTOztrQkFBekI1QixVOzs7QUFzRXJCQSxXQUFXNkIsU0FBWCxHQUF1QjtBQUNyQmpCLGFBQVdrQixvQkFBVUMsTUFEQTtBQUVyQmxCLFNBQU9pQixvQkFBVUMsTUFGSTtBQUdyQmpCLFlBQVVnQixvQkFBVUUsSUFIQztBQUlyQmpCLFNBQU9rQixzQkFBWUosU0FBWixDQUFzQmQsS0FKUjtBQUtyQlAsUUFBTXNCLG9CQUFVQyxNQUxLO0FBTXJCekIsWUFBVXdCLG9CQUFVSSxJQU5DO0FBT3JCbEIsYUFBV2Msb0JBQVVLLE1BUEE7QUFRckJsQixRQUFNYSxvQkFBVUssTUFSSztBQVNyQmhCLFlBQVVXLG9CQUFVTSxJQVRDO0FBVXJCO0FBQ0FsQixTQUFPWSxvQkFBVU87QUFYSSxDQUF2Qjs7QUFjQXJDLFdBQVdzQyxhQUFYLEdBQTJCLElBQTNCIiwiZmlsZSI6IlJhZGlvR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRpb0dyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMucmVuZGVyQ29udHJvbCA9IHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25Db250cm9sQ2hhbmdlKHZhbHVlLCBlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNvbnRyb2wocmFkaW8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5uYW1lID9cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHJhZGlvLCB7XG4gICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ29udHJvbENoYW5nZS5iaW5kKHRoaXMsIHJhZGlvLnByb3BzLnZhbHVlKSxcbiAgICAgICAgfSkgOlxuICAgICAgICByYWRpb1xuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCBjaGlsZHJlbiwgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXG4gICAgICB7XG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxuICAgICAgICAnc2xkcy1pcy1yZXF1aXJlZCc6IHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXG4gICAgKTtcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxuICAgICAgZXJyb3IgP1xuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgIHVuZGVmaW5lZCkgOlxuICAgICAgdW5kZWZpbmVkO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uQ2hhbmdlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPXsgZ3JwQ2xhc3NOYW1lcyB9IHN0eWxlPXsgZ3JwU3R5bGVzIH0geyAuLi5wcm9wcyB9ID5cbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XG4gICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQgP1xuICAgICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb250cm9sKSB9XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9kaXY+IDpcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgKTtcbiAgfVxuXG59XG5cblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBGb3JtRWxlbWVudC5wcm9wVHlwZXMuZXJyb3IsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuUmFkaW9Hcm91cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==