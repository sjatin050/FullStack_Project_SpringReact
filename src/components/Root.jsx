//import {useState , useEffect} from "react";
import { useLocation, useNavigate} from 'react-router-dom';
import './Root.css';
import {useAuth} from './AuthContext';

export default function Root(){
    const location = useLocation()
    var {root} =  location.state
    //console.log(root)

    // const [roots, setRoots] = useState(null)
    // setRoots(root)
    // console.log(roots)

    if(root===null){
      root=localStorage.getItem('root');
    }

    localStorage.setItem('root', root);

    
    const navigate = useNavigate()

    const authContext = useAuth()
    const role = authContext.role
    // console.log(authContext.username);
    // console.log(authContext.email);
    // const username = authContext.username

    // useEffect(() => {
    //   // Check if there is a saved authentication state in localStorage
    //   const savedRoot = localStorage.getItem('root');
    //   //console.log(savedRoot)
    //   console.log(savedRoot)
  
    //   if (savedRoot) {
    //     if(authContext.isAuthenticated)
    //     return <Navigate to="/root" />
    //   }
    // }, []);

    

    function updateEmailUsingId(_id) {
      //console.log('clicked ' + _id)
      localStorage.removeItem('root');
      navigate(`/update/${_id}`)
    
    }



    return (

      <>
      <div className="m-5">
        <hr />
      <h1 className='text-center' > Customer Details </h1>
      <div className="row">
        
        <hr />

        <div className="column" style={{backgroundColor:'#002E6E'}}>
        <h2 className='text-center' style={{color:'white'}} >Basic Details</h2>
        </div>
        <div className="column" style={{backgroundColor:'#00B9F1'}}>
        <br />
        
        <tr><th>Unique Id </th><td> {root._id}</td></tr>
        <tr><th>Product Type </th><td>{root.productType}</td></tr>
        <tr><th>Customer Id </th><td> {root.customerId}</td></tr>
        <tr><th>Product SubType </th><td> {root.productSubType}</td></tr>
        <tr><th>Lender Id </th><td> {root.lenderId}</td></tr>
        <tr><th>Email </th><td> {root.email}</td><td>{ role === 'ADMIN' && <button className="btn btn-secondary" onClick={() => updateEmailUsingId(root._id)}>Update Email</button>}</td></tr>
        <tr><th>Mobile No </th><td> {root.mobile}</td></tr>
        <tr><th>PAN No</th><td> {root.pan}</td></tr>
        <tr><th>PAN Name </th><td>{root.panName}</td></tr>
        <tr><th>DOB </th><td> {root.dob}</td></tr>
        <tr><th>Gender </th><td> {root.gender}</td></tr>
        
      </div>
      <hr />
      

      <div className="column" style={{backgroundColor:'#002E6E'}}>
        <h2 className="text-center" style={{color:'white'}}>  Employment Details </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}}>
      <br />
        <tr><th>Employment Type </th><td> {root.employmentDetails.employmentType}</td></tr>
        <tr><th>Monthly Income </th><td> {root.employmentDetails.monthlyIncome}</td></tr>
      </div>
      <br />
      <hr />

      <div className="column" style={{backgroundColor:'#002E6E'}}>
        <h2 className="text-center" style={{color:'white'}}>  Current Address </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}} >
        <br />
        <tr><th>Pincode </th><td> {root.currentAddress.pincode}</td></tr>
      </div>
      <hr />
 

      <div className="column" style={{backgroundColor:'#002E6E'}}>
      <h2 className="text-center" style={{color:'white'}}>  Offer </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}} >
      <br />
      <tr><th>Loan Amount </th><td> {root.offer.loanAmount}</td></tr>
        <tr><th>Disbursed Amount </th><td> {root.offer.disbursedAmount}</td></tr>
      
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#002E6E'}}>
      <h2 className="text-center" style={{color:'white'}}>  White List Offer </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}} >
      <br />
      <tr><th>Base Id </th><td> {root.whitelistOffer.baseId}</td></tr>
        <tr><th>Offer Id </th><td> {root.whitelistOffer.offerId}</td></tr>
      </div>
      <hr />


      <div className="column" style={{backgroundColor:'#002E6E'}}>
      <h2 className="text-center" style={{color:'white'}}>  Lender Information </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}} >
      <br />
      <tr><th>Application Id </th><td> {root.lenderInformation.applicationId}</td></tr>
        <tr><th>Customer Id </th><td> {root.lenderInformation.customerId}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#002E6E'}}>
      <h2 className="text-center" style={{color:'white'}}>  Last Updated At </h2>
      </div>
      <div className="column" style={{backgroundColor:'#00B9F1'}} >
      <br />
      <tr><th>Date-NumberLong </th><td> {root.updatedAt.$date.$numberLong}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#002E6E'}}>
      <h2 className="text-center" style={{color:'white'}}>  Class Name </h2>
      </div>
     
      <hr />


</div>


      </div>
      <div className="m-5" style={{textAlign:"center"}}>
      <button class="button1" /*style={{display:"inline-block"}}*/ onClick={() => navigate(-1)} ><span>Go Back </span></button>
      </div>
      
      </>
    );
}