import react ,{useState} from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Form , Row ,Col  , Button} from 'react-bootstrap';
import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from 'axios';
import  '../App.css';
import Swal from 'sweetalert2'




function Personal() {



  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [company, setCompany] = useState("");
  const [interested, setInterested] = useState("");
  const [budget, setBudget] = useState("");
  const [about, setAbout] = useState("");
  const [images, setImage] = useState(null);



  const handleSubmit = e => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('firstname',firstname);
    form_data.append('lastname', lastname);
    form_data.append('email', email);
    form_data.append('contact', contact);
    form_data.append('company', company);
    form_data.append('interested',interested);
    form_data.append('budget', budget);
    form_data.append('about', about);
    form_data.append('images', images, images.name);
    let url = 'https://djangotestting.herokuapp.com/api/';
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
            showConfirmButton: false,
            timer: 1000000
          });
        
      
        })
        .catch(err => console.log(err))




  };

  return (
    <div className='sample'>
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
              <Form.Control type="text" value={firstname} onChange={e => setFirstname(e.target.value)} required placeholder="Firstname" />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" value={lastname} onChange={e => setLastname(e.target.value)} required placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" value={email} required placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            </Form.Group>


            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" value={contact} required placeholder="Phone" onChange={e => setContact(e.target.value)} />
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
                <option>Budget</option>
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
         
    <Form.File name='files' required onChange={e => setImage(e.target.files[0])} id="exampleFormControlFile1"  />
  </Form.Group>
  </Form.Row>

          <Form.Row  className='mt-4'>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>About about</Form.Label>
              <Form.Control as="textarea"   onChange={e => setAbout(e.target.value)}>

              </Form.Control>
            </Form.Group>

          </Form.Row>









          <Button variant="outline-warning" href="/" >Cancel</Button>{' '}
          <Button variant="outline-primary" type='submit'>Save</Button>{' '}
        </Form>
      </div>



    </div>
  );
}

export default Personal
