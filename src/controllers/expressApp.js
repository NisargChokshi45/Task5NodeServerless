const express = require("express");
const app = express();

app.get("/todos", (req, res, next) => {
    res.status(200);
    res.json({
        is_error: false,
        message: "/ToDos Route Called",
        data: [
            { id: 1, title: "Todo 1" },
            { id: 2, title: "Todo 2" },
            { id: 3, title: "Todo 3" },
        ],
    });
});

app.get("/todo", (req, res, next) => {
    res.status(200);
    res.json({ is_error: false, message: "/ToDo Route Called", data: "Please Create A TO DO" });
});

app.get("/*", (req, res, next) => {
    res.status(200);
    res.json({is_error: false, message: "/ Route Called", data: "Routing Lambdas using Express"})
})

module.exports = app;