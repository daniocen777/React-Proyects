import { useState } from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Blog from "./components/Blog";
import Tienda from "./components/Tienda";
import Error404 from "./components/Error404";
import Carrito from "./components/Carrito";

const App = () => {
  const productos = [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    { id: 4, nombre: "Producto 4" },
  ];

  /* Estado para el carrito */
  const [carrito, cambiarcarrito] = useState([]);

  const agregarProductoACarrito = (id, nombre) => {
    /* Si no hay productos al carrito */
    if (carrito.length === 0) {
      cambiarcarrito([{ id, nombre, cantidad: 1 }]);
    } else {
      /* Clonar el arreglo para editarlo */
      const nuevoCarrito = [...carrito];
      /* Comprobar si ya se tiene el producto en el carrito */
      const flagProductoAgregadoEnCarrito =
        nuevoCarrito.filter((producto) => {
          return producto.id === id;
        }).length > 0;

      if (flagProductoAgregadoEnCarrito) {
        /* Si ya está el producto en carrito, actualizar los datos */
        nuevoCarrito.forEach((producto, index) => {
          if (producto.id === id) {
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id,
              nombre,
              cantidad: cantidad + 1,
            };
          }
        });
      } else {
        /* Si no está en carrito, agregar el producto al arreglo */
        nuevoCarrito.push({
          id,
          nombre,
          cantidad: 1,
        });
      }
      /* Cambiar estado */
      cambiarcarrito(nuevoCarrito);
    }
  };

  return (
    <Contenedor>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
      </Menu>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} exact={true}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/tienda"
            element={
              <Tienda
                productos={productos}
                agregarProductoACarrito={agregarProductoACarrito}
              />
            }
          ></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </main>
      <aside>
        {/* Componente Carrito */}
        <Carrito carrito={carrito} />
      </aside>
    </Contenedor>
  );
};

/* styled */
const Contenedor = styled.div`
  max-width: 1000px;
  padding: 40px;
  width: 90%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
