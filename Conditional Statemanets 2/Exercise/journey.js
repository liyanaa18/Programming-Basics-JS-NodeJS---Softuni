function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        if (season == 'winter') {
            budget = (7 * budget) / 10;
            console.log(`Hotel - ${budget.toFixed(2)}`);
        }
        else if (season == 'summer') {
            budget = (3 * budget) / 10;
            console.log(`Camp - ${budget.toFixed(2)}`);
        }
    }
    else if (budget <= 1000) {
        console.log("Somewhere in Balkans");
        if (season == 'winter') {
            budget = (8 * budget) / 10;
            console.log(`Hotel - ${budget.toFixed(2)}`);
        }
        else if (season == 'summer') {
            budget = (4 * budget) / 10;
            console.log(`Camp - ${budget.toFixed(2)}`);
        }
    }
    else {
        console.log("Somewhere in Europe");
        budget = (9 * budget) / 10;
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }
}
journey(["1500", "summer"])