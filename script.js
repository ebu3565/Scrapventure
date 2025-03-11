const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};


//the script added for collapse//
document.addEventListener("DOMContentLoaded", function() {
  const ctaBtn = document.querySelector(".cta-btn");
  const rideContainer = document.querySelector(".ride-container");
  const submittedMessage = document.querySelector(".submitted-message");

  ctaBtn.addEventListener("click", function() {
      rideContainer.style.opacity = 0;
      setTimeout(function() {
          rideContainer.classList.add("hidden");
          submittedMessage.classList.remove("hidden");
      }, 500); 
  });
});



//calender event listener
document.addEventListener("DOMContentLoaded", function() {
  const dateBtn = document.querySelector(".date-btn");
  const timeBtn = document.querySelector(".time-btn");
  const dateInput = document.querySelector("#date-picker");
  const timeInput = document.querySelector("#time-picker");

  // When the date button is clicked
  dateBtn.addEventListener("click", function() {
      if (dateInput.classList.contains("hidden")) {
          dateInput.classList.remove("hidden");  
      } else {
          dateInput.classList.add("hidden");  
              }
  });

  timeBtn.addEventListener("click", function() {

      if (timeInput.classList.contains("hidden")) {
          timeInput.classList.remove("hidden");
      } else {
          timeInput.classList.add("hidden"); 
      }
  });
});



