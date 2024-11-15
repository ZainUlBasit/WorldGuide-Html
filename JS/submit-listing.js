const SearchByIdBtn = document.getElementById("search-by-id");
const ManualCoordBtn = document.getElementById("manual-coord");

SearchByIdBtn.addEventListener("click", function () {
  SearchByIdBtn.classList.replace("bg-gray-200", "bg-blue-500");
  SearchByIdBtn.classList.replace("!text-black", "!text-white");

  ManualCoordBtn.classList.replace("bg-blue-500", "bg-gray-200");
  ManualCoordBtn.classList.replace("!text-white", "!text-black");
});

ManualCoordBtn.addEventListener("click", function () {
  ManualCoordBtn.classList.replace("bg-gray-200", "bg-blue-500");
  ManualCoordBtn.classList.replace("text-black", "text-white");

  SearchByIdBtn.classList.replace("bg-blue-500", "bg-gray-200");
  SearchByIdBtn.classList.replace("text-black", "text-[red]");
});
