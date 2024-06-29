import React, { useContext, useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import styled from "styled-components";
import { OrderBusketContext } from "../store/OrderBusket";

const FormMeals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  height: 74px;
`;
const InputWithTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  background-color: #fff5ee;
  border-radius: 8px;
  color: #000000;
  font-size: 20px;
  height: 32px;
`;

function MealsForm(props) {
  const context = useContext(OrderBusketContext);

  const [amount, setAmount] = useState(1);

  const getValueHandle = (e) => {
    setAmount(+e.target.value);
  };

  const getObj = () => {
    const newObj = {
      title: props.name,
      price: props.price,
      amount,
      id: props.id,
    };
    context.saveNewData(newObj);
  };

  return (
    <FormMeals>
      <InputWithTitle>
        <b>Кол-во </b>
        <Input
          value={amount}
          width="50px"
          height="24px"
          type="number"
          onChange={getValueHandle}
        />
      </InputWithTitle>
      <Button onClick={getObj} height="30">
        {" "}
        Кошуу{" "}
      </Button>
    </FormMeals>
  );
}

export default MealsForm;
