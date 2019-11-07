/// <reference path="jquery-3.4.1.js" />

$(() => {
  $("button").click(() => {
    $.ajax({
      method: "GET", // Method (GET / POST)
      url: "https://reqres.in/api/users", // The url to get data from
      error: err => alert("Error: " + err.status), // What to do when there is an error
      success: response => displayUsers(response.data) // What to do when there is no error (success)
    });

    // Display the users:
    function displayUsers(response) {
      $("#stage").empty();
      //   JSON.stringify(response);
      for (const item of response) {
        const cardStart = `
             
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${item.avatar}" class="card-img-top" alt="${item.first_name}" />
          <div class="card-body">
            <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
            <p class="card-text">
   
            </p>
            <a href="mailto: ${item.email}" class="btn btn-primary">${item.email}</a>
          </div>
        </div>
      </div>

            `;
        $("#stage").append(cardStart);
      }
    }
  });
});
