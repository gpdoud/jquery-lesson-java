$().ready(function() {
    
    $("button").click(function() {
        var inputValue = $("#txt").val();
        $("label").text(inputValue);
    });
});

// function loaded() {
//     document.getElementById("lbl").innerHTML = "Greg";
// }

// function clicked() {
//     var inputCtrl = document.getElementById("txt");
//     var inputValue = inputCtrl.value;
//     console.log("The value is", inputValue);
//     //
//     var labelCtrl = document.getElementById("lbl");
//     labelCtrl.innerText = inputValue;
// }