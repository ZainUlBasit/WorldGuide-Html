// Select all country paths from the SVG map
let all_countries = document.querySelectorAll("path");

// Add event listener to each country path to log its title when clicked
all_countries.forEach((country) => {
  country.addEventListener("click", () => {
    console.log(country.getAttribute("title"));
  });
});

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Select all path elements within the MapContainer SVG
document.querySelectorAll(".MapContainer svg path").forEach((path) => {
  const tooltip = document.getElementById("tooltip");

  // Add event listener for mouse enter to display tooltip
  path.addEventListener("mouseenter", (event) => {
    const title = event.target.getAttribute("title");
    tooltip.innerText = title;
    tooltip.style.opacity = 1;
    console.log(`${event.pageX + 10}px`, `${event.pageY + 10}px`);
    tooltip.style.left = `${event.pageX - 100}px`;
    tooltip.style.top = `${event.pageY - 1450}px`;
    // console.log(tooltip.style);
  });

  // Add event listener for mouse move to update tooltip position
  path.addEventListener("mousemove", (event) => {});

  // Add event listener for mouse leave to hide tooltip
  path.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
  });
});
// Array of button data for services
const btnData = [
  { title: "Immigration", icon: "fa fa-passport" },
  { title: "Real Estate", icon: "fa fa-home" },
  {
    title: "Rent Car & Hotel & Flight",
    icon: "fa-solid fa-hotel",
  },
  { title: "Sell & Moving ​​Cars", icon: "fa fa-car" },
  { title: "World Mall", icon: "fa fa-shopping-bag" },
];

// Select the container for service buttons
const buttonContainer = document.getElementById("button-container");

// Loop through button data and create a button for each service
btnData.forEach((item) => {
  const buttonDiv = document.createElement("div");
  buttonDiv.className =
    "flex flex-col items-center justify-center bg-[#42A7DF] px-1 py-2 w-[130px] text-center text-white h-[110px] text-[1rem] shadow-md";

  const icon = document.createElement("i");
  icon.className = `text-3xl ${item.icon}`;
  icon.src = item.img;
  // icon.innerHTML = item.img;

  const title = document.createElement("p");
  title.textContent = item.title;

  buttonDiv.appendChild(icon);
  buttonDiv.appendChild(title);
  buttonContainer.appendChild(buttonDiv);
});

// Country data for creating cards
const countryDataForCards = [
  { name: "Australia", img: "./cimage/australia.jpg" },
  { name: "New Zealand", img: "./cimage/new-zealand.jpg" },
  { name: "United Kingdom", img: "./cimage/uk.jpg" },
  { name: "France", img: "./cimage/fr.jpg" },
  { name: "United States", img: "./cimage/us.jpg" },
  { name: "Canada", img: "./cimage/cn.jpg" },
  { name: "Russia", img: "./cimage/ru.jpg" },
  { name: "Germany", img: "./cimage/gr.jpg" },
  { name: "Switzerland", img: "./cimage/sw.jpg" },
  { name: "Japan", img: "./cimage/jp.jpg" },
  { name: "China", img: "./cimage/china.jpg" },
  { name: "Korea", img: "./cimage/kor.jpg" },
  { name: "Italy", img: "./cimage/it.jpg" },
  { name: "Spain", img: "./cimage/sp.jpg" },
  { name: "Denmark", img: "./cimage/dk.jpg" },
  { name: "Turkey", img: "./cimage/tr.jpeg" },
  { name: "Thailand", img: "./cimage/th.jpg" },
  { name: "Mexico", img: "./cimage/mx.jpg" },
  { name: "Pakistan", img: "./cimage/pk.jpg" },
  { name: "India", img: "./cimage/in.jpg" },
  { name: "Bangladesh", img: "./cimage/bd.jpg" },
  { name: "Emirates", img: "./cimage/uae.jpg" },
  { name: "Malaysia", img: "./cimage/my.jpg" },
  { name: "Qatar", img: "./cimage/qa.jpg" },
  { name: "Egypt", img: "./cimage/eg.jpg" },
  { name: "Saudi Arabia", img: "./cimage/sa.png" },
  { name: "Morocco", img: "./cimage/moro.jpg" },
  { name: "Hungary", img: "./cimage/hu.jpg" },
  { name: "Austria", img: "./cimage/au.jpg" },
  { name: "Maldives", img: "./cimage/mv.jpg" },
  { name: "Bosnia and Herzegovina", img: "./cimage/ba.jpg" },
  { name: "Indonesia", img: "./cimage/id.jpg" },
  { name: "South Africa", img: "./cimage/za.jpg" },
];

