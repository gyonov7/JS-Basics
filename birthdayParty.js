function birthdayParty(input) {

    let rent = Number(input);
    let cake = rent / 5;
    let drinks = cake * 0.55;

    let animator = rent / 3;

    let budgetNeeded = rent + cake +
        animator + drinks


    console.log(budgetNeeded);
}

birthdayParty(['2250'])