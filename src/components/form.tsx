import { useEffect, useState } from 'react';
import { createUser , authentification , auth} from './auth-provider';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router";
import './/form.css';
function Form(){
    const [mail,setMail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth , (status)=>{
            if(status){
              navigate('/home')
            }
          })
    },[])
    return(
        <div className="champ">
            <h3>Please, sign in</h3>
            <input type="email" name="" id="" onChange={(e:any)=>{setMail(e.target.value)}} /><br />
            <input type="password" name="" id="" onChange={(e:any)=>{setPassword(e.target.value)}}/><br />
            <button onClick={()=>{authentification(password,mail)}}>Sign in</button>
            <button onClick={()=>{createUser(password,mail)}}>Sign up</button><br />
        </div>
    )
}
export default Form;