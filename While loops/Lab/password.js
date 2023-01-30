function password(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;

    while (input[index] != password) {
        index++;
    }

    console.log(`Welcome ${username}!`);
}
password(["Gosho", "secret", "secret"]);