/// <reference types ="Cypress" />

describe("post user request", () => {
  let accessToken =
    "572ca63f1cdc79cfc386ada9958882570ad64e7371d8de29238a301be8197f84";
  it("create user function", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization: "Bearer" + accessToken,
      },
      body: {
        name: "test",
        email: "test@crona.io",
        gender: "gender",
        status: "active",
      },
    }).then((response) => {
      expect(response.body.data).has.property("email", "tqqest@crona.io");
      expect(response.body.data).has.property("name", "test");
      expect(response.body.data).has.property("gender", "gender");
    });
  });
});
