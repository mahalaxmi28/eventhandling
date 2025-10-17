const button = document.getElementById("clickBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Button clicked!";
  alert("Button Clicked!");
});
