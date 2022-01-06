// Self made function

export function sortArray(array) {
    //CREATING ARRAY TO STORE SORTED ITEMS
    let newArray = new Array(array.length);
    let newMin = 0;
    let minIndex = 0;
    let maxIndex = 0;
    let newMax = array.length - 1;
    while (array.length > 0) {
        //WHILE ARRAY IS NOT NULL
        let min = array[0];
        let max = array[array.length - 1];
        // MAKE IF ARRAY OF 2 JUST COMPARE ITEM1 and ITEM2
        for (let i = 0; i <= array.length - 1; i++) {
            //SEARCHING FOR MIN
            if (min >= array[i]) {
                min = array[i];
                minIndex = i;
            }
            //SEARCHNIG FOR MAX
            if (max <= array[i]) {
                max = array[i];
                maxIndex = i;
            }
        }
        if (maxIndex > minIndex) maxIndex--;
        //SPLICE MIN AND MAX FROM ARRAY
        array.splice(minIndex, 1);
        array.splice(maxIndex, 1);
        //PLACE MIN AND MAX ON THE LIMITS OF NEW ARRAY
        newArray[newMin] = min;
        newArray[newMax] = max;
        newMin++;
        newMax--;
    }
    return newArray;
}
