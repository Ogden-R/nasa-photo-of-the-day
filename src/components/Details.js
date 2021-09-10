import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: #032357;
margin:  -26.56px 0;
h2{
    padding-top:1%;
    font-size: 2rem;
    color: ${pr => pr.theme.white};    
    font-family: Rajdhani;  
}
p{
    margin: 0 10%;  
    padding:  1%;
    font-size: 1.2rem;
    color: ${pr => pr.theme.white};    
    font-family: Rajdhani;   
}
`

export default function Details(props) {

    return (
        <StyledDiv>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <p>Copyright: {props.copyright}</p>
           
        </StyledDiv>
    )
}
