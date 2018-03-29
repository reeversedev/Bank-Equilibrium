function BankEquilibrium(nOfValues, array) {
    var collection = [];
    for (var i = 0; i < nOfValues; ++i) {
        /* Instantiating the sum variables because everytime I have to start it from Scratch */
        let sumLeft = 0;
        let sumRight = 0;
        /* Computing the left Sum */
        for (var j = 0; j < i; j++) {
            sumLeft += array[j];
           // console.log('SumLeft', sumLeft);
        }
        /* Computing the Right Sum */
        for (j = (i + 1); j < nOfValues; j++) {
            sumRight += array[j];
          //  console.log('SumRight', sumRight);
        }
        /* If both the sum are equal then putting the index into collection */
        if (sumLeft == sumRight) {
            collection.push(i);
        }
    }
    return collection.join();
}

console.log(BankEquilibrium(8, [0, -3, 5, -4, -2, 3, 1, 0]));
console.log(BankEquilibrium(11, [3, -2, 2, 0, 3, 4, -6, 3, 5, -4, 8]));
console.log(BankEquilibrium(11, [9, 0, -5, -4, 1, 4, -4, -9, 0, -7, -1]));
console.log(BankEquilibrium(11, [9, -7, 6, -8, 3, -9, -5, 3, -6, -8, 5]));