// user does nothing but click on the answer radio buttons, all else should go using functions and timers

$(document).ready(function() {

    // __________________________________
    // ** Variables **

    //remainingTime 

    // trivia object with questions and answers contained within
    var trivia = [
        // question one: true
        {
            "name": "bison",
            "options": ["true", "false"],
            "answer": 0
        },
        // question two: false
        {
            "name": "banteng",
            "options": ["true", "false"],
            "answer": 1

        },
        // question three: false
        {
            "name": "blackdevil",
            "options": ["true", "false"],
            "answer": 1

        },
        // question four: true
        {
            "name": "bluebird",
            "options": ["true", "false"],
            "answer": 0
        },
        // question five: true
        {
            "name": "blackhawk",
            "options": ["true", "false"],
            "answer": 0
        },
        // question six: false
        {
            "name": "babirusa",
            "options": ["true", "false"],
            "answer": 1
        },
        // question seven: false
        {
            "name": "betta",
            "options": ["true", "false"],
            "answer": 1
        },
        // question eight: true
        {
            "name": "bobcat",
            "options": ["true", "false"],
            "answer": 0
        }
    ];



    // var for right answers

    // var for questions

    // var for wrong answers

    // empty array for right answers

    // empty array for wrong answers

    // unanswered questions?

    // __________________________________
    // ** Functions **

    // on document loading, start timer


    // what happens when a radio button is clicked, store the information

    // timeup

    // show stored answers as how many were 1: correct, 2: how many were incorrect, and 3: how many were not answered

    // push right answers to right array

    // push wrong answers to wrong array

    // how to record unanswered questions? if not aswered, push to unanswered quetion array?

    // function timeUp() {

    //         // in the element with an id of time-left add an h2 saying Time's Up!
    //         // console log done
    //          $("#remainingTime").append("<h2>your time is up!</h2>");
    //		}

    //car and animal gifs on rotating loop
    // __________________________________
    // ** Game Logic **

    // start timer()
    // var time = 30;

    // setTimeout(time, 30 * 1000);
    // time--;
    // $("#remainingTime").append("remaining time: " + time);
    // console.log(setTimeout);


    // timeUp()

    // ----------------------------------

    // ----------------------------------
    // ** Image Slideshow **

    // variables
    var images = ["assets/images/babirusa.jpg", "assets/images/blackdevil.jpg", "assets/images/banteg.jpg", "assets/images/bluebird.jpg", "assets/images/bison.jpg", "assets/images/bobcat.jpg"];

    var imageScroll;

    var imageCount = 0;

    // functions
    function showImage() {
        $("#image-holder").html("<img src=" + images[imageCount] + " width='300px'>");
        console.log("i'm showing the first image");
    }

    function nextImage() {
        imageCount++;

        setTimeout(startScroll, 1000);

        if (imageCount === images.length) {
            imageCount = 0;
        }
    }

    function startScroll() {
        imageScroll = setInterval(nextImage, 1000);
        console.log("why am i not working?");
    }

    showImage();

    // ----------------------------------
}); //end document ready