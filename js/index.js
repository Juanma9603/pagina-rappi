const navSlide = () =>{
    const burger = document.querySelector('.burger');
    console.log(burger);
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click',() =>{
        console.log('hola mundo click');
    burger.classList.toggle('close');
    nav.classList.toggle('nav-active');    
    } );

}
navSlide();