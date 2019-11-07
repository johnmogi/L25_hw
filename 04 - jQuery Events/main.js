/// <reference path="jquery-3.4.1.js" />

$(() => {

    for (let i = 1; i <= 12; i++) {
        $("body").append(`
            <div>
                ${i}
            </div>
        `)
    }

    $("div").click(function () {
        alert($(this).text());
    });

});