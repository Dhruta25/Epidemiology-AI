import { useState } from "react"
import axios from "axios"
import {  useNavigate } from "react-router-dom"
import styles from './Register.module.css'


function Register (){

    const navigate = useNavigate();

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [profile,setProfile] = useState(null);
    const [type,setType] = useState("password");
    const [agree,setAgree] = useState(false);
    const [loading,setLoading] = useState(false);
    const start = ()=>{
        if(agree==false){
            setType("text");
            setAgree(true);
        }else{
            setType("password");
            setAgree(false);
        }
        
    }
    const handleSubmit = async (e) => {
         
         e.preventDefault();
          
         setLoading(true);

         const formData = new FormData();
         formData.append("username",username);
         formData.append("email",email);
         formData.append("password",password);
         formData.append("profile",profile);
         try {
            await axios.post(
                "http://localhost:3000/api/v1/user/register",
                formData,
                {
                    headers:{
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            alert("Registration successful...");
            navigate("/home")
         } catch (error) {
            alert(error || "Registration failed")
            // console.log(error)
         }finally{
            setLoading(false);
         }

    }
    return(
        <div className={styles.registerWrapper}>
            <div className={styles.register}>
                <h2 className={styles.heading} data-text="REGISTER HERE"> REGISTER</h2>
            
            
           <form onSubmit={handleSubmit} >
                 <div className={styles.usernameDiv}>
                      <input type="text"placeholder="username"value={username} onChange={(e)=>setUsername(e.target.value) } required></input>
                 </div>
                 <div className={styles.emailDiv}>
                      <input type="text"placeholder="email"value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                 </div>
                 <div className={styles.passwordDiv}>
                      <input type={type} placeholder="password"value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                        <label className={styles.checkboxLabel}>
                                <input type="checkbox"checked={agree}onChange={start}/>
                                    <span className={styles.checkboxText}>show password</span> 
                                </label>
                 </div>
                 <div className={styles.profileDiv}>
                      <input type="file" accept="*/image"placeholder="profie_picture" onChange={(e)=>setProfile(e.target.files[0])}></input>
                 </div>
                 <div className={styles.submitDiv}>
                      <button className="submit" type="submit" disabled={loading}>{loading?"Registering...":"Register"}</button>
                 </div>
           </form>
           </div>
        </div>
    )
}

export default Register