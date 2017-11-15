'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToday = exports.uuid = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.setAssetRoot = setAssetRoot;
exports.getAssetRoot = getAssetRoot;
exports.registerStyle = registerStyle;
exports.isElInChildren = isElInChildren;
exports.offset = offset;
exports.cleanProps = cleanProps;

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = exports.uuid = process.env.NODE_ENV === 'test' ? function () {
  return '$uuid$';
} : _uuid2.default;

var getToday = exports.getToday = process.env.NODE_ENV === 'test' ? function () {
  return '2017-02-23';
} : function () {
  return new Date().toISOString().substring(0, 10);
};

var assetRoot = '/assets';

function setAssetRoot(path) {
  assetRoot = path;
}

function getAssetRoot() {
  return assetRoot;
}

function registerStyle(styleName, rules) {
  var styleId = 'react-slds-cssfix-' + styleName;
  var style = document.getElementById(styleId);
  if (style) {
    return;
  }
  style = document.createElement('style');
  style.id = styleId;
  style.appendChild(document.createTextNode(''));
  document.documentElement.appendChild(style);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(rules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ruleSet = _step.value;

      var declaration = ruleSet.pop();
      var selectors = ruleSet;
      selectors = selectors.concat(selectors.map(function (s) {
        return '.slds ' + s;
      }));
      var rule = selectors.join(', ') + ' ' + declaration;
      style.sheet.insertRule(rule, 0);
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
}

function isElInChildren(rootEl, targetEl) {
  /* eslint-disable no-param-reassign */
  while (targetEl && targetEl !== rootEl) {
    targetEl = targetEl.parentNode;
  }

  return !!targetEl;
}

function offset(el) {
  var rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

function cleanProps(props, propTypes) {
  var newProps = props;
  (0, _keys2.default)(propTypes).forEach(function (key) {
    delete newProps[key];
  });
  return newProps;
}

exports.default = { setAssetRoot: setAssetRoot, getAssetRoot: getAssetRoot, registerStyle: registerStyle, isElInChildren: isElInChildren, offset: offset, cleanProps: cleanProps };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOlsic2V0QXNzZXRSb290IiwiZ2V0QXNzZXRSb290IiwicmVnaXN0ZXJTdHlsZSIsImlzRWxJbkNoaWxkcmVuIiwib2Zmc2V0IiwiY2xlYW5Qcm9wcyIsInV1aWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJnZXRUb2RheSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImFzc2V0Um9vdCIsInBhdGgiLCJzdHlsZU5hbWUiLCJydWxlcyIsInN0eWxlSWQiLCJzdHlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwicnVsZVNldCIsImRlY2xhcmF0aW9uIiwicG9wIiwic2VsZWN0b3JzIiwiY29uY2F0IiwibWFwIiwicyIsInJ1bGUiLCJqb2luIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicm9vdEVsIiwidGFyZ2V0RWwiLCJwYXJlbnROb2RlIiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm9keSIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicHJvcHMiLCJwcm9wVHlwZXMiLCJuZXdQcm9wcyIsImZvckVhY2giLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQWNnQkEsWSxHQUFBQSxZO1FBSUFDLFksR0FBQUEsWTtRQUlBQyxhLEdBQUFBLGE7UUFpQkFDLGMsR0FBQUEsYztRQVNBQyxNLEdBQUFBLE07UUFTQUMsVSxHQUFBQSxVOztBQXpEaEI7Ozs7OztBQUVPLElBQU1DLHNCQUNYQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFBekIsR0FDQTtBQUFBLFNBQU0sUUFBTjtBQUFBLENBREEsaUJBREs7O0FBS0EsSUFBTUMsOEJBQ1hILFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF6QixHQUNBO0FBQUEsU0FBTSxZQUFOO0FBQUEsQ0FEQSxHQUVBO0FBQUEsU0FBTSxJQUFJRSxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQU47QUFBQSxDQUhLOztBQUtQLElBQUlDLFlBQVksU0FBaEI7O0FBRU8sU0FBU2QsWUFBVCxDQUFzQmUsSUFBdEIsRUFBNEI7QUFDakNELGNBQVlDLElBQVo7QUFDRDs7QUFFTSxTQUFTZCxZQUFULEdBQXdCO0FBQzdCLFNBQU9hLFNBQVA7QUFDRDs7QUFFTSxTQUFTWixhQUFULENBQXVCYyxTQUF2QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDOUMsTUFBTUMsaUNBQStCRixTQUFyQztBQUNBLE1BQUlHLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0JILE9BQXhCLENBQVo7QUFDQSxNQUFJQyxLQUFKLEVBQVc7QUFBRTtBQUFTO0FBQ3RCQSxVQUFRQyxTQUFTRSxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFDQUgsUUFBTUksRUFBTixHQUFXTCxPQUFYO0FBQ0FDLFFBQU1LLFdBQU4sQ0FBa0JKLFNBQVNLLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBbEI7QUFDQUwsV0FBU00sZUFBVCxDQUF5QkYsV0FBekIsQ0FBcUNMLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0JGLEtBQXRCLDRHQUE2QjtBQUFBLFVBQWxCVSxPQUFrQjs7QUFDM0IsVUFBTUMsY0FBY0QsUUFBUUUsR0FBUixFQUFwQjtBQUNBLFVBQUlDLFlBQVlILE9BQWhCO0FBQ0FHLGtCQUFZQSxVQUFVQyxNQUFWLENBQWlCRCxVQUFVRSxHQUFWLENBQWM7QUFBQSwwQkFBY0MsQ0FBZDtBQUFBLE9BQWQsQ0FBakIsQ0FBWjtBQUNBLFVBQU1DLE9BQVVKLFVBQVVLLElBQVYsQ0FBZSxJQUFmLENBQVYsU0FBa0NQLFdBQXhDO0FBQ0FULFlBQU1pQixLQUFOLENBQVlDLFVBQVosQ0FBdUJILElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7QUFFTSxTQUFTL0IsY0FBVCxDQUF3Qm1DLE1BQXhCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUMvQztBQUNBLFNBQU9BLFlBQVlBLGFBQWFELE1BQWhDLEVBQXdDO0FBQ3RDQyxlQUFXQSxTQUFTQyxVQUFwQjtBQUNEOztBQUVELFNBQU8sQ0FBQyxDQUFDRCxRQUFUO0FBQ0Q7O0FBRU0sU0FBU25DLE1BQVQsQ0FBZ0JxQyxFQUFoQixFQUFvQjtBQUN6QixNQUFNQyxPQUFPRCxHQUFHRSxxQkFBSCxFQUFiOztBQUVBLFNBQU87QUFDTEMsU0FBS0YsS0FBS0UsR0FBTCxHQUFXeEIsU0FBU3lCLElBQVQsQ0FBY0MsU0FEekI7QUFFTEMsVUFBTUwsS0FBS0ssSUFBTCxHQUFZM0IsU0FBU3lCLElBQVQsQ0FBY0c7QUFGM0IsR0FBUDtBQUlEOztBQUVNLFNBQVMzQyxVQUFULENBQW9CNEMsS0FBcEIsRUFBMkJDLFNBQTNCLEVBQXNDO0FBQzNDLE1BQU1DLFdBQVdGLEtBQWpCO0FBQ0Esc0JBQVlDLFNBQVosRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEdBQUQsRUFBUztBQUN0QyxXQUFPRixTQUFTRSxHQUFULENBQVA7QUFDRCxHQUZEO0FBR0EsU0FBT0YsUUFBUDtBQUNEOztrQkFHYyxFQUFFbkQsMEJBQUYsRUFBZ0JDLDBCQUFoQixFQUE4QkMsNEJBQTlCLEVBQTZDQyw4QkFBN0MsRUFBNkRDLGNBQTdELEVBQXFFQyxzQkFBckUsRSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVVVSUQgZnJvbSAndXVpZCc7XG5cbmV4cG9ydCBjb25zdCB1dWlkID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/XG4gICgpID0+ICckdXVpZCQnIDpcbiAgY3JlYXRlVVVJRDtcblxuZXhwb3J0IGNvbnN0IGdldFRvZGF5ID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/XG4gICgpID0+ICcyMDE3LTAyLTIzJyA6XG4gICgpID0+IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuXG5sZXQgYXNzZXRSb290ID0gJy9hc3NldHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXNzZXRSb290KHBhdGgpIHtcbiAgYXNzZXRSb290ID0gcGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzc2V0Um9vdCgpIHtcbiAgcmV0dXJuIGFzc2V0Um9vdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGUoc3R5bGVOYW1lLCBydWxlcykge1xuICBjb25zdCBzdHlsZUlkID0gYHJlYWN0LXNsZHMtY3NzZml4LSR7c3R5bGVOYW1lfWA7XG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpO1xuICBpZiAoc3R5bGUpIHsgcmV0dXJuOyB9XG4gIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUuaWQgPSBzdHlsZUlkO1xuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBmb3IgKGNvbnN0IHJ1bGVTZXQgb2YgcnVsZXMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHJ1bGVTZXQucG9wKCk7XG4gICAgbGV0IHNlbGVjdG9ycyA9IHJ1bGVTZXQ7XG4gICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbmNhdChzZWxlY3RvcnMubWFwKHMgPT4gYC5zbGRzICR7c31gKSk7XG4gICAgY29uc3QgcnVsZSA9IGAke3NlbGVjdG9ycy5qb2luKCcsICcpfSAke2RlY2xhcmF0aW9ufWA7XG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbEluQ2hpbGRyZW4ocm9vdEVsLCB0YXJnZXRFbCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICB3aGlsZSAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwgIT09IHJvb3RFbCkge1xuICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiAhIXRhcmdldEVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0KGVsKSB7XG4gIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICBsZWZ0OiByZWN0LmxlZnQgKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhblByb3BzKHByb3BzLCBwcm9wVHlwZXMpIHtcbiAgY29uc3QgbmV3UHJvcHMgPSBwcm9wcztcbiAgT2JqZWN0LmtleXMocHJvcFR5cGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBkZWxldGUgbmV3UHJvcHNba2V5XTtcbiAgfSk7XG4gIHJldHVybiBuZXdQcm9wcztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7IHNldEFzc2V0Um9vdCwgZ2V0QXNzZXRSb290LCByZWdpc3RlclN0eWxlLCBpc0VsSW5DaGlsZHJlbiwgb2Zmc2V0LCBjbGVhblByb3BzIH07XG4iXX0=