import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'

export default function Bucketsort() {
    let array = [0.897, 0.565,
        0.656, 0.1234,
        0.665, 0.3434];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([array]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
            }
        }
        
        setSortArr(arr)
    }


    useEffect(() => {
        bucketsort(sortarr,sortarr.length)

    }, [sort])

    return (


        <div>
            <Navbar />
            <button onClick={() => {
                setSort(!sort)
                setSortArr(array)

            }}>
                sort
            </button>
            <h1>
                {sortarr + " "}
            </h1>
        </div>
    )
}
