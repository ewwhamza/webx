var display = document.getElementById("display");
var buttons = document.querySelectorAll(".btn");
var clearBtn = document.getElementById("clear");
var equalsBtn = document.getElementById("equals");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        display.value += button.textContent;
    });
});
clearBtn.addEventListener("click", function () {
    display.value = "";
});
equalsBtn.addEventListener("click", function () {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
});
