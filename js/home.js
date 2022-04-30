var xDepartment = ["CS", "AI", "IS", "IT", "DS"];
var yDepartment = [0, 0, 0, 0, 0];

var xgender = ["male", "female"];
var ygender = [0, 0];

var xCources = ["Math3", "Logic", "Network", "Algorithms"];
var yCources = [0, 0, 0, 0];

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
        if (students[i].course_1 == 'Math3' || students[i].course_2 == 'Math3' || students[i].course_3 == 'Math3') {
            yCources[0]++;
        }
        if (students[i].course_1 == 'Logic' || students[i].course_2 == 'Logic' || students[i].course_3 == 'Logic') {
            yCources[1]++;
        }
        if (students[i].course_1 == 'Network' || students[i].course_2 == 'Network' || students[i].course_3 == 'Network') {
            yCources[2]++;
        }
        if (students[i].course_1 == 'Algorithms' || students[i].course_2 == 'Algorithms' || students[i].course_3 == 'Algorithms') {
            yCources[3]++;
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
        labels: xCources,
        datasets: [{
            label: 'Number of Students in each Course',
            fill: false,
            backgroundColor: "rgba(255,255,255)",
            borderColor: "rgba(255,255,255)",
            data: yCources
        }]
    },
    options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 0, max:students.length + 4}}],
        }
      }
});
