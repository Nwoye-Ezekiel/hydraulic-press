let num = document.getElementById("number");
setTimeout(function () {
  setInterval(function () {
    num.textContent = 1 + parseInt(num.textContent);
  }, 2000);
}, 500);
