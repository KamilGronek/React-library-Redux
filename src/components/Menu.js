import React,{useEffect}  from 'react'
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {fetchSuccess} from '../redux/actions/libraryActions';
import MenuDetails from "./MenuDetails";


export default function Menu(){
    const library = useSelector((state)=> state);
    const dispatch = useDispatch();
   console.log(library)

   const fetchLibrary = async()=> {
    const response = await axios
    .get("data/jsonTab.json")
    .catch(err => {
       console.log(err)
    })
    dispatch(fetchSuccess(response.data.books))
    console.log(response.data.books)
 }


 useEffect(()=>{
    fetchLibrary()
 },[]);

    return(
        <MenuDetails/>
    )
};




