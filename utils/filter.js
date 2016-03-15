exports.filter = function (func, arr) {
  var array = []

  for( var i = 0; i < arr.length; i++) {
    if ( func( arr[i] ) ) {
      array.push(arr[i])
    }
  }

  return array
}
