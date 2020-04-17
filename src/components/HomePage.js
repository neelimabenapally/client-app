import React from 'react';
import { Row, Col, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => { 
    return (
        <Row className="justify-content-md-center">
            <Col className="text-center">
                <Figure>
                    <Link to="/listing/movie">
                        <Figure.Image
                            width={400}
                            alt="171x180"
                            src="./images/movie-24px.svg"
                        />
                    </Link>
                </Figure>
                
            </Col>
            <Col className="text-center">
                 <Figure>
                    <Link to="/listing/tv">
                        <Figure.Image
                            width={400}
                            alt="171x180"
                            src="./images/tv-24px.svg"
                        />
                    </Link>
                </Figure>
            </Col>
        </Row>
    );
}

export default HomePage;