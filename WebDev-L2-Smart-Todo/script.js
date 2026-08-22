// hero section animation
const hero = document.querySelector(".hero");
const heroH1 = document.querySelector(".hero h1");
const text = heroH1.innerText.split("");

function textRevealAnimation(){
let sum = "";
text.forEach((elem) => {
  sum += `<span>${elem} </span>`;
});
hero.innerHTML = sum;

const heroSpan = document.querySelectorAll(".hero span");
let count = 0;
let interval = null;
text.forEach((val) => {
  clearInterval(interval);
  
  interval = setInterval(() => {
heroSpan[count].style.transform = `translateY(${0}%)`;
heroSpan[count].style.opacity =1
console.log(heroSpan[count])
    count++;
    if (count > text.length - 1) {
      clearInterval(interval);
    }
  }, 250);
});
}
// textRevealAnimation()


// theme related code
const themeObject = {
  Purple_Dream: {
    first: "#8672A5",
    sec: "#B59BDD",
    third: "#321740",
    four: "#F5F5F5",
  },
  Deep_Teal: {
    first: "#82B3AA",
    sec: "#4B6D6E",
    third: "#04252E",
    four: "#F5F5F5",
  },
  Ocean_Blue: {
    first: "#3B6EA1",
    sec: "#345576",
    third: "#121E2B",
    four: "#F5F5F5",
  },
  Rose_Berry: {
    first: "#C9A0AC",
    sec: "#D67887",
    third: "#983A4E",
    four: "#F5F5F5",
  },
  Coffee_Brown: {
    first: "#D0A579",
    sec: "#92756B",
    third: "#442624",
    four: "#F5F5F5",
  },
};
const root = document.documentElement;
const themeValue = localStorage.getItem("theme") || "Purple_Dream";
const select = document.querySelector("select");

function colorChange(themeValue){
root.style.setProperty("--first" , themeObject[themeValue].first)
root.style.setProperty("--sec" , themeObject[themeValue].sec)
root.style.setProperty("--third" , themeObject[themeValue].third)
root.style.setProperty("--four" , themeObject[themeValue].four)
}
colorChange(themeValue)

select.addEventListener("change",()=>{
    localStorage.setItem("theme" , select.value)
    colorChange(select.value); 
})


// info section related array [month , days , thought]

const infoSectionTextArray =[
"“Plan it. Do it. Achieve it.” ✨",
"“Turn your plans into progress.” 🚀",
"“One task at a time, one goal at a time.” 🌱",
"“Your tasks, your goals, your way.” 💫",
"“Organize your day, simplify your life.” 📝",
"“Make today productive.” ⚡",
"“Small tasks. Big achievements.” 🔥",
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// get current time ,date 
const now = new Date();
const currentDate = now.getDate();
const currentYear = now.getFullYear();
const currentMonth = months[now.getMonth()];
const currentDay = days[now.getDay()];
const currentTime = now.getHours();
const currentMin = now.getMinutes();
const currentSec = now.getSeconds();

// add zero in starting

function addZero(current){    
    if(current < 9){
     return  current =`0${current}`
    }
    else{
    return  current
    }
   }

const hour = addZero( currentTime);
const min = addZero( currentMin);
const sec =addZero( currentSec);

// select dom element
const date = document.querySelector(".date");
const time = document.querySelector(".time");
const day = document.querySelector(".day");
const greet = document.querySelector(".greet");
const thought = document.querySelector(".thought");

// insert data
date.innerHTML =`${currentDate}\ ${currentMonth} \ ${currentYear}`;
time.innerHTML =`${hour} : ${min} : ${sec}`;
day.innerHTML = currentDay

let greetValue ="";
currentTime >=5 && currentTime < 12 ? greetValue ="🌅 Good Morning" : 
currentTime >=12 && currentTime <17 ? greetValue ="☀️ Good Afternoon":
currentTime >=17 && currentTime <21 ? greetValue ="🌇 Good Evening" :
greetValue ="🌙 Good Night"
greet.innerHTML = greetValue;

// show random thought
function thoughtShow(){
    let random = Math.floor(Math.random()*infoSectionTextArray.length-1)+1
 thought.innerHTML = infoSectionTextArray[random]
}
thoughtShow()


// Selection
const todoSection = document.querySelector(".todoSection");
const todo = document.querySelector(".todo")
const todoBackButton = document.querySelector("#todoBackButton");


//  show and hide page code

function showPage(elem , page){
elem.addEventListener("click", ()=>{
page.classList.add("show");
})
}
showPage(todoSection , todo)


function hidePage( button,page){
button.addEventListener("click",()=>{
  page.classList.remove("show");
  page.classList.add("back")
})
}

hidePage(todoBackButton , todo);

// todo related code


