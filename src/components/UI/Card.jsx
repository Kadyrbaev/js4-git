import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    border-radius: 14px;
    background-color: #800080;
    color: aliceblue;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function Card(props) {
  return (
    <Wrapper>
        {props.children}
    </Wrapper>
  )
}

export default Card