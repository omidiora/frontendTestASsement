import react , {useState} from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Form , Row ,Col  , Button} from 'react-bootstrap';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';
import  '../App.css';
import Swal from 'sweetalert2';
import LoadingOverlay from 'react-loading-overlay';
import Loader from "react-loader-spinner";





function Personal(isActive) {


  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [interested, setInterested] = useState("");
  const [budget, setBudget] = useState("");
  const [about, setAbout] = useState("");
  const [images, setImage] = useState(null);
  var [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

 

  if(error==null){
  
document.getElementById('demo')


  }


  const handleSubmit = (e )=> {

    setLoading(true);
    e.preventDefault();

    if(firstname== '' || firstname < 3){
      setError("The Form field cannot be empty and must be greater than 3");
     }
     if(lastname== '' || lastname < 3){
    setError("The Last name cannot be empty and must be greater than 3");
     }

     if (typeof email !== "undefined" || email !== "") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
      if (!pattern.test(email)) {
    
        let isValid = false;

        setError("Please enter valid email address");
      }
      
    
    }
  
    if(images=="")
    {
      setError('Select an images')
    }

    if(budget==""){
     setError("Select a Budget");
     
    }
    if(interested==""){
      setError("Select a interested value");
     
    }
    
    else{
    


    

  
    let form_data = new FormData();
    form_data.append('firstname',firstname);
    form_data.append('lastname', lastname);
    form_data.append('email', email);
    form_data.append('contact', contact);
    form_data.append('company', company);
    form_data.append('interested',interested);
    form_data.append('budget', budget);
    form_data.append('about', about);
    form_data.append('images', images, images.name ? images.name : " ");
    let url = 'https://djangorestt.herokuapp.com/api/';
    
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          
        
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Personal Info has been Saved',
            showConfirmButton: true,
           
          });
         
          window.location = "/";
      
        })
        .catch(err => console.log(err))




   } };

 

  return (
    <div className='sample'>

      <div className='text-center'>
      <span id='demo' className="alert alert-warning mt-4" role="alert">{error}</span>
      </div>
      <h5>Sample form1  </h5>
      <hr></hr>

      <div className='sample-color ml-4'>

      <i class="fas fa-user-alt"></i><span className='ml-4'>Personal Info</span>  
     

      </div>

      <hr></hr>


      <div className='container-fluid'>
        <Form onSubmit={handleSubmit}>
     

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
     
 type="text" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder="Firstname" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" value={email} placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" value={contact} placeholder="Phone" onChange={e => setContact(e.target.value)} />
            </Form.Group>
          </Form.Row>

          <hr></hr>
          <div className='container-fluid  sample-color' >
            <span> <MDBIcon far icon="save " /> Requirements </span>
          </div>

          
          <Form.Row className=' margin-top'>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" value={company} placeholder="Company Name" onChange={e => setCompany(e.target.value)} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Interested in</Form.Label>
              <Form.Control as="select" onChange={e => setInterested(e.target.value)}>
                <option>Interested in </option>
                <option value='music'>music</option>
                <option value='school'>School</option>
                <option value='dancing'>Dancing</option>
                <option vralue='talking'>Talking</option>
              </Form.Control>
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Budget</Form.Label>
              <Form.Control as="select" onChange={e => setBudget(e.target.value)}>
                <option value="">Budget</option>
                <option value='1000'>1000</option>
                <option value='2000'>2000</option>
                <option value='3000'>3000</option>
                <option value='4000'>4000</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        
          <Form.Row className='mt-4 '>
          <Form.Label>Select File</Form.Label>
          <Form.Group>
         
    <Form.File name='files'  required onChange={e => setImage(e.target.files[0])} id="exampleFormControlFile1"  />
  </Form.Group>
  </Form.Row>

          <Form.Row  className='mt-4'>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>About about</Form.Label>
              <Form.Control as="textarea"   onChange={e => setAbout(e.target.value)}>

              </Form.Control>
            </Form.Group>

          </Form.Row>









          <Button variant="outline-primary" href="/" >Cancel</Button>{' '}
        {loading ?  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        className='loads'
       
      /> :   <Button variant="outline-warning"  type='submit'>Save</Button>}
        </Form>
      </div>



    </div>
  );
}

export default Personal
