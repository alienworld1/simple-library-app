const MyLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(book) {
    MyLibrary.push(book);
}

const cardsContainer = document.querySelector("#cards-container");

function removeAllChildElements(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(book);

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("bold");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookPages = document.createElement("em");
    bookPages.textContent = `(${book.pages} pages)`;

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);

    return card;
}

function refreshCardsContainer() {
    removeAllChildElements(cardsContainer);

    MyLibrary.forEach((book) => {
        const bookCard = createBookCard(book);
        cardsContainer.appendChild(bookCard);
    });
}

// Example books
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("The Art of War", "Sun Tzu", 64, true);
const book3 = new Book("1984", "George Orwell", 258, false);

MyLibrary.push(book1);
MyLibrary.push(book2);
MyLibrary.push(book3);

refreshCardsContainer();