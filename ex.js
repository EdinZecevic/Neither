var arr1 = [1,1,3];
var arr2 = [1,2,3];
var arr3 = [3,2,1];
var arr4 = [-1,0,1];
var arr5 = [1,0,-1];
function check(arr){
  //If array have for ex. 3 numbers, if statement will execute only 2 times beacase I increment index by 1 for checking
  let arrLength = arr.length -1; 
  let count = 0;

  for(let i in arr){
    if(arr[i] < arr[parseInt(i)+1]){
      count ++;
      if(arrLength == count){
        console.log("increasing")
        return true;
      }
    }
  }
  count = 0; //because it is mabey incremented i for loop before
  for(let i in arr){
    if(arr[i] > arr[parseInt(i)+1]){
      count ++;
      if(arrLength == count){
        console.log("decreasing")
        return true;
      }
    }
  }
  console.log("neither")
  return false;
}

check(arr1);
check(arr2); 
check(arr3); 
check(arr4);  
check(arr5); 