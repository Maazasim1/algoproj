import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';

export default function Insertionsort() {
    let arr = [ 94, 56, 77, 8, 72, 30, 67, 4, 52, 2 ]; 
    const [sort,setSort]=useState(false);
    const [sortarr,setSortArr]=useState([...arr]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


  async  function insertionSort(sortarr,n) 
    {   const array=[...sortarr]

        
        let i, key, j; 
        for (i = 1; i < n; i++)
        { 
            key = array[i]; 
            j = i - 1; 
            while (j >= 0 && array[j] > key)
            { 
                
                array[j + 1] = array[j]; 
                j = j - 1; 
           
                await sleep(1000);
                setSortArr(array);
               
            } 
            array[j + 1] = key; 
        } 
    } 

    useEffect(()=>{
        setSortArr([...arr])
        insertionSort(sortarr,sortarr.length)

    },[])

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
