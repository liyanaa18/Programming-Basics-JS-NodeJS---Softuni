function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);

    if (sales < 0) {
        console.log('error');
    }
    else if (town == 'Sofia') {
        if (sales >= 0 && sales <= 500) {
            sales = (sales * 5) / 100;
        }
        else if (sales >= 500 && sales <= 1000) {
            sales = (sales * 7) / 100;
        }
        else if (sales >= 1000 && sales <= 10000) {
            sales = (sales * 8) / 100;
        }
        else {
            sales = (sales * 12) / 100;
        }

        console.log(sales.toFixed(2));
    }
    else if (town == 'Plovdiv') {
        if (sales >= 0 && sales <= 500) {
            sales = (sales * 5.5) / 100;
        }
        else if (sales >= 500 && sales <= 1000) {
            sales = (sales * 8) / 100;
        }
        else if (sales >= 1000 && sales <= 10000) {
            sales = (sales * 12) / 100;
        }
        else {
            sales = (sales * 14.5) / 100;
        }
        console.log(sales.toFixed(2));
    }
    else if (town == 'Varna') {
        if (sales >= 0 && sales <= 500) {
            sales = (sales * 4.5) / 100;
        }
        else if (sales >= 500 && sales <= 1000) {
            sales = (sales * 7.5) / 100;
        }
        else if (sales >= 1000 && sales <= 10000) {
            sales = (sales * 10) / 100;
        }
        else {
            sales = (sales * 13) / 100;
        }
        console.log(sales.toFixed(2));
    }
    else if (town != 'Sofia' || town != 'Plovdiv' || town != 'Varna') {
        console.log('error');
    }
}

tradeCommissions(["Sofia",
    "1500"])


