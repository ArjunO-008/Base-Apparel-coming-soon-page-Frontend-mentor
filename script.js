const sbtBtn = document.getElementById('sbtBtn');
const userEmail = document.getElementById('userEmail');

sbtBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    if(userEmail.value === ''){
       userEmail.parentElement.style.border = "1px solid var(--DesaturatedRed)"
       userEmail.parentElement.firstElementChild.nextElementSibling.style.display = "block"
    }

    if(isValid(userEmail.value)){
        window.location.reload();

    }else{
        erroeMsg.innerText = `"Please provide a valid email address"`
        userEmail.style.outline = "1px solid var(--LightRed)";       
    }

})
function detectChange(){
    userEmail.parentElement.style.border = "1px solid var(--SoftRed)"
    userEmail.parentElement.firstElementChild.nextElementSibling.style.display = "none" 
}



function isValid(email){
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}