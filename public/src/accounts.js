function findAccountById(accounts, id) {
  const accountFound = accounts.find((account) => account.id === id);
  return accountFound;
}

function sortAccountsByLastName(accounts) {
  const sortedAccount = accounts.sort((accountA, accountB) =>
    accountA["name"].last < accountB["name"].last ? -1 : 1
  );
  return sortedAccount;
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((total, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (account.id === book.borrows[i].id) total++;
    }
    return total;
  }, 0);
  return result;
}

// function getBooksPossessedByAccount(account, books, authors) {
//   const filterBooks = books.filter((book) =>
//     book.borrows.some(
//       (borrowed) => borrowed.id === account.id && borrowed.returned === false
//     )
//   );

//   const mapBooks = filterBooks.map((book) => {
//     let author = authors.find((author) => author.id === book.authorId);
//     book.author = author;
//     return book;
//   });
//   return mapBooks;
// }

function getBooksPossessedByAccount(account, books, authors) {
  const filterBooks = books.filter((book) => {
    const found = book.borrows.some(
      (borrowed) => borrowed.id === account.id && borrowed.returned === false
    );
    if (found) {
      // book
      let author = authors.find((author) => author.id === book.authorId);
      book.author = author;
    }
    return found;
  });
  return filterBooks;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
