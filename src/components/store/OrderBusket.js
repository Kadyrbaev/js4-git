import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const OrderBusketContext = createContext({});

export const OrderProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const saveNewData = (data) => {
    const find = items.find((el) => {
      return el.id === data.id;
    });
    if (!find) {
      setItems((prevItems) => [...prevItems, data]);
      showToast({
        type: "success",
        text: <h3>{`${data.amount} ${data.title} added to basket!`}</h3>,
        positionToast: "bottom-left",
      });
      return;
    }
    if (find) {
      const newData = items.map((el) => {
        if (el.id === data.id) {
          el.amount < 10
            ? (el.amount = el.amount + data.amount) &&
              showToast({
                type: "success",
                text: <h3>{`${data.amount} ${data.title} added to basket!`}</h3>,
                positionToast: "bottom-left",
              })
            : showToast({
                type: "error",
                text: <h4>{"Max orders: " + `${el.amount} ${el.title}!`}</h4>,
              });
        }
        return el;
      });
      setItems(newData);
    }
  };

  /////////////////////  MODAL ARE YOU SURE  ///////////////////
  const [modalAreYouSure, setModalAreYouSure] = useState({
    item: {},
    isLoading: false,
  });
  // console.log(modalAreYouSure);

  ///////////////////     COUNTER IN BASKET     /////////////////

  const counterPlus = (data_id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === data_id) {
          return {
            ...item,
            amount:
              item.amount < 10
                ? item.amount + 1
                : showToast({
                    type: "error",
                    text: <h4>{"Max orders: " + `${item.amount} ${item.title}!`}</h4>,
                  }) || item.amount,
          };
        } else {
          return item;
        }
      });
    });
  };

  const counterMinus = (data_id) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === data_id) {
          return {
            ...item,
            amount:
              item.amount > 1
                ? item.amount - 1
                : setModalAreYouSure({
                    item: item,
                    isLoading: true,
                  }) || item.amount,
          };
        } else {
          return item;
        }
      });
    });
  };

  const [positionToastt, setPositionToast] = useState("");
  // console.log(positionToastt);

  const showToast = ({ type, text, positionToast }) => {
    setPositionToast(positionToast);
    switch (type) {
      case "success":
        toast.success(text);
        break;
      case "error":
        toast.error(text);
        break;
      default:
        toast(text);
        break;
    }
  };

  const basket = {
    items: items,
    setItems,
    saveNewData,
    counterPlus,
    counterMinus,
    modalAreYouSure,
    setModalAreYouSure,
    showToast,
  };

  return (
    <OrderBusketContext.Provider value={basket}>
      {children}
      <ToastContainer
        position={positionToastt || "top-center"}
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover={true}
      />
    </OrderBusketContext.Provider>
  );
};
