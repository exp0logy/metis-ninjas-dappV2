import { Col, Container, Row } from "react-bootstrap";
import { socialLinks, SocialLink } from './Header';
import { Nav } from "react-bootstrap";

export default function Footer() {

    return (
        <Container className="text-center footer-links" style={{ padding: "90px 0" }}>
            <Col className="footerSocialCol footer-links" lg={4} md={8} sm={12}>
                <h5>© Metis Ninjas 2022</h5>
            </Col>
            <Col className="footer-links" lg={4} sm={12}>
                <img className="pbp" src="/images/PBP.png" />
            </Col>
            <Col className="socialsFooter text-center" md={12} sm={12}>
                {socialLinks.map((e) => (
                    <Nav.Link key={e.key} style={{ display: "inline-block" }} className="m-auto nav-link" href={e.link}>
                        <SocialLink key={e.key} style={{
                            width: "32px"
                        }}
                            srcSet={e.image} />
                    </Nav.Link>
                ))}
            </Col>
            <Col className="azoriaFooter footerSocialCol footer-links" lg={4} md={8} sm={12}>
                <h5>dApp built by <a href="https://azoria.au">Azoria</a> </h5>
            </Col>
        </Container >
    );
}