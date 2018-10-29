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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOlsic2V0QXNzZXRSb290IiwiZ2V0QXNzZXRSb290IiwicmVnaXN0ZXJTdHlsZSIsImlzRWxJbkNoaWxkcmVuIiwib2Zmc2V0IiwiY2xlYW5Qcm9wcyIsInV1aWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjcmVhdGVVVUlEIiwiZ2V0VG9kYXkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJhc3NldFJvb3QiLCJwYXRoIiwic3R5bGVOYW1lIiwicnVsZXMiLCJzdHlsZUlkIiwic3R5bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsInJ1bGVTZXQiLCJkZWNsYXJhdGlvbiIsInBvcCIsInNlbGVjdG9ycyIsImNvbmNhdCIsIm1hcCIsInMiLCJydWxlIiwiam9pbiIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJvb3RFbCIsInRhcmdldEVsIiwicGFyZW50Tm9kZSIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvZHkiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInByb3BzIiwicHJvcFR5cGVzIiwibmV3UHJvcHMiLCJmb3JFYWNoIiwia2V5IiwidXBkYXRlU2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFlZ0JBLFksR0FBQUEsWTtRQUlBQyxZLEdBQUFBLFk7UUFJQUMsYSxHQUFBQSxhO1FBaUJBQyxjLEdBQUFBLGM7UUFTQUMsTSxHQUFBQSxNO1FBU0FDLFUsR0FBQUEsVTs7QUExRGhCOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQyxzQkFDWEMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQXpCLEdBQ0E7QUFBQSxTQUFNLFFBQU47QUFBQSxDQURBLEdBRUFDLGNBSEs7O0FBS0EsSUFBTUMsOEJBQ1hKLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF6QixHQUNBO0FBQUEsU0FBTSxZQUFOO0FBQUEsQ0FEQSxHQUVBO0FBQUEsU0FBTSxJQUFJRyxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQU47QUFBQSxDQUhLOztBQUtQLElBQUlDLFlBQVksU0FBaEI7O0FBRU8sU0FBU2YsWUFBVCxDQUFzQmdCLElBQXRCLEVBQTRCO0FBQ2pDRCxjQUFZQyxJQUFaO0FBQ0Q7O0FBRU0sU0FBU2YsWUFBVCxHQUF3QjtBQUM3QixTQUFPYyxTQUFQO0FBQ0Q7O0FBRU0sU0FBU2IsYUFBVCxDQUF1QmUsU0FBdkIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU1DLGlDQUErQkYsU0FBckM7QUFDQSxNQUFJRyxRQUFRQyxTQUFTQyxjQUFULENBQXdCSCxPQUF4QixDQUFaO0FBQ0EsTUFBSUMsS0FBSixFQUFXO0FBQUU7QUFBUztBQUN0QkEsVUFBUUMsU0FBU0UsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FILFFBQU1JLEVBQU4sR0FBV0wsT0FBWDtBQUNBQyxRQUFNSyxXQUFOLENBQWtCSixTQUFTSyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0FMLFdBQVNNLGVBQVQsQ0FBeUJGLFdBQXpCLENBQXFDTCxLQUFyQztBQVA4QztBQUFBO0FBQUE7O0FBQUE7QUFROUMsb0RBQXNCRixLQUF0Qiw0R0FBNkI7QUFBQSxVQUFsQlUsT0FBa0I7O0FBQzNCLFVBQU1DLGNBQWNELFFBQVFFLEdBQVIsRUFBcEI7QUFDQSxVQUFJQyxZQUFZSCxPQUFoQjtBQUNBRyxrQkFBWUEsVUFBVUMsTUFBVixDQUFpQkQsVUFBVUUsR0FBVixDQUFjO0FBQUEsMEJBQWNDLENBQWQ7QUFBQSxPQUFkLENBQWpCLENBQVo7QUFDQSxVQUFNQyxPQUFVSixVQUFVSyxJQUFWLENBQWUsSUFBZixDQUFWLFNBQWtDUCxXQUF4QztBQUNBVCxZQUFNaUIsS0FBTixDQUFZQyxVQUFaLENBQXVCSCxJQUF2QixFQUE2QixDQUE3QjtBQUNEO0FBZDZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlL0M7O0FBRU0sU0FBU2hDLGNBQVQsQ0FBd0JvQyxNQUF4QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDL0M7QUFDQSxTQUFPQSxZQUFZQSxhQUFhRCxNQUFoQyxFQUF3QztBQUN0Q0MsZUFBV0EsU0FBU0MsVUFBcEI7QUFDRDs7QUFFRCxTQUFPLENBQUMsQ0FBQ0QsUUFBVDtBQUNEOztBQUVNLFNBQVNwQyxNQUFULENBQWdCc0MsRUFBaEIsRUFBb0I7QUFDekIsTUFBTUMsT0FBT0QsR0FBR0UscUJBQUgsRUFBYjs7QUFFQSxTQUFPO0FBQ0xDLFNBQUtGLEtBQUtFLEdBQUwsR0FBV3hCLFNBQVN5QixJQUFULENBQWNDLFNBRHpCO0FBRUxDLFVBQU1MLEtBQUtLLElBQUwsR0FBWTNCLFNBQVN5QixJQUFULENBQWNHO0FBRjNCLEdBQVA7QUFJRDs7QUFFTSxTQUFTNUMsVUFBVCxDQUFvQjZDLEtBQXBCLEVBQTJCQyxTQUEzQixFQUFzQztBQUMzQyxNQUFNQyxXQUFXRixLQUFqQjtBQUNBLHNCQUFZQyxTQUFaLEVBQXVCRSxPQUF2QixDQUErQixVQUFDQyxHQUFELEVBQVM7QUFDdEMsV0FBT0YsU0FBU0UsR0FBVCxDQUFQO0FBQ0QsR0FGRDtBQUdBLFNBQU9GLFFBQVA7QUFDRDs7a0JBR2M7QUFDYnBELDRCQURhO0FBRWJDLDRCQUZhO0FBR2JDLDhCQUhhO0FBSWJDLGdDQUphO0FBS2JDLGdCQUxhO0FBTWJDLHdCQU5hO0FBT2JrRDtBQVBhLEMiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVVVUlEIGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgdXBkYXRlU2Nyb2xsIH0gZnJvbSAncmVhY3QtcmVsYXRpdmUtcG9ydGFsJztcblxuZXhwb3J0IGNvbnN0IHV1aWQgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID9cbiAgKCkgPT4gJyR1dWlkJCcgOlxuICBjcmVhdGVVVUlEO1xuXG5leHBvcnQgY29uc3QgZ2V0VG9kYXkgPVxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnID9cbiAgKCkgPT4gJzIwMTctMDItMjMnIDpcbiAgKCkgPT4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XG5cbmxldCBhc3NldFJvb3QgPSAnL2Fzc2V0cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xuICBhc3NldFJvb3QgPSBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRSb290KCkge1xuICByZXR1cm4gYXNzZXRSb290O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZShzdHlsZU5hbWUsIHJ1bGVzKSB7XG4gIGNvbnN0IHN0eWxlSWQgPSBgcmVhY3Qtc2xkcy1jc3NmaXgtJHtzdHlsZU5hbWV9YDtcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCk7XG4gIGlmIChzdHlsZSkgeyByZXR1cm47IH1cbiAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5pZCA9IHN0eWxlSWQ7XG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIGZvciAoY29uc3QgcnVsZVNldCBvZiBydWxlcykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gcnVsZVNldC5wb3AoKTtcbiAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcbiAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuY29uY2F0KHNlbGVjdG9ycy5tYXAocyA9PiBgLnNsZHMgJHtzfWApKTtcbiAgICBjb25zdCBydWxlID0gYCR7c2VsZWN0b3JzLmpvaW4oJywgJyl9ICR7ZGVjbGFyYXRpb259YDtcbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIDApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VsSW5DaGlsZHJlbihyb290RWwsIHRhcmdldEVsKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuICEhdGFyZ2V0RWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXQoZWwpIHtcbiAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuUHJvcHMocHJvcHMsIHByb3BUeXBlcykge1xuICBjb25zdCBuZXdQcm9wcyA9IHByb3BzO1xuICBPYmplY3Qua2V5cyhwcm9wVHlwZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSBuZXdQcm9wc1trZXldO1xuICB9KTtcbiAgcmV0dXJuIG5ld1Byb3BzO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXNzZXRSb290LFxuICBnZXRBc3NldFJvb3QsXG4gIHJlZ2lzdGVyU3R5bGUsXG4gIGlzRWxJbkNoaWxkcmVuLFxuICBvZmZzZXQsXG4gIGNsZWFuUHJvcHMsXG4gIHVwZGF0ZVNjcm9sbCxcbn07XG4iXX0=