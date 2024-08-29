function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

// Regular expression to match the required syntax: "pet_" followed by letters and numbers.
//Make sure to separate the number and letters array and also concatenate
const regEx = /^pet_[0-9]+[a-zA-Z]+$/;

// Check if input matches the regex pattern
if (regex.test(input)) {
    result = "Valid Syntax";
} else {
    result = "Invalid Syntax";
}

document.getElementById('result').innerText = result;
}


