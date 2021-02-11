/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


/** Task 02.01 */
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

interface DamageLogger {
    (reason: string): void;
}
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void
    markDamaged?: DamageLogger
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void
}

type BookProperties = keyof Book;
type PersonBook = Person & Book;
type BookOrUndefined = Book | undefined;

function getAllBooks(): ReadonlyArray<Book>{
    const books: readonly Book[] = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming',author: 'Andrea Chiarelli', available: true}
    ];

    return books;
}
function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    console.log(`Number of books ${books.length}`);

    const book = books.find((book: {available: boolean}) => book.available);

    console.log(`First available book: ${book.title}`);
}
function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    return books.filter((book: any) => book.category === category)
        .map((book: any) => book.title);
}
function logBookTitles(titles: string[]): void {
    titles.forEach(title => {
        console.log(title)
    });
}
function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const {title, author} = books[index];
    return [title, author];
}
function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());


/** Task 03 */
function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}
const myID: string = createCustomerID('Jack', 1);
// console.log(myID);
let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}-${name}`;
idGenerator = createCustomerID;
// console.log(idGenerator('myID', 2));
function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name ${name}`);
    if (age) console.log(`Customer age: ${age}`);
    if (age) console.log(`Customer city: ${city}`);
}
createCustomer('name', 12, 'city');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();

function getBookByID(id: number): BookOrUndefined{
    const books = getAllBooks();
    return books.find(book => book.id === id);
}
// console.log(getBookByID(1));
function сheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);

    return bookIDs.map(id => {
        const book = getBookByID(id);
        if (book?.available) {
            return book.title;
        }
    }).filter(title => title);
}
const myBooks = сheckoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg)
                .map(book => book.title);
        }else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg)
                .map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available)
                .map(book => book.title);
        }
    }
};
// console.log(getTitles(1, true));

function assertStringValue(val: any): asserts val is string {
    if (typeof val !== 'string') {
        throw new Error('value should have been a string');
    }
}
function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(100));


/** Task 04 */
function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`)
}
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    // year: 2015,
    // copies: 3,
    markDamaged: (reason: string) => `Damaged: ${reason}`
}
// printBook(myBook);
// console.log(myBook.markDamaged('missing back cover'));

const logDamage: DamageLogger = (reason: string) => `Damaged: ${reason}`;
// console.log(logDamage('missing back cover'));

const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@mail.com',
    numBooksPublished: 3
};
const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: 'boris@mail.com',
    department: 'Classical',
    assistCustomer: (custName) => {
        console.log(custName);
    }
};

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

function getProperty(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return (book[prop] as Function).name;
    }
    return book[prop];
}

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

/** Task 5 */
abstract class ReferenceItem {
    // title: string;
    // year: number;

    // constructor (newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    #id: number;
    private _publisher: string;
    static department: string = 'Classical Literature';
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor (id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    getID(): number {
        return this.#id;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    abstract printCitation(): void;
}

// const ref: ReferenceItem = new ReferenceItem(1, 'TypeScript', 2021);
// ref.printItem();
// ref.publisher = 'Publisher';
// console.log(ref.publisher);
// console.log(ref.detID());

class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}

const refBook = new Encyclopedia(1, 'TypeScript', 2021, 3);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}
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