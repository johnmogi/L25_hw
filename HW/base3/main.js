/// <reference path="jquery-3.4.1.js" />

$(() => {

    $("button").click(() => {
        $.ajax({
            method: "GET", // Method (GET / POST)
            url: "https://jsonplaceholder.typicode.com/users", // The url to get data from 
            error: err => alert("Error: " + err.status), // What to do when there is an error
            success: response => displayUsers(response) // What to do when there is no error (success) 

        });

        // Display the users: 
        function displayUsers(response) {
            $("tbody").empty();
            for (const item of response) {
                const tr = `
                <tr>
         
            <td>${item.name}</td>
                    <td>${item.username}</td>
       
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
              
                   <td>${item.address.city}</td>
                   <td>${item.address.street}</td>

                </tr>
            `;
                $("tbody").append(tr);
            }
        }

    });
});