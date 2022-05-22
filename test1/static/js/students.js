window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page4");
    element.classList.add("now");
});
var studentArray = localStorage.getItem("student");

if (studentArray) {
    studentArray = JSON.parse(studentArray);
} else {
    studentArray = {};
}

console.log(studentArray)

$(`.searchbar`).on('keyup', function () {
    var value = $(this).val()
    var studentArray = JSON.parse(localStorage.getItem("student"));
    var data = searchTable(value, studentArray)

    buildTable(data)
})

//buildTable(studentArray)

function searchTable(val, data) {
    var newData = []
    val = val.toLowerCase()
    var x = document.getElementById('sel').value
    if (x == 'status') {
        if (val == 'active' || val == 'inactive') {
            for (var i = 0; i < data.length; i++) {
                var searchFor = data[i]
                searchFor = searchFor.status.toLowerCase()
                if (searchFor == val) {
                    newData.push(data[i])
                }
            }
        }
        else {
            return studentArray;
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            var searchFor = data[i]

            if (x == 'id') {
                if (searchFor.id.includes(val)) {
                    newData.push(data[i])
                }
            } else if (x == 'name') {
                searchFor = searchFor.name.toLowerCase()
                if (searchFor.includes(val)) {
                    newData.push(data[i])
                }
            } else if (x == 'department') {
                searchFor = searchFor.department.toLowerCase()
                if (searchFor.includes(val)) {
                    newData.push(data[i])
                }
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
                            <td>${data[i].id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].department}</td>
                            <td>${data[i].status}</td>
                            <td><a href='edit-students/' style="text-decoration: none;" onclick="set(${i})"> <button class="edit" value="edit"></button> </a> </td>
                       </tr>`
        table.innerHTML += row
    }

}

function set(ind) {
    localStorage.setItem('index', ind)
}
