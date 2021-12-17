function findAuthorById(authors, id) {
  const authorFound = authors.find((author) => author.id === id);
  return authorFound;
}

function findBookById(books, id) {
  const bookFound = books.find((book) => book.id === id);
  return bookFound;
}

function partitionBooksByBorrowedStatus(books) {
  let availableBooks = [];
  let unavailableBooks = [];
  const bookStatus = [];
  books.forEach((book) => {
    const isBookReturned = book.borrows[0].returned;
    isBookReturned ? unavailableBooks.push(book) : availableBooks.push(book);
  });
  bookStatus.push(availableBooks);
  bookStatus.push(unavailableBooks);
  return bookStatus;
}

function getBorrowersForBook(book, accounts) {
  const sliceEnd = accounts.length > 10 ? 10 : accounts.length;
  let borrowers = [];
  let borrowArray = book.borrows;
  borrowArray.forEach((borrow) => {
    let account = accounts.find((acc) => acc.id === borrow.id);
    account["returned"] = borrow.returned;
    borrowers.push(account);
  });
  return borrowers.slice(0, sliceEnd);
}

// ```
// const findById = (arr) => {return arr.find((obj) => {
// ```
// ```
// const findById = (arr, id) => {
//     return arr.find((obj) => {
//         obj.id === id;
//     }
// }
// findById(authors, id)

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
