import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DeptItem.css'

const DeptItem = (props) => {
    const { img, name } = props.dept;
    return (
        <Col className="mt-5">
            <Card className="card">
                <Card.Img className="img card image" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>
                </Card.Body>
                <Card.Body>
                    <Link className="nav-link" to="/consultants"><Button
                        className="w-100 ">View</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default DeptItem;