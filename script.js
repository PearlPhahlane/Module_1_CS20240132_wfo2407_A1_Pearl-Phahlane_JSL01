function validateSyntax() {
  let input = document.getElementById("petInput").value;
  let result = ""; // Placeholder for validation result

  // Regular expression to match the required syntax: "pet_" followed by letters and numbers.
  //Make sure to separate the number and letters array and also concatenate
  const regEx = /^pet_[0-9]+[a-zA-Z]+$/;

  // Check if input matches the regex pattern
  if (regEx.test(input)) {
    result = "Valid Syntax \u{1F7E2}"; //Green filled circle emoji for valid syntax
  } else {
    result = "Invalid Syntax \u{1F534}"; //Red filled circle emoji for invalid syntax
  }

  document.getElementById("result").innerText = result;
}
