window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page4");
    element.classList.add("now");
});

const searchInput = document.getElementsByClassName('searchbar')[0]
const content = document.getElementById('myTable')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value

const sendSearchData = (query) => {
    $.ajax({
        type: 'POST',
        url: 'search/',
        data: {
            'csrfmiddlewaretoken': csrf,
            'student': query
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
           </tr>`
            });
        }

    })
}

searchInput.addEventListener('keyup', e => {
    var query = e.target.value
    sendSearchData(query)
})
