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
const newBookDialog = document.querySelector("#new-book-dialog");
const newBookButton = document.querySelector("#new-book-btn");
const closeDialogButton = document.querySelector("#cancel-button");
const submitNewBookButton = document.querySelector("#submit-button");

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

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = `Author: ${book.author}`;

    const bookPages = document.createElement("em");
    bookPages.textContent = `(${book.pages} pages)`;

    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);

    const hasReadMarker = document.createElement("input");
    hasReadMarker.setAttribute("type", "checkbox");
    hasReadMarker.classList.add("scale-up");

    if (book.read) hasReadMarker.setAttribute("checked", "true");

    const readSection = document.createElement("section");
    const readLabel = document.createElement("span");
    
    readLabel.textContent = "Have you read this book?";
    
    readSection.appendChild(readLabel);
    readSection.appendChild(hasReadMarker);

    card.appendChild(readSection);

    return card;
}

function getBookFromForm() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const hasRead = document.querySelector("#hasRead");

    if (!title.value) {
        alert("Please enter an appropriate title.");
        return;
    }

    if (!author.value) {
        alert("Please enter an appropriate author.");
        return;
    }

    if (!pages.value) {
        alert("Please enter the number of pages in this book!");
        return;
    }

    let numPages = +pages.value;
    if (numPages < 1) {
        alert("Please enter an appropriate number of pages.");
        return;
    }

    const newBook = new Book(title.value, author.value, numPages, hasRead.checked);

    return newBook;
}

function refreshCardsContainer() {
    removeAllChildElements(cardsContainer);

    MyLibrary.forEach((book) => {
        const bookCard = createBookCard(book);
        cardsContainer.appendChild(bookCard);
    });
}

newBookButton.addEventListener("click", () => {
    newBookDialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
    newBookDialog.close();
})

submitNewBookButton.addEventListener("click", () => {
    event.preventDefault();
    const book = getBookFromForm();

    if (!book) return;

    MyLibrary.push(book);
    newBookDialog.close();

    refreshCardsContainer();
})