import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { updateEmailApi ,retrieveRootById} from './api/rootsApi'
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
    
    // this is used to call function to render effect
    useEffect(
        () => retrieveEmail(_id),[_id]
        )

    function retrieveEmail(_id){
        // will not work for new Todo
        
            retrieveRootById(_id)
            .then(response => {
                console.log(response)
                setEmail(response.data.email)
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
                navigate('/welcome')
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
            <h1>Enter The New Email </h1>
            <div>
                <Formik initialValues={ { email} } 
                    // below will intitialise the form with the current values.. before change
                    enableReinitialize = {true}
                    onSubmit = {onSubmit}
                    validate = {validate}
                    // below 2 will make changes in console when we hit save
                    validateOnChange = {false}
                    validateOnBlur = {false}
                >
                {
                    (props) => (
                         // below 2 are added to tell errors after validation
                         <Form>
                            <ErrorMessage 
                                name="email"
                                component="div"
                                className = "alert alert-warning"
                            />
            

                            <fieldset className="form-group">
                                <label>Email</label>
                                <Field type="Email" className="form-control" name="email" />
                            </fieldset>
                           
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                         </Form>
                    )
                }
                </Formik>
            </div>
            <button classNmae = "button1" onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}