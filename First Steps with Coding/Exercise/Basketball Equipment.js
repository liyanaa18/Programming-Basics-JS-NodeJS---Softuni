function BasketballEquipment(input)
{
    let yearMoney = Number(input[0]);

    let basketTrainers = yearMoney * 0.6;
    let basketCostume = basketTrainers * 0.8;
    let basketBall = 0.25 * basketCostume;
    let basketAccessories = 0.2 * basketBall; 

    let total = yearMoney + basketTrainers + basketCostume + basketBall + basketAccessories;

    console.log(total);
}

BasketballEquipment(["550"]);