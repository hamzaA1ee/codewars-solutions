// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    if(arr.length==0) return 0
   const sumArr=[]
    for(let i=0;i<arr.length;i++){
      for(let j=i;j<arr.length;j++){
        let count=0
          for(let k=i;k<=j;k++){
              count+=arr[k]
  }
        sumArr.push([i,j,count])
  }
  }
    
    let min=0
    let index=0
    for(let i=0;i<sumArr.length;i++){
        if(i==0) {min=sumArr[i][2];continue}
      if(sumArr[i][2]>min) {min=sumArr[i][2]; index=i}
    }
    
    console.log(sumArr)
    return sumArr[index][2] > 0 ? sumArr[index][2] : 0
  }

//   https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript