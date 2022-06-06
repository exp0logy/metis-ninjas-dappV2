import { Col, Container, Row } from "react-bootstrap";
import { StyledDiv, AboutDiv } from "../components/Styleddivs";
import '../styles/roadmap.css';

export default function Roadmap() {

    return (
        <>
            <Row style={{ padding: "60px 0", textAlign: "center" }}>
                <h1>Roadmap</h1>
            </Row>
            <Col className="timeline">
                <Row className="containers left">
                    <Col className="content">
                        <h2>Q2 2022</h2>
                        <p>✅ Design all assets and traits</p>
                        <p>✅ Complete smart contract</p>
                        <p>✅ Complete minting dapp/website</p>
                        <p>🔵 Launch Metis Ninjas June 15th</p>
                        <p>🔵 Airdrop to exsisting seed investors</p>
                    </Col>
                </Row>
                <Row className="containers right">
                    <Col className="content">
                        <h2>Q3 2022</h2>
                        <p>🔵 Start build on Blockchat Website</p>
                        <p>🔵 Start build on Blockchat dApp</p>
                        <p>🔵 Metis Ninjas: Rivals Release</p>
                    </Col>
                </Row>
            </Col>
        </>
    );
}