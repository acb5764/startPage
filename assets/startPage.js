function search(event) {
  var x = event.key;
  if (x == "Enter") {
    event.preventDefault();
    let text = document.getElementById("searchbar").value;
    url = "https://duckduckgo.com/?q=" + text;
    window.open(url, "_self");
  }
}

function GeneratePassword() {
  let result = "";
  // let conditions = [0, 0, 0, 0, 0]; //test for number, CAPITAL, lower, & symbol.

  for (let i = 0; i < Math.floor(Math.random() * 19 + 15); i++) {
    result = `${result}${String.fromCharCode(getRandomChar())}`;
  }

  document.getElementById("generated-password").value = `${result}`;
  document.getElementById("pass-span").innerHTML = "Copied!";
}

function getRandomChar() {
  //Math.random is insecure, so we use window.crypto
  let result = new Uint8Array(1);
  let theChar = 0;
  if (window.crypto && window.crypto.getRandomValues) {
    do {
      theChar = window.crypto.getRandomValues(result);
    } while (theChar[0] < 33 || theChar[0] > 126);
  } else return "not supported in IE"; //get a better browser bro
  return result;
}

function copyPassword() {
  GeneratePassword();
  var copyText = document.getElementById("generated-password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function startTime() {
  var countDownDate = new Date("June 30, 2024 00:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countDownTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  document.getElementById("header-time").innerHTML = countDownTime;
  const currentDate = new Date();
  usaTime = currentDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  document.getElementById("header-date").innerHTML = usaTime.split(",")[0];
  setTimeout(startTime, 1000);
}
document
  .getElementById("container")
  .addEventListener("DOMContentLoaded", startTime());
