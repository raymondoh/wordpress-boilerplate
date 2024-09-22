// Import your main SCSS file
import "../scss/main.scss";
//import initializeSwiper from "./swiperSetup.js";
import { loadMorePostsRestAPI } from "./loadMorePostsRestAPI";

import {
  setActiveLink,
  //handleDesktopSubMenuAccessibility,
  handleMobileSubMenuAccessibility,
  mobileMenuToggle,
  handleNavigation,
} from "./headerFunctions";

import { initializeScroll } from "./scrollToTop";

document.addEventListener("DOMContentLoaded", () => {
  loadMorePostsRestAPI();
  setActiveLink("#desktop-nav");
  setActiveLink("#mobile-nav");
  //handleDesktopSubMenuAccessibility();
  //handleMobileSubMenuAccessibility();
  mobileMenuToggle();
  handleNavigation();
  initializeScroll();
  //initializeSwiper();
});
