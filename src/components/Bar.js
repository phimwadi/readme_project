import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Bar(){

    function handleClick(lang) {
        i18next.changeLanguage(lang)
      }

      const { t } = useTranslation();



 

    return (

        <div>
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.thairath.co.th/media/HCtHFA7ele6Q2dULxQHo7L050BSosjICImTh8ts5B4x6T2txj4J5it4TDXimFjTszi.jpg?fbclid=IwAR0Dbqg2iEvYH8ilQ6CExtVcr-RhuYsW1ksmR_kICkdQ62sze5GaNNex_Oo"
                        style={{ height: 600, width: 900 }}
                    />
                    <Carousel.Caption>
                        <h1>ดอยอินทนนท์</h1>
                        <h2>" Chaimai ,Thailand "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bkkaruncloud.b-cdn.net/wp-content/uploads/2018/11/krabi-to-koh-lipe.jpg?fbclid=IwAR1aoBkeoiejx0VVtxonEaSvutI_W70n9RIoYE0X9ql6JxPOu6hlnfQQTnA"
                        style={{ height: 600, width: 900 }}
                    />
                    <Carousel.Caption>
                        <h1>เกาะหลีเป๊ะ</h1>
                        <h2>" Satun ,Thsiland "</h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sites.google.com/site/touristattractionkanchanaburi/_/rsrc/1432636208866/natk/natk-hwy-khmin/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%82%E0%B8%A1%E0%B8%B4%E0%B9%89%E0%B8%99.jpg?fbclid=IwAR0zIXO-Afsd3pavTIkh-XUKtAZzb8ulu3mM8dgxhTpJsqz6wETBUNyre7M"
                        style={{ height: 600, width: 900 }}
                    />
                    <Carousel.Caption>
                        <h1>น้ำตกห้วยแม่ขมิ้น</h1>
                        <h2>" Kanjanaburi ,Thailand "</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PKT Local Language</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">หน้าหลัก</Nav.Link>
                        <Nav.Link href="/tools">เครื่องมือ</Nav.Link>
                        <Nav.Link href="/features">คำแปล</Nav.Link>
                    </Nav>
                    
                </Navbar>
            </div>
        </div>
 
    )

}


export default Bar;