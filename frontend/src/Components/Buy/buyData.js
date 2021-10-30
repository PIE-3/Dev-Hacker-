import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import Buy from './Buy'
export default function Parent(){
    const [rooms,getRooms] = useState('')
    const url = "http://localhost:4000/api/getData";

    useEffect(()=>{
        getAllRooms()
    },[])

    const getAllRooms = () =>{
        axios.get(`${url}`)
        .then((res)=>{
            const allRooms = res.data
            getRooms(allRooms)
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return(
        <Buy rooms = {rooms} />
    )
}