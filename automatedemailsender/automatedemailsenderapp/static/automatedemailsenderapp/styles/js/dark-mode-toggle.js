/* darkToggle: toggles between dark and light modes */

// Set variable for toggle element
var toggle = document.getElementsByClassName('.dark-toggle');

// Set variable for HTML element
var htmlElement = document.documentElement;

// Get stored theme from localStorage
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light');
// Check if there is a stored theme
if (storedTheme)
  // Set the 'data-theme' attribute of the HTML element to the stored theme
  htmlElement.setAttribute('data-theme', storedTheme);
  
// Handle click event for the toggle button
toggle.onclick = () => {
  // Get the current theme from the 'data-theme' attribute of the HTML element
  var currentTheme = htmlElement.getAttribute('data-theme');

  // Set the target theme to 'light' by default
  var targetTheme = 'light';

  // If the current theme is 'light', switch to 'dark'; otherwise, switch to 'light'
  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

// Set the 'data-theme' attribute of the HTML element to the target theme
htmlElement.setAttribute('data-theme', targetTheme);

// Store the target theme in localStorage
localStorage.setItem('theme', targetTheme);
};