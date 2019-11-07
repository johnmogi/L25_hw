/// <reference path="jquery-3.4.1.js" />

$(() => {

    $("button").click(() => {
        $.ajax({
            method: "GET", // Method (GET / POST)
            url: "https://reqres.in/api/users", // The url to get data from 
            error: err => alert("Error: " + err.status), // What to do when there is an error
            success: response => displayUsers(response.data) // What to do when there is no error (success)
        });
    });

	// Display the users: 
    function displayUsers(users) {
        $("tbody").empty();
        for(const item of users) {
            const tr = `
                <tr>
                    <td>${item.first_name}</td>
                    <td>${item.last_name}</td>
                    <td>${item.email}</td>
                    <td>
                        <img src="${item.avatar}">
                    </td>
                </tr>
            `;
            $("tbody").append(tr);
        }
    }

});

