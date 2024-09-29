const hamburguer=document.querySelector('.hamburguer')
const imgLupa=document.querySelector('.img-lupa')
const input=document.querySelector('.icons input')


//função acionada ao retirar o foco do input através do onblur no HTML
function fecharInput(){
    input.style.display='none'
}

function clickHamburguer(img,link,navbar){
    img.src='https://img.icons8.com/ios-filled/30/FFFFFF/x.png'
    link.classList.add('aClick')
    link.classList.add('linkClick')
    navbar.classList.add('navbarClick') 
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

imgLupa.addEventListener('click',()=>{
    input.style.display='inline'
    input.focus() 
})

