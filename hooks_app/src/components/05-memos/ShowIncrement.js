import { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("Se genera ShowIncrement");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});

export default ShowIncrement;
