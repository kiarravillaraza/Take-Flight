//Flight form data
const flightForm = document.querySelector(".flight-form");
const flightName = document.querySelector(".flight-name");
const numDrinks = document.querySelector(".num-drinks");
const strengthWeak = document.querySelector(".strength-weak");
const strengthNormal = document.querySelector(".strength-normal");
const strengthStrong = document.querySelector(".strength-strong");
const strengthVeryStrong = document.querySelector(".strength-veryStrong");

// Function that gets selected checkboxes for base liquors 
function getselectedBaseLiquors() {
    const selectedBaseLiquors = [];
    const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    
    checkboxes.forEach((checkbox) => {
        selectedBaseLiquors.push(checkbox.value);
    });
    
    return selectedBaseLiquors;
}

flightForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Finds the selected radio button option
    const selectedStrength = document.querySelector(".strength-weak:checked") ||
        document.querySelector(".strength-normal:checked") ||
        document.querySelector(".strength-strong:checked") ||
        document.querySelector(".strength-veryStrong:checked");

    // Checks if radio button was selected
    if (selectedStrength) {
        const selectedStrengthValue = selectedStrength.value;

        // Get selected base liquors
        const selectedBaseLiquors = getselectedBaseLiquors();

        // Creates object to store in Firebase
        const formData = {
            flightName: flightName.value,
            numDrinks: numDrinks.value,
            strength: selectedStrengthValue,
            alcoholTypes: selectedBaseLiquors,
        };

        // Send data to Firebase
        db.collection("flight-form")
            .doc()
            .set(formData)
            .then(() => {
                flightForm.reset();
            });
    } else {
        // ToDo: Handles case where no radio button is selected 
        alert("Please select a strength option");
    }
});
