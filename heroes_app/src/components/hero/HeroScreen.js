import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = () => {
  // Hook para leer los parámetros de la url
  const { heroId } = useParams(); // De HeroCard
  // hook para regresar a página anterior
  const navigate = useNavigate();
  /* getHeroById debe estar optimizada (en memoria), ya que se llama 
 cuando hay algún cambio en componente. Solo disparar función cuando
 "heroId" cambie */
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Navigate to="/" />;
  }
  // Desestructurando hero
  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1); // Ir a página anterior
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} className="img-thumbnail" alt={superhero} />
      </div>
      <div className="col-8">
        <h3> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characteres</h5>
        <p> {characters} </p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
