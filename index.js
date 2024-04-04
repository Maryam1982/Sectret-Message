const { hash } = window.location;
console.log(atob(hash.slice(1)));

if (hash !== "") {
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show h1").innerHTML = atob(hash.slice(1));
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#link-form").classList.remove("hide");
  document.querySelector("#message-form").classList.add("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  const inputLink = document.querySelector("#link-input");
  inputLink.value = `${window.location}#${encrypted}`;
  inputLink.select();
});
