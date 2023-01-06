import React from "react";
import Card from "./Card";
const products = [
  {
    id: 0,
    baslık: "elma",
    imgUrl:
      "https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    renk: "red",
  },
  {
    id: 1,
    baslık: "armut",
    imgUrl:
      "https://images.pexels.com/photos/4041094/pexels-photo-4041094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    renk: "gold",
  },
  {
    id: 2,
    baslık: "kivi",
    imgUrl:
      "https://images.pexels.com/photos/3904800/pexels-photo-3904800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    renk: "green",
  },
  {
    id: 3,
    baslık: "Portokal",
    imgUrl:
      "https://images.pexels.com/photos/14898399/pexels-photo-14898399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    renk: "orange",
  },
];
const ProductList = (props) => {
  return (
    <div className="product">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            baslık={product.baslık}
            imgurl={product.imgUrl}
            renk={product.renk}
          >
            selam naber
          </Card>
        );
      })}

      <div>{props.children}</div>
    </div>
  );
};
export default ProductList;
