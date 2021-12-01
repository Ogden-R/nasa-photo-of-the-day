import React from 'react';
import styled from 'styled-components';

const StyledHeaderDiv = styled.div`
    margin: -42.88px 0px;
    background-color: #032357 ;
    h1{
       padding: 1%;
        font-family: 'Rajdhani';
        font-size: 4rem;
        color: ${pr => pr.theme.white};
        text-decoration: underline;
    }
`
export default function Header(props){
    return(
        <StyledHeaderDiv>
            <h1>"{props.title}"</h1>
        </StyledHeaderDiv>
    )
}