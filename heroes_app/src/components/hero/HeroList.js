import HeroCard from "./HeroCard";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { useMemo } from "react";

const HeroList = ({ publisher }) => {
  /* getHeroByPublisher debe estar optimizada (en memoria), ya que se llama 
 cuando hay algún cambio en componente. Solo disparar función cuando
 "publisher" cambie */
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
