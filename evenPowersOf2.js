function evenPowersOf2(input) {

    let n = Number(input[0]);
    

    for (i = 0; i <= n; i ++) {
        if(i%2===0){
            console.log(Math.pow(2,i));
        }
    }

}
evenPowersOf2([6])