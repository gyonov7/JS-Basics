function pets(input){
    let day = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);

    let dogEat = day * dogFoodPerDay
    let catEat = day * catFoodPerDay
    let turtleEat = day * turtleFoodPerDay/1000

    let totalFood = dogEat + catEat + turtleEat
let diff = Math.abs(foodLeftInKg - totalFood)
    if(foodLeftInKg>=totalFood){
console.log(`${Math.floor(diff)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
    
}
pets([5,
    10,
    2.1,
    0.8,
    321,
    ])