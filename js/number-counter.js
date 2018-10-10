var nbr = 0;

$().ready(function() {

    display(nbr);

    $("#minus").click(function() {
        display(--nbr);
    });

    $("#plus").click(function() {
        display(++nbr);
    });
    
});

function display(nbr) {
    $("label").text(nbr)
        .css("color", "black")
        .css("font-weight", "normal")
        .css("font-style", "normal");

    if(nbr % 2 == 0) {
        $("label").css("color", "red");
    }
    if(nbr % 3 == 0) {
        $("label").css("font-weight", "bold");
    }
    if(nbr % 7 == 0) {
        $("label").css("font-style", "italic");
    }
}