//Separeted the function in two parts

export function sortArrayMinMax(array) {
    let newArray = new Array(array.length);
    let newMin = 0;
    let newMax = array.length - 1;
    let minmax;
    while (array.length > 0) {
        minmax = minMaxIndex(array);
        let min = array[minmax[0]];
        let max = array[minmax[1]];
        if (minmax[1] > minmax[0]) minmax[1]--;
        array.splice(minmax[0], 1);
        array.splice(minmax[1], 1);
        //PLACE MIN AND MAX ON THE LIMITS OF NEW ARRAY
        newArray[newMin] = min;
        newArray[newMax] = max;
        newMin++;
        newMax--;
    }
    return newArray;
}

function minMaxIndex(array) {
    if (array.length == 1) return [0, 0];
    let max = array[0];
    let min = max;
    let minIndex = 0;
    let maxIndex = 0;
    array.forEach((value, index) => {
        if (max <= value) {
            max = value;
            maxIndex = index;
        }
        if (min > value) {
            min = value;
            minIndex = index;
        }
    });
    return [minIndex, maxIndex];
}
