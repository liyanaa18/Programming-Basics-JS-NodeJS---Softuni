function oldBooks(input) {
    let favouriteBook = input[0]
    let index = 1;
    let counter = 0;

    while (input[index] != 'No More Books') {
        if (favouriteBook == input[index]) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }

        index++;
        counter++;
    }

    if (input[index] == 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
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

    "Bourne"]);