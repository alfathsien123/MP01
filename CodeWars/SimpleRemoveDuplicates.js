function removeDupV2(arr) {
  var newArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    var curItem = arr[i];
    if (!newArr.includes(curItem)) {
      newArr.unshift(curItem);
    }
  }

  console.log(newArr);
}
