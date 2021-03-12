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
  let prepend = "";
  for (let i = 0; i < 15; i++) {
    prepend = `${prepend}${String.fromCharCode(
      Math.floor(Math.random() * 93 + 33)
    )}`;
  }
  document.getElementById("generated-password").value = `${prepend}`;
  document.getElementById("pass-span").innerHTML = "Copied!";

  return prepend;
}

function copyPassword(password) {
  GeneratePassword();
  var copyText = document.getElementById("generated-password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  // toast.success(`Copied ${password} to Clipboard`);
}

function startTime() {
  const currentDate = new Date();
  usaTime = currentDate.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  document.getElementById("header-time").innerHTML = `${
    usaTime.split(" ")[1]
  } ${usaTime.split(" ")[2]}`;
  document.getElementById("header-date").innerHTML = usaTime.split(",")[0];
  setTimeout(startTime, 1000);
}
document
  .getElementById("container")
  .addEventListener("DOMContentLoaded", startTime());
