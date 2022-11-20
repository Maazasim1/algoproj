import React,{useState,useEffect} from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';

export default function Insertionsort() {
    let arr = [ 94, 56, 77, 8, 72, 30, 67, 4, 52, 2 ]; 
    const [sort,setSort]=useState(false);
    const [sortarr,setSortArr]=useState([...arr]);

    function sleep(ms,array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
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
           
                await sleep(100,array)
               
               
            } 
            array[j + 1] = key; 
        } 
    } 

    useEffect(()=>{
        
        insertionSort(sortarr,sortarr.length)

    },[sort])


    function handleClick(){
        Promise.resolve().then(()=>{setSortArr([...arr])}).then(()=>{setSort(!sort)})
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
