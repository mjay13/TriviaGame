// user does nothing but click on the answer radio buttons, all else should go using functions and timers

$(document).ready(function() {
    $("#questionScreen").hide();

    // __________________________________
    // ** Variables **
    
    // counters
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
    var currentQuestion = 0;

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


    // __________________________________
    // ** Functions **





 

    // function timeUp() {

    //         // in the element with an id of time-left add an h2 saying Time's Up!
    //         // console log done
    //          $("#remainingTime").append("<h2>your time is up!</h2>");
    //		}

    // __________________________________
    // ** Game Logic **

    // on click of play, start game
    $("#playBtn").on("click", function() {
        $("#btnSection").hide();
        $("#image-holder").hide();
        $("#countdown").append("<h2 id='tSeconds'>00</h2>");
        $("#questionScreen").show();

        console.log("start button clicked");

        //playTrivia();

    });

    // ----------------------------------

    // ----------------------------------
    // ** Image Slideshow **

    // variables
    var images = ["assets/images/babirusa.jpg", "assets/images/blackdevil.jpg", "assets/images/banteg.jpg", "assets/images/bluebird.jpg", "assets/images/bison.jpg", "assets/images/bobcat.jpg"];

    var imageScroll;

    var imageCount = 0;

    // functions
    function showImage() {
        $("#image-holder").html("<img src=" + images[imageCount] + " width='225px'>");
        // console.log("i'm showing the first image");
    }

    function nextImage() {
        imageCount++;

        setTimeout(showImage, 1000);

        if (imageCount === images.length) {
            imageCount = 0;
        }
    }

    function startScroll() {
        imageScroll = setInterval(nextImage, 500);
       
    }

    $("#image-holder").on("click", function() {
    	clearInterval(imageScroll);
    });

    showImage();
    startScroll();

    // ----------------------------------
}); //end document ready