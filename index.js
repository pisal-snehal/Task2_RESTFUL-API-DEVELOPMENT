const { error } = require("console");
const express = require("express");
const { v4: uuidv4 } = require("uuid");


const app = express();
const port = 8080;

app.use(express.json());

//book data
let books = [
    {
        id: uuidv4(),
        title: "Chava",
        author: "Shivaji Sawant"
    },
    {
        id: uuidv4(),
        title: "Wings of Fire",
        author: "A.P.J Abdul Kalam"
    }
];

//GET all books
app.get("/books", (req, res) => {
    res.json(books);
});

//POST a new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: uuidv4(), title, author };
    books.push(newBook);
    res.status(201).json({ message: "Book addded", book: newBook });
});

//GET a single book by id
app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === id);
    if (!book)
        return res.status(404).json({ error: "Book not found" });
    res.json(book);
});

// PATCH update a book
app.patch("/books/:id", (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ error: "Book not found" });
    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.json({ message: "Book updated", book });
});


//DELETE a book
app.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    const originalLength = books.length;
    books = books.filter(b => b.id !== id);
    if (books.length === originalLength)
        return res.status(404).json({ error: "Book not found" });
    res.json({ message: "Book deleted" });
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});