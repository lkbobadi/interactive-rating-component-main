// Thank You Card will change after hitting submit button

var thankYouCard = document.querySelector(".thank-you");
thankYouCard.style.display = "none";

var ratingQuestion = document.querySelector(".rating-question");
ratingQuestion.style.display = "block";

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showThankYou);

function showThankYou() {
  setTimeout(() => {
    ratingQuestion.style.display = "none";
    thankYouCard.style.display = "block";
  }, 350);
}

// End of thank you card

// Looping through a list of Rating Items to add specific CSS

var listItems = document.querySelectorAll(".rate");

for (var i = 0; i < listItems.length; i++) {
  document.querySelectorAll(".rate")[i].addEventListener("click", function () {
    var currentRateButton = this;

    listItems.forEach((listItem) => {
      listItem.classList.remove("active");
      currentRateButton.classList.add("active");
    });
  });
}

// End of looping through the list
