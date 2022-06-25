import React from "react";

const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.settemuse.it/sfondi_ambiente/universo/universo_026x.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Nuevo título</p>
        <p className="journal__entry-content">
          Sit officia duis incididunt mollit tempor cupidatat reprehenderit.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
