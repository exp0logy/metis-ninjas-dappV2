import { Col, Container, Row } from "react-bootstrap";
import { socialLinks, SocialLink } from './Header';
import { Nav, NavLink } from "react-bootstrap";

export default function Footer() {

    return (
        <Container className="text-center" style={{ padding: "90px 0" }} sm={12}>
            <Col style={{ display: "inline-block" }} lg={6} md={8}>
                <h5>© Metis Ninjas 2022</h5>
            </Col>
            <Col className="socialsFooter" lg={6} md={8} sm={12}>
                {socialLinks.map((e) => (
                    <Nav.Link key={e.key} className="m-auto nav-link" style={{ display: "inline-block" }} href={e.link}>
                        <SocialLink key={e.key} style={{
                            width: "32px"
                        }}
                            srcSet={e.image} />
                    </Nav.Link>
                ))}
            </Col>
            <Col className="azoriaFooter" style={{ display: "inline-block" }} lg={6} md={8} sm={12}>
                <h5>dApp built by <a href="https://azoria.au">Azoria</a> </h5>
            </Col>
        </Container >
    );
}