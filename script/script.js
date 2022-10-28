window.onload = function () {

    document.getElementById("correctLocation").style.display = "none";

    takeUserDetails()
    checkLocaitonAlways()

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        swal("location access denied");
    }

}

function showPosition(position) {

    var x = document.getElementById("lati");
    var y = document.getElementById("longi");
    var varLati = position.coords.latitude;
    var varLongi = position.coords.longitude;
    x.innerHTML = varLati;
    y.innerHTML = varLongi;

    var approxLati = varLati.toFixed(1);
    var approxLongi = varLongi.toFixed(1);
    
    console.log(approxLongi);

    


    if (approxLati == 28.6 && approxLongi == 77.0) {
        console.log("condition true");
        document.getElementById("correctLocation").style.display = "block";
    }
    else{
        document.getElementById("correctLocation").style.display = "none";
    }
}

function checkLocaitonAlways() {

    
        var x = document.getElementById("lati").innerText;
        var y = document.getElementById("longi").innerText;
        console.log(x + " " + y);


}

//function on load to take student name and avtar
function takeUserDetails() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

}

function startGame() {
    var uname = document.getElementById("stname").value;
    var checkRadio = document.querySelector('input[name="test"]:checked');
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    if (uname == "") {
        swal("No Name", "Enter your name first", "info");
    } else if (checkRadio == null) {
        swal("Invalid Avtar", "Select one Avtar", "info");
    } else {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
    document.getElementById("playuser").innerHTML = uname;

}

function howToPlay() {
    var userName = document.getElementById("playuser").innerText;
    swal("Welcome, " + userName, "Start walking and hunt candies to win the game");
}
