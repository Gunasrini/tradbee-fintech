import { Col, Form, FormGroup, Input, Button } from 'reactstrap'
import Header from './Header'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <>
            <Header />
            <Col lg={4} className='mx-auto'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'><span className='text-primary'>You'll never worry</span> <br /> about money again</h2>
                </div>
                <Form className='form register-form'>
                    <FormGroup className='mb-4'>
                        <Input type='text' placeholder='Full Name' />
                    </FormGroup>
                    <FormGroup className='mb-4 mobile-number-field'>
                        <Input type='text' placeholder='+91' />
                        <Input type='text' placeholder='Mobile Number' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='email' placeholder='Official Email ID' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='text' placeholder='Company Name' />
                    </FormGroup>
                    <div className='remember-me mb-5'>
                        <label><input type='checkbox' /> I agree to  <a href='#' className='btn text-primary p-0 ps-1'> terms & conditions</a></label>
                        <label className='ms-auto'><input type='checkbox' />Inform me about latest news and tips</label>
                    </div>
                    <div className='text-center'>
                        <Link to="/" className='btn btn-primary login-width'>Create Account</Link>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default Register