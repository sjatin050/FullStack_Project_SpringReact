
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import SearchComponent from './SearchComponent'
import UpdateComponent from './UpdateComponent';
import HeaderComponent from './HeaderComponent';
import RegisterComponent from './RegisterComponent';
import Root from './Root'
import AuthProvider,{useAuth} from './AuthContext';

function IsAuthenticatedRoute({children}) {
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

function IsAuthoriseAndAdmin({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated && authContext.role==="ADMIN")
        return children

    return <Navigate to="/" />
}

export default function LUPApp(){

    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                        <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={ <LoginComponent /> } />
                            <Route path='/login' element={ <LoginComponent /> } />
                            <Route path='/register' element={ <IsAuthoriseAndAdmin><RegisterComponent /></IsAuthoriseAndAdmin> } />
                            <Route path='/welcome' element={ <IsAuthenticatedRoute> <WelcomeComponent /> </IsAuthenticatedRoute> } />
                            <Route path='/root' element={ <IsAuthenticatedRoute> <Root /> </IsAuthenticatedRoute>} />
                            <Route path='/search/:values' element={ <IsAuthenticatedRoute> <SearchComponent /> </IsAuthenticatedRoute>} />
                            <Route path='/update/:_id' element={ <IsAuthenticatedRoute> <UpdateComponent /> </IsAuthenticatedRoute> } />

                        </Routes>
                        {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    )

}