// Flight form data
const flightForm = document.querySelector(".flight-form");
const flightNameInput = document.querySelector(".flight-name");
const numDrinksInput = document.querySelector(".num-drinks");
const strengthInputs = document.querySelectorAll('input[name="drinks_strength"]');
const alcoholInputs = document.querySelectorAll('input[name="selectedAlcohol"]');

flightForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        flightName: flightNameInput.value,
        numDrinks: numDrinksInput.value,
        strength: getSelectedValue(strengthInputs),
        selectedAlcohol: getSelectedValue(alcoholInputs),
    };

        db.collection("flight-form")
            .doc()
            .set(formData)
            .then(() => {
                flightForm.reset();
            });
});


function storeFlightInfo(flightName, numDrinks, strength, selectedAlcohol) {
    sessionStorage.setItem('flightName', flightName);
    sessionStorage.setItem('numDrinks', numDrinks);
    sessionStorage.setItem('strength', strength);
    sessionStorage.setItem('selectedAlcohol', selectedAlcohol);

    const formData = {
        flightName: flightName,
        numDrinks: numDrinks,
        strength: strength,
        selectedAlcohol: selectedAlcohol,
    };
};
