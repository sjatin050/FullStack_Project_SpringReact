import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { updateEmailApi ,retrieveRootById} from './api/rootsApi'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from './security/AuthContext'
import {Formik, Form, Field, ErrorMessage} from 'formik'
// import moment from 'moment'

export default function UpdateComponent(){

    const {_id} = useParams()
    console.log(_id)
    // const[description, setDescription] = useState('')

    // const[targetDate, setTargetDate] = useState('')

    const[email, setEmail] = useState('')

    // const authContext = useAuth()
    // const username = authContext.username

    const navigate = useNavigate();

    // const showToastMessage = () => {
    //     toast.success('Success Notification !', {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // };
    
    // this is used to call function to render effect
    useEffect(
        () => retrieveEmail(_id)
        )

    function retrieveEmail(_id){
        // will not work for new Todo
        
            retrieveRootById(_id)
            .then(response => {
                console.log(response)
                console.log(response.data[0].email)
                setEmail(response.data[0].email)
                // setTargetDate(response.data.targetDate)
        
            })
            .catch(error => console.log(error))
        
        
    
    }
    // function is used to update a todo element
    function onSubmit(values) {
        console.log("mera bhai "+ values.email)
        // const todo = {
        //     id: id,
        //     username: username,
        //     description: values.description,
        //     targetDate: values.targetDate,
        //     done: false
        // }
        // console.log(todo)

      
            updateEmailApi(_id,values.email)
            .then(response => {
                var para = "lead_id&" + _id;
                navigate(`/search/${para}`)
                // navigate(-1);
                // window.location.reload(false); 
                
            })
            .catch(error => console.log(error))
        
    }

    function validate(values){
        const errors = {};
        if(!values.email || !values.email.endsWith("@paytm.com")){
            errors.email = "Enter a Valid Paytm Email Id"
        }
        console.log(errors);
        return errors;
    }


    return (
        <div className="container">
            <h1 className='text-center' >Enter The New Email </h1>
            <div>
                {console.log(email)}
                <Formik initialValues={ { email} } 
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
                        name="email"
                        component="div"
                        className = "alert alert-warning"
                    />
                                
                    <fieldset className="form-group">
                                    
                        <Field type="Email" className="form-control" name="email" />
                    </fieldset>
                            
                    <div style={{textAlign:"center"}}>
                        <button className="btn btn-secondary m-5" /*onClick={showToastMessage}*/ type="submit">Save</button>
                        {/* <ToastContainer /> */}
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