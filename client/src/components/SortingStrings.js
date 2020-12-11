let arrayOfNames = [
    'Isabell Dimitri',
    'Ryann Maheu',
    'Lesa Hallahan',
    'Beryl Roy',
    'Lenore Kroh',
    'Elenore Nau',
    'Tomoko Akin',
    'Wilfred Treese',
    'Rosana Orlando',
    'Candra Parham',
    'Millicent Braden',
    'Elease Nye',
    'Caroyln Stancill',
    'China Shasteen',
    'Viviana Rhoades',
    'Len Stoudemire',
    'Hobert Munger',
    'Toni Risch',
    'Madison Osman',
    'Shandi Shoults'
];
// commented functions became a single function below!!
// function compareNamesAtoZ(name1, name2) {
//     if(name1 > name2) {
//         return 1;
//     } else if (name1 < name2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// function compareNamesZtoA(name1, name2) {
//     if(name1 > name2) {
//         return -1;
//     } else if (name1 < name2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
function compareNames(direction = 1) {
    return function (name1, name2) {
        // uncomment for ASCII char code fun!
        // console.log(name1.charCodeAt(0));
        // console.log(name2.charCodeAt(0));
        let result = 0;
        if(name1 > name2) {
            result = 1;
        } else if (name1 < name2) {
            result = -1;
        }
        return result * direction;
    }
}
let currentDirection = 1;
function sortAndLog(nameArray) {
    console.log(nameArray.sort(compareNames(currentDirection)).join(', '));
    currentDirection *= -1;
}
sortAndLog(arrayOfNames);
console.log('--------------');
sortAndLog(arrayOfNames);
console.log('--------------');
sortAndLog(arrayOfNames);
console.log('--------------');
sortAndLog(arrayOfNames);
console.log('--------------');
sortAndLog(arrayOfNames);