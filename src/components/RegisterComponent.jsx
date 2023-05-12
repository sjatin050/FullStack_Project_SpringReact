import {useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {useNavigate} from 'react-router-dom';
import {executeJwtRegisterService} from './api/RegisterApi.js'

export default function RegisterComponent(){

    const navigate = useNavigate()
    const [showErrorMessage,setShowErrorMessage] = useState(false)

    function onSubmit(values){
       
        executeJwtRegisterService(values.firstName,values.lastName,values.email,values.password,values.role)
        .then((response) => {
            //console.log("bahar")
            console.log(response)
            if(response.data.register === false){
                //console.log("aandar")
                navigate(`/login`)
            }
            else{
                setShowErrorMessage(true)
            }
        })
        .catch(
            () => setShowErrorMessage(true)
        )
       
    }

    function validate(values){
        const errors = {};
        if(!values.email || !values.email.endsWith("@paytm.com") /*|| !values.email.endsWith("@ocltp.com") || !values.email.endsWith("@paytmbank.com") || !values.email.endsWith("@paytmpayment.com")*/){
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
                    <h1 className="m-5 text-center"> Register for LUP Admin Panel  </h1>
                </div>

                <Formik   onSubmit={onSubmit}
                          validate={validate}
                          validateOnChange={false}
                          validateOnBlur={false}
                          //initialValues={{username:"" , password:""}}
                          initialValues={{firstName:"",lastName:"",role:"",email:"" , password:""}}

                          enableReinitialize={true}
                    >
                    {
                        (props) => (
                            <Form className="row justify-content-center m-5">

                                <fieldSet className="form-group m-3">
                                    <label> First Name </label>
                                    <Field type="text" className="form-control" name="firstName" placeholder="Enter Your First Name"/>
                                </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <label> Last Name </label>
                                    <Field type="text" className="form-control" name="lastName" placeholder="Enter Your Last Name"/>
                                </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <label> User Role </label>
                                    <Field type="text" className="form-control" name="role" placeholder="ADMIN / USER"/>
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
                                                    <span>Already Registered , Please Login</span>
                                                    </div>
                                }

                                <button className="btn bg-dark text-white m-5 text-center" type="submit" > Register </button>
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

