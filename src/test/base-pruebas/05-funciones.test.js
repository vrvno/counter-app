import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Bruno";
    const user = getUsuarioActivo(nombre);

    const testUser = {
      uid: "ABC567",
      username: "Bruno",
    };

    expect(user).toEqual(testUser);
  });
});
