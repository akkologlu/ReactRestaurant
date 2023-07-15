import React from "react";
import { Data } from "../menuData/Data";
import { MenuItem } from "./MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {Data.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              content={item.content}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
