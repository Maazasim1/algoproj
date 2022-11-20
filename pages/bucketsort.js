import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';

export default function Bucketsort() {
    let array = [0.897, 0.565,
        0.656, 0.1234,
        0.665, 0.3434];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([...array]);

    function sleep(ms,array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
    }


    async function bucketsort(sortarr, n) {
        let arr = [...sortarr]

        if (n <= 0)
            return;

        let buckets = new Array(n);

        for (let i = 0; i < n; i++) {
            buckets[i] = [];
        }

        for (let i = 0; i < n; i++) {
            let idx = arr[i] * n;
            buckets[Math.floor(idx)].push(arr[i]);
        
        }

        for (let i = 0; i < n; i++) {
            buckets[i].sort(function (a, b) { return a - b; });
    
        }

        let index = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arr[index++] = buckets[i][j];
                await sleep(1000,arr)
            }
        }
        
    }


    useEffect(() => {
        bucketsort(sortarr,sortarr.length)

    }, [sort])

    function handleClick(){
        Promise.resolve().then(()=>{setSortArr([...array])}).then(()=>{setSort(!sort)})
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
