import React from 'react';
//14- buraya aktardık compenentimizi 
//* 15. ADIM yenistyle.css i yani bir css dosyasını nasıl uygualmamıza ekleriz index.js e import ederek o css i!!
const Mybutton=(props)=>{ //10-Proplar obje olarak gelir gönderilenen adında property gelir yani nesne icinde secersin

    return( 
    <button style={{height:"44px",width:"200px",backgroundColor:props.color,cursor:"pointer"}} onClick={()=>{alert(`Heey ${props.uyarı}`)}}>{props.message}</button>
    
    )   
}
    

export default Mybutton;
