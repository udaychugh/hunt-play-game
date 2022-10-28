function hunt() {

    const tasks = ["task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8", "task9", "task10"];
    const random = Math.floor(Math.random() * tasks.length);
    var x = tasks[random];
    switch (x) {
        case "task1":
            task1();
            break;
        case "task2":
            task2();
            break;
        case "task3":
            task3();
            break;
        case "task4":
            task4();
            break;
        case "task5":
            task5();
            break;
        case "task6":
            task6();
            break;
        case "task7":
            task7();
            break;
        case "task8":
            task8();
            break;
        case "task9":
            task9();
            break;
        case "task10":
            task10();
            break;
    }
    console.log(x);
}

const modal = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay2");

var candies = 0;


function task1() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

}

function task2() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task3() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task4() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task5() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task6() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task7() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task8() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task9() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}

function task10() {

    modal.classList.remove("hidekaro");
    overlay.classList.remove("hidekaro");
    document.getElementById("daques").innerHTML = "what is the largest continent in the world?";
    document.getElementById("option1").innerHTML = "Asia";
    document.getElementById("option2").innerHTML = "Russia";
    document.getElementById("option3").innerHTML = "Australia";
    document.getElementById("option4").innerHTML = "Africa";

    document.getElementById("option1").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        candies = candies + 10;
        document.getElementById("candies").innerHTML = candies;
        swal("Right Answer!", "Current Score: " + candies, "success");

    }

    document.getElementById("option2").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option3").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }

    document.getElementById("option4").onclick = function () {
        modal.classList.add("hidekaro");
        overlay.classList.add("hidekaro");
        var playername = document.getElementById("playuser").innerText;
        document.getElementById("finalscoreshow").innerHTML = playername + " Final Score is " + candies;
        swal("Worng Answer!", "Final Score: ", "error")
            .then(() => {
                document.getElementById("mainContent").style.display = "none";
                document.getElementById("navbar").style.display = "none";
            });
    }
}
