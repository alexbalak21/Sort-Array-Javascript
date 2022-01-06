function sortP(array) {
    let start = window.performance.now();
    let newArray = new Array(array.length);

    let newMin = 0;
    let newMax = array.length - 1;
    let minmax;
    while (array.length > 0) {
        minmax = minMaxIndex(array);
        if (minmax[1] > minmax[0]) minmax[1]--;
        let min = array.splice(minmax[0], 1);
        let max = array.splice(minmax[1], 1);
        //PLACE MIN AND MAX ON THE LIMITS OF NEW ARRAY
        newArray[newMin] = min[0];
        newArray[newMax] = max[0];
        newMin++;
        newMax--;
    }
    let finish = window.performance.now();
    // console.log(finish - start);
    // return newArray;
    return finish - start;
}

function minMaxIndex(array) {
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

function sortJ(array) {
    let start = window.performance.now();
    let newArray = new Array(array.length);
    let newMin = 0;
    let newMax = array.length - 1;
    while (array.length > 0) {
        let min = Math.min(...array);
        let minIndex = array.indexOf(min);
        let max = Math.max(...array);
        let maxIndex = array.indexOf(max);
        if (maxIndex > minIndex) maxIndex--;
        array.splice(minIndex, 1);
        array.splice(maxIndex, 1);
        newArray[newMin] = min;
        newArray[newMax] = max;
        newMin++;
        newMax--;
    }
    let finish = window.performance.now();
    // console.log(finish - start);
    // return newArray;
    return finish - start;
}

function sortO(array) {
    //CREATING ARRAY TO STORE SORTED ITEMS
    let start = window.performance.now();
    const newArray = new Array(array.length);
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
    let finish = window.performance.now();
    // console.log(finish - start);
    // return newArray;
    return finish - start;
}

function genereateArray(long = 10, MIN = 0, MAX = 9) {
    let array = [];
    for (let i = 1; i <= long; i++) {
        let nbr = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        array.push(nbr);
    }
    return array;
}

function testSort() {
    let wrong = 0;
    for (let i = 0; i < 1000; i++) {
        let test = genereateArray(1000, 1, 1000);
        if (sortMyArray(test) == null) wrong++;
    }
    console.log(wrong);
}

function display(item) {
    dispRef.innerHTML += "<p>";
    dispRef.innerHTML += item;
    dispRef.innerHTML += "</p>";
}

function testSortOPJ(k = 1) {
    let timeJ = 0;
    let timeO = 0;
    let timeP = 0;
    for (let i = 0; i < k; i++) {
        let array = genereateArray(1000, 1, 1000);
        let copy1 = [...array];
        let copy2 = [...array];
        let copy3 = [...array];
        timeJ += sortJ(copy3);
        timeO += sortO(copy1);
        timeP += sortP(copy2);
    }
    console.log("Time J");
    console.log(timeJ);
    console.log("Time O");
    console.log(timeO);
    console.log("Time P");
    console.log(timeP);
}

testSortOPJ(2);
