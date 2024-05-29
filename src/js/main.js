// ===================== MOBILE TOGGLE MENU =====================
const menu = document.getElementById("menu");
const toggleMobile = document.getElementById("toggle-mobile");

const toggleMenu = () => {
   menu.classList.toggle("show");
};
toggleMobile.addEventListener("click", toggleMenu); // Make it in mobile
menu.addEventListener("click", toggleMenu); // Remove when click any navLink

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
   const nav = document.getElementById("header");
   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 120) nav.classList.add("scroll-header");
   else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// ===================== THE YEAR =====================
const theYear = document.getElementById("year");
const currentYear = new Date();

theYear.textContent = currentYear.getFullYear();
