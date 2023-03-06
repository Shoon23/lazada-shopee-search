const form = document.querySelector("form");
const searchInput = document.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchKey = searchInput?.value;
  if (!searchKey) return;
  window.location.replace(`/search/?searchKey=${searchKey}`);
});
