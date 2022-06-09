import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { StyledDiv, AboutDiv } from "../components/Styleddivs";

const PartnerImages = [
    {
        key: 1,
        image: "/images/partners/peak.png",
        link: "https://peakfinance.io"
    },
    {
        key: 2,
        image: "/images/partners/nfta.png",
        link: "https://nftapparel.com.au"
    },
    {
        key: 3,
        image: "/images/partners/azoria.png",
        link: "https://azoria.au"
    }
]

export default function About() {

    return (
        <Container>
            <Row className="about-rows vert-center">
                <Col lg={{ span: 5, offset: 1 }} md={6}>
                    <h1>What is BlockChat DAO?</h1>
                    <p>BlockChat DAO (BCD) is a decentralised DAO2DAO communication platform built specifically for projects to collaborate,
                        exchange project information, in-dapp NFT trading, Metaverse integration and many more features. BCD will be built on
                        the Metis Andromeda Layer 2 network and powered by Peak Finance.</p>
                </Col>
                <Col style={{ textAlign: "center" }} lg={{ span: 5, offset: 1 }} md={6}>
                    <img style={{ width: "300px" }} src="/images/partners/bcd.png" />
                </Col>
            </Row>
            <Row className="about-rows vert-center">
                <Col lg={{ span: 5, offset: 1 }} md={6}>
                    <h1>About Metis Ninjas</h1>
                    <p>Metis Ninjas are here to protect the metisian ecosystem and help fund the production of the BlockChat Communication platform. Each purchase of a NInja will result in 3 transactional distributions.
                        <br /><br />
                        Tokenomics for Mint Sale:<br />

                        <ul>
                            <li>10% goes to buy back and burn of the $PEAK Token.</li>
                            <li>65% goes to the BlockChat Treasury.</li>
                            <li>25% goes to the creator of Metis NInjas (Stellie).</li>
                        </ul>

                        There are 5000 uniquely designed Ninjas available. Each Ninja grants you a whitelist spot in the BCD Beta program + premium features of the DApp.</p>
                </Col>
                <Col style={{ textAlign: "center" }} lg={{ span: 5, offset: 1 }} md={6}>
                    <img style={{ width: "300px" }} src="/images/1.png" />
                </Col>
            </Row>
            <Row className="about-rows vert-center">
                <Col lg={{ span: 5, offset: 1 }} md={6}>
                    <h1>How much are they?</h1>
                    <p>Metis Ninjas are broken up into 4 price points<br /><br />
                        1 - 2 Ninjas = 2 Metis each<br />
                        3 - 5 Ninjas = 1.7 Metis each<br />
                        6 - 10 Ninjas = 1.5 Metis each<br />
                        10+ Ninjas = 1.2 Metis each<br /><br />
                        There are only 5000 of this collection to exist, don’t miss out!
                    </p>
                </Col>
                <Col style={{ textAlign: "center" }} lg={{ span: 5, offset: 1 }} md={6}>
                    <img style={{ width: "300px" }} src="/images/2.png" />
                </Col>
            </Row>
            <Row className="about-rows vert-center">
                <Col lg={{ span: 5, offset: 1 }}>
                    <h1>Roadmap</h1>
                    <br />
                    <h4>Q2 2022</h4>
                    <br />
                    <p>✅  Design all assets and traits<br />
                        ✅  Complete smart contract<br />
                        ✅  Complete minting dapp/website<br />
                        ✅  Partner with NFT Apparel<br />
                        ✅  Apply for TofuNFT Verification<br />
                        🔵  Launch Metis Ninjas June 15th<br />
                        🔵  Airdrop to existing seed investors</p>
                    <br />
                    <h4>Q3 2022</h4>
                    <br />
                    <p>
                        🔵  Start build on Blockchat Website<br />
                        🔵  Start build on Blockchat dApp<br />
                        🔵  Metis Ninjas: Rivals Release</p>
                </Col>
                <Col style={{ textAlign: "center" }} lg={{ span: 5, offset: 1 }} md={6}>
                    <h1>Partners</h1>
                    {PartnerImages.map((e) => (

                        <Col>
                            <a href={e.link}>
                                <img style={{ margin: "20px 0", width: "200px" }} key={e.key} src={e.image} />
                            </a>
                        </Col>
                    ))}
                </Col>
            </Row>
        </Container >
    );
}