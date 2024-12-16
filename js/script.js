$(document).ready(function () {
    $("#clickMe").on("click", function () {
        $("#message").text("You clicked the button!");
    });
});

$('.search-input').keypress(('input'), function (e) {
    var code = e.keyCode || e.which
    alert(`'code', ${code}`);
})