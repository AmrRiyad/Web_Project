
window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page3");
    element.classList.add("now");
});
var coursesArray = localStorage.getItem("course");

if (coursesArray) {
    coursesArray = JSON.parse(coursesArray);
} else {
    coursesArray = {};
}

$(`.searchbar`).on('keyup', function () {
    var value = $(this).val()

    var data = searchTable(value, coursesArray)

    buildTable(data)
})

buildTable(coursesArray)

function searchTable(val, data) {
    var newData = []

    var x = document.getElementById('sel').value

    for (var i = 0; i < data.length; i++) {
        var searchFor = data[i]

        if (x == 'ID') {
            if (searchFor.ID.includes(val)) {
                newData.push(data[i])
            }
        } else if (x == 'Course_name') {
            val = val.toLowerCase()
            searchFor = searchFor.Course_name.toLowerCase()
            if (searchFor.includes(val)) {
                newData.push(data[i])
            }
        } else if (x == 'department') {
            val = val.toLowerCase()
            searchFor = searchFor.department.toLowerCase()
            if (searchFor.includes(val)) {
                newData.push(data[i])
            }
        }
    }
    return newData
}

function buildTable(data) {
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {

        var row = `<tr>
                            <td>${data[i].ID}</td>
                            <td>${data[i].Course_name}</td>
                            <td>${data[i].department}</td>
                            <td>${data[i].Number_of_students}</td>
                       </tr>`
        table.innerHTML += row
    }
}