// Function to create and display country cards
function createCountryCards() {
  const container = document.getElementById("countryCardsContainer");

  countryDataForCards.forEach((country) => {
    // Create card container
    const card = document.createElement("div");
    card.className =
      "max-w-[360px] w-[360px] flex flex-col gap-y-2 h-[29.5vh] items-center justify-between contryCard";

    // Create image element
    const img = document.createElement("img");
    img.src = country.img;
    img.alt = country.name;
    img.className =
      "min-h-[168px] h-[168px] w-full object-cover shadow-[rgba(0,0,0,0.35)_0px_5px_15px] cursor-pointer";

    // Create name element
    const nameDiv = document.createElement("div");
    nameDiv.className =
      "bg-gradient-to-l from-[#11bed0] to-[#34a853] hover:from-[#34a853] hover:to-[#11bed0] transition-all ease-in-out duration-900 w-full h-[6vh] flex items-center justify-center gap-x-2 text-white py-3 rounded-lg select-none cursor-pointer";
    nameDiv.innerHTML = `<span>🌍</span> ${country.name}`; // Replace <FaGlobe /> with a globe emoji
    nameDiv.addEventListener("click", function () {
      window.location.href = `/country.html?country=${country.name}`;
    });
    img.addEventListener("click", function () {
      window.location.href = `/country.html?country=${country.name}`;
    });

    // Append image and name to card
    card.appendChild(img);
    card.appendChild(nameDiv);

    // Append card to container
    container.appendChild(card);
  });
}

// Call function to create and display cards
createCountryCards();

// Navigation items data
const navItems = [
  { title: "Home", link: "/" },
  { title: "Blog", link: "/blog" },
  { title: "Our Companies", link: "/our-companies" },
  { title: "About Us", link: "/about-us" },
  { title: "Policy", link: "/policy" },
  { title: "Contact", link: "/contact" },
];

// Select the footer navigation container
const footerContainer = document.getElementById("footer-navs");

// Loop through navigation items and create a navigation link for each
navItems.forEach((nv) => {
  const nameDiv = document.createElement("div");
  nameDiv.className =
    "cursor-pointer border-b-2 border-b-transparent hover:border-b-white transition-all duration-700";
  nameDiv.innerHTML = nv.title;
  nameDiv.addEventListener("click", function () {
    window.location.href = nv.link;
  });
  footerContainer.appendChild(nameDiv);
});

// Advertisement data
const adsData = [
  {
    title: "La Española Beauty Supply...",
    closed: true,
    reviews: 0,
    location: "Arusha",
    src: "/images/eyelash.jpg",
  },
  {
    title: "La Española Beauty Supply...",
    closed: true,
    reviews: 5,
    location: "Arusha",
    src: "/images/eyelash.jpg",
  },
  {
    title: "La Española Beauty Supply...",
    closed: true,
    reviews: 1,
    location: "Arusha",
    map: true,
    call: "03110312452",
    src: "/images/eyelash.jpg",
  },
  {
    title: "La Española Beauty Supply...",
    closed: true,
    reviews: 3,
    location: "Arusha",
    call: "03110312452",
    src: "/images/eyelash.jpg",
  },
];

// Select the container for advertisements
// const adsContainer = document.getElementById("main-page-ads");

