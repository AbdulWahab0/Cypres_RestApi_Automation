/// <reference types ="Cypress" />

describe("get api user test", () => {
  let accessToken =
    "a54ba7ebd85450b1401bf2d3298ff6d541417a68cb91fb67f42bc025f04d265a";

  it.only("get user", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users",
      headers: {
        authorization: "Bearer" + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.meta.pagination.limit).to.eq(20);
    });
  });

  it("get user by id", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v1/users/2",
      headers: {
        authorization: "Bearer" + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.data.name).to.eq("kalam");
    });
  });
});
