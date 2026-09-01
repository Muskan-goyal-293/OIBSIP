const signUpForm = document.querySelector(".signUpForm");
const userName = document.querySelector(".userName");
const email= document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");
const signUpA =document.querySelector(".signUpA");
const loginA = document.querySelector(".loginA");
const login = document.querySelector(".login");
const signUp = document.querySelector(".signUp");
const aiContent = document.querySelector(".aiContent");

let inputValue =[];
function formPrevent(e){
    e.preventDefault();
}

signUpA.addEventListener("click", ()=>{
login.style.display ="block";
signUp.style.display = "none";
})

loginA.addEventListener("click",()=>{
signUp.style.display = "block";
    login.style.display ="none";
})


signUpForm.addEventListener("submit",(e)=>{
    formPrevent(e);
    const userNameValue = userName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    console.log(userNameValue , emailValue , passwordValue , confirmPasswordValue)
 
      if(userNameValue.trim() == "" || emailValue.trim() == "" || passwordValue.trim == "" || confirmPasswordValue.trim() == ""){
       return;
      }     

      if(userNameValue.trim().length < 3){
        alert("please enter more then 2 word");
     return;  
    }

      if(!emailValue.includes("@")){
        alert("email must be include @");
    return;  
    }
      if(!emailValue.endsWith(".com")){
        alert("email must be end with .COM");  
    return;  
    }
      if(passwordValue.length < 8){
    alert("Password must be at least 8 characters");
    return;
}

if(!/[A-Z]/.test(passwordValue)){
    alert("Password must contain one uppercase letter");
    return;
}

if(!/[a-z]/.test(passwordValue)){
    alert("Password must contain one lowercase letter");
    return;
}

if(!/[0-9]/.test(passwordValue)){
    alert("Password must contain one number");
    return;
}

if(!/[!@#$%^&*(){}[\]]/.test(passwordValue)){
    alert("Password must contain one special character");
    return;
}


if(passwordValue !== confirmPasswordValue){
    alert("password and confirm password must be match");
    return
}

inputValue.push({
    name : userNameValue,
    password : passwordValue,
    confirmPassword : confirmPasswordValue,
    email : emailValue
})

localStorage.setItem("userinfo",JSON.stringify(inputValue));

userName.value = "";
confirmPassword.value ="";
password.value = "";
email.value = "";

signUp.style.display = "none"
aiContent.style.display ="block"

})

const loginEmail = document.querySelector(".loginEmail");
const loginPassword = document.querySelector(".loginPassword");
const loginForm = document.querySelector(".loginForm");


loginForm.addEventListener("submit",(e)=>{
    formPrevent(e);
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();
    let inputLocalStorageValue =JSON.parse(localStorage.getItem("userinfo"));
    inputLocalStorageValue.forEach((val)=>{
        console.log(emailValue , passwordValue  , val.email , val.password)
        if(val.email === emailValue && val.password === passwordValue){
          signUp.style.display ="none"
            login.style.display = "none";
            aiContent.style.display = "block";
          localStorage.setItem("isLoggedIn", true);
        }

        
        if(val.email  !== emailValue){
            alert("email not match");
            return;
        }

        if(val.password !== passwordValue){
            alert("password not match");
            return;
        }

    })

   loginEmail.value ="";
   loginPassword.value =""; 

})

const logout = document.querySelector("#logout");
let isLoggedIn = localStorage.getItem("isLoggedIn");

logout.addEventListener("click" ,()=>{
    localStorage.removeItem("isLoggedIn");
          signUp.style.display ="none"
            login.style.display = "block";
            aiContent.style.display = "none";


})

