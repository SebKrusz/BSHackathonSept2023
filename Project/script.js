// const wrapper = document.querySelector('main');
// const yesBtn = document.querySelector('.buttondance');

// const wrapperRect = wrapper.getBoundingClientRect();
// const buttondanceRect = yesBtn.getBoundingClientRect(); // Use yesBtn instead of buttondance

// yesBtn.addEventListener('mouseover', () => {
//    const i = Math.floor(Math.random() * (wrapperRect.width - buttondanceRect.width)) + 1;
//    const j = Math.floor(Math.random() * (wrapperRect.height - buttondanceRect.height)) + 1;

//    yesBtn.style.left = i + 'px';
//    yesBtn.style.top = j + 'px';
// });

////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const customAlert = document.createElement("div");
    document.body.appendChild(customAlert);
  

    alert("You've just finished Sprint-3! You only have TWO minutes to submit it before the deadline! GO GO GO!");
  });
document.addEventListener("DOMContentLoaded", function() {
    
  const toggleButton = document.getElementById('toggle-button');
  let currentModeIndex = 0;
  const modes = [
      { name: "SUBMIT", className: "alert-message--countdown", action: Countdown },
      { name: "SUBMIT", className: "alert-message--question", action: Question },
      { name: "SUBMIT", className: "alert-message--question", action: Question2 },
      { name: "SUBMIT", className: "alert-message--question", action: Question3 },
      { name: "SUBMIT", className: "alert-message--question", action: Question4 },
      { name: "SUBMIT", className: "alert-message--question", action: Question5 },
      { name: "SUBMIT", className: "alert-message--countdown", action: Countdown2 },
      { name: "SUBMIT", className: "alert-message--countdown", action: AboutToRun },
      { name: "SUBMIT", className: "alert-message--countdown", action: Running }

  ];

  function createCustomAlert(className) {
      const customAlert = document.createElement("div");
      customAlert.id = "customAlert";
      customAlert.classList.add("custom-alert");

      const countdownText = document.createElement("div");
      countdownText.classList.add("countdown");
      countdownText.textContent = 5; 

      const alertMessage = document.createElement("div");
      alertMessage.classList.add("alert-message", className);
      alertMessage.textContent = "Error";
      alertMessage.style.display = "none"; 

      customAlert.appendChild(countdownText);
      customAlert.appendChild(alertMessage);
      document.body.appendChild(customAlert);

      return { countdownText, alertMessage };
  }
  function createCustomAlert2(className) {
    const customAlert2 = document.createElement("div");
    customAlert2.id = "customAlert";
    customAlert2.classList.add("custom-alert");

    const text = document.createElement("div");
    text.classList.add("custom-alert2");
    text.textContent = ""; 
    customAlert2.appendChild(text);
    document.body.appendChild(customAlert2);

    return { text };
}

  function toggleAction() {
      const currentMode = modes[currentModeIndex];
      currentMode.action();
      updateButtonLabel(currentMode.name);
      currentModeIndex = (currentModeIndex + 1) % modes.length; 
  }

  function updateButtonLabel(modeName) {
      toggleButton.textContent = `${modeName}`;
  }

  function Countdown() {
      const { countdownText, alertMessage } = createCustomAlert("alert-message--countdown");
      const customAlert = countdownText.parentElement;

      customAlert.style.display = "block";

      let count = 5;
      countdownText.textContent = count;

      const countdownInterval = setInterval(function () {
          if (count > 1) {
              count--;
              countdownText.textContent = count;
          } else {
              clearInterval(countdownInterval);
              countdownText.style.display = "none";
              alertMessage.style.display = "block"; 

              setTimeout(() => {
                  customAlert.style.display = "none";
              }, 2000);
          }
      }, 1000);
  }

  function Question() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
    }
  function Question2() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }

  function Question3() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really sure?";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }

  function Question4() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really, really sure? (final time i promise)";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }
  function Question5() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--question");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";
    countdownText.textContent = "Are you really, really, really, really sure? (I lied)";
    customAlert.classList.add("question-alert")

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.classList.add("question-button")

    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("question-button")

    yesButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: Yes";
    });

    noButton.addEventListener("click", function () {
        customAlert.style.display = "none";
        alertMessage.textContent = "You answered: No";
    });

    customAlert.appendChild(yesButton);
    customAlert.appendChild(noButton);
  }
  function Countdown2() {
    const { countdownText, alertMessage } = createCustomAlert("alert-message--countdown");
    const customAlert = countdownText.parentElement;

    customAlert.style.display = "block";

    let count = 5;
    countdownText.textContent = count;

    const countdownInterval = setInterval(function () {
        if (count > 1) {
            count--;
            countdownText.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownText.style.display = "none";
            alertMessage.style.display = "block"; 

            setTimeout(() => {
                customAlert.style.display = "none";
            }, 2000);
        }
    }, 1000);
  }
  function AboutToRun() {
    const { text } = createCustomAlert2("alert-message--runaway");
    const customAlert = text.parentElement;

    customAlert.style.display = "block";
    text.textContent = "Press it again, why isn't it working?";
    customAlert.classList.add("running-away-text") 
    setTimeout(() => {
        text.textContent = "ITS RUNNING"
    }, 3000);
    setTimeout(() => {
        text.textContent = "JUST CLICK IT"
    }, 10000);
    setTimeout(() => {
        text.textContent = "END THIS MADNESS"
    }, 20000);
    setTimeout(() => {
        text.textContent = "OH NO, 10 SECONDS TILL DEADLINE"
    }, 25000);
    setTimeout(() => {
        text.textContent = "5 SECONDS"
    }, 30000);
    setTimeout(() => {
        text.textContent = "YOU FAILED"
    }, 35000);
}
    
    function Running() {
        const yesBtn = document.querySelector('.button');
    
        yesBtn.addEventListener('mouseover', () => {
            const wrapper = document.querySelector('main');
            const wrapperRect = wrapper.getBoundingClientRect();
            const buttonRect = yesBtn.getBoundingClientRect();
    
            const maxX = wrapperRect.width - buttonRect.width;
            const maxY = wrapperRect.height - buttonRect.height;
    
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
    
            yesBtn.style.left = randomX + 'px';
            yesBtn.style.top = randomY + 'px';
        });
    }
    
  toggleButton.addEventListener("click", toggleAction);
});




