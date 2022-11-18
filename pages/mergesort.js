import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'

export default function Mergesort() {
    let arr = [5, 1, 4, 2, 8];
    const [sort, setSort] = useState(false);
    const [sortarr, setSortArr] = useState([arr]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

   async function merge(sortarr, l, m, r)
    {
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
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
     
      
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
     
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
        await sleep(500);
            setSortArr(arr)

    }
     
    
   async function mergesort(sortarr,l,r){
        if(l>=r){
            return;//returns recursively
           
        }
        var m =l+ parseInt((r-l)/2);
        mergesort(arr,l,m);
        mergesort(arr,m+1,r);
        merge(arr,l,m,r);
    }
     



useEffect(() => {
    mergesort(sortarr,0,sortarr.length-1)

}, [sort])

return (


    <div>
        <Navbar />
        <button onClick={() => {
            setSort(!sort)
            setSortArr(arr)

        }}>
            sort
        </button>
        <h1>
            {sortarr+" "}
        </h1>
    </div>
)
}
