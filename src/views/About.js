import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { StyledDiv, AboutDiv } from "../components/Styleddivs";

const PeakButton = styled.button`
    margin: 20px 0;
    padding: 8px 15px;
    &:after{content: "Learn about Peak Finance";}
`
const NinjaImg = styled.img`
    border-radius: 30px;
    max-width: 400px;
    height: 400px;
`

let sliderSettings = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true
};

export default function About() {

    return (
        <Container>
            <Row id="about" className="text-center" style={{ paddingTop: "100px" }}>
                <Col lg={6} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                    <h1>What is BlockChat DAO</h1>
                </Col>
                <Col className="text-center" lg={6} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                    <h4>BlockChat DAO (BCD) is a decentralised DAO2DAO communication platform built specifically for projects to collaborate,
                        exchange project information, in-dapp NFT trading, Metaverse integration and many more features. BCD will be built on
                        the Metis Andromeda Layer 2 network and powered by Peak Finance. </h4>
                    <PeakButton />
                </Col>
            </Row>
            <Row style={{ paddingTop: "100px" }}>
                <Col lg={6}>
                    <AboutDiv>
                        <h4>Metis Ninjas have a variety of different attributes and traits, some included are custom designed backgrounds,
                            definitive headbands, rare traits and different weapons.</h4>
                    </AboutDiv>
                    <AboutDiv>
                        <h4>There are 5000 uniquely designed Ninjas available. Each Ninja grants you a whitelist spot in the BCD Beta
                            program + premium features of the DApp.</h4>
                    </AboutDiv>
                </Col>
                <Col lg={6}>
                    <Carousel {...sliderSettings}>
                        <NinjaImg src="/images/ninjas/11.jpg" alt="Ninja" />
                        <NinjaImg src="/images/ninjas/22.jpg" alt="Ninja" />
                        <NinjaImg src="/images/ninjas/33.jpg" alt="Ninja" />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}