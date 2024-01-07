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

    const bookTitle = document.createElement("div");
    bookTitle.classList.add("bold");
    bookTitle.textContent = book.title;

    const bookDescription = document.createElement("div");
    bookDescription.innerHTML = `Author: ${book.author}<br><em>(${book.pages})</em>`;

    card.appendChild(bookTitle);
    card.appendChild(bookDescription);

    return card;
}

function refreshCardsContainer() {
    removeAllChildElements(cardsContainer);
    MyLibrary.forEach((book) => {

    });
}