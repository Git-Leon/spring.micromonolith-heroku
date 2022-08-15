$.ajax({
    type: "GET",
    crossDomain: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    url: "/person-controller/read-all",
    dataType: "JSON",
    success: function (response) {
        const personDataWebElement = document.getElementById("person-data")
        output = "<table>";
        output += "<tbody>";
        output += "<thead><tr>"
        output += "<th>Id</th>";
        output += "<th>First Name</th>";
        output += "<th>Last Name</th>";
        output += "</tr></thead>";
        document.write(output);
        $.each(response, function(index, value) {
            output = "<tr>"
            output += "<td>" + JSON.stringify(value.id) + "</td>"
            output += "<td>" + JSON.stringify(value.firstName) + "</td>"
            output += "<td>" + JSON.stringify(value.lastName) + "</td>"
            output += "</tr>"
            document.write(output);
        });
        document.write("</tbody>");
        document.write("</table>");
    },
    error: function () {
        alert('Error while request..');
    }
});