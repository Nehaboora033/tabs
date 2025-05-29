const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove all active classes first
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        // Add active class to the clicked button
        button.classList.add("active");

        // Get target tab and show it
        const tabNum = button.getAttribute("data-tab");
        document.getElementById(`tab-content-${tabNum}`).classList.add("active");
    });
});