import { syllable } from "https://esm.sh/syllable@5";
document.addEventListener("DOMContentLoaded", function (event) {
  const textInput = document.getElementById("text-input");
  textInput.addEventListener("input", () => console.log(textInput.value));
});
