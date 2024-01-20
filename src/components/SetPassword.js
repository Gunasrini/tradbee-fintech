import { Col, Form, FormGroup, Input, Button } from 'reactstrap'
import Header from './Header'
import { Link } from 'react-router-dom'

function SetPassword() {
    return (
        <>
            <Header />
            <Col lg={4} className='mx-auto mt-5'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'>Set Password</h2>
                </div>
                <Form className='form login-form'>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-eye-slash"></i></span>
                        <Input type='text' placeholder='Set Password' />
                    </FormGroup>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-eye-slash"></i></span>
                        <Input type='text' placeholder='Repeat Password' />
                    </FormGroup>
                    <div className='text-center mt-5'>
                        <Link to='/' className='btn btn-primary login-width'>Set Password</Link>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default SetPassword