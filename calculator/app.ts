const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear") as HTMLButtonElement;
const equalsBtn = document.getElementById("equals") as HTMLButtonElement;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

clearBtn.addEventListener("click", () => {
    display.value = "";
});

equalsBtn.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});