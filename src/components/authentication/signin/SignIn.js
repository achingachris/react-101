import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
    
    const [formData, setFormData] = useState({name: '', password: ''})
    const {name, password} = formData;
    const navigate = useNavigate()
    const handleLogin = ()=>{
        if(!name || !password){
            console.log('All field are required')
        }
        else if (name==="Katana" && password==="test") {
            navigate('/');
        }
        else{
            console.error('Error:Invalid credentials')
        }
    }
  return (
    <div class="wrapper">
        <div class="nlogo">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Twitter
        </div>
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" value={formData.password} onChange={
                    (e) => setFormData({...formData, password: e.target.value})
                    }/>
            </div>
            <button class="btn mt-3" onClick={(e) => {e.preventDefault(); handleLogin()}}>Login</button>
        </form>
    </div>
  )
}

export default SignIn