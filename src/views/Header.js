import { Navbar, Container, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";

const Logo = styled.img`
    width: 7rem;
`
const SocialLink = styled.img`

`

/* An array of objects that contain the key, image, and link for each social media account. */
const socialLinks = [
    {
        key: 1,
        image: "/images/socials/tofunft.png",
        link: "https://tofunft.com"
    },
    {
        key: 2,
        image: "/images/socials/twitter.png",
        link: "https://twitter.com"
    },
    {
        key: 3,
        image: "/images/socials/discord.png",
        link: "https://discord.com"
    }
]

export default function Header() {

    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Row>
                    <Navbar.Brand href="#home">
                        <Logo src="/images/ninjas.png" />
                    </Navbar.Brand>
                </Row>
                <Row>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="m-auto" href="#home">Home</Nav.Link>
                            <Nav.Link className="m-auto" href="#link">About</Nav.Link>
                            <Nav.Link className="m-auto" href="#link">Mint Now</Nav.Link>
                            <ConnectWallet />
                            {socialLinks.map((e) => (
                                <>
                                    <Nav.Link className="m-auto nav-link" href={e.link}>
                                        <SocialLink key={e.key} style={{
                                        width: "32px"
                                        }}
                                        srcSet={e.image} />
                                    </Nav.Link>
                                </>
                            ))}
                        </Nav>
                    </Navbar.Collapse>

                </Row>
            </Container>
        </Navbar>
    );
}