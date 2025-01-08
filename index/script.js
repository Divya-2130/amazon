const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');
let n=0;
function changeSlide() {
    for (let i=0; i<imgs.length; i++) {
        imgs[i].style .display ='none'; /**to hiddenthe all the images */
    }
    imgs[n].style.display='block';
}
changeSlide();
prev_btn.addEventListener('click', (e)=>{
    if(n>0) {
        /*it will decreases the n value to get the previous images  */
        n--; 
    }else{
        n=imgs.length-1;
         /*if n is not >0 means this all will happen -->if you are on the first imange then if we click on the prev_btn then it will show the last image */
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1) {
        /*it will incerases the n value to get the next image -->it will happen when n is less than the 
          image length is n=8,then n++ */
        n++;
    }else{
        n=0;
    }
    changeSlide();
})
const scrollContainer =document.querySelectorAll('.products');
for (const item of scrollContainer ) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault(); //not madatory for but we can
        item.scrollLeft+=evt.deltaY;
    });
}
