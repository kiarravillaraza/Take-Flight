
//User form data
const userForm = document.querySelector(".user-form");
const dateOfBirth = document.querySelector(".dateOfBirth");
const fullName = document.querySelector(".fullName");
const username = document.querySelector(".username");
const password = document.querySelector(".password");

userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Create an object to store in Firebase
    const formData = {
        dateOfBirth: dateOfBirth.value,
        fullName: fullName.value,
        username: username.value,
        password: password.value,
    };

    // Send data to Firebase
    db.collection("user-form")
        .doc()
        .set(formData)
        .then(() => {
            userForm.reset();
        });
});
