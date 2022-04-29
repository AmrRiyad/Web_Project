var myArray = [
    { 'id': '512', 'name': 'Amr', 'department': 'CS', 'status': 'Active' },
    { 'id': '845', 'name': 'Riyad', 'department': 'CS', 'status': 'Active' },
    { 'id': '127', 'name': 'Mahmoud', 'department': 'CS', 'status': 'Active' },
    { 'id': '984', 'name': 'Amr', 'department': 'CS', 'status': 'Active' },
    { 'id': '346', 'name': 'Hazem', 'department': 'IS', 'status': 'Inactive' },
    { 'id': '824', 'name': 'Adel', 'department': 'AI', 'status': 'Inactive' },
]


$(`.searchbar`).on('keyup', function () {
    var value = $(this).val()

    var data = searchTable(value, myArray)

    buildTable(data)
})

buildTable(myArray)

function searchTable(val, data) {
    var newData = []
    val = val.toLowerCase()
    var x = document.getElementById('sel').value
    if (x == 'status') {
        if(val == 'active' || val == 'inactive'){
            for (var i = 0; i < data.length; i++) {
                var searchFor = data[i]
                searchFor = searchFor.status.toLowerCase()
                if (searchFor == val) {
                    newData.push(data[i])
                }
            }
        }
        else{
            return myArray;
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
                            <td><a href="edit_student.html" style="text-decoration: none;"> <button class="edit" value="edit"></button> </a> </td>
                       </tr>`
        table.innerHTML += row
    }
}