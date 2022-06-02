import Productos from "./Productos";

const Tienda = ({ productos, agregarProductoACarrito }) => {
  return (
    <div>
      <h1>Tienda</h1>
      {/* Componentes para productos */}
      <Productos
        productos={productos}
        agregarProductoACarrito={agregarProductoACarrito}
      />
    </div>
  );
};

export default Tienda;
