import React from 'react';
import './Consultant.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Consultant = ({ consultor }) => {
    const { img, name, position, id } = consultor;
    return (
        <Col className=" mt-5 ">
            <Card className="card">
                <Card.Img className="img card img-fluid image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Card.Text className="name">{position}</Card.Text>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between ">
                    <Link
                        to={`/doctorsdetails/${id}`}
                        className="btn w-50 btn-bg mx-1"
                    >
                     Details
                    </Link>
                    
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Consultant;