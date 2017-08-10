document.addEventListener("DOMContentLoaded", function(event){
  let sidebarNav = document.querySelectorAll('.sidebar-nav li');
  sidebarNav.forEach((el) => {
    el.addEventListener('click', function(event) {
      let inner = el.innerText.toLowerCase();
      window.location.hash = inner;
    });
  });
});
