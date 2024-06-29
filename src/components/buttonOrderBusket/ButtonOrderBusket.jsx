import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import OrderBusket from "../assets/icons/OrderBasket.png"
import { OrderBusketContext } from '../store/OrderBusket'

const ButtonOrderBusket = ({openBusket}) => {
  
  const context= useContext(OrderBusketContext)
  const total = context.items.reduce((a, el) => {
    // console.log(a + el.amount);          
// <--------      Без понятие    -----------> //
    return a + el.amount
  }, 0)

  return (
    <ContainerBusket>
      <BusketImage onClick={openBusket} src={OrderBusket} alt="OrderBusket"/>
      <p>Your Orders</p>
      <Count>{ total || 0}</Count>
    </ContainerBusket>
  )
}

const ContainerBusket = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: darkgray;
    border-radius: 20px;
    border: none;
    font-size: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const Count = styled.span`
    padding: 3px 15px;
    border-radius: 20px;
    background-color: gold;
`

const BusketImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    background-color: #aa01ff;
  }
  &:active {
    transform: scale(0.8);
  }
`

export default ButtonOrderBusket



