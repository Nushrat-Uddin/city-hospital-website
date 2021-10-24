// import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useConsultants from '../../hooks/useConsultants';
import Consultant from '../Consultant/Consultant';

const Consultants = () => {
    const [consultors] = useConsultants();
    return (
        <>
            <div className="text-enter py-5">
                <h1 style={{ color: 'navy' }} className="fs-1">Make an Appointment</h1>
                <h3 style={{ color: '#2C77B1' }} className=" fs-3">select your Doctor</h3>
            </div>
            <div className=" container-fluid px-4 p-md-5">
                <Row xs={1} md={3} lg={3} xl={4} className="g-4">
                    {
                        consultors.map(consultor => <Consultant
                            key={consultor.id}
                            consultor={consultor}
                        ></Consultant>)
                    }
                </Row>
            </div>
        </>
    );
};

export default Consultants;