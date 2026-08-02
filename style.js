// ===============================
// Current Date
// ===============================

const date = document.getElementById("date");

function updateDate() {
    const today = new Date();

    date.innerHTML = today.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

updateDate();


// ===============================
// Theme Button
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

    } else {

        themeBtn.innerHTML = "🌙";

    }

};


// ===============================
// Chart
// ===============================

const canvas = document.getElementById("performanceChart");

if (canvas) {

new Chart(canvas, {

type: "line",

data: {

labels: ["Jan","Feb","Mar","Apr","May","Jun"],

datasets: [{

label: "Performance",

data: [65,70,75,80,84,90],

borderColor: "#2563eb",

backgroundColor: "rgba(37,99,235,.15)",

fill: true,

tension: .4

}]

},

options: {

responsive: true,

plugins: {

legend: {

display: true

}

}

}

});

}


// ===============================
// Welcome Message
// ===============================

window.onload = () => {

console.log("Welcome to EduDash");

};


// ===============================
// Card Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

card.style.animationDelay = `${index*0.2}s`;

});
