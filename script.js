function toggleTheme() {
    var body = document.body;
    var header = document.querySelector('header'); 
    body.classList.toggle("dark-theme");
    header.classList.toggle("dark-theme");

    // Check if the dark-theme class is present
    var isDarkTheme = body.classList.contains("dark-theme");
    header.classList.toggle("dark-theme"); // Toggle the dark-theme class on the header

    // Set a background color based on the theme
    body.style.backgroundColor = isDarkTheme ? "#f4e8c1" : "#13f235"; // Use the correct color codes
    header.style.backgroundColor =  isDarkTheme ? "#8a4b08" : "#8a0869";
}

function resetTheme() {
    var body = document.body;
    var header = document.querySelector('header'); 
    body.classList.remove("dark-theme"); // Remove the dark-theme class
    header.classList.remove("dark-theme"); // Remove the dark-theme class from the header
    body.style.backgroundColor = "#f4e8c1"; // Set the default background color
    header.style.backgroundColor = "#8a4b08"; // Set the header's background color to its default
}

 
// Get all recipe cards (articles) and their respective names and descriptions
const recipeCards = document.querySelectorAll('.recipe-display article');
const recipeNames = document.querySelectorAll('.recipe-name');
const recipeDescriptions = document.querySelectorAll('.recipe-description');

// Add click event listeners to each recipe card
recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Hide all descriptions
        recipeDescriptions.forEach(description => {
            description.style.display = 'none';
        });

        // Show the description for the clicked recipe
        recipeDescriptions[index].style.display = 'block';
    });
});