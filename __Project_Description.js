/* *
Project Setup and Structure:
Set up your project structure and components according to the given requirements. Create separate components for the navbar, footer, pages (Home, Instructors, Classes, Dashboard), and other relevant sections.
------->
src/
|-- components/
|   |-- Navbar.js
|   |-- Footer.js
|   |-- Home.js
|   |-- Instructors.js
|   |-- Classes.js
|   |-- Dashboard.js
|
|-- pages/
|   |-- Registration.js
|   |-- Login.js
|   |-- HomePage.js
|   |-- InstructorsPage.js
|   |-- ClassesPage.js
|   |-- StudentDashboard.js
|   |-- PaymentPage.js
|   |-- InstructorDashboard.js
|   |-- AdminDashboard.js
|
|-- assets/
|   |-- images/
|       |-- instructor1.jpg
|       |-- instructor2.jpg
|       |-- ...
|
|-- App.js
|-- index.js
---------------------->

Styling and Design:
Ensure that your website's design is visually appealing and follows the provided guidelines. Customize the design of components to match the theme and add unique visual elements.

Routing:
Implement routing using a package like react-router-dom. Create routes for Home, Instructors, Classes, Dashboard, and any other pages required.

Registration and Login System:
Use react-hook-form for the registration and login forms. Implement the logic for registration, login, and error handling based on the given requirements. Use JWT tokens for authentication.

Homepage:
Design the homepage with a top slider section, popular classes section, popular instructors section, and an extra section. Use relevant images, information, and animation effects.

Instructors Page:
Create a page to display all instructors' information. Use mapping to dynamically render instructor details, including the "See Classes" button.

Classes Page:
Design a page to show approved classes. Implement logic to enable/disable the Select button based on user status and available seats.

Student Dashboard:
Create a private student dashboard. Display selected and enrolled classes. Implement the pay button and link it to the payment page.

Payment Page:
Design the payment page for finalizing payments. Update available seats after successful payment.

Instructor Dashboard:
Implement a private instructor dashboard. Allow instructors to add classes and view their classes' status and enrolled students.

Admin Dashboard:
Create a private admin dashboard. Manage classes, users, and provide approval/denial feedback. Implement user role changes.

Animations:
Incorporate animations using the chosen animation library (e.g., Framer Motion) to enhance the user experience.

Dark/Light Theme Toggle:
Add a toggle switch to allow users to switch between dark and light themes, if you choose to implement this bonus task.

Responsive Design:
Ensure that your website is responsive and works well on different devices and screen sizes.

API Calls:
Use Axios to make API calls, such as retrieving class data and handling user actions.

Git Commits and README:
Follow the guidelines for meaningful git commits and create a detailed README for your project.

Testing and Optimization:
Test your website thoroughly to ensure all features work as expected. Optimize performance and fix any bugs or issues.

Bonus and Optional Tasks:
Consider implementing some of the bonus and optional tasks to enhance your project's functionality and uniqueness.

Submission:
Once your project is complete, submit your client-side and server-side repositories, along with the live website link and admin credentials.

Remember to break down each requirement into smaller tasks and tackle them one at a time. Test your code frequently and seek help or references if you encounter challenges. Good luck with developing your "WebMastersHub" project!
*/
