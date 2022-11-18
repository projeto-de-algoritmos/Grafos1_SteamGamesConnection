import { Container, Row, Col } from "react-bootstrap";
import { FaSteam } from 'react-icons/fa';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="text-center">
                        <p className="footer-tittle">Steam Games Connection <FaSteam /></p>
                    </Col>
                    <Col size={12} sm={6}>
                        <div className="collaborators">
                            <p>
                                Victor Samuel dos Santos Lucas
                            </p>
                            <p>
                                Vinícius Vieira de Souza
                            </p>

                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
