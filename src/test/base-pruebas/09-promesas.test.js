import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("09", () => {
  test("debe retornar un heroe", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("debe retornar un error si heroe no existe", (done) => {
    const id = 100;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con ID: ${id}`);
      done();
    });
  });
});
