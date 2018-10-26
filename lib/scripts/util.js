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

var _reactRelativePortal = require('react-relative-portal');

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

exports.default = {
  setAssetRoot: setAssetRoot,
  getAssetRoot: getAssetRoot,
  registerStyle: registerStyle,
  isElInChildren: isElInChildren,
  offset: offset,
  cleanProps: cleanProps,
  updateScroll: _reactRelativePortal.updateScroll
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOlsic2V0QXNzZXRSb290IiwiZ2V0QXNzZXRSb290IiwicmVnaXN0ZXJTdHlsZSIsImlzRWxJbkNoaWxkcmVuIiwib2Zmc2V0IiwiY2xlYW5Qcm9wcyIsInV1aWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJnZXRUb2RheSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN1YnN0cmluZyIsImFzc2V0Um9vdCIsInBhdGgiLCJzdHlsZU5hbWUiLCJydWxlcyIsInN0eWxlSWQiLCJzdHlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiZG9jdW1lbnRFbGVtZW50IiwicnVsZVNldCIsImRlY2xhcmF0aW9uIiwicG9wIiwic2VsZWN0b3JzIiwiY29uY2F0IiwibWFwIiwicyIsInJ1bGUiLCJqb2luIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicm9vdEVsIiwidGFyZ2V0RWwiLCJwYXJlbnROb2RlIiwiZWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm9keSIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwicHJvcHMiLCJwcm9wVHlwZXMiLCJuZXdQcm9wcyIsImZvckVhY2giLCJrZXkiLCJ1cGRhdGVTY3JvbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztRQWVnQkEsWSxHQUFBQSxZO1FBSUFDLFksR0FBQUEsWTtRQUlBQyxhLEdBQUFBLGE7UUFpQkFDLGMsR0FBQUEsYztRQVNBQyxNLEdBQUFBLE07UUFTQUMsVSxHQUFBQSxVOztBQTFEaEI7Ozs7QUFDQTs7OztBQUVPLElBQU1DLHNCQUNYQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFBekIsR0FDQTtBQUFBLFNBQU0sUUFBTjtBQUFBLENBREEsaUJBREs7O0FBS0EsSUFBTUMsOEJBQ1hILFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF6QixHQUNBO0FBQUEsU0FBTSxZQUFOO0FBQUEsQ0FEQSxHQUVBO0FBQUEsU0FBTSxJQUFJRSxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQU47QUFBQSxDQUhLOztBQUtQLElBQUlDLFlBQVksU0FBaEI7O0FBRU8sU0FBU2QsWUFBVCxDQUFzQmUsSUFBdEIsRUFBNEI7QUFDakNELGNBQVlDLElBQVo7QUFDRDs7QUFFTSxTQUFTZCxZQUFULEdBQXdCO0FBQzdCLFNBQU9hLFNBQVA7QUFDRDs7QUFFTSxTQUFTWixhQUFULENBQXVCYyxTQUF2QixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDOUMsTUFBTUMsaUNBQStCRixTQUFyQztBQUNBLE1BQUlHLFFBQVFDLFNBQVNDLGNBQVQsQ0FBd0JILE9BQXhCLENBQVo7QUFDQSxNQUFJQyxLQUFKLEVBQVc7QUFBRTtBQUFTO0FBQ3RCQSxVQUFRQyxTQUFTRSxhQUFULENBQXVCLE9BQXZCLENBQVI7QUFDQUgsUUFBTUksRUFBTixHQUFXTCxPQUFYO0FBQ0FDLFFBQU1LLFdBQU4sQ0FBa0JKLFNBQVNLLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBbEI7QUFDQUwsV0FBU00sZUFBVCxDQUF5QkYsV0FBekIsQ0FBcUNMLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0JGLEtBQXRCLDRHQUE2QjtBQUFBLFVBQWxCVSxPQUFrQjs7QUFDM0IsVUFBTUMsY0FBY0QsUUFBUUUsR0FBUixFQUFwQjtBQUNBLFVBQUlDLFlBQVlILE9BQWhCO0FBQ0FHLGtCQUFZQSxVQUFVQyxNQUFWLENBQWlCRCxVQUFVRSxHQUFWLENBQWM7QUFBQSwwQkFBY0MsQ0FBZDtBQUFBLE9BQWQsQ0FBakIsQ0FBWjtBQUNBLFVBQU1DLE9BQVVKLFVBQVVLLElBQVYsQ0FBZSxJQUFmLENBQVYsU0FBa0NQLFdBQXhDO0FBQ0FULFlBQU1pQixLQUFOLENBQVlDLFVBQVosQ0FBdUJILElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7QUFFTSxTQUFTL0IsY0FBVCxDQUF3Qm1DLE1BQXhCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUMvQztBQUNBLFNBQU9BLFlBQVlBLGFBQWFELE1BQWhDLEVBQXdDO0FBQ3RDQyxlQUFXQSxTQUFTQyxVQUFwQjtBQUNEOztBQUVELFNBQU8sQ0FBQyxDQUFDRCxRQUFUO0FBQ0Q7O0FBRU0sU0FBU25DLE1BQVQsQ0FBZ0JxQyxFQUFoQixFQUFvQjtBQUN6QixNQUFNQyxPQUFPRCxHQUFHRSxxQkFBSCxFQUFiOztBQUVBLFNBQU87QUFDTEMsU0FBS0YsS0FBS0UsR0FBTCxHQUFXeEIsU0FBU3lCLElBQVQsQ0FBY0MsU0FEekI7QUFFTEMsVUFBTUwsS0FBS0ssSUFBTCxHQUFZM0IsU0FBU3lCLElBQVQsQ0FBY0c7QUFGM0IsR0FBUDtBQUlEOztBQUVNLFNBQVMzQyxVQUFULENBQW9CNEMsS0FBcEIsRUFBMkJDLFNBQTNCLEVBQXNDO0FBQzNDLE1BQU1DLFdBQVdGLEtBQWpCO0FBQ0Esc0JBQVlDLFNBQVosRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEdBQUQsRUFBUztBQUN0QyxXQUFPRixTQUFTRSxHQUFULENBQVA7QUFDRCxHQUZEO0FBR0EsU0FBT0YsUUFBUDtBQUNEOztrQkFHYztBQUNibkQsNEJBRGE7QUFFYkMsNEJBRmE7QUFHYkMsOEJBSGE7QUFJYkMsZ0NBSmE7QUFLYkMsZ0JBTGE7QUFNYkMsd0JBTmE7QUFPYmlEO0FBUGEsQyIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVVVSUQgZnJvbSAndXVpZCc7XG5pbXBvcnQgeyB1cGRhdGVTY3JvbGwgfSBmcm9tICdyZWFjdC1yZWxhdGl2ZS1wb3J0YWwnO1xuXG5leHBvcnQgY29uc3QgdXVpZCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgP1xuICAoKSA9PiAnJHV1aWQkJyA6XG4gIGNyZWF0ZVVVSUQ7XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RheSA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgP1xuICAoKSA9PiAnMjAxNy0wMi0yMycgOlxuICAoKSA9PiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcblxubGV0IGFzc2V0Um9vdCA9ICcvYXNzZXRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFzc2V0Um9vdChwYXRoKSB7XG4gIGFzc2V0Um9vdCA9IHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldFJvb3QoKSB7XG4gIHJldHVybiBhc3NldFJvb3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0eWxlKHN0eWxlTmFtZSwgcnVsZXMpIHtcbiAgY29uc3Qgc3R5bGVJZCA9IGByZWFjdC1zbGRzLWNzc2ZpeC0ke3N0eWxlTmFtZX1gO1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcbiAgaWYgKHN0eWxlKSB7IHJldHVybjsgfVxuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZm9yIChjb25zdCBydWxlU2V0IG9mIHJ1bGVzKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xuICAgIGxldCBzZWxlY3RvcnMgPSBydWxlU2V0O1xuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb25jYXQoc2VsZWN0b3JzLm1hcChzID0+IGAuc2xkcyAke3N9YCkpO1xuICAgIGNvbnN0IHJ1bGUgPSBgJHtzZWxlY3RvcnMuam9pbignLCAnKX0gJHtkZWNsYXJhdGlvbn1gO1xuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxJbkNoaWxkcmVuKHJvb3RFbCwgdGFyZ2V0RWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gISF0YXJnZXRFbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChlbCkge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Qcm9wcyhwcm9wcywgcHJvcFR5cGVzKSB7XG4gIGNvbnN0IG5ld1Byb3BzID0gcHJvcHM7XG4gIE9iamVjdC5rZXlzKHByb3BUeXBlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIG5ld1Byb3BzW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV3UHJvcHM7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBc3NldFJvb3QsXG4gIGdldEFzc2V0Um9vdCxcbiAgcmVnaXN0ZXJTdHlsZSxcbiAgaXNFbEluQ2hpbGRyZW4sXG4gIG9mZnNldCxcbiAgY2xlYW5Qcm9wcyxcbiAgdXBkYXRlU2Nyb2xsLFxufTtcbiJdfQ==