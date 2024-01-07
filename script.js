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