import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const login = async()=>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password)
            navigate('/articles')
        }catch(e){
            setError(e.message)
        }
        
    }

    return (
        <>
            <h1>Log In</h1>
            {error &&<p className="error">{error}</p>}
            <input
            placeholder="Your Email address"
            value={email}
            onChange={e=>setEmail(e.target.value)}

            />
            <input 
            placeholder="Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            type="password" />
            <button onClick={login}>Log In</button>
            <Link to='/create-account'>Don't have an account? create here</Link>
        </>
    )
}

export default LoginPage;