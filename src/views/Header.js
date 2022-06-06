import { Navbar, Container, Nav, Row } from "react-bootstrap";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";

const Logo = styled.img`
    width: 7rem;
`
export const SocialLink = styled.img`

`

/* An array of objects that contain the key, image, and link for each social media account. */
export const socialLinks = [
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
        <Navbar style={{ backgroundColor: "black" }} className="sticky-top" variant="dark" expand="lg">
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
                            <Nav.Link className="m-auto" href="#about">About</Nav.Link>
                            <Nav.Link className="m-auto" href="#mint">Mint Now</Nav.Link>
                            <ConnectWallet />
                            {socialLinks.map((e) => (
                                <Nav.Link key={e.key} className="m-auto nav-link socials" href={e.link}>
                                    <SocialLink key={e.key} style={{
                                        width: "32px"
                                    }}
                                        srcSet={e.image} />
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>

                </Row>
            </Container>
        </Navbar>
    );
}