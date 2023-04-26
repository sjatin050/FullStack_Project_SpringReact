import React,{ createContext, useContext, useState } from "react";
import {executeJwtAuthenticationService} from './api/LoginApi.js'
import {apiClient} from './api/ApiClient.js'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    async function login(username, password) {
        try{
            const response = await executeJwtAuthenticationService(username,password)
            if(response.status===200){
                const jwtToken = 'Bearer '+ response.data.token
                setToken(jwtToken)
                setAuthenticated(true)
                setUsername(username)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log("token added to all urls")
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                return true
            } else {
                logout()
                return false
            }
        }
        catch(error ){
            logout()
          return false
        }
     }

    function logout(){
        setUsername(null)
        setAuthenticated(false)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, username, token,login,logout}  }>
            {children}
        </AuthContext.Provider>
    )
}