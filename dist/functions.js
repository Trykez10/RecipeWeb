// SLIDE ANIMATION ON BURGER BUTTON
function openSideNav(){
  const sideNav = document.getElementById('closeSideNav');

  if(sideNav.classList.contains('hidden')){
    sideNav.classList.remove('hidden');
  
    requestAnimationFrame(() => {
      sideNav.classList.remove('opacity-0', 'translate-x-5');
      sideNav.classList.add('opacity-100', 'translate-x-0');
    });
    
  }  else{
    sideNav.classList.remove('opacity-100', 'translate-x-0');
    sideNav.classList.add('opacity-0', 'translate-x-5');

    setTimeout(() => {
      sideNav.classList.add('hidden');
    }, 200);
  }
}

// SLIDESHOW IMAGE
const imageList = ["./ImageFolder/FOOD1.avif", "./ImageFolder/FOOD2.avif", "./ImageFolder/FOOD3-PASTA.avif", "./ImageFolder/FOOD4-CHICKEN.avif", "./ImageFolder/FOOD5-BEEF.avif"]

    let imageIndex = 0;
    const slide = document.getElementById('imgSlideshow');

function changeImage(){

  imageIndex = (imageIndex + 1) % imageList.length;
  slide.src = imageList[imageIndex];
   
}

setInterval(changeImage, 2000);

// FOR MODAL CONTENT, ANIMATIOSN, AT IBA PA.
var modals = [
  { openButtonId: 'seeRecipeButton1', closeButtonId: 'closeModalButton1', modalId: 'seeRecipe1', overlayId: 'overlay1' },
  { openButtonId: 'seeRecipeButton2', closeButtonId: 'closeModalButton2', modalId: 'seeRecipe2', overlayId: 'overlay2' },
  { openButtonId: 'seeRecipeButton3', closeButtonId: 'closeModalButton3', modalId: 'seeRecipe3', overlayId: 'overlay3' },
  { openButtonId: 'seeRecipeButton4', closeButtonId: 'closeModalButton4', modalId: 'seeRecipe4', overlayId: 'overlay4' },
  { openButtonId: 'seeRecipeButton5', closeButtonId: 'closeModalButton5', modalId: 'seeRecipe5', overlayId: 'overlay5' },
  { openButtonId: 'seeRecipeButton6', closeButtonId: 'closeModalButton6', modalId: 'seeRecipe6', overlayId: 'overlay6' },
  { openButtonId: 'seeRecipeButton7', closeButtonId: 'closeModalButton7', modalId: 'seeRecipe7', overlayId: 'overlay7' },
  { openButtonId: 'seeRecipeButton8', closeButtonId: 'closeModalButton8', modalId: 'seeRecipe8', overlayId: 'overlay8' }
];

function setupModal(openButtonId, closeButtonId, modalId, overlayId) {

  document.getElementById(openButtonId).addEventListener('click', function(){
    showModal(document.getElementById(modalId), document.getElementById(overlayId));
  })

  document.getElementById(overlayId).addEventListener('click', function() {
    hideModal(document.getElementById(modalId), document.getElementById(overlayId));
  });

  document.getElementById(closeButtonId).addEventListener('click', function(){
    hideModal(document.getElementById(modalId), document.getElementById(overlayId));
  });

  document.getElementById(modalId).addEventListener('click', function(event){
    if(event.target == this){
      hideModal(document.getElementById(modalId), document.getElementById(overlayId));
    }
  });

}

function showModal(modal, overlay) {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  overlay.classList.remove('hidden');


  const modalContent = modal.querySelector('div');

  requestAnimationFrame(() => {
    modalContent.classList.remove('opacity-0', 'scale-95');
    modalContent.classList.add('opacity-100', 'scale-100');

  })

}

function hideModal(modal, overlay) {
  const modalContent = modal.querySelector('div');

  modalContent.classList.remove('opacity-100', 'scale-100');
  modalContent.classList.add('opacity-0', 'scale-95');

  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 100);
}


// Loop through the array and set up modals dynamically
modals.forEach(modal => {
  setupModal(modal.openButtonId, modal.closeButtonId, modal.modalId, modal.overlayId);
});
