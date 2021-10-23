function likes(arr) {
  var arrLen = arr.length;
  if (arrLen === 0) {
    return "no one likes this";
  }
  if (arrLen === 1) {
    return `${arr[0]} likes this`;
  }
  if (arrLen === 2) {
    return `${arr[0]} and ${arr[1]} like this`;
  }
  if (arrLen === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  }
  if (arrLen > 3) {
    return `${arr[0]}, ${arr[1]} and ${arrLen - 2} others like this`;
  }
}

console.log(likes([]));
