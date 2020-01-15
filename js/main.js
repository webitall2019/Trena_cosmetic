// document.addEventListener('readystatechange', function(){
//   swal("it's demo page", "some option are not avaliable ","success");
// });

let navLi = document.querySelectorAll('.navigation li a');
let subMenu = document.querySelector('.navigation__sub-menu');
let nav = document.querySelector('.navigation');

function showSub(){
 
  for(let i = 0; i<navLi.length; i++){
   
    if(navLi[i].childNodes[1]){
      navLi[i].addEventListener('mouseover', function(event){ 
        target = event.target;
        
        if(target == navLi[i] || navLi[i].childNodes[1]){
          subMenu.classList.add('show');
         
        }
        else {
          alert(3123);
          subMenu.classList.remove('show');
          
        }
       
      })
    }
          
  }
}
showSub();
subMenu.addEventListener('mouseleave', function(event){
  subMenu.classList.remove('show');
  let target = event.target;
  if(target == nav){
    subMenu.classList.remove('show');
  }
})

$('.front-banner__slider').slick({
  fade: true,
  nextArrow: '<i class="far fa-arrow-circle-right"></i>',
  prevArrow: '<i class="far fa-arrow-circle-left"></i>'
});


let advanceAccordionItem = document.querySelectorAll('.accordion');
let footerAccordionItem = document.querySelectorAll('.footer__item ul');
window.addEventListener('resize', function(){
  if(window.innerWidth < 767){
    for(let i = 0 ; i < advanceAccordionItem.length; i++){
      advanceAccordionItem[i].classList.add('collapse');
      footerAccordionItem[i].classList.add('collapse');
    }
  }
});



let arrowRight = document.querySelector('.fa-arrow-circle-right');
let arrowLeft = document.querySelector('.fa-arrow-circle-left');
let slider = document.querySelector('.front-banner__slider');

slider.addEventListener('mouseover', function(){
  arrowRight.style.transform= 'scale(1)';
  this.addEventListener('mouseleave', function(){
    arrowRight.style.transform= 'scale(0)';
    
  })
 
  arrowLeft.style.transform= 'scale(1)';
  this.addEventListener('mouseleave', function(){
    arrowLeft.style.transform= 'scale(0)';
  })
})

let cart767 = document.querySelector('.cart767');
let mobileMenu =  document.querySelector('.mobile-menu');
let mobileMenuHeaderArrow =  document.querySelector('.fa-chevron-right'); 
let mobileIcon=  document.querySelector('.mobile-icon');

const mobCartIcon = document.querySelector('.side-cart');
let mobCartMenu = document.querySelector('.mobile-cart');
let mobCartClose = document.querySelector('.mobile-cart__header .fa-chevron-right');
let bodyWrap = document.querySelector('.body-wrap');

function showMobileCart(mobCartIcon){
  var cart = mobCartIcon;
      cart.addEventListener('click', function(){  
      
        mobCartMenu.classList.add('mobile-cart-active');
          if(mobCartMenu.classList.contains('mobile-cart-active')){
            bodyWrap.style.display = 'block';
            mobCartClose.addEventListener('click', function(){
              mobCartMenu.classList.remove('mobile-cart-active');
                bodyWrap.style.display = 'none';
            })
            bodyWrap.addEventListener('click', function(e){
            
              if(e.target !== mobCartMenu )
                {
                  this.style.display = 'none';
                  mobCartMenu.classList.remove('mobile-cart-active');
                  
                }
            })
          }
        })
    
}
showMobileCart(mobCartIcon);
  if(window.innerWidth < 768){
    showMobileCart(cart767);
  }
function showMobileMenu(){
  
    if(window.innerWidth < 767){
      mobileIcon.addEventListener('click', function(){
        bodyWrap.style.display = 'block';
        mobileMenu.classList.add('mobile-menu-active');

        bodyWrap.addEventListener('click', function(e){
          if(e.target !== mobileMenu )
            {
              this.style.display = 'none';
              mobileMenu.classList.remove('mobile-menu-active');
              
            }
        })
      })
      mobileMenuHeaderArrow.addEventListener('click', function(){
        mobileMenu.classList.remove('mobile-menu-active');
        bodyWrap.style.display = 'none';
      })      
    }
    else{
      mobileMenu.classList.remove('mobile-menu-active');
      bodyWrap.style.display = 'none';
    }
  
}
showMobileMenu();

let mobileMenuContent = document.querySelectorAll('.mobile-menu__item a');
let mobileMenuPlus = document.querySelectorAll('.mobile-menu__item i');
function changePLus(){
 for(let i=0; i < mobileMenuPlus.length; i++){
  mobileMenuPlus[i].addEventListener('click', function(){
    mobileMenuPlus[i].classList.toggle('fa-plus');
    mobileMenuPlus[i].classList.add('fa-minus');
  })
  
 }
};
changePLus();
