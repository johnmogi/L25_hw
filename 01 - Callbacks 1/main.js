function printMyName() {
    document.write("Assaf Finkelshtein<br>");
}

function doWork(callback) {
    callback();
}

doWork(printMyName);
doWork(function () {
    document.write("Assaf Finkelshtein<br>");
});

// With arrow function: 
doWork(() => document.write("Assaf Finkelshtein<br>"));
