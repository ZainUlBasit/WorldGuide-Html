let all_countries = document.querySelectorAll("path");

all_countries.forEach((country) => {
  country.addEventListener("click", () => {
    console.log(country.getAttribute("title"));
  });
});
