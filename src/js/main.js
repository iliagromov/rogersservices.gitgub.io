let servicesSlider = document.querySelector('.services .page__btn');
let wrapSlider = document.querySelector('.services-items-wrapper')
// let w = 10;
let w = (wrapSlider.scrollWidth / 6) / 2;
servicesSlider.addEventListener('click', (e)=>{
    let el = e.target;
   
    if(wrapSlider.scrollLeft <= 419){
        wrapSlider.scrollLeft = w;
        w += w + 100;
    }else{
        w = 0;
        wrapSlider.scrollLeft = w;
    }
    
});