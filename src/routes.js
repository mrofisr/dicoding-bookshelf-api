const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookByIdHandler,
    deleteBookByIdHandler,
} = require("./handler");

const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return h
                .response({ message: "Hello Dicoding!" })
                .type("application/json")
                .code(200);
        },
    },
    {
        method: "GET",
        path: "/ping",
        handler: (request, h) => {
            return h
                .response({ message: "pong" })
                .type("application/json")
                .code(200);
        },
    },
    {
        method: "GET",
        path: "/books",
        handler: getAllBooksHandler,
    },
    {
        method: "GET",
        path: "/books/{bookId}",
        handler: getBookByIdHandler,
    },
    {
        method: "POST",
        path: "/books",
        handler: addBookHandler,
    },
    {
        method: "PUT",
        path: "/books/{bookId}",
        handler: updateBookByIdHandler,
    },
    {
        method: "DELETE",
        path: "/books/{bookId}",
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;
