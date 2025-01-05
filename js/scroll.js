$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 2000);
return false;
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});

  const d = new Date()
  let currentYear = d.getFullYear()
  document.getElementById('current-year').textContent = currentYear

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((menuItem)=> {
      menuItem.addEventListener('click', function(event){          
        let menubtn =  this.parentElement.parentElement.parentElement.previousElementSibling.getElementsByTagName('button');
        menubtn[0].setAttribute('aria-expanded', 'false');
        menubtn[0].classList.add('collapsed');
        document.getElementById('myNavbar').classList.remove('in');
        document.getElementById('myNavbar').setAttribute('aria-expanded', 'false');
        document.getElementById('myNavbar').setAttribute('style', 'height: 1px;');  
      });
  })


$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots:false,
    nav:true,
    lazyLoad:true
});

});

