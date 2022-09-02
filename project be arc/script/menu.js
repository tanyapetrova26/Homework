let hmbrgr_menu_cnt = document.querySelector('.hmbrgr_menu_cnt');
let menu_all = document.querySelector('.menu_all');
hmbrgr_menu_cnt.addEventListener('click', function(){
	hmbrgr_menu_cnt.classList.toggle('open');
	menu_all.classList.toggle('active');
})

