import { Link } from 'react-router-dom'
import { IoMailOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoLinkExternal } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { FaBehanceSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
    return(
        <div>
            <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>vCard - Personal Portfolio</title>
  {/*
    - favicon
  */}
  <link
    rel="shortcut icon"
    href="./assets/images/logo.ico"
    type="image/x-icon"
  />
  {/*
    - custom css link
  */}
  <link rel="stylesheet" href="./assets/css/style.css" />
  {/*
    - google font link
  */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  :root {\n\n  /**\n   * colors\n   */\n\n  /* gradient */\n\n  --bg-gradient-onyx: linear-gradient(\n    to bottom right, \n    hsl(240, 1%, 25%) 3%, \n    hsl(0, 0%, 19%) 97%\n  );\n  --bg-gradient-jet: linear-gradient(\n    to bottom right, \n    hsla(240, 1%, 18%, 0.251) 0%, \n    hsla(240, 2%, 11%, 0) 100%\n  ), hsl(240, 2%, 13%);\n  --bg-gradient-yellow-1: linear-gradient(\n    to bottom right, \n    hsl(45, 100%, 71%) 0%, \n    hsla(36, 100%, 69%, 0) 50%\n  );\n  --bg-gradient-yellow-2: linear-gradient(\n    135deg, \n    hsla(45, 100%, 71%, 0.251) 0%, \n    hsla(35, 100%, 68%, 0) 59.86%\n  ), hsl(240, 2%, 13%);\n  --border-gradient-onyx: linear-gradient(\n    to bottom right, \n    hsl(0, 0%, 25%) 0%, \n    hsla(0, 0%, 25%, 0) 50%\n  );\n  --text-gradient-yellow: linear-gradient(\n    to right, \n    hsl(45, 100%, 72%), \n    hsl(35, 100%, 68%)\n  );\n\n  /* solid */\n\n  --jet: hsl(0, 0%, 22%);\n  --onyx: hsl(240, 1%, 17%);\n  --eerie-black-1: hsl(240, 2%, 13%);\n  --eerie-black-2: hsl(240, 2%, 12%);\n  --smoky-black: hsl(0, 0%, 7%);\n  --white-1: hsl(0, 0%, 100%);\n  --white-2: hsl(0, 0%, 98%);\n  --orange-yellow-crayola: hsl(45, 100%, 72%);\n  --vegas-gold: hsl(45, 54%, 58%);\n  --light-gray: hsl(0, 0%, 84%);\n  --light-gray-70: hsla(0, 0%, 84%, 0.7);\n  --bittersweet-shimmer: hsl(0, 43%, 51%);\n\n  /**\n   * typography\n   */\n\n  /* font-family */\n  --ff-poppins: \'Poppins\', sans-serif;\n\n  /* font-size */\n  --fs-1: 24px;\n  --fs-2: 18px;\n  --fs-3: 17px;\n  --fs-4: 16px;\n  --fs-5: 15px;\n  --fs-6: 14px;\n  --fs-7: 13px;\n  --fs-8: 11px;\n\n  /* font-weight */\n  --fw-300: 300;\n  --fw-400: 400;\n  --fw-500: 500;\n  --fw-600: 600;\n\n  /**\n   * shadow\n   */\n  \n  --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.25);\n  --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.25);\n  --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.25);\n  --shadow-4: 0 25px 50px hsla(0, 0%, 0%, 0.15);\n  --shadow-5: 0 24px 80px hsla(0, 0%, 0%, 0.25);\n\n  /**\n   * transition\n   */\n\n  --transition-1: 0.25s ease;\n  --transition-2: 0.5s ease-in-out;\n\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #RESET\n\\*-----------------------------------*/\n\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na { text-decoration: none; }\n\nli { list-style: none; }\n\nimg, ion-icon, a, button, time, span { display: block; }\n\nbutton {\n  font: inherit;\n  background: none;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n}\n\ninput, textarea {\n  display: block;\n  width: 100%;\n  background: none;\n  font: inherit;\n}\n\n::selection {\n  background: var(--orange-yellow-crayola);\n  color: var(--smoky-black);\n}\n\n:focus { outline-color: var(--orange-yellow-crayola); }\n\nhtml { font-family: var(--ff-poppins); }\n\nbody { background: var(--smoky-black); }\n\n\n\n\n\n/*-----------------------------------*\\\n  #REUSED STYLE\n\\*-----------------------------------*/\n\n.sidebar,\narticle {\n  background: var(--eerie-black-2);\n  border: 1px solid var(--jet);\n  border-radius: 20px;\n  padding: 15px;\n  box-shadow: var(--shadow-1);\n  z-index: 1;\n}\n\n.separator {\n  width: 100%;\n  height: 1px;\n  background: var(--jet);\n  margin: 16px 0;\n}\n\n.icon-box {\n  position: relative;\n  background: var(--border-gradient-onyx);\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  color: var(--orange-yellow-crayola);\n  box-shadow: var(--shadow-1);\n  z-index: 1;\n}\n\n.icon-box::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  background: var(--eerie-black-1);\n  border-radius: inherit;\n  z-index: -1;\n}\n\n.icon-box ion-icon { --ionicon-stroke-width: 35px; }\n\narticle { display: none; }\n\narticle.active {\n  display: block;\n  animation: fade 0.5s ease backwards;\n}\n\n@keyframes fade {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.h2,\n.h3,\n.h4,\n.h5 {\n  color: var(--white-2);\n  text-transform: capitalize;\n}\n\n.h2 { font-size: var(--fs-1); }\n\n.h3 { font-size: var(--fs-2); }\n\n.h4 { font-size: var(--fs-4); }\n\n.h5 {\n  font-size: var(--fs-7);\n  font-weight: var(--fw-500);\n}\n\n.article-title {\n  position: relative;\n  padding-bottom: 7px;\n}\n\n.article-title::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 30px;\n  height: 3px;\n  background: var(--text-gradient-yellow);\n  border-radius: 3px;\n}\n\n.has-scrollbar::-webkit-scrollbar {\n  width: 5px; /* for vertical scrollbar */\n  height: 5px; /* for horizontal scrollbar */\n}\n\n.has-scrollbar::-webkit-scrollbar-track {\n  background: var(--onyx);\n  border-radius: 5px;\n}\n\n.has-scrollbar::-webkit-scrollbar-thumb {\n  background: var(--orange-yellow-crayola);\n  border-radius: 5px;\n}\n\n.has-scrollbar::-webkit-scrollbar-button { width: 20px; }\n\n.content-card {\n  position: relative;\n  background: var(--border-gradient-onyx);\n  padding: 15px;\n  padding-top: 45px;\n  border-radius: 14px;\n  box-shadow: var(--shadow-2);\n  cursor: pointer;\n  z-index: 1;\n}\n\n.content-card::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  background: var(--bg-gradient-jet);\n  border-radius: inherit;\n  z-index: -1;\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #MAIN\n\\*-----------------------------------*/\n\nmain {\n  margin: 15px 12px;\n  margin-bottom: 75px;\n  min-width: 259px;\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #SIDEBAR\n\\*-----------------------------------*/\n\n.sidebar {\n  margin-bottom: 15px;\n  max-height: 112px;\n  overflow: hidden;\n  transition: var(--transition-2);\n}\n\n.sidebar.active { max-height: 405px; }\n\n.sidebar-info {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 15px;\n}\n\n.avatar-box {\n  background: var(--bg-gradient-onyx);\n  border-radius: 20px;\n}\n\n.info-content .name {\n  color: var(--white-2);\n  font-size: var(--fs-3);\n  font-weight: var(--fw-500);\n  letter-spacing: -0.25px;\n  margin-bottom: 10px;\n}\n\n.info-content .title {\n  color: var(--white-1);\n  background: var(--onyx);\n  font-size: var(--fs-8);\n  font-weight: var(--fw-300);\n  width: max-content;\n  padding: 3px 12px;\n  border-radius: 8px;\n}\n\n.info_more-btn {\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  border-radius: 0 15px;\n  font-size: 13px;\n  color: var(--orange-yellow-crayola);\n  background: var(--border-gradient-onyx);\n  padding: 10px;\n  box-shadow: var(--shadow-2);\n  transition: var(--transition-1);\n  z-index: 1;\n}\n\n.info_more-btn::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  border-radius: inherit;\n  background: var(--bg-gradient-jet);\n  transition: var(--transition-1);\n  z-index: -1;\n}\n\n.info_more-btn:hover,\n.info_more-btn:focus { background: var(--bg-gradient-yellow-1); }\n\n.info_more-btn:hover::before,\n.info_more-btn:focus::before { background: var(--bg-gradient-yellow-2); }\n\n.info_more-btn span { display: none; }\n\n.sidebar-info_more {\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--transition-2);\n}\n\n.sidebar.active .sidebar-info_more {\n  opacity: 1;\n  visibility: visible;\n}\n\n.contacts-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.contact-item {\n  min-width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.contact-info {\n  max-width: calc(100% - 46px);\n  width: calc(100% - 46px);\n}\n\n.contact-title {\n  color: var(--light-gray-70);\n  font-size: var(--fs-8);\n  text-transform: uppercase;\n  margin-bottom: 2px;\n}\n\n.contact-info :is(.contact-link, time, address) {\n  color: var(--white-2);\n  font-size: var(--fs-7);\n}\n\n.contact-info address { font-style: normal; }\n\n.social-list {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 15px;\n  padding-bottom: 4px;\n  padding-left: 7px;\n}\n\n.social-item .social-link {\n  color: var(--light-gray-70);\n  font-size: 18px;\n}\n\n\n.social-item .social-link:hover { color: var(--light-gray); }\n\n\n\n\n\n/*-----------------------------------*\\\n  #NAVBAR\n\\*-----------------------------------*/\n\n.navbar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: hsla(240, 1%, 17%, 0.75);\n  backdrop-filter: blur(10px);\n  border: 1px solid var(--jet);\n  border-radius: 12px 12px 0 0;\n  box-shadow: var(--shadow-2);\n  z-index: 5;\n}\n\n.navbar-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.navbar-link {\n  color: var(--light-gray);\n  font-size: var(--fs-8);\n  padding: 20px 7px;\n  transition: color var(--transition-1);\n}\n\n.navbar-link:hover,\n.navbar-link:focus { color: var(--light-gray-70); }\n\n.navbar-link.active { color: var(--orange-yellow-crayola); }\n\n\n\n\n\n/*-----------------------------------*\\\n  #ABOUT\n\\*-----------------------------------*/\n\n.about .article-title { margin-bottom: 15px; }\n\n.about-text {\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n  line-height: 1.6;\n}\n\n.about-text p { margin-bottom: 15px; }\n\n\n\n/**\n * #service \n */\n\n.service { margin-bottom: 35px; }\n\n.service-title { margin-bottom: 20px; }\n\n.service-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n\n.service-item {\n  position: relative;\n  background: var(--border-gradient-onyx);\n  padding: 20px;\n  border-radius: 14px;\n  box-shadow: var(--shadow-2);\n  z-index: 1;\n}\n\n.service-item::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  background: var(--bg-gradient-jet);\n  border-radius: inherit;\n  z-index: -1;\n}\n\n.service-icon-box { margin-bottom: 10px; }\n\n.service-icon-box img { margin: auto; }\n\n.service-content-box { text-align: center; }\n\n.service-item-title { margin-bottom: 7px; }\n\n.service-item-text {\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-3);\n  line-height: 1.6;\n}\n\n\n/**\n * #testimonials \n */\n\n.testimonials { margin-bottom: 30px; }\n\n.testimonials-title { margin-bottom: 20px; }\n\n.testimonials-list {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 15px;\n  margin: 0 -15px;\n  padding: 25px 15px;\n  padding-bottom: 35px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n}\n\n.testimonials-item {\n  min-width: 100%;\n  scroll-snap-align: center;\n}\n\n.testimonials-avatar-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(15px, -25px);\n  background: var(--bg-gradient-onyx);\n  border-radius: 14px;\n  box-shadow: var(--shadow-1);\n}\n\n.testimonials-item-title { margin-bottom: 7px; }\n\n.testimonials-text {\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n  line-height: 1.6;\n  display: -webkit-box;\n  line-clamp: 4;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n\n/**\n * #testimonials-modal\n */\n\n.modal-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  z-index: 20;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.modal-container::-webkit-scrollbar { display: none; }\n\n.modal-container.active {\n  pointer-events: all;\n  visibility: visible;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background: hsl(0, 0%, 5%);\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  z-index: 1;\n  transition: var(--transition-1);\n}\n\n.overlay.active {\n  opacity: 0.8;\n  visibility: visible;\n  pointer-events: all;\n}\n\n.testimonials-modal {\n  background: var(--eerie-black-2);\n  position: relative;\n  padding: 15px;\n  margin: 15px 12px;\n  border: 1px solid var(--jet);\n  border-radius: 14px;\n  box-shadow: var(--shadow-5);\n  transform: scale(1.2);\n  opacity: 0;\n  transition: var(--transition-1);\n  z-index: 2;\n}\n\n.modal-container.active .testimonials-modal {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.modal-close-btn {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  background: var(--onyx);\n  border-radius: 8px;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--white-2);\n  font-size: 18px;\n  opacity: 0.7;\n}\n\n.modal-close-btn:hover,\n.modal-close-btn:focus { opacity: 1; }\n\n.modal-close-btn ion-icon { --ionicon-stroke-width: 50px; }\n\n.modal-avatar-box {\n  background: var(--bg-gradient-onyx);\n  width: max-content;\n  border-radius: 14px;\n  margin-bottom: 15px;\n  box-shadow: var(--shadow-2);\n}\n\n.modal-img-wrapper > img { display: none; }\n\n.modal-title { margin-bottom: 4px; }\n\n.modal-content time {\n  font-size: var(--fs-6);\n  color: var(--light-gray-70);\n  font-weight: var(--fw-300);\n  margin-bottom: 10px;\n}\n\n.modal-content p {\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n  line-height: 1.6;\n}\n\n\n/**\n * #clients \n */\n\n.clients { margin-bottom: 15px; }\n\n.clients-list {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 15px;\n  margin: 0 -15px;\n  padding: 25px;\n  padding-bottom: 25px;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n  scroll-padding-inline: 25px;\n}\n\n.clients-item {\n  min-width: 50%;\n  scroll-snap-align: start;\n}\n\n.clients-item img {\n  width: 100%;\n  filter: grayscale(1);\n  transition: var(--transition-1);\n}\n\n.clients-item img:hover { filter: grayscale(0); }\n\n\n\n\n\n/*-----------------------------------*\\\n  #RESUME\n\\*-----------------------------------*/\n\n.article-title { margin-bottom: 30px; }\n\n\n/**\n * education and experience \n */\n\n.timeline { margin-bottom: 30px; }\n\n.timeline .title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 25px;\n}\n\n.timeline-list {\n  font-size: var(--fs-6);\n  margin-left: 45px;\n}\n\n.timeline-item { position: relative; }\n\n.timeline-item:not(:last-child) { margin-bottom: 20px; }\n\n.timeline-item-title {\n  font-size: var(--fs-6);\n  line-height: 1.3;\n  margin-bottom: 7px;\n}\n\n.timeline-list span {\n  color: var(--vegas-gold);\n  font-weight: var(--fw-400);\n  line-height: 1.6;\n}\n\n.timeline-item:not(:last-child)::before {\n  content: "";\n  position: absolute;\n  top: -25px;\n  left: -30px;\n  width: 1px;\n  height: calc(100% + 50px);\n  background: var(--jet);\n}\n\n.timeline-item::after {\n  content: "";\n  position: absolute;\n  top: 5px;\n  left: -33px;\n  height: 6px;\n  width: 6px;\n  background: var(--text-gradient-yellow);\n  border-radius: 50%;\n  box-shadow: 0 0 0 4px var(--jet);\n}\n\n.timeline-text {\n  color: var(--light-gray);\n  font-weight: var(--fw-300);\n  line-height: 1.6;\n}\n\n\n/**\n * skills \n */\n\n.skills-title { margin-bottom: 20px; }\n\n.skills-list { padding: 20px; }\n\n\n.skills-item:not(:last-child) { margin-bottom: 15px; }\n\n.skill .title-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n\n.skill .title-wrapper data {\n  color: var(--light-gray);\n  font-size: var(--fs-7);\n  font-weight: var(--fw-300);\n}\n\n.skill-progress-bg {\n  background: var(--jet);\n  width: 100%;\n  height: 8px;\n  border-radius: 10px;\n}\n\n.skill-progress-fill {\n  background: var(--text-gradient-yellow);\n  height: 100%;\n  border-radius: inherit;\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #PORTFOLIO\n\\*-----------------------------------*/\n\n.filter-list { display: none; }\n\n.filter-select-box {\n  position: relative;\n  margin-bottom: 25px;\n}\n\n.filter-select {\n  background: var(--eerie-black-2);\n  color: var(--light-gray);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--jet);\n  border-radius: 14px;\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n}\n\n.filter-select.active .select-icon { transform: rotate(0.5turn); }\n\n.select-list {\n  background: var(--eerie-black-2);\n  position: absolute;\n  top: calc(100% + 6px);\n  width: 100%;\n  padding: 6px;\n  border: 1px solid var(--jet);\n  border-radius: 14px;\n  z-index: 2;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transition: 0.15s ease-in-out;\n}\n\n.filter-select.active + .select-list {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: all;\n}\n\n.select-item button {\n  background: var(--eerie-black-2);\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n  text-transform: capitalize;\n  width: 100%;\n  padding: 8px 10px;\n  border-radius: 8px;\n}\n\n.select-item button:hover { --eerie-black-2: hsl(240, 2%, 20%); }\n\n.project-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 30px;\n  margin-bottom: 10px;\n}\n\n.project-item { display: none; }\n\n.project-item.active {\n  display: block;\n  animation: scaleUp 0.25s ease forwards;\n}\n\n@keyframes scaleUp {\n  0% { transform: scale(0.5); }\n  100% { transform: scale(1); }\n}\n\n.project-item > a { width: 100%; }\n\n.project-img {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  border-radius: 16px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.project-img::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  z-index: 1;\n  transition: var(--transition-1);\n}\n\n.project-item > a:hover .project-img::before { background: hsla(0, 0%, 0%, 0.5); }\n\n.project-item-icon-box {\n  --scale: 0.8;\n\n  background: var(--jet);\n  color: var(--orange-yellow-crayola);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(var(--scale));\n  font-size: 20px;\n  padding: 18px;\n  border-radius: 12px;\n  opacity: 0;\n  z-index: 1;\n  transition: var(--transition-1);\n}\n\n.project-item > a:hover .project-item-icon-box {\n  --scale: 1;\n  opacity: 1;\n}\n\n.project-item-icon-box ion-icon { --ionicon-stroke-width: 50px; }\n\n.project-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition-1);\n}\n\n.project-item > a:hover img { transform: scale(1.1); }\n\n.project-title,\n.project-category { margin-left: 10px; }\n\n.project-title {\n  color: var(--white-2);\n  font-size: var(--fs-5);\n  font-weight: var(--fw-400);\n  text-transform: capitalize;\n  line-height: 1.3;\n}\n\n.project-category {\n  color: var(--light-gray-70);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #BLOG\n\\*-----------------------------------*/\n\n.blog-posts { margin-bottom: 10px; }\n\n.blog-posts-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n\n.blog-post-item > a {\n  position: relative;\n  background: var(--border-gradient-onyx);\n  height: 100%;\n  box-shadow: var(--shadow-4);\n  border-radius: 16px;\n  z-index: 1;\n}\n\n.blog-post-item > a::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  border-radius: inherit;\n  background: var(--eerie-black-1);\n  z-index: -1;\n}\n\n.blog-banner-box {\n  width: 100%;\n  height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n\n.blog-banner-box img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition-1);\n}\n\n.blog-post-item > a:hover .blog-banner-box img { transform: scale(1.1); }\n\n.blog-content { padding: 15px; }\n\n.blog-meta {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 10px;\n}\n\n.blog-meta :is(.blog-category, time) {\n  color: var(--light-gray-70);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n}\n\n.blog-meta .dot {\n  background: var(--light-gray-70);\n  width: 4px;\n  height: 4px;\n  border-radius: 4px;\n}\n\n.blog-item-title {\n  margin-bottom: 10px;\n  line-height: 1.3;\n  transition: var(--transition-1);\n}\n\n.blog-post-item > a:hover .blog-item-title { color: var(--orange-yellow-crayola); }\n\n.blog-text {\n  color: var(--light-gray);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-300);\n  line-height: 1.6;\n}\n\n\n\n\n\n/*-----------------------------------*\\\n  #CONTACT\n\\*-----------------------------------*/\n\n.mapbox {\n  position: relative;\n  height: 250px;\n  width: 100%;\n  border-radius: 16px;\n  margin-bottom: 30px;\n  border: 1px solid var(--jet);\n  overflow: hidden;\n}\n\n.mapbox figure { height: 100%; }\n\n.mapbox iframe {\n  width: 100%;\n  height: 100%;\n  border: none;\n  filter: grayscale(1) invert(1);\n}\n\n.contact-form { margin-bottom: 10px; }\n\n.form-title { margin-bottom: 20px; }\n\n.input-wrapper {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 25px;\n  margin-bottom: 25px;\n}\n\n.form-input {\n  color: var(--white-2);\n  font-size: var(--fs-6);\n  font-weight: var(--fw-400);\n  padding: 13px 20px;\n  border: 1px solid var(--jet);\n  border-radius: 14px;\n  outline: none;\n}\n\n.form-input::placeholder { font-weight: var(--fw-500); }\n\n.form-input:focus { border-color: var(--orange-yellow-crayola); }\n\ntextarea.form-input {\n  min-height: 100px;\n  height: 120px;\n  max-height: 200px;\n  resize: vertical;\n  margin-bottom: 25px;\n}\n\ntextarea.form-input::-webkit-resizer { display: none; }\n\n.form-input:focus:invalid { border-color: var(--bittersweet-shimmer); }\n\n.form-btn {\n  position: relative;\n  width: 100%;\n  background: var(--border-gradient-onyx);\n  color: var(--orange-yellow-crayola);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 20px;\n  border-radius: 14px;\n  font-size: var(--fs-6);\n  text-transform: capitalize;\n  box-shadow: var(--shadow-3);\n  z-index: 1;\n  transition: var(--transition-1);\n}\n\n.form-btn::before {\n  content: "";\n  position: absolute;\n  inset: 1px;\n  background: var(--bg-gradient-jet);\n  border-radius: inherit;\n  z-index: -1;\n  transition: var(--transition-1);\n}\n\n.form-btn ion-icon { font-size: 16px; }\n\n.form-btn:hover { background: var(--bg-gradient-yellow-1); }\n\n.form-btn:hover::before { background: var(--bg-gradient-yellow-2); }\n\n.form-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n.form-btn:disabled:hover { background: var(--border-gradient-onyx); }\n\n.form-btn:disabled:hover::before { background: var(--bg-gradient-jet); }\n\n\n\n\n\n/*-----------------------------------*\\\n  #RESPONSIVE\n\\*-----------------------------------*/\n\n/**\n * responsive larger than 450px screen\n */\n\n@media (min-width: 450px) {\n\n  /**\n   * client\n   */\n\n  .clients-item { min-width: calc(33.33% - 10px); }\n\n\n\n  /**\n   * #PORTFOLIO, BLOG \n   */\n\n  .project-img,\n  .blog-banner-box { height: auto; }\n\n}\n\n\n\n\n\n/**\n * responsive larger than 580px screen\n */\n\n@media (min-width: 580px) {\n\n  /**\n   * CUSTOM PROPERTY\n   */\n\n  :root {\n\n    /**\n     * typography\n     */\n\n    --fs-1: 32px;\n    --fs-2: 24px;\n    --fs-3: 26px;\n    --fs-4: 18px;\n    --fs-6: 15px;\n    --fs-7: 15px;\n    --fs-8: 12px;\n\n  }\n\n\n\n  /**\n   * #REUSED STYLE\n   */\n\n  .sidebar, article {\n    width: 520px;\n    margin-inline: auto;\n    padding: 30px;\n  }\n\n  .article-title {\n    font-weight: var(--fw-600);\n    padding-bottom: 15px;\n  }\n\n  .article-title::after {\n    width: 40px;\n    height: 5px;\n  }\n\n  .icon-box {\n    width: 48px;\n    height: 48px;\n    border-radius: 12px;\n    font-size: 18px;\n  }\n\n\n\n  /**\n   * #MAIN\n   */\n\n  main {\n    margin-top: 60px;\n    margin-bottom: 100px;\n  }\n\n\n\n  /**\n   * #SIDEBAR\n   */\n\n  .sidebar {\n    max-height: 180px;\n    margin-bottom: 30px;\n  }\n\n  .sidebar.active { max-height: 584px; }\n\n  .sidebar-info { gap: 25px; }\n\n  .avatar-box { border-radius: 30px; }\n\n  .avatar-box img { width: 120px; }\n\n  .info-content .name { margin-bottom: 15px; }\n\n  .info-content .title { padding: 5px 18px; }\n\n  .info_more-btn {\n    top: -30px;\n    right: -30px;\n    padding: 10px 15px;\n  }\n\n  .info_more-btn span {\n    display: block;\n    font-size: var(--fs-8);\n  }\n\n  .info_more-btn ion-icon { display: none; }\n\n  .separator { margin: 32px 0; }\n\n  .contacts-list { gap: 20px; }\n\n  .contact-info {\n    max-width: calc(100% - 64px);\n    width: calc(100% - 64px);\n  }\n\n\n\n  /**\n   * #NAVBAR\n   */\n\n  .navbar { border-radius: 20px 20px 0 0; }\n\n  .navbar-list { gap: 20px; }\n\n  .navbar-link { --fs-8: 14px; }\n\n\n\n  /**\n   * #ABOUT\n   */\n\n  .about .article-title { margin-bottom: 20px; }\n\n  .about-text { margin-bottom: 40px; }\n\n  /* service */\n\n  .service-item {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 18px;\n    padding: 30px;\n  }\n\n  .service-icon-box {\n    margin-bottom: 0;\n    margin-top: 5px;\n  }\n\n  .service-content-box { text-align: left; }\n\n  /* testimonials */\n\n  .testimonials-title { margin-bottom: 25px; }\n\n  .testimonials-list {\n    gap: 30px;\n    margin: 0 -30px;\n    padding: 30px;\n    padding-bottom: 35px;\n  }\n\n  .content-card {\n    padding: 30px;\n    padding-top: 25px;\n  }\n\n  .testimonials-avatar-box {\n    transform: translate(30px, -30px);\n    border-radius: 20px;\n  }\n\n  .testimonials-avatar-box img { width: 80px; }\n\n  .testimonials-item-title {\n    margin-bottom: 10px;\n    margin-left: 95px;\n  }\n\n  .testimonials-text {\n    line-clamp: 2;\n    -webkit-line-clamp: 2;\n  }\n\n  /* testimonials modal */\n\n  .modal-container { padding: 20px; }\n\n  .testimonials-modal {\n    display: flex;\n    justify-content: flex-start;\n    align-items: stretch;\n    gap: 25px;\n    padding: 30px;\n    border-radius: 20px;\n  }\n\n  .modal-img-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .modal-avatar-box {\n    border-radius: 18px;\n    margin-bottom: 0;\n  }\n\n  .modal-avatar-box img { width: 65px; }\n\n  .modal-img-wrapper > img {\n    display: block;\n    flex-grow: 1;\n    width: 35px;\n  }\n\n  /* clients */\n\n  .clients-list {\n    gap: 50px;\n    margin: 0 -30px;\n    padding: 45px;\n    scroll-padding-inline: 45px;\n  }\n\n  .clients-item { min-width: calc(33.33% - 35px); }\n\n\n\n  /**\n   * #RESUME\n   */\n\n  .timeline-list { margin-left: 65px; }\n\n  .timeline-item:not(:last-child)::before { left: -40px; }\n\n  .timeline-item::after {\n    height: 8px;\n    width: 8px;\n    left: -43px;\n  }\n\n  .skills-item:not(:last-child) { margin-bottom: 25px; }\n\n\n\n  /**\n   * #PORTFOLIO, BLOG\n   */\n\n  .project-img, .blog-banner-box { border-radius: 16px; }\n\n  .blog-posts-list { gap: 30px; }\n\n  .blog-content { padding: 25px; }\n\n\n\n  /**\n   * #CONTACT\n   */\n\n  .mapbox {\n    height: 380px;\n    border-radius: 18px;\n  }\n\n  .input-wrapper {\n    gap: 30px;\n    margin-bottom: 30px;\n  }\n\n  .form-input { padding: 15px 20px; }\n\n  textarea.form-input { margin-bottom: 30px; }\n\n  .form-btn {\n    --fs-6: 16px;\n    padding: 16px 20px;\n  }\n\n  .form-btn ion-icon { font-size: 18px; }\n\n}\n\n\n\n\n\n/**\n * responsive larger than 768px screen\n */\n\n@media (min-width: 768px) {\n\n  /**\n   * REUSED STYLE\n   */\n\n  .sidebar, article { width: 700px; }\n\n  .has-scrollbar::-webkit-scrollbar-button { width: 100px; }\n\n\n\n  /**\n   * SIDEBAR\n   */\n\n  .contacts-list {\n    grid-template-columns: 1fr 1fr;\n    gap: 30px 15px;\n  }\n\n\n\n  /**\n   * NAVBAR\n   */\n\n  .navbar-link { --fs-8: 15px; }\n\n\n\n  /**\n   * ABOUT\n   */\n\n  /* testimonials modal */\n\n  .testimonials-modal {\n    gap: 35px;\n    max-width: 680px;\n  }\n\n  .modal-avatar-box img { width: 80px; }\n\n\n\n  /**\n   * PORTFOLIO\n   */\n\n  .article-title { padding-bottom: 20px; }\n\n  .filter-select-box { display: none; }\n\n  .filter-list {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 25px;\n    padding-left: 5px;\n    margin-bottom: 30px;\n  }\n\n  .filter-item button {\n    color: var(--light-gray);\n    font-size: var(--fs-5);\n    transition: var(--transition-1);\n  }\n\n  .filter-item button:hover { color: var(--light-gray-70); }\n\n  .filter-item button.active { color: var(--orange-yellow-crayola); }\n\n  /* portfolio and blog grid */\n\n  .project-list, .blog-posts-list { grid-template-columns: 1fr 1fr; }\n\n\n\n  /**\n   * CONTACT\n   */\n\n  .input-wrapper { grid-template-columns: 1fr 1fr; }\n\n  .form-btn {\n    width: max-content;\n    margin-left: auto;\n  }\n  \n}\n\n\n\n\n\n/**\n * responsive larger than 1024px screen\n */\n\n@media (min-width: 1024px) {\n\n  /**\n   * CUSTOM PROPERTY\n   */\n\n  :root {\n\n    /**\n    * shadow\n    */\n\n    --shadow-1: -4px 8px 24px hsla(0, 0%, 0%, 0.125);\n    --shadow-2: 0 16px 30px hsla(0, 0%, 0%, 0.125);\n    --shadow-3: 0 16px 40px hsla(0, 0%, 0%, 0.125);\n\n  }\n\n\n\n  /**\n   * REUSED STYLE\n   */\n\n  .sidebar, article {\n    width: 950px;\n    box-shadow: var(--shadow-5);\n  }\n\n\n\n  /**\n   * MAIN \n   */\n\n  main { margin-bottom: 60px; }\n\n  .main-content {\n    position: relative;\n    width: max-content;\n    margin: auto;\n  }\n\n\n\n  /**\n   * NAVBAR\n   */\n\n  .navbar {\n    position: absolute;\n    bottom: auto;\n    top: 0;\n    left: auto;\n    right: 0;\n    width: max-content;\n    border-radius: 0 20px;\n    padding: 0 20px;\n    box-shadow: none;\n  }\n\n  .navbar-list {\n    gap: 30px;\n    padding: 0 20px;\n  }\n\n  .navbar-link { font-weight: var(--fw-500); }\n\n\n\n  /**\n   * ABOUT\n   */\n\n  /* service */\n\n  .service-list {\n    grid-template-columns: 1fr 1fr;\n    gap: 20px 25px;\n  }\n\n  /* testimonials */\n\n  .testimonials-item { min-width: calc(50% - 15px); }\n\n  /* clients */\n\n  .clients-item { min-width: calc(25% - 38px); }\n\n\n\n  /**\n   * PORTFOLIO\n   */\n\n  .project-list { grid-template-columns: repeat(3, 1fr); }\n\n\n\n  /**\n   * BLOG\n   */\n\n  .blog-banner-box { height: 230px; }\n\n}\n\n\n\n\n\n/**\n * responsive larger than 1250px screen\n */\n\n@media (min-width: 1250px) {\n\n  /**\n   * RESET\n   */\n\n  body::-webkit-scrollbar { width: 20px; }\n\n  body::-webkit-scrollbar-track { background: var(--smoky-black); }\n\n  body::-webkit-scrollbar-thumb {\n    border: 5px solid var(--smoky-black);\n    background: hsla(0, 0%, 100%, 0.1);\n    border-radius: 20px;\n    box-shadow: inset 1px 1px 0 hsla(0, 0%, 100%, 0.11),\n                inset -1px -1px 0 hsla(0, 0%, 100%, 0.11);\n  }\n\n  body::-webkit-scrollbar-thumb:hover { background: hsla(0, 0%, 100%, 0.15); }\n\n  body::-webkit-scrollbar-button { height: 60px; }\n\n\n\n  /**\n   * REUSED STYLE\n   */\n\n  .sidebar, article { width: auto; }\n\n  article { min-height: 100%; }\n\n\n\n  /**\n   * MAIN\n   */\n\n  main {\n    max-width: 1200px;\n    margin-inline: auto;\n    display: flex;\n    justify-content: center;\n    align-items: stretch;\n    gap: 25px;\n  }\n\n  .main-content {\n    min-width: 75%;\n    width: 75%;\n    margin: 0;\n  }\n\n\n\n  /**\n   * SIDEBAR\n   */\n\n  .sidebar {\n    position: sticky;\n    top: 60px;\n    max-height: max-content;\n    height: 100%;\n    margin-bottom: 0;\n    padding-top: 60px;\n    z-index: 1;\n  }\n\n  .sidebar-info { flex-direction: column; }\n\n  .avatar-box img { width: 150px; }\n\n  .info-content .name {\n    white-space: nowrap;\n    text-align: center;\n  }\n\n  .info-content .title { margin: auto; }\n\n  .info_more-btn { display: none; }\n\n  .sidebar-info_more {\n    opacity: 1;\n    visibility: visible;\n  }\n\n  .contacts-list { grid-template-columns: 1fr; }\n\n  .contact-info :is(.contact-link) {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .contact-info :is(.contact-link, time, address) {\n    --fs-7: 14px;\n    font-weight: var(--fw-300);\n  }\n\n  .separator:last-of-type {\n    margin: 15px 0;\n    opacity: 0;\n  }\n\n  .social-list { justify-content: center; }\n\n\n\n  /**\n\t * RESUME\n\t */\n\n  .timeline-text { max-width: 700px; }\n\n}\n'
    }}
  />
  <main>
    {/*
- #SIDEBAR
    */}
      <aside className="sidebar" data-sidebar="">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img className='rounded-full'
            src="https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg"
            border-radius= {0.125}
            alt="Richard hanrick"
            width={80}
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Saurav Bag
          </h1>
          <p className="title">Web Full-Stack Developer</p>
        </div>
        <a target="_blank" href="https://drive.google.com/file/d/1nVNFW9V63upl_YZuHbcZ4-hN3xq-SLDk/view?usp=sharing"  rel="noreferrer">
        <button type="button" className=" flex align-center py-2 px-3  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border
        border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
        dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <FiDownload className="mr-2 text-xl" />Resume 
        </button>
       </a>

        <button className="info_more-btn" data-sidebar-btn="">
          <span>Show Contacts</span>
          <ion-icon name="chevron-down" />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
            <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:sauravbag101@gmail.com" className="contact-link">
                sauravbag101@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
            <CiMobile3 />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91 6204060662" className="contact-link">
                 (+91) 6204060662
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
            <FaGithub />
            </div>
            <div className="contact-info">
              <p className="contact-title">Github</p>
              {/* <time dateTime="https://github.com/sauravbag101">https://github.com/sauravbag101</time> */}
              <a href="https://github.com/sauravbag101" className="contact-link">
              https://github.com/sauravbag101
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
            <CiLocationArrow1 />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Delhi, India</address>
            </div>
          </li>
        </ul>
        <section className='flex'>
          <a href="https://www.behance.net/sauravbag101" target="_blank" rel="noopener noreferrer ">
        <FaBehanceSquare className=' text-3xl mt-5 mr-3 text-white'/></a>
        <a href="https://www.linkedin.com/in/saurav-bag-0a302b203/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='text-3xl mt-5 mr-3 text-white' /></a>
        </section>
        <div className="separator" />
        {/* <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
        </ul> */}
      </div>
    </aside>
    {/*
- #main-content
    */}
    <div className="main-content">
      {/*
  - #NAVBAR
*/}
      <nav className="navbar">
      <ul className="navbar-list">
          <li className="navbar-item">
            <button className="navbar-link  active" data-nav-link="">
            <Link to="/" className='navbar-link ' >About</Link>
           

             
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" data-nav-link="">
              
           <Link to="/resume" className='navbar-link ' >Resume</Link>

              
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" data-nav-link="">
              
           <Link to="/portfolio" className='navbar-link active' >Portfolio</Link>

            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" data-nav-link="">
             
           <Link to="/blog" className='navbar-link' > Blog</Link>

            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link" data-nav-link="">
              
           <Link to="/contact" className='navbar-link' >Contact</Link>

            </button>
          </li>
        </ul>
      </nav>
      {/*
  - #ABOUT
*/}
     
      {/*
  - #RESUME
*/}
      
      {/*
  - #PORTFOLIO
*/}
     
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>
        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item pt-4">
              <button className="active" data-filter-btn="">
                All
              </button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Web design</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Applications</button>
            </li>
            <li className="filter-item">
              <button data-filter-btn="">Web development</button>
            </li>
          </ul>
          <div className="filter-select-box">
            <button className="filter-select" data-select="">
              <div className="select-value" data-selecct-value="">
                Select category
              </div>
              <div className="select-icon">
                <ion-icon name="chevron-down" />
              </div>
            </button>
            <ul className="select-list">
              <li className="select-item">
                <button data-select-item="">All</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Web design</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Applications</button>
              </li>
              <li className="select-item">
                <button data-select-item="">Web development</button>
              </li>
            </ul>
          </div>
          <ul className="project-list">
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://gemini-ochre-phi.vercel.app/"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/11-Oct-2022-1200x600_SoHY84J.jpg"
                     height="181px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Chat AI</h3>
                <p className="project-category">Chat AI in React.Js</p>
              </a>
            </li>
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://sauravbag101.github.io/React_project/"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://fontgenerator.cc/img/Font_Generator_Featured_Image.png"
                     height="181px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Font Calculator</h3>
                <p className="project-category">Font editor in React.Js</p>
              </a>
            </li>
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://www.figma.com/proto/o6mnC2B1bTh9p0O0mMmjQW/Modern-Fitness-App?page-id=0%3A1&type=design&node-id=108-22&viewport=340%2C-810%2C0.55&t=UiDprhEnXnMz71yT-1&scaling=scale-down&starting-point-node-id=31%3A54"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://www.code-brew.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-02-at-7.07.01-PM.jpeg"
                     height="181px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Farming App</h3>
                <p className="project-category">Mobile Prototype in figma</p>
              </a>
            </li>
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://www.figma.com/proto/8pB4Q8isV4sgYwponMKFmh/KrishiTantrik?page-id=0%3A1&node-id=1-3&node-type=canvas&viewport=568%2C239%2C0.14&t=QAtY6Un3xCIauoqk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://www.prismetric.com/wp-content/uploads/2023/04/cost-to-develop-an-agriculture-app.jpg"
                     height="181px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Farming App</h3>
                <p className="project-category">Mobile Prototype in figma</p>
              </a>
            </li>
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://next-portfolio-tan-six.vercel.app/"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://assets.recogmedia.net/1/139/Entry_Uploads/290064-thumb.jpg"
                     height="181px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Portfolio-Motion Framer</h3>
                <p className="project-category">React development</p>
              </a>
            </li>
          <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://swiggy-clone-chi-lac.vercel.app/"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/1*qvhMfaZBh8cHOuOJP2myTA.png"
                     height="161px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Swiggy UI</h3>
                <p className="project-category">React development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://next-1-chi.vercel.app/"  rel="noreferrer">
                <figure className="project-img" >
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://ui.aceternity.com/banner.png"
                     height="161px"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Aceternity UI</h3>
                <p className="project-category">Next development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://sauravbag101.github.io/Forcast_weather/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />


                  </div>
                  <img
                    src="https://www.gconnect.in/gc22/wp-content/uploads/2024/09/imd-weather-forecast.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Weather Forcast</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a  target="_blank" href="https://sauravbag101.github.io/Todo_List/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*qHb-LP4DHAefe1UBGGcnnA.png"
                    alt="orizon"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Todo List</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web design"
            >
              <a target="_blank" href="https://sauravbag101.github.io/User_Pwd-Generator/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CsH17mL6pz_6OgKkLxMU93VwAs80vZkDlQ&s"
                    alt="fundo"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">User Password Generator</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="applications"
            >
              <a target="_blank" href="https://sauravbag101.github.io/Music_Player/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://png.pngtree.com/png-vector/20221116/ourmid/pngtree-music-player-interface-button-png-image_6449167.png"
                    alt="brawlhalla"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Music Player</h3>
                <p className="project-category">Applications</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web design"
            >
              <a target="_blank" href="https://sauravbag101.github.io/harmor_Homepage/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4oU5izcPm4-ZRC1MpxV8Nt_WUV_QjZlUB3Q&s"
                    alt="dsm."
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Harmor Website Page</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web design"
            >
              <a target="_blank" href="https://sauravbag101.github.io/Rock_game/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9l8WA_3CYCH29r76wabCqhNGSolJZOZgVw&s"
                    alt="metaspark"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Rock Paper scissor</h3>
                <p className="project-category">Web design</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              <a target="_blank" href="https://sauravbag101.github.io/MCQ_submission/"  rel="noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR1XacAmJKNjKoDVGm8e3ompGXV9EyqMuUw&s"
                    alt="summary"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">MCQ Test Modal</h3>
                <p className="project-category">Web development</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="applications"
            >
              <a href="https://sauravbag101.github.io/Official_Portfolio/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <GoLinkExternal href='' />
                  </div>
                  <img
                    src="https://i0.wp.com/curiositygym.com/wp-content/uploads/2022/05/portfolio1.jpg?fit=1920%2C1080&ssl=1"
                    alt="task manager"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Simple Portfolio</h3>
                <p className="project-category">HTML,CSS,Javascript</p>
              </a>
            </li>
            <li
              className="project-item  active"
              data-filter-item=""
              data-category="web development"
            >
              {/* <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline" />
                  </div>
                  <img
                    src="./assets/images/project-9.png"
                    alt="arrival"
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">Arrival</h3>
                <p className="project-category">Web development</p>
              </a> */}
            </li>
          </ul>
        </section>
      
      {/*
  - #BLOG
*/}
      
      {/*
  - #CONTACT
*/}
      
    </div>
  </main>
  {/*
    - custom js link
  */}
  {/*
    - ionicon link
  */}
</>


        </div>
    )
}

export default Portfolio