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

// Example books
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const book2 = new Book("The Art of War", "Sun Tzu", 64, true);
const book3 = new Book("1984", "George Orwell", 258, false);
const book4 = new Book("Mein Kampf", "Adolf Hitler", 600, true);

MyLibrary.push(book1);
MyLibrary.push(book2);
MyLibrary.push(book3);
MyLibrary.push(book4);

refreshCardsContainer();