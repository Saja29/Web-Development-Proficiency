//Task 2
const numbers = [1, 5];
//Sum fir thearray
function NumSum(nums){

  return nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  
}


console.log(NumSum(numbers));


//Task 3
const word=['test','test','kk']


function removeDuplicates(array) {
//set => DS Used for unique value 
  return [...new Set(array)];
}

console.log(removeDuplicates(word))