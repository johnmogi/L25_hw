
function cool(paintCallback) {
    // paintCallback("Green");
    paintCallback(getRandomColor());
}

// cool(function (color) {
//     document.body.style.backgroundColor = color;
// });

// With arrow function: 
cool(color => document.body.style.backgroundColor = color);

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "rgb(" + r + "," + g + "," + b + ")"; // rgb(20,48,50)
    return color;
}

