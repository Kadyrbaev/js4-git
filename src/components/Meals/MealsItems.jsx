import React from "react";
import MealsRender from "./MealsRender";

const foods = [
  {
    id: "1",
    name: "Куурдак",
    description: " кыргыз элинин эң сыйлуу тамактарынын бири.",
    price: "300",
  },
  {
    id: "2",
    name: "Бешбармак",
    description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
    price: "250",
  },
  {
    id: "3",
    name: "Чучук",
    description: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
    price: "500",
  },
  {
    id: "4",
    name: "Быжы",
    description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
    price: "450",
  },
];

function MealsItems(props) {
  return (
    <div>
      {foods.map((el) => {
        return (
          <MealsRender
            key={el.id}
            name={el.name}
            price={el.price}
            description={el.description}
            id={el.id}
          />
        );
      })}
    </div>
  );
}

export default MealsItems;
