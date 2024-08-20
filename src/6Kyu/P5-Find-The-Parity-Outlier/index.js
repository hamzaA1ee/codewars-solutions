// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    const obj={even:{count:0,index:0},odd:{count:0,index:0}}
     for(let i=0;i<integers.length;i++){
       if(integers[i]%2==0) {obj.even.count+=1;obj.even.index=i; continue;}
       obj.odd.count+=1;obj.odd.index=i;
    }
     console.log(obj)
     if(obj.odd.count==1) return integers[obj.odd.index]
     return integers[obj.even.index]
   }

//    https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript