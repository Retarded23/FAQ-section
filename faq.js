const acc=document.querySelectorAll(".accordian");

acc.forEach(accord =>{
    const icon = accord.querySelector(".icon");
    const  ans =accord.querySelector('.answer');


    accord.addEventListener('click',()=>{
        icon.classList.toggle('active')
        ans.classList.toggle('active')
    })
} )