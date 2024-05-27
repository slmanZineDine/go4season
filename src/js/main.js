// ===================== MENU TOOGLE =====================
// const menu = document.getElementById("menu");
// const mobileToggle = document.getElementById("mobile-toggle");

// mobileToggle.onclick = () => {
//    menu.classList.toggle("mobile");
// };
// ===================== MOBILE TOGGLE MENU =====================
// const toggleMobile = document.getElementById("toggle-mobile");
// const asideBar = document.getElementById("aside");
// const navLink = document.getElementById("links");
// const toggleMenu = () => {
//    asideBar.classList.toggle("show");
//    toggleMobile.classList.toggle("close");
// };
// toggleMobile.addEventListener("click", toggleMenu); // Make it in mobile
// links.addEventListener("click", toggleMenu); // Remove when click any navLink

// ===================== THE YEAR =====================
const theYear = document.getElementById("year");
const currentYear = new Date();

theYear.textContent = currentYear.getFullYear();
