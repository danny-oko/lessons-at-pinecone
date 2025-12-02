const text = document.getElementById("text");
const input = document.getElementById("input");
const button = document.getElementById("button");

function submit() {
  const inputValue = Number(input.value.trim());
  if (inputValue > 0 && inputValue <= 10) {
    text.textContent = "Ok";
  } else {
    text.textContent = "not valid";
  }
}
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    submit();
  }
});

button.addEventListener("click", submit);
