import { useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {useNavigate, Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext';
import './loginRegister.css';

export default function LoginComponent(){

    const navigate = useNavigate()
    const [showErrorMessage,setShowErrorMessage] = useState(false)

    const auth = useAuth()


     //useEffect((auth) => {

            if(auth.isAuthenticated)
            return <Navigate to="/welcome" />
        //}, [auth]);
 

    

    async function onSubmit(values){
       
        if(await auth.login(values.email,values.password)){
            navigate(`/welcome`)
        }
        else{
            setShowErrorMessage(true)
        }
    }

    function validate(values){
        const errors = {};
        if(!values.email || !values.email.endsWith("@paytm.com")){
            errors.email = "Enter a Valid Paytm Email Id"
        }
        else if(!values.password){
            errors.password = "Please Enter your password"
        }

        return errors;
    }

    return (
        <div className="LoginComponent">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">

                <div>
                    <b><h1 className="m-5 text-center"> Admin USER Panel  </h1></b>
                </div>

                <Formik   onSubmit={onSubmit}
                          validate={validate}
                          validateOnChange={false}
                          validateOnBlur={false}
                          //initialValues={{username:"" , password:""}}
                          initialValues={{email:"" , password:""}}
                          enableReinitialize={true}
                    >
                    {
                        (props) => (
                            <Form className="row justify-content-center m-5">

                                

                                <fieldSet className="form-group m-3">
                                    <label> Email Id </label>
                                    <Field type="email" className="form-control" name="email" placeholder="Enter Your Paytm Email Id"/>
                                    <ErrorMessage name="email" component="div" className = "alert alert-danger" />
                                </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <label> Password </label>
                                    <Field type="password" className="form-control" name="password" placeholder="Enter Your Password"/>
                                    <ErrorMessage name="password" component="div" className = "alert alert-danger" />
                                </fieldSet>

                                {showErrorMessage && <div className="errorMessage text-center text-danger">
                                                    <span>Authentication Failed. Please check your credentials.</span>
                                                    </div>
                                }

                                <button className="btn bg-dark text-white m-5 text-center" type="submit" > Login </button>
                            </Form>
                        )
                    }
                </Formik>
              </div>
            </div>
          </div>
        </div>
    )
}

