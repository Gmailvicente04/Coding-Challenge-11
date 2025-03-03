// Task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}
const book1 = new Book('The Alchemist', 'Paulo Coelho', '9780062315007', 5);
console.log(book1.getDetails());
book1.updateCopies(-1);
console.log(book1.getDetails());


// Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
}

const borrower1 = new Borrower("Vicente Oswald", 201);
borrower1.borrowBook("The Alchemist");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Alchemist");
console.log(borrower1.borrowedBooks);


// Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}


const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1);
library.listBooks();