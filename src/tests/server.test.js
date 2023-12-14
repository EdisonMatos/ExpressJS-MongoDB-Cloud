const request = require("supertest");
const app = require("../server");

describe("/GET findlAll()", () => {
  it("Find all users and return 200 statusCode", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toEqual(200);
  });
});

describe("/GET findOne()", () => {
  it("Find an user based on id and return 200 statusCode", async () => {});
});
