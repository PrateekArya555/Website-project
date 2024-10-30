document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const submitButton = document.querySelector(".btn-dark");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const text = document.getElementById("text").value.trim();

        if (name === "" || phone === "" || email === "" || text === "") {
            alert("Please fill all the information");
        } else {
            alert("Your query will be answered soon");
        }
    });
});