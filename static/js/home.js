var courses = [] ;

const load = () => {
    $.ajax({
        type: 'GET',
        url: 'get/',
        data: {
            'data' : 'hello' 
        },
        success: (result) => {
            count(result.students) ;
        }
    })
}



window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page0");
    element.classList.add("now");
    load();
})
var xDepartment = ["General", "CS", "AI", "IS", "IT", "DS"];
var yDepartment = [0, 0, 0, 0, 0, 0];

var xgender = ["male", "female"];
var ygender = [0, 0];


function count( students) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].department == 'CS') {
            yDepartment[1]++;
        } else if (students[i].department == 'AI') {
            yDepartment[2]++;
        } else if (students[i].department == 'IS') {
            yDepartment[3]++;
        } else if (students[i].department == 'IT') {
            yDepartment[4]++;
        } else if (students[i].department == 'DS') {
            yDepartment[5]++;
        }else{
            yDepartment[0]++ ;
        }
        if (students[i].gender == 'Male') {
            ygender[0]++;
        } else {
            ygender[1]++;
        }
    }
}

var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];


Chart.defaults.global.defaultFontColor = "white";

new Chart("Chart1", {
    type: "pie",
    data: {
        labels: xDepartment,
        datasets: [{
            backgroundColor: barColors,
            data: yDepartment
        }]
    },

});

new Chart("Chart2", {
    type: "doughnut",
    data: {
        labels: xgender,
        datasets: [{
            backgroundColor: barColors,
            data: ygender
        }]
    },
});

new Chart("Chart3", {
    type: "line",
    data: {
        labels: courses.map(e => e.name),
        datasets: [{
            label: 'Number of Students in each Course',
            fill: false,
            backgroundColor: "rgba(255,255,255)",
            borderColor: "rgba(255,255,255)",
            data: courses.map(e => e.num)
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 0, max: 10 } }],
        }
    }
});
