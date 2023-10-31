import { useState } from 'react';
import AuthContext from './authContext';

const AuthState = (props) => {
    const [authToken, setauthToken] = useState(null);
    return (
        <AuthContext.Provider value={{ authToken, setauthToken }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;