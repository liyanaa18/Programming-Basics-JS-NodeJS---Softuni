function foodDelivery(input)
{
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let sumMenu = chickenMenu * 10.35 + fishMenu * 12.40 + veganMenu * 8.15;
    let sweet = 0.2 * sumMenu;
    let delivery = 2.50;

    let total = sumMenu + sweet + delivery;

    console.log(total);
}

foodDelivery(["9 ",

"2 ",

"6 "]);