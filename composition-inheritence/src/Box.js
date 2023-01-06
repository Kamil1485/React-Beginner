import React from "react";

const Box = (props) => {
  console.log(props.children);
  console.log(props); //Gönderdiğin tüm Porpslar burda nesne olarak duruyor
  //^ 1- {children: 'Merhaba Kamil Örnek 1'}children: "Merhaba Kamil Örnek 1"[[Prototype]]: Object //Hic bir props göndermedim sadece içine yazdım
  //& 2-Componentin tanımı arası yazdıgın her şey children olarak geliyor
  //^ 3-elemnetler arasında yazı gönderirsen bunlar obje children olaarak  [{...},{...}] depolanır,normal yazı gönderirsen children dizisinin elemanı olur
  //^ 4-mesela  <p>Merhaba</p> ve    <h4>Kamil</h4> ve  Nasılsın gönderdim  childrendizisi (3) [{…}, {…}, 'Nasılsın'] olur !

  return (
    <div className="box">
      <div className="boxcontainer">
        <div className="green">
          <div className="red">{props.children}</div>
        </div>
        <SideBar>Hey I am  SideBar</SideBar>
      </div>
    </div>
  );
};

function SideBar(props) {
  return <div>{props.children}</div>;
}

export default Box;
