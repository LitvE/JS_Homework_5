//Task - Соединить два массива в один без повторов (без одинаковых повторяющихся элементов)

const functionTask2 = (array1, array2) => {
    let resultArray = [];
    let arrayBuffer = array1.concat(array2);

    arrayBuffer.forEach(element => {
        if (!resultArray.includes(element)) {
            resultArray.push(element);
        }
    });

    return resultArray.sort(function(a, b) {
        return a - b;
      });;
}

let arrTest1 = [-5, 1, 2, 5, 6, 250, 4];
let arrTest2 = [-100, 1, 2, 3, 4, 10];

console.log(functionTask2(arrTest1, arrTest2));