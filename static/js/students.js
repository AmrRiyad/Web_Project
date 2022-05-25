window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page4");
    element.classList.add("now");
});

const searchInput = document.getElementsByClassName('searchbar')[0]
const content = document.getElementById('myTable')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value


const sendSearchData = (query) => {
    const filter = document.getElementById('sel').value 
    $.ajax({
        type: 'POST',
        url: 'search/',
        data: {
            'csrfmiddlewaretoken': csrf,
            'student': query ,
            'filter' : filter
        },
        success: (result) => {
            var elements = result.data
            content.innerHTML = ''
            elements.forEach(element => {
                content.innerHTML += `<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.active}</td>
                <td><a href='edit-students/${element.id}' style="text-decoration: none;"> <button class="edit" value="edit"></button> </a> </td>
           </tr>`
            });
        }

    })
}

searchInput.addEventListener('keyup', e => {
    var query = e.target.value
    sendSearchData(query)
})
