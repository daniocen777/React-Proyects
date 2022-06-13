import { heroes } from "../data/heroes";

/* Función debe estar optimizada (en memoria), ya que se llama 
 cuando hay algún cambio en componente (HeroScreen) */
export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
