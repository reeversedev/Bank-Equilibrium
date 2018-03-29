function equilibrium(nOfValues, array) {
    var leftSum = 0;
    var collection = [];
    var rightSum = array.reduce((totalSum, number) => totalSum + number, 0);

    for (i = 0; i < nOfValues; i++) {
        rightSum = rightSum - array[i];

        if (rightSum == leftSum) {
            collection.push(i);
        }
        leftSum = leftSum + array[i];
    }
    return collection.join();
}

console.log(equilibrium(8, [0, -3, 5, -4, -2, 3, 1, 0]));
console.log(equilibrium(11, [3, -2, 2, 0, 3, 4, -6, 3, 5, -4, 8]));
console.log(equilibrium(11, [9, 0, -5, -4, 1, 4, -4, -9, 0, -7, -1]));
console.log(equilibrium(11, [9, -7, 6, -8, 3, -9, -5, 3, -6, -8, 5]));