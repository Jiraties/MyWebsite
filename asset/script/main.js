const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero,1,{height: "0%"},{height:"80%", ease: Power2.easeInOut}) 
   .fromTo(
    hero,
    1.2,
    {width: '100%'},
    {width: '80%', ease: Power2.easeInOut}
)
    .fromTo(
    slider,
    1.2,
    {x: "-100%"},
    {x:'0%' , ease: Power2.easeInOut},
    "-=1.2"
)
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x:0}, "-=0.5")

const header = document.querySelector("header");
let moreStatus = true;
let yesStatus = false;

window.addEventListener('scroll', function () {
const scrollTop = document.scrollingElement.scrollTop;
console.log(scrollTop);
// scrollTop > 300 ? console.log("morethan 300") : console.log(`less than 300`)
if (scrollTop > 300 && moreStatus === true) {
  console.log("morethan 300");
  gone()
  yesStatus = true;
  moreStatus = false;
} else if (scrollTop < 300 && yesStatus === true) {
  console.log("yes");
  appear()
  moreStatus = true;
  yesStatus = false;
}
return
});

const gone = function () {
  tl.fromTo(
    hero,
    1.2,
    {width: '80%'},
    {width: '0%', ease: Power2.easeInOut}
)
  .fromTo(
      headline,
    0.5,
    {opacity: 1,},
    {opacity: 0},
    "-=1.2"
)
  .fromTo(
    slider,
    1.2,
    {x: "0%"},
    {x:'-100%' , ease: Power2.easeInOut},
    "-=.9"
)
return;
};

const appear = function () { 
  tl.fromTo(
    hero,
    1.2,
    {width: '0%'},
    {width: '80%', ease: Power2.easeInOut}
)
  .fromTo(
      headline,
    0.5,
    {opacity: 0,},
    {opacity: 1},
    "-=1.2"
)
  .fromTo(
    slider,
    1.2,
    {x: "-100%"},
    {x:'0%' , ease: Power2.easeInOut},
    "-=.9"
)
return;
};