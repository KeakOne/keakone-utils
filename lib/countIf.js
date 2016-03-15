exports.countIf = function (func, arr) {
  var counter = 0;
  for( var i = 0; i < arr.length; i++) {
    if ( func( arr[i] ) ) {
      counter++
    }
  }
  return counter
}
