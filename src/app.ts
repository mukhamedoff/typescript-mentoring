showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ---------- //
enum Category { JavaScript, CSS, HTML, TypeScript, Angular }

function getAllBooks(){
    const books = [
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming',author: 'Andrea Chiarelli', available: true}
    ];

    return books;
}

function logFirstAvailable(books: any[]): void {
    console.log(`Number of books ${books.length}`);

    const book = books.find((book: {available: boolean}) => book.available);

    console.log(`First available book: ${book.title}`);
}

function getBookTitlesByCategory(category: Category): Array<string> {
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
    const data = [
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
}

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
console.log(calcTotalPages());