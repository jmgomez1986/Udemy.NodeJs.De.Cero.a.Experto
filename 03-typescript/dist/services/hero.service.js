import { heroes } from "../data/heroes.js";
export const findHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};
//# sourceMappingURL=hero.service.js.map