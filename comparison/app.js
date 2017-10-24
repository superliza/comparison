var comparison = function(array1, array2){
  if(array1.length !== array2.length){
    document.write("Los arreglos no tienen la misma longitud")
    return false;
  }else{
    for( var i = 0; i < array1.length; i++) {
      console.log(array1[i], array2[i])
      if(array1[i] !== array2[i]){
        document.write("Los arreglos son iguales")
        return false;
      }
    }
  }

}

var arrayOne = [2,4,5,8,10,12,14,16,18,20];
var arrayTwo = [0,1,2,3,4,5,6,7,8,10];

comparison(arrayOne, arrayTwo);
