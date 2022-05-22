window.addEventListener('DOMContentLoaded', () => {
    var element = document.getElementById("page0");
    element.classList.add("now");
})
var xDepartment = ["CS", "AI", "IS", "IT", "DS"];
var yDepartment = [0, 0, 0, 0, 0];

var xgender = ["male", "female"];
var ygender = [0, 0];

var students = localStorage.getItem("student");

if (students) {
    students = JSON.parse(students);
} else {
    students = {};
}

console.log(students)

count();

function count() {
    for (var i = 0; i < students.length; i++) {
        if (students[i].department == 'CS') {
            yDepartment[0]++;
        } else if (students[i].department == 'AI') {
            yDepartment[1]++;
        } else if (students[i].department == 'IS') {
            yDepartment[2]++;
        } else if (students[i].department == 'IT') {
            yDepartment[3]++;
        } else if (students[i].department == 'DS') {
            yDepartment[4]++;
        }
        if (students[i].Gender == 'Male') {
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

var courses = localStorage.getItem("course");

if (courses) {
    courses = JSON.parse(courses);
} else {
    courses = {};
}

new Chart("Chart3", {
    type: "line",
    data: {
        labels: courses.map(e => e.Course_name),
        datasets: [{
            label: 'Number of Students in each Course',
            fill: false,
            backgroundColor: "rgba(255,255,255)",
            borderColor: "rgba(255,255,255)",
            data: courses.map(e => e.Number_of_students)
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 0, max: students.length + 4 } }],
        }
    }
});
