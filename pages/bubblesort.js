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


    function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

    async function bubblesort(arrayparameter) {
        const array=[...arrayparameter];
        const n=array.length
        var i, j;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                    await sleep(100,array)
                  

                }
           
                
            }

        }
    }


useEffect(() => {
    bubblesort(arr)
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
