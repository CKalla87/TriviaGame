$(document).ready(function() {

    //Load Song In Game//
    $("#SoLoud").get(0).play();
    
    //Setting Carousel Variable//
    var myIndex = 0;
    
    //Setting Carousel Motion
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}    
        x[myIndex-1].style.display = "block";  
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    //Calling Carousel Function//
    carousel();

    //Setting 15 Questions To Game In An Array With Objects//
    var gameQuestions = [{
        question: "What was the name of the band that changed the music scene in the early 90's from Hair Metal to Grunge?",
        answerList: ["Alice In Chains", "Pearl Jam", "Sound Garden", "Nirvana"],
        answer: 3
    
    }, {
        question: "What illness killed Freddy Mercury?",
        answerList: ["Cancer", "HIV", "AIDS", "Heart Attack"],
        answer: 2

    }, {
        question: "Which inventor developed the solid-body electric guitar that made rock 'n roll possible??",
        answerList: ["Rupert Neve", "Les Paul", "Leo Fender", "C.F. Martin"],
        answer: 1
    
    }, {
        question: "Who Invented the most famous recording console and music module in the world, (1073)?",
        answerList: ["Bill Putnam", "Rupert Neve", "Georg Neumann", "Sherman Fairchild"],
        answer: 1
    
    }, {
        question: "Hallelujah is a song written by which Canadian recording artist?",
        answerList: ["Neil Young", "Bryan Adams", "Gordon Downie", "Leonard Cohen"],
        answer: 3

    }, {
        question: "What famous female singer died of alcohol poisoning in 2011 at the age of 27?",
        answerList: ["Mia Zapata", "Amy Winehouse", "Mindy McCready", "Chrissy Amplhett"],
        answer: 1

    }, {
        question: "What was the highest selling album of the 1980's?",
        answerList: ["Purple Rain", "Appetite For Destruction", "Thriller", "Master Of Puppets"],
        answer: 2

    }, {
        question: "Which rap-rock band would sing about politics and current issues?",
        answerList: ["The Rolling Stones", "The Beatles", "Audio Slave", "Rage Against The Machine"],
        answer: 3

    }, {
        question: "At what unusual institution did Johnny Cash record a number of live albums?",
        answerList: ["Prison", "His House", "Sun Record Company", "On The Road"],
        answer: 0

    }, {
        question: "What was Jimi Hendrix's real name?",
        answerList: ["Jimmy Marshall Hendrix", "James Marshall Hendrix", "Jimmy Thomas Hendirx", "James Mitchell Hendrix"],
        answer: 0

    }, {
        question: "What famous US festival hosted over 350,000 fans in 1969?",
        answerList: ["Coachella", "Newport Folk Festival", "Woodstock", "Monterey Pop Festival"],
        answer: 2

    }, {
        question: "The biggest selling music single of all time is?",
        answerList: ["Thriller", "Candle in the Wind (1997)", "Tears In Heaven", "Don't Stop Believin'"],
        answer: 1

    }, {
        question: "What was the first music video played on MTV?",
        answerList: ["Video Killed the Radio Star", "She Won't Dance With Me", "Time Heals", "TAke it on the Run"],
        answer: 0

    }, {
        question: "Who is the most successful UK solo artist in the US?",
        answerList: ["John Lennon", "Mick Jagger", "Elton John", "Paul McCartney"],
        answer: 2

    }, {
        question: "What famous classical artist was both deaf and going mad from lead poisoning?",
        answerList: ["Wolfgang Amadeus Mozart", "Fredric Chopin", "Claude Debussy", "Ludwig van Beethoven"],
        answer: 3
    }, {
        question: "What famous classical artist was both deaf and going mad from lead poisoning?",
        answerList: ["Wolfgang Amadeus Mozart", "Fredric Chopin", "Claude Debussy", "Ludwig van Beethoven"],
        answer: 3
    }];
    
    //Answers Variable Array
    var answerKey = ["Nirvana", "AIDS", "Les Paul", "Rupert Neve", "Leonard Cohen", "Amy Winehouse", "Thriller", "Rage Against The Machine", "Prisons", "Jimmy Marshall Hendrix", "Woodstock", "Candle in the Wind (1997)", "Video Killed the Radio Star", "Elton John", "Ludwig van Beethoven"];
    var index = 0;
    var number = 15;
    var intervalId;
    var correctCounter = 0;
    var incorrectCounter = 0;
    var current = 0;
    var ButtonA = 0;
    var ButtonB = 1;
    var ButtonC = 2;
    var ButtonD = 3;
    var key = 0;
    
    
    //Timer code
    //Timer start function
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    //Decrement function   
    function decrement() {
        number--;
        $("#timer").html("<h2>" + number + " Seconds Remaining!" + "</h2>");
        if (number === 0) {
            stop();
            alert("I guess you are not a  music master!")
            current++
            key++
            loadQuestion();
            reset();
        }
    };

    //Reset function
    function reset() {
        number = 15;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#timer").html("<h2>" + number + " Seconds Remaining!" + "</h2>");
    }

   
    //Stop function
    function stop() {
        clearInterval(intervalId);
    }

 
    //First Button Push To Start Game
    function buttonReset() {
    stop();
    $("#timer").html("<h2>" + number + " Seconds Remaining!" + "</h2>").empty("#timer");
    $("#question").text(gameQuestions[0].question).empty("question");
    $("#buttonA").text(gameQuestions[0].answerList[0]).hide("#buttonA");
    $("#buttonB").text(gameQuestions[0].answerList[1]).hide("#buttonB");
    $("#buttonC").text(gameQuestions[0].answerList[2]).hide("#buttonC");
    $("#buttonD").text(gameQuestions[0].answerList[3]).hide("#buttonD");
    };
    
    //Game Start
    function start() {
        buttonReset ()
        $("#welcome").html("<h3>" + " Welcome to the Music Trivia Game, let's see what you know! " + "</h3>");
        $("#start").html("Click The Button To Start The Game! ");
        $("#start").on("click", function() {
            $(this).hide();
            $("#welcome").hide();
            loadQuestion();
           });
        }
    //Run Function
    start();

   
    //Final Score function
    function scoreBoard() {
    if (current === 15) {
        buttonReset ()
        correctCounter;
        $("#correct").html("Answered Correctly: " + correctCounter);
        incorrectCounter;
        $("#incorrect").html("Answered Incorrectly: " + incorrectCounter);
        //Restart the game
        $("#start").html("Click This Button To Re-Start The Game! ").show();
        $("#start").on("click", function() {
            $(this).hide();
            $("#correct").hide();
            $("#incorrect").hide();
            location.reload();
        });
    } else {

    }
    };
    
    //Questons To Load From Object
    function loadQuestion() {
    run();
    reset();
    $("#question").text(gameQuestions[current].question);
    $("#buttonA").text(gameQuestions[current].answerList[0]).show();
    $("#buttonB").text(gameQuestions[current].answerList[1]).show();
    $("#buttonC").text(gameQuestions[current].answerList[2]).show();
    $("#buttonD").text(gameQuestions[current].answerList[3]).show();
    };

    //Click function for buttons
    $("#buttonA").on('click', function() {
    if(ButtonA === gameQuestions[current].answer) {
        alert("Look At You Go!")
        correctCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
        
    } else {
        alert("Sorry " + answerKey[key] + " is the answer.");
        incorrectCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
    }
    })
    
    $("#buttonB").on('click', function() {
    if(ButtonB === gameQuestions[current].answer) {
        alert("Look At You Go!")
        correctCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
    } else {
        alert("Sorry " + answerKey[key] + " is the answer.");
        incorrectCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
        }
    })


    $("#buttonC").on('click', function() {
    if(ButtonC === gameQuestions[current].answer) {
        alert("Look At You Go!")
        correctCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
    } else {
        alert("Sorry " + answerKey[key] + " is the answer.");
        incorrectCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
        }
    })

    $("#buttonD").on('click', function() {
    if(ButtonD === gameQuestions[current].answer) {
        alert("Look At You Go!")
        correctCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
    } else {
        alert("Sorry " + answerKey[key] + " is the answer.");
        incorrectCounter++
        current++
        key++
        loadQuestion();
        scoreBoard();
        }
    });
});