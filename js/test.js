let dispRef = document.getElementById("display");

export function display(item) {
    dispRef.innerHTML += "<p>";
    dispRef.innerHTML += item;
    dispRef.innerHTML += "</p>";
}

function genereateArray(long = 10, MIN = 0, MAX = 9) {
    let array = [];
    for (let i = 1; i <= long; i++) {
        let nbr = Math.floor(Math.random() * (MAX - MIN)) + MIN;
        array.push(nbr);
    }
    return array;
}
