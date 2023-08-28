
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Confirm() {
  return (

<>
<Navbar/>
<div  style={{ backgroundColor:'powderblue',height:'100vh' }}>
<div className='row ' style={{ paddingTop:'5rem' }}>
  <div className='col-md-2 '></div>
  <div className='col-md-4 '  style={{ backgroundColor:'lightgreen' }}>

<Form>
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
  <select class="form-select" aria-label="Default select example" required>
  <option selected>Select Payment Method</option>
  <option value="1">Bkash</option>
  <option value="2">Nagod</option>
  <option value="3">Roket</option>
</select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="Number" placeholder="Mobile Number" style={{ marginTop:'1.5rem' }} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ width:'100%',marginBottom:'2rem' }}>
       <Link to='/welldone'  style={{ color:'white',fontSize:'1.4rem',textDecoration:'none' }}>Submit</Link> 
      </Button>
    </Form>
    </div>
    <div className='col-md-4 p-4 mr-3' style={{ backgroundColor:'lightgray' }}>

<h2>Flow Instruction</h2>
<h4>Send your course fee to any Bkash/Nagod/Roket </h4>
<div>
<p>Bkash: 01798562848</p>
<p>Nagod: 01798562848</p>
<p>Roket: 01798562848</p>
</div>
<h4>For further help contact helpline Within 10AM to 10PM. <br/>   Mobile: 01798562848 , WhatsApp: 01798562848</h4>
 </div>
 
</div>
<div className='col-md-2'></div>

</div>

    
    </>
  );
}

export default Confirm;