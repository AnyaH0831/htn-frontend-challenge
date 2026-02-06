import {useState} from 'react';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (username, password) => {
        if (username === 'hacker' && password === 'htn2026'){
            setIsLoggedIn(true);
            return true;
        }else{
            setIsLoggedIn(false)
            return false;
        }
    }

}