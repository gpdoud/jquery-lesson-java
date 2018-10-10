$().ready(() => {

    var url = "http://prs.doudsystems.com/Products/List";
    console.log("Ready to getJSON()");
    $.getJSON(url)
        .then((data) => {
            console.log("Response to getJSON()");
            console.log(data);
            render(data);
        });
    console.log("After getJSON()");
});

function render(products) {
    var tbody = $("#tbody");
    for(var prod of products) {
        var row = "";
        row += "<tr>";
        row += `<td>${prod.ID}</td>`;
        row += `<td>${prod.Name}</td>`;
        row += `<td>${prod.Price}</td>`;
        row += `<td>${prod.Vendor.Name}</td>`;
        row += "</tr>";
        tbody.append(row);
    }
}