// Loop through advertisement data and create an ad card for each
// adsData.forEach((ad) => {
//   const conDiv = document.createElement("div");
//   conDiv.className = "flex flex-col w-[350px] h-[52vh] ads-card";

//   const adImg = document.createElement("img");
//   adImg.src = ad.src;

//   const innerConDiv = document.createElement("div");
//   innerConDiv.className =
//     "flex flex-col w-full pt-3 border-[1px] border-gray-300 pb-4";

//   const innerTopConDiv = document.createElement("div");
//   innerTopConDiv.className =
//     "flex items-center justify-between py-1 pt-3 px-3 pb-4";

//   const innerTopLeftConDiv = document.createElement("div");
//   innerTopLeftConDiv.innerHTML = "Other";

//   const innerTopRightConDiv = document.createElement("div");
//   innerTopRightConDiv.className = "text-red-700";
//   innerTopRightConDiv.innerHTML = ad.closed ? "Closed Now" : "Open Now";
//   // Add top headings
//   innerTopConDiv.appendChild(innerTopLeftConDiv);
//   innerTopConDiv.appendChild(innerTopRightConDiv);
//   // append child
//   innerConDiv.appendChild(innerTopConDiv);

//   const titleConDiv = document.createElement("div");
//   titleConDiv.className = "text-xl font-bold pb-5 px-3";
//   titleConDiv.innerHTML = ad.title;

//   innerConDiv.appendChild(titleConDiv);

//   if (!ad.reviews) {
//     const tempConDiv = document.createElement("div");
//     tempConDiv.className =
//       "text-gray-400 border-[1px] border-gray-300 text-white px-2 py-[1.5px] text-[.8rem]";
//     tempConDiv.innerHTML = "Be the first to review!";
//     innerConDiv.appendChild(tempConDiv);
//   } else {
//     const reviewOuterRating = document.createElement("div");
//     reviewOuterRating.className = "flex";

//     const reviewRating = document.createElement("div");
//     reviewRating.className =
//       "flex gap-x-1 border-2 border-[#11bed0] w-fit justify-center items-center px-2";
//     for (let i = 0; i < ad.reviews; i++) {
//       const starImg = document.createElement("img");
//       starImg.src = "/images/star-yellow.png";
//       starImg.className = "w-[15px] h-[15px]";
//       reviewRating.appendChild(starImg);
//     }

//     const reviewRatingNo = document.createElement("div");
//     reviewRatingNo.className = "bg-[#11bed0] text-white px-2 py-[1px]";
//     reviewRatingNo.innerHTML = ad.reviews;

//     reviewOuterRating.appendChild(reviewRating);
//     reviewOuterRating.appendChild(reviewRatingNo);
//     innerConDiv.appendChild(reviewOuterRating);
//   }

//   conDiv.appendChild(adImg);
//   conDiv.appendChild(innerConDiv);

//   adsContainer.appendChild(conDiv);
// });

