import React from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useState, useEffect } from "react";
const useUser = ()=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(getAuth(), user=>{
            setUser(user);
            setLoading(false)

        });

        return unsbscribe;
    },[])

    return {user, loading}

}

export default useUser;