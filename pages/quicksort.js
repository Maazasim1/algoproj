import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';
import { sleep } from '../utils/functions';

export default function Bubblesort() {
    const updatedState={}
    let arr = [5,3,7,6,2,9];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([...arr]);

    function sleep(ms,array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
    }


    async function swap(arr, leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        await sleep(1000,arr)


        arr[rightIndex] = temp;
        await sleep(1000,arr)

    }
    function partition(arr, left, right) {
        var pivot   = arr[Math.floor((right + left) / 2)], 
            i       = left, 
            j       = right; 
        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(arr, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }
    
    async function quickSort(arr, left, right) {
        var index;
        if (arr.length > 1) {
            index =await partition(arr, left, right); 
            if (left < index - 1) { 
                await quickSort(arr, left, index - 1);
            }
            if (index < right) { 
              await  quickSort(arr, index, right);
            }
        }
        await sleep(1000,arr)

    }


useEffect(() => {
    quickSort(arr,0,arr.length-1)
    console.log(arr+"Inside the useEffect Hook")

}, [sort])

function handleClick(){
  //  Promise.resolve().then(()=>{setSortArr([...arr])}).then(()=>{setSort(!sort)})
    setSort(!sort)
}

return (


    <div>
    <Navbar/>
    <div className='flex justify-center '>

     <button className='bg-black p-5 rounded-full text-white my-5 w-36 dark:border-white dark:border-2' onClick={handleClick}>
        SORT
    
    </button>
        </div>
   <h1>
       <div className='flex sm:flex-row flex-col justify-center text-center w-full'>
    {sortarr.map((item,index)=>

        <div className='p-5 m-5 border border-spacing-4 border-orange-600 rounded-full' key={index}>
            {item}
        </div>
    )}
    </div>
   </h1>
 

   <Charts array={sortarr}/>
   
</div>
)
}
