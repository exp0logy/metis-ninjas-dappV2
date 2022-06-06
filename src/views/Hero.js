import { Col, Container } from "react-bootstrap";
import styled from "styled-components";


const MintNow = styled.button`
    margin: 100px;
    width: 150px;
    height: 60px;
    border-radius: 50px;
`


export default function Hero() {

    return (
        <Container id="home" style={{ paddingTop: "120px" }}>
            <Col className="text-center" lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
                <h1>The secret ninjas are here to protect the Metisian ecosystem</h1>
                <br /><br /><br /><br />
                <h5>5000 uniquely generated ninjas are here to replace your
                    boring PFP and secure you a spot in the BlockChat
                    DAO whitelist beta program.</h5>
                <br />
                <MintNow>Mint Now</MintNow>
            </Col>
        </Container>
    );
}