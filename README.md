```
# Quiz Application

## Description

This is a simple quiz application built with HTML, CSS, and JavaScript. It presents the user with a series of multiple-choice questions and provides feedback on their answers.

## Features

*   Randomly selects questions from a predefined array.
*   Displays the question and answer options.
*   Allows the user to select an answer.
*   Provides feedback on whether the answer is correct or incorrect.
*   Displays a fun fact related to the question.
*   Includes a "Next question" button to proceed.
*   Changes the background color of the answer container randomly.

## Getting Started

To run this application, follow these steps:

1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.

## Files

*   `index.html`: Contains the HTML structure of the quiz.
*   `style.css`: Contains the CSS styles for the quiz.
*   `script.js`: Contains the JavaScript logic for the quiz.

## How to Use

1.  Open the `index.html` file in a web browser.
2.  Click the "Start Quiz" button to begin.
3.  Answer the questions by selecting an option.
4.  Click the "Show Answer" button to see if your answer is correct and view the fun fact.
5.  Click the "Next question" button to proceed to the next question.

## Code Overview

### HTML (`index.html`)

*   Sets up the basic structure of the quiz, including the start button, question container, and answer container.

### CSS (`style.css`)

*   Styles the quiz elements for a visually appealing interface.

### JavaScript (`script.js`)

*   `const quiz`: An array of objects, where each object represents a question and includes the question text, answer options, the correct answer, and a fun fact.
*   `const startBtn`: Selects the start button element from the HTML.
*   `const container`: Selects the main container element from the HTML.
*   `startBtn.addEventListener('click', () => { getQuiz(); });`:  Adds an event listener to the start button that triggers the `getQuiz` function when clicked.
*   `getRandomQuestion()`: Randomly selects a question from the `quiz` array.
*   `getQuiz()`:
    *   Selects a random question using `getRandomQuestion()`.
    *   Filters the `quiz` array to find the matching question object.
    *   Renders the question and answer options using the `renderHtml()` function.
    *   Adds event listeners to the answer options to check the selected answer.
    *   Creates and adds the "Show Answer" button.
    *   Adds an event listener to the "Show Answer" button to display the answer, the result (correct/incorrect), and the fun fact using the `renderAnswerHtml()` function.
    *   Calls the `changeElementColor()` function to change the background color of the answer container.
    *   Adds an event listener to the "Next question" button to load the next question.
*   `getRandomColor()`: Returns a random color from a predefined list of colors.
*   `changeElementColor(answerContainer)`: Sets the background color of the `answerContainer` element to a random color.
*   `renderHtml(question, arr)`: Generates the HTML for displaying the question and answer options.
*   `renderAnswerHtml(answer, checkedOption, funFact)`: Generates the HTML for displaying the answer, the result, and the fun fact.

## Customization

*   Questions: Modify the `quiz` array in `script.js` to add, remove, or change the questions, options, answers, and fun facts.
*   Styling: Customize the appearance of the quiz by modifying the CSS in `style.css`.
*   Functionality: Extend the functionality of the quiz by adding features like scoring, timers, or different question types.

## License

This project is open source and available under the [MIT License](LICENSE).