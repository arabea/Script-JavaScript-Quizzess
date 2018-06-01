/*
This script is associated with quiz 2 Page: Keep the Vibe!
It populates the page with the content. And checks the score after submittion
pointing out where it did go wrong
*/

        (function() {
    function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
    // ...add an HTML radio button
    answers.push(
      `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}
      </label>`
    );
    }

    // add this question and its answers to the output
    output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>`
    );
    });


    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
    }

    function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
    // add to the number of correct answers
    numCorrect++;

    // color the answers green
    answerContainers[questionNumber].style.color = "#186000";
    } else {
    // if answer is wrong or blank
    // color the answers red
    answerContainers[questionNumber].style.color = "#9e1f1f";
    }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
    {
      question: "How do you use a method on an object?",
      answers: {
        a: "Call the method followed by a punctuation mark, then call the object: reverse.myarray",
        b: "Call the object followed by a punctuation mark, then call the method: myarray.reverse",
        c: "Call the method and place the object inside the parenthesis: reverse(myarray)",
        d: "Call the object followed by a punctuation mark, then call the method ending with parenthesis: myarray.reverse()"
      },
      correctAnswer: "d"
    },
    {
      question: "Immediately Invoked Function Expressions _____.",
      answers: {
        a: "execute when the entire script is read",
        b: "execute before the script is read",
        c: "execute when called by name",
        d: "execute as soon as the browser reads them"
      },
      correctAnswer: "d"
    },
      {
      question: "What will document.querySelectorAll([query selectors]) return?",
      answers: {
        a: "one element for each of the specified query selectors",
        b: "the first node matching all the specified query selectors",
        c: "the first node matching the specified query selectors",
        d: "an HTML collection containing all document nodes matching the specified query selector"
      },
      correctAnswer: "d"
    },
      {
      question: "What does the continue keyword do in a loop?",
      answers: {
        a: "Skip the remainder of the code block before continuing on to the next iteration of the loop.",
        b: "Stop the loop and continue with the next code block.",
        c: "Continue to the next iteration of the loop even if the condition is no longer true.",
        d: "Continue running the code in the code block."
      },
      correctAnswer: "a"
    },
      {
      question: "A variable containing a string with only a number in it is treated like:",
      answers: {
        a: "A string containing just a number is bad practice.",
        b: "A number.",
        c: "A string, so a math equation would cause a NaN (Not a Number) error.",
        d: "A string or a number depending on the context it's used in."
      },
      correctAnswer: "d"
    },
      {
      question: "What will document.querySelectorAll([query selectors]) return?",
      answers: {
        a: "one element for each of the specified query selectors",
        b: "the first node matching all the specified query selectors",
        c: "an HTML collection containing all document nodes matching the specified query selector",
        d: "the first node matching the specified query selectors"
      },
      correctAnswer: "c"
    },
      {
      question: "How do you write 'Hello World' in an alert box?",
      answers: {
        a: "msgBox('Hello World');",
        b: "alert('Hello World');",
        b: "alertBox('Hello World');",
        b: "msg('Hello World');"
      },
      correctAnswer: "b"
    },
      {
      question: "Which event occurs when the user clicks on an HTML element?",
      answers: {
        a: "onchange",
        b: "onmouseclick",
        c: "onmouseover",
        d: "onclick"
      },
      correctAnswer: "d"
    },
      {
      question: "Is JavaScript case-sensitive?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },

];

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    })();
