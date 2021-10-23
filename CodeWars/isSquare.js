var isSquare = function (arr) {
  if (arr.length === 0) return undefined;

  var isAllSquare = true;

  for (var i = 0; i < arr.length; i++) {
    var curNum = arr[i];
    if (Math.sqrt(curNum) % 1 !== 0) {
      isAllSquare = false;
    }
  }

  return isAllSquare;
};
