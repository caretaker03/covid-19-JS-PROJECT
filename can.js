const correctAnswers = [
    "E",
    "E",
    "E",
    "E",
];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // console.log(score);
    result.classList.remove("d-none");

    let puan = 0;
    const bastir = setInterval(() => {
        puan++;
        result.querySelector("span").textContent = `${puan}%`;
        if (puan == score) {
            clearInterval(bastir);
        }
    }, 25);

});

// setTimeout(() => {
//     console.log("Can");
// }, 2000);

// setInterval(() => {
//     console.log("Can");
// }, 1000);

// let i = 0;
// const bastir = setInterval(() => {
//     console.log("Can");
//     i++;
//     if (i == 4) {
//         clearInterval(bastir);
//     }
// }, 1000);