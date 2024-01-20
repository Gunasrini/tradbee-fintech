import { Col, Form, FormGroup, Input, Button } from 'reactstrap'
import Header from './Header'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <Header />
            <Col lg={4} className='mx-auto mt-5'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'>Login</h2>
                </div>
                <Form className='form login-form'>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-user"></i></span>
                        <Input type='text' placeholder='Email ID or Mobile Number' />
                    </FormGroup>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-eye-slash"></i></span>
                        <Input type='text' placeholder='Password' />
                    </FormGroup>
                    <div className='remember-me'>
                        <label><input type='checkbox' /> Remember me</label>
                        <p className='ms-auto mb-0'>
                            <Link to="/forgot-password" className='btn text-primary p-0'>Forgot Password</Link>
                        </p>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to="/dashboard/onboarding/business-kyc" className='btn btn-primary login-width'>Login</Link>
                    </div>
                    <div className='signup-info mt-5'>
                        <p>Not a user
                            <Link to="/register" className='btn text-primary'>Signup</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default Login