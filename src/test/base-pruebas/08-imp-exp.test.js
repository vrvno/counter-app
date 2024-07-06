import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("deberia retornar id de heroe", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("deberia retornar undefined si no existe el id", () => {
    const id = 11;
    const hero = getHeroeById(id);

    expect(typeof hero).toBe("undefined");
  });

  test("deberia retornar arreglo de heroes segun marca", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
