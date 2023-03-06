const express = require("express");
const route = express.Router();
const users = require("../models/userSchema");
const books = require("../models/bookSchema");

var bid = 1;
var isAdmin=true;

// To create a book by admin
route.post("/create", async (req, res) => {
  try {
    const newBook = new books({
      bookId: bookId,
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      price: req.body.price,
      quantity:req.body.quantity
    });
    bid++;
    newBook.save();
    res.json({ msg: "Added book successfully!" });
  } catch (err) {
    res.json({ msg: "Error adding the book" });
  }
});

// To get all jobs
route.get("/getBooks", async (req, res) => {
  try {
    const books1 = await books1.find({});
    res.json(books1);
  } catch (err) {
    res.json({ msg: "Error getting books" });
  }
});

// To delete a book from the database
route.put("/delete", async (req, res) => {
  try {
    bookId = req.body.bookId;
    const book = await books.find({ bookId: bookId });
    if (book.length === 0) {
      res.json({ msg: "Invalid Book Id" });
    }
    book[0].remove();
    res.json({ msg: "Book deleted successfully" });
  } catch (err) {
    res.json({ msg: "Error Deleting Book" });
  }
});

// To add book to the wishlist
route.post("/cart", async (req, res) => {
  try {
    mail = req.body.email;
    bookId = req.body.bookId;
    const newCart = new cart({
      email: mail,
      bookId: bookId
    });
    const cart = await cart.find({ bookId: bookId, email: mail });
    if (cart.length >= 1) res.json({ msg: "All ready wishlisted" });
    newBookmark.save();
    res.json({ msg: "Successfully added jobs in wishlist" });
  } catch (err) {
    res.json({ msg: "Error getting jobs" });
  }
});

// To get job wishlist
route.get("/bookmark/:email", async (req, res) => {
  try {
    email = req.params.email;
    let allBookmarks = await bookmarks.find({ email: email });
    JOB = [];
    allBookmarks.forEach((item) => {
      JOB.push(item.jobId);
    });
    console.log(JOB);
    jobTOSend = await jobs.find({ jobId: { $in: JOB } });
    res.json(jobTOSend);
  } catch (err) {
    res.json({ msg: "Error getting bookmarks" });
  }
});

// To delete books from wishlist
route.put("/bookmark", async (req, res) => {
  try {
    mail = req.body.email;
    jobid = req.body.jobId;
    const bookmark = await bookmarks.find({ jobId: jobid, email: mail });
    console.log(bookmark);
    bookmark[0].remove();
    res.json({ msg: "Successfully deleted job from wishlist" });
  } catch (err) {
    res.json({ msg: "Error deleting job from bookmark list" });
  }
});

module.exports = route;
