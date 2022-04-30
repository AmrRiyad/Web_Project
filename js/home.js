var xValues = ["CS", "AI", "IS", "IT", "XD"];
var yValues = [0, 0, 0, 0, 0];


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
            yValues[0]++;
        }else if(students[i].department == 'AI'){
            yValues[1]++;
        } else if(students[i].department == 'IS') {
            yValues[2]++;
        } else if(students[i].department == 'IT') {
            yValues[3]++;
        } else if(students[i].department == 'XD') {
            yValues[4]++;
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
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },

});

new Chart("Chart2", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
});

new Chart("Chart3", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: 'Number of Students in each qesm',
            fill: false,
            backgroundColor: "rgba(255,255,255)",
            borderColor: "rgba(255,255,255)",
            data: yValues
        }]
    },
});
