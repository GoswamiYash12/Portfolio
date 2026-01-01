const sideMenu = document.querySelector('#sideMenu');
const navBAr =  document.querySelector("nav");
const navLinks =  document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform ='translateX(-16rem)';
}

function closeMenu(){
    sideMenu.style.transform ='translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBAr.classList.add('bg-white/50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.remove('bg-white/50', 'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent');
    }
    else{
        navBAr.classList.remove('bg-white/50', 'backdrop-blur-lg', 'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
        navLinks.classList.add('bg-white/50', 'shadow-sm','dark:border','dark:border-white/50','dark:bg-transparent');
    }
}) 

// ------------------light & dark mode-------------------
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

function toggleTheme(){
document.documentElement.classList.toggle('dark');    

    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }
}