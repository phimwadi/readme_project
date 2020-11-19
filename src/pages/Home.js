import React, { ReactDOM } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from '../components/Bar';
import TableHome from '../components/TableHome'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useTranslation } from 'react-i18next';



const Home = () => {
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
                    {t('Describtion.1')}
                    </p>
                    <p className="grey-text w-responsive text-center mx-auto mb-6">
                    {t('Describtion2.1')}
                    </p>
                </section>
            </div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="4" md="12" className="mb-3">
                        <img src="https://ed.edtfiles-media.com/ud/news/1/140/419059/500rai_Cover-850x567.jpg" className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-3">
                        <img src="https://images.thaiza.com/37/37_20121226133538..jpg" className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                    <MDBCol lg="4" md="6" className="mb-3">
                        <img src="https://teawtalay.com/wp-content/uploads/4island-2.jpg" className="img-fluid z-depth-1" alt="" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div>
                <TableHome />
            </div>
        </div>
    )
}

export default Home;