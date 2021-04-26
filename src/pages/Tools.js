import React, { ReactDOM } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from '../components/Bar';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useTranslation } from 'react-i18next';
import QR from '../components/QR';
import './Tools.css';
import Translate from '../components/Translate';
import Ocr from '../components/Ocr';
import SearchEngine from '../components/SearchEngine';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Features from './Features';


class Tool extends React.Component {
    // const { t } = useTranslation();
    render() {

        return (
            <div>

                <div>
                    <Bar />
                </div>
                <div>
                    <section className="my-5">
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            " ReadMe Tourist "
                    </h2>
                        <p className="grey-text w-responsive text-center mx-auto mb-6">
                            " หน้านี้เป็นหน้าสำหรับอำนวยความสะดวกนักท่องเที่ยวในเรื่องของการช่วยเหลือแปลภาษาเมนูอาหาร "
                    </p>

                    </section>
                </div>


                <div className="Tool">
                    <Ocr />
                </div>
                <br></br>
                <br></br>
                <br></br>

                <div className="Tool">
                    <li><Link to="/features">Click here to see the translation.</Link></li>
                    
                </div>

                {/* <div className="Tool">
                <Translate/>
            </div>
             */}
            {/* <div className="Tool">
                <SearchEngine/>
            </div> */}
                <br></br>
                <br></br>
                <br></br>

            </div>
        )
    }
}
export default Tool;