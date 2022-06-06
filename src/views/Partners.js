import { Col } from "react-bootstrap";
import styled from "styled-components";
import Card from "../components/Card";

const PartnerDiv = styled.div`
    padding: 150px 0;
`
const PartnerImages = [
    {
        key: 1,
        image: "/images/partners/peak.png",
        link: "https://peakfinance.io"
    },
    {
        key: 2,
        image: "/images/partners/bcd.png",
    },
    {
        key: 3,
        image: "/images/partners/nfta.png",
        link: "https://nftapparel.com.au"
    }
]

export default function Partners() {

    return (
        <PartnerDiv>
            <Col className="text-center">
                <h1 style={{ paddingBottom: "50px" }}>Partners</h1>
                {PartnerImages.map((e) => (
                    <Card key={e.key} image={e.image} link={e.link} />
                ))}
            </Col>
        </PartnerDiv>
    );
}