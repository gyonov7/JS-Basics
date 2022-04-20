function oldBooks(input) {
    let favouriteBook = input[0];
    let counterBooks = 0;
    let index = 1;
    let nextBook = input[index];
    index++;
    let bookIsFound = false
    while (nextBook !== 'No More Books') {
        if (nextBook === favouriteBook) {
            bookIsFound = true;
            break;

        }
        counterBooks++;
        nextBook = input[index];
        index++;
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counterBooks} books.`);

    } else {
        console.log(`You checked ${counterBooks} books and found it.`);

    }
}



oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])



