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

// Create the main container
const container = document.createElement("div");
container.classList.add(
  "flex",
  "items-center",
  "justify-center",
  "w-full",
  "bg-[#45505b]",
  "pt-12",
  "gap-x-3",
  "px-20",
  "text-[lightgray]",
  "font-thin",
  "text-[1rem]"
);

// Create the copyright text div
const copyrightDiv = document.createElement("div");
copyrightDiv.textContent =
  "Copyright © 2006 - 2020 BLUE DIAMOND GLOBAL GROUP Australia Pty Limited (ABN: 62 497 349 953)";
container.appendChild(copyrightDiv);

// Create the information section
const infoSection = document.createElement("div");
infoSection.classList.add("flex", "px-3", "gap-x-2");

// Helper function to create each info item
function createInfoItem(text) {
  const infoItem = document.createElement("div");
  infoItem.classList.add("flex", "items-center", "gap-x-2");

  const dot = document.createElement("div");
  dot.classList.add(
    "h-[6px]",
    "w-[6px]",
    "rounded-full",
    "border-[1px]",
    "border-white",
    "bg-white"
  );

  infoItem.appendChild(dot);
  infoItem.append(text);

  return infoItem;
}

// Add the location and phone number to info section
const locationF = createInfoItem("2000 Sydney, Australia");
const phone = createInfoItem("Tel 1800 008 555");

infoSection.appendChild(locationF);
infoSection.appendChild(phone);

// Append the info section to the main container
container.appendChild(infoSection);

const footerLast = document.getElementById("footer-last");
// Append the container to the body or a specific element in your HTML
footerLast.appendChild(container);
