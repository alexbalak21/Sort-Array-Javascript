import { sortArray } from "/js/self.js";
import { sortArrayJS } from "/js/jsort.js";
// import { genereateArray } from "/js/tgets.js";
import { sortArrayMinMax } from "/js/modular.js";

const list = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const copyList = [...list];
const copyOfList = [...list];

let sort1 = sortArray(list);
console.log(sort1);
let sort2 = sortArrayJS(copyList);
console.log(sort2);
let sort3 = sortArrayMinMax(copyOfList);
console.log(sort3);
