
import { Link } from "react-router-dom"
// import { useAuth } from "./security/AuthContext"

export default function HeaderComponent() {

    //const authContext = useContext(AuthContext)
    // const authContext = useAuth()

    // const isAuthenticated = authContext.isAuthenticated

    // function logout() {
    //     authContext.logout()
    // }

    //console.log(authContext)
    //console.log(authContext.number);

    const isAuthenticated=true;

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/welcome">Paytm</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {/* {isAuthenticated && <Link className="nav-link" to="/welcome/Jatin">Home</Link>} */}
                                    <Link className="nav-link" to="/login">Home</Link>
                                </li>
                                <li className="nav-item fs-5">
                                    {/* {isAuthenticated && <Link className="nav-link" to="/todos">Todos</Link>} */}
                                    <Link className="nav-link" to="/login">Todos</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {/* {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>} */}
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                {/* <li className="nav-item fs-5">
                                    {isAuthenticated && <Link className="nav-link" to="/welcome" onClick={logout}>Logout</Link>}
                                </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}