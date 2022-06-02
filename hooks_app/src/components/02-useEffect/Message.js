import { useEffect, useState } from "react";

const Message = () => {
  /* Estado para las coordenadas */
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    /* Cuando el mouse se mueva. Capturar las coordenadas */
    const moveMouse = (event) => {
      const coords = { x: event.x, y: event.y };
      setcoords(coords);
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      /* Limpieza */
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <>
      <h1>Message</h1>
      <p>
        x: {x} | y: {y}
      </p>
    </>
  );
};

export default Message;
