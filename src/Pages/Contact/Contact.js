import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="backgrnd-img">
            <div className="container mx-auto">
                <div className=" row g-4">
                    <h1 className="text-left">Contact Us</h1>
                    <hr />
                    <h5>Mailing Address:</h5>
                    <p>1/8, Block-E, Lalmatia, Satmosjid Road, Mohammadpur, Dhaka - 1207.</p><br />
                    <h5>Telephone</h5>
                    <p>8143312, 8143437, 8143166, 8143167, 9124436</p><br />
                    <h5>Email</h5>
                    <p>cityhosp.bd@gmail.com & info@cityhospitalbd.com</p>
                    <h6>Or you can contact with us by submiting below form ...</h6>

                    <div className="col-md-6 text-left py-5">
                        <Form className="w-100">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Patient Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Age:</Form.Label>
                                <Form.Control placeholder="Patient Age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address:</Form.Label>
                                <Form.Control placeholder="Address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Remark</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;