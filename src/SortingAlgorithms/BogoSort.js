import React from 'react'

function BogoSorting(arr) {
  const anim=[];
  var isSorted = function(arr){
    for(var i = 1; i < arr.length; i++){
      if (arr[i-1] > arr[i]) {
        return false;
      }
    }
    return true;
  };

  function shuffle(arr){
    var count = arr.length, temp, index;

    while(count > 0){
      index = Math.floor(Math.random() * count);
      count--;

      temp = arr[count];
      arr[count] = arr[index];
      arr[index] = temp;
      anim.push([count,index]);
      anim.push([count,index]);
      anim.push([count,arr[count],index,arr[index]]);
    }

    return arr;
  }

  function sort(arr){
    var sorted = false;
    while(!sorted)
    {
    console.log(arr);
      arr = shuffle(arr);
      sorted = isSorted(arr);
    }
    return anim;
  }
  return sort(arr);
}

export default BogoSorting
