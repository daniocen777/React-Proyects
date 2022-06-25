import React from "react";

const NoteAppbar = () => {
  return (
    <div className="notes__appbar">
      <span>12 de junio 2022</span>
      <div>
        <button className="btn">Imagen</button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default NoteAppbar;
