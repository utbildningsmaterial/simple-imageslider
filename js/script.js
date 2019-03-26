
let containerWidth = document.querySelector('.container').offsetWidth,
    numOfImages = document.querySelector('.slider').childElementCount,
    activeSlide = 0,
    animationTime = 400;


// Create pager
for(let i=0; i<numOfImages; i++){

    let el = document.createElement('li');
    
    document.querySelector('.pager').appendChild(el);

}



let animate = () => {
    
    // Slide
    anime({
        targets: '.slider',
        duration: animationTime,
        translateX: -(activeSlide*containerWidth),
        easing: 'easeInOutQuad',
        complete: () => {
            console.log('Animeringen klar!')
        }
    });

    updatePager();

}

let updatePager = () => {

    // pager
    document.querySelectorAll('.pager li').forEach(el => {
        el.classList.remove('active');
    });

    document.querySelector(`.pager li:nth-child(${activeSlide+1})`).classList.add('active');
}

// Set slider width
document.querySelector('.slider').style.width = `${containerWidth*numOfImages}px`;


document.querySelector('#prev').addEventListener('click', () => {
    // Prev
    if(activeSlide > 0){
        // OK
        activeSlide--

        // Animera
        animate();


    } else {
        activeSlide = numOfImages-1;
        animate();
    }

})

document.querySelector('#next').addEventListener('click', () => {

    if(activeSlide < numOfImages-1) { 
        
        activeSlide++

        // Animera
        animate();

    } else {
        activeSlide = 0;
        animate();
    }
})

document.querySelector('article').addEventListener('click', () => {

    let loop = setInterval(() => {
        
        if(activeSlide < numOfImages-1) { 
        
            activeSlide++
    
            // Animera
            animate();
    
        } else {
            activeSlide = 0;
            animate();
        }

    }, 3000)

})

updatePager();