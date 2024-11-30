// Add JavaScript functionality if needed for the search bar or navigation interactivity
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('main section input');
  
    // Add focus effect for search bar
    searchBar.addEventListener('focus', () => {
      searchBar.style.backgroundColor = '#ffcccc';
    });
  
    searchBar.addEventListener('blur', () => {
      searchBar.style.backgroundColor = '#fff';
    });
  });
  