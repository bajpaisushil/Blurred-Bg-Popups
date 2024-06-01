import React from "react";

function Popup({ text, closePopup, openNested }: any) {
  return (
    <div>
      <div className="container">
        <p className="texty">{text}</p>
        <button className="plus-btn" onClick={openNested}>
          +
        </button>
        <div className="close-btn" onClick={closePopup}>
          Close
        </div>
      </div>
    </div>
  );
}

export default Popup;
