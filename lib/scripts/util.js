'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.setAssetRoot = setAssetRoot;
exports.getAssetRoot = getAssetRoot;
exports.clearSymbolPaths = clearSymbolPaths;
exports.getSymbolsFilePath = getSymbolsFilePath;
exports.setSymbolsFilePath = setSymbolsFilePath;
exports.registerStyle = registerStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetRoot = '/assets';
var symbolFiles = {};

function setAssetRoot(path) {
  assetRoot = path;
}

function getAssetRoot() {
  return assetRoot;
}

function clearSymbolPaths() {
  (0, _keys2.default)(symbolFiles).forEach(function (key) {
    delete symbolFiles[key];
  });
}

// get the file path for a single symbols file by type
function getSymbolsFilePath(type) {
  return symbolFiles[type];
}

// updates the symbols file object by assigning
// all differences passed in
function setSymbolsFilePath(updates) {
  return (0, _assign2.default)(symbolFiles, updates);
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

exports.default = { setAssetRoot: setAssetRoot, getAssetRoot: getAssetRoot, registerStyle: registerStyle, getSymbolsFilePath: getSymbolsFilePath, setSymbolsFilePath: setSymbolsFilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2dCLFksR0FBQSxZO1FBSUEsWSxHQUFBLFk7UUFJQSxnQixHQUFBLGdCO1FBT0Esa0IsR0FBQSxrQjtRQU1BLGtCLEdBQUEsa0I7UUFJQSxhLEdBQUEsYTs7OztBQTVCaEIsSUFBSSxZQUFZLFNBQWhCO0FBQ0EsSUFBTSxjQUFjLEVBQXBCOztBQUVPLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUNqQyxjQUFZLElBQVo7QUFDRDs7QUFFTSxTQUFTLFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxTQUFQO0FBQ0Q7O0FBRU0sU0FBUyxnQkFBVCxHQUE0QjtBQUNqQyxzQkFBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLGVBQU87QUFDdEMsV0FBTyxZQUFZLEdBQVosQ0FBUDtBQUNELEdBRkQ7QUFHRDs7O0FBR00sU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUN2QyxTQUFPLFlBQVksSUFBWixDQUFQO0FBQ0Q7Ozs7QUFJTSxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU8sc0JBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkM7QUFDQSxNQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJLEtBQUosRUFBVztBQUFFO0FBQVM7QUFDdEIsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLFFBQU0sRUFBTixHQUFXLE9BQVg7QUFDQSxRQUFNLFdBQU4sQ0FBa0IsU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0IsS0FBdEIsNEdBQTZCO0FBQUEsVUFBbEIsT0FBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBcEI7QUFDQSxVQUFJLFlBQVksT0FBaEI7QUFDQSxrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO0FBQUEsZUFBTyxXQUFXLENBQWxCO0FBQUEsT0FBZCxDQUFqQixDQUFaO0FBQ0EsVUFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLElBQWYsSUFBdUIsR0FBdkIsR0FBNkIsV0FBMUM7QUFDQSxZQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7a0JBRWMsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCLEVBQTZDLHNDQUE3QyxFQUFpRSxzQ0FBakUsRSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFzc2V0Um9vdCA9ICcvYXNzZXRzJztcclxuY29uc3Qgc3ltYm9sRmlsZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xyXG4gIGFzc2V0Um9vdCA9IHBhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldFJvb3QoKSB7XHJcbiAgcmV0dXJuIGFzc2V0Um9vdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU3ltYm9sUGF0aHMoKSB7XHJcbiAgT2JqZWN0LmtleXMoc3ltYm9sRmlsZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGRlbGV0ZSBzeW1ib2xGaWxlc1trZXldO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBnZXQgdGhlIGZpbGUgcGF0aCBmb3IgYSBzaW5nbGUgc3ltYm9scyBmaWxlIGJ5IHR5cGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbHNGaWxlUGF0aCh0eXBlKSB7XHJcbiAgcmV0dXJuIHN5bWJvbEZpbGVzW3R5cGVdO1xyXG59XHJcblxyXG4vLyB1cGRhdGVzIHRoZSBzeW1ib2xzIGZpbGUgb2JqZWN0IGJ5IGFzc2lnbmluZ1xyXG4vLyBhbGwgZGlmZmVyZW5jZXMgcGFzc2VkIGluXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTeW1ib2xzRmlsZVBhdGgodXBkYXRlcykge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHN5bWJvbEZpbGVzLCB1cGRhdGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGUoc3R5bGVOYW1lLCBydWxlcykge1xyXG4gIGNvbnN0IHN0eWxlSWQgPSAncmVhY3Qtc2xkcy1jc3NmaXgtJyArIHN0eWxlTmFtZTtcclxuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcclxuICBpZiAoc3R5bGUpIHsgcmV0dXJuOyB9XHJcbiAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlLmlkID0gc3R5bGVJZDtcclxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgZm9yIChjb25zdCBydWxlU2V0IG9mIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHJ1bGVTZXQucG9wKCk7XHJcbiAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcclxuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb25jYXQoc2VsZWN0b3JzLm1hcCgocykgPT4gJy5zbGRzICcgKyBzKSk7XHJcbiAgICBjb25zdCBydWxlID0gc2VsZWN0b3JzLmpvaW4oJywgJykgKyAnICcgKyBkZWNsYXJhdGlvbjtcclxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHNldEFzc2V0Um9vdCwgZ2V0QXNzZXRSb290LCByZWdpc3RlclN0eWxlLCBnZXRTeW1ib2xzRmlsZVBhdGgsIHNldFN5bWJvbHNGaWxlUGF0aCB9O1xyXG4iXX0=