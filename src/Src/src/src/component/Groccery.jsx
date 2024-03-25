import React from "react";
import ItemList from "./ItemList";

function Groccery() {
  const arr = [
    { id: 1, name: "Bournvita" },
    { id: 1, name: "Milk" },
  ];
  return (
    <div>
      {arr.map((item) => {
        return (
          <>
            <ItemList name={item.name} />
          </>
        );
      })}
    </div>
  );
}

export default Groccery;
