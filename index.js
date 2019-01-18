
// Step 1: console.log the input field
// -------------  **** THIS WORKS!! ...But doesn't update when the field is updated..--------------  ****
var elInputOne = document.getElementsByClassName("form-field")[0].value;
document.oninput = consoleData();

var elInputTwo = document.getElementsByClassName("form-field")[1].value;
document.oninput = consoleData();

var elButton = document.getElementById("special-button");
// Step 2: When click on Search button, console.log the inputs.

var consoleData = function() {
    if (elInputOne.length >= 3 && elInputTwo.length >= 3) {
        console.log(elInputOne + " " + elInputTwo);
    }
}

//Step 3: Update the text on the button when clicked 
// -------------  **** THIS WORKS!! --------------  ****

// var elButton = document.getElementById("special-button");
elButton.addEventListener('click', function buttonUpdate() {
    elButton.innerHTML = "Thanks!";
});
