    // Set the date we're counting down to
    var countDownDate = new Date("July 15, 2019 15:37:25").getTime();
    // Update the count down every 1 second
    var sec = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in an element with id="demo"
            document.getElementById("timer").innerHTML = hours + "H " + minutes + "M " + seconds + "S ";
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(sec);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }

        , 1000);