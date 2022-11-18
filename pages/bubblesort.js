import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';

export default function Bubblesort() {
    let arr = [94, 56, 77, 8, 72, 30, 67, 4, 52, 2];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([...arr]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

    async function bubblesort(sortarr) {
        const array=[...sortarr];
        const n=array.length
        var i, j;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                  

                }
           
                await sleep(1000)
                 setSortArr(array)
            }

        }
    }


useEffect(() => {
    bubblesort(sortarr)

}, [sort])

return (


    <div>
    <Navbar/>
    <button onClick={()=>{
        setSort(!sort)

    }}>
    
    </button>
   <h1>
       <div className='flex flex-row justify-center  w-full'>
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
