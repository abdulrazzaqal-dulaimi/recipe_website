



let body = document.querySelector('body');
let pList = document.querySelectorAll('p');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let a = document.getElementsByClassName('pageNav');
let h1List = document.querySelectorAll('h1');
let h2List = document.querySelectorAll('h2');
let h3List = document.querySelectorAll('h3');

function toggleTheme() {
    body.classList.toggle("dark-theme");
    header.classList.toggle("dark-theme");
    footer.classList.toggle("dark-theme");

    for (let i = 0; i < a.length; i++) {
        a[i].classList.toggle("dark-theme");
    }

    // Check if the dark-theme class is present
    var isDarkTheme = body.classList.contains("dark-theme");

    // Set a background color based on the theme
    body.style.backgroundColor = isDarkTheme ? "#f4e8c1" : "#721D30";
    header.style.backgroundColor = isDarkTheme ? "#8a4b08" : "#EE2F5F";
    footer.style.backgroundColor = isDarkTheme ? "#8a4b08" : "#EE2F5F";
    footer.style.color = isDarkTheme ? "#f4e8c1" : "#1A0E2F";

    for (let i = 0; i < pList.length; i++) {
        pList[i].classList.toggle("dark-theme");
        pList[i].style.color = isDarkTheme ? "#3e2723" : "#fbfbfb";
    }

    for (let i = 0; i < h1List.length; i++) {
        h1List[i].style.color = isDarkTheme ? "#8a4b08" : "#B9B9A2";
    }

    for (let i = 0; i < h2List.length; i++) {
        h2List[i].style.color = isDarkTheme ? "#8a4b08" : "#B9B9A2";
    }

    for (let i = 0; i < h3List.length; i++) {
        h3List[i].style.color = isDarkTheme ? "#8a4b08" : "#B9B9A2";
    }
}

function resetTheme() {
    body.classList.remove("dark-theme"); // Remove the dark-theme class from the body
    header.classList.remove("dark-theme"); // Remove the dark-theme class from the header
    footer.classList.remove("dark-theme"); // Remove the dark-theme class from the footer

    // Set the default background colors
    body.style.backgroundColor = "#f4e8c1";
    header.style.backgroundColor = "#8a4b08";
    footer.style.backgroundColor = "#8a4b08";

    // Set the default text colors for all <p> tags
    for (let i = 0; i < pList.length; i++) {
        pList[i].classList.remove("dark-theme");
        pList[i].style.color = "#3e2723";
    }

    // Reset the text color for the header and footer
    header.style.color = "#f4e8c1";
    footer.style.color = "#fbfbfb";

    // Reset the text color for the navigation links
    for (let i = 0; i < a.length; i++) {
        a[i].style.color = "#f4e8c1";
    }

    // Reset the text color for <h1>, <h2>, and <h3>
    for (let i = 0; i < h1List.length; i++) {
        h1List[i].style.color = "#8a4b08";
    }

    for (let i = 0; i < h2List.length; i++) {
        h2List[i].style.color = "#8a4b08";
    }

    for (let i = 0; i < h3List.length; i++) {
        h3List[i].style.color = "#8a4b08";
    }
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