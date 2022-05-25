window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page3");
    element.classList.add("now");
});

const searchInput = document.getElementsByClassName('searchbar')[0]
const content = document.getElementById('myTable')
const csrf = document.getElementsByName('csrfmiddlewaretoken')[0].value

const sendSearchData = (query) => {
    const fil = document.getElementById('sel').value
    console.log(fil)
    $.ajax({
        type: 'POST',
        url: 'search/',
        data: {
            'csrfmiddlewaretoken': csrf,
            'course': query ,
            'filter' : fil
        },
        success: (result) => {
            var elements = result.data
            content.innerHTML = ''
            elements.forEach(element => {
                content.innerHTML += `<tr>
                <td>${element.code}</td>
                <td>${element.name}</td>
                <td>${element.department}</td>
                <td>${element.num}</td>
           </tr>`
            });
        }

    })
}

searchInput.addEventListener('keyup', e => {
    var query = e.target.value
    sendSearchData(query)
})

