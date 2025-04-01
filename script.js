// Hero Section Button
document.getElementById("explore-solutions").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

// Trainings Section Buttons
document.getElementById("learn-ai").addEventListener("click", function() {
    alert("You clicked on AI and Machine Learning!");
});
document.getElementById("learn-blockchain").addEventListener("click", function() {
    alert("You clicked on Blockchain Technologies!");
});
document.getElementById("learn-iot").addEventListener("click", function() {
    alert("You clicked on Internet of Things!");
});

// Services Section Button
document.getElementById("contact-us").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

// Contact Section Email Button
document.getElementById("email-us").addEventListener("click", function() {
    window.location.href = "mailto:tithika.mittal@instrek.com";
});

// Newsletter Subscribe Button
document.getElementById("subscribe-button").addEventListener("click", function() {
    const emailInput = document.querySelector("input[type='email']");
    const email = emailInput.value;

    if (email) {
        alert("Thank you for subscribing with " + email);
        emailInput.value = ""; // Clear the input after submission
    } else {
        alert("Please enter a valid email address.");
    }
});
