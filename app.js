
//Move animate
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const book = document.querySelector('.book img');
const button = document.querySelector('.button');



container.addEventListener('mousemove', (e)=>{
    let xAxis=(window.innerWidth/ 2 - e.pageX)/10;
    let yAxis=(window.innerHeight/ 2 - e.pageY)/20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `;
});


//animate in
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = 'none';
    //3d effect
    title.style.transform = 'translateZ(100px)';
    book.style.transform = 'translateZ(170px)';
    button.style.transform = 'translateZ(60px)';
});



//animate out
container.addEventListener('mouseleave', (e)=>{
    card.style.transition= 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    book.style.transform = 'translateZ(0px)';
    button.style.transform = 'translateZ(0px)';
});