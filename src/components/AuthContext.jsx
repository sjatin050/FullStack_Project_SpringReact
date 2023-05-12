import React,{ createContext, useContext, useState } from "react";
import {executeJwtAuthenticationService} from './api/LoginApi.js'
import {apiClient} from './api/ApiClient.js'

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)

    //const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [token, setToken] = useState(null)
    const [role,setRole] = useState(null)

    async function login(email, password) {
    //async function login(username, password) {
        try{
            const response = (await executeJwtAuthenticationService(email,password))
            console.log(response);
            //const response = await executeJwtAuthenticationService(username,password)
            if(response.status===200){
                const val=response.data.authenticationResponse.access_token
                
                const jwtToken = 'Bearer '+ val
                
                console.log("JWT Tokens")
                setToken(jwtToken)
                setAuthenticated(true)
                setRole(response.data.role)
                //setUsername(username)
                setEmail(email)

                apiClient.interceptors.request.use(
                    (config) => {
                        
                        console.log(response)
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
        //setUsername(null)
        setEmail(null)
        setAuthenticated(false)
        setToken(null)
        setRole(null)
        localStorage.removeItem('')
    }

    return (
        //<AuthContext.Provider value={ {isAuthenticated, username, token,login,logout}  }>
        <AuthContext.Provider value={ {isAuthenticated, email, token,login,logout,role}  }>
            {children}
        </AuthContext.Provider>
    )
}