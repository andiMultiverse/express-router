const request = require('supertest');
const app = require('./src/app'); 
const { User, Fruit } = require('./models/index');

describe("GET /users", () => {
    test("should return an array of users", async () => {
        // mock database
        const fakeUsers = [
            { name: "John Doe", email: "john@example.com" },
            { name: "Jane Doe", email: "jane@example.com" },
        ];

        jest.spyOn(User, "findAll").mockResolvedValue(fakeUsers);

        const response = await request(app).get("/users");

        expect(response.body).toEqual(fakeUsers);
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toEqual(fakeUsers.length);
    });

    test("should return the correct user data", async () => {
        const fakeUser = { id: 1, name: "John Doe", email: "john@example.com" };

        jest.spyOn(User, "findByPk").mockResolvedValue(fakeUser);

        const response = await request(app).get("/users/1");

        expect(response.body).toEqual(fakeUser);
        expect(response.statusCode).toBe(200);
    });

    test("should create a new user", async () => {
        const newUser = { name: "John Doe", email: "john@example.com" };

        jest.spyOn(User, "create").mockResolvedValue(newUser);

        const response = await request(app)
            .post("/users")
            .send(newUser);

        expect(response.body).toEqual(newUser);
        expect(response.statusCode).toBe(200);
    });

    test("should update a user", async () => {
        const updatedUser = { name: "John Doe", email: "john@example.com" };

        jest.spyOn(User, "update").mockResolvedValue(updatedUser);

        const response = await request(app)
            .put("/users/1")
            .send(updatedUser);

        expect(response.body).toEqual(updatedUser);
        expect(response.statusCode).toBe(200);
    });

    test("should delete a user", async () => {
        const deletedUser = { name: "John Doe", email: "john@example.com" };

        jest.spyOn(User, "destroy").mockResolvedValue(deletedUser);

        const response = await request(app)
            .delete("/users/1")
            .send(deletedUser);

        expect(response.body).toEqual(deletedUser);
        expect(response.statusCode).toBe(200);
    });
});