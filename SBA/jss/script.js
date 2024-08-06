function toggleNavBar() {
  var x = document.getElementById("myNav");
  x.classList.toggle("responsive");
  
  var icon = x.querySelector(".icon");
  icon.classList.toggle("active");



  // Reset dropdown state when closing the burger menu
  if (!x.classList.contains("responsive")) {
    var dropdowns = x.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      dropdown.classList.remove('active');
    });
  }
}

var nav = document.getElementById("myNav");
  nav.addEventListener('click', function(e) {
    if (window.innerWidth <= 967) {
      var dropdownBtn = e.target.closest('.dropdown-btn');
      console.log('click!');
      if (dropdownBtn) {
        e.preventDefault();
        var dropdown = dropdownBtn.closest('.dropdown');
        dropdown.classList.toggle('active');
      }
    }
  });







