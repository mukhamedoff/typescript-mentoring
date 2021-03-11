/* eslint-disable no-underscore-dangle */

import { createCustomer, createCustomerID, сheckoutBooks, purge, getProperty, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./functions";
import { Author, Book, Librarian, Logger, Magazine} from "./interfaces";
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";
import { RefBook, Shelf, ReferenceItem, UniversityLibrarian } from "./classes/";
import { Category } from "./enums";

import type { Library } from "./classes/"

/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


/** Task 02.01 */
// enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

// interface DamageLogger {
//     (reason: string): void;
// }
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     // markDamaged?: (reason: string) => void
//     markDamaged?: DamageLogger
// }
// interface Person {
//     name: string;
//     email: string;
// }
// interface Author extends Person {
//     numBooksPublished: number
// }
// interface Librarian extends Person {
//     department: string;
//     assistCustomer: (custName: string) => void
// }

// type BookProperties = keyof Book;
// type PersonBook = Person & Book;
// type BookOrUndefined = Book | undefined;


// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());


/** Task 03 */

const myID: string = createCustomerID('Jack', 1);
// console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('myID', 2));

createCustomer('name', 12, 'city');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();


// console.log(getBookByID(1));

const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// console.log(getTitles(1, true));

// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(100));


/** Task 04 */

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     // year: 2015,
//     // copies: 3,
//     markDamaged: (reason: string) => `Damaged: ${reason}`
// }
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));

// const logDamage: Logger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));

// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@mail.com',
//     numBooksPublished: 3
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@mail.com',
//     department: 'Classical',
//     assistCustomer: (custName) => {
//         console.log(custName);
//     }
// };

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

/** Task 5 */
// abstract class ReferenceItem {
//     // title: string;
//     // year: number;

//     // constructor (newTitle: string, newYear: number) {
//     //     console.log('Creating a new ReferenceItem...');
//     //     this.title = newTitle;
//     //     this.year = newYear;
//     // }

//     #id: number;
//     private _publisher: string;
//     static department: string = 'Classical Literature';
//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }
//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }

//     constructor (id: number, public title: string, protected year: number) {
//         console.log('Creating a new ReferenceItem...');
//         this.#id = id;
//     }

//     getID(): number {
//         return this.#id;
//     }

//     printItem(): void {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log(ReferenceItem.department);
//     }

//     abstract printCitation(): void;
// }

// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
// ref.printItem();
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// console.log(ref.detID());



const refBook = new /*Encyclopedia*/ RefBook(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// class UniversityLibrarian implements Librarian {
//     name: string;
//     email: string;
//     department: string;

//     assistCustomer(custName: string): void {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// }
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

const personBook: PersonBook = {
    id: 1,
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.JavaScript,
    email: 'anna@email.com',
    title: 'JavaScript'
}

/** Task 06 */
// import('./classes')
//     .then(module => {
//         console.log(new module.Reader());
//     })
//     .catch(err => {
//         console.log(err)
//     })
let lib:Library;
// lib = new Library();
lib = {
    id: 1,
    name: 'Anna',
    address: 'Address'
};

/** Task 7 */
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// console.log(purge<Book>(inventory));
// console.log(purge([1,2,3,4,5]));
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ]
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst());

//7.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getProperty(magazines[0], 'title'));

//7.04
// const book: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'unknown'
// }
// const b: UpdatedBook = {
//     id: 1,
//     author: 'Boris'
// }
// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

//Task 8
const l = new UniversityLibrarian();
// l.name = 'Age';
// console.log(l);
// l['printLibrarian']();

//task 8.03
// l.assistFaculty = null;
// l.teachCommunity = null;

// task 8.04
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.printItem();

//task 8.05, 8.06
// l.name = 'Anna';
// l.assistCustomer('Boris');
// console.log(l);

//task 8.07
// const e = new RefBook(1, 'Unknown', 2021, 2);
// e.copies = 10;
// e.copies = 0;
// e.copies = 1.1;

//Task 9.01
// console.log('Start')
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish')

//Task 9.02
console.log('Start')
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {console.log(titles); return titles.length})
    .then(numOfBooks => console.log(numOfBooks))
    .catch(err => console.log(err));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(err => console.log(err));
console.log('Finish')

//Task 9.03
console.log('Start')
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch(err => console.log(err));
console.log('Finish')