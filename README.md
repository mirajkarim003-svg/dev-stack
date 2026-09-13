# Dev Stack Builder

Dev Stack Builder is a simple React website where users can explore different technologies and build their own tech stack.

## Technologies Used:
-React.js
-JavaScript (ES6+)
-Tailwind CSS
-React-Toastify
-JSON
-Vite

## Features:
-Users can explore different technologies with their category, rating, difficulty, and description.
-Users can add technologies to their own stack and remove them when needed.
-The website is responsive and shows toast messages when users add or remove technologies.

## React Questions & Answers
1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write and understand.

2. What is the difference between props and state?

Props are used to send data from one component to another. State is used to store data inside a component and update it when needed.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a React component. I used it for the technology data, selected stack, loading state, and mobile menu.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs some code after the component loads. I used it to fetch the technology data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list. It helps React update the list correctly when something changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things based on a condition. I used it in the stack section to show an empty message when no technology is selected and show the selected technologies when the stack is not empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child using props. The child can send something back by calling a function that the parent gives through props.
