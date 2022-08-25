$('.company-items > div') .on('click', function(){
   $(this).children('.company_icon').toggleClass('company-rotate_icon');
   $(this).children('.company_subtitle').toggleClass('change-color');
   $(this).parent('.company-items').toggleClass('change-color');
   $(this).next('.company-text').slideToggle(300);

})