// Function to create a card component
function createCardComponent(ad_info) {
  // Main card container
  const card = document.createElement("div");
  card.className = "flex flex-col w-[350px] h-[52vh] ads-card";

  // Image
  const img = document.createElement("img");
  img.src = "/images/eyelash.jpg";
  img.className = "max-h-[30vh]";
  img.alt = "not found";
  card.appendChild(img);

  // Inner container
  const innerContainer = document.createElement("div");
  innerContainer.className =
    "flex flex-col w-full pt-3 border-[1px] border-gray-300 pb-4";
  card.appendChild(innerContainer);

  // Header row with "Other" and "Closed Now"
  const headerRow = document.createElement("div");
  headerRow.className = "flex items-center justify-between py-1 pt-3 px-3 pb-4";
  innerContainer.appendChild(headerRow);

  const category = document.createElement("div");
  category.textContent = "Other";
  headerRow.appendChild(category);

  const status = document.createElement("div");
  status.className = "text-red-700";
  status.textContent = "Closed Now";
  headerRow.appendChild(status);

  // Title
  const title = document.createElement("div");
  title.className = "text-xl font-bold pb-5 px-3";
  title.textContent = "La Española Beauty Supply...";
  innerContainer.appendChild(title);

  // Rating and location container
  const ratingLocationContainer = document.createElement("div");
  ratingLocationContainer.className = "flex justify-between items-center px-3";
  innerContainer.appendChild(ratingLocationContainer);

  // Rating section
  if (ad_info.reviews) {
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "flex";
    ratingLocationContainer.appendChild(ratingContainer);

    const starContainer = document.createElement("div");
    starContainer.className =
      "flex gap-x-1 border-2 border-[#11bed0] w-fit justify-center items-center px-2";
    ratingContainer.appendChild(starContainer);

    // Create 5 stars
    for (let i = 0; i < ad_info.reviews; i++) {
      const star = document.createElement("img");
      star.src = "/images/star-yellow.png";
      star.className = "w-[15px] h-[15px]";
      starContainer.appendChild(star);
    }

    // Rating score
    const ratingScore = document.createElement("div");
    ratingScore.className = "bg-[#11bed0] text-white px-2 py-[1px]";
    ratingScore.textContent = `${ad_info.reviews}.0`;
    ratingContainer.appendChild(ratingScore);
  } else {
    const coDiv = document.createElement("div");
    coDiv.className =
      "text-gray-400 border-[1px] border-gray-300 text-white px-2 py-[1.5px] text-[.8rem]";
    coDiv.innerHTML = "Be the first to review!";

    ratingLocationContainer.appendChild(coDiv);
  }

  // Location
  const locationContainer = document.createElement("div");
  locationContainer.className = "flex items-center gap-x-1";
  ratingLocationContainer.appendChild(locationContainer);

  const locationIcon = document.createElement("img");
  locationIcon.src = "/images/location.png";
  locationIcon.className = "w-[15px] h-[15px]";
  locationContainer.appendChild(locationIcon);

  const locationText = document.createElement("div");
  locationText.className = "text-[.9rem]";
  locationText.textContent = "Other";
  locationContainer.appendChild(locationText);

  // Footer with "Show Map"
  const footer = document.createElement("div");
  footer.className = `border-[1px] ${
    ad_info.map || ad_info.call ? "border-gray-300" : "border-transparent"
  } border-t-0 flex justify-center items-center w-full h-[5vh]`;
  card.appendChild(footer);

  if (ad_info.map) {
    const showMap = document.createElement("div");
    showMap.className =
      "flex gap-x-[1px] items-center justify-center py-2 h-full w-[100%] cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-700 font-[500]";
    footer.appendChild(showMap);

    const pinIcon = document.createElement("img");
    pinIcon.src = "/images/pin.png";
    pinIcon.className = "w-[18px] h-[18px]";
    showMap.appendChild(pinIcon);

    const showMapText = document.createElement("div");
    showMapText.className = "text-[1rem]";
    showMapText.textContent = "Show Map";
    showMap.appendChild(showMapText);
  }
  if (ad_info.call) {
    const showCall = document.createElement("div");
    showCall.className =
      "flex gap-x-[1px] items-center justify-center py-2 h-full w-[100%] cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-700 font-[500]";
    footer.appendChild(showCall);

    const callIcon = document.createElement("img");
    callIcon.src = "/images/phone.png";
    callIcon.className = "w-[18px] h-[18px]";
    showCall.appendChild(callIcon);

    const showCallText = document.createElement("div");
    showCallText.className = "text-[1rem]";
    showCallText.textContent = "Call";
    showCall.appendChild(showCallText);
  }

  return card;
}

// Append the card to a container in the HTML
const adsContainer = document.getElementById("main-page-ads"); // Make sure there is a div with id "card-container" in your HTML

adsData.forEach((ad) => {
  adsContainer.appendChild(createCardComponent(ad));
});
