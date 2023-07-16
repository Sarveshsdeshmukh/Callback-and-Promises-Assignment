// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

function callback(titles) {
    titles.sort();
    for (const title of titles) {
        console.log(title);
    }
}

const books = [
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        year: 1979,
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        title: "This is World !",
        author: "George Orwell",
        year: 1949,
    },
];

const titles = books.map((book) => book.title);
callback(titles);
