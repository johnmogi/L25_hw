"use strict";

(function () {

    const buttonUsers = document.getElementById("buttonUsers");

    buttonUsers.addEventListener("click", () => {

        const ajax = new XMLHttpRequest();

        ajax.open("GET", "https://jsonplaceholder.typicode.com/users");

        ajax.onreadystatechange = () => {

            if (ajax.readyState === 4) {

                if (ajax.status === 200) { // אם הכל בסדר ולא היתה שגיאה
                    const arr = JSON.parse(ajax.responseText);
                    const tableBody = document.getElementById("tableBody");
                    tableBody.innerHTML = "";
                    for (const item of arr) {
                        const tr = `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.email}</td>
                            <td>${item.phone}</td>
                        </tr>
                    `;
                        tableBody.innerHTML += tr;
                    }
                }
                else {
                    alert("Error!");
                }
            }
        };

        ajax.send();

    });

})();