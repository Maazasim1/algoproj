import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';

export default function Mergesort() {
    let array = [94, 56, 77, 8, 72, 30, 67, 4, 52, 2];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([...array]);

    function sleep(ms, array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
    }

    async function merge(arr, l, m, r) {
        
        
        var n1 = m - l + 1;
        var n2 = r - m;
        
        var L = new Array(n1);
        var R = new Array(n2);

        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];


        var i = 0;

        var j = 0;

        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                await sleep(500,arr);


                i++;
            }
            else {
                arr[k] = R[j];
                await sleep(500,arr);


                j++;
            }
            k++;
        }


        while (i < n1) {
            arr[k] = L[i];
            await sleep(500,arr);


            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            await sleep(500,arr);


            j++;
            k++;
        }



    }


    async function mergesort(arr, l, r) {
        if (l >= r) {
            return;//returns recursively
            

        }
        var m = l + parseInt((r - l) / 2);
      await  mergesort(arr, l, m);

       await mergesort(arr, m + 1, r);        

       await merge(arr, l, m, r);

        
    }
    function handleClick() {
        Promise.resolve().then(() => { setSortArr([...array]) }).then(() => { setSort(!sort) })
    }



    useEffect(() => {
        mergesort(sortarr, 0, sortarr.length - 1)

    }, [sort])

    return (

        <div>
            <Navbar />
            <div className='flex justify-center '>

                <button className='bg-black p-5 rounded-full text-white my-5 w-36' onClick={handleClick}>
                    SORT

                </button>
            </div>
            <h1>
                <div className='flex sm:flex-row flex-col justify-center text-center w-full'>
                    {sortarr.map((item) =>

                        <div className='p-5 m-5 border border-spacing-4 border-orange-600 rounded-full'>
                            {item}
                        </div>
                    )}
                </div>
            </h1>


            <Charts array={sortarr} />

        </div>
    )
}
