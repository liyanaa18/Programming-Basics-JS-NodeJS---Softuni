function passwordGuess(input)
{
    let newPassword = input[0];
    let password = "s3cr3t!P@ssw0rd";

    if(newPassword == password)
    {
        console.log("Welcome");
    }
    else
    {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);