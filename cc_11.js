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

// Task 4: Implementing Book Borrowing
class LibraryExtended extends Library {
    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn && b.copies > 0);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }
}



const libraryExtended = new LibraryExtended();
libraryExtended.addBook(book1);
libraryExtended.borrowers.push(borrower1);
libraryExtended.lendBook(201, '9780062315007');
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);


// Task 5: Implementing Book Returns
LibraryExtended.prototype.returnBook = function (borrowerId, isbn) {
    const book = this.books.find(b => b.isbn === isbn);
    const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
    
    if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
    }
};

// return 1 book, increase copies from 3 to 4
libraryExtended.returnBook(201, '9780062315007');

console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);
