import React, { useContext } from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { OrderBusketContext } from "../store/OrderBusket";
import Modal from "./Modal";

const CancelWithOrder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 700px;
`;
const AreYouSure = styled.div`
  & div {
    display: flex;
    justify-content: space-around;
  }
`;

function TotalAmount({ onclose }) {
  const context = useContext(OrderBusketContext);

  const totalPrice = context.items.reduce((a, el) => {
    return a + el.price * el.amount;
  }, 0);

  const deleteHandler = (item) => {
    context.showToast({
      type: "success",
      text: <h3>Success deleting!</h3>,
      positionToast: "bottom-center",
    });
    context.setModalAreYouSure({ isLoading: false });
    return context.setItems((prev) =>
      prev.filter((el) => {
        return el.id !== item.id;
      })
    );
  };

  return (
    <div>
      <br />
      <h2>{totalPrice > 0 ? totalPrice + " сом" : "У вас нет заказов!"}</h2>
      <hr />
      <br />
      <CancelWithOrder>
        <Button onClick={onclose} height="45px">
          Cancel
        </Button>
        {totalPrice > 0 && <Button height="45px">Order</Button>}
      </CancelWithOrder>
      {context.modalAreYouSure.isLoading && (
        <Modal width="300px" left="580px" top="220px">
          <AreYouSure>
            <h2>Are you sure?</h2>
            <hr />
            <br />
            <div>
              <Button
                width="100px"
                onClick={() => context.setModalAreYouSure({ isLoading: false })}
              >
                NO
              </Button>
              <Button
                width="100px"
                onClick={() => deleteHandler(context.modalAreYouSure.item)}
              >
                YES
              </Button>
            </div>
          </AreYouSure>
        </Modal>
      )}
    </div>
  );
}

export default TotalAmount;
