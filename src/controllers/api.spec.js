const app = require("./expressApp");
const supertest = require("supertest");

describe("API", () => {
    let request;
    beforeEach(() => {
        request = supertest(app);
    });

    test("ToDos is tested", (callback) => {
        request.get("/todos").expect(200, (error, response) => {
            expect(response.body.data).toHaveLength(3);
            callback()
        });
    });

    test("ToDo is tested", (callback) => {
        request.get("/todo").expect(200, (error, response) => {
            expect(response.body.data).toBe("Please Create A TO DO");
            callback()
        })
    })
});
