// Raja Sori 
// Dr. Olivares
// CPSC332
// Homework 6
// October 23, 2024


$(function () { // ready function
    var seconds = "00";
    var tens = "00";

    // updated the varaibles as required 
    let $appendTens = $("#tens");
    let $appendSeconds = $("#seconds");
    let $buttonStart = $("#button-start");
    let $buttonStop = $("#button-stop");
    let $buttonReset = $("#button-reset");

    var interval;
    var opacityInterval;

    let $wrapper = $("#wrapper");

    // Centering everything and more 
    $(".wrapper").css({
        "margin": "auto",
        "text-align": "center",
        "background-image": "url('goal.jpg')",
        "background-repeat": "no-repeat",
        // "background-color": "lightblue",  // inner background
        "border": "5px solid #4CAF50",  // border
        "padding": "100px",
        // "background-attachment": "fixed",
        "background-position": "center"
    })

    // function to set opacity
    function startOpacityAnimation() {
        opacityInterval = setInterval(function () {
            $(".timer-background").animate({ opacity: 0.8 }, 500)
                .animate({ opacity: 1.0 }, 500);
        }, 1000); 
    }

    // timer background
    $("#timer").addClass("timer-background");
    $("#timer").css({
        "border": "2px solid #4CAF50",    
        "font-family": "Arial, sans-serif" // Changing Font family for timer text
    });
    $(".timer-background").css("background-color", "grey");


    // button classes
    $buttonStart.addClass("btn");
    $buttonStop.addClass("btn");
    $buttonReset.addClass("btn");

    // Styling buttons 
    $(".btn").css({
        "background-color": "#4CAF50",  
        "border": "none",                
        "color": "white",                
        "padding": "15px 32px",         
        "text-align": "center",        
        "display": "inline-block",       
        "font-size": "16px",             
        "margin": "",           
        "cursor": "pointer",            
        "border-radius": "4px",
    });

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $(".timer-background").css("background-color", "green");
        startOpacityAnimation(); 
    });

    $buttonStop.on("click", function () {
        clearInterval(interval);
        $(".timer-background").css("background-color", "lightcoral"); // light red
        clearInterval(opacityInterval); // Stop the opacity animation
        $(".timer-background").css("opacity", "1.0"); // Reset opacity
    });

    $buttonReset.on("click", function () {
        clearInterval(interval);
        clearInterval(opacityInterval);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $(".timer-background").css({"opacity": "1.0"
            ,"background-color": "grey"
        }); // reverting to grey and reseting opacity
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);
        }

        if (tens > 99) {
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("00");
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }
});