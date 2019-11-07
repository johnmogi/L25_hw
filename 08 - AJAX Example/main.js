"use strict";

(function () {

    const buttonData = document.getElementById("buttonData");

    buttonData.addEventListener("click", () => {
        
        const ajax = new XMLHttpRequest();

        ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");

        ajax.onreadystatechange = () => {
            if(ajax.readyState === 4) {

                const arr = JSON.parse(ajax.responseText);

                const ulTODOs = document.getElementById("ulTODOs");

                for(const item of arr) {
                    const li = `
                        <li>
                            Title: ${item.title}, Completed: ${item.completed}
                        </li>
                    `;
                    ulTODOs.innerHTML += li;
                }

                const divData = document.getElementById("divData");
                console.log(typeof ajax.responseText);
                divData.innerHTML = ajax.responseText;
            }
        };

        ajax.send();

    });

})();