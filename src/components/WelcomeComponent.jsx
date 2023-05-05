//import {useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import {useNavigate} from 'react-router-dom';

export default function WelcomeComponent(){

    //const [roots,setRoots] = useState([])

    const initialValues = {
        idNumber:"",
        idType:"",
      };

    const idTypes = [
              { value: 'lead_id', label: 'Lead Id' },
              { value: 'customer_id', label: 'Customer Id' },
              { value: 'product_type', label: 'Product Type' },
              { value: 'loan_account_number', label: 'Loan Account Number' }
            ];


    const navigate = useNavigate()

    function onSubmit(values){
        const strValues = values.idType + "&" + values.idNumber;
        //console.log(strValues)
        navigate(`/search/${strValues}`)
    }

    function validate(values){
        const errors = {};
        if(!values.idType){
            errors.idType = "Please select an option"
        }
        return errors;
    }

    return (

        <div className="WelcomeComponent">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div>
                    <h2 className="m-5 text-center "> Welcome & search  </h2>
                </div>
                <Formik   initialValues={initialValues}
                          onSubmit={onSubmit}
                          validate={validate}
                          validateOnChange={false}
                          validateOnBlur={false}
                          enableReinitialize={true}
                    >
                    {
                        (props) => (
                            <Form className="row justify-content-center m-5">
                                  <fieldSet className="form-group m-3">
                                      <Field
                                            component="select"
                                            className="form-control"
                                            id="idType"
                                            name="idType"
                                      >
                                      <option value="">Select an option</option>
                                        {idTypes.map(option => (
                                          <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                      </Field>
                                      <ErrorMessage
                                              name="idType"
                                              component="div"
                                              className="text-danger"
                                        />
                                  </fieldSet>

                                <fieldSet className="form-group m-3">
                                    <Field type="text" className="form-control" name="idNumber"
                                     placeholder="Enter Your ID"/>
                                </fieldSet>

                                <button className="btn bg-dark text-white m-5 text-center" type="submit" >
                                    Submit
                                </button>
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