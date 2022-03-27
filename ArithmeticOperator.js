let length = 3;
let width = 4.5;
// function getArea(length, width) {
//     let area = (length*width);
    
//     return area;
// }

// function getPerimeter(length, width) {
//     let perimeter = 2*(length+width);
    
//     return perimeter;
// }
// console.log(getArea(length, width));
// console.log(getPerimeter(length, width));


let getArea = (length, width) => {
    let area = (length*width);
    
    return area;
}

let getPerimeter = (length, width) => {
    let perimeter = 2*(length+width);
    
    return perimeter;
}
console.log(getArea(length, width));
console.log(getPerimeter(length, width));