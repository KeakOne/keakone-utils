exports.map = function (func, arr) {
  var array = []

  for( var i = 0; i < arr.length; i++) {
    array.push( func(arr[i]) )
  }

  return array
}
