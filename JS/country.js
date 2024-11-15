const urlParams = new URLSearchParams(window.location.search);
const country = urlParams.get("country");
document.getElementById("company-name").innerText = country;
document.getElementById("visit-company-name").innerText = `Visit ${country}`;

const quickAccess = document.getElementById("quick-access");

const quickAccessButtons = [
  {
    title: "Australia Rules",
    img: "fa-solid fa-flag",
  },
  {
    title: "History",
    img: "fa-solid fa-book",
  },
  {
    title: "Driving",
    img: "fa-solid fa-car",
  },
  {
    title: "Universities",
    img: "fa-solid fa-graduation-cap",
  },
  {
    title: "Visa + Uni Acceptance Free",
    img: "fa-solid fa-graduation-cap",
  },
  {
    title: "Tours",
    img: "fa-solid fa-suitcase",
  },
];

quickAccessButtons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = `flex items-center gap-x-2 p-2 px-5 my-2 ${
    button.title === "Australia Rules"
      ? "bg-[#FF9902] hover:bg-yellow-500"
      : button.title === "Visa + Uni Acceptance Free"
      ? "bg-[#FF675B] hover:bg-red-500"
      : "bg-[#0088CD] hover:bg-blue-500"
  } text-white rounded transition duration-300 ease-in-out py-3`;
  const imgIcon = document.createElement("i");
  imgIcon.className = `text-xl ${button.img}`;
  const title = document.createElement("span");
  title.textContent = button.title;
  buttonElement.appendChild(imgIcon);
  buttonElement.appendChild(title);
  quickAccess.appendChild(buttonElement);
});

var acc = document.getElementsByClassName("accordion");
console.log(acc);

var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (var j = 0; j < acc.length; j++) {
      if (j !== i) {
        acc[j].classList.remove("active");
        var panel = acc[j].nextElementSibling;
        panel.style.display = "none";
      }
    }
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.classList.remove("active");
    } else {
      panel.style.display = "block";
    }
  });
}

const lefttopButtons = [
  {
    title: "Australia Constitution",
    img: "fa-solid fa-building",
  },
  {
    title: "Emergency Numbers",
    img: "fa-solid fa-square-phone-flip",
  },
  {
    title: "Embassies",
    img: "fa-solid fa-building",
  },
  {
    title: "New Offers",
    img: "fa-solid fa-handshake",
  },
];

const leftTopBtns = document.getElementById("right-side-top");

lefttopButtons.forEach((button) => {
  const buttonElement = document.createElement("button");
  buttonElement.className = `flex items-center gap-x-2 p-2 px-8 ${
    button.title === "Emergency Numbers"
      ? "bg-[#FF675B] hover:bg-red-500 border-b-[5px] border-b-[#FF3324] hover:border-b-0"
      : "bg-[#0088CD] hover:bg-blue-500 border-b-[5px] border-b-[#006394] hover:border-b-0"
  } text-white rounded-lg transition duration-300 ease-in-out py-3`;
  const imgIcon = document.createElement("i");
  // imgIcon.class = button.img;
  imgIcon.className = `text-xl !text-white flex items-center ${button.img}`;
  const title = document.createElement("span");
  title.textContent = button.title;
  buttonElement.appendChild(imgIcon);
  buttonElement.appendChild(title);
  leftTopBtns.appendChild(buttonElement);
});

const citiesDataForCards = [
  { name: "Australia", img: "./cimage/australia.jpg" },
  { name: "New Zealand", img: "./cimage/new-zealand.jpg" },
  { name: "United Kingdom", img: "./cimage/uk.jpg" },
  { name: "France", img: "./cimage/fr.jpg" },
  { name: "United States", img: "./cimage/us.jpg" },
  { name: "Canada", img: "./cimage/cn.jpg" },
];
// Blog data
function createCitiesCards() {
  const container = document.getElementById("cityCardsContainer");

  citiesDataForCards.forEach((country) => {
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
      window.location.href = `/city.html?city=${country.name}`;
    });
    img.addEventListener("click", function () {
      window.location.href = `/city.html?city=${country.name}`;
    });

    // Append image and name to card
    card.appendChild(img);
    card.appendChild(nameDiv);

    // Append card to container
    container.appendChild(card);
  });
}

// Call function to create and display cards
createCitiesCards();

const AccordionWrapper = document.getElementById("accordions-wrapper");

