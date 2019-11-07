// let obj = {
//     a: 1,
//     b: 2,
//     x: () => {
//         alert("Hi");
//     }
// };
// obj.x();

function testAJAX() {

    // Object which can perform AJAX request:
    const ajax = new XMLHttpRequest();

    // Define several definitions: 
    ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");

    // On several stages on the way - this function will be invoked: 
    ajax.onreadystatechange = () => {

        // readyState = The level of readiness of the final data.
        // readyState = 4 --> We've go the final data from the server: 
        if(ajax.readyState === 4) {
            console.log(ajax.responseText);
        }
    };

    // Request the data: 
    ajax.send(); // Go to the server
}
