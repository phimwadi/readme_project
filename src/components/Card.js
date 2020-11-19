import React from 'react';

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

const Card = () => {
    return (
        <div>
            <div>
                <div>
                    
                        <MDBCardBody>
                                <MDBCol md="12">
                                    <MDBCard reverse>
                                        <MDBCardBody cascade className="text-center">
                                            <h2 className="font-weight-bold">
                                                <a href="#!">10 อันดับ จังหวัดที่น่าท่องเที่ยวในไทย </a>
                                            </h2>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                        </MDBCardBody>
                </div>
            </div>
        </div>

    );
}

export default Card;