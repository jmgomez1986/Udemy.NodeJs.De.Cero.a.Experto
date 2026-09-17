import { heroes, type Hero } from "../data/heroes.js";

export const findHeroById = (id: number): Hero | undefined => {
  return heroes.find((hero) => hero.id === id);
};
