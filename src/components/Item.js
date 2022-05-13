import React from "react";

const item = ({ item }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <img
        style={{ height: "20px", width: "20px" }}
        src={item.pictureUrl}
      ></img>
    </div>
  );
};

export default item;
