const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: false,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

// destructuring

// const book = getBook(3);
// book;


// // destructuring objects
// // const title = book.title;
// // title;
// const { title, author, genres } = book;
// console.log(author + ' and ' + title);



// // destructuring arrays
// const [pGenre, sGenre, ...otherGen] = genres;           //...otherGen is a example of rest operator
// console.log(pGenre + ' ' + sGenre + " " + otherGen);

// // example of srpead operator for arrays
// const newGenre = [...genres, "epic fantasy"];
// console.log(newGenre);

// // example of srpead operator for objects
// const updatedBook = {
//     ...book,
//     // adding a new property
//     moviePublicationDate: '2001:12:19',
//     // overwriting a property
//     pages: 1210
// };
// console.log(updatedBook.pages);



// // template literals

// const summary = `${title} a book  about ${newGenre} written by ${author} with pages ${updatedBook.pages} and movie publication date ${updatedBook.moviePublicationDate}}`;
// summary;


// // Short-Circuiting and Logical Operators which are && and || operators
// console.log(true && "some string");
// console.log(false && "some string");

// console.log(true || "some string");
// console.log(false || "some string");


// // optional chaining
// function getTotal(book) {
//     const goodread = book.reviews?.goodreads?.reviewsCount;
//     const librarything = book.reviews?.librarything?.reviewsCount ?? 0;         //first ? is used for optional chaining if we are not sure if value exists
//     librarything;
//     return goodread + librarything;
// }
// console.log(getTotal(book));


// functional array methods
// 1 - Map,  2 - Filter, 3 - reduce

// // Map method
// const books = getBooks();
// // books;

// const x = [1, 2, 3, 4, 5].map(el => el * 2);
// // console.log(x);

// const bookTitle = books.map(book => book.title);
// // bookTitle;

// const esData = books.map(book => ({
//     title: book.title,
//     author: book.author
// }));
// // esData;


// // Filter method

// const longBooks = books
//     .filter((book) => book.pages > 500)
//     .filter((book) => book.hasMovieAdaptation);
// // longBooks;

// const adventureBooks = books.filter((books) => books.genres.includes('adventure')).map(book => book.title);
// // adventureBooks;


// // Reduce method
// const totalPagesBooks = books.reduce((acc, book) => acc + book.pages, 0);
// // totalPagesBooks;

// // Sort method
// const a = [3, 2, 5, 7, 8, 4, 9];
// // ascending way
// const sort = a.sort((a, b) => a - b);
// // sort;
// // descending way
// const desSort = a.sort((a, b) => b - a);
// // desSort;

// const sortedByPaes = books.slice().sort((a, b) => b.pages - a.pages);
// // sortedByPaes;


// // working with Immutable arrays
// // 1) Add a book object to array 
// const newBook = {
//     id: 6,
//     title: "Ashish new book",
//     author: "Ashish",
// }
// const booksAfterAdd = [...books, newBook];
// // console.log(booksAfterAdd);

// // 2 delete book object from array 
// const bookAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// // console.log(bookAfterDelete);

// // 3) update book object in array 
// const bookAfterUpdate = bookAfterDelete.map((book) =>
//     book.id === 1 ? { ...book, pages: 1210 } : book
// );
// console.log(bookAfterUpdate);

// Asynchronous Promises
// 1) fetch method

// console.log(fetch('https://jsonplaceholder.typicode.com/todos'));
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => console.log(data))

// console.log("Hello");

// 2) Async Await
async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    // console.log(data);
    return data;
}

const todos = getTodos();
console.log(todos);
// getTodos();
console.log("Hello");