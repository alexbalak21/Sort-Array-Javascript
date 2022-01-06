//Sort Array using native JavaScript Methods

export function sortArrayJS(array) {
    let arrayCopy = [...array];
    let newArray = new Array(array.length);
    let newMin = 0;
    let newMax = array.length - 1;
    while (arrayCopy.length > 0) {
        let min = Math.min(...arrayCopy);
        let minIndex = arrayCopy.indexOf(min);
        let max = Math.max(...arrayCopy);
        let maxIndex = arrayCopy.indexOf(max);
        if (maxIndex > minIndex) maxIndex--;
        arrayCopy.splice(minIndex, 1);
        arrayCopy.splice(maxIndex, 1);
        newArray[newMin] = min;
        newArray[newMax] = max;
        newMin++;
        newMax--;
    }
    array = newArray;
    return array;
}
