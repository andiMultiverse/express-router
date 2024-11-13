const express = require("express");
const users = express.Router();
const User = require("../models/User");

users.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

users.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

users.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

users.put("/:id", async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: { id: req.params.id },
        });
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

users.delete("/:id", async (req, res) => { 
    try {
        const user = await User.destroy({
            where: { id: req.params.id },
        });
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = users;