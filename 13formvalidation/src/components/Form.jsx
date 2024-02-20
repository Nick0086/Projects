import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Form.css';
import { useFormik } from 'formik';
import * as yup from 'yup';
function Forms() {

    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        password: '',
        confpassword: '',
        check: false,
        gender:'',
    }

    const validation = yup.object({
        fname: yup.string().min(2).max(36).required("First name is required"),
        lname: yup.string().min(2).max(36).required("Last Name is Required!"),
        email: yup.string().email('Email must be valid').required('Please enter your Email'),
        phone: yup.number().typeError("Phone number must be a number").positive().integer().required("Phone Number is Required"),
        password: yup.string().min(8, 'Password should contain at least 8 characters!')
            .matches(/(?=[0-9])/, "Password should contain a number")
            .matches(/(?=[a-z])/, "Password should contain a  small letter")
            .matches(/(?=[A-Z])/, "Password should contain a capital letter").required("Password is Required"),
        confpassword: yup.string().oneOf([yup.ref('password')], 'Confirm Password do not match with Passwords !'),
        check: yup.boolean().isTrue(`Check field must be Ckeck`),
        gender:  yup.string().required( "Gender is required").oneOf(['Male','Female','Other']),
    })

    const { values, handleSubmit, handleChange, handleBlur, touched, errors,handleReset } = useFormik({
        initialValues: initialValues,
        validationSchema: validation,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className='bg-prome h-100'>
            <Container className='h-100' >
                <Row className='h-100 align-items-center justify-content-center' >
                    <Col lg={8} md={11} sm={9}>
                        <div>
                            <h2>Register</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='fname' className='form-label' >First Name</Form.Label>
                                    <Form.Control type="text" name="fname" className="form-control" placeholder="e.g. John" id="fname" value={values.fname} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.fname && errors.fname && <span>{errors.fname}</span>
                                    }
                                </Col>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='lname' className='form-label' >First Name</Form.Label>
                                    <Form.Control type="text" name="lname" className="form-control" placeholder="e.g. smith" id="lname" value={values.lname} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.lname && errors.lname && <span>{errors.lname}</span>
                                    }
                                </Col>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='email' className='form-label' >Email Address</Form.Label>
                                    <Form.Control type="email" name='email' className="form-control" placeholder="e.g. admin123@gmail.com" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.email && errors.email && <span>{errors.email}</span>
                                    }
                                </Col>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='number' className='form-label' >Phone Number</Form.Label>
                                    <Form.Control type="text" name="phone" className="form-control" placeholder="e.g. 0000000000" id="number" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.phone && errors.phone && <span>{errors.phone}</span>
                                    }
                                </Col>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='Password' className='form-label' >Password</Form.Label>
                                    <Form.Control type="password" name="password" className="form-control" placeholder="Your Password" id="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.password && errors.password && <span>{errors.password}</span>
                                    }
                                </Col>
                                <Col md={6} xs={12} className='mb-4'>
                                    <Form.Label htmlFor='repassword' className='form-label' >Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confpassword" className="form-control" placeholder="Confirm Password" id="repassword" value={values.confpassword} onChange={handleChange} onBlur={handleBlur} />
                                    {
                                        touched.confpassword && errors.confpassword && <span>{errors.confpassword}</span>
                                    }
                                </Col>
                                <Col xs={12} className='mb-4' >
                                <Form.Label className='form-label me-4' >Gender</Form.Label>
                                    <Form.Check
                                        inline
                                        label="Male"
                                        name="gender"
                                        type="radio"
                                        id={`inline-radio-1`}
                                        className=''
                                        value="Male"
                                        onChange={handleChange}
                                         onBlur={handleBlur}
                                    />
                                    <Form.Check
                                        inline
                                        label="Female"
                                        name="gender"
                                        type="radio"
                                        id={`inline-radio-2`}
                                        value="Female"
                                        onChange={handleChange}
                                         onBlur={handleBlur}
                                    />
                                    <Form.Check
                                        inline
                                        label="Other"
                                        name="gender"
                                        type="radio"
                                        id={`inline-radio-3`}
                                        value="Other"
                                        onChange={handleChange}
                                         onBlur={handleBlur}
                                    />
                                    {
                                        touched.gender && errors.gender && <span className='d-block' >{errors.gender}</span>
                                    }
                                </Col>
                                <Col xs={12} className='d-flex '>
                                    <Form.Check className=' me-2 ' id="check" name='check' type="checkbox" checked={values.check} value={values.check} onChange={handleChange} onBlur={handleBlur} /><Form.Label className="caption" htmlFor="check">Creating an account means you're okay with our Terms and Conditionsand our Privacy Policy.</Form.Label>
                                </Col>
                                {
                                    touched.check && errors.check && <span>{errors.check}</span>
                                }
                                <Col xs={12} className='mt-4' >
                                    <Button variant="warning" type="submit">
                                        Submit
                                    </Button>
                                    <Button variant="warning" type="reset" onClick={handleReset} >
                                        Reset
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Forms;