/* Hook para peticiones http */

import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  /* Usar useRef para evitar errores de carga de datos de una API cuando aún no se renderiza componente */
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  /* Ejecutar cuando componente se carga por primera vez */
  useEffect(() => {
    /* Cuando se desmonte (return), colocar isMounted = false */
    return () => {
      isMounted.current = false;
    };
  }, []);

  /* Disparar el effect cuando el url cambie*/
  useEffect(() => {
    /* Cargando petición */
    setState({
      data: null,
      loading: true,
      error: null,
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        /* Mostrar el estado solo cuando esté montado el componente */
        if (isMounted) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};

export default useFetch;
