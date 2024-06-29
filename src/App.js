import { useState } from "react";
import "./App.css";
import Modal from "./components/basket/Modal";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import BaskedFood from "./components/basket/BaskedFood";
import TotalAmount from "./components/basket/TotalAmount";
import { OrderProvider } from "./components/store/OrderBusket";

function App() {
  const [state, setState] = useState(false);
  const openModalHAndle = () => {
    setState(true);
  };
  const closeModalHAndle = () => {
    setState(false);
  };
  return (
    <div className="App">
      <OrderProvider>
        <Header openBusket={openModalHAndle} />
        <Main />
        {state && (
          <Modal top="150px" left="380px" onclose={closeModalHAndle}>
            <BaskedFood />
            <TotalAmount onclose = {closeModalHAndle} />
          </Modal>
        )}
      </OrderProvider>
    </div>
  );
}

export default App;
