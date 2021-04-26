import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Bar() {

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
                            src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/133793803_865261494302105_2981038633372268564_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeGPI3D9QXE1wgShjRFWmh1uUeYpl47rgk9R5imXjuuCTwNvfbstyhmkWf2uXkliyioD9_IQDrsPStgueviCxXFP&_nc_ohc=0jJFXK4mPHAAX-G7e4q&_nc_ht=scontent.fbkk5-4.fna&oh=6b7d2fbf67e2106d22b0545d669478c9&oe=60AD4094"
                            style={{ height: 600, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Hom•mes by Good Cafe Phuket</h1>
                            <h3>" Home made espresso with variety choices of other beverages and bakery "</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.6435-9/95579036_460477728095341_3420127383162716160_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeG1iIZyxtddaH9HEN9rGJCdSE5JnR9N7AhITkmdH03sCCXEy0VZXYXoJzTJU-kNnFZcuQmnUm00FNMzJa5zp00J&_nc_ohc=5gEyO_buBt8AX9cs07Y&tn=uTeyBbkpR9naAiDl&_nc_ht=scontent.fbkk5-8.fna&oh=20479727d9ed6e7fd95e61877d45636a&oe=60A9F56F"
                            style={{ height: 600, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Asterisk Espresso</h1>
                            <h2>" espresso bar|brew bar Phuket , Thailand"</h2>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.6435-9/71711925_2593177420704140_1305954917394939904_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeEsfQO2PBmkosx6fAxfiHpXHJ254-3Hv54cnbnj7ce_nsqVWcAXlm2dGfheyMbLpeGdKQv2buVWohIOFnlVbmut&_nc_ohc=JuCKN-LR11AAX8ydB5S&_nc_ht=scontent.fbkk5-1.fna&oh=f263f9fe880160fabeb61b9d287a9c0b&oe=60AA992E"
                            style={{ height: 600, width: 900 }}
                        />
                        <Carousel.Caption>
                            <h1>Good Cafe Phuket</h1>
                            <h2>" a good cafe is a perfect place to have a good coffee "</h2>
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