import { useState } from "react"
import axios from "axios"


function Login (){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [text,setText] = useState("Show");
    const [type,setType] = useState("password");

    const start = ()=>{
        if(text=="Show"){
            setText("Hide");
            setType("text");
        }else{
            setText("Show");
            setType("password");
        }
    }
    return(
         <div>
            <div className="heading">
                <h2>LOGIN HERE</h2>
            </div>
           <form>
                 
                 <div className="emailDiv">
                      <input type="text"placeholder="email"value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                 </div>
                 <div className="passwordDiv">
                      <input type={type} placeholder="password"value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                      <h3 onClick={start} >{text}</h3>
                 </div>
                 
                 <div className="submitDiv">
                      <button className="submit" type="submit">Login</button>
                 </div>
           </form>
        </div>
    )
}

export default Login