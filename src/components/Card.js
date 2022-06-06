import styled from "styled-components";
import React from "react";

const PartnerCard = styled.div`
    width: 200px;
    height: 200px;
    display: inline-block;
    margin: 0 50px;
`
const PartnerImage = styled.img`
    width: 12rem;
`

export class Card extends React.Component {
    render(key) {
        return (
            <PartnerCard key={key}>
                <a href={this.props.link}>
                    <PartnerImage src={this.props.image} alt="Partner" />
                </a>
            </PartnerCard>
        );
    }
};

export default Card;