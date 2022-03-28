function reverse(arr) {
  let reversed = [];
  
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}
var x = [10, 3, 6, 7, 22,]



console.log(`The reverse of the array [${x}] is [${reverse([10, 3, 6, 7, 22,])}]` );
