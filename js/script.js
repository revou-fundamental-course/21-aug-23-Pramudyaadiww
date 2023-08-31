document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const welcomeSection = document.getElementById("welcome");

    nameInput.addEventListener("input", function () {
        const name = nameInput.value;
        welcomeSection.textContent = `Hi ${name}`;
    });
});
