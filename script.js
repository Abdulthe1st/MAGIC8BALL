document.getElementById("btn").addEventListener("click", shakeTheBall);
function shakeTheBall() {
  let question = document.getElementById("question").value;
  let answer = document.getElementById("output");
  let randNum = Math.random();

  if (question == "" || question == null) {
    answer.innerHTML = "Please ask a question...";
  } else if (question == "Does a magic 8 ball actually work?") {
    answer.innerHTML = "How dare you doubt me!";
  } else if (question == "Is JavaScript awesome?") {
    answer.innerHTML = "Of Course!";
  } else if (randNum <= 0.2) {
    answer.innerHTML = "Without a Doubt.";
  } else if (randNum <= 0.4) {
    answer.innerHTML = "As I see it, yes.";
  } else if (randNum <= 0.6) {
    answer.innerHTML = "Concentrate and ask again.";
  } else if (randNum <= 0.8) {
    answer.innerHTML = "Don't count on it.";
  } else if (randNum <= 1) {
    answer.innerHTML = "Outlook not so good.";
  }
}
