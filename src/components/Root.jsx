import { useLocation, useNavigate } from 'react-router-dom';
import './Root.css';


export default function Root(){
    const location = useLocation()
    const {root} =  location.state

    const navigate = useNavigate()

    function updateEmailUsingId(_id) {
      console.log('clicked ' + _id)
      navigate(`/update/${_id}`)
    
    }



    return (

      <>
      <div className="m-5">
        <hr />
      <h1 className='text-center'> Customer Details </h1>
      <div className="row">
        
        <hr />

        <div className="column" style={{backgroundColor:'#aaa'}}>
        <h2 className='text-center'>Basic Details</h2>
        </div>
        <div className="column" style={{backgroundColor:'#ddd'}}>
        <br />
        
        <tr><th>Unique Id </th><td> {root._id}</td></tr>
        <tr><th>Product Type </th><td>{root.productType}</td></tr>
        <tr><th>Customer Id </th><td> {root.customerId}</td></tr>
        <tr><th>Product SubType </th><td> {root.productSubType}</td></tr>
        <tr><th>Lender Id </th><td> {root.lenderId}</td></tr>
        <tr><th>Email </th><td> {root.email}</td><td><button className="btn btn-secondary" onClick={() => updateEmailUsingId(root._id)}>Update Email</button></td></tr>
        <tr><th>Mobile No </th><td> {root.mobile}</td></tr>
        <tr><th>PAN No</th><td> {root.pan}</td></tr>
        <tr><th>PAN Name </th><td>{root.panName}</td></tr>
        <tr><th>DOB </th><td> {root.dob}</td></tr>
        <tr><th>Gender </th><td> {root.gender}</td></tr>
        
      </div>
      <hr />
      

      <div className="column" style={{backgroundColor:'#aaa'}}>
        <h2 className="text-center">  Employment Details </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}}>
      <br />
        <tr><th>Employment Type </th><td> {root.employmentDetails.employmentType}</td></tr>
        <tr><th>Monthly Income </th><td> {root.employmentDetails.monthlyIncome}</td></tr>
      </div>
      <br />
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
        <h2 className="text-center">  Current Address </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
        <br />
        <tr><th>Pincode </th><td> {root.currentAddress.pincode}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
        <h2 className="text-center">  TNC Details </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
            <tr><th>Type </th><td> {root.tncDetails[0].type}</td></tr>
            <tr><th>Set Name </th><td> {root.tncDetails[0].setName}</td></tr>
            <tr><th>Version </th><td> {root.tncDetails[0].version}</td></tr>
            <tr><th>IsAccepted </th><td> {root.tncDetails[0].isAccepted.toString()}</td></tr>
            <tr><th>Accepted Time </th><td>{root.tncDetails[0].acceptedTime}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
      <h2 className="text-center">  Offer </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
      <tr><th>Loan Amount </th><td> {root.offer.loanAmount}</td></tr>
        <tr><th>Disbursed Amount </th><td> {root.offer.disbursedAmount}</td></tr>
        <tr><th>ROI </th><td> {root.offer.roi}</td></tr>
        <tr><th>ROI Unit </th><td>{root.offer.roiUnit}</td></tr>
        <tr><th>Processing Fee Rate </th><td> {root.offer.processingFeeRate}</td></tr>
        <tr><th>Tenure </th><td> {root.offer.tenure}</td></tr>
        <tr><th>Tenure Unit </th><td> {root.offer.tenureUnit}</td></tr>
        <tr><th>Repayment Amount </th><td> {root.offer.repaymentAmount}</td></tr>
        <tr><th>Installment Amount </th><td> {root.offer.installmentAmount}</td></tr>
        <tr><th>Installment Frequency </th><td> {root.offer.installmentFrequency}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
      <h2 className="text-center">  White List Offer </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
      <tr><th>Base Id </th><td> {root.whitelistOffer.baseId}</td></tr>
        <tr><th>Offer Id </th><td> {root.whitelistOffer.offerId}</td></tr>
      </div>
      <hr />


      <div className="column" style={{backgroundColor:'#aaa'}}>
      <h2 className="text-center">  Lender Information </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
      <tr><th>Application Id </th><td> {root.lenderInformation.applicationId}</td></tr>
        <tr><th>Customer Id </th><td> {root.lenderInformation.customerId}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
      <h2 className="text-center">  Last Updated At </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
      <tr><th>Date-NumberLong </th><td> {root.updatedAt.$date.$numberLong}</td></tr>
      </div>
      <hr />

      <div className="column" style={{backgroundColor:'#aaa'}}>
      <h2 className="text-center">  Class Name </h2>
      </div>
      <div className="column" style={{backgroundColor:'#ddd'}} >
      <br />
      <tr><th>Class </th><td> {root._class}</td></tr>
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