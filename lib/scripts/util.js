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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2dCLFksR0FBQSxZO1FBSUEsWSxHQUFBLFk7UUFJQSxnQixHQUFBLGdCO1FBT0Esa0IsR0FBQSxrQjtRQU1BLGtCLEdBQUEsa0I7UUFJQSxhLEdBQUEsYTs7OztBQTVCaEIsSUFBSSxZQUFZLFNBQWhCO0FBQ0EsSUFBTSxjQUFjLEVBQXBCOztBQUVPLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUNqQyxjQUFZLElBQVo7QUFDRDs7QUFFTSxTQUFTLFlBQVQsR0FBd0I7QUFDN0IsU0FBTyxTQUFQO0FBQ0Q7O0FBRU0sU0FBUyxnQkFBVCxHQUE0QjtBQUNqQyxzQkFBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLGVBQU87QUFDdEMsV0FBTyxZQUFZLEdBQVosQ0FBUDtBQUNELEdBRkQ7QUFHRDs7O0FBR00sU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUN2QyxTQUFPLFlBQVksSUFBWixDQUFQO0FBQ0Q7Ozs7QUFJTSxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU8sc0JBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkM7QUFDQSxNQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJLEtBQUosRUFBVztBQUFFO0FBQVM7QUFDdEIsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLFFBQU0sRUFBTixHQUFXLE9BQVg7QUFDQSxRQUFNLFdBQU4sQ0FBa0IsU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0IsS0FBdEIsNEdBQTZCO0FBQUEsVUFBbEIsT0FBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBcEI7QUFDQSxVQUFJLFlBQVksT0FBaEI7QUFDQSxrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO0FBQUEsZUFBTyxXQUFXLENBQWxCO0FBQUEsT0FBZCxDQUFqQixDQUFaO0FBQ0EsVUFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLElBQWYsSUFBdUIsR0FBdkIsR0FBNkIsV0FBMUM7QUFDQSxZQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7a0JBRWMsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCLEVBQTZDLHNDQUE3QyxFQUFpRSxzQ0FBakUsRSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFzc2V0Um9vdCA9ICcvYXNzZXRzJztcbmNvbnN0IHN5bWJvbEZpbGVzID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xuICBhc3NldFJvb3QgPSBwYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRSb290KCkge1xuICByZXR1cm4gYXNzZXRSb290O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTeW1ib2xQYXRocygpIHtcbiAgT2JqZWN0LmtleXMoc3ltYm9sRmlsZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICBkZWxldGUgc3ltYm9sRmlsZXNba2V5XTtcbiAgfSk7XG59XG5cbi8vIGdldCB0aGUgZmlsZSBwYXRoIGZvciBhIHNpbmdsZSBzeW1ib2xzIGZpbGUgYnkgdHlwZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbHNGaWxlUGF0aCh0eXBlKSB7XG4gIHJldHVybiBzeW1ib2xGaWxlc1t0eXBlXTtcbn1cblxuLy8gdXBkYXRlcyB0aGUgc3ltYm9scyBmaWxlIG9iamVjdCBieSBhc3NpZ25pbmdcbi8vIGFsbCBkaWZmZXJlbmNlcyBwYXNzZWQgaW5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTeW1ib2xzRmlsZVBhdGgodXBkYXRlcykge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihzeW1ib2xGaWxlcywgdXBkYXRlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0eWxlKHN0eWxlTmFtZSwgcnVsZXMpIHtcbiAgY29uc3Qgc3R5bGVJZCA9ICdyZWFjdC1zbGRzLWNzc2ZpeC0nICsgc3R5bGVOYW1lO1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcbiAgaWYgKHN0eWxlKSB7IHJldHVybjsgfVxuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlLmlkID0gc3R5bGVJZDtcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgZm9yIChjb25zdCBydWxlU2V0IG9mIHJ1bGVzKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xuICAgIGxldCBzZWxlY3RvcnMgPSBydWxlU2V0O1xuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb25jYXQoc2VsZWN0b3JzLm1hcCgocykgPT4gJy5zbGRzICcgKyBzKSk7XG4gICAgY29uc3QgcnVsZSA9IHNlbGVjdG9ycy5qb2luKCcsICcpICsgJyAnICsgZGVjbGFyYXRpb247XG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHNldEFzc2V0Um9vdCwgZ2V0QXNzZXRSb290LCByZWdpc3RlclN0eWxlLCBnZXRTeW1ib2xzRmlsZVBhdGgsIHNldFN5bWJvbHNGaWxlUGF0aCB9O1xuIl19