function flowerShop(input) {

    let magnolii = Number(input[0]);
    let ziumbiuli = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktusi = Number(input[3]);
    let giftPrice = Number(input[4]);

    let totalPrice = magnolii * 3.25 + ziumbiuli * 4 + rozi * 3.5 + kaktusi * 8
   let grandTotal = totalPrice * 0.95

    let diff = Math.abs(grandTotal - giftPrice)
    if (grandTotal >= giftPrice) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}
flowerShop([2, 3, 5, 1, 50])