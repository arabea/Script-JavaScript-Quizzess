/*
This script is associated with quiz 1 Page: Warm It Up!
It's Mainly to add dynamicity and checks the answers
*/

//gets navigation buttons
var backButton = document.getElementById('prev-question-button');
var nextButton = document.getElementById('next-question-button');

//gets question number
var questionNumber = document.getElementById('questionNumber');


//gets all results
var result1 = document.getElementById('result1');
var result2 = document.getElementById('result2');
var result3 = document.getElementById('result3');
var result4 = document.getElementById('result4');
var result5 = document.getElementById('result5');
var result6 = document.getElementById('result6');
var result7 = document.getElementById('result7');
var result8 = document.getElementById('result8');
var result9 = document.getElementById('result9');
var result10 = document.getElementById('result10');


//gets all elements with the class: quiz1-questions
var questions=document.getElementsByClassName('quiz1-questions');

//hide all questions and only keep currentQuestion on the page
function hideElements(){
    //Loop through all elements
    for(var i=1; i<questions.length; i++){
        //Hide all elements except the first
        questions[i].style.display='none';
    }
}

//execute the hideElements fnction on page load
hideElements();

//stores current question order
var currentQuestion = 0;

//function to scroll to the next question
function displayNext(){
    if(currentQuestion < questions.length-1){
    questions[currentQuestion].style.display = 'none';
    questions[currentQuestion+1].style.display = 'block';
    currentQuestion++;
    questionNumber.innerHTML = currentQuestion+1 + ' out of ' + questions.length;
    }
}

//function to scroll to the previous question
function displayPrevious(){
    if(currentQuestion > 0){
    questions[currentQuestion].style.display = 'none';
    questions[currentQuestion-1].style.display = 'block';
    currentQuestion--;
    questionNumber.innerHTML = currentQuestion+1 + ' out of ' + questions.length;
    }
}

//gets all the input elements in the document for evaluating
var inputAnswers = document.getElementsByTagName('input');

//for every inputAnswer clicked check which input is clicked
for(var i = 0; i < inputAnswers.length; i++){
    inputAnswers[i].onclick = function() {
        //stores the id of the clicked input
        var theAnswer = event.target.getAttribute('id');

      // There we go..
        /********** Question 1: **********/
        // if the input clicked has the correct answer...
        if(theAnswer == 'rad1a'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>   Excellent!</h3>'
            // change the result div color to lightgreen
            result1.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad1b'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Humm.. Not really</h3><p>Try to follow through the code again</p>'
            // change the result div color to red
            result1.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad1c'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Try to follow the code again</p>'
            // change the result div color to red
            result1.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad1d'){
            // output the feedback in the result div
            result1.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Try to follow the code again</p>'
            // change the result div color to red
            result1.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 2: **********/
        if(theAnswer == 'rad2c'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>True!</h3>'
            // change the result div color to lightgreen
            result2.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad2a'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Wrong Answer</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result2.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad2b'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Try harder..</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result2.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad2d'){
            // output the feedback in the result div
            result2.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Nop </h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result2.style.backgroundColor = '#9e1f1f';
        }


        /********** Question 3: **********/
        if(theAnswer == 'rad3a'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Exactly!</h3>'
            // change the result div color to lightgreen
            result3.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad3a'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Well, No. </h3><p>Try to follow the code again</p>'
            result3.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad3c'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Humm</h3><p>Try to follow the code again</p>'
            // change the result div color to #9e1f1f
            result3.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad3d'){
            // output the feedback in the result div
            result3.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Think about it again</h3><p>Try to follow the code again</p>'
            // change the result div color to #9e1f1f
            result3.style.backgroundColor = '#9e1f1f';
        }


        /********** Question 4: **********/
        if(theAnswer == 'rad4c'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Correct Answer</h3>'
            // change the result div color to lightgreen
            result4.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad4b'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Think about it again</h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result4.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad4a'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Guess what? </h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result4.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad4d'){
            // output the feedback in the result div
            result4.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Think It Out!</h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result4.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 5: **********/
        if(theAnswer == 'rad5c'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>Fantastic!</h3>'
            // change the result div color to lightgreen
            result5.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad5a'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  There is more into it.. </h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result5.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad5b'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  hummm.. No</h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result5.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad5d'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Sorry, No.</h3><p>Open your code editor and try to figure this out</p>'
            // change the result div color to #red
            result5.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 6: **********/
        if(theAnswer == 'rad6a'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>  You\'re Awesome!</h3>'
            // change the result div color to lightgreen
            result6.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad6b'){
            // output the feedback in the result div
            result6.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Wrong</h3><p>Google that one</p>'
            // change the result div color to #red
            result6.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad6c'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Nah.. Think about it</h3><p>Google that one</p>'
            // change the result div color to #red
            result6.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad6d'){
            // output the feedback in the result div
            result5.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Not Really</h3><p>Google that one</p>'
            // change the result div color to #red
            result6.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 7: **********/
        if(theAnswer == 'rad7c'){
            // output the feedback in the result div
            result7.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>  YES!</h3>'
            // change the result div color to lightgreen
            result7.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad7b'){
            // output the feedback in the result div
            result7.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Think About it</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result7.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad7a'){
            // output the feedback in the result div
            result7.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Humm.. It\'s sometimes we just don\'t know okay</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result7.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad7d'){
            // output the feedback in the result div
            result7.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Not Really. Google it!</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result7.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 8: **********/
        if(theAnswer == 'rad8b'){
            // output the feedback in the result div
            result8.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>  Cool!</h3>'
            // change the result div color to lightgreen
            result8.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad8a'){
            // output the feedback in the result div
            result8.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Not so cool..</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result8.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad6c'){
            // output the feedback in the result div
            result8.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Google it!</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result8.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad6d'){
            // output the feedback in the result div
            result8.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Ask A friend..</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result8.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 9: **********/
        if(theAnswer == 'rad9c'){
            // output the feedback in the result div
            result9.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>  Great Job!</h3>'
            // change the result div color to lightgreen
            result9.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad9b'){
            // output the feedback in the result div
            result9.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Not really.. Let me give you a hint</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result9.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad9a'){
            // output the feedback in the result div
            result9.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Another hint is..</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result9.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad9d'){
            // output the feedback in the result div
            result9.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i>  Nah Think about it..</h3><p>Try to follow the code again</p>'
            // change the result div color to #red
            result9.style.backgroundColor = '#9e1f1f';
        }

        /********** Question 10: **********/
        if(theAnswer == 'rad10c'){
            // output the feedback in the result div
            result10.innerHTML = '<h3><i class="fa fa-check" aria-hidden="true"></i>  Fantaaaastic goaaal</h3>'
            // change the result div color to lightgreen
            result10.style.backgroundColor = 'lightgreen';
        } else if(theAnswer == 'rad10b'){
            // output the feedback in the result div
            result10.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Not Really</h3><p>Open your code editor and try to figure this out. That way it will stick.</p>'
            // change the result div color to #red
            result10.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad10a'){
            // output the feedback in the result div
            result10.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> Try To Google it</h3><p>Open your code editor and try to figure this out. That way it will stick.</p>'
            // change the result div color to #red
            result10.style.backgroundColor = '#9e1f1f';
        } else if(theAnswer == 'rad10d'){
            // output the feedback in the result div
            result10.innerHTML = '<h3><i class="fa fa-times" aria-hidden="true"></i> I\'m sure you know..</h3><p>Open your code editor and try to figure this out. That way it will stick.</p>'
            // change the result div color to #red
            result10.style.backgroundColor = '#9e1f1f';
        }
    };
    }
