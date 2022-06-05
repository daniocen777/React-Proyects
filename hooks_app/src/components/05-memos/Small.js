/* Usar "memo" para no volver a renderizar componente */
import { memo } from "react";

const Small = memo(({ value }) => {
  console.log("Se llama a Small");
  return <small> {value} </small>;
});

export default Small;
