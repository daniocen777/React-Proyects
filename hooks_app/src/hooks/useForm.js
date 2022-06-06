import { useState } from "react";

/* Hook personalizado para un formulario */
const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  // Función para limpiar campo
  const reset = () => setValues(initialState);
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
