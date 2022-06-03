import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

const MultipleCustomHooks = () => {
  /* Importar el hook Counter para hacer la petición de la siguienge frase */
  const { counter, increment } = useCounter(1);
  /* Ver API: https://breakingbadapi.com/documentation */
  /* Usando useFetch para ejecutar peeticiones */
  /* ---- state => devuelve { loading: bool, error: bool, data: Array }----- */
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  /* Traer la data => Al inicio en null, entonces se debe validar */
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">loading</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote} </p>
          <footer className="blockquote-footer"> {author} </footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
