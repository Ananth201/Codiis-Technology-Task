import {useState} from "react";
import "./Navbar.css"
import Login from "../Login/Login.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Navbar() {

    const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
    const [buttonPopup, setButtonPopup] = useState(false);

    const [values,setValues]=useState({email:"",password:""});
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        
        const res2 = await axios.post('http://localhost:5000/signup/login',{
          email:values.email,
          password:values.password,
        })
        localStorage.setItem('user', JSON.stringify(res2.data))
        setAuth(true)
        setButtonPopup(false)
        navigate('/')
      }

    return(
        <>
        <div className="nav">
            <div className="nav-right">
            { auth ? <div className="dropdown">
            <div>PROFILE</div>
            <ul>
              <li>My Account</li>
              <li>Log Out</li>
            </ul>
          </div> : <div onClick={() => setButtonPopup(true)}>Login</div>}
           </div>
        </div>

        <div>
        <Login trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login to continue</p>
        <br></br>
        <div className="LoginBtn">
            <input 
            type="email" 
            className="input" 
            placeholder="Enter your email" 
            required
            onChange={(e)=>setValues({...values,email:e.target.value})} />
            <br/>
            <input 
            type="password" 
            className="input" 
            placeholder="Enter your Password" 
            required
            onChange={(e)=>setValues({...values,password:e.target.value})} />
            <br/>
            <button onClick={() => {handleLogin()}} className="otp-btn">Login</button>
        </div>
        </Login>
        </div>
        </>
    )
}
export default Navbar;