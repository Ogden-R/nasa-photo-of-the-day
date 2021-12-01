import React from 'react';
import styled from "styled-components";

const StyledPhotoDiv = styled.div`
    background-color: ${pr => pr.theme.primaryColor};
    img{
        border: ${pr => pr.theme.secondaryColor} 1px solid;
        padding: 1%;
        border-radius: 20px;
        margin: 2% 0;
        background-color: ${pr => pr.theme.secondaryColor};
    }    
`

export default function PhotoCard(props) {
    return (
        <StyledPhotoDiv>
            <img src={props.img} alt={props.title} className="photo-of-Day"/>
        </StyledPhotoDiv>
    )
}