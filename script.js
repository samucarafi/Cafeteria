const hamburguer=document.querySelector('.hamburguer')

function clickHamburguer(img,link,navbar){
    img.src='https://img.icons8.com/ios-filled/30/FFFFFF/x.png'
    link.classList.add('aClick')
    link.classList.add('linkClick')
    navbar.classList.add('navbarClick')
    hamburguer.style.textAlign='end' 
}
function clickX(img,link,navbar){
    img.src='https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png'
    link.classList.remove('aClick')
    link.classList.remove('linkClick')
    navbar.classList.remove('navbarClick')
}


hamburguer.addEventListener('click',()=>{
    const img=document.querySelector('.hamburguer img')
    const link=document.querySelector('.link')
    const navbar=document.querySelector('.navbar')

    if(img.src=="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v1.png"){
        clickHamburguer(img,link,navbar)
    }else{
        clickX(img,link,navbar)
    }
})