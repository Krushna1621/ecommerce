import React from "react";
import classes from './AvailabelItem.module.css';
import Items from "./Items";

const AvailableItem = () => {
  const productsArr = [
    {
      id: 'm1',
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 'm2',
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 'm3',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 'm4',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const listItems = productsArr.map(item => (
    <Items key={item.id} data={item} />
  ));

  return (
    <ul className={classes.container}>
      {listItems}
    </ul>
  );
};

export default AvailableItem;
