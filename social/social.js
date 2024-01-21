// Function to load initial content and handle navigation
function loadContent(page) {
    var contentElement = document.getElementById('content');
    
    // Clear existing content
    contentElement.innerHTML = '';
  
    // Load content based on selected page
    switch (page) {
      case 'home':
        contentElement.innerHTML = '<h2>Home Page</h2><p>Welcome to the social media website!</p>';
        break;
      case 'profile':
        contentElement.innerHTML = '<h2>Profile Page</h2><p>This is your profile page.</p>';
        break;
      case 'messages':
        contentElement.innerHTML = '<h2>Messages Page</h2><p>View and send messages here.</p>';
        break;
      case 'notifications':
        contentElement.innerHTML = '<h2>Notifications Page</h2><p>Check your notifications here.</p>';
        break;
      case 'settings':
        contentElement.innerHTML = '<h2>Settings Page</h2><p>Manage your account settings.</p>';
        break;
      default:
        contentElement.innerHTML = '<h2>404 Page Not Found</h2><p>The requested page was not found.</p>';
    }
  }
  
  // Handle navigation click events
  function handleNavigation(event) {
    event.preventDefault();
    var page = event.target.getAttribute('data-page');
    loadContent(page);
  }
  
  // Add event listeners to navigation links
  var navigationLinks = document.querySelectorAll('.navigation-link');
  navigationLinks.forEach(function(link) {
    link.addEventListener('click', handleNavigation);
  });
  
  // Load initial content
  loadContent('home');
  