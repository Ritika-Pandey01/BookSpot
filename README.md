
# BookSpot: BookStore

BookSpot is an online store for viewing and buying books. It provides suggestions for books similar to the genre as you add books to the cart. It also stores the previous orders. The store is built with the most recent front-end technology along with Node JS APIs to authenticate the users, and MongoDB and Node JS to create the backend.

## Functionalities
- The user is first directed to the home page which contains all the books.
- The user then directs to the login page and if he is a new user he can navigate to the signup page from there.
- After logging in the user is directed to the home page.
- The existing user then adds books to the cart.
- An API traverses through the added books in the cart and pushes them to the Orders array. This is what is displayed in the header.
- After adding books to the cart an API traverses through the orders and takes out the genre of the ordered book. 
- This genre is stored in a set and next all the books in the database with the same genre are stored in another set which is Suggestions.
- This suggestion set is used to display data for the Suggestions header.
- The genre of the books added to the cart will be kept in mind and the books of the same genre will be filtered from the available books and then pushed to the recommendations page.

## Technologies Used
React JS, Toastify, MongoDB, Node JS, Express JS

## Backend:
APIs Used:
- Register API: It registers the user’s email, password, mobile

- Login API: It logs in the user with email and password


- Create Books API: It creates a book by adding the book’s title, genre, author, price, image


- Get Books API: It gets all the books from the db

- Add To Cart API: It adds the books to the cart and then creates a genre set and pushes the books with the similar genre in the suggestions set.

- Get Cart Books: It gets the books from the cart

- Get Suggestions Books: It gets the suggestions array


## Running Tests

To run tests, run the following command in the frontend and the backend

```bash
  npm start 
```

