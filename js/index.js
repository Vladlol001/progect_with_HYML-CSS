let sidebar = document.querySelector('.sidebar');
let burger = document.querySelector('.burger');

burger.onclick = function(){
  sidebar.classList.toggle('sidebar');
  let width = window.innerWidth;
  if(width <= 376){
    burger.classList.toggle('burger2');
  }
}
