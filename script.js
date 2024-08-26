function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

// Regular expression to match the required syntax: "pet_" followed by letters and numbers
const regex = /^pet_[a-zA-Z0-9]+$/;

// Check if input matches the regex pattern
if (regex.test(input)) {
    result = "Valid Syntax";
} else {
    result = "Invalid Syntax";
}

document.getElementById('result').innerText = result;
}


