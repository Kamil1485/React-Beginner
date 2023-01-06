import Appcss from "./App.css"
import './App.css';
import { useState, } from "react";
import Mybutton from "./components/Mybutton";


//Mybutton() //6-Normal Fonksiyonlar bu sekilde cagırlabiliyordu

//7-Compenentlar aşağıdaki gibi çağrılır

<Mybutton></Mybutton>





function App() {//2-Component
  //3-Componenetlardan dönmesi gereken JSX verisi
  //4-React jsx i html e dönüstürüyor asagıdaki div ler arası jsx icine js de yazabildigin icin 
  //5-

  //12-13
  const [count,Setcount]=useState(0);
  
  function ıncrement() { 
  Setcount(count+1);
   }
   const decrement=()=>{
    Setcount(count-1);
   }

 
  

  return (

    <div className="App">
{/* 8-Compenenti 2 farklı şekildede Çağırabilrsin! */}

{ /*
   <Mybutton ></Mybutton>

   içine bir şey yazmak istersen diye üstteki yöntem var!!
   

   <Mybutton/> 
  */
}
    <h1>Başlık Atalım</h1>
    <button style={{backgroundColor:"lightblue",color:"chocolate",cursor:"pointer",border:"none",fontSize:"22px"}} >İşlevi Olmayan Buton</button>
   {/*9-Fonksiyona-Compenente props yani parametre gönderme */}
    <h2>Props Gönderme</h2>
        <Mybutton  color="lightblue" message={"Sol Button"} uyarı={"Sol Buton Tıklandı"}/>
        <Mybutton  color="green"  message={"Sağ Button"} uyarı={"Sağ Buton Tıklandı"}/>
       
        
{/* 11-Javascirpt Kodları  calıstırılır {} arasında */}


<h1 className="counter">{count}</h1>
<button onClick={decrement} style={{backgroundColor:"red",fontSize:"44px",borderRadius:"6px 12px"}}>Azalt</button>
<button onClick={ıncrement} style={{backgroundColor:"green",fontSize:"44px",borderRadius:"6px 12px",marginLeft:"15px"}}>Arttır</button>

   </div>
  );
}

export default App;
