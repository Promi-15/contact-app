import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar"
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore";
import {db} from './Config/firebase'
const App = () => {

  const [contacts, setContacts] = useState([])

  //fetch from firebase
  
  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar></Navbar>
      <div className="flex flex-grow items-center">
      <div className="flex relative m-4 items-center">
      <CiSearch className="text-white text-xl font-bold absolute ml-2"/>
        <input type="text" className="bg-transparent border-white rounded-md pl-10 border-2 h-10 flex-grow " name="" id="" placeholder="Search Contact"/>
       
      </div>
      <div>
      <CiCirclePlus  className="text-white text-4xl font-bold  ml-2 cursor-pointer"/>
      </div>
      </div>
    </div>
  )
}

export default App
