import React, { ReactDOM } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from '../components/Bar';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useTranslation } from 'react-i18next';
import QR from '../components/QR';
import './Tools.css';


const Tool = () => {
    const { t } = useTranslation();

    return (
        <div>

            <div>
                <Bar />
            </div>
            <div>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        " ReadMe Tourist"
                    </h2>
                    <p className="grey-text w-responsive text-center mx-auto mb-6">
                        "หน้านี้เป็นหน้าสำหรับอำนวยควาสะดวกนักท่องเที่ยวในเรื่องของเครื่องมือต่างๆ เช่น การสแกน QR-Code การแปลภาษา เป็นต้น"
                    </p>

                </section>
            </div>

            <div className="Tool">
                <QR />
            </div>
        </div>
    )
}

export default Tool;