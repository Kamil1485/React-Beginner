import React from "react";
import { useState,useContext,createContext } from "react";
import "./Modal.css"

const PoviderOpen=createContext();
function Modal(props) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleModal=()=>{ //^ 1-toggle modal butona tıklandıgında isopen false degerini tersine true, ture ise false cevirir bu sayede isopen a göre if else calısır!

    // return isOpen ? closeModal:openModal
     setIsOpen(!isOpen)
 }

//! modal acıkken  scroll özelligini kapatıyoruz arka plandaki yazılar üzerinde  hareket edilmemesi için
isOpen ? document.body.classList.add("active-modal"): document.body.classList.remove("active-modal")
 
 
 
 
 /*
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
*/

  return (
    <div>

    <PoviderOpen.Provider value={toggleModal}>
    
    <button className="btnopen" onClick={toggleModal}>Open Modal</button>
      {
        isOpen ? <ModalContent baslık={"E-ticaret"} icerik={"E ticaret kuruluş yılı 1325 resmi olarak ama önceleri yüz yüzeydi ticaret."} />: "Kapalı"

      }


    </PoviderOpen.Provider>
    
     
    
   
    
    </div>
  );
}

function ModalContent(props) {
  const ConsumerOpen=useContext(PoviderOpen)

  console.log(ConsumerOpen)

  return (
    
    <div className="modal">
      <div className="overlay"></div>
        <div className="modal-content">

          <h1>{props.baslık}</h1>
          <h3>{props.icerik}</h3>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
     
      
         

       
        <button  className="btnclose" onClick={ConsumerOpen}> CloseModal</button>

      </div>
    </div>
  );
}

export default Modal;
