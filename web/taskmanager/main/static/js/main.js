/*let lastScroll = 0;
const defaultOffset = 1;
const header = document.querySelector(".header");

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop

const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {

  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    console.log("down")
    header.classList.add("hide")
  }
  else if(scrollPosition() < lastScroll && containHide()) {
    // scroll up
    console.log("up")
    header.classList.remove("hide")
  }

  lastScroll = scrollPosition()

})*/

// "use strict";
//
// var sttElem = document.querySelector('.stt');
// var screanHeight = window.innerHeight;
// 
// var sttScroll = function sttScroll() {
//   document.addEventListener('scroll', function (e) {
//     if (screanHeight <= window.scrollY) {
//       sttElem.classList.add('stt__active');
//     } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
//       sttElem.classList.remove('stt__active');
//       sttElem.style.pointerEvents = 'auto';
//     }
//   });
// };
//
// var sttClick = function sttClick() {
//   sttElem.addEventListener('click', function () {
//     var docHeight = window.scrollY;
//     var progress = 0;
//     var position = docHeight;
//     var speed = 5; // When increasing this value. The scrolling speed will increase
//
//     sttElem.style.pointerEvents = 'none';
//
//     var sttAnim = function sttAnim() {
//       progress += 1;
//       position -= progress * speed;
//       window.scrollTo(0, position);
//
//       if (position > 0) {
//         requestAnimationFrame(sttAnim);
//       }
//     };
//
//     requestAnimationFrame(sttAnim);
//   });
// };
//
// var sttFunc = function sttFunc() {
//   sttScroll();
//   sttClick();
// };
//
// document.addEventListener('DOMContentLoaded', sttFunc);
