import React, { useState, useEffect,useLayoutEffect } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';
import { sleep } from '../utils/functions';

export default function Bubblesort() {
    const updatedState={}
    let arr1 = [94, 56, 77, 8, 72, 30, 67, 4, 52, 2];
    const [sort, setSort] = useState(false);
    
    const [sortarr, setSortArr] = useState([...arr1]);
  

    function sleep(ms,array) {
        return new Promise(resolve => setTimeout(resolve, ms)).then(setSortArr([...array]));
    }

    


   async function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
    return arr;
}

    async function bubblesort(arrayparameter) {
        let array=[...arrayparameter];
        const n=array.length
        var i, j;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                 const temparr=await swap(array, j, j + 1)
                 array=[...temparr]
                    await sleep(100,array)
                  

                }
           
                
            }

        }
        await sleep(100,array)
        return array;

    }


useEffect(() => {
    console.log(sortarr)
    bubblesort(arr1)
    console.log(arr1+"Inside the useEffect Hook")

}, [sort])




function handleClick(){
    //  Promise.resolve().then(()=>{setSortArr([...arr])}).then(()=>{setSort(!sort)})
    setSort(!sort)
}


//Filing
const [fileSort, setFileSort] = useState(false);
const [matrix,setMatrix]=useState([[]])

function sleepforfilearray(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

useLayoutEffect(() => {
     async function sortFiles(){

         for (let index = 0; index < matrix.length; index++) {
             let element=matrix[index]
            await bubblesort(element)
            await sleepforfilearray(1000)
            console.log(element+"Inside the useEffect Hook")
            alert("move to next line?")
            
        }
    }
    sortFiles();

}, [fileSort])


  
    function showFile(e) {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload =  async (e) => { 
          const text = (e.target.result)
          console.log(text)
        //  alert(text)
          const arrayformaipulation=convertFileToArrays(text)
         // for (let index = 0; index < arrayformaipulation.length; index++) {
            
        //     console.log(arrayformaipulation[0])
        //    await bubblesort(arrayformaipulation[0])
        //    await sleepforfilearray(1000)
        setMatrix(arrayformaipulation)
        setFileSort(!fileSort)
            
         // }
        };
        reader.readAsText(e.target.files[0])
      
   
}
function convertFileToArrays(text){
    
   let twodArray = text.split("\n").map(function(e) {return e.split(",").map(Number)

});
    console.log(twodArray)
    
    
    return twodArray;
    


}
return (


    <div>
    <Navbar/>
    <div className='flex justify-center '>
    <input type="file" onChange={showFile} />

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
