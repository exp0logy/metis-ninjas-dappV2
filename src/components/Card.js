import styled from "styled-components";
import React from "react";

const PartnerCard = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 20px;
    display: inline-block;
    margin: 40px
`
const PartnerImage = styled.img`
    width: 150px
`

export class Card extends React.Component {
    render() {
        return (
            <PartnerCard>
                <a href={this.props.link}>
                <PartnerImage key={this.props.key} src={this.props.image} alt="Partner" />
                </a>
            </PartnerCard>
        );
    }
};

export default Card;