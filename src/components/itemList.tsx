import React from "react";

const ItemList = ({ items }: { items: ItemData }) => {
  //! TODO: Render out a list of items to equip
  return (
    <>
      <div className="flex flex-col gap-y-3">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
