const showBtn=document.querySelector(".show-btn");
const closeBtn=document.querySelector(".close-btn");
const contentDiv=document.querySelector(".view-content-container");
showBtn.addEventListener("click",()=>{
    contentDiv.classList.add("animate-view-content")
})
closeBtn.addEventListener("click",()=>{
    contentDiv.classList.remove("animate-view-content")
})
