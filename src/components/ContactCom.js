import { Form, Button } from 'react-bootstrap';

function ContactCom() {

    const getformdata = (e)=>{
        e.preventDefault()
    }

    return (
        <>
            <section>
                <div className='container py-5'>
                    <h2> Contact Us</h2>
                    <Form onSubmit={getformdata}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="email" placeholder="Mobile Number" />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            </section>
        </>
    )
}

export default ContactCom;