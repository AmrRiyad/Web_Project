var myArray = [
    { 'ID': '512', 'Course_name': 'Logic', 'department': 'CS', 'Number_of_students': '1000' },
    { 'ID': '845', 'Course_name': 'Math3', 'department': 'CS', 'Number_of_students': '1000' },
    { 'ID': '127', 'Course_name': 'Network', 'department': 'CS', 'Number_of_students': '1000' },
    { 'ID': '984', 'Course_name': 'Algorithms', 'department': 'CS', 'Number_of_students': '1000' },
    { 'ID': '346', 'Course_name': 'Web', 'department': 'IS', 'Number_of_students': '1000' },
    { 'ID': '824', 'Course_name': 'Data ', 'department': 'AI', 'Number_of_students': '1000' },
]


$(`.searchbar`).on('keyup' , function(){
    var value = $(this).val()

    var data = searchTable(value , myArray)
    
    buildTable(data)
})

buildTable(myArray)

function searchTable(val , data){
    var newData = []

    var x = document.getElementById('sel').value

    for(var i = 0 ; i < data.length ; i++){
        var searchFor = data[i]

        if(x == 'ID'){
            if(searchFor.ID.includes(val)){
                newData.push(data[i])
            }
        }else if(x == 'Course_name'){
            val = val.toLowerCase()
            searchFor = searchFor.Course_name.toLowerCase()
            if(searchFor.includes(val)){
                newData.push(data[i])
            }
        }else if(x == 'department'){
            val = val.toLowerCase()
            searchFor = searchFor.department.toLowerCase()
            if(searchFor.includes(val)){
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