// Даны два массива. Нужно вернуть разницу между первым и вторым массивом

const arrayDiffs = (targetArray, foundArray) => {
    // писать код сюда
};

// TEST
const showResult = (result, needResult) => {
    console.log(result === needResult, ` ${result}`);
};
showResult(arrayDiffs([1, 2, 2, 2, 2, 3], [2]), [1, 3]);
showResult(arrayDiffs([4, 5, 6, 4, 8, 10], [4, 10, 12]), [5, 6, 8]);
showResult(arrayDiffs([12, 55, 6], []), [12, 55, 6]);
showResult(arrayDiffs([], [7, 10, 11]), []);
