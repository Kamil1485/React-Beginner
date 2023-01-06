import  Modal  from "./Modal";
import "./App.css";
import Box from "./Box";
import Card from "./Card";
import Ornek from "./ornek";
import ProductList from "./ProductList";
import ProductList2 from "./ProductList2";

function App() {
  return (
    <div className="App">
      <h3>Composition Kullanımı</h3>
      <Box kitap={"beyaz kurt"}>
        <p>Merhaba</p>
        <h4>Kamil</h4>
        Nasılsın
      </Box>
      *********************************** Başka Bir Örnek PrdocutList ***********************************
      <ProductList>

        <Box kitap={"beyaz kurt"}>
          <p>Merhaba</p>
          <h4>Kamil</h4>
          Nasılsın

<BoxComment>Box has three color</BoxComment>

        </Box>
      </ProductList>
    <h2>Modal Class</h2>
    

    <Modal title={"modalım"} content={"declare"} onClose={"onclose"}/>

    </div>

  );
}


function BoxComment(props) {
 
  return <p style={{color:"yellow"}}>{props.children}</p>;
}

export default App;
