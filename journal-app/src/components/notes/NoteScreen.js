import React from "react";
import NoteAppbar from "./NoteAppbar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NoteAppbar />
      <div className="notes__content">
        <input
          types="text"
          className="notes__title-input"
          placeholder="Título"
          autoComplete="off"
        />
        <textarea
          className="notes__textarea"
          placeholder="Qué pasó hoy"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://i.pinimg.com/474x/4d/d8/68/4dd8681ae42e4757047f5e51b5f59cbf.jpg"
            alt="imagen"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;
