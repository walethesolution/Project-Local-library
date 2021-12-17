function getTotalBooksCount(books) {
  let result = books.reduce((total, book) => total + 1, 0);
  return result;
}

function getTotalAccountsCount(accounts) {
  let result = accounts.reduce((total, account) => total + 1, 0);
  return result;
}

function getBooksBorrowedCount(books) {
  let result = books.reduce((total, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].returned === false) {
        total++;
      }
    }
    return total;
  }, 0);
  return result;
}

function topFive(array) {
  let popularBooks = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);
  return popularBooks;
}

function getMostCommonGenres(books) {
  const genre = books.map((book) => book.genre);
  let mostCommonGenre = [];
  let count = {};
  genre.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  for (let key in count) {
    mostCommonGenre.push({
      name: key,
      count: count[key],
    });
  }
  return topFive(mostCommonGenre);
}

function getMostPopularBooks(books) {
  const bookTitles = books.map((book) => {
    return {
      name: book.title,
      count: book.borrows.length,
    };
  });
  return topFive(bookTitles);
}

function getMostPopularAuthors(books, authors) {
  let mostPopularBooks = [];
  authors.forEach((author) => {
    let eachAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        eachAuthor.count += book.borrows.length;
      }
    });
    mostPopularBooks.push(eachAuthor);
  });
  return topFive(mostPopularBooks);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
