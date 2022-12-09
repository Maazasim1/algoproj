import axios from 'axios'
import {parallelApi} from "./constants";

export const sortFromServer=async(array)=>{
    try{
        const {data}=await axios.post(parallelApi,{"array":array});
        return data;


    }
    catch (error){
        console.log(error)

    }
}