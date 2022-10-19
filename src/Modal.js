import React from "react";
import "./Modal.css";



const Modal = ({modalData,closemodal}) => {
    console.log("hi mod in console")
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={()=>closemodal(false)}>Cancel</button>
        </div>
        <div className="title">
          <h1>Player Name : {modalData.name}</h1>
        </div>
        <div className="body">
          <p>Player Email : {modalData.email}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Modal


