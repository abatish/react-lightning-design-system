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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOlsic2V0QXNzZXRSb290IiwiZ2V0QXNzZXRSb290IiwicmVnaXN0ZXJTdHlsZSIsImlzRWxJbkNoaWxkcmVuIiwib2Zmc2V0IiwiY2xlYW5Qcm9wcyIsInV1aWQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjcmVhdGVVVUlEIiwiZ2V0VG9kYXkiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdWJzdHJpbmciLCJhc3NldFJvb3QiLCJwYXRoIiwic3R5bGVOYW1lIiwicnVsZXMiLCJzdHlsZUlkIiwic3R5bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImRvY3VtZW50RWxlbWVudCIsInJ1bGVTZXQiLCJkZWNsYXJhdGlvbiIsInBvcCIsInNlbGVjdG9ycyIsImNvbmNhdCIsIm1hcCIsInMiLCJydWxlIiwiam9pbiIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJvb3RFbCIsInRhcmdldEVsIiwicGFyZW50Tm9kZSIsImVsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvZHkiLCJzY3JvbGxUb3AiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInByb3BzIiwicHJvcFR5cGVzIiwibmV3UHJvcHMiLCJmb3JFYWNoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7UUFjZ0JBLFksR0FBQUEsWTtRQUlBQyxZLEdBQUFBLFk7UUFJQUMsYSxHQUFBQSxhO1FBaUJBQyxjLEdBQUFBLGM7UUFTQUMsTSxHQUFBQSxNO1FBU0FDLFUsR0FBQUEsVTs7QUF6RGhCOzs7Ozs7QUFFTyxJQUFNQyxzQkFDWEMsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLE1BQXpCLEdBQ0E7QUFBQSxTQUFNLFFBQU47QUFBQSxDQURBLEdBRUFDLGNBSEs7O0FBS0EsSUFBTUMsOEJBQ1hKLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixNQUF6QixHQUNBO0FBQUEsU0FBTSxZQUFOO0FBQUEsQ0FEQSxHQUVBO0FBQUEsU0FBTSxJQUFJRyxJQUFKLEdBQVdDLFdBQVgsR0FBeUJDLFNBQXpCLENBQW1DLENBQW5DLEVBQXNDLEVBQXRDLENBQU47QUFBQSxDQUhLOztBQUtQLElBQUlDLFlBQVksU0FBaEI7O0FBRU8sU0FBU2YsWUFBVCxDQUFzQmdCLElBQXRCLEVBQTRCO0FBQ2pDRCxjQUFZQyxJQUFaO0FBQ0Q7O0FBRU0sU0FBU2YsWUFBVCxHQUF3QjtBQUM3QixTQUFPYyxTQUFQO0FBQ0Q7O0FBRU0sU0FBU2IsYUFBVCxDQUF1QmUsU0FBdkIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU1DLGlDQUErQkYsU0FBckM7QUFDQSxNQUFJRyxRQUFRQyxTQUFTQyxjQUFULENBQXdCSCxPQUF4QixDQUFaO0FBQ0EsTUFBSUMsS0FBSixFQUFXO0FBQUU7QUFBUztBQUN0QkEsVUFBUUMsU0FBU0UsYUFBVCxDQUF1QixPQUF2QixDQUFSO0FBQ0FILFFBQU1JLEVBQU4sR0FBV0wsT0FBWDtBQUNBQyxRQUFNSyxXQUFOLENBQWtCSixTQUFTSyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0FMLFdBQVNNLGVBQVQsQ0FBeUJGLFdBQXpCLENBQXFDTCxLQUFyQztBQVA4QztBQUFBO0FBQUE7O0FBQUE7QUFROUMsb0RBQXNCRixLQUF0Qiw0R0FBNkI7QUFBQSxVQUFsQlUsT0FBa0I7O0FBQzNCLFVBQU1DLGNBQWNELFFBQVFFLEdBQVIsRUFBcEI7QUFDQSxVQUFJQyxZQUFZSCxPQUFoQjtBQUNBRyxrQkFBWUEsVUFBVUMsTUFBVixDQUFpQkQsVUFBVUUsR0FBVixDQUFjO0FBQUEsMEJBQWNDLENBQWQ7QUFBQSxPQUFkLENBQWpCLENBQVo7QUFDQSxVQUFNQyxPQUFVSixVQUFVSyxJQUFWLENBQWUsSUFBZixDQUFWLFNBQWtDUCxXQUF4QztBQUNBVCxZQUFNaUIsS0FBTixDQUFZQyxVQUFaLENBQXVCSCxJQUF2QixFQUE2QixDQUE3QjtBQUNEO0FBZDZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlL0M7O0FBRU0sU0FBU2hDLGNBQVQsQ0FBd0JvQyxNQUF4QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFDL0M7QUFDQSxTQUFPQSxZQUFZQSxhQUFhRCxNQUFoQyxFQUF3QztBQUN0Q0MsZUFBV0EsU0FBU0MsVUFBcEI7QUFDRDs7QUFFRCxTQUFPLENBQUMsQ0FBQ0QsUUFBVDtBQUNEOztBQUVNLFNBQVNwQyxNQUFULENBQWdCc0MsRUFBaEIsRUFBb0I7QUFDekIsTUFBTUMsT0FBT0QsR0FBR0UscUJBQUgsRUFBYjs7QUFFQSxTQUFPO0FBQ0xDLFNBQUtGLEtBQUtFLEdBQUwsR0FBV3hCLFNBQVN5QixJQUFULENBQWNDLFNBRHpCO0FBRUxDLFVBQU1MLEtBQUtLLElBQUwsR0FBWTNCLFNBQVN5QixJQUFULENBQWNHO0FBRjNCLEdBQVA7QUFJRDs7QUFFTSxTQUFTNUMsVUFBVCxDQUFvQjZDLEtBQXBCLEVBQTJCQyxTQUEzQixFQUFzQztBQUMzQyxNQUFNQyxXQUFXRixLQUFqQjtBQUNBLHNCQUFZQyxTQUFaLEVBQXVCRSxPQUF2QixDQUErQixVQUFDQyxHQUFELEVBQVM7QUFDdEMsV0FBT0YsU0FBU0UsR0FBVCxDQUFQO0FBQ0QsR0FGRDtBQUdBLFNBQU9GLFFBQVA7QUFDRDs7a0JBR2MsRUFBRXBELDBCQUFGLEVBQWdCQywwQkFBaEIsRUFBOEJDLDRCQUE5QixFQUE2Q0MsOEJBQTdDLEVBQTZEQyxjQUE3RCxFQUFxRUMsc0JBQXJFLEUiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVVVUlEIGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgY29uc3QgdXVpZCA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgP1xuICAoKSA9PiAnJHV1aWQkJyA6XG4gIGNyZWF0ZVVVSUQ7XG5cbmV4cG9ydCBjb25zdCBnZXRUb2RheSA9XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgP1xuICAoKSA9PiAnMjAxNy0wMi0yMycgOlxuICAoKSA9PiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcblxubGV0IGFzc2V0Um9vdCA9ICcvYXNzZXRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFzc2V0Um9vdChwYXRoKSB7XG4gIGFzc2V0Um9vdCA9IHBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldFJvb3QoKSB7XG4gIHJldHVybiBhc3NldFJvb3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0eWxlKHN0eWxlTmFtZSwgcnVsZXMpIHtcbiAgY29uc3Qgc3R5bGVJZCA9IGByZWFjdC1zbGRzLWNzc2ZpeC0ke3N0eWxlTmFtZX1gO1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcbiAgaWYgKHN0eWxlKSB7IHJldHVybjsgfVxuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZm9yIChjb25zdCBydWxlU2V0IG9mIHJ1bGVzKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xuICAgIGxldCBzZWxlY3RvcnMgPSBydWxlU2V0O1xuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb25jYXQoc2VsZWN0b3JzLm1hcChzID0+IGAuc2xkcyAke3N9YCkpO1xuICAgIGNvbnN0IHJ1bGUgPSBgJHtzZWxlY3RvcnMuam9pbignLCAnKX0gJHtkZWNsYXJhdGlvbn1gO1xuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxJbkNoaWxkcmVuKHJvb3RFbCwgdGFyZ2V0RWwpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbiAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcbiAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gISF0YXJnZXRFbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldChlbCkge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHJlY3QudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Qcm9wcyhwcm9wcywgcHJvcFR5cGVzKSB7XG4gIGNvbnN0IG5ld1Byb3BzID0gcHJvcHM7XG4gIE9iamVjdC5rZXlzKHByb3BUeXBlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIG5ld1Byb3BzW2tleV07XG4gIH0pO1xuICByZXR1cm4gbmV3UHJvcHM7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgeyBzZXRBc3NldFJvb3QsIGdldEFzc2V0Um9vdCwgcmVnaXN0ZXJTdHlsZSwgaXNFbEluQ2hpbGRyZW4sIG9mZnNldCwgY2xlYW5Qcm9wcyB9O1xuIl19