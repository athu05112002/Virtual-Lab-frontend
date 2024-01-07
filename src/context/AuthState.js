import { useState } from 'react';
import AuthContext from './authContext';

const AuthState = (props) => {
    function getAuthToken() {
        const name = 'authToken=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                const authTokenString = cookie.substring(name.length, cookie.length);
                return JSON.parse(authTokenString); // Parse the JSON string back to an object
            }
        }
        return null;
    }
    const [authToken, setauthToken] = useState(getAuthToken());
    return (
        <AuthContext.Provider value={{ authToken, setauthToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;