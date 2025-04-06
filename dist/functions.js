function openSideNav(){
    let openSide = document.getElementById('openSideNav').classList.toggle('hidden');
    let closeside = document.getElementById('closeSideNav').classList.toggle('hidden');

}


const imageList = ["/dist/FOOD1.avif", "/dist/FOOD2.avif", "/dist/FOOD3-PASTA.avif", "/dist/FOOD4-CHICKEN.avif", "/dist/FOOD5-BEEF.avif"]

    let imageIndex = 0;
    const slide = document.getElementById('imgSlideshow');

function changeImage(){

  imageIndex = (imageIndex + 1) % imageList.length;
  slide.src = imageList[imageIndex];
   
}

setInterval(changeImage, 2000);


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
}

function hideModal(modal, overlay) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


// Loop through the array and set up modals dynamically
modals.forEach(modal => {
  setupModal(modal.openButtonId, modal.closeButtonId, modal.modalId, modal.overlayId);
});
