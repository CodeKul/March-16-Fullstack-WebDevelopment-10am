import React from 'react'
import styled from "styled-components"

export default function StyledComponentEx() {

    const Title = styled.p`
    color: Yellow;
    font-size: 20px;
    
    `;

    return (
        <div>
            <Title>Styled Components</Title>
        </div>
    )
}
