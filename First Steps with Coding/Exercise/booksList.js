function booksList(input)
{
    let pages = Number(input[0]);
    let pagesHour = Number(input[1]);
    let days = Number(input[2]);

    let time = pages / pagesHour;
    let hourDay = time / days;

    console.log(hourDay);
}

booksList(["212 ",

"20 ",

"2 "]);