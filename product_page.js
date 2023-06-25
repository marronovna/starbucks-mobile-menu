function changeText(button) {
  button.innerHTML = "&nbsp&nbspAdded&nbsp";
  button.classList.add("a-clicked");

  let checkmark = document.createElement("span");
  checkmark.classList.add("checkmark");
  checkmark.innerHTML = "&nbsp✅︎";
  button.appendChild(checkmark);

  localStorage.setItem(button.id, "clicked");
}
