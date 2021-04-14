const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"

//Sort books from oldest to most recent

//uncomment below for code, code messes up some of the other questions, comment again once finish with question

// const sortByDate = (books) => {
//   const sorter = (a, b) => {
//     return (
//       new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
//     );
//   };
//   books.sort(sorter);
//   return books;
// };
// console.log(sortByDate(books));

//sort books alphabetically

const alphabeticaltitles = titles.sort();
console.log(alphabeticaltitles);

//Find who wrote War and Peace

const wnp1 = books[5]["authorFirst"];
const wnp2 = books[5]["authorLast"];
console.log(wnp1, wnp2);

//how many books were written before 1900?
function before1900({ publishDate: value }) {
  if (value < 1900) return "1 +";
  else return "0";
}

const cool = books.map(before1900);
console.log(cool);

//was there at least one book published within the last 100 years?
function publish100within({ publishDate: value }) {
  if (value > 1921) return console.log("yes");
}

books.map(publish100within);
//was every book published within the last 100 years?
function publish100years({ publishDate: value }) {
  if (value < 1921) return console.log("no");
}

books.map(publish100years);
