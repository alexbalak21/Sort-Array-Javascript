const disp = document.getElementById("display");

function sortMyArray(array) {
    //CREATING ARRAY TO STORE SORTED ITEMS
    const newArray = new Array(array.length);
    let sum1 = array.reduce((accum, val) => (accum += val));
    let newMin = 0;
    let minIndex = 0;
    let maxIndex = 0;
    let newMax = array.length - 1;
    console.log(array);
    while (array.length > 0) {
        console.log("while");
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
        console.log(min, max);
        if (maxIndex > minIndex) maxIndex--;
        //SPLICE MIN AND MAX FROM ARRAY
        array.splice(minIndex, 1);
        array.splice(maxIndex, 1);
        //PLACE MIN AND MAX ON THE LIMITS OF NEW ARRAY
        console.log(array);
        newArray[newMin] = min;
        newArray[newMax] = max;
        newMin++;
        newMax--;
    }
    let sum2 = newArray.reduce((accum, val) => (accum += val));
    console.log(sum1 == sum2);
    return newArray;
}

function genereateArray(long, MIN = 0, MAX = 9) {
    let array = [];
    for (let i = 1; i <= long; i++) {
        let nbr = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        array.push(nbr);
    }
    return array;
}

function addToDisplay(item) {
    disp.innerHTML += "<p>";
    disp.innerHTML += item;
    disp.innerHTML += "</p>";
}

let list = genereateArray(10);
addToDisplay(list);
addToDisplay(sortArray(list));

let list2 = [4, 3, 2, 1, 9, 8, 7, 6, 5];
