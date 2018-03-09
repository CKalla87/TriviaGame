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
        question: "What was the name of the band that changed the music scene in the early 90's from Hair Metal to Grundge?",
        answerList: ["Alice In Chains", "Pearl Jam", "Sound Garden", "Nirvana"],
        answer: 3
    
    }, {
        question: "What illness killed Freddy Mercury?",
        answerList: ["Cancer", "HIV", "AIDS", "Heart Attack"],
        answer: 1

    }, {
        question: "Which inventor developed the solid-body electric guitar that made rock 'n roll possible??",
        answerList: ["Rupert Neve", "Les Paul", "Leo Fender", "C.F. Martin"],
        answer: 0
    
    }, {
        question: "Who Invented the most famouse recording console and music module in the world, (1073)?",
        answerList: ["Bill Putnam", "Rupert Neve", "Georg Neumann", "Sherman Fairchild"],
        answer: 1
    
    }, {
        question: "Hallelujah is a song written by which Canadian recording artist?",
        answerList: ["Neil Young", "Bryan Adams", "Gordon Downie", "Leonard Cohen"],
        answer: 3

    }, {
        question: "What famous female singer died of alcohol poisoning in 2011 at the age of 27?",
        answerList: ["Mia Zapata", "Amy Winehouse", "Mindy McCready", "Chrissy Amplhett"],
        answer: 3

    }, {
        question: "What was the highest selling album of the 1980's?",
        answerList: ["Purple Rain", "Appetite For Destruction", "Thriller", "Master Of Puppets"],
        answer: 2

    }, {
        question: "Which Rap Rock Band would sing about Politics and Current Issues?",
        answerList: ["The Rolling Stones", "The Beatles", "Audio Slave", "Rage Against The Machine"],
        answer: 3

    }, {
        question: "At what unusual institutions did Johnny Cash record a number of live albums?",
        answerList: ["Prisons", "His House", "Sun Record Company", "On The Road"],
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
        question: "What famouse Classical Artist was both deaf and going mad from Lead Poisoning?",
        answerList: ["Wolfgang Amadeus Mozart", "Fredric Chopin", "Claude Debussy", "Ludwig van Beethoven"],
        answer: 3
    }];


    
});