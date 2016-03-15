module.exports = {
  countIf: function (func, arr) {
    var counter = 0;
    for( var i = 0; i < arr.length; i++) {
      if ( func( arr[i] ) ) {
        counter++
      }
    }
    return counter
  },

  filter: function (func, arr) {
    var array = []

    for( var i = 0; i < arr.length; i++) {
      if ( func( arr[i] ) ) {
        array.push(arr[i])
      }
    }

    return array
  },

  map: function (func, arr) {
    var array = []

    for( var i = 0; i < arr.length; i++) {
      array.push( func(arr[i]) )
    }

    return array
  }

}
