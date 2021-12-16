function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i);
    }
  }
             //0  1  2  3  4  
  const arr = [0, 2, 7, 9, 10];
  
  myForEach(arr, function(value, index) {
    console.log('Value at index ' + index + ' is ' + value);
  });
  
myForEach(arr, (value, index)=> console.log('Here is the value! ' + value));

  function addNums(x,y){
      console.log(x+y);
  }

  addNums(2,6)
  addNums(2,7)
  addNums(2,8)