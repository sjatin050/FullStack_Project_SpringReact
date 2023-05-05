import {useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {useNavigate} from 'react-router-dom';
import {useAuth} from './AuthContext';

export default function LoginComponent(){

    const navigate = useNavigate()
    const [showErrorMessage,setShowErrorMessage] = useState(false)

    const auth = useAuth()

    async function onSubmit(values){
        // if(await auth.login(values.username,values.password)){
        //     navigate(`/welcome`)
        // }
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
        return errors;
    }

    return (
        <div className="LoginComponent">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">

                <div>
                    <h1 className="m-5 text-center"> LUP Admin Panel  </h1>
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
                                    <label> Username </label>
                                    <Field type="text" className="form-control" name="username" placeholder="Enter Your Username"/>
                                </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <label> Email Id </label>
                                    <Field type="email" className="form-control" name="email" placeholder="Enter Your Paytm Email Id"/>
                                    <ErrorMessage name="email" className="text-danger" />
                                </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <label> Password </label>
                                    <Field type="password" className="form-control" name="password" placeholder="Enter Your Password"/>
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

