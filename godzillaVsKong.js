function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let pricePerStatist = Number(input[2]);

    let decor = budget * 0.1
    let priceClothing = statists * pricePerStatist

    if (statists > 150) {
       
        priceClothing = priceClothing * 0.9
    }

    let totalProductionCosts = priceClothing + decor
    let diff = Math.abs(totalProductionCosts - budget)
    if (totalProductionCosts > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"])

