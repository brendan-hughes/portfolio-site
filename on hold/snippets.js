let entertext=document.querySelector(".enter-text");

let checkpass = function() {
  let pass = document.querySelector("#sign-in").value;
  if (pass === "hakunamatata") {
    entertext.classList.add("visible");
    entertext.innerHTML = "This site is still under construction! Please email me directly to get in touch.";
  }
  else {
    entertext.classList.add("visible");
    entertext.innerHTML = "Incorrect password. Please email me directly to get in touch!";
  }
}


document.querySelector('#sign-in-btn').addEventListener('click',checkpass);
