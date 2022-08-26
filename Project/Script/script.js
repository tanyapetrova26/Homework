$('.company-items > div') .on('click', function(){
   $(this).children('.company_icon').toggleClass('company-rotate_icon');
   $(this).children('.company_subtitle').toggleClass('change-color');
   $(this).parents('.company-items').toggleClass('change-color');
   $(this).next('.company-text').slideToggle(300);

});


$('.Features-items > div') .on('click', function(){
   $(this).children('.Features_icon').toggleClass('Features-rotate_icon');
   $(this).children('.Features-items__title').toggleClass('change-color__Features');
   $(this).children('.Features__hr').toggleClass('change-color__hr');
   $(this).next('.Features-items__text').slideToggle(300);
   
})