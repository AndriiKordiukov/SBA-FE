// ------------------------- NEWS ---------------------------
document.querySelectorAll('.news-card-toggle').forEach(button => {
  button.addEventListener('click', () => {
    // button.parentElement.classListtoggle('active');
    button.classList.toggle('active');
    button.previousElementSibling.classList.toggle('show');
    button.nextElementSibling.classList.toggle('show');
  });
});


// Hide button

document.querySelectorAll('#hide').forEach(button2 => {
  button2.addEventListener('click', () => {
    
    
    const hide = button2.parentElement;
    console.log(hide);
    hide.classList.remove('show');
    console.log(hide.parentElement.querySelector('.news-card-toggle'));
    hide.
      parentElement.
      querySelector('.news-card-toggle').
      classList.
      remove('active')
  });
});


// Modal pictures

function openModal(clickedImage) {
  console.log('click');
  var modal = document.getElementById("modal");
  var img = document.getElementById("modal-img");
  // var container = document.querySelector(".container");
  var container = clickedImage.parentElement;
  console.log(container);
  var overlay = document.getElementById("overlay");

  img.src = clickedImage.src;
  modal.style.display = "block";
  overlay.style.display = "block";
  
}

function closeModal() {
  var modal = document.getElementById("modal");
  var overlay = document.getElementById("overlay");

  modal.style.display = "none";
  overlay.style.display = "none";
}

// var overlayClick = document.
//   getElementById("overlay").
//   addEventListener('click', () => { 
//     console.log(click);
//     modal.style.display = "none";
//     overlay.style.display = "none";
//   });