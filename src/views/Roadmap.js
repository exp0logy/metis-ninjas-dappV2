import { Col, Row } from "react-bootstrap";
import { StyledDiv, AboutDiv } from "../components/Styleddivs";
import styled from "styled-components";

const Line = styled.div`
    border-left: 2px solid white;
    height: 400px;
    display: inline-block;
    width: 2px;
`
export default function Roadmap() {

    return (
        <>
            <Col>
                <Row>
                    <h2 style={{margin: "60px"}}>Roadmap 2022</h2>
                </Row>
           </Col>
        </>
    );
}