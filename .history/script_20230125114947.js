const searchBox = document.querySelector("#search-value");
const engine = document.querySelector("#engine");
const searchButton = document.querySelector("#searchBtn");
let link;

searchBox.addEventListener("input", searchEngine);
function searchEngine(e) {
  console.log(e.target.value);
  //   engine.setAttribute("href",`http://ccmixter.org/search?search_text=${e.target.value}&search_type=any&search_in=all`);
  link = `http://ccmixter.org/search?search_text=${e.target.value}&search_type=any&search_in=all`,"_blank";
}

searchButton.addEventListener("click", Navigate);
function Navigate() {
  console.log(link);
  window.open(link, "_blank");
}

// searchButton.addEventListener("click", searchEngine);
// console.log(searchBox.value);

// searchBox.addEventListener("input", function searchEngine() {
//   engine.setAttribute("href","http://ccmixter.org/search?="+searchBox.value);
// });
