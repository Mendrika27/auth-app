import React, { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./auth-provider"
import { useNavigate } from "react-router"
import './form.css';
export function Home ():React.ReactElement{
    const navigate=useNavigate()
    useEffect(()=>{
        
        onAuthStateChanged(auth,(status)=>{
            if(!status){
                navigate('/login')
            }
        })
    },[])
    function logout(){
        signOut(auth).then(()=>{
            navigate('/login')
        }).catch()
      }
    return(
        <div className="home">
            <h3>Welcome !</h3>
            <button className="logout" onClick={logout}>Log Out</button> 
        </div>   
    )
}