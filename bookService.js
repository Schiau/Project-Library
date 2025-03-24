const bookListElement = document.getElementById('book-list');

const myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read? 'it is read' : 'not read yet'}`;
    }
}

function removeBookToLibrary(id) {
    for (let i = 0; i < myLibrary.length; i++){
        const currentBook = myLibrary.at(i);
        if (currentBook.id === id){
            myLibrary.splice(i, 1);
            const bookListElement = document.getElementById('book-list');

            const bookItem = document.getElementById(id);
            if (bookItem) {
                bookListElement.removeChild(bookItem);
            }
            return;
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function createBtnDelete(id){
    const delteBtnElement = document.createElement('button');
    delteBtnElement.textContent = 'Delete';
    delteBtnElement.addEventListener('click', () => removeBookToLibrary(id));
    return delteBtnElement;
}

function showBookElement(book) {
    const liElement = document.createElement('li');
    const delteBtnElement = createBtnDelete(book.id);
    liElement.textContent = book.info();
    liElement.id = book.id;
    liElement.appendChild(delteBtnElement);
    return liElement; 
}

function showLibrary() {
    for (const book of myLibrary) {
        bookListElement.appendChild(showBookElement(book));
    } 
}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("Brave New World", "Aldous Huxley", 311, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Moby-Dick", "Herman Melville", 635, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);


showLibrary();