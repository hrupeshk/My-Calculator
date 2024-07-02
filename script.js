var input = document.getElementById("input");
var buttons = document.querySelectorAll("button");
var string = "";
var arr = Array.from(buttons);
var lastOperation = null;

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText == "=") {
            try {
                string = eval(string).toString();
            } catch (error) {
                string = "Error";
            }
            input.value = string;
            lastOperation = "=";
        } else if (buttonText == "AC") {
            string = "";
            input.value = string;
            lastOperation = null;
        } else if (buttonText == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
            lastOperation = "DEL";
        } else {
            if (lastOperation === "=") {
                string = buttonText;  // Start a new operation if a button is pressed after "="
            } else {
                string += buttonText;
            }
            input.value = string;
            lastOperation = buttonText;
        }
    });
});
