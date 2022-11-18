import { Container, Row, Col } from "react-bootstrap";
import { FaSteam } from 'react-icons/fa';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer mt-3">
            <Container>
                <Row>
                    <div className=" col-12 text-start">
                        <p className="footer-tittle">Steam Games Connection <FaSteam /></p>
                    </div>
                    <div className="col-6 pt-5">
                        <div className="collaborators">
                            <p className="collaborator-name">
                                Victor Samuel dos Santos Lucas
                            </p>
                            <p className="collaborator-name">
                                Vinícius Vieira de Souza
                            </p>
                        </div>
                    </div>
                    <div className="text-center col-6 pt-5">
                        <p>Copyright 2022. All Rights Reserved</p>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
