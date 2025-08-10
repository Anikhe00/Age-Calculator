const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const form = document.querySelector(".calculator-form");

const dayInputLabel = document.getElementById("day-label")
const monthInputLabel = document.getElementById("month-label")
const yearInputLabel = document.getElementById("year-label")

const dayErrorText = document.getElementById("day-error-text")
const monthErrorText = document.getElementById("month-error-text")
const yearErrorText = document.getElementById("year-error-text")

const today = new Date();


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Clear previous errors first
  dayInput.classList.remove('error');
  monthInput.classList.remove('error');
  yearInput.classList.remove('error');
  
  dayInputLabel.classList.remove('error-label');
  monthInputLabel.classList.remove('error-label');
  yearInputLabel.classList.remove('error-label');
  
  dayErrorText.classList.add("hide");
  monthErrorText.classList.add("hide");
  yearErrorText.classList.add("hide");
  
  // Check if input fields are empty
  if (!dayInput.value || !monthInput.value || !yearInput.value) {
    console.log("Empty fields detected");
    
    // Add class "error" for the red border
    dayInput.classList.add('error');
    monthInput.classList.add('error');
    yearInput.classList.add('error');

    // Add class "error-label" to change to text color to red
    dayInputLabel.classList.add('error-label');
    monthInputLabel.classList.add('error-label');
    yearInputLabel.classList.add('error-label');

    // Remove class "hide" to show the error text
    dayErrorText.classList.remove("hide");
    monthErrorText.classList.remove("hide");
    yearErrorText.classList.remove("hide");
    
    console.log("Error classes added");
    console.log("Day error text classes:", dayErrorText.className);
    console.log("Day error text display:", getComputedStyle(dayErrorText).display);
    
    return;
  }

  // Collect data from inputs
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  let hasError = false;

  // Check day value
  if (day < 1 || day > 31) {
    dayInput.classList.add('error');
    dayInputLabel.classList.add('error-label');
    dayErrorText.classList.remove('hide');
    dayErrorText.textContent = "Must be a valid day";
    hasError = true;
  }

  // Check month value
  if (month < 1 || month > 12) {
    monthInput.classList.add('error');
    monthInputLabel.classList.add('error-label');
    monthErrorText.classList.remove('hide');
    monthErrorText.textContent = "Must be a valid month";
    hasError = true;
  }

  // Check year value
  if (year > today.getFullYear()) {
    yearInput.classList.add('error');
    yearInputLabel.classList.add('error-label');
    yearErrorText.classList.remove('hide');
    yearErrorText.textContent = "Must be a valid year";
    hasError = true;
  }
  
  if(hasError) {
    return;
  }

  // Calculate age
  calculateAge(day, month, year);
});

function calculateAge(day, month, year) {
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;
  
  // Handle negative days 
  if (days < 0) {
    
    // Get the last day of the previous month
    const lastMonth = new Date(currentYear, currentMonth - 1, 0);
    days += lastMonth.getDate();
    months--;
  }
  
  // Handle negative months 
  if (months < 0) {
    months += 12;
    years--;
  }
  
  // Validate the result
  if (years < 0) {
    alert("Please enter a valid date of birth (not in the future)");
    return;
  }
  
  // Display the result
  displayAge(years, months, days);
}

function displayAge(years, months, days) {
  const yearsSpan = document.getElementById("year-result");
  const monthsSpan = document.getElementById("month-result");
  const daysSpan = document.getElementById("day-result");
  
  yearsSpan.textContent = years;
  monthsSpan.textContent = months;
  daysSpan.textContent = days;
}