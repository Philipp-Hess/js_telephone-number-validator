function validatePhoneNumber() {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  if (!userInput) {
    alert("Please provide a phone number");
  } else {
    if (phoneRegex.test(userInput)) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
      resultsDiv.className = "valid";
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
      resultsDiv.className = "invalid";
    }
  }
}
function clearResults() {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").textContent = "";
  document.getElementById("results-div").className = "";
}
document.getElementById("check-btn").addEventListener("click", () => {
  validatePhoneNumber();
});

document.getElementById("clear-btn").addEventListener("click", () => {
  clearResults();
});

function runTests() {
  const testCases = [
    { input: "", expected: "Please provide a phone number" },
    { input: "1 555-555-5555", expected: "Valid US number: 1 555-555-5555" },
  ];
  for (const testCase of testCases) {
    document.getElementById("user-input").value = testCase.input;
    validatePhoneNumber();
    const resultText = document.getElementById("results-div").textContent;
    const expectedResult = testCase.expected;
    if (resultText !== expectedResult) {
    }
  }
}
