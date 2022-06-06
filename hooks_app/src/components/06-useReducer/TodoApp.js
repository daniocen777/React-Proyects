/* Todo APp usando useReducer */
import { useEffect, useReducer } from "react";
import useForm from "../../hooks/useForm";
import "./styles.css";
import { todoReducer } from "./todoReducer";

// Función para que el reducer no se ejecute a cada rato
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  /* Inportando el reducer "todoReducer" */
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  // Usando hook personalizado para los formularios
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  // useEffect para grabar en el localStorage que se dispara cuando cambio "todos"
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    // Acciíon para eliminar
    const action = {
      type: "delete",
      payload: id,
    };
    // Disparando acción
    dispatch(action);
  };

  // Marcar tarea como completada (done: true)
  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  /* Agregar TODO */
  const handleSubmit = (event) => {
    event.preventDefault();
    // validar campo vacío
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    // Construyendo acción
    const action = {
      type: "add",
      payload: newTodo,
    };
    // Disparando acción
    dispatch(action);
    // Limpiar formulario
    reset();
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* Componente para listar (args: todos) */}
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => {
              return (
                /* Item de "todo" (args: todo, index, handleToggle, handleDelete) */
                <li key={todo.id} className="list-group-item">
                  <p
                    className={`${todo.done && "complete"}`}
                    onClick={() => handleToggle(todo.id)}
                  >
                    {index + 1}. {todo.desc}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 col-12"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
