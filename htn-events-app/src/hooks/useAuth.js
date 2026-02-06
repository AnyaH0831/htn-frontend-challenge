import {useState} from 'react';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (username, password) => {
        if (username === 'hacker' && password === 'htn2026'){
            setIsLoggedIn(true);
            return true;
        }else{
            
            return false;
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return {isLoggedIn, login, logout};

}