import React, { useState, useEffect,useLayoutEffect,useRef } from 'react'
import Navbar from '../components/navbar'
import Charts from '../components/Charts';
import {sortFromServer} from "../lib/utils";

export default function Parallelsort() {
    const updatedState={}
    let arr1 = [0.897, 0.565, 0.756, 0.1234, 0.665, 0.3434,0.2,0.4,0.9,0.0];
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




    useEffect( () => {
        console.log(sortarr)
        const sorted =  sortFromServer(arr1)
        console.log(sorted+" server data sorted received")
        //  setSortArr(sorted)
        console.log(arr1 + "Inside the useEffect Hook")

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

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        async function sortFiles(){

            for (let index = 0; index < matrix.length; index++) {
                let element=matrix[index]
                const sorted=await sortFromServer(element)
                await sleepforfilearray(1000)
                console.log(element+"Inside the useEffect Hook")
                if((index+1)!==matrix.length)
                {
                    alert("move to next line?")

                }


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
            <div className='flex flex-col sm:flex-row items-center justify-around pt-5 text-center font-mono font-bold '>
                <h1 className='p-2'>PARALLEL SORT</h1>
                <h1 className='p-3'>TIME COMPLEXITY :O(1)</h1>
                <input type="file" onChange={showFile} />


                <button className='bg-black p-5 rounded-full text-white my-5 w-36 dark:border-white dark:border-2' onClick={handleClick}>
                    SORT

                </button>
            </div>
            <h1>
                <div className='flex sm:flex-row flex-col justify-center text-center w-full'>
                    {sortarr?.map((item,index)=>

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
