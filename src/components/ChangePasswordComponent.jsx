
import {useNavigate} from 'react-router-dom'
import { changePasswordService } from './api/ChangePassApi'
import 'react-toastify/dist/ReactToastify.css';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {useAuth} from './AuthContext';


export default function ChangePasswordComponent(){

    const authContext = useAuth()
    const email = authContext.email;
    

    const navigate = useNavigate();

    // function is used to update a todo element
    function onSubmit(values) {
        //console.log("priting internal values "+ values.password)
       
        changePasswordService(email,values.password)
            .then(response => {
                console.log("password changed")
                navigate('/welcome')
               
                
            })
            .catch(error => console.log(error))
        
    }

    function validate(values){
        const errors = {};
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

     if(!strongRegex.test(values.password) ){
            errors.password = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        }

        return errors;
    }


    return (
        <div className="container">
            <h1 className='text-center' >Please Enter Your New Password </h1>
            <div>
                
                <Formik initialValues={ { } } 
                    // below will intitialise the form with the current values.. before change
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    // below 2 will make changes in console when we hit save
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                
                    <Form>
                    <ErrorMessage 
                        name="password"
                        component="div"
                        className = "alert alert-warning"
                    />
                                
                    <fieldset className="form-group">
                                    
                        <Field type="password" className="form-control" name="password" placeholder="Enter New Password"/>
                    </fieldset>
                            
                    <div style={{textAlign:"center"}}>
                        <button className="btn btn-secondary m-5"  type="submit">Save</button>
                        
                    </div>
                    </Form>
                    
                
                
                </Formik>
                <div style={{textAlign:"center"}}>
                <button class="button1"  onClick={() => navigate(-1)} ><span>Go Back </span></button>
                </div>
                
            </div>
            
        </div>
    )
}
