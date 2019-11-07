/// <reference path="jquery-3.4.1.js" />

$(() => {

    $("button").click(() => {
        $.ajax({
            method: "GET", // Method (GET / POST)
            url: "https://api.chucknorris.io/jokes/random", // The url to get data from 
            error: err => alert("Error: " + err.status), // What to do when there is an error
            success: response => displayUsers(response) // What to do when there is no error (success)
        });
    });

    // Display the users: 
    function displayUsers(response) {
        $("tbody").empty();

        const tr = `
                <tr>
                <td>
                <img src="${response.icon_url}">
            </td>
                    <td>${response.value}</td>
       
                  
                </tr>
            `;
        $("tbody").append(tr);

    }

});