const data = [
  {
    title: "Best Time To Go",
    icon: "fa-solid fa-calendar-days",
    id: "best-time-to-go",
    content:
      "Australia is one of the world’s biggest countries, so when to go depends entirely on where you’re going.",
  },
  {
    title: "Transportation",
    icon: "fa-solid fa-car",
    id: "transportation",
    content:
      "All of Australia’s major towns have reliable, affordable public bus networks, and there are suburban train lines in Sydney, Melbourne, Brisbane, Adelaide and Perth. Melbourne also has trams (Adelaide has one!), Sydney and Brisbane have ferries and Sydney has a light-rail line. Taxis operate Australia-wide. Opal is the smartcard ticketing system used to pay for travel on public transport in Sydney Press Here",
  },
  {
    title: "Weather",
    icon: "fa-solid fa-cloud",
    id: "weather",
    content:
      "All of Australia’s major towns have reliable, affordable public bus networks, and there are suburban train lines in Sydney, Melbourne, Brisbane, Adelaide and Perth. Melbourne also has trams (Adelaide has one!), Sydney and Brisbane have ferries and Sydney has a light-rail line. Taxis operate Australia-wide. Opal is the smartcard ticketing system used to pay for travel on public transport in Sydney Press Here",
  },
  {
    title: "Information",
    icon: "fa-solid fa-lightbulb",
    id: "information",
    content:
      "Australia’s landmass of 7,617,930 square kilometres (2,941,300 sq mi) is on the Indo-Australian Plate. … The world’s smallest continent and sixth largest country by total area, Australia—owing to its size and isolation—is often dubbed the “island continent”, and is sometimes considered the world’s largest island.",
  },
  {
    title: "The Electric",
    icon: "fa-solid fa-bolt",
    id: "the-electric",
    content:
      "Voltage Converters Mains voltage in Australia is 230V 50Hz. Travellers from most nations in Asia, Africa and Europe should have appliances that work on the same mains voltage as Australia – therefore you will not need a voltage converter. Notable exceptions to this are Japan, USA and Canada which uses 100/120V 50/60Hz. Power Adapters The plugs in Australia have two flat metal pins shaped live a “V” and some may contain a third flat pin in the centre.",
  },
  {
    title: "Language",
    icon: "fa-solid fa-language",
    id: "language",
    content:
      "Australian English has a unique accent and vocabulary. Collectively, Australians have more than 200 spoken languages. In the 2011 census, 76.8% Australian spokeEnglish at home. Mandarin is the biggest non-English dialect spoken in Australia",
  },
  {
    title: "Currency",
    icon: "fa-solid fa-money-bill",
    id: "currency",
    content:
      "The Australian dollar (sign: $; code: AUD) is the currency of the Commonwealth of Australia, including its external territories Christmas Island, Cocos (Keeling) Islands, and Norfolk Island, as well as the independent Pacific Island states of Kiribati, Nauru, Papua New Guinea, Tonga, Tuvalu, and Vanuatu. Within Australia, it is almost always abbreviated with the dollar sign ($), with A$ or AU$ sometimes used to distinguish it from other dollar-denominated currencies. It is subdivided into 100 cents.",
  },
];

// Loop through each item in the data array to dynamically create accordion elements
data.forEach((dt, index) => {
  const createAccordionItem = () => {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `radio-${dt.id}`;
    input.name = "accordion";
    input.checked = index === 0 ? true : false;

    const label = document.createElement("label");
    label.className = "item";
    label.setAttribute("for", input.id);

    const labelTitleChild = document.createElement("div");
    labelTitleChild.className = "title";

    const labelTitleWrapper = document.createElement("div");
    labelTitleWrapper.className = "flex items-center gap-x-2";

    const labelTitleIcon = document.createElement("i");
    labelTitleIcon.className = dt.icon;

    const labelTitleName = document.createElement("div");
    labelTitleName.innerHTML = dt.title;

    const labelContentChild = document.createElement("div");
    labelContentChild.className = "content";
    labelContentChild.innerHTML = dt.content;

    labelTitleWrapper.appendChild(labelTitleIcon);
    labelTitleWrapper.appendChild(labelTitleName);
    labelTitleChild.appendChild(labelTitleWrapper);
    label.appendChild(labelTitleChild);
    label.appendChild(labelContentChild);

    return { input, label };
  };

  const { input, label } = createAccordionItem();
  AccordionWrapper.appendChild(input);
  AccordionWrapper.appendChild(label);
});

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
