// ===== Current Date =====

const date = document.getElementById("date");

const today = new Date();

date.innerHTML = today.toDateString();


// ===== Dark Mode =====

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});


// ===== Chart =====

const ctx = document.getElementById("performanceChart");

new Chart(ctx, {

type: "line",

data: {

labels: ["Jan","Feb","Mar","Apr","May","Jun"],

datasets: [{

label: "Performance",

data: [65,72,70,80,85,90],

borderColor: "#3b82f6",

backgroundColor: "rgba(59,130,246,.2)",

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
