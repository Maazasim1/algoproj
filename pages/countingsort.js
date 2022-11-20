import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';
import { sleep } from '../utils/functions';

export default function Bubblesort() {
    const updatedState={}
    let arr = [94, 56, 77, 8, 72, 30, 67, 4, 52, 2];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([...arr]);

    function sleep(ms,array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
    }


    async function countSort(arr)
    {
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
 
    var range = max - min + 1;
    var count = Array.from({length: range}, (_, i) => 0);
    var output = Array.from({length: arr.length}, (_, i) => 0);
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
 
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
 
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
        await sleep(1000,arr)
    }
}

useEffect(() => {
    countSort(arr)
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

    <button className='bg-black p-5 rounded-full text-white my-5 w-36' onClick={handleClick}>
        SORT
    
    </button>
        </div>
   <h1>
       <div className='flex sm:flex-row flex-col justify-center text-center w-full'>
    {sortarr.map((item)=>

        <div className='p-5 m-5 border border-spacing-4 border-orange-600 rounded-full'>
            {item}
        </div>
    )}
    </div>
   </h1>
 

   <Charts array={sortarr}/>
   
</div>
)
}
