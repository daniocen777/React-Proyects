import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import getHeroesByName from "../../selectors/getHeroesByName";
import HeroCard from "../hero/HeroCard";
const queryString = require("query-string");

const SearchScreen = () => {
  // navigate para los parámetros de búsqueda
  const navigate = useNavigate();
  // Para saber la localización (url) || Usar query-string (https://www.npmjs.com/package/query-string)
  const location = useLocation();
  // query
  const { q = "" } = queryString.parse(location.search);

  // Hook para el formulario
  const initialForm = {
    searchText: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);
  const { searchText } = formValues;
  // Héroes filtrados por "superHero" (useMemo para optimizar)
  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`); // enviar un queryParam
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-info mt-1">
              Seacrh...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultado</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : heroesFilter.length === 0 ? (
            <div className="alert alert-danger">
              No se encontraron coincidencias con {q}
            </div>
          ) : (
            heroesFilter.map((hero) => <HeroCard key={hero.id} {...hero} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
