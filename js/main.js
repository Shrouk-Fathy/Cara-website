
const nav = document.getElementsByTagName("header")[0];

window.addEventListener("scroll", function() {
    if (window.scrollY >= 20) {
        nav.style.boxShadow = "0 5px 5px rgba(0, 0, 0, .3)";
    } else {
        nav.style.boxShadow = "none";
    }
});
// --------------------------------------------------------------
const destination = document.querySelector("section:nth-of-type(9) h3");

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        destination.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

let hasBeenCalled = false;

window.addEventListener('scroll', function() {
  
    if (!hasBeenCalled && window.scrollY >= destination.offsetTop - 300) {
        printLetterByLetter(destination, "Explore our wide range of Islamic hijabs", 150);
        hasBeenCalled = true;
    }
})

// ------------------------------------------------------------------------
const section = document.querySelector(".progress-cont");
const spans = document.querySelectorAll(".progress-cont .progress span");

console.log(spans[0].getAttribute("data-width"));


window.addEventListener('scroll', function() {
    if (window.scrollY >= section.offsetTop - 250) {
        spans.forEach((span) => {
            span.style.width = "100%";
        });
    }
});
