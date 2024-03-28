document.addEventListener("DOMContentLoaded", function() {
    // Get the Log In button
    var loginButton = document.querySelector('.user-registration-Button[name="login"]');
    
    // Add click event listener to the Log In button
    loginButton.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Perform actions when the Log In button is clicked
        console.log("Log In button clicked");
        
        // You can add your custom functionality here, such as form validation or AJAX request
    });

    // Get the "Lost your password?" link
    var lostPasswordLink = document.querySelector('.user-registration-LostPassword a');

    // Add click event listener to the "Lost your password?" link
    lostPasswordLink.addEventListener("click", function(event) {
        // Perform actions when the "Lost your password?" link is clicked
        console.log("Lost your password? link clicked");
        
        // You can add your custom functionality here, such as showing a password reset form
    });
});