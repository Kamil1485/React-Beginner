import React from "react";
import ProductList from "./ProductList";
function Card(props) {
  //başlık,resim ve Metin
  console.log(props.children);
  return (
    <div className="cardproduct">
      <h2 style={{ color: props.renk }} className="baslık">
        {props.baslık}
      </h2>
      <img src={props.imgurl} />
      <br />
    </div>
  );
}

export default Card;

/* //Composition Tanımı:Component içinde Component kullanabilme! birbiriyle ilişkili
^React composition, React uygulamalarında komponentlerin nasıl birbirleriyle ilişkilendirileceğini ifade eder.
Bu, bir komponentin diğer komponentleri içine almasını ve bunları bir bütün olarak kullanmasını sağlar.
Bu sayede, daha büyük ve daha karmaşık komponentler oluşturulabilir ve
bu komponentler tekrar kullanılabilir hale getirilebilir.*/
