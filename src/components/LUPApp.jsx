
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import SearchComponent from './SearchComponent'
import UpdateComponent from './UpdateComponent';
import HeaderComponent from './HeaderComponent';
import RegisterComponent from './RegisterComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import Root from './Root'
import AuthProvider,{useAuth} from './AuthContext';

function IsAuthenticatedRoute({children}) {
    const authContext = useAuth()

    //const cookie=authContext.cookies
    
    // console.log(cookie.token)
        // if(cookie.myCookie.Role)
        // {
        //     console.log("printing cookie data1")
        //     authContext.setAuthenticated(true)
        //     authContext.setRole(cookie.myCookie.Role)
        //     //console.log(cookie.role)
        //     // authContext.setRole(cookie.role)
        //     // authContext.setAuthenticated(true)
        //     // return children
        // }
        //else 

        if(authContext.isAuthenticated){
            console.log("after refresh IsAuthenticatedRoute")
            return children
        }
        else{
            //authContext.setAuthenticated(false)
            return <Navigate to="/" />
        }

}

function IsAuthoriseAndAdmin({children}){
    const authContext = useAuth()
    //const cookie=authContext.cookies

    // if(cookie.myCookie.Role){

    //     console.log("printing cookie data2")
    //     authContext.setAuthenticated(true)
    //     authContext.setRole(cookie.myCookie.Role)
    //     //console.log(cookie.role)
    //     // authContext.setRole(cookie.role)
    //     // console.log(cookie.role)
    //     // if(cookie.role==="ADMIN")
    //     // return children
    //     // else
    //     // return <Navigate to="/" />
    // }
    //else 
    if(authContext.isAuthenticated && authContext.role==="ADMIN")
    {
        console.log("after refresh IsAuthoriseAndAdmin")
        return children
    }
    else{
        return <Navigate to="/" />
    }

    // if(cookie!==null)
    //     {
    //         authContext.setAuthenticated(true)
    //         return children
    //     }
    //     else if(authContext.isAuthenticated){
    //         return children
    //     }
    //     else{
    //         authContext.setAuthenticated(false)
    //         return <Navigate to="/" />
    //     }

    // if(authContext.isAuthenticated && authContext.role==="ADMIN")
    //     return children

    // return <Navigate to="/" />
}

// function IsNotAuthorize(){

//     const authContext = useAuth()
    
//     if(authContext.isAuthenticated)
//     {
//         authContext.logout()
//         return <Navigate to="/welcome" />
//     }
//     else{
//         authContext.logout()
//         return <Navigate to="/login" />
//     }
// }

export default function LUPApp(){

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                        <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={  <LoginComponent />  } />
                            <Route path='/login' element={  <LoginComponent /> } />
                            <Route path='/register' element={ <IsAuthoriseAndAdmin><RegisterComponent /></IsAuthoriseAndAdmin> } />
                            <Route path='/welcome' element={ <IsAuthenticatedRoute> <WelcomeComponent /> </IsAuthenticatedRoute> } />
                            <Route path='/root' element={ <IsAuthenticatedRoute> <Root /> </IsAuthenticatedRoute>} />
                            <Route path='/search/:values' element={ <IsAuthenticatedRoute> <SearchComponent /> </IsAuthenticatedRoute>} />
                            <Route path='/update/:_id' element={ <IsAuthenticatedRoute> <UpdateComponent /> </IsAuthenticatedRoute> } />
                            <Route path='*' element={<ErrorComponent/>}></Route>

                        </Routes>
                        <FooterComponent/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )

}